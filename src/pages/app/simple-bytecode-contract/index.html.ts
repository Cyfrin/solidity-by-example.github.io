// metadata
export const version = "0.8.24"
export const title = "Simple Bytecode Contract"
export const description = "Simple example of contract written in bytecode"

export const keywords = [
    "app",
    "application",
    "simple",
    "bytecode",
    "contract",
]

export const codes = [
    {
        fileName: "Factory.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmNvbnRyYWN0IEZhY3RvcnkgewogICAgZXZlbnQgTG9nKGFkZHJlc3MgYWRkcik7CgogICAgLy8gRGVwbG95cyBhIGNvbnRyYWN0IHRoYXQgYWx3YXlzIHJldHVybnMgNDIKICAgIGZ1bmN0aW9uIGRlcGxveSgpIGV4dGVybmFsIHsKICAgICAgICBieXRlcyBtZW1vcnkgYnl0ZWNvZGUgPSBoZXgiNjk2MDJhNjAwMDUyNjAyMDYwMDBmMzYwMDA1MjYwMGE2MDE2ZjMiOwogICAgICAgIGFkZHJlc3MgYWRkcjsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIGNyZWF0ZSh2YWx1ZSwgb2Zmc2V0LCBzaXplKQogICAgICAgICAgICBhZGRyIDo9IGNyZWF0ZSgwLCBhZGQoYnl0ZWNvZGUsIDB4MjApLCAweDEzKQogICAgICAgIH0KICAgICAgICByZXF1aXJlKGFkZHIgIT0gYWRkcmVzcygwKSk7CgogICAgICAgIGVtaXQgTG9nKGFkZHIpOwogICAgfQp9CgppbnRlcmZhY2UgSUNvbnRyYWN0IHsKICAgIGZ1bmN0aW9uIGdldE1lYW5pbmdPZkxpZmUoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwp9CgovLyBodHRwczovL3d3dy5ldm0uY29kZXMvcGxheWdyb3VuZAovKgpSdW4gdGltZSBjb2RlIC0gcmV0dXJuIDQyCjYwMmE2MDAwNTI2MDIwNjAwMGYzCgovLyBTdG9yZSA0MiB0byBtZW1vcnkKbXN0b3JlKHAsIHYpIC0gc3RvcmUgdiBhdCBtZW1vcnkgcCB0byBwICsgMzIKClBVU0gxIDB4MmEKUFVTSDEgMApNU1RPUkUKCi8vIFJldHVybiAzMiBieXRlcyBmcm9tIG1lbW9yeQpyZXR1cm4ocCwgcykgLSBlbmQgZXhlY3V0aW9uIGFuZCByZXR1cm4gZGF0YSBmcm9tIG1lbW9yeSBwIHRvIHAgKyBzCgpQVVNIMSAweDIwClBVU0gxIDAKUkVUVVJOCgpDcmVhdGlvbiBjb2RlIC0gcmV0dXJuIHJ1bnRpbWUgY29kZQo2OTYwMmE2MDAwNTI2MDIwNjAwMGYzNjAwMDUyNjAwYTYwMTZmMwoKLy8gU3RvcmUgcnVuIHRpbWUgY29kZSB0byBtZW1vcnkKUFVTSDEwIDBYNjAyYTYwMDA1MjYwMjA2MDAwZjMKUFVTSDEgMApNU1RPUkUKCi8vIFJldHVybiAxMCBieXRlcyBmcm9tIG1lbW9yeSBzdGFydGluZyBhdCBvZmZzZXQgMjIKUFVTSDEgMHgwYQpQVVNIMSAweDE2ClJFVFVSTgoqLwo=",
    },
]

const html = `<p>Simple example of contract written in bytecode</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> addr</span>)</span>;

    <span class="hljs-comment">// Deploys a contract that always returns 42</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deploy</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode <span class="hljs-operator">=</span> <span class="hljs-string">hex"69602a60005260206000f3600052600a6016f3"</span>;
        <span class="hljs-keyword">address</span> addr;
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// create(value, offset, size)</span>
            addr <span class="hljs-operator">:=</span> <span class="hljs-built_in">create</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">add</span>(bytecode, <span class="hljs-number">0x20</span>), <span class="hljs-number">0x13</span>)
        }
        <span class="hljs-built_in">require</span>(addr <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>));

        <span class="hljs-keyword">emit</span> Log(addr);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IContract</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMeaningOfLife</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
}

<span class="hljs-comment">// https://www.evm.codes/playground</span>
<span class="hljs-comment">/*
Run time code - return 42
602a60005260206000f3

// Store 42 to memory
mstore(p, v) - store v at memory p to p + 32

PUSH1 0x2a
PUSH1 0
MSTORE

// Return 32 bytes from memory
return(p, s) - end execution and return data from memory p to p + s

PUSH1 0x20
PUSH1 0
RETURN

Creation code - return runtime code
69602a60005260206000f3600052600a6016f3

// Store run time code to memory
PUSH10 0X602a60005260206000f3
PUSH1 0
MSTORE

// Return 10 bytes from memory starting at offset 22
PUSH1 0x0a
PUSH1 0x16
RETURN
*/</span>
</code></pre>`

export default html
