pragma solidity ^0.5.16;

// NOTE: use case (send ether to precomputed address, recover later)
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Create2.sol
contract TestContract {
    address public owner;
    uint public foo;

    constructor(address _owner, uint _foo) public payable {
        owner = _owner;
        foo = _foo;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract Factory {
    event Deployed(address addr, uint256 salt);

    function getBytecode(address _owner, uint _foo) public pure returns (bytes memory) {
        bytes memory bytecode = type(TestContract).creationCode;

        // TODO: learn difference between encodePacked and encode
        // TODO: learn how contract bytecode is structured
        return abi.encodePacked(bytecode, abi.encode(_owner, _foo));
    }

    function getAddress(bytes memory bytecode, uint _salt) public view returns (address) {
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
        // TODO: learn how casting works
        return address(uint160(uint256(hash)));
    }

    function deploy(bytes memory bytecode, uint _salt) public payable {
        address addr;
        // TODO: learn assembly, what's going on here?
        // https://solidity.readthedocs.io/en/v0.5.15/assembly.html#
        /*
        create2(v, p, n, s)
        create new contract with code mem[p…(p+n))
        at address keccak256(0xff . this . s . keccak256(mem[p…(p+n)))
        and send v wei
        and return the new address,
            where 0xff is a 1 byte value,
            this is the current contract’s address as a 20 byte value
            and s is a big-endian 256-bit value
        */
        assembly {
            addr := create2(
                callvalue, // wei sent with current call
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
