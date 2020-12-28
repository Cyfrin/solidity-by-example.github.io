// metadata
export const version = "0.5.16"
export const title = "Bi-Directional Payment Channel"
export const description = "An example of bi-directional payment channels in Solidity"

const html = `<p>Bi-directional payment channels allow participants <code>Alice</code> and <code>Bob</code> to repeatedly transfer Ether off chain.</p>
<p>Payments can go both ways, <code>Alice</code> pays <code>Bob</code> and <code>Bob</code> pays <code>Alice</code>.</p>
<pre><code class="language-solidity"><span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.5.16;</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">experimental</span> <span class="hljs-built_in">ABIEncoderV2</span>;</span>

<span class="hljs-comment">/*
Opening a channel
1. Alice and Bob fund a multi-sig wallet
2. Precompute payment channel address
3. Alice and Bob exchanges signatures of initial balances
4. Alice and Bob creates a transaction that can deploy a payment channel from
   the multi-sig wallet

Update channel balances
1. Repeat steps 1 - 3 from opening a channel
2. From multi-sig wallet create a transaction that will
   - delete the transaction that would have deployed the old payment channel
   - and then create a transaction that can deploy a payment channel with the
     new balances

Closing a channel when Alice and Bob agree on the final balance
1. From multi-sig wallet create a transaction that will
   - send payments to Alice and Bob
   - and then delete the transaction that would have created the payment channel

Closing a channel when Alice and Bob do not agree on the final balances
1. Deploy payment channel from multi-sig
2. call challengeExit() to start the process of closing a channel
3. Alice and Bob can withdraw funds once the channel is expired
*/</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/math/SafeMath.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/cryptography/ECDSA.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BiDirectionalPaymentChannel</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">SafeMath</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">uint</span></span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ChallengeExit</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> sender, <span class="hljs-keyword">uint</span> nonce</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> amount</span>)</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">public</span> users;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> isUser;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balances;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> challengePeriod;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> expiresAt;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> nonce;

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">checkBalances</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances</span>) </span>{
        <span class="hljs-built_in">require</span>(
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span> &gt;= _balances[<span class="hljs-number">0</span>].add(_balances[<span class="hljs-number">1</span>]),
            <span class="hljs-string">"balance of contract must be &gt;= to the total balance of users"</span>
        );
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> deposit from multi-sig wallet</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _users,
        <span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint</span> _expiresAt,
        <span class="hljs-keyword">uint</span> _challengePeriod
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title">checkBalances</span>(<span class="hljs-params">_balances</span>) </span>{
        <span class="hljs-built_in">require</span>(_expiresAt &gt; <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, <span class="hljs-string">"Expiration must be &gt; now"</span>);
        <span class="hljs-built_in">require</span>(_challengePeriod &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"Challenge period must be &gt; 0"</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; _users.<span class="hljs-built_in">length</span>; i++) {
            <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> user = _users[i];

            <span class="hljs-built_in">require</span>(!isUser[user], <span class="hljs-string">"user must be unique"</span>);
            users[i] = user;
            isUser[user] = <span class="hljs-literal">true</span>;

            balances[user] = _balances[i];
        }

        expiresAt = _expiresAt;
        challengePeriod = _challengePeriod;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">verify</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _signatures,
        <span class="hljs-keyword">address</span> _contract,
        <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _signers,
        <span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint</span> _nonce
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; _signatures.<span class="hljs-built_in">length</span>; i++) {
            <span class="hljs-comment">/*
            <span class="hljs-doctag">NOTE:</span> sign with address of this contract to protect
                  agains replay attack on other contracts
            */</span>
            <span class="hljs-keyword">bool</span> valid = _signers[i] ==
                <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_contract, _balances, _nonce))
                    .toEthSignedMessageHash()
                    .recover(_signatures[i]);

            <span class="hljs-keyword">if</span> (!valid) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
            }
        }

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">checkSignatures</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _signatures,
        <span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint</span> _nonce
    </span>) </span>{
        <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> need to cast payable address to address type (not in 0.6)</span>
        <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> signers;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; users.<span class="hljs-built_in">length</span>; i++) {
            signers[i] = <span class="hljs-keyword">address</span>(users[i]);
        }

        <span class="hljs-built_in">require</span>(
            verify(_signatures, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), signers, _balances, _nonce),
            <span class="hljs-string">"Invalid signature"</span>
        );

        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">onlyUser</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(isUser[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"Not user"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">challengeExit</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint</span> _nonce,
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _signatures
    </span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyUser</span>
        <span class="hljs-title">checkSignatures</span>(<span class="hljs-params">_signatures, _balances, _nonce</span>)
        <span class="hljs-title">checkBalances</span>(<span class="hljs-params">_balances</span>)
    </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> &lt; expiresAt, <span class="hljs-string">"Expired challenge period"</span>);
        <span class="hljs-built_in">require</span>(_nonce &gt; nonce, <span class="hljs-string">"Nonce must be greater than the current nonce"</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; _balances.<span class="hljs-built_in">length</span>; i++) {
            balances[users[i]] = _balances[i];
        }

        nonce = _nonce;
        expiresAt = <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>.add(challengePeriod);

        <span class="hljs-keyword">emit</span> ChallengeExit(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, nonce);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">onlyUser</span> </span>{
        <span class="hljs-built_in">require</span>(
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> &gt;= expiresAt,
            <span class="hljs-string">"Challenge period has not expired yet"</span>
        );

        <span class="hljs-keyword">uint</span> amount = balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] = <span class="hljs-number">0</span>;

        (<span class="hljs-keyword">bool</span> sent, ) = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>.<span class="hljs-built_in">value</span>(amount)(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        <span class="hljs-keyword">emit</span> Withdraw(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount);
    }
}
</code></pre>
`

export default html
