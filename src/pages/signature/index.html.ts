// metadata
export const version = "0.8.26"
export const title = "Verifying Signature"
export const description = "An example of how to verify signatures in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/verifying-signature-code-example"

export const keywords = [
  "cryptography",
  "verify",
  "verifying",
  "signature",
  "signatures",
  "ecrecover",
]

export const codes = [
  {
    fileName: "Signature.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qIFNpZ25hdHVyZSBWZXJpZmljYXRpb24KCkhvdyB0byBTaWduIGFuZCBWZXJpZnkKIyBTaWduaW5nCjEuIENyZWF0ZSBtZXNzYWdlIHRvIHNpZ24KMi4gSGFzaCB0aGUgbWVzc2FnZQozLiBTaWduIHRoZSBoYXNoIChvZmYgY2hhaW4sIGtlZXAgeW91ciBwcml2YXRlIGtleSBzZWNyZXQpCgojIFZlcmlmeQoxLiBSZWNyZWF0ZSBoYXNoIGZyb20gdGhlIG9yaWdpbmFsIG1lc3NhZ2UKMi4gUmVjb3ZlciBzaWduZXIgZnJvbSBzaWduYXR1cmUgYW5kIGhhc2gKMy4gQ29tcGFyZSByZWNvdmVyZWQgc2lnbmVyIHRvIGNsYWltZWQgc2lnbmVyCiovCgpjb250cmFjdCBWZXJpZnlTaWduYXR1cmUgewogICAgLyogMS4gVW5sb2NrIE1ldGFNYXNrIGFjY291bnQKICAgIGV0aGVyZXVtLmVuYWJsZSgpCiAgICAqLwoKICAgIC8qIDIuIEdldCBtZXNzYWdlIGhhc2ggdG8gc2lnbgogICAgZ2V0TWVzc2FnZUhhc2goCiAgICAgICAgMHgxNDcyM0EwOUFDZmY2RDJBNjBEY2RGN2FBNEFGZjMwOEZEREMxNjBDLAogICAgICAgIDEyMywKICAgICAgICAiY29mZmVlIGFuZCBkb251dHMiLAogICAgICAgIDEKICAgICkKCiAgICBoYXNoID0gIjB4Y2YzNmFjNGY5N2RjMTBkOTFmYzJjYmIyMGQ3MThlOTRhOGNiZmUwZjgyZWFlZGM2YTRhYTM4OTQ2ZmI3OTdjZCIKICAgICovCiAgICBmdW5jdGlvbiBnZXRNZXNzYWdlSGFzaCgKICAgICAgICBhZGRyZXNzIF90bywKICAgICAgICB1aW50MjU2IF9hbW91bnQsCiAgICAgICAgc3RyaW5nIG1lbW9yeSBfbWVzc2FnZSwKICAgICAgICB1aW50MjU2IF9ub25jZQogICAgKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlczMyKSB7CiAgICAgICAgcmV0dXJuIGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKF90bywgX2Ftb3VudCwgX21lc3NhZ2UsIF9ub25jZSkpOwogICAgfQoKICAgIC8qIDMuIFNpZ24gbWVzc2FnZSBoYXNoCiAgICAjIHVzaW5nIGJyb3dzZXIKICAgIGFjY291bnQgPSAiY29weSBwYXN0ZSBhY2NvdW50IG9mIHNpZ25lciBoZXJlIgogICAgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogInBlcnNvbmFsX3NpZ24iLCBwYXJhbXM6IFthY2NvdW50LCBoYXNoXX0pLnRoZW4oY29uc29sZS5sb2cpCgogICAgIyB1c2luZyB3ZWIzCiAgICB3ZWIzLnBlcnNvbmFsLnNpZ24oaGFzaCwgd2ViMy5ldGguZGVmYXVsdEFjY291bnQsIGNvbnNvbGUubG9nKQoKICAgIFNpZ25hdHVyZSB3aWxsIGJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGFjY291bnRzCiAgICAweDk5M2RhYjNkZDkxZjVjNmRjMjhlMTc0MzliZTQ3NTQ3OGY1NjM1YzkyYTU2ZTE3ZTgyMzQ5ZDNmYjJmMTY2MTk2ZjQ2NmMwYjRlMGMxNDZmMjg1MjA0ZjBkY2IxM2U1YWU2N2JjMzNmNGI4ODhlYzMyZGZlMGEwNjNlOGYzZjc4MWIKICAgICovCiAgICBmdW5jdGlvbiBnZXRFdGhTaWduZWRNZXNzYWdlSGFzaChieXRlczMyIF9tZXNzYWdlSGFzaCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMikKICAgIHsKICAgICAgICAvKgogICAgICAgIFNpZ25hdHVyZSBpcyBwcm9kdWNlZCBieSBzaWduaW5nIGEga2VjY2FrMjU2IGhhc2ggd2l0aCB0aGUgZm9sbG93aW5nIGZvcm1hdDoKICAgICAgICAiXHgxOUV0aGVyZXVtIFNpZ25lZCBNZXNzYWdlXG4iICsgbGVuKG1zZykgKyBtc2cKICAgICAgICAqLwogICAgICAgIHJldHVybiBrZWNjYWsyNTYoCiAgICAgICAgICAgIGFiaS5lbmNvZGVQYWNrZWQoIlx4MTlFdGhlcmV1bSBTaWduZWQgTWVzc2FnZTpcbjMyIiwgX21lc3NhZ2VIYXNoKQogICAgICAgICk7CiAgICB9CgogICAgLyogNC4gVmVyaWZ5IHNpZ25hdHVyZQogICAgc2lnbmVyID0gMHhCMjczMjE2QzA1QThjMEQ0RjBhNERkMGQ3QmFlMUQyRWZGRTYzNmRkCiAgICB0byA9IDB4MTQ3MjNBMDlBQ2ZmNkQyQTYwRGNkRjdhQTRBRmYzMDhGRERDMTYwQwogICAgYW1vdW50ID0gMTIzCiAgICBtZXNzYWdlID0gImNvZmZlZSBhbmQgZG9udXRzIgogICAgbm9uY2UgPSAxCiAgICBzaWduYXR1cmUgPQogICAgICAgIDB4OTkzZGFiM2RkOTFmNWM2ZGMyOGUxNzQzOWJlNDc1NDc4ZjU2MzVjOTJhNTZlMTdlODIzNDlkM2ZiMmYxNjYxOTZmNDY2YzBiNGUwYzE0NmYyODUyMDRmMGRjYjEzZTVhZTY3YmMzM2Y0Yjg4OGVjMzJkZmUwYTA2M2U4ZjNmNzgxYgogICAgKi8KICAgIGZ1bmN0aW9uIHZlcmlmeSgKICAgICAgICBhZGRyZXNzIF9zaWduZXIsCiAgICAgICAgYWRkcmVzcyBfdG8sCiAgICAgICAgdWludDI1NiBfYW1vdW50LAogICAgICAgIHN0cmluZyBtZW1vcnkgX21lc3NhZ2UsCiAgICAgICAgdWludDI1NiBfbm9uY2UsCiAgICAgICAgYnl0ZXMgbWVtb3J5IHNpZ25hdHVyZQogICAgKSBwdWJsaWMgcHVyZSByZXR1cm5zIChib29sKSB7CiAgICAgICAgYnl0ZXMzMiBtZXNzYWdlSGFzaCA9IGdldE1lc3NhZ2VIYXNoKF90bywgX2Ftb3VudCwgX21lc3NhZ2UsIF9ub25jZSk7CiAgICAgICAgYnl0ZXMzMiBldGhTaWduZWRNZXNzYWdlSGFzaCA9IGdldEV0aFNpZ25lZE1lc3NhZ2VIYXNoKG1lc3NhZ2VIYXNoKTsKCiAgICAgICAgcmV0dXJuIHJlY292ZXJTaWduZXIoZXRoU2lnbmVkTWVzc2FnZUhhc2gsIHNpZ25hdHVyZSkgPT0gX3NpZ25lcjsKICAgIH0KCiAgICBmdW5jdGlvbiByZWNvdmVyU2lnbmVyKAogICAgICAgIGJ5dGVzMzIgX2V0aFNpZ25lZE1lc3NhZ2VIYXNoLAogICAgICAgIGJ5dGVzIG1lbW9yeSBfc2lnbmF0dXJlCiAgICApIHB1YmxpYyBwdXJlIHJldHVybnMgKGFkZHJlc3MpIHsKICAgICAgICAoYnl0ZXMzMiByLCBieXRlczMyIHMsIHVpbnQ4IHYpID0gc3BsaXRTaWduYXR1cmUoX3NpZ25hdHVyZSk7CgogICAgICAgIHJldHVybiBlY3JlY292ZXIoX2V0aFNpZ25lZE1lc3NhZ2VIYXNoLCB2LCByLCBzKTsKICAgIH0KCiAgICBmdW5jdGlvbiBzcGxpdFNpZ25hdHVyZShieXRlcyBtZW1vcnkgc2lnKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyIHIsIGJ5dGVzMzIgcywgdWludDggdikKICAgIHsKICAgICAgICByZXF1aXJlKHNpZy5sZW5ndGggPT0gNjUsICJpbnZhbGlkIHNpZ25hdHVyZSBsZW5ndGgiKTsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvKgogICAgICAgICAgICBGaXJzdCAzMiBieXRlcyBzdG9yZXMgdGhlIGxlbmd0aCBvZiB0aGUgc2lnbmF0dXJlCgogICAgICAgICAgICBhZGQoc2lnLCAzMikgPSBwb2ludGVyIG9mIHNpZyArIDMyCiAgICAgICAgICAgIGVmZmVjdGl2ZWx5LCBza2lwcyBmaXJzdCAzMiBieXRlcyBvZiBzaWduYXR1cmUKCiAgICAgICAgICAgIG1sb2FkKHApIGxvYWRzIG5leHQgMzIgYnl0ZXMgc3RhcnRpbmcgYXQgdGhlIG1lbW9yeSBhZGRyZXNzIHAgaW50byBtZW1vcnkKICAgICAgICAgICAgKi8KCiAgICAgICAgICAgIC8vIGZpcnN0IDMyIGJ5dGVzLCBhZnRlciB0aGUgbGVuZ3RoIHByZWZpeAogICAgICAgICAgICByIDo9IG1sb2FkKGFkZChzaWcsIDMyKSkKICAgICAgICAgICAgLy8gc2Vjb25kIDMyIGJ5dGVzCiAgICAgICAgICAgIHMgOj0gbWxvYWQoYWRkKHNpZywgNjQpKQogICAgICAgICAgICAvLyBmaW5hbCBieXRlIChmaXJzdCBieXRlIG9mIHRoZSBuZXh0IDMyIGJ5dGVzKQogICAgICAgICAgICB2IDo9IGJ5dGUoMCwgbWxvYWQoYWRkKHNpZywgOTYpKSkKICAgICAgICB9CgogICAgICAgIC8vIGltcGxpY2l0bHkgcmV0dXJuIChyLCBzLCB2KQogICAgfQp9Cg==",
  },
]

