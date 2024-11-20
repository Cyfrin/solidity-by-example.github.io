// metadata
export const version = "0.8.26"
export const title = "Events Advanced"
export const description = "Advanced topics and concepts related to Solidity events"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/events-advanced-solidity-code-example"

export const keywords = [
  "events",
  "advanced",
  "event-driven",
  "monitoring",
  "filtering",
  "security",
]

export const codes = [
  {
    fileName: "EventsAdvanced.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNDsKCi8vIEV2ZW50LURyaXZlbiBBcmNoaXRlY3R1cmUKY29udHJhY3QgRXZlbnREcml2ZW5BcmNoaXRlY3R1cmUgewogICAgZXZlbnQgVHJhbnNmZXJJbml0aWF0ZWQoCiAgICAgICAgYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludDI1NiB2YWx1ZQogICAgKTsKICAgIGV2ZW50IFRyYW5zZmVyQ29uZmlybWVkKAogICAgICAgIGFkZHJlc3MgaW5kZXhlZCBmcm9tLCBhZGRyZXNzIGluZGV4ZWQgdG8sIHVpbnQyNTYgdmFsdWUKICAgICk7CgogICAgbWFwcGluZyhieXRlczMyID0+IGJvb2wpIHB1YmxpYyB0cmFuc2ZlckNvbmZpcm1hdGlvbnM7CgogICAgZnVuY3Rpb24gaW5pdGlhdGVUcmFuc2ZlcihhZGRyZXNzIHRvLCB1aW50MjU2IHZhbHVlKSBwdWJsaWMgewogICAgICAgIGVtaXQgVHJhbnNmZXJJbml0aWF0ZWQobXNnLnNlbmRlciwgdG8sIHZhbHVlKTsKICAgICAgICAvLyAuLi4gKGluaXRpYXRlIHRyYW5zZmVyIGxvZ2ljKQogICAgfQoKICAgIGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2ZlcihieXRlczMyIHRyYW5zZmVySWQpIHB1YmxpYyB7CiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgIXRyYW5zZmVyQ29uZmlybWF0aW9uc1t0cmFuc2ZlcklkXSwgIlRyYW5zZmVyIGFscmVhZHkgY29uZmlybWVkIgogICAgICAgICk7CiAgICAgICAgdHJhbnNmZXJDb25maXJtYXRpb25zW3RyYW5zZmVySWRdID0gdHJ1ZTsKICAgICAgICBlbWl0IFRyYW5zZmVyQ29uZmlybWVkKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIDApOwogICAgICAgIC8vIC4uLiAoY29uZmlybSB0cmFuc2ZlciBsb2dpYykKICAgIH0KfQoKLy8gRXZlbnQgU3Vic2NyaXB0aW9uIGFuZCBSZWFsLVRpbWUgVXBkYXRlcwppbnRlcmZhY2UgSUV2ZW50U3Vic2NyaWJlciB7CiAgICBmdW5jdGlvbiBoYW5kbGVUcmFuc2ZlckV2ZW50KGFkZHJlc3MgZnJvbSwgYWRkcmVzcyB0bywgdWludDI1NiB2YWx1ZSkKICAgICAgICBleHRlcm5hbDsKfQoKY29udHJhY3QgRXZlbnRTdWJzY3JpcHRpb24gewogICAgZXZlbnQgTG9nVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludDI1NiB2YWx1ZSk7CgogICAgbWFwcGluZyhhZGRyZXNzID0+IGJvb2wpIHB1YmxpYyBzdWJzY3JpYmVyczsKICAgIGFkZHJlc3NbXSBwdWJsaWMgc3Vic2NyaWJlckxpc3Q7CgogICAgZnVuY3Rpb24gc3Vic2NyaWJlKCkgcHVibGljIHsKICAgICAgICByZXF1aXJlKCFzdWJzY3JpYmVyc1ttc2cuc2VuZGVyXSwgIkFscmVhZHkgc3Vic2NyaWJlZCIpOwogICAgICAgIHN1YnNjcmliZXJzW21zZy5zZW5kZXJdID0gdHJ1ZTsKICAgICAgICBzdWJzY3JpYmVyTGlzdC5wdXNoKG1zZy5zZW5kZXIpOwogICAgfQoKICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkgcHVibGljIHsKICAgICAgICByZXF1aXJlKHN1YnNjcmliZXJzW21zZy5zZW5kZXJdLCAiTm90IHN1YnNjcmliZWQiKTsKICAgICAgICBzdWJzY3JpYmVyc1ttc2cuc2VuZGVyXSA9IGZhbHNlOwogICAgICAgIGZvciAodWludDI1NiBpID0gMDsgaSA8IHN1YnNjcmliZXJMaXN0Lmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyTGlzdFtpXSA9PSBtc2cuc2VuZGVyKSB7CiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyTGlzdFtpXSA9IHN1YnNjcmliZXJMaXN0W3N1YnNjcmliZXJMaXN0Lmxlbmd0aCAtIDFdOwogICAgICAgICAgICAgICAgc3Vic2NyaWJlckxpc3QucG9wKCk7CiAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHRvLCB1aW50MjU2IHZhbHVlKSBwdWJsaWMgewogICAgICAgIGVtaXQgTG9nVHJhbnNmZXIobXNnLnNlbmRlciwgdG8sIHZhbHVlKTsKICAgICAgICBmb3IgKHVpbnQyNTYgaSA9IDA7IGkgPCBzdWJzY3JpYmVyTGlzdC5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBJRXZlbnRTdWJzY3JpYmVyKHN1YnNjcmliZXJMaXN0W2ldKS5oYW5kbGVUcmFuc2ZlckV2ZW50KAogICAgICAgICAgICAgICAgbXNnLnNlbmRlciwgdG8sIHZhbHVlCiAgICAgICAgICAgICk7CiAgICAgICAgfQogICAgfQp9Cg==",
  },
]

