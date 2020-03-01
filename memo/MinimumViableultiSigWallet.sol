
pragma solidity ^0.5.11;
// TODO not needed for 0.6?
pragma experimental ABIEncoderV2;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/cryptography/ECDSA.sol";

contract MinimumViableMultiSigWallet {
    using ECDSA for bytes32;
    // executeTransaction

    address[] public owners;
    mapping(bytes32 => bool) isExecuted;

    // NOTE: N / N multisig wallet
    // constructor(address[] memory _owners) public {
    //     owners = _owners;
    // }

    function () external payable {}

    /*
    NOTE two transactions with identical values of (to, value, data) are not distinguished.
    */
    function getTransactionHash(
        address _to,
        uint _value,
        bytes memory _data
    )
        public
        view
        returns (bytes32)
    {
        // TODO: learn why bytes 0x19
        // TODO: include contract address?
        return keccak256(abi.encodePacked(
            byte(0x19),
            owners,
            _to,
            _value,
            _data
        ));
    }

    // TODO example
    function executeTransaction(
        address _to,
        uint _value,
        bytes memory _data,
        bytes[] memory _signatures
    )
        public
    {
        bytes32 transactionHash = getTransactionHash(_to, _value, _data);

        // NOTE: this guards against re-entrancy
        require(!isExecuted[transactionHash], "Transaction has already been executed");

        for (uint i = 0; i < owners.length; i++) {
            require(
                owners[i] == transactionHash.recover(_signatures[i]),
                "Invalid signature"
            );
        }

        isExecuted[transactionHash] = true;

        execute(_to, _value, _data);
    }

    // TODO: what does this comment mean?
    // call has been separated into its own function in order to take advantage
    // of the Solidity's code generator to produce a loop that copies tx.data into memory.

    function execute(address _to, uint _value, bytes memory _data) internal {
        bool success;

        // TODO: learn assembly
        /*
        call(g, a, v, in, insize, out, outsize)
        g - gas to forward
        a - address to be called
        v - amount of Ether to transfer (wei)
        in - memory position of insize bytes where call data is stored
        insize - size of bytes of calldata
        out - where return data will be stored
        outsize - size of return data

        call contract at address a with
        input mem[in…(in+insize))
        providing g gas and v wei
        and output area mem[out…(out+outsize))
        returning 0 on error (eg. out of gas) and 1 on success

        https://ethereum.stackexchange.com/questions/6354/how-do-i-construct-a-call-to-another-contract-using-inline-assembly
        */

        /*
        add(_data, 0x20)

        The first 32 bytes of the dynamically-sized byte array bytes contain the length of the bytes instance.
        So when we say add(data, 32), what we do is adding 32 to the pointer that points
        toward the memory address of our data variable. This essentially means: skip the first 32 bytes.

        // TODO add example
        */

        /*
        mload(_data)

        mload(0x40)  Allocate memory for output (0x40 is where "free memory" pointer is stored by convention)
        mload(_data) loads the length (first 32 bytes)

        https://ethereum.stackexchange.com/questions/9603/understanding-mload-assembly-function

        TODO: mload example
        */

        // TODO: sub(gas, 34710)?
        // TODO: why not use addr.call?
        assembly {
            success := call(gas, _to, _value, add(_data, 0x20), mload(_data), mload(0x40), 0)
        }

        require(success, "Transaction failed");
    }

    function test() public returns (uint) {
        uint i;

        assembly {
            i := add(1, 2)
        }

        return i;
    }
}
