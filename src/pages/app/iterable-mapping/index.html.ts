// metadata
export const version = "0.8.13"
export const title = "Iterable Mapping"
export const description = "Iterable Mapping in Solidity"
export const codes = [
  {
    fileName: "IterableMapping.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmxpYnJhcnkgSXRlcmFibGVNYXBwaW5nIHsKICAgIC8vIEl0ZXJhYmxlIG1hcHBpbmcgZnJvbSBhZGRyZXNzIHRvIHVpbnQ7CiAgICBzdHJ1Y3QgTWFwIHsKICAgICAgICBhZGRyZXNzW10ga2V5czsKICAgICAgICBtYXBwaW5nKGFkZHJlc3MgPT4gdWludCkgdmFsdWVzOwogICAgICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50KSBpbmRleE9mOwogICAgICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBib29sKSBpbnNlcnRlZDsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXQoTWFwIHN0b3JhZ2UgbWFwLCBhZGRyZXNzIGtleSkgcHVibGljIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiBtYXAudmFsdWVzW2tleV07CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0S2V5QXRJbmRleChNYXAgc3RvcmFnZSBtYXAsIHVpbnQgaW5kZXgpIHB1YmxpYyB2aWV3IHJldHVybnMgKGFkZHJlc3MpIHsKICAgICAgICByZXR1cm4gbWFwLmtleXNbaW5kZXhdOwogICAgfQoKICAgIGZ1bmN0aW9uIHNpemUoTWFwIHN0b3JhZ2UgbWFwKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIG1hcC5rZXlzLmxlbmd0aDsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXQoTWFwIHN0b3JhZ2UgbWFwLCBhZGRyZXNzIGtleSwgdWludCB2YWwpIHB1YmxpYyB7CiAgICAgICAgaWYgKG1hcC5pbnNlcnRlZFtrZXldKSB7CiAgICAgICAgICAgIG1hcC52YWx1ZXNba2V5XSA9IHZhbDsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBtYXAuaW5zZXJ0ZWRba2V5XSA9IHRydWU7CiAgICAgICAgICAgIG1hcC52YWx1ZXNba2V5XSA9IHZhbDsKICAgICAgICAgICAgbWFwLmluZGV4T2Zba2V5XSA9IG1hcC5rZXlzLmxlbmd0aDsKICAgICAgICAgICAgbWFwLmtleXMucHVzaChrZXkpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiByZW1vdmUoTWFwIHN0b3JhZ2UgbWFwLCBhZGRyZXNzIGtleSkgcHVibGljIHsKICAgICAgICBpZiAoIW1hcC5pbnNlcnRlZFtrZXldKSB7CiAgICAgICAgICAgIHJldHVybjsKICAgICAgICB9CgogICAgICAgIGRlbGV0ZSBtYXAuaW5zZXJ0ZWRba2V5XTsKICAgICAgICBkZWxldGUgbWFwLnZhbHVlc1trZXldOwoKICAgICAgICB1aW50IGluZGV4ID0gbWFwLmluZGV4T2Zba2V5XTsKICAgICAgICB1aW50IGxhc3RJbmRleCA9IG1hcC5rZXlzLmxlbmd0aCAtIDE7CiAgICAgICAgYWRkcmVzcyBsYXN0S2V5ID0gbWFwLmtleXNbbGFzdEluZGV4XTsKCiAgICAgICAgbWFwLmluZGV4T2ZbbGFzdEtleV0gPSBpbmRleDsKICAgICAgICBkZWxldGUgbWFwLmluZGV4T2Zba2V5XTsKCiAgICAgICAgbWFwLmtleXNbaW5kZXhdID0gbGFzdEtleTsKICAgICAgICBtYXAua2V5cy5wb3AoKTsKICAgIH0KfQoKY29udHJhY3QgVGVzdEl0ZXJhYmxlTWFwIHsKICAgIHVzaW5nIEl0ZXJhYmxlTWFwcGluZyBmb3IgSXRlcmFibGVNYXBwaW5nLk1hcDsKCiAgICBJdGVyYWJsZU1hcHBpbmcuTWFwIHByaXZhdGUgbWFwOwoKICAgIGZ1bmN0aW9uIHRlc3RJdGVyYWJsZU1hcCgpIHB1YmxpYyB7CiAgICAgICAgbWFwLnNldChhZGRyZXNzKDApLCAwKTsKICAgICAgICBtYXAuc2V0KGFkZHJlc3MoMSksIDEwMCk7CiAgICAgICAgbWFwLnNldChhZGRyZXNzKDIpLCAyMDApOyAvLyBpbnNlcnQKICAgICAgICBtYXAuc2V0KGFkZHJlc3MoMiksIDIwMCk7IC8vIHVwZGF0ZQogICAgICAgIG1hcC5zZXQoYWRkcmVzcygzKSwgMzAwKTsKCiAgICAgICAgZm9yICh1aW50IGkgPSAwOyBpIDwgbWFwLnNpemUoKTsgaSsrKSB7CiAgICAgICAgICAgIGFkZHJlc3Mga2V5ID0gbWFwLmdldEtleUF0SW5kZXgoaSk7CgogICAgICAgICAgICBhc3NlcnQobWFwLmdldChrZXkpID09IGkgKiAxMDApOwogICAgICAgIH0KCiAgICAgICAgbWFwLnJlbW92ZShhZGRyZXNzKDEpKTsKCiAgICAgICAgLy8ga2V5cyA9IFthZGRyZXNzKDApLCBhZGRyZXNzKDMpLCBhZGRyZXNzKDIpXQogICAgICAgIGFzc2VydChtYXAuc2l6ZSgpID09IDMpOwogICAgICAgIGFzc2VydChtYXAuZ2V0S2V5QXRJbmRleCgwKSA9PSBhZGRyZXNzKDApKTsKICAgICAgICBhc3NlcnQobWFwLmdldEtleUF0SW5kZXgoMSkgPT0gYWRkcmVzcygzKSk7CiAgICAgICAgYXNzZXJ0KG1hcC5nZXRLZXlBdEluZGV4KDIpID09IGFkZHJlc3MoMikpOwogICAgfQp9Cg==",
  },
]

