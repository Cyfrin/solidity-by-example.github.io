// metadata
export const version = "0.8.26"
export const title = "Inheritance"
export const description = "Example of inheritance in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/inheritance-solidity-code-example"

export const keywords = [
  "inheritance",
  "super",
  "override",
  "virtual",
  "is",
  "contract",
  "contracts",
]

export const codes = [
  {
    fileName: "Inheritance.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qIEdyYXBoIG9mIGluaGVyaXRhbmNlCiAgICBBCiAgIC8gXAogIEIgICBDCiAvIFwgLwpGICBELEUKCiovCgpjb250cmFjdCBBIHsKICAgIGZ1bmN0aW9uIGZvbygpIHB1YmxpYyBwdXJlIHZpcnR1YWwgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgICAgIHJldHVybiAiQSI7CiAgICB9Cn0KCi8vIENvbnRyYWN0cyBpbmhlcml0IG90aGVyIGNvbnRyYWN0cyBieSB1c2luZyB0aGUga2V5d29yZCAnaXMnLgpjb250cmFjdCBCIGlzIEEgewogICAgLy8gT3ZlcnJpZGUgQS5mb28oKQogICAgZnVuY3Rpb24gZm9vKCkgcHVibGljIHB1cmUgdmlydHVhbCBvdmVycmlkZSByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuICJCIjsKICAgIH0KfQoKY29udHJhY3QgQyBpcyBBIHsKICAgIC8vIE92ZXJyaWRlIEEuZm9vKCkKICAgIGZ1bmN0aW9uIGZvbygpIHB1YmxpYyBwdXJlIHZpcnR1YWwgb3ZlcnJpZGUgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgICAgIHJldHVybiAiQyI7CiAgICB9Cn0KCi8vIENvbnRyYWN0cyBjYW4gaW5oZXJpdCBmcm9tIG11bHRpcGxlIHBhcmVudCBjb250cmFjdHMuCi8vIFdoZW4gYSBmdW5jdGlvbiBpcyBjYWxsZWQgdGhhdCBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzIGluCi8vIGRpZmZlcmVudCBjb250cmFjdHMsIHBhcmVudCBjb250cmFjdHMgYXJlIHNlYXJjaGVkIGZyb20KLy8gcmlnaHQgdG8gbGVmdCwgYW5kIGluIGEgZGVwdGgtZmlyc3QgbWFubmVyLgoKY29udHJhY3QgRCBpcyBCLCBDIHsKICAgIC8vIEQuZm9vKCkgcmV0dXJucyAiQyIKICAgIC8vIHNpbmNlIEMgaXMgdGhlIHJpZ2h0IG1vc3QgcGFyZW50IGNvbnRyYWN0IHdpdGggZnVuY3Rpb24gZm9vKCkKICAgIGZ1bmN0aW9uIGZvbygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlKEIsIEMpIHJldHVybnMgKHN0cmluZyBtZW1vcnkpIHsKICAgICAgICByZXR1cm4gc3VwZXIuZm9vKCk7CiAgICB9Cn0KCmNvbnRyYWN0IEUgaXMgQywgQiB7CiAgICAvLyBFLmZvbygpIHJldHVybnMgIkIiCiAgICAvLyBzaW5jZSBCIGlzIHRoZSByaWdodCBtb3N0IHBhcmVudCBjb250cmFjdCB3aXRoIGZ1bmN0aW9uIGZvbygpCiAgICBmdW5jdGlvbiBmb28oKSBwdWJsaWMgcHVyZSBvdmVycmlkZShDLCBCKSByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIHN1cGVyLmZvbygpOwogICAgfQp9CgovLyBJbmhlcml0YW5jZSBtdXN0IGJlIG9yZGVyZWQgZnJvbSDigJxtb3N0IGJhc2UtbGlrZeKAnSB0byDigJxtb3N0IGRlcml2ZWTigJ0uCi8vIFN3YXBwaW5nIHRoZSBvcmRlciBvZiBBIGFuZCBCIHdpbGwgdGhyb3cgYSBjb21waWxhdGlvbiBlcnJvci4KY29udHJhY3QgRiBpcyBBLCBCIHsKICAgIGZ1bmN0aW9uIGZvbygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlKEEsIEIpIHJldHVybnMgKHN0cmluZyBtZW1vcnkpIHsKICAgICAgICByZXR1cm4gc3VwZXIuZm9vKCk7CiAgICB9Cn0K",
  },
]

const html = `<p>Solidity supports multiple inheritance. Contracts can inherit other contract by using the <code>is</code> keyword.</p>
<p>Function that is going to be overridden by a child contract must be declared as <code>virtual</code>.</p>
<p>Function that is going to override a parent function must use the keyword <code>override</code>.</p>
<p>Order of inheritance is important.</p>
<p>You have to list the parent contracts in the order from “most base-like” to “most derived”.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/* Graph of inheritance
    A
   / \\
  B   C
 / \\ /
F  D,E

*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"A"</span>;
    }
}

<span class="hljs-comment">// Contracts inherit other contracts by using the keyword &#x27;is&#x27;.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// Override A.foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"B"</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// Override A.foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"C"</span>;
    }
}

<span class="hljs-comment">// Contracts can inherit from multiple parent contracts.</span>
<span class="hljs-comment">// When a function is called that is defined multiple times in</span>
<span class="hljs-comment">// different contracts, parent contracts are searched from</span>
<span class="hljs-comment">// right to left, and in a depth-first manner.</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">D</span> <span class="hljs-keyword">is</span> <span class="hljs-title">B</span>, <span class="hljs-title">C</span> </span>{
    <span class="hljs-comment">// D.foo() returns "C"</span>
    <span class="hljs-comment">// since C is the right most parent contract with function foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">B, C</span>) <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">super</span>.foo();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">E</span> <span class="hljs-keyword">is</span> <span class="hljs-title">C</span>, <span class="hljs-title">B</span> </span>{
    <span class="hljs-comment">// E.foo() returns "B"</span>
    <span class="hljs-comment">// since B is the right most parent contract with function foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">C, B</span>) <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">super</span>.foo();
    }
}

<span class="hljs-comment">// Inheritance must be ordered from “most base-like” to “most derived”.</span>
<span class="hljs-comment">// Swapping the order of A and B will throw a compilation error.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">F</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span>, <span class="hljs-title">B</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">A, B</span>) <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">super</span>.foo();
    }
}
</code></pre>`

export default html
