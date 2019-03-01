const html = `<p>You can define your own type by creating a <code>struct</code>.</p>
<p>They are useful for grouping togther related data.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract Todos {
    struct Todo {
        string text;
        bool completed;
    }

    // An array of &#39;Todo&#39; structs
    Todo[] public todos;

    function create(string memory text) public {
        todos.push(Todo({
            text: text,
            completed: false
        }));
    }

    function toggleCompleted(uint index) public {
        Todo storage todo = todos[index];
        todo.completed = !todo.completed;
    }

    // Solidity automatically created a getter for&#39; todos&#39; so
    // you don&#39;t actually need this function.
    function getTodo(uint index)
        public
        view
        returns (string memory text, bool completed)
    {
        Todo storage todo = todos[index];
        return (todo.text, todo.completed);
    }
}
</code></pre>
`

export default html
