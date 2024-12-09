// metadata
export const version = "0.8.26"
export const title = "Foundry Mock Call"
export const description = "Foudry mock call"
export const cyfrinLink = ""

export const keywords = ["foundry", "mock", "call"]

export const codes = [
  {
    fileName: "MockCallTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKaW1wb3J0ICJmb3JnZS1zdGQvVGVzdC5zb2wiOwoKY29udHJhY3QgVGFyZ2V0IHsKICAgIGZ1bmN0aW9uIGYodWludDI1NiB4LCB1aW50MjU2IHkpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiBnKCk7CiAgICB9CgogICAgZnVuY3Rpb24gZygpIGludGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiAxOwogICAgfQp9Cgpjb250cmFjdCBNb2NrQ2FsbFRlc3QgaXMgVGVzdCB7CiAgICBUYXJnZXQgdGFyZ2V0OwoKICAgIGZ1bmN0aW9uIHNldFVwKCkgcHVibGljIHsKICAgICAgICB0YXJnZXQgPSBuZXcgVGFyZ2V0KCk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdCgpIHB1YmxpYyB7CiAgICAgICAgdWludDI1NiB4ID0gMTsKICAgICAgICB1aW50MjU2IHkgPSAxOwogICAgICAgIHZtLm1vY2tDYWxsKAogICAgICAgICAgICBhZGRyZXNzKHRhcmdldCksCiAgICAgICAgICAgIGFiaS5lbmNvZGVDYWxsKFRhcmdldC5mLCAoeCwgeSkpLAogICAgICAgICAgICBhYmkuZW5jb2RlKHVpbnQyNTYoOTkpKQogICAgICAgICk7CgogICAgICAgIC8vIFJldHVybnMgOTkKICAgICAgICB1aW50MjU2IHJlcyA9IHRhcmdldC5mKHgsIHkpOwogICAgICAgIGNvbnNvbGUubG9nKCJyZXMiLCByZXMpOwogICAgfQp9Cg==",
  },
]

const html = `<p>Set return values from a function call with <code>mockCall</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Target</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> g();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">g</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MockCallTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    Target target;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        target <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Target();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> x <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">uint256</span> y <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        vm.mockCall(
            <span class="hljs-keyword">address</span>(target),
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Target.f, (x, y)),
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">99</span>))
        );

        <span class="hljs-comment">// Returns 99</span>
        <span class="hljs-keyword">uint256</span> res <span class="hljs-operator">=</span> target.f(x, y);
        console.log(<span class="hljs-string">"res"</span>, res);
    }
}
</code></pre>`

export default html
