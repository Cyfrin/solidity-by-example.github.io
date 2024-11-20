// metadata
export const version = "0.8.26"
export const title = "Variables"
export const description = "Local, state and global variables"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/variables-solidity-code-example"

export const keywords = ["variable", "variables", "local", "global", "state", "data"]

export const codes = [
  {
    fileName: "Variables.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IFZhcmlhYmxlcyB7CiAgICAvLyBTdGF0ZSB2YXJpYWJsZXMgYXJlIHN0b3JlZCBvbiB0aGUgYmxvY2tjaGFpbi4KICAgIHN0cmluZyBwdWJsaWMgdGV4dCA9ICJIZWxsbyI7CiAgICB1aW50MjU2IHB1YmxpYyBudW0gPSAxMjM7CgogICAgZnVuY3Rpb24gZG9Tb21ldGhpbmcoKSBwdWJsaWMgewogICAgICAgIC8vIExvY2FsIHZhcmlhYmxlcyBhcmUgbm90IHNhdmVkIHRvIHRoZSBibG9ja2NoYWluLgogICAgICAgIHVpbnQyNTYgaSA9IDQ1NjsKCiAgICAgICAgLy8gSGVyZSBhcmUgc29tZSBnbG9iYWwgdmFyaWFibGVzCiAgICAgICAgdWludDI1NiB0aW1lc3RhbXAgPSBibG9jay50aW1lc3RhbXA7IC8vIEN1cnJlbnQgYmxvY2sgdGltZXN0YW1wCiAgICAgICAgYWRkcmVzcyBzZW5kZXIgPSBtc2cuc2VuZGVyOyAvLyBhZGRyZXNzIG9mIHRoZSBjYWxsZXIKICAgIH0KfQo=",
  },
]

const html = `<p>There are 3 types of variables in Solidity</p>
<ul>
<li><strong>local</strong><ul>
<li>declared inside a function</li>
<li>not stored on the blockchain</li>
</ul>
</li>
<li><strong>state</strong><ul>
<li>declared outside a function</li>
<li>stored on the blockchain</li>
</ul>
</li>
<li><strong>global</strong> (provides information about the blockchain)</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Variables</span> </span>{
    <span class="hljs-comment">// State variables are stored on the blockchain.</span>
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> text <span class="hljs-operator">=</span> <span class="hljs-string">"Hello"</span>;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> num <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doSomething</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Local variables are not saved to the blockchain.</span>
        <span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;

        <span class="hljs-comment">// Here are some global variables</span>
        <span class="hljs-keyword">uint256</span> timestamp <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>; <span class="hljs-comment">// Current block timestamp</span>
        <span class="hljs-keyword">address</span> sender <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>; <span class="hljs-comment">// address of the caller</span>
    }
}
</code></pre>`

export default html
