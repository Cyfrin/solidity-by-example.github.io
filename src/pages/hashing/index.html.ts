// metadata
export const version = "0.8.26"
export const title = "Hashing with Keccak256"
export const description = "Example of hashing using Keccak256 in Solidity"
export const cyfrinLink = "https://www.cyfrin.io/glossary/hashing-with-keccak256-solidity-code-example"

export const keywords = [
    "hash",
    "hashing",
    "function",
    "functions",
    "keccak256",
    "cryptography",
]

export const codes = [
    {
        fileName: "Keccak256.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEhhc2hGdW5jdGlvbiB7CiAgICBmdW5jdGlvbiBoYXNoKHN0cmluZyBtZW1vcnkgX3RleHQsIHVpbnQyNTYgX251bSwgYWRkcmVzcyBfYWRkcikKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMikKICAgIHsKICAgICAgICByZXR1cm4ga2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQoX3RleHQsIF9udW0sIF9hZGRyKSk7CiAgICB9CgogICAgLy8gRXhhbXBsZSBvZiBoYXNoIGNvbGxpc2lvbgogICAgLy8gSGFzaCBjb2xsaXNpb24gY2FuIG9jY3VyIHdoZW4geW91IHBhc3MgbW9yZSB0aGFuIG9uZSBkeW5hbWljIGRhdGEgdHlwZQogICAgLy8gdG8gYWJpLmVuY29kZVBhY2tlZC4gSW4gc3VjaCBjYXNlLCB5b3Ugc2hvdWxkIHVzZSBhYmkuZW5jb2RlIGluc3RlYWQuCiAgICBmdW5jdGlvbiBjb2xsaXNpb24oc3RyaW5nIG1lbW9yeSBfdGV4dCwgc3RyaW5nIG1lbW9yeSBfYW5vdGhlclRleHQpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJ5dGVzMzIpCiAgICB7CiAgICAgICAgLy8gZW5jb2RlUGFja2VkKEFBQSwgQkJCKSAtPiBBQUFCQkIKICAgICAgICAvLyBlbmNvZGVQYWNrZWQoQUEsIEFCQkIpIC0+IEFBQUJCQgogICAgICAgIHJldHVybiBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChfdGV4dCwgX2Fub3RoZXJUZXh0KSk7CiAgICB9Cn0KCmNvbnRyYWN0IEd1ZXNzVGhlTWFnaWNXb3JkIHsKICAgIGJ5dGVzMzIgcHVibGljIGFuc3dlciA9CiAgICAgICAgMHg2MDI5OGY3OGNjMGI0NzE3MGJhNzljMTBhYTM4NTFkNzY0OGJkOTZmMmY4ZTQ2YTE5ZGJjNzc3YzM2ZmIwYzAwOwoKICAgIC8vIE1hZ2ljIHdvcmQgaXMgIlNvbGlkaXR5IgogICAgZnVuY3Rpb24gZ3Vlc3Moc3RyaW5nIG1lbW9yeSBfd29yZCkgcHVibGljIHZpZXcgcmV0dXJucyAoYm9vbCkgewogICAgICAgIHJldHVybiBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChfd29yZCkpID09IGFuc3dlcjsKICAgIH0KfQo=",
    },
]

const html = `<p><code>keccak256</code> computes the Keccak-256 hash of the input.</p>
<p>Some use cases are:</p>
<ul>
<li>Creating a deterministic unique ID from an input</li>
<li>Commit-Reveal scheme</li>
<li>Compact cryptographic signature (by signing the hash instead of a larger input)</li>
</ul>
<p>Solidity provides two methods for encoding data:</p>
<ul>
<li><code>abi.encode</code>:<ul>
<li>Encodes data into bytes with padding</li>
<li>Preserves all data information</li>
<li>Safer when dealing with dynamic types</li>
<li>Produces a longer output due to padding</li>
</ul>
</li>
<li><code>abi.encodePacked</code>:<ul>
<li>Performs packed encoding (compressed)</li>
<li>Produces a shorter output than <code>abi.encode</code></li>
<li>More gas efficient</li>
<li>Risk of hash collisions with dynamic types (<code>collision</code> function)</li>
</ul>
</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">HashFunction</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">hash</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text, <span class="hljs-keyword">uint256</span> _num, <span class="hljs-keyword">address</span> _addr</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_text, _num, _addr));
    }

    <span class="hljs-comment">// Example of hash collision</span>
    <span class="hljs-comment">// Hash collision can occur when you pass more than one dynamic data type</span>
    <span class="hljs-comment">// to abi.encodePacked. In such case, you should use abi.encode instead.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">collision</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _anotherText</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-comment">// encodePacked(AAA, BBB) -&gt; AAABBB</span>
        <span class="hljs-comment">// encodePacked(AA, ABBB) -&gt; AAABBB</span>
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_text, _anotherText));
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">GuessTheMagicWord</span> </span>{
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> answer <span class="hljs-operator">=</span>
        <span class="hljs-number">0x60298f78cc0b47170ba79c10aa3851d7648bd96f2f8e46a19dbc777c36fb0c00</span>;

    <span class="hljs-comment">// Magic word is "Solidity"</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">guess</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _word</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_word)) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> answer;
    }
}
</code></pre>`

export default html
