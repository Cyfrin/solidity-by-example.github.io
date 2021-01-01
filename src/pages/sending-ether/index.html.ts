// metadata
export const version = "0.6.10"
export const title = "Sending Ether (transfer, send, call)"
export const description = "An example of sending Ether in Solidity"

const html = `<h3 id="how-to-send-ether">How to send Ether?</h3>
<p>You can send Ether to other contracts by</p>
<ul>
<li><code>transfer</code> (2300 gas, throws error)</li>
<li><code>send</code> (2300 gas, returns bool)</li>
<li><code>call</code> (forward all gas or set gas, returns bool)</li>
</ul>
<h3 id="how-to-receive-ether">How to receive Ether?</h3>
<p>A contract receiving Ether must have at least one of the functions below</p>
<ul>
<li><code>receive() external payable</code></li>
<li><code>fallback() external payable</code></li>
</ul>
<p><code>receive()</code> is called if <code>msg.data</code> is empty, otherwise <code>fallback()</code> is called.</p>
<h3 id="which-method-should-you-use">Which method should you use?</h3>
<p><code>call</code> in combination with re-entrancy guard is the recommended method to use after December 2019.</p>
<p>Guard against re-entrancy by</p>
<ul>
<li>making all state changes before calling other contracts</li>
<li>using re-entrancy guard modifier</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ReceiveEther</span> </span>{
    <span class="hljs-comment">/*
    Which function is called, fallback() or receive()?

           send Ether
               |
         msg.data is empty?
              / \\
            yes  no
            /     \\
receive() exists?  fallback()
         /   \\
        yes   no
        /      \\
    receive()   fallback()
    */</span>

    <span class="hljs-comment">// Function to receive Ether. msg.data must be empty</span>
    <span class="hljs-keyword">receive</span>() <span class="hljs-keyword">external</span> <span class="hljs-keyword">payable</span> {}

    <span class="hljs-comment">// Fallback function is called when msg.data is not empty</span>
    <span class="hljs-keyword">fallback</span>() <span class="hljs-keyword">external</span> <span class="hljs-keyword">payable</span> {}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SendEther</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sendViaTransfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// This function is no longer recommended for sending Ether.</span>
        _to.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sendViaSend</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// Send returns a boolean value indicating success or failure.</span>
        <span class="hljs-comment">// This function is not recommended for sending Ether.</span>
        <span class="hljs-keyword">bool</span> sent = _to.<span class="hljs-built_in">send</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sendViaCall</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// Call returns a boolean value indicating success or failure.</span>
        <span class="hljs-comment">// This is the current recommended method to use.</span>
        (<span class="hljs-keyword">bool</span> sent, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data) = _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value:</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>
`

export default html
