// metadata
export const version = "0.6.10"
export const title = "Enum"
export const description = "Example of enums in Solidity"

const html = `<p>Solidity support enumerables and they are useful to model choice and keep track of state.</p>
<p>Enums can be declared ouside of a contract.</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

contract Enum {
    // Enum representing shipping status
    enum Status {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

    // Default value is the first element listed in
    // definition of the type, in this case "Pending"
    Status public status;

    // Returns uint
    // Pending  - 0
    // Shipped  - 1
    // Accepted - 2
    // Rejected - 3
    // Canceled - 4
    function get() public view returns (Status) {
        return status;
    }

    // Update status by passing uint into input
    function set(Status _status) public {
        status = _status;
    }

    // You can update to a specific enum like this
    function cancel() public {
        status = Status.Canceled;
    }

    // delete resets the enum to it&#39;s first value, 0
    function reset() public {
        delete status;
    }
}
</code></pre>
<h3 id="declaring-and-importing-enum">Declaring and importing Enum</h3>
<p>File that the enum is declared in</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

enum Status {
    Pending,
    Shipped,
    Accepted,
    Rejected,
    Canceled
}</code></pre>
<p>File that imports the enum above</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

import "./EnumDeclaration.sol";

contract Enum {
    Status public status;
}</code></pre>
`

export default html
