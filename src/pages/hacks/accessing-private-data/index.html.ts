// metadata
export const version = "0.8.13"
export const title = "Accessing Private Data"
export const description =
  "An example of accessing private data from a Solidity smart contract"
export const codes = [
  {
    fileName: "Vault.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCi8qCk5vdGU6IGNhbm5vdCB1c2Ugd2ViMyBvbiBKVk0sIHNvIHVzZSB0aGUgY29udHJhY3QgZGVwbG95ZWQgb24gcm9wc3RlbgpOb3RlOiBicm93c2VyIFdlYjMgaXMgb2xkIHNvIHVzZSBXZWIzIGZyb20gdHJ1ZmZsZSBjb25zb2xlCgpDb250cmFjdCBkZXBsb3llZCBvbiBSb3BzdGVuCjB4MzUwNWEwMkJDREZiYjIyNTk4ODE2MWE5NTUyOGJmRGIyNzlmYUQ2YgoqLwoKLyoKIyBTdG9yYWdlCi0gMiAqKiAyNTYgc2xvdHMKLSAzMiBieXRlcyBmb3IgZWFjaCBzbG90Ci0gZGF0YSBpcyBzdG9yZWQgc2VxdWVudGlhbGx5IGluIHRoZSBvcmRlciBvZiBkZWNsYXJhdGlvbgotIHN0b3JhZ2UgaXMgb3B0aW1pemVkIHRvIHNhdmUgc3BhY2UuIElmIG5laWdoYm9yaW5nIHZhcmlhYmxlcyBmaXQgaW4gYSBzaW5nbGUKICAzMiBieXRlcywgdGhlbiB0aGV5IGFyZSBwYWNrZWQgaW50byB0aGUgc2FtZSBzbG90LCBzdGFydGluZyBmcm9tIHRoZSByaWdodAoqLwoKY29udHJhY3QgVmF1bHQgewogICAgLy8gc2xvdCAwCiAgICB1aW50IHB1YmxpYyBjb3VudCA9IDEyMzsKICAgIC8vIHNsb3QgMQogICAgYWRkcmVzcyBwdWJsaWMgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgYm9vbCBwdWJsaWMgaXNUcnVlID0gdHJ1ZTsKICAgIHVpbnQxNiBwdWJsaWMgdTE2ID0gMzE7CiAgICAvLyBzbG90IDIKICAgIGJ5dGVzMzIgcHJpdmF0ZSBwYXNzd29yZDsKCiAgICAvLyBjb25zdGFudHMgZG8gbm90IHVzZSBzdG9yYWdlCiAgICB1aW50IHB1YmxpYyBjb25zdGFudCBzb21lQ29uc3QgPSAxMjM7CgogICAgLy8gc2xvdCAzLCA0LCA1IChvbmUgZm9yIGVhY2ggYXJyYXkgZWxlbWVudCkKICAgIGJ5dGVzMzJbM10gcHVibGljIGRhdGE7CgogICAgc3RydWN0IFVzZXIgewogICAgICAgIHVpbnQgaWQ7CiAgICAgICAgYnl0ZXMzMiBwYXNzd29yZDsKICAgIH0KCiAgICAvLyBzbG90IDYgLSBsZW5ndGggb2YgYXJyYXkKICAgIC8vIHN0YXJ0aW5nIGZyb20gc2xvdCBoYXNoKDYpIC0gYXJyYXkgZWxlbWVudHMKICAgIC8vIHNsb3Qgd2hlcmUgYXJyYXkgZWxlbWVudCBpcyBzdG9yZWQgPSBrZWNjYWsyNTYoc2xvdCkpICsgKGluZGV4ICogZWxlbWVudFNpemUpCiAgICAvLyB3aGVyZSBzbG90ID0gNiBhbmQgZWxlbWVudFNpemUgPSAyICgxICh1aW50KSArICAxIChieXRlczMyKSkKICAgIFVzZXJbXSBwcml2YXRlIHVzZXJzOwoKICAgIC8vIHNsb3QgNyAtIGVtcHR5CiAgICAvLyBlbnRyaWVzIGFyZSBzdG9yZWQgYXQgaGFzaChrZXksIHNsb3QpCiAgICAvLyB3aGVyZSBzbG90ID0gNywga2V5ID0gbWFwIGtleQogICAgbWFwcGluZyh1aW50ID0+IFVzZXIpIHByaXZhdGUgaWRUb1VzZXI7CgogICAgY29uc3RydWN0b3IoYnl0ZXMzMiBfcGFzc3dvcmQpIHsKICAgICAgICBwYXNzd29yZCA9IF9wYXNzd29yZDsKICAgIH0KCiAgICBmdW5jdGlvbiBhZGRVc2VyKGJ5dGVzMzIgX3Bhc3N3b3JkKSBwdWJsaWMgewogICAgICAgIFVzZXIgbWVtb3J5IHVzZXIgPSBVc2VyKHtpZDogdXNlcnMubGVuZ3RoLCBwYXNzd29yZDogX3Bhc3N3b3JkfSk7CgogICAgICAgIHVzZXJzLnB1c2godXNlcik7CiAgICAgICAgaWRUb1VzZXJbdXNlci5pZF0gPSB1c2VyOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldEFycmF5TG9jYXRpb24oCiAgICAgICAgdWludCBzbG90LAogICAgICAgIHVpbnQgaW5kZXgsCiAgICAgICAgdWludCBlbGVtZW50U2l6ZQogICAgKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIHVpbnQoa2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQoc2xvdCkpKSArIChpbmRleCAqIGVsZW1lbnRTaXplKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRNYXBMb2NhdGlvbih1aW50IHNsb3QsIHVpbnQga2V5KSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIHVpbnQoa2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQoa2V5LCBzbG90KSkpOwogICAgfQp9CgovKgpzbG90IDAgLSBjb3VudAp3ZWIzLmV0aC5nZXRTdG9yYWdlQXQoIjB4MzUwNWEwMkJDREZiYjIyNTk4ODE2MWE5NTUyOGJmRGIyNzlmYUQ2YiIsIDAsIGNvbnNvbGUubG9nKQpzbG90IDEgLSB1MTYsIGlzVHJ1ZSwgb3duZXIKd2ViMy5ldGguZ2V0U3RvcmFnZUF0KCIweDM1MDVhMDJCQ0RGYmIyMjU5ODgxNjFhOTU1MjhiZkRiMjc5ZmFENmIiLCAxLCBjb25zb2xlLmxvZykKc2xvdCAyIC0gcGFzc3dvcmQKd2ViMy5ldGguZ2V0U3RvcmFnZUF0KCIweDM1MDVhMDJCQ0RGYmIyMjU5ODgxNjFhOTU1MjhiZkRiMjc5ZmFENmIiLCAyLCBjb25zb2xlLmxvZykKCnNsb3QgNiAtIGFycmF5IGxlbmd0aApnZXRBcnJheUxvY2F0aW9uKDYsIDAsIDIpCndlYjMudXRpbHMubnVtYmVyVG9IZXgoIjExMTQxNDA3NzgxNTg2MzQwMDUxMDAwNDA2NDYyOTk3MzU5NTk2MTU3OTE3MzY2NTU4OTIyNDIwMzUwMzY2MjE0OTM3MzcyNDk4NjY4NyIpCk5vdGU6IFdlIGNhbiBhbHNvIHVzZSB3ZWIzIHRvIGdldCBkYXRhIGxvY2F0aW9uCndlYjMudXRpbHMuc29saWRpdHlTaGEzKHsgdHlwZTogInVpbnQiLCB2YWx1ZTogNiB9KQoxc3QgdXNlcgp3ZWIzLmV0aC5nZXRTdG9yYWdlQXQoIjB4MzUwNWEwMkJDREZiYjIyNTk4ODE2MWE5NTUyOGJmRGIyNzlmYUQ2YiIsICIweGY2NTIyMjIzMTNlMjg0NTk1MjhkOTIwYjY1MTE1YzE2YzA0ZjNlZmM4MmFhZWRjOTdiZTU5ZjNmMzc3YzBkM2YiLCBjb25zb2xlLmxvZykKd2ViMy5ldGguZ2V0U3RvcmFnZUF0KCIweDM1MDVhMDJCQ0RGYmIyMjU5ODgxNjFhOTU1MjhiZkRiMjc5ZmFENmIiLCAiMHhmNjUyMjIyMzEzZTI4NDU5NTI4ZDkyMGI2NTExNWMxNmMwNGYzZWZjODJhYWVkYzk3YmU1OWYzZjM3N2MwZDQwIiwgY29uc29sZS5sb2cpCk5vdGU6IHVzZSB3ZWIzLnRvQXNjaWkgdG8gY29udmVydCBieXRlczMyIHRvIGFscGhhYmV0CjJuZCB1c2VyCndlYjMuZXRoLmdldFN0b3JhZ2VBdCgiMHgzNTA1YTAyQkNERmJiMjI1OTg4MTYxYTk1NTI4YmZEYjI3OWZhRDZiIiwgIjB4ZjY1MjIyMjMxM2UyODQ1OTUyOGQ5MjBiNjUxMTVjMTZjMDRmM2VmYzgyYWFlZGM5N2JlNTlmM2YzNzdjMGQ0MSIsIGNvbnNvbGUubG9nKQp3ZWIzLmV0aC5nZXRTdG9yYWdlQXQoIjB4MzUwNWEwMkJDREZiYjIyNTk4ODE2MWE5NTUyOGJmRGIyNzlmYUQ2YiIsICIweGY2NTIyMjIzMTNlMjg0NTk1MjhkOTIwYjY1MTE1YzE2YzA0ZjNlZmM4MmFhZWRjOTdiZTU5ZjNmMzc3YzBkNDIiLCBjb25zb2xlLmxvZykKCnNsb3QgNyAtIGVtcHR5CmdldE1hcExvY2F0aW9uKDcsIDEpCndlYjMudXRpbHMubnVtYmVyVG9IZXgoIjgxMjIyMTkxOTg2MjI2ODA5MTAzMjc5MTE5OTk0NzA3ODY4MzIyODU1NzQxODE5OTA1OTA0NDE3OTUzMDkyNjY2Njk5MDk2OTYzMTEyIikKTm90ZTogV2UgY2FuIGFsc28gdXNlIHdlYjMgdG8gZ2V0IGRhdGEgbG9jYXRpb24Kd2ViMy51dGlscy5zb2xpZGl0eVNoYTMoeyB0eXBlOiAidWludCIsIHZhbHVlOiAxIH0sIHt0eXBlOiAidWludCIsIHZhbHVlOiA3fSkKdXNlciAxCndlYjMuZXRoLmdldFN0b3JhZ2VBdCgiMHgzNTA1YTAyQkNERmJiMjI1OTg4MTYxYTk1NTI4YmZEYjI3OWZhRDZiIiwgIjB4YjM5MjIxYWNlMDUzNDY1ZWMzNDUzY2UyYjM2NDMwYmQxMzhiOTk3ZWNlYTI1YzEwNDNkYTBjMzY2ODEyYjgyOCIsIGNvbnNvbGUubG9nKQp3ZWIzLmV0aC5nZXRTdG9yYWdlQXQoIjB4MzUwNWEwMkJDREZiYjIyNTk4ODE2MWE5NTUyOGJmRGIyNzlmYUQ2YiIsICIweGIzOTIyMWFjZTA1MzQ2NWVjMzQ1M2NlMmIzNjQzMGJkMTM4Yjk5N2VjZWEyNWMxMDQzZGEwYzM2NjgxMmI4MjkiLCBjb25zb2xlLmxvZykKKi8K",
  },
]

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>All data on a smart contract can be read.</p>
<p>Let&#39;s see how we can read <code>private</code> data. In the process you will learn how Solidity stores state variables.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">/*
Note: cannot use web3 on JVM, so use the contract deployed on ropsten
Note: browser Web3 is old so use Web3 from truffle console

Contract deployed on Ropsten
0x3505a02BCDFbb225988161a95528bfDb279faD6b
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
