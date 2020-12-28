// metadata
export const version = "0.6.10"
export const title = "Reading and Writing to a State Variable"
export const description = "Reading and Writing to a State Variable"

const html = `<p>You need to send a transaction to the blockchain to write or update a state variable.</p>
<p>This means that you will have to pay a transaction fee.</p>
<p>On the other hand, you can read a data from a state variable, for free, without sending any transaction.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.0;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SimpleStorage</span> </span>{
    <span class="hljs-comment">// State variable to store a number</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num;

    <span class="hljs-comment">// You need to send a transaction to write to a state variable.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        num = _num;
    }

    <span class="hljs-comment">// You can read from a state variable without sending a transaction.</span>
    <span class="hljs-comment">// Actually we don&#x27;t need this function. The compiler automatically</span>
    <span class="hljs-comment">// creates getter functions for all public variables.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> num;
    }
}
</code></pre>
`

export default html
