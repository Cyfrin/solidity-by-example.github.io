pragma solidity ^0.5.11;

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

    // Let's imagine that contract B does not have the source code for
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
