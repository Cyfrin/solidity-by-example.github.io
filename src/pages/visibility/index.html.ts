// metadata
export const version = "0.8.26"
export const title = "Visibility"
export const description =
  "An example of external, internal, private and public functions in Solidity"
export const cyfrinLink = "https://www.cyfrin.io/glossary/visibility-code-example"

export const keywords = [
  "visibility",
  "function",
  "functions",
  "internal",
  "private",
  "public",
  "external",
]

export const codes = [
  {
    fileName: "Visibility.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEJhc2UgewogICAgLy8gUHJpdmF0ZSBmdW5jdGlvbiBjYW4gb25seSBiZSBjYWxsZWQKICAgIC8vIC0gaW5zaWRlIHRoaXMgY29udHJhY3QKICAgIC8vIENvbnRyYWN0cyB0aGF0IGluaGVyaXQgdGhpcyBjb250cmFjdCBjYW5ub3QgY2FsbCB0aGlzIGZ1bmN0aW9uLgogICAgZnVuY3Rpb24gcHJpdmF0ZUZ1bmMoKSBwcml2YXRlIHB1cmUgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgICAgIHJldHVybiAicHJpdmF0ZSBmdW5jdGlvbiBjYWxsZWQiOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RQcml2YXRlRnVuYygpIHB1YmxpYyBwdXJlIHJldHVybnMgKHN0cmluZyBtZW1vcnkpIHsKICAgICAgICByZXR1cm4gcHJpdmF0ZUZ1bmMoKTsKICAgIH0KCiAgICAvLyBJbnRlcm5hbCBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkCiAgICAvLyAtIGluc2lkZSB0aGlzIGNvbnRyYWN0CiAgICAvLyAtIGluc2lkZSBjb250cmFjdHMgdGhhdCBpbmhlcml0IHRoaXMgY29udHJhY3QKICAgIGZ1bmN0aW9uIGludGVybmFsRnVuYygpIGludGVybmFsIHB1cmUgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgICAgIHJldHVybiAiaW50ZXJuYWwgZnVuY3Rpb24gY2FsbGVkIjsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0SW50ZXJuYWxGdW5jKCkgcHVibGljIHB1cmUgdmlydHVhbCByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGludGVybmFsRnVuYygpOwogICAgfQoKICAgIC8vIFB1YmxpYyBmdW5jdGlvbnMgY2FuIGJlIGNhbGxlZAogICAgLy8gLSBpbnNpZGUgdGhpcyBjb250cmFjdAogICAgLy8gLSBpbnNpZGUgY29udHJhY3RzIHRoYXQgaW5oZXJpdCB0aGlzIGNvbnRyYWN0CiAgICAvLyAtIGJ5IG90aGVyIGNvbnRyYWN0cyBhbmQgYWNjb3VudHMKICAgIGZ1bmN0aW9uIHB1YmxpY0Z1bmMoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuICJwdWJsaWMgZnVuY3Rpb24gY2FsbGVkIjsKICAgIH0KCiAgICAvLyBFeHRlcm5hbCBmdW5jdGlvbnMgY2FuIG9ubHkgYmUgY2FsbGVkCiAgICAvLyAtIGJ5IG90aGVyIGNvbnRyYWN0cyBhbmQgYWNjb3VudHMKICAgIGZ1bmN0aW9uIGV4dGVybmFsRnVuYygpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgICAgIHJldHVybiAiZXh0ZXJuYWwgZnVuY3Rpb24gY2FsbGVkIjsKICAgIH0KCiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbm90IGNvbXBpbGUgc2luY2Ugd2UncmUgdHJ5aW5nIHRvIGNhbGwKICAgIC8vIGFuIGV4dGVybmFsIGZ1bmN0aW9uIGhlcmUuCiAgICAvLyBmdW5jdGlvbiB0ZXN0RXh0ZXJuYWxGdW5jKCkgcHVibGljIHB1cmUgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgLy8gICAgIHJldHVybiBleHRlcm5hbEZ1bmMoKTsKICAgIC8vIH0KCiAgICAvLyBTdGF0ZSB2YXJpYWJsZXMKICAgIHN0cmluZyBwcml2YXRlIHByaXZhdGVWYXIgPSAibXkgcHJpdmF0ZSB2YXJpYWJsZSI7CiAgICBzdHJpbmcgaW50ZXJuYWwgaW50ZXJuYWxWYXIgPSAibXkgaW50ZXJuYWwgdmFyaWFibGUiOwogICAgc3RyaW5nIHB1YmxpYyBwdWJsaWNWYXIgPSAibXkgcHVibGljIHZhcmlhYmxlIjsKICAgIC8vIFN0YXRlIHZhcmlhYmxlcyBjYW5ub3QgYmUgZXh0ZXJuYWwgc28gdGhpcyBjb2RlIHdvbid0IGNvbXBpbGUuCiAgICAvLyBzdHJpbmcgZXh0ZXJuYWwgZXh0ZXJuYWxWYXIgPSAibXkgZXh0ZXJuYWwgdmFyaWFibGUiOwp9Cgpjb250cmFjdCBDaGlsZCBpcyBCYXNlIHsKICAgIC8vIEluaGVyaXRlZCBjb250cmFjdHMgZG8gbm90IGhhdmUgYWNjZXNzIHRvIHByaXZhdGUgZnVuY3Rpb25zCiAgICAvLyBhbmQgc3RhdGUgdmFyaWFibGVzLgogICAgLy8gZnVuY3Rpb24gdGVzdFByaXZhdGVGdW5jKCkgcHVibGljIHB1cmUgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgLy8gICAgIHJldHVybiBwcml2YXRlRnVuYygpOwogICAgLy8gfQoKICAgIC8vIEludGVybmFsIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgaW5zaWRlIGNoaWxkIGNvbnRyYWN0cy4KICAgIGZ1bmN0aW9uIHRlc3RJbnRlcm5hbEZ1bmMoKSBwdWJsaWMgcHVyZSBvdmVycmlkZSByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGludGVybmFsRnVuYygpOwogICAgfQp9Cg==",
  },
]

