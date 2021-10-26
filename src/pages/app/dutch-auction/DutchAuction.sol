// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint _nftId
    ) external;
}

contract DutchAuction {
    event Buy(address winner, uint amount);

    IERC721 public immutable nft;
    uint public immutable nftId;

    address payable public seller;
    uint public startingPrice;
    uint public startAt;
    uint public expiresAt;
    uint public priceDeductionRate;
    address public winner;

    constructor(
        uint _startingPrice,
        uint _priceDeductionRate,
        address _nft,
        uint _nftId
    ) {
        seller = payable(msg.sender);
        startingPrice = _startingPrice;
        startAt = block.timestamp;
        expiresAt = block.timestamp + 7 days;
        priceDeductionRate = _priceDeductionRate;

        nft = IERC721(_nft);
        nftId = _nftId;
    }

    function buy() external payable {
        require(block.timestamp < expiresAt, "auction expired");
        require(winner == address(0), "auction finished");

        uint timeElapsed = block.timestamp - startAt;
        uint deduction = priceDeductionRate * timeElapsed;
        uint price = startingPrice - deduction;

        require(msg.value >= price, "ETH < price");

        winner = msg.sender;
        nft.transferFrom(seller, msg.sender, nftId);
        seller.transfer(msg.value);

        emit Buy(msg.sender, msg.value);
    }
}
