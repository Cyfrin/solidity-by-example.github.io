// metadata
export const version = "0.8.26"
export const title = "ERC20"
export const description = "Example of ERC20 token in Solidity"
export const cyfrinLink = "https://www.cyfrin.io/glossary/erc-20-solidity-code-example"

export const keywords = [
    "app",
    "application",
    "erc20",
    "ierc20",
    "token",
]

export const codes = [
    {
        fileName: "ERC20.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmltcG9ydCAiLi9JRVJDMjAuc29sIjsKCmNvbnRyYWN0IEVSQzIwIGlzIElFUkMyMCB7CiAgICBldmVudCBUcmFuc2ZlcihhZGRyZXNzIGluZGV4ZWQgZnJvbSwgYWRkcmVzcyBpbmRleGVkIHRvLCB1aW50MjU2IHZhbHVlKTsKICAgIGV2ZW50IEFwcHJvdmFsKAogICAgICAgIGFkZHJlc3MgaW5kZXhlZCBvd25lciwgYWRkcmVzcyBpbmRleGVkIHNwZW5kZXIsIHVpbnQyNTYgdmFsdWUKICAgICk7CgogICAgdWludDI1NiBwdWJsaWMgdG90YWxTdXBwbHk7CiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gdWludDI1NikgcHVibGljIGJhbGFuY2VPZjsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBtYXBwaW5nKGFkZHJlc3MgPT4gdWludDI1NikpIHB1YmxpYyBhbGxvd2FuY2U7CiAgICBzdHJpbmcgcHVibGljIG5hbWU7CiAgICBzdHJpbmcgcHVibGljIHN5bWJvbDsKICAgIHVpbnQ4IHB1YmxpYyBkZWNpbWFsczsKCiAgICBjb25zdHJ1Y3RvcihzdHJpbmcgbWVtb3J5IF9uYW1lLCBzdHJpbmcgbWVtb3J5IF9zeW1ib2wsIHVpbnQ4IF9kZWNpbWFscykgewogICAgICAgIG5hbWUgPSBfbmFtZTsKICAgICAgICBzeW1ib2wgPSBfc3ltYm9sOwogICAgICAgIGRlY2ltYWxzID0gX2RlY2ltYWxzOwogICAgfQoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpCiAgICB7CiAgICAgICAgYmFsYW5jZU9mW21zZy5zZW5kZXJdIC09IGFtb3VudDsKICAgICAgICBiYWxhbmNlT2ZbcmVjaXBpZW50XSArPSBhbW91bnQ7CiAgICAgICAgZW1pdCBUcmFuc2Zlcihtc2cuc2VuZGVyLCByZWNpcGllbnQsIGFtb3VudCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKSB7CiAgICAgICAgYWxsb3dhbmNlW21zZy5zZW5kZXJdW3NwZW5kZXJdID0gYW1vdW50OwogICAgICAgIGVtaXQgQXBwcm92YWwobXNnLnNlbmRlciwgc3BlbmRlciwgYW1vdW50KTsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpCiAgICB7CiAgICAgICAgYWxsb3dhbmNlW3NlbmRlcl1bbXNnLnNlbmRlcl0gLT0gYW1vdW50OwogICAgICAgIGJhbGFuY2VPZltzZW5kZXJdIC09IGFtb3VudDsKICAgICAgICBiYWxhbmNlT2ZbcmVjaXBpZW50XSArPSBhbW91bnQ7CiAgICAgICAgZW1pdCBUcmFuc2ZlcihzZW5kZXIsIHJlY2lwaWVudCwgYW1vdW50KTsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiBfbWludChhZGRyZXNzIHRvLCB1aW50MjU2IGFtb3VudCkgaW50ZXJuYWwgewogICAgICAgIGJhbGFuY2VPZlt0b10gKz0gYW1vdW50OwogICAgICAgIHRvdGFsU3VwcGx5ICs9IGFtb3VudDsKICAgICAgICBlbWl0IFRyYW5zZmVyKGFkZHJlc3MoMCksIHRvLCBhbW91bnQpOwogICAgfQoKICAgIGZ1bmN0aW9uIF9idXJuKGFkZHJlc3MgZnJvbSwgdWludDI1NiBhbW91bnQpIGludGVybmFsIHsKICAgICAgICBiYWxhbmNlT2ZbZnJvbV0gLT0gYW1vdW50OwogICAgICAgIHRvdGFsU3VwcGx5IC09IGFtb3VudDsKICAgICAgICBlbWl0IFRyYW5zZmVyKGZyb20sIGFkZHJlc3MoMCksIGFtb3VudCk7CiAgICB9CgogICAgZnVuY3Rpb24gbWludChhZGRyZXNzIHRvLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgewogICAgICAgIF9taW50KHRvLCBhbW91bnQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGJ1cm4oYWRkcmVzcyBmcm9tLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgewogICAgICAgIF9idXJuKGZyb20sIGFtb3VudCk7CiAgICB9Cn0K",
    },
    {
        fileName: "IERC20.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwp9Cg==",
    },
    {
        fileName: "MyToken.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmltcG9ydCAiLi9FUkMyMC5zb2wiOwoKY29udHJhY3QgTXlUb2tlbiBpcyBFUkMyMCB7CiAgICBjb25zdHJ1Y3RvcihzdHJpbmcgbWVtb3J5IG5hbWUsIHN0cmluZyBtZW1vcnkgc3ltYm9sLCB1aW50OCBkZWNpbWFscykKICAgICAgICBFUkMyMChuYW1lLCBzeW1ib2wsIGRlY2ltYWxzKQogICAgewogICAgICAgIC8vIE1pbnQgMTAwIHRva2VucyB0byBtc2cuc2VuZGVyCiAgICAgICAgLy8gU2ltaWxhciB0byBob3cKICAgICAgICAvLyAxIGRvbGxhciA9IDEwMCBjZW50cwogICAgICAgIC8vIDEgdG9rZW4gPSAxICogKDEwICoqIGRlY2ltYWxzKQogICAgICAgIF9taW50KG1zZy5zZW5kZXIsIDEwMCAqIDEwICoqIHVpbnQyNTYoZGVjaW1hbHMpKTsKICAgIH0KfQo=",
    },
    {
        fileName: "TokenSwap.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmltcG9ydCAiLi9JRVJDMjAuc29sIjsKCi8qCkhvdyB0byBzd2FwIHRva2VucwoKMS4gQWxpY2UgaGFzIDEwMCB0b2tlbnMgZnJvbSBBbGljZUNvaW4sIHdoaWNoIGlzIGEgRVJDMjAgdG9rZW4uCjIuIEJvYiBoYXMgMTAwIHRva2VucyBmcm9tIEJvYkNvaW4sIHdoaWNoIGlzIGFsc28gYSBFUkMyMCB0b2tlbi4KMy4gQWxpY2UgYW5kIEJvYiB3YW50cyB0byB0cmFkZSAxMCBBbGljZUNvaW4gZm9yIDIwIEJvYkNvaW4uCjQuIEFsaWNlIG9yIEJvYiBkZXBsb3lzIFRva2VuU3dhcAo1LiBBbGljZSBhcHByb3ZlcyBUb2tlblN3YXAgdG8gd2l0aGRyYXcgMTAgdG9rZW5zIGZyb20gQWxpY2VDb2luCjYuIEJvYiBhcHByb3ZlcyBUb2tlblN3YXAgdG8gd2l0aGRyYXcgMjAgdG9rZW5zIGZyb20gQm9iQ29pbgo3LiBBbGljZSBvciBCb2IgY2FsbHMgVG9rZW5Td2FwLnN3YXAoKQo4LiBBbGljZSBhbmQgQm9iIHRyYWRlZCB0b2tlbnMgc3VjY2Vzc2Z1bGx5LgoqLwoKY29udHJhY3QgVG9rZW5Td2FwIHsKICAgIElFUkMyMCBwdWJsaWMgdG9rZW4xOwogICAgYWRkcmVzcyBwdWJsaWMgb3duZXIxOwogICAgdWludDI1NiBwdWJsaWMgYW1vdW50MTsKICAgIElFUkMyMCBwdWJsaWMgdG9rZW4yOwogICAgYWRkcmVzcyBwdWJsaWMgb3duZXIyOwogICAgdWludDI1NiBwdWJsaWMgYW1vdW50MjsKCiAgICBjb25zdHJ1Y3RvcigKICAgICAgICBhZGRyZXNzIF90b2tlbjEsCiAgICAgICAgYWRkcmVzcyBfb3duZXIxLAogICAgICAgIHVpbnQyNTYgX2Ftb3VudDEsCiAgICAgICAgYWRkcmVzcyBfdG9rZW4yLAogICAgICAgIGFkZHJlc3MgX293bmVyMiwKICAgICAgICB1aW50MjU2IF9hbW91bnQyCiAgICApIHsKICAgICAgICB0b2tlbjEgPSBJRVJDMjAoX3Rva2VuMSk7CiAgICAgICAgb3duZXIxID0gX293bmVyMTsKICAgICAgICBhbW91bnQxID0gX2Ftb3VudDE7CiAgICAgICAgdG9rZW4yID0gSUVSQzIwKF90b2tlbjIpOwogICAgICAgIG93bmVyMiA9IF9vd25lcjI7CiAgICAgICAgYW1vdW50MiA9IF9hbW91bnQyOwogICAgfQoKICAgIGZ1bmN0aW9uIHN3YXAoKSBwdWJsaWMgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBvd25lcjEgfHwgbXNnLnNlbmRlciA9PSBvd25lcjIsICJOb3QgYXV0aG9yaXplZCIpOwogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIHRva2VuMS5hbGxvd2FuY2Uob3duZXIxLCBhZGRyZXNzKHRoaXMpKSA+PSBhbW91bnQxLAogICAgICAgICAgICAiVG9rZW4gMSBhbGxvd2FuY2UgdG9vIGxvdyIKICAgICAgICApOwogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIHRva2VuMi5hbGxvd2FuY2Uob3duZXIyLCBhZGRyZXNzKHRoaXMpKSA+PSBhbW91bnQyLAogICAgICAgICAgICAiVG9rZW4gMiBhbGxvd2FuY2UgdG9vIGxvdyIKICAgICAgICApOwoKICAgICAgICBfc2FmZVRyYW5zZmVyRnJvbSh0b2tlbjEsIG93bmVyMSwgb3duZXIyLCBhbW91bnQxKTsKICAgICAgICBfc2FmZVRyYW5zZmVyRnJvbSh0b2tlbjIsIG93bmVyMiwgb3duZXIxLCBhbW91bnQyKTsKICAgIH0KCiAgICBmdW5jdGlvbiBfc2FmZVRyYW5zZmVyRnJvbSgKICAgICAgICBJRVJDMjAgdG9rZW4sCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgdWludDI1NiBhbW91bnQKICAgICkgcHJpdmF0ZSB7CiAgICAgICAgYm9vbCBzZW50ID0gdG9rZW4udHJhbnNmZXJGcm9tKHNlbmRlciwgcmVjaXBpZW50LCBhbW91bnQpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIlRva2VuIHRyYW5zZmVyIGZhaWxlZCIpOwogICAgfQp9Cg==",
    },
]

