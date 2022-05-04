// metadata
export const version = "0.8.13"
export const title = "ABI Decode"
export const description = "ABI decode bytes"

const html = `<p><code>abi.encode</code> encodes data into <code>bytes</code>.</p>
<p><code>abi.decode</code> decodes <code>bytes</code> back into data.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AbiDecode</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">MyStruct</span> {
        <span class="hljs-keyword">string</span> name;
        <span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] nums;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> x,
        <span class="hljs-keyword">address</span> addr,
        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">calldata</span> arr,
        MyStruct <span class="hljs-keyword">calldata</span> myStruct
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(x, addr, arr, myStruct);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">decode</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span> x,
            <span class="hljs-keyword">address</span> addr,
            <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> arr,
            MyStruct <span class="hljs-keyword">memory</span> myStruct
        </span>)
    </span>{
        <span class="hljs-comment">// (uint x, address addr, uint[] memory arr, MyStruct myStruct) = ...</span>
        (x, addr, arr, myStruct) <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(data, (<span class="hljs-keyword">uint</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint</span>[], MyStruct));
    }
}
</code></pre>
`

export default html
