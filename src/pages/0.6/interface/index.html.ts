// metadata
export const version = "0.6.10"
export const title = "Interface"
export const description = "An example of interface in Solidity"

const html = `<p>Interface define contraints so that any contract that implements this can communicate with another contract that require these contraints.</p>
<p>Interface</p>
<ul>
<li>cannot have any functions implemented</li>
<li>cannot inherit from other contracts, but they can inherit from other interfaces (0.6)</li>
<li>all declared functions must be external</li>
<li>cannot declare a constructor</li>
<li>cannot declare state variables</li>
</ul>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

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

    function talk(string calldata message) external override {
        emit Talk("Woof!");
        emit Talk(message);
    }

    function move(uint x, uint y) external override {
        position.x = x;
        position.y = y;
    }

    function eat(FoodType foodType) external override returns (bool) {
        return foodType == FoodType.MEAT;
    }
}

contract Zoo {
    function feed(address _animal, Animal.FoodType foodType) public returns (bool) {
        Animal animal = Animal(_animal);

        animal.talk("I&#39;m hungry");

        return animal.eat(foodType);
    }
}</code></pre>
`

export default html
