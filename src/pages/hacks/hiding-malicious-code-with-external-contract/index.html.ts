// metadata
export const version = "0.8.10"
export const title = "Hiding Malicious Code with External Contract"
export const description =
  "An example of exploit where malicious code is hidden in an external contract in Solidity"

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>In Solidity any address can be casted into specific contract,
even if the contract at the address is not the one being casted.</p>
<p>This can be exploited to hide malicious code. Let&#39;s see how.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-comment">/*
Let&#x27;s say Alice can see the code of Foo and Bar but not Mal.
It is obvious to Alice that Foo.callBar() executes the code inside Bar.log().
However Eve deploys Foo with the address of Mal, so that calling Foo.callBar()
will actually execute the code at Mal.
*/</span>

<span class="hljs-comment">/*
1. Eve deploys Mal
2. Eve deploys Foo with the address of Mal
3. Alice calls Foo.callBar() after reading the code and judging that it is
   safe to call.
4. Although Alice expected Bar.log() to be execute, Mal.log() was executed.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Foo</span> </span>{
    Bar bar;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _bar</span>) </span>{
        bar <span class="hljs-operator">=</span> Bar(_bar);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callBar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        bar.log();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Bar</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"Bar was called"</span>);
    }
}

<span class="hljs-comment">// This code is hidden in a separate file</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Mal</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-comment">// function () external {</span>
    <span class="hljs-comment">//     emit Log("Mal was called");</span>
    <span class="hljs-comment">// }</span>

    <span class="hljs-comment">// Actually we can execute the same exploit even if this function does</span>
    <span class="hljs-comment">// not exist by using the fallback</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"Mal was called"</span>);
    }
}
</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>Initialize a new contract inside the constructor</li>
<li>Make the address of external contract <code>public</code> so that the code of the
external contract can be reviewed</li>
</ul>
<pre><code class="language-solidity">Bar <span class="hljs-keyword">public</span> bar;

<span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
    bar <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Bar();
}
</code></pre>
`

export default html
