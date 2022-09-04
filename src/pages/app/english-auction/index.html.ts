// metadata
export const version = "0.8.13"
export const title = "English Auction"
export const description = "An example of English auction in Solidity"
export const codes = [
  {
    fileName: "EnglishAuction.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmludGVyZmFjZSBJRVJDNzIxIHsKICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBmcm9tLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCB0b2tlbklkCiAgICApIGV4dGVybmFsOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzLAogICAgICAgIGFkZHJlc3MsCiAgICAgICAgdWludAogICAgKSBleHRlcm5hbDsKfQoKY29udHJhY3QgRW5nbGlzaEF1Y3Rpb24gewogICAgZXZlbnQgU3RhcnQoKTsKICAgIGV2ZW50IEJpZChhZGRyZXNzIGluZGV4ZWQgc2VuZGVyLCB1aW50IGFtb3VudCk7CiAgICBldmVudCBXaXRoZHJhdyhhZGRyZXNzIGluZGV4ZWQgYmlkZGVyLCB1aW50IGFtb3VudCk7CiAgICBldmVudCBFbmQoYWRkcmVzcyB3aW5uZXIsIHVpbnQgYW1vdW50KTsKCiAgICBJRVJDNzIxIHB1YmxpYyBuZnQ7CiAgICB1aW50IHB1YmxpYyBuZnRJZDsKCiAgICBhZGRyZXNzIHBheWFibGUgcHVibGljIHNlbGxlcjsKICAgIHVpbnQgcHVibGljIGVuZEF0OwogICAgYm9vbCBwdWJsaWMgc3RhcnRlZDsKICAgIGJvb2wgcHVibGljIGVuZGVkOwoKICAgIGFkZHJlc3MgcHVibGljIGhpZ2hlc3RCaWRkZXI7CiAgICB1aW50IHB1YmxpYyBoaWdoZXN0QmlkOwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBiaWRzOwoKICAgIGNvbnN0cnVjdG9yKAogICAgICAgIGFkZHJlc3MgX25mdCwKICAgICAgICB1aW50IF9uZnRJZCwKICAgICAgICB1aW50IF9zdGFydGluZ0JpZAogICAgKSB7CiAgICAgICAgbmZ0ID0gSUVSQzcyMShfbmZ0KTsKICAgICAgICBuZnRJZCA9IF9uZnRJZDsKCiAgICAgICAgc2VsbGVyID0gcGF5YWJsZShtc2cuc2VuZGVyKTsKICAgICAgICBoaWdoZXN0QmlkID0gX3N0YXJ0aW5nQmlkOwogICAgfQoKICAgIGZ1bmN0aW9uIHN0YXJ0KCkgZXh0ZXJuYWwgewogICAgICAgIHJlcXVpcmUoIXN0YXJ0ZWQsICJzdGFydGVkIik7CiAgICAgICAgcmVxdWlyZShtc2cuc2VuZGVyID09IHNlbGxlciwgIm5vdCBzZWxsZXIiKTsKCiAgICAgICAgbmZ0LnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBuZnRJZCk7CiAgICAgICAgc3RhcnRlZCA9IHRydWU7CiAgICAgICAgZW5kQXQgPSBibG9jay50aW1lc3RhbXAgKyA3IGRheXM7CgogICAgICAgIGVtaXQgU3RhcnQoKTsKICAgIH0KCiAgICBmdW5jdGlvbiBiaWQoKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICByZXF1aXJlKHN0YXJ0ZWQsICJub3Qgc3RhcnRlZCIpOwogICAgICAgIHJlcXVpcmUoYmxvY2sudGltZXN0YW1wIDwgZW5kQXQsICJlbmRlZCIpOwogICAgICAgIHJlcXVpcmUobXNnLnZhbHVlID4gaGlnaGVzdEJpZCwgInZhbHVlIDwgaGlnaGVzdCIpOwoKICAgICAgICBpZiAoaGlnaGVzdEJpZGRlciAhPSBhZGRyZXNzKDApKSB7CiAgICAgICAgICAgIGJpZHNbaGlnaGVzdEJpZGRlcl0gKz0gaGlnaGVzdEJpZDsKICAgICAgICB9CgogICAgICAgIGhpZ2hlc3RCaWRkZXIgPSBtc2cuc2VuZGVyOwogICAgICAgIGhpZ2hlc3RCaWQgPSBtc2cudmFsdWU7CgogICAgICAgIGVtaXQgQmlkKG1zZy5zZW5kZXIsIG1zZy52YWx1ZSk7CiAgICB9CgogICAgZnVuY3Rpb24gd2l0aGRyYXcoKSBleHRlcm5hbCB7CiAgICAgICAgdWludCBiYWwgPSBiaWRzW21zZy5zZW5kZXJdOwogICAgICAgIGJpZHNbbXNnLnNlbmRlcl0gPSAwOwogICAgICAgIHBheWFibGUobXNnLnNlbmRlcikudHJhbnNmZXIoYmFsKTsKCiAgICAgICAgZW1pdCBXaXRoZHJhdyhtc2cuc2VuZGVyLCBiYWwpOwogICAgfQoKICAgIGZ1bmN0aW9uIGVuZCgpIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKHN0YXJ0ZWQsICJub3Qgc3RhcnRlZCIpOwogICAgICAgIHJlcXVpcmUoYmxvY2sudGltZXN0YW1wID49IGVuZEF0LCAibm90IGVuZGVkIik7CiAgICAgICAgcmVxdWlyZSghZW5kZWQsICJlbmRlZCIpOwoKICAgICAgICBlbmRlZCA9IHRydWU7CiAgICAgICAgaWYgKGhpZ2hlc3RCaWRkZXIgIT0gYWRkcmVzcygwKSkgewogICAgICAgICAgICBuZnQuc2FmZVRyYW5zZmVyRnJvbShhZGRyZXNzKHRoaXMpLCBoaWdoZXN0QmlkZGVyLCBuZnRJZCk7CiAgICAgICAgICAgIHNlbGxlci50cmFuc2ZlcihoaWdoZXN0QmlkKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBuZnQuc2FmZVRyYW5zZmVyRnJvbShhZGRyZXNzKHRoaXMpLCBzZWxsZXIsIG5mdElkKTsKICAgICAgICB9CgogICAgICAgIGVtaXQgRW5kKGhpZ2hlc3RCaWRkZXIsIGhpZ2hlc3RCaWQpOwogICAgfQp9Cg==",
  },
]

