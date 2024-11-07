// metadata
export const version = "0.8.26"
export const title = "Events"
export const description = "Example of how to emit events in Solidity"
export const cyfrinLink = "https://www.cyfrin.io/glossary/events-code-example"

export const keywords = ["event", "events"]

export const codes = [
  {
    fileName: "Events.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEV2ZW50IHsKICAgIC8vIEV2ZW50IGRlY2xhcmF0aW9uCiAgICAvLyBVcCB0byAzIHBhcmFtZXRlcnMgY2FuIGJlIGluZGV4ZWQuCiAgICAvLyBJbmRleGVkIHBhcmFtZXRlcnMgaGVscHMgeW91IGZpbHRlciB0aGUgbG9ncyBieSB0aGUgaW5kZXhlZCBwYXJhbWV0ZXIKICAgIGV2ZW50IExvZyhhZGRyZXNzIGluZGV4ZWQgc2VuZGVyLCBzdHJpbmcgbWVzc2FnZSk7CiAgICBldmVudCBBbm90aGVyTG9nKCk7CgogICAgZnVuY3Rpb24gdGVzdCgpIHB1YmxpYyB7CiAgICAgICAgZW1pdCBMb2cobXNnLnNlbmRlciwgIkhlbGxvIFdvcmxkISIpOwogICAgICAgIGVtaXQgTG9nKG1zZy5zZW5kZXIsICJIZWxsbyBFVk0hIik7CiAgICAgICAgZW1pdCBBbm90aGVyTG9nKCk7CiAgICB9Cn0K",
  },
]

const html = `<p><code>Events</code> allow logging to the Ethereum blockchain. Some use cases for events are:</p>
<ul>
<li>Listening for events and updating user interface</li>
<li>A cheap form of storage</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Event</span> </span>{
    <span class="hljs-comment">// Event declaration</span>
    <span class="hljs-comment">// Up to 3 parameters can be indexed.</span>
    <span class="hljs-comment">// Indexed parameters helps you filter the logs by the indexed parameter</span>
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> sender, <span class="hljs-keyword">string</span> message</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">AnotherLog</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-string">"Hello World!"</span>);
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-string">"Hello EVM!"</span>);
        <span class="hljs-keyword">emit</span> AnotherLog();
    }
}
</code></pre>`

export default html
