// metadata
export const version = "0.6.10"
export const title = "Uni-Directional Payment Channel"
export const description = "An example of uni-directional payment channels in Solidity"

const html = `<p>Payment channels allow participants to repeatedly transfer Ether off chain.</p>
<p>Here is how this contract is used:</p>
<ul>
<li><code>Alice</code> deploys the contract, funding it with some Ether.</li>
<li><code>Alice</code> authorizes a payment by signing a message (off chain) and sends the signature to <code>Bob</code>.</li>
<li><code>Bob</code> claims his payment by presenting the signed message to the smart contract.</li>
<li>If <code>Bob</code> does not claim his payment, <code>Alice</code> get her Ether back after the contract expires</li>
</ul>
<p>This is called a uni-directional payment channel since the payment can go only in a signle direction from <code>Alice</code> to <code>Bob</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.6.10;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.0.0/contracts/math/SafeMath.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.0.0/contracts/cryptography/ECDSA.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v3.0.0/contracts/utils/ReentrancyGuard.sol"</span>;


<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniDirectionalPaymentChannel</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ReentrancyGuard</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">SafeMath</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">uint</span></span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> <span class="hljs-keyword">public</span> payer;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> <span class="hljs-keyword">public</span> payee;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> expiresAt;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _payee, <span class="hljs-keyword">uint</span> _expiresAt</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(_expiresAt &gt; <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, <span class="hljs-string">"Expiration must be &gt; now"</span>);

        payer = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        payee = _payee;

        expiresAt = _expiresAt;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">verify</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _signature,
        <span class="hljs-keyword">address</span> _payer,
        <span class="hljs-keyword">address</span> _contract,
        <span class="hljs-keyword">uint</span> _payeeBalance
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> sign with address of this contract to protect agains</span>
        <span class="hljs-comment">// replay attack on other contracts</span>
        <span class="hljs-keyword">return</span>
            <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_contract, _payeeBalance))
                .toEthSignedMessageHash()
                .recover(_signature) == _payer;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">checkSignature</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _signature, <span class="hljs-keyword">uint</span> _payeeBalance</span>) </span>{
        <span class="hljs-built_in">require</span>(
            verify(_signature, payer, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _payeeBalance),
            <span class="hljs-string">"Invalid signature"</span>
        );
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">close</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _payeeBalance, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _signature</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">nonReentrant</span>
        <span class="hljs-title">checkSignature</span>(<span class="hljs-params">_signature, _payeeBalance</span>)
    </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> == payee, <span class="hljs-string">"Not payee"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) = payee.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value:</span> _payeeBalance}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        <span class="hljs-built_in">selfdestruct</span>(payer);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">kill</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> == payer, <span class="hljs-string">"Not payer"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> &gt;= expiresAt, <span class="hljs-string">"channel not expired"</span>);
        <span class="hljs-built_in">selfdestruct</span>(payer);
    }
}
</code></pre>
`

export default html
