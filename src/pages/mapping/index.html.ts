// metadata
export const version = "0.8.20"
export const title = "Mapping"
export const description = "Example of using mapping in Solidity"

export const keywords = ["data", "variable", "variables", "mapping"]

export const codes = [
    {
        fileName: "Mapping.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IE1hcHBpbmcgewogICAgLy8gTWFwcGluZyBmcm9tIGFkZHJlc3MgdG8gdWludAogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBteU1hcDsKCiAgICBmdW5jdGlvbiBnZXQoYWRkcmVzcyBfYWRkcikgcHVibGljIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIC8vIE1hcHBpbmcgYWx3YXlzIHJldHVybnMgYSB2YWx1ZS4KICAgICAgICAvLyBJZiB0aGUgdmFsdWUgd2FzIG5ldmVyIHNldCwgaXQgd2lsbCByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUuCiAgICAgICAgcmV0dXJuIG15TWFwW19hZGRyXTsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXQoYWRkcmVzcyBfYWRkciwgdWludCBfaSkgcHVibGljIHsKICAgICAgICAvLyBVcGRhdGUgdGhlIHZhbHVlIGF0IHRoaXMgYWRkcmVzcwogICAgICAgIG15TWFwW19hZGRyXSA9IF9pOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlbW92ZShhZGRyZXNzIF9hZGRyKSBwdWJsaWMgewogICAgICAgIC8vIFJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgZGVmYXVsdCB2YWx1ZS4KICAgICAgICBkZWxldGUgbXlNYXBbX2FkZHJdOwogICAgfQp9Cgpjb250cmFjdCBOZXN0ZWRNYXBwaW5nIHsKICAgIC8vIE5lc3RlZCBtYXBwaW5nIChtYXBwaW5nIGZyb20gYWRkcmVzcyB0byBhbm90aGVyIG1hcHBpbmcpCiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gbWFwcGluZyh1aW50ID0+IGJvb2wpKSBwdWJsaWMgbmVzdGVkOwoKICAgIGZ1bmN0aW9uIGdldChhZGRyZXNzIF9hZGRyMSwgdWludCBfaSkgcHVibGljIHZpZXcgcmV0dXJucyAoYm9vbCkgewogICAgICAgIC8vIFlvdSBjYW4gZ2V0IHZhbHVlcyBmcm9tIGEgbmVzdGVkIG1hcHBpbmcKICAgICAgICAvLyBldmVuIHdoZW4gaXQgaXMgbm90IGluaXRpYWxpemVkCiAgICAgICAgcmV0dXJuIG5lc3RlZFtfYWRkcjFdW19pXTsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXQoYWRkcmVzcyBfYWRkcjEsIHVpbnQgX2ksIGJvb2wgX2JvbykgcHVibGljIHsKICAgICAgICBuZXN0ZWRbX2FkZHIxXVtfaV0gPSBfYm9vOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlbW92ZShhZGRyZXNzIF9hZGRyMSwgdWludCBfaSkgcHVibGljIHsKICAgICAgICBkZWxldGUgbmVzdGVkW19hZGRyMV1bX2ldOwogICAgfQp9Cg==",
    },
]

const html = `<p>Maps are created with the syntax <code>mapping(keyType =&gt; valueType)</code>.</p>
<p>The <code>keyType</code> can be any built-in value type, bytes, string, or any contract.</p>
<p><code>valueType</code> can be any type including another mapping or an array.</p>
<p>Mappings are not iterable.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Mapping</span> </span>{
    <span class="hljs-comment">// Mapping from address to uint</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> myMap;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">// Mapping always returns a value.</span>
        <span class="hljs-comment">// If the value was never set, it will return the default value.</span>
        <span class="hljs-keyword">return</span> myMap[_addr];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Update the value at this address</span>
        myMap[_addr] <span class="hljs-operator">=</span> _i;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Reset the value to the default value.</span>
        <span class="hljs-keyword">delete</span> myMap[_addr];
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">NestedMapping</span> </span>{
    <span class="hljs-comment">// Nested mapping (mapping from address to another mapping)</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">public</span> nested;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-comment">// You can get values from a nested mapping</span>
        <span class="hljs-comment">// even when it is not initialized</span>
        <span class="hljs-keyword">return</span> nested[_addr1][_i];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i, <span class="hljs-keyword">bool</span> _boo</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        nested[_addr1][_i] <span class="hljs-operator">=</span> _boo;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">remove</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr1, <span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">delete</span> nested[_addr1][_i];
    }
}
</code></pre>`

export default html
