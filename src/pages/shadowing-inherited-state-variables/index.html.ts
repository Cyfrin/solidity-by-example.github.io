// metadata
export const version = "0.8.26"
export const title = "Shadowing Inherited State Variables"
export const description = "An example of shadowing state variables by inheritance"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/shadowing-inherited-state-variables-solidity-code-example"

export const keywords = [
  "state",
  "variables",
  "variable",
  "shadow",
  "shadowing",
  "inheritance",
]

export const codes = [
  {
    fileName: "Shadow.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmNvbnRyYWN0IEEgewogICAgc3RyaW5nIHB1YmxpYyBuYW1lID0gIkNvbnRyYWN0IEEiOwoKICAgIGZ1bmN0aW9uIGdldE5hbWUoKSBwdWJsaWMgdmlldyByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIG5hbWU7CiAgICB9Cn0KCi8vIFNoYWRvd2luZyBpcyBkaXNhbGxvd2VkIGluIFNvbGlkaXR5IDAuNgovLyBUaGlzIHdpbGwgbm90IGNvbXBpbGUKLy8gY29udHJhY3QgQiBpcyBBIHsKLy8gICAgIHN0cmluZyBwdWJsaWMgbmFtZSA9ICJDb250cmFjdCBCIjsKLy8gfQoKY29udHJhY3QgQyBpcyBBIHsKICAgIC8vIFRoaXMgaXMgdGhlIGNvcnJlY3Qgd2F5IHRvIG92ZXJyaWRlIGluaGVyaXRlZCBzdGF0ZSB2YXJpYWJsZXMuCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgICBuYW1lID0gIkNvbnRyYWN0IEMiOwogICAgfQoKICAgIC8vIEMuZ2V0TmFtZSByZXR1cm5zICJDb250cmFjdCBDIgp9Cg==",
  },
]

const html = `<p>Unlike functions, state variables cannot be overridden by re-declaring it
in the child contract.</p>
<p>Let&#39;s learn how to correctly override inherited state variables.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name <span class="hljs-operator">=</span> <span class="hljs-string">"Contract A"</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getName</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> name;
    }
}

<span class="hljs-comment">// Shadowing is disallowed in Solidity 0.6</span>
<span class="hljs-comment">// This will not compile</span>
<span class="hljs-comment">// contract B is A {</span>
<span class="hljs-comment">//     string public name = "Contract B";</span>
<span class="hljs-comment">// }</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// This is the correct way to override inherited state variables.</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        name <span class="hljs-operator">=</span> <span class="hljs-string">"Contract C"</span>;
    }

    <span class="hljs-comment">// C.getName returns "Contract C"</span>
}
</code></pre>`

export default html
