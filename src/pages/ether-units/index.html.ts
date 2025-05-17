// metadata
export const version = "0.8.26"
export const title = "Ether and Wei"
export const description = "An example of Ether and Wei in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/ether-and-wei-solidity-code-example"

export const keywords = ["data", "variables", "variable", "ether", "wei", "units"]

export const codes = [
  {
    fileName: "EtherUnits.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEV0aGVyVW5pdHMgewogICAgdWludDI1NiBwdWJsaWMgb25lV2VpID0gMSB3ZWk7CiAgICAvLyAxIHdlaSBpcyBlcXVhbCB0byAxCiAgICBib29sIHB1YmxpYyBpc09uZVdlaSA9IChvbmVXZWkgPT0gMSk7CgogICAgdWludDI1NiBwdWJsaWMgb25lR3dlaSA9IDEgZ3dlaTsKICAgIC8vIDEgZ3dlaSBpcyBlcXVhbCB0byAxMF45IHdlaQogICAgYm9vbCBwdWJsaWMgaXNPbmVHd2VpID0gKG9uZUd3ZWkgPT0gMWU5KTsKCiAgICB1aW50MjU2IHB1YmxpYyBvbmVFdGhlciA9IDEgZXRoZXI7CiAgICAvLyAxIGV0aGVyIGlzIGVxdWFsIHRvIDEwXjE4IHdlaQogICAgYm9vbCBwdWJsaWMgaXNPbmVFdGhlciA9IChvbmVFdGhlciA9PSAxZTE4KTsKfQo=",
  },
]

const html = `<p>Transactions are paid with <code>ether</code>.</p>
<p>Similar to how one dollar is equal to 100 cents, one <code>ether</code> is equal to 10<sup>18</sup> <code>wei</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherUnits</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> oneWei <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">wei</span>;
    <span class="hljs-comment">// 1 wei is equal to 1</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneWei <span class="hljs-operator">=</span> (oneWei <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>);

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> oneGwei <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">gwei</span>;
    <span class="hljs-comment">// 1 gwei is equal to 10^9 wei</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneGwei <span class="hljs-operator">=</span> (oneGwei <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1e9</span>);

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> oneEther <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-comment">// 1 ether is equal to 10^18 wei</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneEther <span class="hljs-operator">=</span> (oneEther <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>);
}
</code></pre>`

export default html
