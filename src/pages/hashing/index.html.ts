// metadata
export const version = "0.8.13"
export const title = "Hashing with Keccak256"
export const description = "Example of hashing using Keccak256 in Solidity"
export const codes = [
  {
    fileName: "Keccak256.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IEhhc2hGdW5jdGlvbiB7CiAgICBmdW5jdGlvbiBoYXNoKAogICAgICAgIHN0cmluZyBtZW1vcnkgX3RleHQsCiAgICAgICAgdWludCBfbnVtLAogICAgICAgIGFkZHJlc3MgX2FkZHIKICAgICkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMzMikgewogICAgICAgIHJldHVybiBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChfdGV4dCwgX251bSwgX2FkZHIpKTsKICAgIH0KCiAgICAvLyBFeGFtcGxlIG9mIGhhc2ggY29sbGlzaW9uCiAgICAvLyBIYXNoIGNvbGxpc2lvbiBjYW4gb2NjdXIgd2hlbiB5b3UgcGFzcyBtb3JlIHRoYW4gb25lIGR5bmFtaWMgZGF0YSB0eXBlCiAgICAvLyB0byBhYmkuZW5jb2RlUGFja2VkLiBJbiBzdWNoIGNhc2UsIHlvdSBzaG91bGQgdXNlIGFiaS5lbmNvZGUgaW5zdGVhZC4KICAgIGZ1bmN0aW9uIGNvbGxpc2lvbihzdHJpbmcgbWVtb3J5IF90ZXh0LCBzdHJpbmcgbWVtb3J5IF9hbm90aGVyVGV4dCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMikKICAgIHsKICAgICAgICAvLyBlbmNvZGVQYWNrZWQoQUFBLCBCQkIpIC0+IEFBQUJCQgogICAgICAgIC8vIGVuY29kZVBhY2tlZChBQSwgQUJCQikgLT4gQUFBQkJCCiAgICAgICAgcmV0dXJuIGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKF90ZXh0LCBfYW5vdGhlclRleHQpKTsKICAgIH0KfQoKY29udHJhY3QgR3Vlc3NUaGVNYWdpY1dvcmQgewogICAgYnl0ZXMzMiBwdWJsaWMgYW5zd2VyID0KICAgICAgICAweDYwMjk4Zjc4Y2MwYjQ3MTcwYmE3OWMxMGFhMzg1MWQ3NjQ4YmQ5NmYyZjhlNDZhMTlkYmM3NzdjMzZmYjBjMDA7CgogICAgLy8gTWFnaWMgd29yZCBpcyAiU29saWRpdHkiCiAgICBmdW5jdGlvbiBndWVzcyhzdHJpbmcgbWVtb3J5IF93b3JkKSBwdWJsaWMgdmlldyByZXR1cm5zIChib29sKSB7CiAgICAgICAgcmV0dXJuIGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKF93b3JkKSkgPT0gYW5zd2VyOwogICAgfQp9Cg==",
  },
]

const html = `<p><code>keccak256</code> computes the Keccak-256 hash of the input.</p>
<p>Some use cases are:</p>
<ul>
<li>Creating a deterministic unique ID from a input</li>
<li>Commit-Reveal scheme</li>
<li>Compact cryptographic signature (by signing the hash instead of a larger input)</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">HashFunction</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">hash</span>(<span class="hljs-params">
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text,
        <span class="hljs-keyword">uint</span> _num,
        <span class="hljs-keyword">address</span> _addr
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
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
</code></pre>
`

export default html
