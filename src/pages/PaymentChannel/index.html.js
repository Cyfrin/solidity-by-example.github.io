const html = `<p>Payment channels allow participants to repeatedly transfer Ether off chain.</p>
<p>Here is how this contract is used:</p>
<ul>
<li><code>Alice</code> deploys the contract, funding it with some Ether.</li>
<li><code>Alice</code> authorises a payment by signing a message (off chain) and sends the signed message to <code>Bob</code>.</li>
<li><code>Bob</code> claims his payment by presenting the signed message to the smart contract.</li>
</ul>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract PaymentChannel {
  address payable public sender;
  address payable public recipient;
  uint public expiration;

  constructor(address payable _recipient, uint duration) public payable {
    sender = msg.sender;
    recipient = _recipient;
    expiration = now + duration;
  }

  function isValidSignature(uint amount, bytes memory signature)
    internal
    view
    returns (bool)
  {
    bytes32 message = prefixed(keccak256(abi.encodePacked(this, amount)));

    return recoverSigner(message, signature) == sender;
  }

  // The recipient can close the channel at any time by presenting a
  // signed amount from the sender. The recipient will be sent that amount,
  // and the remainder will go back to the sender
  function close(uint amount, bytes memory signature) public {
    require(msg.sender == recipient);
    require(isValidSignature(amount, signature));

    recipient.transfer(amount);
    selfdestruct(sender);
  }

  // Sender can extend the expiration at any time
  function extend(uint newExpiration) public {
    require(msg.sender == sender);
    require(newExpiration &gt; expiration);

    expiration = newExpiration;
  }

  // If the timeout is reached without the recipient closing the channel,
  // then the Ether is released back to the sender.
  function claimTimeout() public {
    require(now &gt;= expiration);
    selfdestruct(sender);
  }

  function recoverSigner(bytes32 message, bytes memory sig)
    internal
    pure
    returns (address)
  {
    (uint8 v, bytes32 r, bytes32 s) = splitSignature(sig);

    // If you are using Remix IDE, you may need to hard code
    // v = 0x1b, due to a bug
    return ecrecover(message, v, r, s);
  }

  /// builds a prefixed hash to mimic the behavior of eth_sign.
  function prefixed(bytes32 hash) internal pure returns (bytes32) {
    return keccak256(abi.encodePacked("\\x19Ethereum Signed Message:\\n32", hash));
  }

  function splitSignature(bytes memory sig)
    internal
    pure
    returns (uint8 v, bytes32 r, bytes32 s)
  {
    require(sig.length == 65);

    assembly {
      // first 32 bytes, after the length prefix
      r := mload(add(sig, 32))
      // second 32 bytes
      s := mload(add(sig, 64))
      // final byte (first byte of the next 32 bytes)
      v := byte(0, mload(add(sig, 96)))
    }

    return (v, r, s);
  }
}
</code></pre>
`

export default html
