// metadata
export const version = "0.8.26"
export const title = "Gasless Token Transfer"
export const description = "Gasless ERC20 token transfer with Meta transaction"
export const cyfrinLink = "https://www.cyfrin.io/glossary/gasless-token-transfer-solidity-code-example"

export const keywords = [
    "app",
    "application",
    "gasless",
    "token",
    "transfer",
    "ERC20",
    "permit",
]

export const codes = [
    {
        fileName: "ERC20Permit.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFHUEwtMy4wLW9ubHkKcHJhZ21hIHNvbGlkaXR5ID49MC44LjA7CgovLy8gQG5vdGljZSBNb2Rlcm4gYW5kIGdhcyBlZmZpY2llbnQgRVJDMjAgKyBFSVAtMjYxMiBpbXBsZW1lbnRhdGlvbi4KLy8vIEBhdXRob3IgU29sbWF0ZSAoaHR0cHM6Ly9naXRodWIuY29tL3RyYW5zbWlzc2lvbnMxMS9zb2xtYXRlL2Jsb2IvbWFpbi9zcmMvdG9rZW5zL0VSQzIwLnNvbCkKLy8vIEBhdXRob3IgTW9kaWZpZWQgZnJvbSBVbmlzd2FwIChodHRwczovL2dpdGh1Yi5jb20vVW5pc3dhcC91bmlzd2FwLXYyLWNvcmUvYmxvYi9tYXN0ZXIvY29udHJhY3RzL1VuaXN3YXBWMkVSQzIwLnNvbCkKLy8vIEBkZXYgRG8gbm90IG1hbnVhbGx5IHNldCBiYWxhbmNlcyB3aXRob3V0IHVwZGF0aW5nIHRvdGFsU3VwcGx5LCBhcyB0aGUgc3VtIG9mIGFsbCB1c2VyIGJhbGFuY2VzIG11c3Qgbm90IGV4Y2VlZCBpdC4KYWJzdHJhY3QgY29udHJhY3QgRVJDMjAgewogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludDI1NiBhbW91bnQpOwogICAgZXZlbnQgQXBwcm92YWwoCiAgICAgICAgYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgc3BlbmRlciwgdWludDI1NiBhbW91bnQKICAgICk7CgogICAgc3RyaW5nIHB1YmxpYyBuYW1lOwogICAgc3RyaW5nIHB1YmxpYyBzeW1ib2w7CiAgICB1aW50OCBwdWJsaWMgaW1tdXRhYmxlIGRlY2ltYWxzOwogICAgdWludDI1NiBwdWJsaWMgdG90YWxTdXBwbHk7CiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gdWludDI1NikgcHVibGljIGJhbGFuY2VPZjsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBtYXBwaW5nKGFkZHJlc3MgPT4gdWludDI1NikpIHB1YmxpYyBhbGxvd2FuY2U7CiAgICB1aW50MjU2IGludGVybmFsIGltbXV0YWJsZSBJTklUSUFMX0NIQUlOX0lEOwogICAgYnl0ZXMzMiBpbnRlcm5hbCBpbW11dGFibGUgSU5JVElBTF9ET01BSU5fU0VQQVJBVE9SOwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyBub25jZXM7CgogICAgY29uc3RydWN0b3Ioc3RyaW5nIG1lbW9yeSBfbmFtZSwgc3RyaW5nIG1lbW9yeSBfc3ltYm9sLCB1aW50OCBfZGVjaW1hbHMpIHsKICAgICAgICBuYW1lID0gX25hbWU7CiAgICAgICAgc3ltYm9sID0gX3N5bWJvbDsKICAgICAgICBkZWNpbWFscyA9IF9kZWNpbWFsczsKICAgICAgICBJTklUSUFMX0NIQUlOX0lEID0gYmxvY2suY2hhaW5pZDsKICAgICAgICBJTklUSUFMX0RPTUFJTl9TRVBBUkFUT1IgPSBjb21wdXRlRG9tYWluU2VwYXJhdG9yKCk7CiAgICB9CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIHB1YmxpYwogICAgICAgIHZpcnR1YWwKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIGFsbG93YW5jZVttc2cuc2VuZGVyXVtzcGVuZGVyXSA9IGFtb3VudDsKICAgICAgICBlbWl0IEFwcHJvdmFsKG1zZy5zZW5kZXIsIHNwZW5kZXIsIGFtb3VudCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyB0bywgdWludDI1NiBhbW91bnQpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlydHVhbAogICAgICAgIHJldHVybnMgKGJvb2wpCiAgICB7CiAgICAgICAgYmFsYW5jZU9mW21zZy5zZW5kZXJdIC09IGFtb3VudDsKCiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgYmFsYW5jZU9mW3RvXSArPSBhbW91bnQ7CiAgICAgICAgfQoKICAgICAgICBlbWl0IFRyYW5zZmVyKG1zZy5zZW5kZXIsIHRvLCBhbW91bnQpOwogICAgICAgIHJldHVybiB0cnVlOwogICAgfQoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIGZyb20sIGFkZHJlc3MgdG8sIHVpbnQyNTYgYW1vdW50KQogICAgICAgIHB1YmxpYwogICAgICAgIHZpcnR1YWwKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIHVpbnQyNTYgYWxsb3dlZCA9IGFsbG93YW5jZVtmcm9tXVttc2cuc2VuZGVyXTsgLy8gU2F2ZXMgZ2FzIGZvciBsaW1pdGVkIGFwcHJvdmFscy4KICAgICAgICBpZiAoYWxsb3dlZCAhPSB0eXBlKHVpbnQyNTYpLm1heCkgewogICAgICAgICAgICBhbGxvd2FuY2VbZnJvbV1bbXNnLnNlbmRlcl0gPSBhbGxvd2VkIC0gYW1vdW50OwogICAgICAgIH0KICAgICAgICBiYWxhbmNlT2ZbZnJvbV0gLT0gYW1vdW50OwoKICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICBiYWxhbmNlT2ZbdG9dICs9IGFtb3VudDsKICAgICAgICB9CgogICAgICAgIGVtaXQgVHJhbnNmZXIoZnJvbSwgdG8sIGFtb3VudCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gcGVybWl0KAogICAgICAgIGFkZHJlc3Mgb3duZXIsCiAgICAgICAgYWRkcmVzcyBzcGVuZGVyLAogICAgICAgIHVpbnQyNTYgdmFsdWUsCiAgICAgICAgdWludDI1NiBkZWFkbGluZSwKICAgICAgICB1aW50OCB2LAogICAgICAgIGJ5dGVzMzIgciwKICAgICAgICBieXRlczMyIHMKICAgICkgcHVibGljIHZpcnR1YWwgewogICAgICAgIHJlcXVpcmUoZGVhZGxpbmUgPj0gYmxvY2sudGltZXN0YW1wLCAiUEVSTUlUX0RFQURMSU5FX0VYUElSRUQiKTsKCiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgYWRkcmVzcyByZWNvdmVyZWRBZGRyZXNzID0gZWNyZWNvdmVyKAogICAgICAgICAgICAgICAga2VjY2FrMjU2KAogICAgICAgICAgICAgICAgICAgIGFiaS5lbmNvZGVQYWNrZWQoCiAgICAgICAgICAgICAgICAgICAgICAgICJceDE5XHgwMSIsCiAgICAgICAgICAgICAgICAgICAgICAgIERPTUFJTl9TRVBBUkFUT1IoKSwKICAgICAgICAgICAgICAgICAgICAgICAga2VjY2FrMjU2KAogICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJpLmVuY29kZSgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZWNjYWsyNTYoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJQZXJtaXQoYWRkcmVzcyBvd25lcixhZGRyZXNzIHNwZW5kZXIsdWludDI1NiB2YWx1ZSx1aW50MjU2IG5vbmNlLHVpbnQyNTYgZGVhZGxpbmUpIgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlbmRlciwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25jZXNbb3duZXJdKyssCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhZGxpbmUKICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICksCiAgICAgICAgICAgICAgICB2LAogICAgICAgICAgICAgICAgciwKICAgICAgICAgICAgICAgIHMKICAgICAgICAgICAgKTsKCiAgICAgICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgICAgICByZWNvdmVyZWRBZGRyZXNzICE9IGFkZHJlc3MoMCkgJiYgcmVjb3ZlcmVkQWRkcmVzcyA9PSBvd25lciwKICAgICAgICAgICAgICAgICJJTlZBTElEX1NJR05FUiIKICAgICAgICAgICAgKTsKCiAgICAgICAgICAgIGFsbG93YW5jZVtyZWNvdmVyZWRBZGRyZXNzXVtzcGVuZGVyXSA9IHZhbHVlOwogICAgICAgIH0KCiAgICAgICAgZW1pdCBBcHByb3ZhbChvd25lciwgc3BlbmRlciwgdmFsdWUpOwogICAgfQoKICAgIGZ1bmN0aW9uIERPTUFJTl9TRVBBUkFUT1IoKSBwdWJsaWMgdmlldyB2aXJ0dWFsIHJldHVybnMgKGJ5dGVzMzIpIHsKICAgICAgICByZXR1cm4gYmxvY2suY2hhaW5pZCA9PSBJTklUSUFMX0NIQUlOX0lECiAgICAgICAgICAgID8gSU5JVElBTF9ET01BSU5fU0VQQVJBVE9SCiAgICAgICAgICAgIDogY29tcHV0ZURvbWFpblNlcGFyYXRvcigpOwogICAgfQoKICAgIGZ1bmN0aW9uIGNvbXB1dGVEb21haW5TZXBhcmF0b3IoKSBpbnRlcm5hbCB2aWV3IHZpcnR1YWwgcmV0dXJucyAoYnl0ZXMzMikgewogICAgICAgIHJldHVybiBrZWNjYWsyNTYoCiAgICAgICAgICAgIGFiaS5lbmNvZGUoCiAgICAgICAgICAgICAgICBrZWNjYWsyNTYoCiAgICAgICAgICAgICAgICAgICAgIkVJUDcxMkRvbWFpbihzdHJpbmcgbmFtZSxzdHJpbmcgdmVyc2lvbix1aW50MjU2IGNoYWluSWQsYWRkcmVzcyB2ZXJpZnlpbmdDb250cmFjdCkiCiAgICAgICAgICAgICAgICApLAogICAgICAgICAgICAgICAga2VjY2FrMjU2KGJ5dGVzKG5hbWUpKSwKICAgICAgICAgICAgICAgIGtlY2NhazI1NigiMSIpLAogICAgICAgICAgICAgICAgYmxvY2suY2hhaW5pZCwKICAgICAgICAgICAgICAgIGFkZHJlc3ModGhpcykKICAgICAgICAgICAgKQogICAgICAgICk7CiAgICB9CgogICAgZnVuY3Rpb24gX21pbnQoYWRkcmVzcyB0bywgdWludDI1NiBhbW91bnQpIGludGVybmFsIHZpcnR1YWwgewogICAgICAgIHRvdGFsU3VwcGx5ICs9IGFtb3VudDsKCiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgYmFsYW5jZU9mW3RvXSArPSBhbW91bnQ7CiAgICAgICAgfQoKICAgICAgICBlbWl0IFRyYW5zZmVyKGFkZHJlc3MoMCksIHRvLCBhbW91bnQpOwogICAgfQoKICAgIGZ1bmN0aW9uIF9idXJuKGFkZHJlc3MgZnJvbSwgdWludDI1NiBhbW91bnQpIGludGVybmFsIHZpcnR1YWwgewogICAgICAgIGJhbGFuY2VPZltmcm9tXSAtPSBhbW91bnQ7CgogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIHRvdGFsU3VwcGx5IC09IGFtb3VudDsKICAgICAgICB9CgogICAgICAgIGVtaXQgVHJhbnNmZXIoZnJvbSwgYWRkcmVzcygwKSwgYW1vdW50KTsKICAgIH0KfQoKY29udHJhY3QgRVJDMjBQZXJtaXQgaXMgRVJDMjAgewogICAgY29uc3RydWN0b3Ioc3RyaW5nIG1lbW9yeSBfbmFtZSwgc3RyaW5nIG1lbW9yeSBfc3ltYm9sLCB1aW50OCBfZGVjaW1hbHMpCiAgICAgICAgRVJDMjAoX25hbWUsIF9zeW1ib2wsIF9kZWNpbWFscykKICAgIHt9CgogICAgZnVuY3Rpb24gbWludChhZGRyZXNzIHRvLCB1aW50MjU2IGFtb3VudCkgcHVibGljIHsKICAgICAgICBfbWludCh0bywgYW1vdW50KTsKICAgIH0KfQo=",
    },
    {
        fileName: "GaslessTokenTransfer.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmludGVyZmFjZSBJRVJDMjBQZXJtaXQgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gcGVybWl0KAogICAgICAgIGFkZHJlc3Mgb3duZXIsCiAgICAgICAgYWRkcmVzcyBzcGVuZGVyLAogICAgICAgIHVpbnQyNTYgdmFsdWUsCiAgICAgICAgdWludDI1NiBkZWFkbGluZSwKICAgICAgICB1aW50OCB2LAogICAgICAgIGJ5dGVzMzIgciwKICAgICAgICBieXRlczMyIHMKICAgICkgZXh0ZXJuYWw7Cn0KCmNvbnRyYWN0IEdhc2xlc3NUb2tlblRyYW5zZmVyIHsKICAgIGZ1bmN0aW9uIHNlbmQoCiAgICAgICAgYWRkcmVzcyB0b2tlbiwKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICBhZGRyZXNzIHJlY2VpdmVyLAogICAgICAgIHVpbnQyNTYgYW1vdW50LAogICAgICAgIHVpbnQyNTYgZmVlLAogICAgICAgIHVpbnQyNTYgZGVhZGxpbmUsCiAgICAgICAgLy8gUGVybWl0IHNpZ25hdHVyZQogICAgICAgIHVpbnQ4IHYsCiAgICAgICAgYnl0ZXMzMiByLAogICAgICAgIGJ5dGVzMzIgcwogICAgKSBleHRlcm5hbCB7CiAgICAgICAgLy8gUGVybWl0CiAgICAgICAgSUVSQzIwUGVybWl0KHRva2VuKS5wZXJtaXQoCiAgICAgICAgICAgIHNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50ICsgZmVlLCBkZWFkbGluZSwgdiwgciwgcwogICAgICAgICk7CiAgICAgICAgLy8gU2VuZCBhbW91bnQgdG8gcmVjZWl2ZXIKICAgICAgICBJRVJDMjBQZXJtaXQodG9rZW4pLnRyYW5zZmVyRnJvbShzZW5kZXIsIHJlY2VpdmVyLCBhbW91bnQpOwogICAgICAgIC8vIFRha2UgZmVlIC0gc2VuZCBmZWUgdG8gbXNnLnNlbmRlcgogICAgICAgIElFUkMyMFBlcm1pdCh0b2tlbikudHJhbnNmZXJGcm9tKHNlbmRlciwgbXNnLnNlbmRlciwgZmVlKTsKICAgIH0KfQo=",
    },
]

