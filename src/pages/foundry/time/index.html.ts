// metadata
export const version = "0.8.26"
export const title = "Foundry Time"
export const description = "Foundry time"
export const cyfrinLink = "https://www.cyfrin.io/glossary/call-solidity-code-example"

export const keywords = ["foundry", "time", "warp", "skip", "roll", "unwind"]

export const codes = [
  {
    fileName: "TimeTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKaW1wb3J0ICJmb3JnZS1zdGQvVGVzdC5zb2wiOwoKY29udHJhY3QgVGltZVRlc3QgaXMgVGVzdCB7CiAgICAvLyB2bS53YXJwIC0gc2V0IGJsb2NrLnRpbWVzdGFtcCB0byBmdXR1cmUgdGltZXN0YW1wCiAgICAvLyB2bS5yb2xsIC0gc2V0IGJsb2NrLm51bWJlcgogICAgLy8gc2tpcCAtIGluY3JlbWVudCBjdXJyZW50IHRpbWVzdGFtcAogICAgLy8gcmV3aW5kIC0gZGVjcmVtZW50IGN1cnJlbnQgdGltZXN0YW1wCgogICAgZnVuY3Rpb24gdGVzdCgpIHB1YmxpYyB7CiAgICAgICAgY29uc29sZS5sb2coInRpbWVzdGFtcCIsIGJsb2NrLnRpbWVzdGFtcCk7CiAgICAgICAgY29uc29sZS5sb2coImJsb2NrIG51bWJlciIsIGJsb2NrLm51bWJlcik7CgogICAgICAgIGNvbnNvbGUubG9nKCJ3YXJwIik7CiAgICAgICAgdm0ud2FycChibG9jay50aW1lc3RhbXAgKyAxMCk7CiAgICAgICAgY29uc29sZS5sb2coInRpbWVzdGFtcCIsIGJsb2NrLnRpbWVzdGFtcCk7CgogICAgICAgIGNvbnNvbGUubG9nKCJza2lwIik7CiAgICAgICAgc2tpcCgxMCk7CiAgICAgICAgY29uc29sZS5sb2coInRpbWVzdGFtcCIsIGJsb2NrLnRpbWVzdGFtcCk7CgogICAgICAgIGNvbnNvbGUubG9nKCJyb2xsIik7CiAgICAgICAgdm0ucm9sbCgxMCk7CiAgICAgICAgY29uc29sZS5sb2coImJsb2NrIG51bWJlciIsIGJsb2NrLm51bWJlcik7CgogICAgICAgIGNvbnNvbGUubG9nKCJyZXdpbmQiKTsKICAgICAgICByZXdpbmQoMTApOwogICAgICAgIGNvbnNvbGUubG9nKCJ0aW1lc3RhbXAiLCBibG9jay50aW1lc3RhbXApOwogICAgfQp9Cg==",
  },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TimeTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    <span class="hljs-comment">// vm.warp - set block.timestamp to future timestamp</span>
    <span class="hljs-comment">// vm.roll - set block.number</span>
    <span class="hljs-comment">// skip - increment current timestamp</span>
    <span class="hljs-comment">// rewind - decrement current timestamp</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        console.log(<span class="hljs-string">"timestamp"</span>, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);
        console.log(<span class="hljs-string">"block number"</span>, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">number</span>);

        console.log(<span class="hljs-string">"warp"</span>);
        vm.warp(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> <span class="hljs-number">10</span>);
        console.log(<span class="hljs-string">"timestamp"</span>, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);

        console.log(<span class="hljs-string">"skip"</span>);
        skip(<span class="hljs-number">10</span>);
        console.log(<span class="hljs-string">"timestamp"</span>, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);

        console.log(<span class="hljs-string">"roll"</span>);
        vm.roll(<span class="hljs-number">10</span>);
        console.log(<span class="hljs-string">"block number"</span>, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">number</span>);

        console.log(<span class="hljs-string">"rewind"</span>);
        rewind(<span class="hljs-number">10</span>);
        console.log(<span class="hljs-string">"timestamp"</span>, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);
    }
}
</code></pre>`

export default html
