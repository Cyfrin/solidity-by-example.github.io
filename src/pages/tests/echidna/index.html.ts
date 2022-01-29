// metadata
export const version = "0.8.10"
export const title = "Echidna"
export const description = "An example of testing contracts with Echidna"

const html = `<p>Examples of fuzzing with <a href="https://github.com/crytic/echidna">Echidna</a>.</p>
<ol>
<li>Save the solidity contract as <code>TestEchidna.sol</code></li>
<li>In the folder where your contract is stored execute the following command.</li>
</ol>
<pre><code class="language-shell">docker run -it --rm -v $PWD:/code trailofbits/eth-security-toolbox
</code></pre>
<p>Inside docker, your code will be stored at <code>/code</code></p>
<ol start="3">
<li>See the comments below and execute <code>echidna-test</code> commands.</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-comment">/*
echidna-test TestEchidna.sol --contract TestCounter
*/</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dec</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestCounter</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">echidna_test_true</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">echidna_test_false</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">echidna_test_count</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-comment">// Here we are testing that Counter.count should always be &lt;= 5.</span>
        <span class="hljs-comment">// Test will fail. Echidna is smart enough to call Counter.inc() more</span>
        <span class="hljs-comment">// than 5 times.</span>
        <span class="hljs-keyword">return</span> count <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-number">5</span>;
    }
}

<span class="hljs-comment">/*
echidna-test TestEchidna.sol --contract TestAssert --check-asserts
*/</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestAssert</span> </span>{
    <span class="hljs-comment">// Asserts not detected in 0.8.</span>
    <span class="hljs-comment">// Switch to 0.7 to test assertions</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_assert</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">assert</span>(_i <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>);
    }

    <span class="hljs-comment">// More complex example</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">abs</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> y) {
            <span class="hljs-keyword">return</span> x <span class="hljs-operator">-</span> y;
        }
        <span class="hljs-keyword">return</span> y <span class="hljs-operator">-</span> x;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_abs</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">uint</span> z <span class="hljs-operator">=</span> abs(x, y);
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> y) {
            <span class="hljs-built_in">assert</span>(z <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> x);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">assert</span>(z <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> y);
        }
    }
}
</code></pre>
`

export default html
