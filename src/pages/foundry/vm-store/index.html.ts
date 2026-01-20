// metadata
export const version = "0.8.26"
export const title = "Foundry vm.store"
export const description =
  "Learn how to use vm.store to write directly to storage slots in Foundry tests"
export const cyfrinLink = ""

export const keywords = ["foundry", "vm.store", "storage", "cheatcode", "testing"]

export const codes = [
  {
    fileName: "StoreTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKaW1wb3J0IHtUZXN0LCBjb25zb2xlMn0gZnJvbSAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKCmNvbnRyYWN0IFZhdWx0IHsKICAgIC8vIFNsb3QgMAogICAgYWRkcmVzcyBwdWJsaWMgb3duZXI7CiAgICAvLyBTbG90IDEKICAgIHVpbnQyNTYgcHVibGljIHBhc3N3b3JkOwogICAgLy8gU2xvdCAyCiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gdWludDI1NikgcHVibGljIGJhbGFuY2VzOwoKICAgIGNvbnN0cnVjdG9yKHVpbnQyNTYgX3Bhc3N3b3JkKSB7CiAgICAgICAgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgICAgIHBhc3N3b3JkID0gX3Bhc3N3b3JkOwogICAgfQoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KCkgZXh0ZXJuYWwgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBvd25lciwgIm5vdCBvd25lciIpOwogICAgICAgIHVpbnQyNTYgYmFsID0gYmFsYW5jZXNbbXNnLnNlbmRlcl07CiAgICAgICAgYmFsYW5jZXNbbXNnLnNlbmRlcl0gPSAwOwogICAgICAgIHBheWFibGUobXNnLnNlbmRlcikudHJhbnNmZXIoYmFsKTsKICAgIH0KfQoKY29udHJhY3QgU3RvcmVUZXN0IGlzIFRlc3QgewogICAgVmF1bHQgdmF1bHQ7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIHZhdWx0ID0gbmV3IFZhdWx0KDEyMzQ1KTsKICAgIH0KCiAgICAvLyB2bS5zdG9yZShhZGRyZXNzIGFjY291bnQsIGJ5dGVzMzIgc2xvdCwgYnl0ZXMzMiB2YWx1ZSkKICAgIC8vIC0gYWNjb3VudDogQWRkcmVzcyBvZiB0aGUgY29udHJhY3QKICAgIC8vIC0gc2xvdDogU3RvcmFnZSBzbG90IHRvIHdyaXRlIHRvCiAgICAvLyAtIHZhbHVlOiBWYWx1ZSB0byB3cml0ZQoKICAgIGZ1bmN0aW9uIHRlc3Rfc3RvcmVfc2ltcGxlX3Nsb3QoKSBwdWJsaWMgewogICAgICAgIC8vIFNsb3QgMCBzdG9yZXMgdGhlIG93bmVyIGFkZHJlc3MKICAgICAgICAvLyBDaGFuZ2Ugb3duZXIgdG8gYWRkcmVzcygxKQogICAgICAgIHZtLnN0b3JlKGFkZHJlc3ModmF1bHQpLCBieXRlczMyKHVpbnQyNTYoMCkpLCBieXRlczMyKHVpbnQyNTYodWludDE2MChhZGRyZXNzKDEpKSkpKTsKICAgICAgICBhc3NlcnRFcSh2YXVsdC5vd25lcigpLCBhZGRyZXNzKDEpKTsKCiAgICAgICAgLy8gU2xvdCAxIHN0b3JlcyB0aGUgcGFzc3dvcmQKICAgICAgICAvLyBDaGFuZ2UgcGFzc3dvcmQgdG8gOTk5CiAgICAgICAgdm0uc3RvcmUoYWRkcmVzcyh2YXVsdCksIGJ5dGVzMzIodWludDI1NigxKSksIGJ5dGVzMzIodWludDI1Nig5OTkpKSk7CiAgICAgICAgYXNzZXJ0RXEodmF1bHQucGFzc3dvcmQoKSwgOTk5KTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3N0b3JlX21hcHBpbmcoKSBwdWJsaWMgewogICAgICAgIC8vIEZvciBtYXBwaW5ncywgdGhlIHNsb3QgaXMgY2FsY3VsYXRlZCBhczoKICAgICAgICAvLyBrZWNjYWsyNTYoYWJpLmVuY29kZShrZXksIG1hcHBpbmdfc2xvdCkpCgogICAgICAgIGFkZHJlc3MgdXNlciA9IGFkZHJlc3MoMHhCRUVGKTsKICAgICAgICB1aW50MjU2IG1hcHBpbmdTbG90ID0gMjsgLy8gYmFsYW5jZXMgaXMgYXQgc2xvdCAyCgogICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgc3RvcmFnZSBzbG90IGZvciBiYWxhbmNlc1t1c2VyXQogICAgICAgIGJ5dGVzMzIgc2xvdCA9IGtlY2NhazI1NihhYmkuZW5jb2RlKHVzZXIsIG1hcHBpbmdTbG90KSk7CgogICAgICAgIC8vIFNldCBiYWxhbmNlIG9mIHVzZXIgdG8gMTAwIGV0aGVyCiAgICAgICAgdm0uc3RvcmUoYWRkcmVzcyh2YXVsdCksIHNsb3QsIGJ5dGVzMzIodWludDI1NigxMDAgZXRoZXIpKSk7CgogICAgICAgIGFzc2VydEVxKHZhdWx0LmJhbGFuY2VzKHVzZXIpLCAxMDAgZXRoZXIpOwogICAgfQp9Cg==",
  },
]

