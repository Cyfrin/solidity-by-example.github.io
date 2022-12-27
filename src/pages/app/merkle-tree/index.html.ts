// metadata
export const version = "0.8.17"
export const title = "Merkle Tree"
export const description = "Learn about Merkle tree in Solidity"
export const codes = [
  {
    fileName: "MerkleTree.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IE1lcmtsZVByb29mIHsKICAgIGZ1bmN0aW9uIHZlcmlmeSgKICAgICAgICBieXRlczMyW10gbWVtb3J5IHByb29mLAogICAgICAgIGJ5dGVzMzIgcm9vdCwKICAgICAgICBieXRlczMyIGxlYWYsCiAgICAgICAgdWludCBpbmRleAogICAgKSBwdWJsaWMgcHVyZSByZXR1cm5zIChib29sKSB7CiAgICAgICAgYnl0ZXMzMiBoYXNoID0gbGVhZjsKCiAgICAgICAgZm9yICh1aW50IGkgPSAwOyBpIDwgcHJvb2YubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgYnl0ZXMzMiBwcm9vZkVsZW1lbnQgPSBwcm9vZltpXTsKCiAgICAgICAgICAgIGlmIChpbmRleCAlIDIgPT0gMCkgewogICAgICAgICAgICAgICAgaGFzaCA9IGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKGhhc2gsIHByb29mRWxlbWVudCkpOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgaGFzaCA9IGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKHByb29mRWxlbWVudCwgaGFzaCkpOwogICAgICAgICAgICB9CgogICAgICAgICAgICBpbmRleCA9IGluZGV4IC8gMjsKICAgICAgICB9CgogICAgICAgIHJldHVybiBoYXNoID09IHJvb3Q7CiAgICB9Cn0KCmNvbnRyYWN0IFRlc3RNZXJrbGVQcm9vZiBpcyBNZXJrbGVQcm9vZiB7CiAgICBieXRlczMyW10gcHVibGljIGhhc2hlczsKCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgICBzdHJpbmdbNF0gbWVtb3J5IHRyYW5zYWN0aW9ucyA9IFsKICAgICAgICAgICAgImFsaWNlIC0+IGJvYiIsCiAgICAgICAgICAgICJib2IgLT4gZGF2ZSIsCiAgICAgICAgICAgICJjYXJvbCAtPiBhbGljZSIsCiAgICAgICAgICAgICJkYXZlIC0+IGJvYiIKICAgICAgICBdOwoKICAgICAgICBmb3IgKHVpbnQgaSA9IDA7IGkgPCB0cmFuc2FjdGlvbnMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgaGFzaGVzLnB1c2goa2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQodHJhbnNhY3Rpb25zW2ldKSkpOwogICAgICAgIH0KCiAgICAgICAgdWludCBuID0gdHJhbnNhY3Rpb25zLmxlbmd0aDsKICAgICAgICB1aW50IG9mZnNldCA9IDA7CgogICAgICAgIHdoaWxlIChuID4gMCkgewogICAgICAgICAgICBmb3IgKHVpbnQgaSA9IDA7IGkgPCBuIC0gMTsgaSArPSAyKSB7CiAgICAgICAgICAgICAgICBoYXNoZXMucHVzaCgKICAgICAgICAgICAgICAgICAgICBrZWNjYWsyNTYoCiAgICAgICAgICAgICAgICAgICAgICAgIGFiaS5lbmNvZGVQYWNrZWQoaGFzaGVzW29mZnNldCArIGldLCBoYXNoZXNbb2Zmc2V0ICsgaSArIDFdKQogICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgb2Zmc2V0ICs9IG47CiAgICAgICAgICAgIG4gPSBuIC8gMjsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0Um9vdCgpIHB1YmxpYyB2aWV3IHJldHVybnMgKGJ5dGVzMzIpIHsKICAgICAgICByZXR1cm4gaGFzaGVzW2hhc2hlcy5sZW5ndGggLSAxXTsKICAgIH0KCiAgICAvKiB2ZXJpZnkKICAgIDNyZCBsZWFmCiAgICAweGRjYTMzMjZhZDdlODEyMWJmOWNmOWMxMjMzM2U2YjIyNzFhYmU4MjNlYzllZGZlNDJmODEzYjFlNzY4ZmE1N2IKCiAgICByb290CiAgICAweGNjMDg2ZmNjMDM4MTg5YjQ2NDFkYjJjYzRmMWRlM2JiMTMyYWVmYmQ2NWQ1MTBkODE3NTkxNTUwOTM3ODE4YzcKCiAgICBpbmRleAogICAgMgoKICAgIHByb29mCiAgICAweDhkYTllMWM4MjBmOWRiZDE1ODlmZDY1ODU4NzJiYzEwNjM1ODg2MjU3MjllN2FiMDc5N2NmYzYzYTAwYmQ5NTAKICAgIDB4OTk1Nzg4ZmZjMTAzYjk4N2FkNTBmNWU1NzA3ZmQwOTQ0MTllYjEyZDk1NTJjYzQyM2JkMGNkODZhMzg2MTQzMwogICAgKi8KfQo=",
  },
]

