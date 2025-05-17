// metadata
export const version = "0.8.26"
export const title = "Simple Bytecode Contract"
export const description = "Simple example of contract written in bytecode"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/simple-bytecode-contract-solidity-code-example"

export const keywords = ["app", "application", "simple", "bytecode", "contract"]

export const codes = [
  {
    fileName: "Factory.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEZhY3RvcnkgewogICAgZXZlbnQgTG9nKGFkZHJlc3MgYWRkcik7CgogICAgLy8gRGVwbG95cyBhIGNvbnRyYWN0IHRoYXQgYWx3YXlzIHJldHVybnMgMjU1CiAgICBmdW5jdGlvbiBkZXBsb3koKSBleHRlcm5hbCB7CiAgICAgICAgYnl0ZXMgbWVtb3J5IGJ5dGVjb2RlID0gaGV4IjY5NjBmZjYwMDA1MjYwMjA2MDAwZjM2MDAwNTI2MDBhNjAxNmYzIjsKICAgICAgICBhZGRyZXNzIGFkZHI7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBjcmVhdGUodmFsdWUsIG9mZnNldCwgc2l6ZSkKICAgICAgICAgICAgYWRkciA6PSBjcmVhdGUoMCwgYWRkKGJ5dGVjb2RlLCAweDIwKSwgMHgxMykKICAgICAgICB9CiAgICAgICAgcmVxdWlyZShhZGRyICE9IGFkZHJlc3MoMCkpOwoKICAgICAgICBlbWl0IExvZyhhZGRyKTsKICAgIH0KfQoKaW50ZXJmYWNlIElDb250cmFjdCB7CiAgICBmdW5jdGlvbiBnZXRWYWx1ZSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7Cn0KCi8vIGh0dHBzOi8vd3d3LmV2bS5jb2Rlcy9wbGF5Z3JvdW5kCi8qClJ1biB0aW1lIGNvZGUgLSByZXR1cm4gMjU1CjYwZmY2MDAwNTI2MDIwNjAwMGYzCgovLyBTdG9yZSAyNTUgdG8gbWVtb3J5Cm1zdG9yZShwLCB2KSAtIHN0b3JlIHYgYXQgbWVtb3J5IHAgdG8gcCArIDMyCgpQVVNIMSAweGZmClBVU0gxIDAKTVNUT1JFCgovLyBSZXR1cm4gMzIgYnl0ZXMgZnJvbSBtZW1vcnkKcmV0dXJuKHAsIHMpIC0gZW5kIGV4ZWN1dGlvbiBhbmQgcmV0dXJuIGRhdGEgZnJvbSBtZW1vcnkgcCB0byBwICsgcwoKUFVTSDEgMHgyMApQVVNIMSAwClJFVFVSTgoKQ3JlYXRpb24gY29kZSAtIHJldHVybiBydW50aW1lIGNvZGUKNjk2MGZmNjAwMDUyNjAyMDYwMDBmMzYwMDA1MjYwMGE2MDE2ZjMKCi8vIFN0b3JlIHJ1biB0aW1lIGNvZGUgdG8gbWVtb3J5ClBVU0gxMCAwWDYwZmY2MDAwNTI2MDIwNjAwMGYzClBVU0gxIDAKTVNUT1JFCgovLyBSZXR1cm4gMTAgYnl0ZXMgZnJvbSBtZW1vcnkgc3RhcnRpbmcgYXQgb2Zmc2V0IDIyClBVU0gxIDB4MGEKUFVTSDEgMHgxNgpSRVRVUk4KKi8K",
  },
]

const html = `<p>Simple example of contract written in bytecode</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> addr</span>)</span>;

    <span class="hljs-comment">// Deploys a contract that always returns 255</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deploy</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode <span class="hljs-operator">=</span> <span class="hljs-string">hex"6960ff60005260206000f3600052600a6016f3"</span>;
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getValue</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
}

<span class="hljs-comment">// https://www.evm.codes/playground</span>
<span class="hljs-comment">/*
Run time code - return 255
60ff60005260206000f3

// Store 255 to memory
mstore(p, v) - store v at memory p to p + 32

PUSH1 0xff
PUSH1 0
MSTORE

// Return 32 bytes from memory
return(p, s) - end execution and return data from memory p to p + s

PUSH1 0x20
PUSH1 0
RETURN

Creation code - return runtime code
6960ff60005260206000f3600052600a6016f3

// Store run time code to memory
PUSH10 0X60ff60005260206000f3
PUSH1 0
MSTORE

// Return 10 bytes from memory starting at offset 22
PUSH1 0x0a
PUSH1 0x16
RETURN
*/</span>
</code></pre>`

export default html
