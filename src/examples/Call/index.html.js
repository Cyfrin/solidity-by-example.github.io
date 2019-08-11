const html = `<p><code>call</code> is a low level function to interact with other contracts.</p>
<p>This is not the recommend way, but this might be the only way if your contract</p>
<p>does not have the ABI for the other contract.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract A {
    event Received(address caller, uint amount, string message);

    function () external payable {
        emit Received(msg.sender, msg.value, "Called fallback");
    }

    function callMe(string memory message) public payable {
        emit Received(msg.sender, msg.value, message);
    }
}

contract B {
    event Response(bool success, bytes returnedData);

    // Let&#39;s imagine that contract B does not have the source code for
    // contract A, but we do know the address of A and the function to call.
    function callA(address a) public payable {
        // You can send ether and specify a custom gas amount
         (bool success, bytes memory returnData) = a.call
            .value(address(this).balance)
            .gas(5000)(
                abi.encodeWithSignature("callMe(string)", "Call me back")
            );

         emit Response(success, returnData);
    }

    // Calling a function that does not exist triggers the fallback function.
    function callDoesNotExist(address a) public payable {
         (bool success, bytes memory returnData) = a.call(
                abi.encodeWithSignature("doesNotExist()")
            );

         emit Response(success, returnData);
    }
}
</code></pre>
`

export default html
