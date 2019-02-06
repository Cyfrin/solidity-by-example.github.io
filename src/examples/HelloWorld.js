import React, { Component } from 'react'
import Example from '../Example'

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <Example
          title="Hello World"
          code={code}
        />
      </div>
    )
  }
}

const code = `
<pre><code class="language-solidity">
# Compiler version
pragma solidity ^0.4.24;

contract Solidity {
  function foo() public {

  }
}</code></pre>
`

export default HelloWorld
