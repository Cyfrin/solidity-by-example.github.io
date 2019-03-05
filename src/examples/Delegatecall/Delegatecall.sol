pragma solidity ^0.5.3;

// Firts deploy this contract
contract A {
  uint public n;
  address public sender;
  uint public value;

  function setN(uint _n) public payable {
    n = _n;
    sender = msg.sender;
    value = msg.value;
  }
}

contract B {
  uint public n;
  address public sender;
  uint public value;

  function delegatecallSetN(address a, uint _n) public payable {
    // B's storage is set, A is not modified.
    (bool success, bytes memory returnData) = a.delegatecall(
      abi.encodeWithSignature("setN(uint256)", _n)
    );
  }
}
