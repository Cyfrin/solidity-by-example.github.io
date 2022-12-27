// metadata
export const version = "0.8.17"
export const title = "Accessing Private Data"
export const description = "An example of accessing private data from a Solidity smart contract"
export const codes = [
    {
        fileName: "Vault.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCi8qCk5vdGU6IGNhbm5vdCB1c2Ugd2ViMyBvbiBKVk0sIHNvIHVzZSB0aGUgY29udHJhY3QgZGVwbG95ZWQgb24gR29lcmxpCk5vdGU6IGJyb3dzZXIgV2ViMyBpcyBvbGQgc28gdXNlIFdlYjMgZnJvbSB0cnVmZmxlIGNvbnNvbGUKCkNvbnRyYWN0IGRlcGxveWVkIG9uIEdvZXJsaQoweDUzNEU0Q2UwZmZGNzc5NTEzNzkzY2ZkNzAzMDhBRjE5NTgyN0JEMzEKKi8KCi8qCiMgU3RvcmFnZQotIDIgKiogMjU2IHNsb3RzCi0gMzIgYnl0ZXMgZm9yIGVhY2ggc2xvdAotIGRhdGEgaXMgc3RvcmVkIHNlcXVlbnRpYWxseSBpbiB0aGUgb3JkZXIgb2YgZGVjbGFyYXRpb24KLSBzdG9yYWdlIGlzIG9wdGltaXplZCB0byBzYXZlIHNwYWNlLiBJZiBuZWlnaGJvcmluZyB2YXJpYWJsZXMgZml0IGluIGEgc2luZ2xlCiAgMzIgYnl0ZXMsIHRoZW4gdGhleSBhcmUgcGFja2VkIGludG8gdGhlIHNhbWUgc2xvdCwgc3RhcnRpbmcgZnJvbSB0aGUgcmlnaHQKKi8KCmNvbnRyYWN0IFZhdWx0IHsKICAgIC8vIHNsb3QgMAogICAgdWludCBwdWJsaWMgY291bnQgPSAxMjM7CiAgICAvLyBzbG90IDEKICAgIGFkZHJlc3MgcHVibGljIG93bmVyID0gbXNnLnNlbmRlcjsKICAgIGJvb2wgcHVibGljIGlzVHJ1ZSA9IHRydWU7CiAgICB1aW50MTYgcHVibGljIHUxNiA9IDMxOwogICAgLy8gc2xvdCAyCiAgICBieXRlczMyIHByaXZhdGUgcGFzc3dvcmQ7CgogICAgLy8gY29uc3RhbnRzIGRvIG5vdCB1c2Ugc3RvcmFnZQogICAgdWludCBwdWJsaWMgY29uc3RhbnQgc29tZUNvbnN0ID0gMTIzOwoKICAgIC8vIHNsb3QgMywgNCwgNSAob25lIGZvciBlYWNoIGFycmF5IGVsZW1lbnQpCiAgICBieXRlczMyWzNdIHB1YmxpYyBkYXRhOwoKICAgIHN0cnVjdCBVc2VyIHsKICAgICAgICB1aW50IGlkOwogICAgICAgIGJ5dGVzMzIgcGFzc3dvcmQ7CiAgICB9CgogICAgLy8gc2xvdCA2IC0gbGVuZ3RoIG9mIGFycmF5CiAgICAvLyBzdGFydGluZyBmcm9tIHNsb3QgaGFzaCg2KSAtIGFycmF5IGVsZW1lbnRzCiAgICAvLyBzbG90IHdoZXJlIGFycmF5IGVsZW1lbnQgaXMgc3RvcmVkID0ga2VjY2FrMjU2KHNsb3QpKSArIChpbmRleCAqIGVsZW1lbnRTaXplKQogICAgLy8gd2hlcmUgc2xvdCA9IDYgYW5kIGVsZW1lbnRTaXplID0gMiAoMSAodWludCkgKyAgMSAoYnl0ZXMzMikpCiAgICBVc2VyW10gcHJpdmF0ZSB1c2VyczsKCiAgICAvLyBzbG90IDcgLSBlbXB0eQogICAgLy8gZW50cmllcyBhcmUgc3RvcmVkIGF0IGhhc2goa2V5LCBzbG90KQogICAgLy8gd2hlcmUgc2xvdCA9IDcsIGtleSA9IG1hcCBrZXkKICAgIG1hcHBpbmcodWludCA9PiBVc2VyKSBwcml2YXRlIGlkVG9Vc2VyOwoKICAgIGNvbnN0cnVjdG9yKGJ5dGVzMzIgX3Bhc3N3b3JkKSB7CiAgICAgICAgcGFzc3dvcmQgPSBfcGFzc3dvcmQ7CiAgICB9CgogICAgZnVuY3Rpb24gYWRkVXNlcihieXRlczMyIF9wYXNzd29yZCkgcHVibGljIHsKICAgICAgICBVc2VyIG1lbW9yeSB1c2VyID0gVXNlcih7aWQ6IHVzZXJzLmxlbmd0aCwgcGFzc3dvcmQ6IF9wYXNzd29yZH0pOwoKICAgICAgICB1c2Vycy5wdXNoKHVzZXIpOwogICAgICAgIGlkVG9Vc2VyW3VzZXIuaWRdID0gdXNlcjsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRBcnJheUxvY2F0aW9uKAogICAgICAgIHVpbnQgc2xvdCwKICAgICAgICB1aW50IGluZGV4LAogICAgICAgIHVpbnQgZWxlbWVudFNpemUKICAgICkgcHVibGljIHB1cmUgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiB1aW50KGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKHNsb3QpKSkgKyAoaW5kZXggKiBlbGVtZW50U2l6ZSk7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0TWFwTG9jYXRpb24odWludCBzbG90LCB1aW50IGtleSkgcHVibGljIHB1cmUgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiB1aW50KGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKGtleSwgc2xvdCkpKTsKICAgIH0KfQoKLyoKc2xvdCAwIC0gY291bnQKd2ViMy5ldGguZ2V0U3RvcmFnZUF0KCIweDM1MDVhMDJCQ0RGYmIyMjU5ODgxNjFhOTU1MjhiZkRiMjc5ZmFENmIiLCAwLCBjb25zb2xlLmxvZykKc2xvdCAxIC0gdTE2LCBpc1RydWUsIG93bmVyCndlYjMuZXRoLmdldFN0b3JhZ2VBdCgiMHgzNTA1YTAyQkNERmJiMjI1OTg4MTYxYTk1NTI4YmZEYjI3OWZhRDZiIiwgMSwgY29uc29sZS5sb2cpCnNsb3QgMiAtIHBhc3N3b3JkCndlYjMuZXRoLmdldFN0b3JhZ2VBdCgiMHgzNTA1YTAyQkNERmJiMjI1OTg4MTYxYTk1NTI4YmZEYjI3OWZhRDZiIiwgMiwgY29uc29sZS5sb2cpCgpzbG90IDYgLSBhcnJheSBsZW5ndGgKZ2V0QXJyYXlMb2NhdGlvbig2LCAwLCAyKQp3ZWIzLnV0aWxzLm51bWJlclRvSGV4KCIxMTE0MTQwNzc4MTU4NjM0MDA1MTAwMDQwNjQ2Mjk5NzM1OTU5NjE1NzkxNzM2NjU1ODkyMjQyMDM1MDM2NjIxNDkzNzM3MjQ5ODY2ODciKQpOb3RlOiBXZSBjYW4gYWxzbyB1c2Ugd2ViMyB0byBnZXQgZGF0YSBsb2NhdGlvbgp3ZWIzLnV0aWxzLnNvbGlkaXR5U2hhMyh7IHR5cGU6ICJ1aW50IiwgdmFsdWU6IDYgfSkKMXN0IHVzZXIKd2ViMy5ldGguZ2V0U3RvcmFnZUF0KCIweDM1MDVhMDJCQ0RGYmIyMjU5ODgxNjFhOTU1MjhiZkRiMjc5ZmFENmIiLCAiMHhmNjUyMjIyMzEzZTI4NDU5NTI4ZDkyMGI2NTExNWMxNmMwNGYzZWZjODJhYWVkYzk3YmU1OWYzZjM3N2MwZDNmIiwgY29uc29sZS5sb2cpCndlYjMuZXRoLmdldFN0b3JhZ2VBdCgiMHgzNTA1YTAyQkNERmJiMjI1OTg4MTYxYTk1NTI4YmZEYjI3OWZhRDZiIiwgIjB4ZjY1MjIyMjMxM2UyODQ1OTUyOGQ5MjBiNjUxMTVjMTZjMDRmM2VmYzgyYWFlZGM5N2JlNTlmM2YzNzdjMGQ0MCIsIGNvbnNvbGUubG9nKQpOb3RlOiB1c2Ugd2ViMy50b0FzY2lpIHRvIGNvbnZlcnQgYnl0ZXMzMiB0byBhbHBoYWJldAoybmQgdXNlcgp3ZWIzLmV0aC5nZXRTdG9yYWdlQXQoIjB4MzUwNWEwMkJDREZiYjIyNTk4ODE2MWE5NTUyOGJmRGIyNzlmYUQ2YiIsICIweGY2NTIyMjIzMTNlMjg0NTk1MjhkOTIwYjY1MTE1YzE2YzA0ZjNlZmM4MmFhZWRjOTdiZTU5ZjNmMzc3YzBkNDEiLCBjb25zb2xlLmxvZykKd2ViMy5ldGguZ2V0U3RvcmFnZUF0KCIweDM1MDVhMDJCQ0RGYmIyMjU5ODgxNjFhOTU1MjhiZkRiMjc5ZmFENmIiLCAiMHhmNjUyMjIyMzEzZTI4NDU5NTI4ZDkyMGI2NTExNWMxNmMwNGYzZWZjODJhYWVkYzk3YmU1OWYzZjM3N2MwZDQyIiwgY29uc29sZS5sb2cpCgpzbG90IDcgLSBlbXB0eQpnZXRNYXBMb2NhdGlvbig3LCAxKQp3ZWIzLnV0aWxzLm51bWJlclRvSGV4KCI4MTIyMjE5MTk4NjIyNjgwOTEwMzI3OTExOTk5NDcwNzg2ODMyMjg1NTc0MTgxOTkwNTkwNDQxNzk1MzA5MjY2NjY5OTA5Njk2MzExMiIpCk5vdGU6IFdlIGNhbiBhbHNvIHVzZSB3ZWIzIHRvIGdldCBkYXRhIGxvY2F0aW9uCndlYjMudXRpbHMuc29saWRpdHlTaGEzKHsgdHlwZTogInVpbnQiLCB2YWx1ZTogMSB9LCB7dHlwZTogInVpbnQiLCB2YWx1ZTogN30pCnVzZXIgMQp3ZWIzLmV0aC5nZXRTdG9yYWdlQXQoIjB4MzUwNWEwMkJDREZiYjIyNTk4ODE2MWE5NTUyOGJmRGIyNzlmYUQ2YiIsICIweGIzOTIyMWFjZTA1MzQ2NWVjMzQ1M2NlMmIzNjQzMGJkMTM4Yjk5N2VjZWEyNWMxMDQzZGEwYzM2NjgxMmI4MjgiLCBjb25zb2xlLmxvZykKd2ViMy5ldGguZ2V0U3RvcmFnZUF0KCIweDM1MDVhMDJCQ0RGYmIyMjU5ODgxNjFhOTU1MjhiZkRiMjc5ZmFENmIiLCAiMHhiMzkyMjFhY2UwNTM0NjVlYzM0NTNjZTJiMzY0MzBiZDEzOGI5OTdlY2VhMjVjMTA0M2RhMGMzNjY4MTJiODI5IiwgY29uc29sZS5sb2cpCiovCg==",
    },
]

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>All data on a smart contract can be read.</p>
<p>Let&#39;s see how we can read <code>private</code> data. In the process you will learn how Solidity stores state variables.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-comment">/*
Note: cannot use web3 on JVM, so use the contract deployed on Goerli
Note: browser Web3 is old so use Web3 from truffle console

