// metadata
export const version = "0.8.26"
export const title = "Echidna"
export const description = "An example of testing contracts with Echidna"
export const cyfrinLink = "https://www.cyfrin.io/glossary/echidna-fuzz-testing-solidity-code-example"

export const keywords = [
    "test",
    "echidna",
]

export const codes = [
    {
        fileName: "EchidnaTestTimeAndCaller.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qCmRvY2tlciBydW4gLWl0IC0tcm0gLXYgJFBXRDovY29kZSB0cmFpbG9mYml0cy9ldGgtc2VjdXJpdHktdG9vbGJveAplY2hpZG5hIEVjaGlkbmFUZXN0VGltZUFuZENhbGxlci5zb2wgLS1jb250cmFjdCBFY2hpZG5hVGVzdFRpbWVBbmRDYWxsZXIKKi8KY29udHJhY3QgRWNoaWRuYVRlc3RUaW1lQW5kQ2FsbGVyIHsKICAgIGJvb2wgcHJpdmF0ZSBwYXNzID0gdHJ1ZTsKICAgIHVpbnQyNTYgcHJpdmF0ZSBjcmVhdGVkQXQgPSBibG9jay50aW1lc3RhbXA7CgogICAgLyoKICAgIHRlc3Qgd2lsbCBmYWlsIGlmIEVjaGlkbmEgY2FuIGNhbGwgc2V0RmFpbCgpCiAgICB0ZXN0IHdpbGwgcGFzcyBvdGhlcndpc2UKICAgICovCiAgICBmdW5jdGlvbiBlY2hpZG5hX3Rlc3RfcGFzcygpIHB1YmxpYyB2aWV3IHJldHVybnMgKGJvb2wpIHsKICAgICAgICByZXR1cm4gcGFzczsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXRGYWlsKCkgZXh0ZXJuYWwgewogICAgICAgIC8qCiAgICAgICAgRWNoaWRuYSBjYW4gY2FsbCB0aGlzIGZ1bmN0aW9uIGlmIGRlbGF5IDw9IG1heCBibG9jayBkZWxheQogICAgICAgIE90aGVyd2lzZSBFY2hpZG5hIHdpbGwgbm90IGJlIGFibGUgdG8gY2FsbCB0aGlzIGZ1bmN0aW9uLgogICAgICAgIE1heCBibG9jayBkZWxheSBjYW4gYmUgZXh0ZW5kZWQgYnkgc3BlY2lmeWluZyBpdCBpbiBhIGNvbmZpZ3VyYXRpb24gZmlsZS4KICAgICAgICAqLwogICAgICAgIHVpbnQyNTYgZGVsYXkgPSA3IGRheXM7CiAgICAgICAgcmVxdWlyZShibG9jay50aW1lc3RhbXAgPj0gY3JlYXRlZEF0ICsgZGVsYXkpOwogICAgICAgIHBhc3MgPSBmYWxzZTsKICAgIH0KCiAgICAvLyBEZWZhdWx0IHNlbmRlcnMKICAgIC8vIENoYW5nZSB0aGUgYWRkcmVzc2VzIHRvIHNlZSB0aGUgdGVzdCBmYWlsCiAgICBhZGRyZXNzWzNdIHByaXZhdGUgc2VuZGVycyA9CiAgICAgICAgW2FkZHJlc3MoMHgxMDAwMCksIGFkZHJlc3MoMHgyMDAwMCksIGFkZHJlc3MoMHgzMDAwMCldOwoKICAgIGFkZHJlc3MgcHJpdmF0ZSBzZW5kZXIgPSBtc2cuc2VuZGVyOwoKICAgIC8vIFBhc3MgX3NlbmRlciBhcyBpbnB1dCBhbmQgcmVxdWlyZSBtc2cuc2VuZGVyID09IF9zZW5kZXIKICAgIC8vIHRvIHNlZSBfc2VuZGVyIGZvciBjb3VudGVyIGV4YW1wbGUKICAgIGZ1bmN0aW9uIHNldFNlbmRlcihhZGRyZXNzIF9zZW5kZXIpIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKF9zZW5kZXIgPT0gbXNnLnNlbmRlcik7CiAgICAgICAgc2VuZGVyID0gbXNnLnNlbmRlcjsKICAgIH0KCiAgICAvLyBDaGVjayBkZWZhdWx0IHNlbmRlcnMuIFNlbmRlciBzaG91bGQgYmUgb25lIG9mIHRoZSAzIGRlZmF1bHQgYWNjb3VudHMuCiAgICBmdW5jdGlvbiBlY2hpZG5hX3Rlc3Rfc2VuZGVyKCkgcHVibGljIHZpZXcgcmV0dXJucyAoYm9vbCkgewogICAgICAgIGZvciAodWludDI1NiBpOyBpIDwgMzsgaSsrKSB7CiAgICAgICAgICAgIGlmIChzZW5kZXIgPT0gc2VuZGVyc1tpXSkgewogICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQp9Cg==",
    },
    {
        fileName: "TestEchidna.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qCmVjaGlkbmEgVGVzdEVjaGlkbmEuc29sIC0tY29udHJhY3QgVGVzdENvdW50ZXIKKi8KY29udHJhY3QgQ291bnRlciB7CiAgICB1aW50MjU2IHB1YmxpYyBjb3VudDsKCiAgICBmdW5jdGlvbiBpbmMoKSBleHRlcm5hbCB7CiAgICAgICAgY291bnQgKz0gMTsKICAgIH0KCiAgICBmdW5jdGlvbiBkZWMoKSBleHRlcm5hbCB7CiAgICAgICAgY291bnQgLT0gMTsKICAgIH0KfQoKY29udHJhY3QgVGVzdENvdW50ZXIgaXMgQ291bnRlciB7CiAgICBmdW5jdGlvbiBlY2hpZG5hX3Rlc3RfdHJ1ZSgpIHB1YmxpYyB2aWV3IHJldHVybnMgKGJvb2wpIHsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiBlY2hpZG5hX3Rlc3RfZmFsc2UoKSBwdWJsaWMgdmlldyByZXR1cm5zIChib29sKSB7CiAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQoKICAgIGZ1bmN0aW9uIGVjaGlkbmFfdGVzdF9jb3VudCgpIHB1YmxpYyB2aWV3IHJldHVybnMgKGJvb2wpIHsKICAgICAgICAvLyBIZXJlIHdlIGFyZSB0ZXN0aW5nIHRoYXQgQ291bnRlci5jb3VudCBzaG91bGQgYWx3YXlzIGJlIDw9IDUuCiAgICAgICAgLy8gVGVzdCB3aWxsIGZhaWwuIEVjaGlkbmEgaXMgc21hcnQgZW5vdWdoIHRvIGNhbGwgQ291bnRlci5pbmMoKSBtb3JlCiAgICAgICAgLy8gdGhhbiA1IHRpbWVzLgogICAgICAgIHJldHVybiBjb3VudCA8PSA1OwogICAgfQp9CgovKgplY2hpZG5hIFRlc3RFY2hpZG5hLnNvbCAtLWNvbnRyYWN0IFRlc3RBc3NlcnQgLS10ZXN0LW1vZGUgYXNzZXJ0aW9uCiovCmNvbnRyYWN0IFRlc3RBc3NlcnQgewogICAgZnVuY3Rpb24gdGVzdF9hc3NlcnQodWludDI1NiBfaSkgZXh0ZXJuYWwgewogICAgICAgIGFzc2VydChfaSA8IDEwKTsKICAgIH0KCiAgICAvLyBNb3JlIGNvbXBsZXggZXhhbXBsZQogICAgZnVuY3Rpb24gYWJzKHVpbnQyNTYgeCwgdWludDI1NiB5KSBwcml2YXRlIHB1cmUgcmV0dXJucyAodWludDI1NikgewogICAgICAgIGlmICh4ID49IHkpIHsKICAgICAgICAgICAgcmV0dXJuIHggLSB5OwogICAgICAgIH0KICAgICAgICByZXR1cm4geSAtIHg7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9hYnModWludDI1NiB4LCB1aW50MjU2IHkpIGV4dGVybmFsIHsKICAgICAgICB1aW50MjU2IHogPSBhYnMoeCwgeSk7CiAgICAgICAgaWYgKHggPj0geSkgewogICAgICAgICAgICBhc3NlcnQoeiA8PSB4KTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBhc3NlcnQoeiA8PSB5KTsKICAgICAgICB9CiAgICB9Cn0K",
    },
]

