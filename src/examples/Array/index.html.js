const html = `<p>Array can have a compile-time fixed size or a dynamic size.</p>
<p>Solidity creates a <code>getter</code> for <code>public</code> arrays.</p>
<p>Deleting an element creates a gap in the array. One trick to keep the array</p>
<p>compact is to move the last element into the place to delete.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.1;

contract Array {
    // Several ways to initialize an array
    uint[] public myArr;
    uint[] public myArr2 = [1,2,3];

    uint[10] public myFixedArr;

    function arrayFuncs() public returns (uint) {
        // Append 1 to the array
        myArr.push(1);
        return myArr[myArr.length - 1];
    }
}

contract CompactArray {
    address[] public addresses;

    function remove(uint index) public {
        // Move the last element into the place to delete
        addresses[index] = addresses[addresses.length - 1];

        // Remove the last element
        addresses.pop();
        // This has the same effect has deleting the last element.
        // addresses.length--;
    }

    function test() public {
        addresses.push(address(1));
        addresses.push(address(2));
        addresses.push(address(3));

        remove(1);

        assert(addresses.length == 2);
        assert(addresses[0] == address(1));
        assert(addresses[1] == address(3));
    }
}
</code></pre>
`

export default html
