// metadata
export const version = "0.8.26"
export const title = "Foundry Send"
export const description = "Foundry send"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/foundry-send-solidity-code-example"

export const keywords = ["foundry", "send", "deal", "hoax"]

export const codes = [
  {
    fileName: "SendTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKaW1wb3J0ICJmb3JnZS1zdGQvVGVzdC5zb2wiOwoKLy8gRXhhbXBsZXMgb2YgZGVhbCBhbmQgaG9heAovLyBkZWFsKGFkZHJlc3MsIHVpbnQpIC0gU2V0IEVUSCBiYWxhbmNlIG9mIGFkZHJlc3MKLy8gZGVhbChhZGRyZXNzLCBhZGRyZXNzLCB1aW50MjU2KSAtIFNldHMgRVJDMjAgdG9rZW4gYmFsYW5jZSAod29ya3MgZm9yIG1vc3QgdG9rZW5zKQovLyBob2F4KGFkZHJlc3MsIHVpbnQpIC0gZGVhbCArIHByYW5rCgpjb250cmFjdCBFUkMyMCB7CiAgICB1aW50MjU2IHB1YmxpYyB0b3RhbFN1cHBseTsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2KSBwdWJsaWMgYmFsYW5jZU9mOwp9Cgpjb250cmFjdCBTZW5kVGVzdCBpcyBUZXN0IHsKICAgIEVSQzIwIHRva2VuID0gbmV3IEVSQzIwKCk7CgogICAgZnVuY3Rpb24gdGVzdFNlbmRFdGgoKSBwdWJsaWMgewogICAgICAgIC8vIFNldCBFVEggYmFsYW5jZQogICAgICAgIGRlYWwoYWRkcmVzcygxKSwgMTAwKTsKICAgICAgICBhc3NlcnRFcShhZGRyZXNzKDEpLmJhbGFuY2UsIDEwMCk7CgogICAgICAgIC8vIFNldCBFUkMyMCBiYWxhbmNlCiAgICAgICAgZGVhbChhZGRyZXNzKHRva2VuKSwgYWRkcmVzcygxKSwgMTApOwogICAgICAgIGFzc2VydEVxKHRva2VuLmJhbGFuY2VPZihhZGRyZXNzKDEpKSwgMTApOwogICAgfQp9Cg==",
  },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;

<span class="hljs-comment">// Examples of deal and hoax</span>
<span class="hljs-comment">// deal(address, uint) - Set ETH balance of address</span>
<span class="hljs-comment">// deal(address, address, uint256) - Sets ERC20 token balance (works for most tokens)</span>
<span class="hljs-comment">// hoax(address, uint) - deal + prank</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC20</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SendTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    ERC20 token <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> ERC20();

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSendEth</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Set ETH balance</span>
        deal(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>), <span class="hljs-number">100</span>);
        assertEq(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>).<span class="hljs-built_in">balance</span>, <span class="hljs-number">100</span>);

        <span class="hljs-comment">// Set ERC20 balance</span>
        deal(<span class="hljs-keyword">address</span>(token), <span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>), <span class="hljs-number">10</span>);
        assertEq(token.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>)), <span class="hljs-number">10</span>);
    }
}
</code></pre>`

export default html