const html = `<p>Gasless ERC20 token transfer with Meta transaction</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20Permit</span> </span>{
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">permit</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> spender,
        <span class="hljs-keyword">uint256</span> value,
        <span class="hljs-keyword">uint256</span> deadline,
        <span class="hljs-keyword">uint8</span> v,
        <span class="hljs-keyword">bytes32</span> r,
        <span class="hljs-keyword">bytes32</span> s
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">GaslessTokenTransfer</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">send</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> token,
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> receiver,
        <span class="hljs-keyword">uint256</span> amount,
        <span class="hljs-keyword">uint256</span> fee,
        <span class="hljs-keyword">uint256</span> deadline,
        <span class="hljs-comment">// Permit signature</span>
        <span class="hljs-keyword">uint8</span> v,
        <span class="hljs-keyword">bytes32</span> r,
        <span class="hljs-keyword">bytes32</span> s
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// Permit</span>
        IERC20Permit(token).permit(
            sender, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount <span class="hljs-operator">+</span> fee, deadline, v, r, s
        );
        <span class="hljs-comment">// Send amount to receiver</span>
        IERC20Permit(token).transferFrom(sender, receiver, amount);
        <span class="hljs-comment">// Take fee - send fee to msg.sender</span>
        IERC20Permit(token).transferFrom(sender, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, fee);
    }
}
</code></pre><p>Example <code>ERC20</code> that implements <code>permit</code> copied from solmate</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: AGPL-3.0-only</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> &gt;=0.8.0;</span>

<span class="hljs-comment">/// @notice Modern and gas efficient ERC20 + EIP-2612 implementation.</span>
<span class="hljs-comment">/// @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)</span>
<span class="hljs-comment">/// @author Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)</span>
<span class="hljs-comment">/// @dev Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it.</span>
<span class="hljs-keyword">abstract</span> <span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint256</span> amount
    </span>)</span>;

    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> symbol;
    <span class="hljs-keyword">uint8</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> decimals;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>)) <span class="hljs-keyword">public</span> allowance;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">internal</span> <span class="hljs-keyword">immutable</span> INITIAL_CHAIN_ID;
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">internal</span> <span class="hljs-keyword">immutable</span> INITIAL_DOMAIN_SEPARATOR;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> nonces;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _symbol, <span class="hljs-keyword">uint8</span> _decimals</span>) </span>{
        name <span class="hljs-operator">=</span> _name;
        symbol <span class="hljs-operator">=</span> _symbol;
        decimals <span class="hljs-operator">=</span> _decimals;
        INITIAL_CHAIN_ID <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">chainid</span>;
        INITIAL_DOMAIN_SEPARATOR <span class="hljs-operator">=</span> computeDomainSeparator();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">virtual</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        allowance[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>][spender] <span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Approval(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, spender, amount);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">virtual</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;

        <span class="hljs-keyword">unchecked</span> {
            balanceOf[to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        }

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, to, amount);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">virtual</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">uint256</span> allowed <span class="hljs-operator">=</span> allowance[<span class="hljs-keyword">from</span>][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>]; <span class="hljs-comment">// Saves gas for limited approvals.</span>
        <span class="hljs-keyword">if</span> (allowed <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>) {
            allowance[<span class="hljs-keyword">from</span>][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> allowed <span class="hljs-operator">-</span> amount;
        }
        balanceOf[<span class="hljs-keyword">from</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;

        <span class="hljs-keyword">unchecked</span> {
            balanceOf[to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        }

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">from</span>, to, amount);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">permit</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> spender,
        <span class="hljs-keyword">uint256</span> value,
        <span class="hljs-keyword">uint256</span> deadline,
        <span class="hljs-keyword">uint8</span> v,
        <span class="hljs-keyword">bytes32</span> r,
        <span class="hljs-keyword">bytes32</span> s
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        <span class="hljs-built_in">require</span>(deadline <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, <span class="hljs-string">"PERMIT_DEADLINE_EXPIRED"</span>);

        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">address</span> recoveredAddress <span class="hljs-operator">=</span> <span class="hljs-built_in">ecrecover</span>(
                <span class="hljs-built_in">keccak256</span>(
                    <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(
                        <span class="hljs-string">"\\x19\\x01"</span>,
                        DOMAIN_SEPARATOR(),
                        <span class="hljs-built_in">keccak256</span>(
                            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
                                <span class="hljs-built_in">keccak256</span>(
                                    <span class="hljs-string">"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"</span>
                                ),
                                owner,
                                spender,
                                value,
                                nonces[owner]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>,
                                deadline
                            )
                        )
                    )
                ),
                v,
                r,
                s
            );

            <span class="hljs-built_in">require</span>(
                recoveredAddress <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>) <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> recoveredAddress <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner,
                <span class="hljs-string">"INVALID_SIGNER"</span>
            );

            allowance[recoveredAddress][spender] <span class="hljs-operator">=</span> value;
        }

        <span class="hljs-keyword">emit</span> Approval(owner, spender, value);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">DOMAIN_SEPARATOR</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">chainid</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> INITIAL_CHAIN_ID
            ? INITIAL_DOMAIN_SEPARATOR
            : computeDomainSeparator();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">computeDomainSeparator</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
                <span class="hljs-built_in">keccak256</span>(
                    <span class="hljs-string">"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"</span>
                ),
                <span class="hljs-built_in">keccak256</span>(<span class="hljs-keyword">bytes</span>(name)),
                <span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"1"</span>),
                <span class="hljs-built_in">block</span>.<span class="hljs-built_in">chainid</span>,
                <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)
            )
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;

        <span class="hljs-keyword">unchecked</span> {
            balanceOf[to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        }

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        balanceOf[<span class="hljs-keyword">from</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;

        <span class="hljs-keyword">unchecked</span> {
            totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        }

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), amount);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC20Permit</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _symbol, <span class="hljs-keyword">uint8</span> _decimals</span>)
        <span class="hljs-title">ERC20</span>(<span class="hljs-params">_name, _symbol, _decimals</span>)
    </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        _mint(to, amount);
    }
}
</code></pre>`

export default html