const html = `<p>English auction for NFT.</p>
<h3 id="auction">Auction</h3>
<ol>
<li>Seller of NFT deploys this contract.</li>
<li>Auction lasts for 7 days.</li>
<li>Participants can bid by depositing ETH greater than the current highest bidder.</li>
<li>All bidders can withdraw their bid if it is not the current highest bid.</li>
</ol>
<h3 id="after-the-auction">After the auction</h3>
<ol>
<li>Highest bidder becomes the new owner of NFT.</li>
<li>The seller receives the highest bid of ETH.</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

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
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> bids;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _nft,
        <span class="hljs-keyword">uint</span> _nftId,
        <span class="hljs-keyword">uint</span> _startingBid
    </span>) </span>{
        nft <span class="hljs-operator">=</span> IERC721(_nft);
        nftId <span class="hljs-operator">=</span> _nftId;

        seller <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
        highestBid <span class="hljs-operator">=</span> _startingBid;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">start</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>started, <span class="hljs-string">"started"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> seller, <span class="hljs-string">"not seller"</span>);

        nft.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), nftId);
        started <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        endAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> <span class="hljs-number">7</span> <span class="hljs-literal">days</span>;

        <span class="hljs-keyword">emit</span> Start();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bid</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(started, <span class="hljs-string">"not started"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&lt;</span> endAt, <span class="hljs-string">"ended"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">&gt;</span> highestBid, <span class="hljs-string">"value &lt; highest"</span>);

        <span class="hljs-keyword">if</span> (highestBidder <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>)) {
            bids[highestBidder] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> highestBid;
        }

        highestBidder <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        highestBid <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;

        <span class="hljs-keyword">emit</span> Bid(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">uint</span> bal <span class="hljs-operator">=</span> bids[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        bids[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>).<span class="hljs-built_in">transfer</span>(bal);

        <span class="hljs-keyword">emit</span> Withdraw(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, bal);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">end</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(started, <span class="hljs-string">"not started"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> endAt, <span class="hljs-string">"not ended"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>ended, <span class="hljs-string">"ended"</span>);

        ended <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">if</span> (highestBidder <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>)) {
            nft.safeTransferFrom(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), highestBidder, nftId);
            seller.<span class="hljs-built_in">transfer</span>(highestBid);
        } <span class="hljs-keyword">else</span> {
            nft.safeTransferFrom(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), seller, nftId);
        }

        <span class="hljs-keyword">emit</span> End(highestBidder, highestBid);
    }
}
</code></pre>
`

export default html
