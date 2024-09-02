// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {MerkleProof} from "./MerkleProof.sol";

interface IToken {
    function mint(address to, uint256 amount) external;
}

contract Airdrop {
    event Claim(address to, uint256 amount);

    IToken public immutable token;
    bytes32 public immutable root;
    mapping(bytes32 => bool) public claimed;

    constructor(address _token, bytes32 _root) {
        token = IToken(_token);
        root = _root;
    }

    function getLeafHash(address to, uint256 amount)
        public
        pure
        returns (bytes32)
    {
        return keccak256(abi.encode(to, amount));
    }

    function claim(bytes32[] memory proof, address to, uint256 amount)
        external
    {
        // NOTE: (to, amount) cannot have duplicates
        bytes32 leaf = getLeafHash(to, amount);

        require(!claimed[leaf], "airdrop already claimed");
        require(MerkleProof.verify(proof, root, leaf), "invalid merkle proof");
        claimed[leaf] = true;

        token.mint(to, amount);

        emit Claim(to, amount);
    }
}
