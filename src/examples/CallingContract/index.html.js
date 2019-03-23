const html = `<p>Contract can call other contracts in 2 ways.</p>
<p>The easiest way to is to just call it, like <code>A.foo(x, y, z)</code>.</p>
<p>Another way to call other contracts is to use the low-level <code>call</code>.</p>
<p>This method is not recommended.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.1;

contract A {
    uint public x;

    function setX(uint _x) public returns (uint) {
        x = _x;
        return x;
    }
}

contract B {
    function setX(A a, uint x) public returns (uint) {
        return a.setX(x);
    }

    function getX(A a) public view returns (uint) {
        return a.x();
    }
}

contract C {
  function setX(A a, uint x) public returns (bytes memory) {
    // low-level way to call another contract
    // This method is useful when you want to call an arbitrary contract.
    (bool success, bytes memory returnData) = address(a).call(
      abi.encodeWithSignature("setX(uint256)", x);
    );
    require(success);

    return returnData;
  }
}
</code></pre>
`

export default html
