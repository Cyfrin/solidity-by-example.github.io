pragma solidity ^0.5.3;

contract Todos {
    struct Todo {
        string text;
        bool completed;
    }

    // An array of 'Todo' structs
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

    // Solidity automatically created a getter for' todos' so
    // you don't actually need this function.
    function getTodo(uint index)
        public
        view
        returns (string memory text, bool completed)
    {
        Todo storage todo = todos[index];
        return (todo.text, todo.completed);
    }
}
