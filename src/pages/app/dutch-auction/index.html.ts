// metadata
export const version = "0.8.13"
export const title = "Dutch Auction"
export const description = "An example of Dutch auction in Solidity"
export const codes = [
  {
    fileName: "DutchAuction.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmludGVyZmFjZSBJRVJDNzIxIHsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIF9mcm9tLAogICAgICAgIGFkZHJlc3MgX3RvLAogICAgICAgIHVpbnQgX25mdElkCiAgICApIGV4dGVybmFsOwp9Cgpjb250cmFjdCBEdXRjaEF1Y3Rpb24gewogICAgdWludCBwcml2YXRlIGNvbnN0YW50IERVUkFUSU9OID0gNyBkYXlzOwoKICAgIElFUkM3MjEgcHVibGljIGltbXV0YWJsZSBuZnQ7CiAgICB1aW50IHB1YmxpYyBpbW11dGFibGUgbmZ0SWQ7CgogICAgYWRkcmVzcyBwYXlhYmxlIHB1YmxpYyBpbW11dGFibGUgc2VsbGVyOwogICAgdWludCBwdWJsaWMgaW1tdXRhYmxlIHN0YXJ0aW5nUHJpY2U7CiAgICB1aW50IHB1YmxpYyBpbW11dGFibGUgc3RhcnRBdDsKICAgIHVpbnQgcHVibGljIGltbXV0YWJsZSBleHBpcmVzQXQ7CiAgICB1aW50IHB1YmxpYyBpbW11dGFibGUgZGlzY291bnRSYXRlOwoKICAgIGNvbnN0cnVjdG9yKAogICAgICAgIHVpbnQgX3N0YXJ0aW5nUHJpY2UsCiAgICAgICAgdWludCBfZGlzY291bnRSYXRlLAogICAgICAgIGFkZHJlc3MgX25mdCwKICAgICAgICB1aW50IF9uZnRJZAogICAgKSB7CiAgICAgICAgc2VsbGVyID0gcGF5YWJsZShtc2cuc2VuZGVyKTsKICAgICAgICBzdGFydGluZ1ByaWNlID0gX3N0YXJ0aW5nUHJpY2U7CiAgICAgICAgc3RhcnRBdCA9IGJsb2NrLnRpbWVzdGFtcDsKICAgICAgICBleHBpcmVzQXQgPSBibG9jay50aW1lc3RhbXAgKyBEVVJBVElPTjsKICAgICAgICBkaXNjb3VudFJhdGUgPSBfZGlzY291bnRSYXRlOwoKICAgICAgICByZXF1aXJlKF9zdGFydGluZ1ByaWNlID49IF9kaXNjb3VudFJhdGUgKiBEVVJBVElPTiwgInN0YXJ0aW5nIHByaWNlIDwgbWluIik7CgogICAgICAgIG5mdCA9IElFUkM3MjEoX25mdCk7CiAgICAgICAgbmZ0SWQgPSBfbmZ0SWQ7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0UHJpY2UoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50KSB7CiAgICAgICAgdWludCB0aW1lRWxhcHNlZCA9IGJsb2NrLnRpbWVzdGFtcCAtIHN0YXJ0QXQ7CiAgICAgICAgdWludCBkaXNjb3VudCA9IGRpc2NvdW50UmF0ZSAqIHRpbWVFbGFwc2VkOwogICAgICAgIHJldHVybiBzdGFydGluZ1ByaWNlIC0gZGlzY291bnQ7CiAgICB9CgogICAgZnVuY3Rpb24gYnV5KCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgcmVxdWlyZShibG9jay50aW1lc3RhbXAgPCBleHBpcmVzQXQsICJhdWN0aW9uIGV4cGlyZWQiKTsKCiAgICAgICAgdWludCBwcmljZSA9IGdldFByaWNlKCk7CiAgICAgICAgcmVxdWlyZShtc2cudmFsdWUgPj0gcHJpY2UsICJFVEggPCBwcmljZSIpOwoKICAgICAgICBuZnQudHJhbnNmZXJGcm9tKHNlbGxlciwgbXNnLnNlbmRlciwgbmZ0SWQpOwogICAgICAgIHVpbnQgcmVmdW5kID0gbXNnLnZhbHVlIC0gcHJpY2U7CiAgICAgICAgaWYgKHJlZnVuZCA+IDApIHsKICAgICAgICAgICAgcGF5YWJsZShtc2cuc2VuZGVyKS50cmFuc2ZlcihyZWZ1bmQpOwogICAgICAgIH0KICAgICAgICBzZWxmZGVzdHJ1Y3Qoc2VsbGVyKTsKICAgIH0KfQo=",
  },
]

const html = `<p>Dutch auction for NFT.</p>
<h3 id="auction">Auction</h3>
<ol>
<li>Seller of NFT deploys this contract setting a starting price for the NFT.</li>
<li>Auction lasts for 7 days.</li>
<li>Price of NFT decreases over time.</li>
<li>Participants can buy by depositing ETH greater than the current price computed by the smart contract.</li>
<li>Auction ends when a buyer buys the NFT.</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _from,
        <span class="hljs-keyword">address</span> _to,
        <span class="hljs-keyword">uint</span> _nftId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">DutchAuction</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DURATION <span class="hljs-operator">=</span> <span class="hljs-number">7</span> <span class="hljs-literal">days</span>;

    IERC721 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> nft;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> nftId;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> seller;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> startingPrice;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> startAt;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> expiresAt;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> discountRate;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> _startingPrice,
        <span class="hljs-keyword">uint</span> _discountRate,
        <span class="hljs-keyword">address</span> _nft,
        <span class="hljs-keyword">uint</span> _nftId
    </span>) </span>{
        seller <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
        startingPrice <span class="hljs-operator">=</span> _startingPrice;
        startAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;
        expiresAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> DURATION;
        discountRate <span class="hljs-operator">=</span> _discountRate;

        <span class="hljs-built_in">require</span>(_startingPrice <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> _discountRate <span class="hljs-operator">*</span> DURATION, <span class="hljs-string">"starting price &lt; min"</span>);

        nft <span class="hljs-operator">=</span> IERC721(_nft);
        nftId <span class="hljs-operator">=</span> _nftId;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPrice</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">uint</span> timeElapsed <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">-</span> startAt;
        <span class="hljs-keyword">uint</span> discount <span class="hljs-operator">=</span> discountRate <span class="hljs-operator">*</span> timeElapsed;
        <span class="hljs-keyword">return</span> startingPrice <span class="hljs-operator">-</span> discount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">buy</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&lt;</span> expiresAt, <span class="hljs-string">"auction expired"</span>);

        <span class="hljs-keyword">uint</span> price <span class="hljs-operator">=</span> getPrice();
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> price, <span class="hljs-string">"ETH &lt; price"</span>);

        nft.transferFrom(seller, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, nftId);
        <span class="hljs-keyword">uint</span> refund <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">-</span> price;
        <span class="hljs-keyword">if</span> (refund <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>).<span class="hljs-built_in">transfer</span>(refund);
        }
        <span class="hljs-built_in">selfdestruct</span>(seller);
    }
}
</code></pre>
`

export default html
