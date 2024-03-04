// metadata
export const version = "0.8.24"
export const title = "Call"
export const description = "In Solidity call is a low level function to interact with other contracts"

export const keywords = [
    "contract",
    "contracts",
    "call",
    "function",
    "functions",
]

export const codes = [
    {
        fileName: "Call.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmNvbnRyYWN0IFJlY2VpdmVyIHsKICAgIGV2ZW50IFJlY2VpdmVkKGFkZHJlc3MgY2FsbGVyLCB1aW50MjU2IGFtb3VudCwgc3RyaW5nIG1lc3NhZ2UpOwoKICAgIGZhbGxiYWNrKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgZW1pdCBSZWNlaXZlZChtc2cuc2VuZGVyLCBtc2cudmFsdWUsICJGYWxsYmFjayB3YXMgY2FsbGVkIik7CiAgICB9CgogICAgZnVuY3Rpb24gZm9vKHN0cmluZyBtZW1vcnkgX21lc3NhZ2UsIHVpbnQyNTYgX3gpCiAgICAgICAgcHVibGljCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYpCiAgICB7CiAgICAgICAgZW1pdCBSZWNlaXZlZChtc2cuc2VuZGVyLCBtc2cudmFsdWUsIF9tZXNzYWdlKTsKCiAgICAgICAgcmV0dXJuIF94ICsgMTsKICAgIH0KfQoKY29udHJhY3QgQ2FsbGVyIHsKICAgIGV2ZW50IFJlc3BvbnNlKGJvb2wgc3VjY2VzcywgYnl0ZXMgZGF0YSk7CgogICAgLy8gTGV0J3MgaW1hZ2luZSB0aGF0IGNvbnRyYWN0IENhbGxlciBkb2VzIG5vdCBoYXZlIHRoZSBzb3VyY2UgY29kZSBmb3IgdGhlCiAgICAvLyBjb250cmFjdCBSZWNlaXZlciwgYnV0IHdlIGRvIGtub3cgdGhlIGFkZHJlc3Mgb2YgY29udHJhY3QgUmVjZWl2ZXIgYW5kIHRoZSBmdW5jdGlvbiB0byBjYWxsLgogICAgZnVuY3Rpb24gdGVzdENhbGxGb28oYWRkcmVzcyBwYXlhYmxlIF9hZGRyKSBwdWJsaWMgcGF5YWJsZSB7CiAgICAgICAgLy8gWW91IGNhbiBzZW5kIGV0aGVyIGFuZCBzcGVjaWZ5IGEgY3VzdG9tIGdhcyBhbW91bnQKICAgICAgICAoYm9vbCBzdWNjZXNzLCBieXRlcyBtZW1vcnkgZGF0YSkgPSBfYWRkci5jYWxsewogICAgICAgICAgICB2YWx1ZTogbXNnLnZhbHVlLAogICAgICAgICAgICBnYXM6IDUwMDAKICAgICAgICB9KGFiaS5lbmNvZGVXaXRoU2lnbmF0dXJlKCJmb28oc3RyaW5nLHVpbnQyNTYpIiwgImNhbGwgZm9vIiwgMTIzKSk7CgogICAgICAgIGVtaXQgUmVzcG9uc2Uoc3VjY2VzcywgZGF0YSk7CiAgICB9CgogICAgLy8gQ2FsbGluZyBhIGZ1bmN0aW9uIHRoYXQgZG9lcyBub3QgZXhpc3QgdHJpZ2dlcnMgdGhlIGZhbGxiYWNrIGZ1bmN0aW9uLgogICAgZnVuY3Rpb24gdGVzdENhbGxEb2VzTm90RXhpc3QoYWRkcmVzcyBwYXlhYmxlIF9hZGRyKSBwdWJsaWMgcGF5YWJsZSB7CiAgICAgICAgKGJvb2wgc3VjY2VzcywgYnl0ZXMgbWVtb3J5IGRhdGEpID0gX2FkZHIuY2FsbHt2YWx1ZTogbXNnLnZhbHVlfSgKICAgICAgICAgICAgYWJpLmVuY29kZVdpdGhTaWduYXR1cmUoImRvZXNOb3RFeGlzdCgpIikKICAgICAgICApOwoKICAgICAgICBlbWl0IFJlc3BvbnNlKHN1Y2Nlc3MsIGRhdGEpOwogICAgfQp9Cg==",
    },
]

const html = `<p><code>call</code> is a low level function to interact with other contracts.</p>
<p>This is the recommended method to use when you&#39;re just sending Ether via calling the <code>fallback</code> function.</p>
<p>However it is not the recommend way to call existing functions.</p>
<h3>Few reasons why low-level call is not recommended</h3>
<ul>
<li>Reverts are not bubbled up</li>
<li>Type checks are bypassed</li>
<li>Function existence checks are omitted</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Receiver</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Received</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> caller, <span class="hljs-keyword">uint256</span> amount, <span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-keyword">emit</span> Received(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>, <span class="hljs-string">"Fallback was called"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _message, <span class="hljs-keyword">uint256</span> _x</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        <span class="hljs-keyword">emit</span> Received(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>, _message);

        <span class="hljs-keyword">return</span> _x <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Caller</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Response</span>(<span class="hljs-params"><span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> data</span>)</span>;

    <span class="hljs-comment">// Let&#x27;s imagine that contract Caller does not have the source code for the</span>
    <span class="hljs-comment">// contract Receiver, but we do know the address of contract Receiver and the function to call.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testCallFoo</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// You can send ether and specify a custom gas amount</span>
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data) <span class="hljs-operator">=</span> _addr.<span class="hljs-built_in">call</span>{
            <span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>,
            <span class="hljs-built_in">gas</span>: <span class="hljs-number">5000</span>
        }(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"foo(string,uint256)"</span>, <span class="hljs-string">"call foo"</span>, <span class="hljs-number">123</span>));

        <span class="hljs-keyword">emit</span> Response(success, data);
    }

    <span class="hljs-comment">// Calling a function that does not exist triggers the fallback function.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testCallDoesNotExist</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data) <span class="hljs-operator">=</span> _addr.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"doesNotExist()"</span>)
        );

        <span class="hljs-keyword">emit</span> Response(success, data);
    }
}
</code></pre>`

export default html
