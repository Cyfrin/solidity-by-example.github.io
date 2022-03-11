// metadata
export const version = "0.8.10"
export const title = "Precompute Contract Address with Create2"
export const description = "Precompute contract address with create2"

const html = `<p>Contract address can be precomputed, before the contract is deployed, using <code>create2</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Factory</span> </span>{
    <span class="hljs-comment">// Returns the address of the newly deployed contract</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deploy</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _owner,
        <span class="hljs-keyword">uint</span> _foo,
        <span class="hljs-keyword">bytes32</span> _salt
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-comment">// This syntax is a newer way to invoke create2 without assembly, you just need to pass salt</span>
        <span class="hljs-comment">// https://docs.soliditylang.org/en/latest/control-structures.html#salted-contract-creations-create2</span>
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-keyword">new</span> TestContract{<span class="hljs-built_in">salt</span>: _salt}(_owner, _foo));
    }
}

<span class="hljs-comment">// This is the older way of doing it using assembly</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FactoryAssembly</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Deployed</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> addr, <span class="hljs-keyword">uint</span> salt</span>)</span>;

    <span class="hljs-comment">// 1. Get bytecode of contract to be deployed</span>
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> _owner and _foo are arguments of the TestContract&#x27;s constructor</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBytecode</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">uint</span> _foo</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(TestContract).<span class="hljs-built_in">creationCode</span>;

        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(bytecode, <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(_owner, _foo));
    }

    <span class="hljs-comment">// 2. Compute the address of the contract to be deployed</span>
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> _salt is a random number used to create an address</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAddress</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode, <span class="hljs-keyword">uint</span> _salt</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> hash <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-keyword">bytes1</span>(<span class="hljs-number">0xff</span>), <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _salt, <span class="hljs-built_in">keccak256</span>(bytecode))
        );

        <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> cast last 20 bytes of hash to address</span>
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-keyword">uint160</span>(<span class="hljs-keyword">uint</span>(hash)));
    }

    <span class="hljs-comment">// 3. Deploy the contract</span>
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span></span>
    <span class="hljs-comment">// Check the event log Deployed which contains the address of the deployed TestContract.</span>
    <span class="hljs-comment">// The address in the log should equal the address computed from above.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deploy</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> bytecode, <span class="hljs-keyword">uint</span> _salt</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
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
            addr <span class="hljs-operator">:=</span> <span class="hljs-built_in">create2</span>(
                <span class="hljs-built_in">callvalue</span>(), <span class="hljs-comment">// wei sent with current call</span>
                <span class="hljs-comment">// Actual code starts after skipping the first 32 bytes</span>
                <span class="hljs-built_in">add</span>(bytecode, <span class="hljs-number">0x20</span>),
                <span class="hljs-built_in">mload</span>(bytecode), <span class="hljs-comment">// Load the size of code contained in the first 32 bytes</span>
                _salt <span class="hljs-comment">// Salt from function arguments</span>
            )

            <span class="hljs-keyword">if</span> <span class="hljs-built_in">iszero</span>(<span class="hljs-built_in">extcodesize</span>(addr)) {
                <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)
            }
        }

        <span class="hljs-keyword">emit</span> Deployed(addr, _salt);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestContract</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> foo;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">uint</span> _foo</span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owner <span class="hljs-operator">=</span> _owner;
        foo <span class="hljs-operator">=</span> _foo;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}
</code></pre>
`

export default html