const html = `<p>Use <code>vm.store</code> to write directly to a contract&#39;s storage slots during testing.</p>
<p>This is useful for:</p>
<ul>
<li>Setting up test scenarios without calling contract functions</li>
<li>Bypassing access controls to test specific states</li>
<li>Testing edge cases that are hard to reach normally</li>
</ul>
<p>For mappings, calculate the slot with <code>keccak256(abi.encode(key, mappingSlot))</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Vault</span> </span>{
    <span class="hljs-comment">// Slot 0</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    <span class="hljs-comment">// Slot 1</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> password;
    <span class="hljs-comment">// Slot 2</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balances;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _password</span>) </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        password <span class="hljs-operator">=</span> _password;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"not owner"</span>);
        <span class="hljs-keyword">uint256</span> bal <span class="hljs-operator">=</span> balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>).<span class="hljs-built_in">transfer</span>(bal);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">StoreTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    Vault vault;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        vault <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Vault(<span class="hljs-number">12345</span>);
    }

    <span class="hljs-comment">// vm.store(address account, bytes32 slot, bytes32 value)</span>
    <span class="hljs-comment">// - account: Address of the contract</span>
    <span class="hljs-comment">// - slot: Storage slot to write to</span>
    <span class="hljs-comment">// - value: Value to write</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_store_simple_slot</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Slot 0 stores the owner address</span>
        <span class="hljs-comment">// Change owner to address(1)</span>
        vm.store(<span class="hljs-keyword">address</span>(vault), <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">0</span>)), <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-keyword">uint160</span>(<span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>)))));
        assertEq(vault.owner(), <span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>));

        <span class="hljs-comment">// Slot 1 stores the password</span>
        <span class="hljs-comment">// Change password to 999</span>
        vm.store(<span class="hljs-keyword">address</span>(vault), <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">1</span>)), <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">999</span>)));
        assertEq(vault.password(), <span class="hljs-number">999</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_store_mapping</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// For mappings, the slot is calculated as:</span>
        <span class="hljs-comment">// keccak256(abi.encode(key, mapping_slot))</span>

        <span class="hljs-keyword">address</span> user <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0xBEEF</span>);
        <span class="hljs-keyword">uint256</span> mappingSlot <span class="hljs-operator">=</span> <span class="hljs-number">2</span>; <span class="hljs-comment">// balances is at slot 2</span>

        <span class="hljs-comment">// Calculate the storage slot for balances[user]</span>
        <span class="hljs-keyword">bytes32</span> slot <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(user, mappingSlot));

        <span class="hljs-comment">// Set balance of user to 100 ether</span>
        vm.store(<span class="hljs-keyword">address</span>(vault), slot, <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">100</span> <span class="hljs-literal">ether</span>)));

        assertEq(vault.balances(user), <span class="hljs-number">100</span> <span class="hljs-literal">ether</span>);
    }
}
</code></pre>`

export default html
