// metadata
export const version = "0.8.20"
export const title = "Unchecked Math"
export const description = "An example of unchecked math in Solidity"

export const keywords = ["gas", "unchecked", "math", "overflow", "underflow"]

export const codes = [
  {
    fileName: "UncheckedMath.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IFVuY2hlY2tlZE1hdGggewogICAgZnVuY3Rpb24gYWRkKHVpbnQgeCwgdWludCB5KSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQpIHsKICAgICAgICAvLyAyMjI5MSBnYXMKICAgICAgICAvLyByZXR1cm4geCArIHk7CgogICAgICAgIC8vIDIyMTAzIGdhcwogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIHJldHVybiB4ICsgeTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gc3ViKHVpbnQgeCwgdWludCB5KSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQpIHsKICAgICAgICAvLyAyMjMyOSBnYXMKICAgICAgICAvLyByZXR1cm4geCAtIHk7CgogICAgICAgIC8vIDIyMTQ3IGdhcwogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIHJldHVybiB4IC0geTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gc3VtT2ZDdWJlcyh1aW50IHgsIHVpbnQgeSkgZXh0ZXJuYWwgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgLy8gV3JhcCBjb21wbGV4IG1hdGggbG9naWMgaW5zaWRlIHVuY2hlY2tlZAogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIHVpbnQgeDMgPSB4ICogeCAqIHg7CiAgICAgICAgICAgIHVpbnQgeTMgPSB5ICogeSAqIHk7CgogICAgICAgICAgICByZXR1cm4geDMgKyB5MzsKICAgICAgICB9CiAgICB9Cn0K",
  },
]

const html = `<p>Overflow and underflow of numbers in Solidity 0.8 throw an error. This can be disabled by using <code>unchecked</code>.</p>
<p>Disabling overflow / underflow check saves gas.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UncheckedMath</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// 22291 gas</span>
        <span class="hljs-comment">// return x + y;</span>

        <span class="hljs-comment">// 22103 gas</span>
        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">return</span> x <span class="hljs-operator">+</span> y;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sub</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// 22329 gas</span>
        <span class="hljs-comment">// return x - y;</span>

        <span class="hljs-comment">// 22147 gas</span>
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
</code></pre>`

export default html
