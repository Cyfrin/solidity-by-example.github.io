pragma solidity ^0.5.11;

// NOTE: use case (send ether to precomputed address, recover later)

contract Wallet {
    address public owner;
    uint public foo;

    constructor(address _owner, uint _foo) public {
        owner = _owner;
        foo = _foo;
    }
}

contract Factory {
    event Deployed(address addr, uint256 salt);

    function getCreationBytecode(address _owner, uint _foo) public pure returns (bytes memory) {
        bytes memory bytecode = type(Wallet).creationCode;

        return abi.encodePacked(bytecode, abi.encode(_owner, _foo));
    }

    function getAddress(bytes memory bytecode, uint _salt) public view returns (address) {
        // TODO: how to pass params to constructor?
        // TODO: learn difference between creation code and run time code
        // NOTE: sha3(0xff ++ msg.sender ++ salt ++ sha3(init_code))[12:]
        bytes32 hash = keccak256(
            abi.encodePacked(
                byte(0xff),
                address(this),
                _salt,
                keccak256(bytecode)
            )
        );

        // NOTE: cast last 20 bytes of hash to address
        return address(uint160(uint256(hash)));
    }

    function deploy(bytes memory bytecode, uint _salt) public {
        address addr;
        // TODO: learn assembly, what's going on here?
        assembly {
            addr := create2(
                0, // 0 wei
                // the code itself starts at the second slot.
                // The first slot contains array length
                add(bytecode, 0x20),
                mload(bytecode), // size of code
                _salt // salt from function arguments
            )

            // TODO: learn iszero, extcodesize, what's going on here?
            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }

        emit Deployed(addr, _salt);
    }
}
