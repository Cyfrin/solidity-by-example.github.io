pragma solidity ^0.5.11;

// NOTE: use case (send ether to precomputed address, recover later)

contract Wallet {

}

contract Factory {
    event Deployed(address addr, uint256 salt);

    function getAddress(uint _salt) public view returns (address) {
        bytes memory code = type(Wallet).creationCode;

        // TODO: how to pass params to constructor?
        // TODO: learn difference between creation code and run time code
        // NOTE: sha3(0xff ++ msg.sender ++ salt ++ sha3(init_code))[12:]
        bytes32 hash = keccak256(
            abi.encodePacked(
                byte(0xff),
                address(this),
                _salt,
                keccak256(code)
            )
        );

        // NOTE: cast last 20 bytes of hash to address
        return address(uint160(uint256(hash)));
    }

    function deploy(uint _salt) public {
        // get wallet init_code
        bytes memory code = type(Wallet).creationCode;

        address addr;
        assembly {
            addr := create2(
                0, // 0 wei
                // the code itself starts at the second slot.
                // The first slot contains array length
                add(code, 0x20),
                mload(code), // size of code
                _salt // salt from function arguments
            )

            if iszero(extcodesize(addr)) {
                revert(0, 0)
            }
        }

        emit Deployed(addr, _salt);
    }
}