Contract deployed on Goerli
0x534E4Ce0ffF779513793cfd70308AF195827BD31
*/</span>

<span class="hljs-comment">/*
# Storage
- 2 ** 256 slots
- 32 bytes for each slot
- data is stored sequentially in the order of declaration
- storage is optimized to save space. If neighboring variables fit in a single
  32 bytes, then they are packed into the same slot, starting from the right
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Vault</span> </span>{
    <span class="hljs-comment">// slot 0</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;
    <span class="hljs-comment">// slot 1</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isTrue <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
    <span class="hljs-keyword">uint16</span> <span class="hljs-keyword">public</span> u16 <span class="hljs-operator">=</span> <span class="hljs-number">31</span>;
    <span class="hljs-comment">// slot 2</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">private</span> password;

    <span class="hljs-comment">// constants do not use storage</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> someConst <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;

    <span class="hljs-comment">// slot 3, 4, 5 (one for each array element)</span>
    <span class="hljs-keyword">bytes32</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">public</span> data;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">User</span> {
        <span class="hljs-keyword">uint</span> id;
        <span class="hljs-keyword">bytes32</span> password;
    }

    <span class="hljs-comment">// slot 6 - length of array</span>
    <span class="hljs-comment">// starting from slot hash(6) - array elements</span>
    <span class="hljs-comment">// slot where array element is stored = keccak256(slot)) + (index * elementSize)</span>
    <span class="hljs-comment">// where slot = 6 and elementSize = 2 (1 (uint) +  1 (bytes32))</span>
    User[] <span class="hljs-keyword">private</span> users;

    <span class="hljs-comment">// slot 7 - empty</span>
    <span class="hljs-comment">// entries are stored at hash(key, slot)</span>
    <span class="hljs-comment">// where slot = 7, key = map key</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> User) <span class="hljs-keyword">private</span> idToUser;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _password</span>) </span>{
        password <span class="hljs-operator">=</span> _password;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addUser</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _password</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        User <span class="hljs-keyword">memory</span> user <span class="hljs-operator">=</span> User({id: users.<span class="hljs-built_in">length</span>, password: _password});

        users.<span class="hljs-built_in">push</span>(user);
        idToUser[user.id] <span class="hljs-operator">=</span> user;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getArrayLocation</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> slot,
        <span class="hljs-keyword">uint</span> index,
        <span class="hljs-keyword">uint</span> elementSize
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">uint</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(slot))) <span class="hljs-operator">+</span> (index <span class="hljs-operator">*</span> elementSize);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMapLocation</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> slot, <span class="hljs-keyword">uint</span> key</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">uint</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(key, slot)));
    }
}

<span class="hljs-comment">/*
slot 0 - count
web3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", 0, console.log)
slot 1 - u16, isTrue, owner
web3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", 1, console.log)
slot 2 - password
web3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", 2, console.log)

slot 6 - array length
getArrayLocation(6, 0, 2)
web3.utils.numberToHex("111414077815863400510004064629973595961579173665589224203503662149373724986687")
Note: We can also use web3 to get data location
web3.utils.soliditySha3({ type: "uint", value: 6 })
1st user
web3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f", console.log)
web3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d40", console.log)
Note: use web3.toAscii to convert bytes32 to alphabet
2nd user
web3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d41", console.log)
web3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d42", console.log)

slot 7 - empty
getMapLocation(7, 1)
web3.utils.numberToHex("81222191986226809103279119994707868322855741819905904417953092666699096963112")
Note: We can also use web3 to get data location
web3.utils.soliditySha3({ type: "uint", value: 1 }, {type: "uint", value: 7})
user 1
web3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b828", console.log)
web3.eth.getStorageAt("0x3505a02BCDFbb225988161a95528bfDb279faD6b", "0xb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b829", console.log)
*/</span>
</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>Don&#39;t store sensitive information on the blockchain.</li>
</ul>
`

export default html
