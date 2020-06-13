// metadata
export const version = "0.6.10"
export const title = "Data Locations - Storage, Memory and Calldata"
export const description = "Data locations - storage, memory and calldata"

const html = `<p>Variables are declared as either <code>storage</code>, <code>memory</code> or <code>calldata</code> to explicitly
specify the location of the data.</p>
<ul>
<li><code>storage</code> - variable is a state variable (store on blockchain)</li>
<li><code>memory</code> - variable is in memory and it exists while a function is being called</li>
<li><code>calldata</code> - special data location that contains function arguments, only available for <code>external</code> functions</li>
</ul>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

contract DataLocations {
    uint[] public arr;
    mapping(uint =&gt; address) map;
    struct MyStruct {
        uint foo;
    }
    mapping(uint =&gt; MyStruct) myStructs;

    function f() public {
        // call _f with state variables
        _f(arr, map, myStructs[1]);

        // get a struct from a mapping
        MyStruct storage myStruct = myStructs[1];
        // create a struct in memory
        MyStruct memory myMemStruct = MyStruct(0);
    }

    function _f(
        uint[] storage _arr,
        mapping(uint =&gt; address) storage _map,
        MyStruct storage _myStruct
    ) internal {
        // do something with storage variables
    }

    // You can return memory variables
    function g(uint[] memory _arr) public returns (uint[] memory) {
        // do something with memory array
    }

    function h(uint[] calldata _arr) external {
        // do something with calldata array
    }
}
</code></pre>
`

export default html
