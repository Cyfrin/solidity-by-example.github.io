pragma solidity ^0.5.3;

// Firts deploy this contract
contract B {
  uint public n;
  address public sender;
  uint public value;

  function setN(uint _n) public payable {
    n = _n;
    sender = msg.sender;
    value = msg.value;
  }
}

contract A {
  uint public n;
  address public sender;
  uint public value;

  function delegatecallSetN(address b, uint _n) public payable {
    // A's storage is set, B is not modified.
    (bool success, bytes memory returnData) = b.delegatecall(
      abi.encodeWithSignature("setN(uint256)", _n)
    );
  }
}