const html = `<p>Messages can be signed off chain and then verified on chain using a smart contract.</p>
<p><a href="https://github.com/t4sk/hello-erc20-permit/blob/main/test/verify-signature.js">Example using ethers.js</a></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

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
        <span class="hljs-keyword">uint256</span> _amount,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _message,
        <span class="hljs-keyword">uint256</span> _nonce
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
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(
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
        <span class="hljs-keyword">uint256</span> _amount,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _message,
        <span class="hljs-keyword">uint256</span> _nonce,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> signature
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">bytes32</span> messageHash <span class="hljs-operator">=</span> getMessageHash(_to, _amount, _message, _nonce);
        <span class="hljs-keyword">bytes32</span> ethSignedMessageHash <span class="hljs-operator">=</span> getEthSignedMessageHash(messageHash);

        <span class="hljs-keyword">return</span> recoverSigner(ethSignedMessageHash, signature) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _signer;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">recoverSigner</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span> _ethSignedMessageHash,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _signature
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        (<span class="hljs-keyword">bytes32</span> r, <span class="hljs-keyword">bytes32</span> s, <span class="hljs-keyword">uint8</span> v) <span class="hljs-operator">=</span> splitSignature(_signature);

        <span class="hljs-keyword">return</span> <span class="hljs-built_in">ecrecover</span>(_ethSignedMessageHash, v, r, s);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">splitSignature</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> sig</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> r, <span class="hljs-keyword">bytes32</span> s, <span class="hljs-keyword">uint8</span> v</span>)
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
</code></pre>`

export default html
