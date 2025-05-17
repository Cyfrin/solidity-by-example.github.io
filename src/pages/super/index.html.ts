// metadata
export const version = "0.8.26"
export const title = "Calling Parent Contracts"
export const description = "An example of calling parent contracts in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/calling-parent-contracts-solidity-code-example"

export const keywords = [
  "calling",
  "parent",
  "contract",
  "contracts",
  "inheritance",
  "super",
]

export const codes = [
  {
    fileName: "Super.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qIEluaGVyaXRhbmNlIHRyZWUKICAgQQogLyAgXApCICAgQwogXCAvCiAgRAoqLwoKY29udHJhY3QgQSB7CiAgICAvLyBUaGlzIGlzIGNhbGxlZCBhbiBldmVudC4gWW91IGNhbiBlbWl0IGV2ZW50cyBmcm9tIHlvdXIgZnVuY3Rpb24KICAgIC8vIGFuZCB0aGV5IGFyZSBsb2dnZWQgaW50byB0aGUgdHJhbnNhY3Rpb24gbG9nLgogICAgLy8gSW4gb3VyIGNhc2UsIHRoaXMgd2lsbCBiZSB1c2VmdWwgZm9yIHRyYWNpbmcgZnVuY3Rpb24gY2FsbHMuCiAgICBldmVudCBMb2coc3RyaW5nIG1lc3NhZ2UpOwoKICAgIGZ1bmN0aW9uIGZvbygpIHB1YmxpYyB2aXJ0dWFsIHsKICAgICAgICBlbWl0IExvZygiQS5mb28gY2FsbGVkIik7CiAgICB9CgogICAgZnVuY3Rpb24gYmFyKCkgcHVibGljIHZpcnR1YWwgewogICAgICAgIGVtaXQgTG9nKCJBLmJhciBjYWxsZWQiKTsKICAgIH0KfQoKY29udHJhY3QgQiBpcyBBIHsKICAgIGZ1bmN0aW9uIGZvbygpIHB1YmxpYyB2aXJ0dWFsIG92ZXJyaWRlIHsKICAgICAgICBlbWl0IExvZygiQi5mb28gY2FsbGVkIik7CiAgICAgICAgQS5mb28oKTsKICAgIH0KCiAgICBmdW5jdGlvbiBiYXIoKSBwdWJsaWMgdmlydHVhbCBvdmVycmlkZSB7CiAgICAgICAgZW1pdCBMb2coIkIuYmFyIGNhbGxlZCIpOwogICAgICAgIHN1cGVyLmJhcigpOwogICAgfQp9Cgpjb250cmFjdCBDIGlzIEEgewogICAgZnVuY3Rpb24gZm9vKCkgcHVibGljIHZpcnR1YWwgb3ZlcnJpZGUgewogICAgICAgIGVtaXQgTG9nKCJDLmZvbyBjYWxsZWQiKTsKICAgICAgICBBLmZvbygpOwogICAgfQoKICAgIGZ1bmN0aW9uIGJhcigpIHB1YmxpYyB2aXJ0dWFsIG92ZXJyaWRlIHsKICAgICAgICBlbWl0IExvZygiQy5iYXIgY2FsbGVkIik7CiAgICAgICAgc3VwZXIuYmFyKCk7CiAgICB9Cn0KCmNvbnRyYWN0IEQgaXMgQiwgQyB7CiAgICAvLyBUcnk6CiAgICAvLyAtIENhbGwgRC5mb28gYW5kIGNoZWNrIHRoZSB0cmFuc2FjdGlvbiBsb2dzLgogICAgLy8gICBBbHRob3VnaCBEIGluaGVyaXRzIEEsIEIgYW5kIEMsIGl0IG9ubHkgY2FsbGVkIEMgYW5kIHRoZW4gQS4KICAgIC8vIC0gQ2FsbCBELmJhciBhbmQgY2hlY2sgdGhlIHRyYW5zYWN0aW9uIGxvZ3MKICAgIC8vICAgRCBjYWxsZWQgQywgdGhlbiBCLCBhbmQgZmluYWxseSBBLgogICAgLy8gICBBbHRob3VnaCBzdXBlciB3YXMgY2FsbGVkIHR3aWNlIChieSBCIGFuZCBDKSBpdCBvbmx5IGNhbGxlZCBBIG9uY2UuCgogICAgZnVuY3Rpb24gZm9vKCkgcHVibGljIG92ZXJyaWRlKEIsIEMpIHsKICAgICAgICBzdXBlci5mb28oKTsKICAgIH0KCiAgICBmdW5jdGlvbiBiYXIoKSBwdWJsaWMgb3ZlcnJpZGUoQiwgQykgewogICAgICAgIHN1cGVyLmJhcigpOwogICAgfQp9Cg==",
  },
]

const html = `<p>Parent contracts can be called directly, or by using the keyword <code>super</code>.</p>
<p>By using the keyword <code>super</code>, all of the immediate parent contracts will be called.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/* Inheritance tree
   A
 /  \\
B   C
 \\ /
  D
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// This is called an event. You can emit events from your function</span>
    <span class="hljs-comment">// and they are logged into the transaction log.</span>
    <span class="hljs-comment">// In our case, this will be useful for tracing function calls.</span>
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"A.foo called"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"A.bar called"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"B.foo called"</span>);
        A.foo();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"B.bar called"</span>);
        <span class="hljs-built_in">super</span>.bar();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"C.foo called"</span>);
        A.foo();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"C.bar called"</span>);
        <span class="hljs-built_in">super</span>.bar();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">D</span> <span class="hljs-keyword">is</span> <span class="hljs-title">B</span>, <span class="hljs-title">C</span> </span>{
    <span class="hljs-comment">// Try:</span>
    <span class="hljs-comment">// - Call D.foo and check the transaction logs.</span>
    <span class="hljs-comment">//   Although D inherits A, B and C, it only called C and then A.</span>
    <span class="hljs-comment">// - Call D.bar and check the transaction logs</span>
    <span class="hljs-comment">//   D called C, then B, and finally A.</span>
    <span class="hljs-comment">//   Although super was called twice (by B and C) it only called A once.</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">B, C</span>) </span>{
        <span class="hljs-built_in">super</span>.foo();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">B, C</span>) </span>{
        <span class="hljs-built_in">super</span>.bar();
    }
}
</code></pre>`

export default html
