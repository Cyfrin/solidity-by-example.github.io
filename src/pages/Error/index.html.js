const html = `<p>You can throw an error by calling <code>assert</code>, <code>require</code> or <code>revert</code>.</p>
<p>An error will undo all changes made to the state during a transaction.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.11;

contract Account {
    uint public balance;
    uint public constant MAX_UINT = 2 ** 256 - 1;

    function deposit(uint _amount) public {
        uint oldBalance = balance;
        uint newBalance = balance + _amount;

        // Require should be used to validate conditions such as:
        // - inputs
        // - conditions before execution
        // - return values from calls to other functions
        // balance + _amount does not overflow if balance + _amount &gt;= balance
        require(newBalance &gt;= oldBalance, "Overflow");

        balance = newBalance;

        // Assert should only be used to test for internal errors,
        // and to check invariants.
        assert(balance &gt;= oldBalance);
    }

    function withdraw(uint _amount) public {
        uint oldBalance = balance;

        // balance - _amount does not underflow if balance &gt;= _amount
        require(balance &gt;= _amount, "Underflow");

        // Revert can be used to throw an error.
        if (balance &lt; _amount) {
            revert("Underflow");
        }

        balance -= _amount;

        assert(balance &lt;= oldBalance);
    }
}
</code></pre>
`

export default html
