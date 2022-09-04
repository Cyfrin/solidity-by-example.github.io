// metadata
export const version = "0.8.13"
export const title = "Interface"
export const description = "An example of interface in Solidity"
export const codes = [
  {
    fileName: "Interface.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IENvdW50ZXIgewogICAgdWludCBwdWJsaWMgY291bnQ7CgogICAgZnVuY3Rpb24gaW5jcmVtZW50KCkgZXh0ZXJuYWwgewogICAgICAgIGNvdW50ICs9IDE7CiAgICB9Cn0KCmludGVyZmFjZSBJQ291bnRlciB7CiAgICBmdW5jdGlvbiBjb3VudCgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gaW5jcmVtZW50KCkgZXh0ZXJuYWw7Cn0KCmNvbnRyYWN0IE15Q29udHJhY3QgewogICAgZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihhZGRyZXNzIF9jb3VudGVyKSBleHRlcm5hbCB7CiAgICAgICAgSUNvdW50ZXIoX2NvdW50ZXIpLmluY3JlbWVudCgpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldENvdW50KGFkZHJlc3MgX2NvdW50ZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiBJQ291bnRlcihfY291bnRlcikuY291bnQoKTsKICAgIH0KfQoKLy8gVW5pc3dhcCBleGFtcGxlCmludGVyZmFjZSBVbmlzd2FwVjJGYWN0b3J5IHsKICAgIGZ1bmN0aW9uIGdldFBhaXIoYWRkcmVzcyB0b2tlbkEsIGFkZHJlc3MgdG9rZW5CKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKGFkZHJlc3MgcGFpcik7Cn0KCmludGVyZmFjZSBVbmlzd2FwVjJQYWlyIHsKICAgIGZ1bmN0aW9uIGdldFJlc2VydmVzKCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICgKICAgICAgICAgICAgdWludDExMiByZXNlcnZlMCwKICAgICAgICAgICAgdWludDExMiByZXNlcnZlMSwKICAgICAgICAgICAgdWludDMyIGJsb2NrVGltZXN0YW1wTGFzdAogICAgICAgICk7Cn0KCmNvbnRyYWN0IFVuaXN3YXBFeGFtcGxlIHsKICAgIGFkZHJlc3MgcHJpdmF0ZSBmYWN0b3J5ID0gMHg1QzY5YkVlNzAxZWY4MTRhMkI2YTNFREQ0QjE2NTJDQjljYzVhQTZmOwogICAgYWRkcmVzcyBwcml2YXRlIGRhaSA9IDB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRjsKICAgIGFkZHJlc3MgcHJpdmF0ZSB3ZXRoID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwoKICAgIGZ1bmN0aW9uIGdldFRva2VuUmVzZXJ2ZXMoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQsIHVpbnQpIHsKICAgICAgICBhZGRyZXNzIHBhaXIgPSBVbmlzd2FwVjJGYWN0b3J5KGZhY3RvcnkpLmdldFBhaXIoZGFpLCB3ZXRoKTsKICAgICAgICAodWludCByZXNlcnZlMCwgdWludCByZXNlcnZlMSwgKSA9IFVuaXN3YXBWMlBhaXIocGFpcikuZ2V0UmVzZXJ2ZXMoKTsKICAgICAgICByZXR1cm4gKHJlc2VydmUwLCByZXNlcnZlMSk7CiAgICB9Cn0K",
  },
]

const html = `<p>You can interact with other contracts by declaring an <code>Interface</code>.</p>
<p>Interface</p>
<ul>
<li>cannot have any functions implemented</li>
<li>can inherit from other interfaces</li>
<li>all declared functions must be external</li>
<li>cannot declare a constructor</li>
<li>cannot declare state variables</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increment</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">ICounter</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">count</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increment</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MyContract</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">incrementCounter</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _counter</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        ICounter(_counter).increment();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getCount</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _counter</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> ICounter(_counter).count();
    }
}

<span class="hljs-comment">// Uniswap example</span>
<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">UniswapV2Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPair</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> tokenA, <span class="hljs-keyword">address</span> tokenB</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> pair</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">UniswapV2Pair</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getReserves</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint112</span> reserve0,
            <span class="hljs-keyword">uint112</span> reserve1,
            <span class="hljs-keyword">uint32</span> blockTimestampLast
        </span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapExample</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> factory <span class="hljs-operator">=</span> <span class="hljs-number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> dai <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTokenReserves</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>, <span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">address</span> pair <span class="hljs-operator">=</span> UniswapV2Factory(factory).getPair(dai, weth);
        (<span class="hljs-keyword">uint</span> reserve0, <span class="hljs-keyword">uint</span> reserve1, ) <span class="hljs-operator">=</span> UniswapV2Pair(pair).getReserves();
        <span class="hljs-keyword">return</span> (reserve0, reserve1);
    }
}
</code></pre>
`

export default html
