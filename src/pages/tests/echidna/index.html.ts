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
<h3 id="testing-time-and-sender">Testing Time and Sender</h3>
<p>Echidna can fuzz timestamp. Range of timestamp is set in the configuration. Default is 7 days.</p>
<p>Contract callers can also be set in the configuration. Default accounts are</p>
<ul>
<li><code>0x10000</code></li>
<li><code>0x20000</code></li>
<li><code>0x00a329C0648769a73afAC7F9381e08fb43DBEA70</code></li>
</ul>
<p>Click <a href="https://github.com/crytic/echidna/blob/master/examples/solidity/basic/default.yaml">here</a> to see default configuration</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8;</span>

<span class="hljs-comment">/*
docker run -it --rm -v $PWD:/code trailofbits/eth-security-toolbox
echidna-test EchidnaTestTimeAndCaller.sol --contract EchidnaTestTimeAndCaller --check-asserts
*/</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EchidnaTestTimeAndCaller</span> </span>{
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">private</span> pass <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> createdAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;

    <span class="hljs-comment">/*
    test will fail if Echidna can call setFail()
    test will pass otherwise
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">echidna_test_pass</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span> pass;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setFail</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">/*
        Echidna can call this function if delay &lt;= max block delay
        Otherwise Echidna will not be able to call this function.
        Max block delay can be extended by specifying it in a configuration file.
        */</span>
        <span class="hljs-keyword">uint</span> delay <span class="hljs-operator">=</span> <span class="hljs-number">7</span> <span class="hljs-literal">days</span>;
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> createdAt <span class="hljs-operator">+</span> delay);
        pass <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-comment">// Default senders</span>
    <span class="hljs-keyword">address</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">private</span> senders <span class="hljs-operator">=</span> [
        <span class="hljs-keyword">address</span>(<span class="hljs-number">0x10000</span>),
        <span class="hljs-keyword">address</span>(<span class="hljs-number">0x20000</span>),
        <span class="hljs-keyword">address</span>(<span class="hljs-number">0x00a329C0648769a73afAC7F9381e08fb43DBEA70</span>)
    ];

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> sender <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;

    <span class="hljs-comment">// Pass _sender as input and require msg.sender == _sender</span>
    <span class="hljs-comment">// to see _sender for counter example</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setSender</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _sender</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(_sender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
        sender <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-comment">// Check default senders. Sender should be one of the 3 default accounts.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">echidna_test_sender</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> <span class="hljs-number">3</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">if</span> (sender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> senders[i]) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
            }
        }
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }
}
</code></pre>
`

export default html
