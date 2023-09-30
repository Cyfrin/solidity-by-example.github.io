// metadata
export const version = "0.8.20"
export const title = "Error"
export const description = "Example of how to throw errors in Solidity"

export const keywords = ["error", "errors", "require", "revert", "assert"]

export const codes = [
  {
    fileName: "Account.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IEFjY291bnQgewogICAgdWludCBwdWJsaWMgYmFsYW5jZTsKICAgIHVpbnQgcHVibGljIGNvbnN0YW50IE1BWF9VSU5UID0gMiAqKiAyNTYgLSAxOwoKICAgIGZ1bmN0aW9uIGRlcG9zaXQodWludCBfYW1vdW50KSBwdWJsaWMgewogICAgICAgIHVpbnQgb2xkQmFsYW5jZSA9IGJhbGFuY2U7CiAgICAgICAgdWludCBuZXdCYWxhbmNlID0gYmFsYW5jZSArIF9hbW91bnQ7CgogICAgICAgIC8vIGJhbGFuY2UgKyBfYW1vdW50IGRvZXMgbm90IG92ZXJmbG93IGlmIGJhbGFuY2UgKyBfYW1vdW50ID49IGJhbGFuY2UKICAgICAgICByZXF1aXJlKG5ld0JhbGFuY2UgPj0gb2xkQmFsYW5jZSwgIk92ZXJmbG93Iik7CgogICAgICAgIGJhbGFuY2UgPSBuZXdCYWxhbmNlOwoKICAgICAgICBhc3NlcnQoYmFsYW5jZSA+PSBvbGRCYWxhbmNlKTsKICAgIH0KCiAgICBmdW5jdGlvbiB3aXRoZHJhdyh1aW50IF9hbW91bnQpIHB1YmxpYyB7CiAgICAgICAgdWludCBvbGRCYWxhbmNlID0gYmFsYW5jZTsKCiAgICAgICAgLy8gYmFsYW5jZSAtIF9hbW91bnQgZG9lcyBub3QgdW5kZXJmbG93IGlmIGJhbGFuY2UgPj0gX2Ftb3VudAogICAgICAgIHJlcXVpcmUoYmFsYW5jZSA+PSBfYW1vdW50LCAiVW5kZXJmbG93Iik7CgogICAgICAgIGlmIChiYWxhbmNlIDwgX2Ftb3VudCkgewogICAgICAgICAgICByZXZlcnQoIlVuZGVyZmxvdyIpOwogICAgICAgIH0KCiAgICAgICAgYmFsYW5jZSAtPSBfYW1vdW50OwoKICAgICAgICBhc3NlcnQoYmFsYW5jZSA8PSBvbGRCYWxhbmNlKTsKICAgIH0KfQo=",
  },
  {
    fileName: "Error.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IEVycm9yIHsKICAgIGZ1bmN0aW9uIHRlc3RSZXF1aXJlKHVpbnQgX2kpIHB1YmxpYyBwdXJlIHsKICAgICAgICAvLyBSZXF1aXJlIHNob3VsZCBiZSB1c2VkIHRvIHZhbGlkYXRlIGNvbmRpdGlvbnMgc3VjaCBhczoKICAgICAgICAvLyAtIGlucHV0cwogICAgICAgIC8vIC0gY29uZGl0aW9ucyBiZWZvcmUgZXhlY3V0aW9uCiAgICAgICAgLy8gLSByZXR1cm4gdmFsdWVzIGZyb20gY2FsbHMgdG8gb3RoZXIgZnVuY3Rpb25zCiAgICAgICAgcmVxdWlyZShfaSA+IDEwLCAiSW5wdXQgbXVzdCBiZSBncmVhdGVyIHRoYW4gMTAiKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0UmV2ZXJ0KHVpbnQgX2kpIHB1YmxpYyBwdXJlIHsKICAgICAgICAvLyBSZXZlcnQgaXMgdXNlZnVsIHdoZW4gdGhlIGNvbmRpdGlvbiB0byBjaGVjayBpcyBjb21wbGV4LgogICAgICAgIC8vIFRoaXMgY29kZSBkb2VzIHRoZSBleGFjdCBzYW1lIHRoaW5nIGFzIHRoZSBleGFtcGxlIGFib3ZlCiAgICAgICAgaWYgKF9pIDw9IDEwKSB7CiAgICAgICAgICAgIHJldmVydCgiSW5wdXQgbXVzdCBiZSBncmVhdGVyIHRoYW4gMTAiKTsKICAgICAgICB9CiAgICB9CgogICAgdWludCBwdWJsaWMgbnVtOwoKICAgIGZ1bmN0aW9uIHRlc3RBc3NlcnQoKSBwdWJsaWMgdmlldyB7CiAgICAgICAgLy8gQXNzZXJ0IHNob3VsZCBvbmx5IGJlIHVzZWQgdG8gdGVzdCBmb3IgaW50ZXJuYWwgZXJyb3JzLAogICAgICAgIC8vIGFuZCB0byBjaGVjayBpbnZhcmlhbnRzLgoKICAgICAgICAvLyBIZXJlIHdlIGFzc2VydCB0aGF0IG51bSBpcyBhbHdheXMgZXF1YWwgdG8gMAogICAgICAgIC8vIHNpbmNlIGl0IGlzIGltcG9zc2libGUgdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiBudW0KICAgICAgICBhc3NlcnQobnVtID09IDApOwogICAgfQoKICAgIC8vIGN1c3RvbSBlcnJvcgogICAgZXJyb3IgSW5zdWZmaWNpZW50QmFsYW5jZSh1aW50IGJhbGFuY2UsIHVpbnQgd2l0aGRyYXdBbW91bnQpOwoKICAgIGZ1bmN0aW9uIHRlc3RDdXN0b21FcnJvcih1aW50IF93aXRoZHJhd0Ftb3VudCkgcHVibGljIHZpZXcgewogICAgICAgIHVpbnQgYmFsID0gYWRkcmVzcyh0aGlzKS5iYWxhbmNlOwogICAgICAgIGlmIChiYWwgPCBfd2l0aGRyYXdBbW91bnQpIHsKICAgICAgICAgICAgcmV2ZXJ0IEluc3VmZmljaWVudEJhbGFuY2Uoe2JhbGFuY2U6IGJhbCwgd2l0aGRyYXdBbW91bnQ6IF93aXRoZHJhd0Ftb3VudH0pOwogICAgICAgIH0KICAgIH0KfQo=",
  },
]

