// metadata
export const version = "0.7.6"
export const title = "Constructor"
export const description = "Learn how to initialize smart contracts in Solidity using a constructor"

const html = `<p>A <code>constructor</code> is an optional function that is executed upon contract creation.</p>
<p>Here are examples of how to pass arguments to <code>constructors</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.7.6;</span>

<span class="hljs-comment">// Base contract X</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">X</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name</span>) </span>{
        name = _name;
    }
}

<span class="hljs-comment">// Base contract Y</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Y</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> text;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text</span>) </span>{
        text = _text;
    }
}

<span class="hljs-comment">// There are 2 ways to initialize parent contract with parameters.</span>

<span class="hljs-comment">// Pass the parameters here in the inheritance list.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>(<span class="hljs-params"><span class="hljs-string">"Input to X"</span></span>), <span class="hljs-title">Y</span>(<span class="hljs-params"><span class="hljs-string">"Input to Y"</span></span>) </span>{
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>, <span class="hljs-title">Y</span> </span>{
    <span class="hljs-comment">// Pass the parameters here in the constructor,</span>
    <span class="hljs-comment">// similar to function modifiers.</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _text</span>) <span class="hljs-title">X</span>(<span class="hljs-params">_name</span>) <span class="hljs-title">Y</span>(<span class="hljs-params">_text</span>) </span>{
    }
}

<span class="hljs-comment">// Parent constructors are always called in the order of inheritance</span>
<span class="hljs-comment">// regardless of the order of parent contracts listed in the</span>
<span class="hljs-comment">// constructor of the child contract.</span>

<span class="hljs-comment">// Order of constructors called:</span>
<span class="hljs-comment">// 1. Y</span>
<span class="hljs-comment">// 2. X</span>
<span class="hljs-comment">// 3. E</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">E</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>, <span class="hljs-title">Y</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title">X</span>(<span class="hljs-params"><span class="hljs-string">"X was called"</span></span>) <span class="hljs-title">Y</span>(<span class="hljs-params"><span class="hljs-string">"Y was called"</span></span>) </span>{
    }
}

<span class="hljs-comment">// Order of constructors called:</span>
<span class="hljs-comment">// 1. Y</span>
<span class="hljs-comment">// 2. X</span>
<span class="hljs-comment">// 3. E</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">E</span> <span class="hljs-keyword">is</span> <span class="hljs-title">X</span>, <span class="hljs-title">Y</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title">Y</span>(<span class="hljs-params"><span class="hljs-string">"Y was called"</span></span>) <span class="hljs-title">X</span>(<span class="hljs-params"><span class="hljs-string">"X was called"</span></span>) </span>{
    }
}
</code></pre>
`

export default html
