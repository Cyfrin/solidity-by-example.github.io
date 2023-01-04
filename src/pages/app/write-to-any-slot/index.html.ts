// metadata
export const version = "0.8.17"
export const title = "Write to Any Slot"
export const description = "Write to Any Slot"
export const codes = [
  {
    fileName: "Slot.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmxpYnJhcnkgU3RvcmFnZVNsb3QgewogICAgLy8gV3JhcCBhZGRyZXNzIGluIGEgc3RydWN0IHNvIHRoYXQgaXQgY2FuIGJlIHBhc3NlZCBhcm91bmQgYXMgYSBzdG9yYWdlIHBvaW50ZXIKICAgIHN0cnVjdCBBZGRyZXNzU2xvdCB7CiAgICAgICAgYWRkcmVzcyB2YWx1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRBZGRyZXNzU2xvdCgKICAgICAgICBieXRlczMyIHNsb3QKICAgICkgaW50ZXJuYWwgcHVyZSByZXR1cm5zIChBZGRyZXNzU2xvdCBzdG9yYWdlIHBvaW50ZXIpIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIEdldCB0aGUgcG9pbnRlciB0byBBZGRyZXNzU2xvdCBzdG9yZWQgYXQgc2xvdAogICAgICAgICAgICBwb2ludGVyLnNsb3QgOj0gc2xvdAogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgVGVzdFNsb3QgewogICAgYnl0ZXMzMiBwdWJsaWMgY29uc3RhbnQgVEVTVF9TTE9UID0ga2VjY2FrMjU2KCJURVNUX1NMT1QiKTsKCiAgICBmdW5jdGlvbiB3cml0ZShhZGRyZXNzIF9hZGRyKSBleHRlcm5hbCB7CiAgICAgICAgU3RvcmFnZVNsb3QuQWRkcmVzc1Nsb3Qgc3RvcmFnZSBkYXRhID0gU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3QoVEVTVF9TTE9UKTsKICAgICAgICBkYXRhLnZhbHVlID0gX2FkZHI7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgU3RvcmFnZVNsb3QuQWRkcmVzc1Nsb3Qgc3RvcmFnZSBkYXRhID0gU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3QoVEVTVF9TTE9UKTsKICAgICAgICByZXR1cm4gZGF0YS52YWx1ZTsKICAgIH0KfQo=",
  },
]

const html = `<p>Solidity storage is like an array of length 2^256.
Each slot in the array can store 32 bytes.</p>
<p>Order of declaration and the type of state variables define which slots it will use.</p>
<p>However using assembly, you can write to any slot.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">StorageSlot</span> </span>{
    <span class="hljs-comment">// Wrap address in a struct so that it can be passed around as a storage pointer</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">AddressSlot</span> {
        <span class="hljs-keyword">address</span> value;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAddressSlot</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span> slot
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">AddressSlot <span class="hljs-keyword">storage</span> pointer</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Get the pointer to AddressSlot stored at slot</span>
            pointer.<span class="hljs-built_in">slot</span> <span class="hljs-operator">:=</span> slot
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestSlot</span> </span>{
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> TEST_SLOT <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"TEST_SLOT"</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">write</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        StorageSlot.AddressSlot <span class="hljs-keyword">storage</span> data <span class="hljs-operator">=</span> StorageSlot.getAddressSlot(TEST_SLOT);
        data.<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span> _addr;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        StorageSlot.AddressSlot <span class="hljs-keyword">storage</span> data <span class="hljs-operator">=</span> StorageSlot.getAddressSlot(TEST_SLOT);
        <span class="hljs-keyword">return</span> data.<span class="hljs-built_in">value</span>;
    }
}
</code></pre>
`

export default html
