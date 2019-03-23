pragma solidity ^0.5.1;

contract A {
    // This is called an event. You can emit events from your function
    // and they are logged into the transaction log.
    // In our case, this will be useful for tracing function calls.
    event Log(string message);

    function doSomething() public {
        emit Log("A.doSomething called");
    }

    function doSomethingElse() public {
        emit Log("A.doSomethingElse called");
    }
}

contract B is A {
    function doSomething() public {
        emit Log("B.doSomething called");
        A.doSomething();
    }
    function doSomethingElse() public {
        emit Log("B.doSomethingElse called");
        super.doSomethingElse();
    }
}

contract C is A {
    function doSomething() public {
        emit Log("C.doSomething called");
        A.doSomething();
    }

    function doSomethingElse() public {
        emit Log("C.doSomethingElse called");
        super.doSomethingElse();
    }
}

contract D is B, C {
    // Try:
    // - Call D.doSomething and check the transaction logs.
    //   Although D inherits A, B and C, it only called C and then A.
    // - Call D.doSomethingElse and check the transaction logs
    //   D called C, then B, and finally A as expected.
}
