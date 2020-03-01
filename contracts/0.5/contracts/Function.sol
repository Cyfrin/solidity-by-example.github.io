pragma solidity ^0.5.16;

contract Function {
    // cannot use map for inputs
    // function mapInput(mapping(uint => uint) memory map) public {
    // }

    // can use multi dimensional fixed size array for input
    function multiDimFixedSizeArrayInput(uint[9][9] memory _arr) public {
    }

    // cannot use multi dimensional dynamic size array as input
    // function multiDimDynamicSizeArrayInput(uint[][] memory _arr) public {
    // }

    // can use array for input
    function arrayInput(uint[] memory _arr) public {
    }

    mapping(uint => uint) map;
    uint[] arr;
    uint[9][9] arr2DFixed;
    uint[][] arr2D;

    // cannot return map for outputs
    // function mapOutput() public returns (mapping(uint => uint) memory) {
    //     return map;
    // }

    // can use multi dimensional fixed size array for output
    function multiDimFixedSizeArrayOutput() public view returns (uint[9][9] memory) {
        return arr2DFixed;
    }

    // cannot use multi dimensional dynamic size array as output
    // function multiDimDynamicSizeArrayOutput() public returns (uint[][] memory) {
    //     return arr2D;
    // }

    // can use array for output
    function arrayOutput() public view returns (uint[] memory) {
        return arr;
    }

    // Functions can return multiple values.
    function returnMultipleVals() public pure returns (uint, bool, uint) {
        return (1, true, 2);
    }

    // Return values can be named. This is useful when a contract
    // interacts with web3.js where you can access the returned
    // values by name instead of the returned order.
    function named() public pure returns (uint x, bool b, uint y) {
        return (1, true, 2);
    }

    // Return values can be assigned to their name.
    // In this case the return statement can be omitted;
    function assigned() public pure returns (uint x, bool b, uint y) {
        x = 1;
        b = true;
        y = 2;
    }

    // Use destructing assignment when calling another
    // function that returns multiple values.
    function destructingAssigments() public pure returns (uint, bool, uint, uint, uint) {
        (uint i, bool b, uint j) =  returnMultipleVals();

        // Values can be left out.
        (uint x, , uint y) = (4, 5, 6);

        return (i, b, j, x, y);
    }
}
