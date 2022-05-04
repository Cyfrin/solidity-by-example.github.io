// metadata
export const version = "0.8.13"
export const title = "Chainlink Price Oracle"
export const description = "Chainlink Price Oracle"

const html = `<h3 id="eth--usd-price-oracle">ETH / USD Price Oracle</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ChainlinkPriceOracle</span> </span>{
    AggregatorV3Interface <span class="hljs-keyword">internal</span> priceFeed;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// ETH / USD</span>
        priceFeed <span class="hljs-operator">=</span> AggregatorV3Interface(<span class="hljs-number">0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getLatestPrice</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">int</span></span>) </span>{
        (
            <span class="hljs-keyword">uint80</span> roundID,
            <span class="hljs-keyword">int</span> price,
            <span class="hljs-keyword">uint</span> startedAt,
            <span class="hljs-keyword">uint</span> timeStamp,
            <span class="hljs-keyword">uint80</span> answeredInRound
        ) <span class="hljs-operator">=</span> priceFeed.latestRoundData();
        <span class="hljs-comment">// for ETH / USD price is scaled up by 10 ** 8</span>
        <span class="hljs-keyword">return</span> price <span class="hljs-operator">/</span> <span class="hljs-number">1e8</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">AggregatorV3Interface</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">latestRoundData</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint80</span> roundId,
            <span class="hljs-keyword">int</span> answer,
            <span class="hljs-keyword">uint</span> startedAt,
            <span class="hljs-keyword">uint</span> updatedAt,
            <span class="hljs-keyword">uint80</span> answeredInRound
        </span>)</span>;
}
</code></pre>
`

export default html
