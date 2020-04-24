const html = `<p>An error will undo all changes made to the state during a transaction.</p>
<p>You can throw an error by calling <code>require</code>, <code>revert</code> or <code>assert</code>.</p>
<ul>
<li><code>require</code> is used to validate inputs and conditions before execution.</li>
<li><code>revert</code> is similar to <code>require</code>. See the code below for details.</li>
<li><code>assert</code> is used to check for code that should never be false. Failing
assertion probably means that there is a bug.</li>
</ul>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract Error {
    function testRequire(uint _i) public {
        // Require should be used to validate conditions such as:
        // - inputs
        // - conditions before execution
        // - return values from calls to other functions
        require(_i &gt; 10, "Input must be greater than 10");
    }

    function testRevert(uint _i) public {
        // Revert is useful when the condition to check is complex.
        // This code does the exact same thing as the example above
        if (_i &lt;= 10) {
            revert("Input must be greater than 10");
        }
    }

    uint public num;

    function testAssert() public {
        // Assert should only be used to test for internal errors,
        // and to check invariants.

        // Here we assert that num is always equal to 0
        // since it is impossible to update the value of num
        assert(num == 0);
    }
}
</code></pre>
<p>Here is another example</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract Account {
    uint public balance;
    uint public constant MAX_UINT = 2 ** 256 - 1;

    function deposit(uint _amount) public {
        uint oldBalance = balance;
        uint newBalance = balance + _amount;

        // balance + _amount does not overflow if balance + _amount &gt;= balance
        require(newBalance &gt;= oldBalance, "Overflow");

        balance = newBalance;

        assert(balance &gt;= oldBalance);
    }

    function withdraw(uint _amount) public {
        uint oldBalance = balance;

        // balance - _amount does not underflow if balance &gt;= _amount
        require(balance &gt;= _amount, "Underflow");

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
