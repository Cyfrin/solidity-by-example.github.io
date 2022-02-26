// metadata
export const version = "0.8.10"
export const title = "Multi Delegatecall"
export const description =
  "An example of contract to call multiple functions in a single transaction"

const html = `<p>An example of calling multiple functions with a single transaction, using <code>delegatecall</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiDelegatecall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">DelegatecallFailed</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">multiDelegatecall</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">memory</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">memory</span> results</span>)
    </span>{
        results <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>[](data.<span class="hljs-built_in">length</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> data.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">delegatecall</span>(data[i]);
            <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>ok) {
                <span class="hljs-keyword">revert</span> DelegatecallFailed();
            }
            results[i] <span class="hljs-operator">=</span> res;
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestMultiDelegatecall</span> <span class="hljs-keyword">is</span> <span class="hljs-title">MultiDelegatecall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> caller, <span class="hljs-keyword">string</span> func, <span class="hljs-keyword">uint</span> i</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">func1</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-string">"func1"</span>, x <span class="hljs-operator">+</span> y);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">func2</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-string">"func2"</span>, <span class="hljs-number">2</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-number">111</span>;
    }
}
</code></pre>
`

export default html
