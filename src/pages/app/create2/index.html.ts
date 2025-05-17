// metadata
export const version = "0.8.26"
export const title = "Precompute Contract Address with Create2"
export const description = "Precompute contract address with create2"
export const cyfrinLink = "https://www.cyfrin.io/glossary/precompute-contract-address-with-create2-solidity-code-example"

export const keywords = [
    "app",
    "application",
    "create2",
    "precompute",
    "contract",
    "address",
]

export const codes = [
    {
        fileName: "Create2.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEZhY3RvcnkgewogICAgLy8gUmV0dXJucyB0aGUgYWRkcmVzcyBvZiB0aGUgbmV3bHkgZGVwbG95ZWQgY29udHJhY3QKICAgIGZ1bmN0aW9uIGRlcGxveShhZGRyZXNzIF9vd25lciwgdWludDI1NiBfZm9vLCBieXRlczMyIF9zYWx0KQogICAgICAgIHB1YmxpYwogICAgICAgIHBheWFibGUKICAgICAgICByZXR1cm5zIChhZGRyZXNzKQogICAgewogICAgICAgIC8vIFRoaXMgc3ludGF4IGlzIGEgbmV3ZXIgd2F5IHRvIGludm9rZSBjcmVhdGUyIHdpdGhvdXQgYXNzZW1ibHksIHlvdSBqdXN0IG5lZWQgdG8gcGFzcyBzYWx0CiAgICAgICAgLy8gaHR0cHM6Ly9kb2NzLnNvbGlkaXR5bGFuZy5vcmcvZW4vbGF0ZXN0L2NvbnRyb2wtc3RydWN0dXJlcy5odG1sI3NhbHRlZC1jb250cmFjdC1jcmVhdGlvbnMtY3JlYXRlMgogICAgICAgIHJldHVybiBhZGRyZXNzKG5ldyBUZXN0Q29udHJhY3R7c2FsdDogX3NhbHR9KF9vd25lciwgX2ZvbykpOwogICAgfQp9CgovLyBUaGlzIGlzIHRoZSBvbGRlciB3YXkgb2YgZG9pbmcgaXQgdXNpbmcgYXNzZW1ibHkKY29udHJhY3QgRmFjdG9yeUFzc2VtYmx5IHsKICAgIGV2ZW50IERlcGxveWVkKGFkZHJlc3MgYWRkciwgdWludDI1NiBzYWx0KTsKCiAgICAvLyAxLiBHZXQgYnl0ZWNvZGUgb2YgY29udHJhY3QgdG8gYmUgZGVwbG95ZWQKICAgIC8vIE5PVEU6IF9vd25lciBhbmQgX2ZvbyBhcmUgYXJndW1lbnRzIG9mIHRoZSBUZXN0Q29udHJhY3QncyBjb25zdHJ1Y3RvcgogICAgZnVuY3Rpb24gZ2V0Qnl0ZWNvZGUoYWRkcmVzcyBfb3duZXIsIHVpbnQyNTYgX2ZvbykKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KQogICAgewogICAgICAgIGJ5dGVzIG1lbW9yeSBieXRlY29kZSA9IHR5cGUoVGVzdENvbnRyYWN0KS5jcmVhdGlvbkNvZGU7CgogICAgICAgIHJldHVybiBhYmkuZW5jb2RlUGFja2VkKGJ5dGVjb2RlLCBhYmkuZW5jb2RlKF9vd25lciwgX2ZvbykpOwogICAgfQoKICAgIC8vIDIuIENvbXB1dGUgdGhlIGFkZHJlc3Mgb2YgdGhlIGNvbnRyYWN0IHRvIGJlIGRlcGxveWVkCiAgICAvLyBOT1RFOiBfc2FsdCBpcyBhIHJhbmRvbSBudW1iZXIgdXNlZCB0byBjcmVhdGUgYW4gYWRkcmVzcwogICAgZnVuY3Rpb24gZ2V0QWRkcmVzcyhieXRlcyBtZW1vcnkgYnl0ZWNvZGUsIHVpbnQyNTYgX3NhbHQpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKGFkZHJlc3MpCiAgICB7CiAgICAgICAgYnl0ZXMzMiBoYXNoID0ga2VjY2FrMjU2KAogICAgICAgICAgICBhYmkuZW5jb2RlUGFja2VkKAogICAgICAgICAgICAgICAgYnl0ZXMxKDB4ZmYpLCBhZGRyZXNzKHRoaXMpLCBfc2FsdCwga2VjY2FrMjU2KGJ5dGVjb2RlKQogICAgICAgICAgICApCiAgICAgICAgKTsKCiAgICAgICAgLy8gTk9URTogY2FzdCBsYXN0IDIwIGJ5dGVzIG9mIGhhc2ggdG8gYWRkcmVzcwogICAgICAgIHJldHVybiBhZGRyZXNzKHVpbnQxNjAodWludDI1NihoYXNoKSkpOwogICAgfQoKICAgIC8vIDMuIERlcGxveSB0aGUgY29udHJhY3QKICAgIC8vIE5PVEU6CiAgICAvLyBDaGVjayB0aGUgZXZlbnQgbG9nIERlcGxveWVkIHdoaWNoIGNvbnRhaW5zIHRoZSBhZGRyZXNzIG9mIHRoZSBkZXBsb3llZCBUZXN0Q29udHJhY3QuCiAgICAvLyBUaGUgYWRkcmVzcyBpbiB0aGUgbG9nIHNob3VsZCBlcXVhbCB0aGUgYWRkcmVzcyBjb21wdXRlZCBmcm9tIGFib3ZlLgogICAgZnVuY3Rpb24gZGVwbG95KGJ5dGVzIG1lbW9yeSBieXRlY29kZSwgdWludDI1NiBfc2FsdCkgcHVibGljIHBheWFibGUgewogICAgICAgIGFkZHJlc3MgYWRkcjsKCiAgICAgICAgLyoKICAgICAgICBOT1RFOiBIb3cgdG8gY2FsbCBjcmVhdGUyCgogICAgICAgIGNyZWF0ZTIodiwgcCwgbiwgcykKICAgICAgICBjcmVhdGUgbmV3IGNvbnRyYWN0IHdpdGggY29kZSBhdCBtZW1vcnkgcCB0byBwICsgbgogICAgICAgIGFuZCBzZW5kIHYgd2VpCiAgICAgICAgYW5kIHJldHVybiB0aGUgbmV3IGFkZHJlc3MKICAgICAgICB3aGVyZSBuZXcgYWRkcmVzcyA9IGZpcnN0IDIwIGJ5dGVzIG9mIGtlY2NhazI1NigweGZmICsgYWRkcmVzcyh0aGlzKSArIHMgKyBrZWNjYWsyNTYobWVtW3DigKYocCtuKSkpCiAgICAgICAgICAgICAgcyA9IGJpZy1lbmRpYW4gMjU2LWJpdCB2YWx1ZQogICAgICAgICovCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBhZGRyIDo9CiAgICAgICAgICAgICAgICBjcmVhdGUyKAogICAgICAgICAgICAgICAgICAgIGNhbGx2YWx1ZSgpLCAvLyB3ZWkgc2VudCB3aXRoIGN1cnJlbnQgY2FsbAogICAgICAgICAgICAgICAgICAgIC8vIEFjdHVhbCBjb2RlIHN0YXJ0cyBhZnRlciBza2lwcGluZyB0aGUgZmlyc3QgMzIgYnl0ZXMKICAgICAgICAgICAgICAgICAgICBhZGQoYnl0ZWNvZGUsIDB4MjApLAogICAgICAgICAgICAgICAgICAgIG1sb2FkKGJ5dGVjb2RlKSwgLy8gTG9hZCB0aGUgc2l6ZSBvZiBjb2RlIGNvbnRhaW5lZCBpbiB0aGUgZmlyc3QgMzIgYnl0ZXMKICAgICAgICAgICAgICAgICAgICBfc2FsdCAvLyBTYWx0IGZyb20gZnVuY3Rpb24gYXJndW1lbnRzCiAgICAgICAgICAgICAgICApCgogICAgICAgICAgICBpZiBpc3plcm8oZXh0Y29kZXNpemUoYWRkcikpIHsgcmV2ZXJ0KDAsIDApIH0KICAgICAgICB9CgogICAgICAgIGVtaXQgRGVwbG95ZWQoYWRkciwgX3NhbHQpOwogICAgfQp9Cgpjb250cmFjdCBUZXN0Q29udHJhY3QgewogICAgYWRkcmVzcyBwdWJsaWMgb3duZXI7CiAgICB1aW50MjU2IHB1YmxpYyBmb287CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfb3duZXIsIHVpbnQyNTYgX2ZvbykgcGF5YWJsZSB7CiAgICAgICAgb3duZXIgPSBfb3duZXI7CiAgICAgICAgZm9vID0gX2ZvbzsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRCYWxhbmNlKCkgcHVibGljIHZpZXcgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiBhZGRyZXNzKHRoaXMpLmJhbGFuY2U7CiAgICB9Cn0K",
    },
]

