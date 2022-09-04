// metadata
export const version = "0.8.13"
export const title = "Structs"
export const description = "An example of how to use structs in Solidity"
export const codes = [
  {
    fileName: "StructDeclaration.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKLy8gVGhpcyBpcyBzYXZlZCAnU3RydWN0RGVjbGFyYXRpb24uc29sJwoKc3RydWN0IFRvZG8gewogICAgc3RyaW5nIHRleHQ7CiAgICBib29sIGNvbXBsZXRlZDsKfQo=",
  },
  {
    fileName: "StructImport.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmltcG9ydCAiLi9TdHJ1Y3REZWNsYXJhdGlvbi5zb2wiOwoKY29udHJhY3QgVG9kb3MgewogICAgLy8gQW4gYXJyYXkgb2YgJ1RvZG8nIHN0cnVjdHMKICAgIFRvZG9bXSBwdWJsaWMgdG9kb3M7Cn0K",
  },
  {
    fileName: "Structs.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IFRvZG9zIHsKICAgIHN0cnVjdCBUb2RvIHsKICAgICAgICBzdHJpbmcgdGV4dDsKICAgICAgICBib29sIGNvbXBsZXRlZDsKICAgIH0KCiAgICAvLyBBbiBhcnJheSBvZiAnVG9kbycgc3RydWN0cwogICAgVG9kb1tdIHB1YmxpYyB0b2RvczsKCiAgICBmdW5jdGlvbiBjcmVhdGUoc3RyaW5nIGNhbGxkYXRhIF90ZXh0KSBwdWJsaWMgewogICAgICAgIC8vIDMgd2F5cyB0byBpbml0aWFsaXplIGEgc3RydWN0CiAgICAgICAgLy8gLSBjYWxsaW5nIGl0IGxpa2UgYSBmdW5jdGlvbgogICAgICAgIHRvZG9zLnB1c2goVG9kbyhfdGV4dCwgZmFsc2UpKTsKCiAgICAgICAgLy8ga2V5IHZhbHVlIG1hcHBpbmcKICAgICAgICB0b2Rvcy5wdXNoKFRvZG8oe3RleHQ6IF90ZXh0LCBjb21wbGV0ZWQ6IGZhbHNlfSkpOwoKICAgICAgICAvLyBpbml0aWFsaXplIGFuIGVtcHR5IHN0cnVjdCBhbmQgdGhlbiB1cGRhdGUgaXQKICAgICAgICBUb2RvIG1lbW9yeSB0b2RvOwogICAgICAgIHRvZG8udGV4dCA9IF90ZXh0OwogICAgICAgIC8vIHRvZG8uY29tcGxldGVkIGluaXRpYWxpemVkIHRvIGZhbHNlCgogICAgICAgIHRvZG9zLnB1c2godG9kbyk7CiAgICB9CgogICAgLy8gU29saWRpdHkgYXV0b21hdGljYWxseSBjcmVhdGVkIGEgZ2V0dGVyIGZvciAndG9kb3MnIHNvCiAgICAvLyB5b3UgZG9uJ3QgYWN0dWFsbHkgbmVlZCB0aGlzIGZ1bmN0aW9uLgogICAgZnVuY3Rpb24gZ2V0KHVpbnQgX2luZGV4KSBwdWJsaWMgdmlldyByZXR1cm5zIChzdHJpbmcgbWVtb3J5IHRleHQsIGJvb2wgY29tcGxldGVkKSB7CiAgICAgICAgVG9kbyBzdG9yYWdlIHRvZG8gPSB0b2Rvc1tfaW5kZXhdOwogICAgICAgIHJldHVybiAodG9kby50ZXh0LCB0b2RvLmNvbXBsZXRlZCk7CiAgICB9CgogICAgLy8gdXBkYXRlIHRleHQKICAgIGZ1bmN0aW9uIHVwZGF0ZVRleHQodWludCBfaW5kZXgsIHN0cmluZyBjYWxsZGF0YSBfdGV4dCkgcHVibGljIHsKICAgICAgICBUb2RvIHN0b3JhZ2UgdG9kbyA9IHRvZG9zW19pbmRleF07CiAgICAgICAgdG9kby50ZXh0ID0gX3RleHQ7CiAgICB9CgogICAgLy8gdXBkYXRlIGNvbXBsZXRlZAogICAgZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGVkKHVpbnQgX2luZGV4KSBwdWJsaWMgewogICAgICAgIFRvZG8gc3RvcmFnZSB0b2RvID0gdG9kb3NbX2luZGV4XTsKICAgICAgICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDsKICAgIH0KfQo=",
  },
]

const html = `<p>You can define your own type by creating a <code>struct</code>.</p>
<p>They are useful for grouping together related data.</p>
<p>Structs can be declared outside of a contract and imported in another contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Todos</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Todo</span> {
        <span class="hljs-keyword">string</span> text;
        <span class="hljs-keyword">bool</span> completed;
    }

    <span class="hljs-comment">// An array of &#x27;Todo&#x27; structs</span>
    Todo[] <span class="hljs-keyword">public</span> todos;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">calldata</span> _text</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// 3 ways to initialize a struct</span>
        <span class="hljs-comment">// - calling it like a function</span>
        todos.<span class="hljs-built_in">push</span>(Todo(_text, <span class="hljs-literal">false</span>));

        <span class="hljs-comment">// key value mapping</span>
        todos.<span class="hljs-built_in">push</span>(Todo({text: _text, completed: <span class="hljs-literal">false</span>}));

        <span class="hljs-comment">// initialize an empty struct and then update it</span>
        Todo <span class="hljs-keyword">memory</span> todo;
        todo.text <span class="hljs-operator">=</span> _text;
        <span class="hljs-comment">// todo.completed initialized to false</span>

        todos.<span class="hljs-built_in">push</span>(todo);
    }

    <span class="hljs-comment">// Solidity automatically created a getter for &#x27;todos&#x27; so</span>
    <span class="hljs-comment">// you don&#x27;t actually need this function.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _index</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> text, <span class="hljs-keyword">bool</span> completed</span>) </span>{
        Todo <span class="hljs-keyword">storage</span> todo <span class="hljs-operator">=</span> todos[_index];
        <span class="hljs-keyword">return</span> (todo.text, todo.completed);
    }

    <span class="hljs-comment">// update text</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">updateText</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _index, <span class="hljs-keyword">string</span> <span class="hljs-keyword">calldata</span> _text</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        Todo <span class="hljs-keyword">storage</span> todo <span class="hljs-operator">=</span> todos[_index];
        todo.text <span class="hljs-operator">=</span> _text;
    }

    <span class="hljs-comment">// update completed</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">toggleCompleted</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _index</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        Todo <span class="hljs-keyword">storage</span> todo <span class="hljs-operator">=</span> todos[_index];
        todo.completed <span class="hljs-operator">=</span> <span class="hljs-operator">!</span>todo.completed;
    }
}
</code></pre>
<h3 id="declaring-and-importing-struct">Declaring and importing Struct</h3>
<p>File that the struct is declared in</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>
<span class="hljs-comment">// This is saved &#x27;StructDeclaration.sol&#x27;</span>

<span class="hljs-keyword">struct</span> <span class="hljs-title">Todo</span> {
    <span class="hljs-keyword">string</span> text;
    <span class="hljs-keyword">bool</span> completed;
}
</code></pre>
<p>File that imports the struct above</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./StructDeclaration.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Todos</span> </span>{
    <span class="hljs-comment">// An array of &#x27;Todo&#x27; structs</span>
    Todo[] <span class="hljs-keyword">public</span> todos;
}
</code></pre>
`

export default html
