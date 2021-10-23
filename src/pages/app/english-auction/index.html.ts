// metadata
export const version = "0.8.3"
export const title = "English Auction"
export const description = "An example of English auction in Solidity"

const html = `<p>English auction for NFT.</p>
<h3 id="auction">Auction</h3>
<ol>
<li>Seller of NFT deploys this contract.</li>
<li>Auction lasts for 7 days.</li>
<li>Participants can bid by depositing ETH greater than the current highest bidder.</li>
<li>All bidders except the highest bidder can withdraw their bid</li>
</ol>
<h3 id="after-the-auction">After the auction</h3>
<ol>
<li>Highest bidder becomes the new owner of NFT.</li>
<li>The seller receives the highest bid of ETH.</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.3;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title"><span class="hljs-built_in">transfer</span></span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint</span></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span>,
        <span class="hljs-keyword">address</span>,
        <span class="hljs-keyword">uint</span>
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EnglishAuction</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Start</span>(<span class="hljs-params"></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Bid</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> sender, <span class="hljs-keyword">uint</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> bidder, <span class="hljs-keyword">uint</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">End</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> winner, <span class="hljs-keyword">uint</span> amount</span>)</span>;

    IERC721 <span class="hljs-keyword">public</span> nft;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> nftId;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> <span class="hljs-keyword">public</span> seller;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> endAt;
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> started;
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> ended;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> highestBidder;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> highestBid;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> =&gt; <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> bids;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _nft,
        <span class="hljs-keyword">uint</span> _nftId,
        <span class="hljs-keyword">uint</span> _startingBid
    </span>) </span>{
        nft = IERC721(_nft);
        nftId = _nftId;

        seller = <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
        highestBid = _startingBid;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">start</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(!started, <span class="hljs-string">"started"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> == seller, <span class="hljs-string">"not seller"</span>);

        nft.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), nftId);
        started = <span class="hljs-literal">true</span>;
        endAt = <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> + <span class="hljs-number">7</span> <span class="hljs-literal">days</span>;

        <span class="hljs-keyword">emit</span> Start();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bid</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(started, <span class="hljs-string">"not started"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> &lt; endAt, <span class="hljs-string">"ended"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> &gt; highestBid, <span class="hljs-string">"value &lt; highest"</span>);

        <span class="hljs-keyword">if</span> (highestBidder != <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>)) {
            bids[highestBidder] += highestBid;
        }

        highestBidder = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        highestBid = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;

        <span class="hljs-keyword">emit</span> Bid(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">uint</span> bal = bids[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        bids[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>).<span class="hljs-built_in">transfer</span>(bal);

        <span class="hljs-keyword">emit</span> Withdraw(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, bal);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">end</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(started, <span class="hljs-string">"not started"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> &gt;= endAt, <span class="hljs-string">"not ended"</span>);
        <span class="hljs-built_in">require</span>(!ended, <span class="hljs-string">"ended"</span>);

        ended = <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">if</span> (highestBidder != <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>)) {
            nft.<span class="hljs-built_in">transfer</span>(highestBidder, nftId);
            seller.<span class="hljs-built_in">transfer</span>(highestBid);
        } <span class="hljs-keyword">else</span> {
            nft.<span class="hljs-built_in">transfer</span>(seller, nftId);
        }

        <span class="hljs-keyword">emit</span> End(highestBidder, highestBid);
    }
}
</code></pre>
`

export default html
