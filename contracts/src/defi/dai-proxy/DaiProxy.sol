// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

address constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
address constant PROXY_REGISTRY = 0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4;
address constant PROXY_ACTIONS = 0x82ecD135Dce65Fbc6DbdD0e4237E0AF93FFD5038;
address constant CDP_MANAGER = 0x5ef30b9986345249bc32d8928B7ee64DE9435E39;
address constant JUG = 0x19c0976f590D67707E62397C87829d896Dc0f1F1;
address constant JOIN_ETH_C = 0xF04a5cC80B1E94C69B48f5ee68a08CD2F09A7c3E;
address constant JOIN_DAI = 0x9759A6Ac90977b93B58547b4A71c78317f391A28;

bytes32 constant ETH_C =
    0x4554482d43000000000000000000000000000000000000000000000000000000;

contract DaiProxy {
    IERC20 private constant dai = IERC20(DAI);
    address public immutable proxy;
    uint256 public immutable cdpId;

    constructor() {
        proxy = IDssProxyRegistry(PROXY_REGISTRY).build();
        bytes32 res = IDssProxy(proxy).execute(
            PROXY_ACTIONS,
            abi.encodeCall(IDssProxyActions.open, (CDP_MANAGER, ETH_C, proxy))
        );
        cdpId = uint256(res);
    }

    receive() external payable {}

    function lockEth() external payable {
        IDssProxy(proxy).execute{value: msg.value}(
            PROXY_ACTIONS,
            abi.encodeCall(
                IDssProxyActions.lockETH, (CDP_MANAGER, JOIN_ETH_C, cdpId)
            )
        );
    }

    function borrow(uint256 daiAmount) external {
        IDssProxy(proxy).execute(
            PROXY_ACTIONS,
            abi.encodeCall(
                IDssProxyActions.draw,
                (CDP_MANAGER, JUG, JOIN_DAI, cdpId, daiAmount)
            )
        );
    }

    function repay(uint256 daiAmount) external {
        dai.approve(proxy, daiAmount);
        IDssProxy(proxy).execute(
            PROXY_ACTIONS,
            abi.encodeCall(
                IDssProxyActions.wipe, (CDP_MANAGER, JOIN_DAI, cdpId, daiAmount)
            )
        );
    }

    function repayAll() external {
        dai.approve(proxy, type(uint256).max);
        IDssProxy(proxy).execute(
            PROXY_ACTIONS,
            abi.encodeCall(
                IDssProxyActions.wipeAll, (CDP_MANAGER, JOIN_DAI, cdpId)
            )
        );
    }

    function unlockEth(uint256 ethAmount) external {
        IDssProxy(proxy).execute(
            PROXY_ACTIONS,
            abi.encodeCall(
                IDssProxyActions.freeETH,
                (CDP_MANAGER, JOIN_ETH_C, cdpId, ethAmount)
            )
        );
    }
}

interface IDssProxyRegistry {
    function build() external returns (address proxy);
}

interface IDssProxy {
    function execute(address target, bytes memory data)
        external
        payable
        returns (bytes32 res);
}

interface IDssProxyActions {
    function open(address cdpManager, bytes32 ilk, address usr)
        external
        returns (uint256 cdpId);
    function lockETH(address cdpManager, address ethJoin, uint256 cdpId)
        external
        payable;
    function draw(
        address cdpManager,
        address jug,
        address daiJoin,
        uint256 cdpId,
        uint256 daiAmount
    ) external;
    function wipe(
        address cdpManager,
        address daiJoin,
        uint256 cdpId,
        uint256 daiAmount
    ) external;
    function wipeAll(address cdpManager, address daiJoin, uint256 cdpId)
        external;
    function freeETH(
        address cdpManager,
        address ethJoin,
        uint256 cdpId,
        uint256 collateralAmount
    ) external;
}

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender)
        external
        view
        returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transfer(address dst, uint256 amount) external returns (bool);
    function transferFrom(address src, address dst, uint256 amount)
        external
        returns (bool);
}
