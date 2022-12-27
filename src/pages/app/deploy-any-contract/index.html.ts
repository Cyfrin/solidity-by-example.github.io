// metadata
export const version = "0.8.17"
export const title = "Deploy Any Contract"
export const description = "Deploy Any Contract"
export const codes = [
    {
        fileName: "Proxy.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IFByb3h5IHsKICAgIGV2ZW50IERlcGxveShhZGRyZXNzKTsKCiAgICByZWNlaXZlKCkgZXh0ZXJuYWwgcGF5YWJsZSB7fQoKICAgIGZ1bmN0aW9uIGRlcGxveShieXRlcyBtZW1vcnkgX2NvZGUpIGV4dGVybmFsIHBheWFibGUgcmV0dXJucyAoYWRkcmVzcyBhZGRyKSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBjcmVhdGUodiwgcCwgbikKICAgICAgICAgICAgLy8gdiA9IGFtb3VudCBvZiBFVEggdG8gc2VuZAogICAgICAgICAgICAvLyBwID0gcG9pbnRlciBpbiBtZW1vcnkgdG8gc3RhcnQgb2YgY29kZQogICAgICAgICAgICAvLyBuID0gc2l6ZSBvZiBjb2RlCiAgICAgICAgICAgIGFkZHIgOj0gY3JlYXRlKGNhbGx2YWx1ZSgpLCBhZGQoX2NvZGUsIDB4MjApLCBtbG9hZChfY29kZSkpCiAgICAgICAgfQogICAgICAgIC8vIHJldHVybiBhZGRyZXNzIDAgb24gZXJyb3IKICAgICAgICByZXF1aXJlKGFkZHIgIT0gYWRkcmVzcygwKSwgImRlcGxveSBmYWlsZWQiKTsKCiAgICAgICAgZW1pdCBEZXBsb3koYWRkcik7CiAgICB9CgogICAgZnVuY3Rpb24gZXhlY3V0ZShhZGRyZXNzIF90YXJnZXQsIGJ5dGVzIG1lbW9yeSBfZGF0YSkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgKGJvb2wgc3VjY2VzcywgKSA9IF90YXJnZXQuY2FsbHt2YWx1ZTogbXNnLnZhbHVlfShfZGF0YSk7CiAgICAgICAgcmVxdWlyZShzdWNjZXNzLCAiZmFpbGVkIik7CiAgICB9Cn0KCmNvbnRyYWN0IFRlc3RDb250cmFjdDEgewogICAgYWRkcmVzcyBwdWJsaWMgb3duZXIgPSBtc2cuc2VuZGVyOwoKICAgIGZ1bmN0aW9uIHNldE93bmVyKGFkZHJlc3MgX293bmVyKSBwdWJsaWMgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBvd25lciwgIm5vdCBvd25lciIpOwogICAgICAgIG93bmVyID0gX293bmVyOwogICAgfQp9Cgpjb250cmFjdCBUZXN0Q29udHJhY3QyIHsKICAgIGFkZHJlc3MgcHVibGljIG93bmVyID0gbXNnLnNlbmRlcjsKICAgIHVpbnQgcHVibGljIHZhbHVlID0gbXNnLnZhbHVlOwogICAgdWludCBwdWJsaWMgeDsKICAgIHVpbnQgcHVibGljIHk7CgogICAgY29uc3RydWN0b3IodWludCBfeCwgdWludCBfeSkgcGF5YWJsZSB7CiAgICAgICAgeCA9IF94OwogICAgICAgIHkgPSBfeTsKICAgIH0KfQoKY29udHJhY3QgSGVscGVyIHsKICAgIGZ1bmN0aW9uIGdldEJ5dGVjb2RlMSgpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgYnl0ZXMgbWVtb3J5IGJ5dGVjb2RlID0gdHlwZShUZXN0Q29udHJhY3QxKS5jcmVhdGlvbkNvZGU7CiAgICAgICAgcmV0dXJuIGJ5dGVjb2RlOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldEJ5dGVjb2RlMih1aW50IF94LCB1aW50IF95KSBleHRlcm5hbCBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIGJ5dGVzIG1lbW9yeSBieXRlY29kZSA9IHR5cGUoVGVzdENvbnRyYWN0MikuY3JlYXRpb25Db2RlOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlUGFja2VkKGJ5dGVjb2RlLCBhYmkuZW5jb2RlKF94LCBfeSkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldENhbGxkYXRhKGFkZHJlc3MgX293bmVyKSBleHRlcm5hbCBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIHJldHVybiBhYmkuZW5jb2RlV2l0aFNpZ25hdHVyZSgic2V0T3duZXIoYWRkcmVzcykiLCBfb3duZXIpOwogICAgfQp9Cg==",
    },
]

const html = `<p>Deploy any contract by calling <code>Proxy.deploy(bytes memory _code)</code></p>
<p>For this example, you can get the contract bytecodes by calling <code>Helper.getBytecode1</code> and <code>Helper.getBytecode2</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Proxy</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Deploy</span>(<span class="hljs-params"><span class="hljs-keyword">address</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deploy</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _code</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> addr</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// create(v, p, n)</span>
            <span class="hljs-comment">// v = amount of ETH to send</span>
            <span class="hljs-comment">// p = pointer in memory to start of code</span>
            <span class="hljs-comment">// n = size of code</span>
            addr <span class="hljs-operator">:=</span> <span class="hljs-built_in">create</span>(<span class="hljs-built_in">callvalue</span>(), <span class="hljs-built_in">add</span>(_code, <span class="hljs-number">0x20</span>), <span class="hljs-built_in">mload</span>(_code))
        }
        <span class="hljs-comment">// return address 0 on error</span>
        <span class="hljs-built_in">require</span>(addr <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"deploy failed"</span>);

        <span class="hljs-keyword">emit</span> Deploy(addr);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">execute</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _target, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _data</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        (<span class="hljs-keyword">bool</span> success, ) <span class="hljs-operator">=</span> _target.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(_data);
        <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"failed"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestContract1</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setOwner</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"not owner"</span>);
        owner <span class="hljs-operator">=</span> _owner;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestContract2</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> value <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> x;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> y;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _x, <span class="hljs-keyword">uint</span> _y</span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        x <span class="hljs-operator">=</span> _x;
        y <span class="hljs-operator">=</span> _y;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Helper</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBytecode1</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(TestContract1).<span class="hljs-built_in">creationCode</span>;
        <span class="hljs-keyword">return</span> bytecode;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBytecode2</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _x, <span class="hljs-keyword">uint</span> _y</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(TestContract2).<span class="hljs-built_in">creationCode</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(bytecode, <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(_x, _y));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getCalldata</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"setOwner(address)"</span>, _owner);
    }
}
</code></pre>
`

export default html
