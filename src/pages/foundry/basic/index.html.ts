// metadata
export const version = "0.8.26"
export const title = "Foundry Basic"
export const description = "Foundry basic example"
export const cyfrinLink = ""

export const keywords = ["foundry", "basic", "counter"]

export const codes = [
  {
    fileName: "CounterTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKaW1wb3J0IHtUZXN0LCBjb25zb2xlMiwgc3RkRXJyb3J9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7Cgpjb250cmFjdCBDb3VudGVyIHsKICAgIHVpbnQyNTYgcHVibGljIGNvdW50OwoKICAgIGZ1bmN0aW9uIGluYygpIGV4dGVybmFsIHsKICAgICAgICBjb3VudCArPSAxOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlYygpIGV4dGVybmFsIHsKICAgICAgICBjb3VudCAtPSAxOwogICAgfQp9Cgpjb250cmFjdCBDb3VudGVyVGVzdCBpcyBUZXN0IHsKICAgIENvdW50ZXIgcHVibGljIGNvdW50ZXI7CgogICAgLy8gSW52b2tlZCBiZWZvcmUgZWFjaCB0ZXN0CiAgICBmdW5jdGlvbiBzZXRVcCgpIHB1YmxpYyB7CiAgICAgICAgY291bnRlciA9IG5ldyBDb3VudGVyKCk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdEluYygpIHB1YmxpYyB7CiAgICAgICAgY291bnRlci5pbmMoKTsKICAgICAgICBhc3NlcnRFcShjb3VudGVyLmNvdW50KCksIDEpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RGYWlsRGVjKCkgcHVibGljIHsKICAgICAgICAvLyBUaGlzIHdpbGwgZmFpbCB3aXRoIHVuZGVyZmxvdwogICAgICAgIGNvdW50ZXIuZGVjKCk7CiAgICB9CgogICAgLy8gU2FtZSBhcyB0ZXN0RmFpbERlYwogICAgZnVuY3Rpb24gdGVzdERlY1VuZGVyZmxvdygpIHB1YmxpYyB7CiAgICAgICAgdm0uZXhwZWN0UmV2ZXJ0KHN0ZEVycm9yLmFyaXRobWV0aWNFcnJvcik7CiAgICAgICAgY291bnRlci5kZWMoKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0RGVjKCkgcHVibGljIHsKICAgICAgICBjb3VudGVyLmluYygpOwogICAgICAgIGNvdW50ZXIuaW5jKCk7CiAgICAgICAgY291bnRlci5kZWMoKTsKICAgICAgICBhc3NlcnRFcShjb3VudGVyLmNvdW50KCksIDEpOwogICAgfQp9Cg==",
  },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>, <span class="hljs-title">stdError</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dec</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CounterTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    Counter <span class="hljs-keyword">public</span> counter;

    <span class="hljs-comment">// Invoked before each test</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        counter <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Counter();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testInc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        counter.inc();
        assertEq(counter.count(), <span class="hljs-number">1</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testFailDec</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// This will fail with underflow</span>
        counter.dec();
    }

    <span class="hljs-comment">// Same as testFailDec</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testDecUnderflow</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        vm.expectRevert(stdError.arithmeticError);
        counter.dec();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testDec</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        counter.inc();
        counter.inc();
        counter.dec();
        assertEq(counter.count(), <span class="hljs-number">1</span>);
    }
}
</code></pre>`

export default html
