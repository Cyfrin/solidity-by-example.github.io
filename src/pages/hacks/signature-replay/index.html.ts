// metadata
export const version = "0.8.13"
export const title = "Signature Replay"
export const description =
  "An example of a contract vulnerable to signature replay attack"
export const codes = [
  {
    fileName: "PreventSigReplay.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmltcG9ydCAiZ2l0aHViLmNvbS9PcGVuWmVwcGVsaW4vb3BlbnplcHBlbGluLWNvbnRyYWN0cy9ibG9iL3JlbGVhc2UtdjQuNS9jb250cmFjdHMvdXRpbHMvY3J5cHRvZ3JhcGh5L0VDRFNBLnNvbCI7Cgpjb250cmFjdCBNdWx0aVNpZ1dhbGxldCB7CiAgICB1c2luZyBFQ0RTQSBmb3IgYnl0ZXMzMjsKCiAgICBhZGRyZXNzWzJdIHB1YmxpYyBvd25lcnM7CiAgICBtYXBwaW5nKGJ5dGVzMzIgPT4gYm9vbCkgcHVibGljIGV4ZWN1dGVkOwoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3NbMl0gbWVtb3J5IF9vd25lcnMpIHBheWFibGUgewogICAgICAgIG93bmVycyA9IF9vd25lcnM7CiAgICB9CgogICAgZnVuY3Rpb24gZGVwb3NpdCgpIGV4dGVybmFsIHBheWFibGUge30KCiAgICBmdW5jdGlvbiB0cmFuc2ZlcigKICAgICAgICBhZGRyZXNzIF90bywKICAgICAgICB1aW50IF9hbW91bnQsCiAgICAgICAgdWludCBfbm9uY2UsCiAgICAgICAgYnl0ZXNbMl0gbWVtb3J5IF9zaWdzCiAgICApIGV4dGVybmFsIHsKICAgICAgICBieXRlczMyIHR4SGFzaCA9IGdldFR4SGFzaChfdG8sIF9hbW91bnQsIF9ub25jZSk7CiAgICAgICAgcmVxdWlyZSghZXhlY3V0ZWRbdHhIYXNoXSwgInR4IGV4ZWN1dGVkIik7CiAgICAgICAgcmVxdWlyZShfY2hlY2tTaWdzKF9zaWdzLCB0eEhhc2gpLCAiaW52YWxpZCBzaWciKTsKCiAgICAgICAgZXhlY3V0ZWRbdHhIYXNoXSA9IHRydWU7CgogICAgICAgIChib29sIHNlbnQsICkgPSBfdG8uY2FsbHt2YWx1ZTogX2Ftb3VudH0oIiIpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0VHhIYXNoKAogICAgICAgIGFkZHJlc3MgX3RvLAogICAgICAgIHVpbnQgX2Ftb3VudCwKICAgICAgICB1aW50IF9ub25jZQogICAgKSBwdWJsaWMgdmlldyByZXR1cm5zIChieXRlczMyKSB7CiAgICAgICAgcmV0dXJuIGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKGFkZHJlc3ModGhpcyksIF90bywgX2Ftb3VudCwgX25vbmNlKSk7CiAgICB9CgogICAgZnVuY3Rpb24gX2NoZWNrU2lncyhieXRlc1syXSBtZW1vcnkgX3NpZ3MsIGJ5dGVzMzIgX3R4SGFzaCkKICAgICAgICBwcml2YXRlCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKGJvb2wpCiAgICB7CiAgICAgICAgYnl0ZXMzMiBldGhTaWduZWRIYXNoID0gX3R4SGFzaC50b0V0aFNpZ25lZE1lc3NhZ2VIYXNoKCk7CgogICAgICAgIGZvciAodWludCBpID0gMDsgaSA8IF9zaWdzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIGFkZHJlc3Mgc2lnbmVyID0gZXRoU2lnbmVkSGFzaC5yZWNvdmVyKF9zaWdzW2ldKTsKICAgICAgICAgICAgYm9vbCB2YWxpZCA9IHNpZ25lciA9PSBvd25lcnNbaV07CgogICAgICAgICAgICBpZiAoIXZhbGlkKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHJldHVybiB0cnVlOwogICAgfQp9CgovKgovLyBvd25lcnMKMHhlMTlhZWE5M0Y2QzFkQmVmNkEzNzc2ODQ4YkUwOTlBN2MzMjUzYWM4CjB4ZmE4NTRGRTUzMzk4NDNiM2U5QmZkODU1NEIzOEJEMDQyQTQyZTM0MAoKLy8gdG8KMHhlMTA0MjJjYzYxMDMwQzhCM2RCQ0QzNmM3ZTdlOEVDM0I1MjdFMEFjCi8vIGFtb3VudAoxMDAKLy8gbm9uY2UKMAovLyB0eCBoYXNoCjB4MTJhMDk1NDYyZWJmY2EyN2RjNGQ5OWZlZWY4ODViZmU1ODM0NGZiNmJiNDJjM2M1MmE3YzBkNjgzNmQxMTQ0OAoKLy8gc2lnbmF0dXJlcwoweDEyMGY4ZWQ4ZjJmYTU1NDk4ZjJlZjBhMjJmMjZlMzliOWI1MWVkMjljYzkzZmUwZWYzZWQxNzU2ZjU4ZmFkMGM2ZWI1YTFkNmYzNjcxZjhkNTE2MzYzOWZkYzQwYmI4NzIwZGU2ZDhmMjUyMzA3N2FkNmQxMTM4YTYwOTIzYjgwMWMKMHhhMjQwYTQ4N2RlMWViNWJiOTcxZTkyMGNiMDY3N2E0N2RkYzY0MjFlMzhmN2IwNDhmOGFhODgyNjZiMmM4ODRhMTA0NTVhNTJkYzc2YTIwM2ExYTlhOTUzNDE4NDY5ZjllZWMyYzU5ZTg3MjAxYmJjOGRiMGU0ZDk3OTY5MzVjYjFiCiovCg==",
  },
  {
    fileName: "SigReplay.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmltcG9ydCAiZ2l0aHViLmNvbS9PcGVuWmVwcGVsaW4vb3BlbnplcHBlbGluLWNvbnRyYWN0cy9ibG9iL3JlbGVhc2UtdjQuNS9jb250cmFjdHMvdXRpbHMvY3J5cHRvZ3JhcGh5L0VDRFNBLnNvbCI7Cgpjb250cmFjdCBNdWx0aVNpZ1dhbGxldCB7CiAgICB1c2luZyBFQ0RTQSBmb3IgYnl0ZXMzMjsKCiAgICBhZGRyZXNzWzJdIHB1YmxpYyBvd25lcnM7CgogICAgY29uc3RydWN0b3IoYWRkcmVzc1syXSBtZW1vcnkgX293bmVycykgcGF5YWJsZSB7CiAgICAgICAgb3duZXJzID0gX293bmVyczsKICAgIH0KCiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgZXh0ZXJuYWwgcGF5YWJsZSB7fQoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKAogICAgICAgIGFkZHJlc3MgX3RvLAogICAgICAgIHVpbnQgX2Ftb3VudCwKICAgICAgICBieXRlc1syXSBtZW1vcnkgX3NpZ3MKICAgICkgZXh0ZXJuYWwgewogICAgICAgIGJ5dGVzMzIgdHhIYXNoID0gZ2V0VHhIYXNoKF90bywgX2Ftb3VudCk7CiAgICAgICAgcmVxdWlyZShfY2hlY2tTaWdzKF9zaWdzLCB0eEhhc2gpLCAiaW52YWxpZCBzaWciKTsKCiAgICAgICAgKGJvb2wgc2VudCwgKSA9IF90by5jYWxse3ZhbHVlOiBfYW1vdW50fSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRUeEhhc2goYWRkcmVzcyBfdG8sIHVpbnQgX2Ftb3VudCkgcHVibGljIHZpZXcgcmV0dXJucyAoYnl0ZXMzMikgewogICAgICAgIHJldHVybiBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChfdG8sIF9hbW91bnQpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBfY2hlY2tTaWdzKGJ5dGVzWzJdIG1lbW9yeSBfc2lncywgYnl0ZXMzMiBfdHhIYXNoKQogICAgICAgIHByaXZhdGUKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYm9vbCkKICAgIHsKICAgICAgICBieXRlczMyIGV0aFNpZ25lZEhhc2ggPSBfdHhIYXNoLnRvRXRoU2lnbmVkTWVzc2FnZUhhc2goKTsKCiAgICAgICAgZm9yICh1aW50IGkgPSAwOyBpIDwgX3NpZ3MubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgYWRkcmVzcyBzaWduZXIgPSBldGhTaWduZWRIYXNoLnJlY292ZXIoX3NpZ3NbaV0pOwogICAgICAgICAgICBib29sIHZhbGlkID0gc2lnbmVyID09IG93bmVyc1tpXTsKCiAgICAgICAgICAgIGlmICghdmFsaWQpIHsKICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9Cn0K",
  },
]

