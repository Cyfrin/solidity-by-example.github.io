// metadata
export const version = "0.8.10"
export const title = "Crowd Fund"
export const description = "An example of crowd funding contract"

const html = `<p>Crowd fund ERC20 token</p>
<ol>
<li>User creates a campaign.</li>
<li>Users can pledge, transferring their token to a campaign.</li>
<li>After the campaign ends, campaign creator can claim the funds if total amount pledged is more than the campaign goal.</li>
<li>Otherwise, campaign did not reach it&#39;s goal, users can withdraw their pledge.</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint</span></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span>,
        <span class="hljs-keyword">address</span>,
        <span class="hljs-keyword">uint</span>
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CrowdFund</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Launch</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> id,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> creator,
        <span class="hljs-keyword">uint</span> goal,
        <span class="hljs-keyword">uint32</span> startAt,
        <span class="hljs-keyword">uint32</span> endAt
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Cancel</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Pledge</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> id, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> caller, <span class="hljs-keyword">uint</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Unpledge</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> id, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> caller, <span class="hljs-keyword">uint</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Claim</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Refund</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> caller, <span class="hljs-keyword">uint</span> amount</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">Campaign</span> {
        <span class="hljs-comment">// Creator of campaign</span>
        <span class="hljs-keyword">address</span> creator;
        <span class="hljs-comment">// Amount of tokens to raise</span>
        <span class="hljs-keyword">uint</span> goal;
        <span class="hljs-comment">// Total amount pledged</span>
        <span class="hljs-keyword">uint</span> pledged;
        <span class="hljs-comment">// Timestamp of start of campaign</span>
        <span class="hljs-keyword">uint32</span> startAt;
        <span class="hljs-comment">// Timestamp of end of campaign</span>
        <span class="hljs-keyword">uint32</span> endAt;
        <span class="hljs-comment">// True if goal was reached and creator has claimed the tokens.</span>
        <span class="hljs-keyword">bool</span> claimed;
    }

    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token;
    <span class="hljs-comment">// Total count of campaigns created.</span>
    <span class="hljs-comment">// It is also used to generate id for new campaigns.</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count;
    <span class="hljs-comment">// Mapping from id to Campaign</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> Campaign) <span class="hljs-keyword">public</span> campaigns;
    <span class="hljs-comment">// Mapping from campaign id =&gt; pledger =&gt; amount pledged</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>)) <span class="hljs-keyword">public</span> pledgedAmount;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token</span>) </span>{
        token <span class="hljs-operator">=</span> IERC20(_token);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">launch</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> _goal,
        <span class="hljs-keyword">uint32</span> _startAt,
        <span class="hljs-keyword">uint32</span> _endAt
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(_startAt <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, <span class="hljs-string">"start at &lt; now"</span>);
        <span class="hljs-built_in">require</span>(_endAt <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> _startAt, <span class="hljs-string">"end at &lt; start at"</span>);
        <span class="hljs-built_in">require</span>(_endAt <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> <span class="hljs-number">90</span> <span class="hljs-literal">days</span>, <span class="hljs-string">"end at &gt; max duration"</span>);

        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        campaigns[count] <span class="hljs-operator">=</span> Campaign({
            creator: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            goal: _goal,
            pledged: <span class="hljs-number">0</span>,
            startAt: _startAt,
            endAt: _endAt,
            claimed: <span class="hljs-literal">false</span>
        });

        <span class="hljs-keyword">emit</span> Launch(count, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _goal, _startAt, _endAt);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cancel</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        Campaign <span class="hljs-keyword">memory</span> campaign <span class="hljs-operator">=</span> campaigns[_id];
        <span class="hljs-built_in">require</span>(campaign.creator <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-string">"not creator"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&lt;</span> campaign.startAt, <span class="hljs-string">"started"</span>);

        <span class="hljs-keyword">delete</span> campaigns[_id];
        <span class="hljs-keyword">emit</span> Cancel(_id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">pledge</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _id, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        Campaign <span class="hljs-keyword">storage</span> campaign <span class="hljs-operator">=</span> campaigns[_id];
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> campaign.startAt, <span class="hljs-string">"not started"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> campaign.endAt, <span class="hljs-string">"ended"</span>);

        campaign.pledged <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
        pledgedAmount[_id][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
        token.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount);

        <span class="hljs-keyword">emit</span> Pledge(_id, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unpledge</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _id, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        Campaign <span class="hljs-keyword">storage</span> campaign <span class="hljs-operator">=</span> campaigns[_id];
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> campaign.endAt, <span class="hljs-string">"ended"</span>);

        campaign.pledged <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        pledgedAmount[_id][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        token.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _amount);

        <span class="hljs-keyword">emit</span> Unpledge(_id, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claim</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        Campaign <span class="hljs-keyword">storage</span> campaign <span class="hljs-operator">=</span> campaigns[_id];
        <span class="hljs-built_in">require</span>(campaign.creator <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-string">"not creator"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span> campaign.endAt, <span class="hljs-string">"not ended"</span>);
        <span class="hljs-built_in">require</span>(campaign.pledged <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> campaign.goal, <span class="hljs-string">"pledged &lt; goal"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>campaign.claimed, <span class="hljs-string">"claimed"</span>);

        campaign.claimed <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        token.<span class="hljs-built_in">transfer</span>(campaign.creator, campaign.pledged);

        <span class="hljs-keyword">emit</span> Claim(_id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">refund</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        Campaign <span class="hljs-keyword">memory</span> campaign <span class="hljs-operator">=</span> campaigns[_id];
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span> campaign.endAt, <span class="hljs-string">"not ended"</span>);
        <span class="hljs-built_in">require</span>(campaign.pledged <span class="hljs-operator">&lt;</span> campaign.goal, <span class="hljs-string">"pledged &gt;= goal"</span>);

        <span class="hljs-keyword">uint</span> bal <span class="hljs-operator">=</span> pledgedAmount[_id][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        pledgedAmount[_id][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        token.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, bal);

        <span class="hljs-keyword">emit</span> Refund(_id, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, bal);
    }
}
</code></pre>
`

export default html
