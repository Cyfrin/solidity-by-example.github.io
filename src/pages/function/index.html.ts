// metadata
export const version = "0.8.20"
export const title = "Function"
export const description = "Example of how to write functions in Solidity"

export const keywords = ["function", "functions"]

export const codes = [
    {
        fileName: "Function.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IEZ1bmN0aW9uIHsKICAgIC8vIEZ1bmN0aW9ucyBjYW4gcmV0dXJuIG11bHRpcGxlIHZhbHVlcy4KICAgIGZ1bmN0aW9uIHJldHVybk1hbnkoKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50LCBib29sLCB1aW50KSB7CiAgICAgICAgcmV0dXJuICgxLCB0cnVlLCAyKTsKICAgIH0KCiAgICAvLyBSZXR1cm4gdmFsdWVzIGNhbiBiZSBuYW1lZC4KICAgIGZ1bmN0aW9uIG5hbWVkKCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludCB4LCBib29sIGIsIHVpbnQgeSkgewogICAgICAgIHJldHVybiAoMSwgdHJ1ZSwgMik7CiAgICB9CgogICAgLy8gUmV0dXJuIHZhbHVlcyBjYW4gYmUgYXNzaWduZWQgdG8gdGhlaXIgbmFtZS4KICAgIC8vIEluIHRoaXMgY2FzZSB0aGUgcmV0dXJuIHN0YXRlbWVudCBjYW4gYmUgb21pdHRlZC4KICAgIGZ1bmN0aW9uIGFzc2lnbmVkKCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludCB4LCBib29sIGIsIHVpbnQgeSkgewogICAgICAgIHggPSAxOwogICAgICAgIGIgPSB0cnVlOwogICAgICAgIHkgPSAyOwogICAgfQoKICAgIC8vIFVzZSBkZXN0cnVjdHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBjYWxsaW5nIGFub3RoZXIKICAgIC8vIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBtdWx0aXBsZSB2YWx1ZXMuCiAgICBmdW5jdGlvbiBkZXN0cnVjdHVyaW5nQXNzaWdubWVudHMoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50LCBib29sLCB1aW50LCB1aW50LCB1aW50KQogICAgewogICAgICAgICh1aW50IGksIGJvb2wgYiwgdWludCBqKSA9IHJldHVybk1hbnkoKTsKCiAgICAgICAgLy8gVmFsdWVzIGNhbiBiZSBsZWZ0IG91dC4KICAgICAgICAodWludCB4LCAsIHVpbnQgeSkgPSAoNCwgNSwgNik7CgogICAgICAgIHJldHVybiAoaSwgYiwgaiwgeCwgeSk7CiAgICB9CgogICAgLy8gQ2Fubm90IHVzZSBtYXAgZm9yIGVpdGhlciBpbnB1dCBvciBvdXRwdXQKCiAgICAvLyBDYW4gdXNlIGFycmF5IGZvciBpbnB1dAogICAgZnVuY3Rpb24gYXJyYXlJbnB1dCh1aW50W10gbWVtb3J5IF9hcnIpIHB1YmxpYyB7fQoKICAgIC8vIENhbiB1c2UgYXJyYXkgZm9yIG91dHB1dAogICAgdWludFtdIHB1YmxpYyBhcnI7CgogICAgZnVuY3Rpb24gYXJyYXlPdXRwdXQoKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50W10gbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGFycjsKICAgIH0KfQoKLy8gQ2FsbCBmdW5jdGlvbiB3aXRoIGtleS12YWx1ZSBpbnB1dHMKY29udHJhY3QgWFlaIHsKICAgIGZ1bmN0aW9uIHNvbWVGdW5jV2l0aE1hbnlJbnB1dHMoCiAgICAgICAgdWludCB4LAogICAgICAgIHVpbnQgeSwKICAgICAgICB1aW50IHosCiAgICAgICAgYWRkcmVzcyBhLAogICAgICAgIGJvb2wgYiwKICAgICAgICBzdHJpbmcgbWVtb3J5IGMKICAgICkgcHVibGljIHB1cmUgcmV0dXJucyAodWludCkge30KCiAgICBmdW5jdGlvbiBjYWxsRnVuYygpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAodWludCkgewogICAgICAgIHJldHVybiBzb21lRnVuY1dpdGhNYW55SW5wdXRzKDEsIDIsIDMsIGFkZHJlc3MoMCksIHRydWUsICJjIik7CiAgICB9CgogICAgZnVuY3Rpb24gY2FsbEZ1bmNXaXRoS2V5VmFsdWUoKSBleHRlcm5hbCBwdXJlIHJldHVybnMgKHVpbnQpIHsKICAgICAgICByZXR1cm4KICAgICAgICAgICAgc29tZUZ1bmNXaXRoTWFueUlucHV0cyh7YTogYWRkcmVzcygwKSwgYjogdHJ1ZSwgYzogImMiLCB4OiAxLCB5OiAyLCB6OiAzfSk7CiAgICB9Cn0K",
    },
]

const html = `<p>There are several ways to return outputs from a function.</p>
<p>Public functions cannot accept certain data types as inputs or outputs</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Function</span> </span>{
    <span class="hljs-comment">// Functions can return multiple values.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">returnMany</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>, <span class="hljs-keyword">bool</span>, <span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> (<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-number">2</span>);
    }

    <span class="hljs-comment">// Return values can be named.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">named</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">bool</span> b, <span class="hljs-keyword">uint</span> y</span>) </span>{
        <span class="hljs-keyword">return</span> (<span class="hljs-number">1</span>, <span class="hljs-literal">true</span>, <span class="hljs-number">2</span>);
    }

    <span class="hljs-comment">// Return values can be assigned to their name.</span>
    <span class="hljs-comment">// In this case the return statement can be omitted.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">assigned</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">bool</span> b, <span class="hljs-keyword">uint</span> y</span>) </span>{
        x <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        b <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        y <span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
    }

    <span class="hljs-comment">// Use destructuring assignment when calling another</span>
    <span class="hljs-comment">// function that returns multiple values.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">destructuringAssignments</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>, <span class="hljs-keyword">bool</span>, <span class="hljs-keyword">uint</span>, <span class="hljs-keyword">uint</span>, <span class="hljs-keyword">uint</span></span>)
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

<span class="hljs-comment">// Call function with key-value inputs</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">XYZ</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">someFuncWithManyInputs</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> x,
        <span class="hljs-keyword">uint</span> y,
        <span class="hljs-keyword">uint</span> z,
        <span class="hljs-keyword">address</span> a,
        <span class="hljs-keyword">bool</span> b,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> c
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callFunc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> someFuncWithManyInputs(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-literal">true</span>, <span class="hljs-string">"c"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callFuncWithKeyValue</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span>
            someFuncWithManyInputs({a: <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), b: <span class="hljs-literal">true</span>, c: <span class="hljs-string">"c"</span>, x: <span class="hljs-number">1</span>, y: <span class="hljs-number">2</span>, z: <span class="hljs-number">3</span>});
    }
}
</code></pre>`

export default html
