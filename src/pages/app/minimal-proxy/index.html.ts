// metadata
export const version = "0.8.10"
export const title = "Minimal Proxy Contract"
export const description = "Deploy contracts cheaply with minimal proxy contract"

const html = `<p>If you have a contract that will be deployed multiple times, use minimal proxy contract to deploy them cheaply.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-comment">// original code</span>
<span class="hljs-comment">// https://github.com/optionality/clone-factory/blob/master/contracts/CloneFactory.sol</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MinimalProxy</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">clone</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> target</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> result</span>) </span>{
        <span class="hljs-comment">// convert address to 20 bytes</span>
        <span class="hljs-keyword">bytes20</span> targetBytes = <span class="hljs-keyword">bytes20</span>(target);

        <span class="hljs-comment">// actual code //</span>
        <span class="hljs-comment">// 3d602d80600a3d3981f3363d3d373d3d3d363d73bebebebebebebebebebebebebebebebebebebebe5af43d82803e903d91602b57fd5bf3</span>

        <span class="hljs-comment">// creation code //</span>
        <span class="hljs-comment">// copy runtime code into memory and return it</span>
        <span class="hljs-comment">// 3d602d80600a3d3981f3</span>

        <span class="hljs-comment">// runtime code //</span>
        <span class="hljs-comment">// code to delegatecall to address</span>
        <span class="hljs-comment">// 363d3d373d3d3d363d73 address 5af43d82803e903d91602b57fd5bf3</span>

        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">/*
            reads the 32 bytes of memory starting at pointer stored in 0x40

            In solidity, the 0x40 slot in memory is special: it contains the "free memory pointer"
            which points to the end of the currently allocated memory.
            */</span>
            <span class="hljs-keyword">let</span> clone := <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
            <span class="hljs-comment">// store 32 bytes to memory starting at "clone"</span>
            <span class="hljs-built_in">mstore</span>(
                clone,
                <span class="hljs-number">0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000</span>
            )

            <span class="hljs-comment">/*
              |              20 bytes                |
            0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000
                                                      ^
                                                      pointer
            */</span>
            <span class="hljs-comment">// store 32 bytes to memory starting at "clone" + 20 bytes</span>
            <span class="hljs-comment">// 0x14 = 20</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(clone, <span class="hljs-number">0x14</span>), targetBytes)

            <span class="hljs-comment">/*
              |               20 bytes               |                 20 bytes              |
            0x3d602d80600a3d3981f3363d3d373d3d3d363d73bebebebebebebebebebebebebebebebebebebebe
                                                                                              ^
                                                                                              pointer
            */</span>
            <span class="hljs-comment">// store 32 bytes to memory starting at "clone" + 40 bytes</span>
            <span class="hljs-comment">// 0x28 = 40</span>
            <span class="hljs-built_in">mstore</span>(
                <span class="hljs-built_in">add</span>(clone, <span class="hljs-number">0x28</span>),
                <span class="hljs-number">0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000</span>
            )

            <span class="hljs-comment">/*
              |               20 bytes               |                 20 bytes              |           15 bytes          |
            0x3d602d80600a3d3981f3363d3d373d3d3d363d73bebebebebebebebebebebebebebebebebebebebe5af43d82803e903d91602b57fd5bf3
            */</span>
            <span class="hljs-comment">// create new contract</span>
            <span class="hljs-comment">// send 0 Ether</span>
            <span class="hljs-comment">// code starts at pointer stored in "clone"</span>
            <span class="hljs-comment">// code size 0x37 (55 bytes)</span>
            result := <span class="hljs-built_in">create</span>(<span class="hljs-number">0</span>, clone, <span class="hljs-number">0x37</span>)
        }
    }
}
</code></pre>
`

export default html
