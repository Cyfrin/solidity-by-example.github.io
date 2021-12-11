// metadata
export const version = "0.8.10"
export const title = "Immutable"
export const description = "Immutable variables"

const html = `<p>Immutable variables are like constants. Values of immutable variables can be set inside the constructor but cannot be modified afterwards.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Immutable</span> </span>{
    <span class="hljs-comment">// coding convention to uppercase constant variables</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> MY_ADDRESS;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> MY_UINT;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _myUint</span>) </span>{
        MY_ADDRESS = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        MY_UINT = _myUint;
    }
}
</code></pre>
`

export default html
