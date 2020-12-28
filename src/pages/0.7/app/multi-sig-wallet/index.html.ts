// metadata
export const version = "0.6.10"
export const title = "Multi-Sig Wallet"
export const description = "An example of multi-sig wallet in Solidity"

const html = `<p>Let&#39;s create an multi-sig wallet. Here are the specifications.</p>
<p>The wallet owners can</p>
<ul>
<li>submit a transaction</li>
<li>approve and revoke approval of pending transcations</li>
<li>anyone can execute a transcation after enough owners has approved it.</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiSigWallet</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Deposit</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> sender, <span class="hljs-keyword">uint</span> amount, <span class="hljs-keyword">uint</span> balance</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">SubmitTransaction</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner,
        <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> txIndex,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to,
        <span class="hljs-keyword">uint</span> value,
        <span class="hljs-keyword">bytes</span> data
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ConfirmTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> txIndex</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">RevokeConfirmation</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> txIndex</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ExecuteTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> txIndex</span>)</span>;

    <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">public</span> owners;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> isOwner;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> numConfirmationsRequired;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">Transaction</span> {
        <span class="hljs-keyword">address</span> to;
        <span class="hljs-keyword">uint</span> value;
        <span class="hljs-keyword">bytes</span> data;
        <span class="hljs-keyword">bool</span> executed;
        <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">bool</span>) isConfirmed;
        <span class="hljs-keyword">uint</span> numConfirmations;
    }

    Transaction[] <span class="hljs-keyword">public</span> transactions;

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">onlyOwner</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(isOwner[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"not owner"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">txExists</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>) </span>{
        <span class="hljs-built_in">require</span>(_txIndex &lt; transactions.<span class="hljs-built_in">length</span>, <span class="hljs-string">"tx does not exist"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">notExecuted</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>) </span>{
        <span class="hljs-built_in">require</span>(!transactions[_txIndex].executed, <span class="hljs-string">"tx already executed"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">notConfirmed</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>) </span>{
        <span class="hljs-built_in">require</span>(!transactions[_txIndex].isConfirmed[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"tx already confirmed"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> _owners, <span class="hljs-keyword">uint</span> _numConfirmationsRequired</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(_owners.<span class="hljs-built_in">length</span> &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"owners required"</span>);
        <span class="hljs-built_in">require</span>(
            _numConfirmationsRequired &gt; <span class="hljs-number">0</span> &amp;&amp; _numConfirmationsRequired &lt;= _owners.<span class="hljs-built_in">length</span>,
            <span class="hljs-string">"invalid number of required confirmations"</span>
        );

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; _owners.<span class="hljs-built_in">length</span>; i++) {
            <span class="hljs-keyword">address</span> owner = _owners[i];

            <span class="hljs-built_in">require</span>(owner != <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"invalid owner"</span>);
            <span class="hljs-built_in">require</span>(!isOwner[owner], <span class="hljs-string">"owner not unique"</span>);

            isOwner[owner] = <span class="hljs-literal">true</span>;
            owners.<span class="hljs-built_in">push</span>(owner);
        }

        numConfirmationsRequired = _numConfirmationsRequired;
    }

    <span class="hljs-keyword">receive</span>() <span class="hljs-keyword">payable</span> <span class="hljs-keyword">external</span> {
        <span class="hljs-keyword">emit</span> Deposit(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">submitTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _value, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _data</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyOwner</span>
    </span>{
        <span class="hljs-keyword">uint</span> txIndex = transactions.<span class="hljs-built_in">length</span>;

        transactions.<span class="hljs-built_in">push</span>(Transaction({
            to: _to,
            <span class="hljs-built_in">value:</span> _value,
            data: _data,
            executed: <span class="hljs-literal">false</span>,
            numConfirmations: <span class="hljs-number">0</span>
        }));

        <span class="hljs-keyword">emit</span> SubmitTransaction(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, txIndex, _to, _value, _data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">confirmTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyOwner</span>
        <span class="hljs-title">txExists</span>(<span class="hljs-params">_txIndex</span>)
        <span class="hljs-title">notExecuted</span>(<span class="hljs-params">_txIndex</span>)
        <span class="hljs-title">notConfirmed</span>(<span class="hljs-params">_txIndex</span>)
    </span>{
        Transaction <span class="hljs-keyword">storage</span> transaction = transactions[_txIndex];

        transaction.isConfirmed[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] = <span class="hljs-literal">true</span>;
        transaction.numConfirmations += <span class="hljs-number">1</span>;

        <span class="hljs-keyword">emit</span> ConfirmTransaction(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _txIndex);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">executeTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyOwner</span>
        <span class="hljs-title">txExists</span>(<span class="hljs-params">_txIndex</span>)
        <span class="hljs-title">notExecuted</span>(<span class="hljs-params">_txIndex</span>)
    </span>{
        Transaction <span class="hljs-keyword">storage</span> transaction = transactions[_txIndex];

        <span class="hljs-built_in">require</span>(
            transaction.numConfirmations &gt;= numConfirmationsRequired,
            <span class="hljs-string">"cannot execute tx"</span>
        );

        transaction.executed = <span class="hljs-literal">true</span>;

        (<span class="hljs-keyword">bool</span> success, ) = transaction.to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value:</span> transaction.<span class="hljs-built_in">value</span>}(transaction.data);
        <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"tx failed"</span>);

        <span class="hljs-keyword">emit</span> ExecuteTransaction(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _txIndex);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">revokeConfirmation</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyOwner</span>
        <span class="hljs-title">txExists</span>(<span class="hljs-params">_txIndex</span>)
        <span class="hljs-title">notExecuted</span>(<span class="hljs-params">_txIndex</span>)
    </span>{
        Transaction <span class="hljs-keyword">storage</span> transaction = transactions[_txIndex];

        <span class="hljs-built_in">require</span>(transaction.isConfirmed[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"tx not confirmed"</span>);

        transaction.isConfirmed[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] = <span class="hljs-literal">false</span>;
        transaction.numConfirmations -= <span class="hljs-number">1</span>;

        <span class="hljs-keyword">emit</span> RevokeConfirmation(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _txIndex);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getOwners</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> owners;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTransactionCount</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> transactions.<span class="hljs-built_in">length</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTransaction</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> value, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data, <span class="hljs-keyword">bool</span> executed, <span class="hljs-keyword">uint</span> numConfirmations</span>)
    </span>{
        Transaction <span class="hljs-keyword">storage</span> transaction = transactions[_txIndex];

        <span class="hljs-keyword">return</span> (
            transaction.to,
            transaction.<span class="hljs-built_in">value</span>,
            transaction.data,
            transaction.executed,
            transaction.numConfirmations
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isConfirmed</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _txIndex, <span class="hljs-keyword">address</span> _owner</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        Transaction <span class="hljs-keyword">storage</span> transaction = transactions[_txIndex];

        <span class="hljs-keyword">return</span> transaction.isConfirmed[_owner];
    }
}
</code></pre>
<p>Here is a contract to test sending transactions from the multi-sig wallet</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestContract</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> i;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callMe</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> j</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        i += j;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getData</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"callMe(uint256)"</span>, <span class="hljs-number">123</span>);
    }
}
</code></pre>
`

export default html