const html = `<p>Contract address can be precomputed, before the contract is deployed, using <code>create2</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Factory</span> </span>{
    <span class="hljs-comment">// Returns the address of the newly deployed contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deploy</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">uint256</span> _foo, <span class="hljs-keyword">bytes32</span> _salt</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)
    </span>{
        <span class="hljs-comment">// This syntax is a newer way to invoke create2 without assembly, you just need to pass salt</span>
        <span class="hljs-comment">// https://docs.soliditylang.org/en/latest/control-structures.html#salted-contract-creations-create2</span>
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-keyword">new</span> TestContract{<span class="hljs-built_in">salt</span>: _salt}(_owner, _foo));
    }
}

<span class="hljs-comment">// This is the older way of doing it using assembly</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FactoryAssembly</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Deployed</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> addr, <span class="hljs-keyword">uint256</span> salt</span>)</span>;

    <span class="hljs-comment">// 1. Get bytecode of contract to be deployed</span>
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> _owner and _foo are arguments of the TestContract&#x27;s constructor</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBytecode</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">uint256</span> _foo</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(TestContract).<span class="hljs-built_in">creationCode</span>;

        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(bytecode, <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(_owner, _foo));
    }

    <span class="hljs-comment">// 2. Compute the address of the contract to be deployed</span>
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> _salt is a random number used to create an address</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAddress</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode, <span class="hljs-keyword">uint256</span> _salt</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> hash <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(
                <span class="hljs-keyword">bytes1</span>(<span class="hljs-number">0xff</span>), <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _salt, <span class="hljs-built_in">keccak256</span>(bytecode)
            )
        );

        <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> cast last 20 bytes of hash to address</span>
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-keyword">uint160</span>(<span class="hljs-keyword">uint256</span>(hash)));
    }

    <span class="hljs-comment">// 3. Deploy the contract</span>
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span></span>
    <span class="hljs-comment">// Check the event log Deployed which contains the address of the deployed TestContract.</span>
    <span class="hljs-comment">// The address in the log should equal the address computed from above.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deploy</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode, <span class="hljs-keyword">uint256</span> _salt</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-keyword">address</span> addr;

        <span class="hljs-comment">/*
        <span class="hljs-doctag">NOTE:</span> How to call create2

        create2(v, p, n, s)
        create new contract with code at memory p to p + n
        and send v wei
        and return the new address
        where new address = first 20 bytes of keccak256(0xff + address(this) + s + keccak256(mem[p…(p+n)))
              s = big-endian 256-bit value
        */</span>
        <span class="hljs-keyword">assembly</span> {
            addr <span class="hljs-operator">:=</span>
                <span class="hljs-built_in">create2</span>(
                    <span class="hljs-built_in">callvalue</span>(), <span class="hljs-comment">// wei sent with current call</span>
                    <span class="hljs-comment">// Actual code starts after skipping the first 32 bytes</span>
                    <span class="hljs-built_in">add</span>(bytecode, <span class="hljs-number">0x20</span>),
                    <span class="hljs-built_in">mload</span>(bytecode), <span class="hljs-comment">// Load the size of code contained in the first 32 bytes</span>
                    _salt <span class="hljs-comment">// Salt from function arguments</span>
                )

            <span class="hljs-keyword">if</span> <span class="hljs-built_in">iszero</span>(<span class="hljs-built_in">extcodesize</span>(addr)) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }
        }

        <span class="hljs-keyword">emit</span> Deployed(addr, _salt);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestContract</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> foo;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">uint256</span> _foo</span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owner <span class="hljs-operator">=</span> _owner;
        foo <span class="hljs-operator">=</span> _foo;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}
</code></pre>`

export default html
