// metadata
export const version = "0.8.17"
export const title = "First Application"
export const description = "Example of smart contract in Solidity"
export const codes = [
  {
    fileName: "Counter.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IENvdW50ZXIgewogICAgdWludCBwdWJsaWMgY291bnQ7CgogICAgLy8gRnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IGNvdW50CiAgICBmdW5jdGlvbiBnZXQoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIGNvdW50OwogICAgfQoKICAgIC8vIEZ1bmN0aW9uIHRvIGluY3JlbWVudCBjb3VudCBieSAxCiAgICBmdW5jdGlvbiBpbmMoKSBwdWJsaWMgewogICAgICAgIGNvdW50ICs9IDE7CiAgICB9CgogICAgLy8gRnVuY3Rpb24gdG8gZGVjcmVtZW50IGNvdW50IGJ5IDEKICAgIGZ1bmN0aW9uIGRlYygpIHB1YmxpYyB7CiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGZhaWwgaWYgY291bnQgPSAwCiAgICAgICAgY291bnQgLT0gMTsKICAgIH0KfQo=",
  },
]

const html = `<p>Here is a simple contract that you can get, increment and decrement the count store in this contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-comment">// Function to get the current count</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> count;
    }

    <span class="hljs-comment">// Function to increment count by 1</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }

    <span class="hljs-comment">// Function to decrement count by 1</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dec</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// This function will fail if count = 0</span>
        count <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}
</code></pre>
`

export default html