const html = `<p>Functions and state variables have to declare whether they are accessible by other contracts.</p>
<p>Functions can be declared as</p>
<ul>
<li><code>public</code> - any contract and account can call</li>
<li><code>private</code> - only inside the contract that defines the function</li>
<li><code>internal</code>- only inside contract that inherits an <code>internal</code> function</li>
<li><code>external</code> - only other contracts and accounts can call</li>
</ul>
<p>State variables can be declared as <code>public</code>, <code>private</code>, or <code>internal</code> but not <code>external</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Base</span> </span>{
    <span class="hljs-comment">// Private function can only be called</span>
    <span class="hljs-comment">// - inside this contract</span>
    <span class="hljs-comment">// Contracts that inherit this contract cannot call this function.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">privateFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"private function called"</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testPrivateFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> privateFunc();
    }

    <span class="hljs-comment">// Internal function can be called</span>
    <span class="hljs-comment">// - inside this contract</span>
    <span class="hljs-comment">// - inside contracts that inherit this contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">internalFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"internal function called"</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testInternalFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> internalFunc();
    }

    <span class="hljs-comment">// Public functions can be called</span>
    <span class="hljs-comment">// - inside this contract</span>
    <span class="hljs-comment">// - inside contracts that inherit this contract</span>
    <span class="hljs-comment">// - by other contracts and accounts</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">publicFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"public function called"</span>;
    }

    <span class="hljs-comment">// External functions can only be called</span>
    <span class="hljs-comment">// - by other contracts and accounts</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">externalFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"external function called"</span>;
    }

    <span class="hljs-comment">// This function will not compile since we&#x27;re trying to call</span>
    <span class="hljs-comment">// an external function here.</span>
    <span class="hljs-comment">// function testExternalFunc() public pure returns (string memory) {</span>
    <span class="hljs-comment">//     return externalFunc();</span>
    <span class="hljs-comment">// }</span>

    <span class="hljs-comment">// State variables</span>
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">private</span> privateVar <span class="hljs-operator">=</span> <span class="hljs-string">"my private variable"</span>;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">internal</span> internalVar <span class="hljs-operator">=</span> <span class="hljs-string">"my internal variable"</span>;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> publicVar <span class="hljs-operator">=</span> <span class="hljs-string">"my public variable"</span>;
    <span class="hljs-comment">// State variables cannot be external so this code won&#x27;t compile.</span>
    <span class="hljs-comment">// string external externalVar = "my external variable";</span>
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Child</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Base</span> </span>{
    <span class="hljs-comment">// Inherited contracts do not have access to private functions</span>
    <span class="hljs-comment">// and state variables.</span>
    <span class="hljs-comment">// function testPrivateFunc() public pure returns (string memory) {</span>
    <span class="hljs-comment">//     return privateFunc();</span>
    <span class="hljs-comment">// }</span>

    <span class="hljs-comment">// Internal function can be called inside child contracts.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testInternalFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> internalFunc();
    }
}
</code></pre>`

export default html
