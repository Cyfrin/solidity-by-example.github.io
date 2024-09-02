// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import {Test, console2} from "forge-std/Test.sol";
import "../../../src/defi/dai-proxy/DaiProxy.sol";

address constant VAT = 0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B;

uint256 constant WAD = 1e18;
uint256 constant RAY = 1e27;
uint256 constant RAD = 1e45;

uint256 constant ETH_AMOUNT = 100 * 1e18;
uint256 constant DAI_AMOUNT = 10000 * 1e18;

contract DaiProxyTest is Test {
    IERC20 private constant dai = IERC20(DAI);
    ICdpManager private constant cdpManager = ICdpManager(CDP_MANAGER);
    IVat private constant vat = IVat(VAT);
    DaiProxy private proxy;

    function setUp() public {
        proxy = new DaiProxy();

        // Check min borrow
        IVat.Ilk memory ilk = vat.ilks(ETH_C);
        assertGe(DAI_AMOUNT * RAY, ilk.dust, "DAI borrow amount < dust");

        // Interest rate accumulator
        console2.log("ilk.rate", ilk.rate);
    }

    function print(address urnAddr) private {
        IVat.Urn memory urn = vat.urns(ETH_C, urnAddr);
        console2.log("--------------------");
        console2.log("vault collateral [wad]", urn.ink);
        console2.log("vault debt       [wad]", urn.art);
        console2.log("DAI in proxy     [wad]", dai.balanceOf(address(proxy)));
        console2.log("ETH in proxy     [wad]", address(proxy).balance);
    }

    function test_proxy() public {
        uint256 cdpId = proxy.cdpId();
        address urnAddr = cdpManager.urns(cdpId);

        console2.log("Before lock ETH");
        print(urnAddr);

        proxy.lockEth{value: ETH_AMOUNT}();
        console2.log("");
        console2.log("After lock ETH");
        print(urnAddr);

        proxy.borrow(DAI_AMOUNT);
        console2.log("");
        console2.log("After borrow DAI");
        print(urnAddr);

        proxy.repay(DAI_AMOUNT / 2);
        console2.log("");
        console2.log("After partial repay DAI");
        print(urnAddr);

        proxy.repayAll();
        console2.log("");
        console2.log("After repay all DAI");
        print(urnAddr);

        proxy.unlockEth(ETH_AMOUNT);
        console2.log("");
        console2.log("After unlock ETH");
        print(urnAddr);
    }
}

interface IVat {
    // Collateral type
    struct Ilk {
        uint256 Art; // Total normalized debt      [wad]
        uint256 rate; // Accumulated rates         [ray]
        uint256 spot; // Price with safety margin  [ray]
        uint256 line; // Debt ceiling              [rad]
        uint256 dust; // Urn debt floor            [rad]
    }

    // Vault
    struct Urn {
        uint256 ink; // Locked collateral  [wad]
        uint256 art; // Normalised debt    [wad]
    }

    function ilks(bytes32 ilk) external view returns (Ilk memory);
    function urns(bytes32 ilk, address user)
        external
        view
        returns (Urn memory);
}

interface ICdpManager {
    function urns(uint256 cdpId) external view returns (address urn);
}
