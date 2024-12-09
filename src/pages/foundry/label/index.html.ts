// metadata
export const version = "0.8.26"
export const title = "Foundry Label"
export const description = "Foundry label"
export const cyfrinLink = ""

export const keywords = ["foundry", "label"]

export const codes = [
  {
    fileName: "LabelTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKaW1wb3J0ICJmb3JnZS1zdGQvVGVzdC5zb2wiOwoKYWRkcmVzcyBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcykgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKfQoKY29udHJhY3QgTGFiZWxUZXN0IGlzIFRlc3QgewogICAgSUVSQzIwIHdldGg7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIHdldGggPSBJRVJDMjAoV0VUSCk7CiAgICAgICAgLy8gTGFiZWwgYWRkcmVzcyB3aXRoICJXRVRIIiwgdGhpcyB3aWxsIGJlIGRpc3BsYXllZCBpbiBzdGFjayB0cmFjZXMKICAgICAgICB2bS5sYWJlbChXRVRILCAiV0VUSCIpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3QoKSBwdWJsaWMgewogICAgICAgIGNvbnNvbGUubG9nKCIlZSIsIHdldGguYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpKTsKICAgIH0KfQo=",
  },
]

const html = `<p>Use <code>vm.label</code> to put a label on contracts</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">LabelTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IERC20 weth;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        weth <span class="hljs-operator">=</span> IERC20(WETH);
        <span class="hljs-comment">// Label address with "WETH", this will be displayed in stack traces</span>
        vm.label(WETH, <span class="hljs-string">"WETH"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        console.log(<span class="hljs-string">"%e"</span>, weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)));
    }
}
</code></pre>`

export default html
