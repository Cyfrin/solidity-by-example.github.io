import React, { Component } from 'react'
import Code from '../Code'

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h3>Hello world</h3>

        <Code code={code} />
      </div>
    )
  }
}

const code = `
<pre><code class="language-solidity">contract Solidity {
  function foo() public {

  }
}</code></pre>
`

export default HelloWorld