const html = `<p>This page covers advanced topics and use cases related to events in Solidity, building upon the basics covered in the <a href="../events">Events</a> page.</p>
<p><code>Events</code> in Solidity are a powerful tool that enables various advanced functionalities and architectures. Some advanced use cases for events include:</p>
<ul>
<li>Event filtering and monitoring for real-time updates and analytics</li>
<li>Event log analysis and decoding for data extraction and processing</li>
<li>Event-driven architectures for decentralized applications (dApps)</li>
<li>Event subscriptions for real-time notifications and updates</li>
</ul>
<h2>Event-Driven Architecture</h2>
<p>The <code>EventDrivenArchitecture</code> contract demonstrates an event-driven architecture where events are used to coordinate and trigger different stages of a process, such as initiating and confirming transfers.</p>
<h2>Event Subscription and Real-Time Updates</h2>
<p>The <code>EventSubscription</code> contract showcases how to implement event subscriptions, allowing external contracts or clients to subscribe and receive real-time updates when events are emitted. It also demonstrates how to handle event subscriptions and manage the subscription lifecycle.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.14;</span>

<span class="hljs-comment">// Event-Driven Architecture</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EventDrivenArchitecture</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">TransferInitiated</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> value
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">TransferConfirmed</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> value
    </span>)</span>;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bytes32</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> transferConfirmations;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">initiateTransfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> value</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> TransferInitiated(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, to, value);
        <span class="hljs-comment">// ... (initiate transfer logic)</span>
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">confirmTransfer</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> transferId</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(
            <span class="hljs-operator">!</span>transferConfirmations[transferId], <span class="hljs-string">"Transfer already confirmed"</span>
        );
        transferConfirmations[transferId] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">emit</span> TransferConfirmed(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-number">0</span>);
        <span class="hljs-comment">// ... (confirm transfer logic)</span>
    }
}

<span class="hljs-comment">// Event Subscription and Real-Time Updates</span>
<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IEventSubscriber</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleTransferEvent</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> value</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EventSubscription</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">LogTransfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> value</span>)</span>;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> subscribers;
    <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">public</span> subscriberList;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">subscribe</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>subscribers[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"Already subscribed"</span>);
        subscribers[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        subscriberList.<span class="hljs-built_in">push</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unsubscribe</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(subscribers[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"Not subscribed"</span>);
        subscribers[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> subscriberList.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">if</span> (subscriberList[i] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>) {
                subscriberList[i] <span class="hljs-operator">=</span> subscriberList[subscriberList.<span class="hljs-built_in">length</span> <span class="hljs-operator">-</span> <span class="hljs-number">1</span>];
                subscriberList.<span class="hljs-built_in">pop</span>();
                <span class="hljs-keyword">break</span>;
            }
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> value</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> LogTransfer(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, to, value);
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> subscriberList.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            IEventSubscriber(subscriberList[i]).handleTransferEvent(
                <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, to, value
            );
        }
    }
}
</code></pre><h2>Best Practices and Recommendations</h2>
<ul>
<li>Index the right event parameters to enable efficient filtering and searching. Addresses should typically be indexed, while amounts generally should not.</li>
<li>Avoid redundant events by not emitting events that are already covered by underlying libraries or contracts.</li>
<li>Events cannot be used in <code>view</code> or <code>pure</code> functions, as they alter the state of the blockchain by storing logs.</li>
<li>Be mindful of the gas cost associated with emitting events, especially when indexing parameters, as it can impact the overall gas consumption of your contract.</li>
</ul>
`

export default html
