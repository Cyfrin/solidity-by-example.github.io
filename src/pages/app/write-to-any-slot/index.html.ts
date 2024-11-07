// metadata
export const version = "0.8.26"
export const title = "Write to Any Slot"
export const description = "Write to Any Slot"
export const cyfrinLink = ""

export const keywords = ["app", "application", "write", "any", "slot", "storage"]

export const codes = [
  {
    fileName: "Slot.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmxpYnJhcnkgU3RvcmFnZVNsb3QgewogICAgLy8gV3JhcCBhZGRyZXNzIGluIGEgc3RydWN0IHNvIHRoYXQgaXQgY2FuIGJlIHBhc3NlZCBhcm91bmQgYXMgYSBzdG9yYWdlIHBvaW50ZXIKICAgIHN0cnVjdCBBZGRyZXNzU2xvdCB7CiAgICAgICAgYWRkcmVzcyB2YWx1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRBZGRyZXNzU2xvdChieXRlczMyIHNsb3QpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoQWRkcmVzc1Nsb3Qgc3RvcmFnZSBwb2ludGVyKQogICAgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gR2V0IHRoZSBwb2ludGVyIHRvIEFkZHJlc3NTbG90IHN0b3JlZCBhdCBzbG90CiAgICAgICAgICAgIHBvaW50ZXIuc2xvdCA6PSBzbG90CiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBUZXN0U2xvdCB7CiAgICBieXRlczMyIHB1YmxpYyBjb25zdGFudCBURVNUX1NMT1QgPSBrZWNjYWsyNTYoIlRFU1RfU0xPVCIpOwoKICAgIGZ1bmN0aW9uIHdyaXRlKGFkZHJlc3MgX2FkZHIpIGV4dGVybmFsIHsKICAgICAgICBTdG9yYWdlU2xvdC5BZGRyZXNzU2xvdCBzdG9yYWdlIGRhdGEgPQogICAgICAgICAgICBTdG9yYWdlU2xvdC5nZXRBZGRyZXNzU2xvdChURVNUX1NMT1QpOwogICAgICAgIGRhdGEudmFsdWUgPSBfYWRkcjsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXQoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3MpIHsKICAgICAgICBTdG9yYWdlU2xvdC5BZGRyZXNzU2xvdCBzdG9yYWdlIGRhdGEgPQogICAgICAgICAgICBTdG9yYWdlU2xvdC5nZXRBZGRyZXNzU2xvdChURVNUX1NMT1QpOwogICAgICAgIHJldHVybiBkYXRhLnZhbHVlOwogICAgfQp9Cg==",
  },
]

const html = `<p>Solidity storage is like an array of length 2^256.
Each slot in the array can store 32 bytes.</p>
<p>Order of declaration and the type of state variables define which slots it will use.</p>
<p>However using assembly, you can write to any slot.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">StorageSlot</span> </span>{
    <span class="hljs-comment">// Wrap address in a struct so that it can be passed around as a storage pointer</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">AddressSlot</span> {
        <span class="hljs-keyword">address</span> value;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAddressSlot</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> slot</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">AddressSlot <span class="hljs-keyword">storage</span> pointer</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Get the pointer to AddressSlot stored at slot</span>
            pointer.<span class="hljs-built_in">slot</span> <span class="hljs-operator">:=</span> slot
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestSlot</span> </span>{
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> TEST_SLOT <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"TEST_SLOT"</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">write</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        StorageSlot.AddressSlot <span class="hljs-keyword">storage</span> data <span class="hljs-operator">=</span>
            StorageSlot.getAddressSlot(TEST_SLOT);
        data.<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span> _addr;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        StorageSlot.AddressSlot <span class="hljs-keyword">storage</span> data <span class="hljs-operator">=</span>
            StorageSlot.getAddressSlot(TEST_SLOT);
        <span class="hljs-keyword">return</span> data.<span class="hljs-built_in">value</span>;
    }
}
</code></pre>`

export default html
