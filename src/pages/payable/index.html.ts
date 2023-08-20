// metadata
export const version = "0.8.20"
export const title = "Payable"
export const description = "An example of how to use the keyword payable in Solidity"

export const keywords = ["payable", "eth", "send", "ether"]

export const codes = [
    {
        fileName: "Payable.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IFBheWFibGUgewogICAgLy8gUGF5YWJsZSBhZGRyZXNzIGNhbiByZWNlaXZlIEV0aGVyCiAgICBhZGRyZXNzIHBheWFibGUgcHVibGljIG93bmVyOwoKICAgIC8vIFBheWFibGUgY29uc3RydWN0b3IgY2FuIHJlY2VpdmUgRXRoZXIKICAgIGNvbnN0cnVjdG9yKCkgcGF5YWJsZSB7CiAgICAgICAgb3duZXIgPSBwYXlhYmxlKG1zZy5zZW5kZXIpOwogICAgfQoKICAgIC8vIEZ1bmN0aW9uIHRvIGRlcG9zaXQgRXRoZXIgaW50byB0aGlzIGNvbnRyYWN0LgogICAgLy8gQ2FsbCB0aGlzIGZ1bmN0aW9uIGFsb25nIHdpdGggc29tZSBFdGhlci4KICAgIC8vIFRoZSBiYWxhbmNlIG9mIHRoaXMgY29udHJhY3Qgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHVwZGF0ZWQuCiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgcHVibGljIHBheWFibGUge30KCiAgICAvLyBDYWxsIHRoaXMgZnVuY3Rpb24gYWxvbmcgd2l0aCBzb21lIEV0aGVyLgogICAgLy8gVGhlIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gZXJyb3Igc2luY2UgdGhpcyBmdW5jdGlvbiBpcyBub3QgcGF5YWJsZS4KICAgIGZ1bmN0aW9uIG5vdFBheWFibGUoKSBwdWJsaWMge30KCiAgICAvLyBGdW5jdGlvbiB0byB3aXRoZHJhdyBhbGwgRXRoZXIgZnJvbSB0aGlzIGNvbnRyYWN0LgogICAgZnVuY3Rpb24gd2l0aGRyYXcoKSBwdWJsaWMgewogICAgICAgIC8vIGdldCB0aGUgYW1vdW50IG9mIEV0aGVyIHN0b3JlZCBpbiB0aGlzIGNvbnRyYWN0CiAgICAgICAgdWludCBhbW91bnQgPSBhZGRyZXNzKHRoaXMpLmJhbGFuY2U7CgogICAgICAgIC8vIHNlbmQgYWxsIEV0aGVyIHRvIG93bmVyCiAgICAgICAgLy8gT3duZXIgY2FuIHJlY2VpdmUgRXRoZXIgc2luY2UgdGhlIGFkZHJlc3Mgb2Ygb3duZXIgaXMgcGF5YWJsZQogICAgICAgIChib29sIHN1Y2Nlc3MsICkgPSBvd25lci5jYWxse3ZhbHVlOiBhbW91bnR9KCIiKTsKICAgICAgICByZXF1aXJlKHN1Y2Nlc3MsICJGYWlsZWQgdG8gc2VuZCBFdGhlciIpOwogICAgfQoKICAgIC8vIEZ1bmN0aW9uIHRvIHRyYW5zZmVyIEV0aGVyIGZyb20gdGhpcyBjb250cmFjdCB0byBhZGRyZXNzIGZyb20gaW5wdXQKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcGF5YWJsZSBfdG8sIHVpbnQgX2Ftb3VudCkgcHVibGljIHsKICAgICAgICAvLyBOb3RlIHRoYXQgInRvIiBpcyBkZWNsYXJlZCBhcyBwYXlhYmxlCiAgICAgICAgKGJvb2wgc3VjY2VzcywgKSA9IF90by5jYWxse3ZhbHVlOiBfYW1vdW50fSgiIik7CiAgICAgICAgcmVxdWlyZShzdWNjZXNzLCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKICAgIH0KfQo=",
    },
]

const html = `<p>Functions and addresses declared <code>payable</code> can receive <code>ether</code> into the contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Payable</span> </span>{
    <span class="hljs-comment">// Payable address can receive Ether</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-comment">// Payable constructor can receive Ether</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
    }

    <span class="hljs-comment">// Function to deposit Ether into this contract.</span>
    <span class="hljs-comment">// Call this function along with some Ether.</span>
    <span class="hljs-comment">// The balance of this contract will be automatically updated.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-comment">// Call this function along with some Ether.</span>
    <span class="hljs-comment">// The function will throw an error since this function is not payable.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">notPayable</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-comment">// Function to withdraw all Ether from this contract.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// get the amount of Ether stored in this contract</span>
        <span class="hljs-keyword">uint</span> amount <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span>;

        <span class="hljs-comment">// send all Ether to owner</span>
        <span class="hljs-comment">// Owner can receive Ether since the address of owner is payable</span>
        (<span class="hljs-keyword">bool</span> success, ) <span class="hljs-operator">=</span> owner.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"Failed to send Ether"</span>);
    }

    <span class="hljs-comment">// Function to transfer Ether from this contract to address from input</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _to, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Note that "to" is declared as payable</span>
        (<span class="hljs-keyword">bool</span> success, ) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(success, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre>`

export default html
