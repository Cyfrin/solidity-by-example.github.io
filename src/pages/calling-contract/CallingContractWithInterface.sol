// File: Callee.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Callee {
    uint public x;
    uint public value;

    function setX(uint _x) public returns (uint) {
        x = _x;
        return x;
    }

    function setXandSendEther(uint _x) public payable returns (uint, uint) {
        x = _x;
        value = msg.value;

        return (x, value);
    }
}


// File: Caller.sol
//! When defining an interface, the I prefix refers to it as Interface.
interface ICallee {
  function setX(uint _x) external returns (uint);
  function setXandSendEther(uint _x) external payable returns (uint, uint);
}


contract Caller {
   ICallee calleContract;
   
   constructor(address _calleAddress) {
    calleContract = ICallee(_calleAddress);
   }
   
    function setXFromAddress(uint _x) public {
        calleContract.setX(_x);
    }

    function setXandSendEther(uint _x) public payable {
        (uint x, uint value) = calleContract.setXandSendEther{value: msg.value}(_x);
    }
    
    /**  
     * or 
     function setXandSendEther(uint _x, address _calleAddress) public payable {
        (uint x, uint value) = ICallee(_calleAddress).setXandSendEther{value: msg.value}(_x);
    }
    
    */
    
}
