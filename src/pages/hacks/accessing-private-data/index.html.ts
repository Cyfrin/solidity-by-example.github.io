// metadata
export const version = "0.7.6"
export const title = "Accessing Private Data"
export const description = "An example of accessing private data from a Solidity smart contract"

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>All data on a smart contract can be read.</p>
<p>Let&#39;s see how we can read <code>private</code> data. In the process you will learn how Solidity stores state variables.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

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
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count = <span class="hljs-number">123</span>;
    <span class="hljs-comment">// slot 1</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner = <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isTrue = <span class="hljs-literal">true</span>;
    <span class="hljs-keyword">uint16</span> <span class="hljs-keyword">public</span> u16 = <span class="hljs-number">31</span>;
    <span class="hljs-comment">// slot 2</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">private</span> password;

    <span class="hljs-comment">// constants do not use storage</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> someConst = <span class="hljs-number">123</span>;

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
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> =&gt; User) <span class="hljs-keyword">private</span> idToUser;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _password</span>) </span>{
        password = _password;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addUser</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _password</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        User <span class="hljs-keyword">memory</span> user = User({
            id: users.<span class="hljs-built_in">length</span>,
            password: _password
        });

        users.<span class="hljs-built_in">push</span>(user);
        idToUser[user.id] = user;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getArrayLocation</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> slot, <span class="hljs-keyword">uint</span> index, <span class="hljs-keyword">uint</span> elementSize</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">uint</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(slot))) + (index * elementSize);
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
*/</span></code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>Don&#39;t store sensitive information on the blockchain.</li>
</ul>
`

export default html
