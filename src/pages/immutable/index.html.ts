// metadata
export const version = "0.8.26"
export const title = "Immutable"
export const description = "Immutable variables"

export const keywords = [
  "constant",
  "constants",
  "immutable",
  "immutables",
  "data",
  "variable",
  "variables",
]

export const codes = [
  {
    fileName: "Immutable.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEltbXV0YWJsZSB7CiAgICAvLyBjb2RpbmcgY29udmVudGlvbiB0byB1cHBlcmNhc2UgY29uc3RhbnQgdmFyaWFibGVzCiAgICBhZGRyZXNzIHB1YmxpYyBpbW11dGFibGUgTVlfQUREUkVTUzsKICAgIHVpbnQyNTYgcHVibGljIGltbXV0YWJsZSBNWV9VSU5UOwoKICAgIGNvbnN0cnVjdG9yKHVpbnQyNTYgX215VWludCkgewogICAgICAgIE1ZX0FERFJFU1MgPSBtc2cuc2VuZGVyOwogICAgICAgIE1ZX1VJTlQgPSBfbXlVaW50OwogICAgfQp9Cg==",
  },
]

const html = `<p>Immutable variables are like constants. Values of immutable variables can be set inside the constructor but cannot be modified afterwards.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Immutable</span> </span>{
    <span class="hljs-comment">// coding convention to uppercase constant variables</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> MY_ADDRESS;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> MY_UINT;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _myUint</span>) </span>{
        MY_ADDRESS <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        MY_UINT <span class="hljs-operator">=</span> _myUint;
    }
}
</code></pre>`

export default html
