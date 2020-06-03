pragma solidity ^0.5.16;

/*
Here is an example where the Zoo contract calls a contract the implements
the Animal interface.
*/
interface Animal {
    enum FoodType { MEAT, PLANT, ANY }

    struct Position {
        uint x;
        uint y;
    }

    event Talk(string message);

    // All functions must be external
    function move(uint x, uint y) external;
    function eat(FoodType foodType) external returns (bool);
    function talk(string calldata message) external;
}

contract Wolf is Animal {
    Position position;

    function talk(string calldata message) external {
        emit Talk("Woof!");
        emit Talk(message);
    }

    function move(uint x, uint y) external {
        position.x = x;
        position.y = y;
    }

    function eat(FoodType foodType) external returns (bool) {
        return foodType == FoodType.MEAT;
    }
}

contract Zoo {
    function feed(address _animal, Animal.FoodType foodType) public returns (bool) {
        Animal animal = Animal(_animal);

        animal.talk("I'm hungry");

        return animal.eat(foodType);
    }
}