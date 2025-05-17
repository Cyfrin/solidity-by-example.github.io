// metadata
export const version = "0.8.26"
export const title = "Foundry Sign"
export const description = "Foundry sign"
export const cyfrinLink = "https://www.cyfrin.io/glossary/foundry-sign-solidity-code-example"

export const keywords = [
    "foundry",
    "sign",
    "signature",
    "ecrecover",
]

export const codes = [
    {
        fileName: "SignTest.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKaW1wb3J0ICJmb3JnZS1zdGQvVGVzdC5zb2wiOwoKY29udHJhY3QgU2lnblRlc3QgaXMgVGVzdCB7CiAgICAvLyBwcml2YXRlIGtleSA9IDEyMwogICAgLy8gcHVibGljIGtleSA9IHZtLmFkZHIocHJpdmF0ZSBrZXkpCiAgICAvLyBtZXNzYWdlID0gInNlY3JldCBtZXNzYWdlIgogICAgLy8gbWVzc2FnZSBoYXNoID0ga2VjY2FrMjU2KG1lc3NhZ2UpCiAgICAvLyB2bS5zaWduKHByaXZhdGUga2V5LCBtZXNzYWdlIGhhc2gpCiAgICBmdW5jdGlvbiB0ZXN0U2lnbmF0dXJlKCkgcHVibGljIHsKICAgICAgICB1aW50MjU2IHByaXZhdGVLZXkgPSAxMjM7CiAgICAgICAgLy8gQ29tcHV0ZXMgdGhlIGFkZHJlc3MgZm9yIGEgZ2l2ZW4gcHJpdmF0ZSBrZXkuCiAgICAgICAgYWRkcmVzcyBhbGljZSA9IHZtLmFkZHIocHJpdmF0ZUtleSk7CgogICAgICAgIC8vIFRlc3QgdmFsaWQgc2lnbmF0dXJlCiAgICAgICAgYnl0ZXMzMiBtZXNzYWdlSGFzaCA9IGtlY2NhazI1NigiU2lnbmVkIGJ5IEFsaWNlIik7CgogICAgICAgICh1aW50OCB2LCBieXRlczMyIHIsIGJ5dGVzMzIgcykgPSB2bS5zaWduKHByaXZhdGVLZXksIG1lc3NhZ2VIYXNoKTsKICAgICAgICBhZGRyZXNzIHNpZ25lciA9IGVjcmVjb3ZlcihtZXNzYWdlSGFzaCwgdiwgciwgcyk7CgogICAgICAgIGFzc2VydEVxKHNpZ25lciwgYWxpY2UpOwoKICAgICAgICAvLyBUZXN0IGludmFsaWQgbWVzc2FnZQogICAgICAgIGJ5dGVzMzIgaW52YWxpZEhhc2ggPSBrZWNjYWsyNTYoIk5vdCBzaWduZWQgYnkgQWxpY2UiKTsKICAgICAgICBzaWduZXIgPSBlY3JlY292ZXIoaW52YWxpZEhhc2gsIHYsIHIsIHMpOwoKICAgICAgICBhc3NlcnRUcnVlKHNpZ25lciAhPSBhbGljZSk7CiAgICB9Cn0K",
    },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SignTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    <span class="hljs-comment">// private key = 123</span>
    <span class="hljs-comment">// public key = vm.addr(private key)</span>
    <span class="hljs-comment">// message = "secret message"</span>
    <span class="hljs-comment">// message hash = keccak256(message)</span>
    <span class="hljs-comment">// vm.sign(private key, message hash)</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSignature</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> privateKey <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;
        <span class="hljs-comment">// Computes the address for a given private key.</span>
        <span class="hljs-keyword">address</span> alice <span class="hljs-operator">=</span> vm.addr(privateKey);

        <span class="hljs-comment">// Test valid signature</span>
        <span class="hljs-keyword">bytes32</span> messageHash <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"Signed by Alice"</span>);

        (<span class="hljs-keyword">uint8</span> v, <span class="hljs-keyword">bytes32</span> r, <span class="hljs-keyword">bytes32</span> s) <span class="hljs-operator">=</span> vm.sign(privateKey, messageHash);
        <span class="hljs-keyword">address</span> signer <span class="hljs-operator">=</span> <span class="hljs-built_in">ecrecover</span>(messageHash, v, r, s);

        assertEq(signer, alice);

        <span class="hljs-comment">// Test invalid message</span>
        <span class="hljs-keyword">bytes32</span> invalidHash <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"Not signed by Alice"</span>);
        signer <span class="hljs-operator">=</span> <span class="hljs-built_in">ecrecover</span>(invalidHash, v, r, s);

        assertTrue(signer <span class="hljs-operator">!</span><span class="hljs-operator">=</span> alice);
    }
}
</code></pre>`

export default html
