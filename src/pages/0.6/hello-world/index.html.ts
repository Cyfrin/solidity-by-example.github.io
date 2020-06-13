// metadata
export const version = "0.6.10"
export const title = "Hello World"
export const description = "Hello world in Solidity"

const html = `<p><code>pragma</code> specifies the compiler version of Solidity.</p>
<pre><code class="language-solidity">// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.6.10 and less than 0.7.0
pragma solidity ^0.6.10;

contract HelloWorld {
    string public greet = "Hello World!";
}
</code></pre>
`

export default html
