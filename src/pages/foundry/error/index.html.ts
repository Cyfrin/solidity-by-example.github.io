// metadata
export const version = "0.8.26"
export const title = "Foundry Error"
export const description = "Foundry error example"
export const cyfrinLink = "https://www.cyfrin.io/glossary/foundry-error-solidity-code-example"

export const keywords = [
    "foundry",
    "error",
]

export const codes = [
    {
        fileName: "ErrorTest.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKaW1wb3J0ICJmb3JnZS1zdGQvVGVzdC5zb2wiOwoKY29udHJhY3QgRXJyb3IgewogICAgZXJyb3IgTm90QXV0aG9yaXplZCgpOwoKICAgIGZ1bmN0aW9uIHRocm93RXJyb3IoKSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShmYWxzZSwgIm5vdCBhdXRob3JpemVkIik7CiAgICB9CgogICAgZnVuY3Rpb24gdGhyb3dDdXN0b21FcnJvcigpIGV4dGVybmFsIHsKICAgICAgICByZXZlcnQgTm90QXV0aG9yaXplZCgpOwogICAgfQp9Cgpjb250cmFjdCBFcnJvclRlc3QgaXMgVGVzdCB7CiAgICBFcnJvciBwdWJsaWMgZXJyOwoKICAgIGZ1bmN0aW9uIHNldFVwKCkgcHVibGljIHsKICAgICAgICBlcnIgPSBuZXcgRXJyb3IoKTsKICAgIH0KCiAgICAvLyBTdGFydCB0ZXN0IG5hbWUgd2l0aCB0ZXN0RmFpbAogICAgZnVuY3Rpb24gdGVzdEZhaWwoKSBwdWJsaWMgewogICAgICAgIGVyci50aHJvd0Vycm9yKCk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdFJldmVydCgpIHB1YmxpYyB7CiAgICAgICAgdm0uZXhwZWN0UmV2ZXJ0KCk7CiAgICAgICAgZXJyLnRocm93RXJyb3IoKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0UmVxdWlyZU1lc3NhZ2UoKSBwdWJsaWMgewogICAgICAgIHZtLmV4cGVjdFJldmVydChieXRlcygibm90IGF1dGhvcml6ZWQiKSk7CiAgICAgICAgZXJyLnRocm93RXJyb3IoKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0Q3VzdG9tRXJyb3IoKSBwdWJsaWMgewogICAgICAgIHZtLmV4cGVjdFJldmVydChFcnJvci5Ob3RBdXRob3JpemVkLnNlbGVjdG9yKTsKICAgICAgICBlcnIudGhyb3dDdXN0b21FcnJvcigpOwogICAgfQoKICAgIC8vIEFkZCBsYWJlbCB0byBhc3NlcnRpb25zCiAgICBmdW5jdGlvbiB0ZXN0RXJyb3JMYWJlbCgpIHB1YmxpYyB7CiAgICAgICAgYXNzZXJ0RXEodWludDI1NigxKSwgdWludDI1NigxKSwgInRlc3QgMSIpOwogICAgICAgIGFzc2VydEVxKHVpbnQyNTYoMSksIHVpbnQyNTYoMSksICJ0ZXN0IDIiKTsKICAgICAgICBhc3NlcnRFcSh1aW50MjU2KDEpLCB1aW50MjU2KDEpLCAidGVzdCAzIik7CiAgICB9Cn0K",
    },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title"><span class="hljs-built_in">Error</span></span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">NotAuthorized</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">throwError</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-literal">false</span>, <span class="hljs-string">"not authorized"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">throwCustomError</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">revert</span> NotAuthorized();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ErrorTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    <span class="hljs-built_in">Error</span> <span class="hljs-keyword">public</span> err;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        err <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>();
    }

    <span class="hljs-comment">// Start test name with testFail</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testFail</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        err.throwError();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRevert</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        vm.expectRevert();
        err.throwError();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRequireMessage</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        vm.expectRevert(<span class="hljs-keyword">bytes</span>(<span class="hljs-string">"not authorized"</span>));
        err.throwError();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testCustomError</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        vm.expectRevert(<span class="hljs-built_in">Error</span>.NotAuthorized.<span class="hljs-built_in">selector</span>);
        err.throwCustomError();
    }

    <span class="hljs-comment">// Add label to assertions</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testErrorLabel</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        assertEq(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">1</span>), <span class="hljs-keyword">uint256</span>(<span class="hljs-number">1</span>), <span class="hljs-string">"test 1"</span>);
        assertEq(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">1</span>), <span class="hljs-keyword">uint256</span>(<span class="hljs-number">1</span>), <span class="hljs-string">"test 2"</span>);
        assertEq(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">1</span>), <span class="hljs-keyword">uint256</span>(<span class="hljs-number">1</span>), <span class="hljs-string">"test 3"</span>);
    }
}
</code></pre>`

export default html
