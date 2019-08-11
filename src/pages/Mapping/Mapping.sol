pragma solidity ^0.5.3;

contract Mapping {
    // Mapping from address to uint
    mapping(address => uint) public balances;
    // Nested mapping
    mapping(address => mapping(address => uint)) public allowance;

    function mint(uint amount) public {
        // Updating mapping values
        balances[msg.sender] += amount;
    }

    function burn() public {
        // Deleting mapping values
        delete balances[msg.sender];
    }

    function approve(address to, uint amount) public {
        // Accessing and setting nested map values
        allowance[msg.sender][to] = amount;
    }

    function transferFrom(address from, address to, uint amount) public {
        require(balances[from] >= amount, "Insufficient funds");
        require(allowance[from][to] >= amount, "Not allowed");

        balances[from] -= amount;
        balances[to] += amount;

        allowance[from][to] -= amount;
    }
}
