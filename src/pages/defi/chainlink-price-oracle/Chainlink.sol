// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract ChainlinkPriceOracle {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        // ETH / USD
        priceFeed =
            AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);
    }

    function getLatestPrice() public view returns (int256) {
        (
            uint80 roundID,
            int256 price,
            uint256 startedAt,
            uint256 timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        // for ETH / USD price is scaled up by 10 ** 8
        return price / 1e8;
    }
}

interface AggregatorV3Interface {
    function latestRoundData()
        external
        view
        returns (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        );
}
