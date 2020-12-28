// metadata
export const version = "0.5.16"
export const title = "Calling Parent Contracts"
export const description = "An example of calling parent contracts in Solidity"

const html = `<p>Parent contracts can be called directly, or by using the keyword <code>super</code>.</p>
<p>By using the keyword <code>super</code>, all of the immediate parent contracts will be called.</p>
<pre><code class="language-solidity"><span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.5.16;</span>

<span class="hljs-comment">/* Inheritance tree
   A
 /  \\
B   C
 \\ /
  D
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// This is called an event. You can emit events from your function</span>
    <span class="hljs-comment">// and they are logged into the transaction log.</span>
    <span class="hljs-comment">// In our case, this will be useful for tracing function calls.</span>
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"A.foo called"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"A.bar called"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"B.foo called"</span>);
        A.foo();
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"B.bar called"</span>);
        <span class="hljs-built_in">super</span>.bar();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"C.foo called"</span>);
        A.foo();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"C.bar called"</span>);
        <span class="hljs-built_in">super</span>.bar();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">D</span> <span class="hljs-keyword">is</span> <span class="hljs-title">B</span>, <span class="hljs-title">C</span> </span>{
    <span class="hljs-comment">// Try:</span>
    <span class="hljs-comment">// - Call D.foo and check the transaction logs.</span>
    <span class="hljs-comment">//   Although D inherits A, B and C, it only called C and then A.</span>
    <span class="hljs-comment">// - Call D.bar and check the transaction logs</span>
    <span class="hljs-comment">//   D called C, then B, and finally A.</span>
    <span class="hljs-comment">//   Although super was called twice (by B and C) it only called A once.</span>
}
</code></pre>
`

export default html
