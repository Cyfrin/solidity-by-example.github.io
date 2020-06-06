// metadata
export const version = "0.6.0"
export const title = "ERC20"
export const description = "Example of ERC20 token in Solidity"

const html = `<p>Any contract that follow the <a href="https://eips.ethereum.org/EIPS/eip-20" target="__blank">ERC20 standard</a> is a ERC20 token.</p>
<p>ERC20 tokens provide functionalities to</p>
<ul>
<li>transfer tokens</li>
<li>allow others to transfer tokens on behalf of the token holder</li>
</ul>
<p>Here is the interface for ERC20.</p>
<pre><code class="language-solidity"></code></pre>
<h2 id="create-your-own-erc20-token">Create your own ERC20 token</h2>
<p>Using <a href="https://github.com/OpenZeppelin/openzeppelin-contracts" target="__blank">Open Zeppelin</a> it&#39;s really easy to create your own ERC20 token.</p>
<p>Here is an example</p>
<pre><code class="language-solidity"></code></pre>
<h2 id="contract-to-swap-tokens">Contract to swap tokens</h2>
<p>Here is an example contract, <code>TokenSwap</code>, to trade one ERC20 token for another.</p>
<p>This contract will swap tokens by calling</p>
<pre><code class="language-solidity">transferFrom(address sender, address recipient, uint256 amount)
</code></pre>
<p>which will transfer <code>amount</code> of token from <code>sender</code> to <code>recipient</code>.</p>
<p>For <code>transferFrom</code> to succeed, <code>sender</code> must</p>
<ul>
<li>have more than <code>amount</code> tokens in their balance</li>
<li>allowed <code>TokenSwap</code> to withdraw <code>amount</code> tokens by calling <code>approve</code></li>
</ul>
<p>prior to <code>TokenSwap</code> calling <code>transferFrom</code></p>
<pre><code class="language-solidity"></code></pre>
`

export default html
