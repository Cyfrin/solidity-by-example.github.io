// metadata
export const version = "0.8.26"
export const title = "Multi Call"
export const description = "An example of contract to aggregate multiple calls."
export const cyfrinLink = "https://www.cyfrin.io/glossary/multi-call-solidity-code-example"

export const keywords = [
    "app",
    "application",
    "multi",
    "call",
    "staticcall",
]

export const codes = [
    {
        fileName: "MultiCall.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IE11bHRpQ2FsbCB7CiAgICBmdW5jdGlvbiBtdWx0aUNhbGwoYWRkcmVzc1tdIGNhbGxkYXRhIHRhcmdldHMsIGJ5dGVzW10gY2FsbGRhdGEgZGF0YSkKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChieXRlc1tdIG1lbW9yeSkKICAgIHsKICAgICAgICByZXF1aXJlKHRhcmdldHMubGVuZ3RoID09IGRhdGEubGVuZ3RoLCAidGFyZ2V0IGxlbmd0aCAhPSBkYXRhIGxlbmd0aCIpOwoKICAgICAgICBieXRlc1tdIG1lbW9yeSByZXN1bHRzID0gbmV3IGJ5dGVzW10oZGF0YS5sZW5ndGgpOwoKICAgICAgICBmb3IgKHVpbnQyNTYgaTsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgKGJvb2wgc3VjY2VzcywgYnl0ZXMgbWVtb3J5IHJlc3VsdCkgPSB0YXJnZXRzW2ldLnN0YXRpY2NhbGwoZGF0YVtpXSk7CiAgICAgICAgICAgIHJlcXVpcmUoc3VjY2VzcywgImNhbGwgZmFpbGVkIik7CiAgICAgICAgICAgIHJlc3VsdHNbaV0gPSByZXN1bHQ7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gcmVzdWx0czsKICAgIH0KfQo=",
    },
    {
        fileName: "TestMultiCall.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IFRlc3RNdWx0aUNhbGwgewogICAgZnVuY3Rpb24gdGVzdCh1aW50MjU2IF9pKSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICByZXR1cm4gX2k7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0RGF0YSh1aW50MjU2IF9pKSBleHRlcm5hbCBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIHJldHVybiBhYmkuZW5jb2RlV2l0aFNlbGVjdG9yKHRoaXMudGVzdC5zZWxlY3RvciwgX2kpOwogICAgfQp9Cg==",
    },
]

const html = `<p>An example of contract that aggregates multiple queries using a <code>for</code> loop and <code>staticcall</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiCall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">multiCall</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> targets, <span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-built_in">require</span>(targets.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> data.<span class="hljs-built_in">length</span>, <span class="hljs-string">"target length != data length"</span>);

        <span class="hljs-keyword">bytes</span>[] <span class="hljs-keyword">memory</span> results <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>[](data.<span class="hljs-built_in">length</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> targets.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> result) <span class="hljs-operator">=</span> targets[i].<span class="hljs-built_in">staticcall</span>(data[i]);
            <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"call failed"</span>);
            results[i] <span class="hljs-operator">=</span> result;
        }

        <span class="hljs-keyword">return</span> results;
    }
}
</code></pre><p>Contract to test <code>MultiCall</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestMultiCall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> _i;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getData</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSelector</span>(<span class="hljs-built_in">this</span>.test.<span class="hljs-built_in">selector</span>, _i);
    }
}
</code></pre>`

export default html
