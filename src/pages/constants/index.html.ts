// metadata
export const version = "0.8.13"
export const title = "Constants"
export const description = "Constant variables"
export const codes = [
  {
    fileName: "Constants.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IENvbnN0YW50cyB7CiAgICAvLyBjb2RpbmcgY29udmVudGlvbiB0byB1cHBlcmNhc2UgY29uc3RhbnQgdmFyaWFibGVzCiAgICBhZGRyZXNzIHB1YmxpYyBjb25zdGFudCBNWV9BRERSRVNTID0gMHg3Nzc3ODg4ODk5OTlBYUFBYkJiYkNjY2NkZERkZWVlRWZGRmZDY0NjOwogICAgdWludCBwdWJsaWMgY29uc3RhbnQgTVlfVUlOVCA9IDEyMzsKfQo=",
  },
]

const html = `<p>Constants are variables that cannot be modified.</p>
<p>Their value is hard coded and using constants can save gas cost.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Constants</span> </span>{
    <span class="hljs-comment">// coding convention to uppercase constant variables</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MY_ADDRESS <span class="hljs-operator">=</span> <span class="hljs-number">0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MY_UINT <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;
}
</code></pre>
`

export default html
