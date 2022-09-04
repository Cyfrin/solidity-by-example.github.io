// metadata
export const version = "0.8.13"
export const title = "Front Running"
export const description =
  "An example of a Solidity contract vulnerable to front running"
export const codes = [
  {
    fileName: "FrontRunning.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCi8qCkFsaWNlIGNyZWF0ZXMgYSBndWVzc2luZyBnYW1lLgpZb3Ugd2luIDEwIGV0aGVyIGlmIHlvdSBjYW4gZmluZCB0aGUgY29ycmVjdCBzdHJpbmcgdGhhdCBoYXNoZXMgdG8gdGhlIHRhcmdldApoYXNoLiBMZXQncyBzZWUgaG93IHRoaXMgY29udHJhY3QgaXMgdnVsbmVyYWJsZSB0byBmcm9udCBydW5uaW5nLgoqLwoKLyoKMS4gQWxpY2UgZGVwbG95cyBGaW5kVGhpc0hhc2ggd2l0aCAxMCBFdGhlci4KMi4gQm9iIGZpbmRzIHRoZSBjb3JyZWN0IHN0cmluZyB0aGF0IHdpbGwgaGFzaCB0byB0aGUgdGFyZ2V0IGhhc2guICgiRXRoZXJldW0iKQozLiBCb2IgY2FsbHMgc29sdmUoIkV0aGVyZXVtIikgd2l0aCBnYXMgcHJpY2Ugc2V0IHRvIDE1IGd3ZWkuCjQuIEV2ZSBpcyB3YXRjaGluZyB0aGUgdHJhbnNhY3Rpb24gcG9vbCBmb3IgdGhlIGFuc3dlciB0byBiZSBzdWJtaXR0ZWQuCjUuIEV2ZSBzZWVzIEJvYidzIGFuc3dlciBhbmQgY2FsbHMgc29sdmUoIkV0aGVyZXVtIikgd2l0aCBhIGhpZ2hlciBnYXMgcHJpY2UKICAgdGhhbiBCb2IgKDEwMCBnd2VpKS4KNi4gRXZlJ3MgdHJhbnNhY3Rpb24gd2FzIG1pbmVkIGJlZm9yZSBCb2IncyB0cmFuc2FjdGlvbi4KICAgRXZlIHdvbiB0aGUgcmV3YXJkIG9mIDEwIGV0aGVyLgoKV2hhdCBoYXBwZW5lZD8KVHJhbnNhY3Rpb25zIHRha2Ugc29tZSB0aW1lIGJlZm9yZSB0aGV5IGFyZSBtaW5lZC4KVHJhbnNhY3Rpb25zIG5vdCB5ZXQgbWluZWQgYXJlIHB1dCBpbiB0aGUgdHJhbnNhY3Rpb24gcG9vbC4KVHJhbnNhY3Rpb25zIHdpdGggaGlnaGVyIGdhcyBwcmljZSBhcmUgdHlwaWNhbGx5IG1pbmVkIGZpcnN0LgpBbiBhdHRhY2tlciBjYW4gZ2V0IHRoZSBhbnN3ZXIgZnJvbSB0aGUgdHJhbnNhY3Rpb24gcG9vbCwgc2VuZCBhIHRyYW5zYWN0aW9uCndpdGggYSBoaWdoZXIgZ2FzIHByaWNlIHNvIHRoYXQgdGhlaXIgdHJhbnNhY3Rpb24gd2lsbCBiZSBpbmNsdWRlZCBpbiBhIGJsb2NrCmJlZm9yZSB0aGUgb3JpZ2luYWwuCiovCgpjb250cmFjdCBGaW5kVGhpc0hhc2ggewogICAgYnl0ZXMzMiBwdWJsaWMgY29uc3RhbnQgaGFzaCA9CiAgICAgICAgMHg1NjRjY2FmNzU5NGQ2NmIxZWFhZWEyNGZlMDFmMDU4NWJmNTJlZTcwODUyYWY0ZWFjMGNjNGIwNDcxMWNkMGUyOwoKICAgIGNvbnN0cnVjdG9yKCkgcGF5YWJsZSB7fQoKICAgIGZ1bmN0aW9uIHNvbHZlKHN0cmluZyBtZW1vcnkgc29sdXRpb24pIHB1YmxpYyB7CiAgICAgICAgcmVxdWlyZShoYXNoID09IGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKHNvbHV0aW9uKSksICJJbmNvcnJlY3QgYW5zd2VyIik7CgogICAgICAgIChib29sIHNlbnQsICkgPSBtc2cuc2VuZGVyLmNhbGx7dmFsdWU6IDEwIGV0aGVyfSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKICAgIH0KfQo=",
  },
]

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>Transactions take some time before they are mined. An attacker can watch the transaction pool
and send a transaction, have it included in a block before the original transaction.
This mechanism can be abused to re-order transactions to the attacker&#39;s advantage.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">/*
Alice creates a guessing game.
You win 10 ether if you can find the correct string that hashes to the target
hash. Let&#x27;s see how this contract is vulnerable to front running.
*/</span>

<span class="hljs-comment">/*
1. Alice deploys FindThisHash with 10 Ether.
2. Bob finds the correct string that will hash to the target hash. ("Ethereum")
3. Bob calls solve("Ethereum") with gas price set to 15 gwei.
4. Eve is watching the transaction pool for the answer to be submitted.
5. Eve sees Bob&#x27;s answer and calls solve("Ethereum") with a higher gas price
   than Bob (100 gwei).
6. Eve&#x27;s transaction was mined before Bob&#x27;s transaction.
   Eve won the reward of 10 ether.

What happened?
Transactions take some time before they are mined.
Transactions not yet mined are put in the transaction pool.
Transactions with higher gas price are typically mined first.
An attacker can get the answer from the transaction pool, send a transaction
with a higher gas price so that their transaction will be included in a block
before the original.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FindThisHash</span> </span>{
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> hash <span class="hljs-operator">=</span>
        <span class="hljs-number">0x564ccaf7594d66b1eaaea24fe01f0585bf52ee70852af4eac0cc4b04711cd0e2</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">solve</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> solution</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(hash <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(solution)), <span class="hljs-string">"Incorrect answer"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-number">10</span> <span class="hljs-literal">ether</span>}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>use commit-reveal scheme</li>
<li>use submarine send</li>
</ul>
`

export default html
