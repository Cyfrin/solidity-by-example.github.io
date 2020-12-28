// metadata
export const version = "0.6.10"
export const title = "Hello World"
export const description = "Hello world in Solidity"

const html = `<p><code>pragma</code> specifies the compiler version of Solidity.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-comment">// compiler version must be greater than or equal to 0.6.10 and less than 0.7.0</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.0;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">HelloWorld</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> greet = <span class="hljs-string">"Hello World!"</span>;
}
</code></pre>
`

export default html
