// metadata
export const version = "0.8.26"
export const title = "Delegatecall"
export const description = "Example of how to use delegatecall in Solidity"
export const cyfrinLink = "https://www.cyfrin.io/glossary/delegatecall-solidity-code-example"

export const keywords = [
    "delegatecall",
    "call",
    "contract",
    "contracts",
    "function",
    "functions",
]

export const codes = [
    {
        fileName: "Delegatecall.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8vIE5PVEU6IERlcGxveSB0aGlzIGNvbnRyYWN0IGZpcnN0CmNvbnRyYWN0IEIgewogICAgLy8gTk9URTogc3RvcmFnZSBsYXlvdXQgbXVzdCBiZSB0aGUgc2FtZSBhcyBjb250cmFjdCBBCiAgICB1aW50MjU2IHB1YmxpYyBudW07CiAgICBhZGRyZXNzIHB1YmxpYyBzZW5kZXI7CiAgICB1aW50MjU2IHB1YmxpYyB2YWx1ZTsKCiAgICBmdW5jdGlvbiBzZXRWYXJzKHVpbnQyNTYgX251bSkgcHVibGljIHBheWFibGUgewogICAgICAgIG51bSA9IF9udW07CiAgICAgICAgc2VuZGVyID0gbXNnLnNlbmRlcjsKICAgICAgICB2YWx1ZSA9IG1zZy52YWx1ZTsKICAgIH0KfQoKY29udHJhY3QgQSB7CiAgICB1aW50MjU2IHB1YmxpYyBudW07CiAgICBhZGRyZXNzIHB1YmxpYyBzZW5kZXI7CiAgICB1aW50MjU2IHB1YmxpYyB2YWx1ZTsKCiAgICBldmVudCBEZWxlZ2F0ZVJlc3BvbnNlKGJvb2wgc3VjY2VzcywgYnl0ZXMgZGF0YSk7CiAgICBldmVudCBDYWxsUmVzcG9uc2UoYm9vbCBzdWNjZXNzLCBieXRlcyBkYXRhKTsKCiAgICAvLyBGdW5jdGlvbiB1c2luZyBkZWxlZ2F0ZWNhbGwKICAgIGZ1bmN0aW9uIHNldFZhcnNEZWxlZ2F0ZUNhbGwoYWRkcmVzcyBfY29udHJhY3QsIHVpbnQyNTYgX251bSkKICAgICAgICBwdWJsaWMKICAgICAgICBwYXlhYmxlCiAgICB7CiAgICAgICAgLy8gQSdzIHN0b3JhZ2UgaXMgc2V0OyBCJ3Mgc3RvcmFnZSBpcyBub3QgbW9kaWZpZWQuCiAgICAgICAgKGJvb2wgc3VjY2VzcywgYnl0ZXMgbWVtb3J5IGRhdGEpID0gX2NvbnRyYWN0LmRlbGVnYXRlY2FsbCgKICAgICAgICAgICAgYWJpLmVuY29kZVdpdGhTaWduYXR1cmUoInNldFZhcnModWludDI1NikiLCBfbnVtKQogICAgICAgICk7CgogICAgICAgIGVtaXQgRGVsZWdhdGVSZXNwb25zZShzdWNjZXNzLCBkYXRhKTsKICAgIH0KCiAgICAvLyBGdW5jdGlvbiB1c2luZyBjYWxsCiAgICBmdW5jdGlvbiBzZXRWYXJzQ2FsbChhZGRyZXNzIF9jb250cmFjdCwgdWludDI1NiBfbnVtKSBwdWJsaWMgcGF5YWJsZSB7CiAgICAgICAgLy8gQidzIHN0b3JhZ2UgaXMgc2V0OyBBJ3Mgc3RvcmFnZSBpcyBub3QgbW9kaWZpZWQuCiAgICAgICAgKGJvb2wgc3VjY2VzcywgYnl0ZXMgbWVtb3J5IGRhdGEpID0gX2NvbnRyYWN0LmNhbGx7dmFsdWU6IG1zZy52YWx1ZX0oCiAgICAgICAgICAgIGFiaS5lbmNvZGVXaXRoU2lnbmF0dXJlKCJzZXRWYXJzKHVpbnQyNTYpIiwgX251bSkKICAgICAgICApOwoKICAgICAgICBlbWl0IENhbGxSZXNwb25zZShzdWNjZXNzLCBkYXRhKTsKICAgIH0KfQo=",
    },
]

const html = `<p><code>delegatecall</code> is a low level function similar to <code>call</code>.</p>
<p>When contract <code>A</code> executes <code>delegatecall</code> to contract <code>B</code>, <code>B</code>&#39;s code is executed</p>
<p>with contract <code>A</code>&#39;s storage, <code>msg.sender</code> and <code>msg.value</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> Deploy this contract first</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> </span>{
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> storage layout must be the same as contract A</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> num;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> sender;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> value;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setVars</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        num <span class="hljs-operator">=</span> _num;
        sender <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        value <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> num;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> sender;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> value;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">DelegateResponse</span>(<span class="hljs-params"><span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> data</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">CallResponse</span>(<span class="hljs-params"><span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> data</span>)</span>;

    <span class="hljs-comment">// Function using delegatecall</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setVarsDelegateCall</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _contract, <span class="hljs-keyword">uint256</span> _num</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
    </span>{
        <span class="hljs-comment">// A&#x27;s storage is set; B&#x27;s storage is not modified.</span>
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data) <span class="hljs-operator">=</span> _contract.<span class="hljs-built_in">delegatecall</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"setVars(uint256)"</span>, _num)
        );

        <span class="hljs-keyword">emit</span> DelegateResponse(success, data);
    }

    <span class="hljs-comment">// Function using call</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setVarsCall</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _contract, <span class="hljs-keyword">uint256</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// B&#x27;s storage is set; A&#x27;s storage is not modified.</span>
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data) <span class="hljs-operator">=</span> _contract.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"setVars(uint256)"</span>, _num)
        );

        <span class="hljs-keyword">emit</span> CallResponse(success, data);
    }
}
</code></pre>`

export default html
