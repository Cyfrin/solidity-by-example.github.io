// metadata
export const version = "0.5.16"
export const title = "Arithmetic Overflow and Underflow"
export const description = "An example of hacking Solidity with arithmetic overflow / underflow"

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>Integers in Solidity overflow / underflow without any errors.</p>
<pre><code class="language-solidity"></code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>Use <a href="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol" target="__blank">SafeMath</a> to will prevent arithmetic overflow and underflow</li>
</ul>
`

export default html
