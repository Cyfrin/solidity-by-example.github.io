// metadata
export const version = "0.8.26"
export const title = "Immutable"
export const description = "Immutable variables"
export const cyfrinLink = "https://www.cyfrin.io/glossary/immutable-solidity-code-example"

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
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEltbXV0YWJsZSB7CiAgICBhZGRyZXNzIHB1YmxpYyBpbW11dGFibGUgbXlBZGRyOwogICAgdWludDI1NiBwdWJsaWMgaW1tdXRhYmxlIG15VWludDsKCiAgICBjb25zdHJ1Y3Rvcih1aW50MjU2IF9teVVpbnQpIHsKICAgICAgICBteUFkZHIgPSBtc2cuc2VuZGVyOwogICAgICAgIG15VWludCA9IF9teVVpbnQ7CiAgICB9Cn0K",
    },
]

const html = `<p>Immutable variables are like constants. Values of immutable variables can be set inside the constructor but cannot be modified afterwards.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Immutable</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> myAddr;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> myUint;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _myUint</span>) </span>{
        myAddr <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        myUint <span class="hljs-operator">=</span> _myUint;
    }
}
</code></pre>`

export default html