const html = `<p>An error will undo all changes made to the state during a transaction.</p>
<p>You can throw an error by calling <code>require</code>, <code>revert</code> or <code>assert</code>.</p>
<ul>
<li><code>require</code> is used to validate inputs and conditions before execution.</li>
<li><code>revert</code> is similar to <code>require</code>. See the code below for details.</li>
<li><code>assert</code> is used to check for code that should never be false. Failing
assertion probably means that there is a bug.</li>
</ul>
<p>Use custom error to save gas.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title"><span class="hljs-built_in">Error</span></span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRequire</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-comment">// Require should be used to validate conditions such as:</span>
        <span class="hljs-comment">// - inputs</span>
        <span class="hljs-comment">// - conditions before execution</span>
        <span class="hljs-comment">// - return values from calls to other functions</span>
        <span class="hljs-built_in">require</span>(_i <span class="hljs-operator">&gt;</span> <span class="hljs-number">10</span>, <span class="hljs-string">"Input must be greater than 10"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRevert</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-comment">// Revert is useful when the condition to check is complex.</span>
        <span class="hljs-comment">// This code does the exact same thing as the example above</span>
        <span class="hljs-keyword">if</span> (_i <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-number">10</span>) {
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"Input must be greater than 10"</span>);
        }
    }

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testAssert</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> </span>{
        <span class="hljs-comment">// Assert should only be used to test for internal errors,</span>
        <span class="hljs-comment">// and to check invariants.</span>

        <span class="hljs-comment">// Here we assert that num is always equal to 0</span>
        <span class="hljs-comment">// since it is impossible to update the value of num</span>
        <span class="hljs-built_in">assert</span>(num <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>);
    }

    <span class="hljs-comment">// custom error</span>
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">InsufficientBalance</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> balance, <span class="hljs-keyword">uint</span> withdrawAmount</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testCustomError</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _withdrawAmount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> </span>{
        <span class="hljs-keyword">uint</span> bal <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
        <span class="hljs-keyword">if</span> (bal <span class="hljs-operator">&lt;</span> _withdrawAmount) {
            <span class="hljs-keyword">revert</span> InsufficientBalance({balance: bal, withdrawAmount: _withdrawAmount});
        }
    }
}
</code></pre><p>Here is another example</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Account</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> balance;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MAX_UINT <span class="hljs-operator">=</span> <span class="hljs-number">2</span> <span class="hljs-operator">*</span><span class="hljs-operator">*</span> <span class="hljs-number">256</span> <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> oldBalance <span class="hljs-operator">=</span> balance;
        <span class="hljs-keyword">uint</span> newBalance <span class="hljs-operator">=</span> balance <span class="hljs-operator">+</span> _amount;

        <span class="hljs-comment">// balance + _amount does not overflow if balance + _amount &gt;= balance</span>
        <span class="hljs-built_in">require</span>(newBalance <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> oldBalance, <span class="hljs-string">"Overflow"</span>);

        balance <span class="hljs-operator">=</span> newBalance;

        <span class="hljs-built_in">assert</span>(balance <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> oldBalance);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> oldBalance <span class="hljs-operator">=</span> balance;

        <span class="hljs-comment">// balance - _amount does not underflow if balance &gt;= _amount</span>
        <span class="hljs-built_in">require</span>(balance <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> _amount, <span class="hljs-string">"Underflow"</span>);

        <span class="hljs-keyword">if</span> (balance <span class="hljs-operator">&lt;</span> _amount) {
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"Underflow"</span>);
        }

        balance <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;

        <span class="hljs-built_in">assert</span>(balance <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> oldBalance);
    }
}
</code></pre>`

export default html