const html = `<p>Examples of fuzzing with <a href="https://github.com/crytic/echidna">Echidna</a>.</p>
<ol>
<li>Save the solidity contract as <code>TestEchidna.sol</code></li>
<li>In the folder where your contract is stored execute the following command.</li>
</ol>
<pre><code class="language-shell">docker run -it --rm -v $PWD:/code trailofbits/eth-security-toolbox
</code></pre><p>Inside docker, your code will be stored at <code>/code</code>, in the root directory.</p>
<ol start="3">
<li>See the comments below and execute <code>echidna</code> commands.</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/*
echidna TestEchidna.sol --contract TestCounter
*/</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> count;

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
echidna TestEchidna.sol --contract TestAssert --test-mode assertion
*/</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestAssert</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_assert</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _i</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">assert</span>(_i <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>);
    }

    <span class="hljs-comment">// More complex example</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">abs</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> y) {
            <span class="hljs-keyword">return</span> x <span class="hljs-operator">-</span> y;
        }
        <span class="hljs-keyword">return</span> y <span class="hljs-operator">-</span> x;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_abs</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">uint256</span> z <span class="hljs-operator">=</span> abs(x, y);
        <span class="hljs-keyword">if</span> (x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> y) {
            <span class="hljs-built_in">assert</span>(z <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> x);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">assert</span>(z <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> y);
        }
    }
}
</code></pre><h3>Testing Time and Sender</h3>
<p>Echidna can fuzz timestamps. Range of timestamp is set in the configuration. Default is 7 days.</p>
<p>Contract callers can also be set in the configuration. Default accounts are</p>
<ul>
<li><code>0x10000</code></li>
<li><code>0x20000</code></li>
<li><code>0x30000</code></li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/*
docker run -it --rm -v $PWD:/code trailofbits/eth-security-toolbox
echidna EchidnaTestTimeAndCaller.sol --contract EchidnaTestTimeAndCaller
*/</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EchidnaTestTimeAndCaller</span> </span>{
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">private</span> pass <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> createdAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;

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
        <span class="hljs-keyword">uint256</span> delay <span class="hljs-operator">=</span> <span class="hljs-number">7</span> <span class="hljs-literal">days</span>;
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> createdAt <span class="hljs-operator">+</span> delay);
        pass <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-comment">// Default senders</span>
    <span class="hljs-comment">// Change the addresses to see the test fail</span>
    <span class="hljs-keyword">address</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">private</span> senders <span class="hljs-operator">=</span>
        [<span class="hljs-keyword">address</span>(<span class="hljs-number">0x10000</span>), <span class="hljs-keyword">address</span>(<span class="hljs-number">0x20000</span>), <span class="hljs-keyword">address</span>(<span class="hljs-number">0x30000</span>)];

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> sender <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;

    <span class="hljs-comment">// Pass _sender as input and require msg.sender == _sender</span>
    <span class="hljs-comment">// to see _sender for counter example</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setSender</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _sender</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(_sender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
        sender <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-comment">// Check default senders. Sender should be one of the 3 default accounts.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">echidna_test_sender</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> <span class="hljs-number">3</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">if</span> (sender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> senders[i]) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
            }
        }
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }
}
</code></pre>`

export default html
