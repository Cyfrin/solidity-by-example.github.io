// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

interface IERC721 {
    function transfer(address, uint) external;

    function transferFrom(
        address,
        address,
        uint
    ) external;
}

contract EnglishAuction {
    event Bid(address indexed sender, uint amount);
    event Withdraw(address indexed bidder, uint amount);
    event End(address winner, uint amount);

    IERC721 public nft;
    uint public nftId;

    address payable public seller;
    uint public endAt;
    bool public ended;

    address public highestBidder;
    uint public highestBid;
    mapping(address => uint) public bids;

    constructor(
        address _nft,
        uint _nftId,
        uint _startingBid
    ) {
        nft = IERC721(_nft);
        nftId = _nftId;

        nft.transferFrom(msg.sender, address(this), _nftId);

        seller = payable(msg.sender);
        highestBid = _startingBid;
        endAt = block.timestamp + 7 days;
    }

    function bid() external payable {
        require(block.timestamp < endAt, "ended");
        require(msg.value > highestBid, "value < highest");

        if (highestBidder != address(0)) {
            bids[highestBidder] += highestBid;
        }

        highestBidder = msg.sender;
        highestBid = msg.value;

        emit Bid(msg.sender, msg.value);
    }

    function withdraw() external {
        uint bal = bids[msg.sender];
        bids[msg.sender] = 0;
        payable(msg.sender).transfer(bal);

        emit Withdraw(msg.sender, bal);
    }

    function end() external {
        require(block.timestamp >= endAt, "not ended");
        require(!ended, "ended");

        ended = true;
        if (highestBidder != address(0)) {
            nft.transfer(highestBidder, nftId);
            seller.transfer(highestBid);
        } else {
            nft.transfer(seller, nftId);
        }

        emit End(highestBidder, highestBid);
    }
}
