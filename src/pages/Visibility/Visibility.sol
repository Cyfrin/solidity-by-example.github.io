pragma solidity ^0.5.11;

contract Base {
    event Log(string visibility);

    // External functions can only be called by other contract
    // or accounts.
    function externalFunc() external {
        emit Log("Called a external function");
    }

    // Public functions can be called both internally and externally.
    function publicFunc() public {
        emit Log("Called a public function");
    }

    // Private function can only be called internally by this contract
    // Other contracts inheritting from this contract cannot
    // call this function.
    function privateFunc(string memory message) private {
        emit Log(message);
    }

    function testPrivateFunc() public {
        privateFunc("Called a private function from Base contract");
    }

    // Internal function can only be called internally by this contract
    // or by other contracts that inherit from this contract.
    function internalFunc(string memory message) internal {
        emit Log(message);
    }

    function testInternalFunc() public {
        internalFunc("Called an internal function from Base contract");
    }
}

contract TestInternal is Base {
    // This function will not compile
    // function testPrivateFunc() public {
    //     privateFunc("Called private function from TestInternal contract");
    // }

    function testInternalFunc() public {
        internalFunc("Called an internal function from TestInternal contract");
    }
}
