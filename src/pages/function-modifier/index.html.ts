// metadata
export const version = "0.8.26"
export const title = "Function Modifier"
export const description = "Example of how to write function modifier in Solidity"
export const cyfrinLink = "https://www.cyfrin.io/glossary/function-modifier-solidity-code-example"

export const keywords = [
    "function",
    "functions",
    "modifier",
    "modifiers",
    "_",
]

export const codes = [
    {
        fileName: "FunctionModifier.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEZ1bmN0aW9uTW9kaWZpZXIgewogICAgLy8gV2Ugd2lsbCB1c2UgdGhlc2UgdmFyaWFibGVzIHRvIGRlbW9uc3RyYXRlIGhvdyB0byB1c2UKICAgIC8vIG1vZGlmaWVycy4KICAgIGFkZHJlc3MgcHVibGljIG93bmVyOwogICAgdWludDI1NiBwdWJsaWMgeCA9IDEwOwogICAgYm9vbCBwdWJsaWMgbG9ja2VkOwoKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICAgIC8vIFNldCB0aGUgdHJhbnNhY3Rpb24gc2VuZGVyIGFzIHRoZSBvd25lciBvZiB0aGUgY29udHJhY3QuCiAgICAgICAgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgfQoKICAgIC8vIE1vZGlmaWVyIHRvIGNoZWNrIHRoYXQgdGhlIGNhbGxlciBpcyB0aGUgb3duZXIgb2YKICAgIC8vIHRoZSBjb250cmFjdC4KICAgIG1vZGlmaWVyIG9ubHlPd25lcigpIHsKICAgICAgICByZXF1aXJlKG1zZy5zZW5kZXIgPT0gb3duZXIsICJOb3Qgb3duZXIiKTsKICAgICAgICAvLyBVbmRlcnNjb3JlIGlzIGEgc3BlY2lhbCBjaGFyYWN0ZXIgb25seSB1c2VkIGluc2lkZQogICAgICAgIC8vIGEgZnVuY3Rpb24gbW9kaWZpZXIgYW5kIGl0IHRlbGxzIFNvbGlkaXR5IHRvCiAgICAgICAgLy8gZXhlY3V0ZSB0aGUgcmVzdCBvZiB0aGUgY29kZS4KICAgICAgICBfOwogICAgfQoKICAgIC8vIE1vZGlmaWVycyBjYW4gdGFrZSBpbnB1dHMuIFRoaXMgbW9kaWZpZXIgY2hlY2tzIHRoYXQgdGhlCiAgICAvLyBhZGRyZXNzIHBhc3NlZCBpbiBpcyBub3QgdGhlIHplcm8gYWRkcmVzcy4KICAgIG1vZGlmaWVyIHZhbGlkQWRkcmVzcyhhZGRyZXNzIF9hZGRyKSB7CiAgICAgICAgcmVxdWlyZShfYWRkciAhPSBhZGRyZXNzKDApLCAiTm90IHZhbGlkIGFkZHJlc3MiKTsKICAgICAgICBfOwogICAgfQoKICAgIGZ1bmN0aW9uIGNoYW5nZU93bmVyKGFkZHJlc3MgX25ld093bmVyKQogICAgICAgIHB1YmxpYwogICAgICAgIG9ubHlPd25lcgogICAgICAgIHZhbGlkQWRkcmVzcyhfbmV3T3duZXIpCiAgICB7CiAgICAgICAgb3duZXIgPSBfbmV3T3duZXI7CiAgICB9CgogICAgLy8gTW9kaWZpZXJzIGNhbiBiZSBjYWxsZWQgYmVmb3JlIGFuZCAvIG9yIGFmdGVyIGEgZnVuY3Rpb24uCiAgICAvLyBUaGlzIG1vZGlmaWVyIHByZXZlbnRzIGEgZnVuY3Rpb24gZnJvbSBiZWluZyBjYWxsZWQgd2hpbGUKICAgIC8vIGl0IGlzIHN0aWxsIGV4ZWN1dGluZy4KICAgIG1vZGlmaWVyIG5vUmVlbnRyYW5jeSgpIHsKICAgICAgICByZXF1aXJlKCFsb2NrZWQsICJObyByZWVudHJhbmN5Iik7CgogICAgICAgIGxvY2tlZCA9IHRydWU7CiAgICAgICAgXzsKICAgICAgICBsb2NrZWQgPSBmYWxzZTsKICAgIH0KCiAgICBmdW5jdGlvbiBkZWNyZW1lbnQodWludDI1NiBpKSBwdWJsaWMgbm9SZWVudHJhbmN5IHsKICAgICAgICB4IC09IGk7CgogICAgICAgIGlmIChpID4gMSkgewogICAgICAgICAgICBkZWNyZW1lbnQoaSAtIDEpOwogICAgICAgIH0KICAgIH0KfQo=",
    },
]

const html = `<p>Modifiers are code that can be run before and / or after a function call.</p>
<p>Modifiers can be used to:</p>
<ul>
<li>Restrict access</li>
<li>Validate inputs</li>
<li>Guard against reentrancy hack</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FunctionModifier</span> </span>{
    <span class="hljs-comment">// We will use these variables to demonstrate how to use</span>
    <span class="hljs-comment">// modifiers.</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> x <span class="hljs-operator">=</span> <span class="hljs-number">10</span>;
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> locked;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// Set the transaction sender as the owner of the contract.</span>
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-comment">// Modifier to check that the caller is the owner of</span>
    <span class="hljs-comment">// the contract.</span>
    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">onlyOwner</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"Not owner"</span>);
        <span class="hljs-comment">// Underscore is a special character only used inside</span>
        <span class="hljs-comment">// a function modifier and it tells Solidity to</span>
        <span class="hljs-comment">// execute the rest of the code.</span>
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-comment">// Modifiers can take inputs. This modifier checks that the</span>
    <span class="hljs-comment">// address passed in is not the zero address.</span>
    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">validAddress</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) </span>{
        <span class="hljs-built_in">require</span>(_addr <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"Not valid address"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeOwner</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _newOwner</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyOwner</span>
        <span class="hljs-title">validAddress</span>(<span class="hljs-params">_newOwner</span>)
    </span>{
        owner <span class="hljs-operator">=</span> _newOwner;
    }

    <span class="hljs-comment">// Modifiers can be called before and / or after a function.</span>
    <span class="hljs-comment">// This modifier prevents a function from being called while</span>
    <span class="hljs-comment">// it is still executing.</span>
    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">noReentrancy</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>locked, <span class="hljs-string">"No reentrancy"</span>);

        locked <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">_</span>;
        locked <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">decrement</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">noReentrancy</span> </span>{
        x <span class="hljs-operator">-</span><span class="hljs-operator">=</span> i;

        <span class="hljs-keyword">if</span> (i <span class="hljs-operator">&gt;</span> <span class="hljs-number">1</span>) {
            decrement(i <span class="hljs-operator">-</span> <span class="hljs-number">1</span>);
        }
    }
}
</code></pre>`

export default html
