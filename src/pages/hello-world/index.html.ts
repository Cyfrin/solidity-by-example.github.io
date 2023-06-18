// metadata
export const version = "0.8.17"
export const title = "Hello World"
export const description = "Hello world in Solidity"

export const keywords = ["contract", "app", "application", "hello", "world"]

export const codes = [
  {
    fileName: "HelloWorld.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVAovLyBjb21waWxlciB2ZXJzaW9uIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDAuOC4xNyBhbmQgbGVzcyB0aGFuIDAuOS4wCnByYWdtYSBzb2xpZGl0eSBeMC44LjE3OwoKY29udHJhY3QgSGVsbG9Xb3JsZCB7CiAgICBzdHJpbmcgcHVibGljIGdyZWV0ID0gIkhlbGxvIFdvcmxkISI7Cn0K",
  },
]

const html = `<p><code>pragma</code> specifies the compiler version of Solidity.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-comment">// compiler version must be greater than or equal to 0.8.17 and less than 0.9.0</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">HelloWorld</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> greet <span class="hljs-operator">=</span> <span class="hljs-string">"Hello World!"</span>;
}
</code></pre>`

export default html
