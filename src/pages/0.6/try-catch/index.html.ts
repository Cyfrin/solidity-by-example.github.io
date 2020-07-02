// metadata
export const version = "0.6.10"
export const title = "Try Catch"
export const description = "An example of try / catch in Solidity"

const html = `<p>Solidity 0.6 introduces <code>try / catch</code>.</p>
<p>It can only catch errors from external function calls and contract creation.</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

// External contract used for try / catch examples
contract Foo {
    address public owner;

    constructor (address _owner) public {
        require(_owner != address(0), "invalid address");
        assert(_owner != 0x0000000000000000000000000000000000000001);
        owner = _owner;
    }

    function myFunc(uint x) public pure returns (string memory) {
        require(x != 0, "require failed");
        return "my func was called";
    }
}

contract Bar {
    event Log(string message);
    event LogBytes(bytes data);

    Foo public foo;

    constructor() public {
        // This Foo contract is used for example of try catch with external call
        foo = new Foo(msg.sender);
    }

    // Example of try / catch with external call
    // tryCatchExternalCall(0) =&gt; Log("external call failed")
    // tryCatchExternalCall(1) =&gt; Log("my func was called")
    function tryCatchExternalCall(uint _i) public {
        try foo.myFunc(_i) returns (string memory result) {
            emit Log(result);
        } catch {
            emit Log("external call failed");
        }
    }

    // Example of try / catch with contract creation
    // tryCatchNewContract(0x0000000000000000000000000000000000000000) =&gt; Log("invalid address")
    // tryCatchNewContract(0x0000000000000000000000000000000000000001) =&gt; LogBytes("")
    // tryCatchNewContract(0x0000000000000000000000000000000000000002) =&gt; Log("Foo created")
    function tryCatchNewContract(address _owner) public {
        try new Foo(_owner) returns (Foo foo) {
            // you can use variable foo here
            emit Log("Foo created");
        } catch Error(string memory reason) {
            // catch failing revert() and require()
            emit Log(reason);
        } catch (bytes memory reason) {
            // catch failing assert()
            emit LogBytes(reason);
        }
    }
}</code></pre>
`

export default html
