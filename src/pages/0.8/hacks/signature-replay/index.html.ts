// metadata
export const version = "0.6.10"
export const title = "Signature Replay"
export const description =
  "An example of a contract vulnerable to signature replay attack"

const html = `<p>Signing messages off-chain and having a contract that requires that signature before executing
a function is a useful technique.</p>
<p>For example this technique is used to:</p>
<ul>
<li>reduce number of transaction on chain</li>
<li>gas-less transaction, called <code>meta transcation</code></li>
</ul>
<h3 id="vulnerability">Vulnerability</h3>
<p>Same signature can be used multiple times to execute a function. This can be harmful
if the signer&#39;s intention was to approve a transaction once.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.0;</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">experimental</span> <span class="hljs-built_in">ABIEncoderV2</span>;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/solc-0.8/contracts/cryptography/ECDSA.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiSigWallet</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">public</span> owners;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _owners</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owners = _owners;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title"><span class="hljs-built_in">transfer</span></span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _amount, <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
    </span>{
        <span class="hljs-keyword">bytes32</span> txHash = getTxHash(_to, _amount);
        <span class="hljs-built_in">require</span>(_checkSigs(_sigs, txHash), <span class="hljs-string">"invalid sig"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) = _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value:</span> _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTxHash</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_to, _amount));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_checkSigs</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs,
        <span class="hljs-keyword">bytes32</span> _txHash
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">bytes32</span> ethSignedHash = _txHash.toEthSignedMessageHash();

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; _sigs.<span class="hljs-built_in">length</span>; i++) {
            <span class="hljs-keyword">address</span> signer = ethSignedHash.recover(_sigs[i]);
            <span class="hljs-keyword">bool</span> valid = signer == owners[i];

            <span class="hljs-keyword">if</span> (!valid) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
            }
        }

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
}</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<p>Sign messages with <code>nonce</code> and address of the contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.0;</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">experimental</span> <span class="hljs-built_in">ABIEncoderV2</span>;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/solc-0.8/contracts/cryptography/ECDSA.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiSigWallet</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">public</span> owners;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bytes32</span> =&gt; <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> executed;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _owners</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owners = _owners;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title"><span class="hljs-built_in">transfer</span></span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _amount, <span class="hljs-keyword">uint</span> _nonce, <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
    </span>{
        <span class="hljs-keyword">bytes32</span> txHash = getTxHash(_to, _amount, _nonce);
        <span class="hljs-built_in">require</span>(!executed[txHash], <span class="hljs-string">"tx executed"</span>);
        <span class="hljs-built_in">require</span>(_checkSigs(_sigs, txHash), <span class="hljs-string">"invalid sig"</span>);

        executed[txHash] = <span class="hljs-literal">true</span>;

        (<span class="hljs-keyword">bool</span> sent, ) = _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value:</span> _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTxHash</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _amount, <span class="hljs-keyword">uint</span> _nonce</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _to, _amount, _nonce));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_checkSigs</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs,
        <span class="hljs-keyword">bytes32</span> _txHash
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">bytes32</span> ethSignedHash = _txHash.toEthSignedMessageHash();

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; _sigs.<span class="hljs-built_in">length</span>; i++) {
            <span class="hljs-keyword">address</span> signer = ethSignedHash.recover(_sigs[i]);
            <span class="hljs-keyword">bool</span> valid = signer == owners[i];

            <span class="hljs-keyword">if</span> (!valid) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
            }
        }

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
}

<span class="hljs-comment">/*
// owners
0xe19aea93F6C1dBef6A3776848bE099A7c3253ac8
0xfa854FE5339843b3e9Bfd8554B38BD042A42e340

// to
0xe10422cc61030C8B3dBCD36c7e7e8EC3B527E0Ac
// amount
100
// nonce
0
// tx hash
0x12a095462ebfca27dc4d99feef885bfe58344fb6bb42c3c52a7c0d6836d11448

// signatures
0x120f8ed8f2fa55498f2ef0a22f26e39b9b51ed29cc93fe0ef3ed1756f58fad0c6eb5a1d6f3671f8d5163639fdc40bb8720de6d8f2523077ad6d1138a60923b801c
0xa240a487de1eb5bb971e920cb0677a47ddc6421e38f7b048f8aa88266b2c884a10455a52dc76a203a1a9a953418469f9eec2c59e87201bbc8db0e4d9796935cb1b
*/</span></code></pre>
`

export default html
