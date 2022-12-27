// metadata
export const version = "0.8.17"
export const title = "Gas Saving Techniques"
export const description = "Some gas saving techniques"
export const codes = [
    {
        fileName: "GasGolf.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCi8vIGdhcyBnb2xmCmNvbnRyYWN0IEdhc0dvbGYgewogICAgLy8gc3RhcnQgLSA1MDkwOCBnYXMKICAgIC8vIHVzZSBjYWxsZGF0YSAtIDQ5MTYzIGdhcwogICAgLy8gbG9hZCBzdGF0ZSB2YXJpYWJsZXMgdG8gbWVtb3J5IC0gNDg5NTIgZ2FzCiAgICAvLyBzaG9ydCBjaXJjdWl0IC0gNDg2MzQgZ2FzCiAgICAvLyBsb29wIGluY3JlbWVudHMgLSA0ODI0NCBnYXMKICAgIC8vIGNhY2hlIGFycmF5IGxlbmd0aCAtIDQ4MjA5IGdhcwogICAgLy8gbG9hZCBhcnJheSBlbGVtZW50cyB0byBtZW1vcnkgLSA0ODA0NyBnYXMKICAgIC8vIHVuY2hlY2sgaSBvdmVyZmxvdy91bmRlcmZsb3cgLSA0NzMwOSBnYXMKCiAgICB1aW50IHB1YmxpYyB0b3RhbDsKCiAgICAvLyBzdGFydCAtIG5vdCBnYXMgb3B0aW1pemVkCiAgICAvLyBmdW5jdGlvbiBzdW1JZkV2ZW5BbmRMZXNzVGhhbjk5KHVpbnRbXSBtZW1vcnkgbnVtcykgZXh0ZXJuYWwgewogICAgLy8gICAgIGZvciAodWludCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpICs9IDEpIHsKICAgIC8vICAgICAgICAgYm9vbCBpc0V2ZW4gPSBudW1zW2ldICUgMiA9PSAwOwogICAgLy8gICAgICAgICBib29sIGlzTGVzc1RoYW45OSA9IG51bXNbaV0gPCA5OTsKICAgIC8vICAgICAgICAgaWYgKGlzRXZlbiAmJiBpc0xlc3NUaGFuOTkpIHsKICAgIC8vICAgICAgICAgICAgIHRvdGFsICs9IG51bXNbaV07CiAgICAvLyAgICAgICAgIH0KICAgIC8vICAgICB9CiAgICAvLyB9CgogICAgLy8gZ2FzIG9wdGltaXplZAogICAgLy8gWzEsIDIsIDMsIDQsIDUsIDEwMF0KICAgIGZ1bmN0aW9uIHN1bUlmRXZlbkFuZExlc3NUaGFuOTkodWludFtdIGNhbGxkYXRhIG51bXMpIGV4dGVybmFsIHsKICAgICAgICB1aW50IF90b3RhbCA9IHRvdGFsOwogICAgICAgIHVpbnQgbGVuID0gbnVtcy5sZW5ndGg7CgogICAgICAgIGZvciAodWludCBpID0gMDsgaSA8IGxlbjsgKSB7CiAgICAgICAgICAgIHVpbnQgbnVtID0gbnVtc1tpXTsKICAgICAgICAgICAgaWYgKG51bSAlIDIgPT0gMCAmJiBudW0gPCA5OSkgewogICAgICAgICAgICAgICAgX3RvdGFsICs9IG51bTsKICAgICAgICAgICAgfQogICAgICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICAgICAgKytpOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICB0b3RhbCA9IF90b3RhbDsKICAgIH0KfQo=",
    },
]

const html = `<p>Some gas saving techniques.</p>
<ul>
<li>Replacing <code>memory</code> with <code>calldata</code></li>
<li>Loading state variable to memory</li>
<li>Replace for loop <code>i++</code> with <code>++i</code></li>
<li>Caching array elements</li>
<li>Short circuit</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-comment">// gas golf</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">GasGolf</span> </span>{
    <span class="hljs-comment">// start - 50908 gas</span>
    <span class="hljs-comment">// use calldata - 49163 gas</span>
    <span class="hljs-comment">// load state variables to memory - 48952 gas</span>
    <span class="hljs-comment">// short circuit - 48634 gas</span>
    <span class="hljs-comment">// loop increments - 48244 gas</span>
    <span class="hljs-comment">// cache array length - 48209 gas</span>
    <span class="hljs-comment">// load array elements to memory - 48047 gas</span>
    <span class="hljs-comment">// uncheck i overflow/underflow - 47309 gas</span>

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

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> len; ) {
            <span class="hljs-keyword">uint</span> num <span class="hljs-operator">=</span> nums[i];
            <span class="hljs-keyword">if</span> (num <span class="hljs-operator">%</span> <span class="hljs-number">2</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> num <span class="hljs-operator">&lt;</span> <span class="hljs-number">99</span>) {
                _total <span class="hljs-operator">+</span><span class="hljs-operator">=</span> num;
            }
            <span class="hljs-keyword">unchecked</span> {
                <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i;
            }
        }

        total <span class="hljs-operator">=</span> _total;
    }
}
</code></pre>
`

export default html
