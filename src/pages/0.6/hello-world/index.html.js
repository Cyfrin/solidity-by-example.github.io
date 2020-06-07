// metadata
export const version = "0.6.0"
export const title = "Hello World"
export const description = "Hello world in Solidity"

const html = `<p><code>pragma</code> specifies the compiler version of Solidity.</p>
<pre><code class="language-solidity">// compiler version must be greater than or equal to 0.5.16 and less than 0.6.0
pragma solidity ^0.6.0;

contract HelloWorld {
    string public greet = "Hello World!";
}
</code></pre>
`

export default html
