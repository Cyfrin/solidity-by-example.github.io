// metadata
export const version = "0.8.24"
export const title = "English Auction"
export const description = "An example of English auction in Solidity"

export const keywords = ["app", "application", "english", "auction", "auctions"]

export const codes = [
  {
    fileName: "EnglishAuction.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmludGVyZmFjZSBJRVJDNzIxIHsKICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oYWRkcmVzcyBmcm9tLCBhZGRyZXNzIHRvLCB1aW50MjU2IHRva2VuSWQpCiAgICAgICAgZXh0ZXJuYWw7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcywgYWRkcmVzcywgdWludDI1NikgZXh0ZXJuYWw7Cn0KCmNvbnRyYWN0IEVuZ2xpc2hBdWN0aW9uIHsKICAgIGV2ZW50IFN0YXJ0KCk7CiAgICBldmVudCBCaWQoYWRkcmVzcyBpbmRleGVkIHNlbmRlciwgdWludDI1NiBhbW91bnQpOwogICAgZXZlbnQgV2l0aGRyYXcoYWRkcmVzcyBpbmRleGVkIGJpZGRlciwgdWludDI1NiBhbW91bnQpOwogICAgZXZlbnQgRW5kKGFkZHJlc3Mgd2lubmVyLCB1aW50MjU2IGFtb3VudCk7CgogICAgSUVSQzcyMSBwdWJsaWMgbmZ0OwogICAgdWludDI1NiBwdWJsaWMgbmZ0SWQ7CgogICAgYWRkcmVzcyBwYXlhYmxlIHB1YmxpYyBzZWxsZXI7CiAgICB1aW50MjU2IHB1YmxpYyBlbmRBdDsKICAgIGJvb2wgcHVibGljIHN0YXJ0ZWQ7CiAgICBib29sIHB1YmxpYyBlbmRlZDsKCiAgICBhZGRyZXNzIHB1YmxpYyBoaWdoZXN0QmlkZGVyOwogICAgdWludDI1NiBwdWJsaWMgaGlnaGVzdEJpZDsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2KSBwdWJsaWMgYmlkczsKCiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzIF9uZnQsIHVpbnQyNTYgX25mdElkLCB1aW50MjU2IF9zdGFydGluZ0JpZCkgewogICAgICAgIG5mdCA9IElFUkM3MjEoX25mdCk7CiAgICAgICAgbmZ0SWQgPSBfbmZ0SWQ7CgogICAgICAgIHNlbGxlciA9IHBheWFibGUobXNnLnNlbmRlcik7CiAgICAgICAgaGlnaGVzdEJpZCA9IF9zdGFydGluZ0JpZDsKICAgIH0KCiAgICBmdW5jdGlvbiBzdGFydCgpIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKCFzdGFydGVkLCAic3RhcnRlZCIpOwogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBzZWxsZXIsICJub3Qgc2VsbGVyIik7CgogICAgICAgIG5mdC50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgbmZ0SWQpOwogICAgICAgIHN0YXJ0ZWQgPSB0cnVlOwogICAgICAgIGVuZEF0ID0gYmxvY2sudGltZXN0YW1wICsgNyBkYXlzOwoKICAgICAgICBlbWl0IFN0YXJ0KCk7CiAgICB9CgogICAgZnVuY3Rpb24gYmlkKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgcmVxdWlyZShzdGFydGVkLCAibm90IHN0YXJ0ZWQiKTsKICAgICAgICByZXF1aXJlKGJsb2NrLnRpbWVzdGFtcCA8IGVuZEF0LCAiZW5kZWQiKTsKICAgICAgICByZXF1aXJlKG1zZy52YWx1ZSA+IGhpZ2hlc3RCaWQsICJ2YWx1ZSA8IGhpZ2hlc3QiKTsKCiAgICAgICAgaWYgKGhpZ2hlc3RCaWRkZXIgIT0gYWRkcmVzcygwKSkgewogICAgICAgICAgICBiaWRzW2hpZ2hlc3RCaWRkZXJdICs9IGhpZ2hlc3RCaWQ7CiAgICAgICAgfQoKICAgICAgICBoaWdoZXN0QmlkZGVyID0gbXNnLnNlbmRlcjsKICAgICAgICBoaWdoZXN0QmlkID0gbXNnLnZhbHVlOwoKICAgICAgICBlbWl0IEJpZChtc2cuc2VuZGVyLCBtc2cudmFsdWUpOwogICAgfQoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KCkgZXh0ZXJuYWwgewogICAgICAgIHVpbnQyNTYgYmFsID0gYmlkc1ttc2cuc2VuZGVyXTsKICAgICAgICBiaWRzW21zZy5zZW5kZXJdID0gMDsKICAgICAgICBwYXlhYmxlKG1zZy5zZW5kZXIpLnRyYW5zZmVyKGJhbCk7CgogICAgICAgIGVtaXQgV2l0aGRyYXcobXNnLnNlbmRlciwgYmFsKTsKICAgIH0KCiAgICBmdW5jdGlvbiBlbmQoKSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShzdGFydGVkLCAibm90IHN0YXJ0ZWQiKTsKICAgICAgICByZXF1aXJlKGJsb2NrLnRpbWVzdGFtcCA+PSBlbmRBdCwgIm5vdCBlbmRlZCIpOwogICAgICAgIHJlcXVpcmUoIWVuZGVkLCAiZW5kZWQiKTsKCiAgICAgICAgZW5kZWQgPSB0cnVlOwogICAgICAgIGlmIChoaWdoZXN0QmlkZGVyICE9IGFkZHJlc3MoMCkpIHsKICAgICAgICAgICAgbmZ0LnNhZmVUcmFuc2ZlckZyb20oYWRkcmVzcyh0aGlzKSwgaGlnaGVzdEJpZGRlciwgbmZ0SWQpOwogICAgICAgICAgICBzZWxsZXIudHJhbnNmZXIoaGlnaGVzdEJpZCk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgbmZ0LnNhZmVUcmFuc2ZlckZyb20oYWRkcmVzcyh0aGlzKSwgc2VsbGVyLCBuZnRJZCk7CiAgICAgICAgfQoKICAgICAgICBlbWl0IEVuZChoaWdoZXN0QmlkZGVyLCBoaWdoZXN0QmlkKTsKICAgIH0KfQo=",
  },
]

const html = `<p>English auction for NFT.</p>
<h3>Auction</h3>
<ol>
<li>Seller of NFT deploys this contract.</li>
<li>Auction lasts for 7 days.</li>
<li>Participants can bid by depositing ETH greater than the current highest bidder.</li>
<li>All bidders can withdraw their bid if it is not the current highest bid.</li>
</ol>
<h3>After the auction</h3>
<ol>
<li>Highest bidder becomes the new owner of NFT.</li>
<li>The seller receives the highest bid of ETH.</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> tokenId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint256</span></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EnglishAuction</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Start</span>(<span class="hljs-params"></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Bid</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> sender, <span class="hljs-keyword">uint256</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> bidder, <span class="hljs-keyword">uint256</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">End</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> winner, <span class="hljs-keyword">uint256</span> amount</span>)</span>;

    IERC721 <span class="hljs-keyword">public</span> nft;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> nftId;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> <span class="hljs-keyword">public</span> seller;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> endAt;
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> started;
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> ended;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> highestBidder;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> highestBid;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> bids;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _nft, <span class="hljs-keyword">uint256</span> _nftId, <span class="hljs-keyword">uint256</span> _startingBid</span>) </span>{
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
        <span class="hljs-keyword">uint256</span> bal <span class="hljs-operator">=</span> bids[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
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
</code></pre>`

export default html
