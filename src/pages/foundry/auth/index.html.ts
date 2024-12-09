// metadata
export const version = "0.8.26"
export const title = "Foundry Authorization"
export const description = "Foundry authorization example"
export const cyfrinLink = ""

export const keywords = ["foundry", "auth", "authorization", "prank"]

export const codes = [
  {
    fileName: "AuthTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKaW1wb3J0IHtUZXN0LCBjb25zb2xlMiwgc3RkRXJyb3J9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7Cgpjb250cmFjdCBBdXRoIHsKICAgIGFkZHJlc3MgcHVibGljIG93bmVyOwoKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICAgIG93bmVyID0gbXNnLnNlbmRlcjsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXRPd25lcihhZGRyZXNzIF9vd25lcikgZXh0ZXJuYWwgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBvd25lciwgIm5vdCBhdXRob3JpemVkIik7CiAgICAgICAgb3duZXIgPSBfb3duZXI7CiAgICB9Cn0KCmNvbnRyYWN0IEF1dGhUZXN0IGlzIFRlc3QgewogICAgQXV0aCBwcml2YXRlIGF1dGg7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIC8vIG93bmVyID0gdGhpcyBjb250cmFjdAogICAgICAgIGF1dGggPSBuZXcgQXV0aCgpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RTZXRPd25lcigpIHB1YmxpYyB7CiAgICAgICAgYXV0aC5zZXRPd25lcihhZGRyZXNzKDEpKTsKICAgICAgICBhc3NlcnRFcShhdXRoLm93bmVyKCksIGFkZHJlc3MoMSkpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RGYWlsTm90T3duZXIoKSBwdWJsaWMgewogICAgICAgIC8vIE5leHQgY2FsbCB3aWxsIGJlIGNhbGxlZCBieSBhZGRyZXNzKDEpCiAgICAgICAgdm0ucHJhbmsoYWRkcmVzcygxKSk7CiAgICAgICAgYXV0aC5zZXRPd25lcihhZGRyZXNzKDEpKTsKCiAgICAgICAgdm0uc3RhcnRQcmFuayhhZGRyZXNzKDEpKTsKICAgICAgICAvLyBBbGwgY2FsbHMgdW50aWwgc3RvcFByYW5rIHdpbGwgYmUgbWFkZSBieSBhZGRyZXNzKDEpCiAgICAgICAgYXV0aC5zZXRPd25lcihhZGRyZXNzKDEpKTsKICAgICAgICBhdXRoLnNldE93bmVyKGFkZHJlc3MoMSkpOwogICAgICAgIGF1dGguc2V0T3duZXIoYWRkcmVzcygxKSk7CiAgICAgICAgdm0uc3RvcFByYW5rKCk7CiAgICB9Cn0K",
  },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>, <span class="hljs-title">stdError</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Auth</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setOwner</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"not authorized"</span>);
        owner <span class="hljs-operator">=</span> _owner;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AuthTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    Auth <span class="hljs-keyword">private</span> auth;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// owner = this contract</span>
        auth <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Auth();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSetOwner</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        auth.setOwner(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));
        assertEq(auth.owner(), <span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testFailNotOwner</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Next call will be called by address(1)</span>
        vm.prank(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));
        auth.setOwner(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));

        vm.startPrank(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));
        <span class="hljs-comment">// All calls until stopPrank will be made by address(1)</span>
        auth.setOwner(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));
        auth.setOwner(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));
        auth.setOwner(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));
        vm.stopPrank();
    }
}
</code></pre>`

export default html
