// metadata
export const version = "0.8.13"
export const title = "Verifying Signature"
export const description = "An example of how to verify signatures in Solidity"

const html = `<p>Messages can be signed off chain and then verified on chain using a smart contract.</p>
<p><a href="https://github.com/t4sk/hello-erc20-permit/blob/main/test/verify-signature.js">Example using ethers.js</a></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-comment">/* Signature Verification

How to Sign and Verify
# Signing
1. Create message to sign
2. Hash the message
3. Sign the hash (off chain, keep your private key secret)

# Verify
1. Recreate hash from the original message
2. Recover signer from signature and hash
3. Compare recovered signer to claimed signer
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">VerifySignature</span> </span>{
    <span class="hljs-comment">/* 1. Unlock MetaMask account
    ethereum.enable()
    */</span>

    <span class="hljs-comment">/* 2. Get message hash to sign
    getMessageHash(
        0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C,
        123,
        "coffee and donuts",
        1
    )

    hash = "0xcf36ac4f97dc10d91fc2cbb20d718e94a8cbfe0f82eaedc6a4aa38946fb797cd"
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMessageHash</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _to,
        <span class="hljs-keyword">uint</span> _amount,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _message,
        <span class="hljs-keyword">uint</span> _nonce
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_to, _amount, _message, _nonce));
    }

    <span class="hljs-comment">/* 3. Sign message hash
    # using browser
    account = "copy paste account of signer here"
    ethereum.request({ method: "personal_sign", params: [account, hash]}).then(console.log)

    # using web3
    web3.personal.sign(hash, web3.eth.defaultAccount, console.log)

    Signature will be different for different accounts
    0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getEthSignedMessageHash</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _messageHash</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-comment">/*
        Signature is produced by signing a keccak256 hash with the following format:
        "\\x19Ethereum Signed Message\\n" + len(msg) + msg
        */</span>
        <span class="hljs-keyword">return</span>
            <span class="hljs-built_in">keccak256</span>(
                <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-string">"\\x19Ethereum Signed Message:\\n32"</span>, _messageHash)
            );
    }

    <span class="hljs-comment">/* 4. Verify signature
    signer = 0xB273216C05A8c0D4F0a4Dd0d7Bae1D2EfFE636dd
    to = 0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C
    amount = 123
    message = "coffee and donuts"
    nonce = 1
    signature =
        0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">verify</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _signer,
        <span class="hljs-keyword">address</span> _to,
        <span class="hljs-keyword">uint</span> _amount,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _message,
        <span class="hljs-keyword">uint</span> _nonce,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> signature
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">bytes32</span> messageHash <span class="hljs-operator">=</span> getMessageHash(_to, _amount, _message, _nonce);
        <span class="hljs-keyword">bytes32</span> ethSignedMessageHash <span class="hljs-operator">=</span> getEthSignedMessageHash(messageHash);

        <span class="hljs-keyword">return</span> recoverSigner(ethSignedMessageHash, signature) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _signer;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">recoverSigner</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _ethSignedMessageHash, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _signature</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)
    </span>{
        (<span class="hljs-keyword">bytes32</span> r, <span class="hljs-keyword">bytes32</span> s, <span class="hljs-keyword">uint8</span> v) <span class="hljs-operator">=</span> splitSignature(_signature);

        <span class="hljs-keyword">return</span> <span class="hljs-built_in">ecrecover</span>(_ethSignedMessageHash, v, r, s);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">splitSignature</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> sig</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">bytes32</span> r,
            <span class="hljs-keyword">bytes32</span> s,
            <span class="hljs-keyword">uint8</span> v
        </span>)
    </span>{
        <span class="hljs-built_in">require</span>(sig.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">65</span>, <span class="hljs-string">"invalid signature length"</span>);

        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">/*
            First 32 bytes stores the length of the signature

            add(sig, 32) = pointer of sig + 32
            effectively, skips first 32 bytes of signature

            mload(p) loads next 32 bytes starting at the memory address p into memory
            */</span>

            <span class="hljs-comment">// first 32 bytes, after the length prefix</span>
            r <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(sig, <span class="hljs-number">32</span>))
            <span class="hljs-comment">// second 32 bytes</span>
            s <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(sig, <span class="hljs-number">64</span>))
            <span class="hljs-comment">// final byte (first byte of the next 32 bytes)</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">byte</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(sig, <span class="hljs-number">96</span>)))
        }

        <span class="hljs-comment">// implicitly return (r, s, v)</span>
    }
}
</code></pre>
`

export default html
