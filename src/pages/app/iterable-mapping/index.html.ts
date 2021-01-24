// metadata
export const version = "0.7.6"
export const title = "Iterable Mapping"
export const description = "Iterable Mapping in Solidity"

const html = `<p>You cannot iterate through a <code>mapping</code>. So here is an example of how to create an iterable <code>mapping</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">IterableMapping</span> </span>{
    <span class="hljs-comment">// Iterable mapping from address to uint;</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Map</span> {
        <span class="hljs-keyword">address</span>[] keys;
        <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) values;
        <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) indexOf;
        <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">bool</span>) inserted;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params">Map <span class="hljs-keyword">storage</span> map, <span class="hljs-keyword">address</span> key</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> map.values[key];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getKeyAtIndex</span>(<span class="hljs-params">Map <span class="hljs-keyword">storage</span> map, <span class="hljs-keyword">uint</span> index</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> map.keys[index];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">size</span>(<span class="hljs-params">Map <span class="hljs-keyword">storage</span> map</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> map.keys.<span class="hljs-built_in">length</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params">Map <span class="hljs-keyword">storage</span> map, <span class="hljs-keyword">address</span> key, <span class="hljs-keyword">uint</span> val</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">if</span> (map.inserted[key]) {
            map.values[key] = val;
        } <span class="hljs-keyword">else</span> {
            map.inserted[key] = <span class="hljs-literal">true</span>;
            map.values[key] = val;
            map.indexOf[key] = map.keys.<span class="hljs-built_in">length</span>;
            map.keys.<span class="hljs-built_in">push</span>(key);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params">Map <span class="hljs-keyword">storage</span> map, <span class="hljs-keyword">address</span> key</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">if</span> (!map.inserted[key]) {
            <span class="hljs-keyword">return</span>;
        }

        <span class="hljs-keyword">delete</span> map.inserted[key];
        <span class="hljs-keyword">delete</span> map.values[key];

        <span class="hljs-keyword">uint</span> index = map.indexOf[key];
        <span class="hljs-keyword">uint</span> lastIndex = map.keys.<span class="hljs-built_in">length</span> - <span class="hljs-number">1</span>;
        <span class="hljs-keyword">address</span> lastKey = map.keys[lastIndex];

        map.indexOf[lastKey] = index;
        <span class="hljs-keyword">delete</span> map.indexOf[key];

        map.keys[index] = lastKey;
        map.keys.<span class="hljs-built_in">pop</span>();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestIterableMap</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">IterableMapping</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">IterableMapping</span>.<span class="hljs-title">Map</span>;

    IterableMapping.Map <span class="hljs-keyword">private</span> map;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testIterableMap</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        map.set(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-number">0</span>);
        map.set(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>), <span class="hljs-number">100</span>);
        map.set(<span class="hljs-keyword">address</span>(<span class="hljs-number">2</span>), <span class="hljs-number">200</span>); <span class="hljs-comment">// insert</span>
        map.set(<span class="hljs-keyword">address</span>(<span class="hljs-number">2</span>), <span class="hljs-number">200</span>); <span class="hljs-comment">// update</span>
        map.set(<span class="hljs-keyword">address</span>(<span class="hljs-number">3</span>), <span class="hljs-number">300</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; map.size(); i++) {
            <span class="hljs-keyword">address</span> key = map.getKeyAtIndex(i);

            <span class="hljs-built_in">assert</span>(map.get(key) == i * <span class="hljs-number">100</span>);
        }

        map.remove(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));

        <span class="hljs-comment">// keys = [address(0), address(3), address(2)]</span>
        <span class="hljs-built_in">assert</span>(map.size() == <span class="hljs-number">3</span>);
        <span class="hljs-built_in">assert</span>(map.getKeyAtIndex(<span class="hljs-number">0</span>) == <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>));
        <span class="hljs-built_in">assert</span>(map.getKeyAtIndex(<span class="hljs-number">1</span>) == <span class="hljs-keyword">address</span>(<span class="hljs-number">3</span>));
        <span class="hljs-built_in">assert</span>(map.getKeyAtIndex(<span class="hljs-number">2</span>) == <span class="hljs-keyword">address</span>(<span class="hljs-number">2</span>));
    }
}
</code></pre>
`

export default html
