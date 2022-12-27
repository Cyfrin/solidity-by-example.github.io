// metadata
export const version = "0.8.17"
export const title = "Data Locations - Storage, Memory and Calldata"
export const description = "Data locations - storage, memory and calldata"
export const codes = [
  {
    fileName: "DataLocations.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IERhdGFMb2NhdGlvbnMgewogICAgdWludFtdIHB1YmxpYyBhcnI7CiAgICBtYXBwaW5nKHVpbnQgPT4gYWRkcmVzcykgbWFwOwogICAgc3RydWN0IE15U3RydWN0IHsKICAgICAgICB1aW50IGZvbzsKICAgIH0KICAgIG1hcHBpbmcodWludCA9PiBNeVN0cnVjdCkgbXlTdHJ1Y3RzOwoKICAgIGZ1bmN0aW9uIGYoKSBwdWJsaWMgewogICAgICAgIC8vIGNhbGwgX2Ygd2l0aCBzdGF0ZSB2YXJpYWJsZXMKICAgICAgICBfZihhcnIsIG1hcCwgbXlTdHJ1Y3RzWzFdKTsKCiAgICAgICAgLy8gZ2V0IGEgc3RydWN0IGZyb20gYSBtYXBwaW5nCiAgICAgICAgTXlTdHJ1Y3Qgc3RvcmFnZSBteVN0cnVjdCA9IG15U3RydWN0c1sxXTsKICAgICAgICAvLyBjcmVhdGUgYSBzdHJ1Y3QgaW4gbWVtb3J5CiAgICAgICAgTXlTdHJ1Y3QgbWVtb3J5IG15TWVtU3RydWN0ID0gTXlTdHJ1Y3QoMCk7CiAgICB9CgogICAgZnVuY3Rpb24gX2YoCiAgICAgICAgdWludFtdIHN0b3JhZ2UgX2FyciwKICAgICAgICBtYXBwaW5nKHVpbnQgPT4gYWRkcmVzcykgc3RvcmFnZSBfbWFwLAogICAgICAgIE15U3RydWN0IHN0b3JhZ2UgX215U3RydWN0CiAgICApIGludGVybmFsIHsKICAgICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCBzdG9yYWdlIHZhcmlhYmxlcwogICAgfQoKICAgIC8vIFlvdSBjYW4gcmV0dXJuIG1lbW9yeSB2YXJpYWJsZXMKICAgIGZ1bmN0aW9uIGcodWludFtdIG1lbW9yeSBfYXJyKSBwdWJsaWMgcmV0dXJucyAodWludFtdIG1lbW9yeSkgewogICAgICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIG1lbW9yeSBhcnJheQogICAgfQoKICAgIGZ1bmN0aW9uIGgodWludFtdIGNhbGxkYXRhIF9hcnIpIGV4dGVybmFsIHsKICAgICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCBjYWxsZGF0YSBhcnJheQogICAgfQp9Cg==",
  },
]

const html = `<p>Variables are declared as either <code>storage</code>, <code>memory</code> or <code>calldata</code> to explicitly
specify the location of the data.</p>
<ul>
<li><code>storage</code> - variable is a state variable (store on blockchain)</li>
<li><code>memory</code> - variable is in memory and it exists while a function is being called</li>
<li><code>calldata</code> - special data location that contains function arguments</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">DataLocations</span> </span>{
    <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">public</span> arr;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) map;
    <span class="hljs-keyword">struct</span> <span class="hljs-title">MyStruct</span> {
        <span class="hljs-keyword">uint</span> foo;
    }
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> MyStruct) myStructs;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// call _f with state variables</span>
        _f(arr, map, myStructs[<span class="hljs-number">1</span>]);

        <span class="hljs-comment">// get a struct from a mapping</span>
        MyStruct <span class="hljs-keyword">storage</span> myStruct <span class="hljs-operator">=</span> myStructs[<span class="hljs-number">1</span>];
        <span class="hljs-comment">// create a struct in memory</span>
        MyStruct <span class="hljs-keyword">memory</span> myMemStruct <span class="hljs-operator">=</span> MyStruct(<span class="hljs-number">0</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">storage</span> _arr,
        <span class="hljs-keyword">mapping</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> =&gt; <span class="hljs-keyword">address</span></span>) <span class="hljs-keyword">storage</span> _map,
        MyStruct <span class="hljs-keyword">storage</span> _myStruct
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-comment">// do something with storage variables</span>
    }

    <span class="hljs-comment">// You can return memory variables</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">g</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> _arr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-comment">// do something with memory array</span>
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">h</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">calldata</span> _arr</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// do something with calldata array</span>
    }
}
</code></pre>
`

export default html
