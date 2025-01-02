// metadata
export const version = "0.8.26"
export const title = "Gas"
export const description = "Example of gas and gas limit in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/gas-and-gas-price-solidity-code-example"

export const keywords = ["gas"]

export const codes = [
  {
    fileName: "Gas.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEdhcyB7CiAgICB1aW50MjU2IHB1YmxpYyBpID0gMDsKCiAgICAvLyBVc2luZyB1cCBhbGwgb2YgdGhlIGdhcyB0aGF0IHlvdSBzZW5kIGNhdXNlcyB5b3VyIHRyYW5zYWN0aW9uIHRvIGZhaWwuCiAgICAvLyBTdGF0ZSBjaGFuZ2VzIGFyZSB1bmRvbmUuCiAgICAvLyBHYXMgc3BlbnQgaXMgbm90IHJlZnVuZGVkLgogICAgZnVuY3Rpb24gZm9yZXZlcigpIHB1YmxpYyB7CiAgICAgICAgLy8gSGVyZSB3ZSBydW4gYSBsb29wIHVudGlsIGFsbCBvZiB0aGUgZ2FzIGFyZSBzcGVudAogICAgICAgIC8vIGFuZCB0aGUgdHJhbnNhY3Rpb24gZmFpbHMKICAgICAgICB3aGlsZSAodHJ1ZSkgewogICAgICAgICAgICBpICs9IDE7CiAgICAgICAgfQogICAgfQp9Cg==",
  },
]

const html = `<h3>How much <code>ether</code> do you need to pay for a transaction?</h3>
<p>You pay <code>gas spent * gas price</code> amount of <code>ether</code>, where</p>
<ul>
<li><code>gas</code> is a unit of computation</li>
<li><code>gas spent</code> is the total amount of <code>gas</code> used in a transaction</li>
<li><code>gas price</code> is how much <code>ether</code> you are willing to pay per <code>gas</code></li>
</ul>
<p>Transactions with higher gas price have higher priority to be included in a block.</p>
<p>Unspent gas will be refunded.</p>
<h3>Gas Limit</h3>
<p>There are 2 upper bounds to the amount of gas you can spend</p>
<ul>
<li><code>gas limit</code> (max amount of gas you&#39;re willing to use for your transaction, set by you)</li>
<li><code>block gas limit</code> (max amount of gas allowed in a block, set by the network)</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Gas</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

    <span class="hljs-comment">// Using up all of the gas that you send causes your transaction to fail.</span>
    <span class="hljs-comment">// State changes are undone.</span>
    <span class="hljs-comment">// Gas spent is not refunded.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">forever</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Here we run a loop until all of the gas are spent</span>
        <span class="hljs-comment">// and the transaction fails</span>
        <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {
            i <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        }
    }
}
</code></pre>`

export default html
