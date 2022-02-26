// metadata
export const version = "0.8.10"
export const title = "Multi Call"
export const description = "An example of contract to aggregate multiple calls."

const html = `<p>An example of contract that aggregates multiple queries using a for loop and <code>staticcall</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiCall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">multiCall</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> targets, <span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-built_in">require</span>(targets.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> data.<span class="hljs-built_in">length</span>, <span class="hljs-string">"target length != data length"</span>);

        <span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">memory</span> results <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>[](data.<span class="hljs-built_in">length</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> targets.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> result) <span class="hljs-operator">=</span> targets[i].<span class="hljs-built_in">staticcall</span>(data[i]);
            <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"call failed"</span>);
            results[i] <span class="hljs-operator">=</span> result;
        }

        <span class="hljs-keyword">return</span> results;
    }
}
</code></pre>
<p>Contract to test <code>MultiCall</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestMultiCall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> _i;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getData</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSelector</span>(<span class="hljs-built_in">this</span>.test.<span class="hljs-built_in">selector</span>, _i);
    }
}
</code></pre>
`

export default html
