// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/*
docker run -it --rm -v $PWD:/code trailofbits/eth-security-toolbox
echidna EchidnaTestTimeAndCaller.sol --contract EchidnaTestTimeAndCaller
*/
contract EchidnaTestTimeAndCaller {
    bool private pass = true;
    uint256 private createdAt = block.timestamp;

    /*
    test will fail if Echidna can call setFail()
    test will pass otherwise
    */
    function echidna_test_pass() public view returns (bool) {
        return pass;
    }

    function setFail() external {
        /*
        Echidna can call this function if delay <= max block delay
        Otherwise Echidna will not be able to call this function.
        Max block delay can be extended by specifying it in a configuration file.
        */
        uint256 delay = 7 days;
        require(block.timestamp >= createdAt + delay);
        pass = false;
    }

    // Default senders
    // Change the addresses to see the test fail
    address[3] private senders =
        [address(0x10000), address(0x20000), address(0x30000)];

    address private sender = msg.sender;

    // Pass _sender as input and require msg.sender == _sender
    // to see _sender for counter example
    function setSender(address _sender) external {
        require(_sender == msg.sender);
        sender = msg.sender;
    }

    // Check default senders. Sender should be one of the 3 default accounts.
    function echidna_test_sender() public view returns (bool) {
        for (uint256 i; i < 3; i++) {
            if (sender == senders[i]) {
                return true;
            }
        }
        return false;
    }
}
