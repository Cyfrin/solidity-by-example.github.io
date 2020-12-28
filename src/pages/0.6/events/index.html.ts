// metadata
export const version = "0.6.10"
export const title = "Events"
export const description = "Example of how to emit events in Solidity"

const html = `<p><code>Events</code> allow logging to the Ethereum blockchain. Some use cases for events are:</p>
<ul>
<li>Listening for events and updating user interface</li>
<li>A cheap form of storage</li>
</ul>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

contract Event {
    // Event declaration
    // Up to 3 parameters can be indexed.
    // Indexed parameters helps you filter the logs by the indexed parameter
    event Log(address indexed sender, string message);
    event AnotherLog();

    function test() public {
        emit Log(msg.sender, "Hello World!");
        emit Log(msg.sender, "Hello EVM!");
        emit AnotherLog();
    }
}
</code></pre>
`

export default html
