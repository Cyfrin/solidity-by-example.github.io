pragma solidity ^0.5.16;

contract Car {
    address public owner;
    string public model;

    constructor(address _owner, string memory _model) public payable {
        owner = _owner;
        model = _model;
    }
}

contract CarFactory {
    Car[] public cars;

    function create(address _owner, string memory _model) public {
        Car car = new Car(_owner, _model);
        cars.push(car);
    }

    function createAndSendEther(address _owner, string memory _model)
        public
        payable
    {
        Car car = (new Car).value(msg.value)(_owner, _model);
        cars.push(car);
    }

    function getCar(uint _index)
        public
        view
        returns (address owner, string memory model, uint balance)
    {
        Car car = cars[_index];

        return (car.owner(), car.model(), address(car).balance);
    }
}