const html = `<p>Signing messages off-chain and having a contract that requires that signature before executing
a function is a useful technique.</p>
<p>For example this technique is used to:</p>
<ul>
<li>reduce number of transaction on chain</li>
<li>gas-less transaction, called <code>meta transaction</code></li>
</ul>
<h3 id="vulnerability">Vulnerability</h3>
<p>Same signature can be used multiple times to execute a function. This can be harmful
if the signer&#39;s intention was to approve a transaction once.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiSigWallet</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">public</span> owners;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _owners</span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owners <span class="hljs-operator">=</span> _owners;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _to,
        <span class="hljs-keyword">uint</span> _amount,
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bytes32</span> txHash <span class="hljs-operator">=</span> getTxHash(_to, _amount);
        <span class="hljs-built_in">require</span>(_checkSigs(_sigs, txHash), <span class="hljs-string">"invalid sig"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTxHash</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_to, _amount));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_checkSigs</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs, <span class="hljs-keyword">bytes32</span> _txHash</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> ethSignedHash <span class="hljs-operator">=</span> _txHash.toEthSignedMessageHash();

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _sigs.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">address</span> signer <span class="hljs-operator">=</span> ethSignedHash.recover(_sigs[i]);
            <span class="hljs-keyword">bool</span> valid <span class="hljs-operator">=</span> signer <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owners[i];

            <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>valid) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
            }
        }

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
}
</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<p>Sign messages with <code>nonce</code> and address of the contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiSigWallet</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">public</span> owners;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bytes32</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> executed;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _owners</span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owners <span class="hljs-operator">=</span> _owners;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _to,
        <span class="hljs-keyword">uint</span> _amount,
        <span class="hljs-keyword">uint</span> _nonce,
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bytes32</span> txHash <span class="hljs-operator">=</span> getTxHash(_to, _amount, _nonce);
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>executed[txHash], <span class="hljs-string">"tx executed"</span>);
        <span class="hljs-built_in">require</span>(_checkSigs(_sigs, txHash), <span class="hljs-string">"invalid sig"</span>);

        executed[txHash] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTxHash</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _to,
        <span class="hljs-keyword">uint</span> _amount,
        <span class="hljs-keyword">uint</span> _nonce
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _to, _amount, _nonce));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_checkSigs</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs, <span class="hljs-keyword">bytes32</span> _txHash</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> ethSignedHash <span class="hljs-operator">=</span> _txHash.toEthSignedMessageHash();

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _sigs.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">address</span> signer <span class="hljs-operator">=</span> ethSignedHash.recover(_sigs[i]);
            <span class="hljs-keyword">bool</span> valid <span class="hljs-operator">=</span> signer <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owners[i];

            <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>valid) {
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
*/</span>
</code></pre>
`

export default html
