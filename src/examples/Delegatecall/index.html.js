const html = `<p><code>delegatecall</code> is a low level function similar to <code>call</code>.</p>
<p>When contract <code>A</code> executes <code>delegatecall</code> to contract <code>B</code>, <code>B</code>&#39;s code is excuted</p>
<p>with contract <code>A</code>&#39;s storage, <code>msg.sender</code> and <code>msg.value</code>.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.1;

// Firts deploy this contract
contract B {
  uint public n;
  address public sender;
  uint public value;

  function setN(uint _n) public payable {
    n = _n;
    sender = msg.sender;
    value = msg.value;
  }
}

contract A {
  uint public n;
  address public sender;
  uint public value;

  function delegatecallSetN(address b, uint _n) public payable {
    // A&#39;s storage is set, B is not modified.
    (bool success, bytes memory returnData) = b.delegatecall(
      abi.encodeWithSignature("setN(uint256)", _n)
    );
  }
}
</code></pre>
`

export default html
