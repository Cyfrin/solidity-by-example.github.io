// metadata
export const version = "0.8.13"
export const title = "Gas Saving Techniques"
export const description = "Some gas saving techniques"

const html = `<p>Some gas saving techniques.</p>
<ul>
<li>Replacing <code>memory</code> with <code>calldata</code></li>
<li>Loading state variable to memory</li>
<li>Replace for loop <code>i++</code> with <code>++i</code></li>
<li>Caching array elements</li>
<li>Short circuit</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// gas golf</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">GasGolf</span> </span>{
    <span class="hljs-comment">// start - 50908 gas</span>
    <span class="hljs-comment">// use calldata - 49163 gas</span>
    <span class="hljs-comment">// load state variables to memory - 48952 gas</span>
    <span class="hljs-comment">// short circuit - 48634 gas</span>
    <span class="hljs-comment">// loop increments - 48244 gas</span>
    <span class="hljs-comment">// cache array length - 48209 gas</span>
    <span class="hljs-comment">// load array elements to memory - 48047 gas</span>
    <span class="hljs-comment">// uncheck i overflow/underflow - 47615 gas</span>

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> total;

    <span class="hljs-comment">// start - not gas optimized</span>
    <span class="hljs-comment">// function sumIfEvenAndLessThan99(uint[] memory nums) external {</span>
    <span class="hljs-comment">//     for (uint i = 0; i &lt; nums.length; i += 1) {</span>
    <span class="hljs-comment">//         bool isEven = nums[i] % 2 == 0;</span>
    <span class="hljs-comment">//         bool isLessThan99 = nums[i] &lt; 99;</span>
    <span class="hljs-comment">//         if (isEven &amp;&amp; isLessThan99) {</span>
    <span class="hljs-comment">//             total += nums[i];</span>
    <span class="hljs-comment">//         }</span>
    <span class="hljs-comment">//     }</span>
    <span class="hljs-comment">// }</span>

    <span class="hljs-comment">// gas optimized</span>
    <span class="hljs-comment">// [1, 2, 3, 4, 5, 100]</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sumIfEvenAndLessThan99</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">calldata</span> nums</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">uint</span> _total <span class="hljs-operator">=</span> total;
        <span class="hljs-keyword">uint</span> len <span class="hljs-operator">=</span> nums.<span class="hljs-built_in">length</span>;

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> len; i<span class="hljs-operator">=</span>unchecked_inc(i)) {
            <span class="hljs-keyword">uint</span> num <span class="hljs-operator">=</span> nums[i];
            <span class="hljs-keyword">if</span> (num <span class="hljs-operator">%</span> <span class="hljs-number">2</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> num <span class="hljs-operator">&lt;</span> <span class="hljs-number">99</span>) {
                _total <span class="hljs-operator">+</span><span class="hljs-operator">=</span> num;
            }
        }

        total <span class="hljs-operator">=</span> _total;
    }
    
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unchecked_inc</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> i</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span>(<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>{
      <span class="hljs-keyword">unchecked</span> {
        <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i;
      }
      <span class="hljs-keyword">return</span> i;
    }
}
</code></pre>
`

export default html
