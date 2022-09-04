// metadata
export const version = "0.8.13"
export const title = "Delegatecall"
export const description = "Example of how to use deletegatecall in Solidity"
export const codes = [
  {
    fileName: "Delegatecall.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCi8vIE5PVEU6IERlcGxveSB0aGlzIGNvbnRyYWN0IGZpcnN0CmNvbnRyYWN0IEIgewogICAgLy8gTk9URTogc3RvcmFnZSBsYXlvdXQgbXVzdCBiZSB0aGUgc2FtZSBhcyBjb250cmFjdCBBCiAgICB1aW50IHB1YmxpYyBudW07CiAgICBhZGRyZXNzIHB1YmxpYyBzZW5kZXI7CiAgICB1aW50IHB1YmxpYyB2YWx1ZTsKCiAgICBmdW5jdGlvbiBzZXRWYXJzKHVpbnQgX251bSkgcHVibGljIHBheWFibGUgewogICAgICAgIG51bSA9IF9udW07CiAgICAgICAgc2VuZGVyID0gbXNnLnNlbmRlcjsKICAgICAgICB2YWx1ZSA9IG1zZy52YWx1ZTsKICAgIH0KfQoKY29udHJhY3QgQSB7CiAgICB1aW50IHB1YmxpYyBudW07CiAgICBhZGRyZXNzIHB1YmxpYyBzZW5kZXI7CiAgICB1aW50IHB1YmxpYyB2YWx1ZTsKCiAgICBmdW5jdGlvbiBzZXRWYXJzKGFkZHJlc3MgX2NvbnRyYWN0LCB1aW50IF9udW0pIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICAvLyBBJ3Mgc3RvcmFnZSBpcyBzZXQsIEIgaXMgbm90IG1vZGlmaWVkLgogICAgICAgIChib29sIHN1Y2Nlc3MsIGJ5dGVzIG1lbW9yeSBkYXRhKSA9IF9jb250cmFjdC5kZWxlZ2F0ZWNhbGwoCiAgICAgICAgICAgIGFiaS5lbmNvZGVXaXRoU2lnbmF0dXJlKCJzZXRWYXJzKHVpbnQyNTYpIiwgX251bSkKICAgICAgICApOwogICAgfQp9Cg==",
  },
]

const html = `<p><code>delegatecall</code> is a low level function similar to <code>call</code>.</p>
<p>When contract <code>A</code> executes <code>delegatecall</code> to contract <code>B</code>, <code>B</code>&#39;s code is executed</p>
<p>with contract <code>A</code>&#39;s storage, <code>msg.sender</code> and <code>msg.value</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> Deploy this contract first</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> </span>{
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> storage layout must be the same as contract A</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> sender;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> value;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setVars</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        num <span class="hljs-operator">=</span> _num;
        sender <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        value <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> sender;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> value;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setVars</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _contract, <span class="hljs-keyword">uint</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// A&#x27;s storage is set, B is not modified.</span>
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data) <span class="hljs-operator">=</span> _contract.<span class="hljs-built_in">delegatecall</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"setVars(uint256)"</span>, _num)
        );
    }
}
</code></pre>
`

export default html