const html = `<p>You cannot iterate through a <code>mapping</code>. So here is an example of how to create an iterable <code>mapping</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">IterableMapping</span> </span>{
    <span class="hljs-comment">// Iterable mapping from address to uint;</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Map</span> {
        <span class="hljs-keyword">address</span>[] keys;
        <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) values;
        <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) indexOf;
        <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) inserted;
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
            map.values[key] <span class="hljs-operator">=</span> val;
        } <span class="hljs-keyword">else</span> {
            map.inserted[key] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
            map.values[key] <span class="hljs-operator">=</span> val;
            map.indexOf[key] <span class="hljs-operator">=</span> map.keys.<span class="hljs-built_in">length</span>;
            map.keys.<span class="hljs-built_in">push</span>(key);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params">Map <span class="hljs-keyword">storage</span> map, <span class="hljs-keyword">address</span> key</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>map.inserted[key]) {
            <span class="hljs-keyword">return</span>;
        }

        <span class="hljs-keyword">delete</span> map.inserted[key];
        <span class="hljs-keyword">delete</span> map.values[key];

        <span class="hljs-keyword">uint</span> index <span class="hljs-operator">=</span> map.indexOf[key];
        <span class="hljs-keyword">uint</span> lastIndex <span class="hljs-operator">=</span> map.keys.<span class="hljs-built_in">length</span> <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">address</span> lastKey <span class="hljs-operator">=</span> map.keys[lastIndex];

        map.indexOf[lastKey] <span class="hljs-operator">=</span> index;
        <span class="hljs-keyword">delete</span> map.indexOf[key];

        map.keys[index] <span class="hljs-operator">=</span> lastKey;
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

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> map.size(); i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">address</span> key <span class="hljs-operator">=</span> map.getKeyAtIndex(i);

            <span class="hljs-built_in">assert</span>(map.get(key) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> i <span class="hljs-operator">*</span> <span class="hljs-number">100</span>);
        }

        map.remove(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));

        <span class="hljs-comment">// keys = [address(0), address(3), address(2)]</span>
        <span class="hljs-built_in">assert</span>(map.size() <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">3</span>);
        <span class="hljs-built_in">assert</span>(map.getKeyAtIndex(<span class="hljs-number">0</span>) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>));
        <span class="hljs-built_in">assert</span>(map.getKeyAtIndex(<span class="hljs-number">1</span>) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">3</span>));
        <span class="hljs-built_in">assert</span>(map.getKeyAtIndex(<span class="hljs-number">2</span>) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">2</span>));
    }
}
</code></pre>
`

export default html
