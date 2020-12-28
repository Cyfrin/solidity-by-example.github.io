// metadata
export const version = "0.6.10"
export const title = "Mapping"
export const description = "Example of using mapping in Solidity"

const html = `<p>Maps are created with the syntax <code>mapping(keyType =&gt; valueType)</code>.</p>
<p><code>keyType</code> can be value types such as <code>uint</code>, <code>address</code> or <code>bytes</code>.</p>
<p><code>valueType</code> can be any type including another mapping or an array.</p>
<p>Mappings are not iterable.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.0;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Mapping</span> </span>{
    <span class="hljs-comment">// Mapping from address to uint</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> myMap;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
         <span class="hljs-comment">// Mapping always returns a value.</span>
         <span class="hljs-comment">// If the value was never set, it will return the default value.</span>
        <span class="hljs-keyword">return</span> myMap[_addr];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Update the value at this address</span>
        myMap[_addr] = _i;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Reset the value to the default value.</span>
        <span class="hljs-keyword">delete</span> myMap[_addr];
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">NestedMapping</span> </span>{
    <span class="hljs-comment">// Nested mapping (mapping from address to another mapping)</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> =&gt; <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">public</span> nested;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
         <span class="hljs-comment">// You can get values from a nested mapping</span>
         <span class="hljs-comment">// even when it is not initialized</span>
        <span class="hljs-keyword">return</span>  nested[_addr1][_i];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i, <span class="hljs-keyword">bool</span> _boo</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        nested[_addr1][_i] = _boo;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">delete</span> nested[_addr1][_i];
    }
}
</code></pre>
`

export default html
