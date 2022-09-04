// metadata
export const version = "0.8.13"
export const title = "Function"
export const description = "Example of how to write functions in Solidity"
export const codes = [
  {
    fileName: "Function.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IEZ1bmN0aW9uIHsKICAgIC8vIEZ1bmN0aW9ucyBjYW4gcmV0dXJuIG11bHRpcGxlIHZhbHVlcy4KICAgIGZ1bmN0aW9uIHJldHVybk1hbnkoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICgKICAgICAgICAgICAgdWludCwKICAgICAgICAgICAgYm9vbCwKICAgICAgICAgICAgdWludAogICAgICAgICkKICAgIHsKICAgICAgICByZXR1cm4gKDEsIHRydWUsIDIpOwogICAgfQoKICAgIC8vIFJldHVybiB2YWx1ZXMgY2FuIGJlIG5hbWVkLgogICAgZnVuY3Rpb24gbmFtZWQoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICgKICAgICAgICAgICAgdWludCB4LAogICAgICAgICAgICBib29sIGIsCiAgICAgICAgICAgIHVpbnQgeQogICAgICAgICkKICAgIHsKICAgICAgICByZXR1cm4gKDEsIHRydWUsIDIpOwogICAgfQoKICAgIC8vIFJldHVybiB2YWx1ZXMgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZWlyIG5hbWUuCiAgICAvLyBJbiB0aGlzIGNhc2UgdGhlIHJldHVybiBzdGF0ZW1lbnQgY2FuIGJlIG9taXR0ZWQuCiAgICBmdW5jdGlvbiBhc3NpZ25lZCgpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKAogICAgICAgICAgICB1aW50IHgsCiAgICAgICAgICAgIGJvb2wgYiwKICAgICAgICAgICAgdWludCB5CiAgICAgICAgKQogICAgewogICAgICAgIHggPSAxOwogICAgICAgIGIgPSB0cnVlOwogICAgICAgIHkgPSAyOwogICAgfQoKICAgIC8vIFVzZSBkZXN0cnVjdHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBjYWxsaW5nIGFub3RoZXIKICAgIC8vIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBtdWx0aXBsZSB2YWx1ZXMuCiAgICBmdW5jdGlvbiBkZXN0cnVjdHVyaW5nQXNzaWdubWVudHMoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICgKICAgICAgICAgICAgdWludCwKICAgICAgICAgICAgYm9vbCwKICAgICAgICAgICAgdWludCwKICAgICAgICAgICAgdWludCwKICAgICAgICAgICAgdWludAogICAgICAgICkKICAgIHsKICAgICAgICAodWludCBpLCBib29sIGIsIHVpbnQgaikgPSByZXR1cm5NYW55KCk7CgogICAgICAgIC8vIFZhbHVlcyBjYW4gYmUgbGVmdCBvdXQuCiAgICAgICAgKHVpbnQgeCwgLCB1aW50IHkpID0gKDQsIDUsIDYpOwoKICAgICAgICByZXR1cm4gKGksIGIsIGosIHgsIHkpOwogICAgfQoKICAgIC8vIENhbm5vdCB1c2UgbWFwIGZvciBlaXRoZXIgaW5wdXQgb3Igb3V0cHV0CgogICAgLy8gQ2FuIHVzZSBhcnJheSBmb3IgaW5wdXQKICAgIGZ1bmN0aW9uIGFycmF5SW5wdXQodWludFtdIG1lbW9yeSBfYXJyKSBwdWJsaWMge30KCiAgICAvLyBDYW4gdXNlIGFycmF5IGZvciBvdXRwdXQKICAgIHVpbnRbXSBwdWJsaWMgYXJyOwoKICAgIGZ1bmN0aW9uIGFycmF5T3V0cHV0KCkgcHVibGljIHZpZXcgcmV0dXJucyAodWludFtdIG1lbW9yeSkgewogICAgICAgIHJldHVybiBhcnI7CiAgICB9Cn0K",
  },
]

const html = `<p>There are several ways to return outputs from a function.</p>
<p>Public functions cannot accept certain data types as inputs or outputs</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Function</span> </span>{
    <span class="hljs-comment">// Functions can return multiple values.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">returnMany</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span>,
            <span class="hljs-keyword">bool</span>,
            <span class="hljs-keyword">uint</span>
        </span>)
    </span>{
        <span class="hljs-keyword">return</span> (<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-number">2</span>);
    }

    <span class="hljs-comment">// Return values can be named.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">named</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span> x,
            <span class="hljs-keyword">bool</span> b,
            <span class="hljs-keyword">uint</span> y
        </span>)
    </span>{
        <span class="hljs-keyword">return</span> (<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-number">2</span>);
    }

    <span class="hljs-comment">// Return values can be assigned to their name.</span>
    <span class="hljs-comment">// In this case the return statement can be omitted.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">assigned</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span> x,
            <span class="hljs-keyword">bool</span> b,
            <span class="hljs-keyword">uint</span> y
        </span>)
    </span>{
        x <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        b <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        y <span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
    }

    <span class="hljs-comment">// Use destructuring assignment when calling another</span>
    <span class="hljs-comment">// function that returns multiple values.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">destructuringAssignments</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint</span>,
            <span class="hljs-keyword">bool</span>,
            <span class="hljs-keyword">uint</span>,
            <span class="hljs-keyword">uint</span>,
            <span class="hljs-keyword">uint</span>
        </span>)
    </span>{
        (<span class="hljs-keyword">uint</span> i, <span class="hljs-keyword">bool</span> b, <span class="hljs-keyword">uint</span> j) <span class="hljs-operator">=</span> returnMany();

        <span class="hljs-comment">// Values can be left out.</span>
        (<span class="hljs-keyword">uint</span> x, , <span class="hljs-keyword">uint</span> y) <span class="hljs-operator">=</span> (<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>);

        <span class="hljs-keyword">return</span> (i, b, j, x, y);
    }

    <span class="hljs-comment">// Cannot use map for either input or output</span>

    <span class="hljs-comment">// Can use array for input</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">arrayInput</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> _arr</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-comment">// Can use array for output</span>
    <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">public</span> arr;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">arrayOutput</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> arr;
    }
}
</code></pre>
`

export default html
