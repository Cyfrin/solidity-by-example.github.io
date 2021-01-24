pragma solidity ^0.7;

/*
- minimal proxy contract (deploy)

- Why is it cheap to deploy contract?
- Why is constructor not called? deploys a contract that only calls delegatecall
- Why is the original contract not affected? uses delegatecall

- delegatecall
- minimal proxy contract (interaction)
- Why is it cheap to deploy contract? there is minimal code
- Why is the original contract not affected? uses delegatecall

- Why is constructor not called? deploys a simple contract that fowards all calls using delegatecall
    - vyper create_forwarder_to
    - pseudo code (notice constructor of master copy is not called)
- actual code

3d602d80600a3d3981f3363d3d373d3d3d363d73bebebebebebebebebebebebebebebebebebebebe5af43d82803e903d91602b57fd5bf3

    - bytecode
    - 2 parts (
        runtime code - delegate call
        creation code - return contract to delegate call
    )
    - creation code vs runtime code
- clone factory
  - mstore diagram
*/

contract PseudoMinimalProxy {
    address masterCopy;

    constructor(address _masterCopy) {
        // notice that constructor of master copy is not called
        masterCopy = _masterCopy;
    }

    function forward() external returns (bytes memory) {
        (bool success, bytes memory data) = masterCopy.delegatecall(msg.data);
        require(success);

        return data;
    }
}

contract MinimalProxy {
    function clone(address target) external returns (address result) {
        // convert address to 20 bytes
        bytes20 targetBytes = bytes20(target);

        // actual code //
        // 3d602d80600a3d3981f3363d3d373d3d3d363d73bebebebebebebebebebebebebebebebebebebebe5af43d82803e903d91602b57fd5bf3

        // creation code //
        // copy runtime code into memory and return it
        // 3d602d80600a3d3981f3

        // runtime code //
        // code to delegatecall to address
        // 363d3d373d3d3d363d73 address 5af43d82803e903d91602b57fd5bf3

        assembly {
            /*
            reads the 32 bytes of memory starting at pointer stored in 0x40

            In solidity, the 0x40 slot in memory is special: it contains the "free memory pointer"
            which points to the end of the currently allocated memory.
            */
            let clone := mload(0x40)
            // store 32 bytes to memory starting at "clone"
            mstore(clone, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)

            /*
              |              20 bytes                |
            0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000
                                                      ^
                                                      pointer
            */
            // store 32 bytes to memory starting at "clone" + 20 bytes
            // 0x14 = 20
            mstore(add(clone, 0x14), targetBytes)

            /*
              |               20 bytes               |                 20 bytes              |
            0x3d602d80600a3d3981f3363d3d373d3d3d363d73bebebebebebebebebebebebebebebebebebebebe
                                                                                              ^
                                                                                              pointer
            */
            // store 32 bytes to memory starting at "clone" + 40 bytes
            // 0x28 = 40
            mstore(add(clone, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)

            /*
              |               20 bytes               |                 20 bytes              |           15 bytes          |
            0x3d602d80600a3d3981f3363d3d373d3d3d363d73bebebebebebebebebebebebebebebebebebebebe5af43d82803e903d91602b57fd5bf3
            */
            // create new contract
            // send 0 Ether
            // code starts at pointer stored in "clone"
            // code size 0x37 (55 bytes)
            result := create(0, clone, 0x37)
        }
  }
}
