// metadata
export const version = "0.8.26"
export const title = "Data Locations - Storage, Memory and Calldata"
export const description = "Data locations - storage, memory and calldata"

export const keywords = [
  "data",
  "location",
  "locations",
  "storage",
  "memory",
  "calldata",
]

export const codes = [
  {
    fileName: "DataLocations.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IERhdGFMb2NhdGlvbnMgewogICAgdWludDI1NltdIHB1YmxpYyBhcnI7CiAgICBtYXBwaW5nKHVpbnQyNTYgPT4gYWRkcmVzcykgbWFwOwoKICAgIHN0cnVjdCBNeVN0cnVjdCB7CiAgICAgICAgdWludDI1NiBmb287CiAgICB9CgogICAgbWFwcGluZyh1aW50MjU2ID0+IE15U3RydWN0KSBteVN0cnVjdHM7CgogICAgZnVuY3Rpb24gZigpIHB1YmxpYyB7CiAgICAgICAgLy8gY2FsbCBfZiB3aXRoIHN0YXRlIHZhcmlhYmxlcwogICAgICAgIF9mKGFyciwgbWFwLCBteVN0cnVjdHNbMV0pOwoKICAgICAgICAvLyBnZXQgYSBzdHJ1Y3QgZnJvbSBhIG1hcHBpbmcKICAgICAgICBNeVN0cnVjdCBzdG9yYWdlIG15U3RydWN0ID0gbXlTdHJ1Y3RzWzFdOwogICAgICAgIC8vIGNyZWF0ZSBhIHN0cnVjdCBpbiBtZW1vcnkKICAgICAgICBNeVN0cnVjdCBtZW1vcnkgbXlNZW1TdHJ1Y3QgPSBNeVN0cnVjdCgwKTsKICAgIH0KCiAgICBmdW5jdGlvbiBfZigKICAgICAgICB1aW50MjU2W10gc3RvcmFnZSBfYXJyLAogICAgICAgIG1hcHBpbmcodWludDI1NiA9PiBhZGRyZXNzKSBzdG9yYWdlIF9tYXAsCiAgICAgICAgTXlTdHJ1Y3Qgc3RvcmFnZSBfbXlTdHJ1Y3QKICAgICkgaW50ZXJuYWwgewogICAgICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHN0b3JhZ2UgdmFyaWFibGVzCiAgICB9CgogICAgLy8gWW91IGNhbiByZXR1cm4gbWVtb3J5IHZhcmlhYmxlcwogICAgZnVuY3Rpb24gZyh1aW50MjU2W10gbWVtb3J5IF9hcnIpIHB1YmxpYyByZXR1cm5zICh1aW50MjU2W10gbWVtb3J5KSB7CiAgICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggbWVtb3J5IGFycmF5CiAgICB9CgogICAgZnVuY3Rpb24gaCh1aW50MjU2W10gY2FsbGRhdGEgX2FycikgZXh0ZXJuYWwgewogICAgICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIGNhbGxkYXRhIGFycmF5CiAgICB9Cn0K",
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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">DataLocations</span> </span>{
    <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">public</span> arr;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint256</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) map;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">MyStruct</span> {
        <span class="hljs-keyword">uint256</span> foo;
    }

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint256</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> MyStruct) myStructs;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// call _f with state variables</span>
        _f(arr, map, myStructs[<span class="hljs-number">1</span>]);

        <span class="hljs-comment">// get a struct from a mapping</span>
        MyStruct <span class="hljs-keyword">storage</span> myStruct <span class="hljs-operator">=</span> myStructs[<span class="hljs-number">1</span>];
        <span class="hljs-comment">// create a struct in memory</span>
        MyStruct <span class="hljs-keyword">memory</span> myMemStruct <span class="hljs-operator">=</span> MyStruct(<span class="hljs-number">0</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_f</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">storage</span> _arr,
        <span class="hljs-keyword">mapping</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> =&gt; <span class="hljs-keyword">address</span></span>) <span class="hljs-keyword">storage</span> _map,
        MyStruct <span class="hljs-keyword">storage</span> _myStruct
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-comment">// do something with storage variables</span>
    }

    <span class="hljs-comment">// You can return memory variables</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">g</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> _arr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-comment">// do something with memory array</span>
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">h</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> _arr</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// do something with calldata array</span>
    }
}
</code></pre>`

export default html
