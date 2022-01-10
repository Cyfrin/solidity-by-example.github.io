// metadata
export const version = "0.8.10"
export const title = "Function"
export const description = "Example of how to write functions in Solidity"

const html = `<p>There are several ways to return outputs from a function.</p>
<p>Public functions cannot accept certain data types as inputs or outputs</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

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
        x = <span class="hljs-number">1</span>;
        b = <span class="hljs-literal">true</span>;
        y = <span class="hljs-number">2</span>;
    }

    <span class="hljs-comment">// Use destructing assignment when calling another</span>
    <span class="hljs-comment">// function that returns multiple values.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">destructingAssignments</span>(<span class="hljs-params"></span>)
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
        (<span class="hljs-keyword">uint</span> i, <span class="hljs-keyword">bool</span> b, <span class="hljs-keyword">uint</span> j) = returnMany();

        <span class="hljs-comment">// Values can be left out.</span>
        (<span class="hljs-keyword">uint</span> x, , <span class="hljs-keyword">uint</span> y) = (<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>);

        <span class="hljs-keyword">return</span> (i, b, j, x, y);
    }

    <span class="hljs-comment">// Cannot use map for neither input nor output</span>

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
