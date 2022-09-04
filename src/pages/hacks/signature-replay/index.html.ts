// metadata
export const version = "0.8.13"
export const title = "Signature Replay"
export const description =
  "An example of a contract vulnerable to signature replay attack"
export const codes = [
  {
    fileName: "PreventSigReplay.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKcHJhZ21hIGV4cGVyaW1lbnRhbCBBQklFbmNvZGVyVjI7CgppbXBvcnQgImdpdGh1Yi5jb20vT3BlblplcHBlbGluL29wZW56ZXBwZWxpbi1jb250cmFjdHMvYmxvYi9yZWxlYXNlLXY0LjUvY29udHJhY3RzL3V0aWxzL2NyeXB0b2dyYXBoeS9FQ0RTQS5zb2wiOwoKY29udHJhY3QgTXVsdGlTaWdXYWxsZXQgewogICAgdXNpbmcgRUNEU0EgZm9yIGJ5dGVzMzI7CgogICAgYWRkcmVzc1syXSBwdWJsaWMgb3duZXJzOwogICAgbWFwcGluZyhieXRlczMyID0+IGJvb2wpIHB1YmxpYyBleGVjdXRlZDsKCiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzWzJdIG1lbW9yeSBfb3duZXJzKSBwYXlhYmxlIHsKICAgICAgICBvd25lcnMgPSBfb3duZXJzOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlcG9zaXQoKSBleHRlcm5hbCBwYXlhYmxlIHt9CgogICAgZnVuY3Rpb24gdHJhbnNmZXIoCiAgICAgICAgYWRkcmVzcyBfdG8sCiAgICAgICAgdWludCBfYW1vdW50LAogICAgICAgIHVpbnQgX25vbmNlLAogICAgICAgIGJ5dGVzWzJdIG1lbW9yeSBfc2lncwogICAgKSBleHRlcm5hbCB7CiAgICAgICAgYnl0ZXMzMiB0eEhhc2ggPSBnZXRUeEhhc2goX3RvLCBfYW1vdW50LCBfbm9uY2UpOwogICAgICAgIHJlcXVpcmUoIWV4ZWN1dGVkW3R4SGFzaF0sICJ0eCBleGVjdXRlZCIpOwogICAgICAgIHJlcXVpcmUoX2NoZWNrU2lncyhfc2lncywgdHhIYXNoKSwgImludmFsaWQgc2lnIik7CgogICAgICAgIGV4ZWN1dGVkW3R4SGFzaF0gPSB0cnVlOwoKICAgICAgICAoYm9vbCBzZW50LCApID0gX3RvLmNhbGx7dmFsdWU6IF9hbW91bnR9KCIiKTsKICAgICAgICByZXF1aXJlKHNlbnQsICJGYWlsZWQgdG8gc2VuZCBFdGhlciIpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFR4SGFzaCgKICAgICAgICBhZGRyZXNzIF90bywKICAgICAgICB1aW50IF9hbW91bnQsCiAgICAgICAgdWludCBfbm9uY2UKICAgICkgcHVibGljIHZpZXcgcmV0dXJucyAoYnl0ZXMzMikgewogICAgICAgIHJldHVybiBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChhZGRyZXNzKHRoaXMpLCBfdG8sIF9hbW91bnQsIF9ub25jZSkpOwogICAgfQoKICAgIGZ1bmN0aW9uIF9jaGVja1NpZ3MoYnl0ZXNbMl0gbWVtb3J5IF9zaWdzLCBieXRlczMyIF90eEhhc2gpCiAgICAgICAgcHJpdmF0ZQogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIGJ5dGVzMzIgZXRoU2lnbmVkSGFzaCA9IF90eEhhc2gudG9FdGhTaWduZWRNZXNzYWdlSGFzaCgpOwoKICAgICAgICBmb3IgKHVpbnQgaSA9IDA7IGkgPCBfc2lncy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBhZGRyZXNzIHNpZ25lciA9IGV0aFNpZ25lZEhhc2gucmVjb3Zlcihfc2lnc1tpXSk7CiAgICAgICAgICAgIGJvb2wgdmFsaWQgPSBzaWduZXIgPT0gb3duZXJzW2ldOwoKICAgICAgICAgICAgaWYgKCF2YWxpZCkgewogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KfQoKLyoKLy8gb3duZXJzCjB4ZTE5YWVhOTNGNkMxZEJlZjZBMzc3Njg0OGJFMDk5QTdjMzI1M2FjOAoweGZhODU0RkU1MzM5ODQzYjNlOUJmZDg1NTRCMzhCRDA0MkE0MmUzNDAKCi8vIHRvCjB4ZTEwNDIyY2M2MTAzMEM4QjNkQkNEMzZjN2U3ZThFQzNCNTI3RTBBYwovLyBhbW91bnQKMTAwCi8vIG5vbmNlCjAKLy8gdHggaGFzaAoweDEyYTA5NTQ2MmViZmNhMjdkYzRkOTlmZWVmODg1YmZlNTgzNDRmYjZiYjQyYzNjNTJhN2MwZDY4MzZkMTE0NDgKCi8vIHNpZ25hdHVyZXMKMHgxMjBmOGVkOGYyZmE1NTQ5OGYyZWYwYTIyZjI2ZTM5YjliNTFlZDI5Y2M5M2ZlMGVmM2VkMTc1NmY1OGZhZDBjNmViNWExZDZmMzY3MWY4ZDUxNjM2MzlmZGM0MGJiODcyMGRlNmQ4ZjI1MjMwNzdhZDZkMTEzOGE2MDkyM2I4MDFjCjB4YTI0MGE0ODdkZTFlYjViYjk3MWU5MjBjYjA2NzdhNDdkZGM2NDIxZTM4ZjdiMDQ4ZjhhYTg4MjY2YjJjODg0YTEwNDU1YTUyZGM3NmEyMDNhMWE5YTk1MzQxODQ2OWY5ZWVjMmM1OWU4NzIwMWJiYzhkYjBlNGQ5Nzk2OTM1Y2IxYgoqLwo=",
  },
  {
    fileName: "SigReplay.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKcHJhZ21hIGV4cGVyaW1lbnRhbCBBQklFbmNvZGVyVjI7CgppbXBvcnQgImdpdGh1Yi5jb20vT3BlblplcHBlbGluL29wZW56ZXBwZWxpbi1jb250cmFjdHMvYmxvYi9yZWxlYXNlLXY0LjUvY29udHJhY3RzL3V0aWxzL2NyeXB0b2dyYXBoeS9FQ0RTQS5zb2wiOwoKY29udHJhY3QgTXVsdGlTaWdXYWxsZXQgewogICAgdXNpbmcgRUNEU0EgZm9yIGJ5dGVzMzI7CgogICAgYWRkcmVzc1syXSBwdWJsaWMgb3duZXJzOwoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3NbMl0gbWVtb3J5IF9vd25lcnMpIHBheWFibGUgewogICAgICAgIG93bmVycyA9IF9vd25lcnM7CiAgICB9CgogICAgZnVuY3Rpb24gZGVwb3NpdCgpIGV4dGVybmFsIHBheWFibGUge30KCiAgICBmdW5jdGlvbiB0cmFuc2ZlcigKICAgICAgICBhZGRyZXNzIF90bywKICAgICAgICB1aW50IF9hbW91bnQsCiAgICAgICAgYnl0ZXNbMl0gbWVtb3J5IF9zaWdzCiAgICApIGV4dGVybmFsIHsKICAgICAgICBieXRlczMyIHR4SGFzaCA9IGdldFR4SGFzaChfdG8sIF9hbW91bnQpOwogICAgICAgIHJlcXVpcmUoX2NoZWNrU2lncyhfc2lncywgdHhIYXNoKSwgImludmFsaWQgc2lnIik7CgogICAgICAgIChib29sIHNlbnQsICkgPSBfdG8uY2FsbHt2YWx1ZTogX2Ftb3VudH0oIiIpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0VHhIYXNoKGFkZHJlc3MgX3RvLCB1aW50IF9hbW91bnQpIHB1YmxpYyB2aWV3IHJldHVybnMgKGJ5dGVzMzIpIHsKICAgICAgICByZXR1cm4ga2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQoX3RvLCBfYW1vdW50KSk7CiAgICB9CgogICAgZnVuY3Rpb24gX2NoZWNrU2lncyhieXRlc1syXSBtZW1vcnkgX3NpZ3MsIGJ5dGVzMzIgX3R4SGFzaCkKICAgICAgICBwcml2YXRlCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKGJvb2wpCiAgICB7CiAgICAgICAgYnl0ZXMzMiBldGhTaWduZWRIYXNoID0gX3R4SGFzaC50b0V0aFNpZ25lZE1lc3NhZ2VIYXNoKCk7CgogICAgICAgIGZvciAodWludCBpID0gMDsgaSA8IF9zaWdzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIGFkZHJlc3Mgc2lnbmVyID0gZXRoU2lnbmVkSGFzaC5yZWNvdmVyKF9zaWdzW2ldKTsKICAgICAgICAgICAgYm9vbCB2YWxpZCA9IHNpZ25lciA9PSBvd25lcnNbaV07CgogICAgICAgICAgICBpZiAoIXZhbGlkKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHJldHVybiB0cnVlOwogICAgfQp9Cg==",
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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">experimental</span> <span class="hljs-built_in">ABIEncoderV2</span>;</span>

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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">experimental</span> <span class="hljs-built_in">ABIEncoderV2</span>;</span>

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
