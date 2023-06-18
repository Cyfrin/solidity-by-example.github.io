// metadata
export const version = "0.8.17"
export const title = "Enum"
export const description = "Example of enums in Solidity"

export const keywords = ["data", "variable", "variables", "enum", "import", "imports"]

export const codes = [
  {
    fileName: "Enum.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IEVudW0gewogICAgLy8gRW51bSByZXByZXNlbnRpbmcgc2hpcHBpbmcgc3RhdHVzCiAgICBlbnVtIFN0YXR1cyB7CiAgICAgICAgUGVuZGluZywKICAgICAgICBTaGlwcGVkLAogICAgICAgIEFjY2VwdGVkLAogICAgICAgIFJlamVjdGVkLAogICAgICAgIENhbmNlbGVkCiAgICB9CgogICAgLy8gRGVmYXVsdCB2YWx1ZSBpcyB0aGUgZmlyc3QgZWxlbWVudCBsaXN0ZWQgaW4KICAgIC8vIGRlZmluaXRpb24gb2YgdGhlIHR5cGUsIGluIHRoaXMgY2FzZSAiUGVuZGluZyIKICAgIFN0YXR1cyBwdWJsaWMgc3RhdHVzOwoKICAgIC8vIFJldHVybnMgdWludAogICAgLy8gUGVuZGluZyAgLSAwCiAgICAvLyBTaGlwcGVkICAtIDEKICAgIC8vIEFjY2VwdGVkIC0gMgogICAgLy8gUmVqZWN0ZWQgLSAzCiAgICAvLyBDYW5jZWxlZCAtIDQKICAgIGZ1bmN0aW9uIGdldCgpIHB1YmxpYyB2aWV3IHJldHVybnMgKFN0YXR1cykgewogICAgICAgIHJldHVybiBzdGF0dXM7CiAgICB9CgogICAgLy8gVXBkYXRlIHN0YXR1cyBieSBwYXNzaW5nIHVpbnQgaW50byBpbnB1dAogICAgZnVuY3Rpb24gc2V0KFN0YXR1cyBfc3RhdHVzKSBwdWJsaWMgewogICAgICAgIHN0YXR1cyA9IF9zdGF0dXM7CiAgICB9CgogICAgLy8gWW91IGNhbiB1cGRhdGUgdG8gYSBzcGVjaWZpYyBlbnVtIGxpa2UgdGhpcwogICAgZnVuY3Rpb24gY2FuY2VsKCkgcHVibGljIHsKICAgICAgICBzdGF0dXMgPSBTdGF0dXMuQ2FuY2VsZWQ7CiAgICB9CgogICAgLy8gZGVsZXRlIHJlc2V0cyB0aGUgZW51bSB0byBpdHMgZmlyc3QgdmFsdWUsIDAKICAgIGZ1bmN0aW9uIHJlc2V0KCkgcHVibGljIHsKICAgICAgICBkZWxldGUgc3RhdHVzOwogICAgfQp9Cg==",
  },
  {
    fileName: "EnumDeclaration.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKLy8gVGhpcyBpcyBzYXZlZCAnRW51bURlY2xhcmF0aW9uLnNvbCcKCmVudW0gU3RhdHVzIHsKICAgIFBlbmRpbmcsCiAgICBTaGlwcGVkLAogICAgQWNjZXB0ZWQsCiAgICBSZWplY3RlZCwKICAgIENhbmNlbGVkCn0K",
  },
  {
    fileName: "EnumImport.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmltcG9ydCAiLi9FbnVtRGVjbGFyYXRpb24uc29sIjsKCmNvbnRyYWN0IEVudW0gewogICAgU3RhdHVzIHB1YmxpYyBzdGF0dXM7Cn0K",
  },
]

const html = `<p>Solidity supports enumerables and they are useful to model choice and keep track of state.</p>
<p>Enums can be declared outside of a contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Enum</span> </span>{
    <span class="hljs-comment">// Enum representing shipping status</span>
    <span class="hljs-keyword">enum</span> <span class="hljs-title">Status</span> {
        Pending,
        Shipped,
        Accepted,
        Rejected,
        Canceled
    }

    <span class="hljs-comment">// Default value is the first element listed in</span>
    <span class="hljs-comment">// definition of the type, in this case "Pending"</span>
    Status <span class="hljs-keyword">public</span> status;

    <span class="hljs-comment">// Returns uint</span>
    <span class="hljs-comment">// Pending  - 0</span>
    <span class="hljs-comment">// Shipped  - 1</span>
    <span class="hljs-comment">// Accepted - 2</span>
    <span class="hljs-comment">// Rejected - 3</span>
    <span class="hljs-comment">// Canceled - 4</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Status</span>) </span>{
        <span class="hljs-keyword">return</span> status;
    }

    <span class="hljs-comment">// Update status by passing uint into input</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params">Status _status</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        status <span class="hljs-operator">=</span> _status;
    }

    <span class="hljs-comment">// You can update to a specific enum like this</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cancel</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        status <span class="hljs-operator">=</span> Status.Canceled;
    }

    <span class="hljs-comment">// delete resets the enum to its first value, 0</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">reset</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">delete</span> status;
    }
}
</code></pre><h3>Declaring and importing Enum</h3>
<p>File that the enum is declared in</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>
<span class="hljs-comment">// This is saved &#x27;EnumDeclaration.sol&#x27;</span>

<span class="hljs-keyword">enum</span> <span class="hljs-title">Status</span> {
    Pending,
    Shipped,
    Accepted,
    Rejected,
    Canceled
}
</code></pre><p>File that imports the enum above</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./EnumDeclaration.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Enum</span> </span>{
    Status <span class="hljs-keyword">public</span> status;
}
</code></pre>`

export default html
