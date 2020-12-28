// metadata
export const version = "0.6.10"
export const title = "Merkle Tree"
export const description = "Learn about Merkle tree in Solidity"

const html = `<p>Merkle tree allows you to cryptographically prove that an element is contained</p>
<p>in a set without revealing the entire set.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MerkleProof</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">verify</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> proof, <span class="hljs-keyword">bytes32</span> root, <span class="hljs-keyword">bytes32</span> leaf, <span class="hljs-keyword">uint</span> index
    </span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> hash = leaf;

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; proof.<span class="hljs-built_in">length</span>; i++) {
            <span class="hljs-keyword">bytes32</span> proofElement = proof[i];

            <span class="hljs-keyword">if</span> (index % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>) {
                hash = <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(hash, proofElement));
            } <span class="hljs-keyword">else</span> {
                hash = <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(proofElement, hash));
            }

            index = index / <span class="hljs-number">2</span>;
        }

        <span class="hljs-keyword">return</span> hash == root;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestMerkleProof</span> <span class="hljs-keyword">is</span> <span class="hljs-title">MerkleProof</span> </span>{
    <span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">public</span> hashes;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">string</span>[<span class="hljs-number">4</span>] <span class="hljs-keyword">memory</span> transactions = [
            <span class="hljs-string">"alice -&gt; bob"</span>,
            <span class="hljs-string">"bob -&gt; dave"</span>,
            <span class="hljs-string">"carol -&gt; alice"</span>,
            <span class="hljs-string">"dave -&gt; bob"</span>
        ];

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; transactions.<span class="hljs-built_in">length</span>; i++) {
            hashes.<span class="hljs-built_in">push</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(transactions[i])));
        }

        <span class="hljs-keyword">uint</span> n = transactions.<span class="hljs-built_in">length</span>;
        <span class="hljs-keyword">uint</span> offset = <span class="hljs-number">0</span>;

        <span class="hljs-keyword">while</span> (n &gt; <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i = <span class="hljs-number">0</span>; i &lt; n - <span class="hljs-number">1</span>; i+=<span class="hljs-number">2</span>) {
                hashes.<span class="hljs-built_in">push</span>(
                    <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(
                        hashes[offset + i],
                        hashes[offset + i + <span class="hljs-number">1</span>]
                    ))
                );
            }
            offset += n;
            n = n / <span class="hljs-number">2</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getRoot</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> hashes[hashes.<span class="hljs-built_in">length</span> - <span class="hljs-number">1</span>];
    }

    <span class="hljs-comment">/* verify
    3rd leaf
    0x1bbd78ae6188015c4a6772eb1526292b5985fc3272ead4c65002240fb9ae5d13

    root
    0x074b43252ffb4a469154df5fb7fe4ecce30953ba8b7095fe1e006185f017ad10

    index
    2

    proof
    0x948f90037b4ea787c14540d9feb1034d4a5bc251b9b5f8e57d81e4b470027af8
    0x63ac1b92046d474f84be3aa0ee04ffe5600862228c81803cce07ac40484aee43
    */</span>
}
</code></pre>
`

export default html
