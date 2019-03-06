pragma solidity ^0.5.3;

library MyLib {
    function incrementBy(uint i, uint val) public pure returns (uint) {
        return i + val;
    }

    // Array function to delete element at index and re-organize the array
    // so that their are no gaps between the elements.
    function deleteElement(string[] storage arr, uint index) internal {
        // Move the last element into the place to delete
        arr[index] = arr[arr.length - 1];

        // Remove the last element
        arr.pop();
    }
}

contract TestMyLib {
    using MyLib for uint;
    using MyLib for string[];

    string[] public array = ["foo", "bar"];

    function testIncrementBy() public pure returns (uint) {
        uint i = 10;

        return i.incrementBy(10);
    }

    function testDeleteElement() public {
        array.push("abc");
        array.deleteElement(1);
        // array should now be ["foo", "abc"]
    }
}
