// metadata
export const version = "0.8.24"
export const title = "Constructor"
export const description =
  "Learn how to initialize smart contracts in Solidity using a constructor"

export const keywords = ["constructor", "constructors", "contract", "inheritance"]

export const codes = [
  {
    fileName: "Constructor.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCi8vIEJhc2UgY29udHJhY3QgWApjb250cmFjdCBYIHsKICAgIHN0cmluZyBwdWJsaWMgbmFtZTsKCiAgICBjb25zdHJ1Y3RvcihzdHJpbmcgbWVtb3J5IF9uYW1lKSB7CiAgICAgICAgbmFtZSA9IF9uYW1lOwogICAgfQp9CgovLyBCYXNlIGNvbnRyYWN0IFkKY29udHJhY3QgWSB7CiAgICBzdHJpbmcgcHVibGljIHRleHQ7CgogICAgY29uc3RydWN0b3Ioc3RyaW5nIG1lbW9yeSBfdGV4dCkgewogICAgICAgIHRleHQgPSBfdGV4dDsKICAgIH0KfQoKLy8gVGhlcmUgYXJlIDIgd2F5cyB0byBpbml0aWFsaXplIHBhcmVudCBjb250cmFjdCB3aXRoIHBhcmFtZXRlcnMuCgovLyBQYXNzIHRoZSBwYXJhbWV0ZXJzIGhlcmUgaW4gdGhlIGluaGVyaXRhbmNlIGxpc3QuCmNvbnRyYWN0IEIgaXMgWCgiSW5wdXQgdG8gWCIpLCBZKCJJbnB1dCB0byBZIikge30KCmNvbnRyYWN0IEMgaXMgWCwgWSB7CiAgICAvLyBQYXNzIHRoZSBwYXJhbWV0ZXJzIGhlcmUgaW4gdGhlIGNvbnN0cnVjdG9yLAogICAgLy8gc2ltaWxhciB0byBmdW5jdGlvbiBtb2RpZmllcnMuCiAgICBjb25zdHJ1Y3RvcihzdHJpbmcgbWVtb3J5IF9uYW1lLCBzdHJpbmcgbWVtb3J5IF90ZXh0KSBYKF9uYW1lKSBZKF90ZXh0KSB7fQp9CgovLyBQYXJlbnQgY29uc3RydWN0b3JzIGFyZSBhbHdheXMgY2FsbGVkIGluIHRoZSBvcmRlciBvZiBpbmhlcml0YW5jZQovLyByZWdhcmRsZXNzIG9mIHRoZSBvcmRlciBvZiBwYXJlbnQgY29udHJhY3RzIGxpc3RlZCBpbiB0aGUKLy8gY29uc3RydWN0b3Igb2YgdGhlIGNoaWxkIGNvbnRyYWN0LgoKLy8gT3JkZXIgb2YgY29uc3RydWN0b3JzIGNhbGxlZDoKLy8gMS4gWAovLyAyLiBZCi8vIDMuIEQKY29udHJhY3QgRCBpcyBYLCBZIHsKICAgIGNvbnN0cnVjdG9yKCkgWCgiWCB3YXMgY2FsbGVkIikgWSgiWSB3YXMgY2FsbGVkIikge30KfQoKLy8gT3JkZXIgb2YgY29uc3RydWN0b3JzIGNhbGxlZDoKLy8gMS4gWAovLyAyLiBZCi8vIDMuIEUKY29udHJhY3QgRSBpcyBYLCBZIHsKICAgIGNvbnN0cnVjdG9yKCkgWSgiWSB3YXMgY2FsbGVkIikgWCgiWCB3YXMgY2FsbGVkIikge30KfQo=",
  },
]

const html = `<p>A <code>constructor</code> is an optional function that is executed upon contract creation.</p>
<p>Here are examples of how to pass arguments to <code>constructors</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-comment">// Base contract X</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">X</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name</span>) </span>{
        name <span class="hljs-operator">=</span> _name;
    }
}

<span class="hljs-comment">// Base contract Y</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Y</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> text;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text</span>) </span>{
        text <span class="hljs-operator">=</span> _text;
    }
}

<span class="hljs-comment">// There are 2 ways to initialize parent contract with parameters.</span>

<span class="hljs-comment">// Pass the parameters here in the inheritance list.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>(<span class="hljs-params"><span class="hljs-string">"Input to X"</span></span>), <span class="hljs-title">Y</span>(<span class="hljs-params"><span class="hljs-string">"Input to Y"</span></span>) </span>{}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>, <span class="hljs-title">Y</span> </span>{
    <span class="hljs-comment">// Pass the parameters here in the constructor,</span>
    <span class="hljs-comment">// similar to function modifiers.</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text</span>) <span class="hljs-title">X</span>(<span class="hljs-params">_name</span>) <span class="hljs-title">Y</span>(<span class="hljs-params">_text</span>) </span>{}
}

<span class="hljs-comment">// Parent constructors are always called in the order of inheritance</span>
<span class="hljs-comment">// regardless of the order of parent contracts listed in the</span>
<span class="hljs-comment">// constructor of the child contract.</span>

<span class="hljs-comment">// Order of constructors called:</span>
<span class="hljs-comment">// 1. X</span>
<span class="hljs-comment">// 2. Y</span>
<span class="hljs-comment">// 3. D</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">D</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>, <span class="hljs-title">Y</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title">X</span>(<span class="hljs-params"><span class="hljs-string">"X was called"</span></span>) <span class="hljs-title">Y</span>(<span class="hljs-params"><span class="hljs-string">"Y was called"</span></span>) </span>{}
}

<span class="hljs-comment">// Order of constructors called:</span>
<span class="hljs-comment">// 1. X</span>
<span class="hljs-comment">// 2. Y</span>
<span class="hljs-comment">// 3. E</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">E</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>, <span class="hljs-title">Y</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title">Y</span>(<span class="hljs-params"><span class="hljs-string">"Y was called"</span></span>) <span class="hljs-title">X</span>(<span class="hljs-params"><span class="hljs-string">"X was called"</span></span>) </span>{}
}
</code></pre>`

export default html
