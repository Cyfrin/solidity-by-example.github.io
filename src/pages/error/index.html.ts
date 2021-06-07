// metadata
export const version = "0.7.6"
export const title = "Error"
export const description = "Example of how to throw errors in Solidity"

const html = `<p>An error will undo all changes made to the state during a transaction.</p>
<p>You can throw an error by calling <code>require</code>, <code>revert</code> or <code>assert</code>.</p>
<ul>
<li><code>require</code> is used to validate inputs and conditions before execution.</li>
<li><code>revert</code> is similar to <code>require</code>. See the code below for details.</li>
<li><code>assert</code> is used to check for code that should never be false. Failing
assertion probably means that there is a bug.</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title"><span class="hljs-built_in">Error</span></span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRequire</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Require should be used to validate conditions such as:</span>
        <span class="hljs-comment">// - inputs</span>
        <span class="hljs-comment">// - conditions before execution</span>
        <span class="hljs-comment">// - return values from calls to other functions</span>
        <span class="hljs-built_in">require</span>(_i &gt; <span class="hljs-number">10</span>, <span class="hljs-string">"Input must be greater than 10"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRevert</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Revert is useful when the condition to check is complex.</span>
        <span class="hljs-comment">// This code does the exact same thing as the example above</span>
        <span class="hljs-keyword">if</span> (_i &lt;= <span class="hljs-number">10</span>) {
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"Input must be greater than 10"</span>);
        }
    }

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testAssert</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Assert should only be used to test for internal errors,</span>
        <span class="hljs-comment">// and to check invariants.</span>

        <span class="hljs-comment">// Here we assert that num is always equal to 0</span>
        <span class="hljs-comment">// since it is impossible to update the value of num</span>
        <span class="hljs-built_in">assert</span>(num == <span class="hljs-number">0</span>);
    }
}
</code></pre>
<p>Here is another example</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Account</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> balance;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MAX_UINT = <span class="hljs-number">2</span> ** <span class="hljs-number">256</span> - <span class="hljs-number">1</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> oldBalance = balance;
        <span class="hljs-keyword">uint</span> newBalance = balance + _amount;

        <span class="hljs-comment">// balance + _amount does not overflow if balance + _amount &gt;= balance</span>
        <span class="hljs-built_in">require</span>(newBalance &gt;= oldBalance, <span class="hljs-string">"Overflow"</span>);

        balance = newBalance;

        <span class="hljs-built_in">assert</span>(balance &gt;= oldBalance);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> oldBalance = balance;

        <span class="hljs-comment">// balance - _amount does not underflow if balance &gt;= _amount</span>
        <span class="hljs-built_in">require</span>(balance &gt;= _amount, <span class="hljs-string">"Underflow"</span>);

        <span class="hljs-keyword">if</span> (balance &lt; _amount) {
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"Underflow"</span>);
        }

        balance -= _amount;

        <span class="hljs-built_in">assert</span>(balance &lt;= oldBalance);
    }
}
</code></pre>
`

export default html