const html = `<p>Any contract that follow the <a href="https://eips.ethereum.org/EIPS/eip-20" target="__blank">ERC20 standard</a> is a ERC20 token.</p>
<p>ERC20 tokens provide functionalities to</p>
<ul>
<li>transfer tokens</li>
<li>allow others to transfer tokens on behalf of the token holder</li>
</ul>
<p>Here is the interface for ERC20.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}
</code></pre><p>Example of <code>ERC20</code> token contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./IERC20.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC20</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> value</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint256</span> value
    </span>)</span>;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>)) <span class="hljs-keyword">public</span> allowance;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> symbol;
    <span class="hljs-keyword">uint8</span> <span class="hljs-keyword">public</span> decimals;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _symbol, <span class="hljs-keyword">uint8</span> _decimals</span>) </span>{
        name <span class="hljs-operator">=</span> _name;
        symbol <span class="hljs-operator">=</span> _symbol;
        decimals <span class="hljs-operator">=</span> _decimals;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        balanceOf[recipient] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, recipient, amount);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        allowance[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>][spender] <span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Approval(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, spender, amount);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        allowance[sender][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        balanceOf[sender] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        balanceOf[recipient] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Transfer(sender, recipient, amount);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        balanceOf[to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        balanceOf[<span class="hljs-keyword">from</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _mint(to, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _burn(<span class="hljs-keyword">from</span>, amount);
    }
}
</code></pre><h2>Create your own ERC20 token</h2>
<p>Using <a href="https://github.com/OpenZeppelin/openzeppelin-contracts" target="__blank">Open Zeppelin</a> it&#39;s really easy to create your own ERC20 token.</p>
<p>Here is an example</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./ERC20.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MyToken</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> symbol, <span class="hljs-keyword">uint8</span> decimals</span>)
        <span class="hljs-title">ERC20</span>(<span class="hljs-params">name, symbol, decimals</span>)
    </span>{
        <span class="hljs-comment">// Mint 100 tokens to msg.sender</span>
        <span class="hljs-comment">// Similar to how</span>
        <span class="hljs-comment">// 1 dollar = 100 cents</span>
        <span class="hljs-comment">// 1 token = 1 * (10 ** decimals)</span>
        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-number">100</span> <span class="hljs-operator">*</span> <span class="hljs-number">10</span> <span class="hljs-operator">*</span><span class="hljs-operator">*</span> <span class="hljs-keyword">uint256</span>(decimals));
    }
}
</code></pre><h2>Contract to swap tokens</h2>
<p>Here is an example contract, <code>TokenSwap</code>, to trade one ERC20 token for another.</p>
<p>This contract will swap tokens by calling</p>
<pre><code class="language-solidity">transferFrom(<span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount)
</code></pre><p>which will transfer <code>amount</code> of token from <code>sender</code> to <code>recipient</code>.</p>
<p>For <code>transferFrom</code> to succeed, <code>sender</code> must</p>
<ul>
<li>have more than <code>amount</code> tokens in their balance</li>
<li>allowed <code>TokenSwap</code> to withdraw <code>amount</code> tokens by calling <code>approve</code></li>
</ul>
<p>prior to <code>TokenSwap</code> calling <code>transferFrom</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./IERC20.sol"</span>;

<span class="hljs-comment">/*
How to swap tokens

1. Alice has 100 tokens from AliceCoin, which is a ERC20 token.
2. Bob has 100 tokens from BobCoin, which is also a ERC20 token.
3. Alice and Bob wants to trade 10 AliceCoin for 20 BobCoin.
4. Alice or Bob deploys TokenSwap
5. Alice approves TokenSwap to withdraw 10 tokens from AliceCoin
6. Bob approves TokenSwap to withdraw 20 tokens from BobCoin
7. Alice or Bob calls TokenSwap.swap()
8. Alice and Bob traded tokens successfully.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TokenSwap</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> token1;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner1;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> amount1;
    IERC20 <span class="hljs-keyword">public</span> token2;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner2;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> amount2;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _token1,
        <span class="hljs-keyword">address</span> _owner1,
        <span class="hljs-keyword">uint256</span> _amount1,
        <span class="hljs-keyword">address</span> _token2,
        <span class="hljs-keyword">address</span> _owner2,
        <span class="hljs-keyword">uint256</span> _amount2
    </span>) </span>{
        token1 <span class="hljs-operator">=</span> IERC20(_token1);
        owner1 <span class="hljs-operator">=</span> _owner1;
        amount1 <span class="hljs-operator">=</span> _amount1;
        token2 <span class="hljs-operator">=</span> IERC20(_token2);
        owner2 <span class="hljs-operator">=</span> _owner2;
        amount2 <span class="hljs-operator">=</span> _amount2;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner1 <span class="hljs-operator">|</span><span class="hljs-operator">|</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner2, <span class="hljs-string">"Not authorized"</span>);
        <span class="hljs-built_in">require</span>(
            token1.allowance(owner1, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)) <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> amount1,
            <span class="hljs-string">"Token 1 allowance too low"</span>
        );
        <span class="hljs-built_in">require</span>(
            token2.allowance(owner2, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)) <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> amount2,
            <span class="hljs-string">"Token 2 allowance too low"</span>
        );

        _safeTransferFrom(token1, owner1, owner2, amount1);
        _safeTransferFrom(token2, owner2, owner1, amount2);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_safeTransferFrom</span>(<span class="hljs-params">
        IERC20 token,
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint256</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        <span class="hljs-keyword">bool</span> sent <span class="hljs-operator">=</span> token.transferFrom(sender, recipient, amount);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Token transfer failed"</span>);
    }
}
</code></pre>`

export default html
