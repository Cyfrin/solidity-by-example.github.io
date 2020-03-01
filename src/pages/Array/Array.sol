pragma solidity ^0.5.16;

contract Array {
    // Several ways to initialize an array
    uint[] public myArray;
    uint[] public myArray2 = [1,2,3];
    uint[10] public myFixedSizeArray;

    function get(uint i) public view returns (uint) {
      return myArray[i];
    }

    function push(uint i) public {
        myArray.push(i);
    }

    function pop() public {
        myArray.pop();
    }

    function getLength() public view returns (uint) {
        return myArray.length;
    }

    function remove(uint index) public {
        delete myArray[index];
    }
}

contract CompactArray {
    uint[] public myArray;

    function remove(uint index) public {
        // Move the last element into the place to delete
        myArray[index] = myArray[myArray.length - 1];
        // Remove the last element
        myArray.pop();
    }

    function test() public {
        myArray.push(1);
        myArray.push(2);
        myArray.push(3);
        myArray.push(4);
        // [1, 2, 3, 4]

        remove(1);
        // [1, 4, 3]

        assert(myArray.length == 3);
        assert(myArray[0] == 1);
        assert(myArray[1] == 4);
        assert(myArray[2] == 3);

        remove(2);
        // [1, 4]

        assert(myArray.length == 2);
        assert(myArray[0] == 1);
        assert(myArray[1] == 4);
    }
}