const html = `<p>Merkle tree allows you to cryptographically prove that an element is contained</p>
<p>in a set without revealing the entire set.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MerkleProof</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">verify</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> proof,
        <span class="hljs-keyword">bytes32</span> root,
        <span class="hljs-keyword">bytes32</span> leaf,
        <span class="hljs-keyword">uint</span> index
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">bytes32</span> hash <span class="hljs-operator">=</span> leaf;

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> proof.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">bytes32</span> proofElement <span class="hljs-operator">=</span> proof[i];

            <span class="hljs-keyword">if</span> (index <span class="hljs-operator">%</span> <span class="hljs-number">2</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
                hash <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(hash, proofElement));
            } <span class="hljs-keyword">else</span> {
                hash <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(proofElement, hash));
            }

            index <span class="hljs-operator">=</span> index <span class="hljs-operator">/</span> <span class="hljs-number">2</span>;
        }

        <span class="hljs-keyword">return</span> hash <span class="hljs-operator">=</span><span class="hljs-operator">=</span> root;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestMerkleProof</span> <span class="hljs-keyword">is</span> <span class="hljs-title">MerkleProof</span> </span>{
    <span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">public</span> hashes;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">string</span>[<span class="hljs-number">4</span>] <span class="hljs-keyword">memory</span> transactions <span class="hljs-operator">=</span> [
            <span class="hljs-string">"alice -&gt; bob"</span>,
            <span class="hljs-string">"bob -&gt; dave"</span>,
            <span class="hljs-string">"carol -&gt; alice"</span>,
            <span class="hljs-string">"dave -&gt; bob"</span>
        ];

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> transactions.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            hashes.<span class="hljs-built_in">push</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(transactions[i])));
        }

        <span class="hljs-keyword">uint</span> n <span class="hljs-operator">=</span> transactions.<span class="hljs-built_in">length</span>;
        <span class="hljs-keyword">uint</span> offset <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

        <span class="hljs-keyword">while</span> (n <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> n <span class="hljs-operator">-</span> <span class="hljs-number">1</span>; i <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">2</span>) {
                hashes.<span class="hljs-built_in">push</span>(
                    <span class="hljs-built_in">keccak256</span>(
                        <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(hashes[offset <span class="hljs-operator">+</span> i], hashes[offset <span class="hljs-operator">+</span> i <span class="hljs-operator">+</span> <span class="hljs-number">1</span>])
                    )
                );
            }
            offset <span class="hljs-operator">+</span><span class="hljs-operator">=</span> n;
            n <span class="hljs-operator">=</span> n <span class="hljs-operator">/</span> <span class="hljs-number">2</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getRoot</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> hashes[hashes.<span class="hljs-built_in">length</span> <span class="hljs-operator">-</span> <span class="hljs-number">1</span>];
    }

    <span class="hljs-comment">/* verify
    3rd leaf
    0xdca3326ad7e8121bf9cf9c12333e6b2271abe823ec9edfe42f813b1e768fa57b

    root
    0xcc086fcc038189b4641db2cc4f1de3bb132aefbd65d510d817591550937818c7

    index
    2

    proof
    0x8da9e1c820f9dbd1589fd6585872bc1063588625729e7ab0797cfc63a00bd950
    0x995788ffc103b987ad50f5e5707fd094419eb12d9552cc423bd0cd86a3861433
    */</span>
}
</code></pre>
`

export default html
