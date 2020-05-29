const html = `<p>Parent contracts can be called directly, or by using the keyword <code>super</code>.</p>
<p>By using the keyword <code>super</code>, all of the immediate parent contracts will be called.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

/* Inheritance tree
   A
 /  \\
B   C
 \\ /
  D
*/

contract A {
    // This is called an event. You can emit events from your function
    // and they are logged into the transaction log.
    // In our case, this will be useful for tracing function calls.
    event Log(string message);

    function foo() public {
        emit Log("A.foo called");
    }

    function bar() public {
        emit Log("A.bar called");
    }
}

contract B is A {
    function foo() public {
        emit Log("B.foo called");
        A.foo();
    }
    function bar() public {
        emit Log("B.bar called");
        super.bar();
    }
}

contract C is A {
    function foo() public {
        emit Log("C.foo called");
        A.foo();
    }

    function bar() public {
        emit Log("C.bar called");
        super.bar();
    }
}

contract D is B, C {
    // Try:
    // - Call D.foo and check the transaction logs.
    //   Although D inherits A, B and C, it only called C and then A.
    // - Call D.bar and check the transaction logs
    //   D called C, then B, and finally A.
    //   Although super was called twice (by B and C) it only called A once.
}
</code></pre>
`

export default html
