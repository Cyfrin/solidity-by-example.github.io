/*
pragma specifies what versions of Solidity this file can work on.
This file will not compile with a compiler earlier than version 0.5.3
and it will also not work on a compiler starting from version 0.6.0
*/
pragma solidity ^0.5.3;

contract HelloWorld {
    function hello() public returns (string memory) {
        return "Hello World!";
    }
}
