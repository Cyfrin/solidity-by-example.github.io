// metadata
export const version = "0.8.13"
export const title = "Unchecked Math"
export const description = "An example of unchecked math in Solidity"
export const codes = [
    {
        fileName: "UncheckedMath.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCi8vIFRPRE86IGxvZyBnYXMgdXNhZ2UKY29udHJhY3QgVW5jaGVja2VkTWF0aCB7CiAgICBmdW5jdGlvbiBhZGQodWludCB4LCB1aW50IHkpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiB4ICsgeTsKCiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgcmV0dXJuIHggKyB5OwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBzdWIodWludCB4LCB1aW50IHkpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiB4IC0geTsKCiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgcmV0dXJuIHggLSB5OwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBzdW1PZkN1YmVzKHVpbnQgeCwgdWludCB5KSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQpIHsKICAgICAgICAvLyBXcmFwIGNvbXBsZXggbWF0aCBsb2dpYyBpbnNpZGUgdW5jaGVja2VkCiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgdWludCB4MyA9IHggKiB4ICogeDsKICAgICAgICAgICAgdWludCB5MyA9IHkgKiB5ICogeTsKCiAgICAgICAgICAgIHJldHVybiB4MyArIHkzOwogICAgICAgIH0KICAgIH0KfQo=",
    },
]

const html = `<p>Overflow and underflow of numbers in Solidity 0.8 throw an error. This can be disabled by using <code>unchecked</code>.</p>
<p>Disabling overflow / underflow check saves gas.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> log gas usage</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UncheckedMath</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">+</span> y;

        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">return</span> x <span class="hljs-operator">+</span> y;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sub</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">-</span> y;

        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">return</span> x <span class="hljs-operator">-</span> y;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sumOfCubes</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// Wrap complex math logic inside unchecked</span>
        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">uint</span> x3 <span class="hljs-operator">=</span> x <span class="hljs-operator">*</span> x <span class="hljs-operator">*</span> x;
            <span class="hljs-keyword">uint</span> y3 <span class="hljs-operator">=</span> y <span class="hljs-operator">*</span> y <span class="hljs-operator">*</span> y;

            <span class="hljs-keyword">return</span> x3 <span class="hljs-operator">+</span> y3;
        }
    }
}
</code></pre>
`

export default html
