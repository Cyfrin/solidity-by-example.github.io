const html = `<p>Contracts can be created by other contracts using the <code>new</code> keyword.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.1;

contract Car {
    address public owner;
    string public name;

    constructor(address _owner, string memory _name) public payable {
        owner = _owner;
        name = _name;
    }
}

contract CarFactory {
    Car public car = new Car(msg.sender, "Carol");

    Car[] public cars;

    function create(string memory name) public {
        Car c = new Car(msg.sender, name);
        cars.push(c);
    }

    function createAndSendEther(string memory name) public payable {
        // Send ether along with the creation
        Car c = (new Car).value(msg.value)(msg.sender, name);
        cars.push(c);
    }

    function getCar(uint index)
      public
      view
      returns (address owner, string memory name, uint balance)
    {
        Car c = cars[index];

        return (c.owner(), c.name(), address(c).balance);
    }
}
</code></pre>
`

export default html
