// metadata
export const version = "0.6.10"
export const title = "Structs"
export const description = "An example of how to use structs in Solidity"

const html = `<p>You can define your own type by creating a <code>struct</code>.</p>
<p>They are useful for grouping togther related data.</p>
<p>Structs can be declared outside of a contract and imported in another contract.</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

contract Todos {
    struct Todo {
        string text;
        bool completed;
    }

    // An array of &#39;Todo&#39; structs
    Todo[] public todos;

    function create(string memory _text) public {
        // 3 ways to initialize a struct
        // - calling it like a function
        todos.push(Todo(_text, false));

        // key value mapping
        todos.push(Todo({
            text: _text,
            completed: false
        }));

        // initialize an emoty struct and then update it
        Todo memory todo;
        todo.text = _text;
        // todo.completed initialized to false

        todos.push(todo);
    }

    // Solidity automatically created a getter for&#39; todos&#39; so
    // you don&#39;t actually need this function.
    function get(uint _index) public view
        returns (string memory text, bool completed)
    {
        Todo storage todo = todos[_index];
        return (todo.text, todo.completed);
    }

    // update text
    function update(uint _index, string memory _text) public {
        Todo storage todo = todos[_index];
        todo.text = _text;
    }
    // update completed
    function toggleCompleted(uint _index) public {
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}
</code></pre>
<h3 id="declaring-and-importing-struct">Declaring and importing Struct</h3>
<p>File that the struct is declared in</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

struct Todo {
    string text;
    bool completed;
}</code></pre>
<p>File that imports the struct above</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
pragma solidity ^0.6.10;

import "./StructDeclaration.sol";

contract Todos {
    // An array of &#39;Todo&#39; structs
    Todo[] public todos;
}</code></pre>
`

export default html
