const html = `
<p><code>Events</code> allow logging to the Ethereum blockchain. Some use cass for events are:</p>
<ul>
<li>Listening for events and updating user interface</li>
<li>A cheap form of storage</li>
</ul>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract Event {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters helps you filter the logs by the indexed parameter
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        emit Log(msg.sender, &quot;Hello World!&quot;);
        emit Log(msg.sender, &quot;Hello EVM!&quot;);
        emit AnotherLog();
    }
}</code></pre>
`

export default html
