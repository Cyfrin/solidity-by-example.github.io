// metadata
export const version = "0.8.20"
export const title = "Bi-Directional Payment Channel"
export const description = "An example of bi-directional payment channels in Solidity"

export const keywords = [
  "app",
  "application",
  "bi-directional",
  "payment",
  "channel",
  "signature",
  "cryptography",
]

export const codes = [
  {
    fileName: "BiDirectionalPaymentChannel.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCi8qCk9wZW5pbmcgYSBjaGFubmVsCjEuIEFsaWNlIGFuZCBCb2IgZnVuZCBhIG11bHRpLXNpZyB3YWxsZXQKMi4gUHJlY29tcHV0ZSBwYXltZW50IGNoYW5uZWwgYWRkcmVzcwozLiBBbGljZSBhbmQgQm9iIGV4Y2hhbmdlcyBzaWduYXR1cmVzIG9mIGluaXRpYWwgYmFsYW5jZXMKNC4gQWxpY2UgYW5kIEJvYiBjcmVhdGVzIGEgdHJhbnNhY3Rpb24gdGhhdCBjYW4gZGVwbG95IGEgcGF5bWVudCBjaGFubmVsIGZyb20KICAgdGhlIG11bHRpLXNpZyB3YWxsZXQKClVwZGF0ZSBjaGFubmVsIGJhbGFuY2VzCjEuIFJlcGVhdCBzdGVwcyAxIC0gMyBmcm9tIG9wZW5pbmcgYSBjaGFubmVsCjIuIEZyb20gbXVsdGktc2lnIHdhbGxldCBjcmVhdGUgYSB0cmFuc2FjdGlvbiB0aGF0IHdpbGwKICAgLSBkZWxldGUgdGhlIHRyYW5zYWN0aW9uIHRoYXQgd291bGQgaGF2ZSBkZXBsb3llZCB0aGUgb2xkIHBheW1lbnQgY2hhbm5lbAogICAtIGFuZCB0aGVuIGNyZWF0ZSBhIHRyYW5zYWN0aW9uIHRoYXQgY2FuIGRlcGxveSBhIHBheW1lbnQgY2hhbm5lbCB3aXRoIHRoZQogICAgIG5ldyBiYWxhbmNlcwoKQ2xvc2luZyBhIGNoYW5uZWwgd2hlbiBBbGljZSBhbmQgQm9iIGFncmVlIG9uIHRoZSBmaW5hbCBiYWxhbmNlCjEuIEZyb20gbXVsdGktc2lnIHdhbGxldCBjcmVhdGUgYSB0cmFuc2FjdGlvbiB0aGF0IHdpbGwKICAgLSBzZW5kIHBheW1lbnRzIHRvIEFsaWNlIGFuZCBCb2IKICAgLSBhbmQgdGhlbiBkZWxldGUgdGhlIHRyYW5zYWN0aW9uIHRoYXQgd291bGQgaGF2ZSBjcmVhdGVkIHRoZSBwYXltZW50IGNoYW5uZWwKCkNsb3NpbmcgYSBjaGFubmVsIHdoZW4gQWxpY2UgYW5kIEJvYiBkbyBub3QgYWdyZWUgb24gdGhlIGZpbmFsIGJhbGFuY2VzCjEuIERlcGxveSBwYXltZW50IGNoYW5uZWwgZnJvbSBtdWx0aS1zaWcKMi4gY2FsbCBjaGFsbGVuZ2VFeGl0KCkgdG8gc3RhcnQgdGhlIHByb2Nlc3Mgb2YgY2xvc2luZyBhIGNoYW5uZWwKMy4gQWxpY2UgYW5kIEJvYiBjYW4gd2l0aGRyYXcgZnVuZHMgb25jZSB0aGUgY2hhbm5lbCBpcyBleHBpcmVkCiovCgppbXBvcnQgImdpdGh1Yi5jb20vT3BlblplcHBlbGluL29wZW56ZXBwZWxpbi1jb250cmFjdHMvYmxvYi9yZWxlYXNlLXY0LjUvY29udHJhY3RzL3V0aWxzL2NyeXB0b2dyYXBoeS9FQ0RTQS5zb2wiOwoKY29udHJhY3QgQmlEaXJlY3Rpb25hbFBheW1lbnRDaGFubmVsIHsKICAgIHVzaW5nIEVDRFNBIGZvciBieXRlczMyOwoKICAgIGV2ZW50IENoYWxsZW5nZUV4aXQoYWRkcmVzcyBpbmRleGVkIHNlbmRlciwgdWludCBub25jZSk7CiAgICBldmVudCBXaXRoZHJhdyhhZGRyZXNzIGluZGV4ZWQgdG8sIHVpbnQgYW1vdW50KTsKCiAgICBhZGRyZXNzIHBheWFibGVbMl0gcHVibGljIHVzZXJzOwogICAgbWFwcGluZyhhZGRyZXNzID0+IGJvb2wpIHB1YmxpYyBpc1VzZXI7CgogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBiYWxhbmNlczsKCiAgICB1aW50IHB1YmxpYyBjaGFsbGVuZ2VQZXJpb2Q7CiAgICB1aW50IHB1YmxpYyBleHBpcmVzQXQ7CiAgICB1aW50IHB1YmxpYyBub25jZTsKCiAgICBtb2RpZmllciBjaGVja0JhbGFuY2VzKHVpbnRbMl0gbWVtb3J5IF9iYWxhbmNlcykgewogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIGFkZHJlc3ModGhpcykuYmFsYW5jZSA+PSBfYmFsYW5jZXNbMF0gKyBfYmFsYW5jZXNbMV0sCiAgICAgICAgICAgICJiYWxhbmNlIG9mIGNvbnRyYWN0IG11c3QgYmUgPj0gdG8gdGhlIHRvdGFsIGJhbGFuY2Ugb2YgdXNlcnMiCiAgICAgICAgKTsKICAgICAgICBfOwogICAgfQoKICAgIC8vIE5PVEU6IGRlcG9zaXQgZnJvbSBtdWx0aS1zaWcgd2FsbGV0CiAgICBjb25zdHJ1Y3RvcigKICAgICAgICBhZGRyZXNzIHBheWFibGVbMl0gbWVtb3J5IF91c2VycywKICAgICAgICB1aW50WzJdIG1lbW9yeSBfYmFsYW5jZXMsCiAgICAgICAgdWludCBfZXhwaXJlc0F0LAogICAgICAgIHVpbnQgX2NoYWxsZW5nZVBlcmlvZAogICAgKSBwYXlhYmxlIGNoZWNrQmFsYW5jZXMoX2JhbGFuY2VzKSB7CiAgICAgICAgcmVxdWlyZShfZXhwaXJlc0F0ID4gYmxvY2sudGltZXN0YW1wLCAiRXhwaXJhdGlvbiBtdXN0IGJlID4gbm93Iik7CiAgICAgICAgcmVxdWlyZShfY2hhbGxlbmdlUGVyaW9kID4gMCwgIkNoYWxsZW5nZSBwZXJpb2QgbXVzdCBiZSA+IDAiKTsKCiAgICAgICAgZm9yICh1aW50IGkgPSAwOyBpIDwgX3VzZXJzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIGFkZHJlc3MgcGF5YWJsZSB1c2VyID0gX3VzZXJzW2ldOwoKICAgICAgICAgICAgcmVxdWlyZSghaXNVc2VyW3VzZXJdLCAidXNlciBtdXN0IGJlIHVuaXF1ZSIpOwogICAgICAgICAgICB1c2Vyc1tpXSA9IHVzZXI7CiAgICAgICAgICAgIGlzVXNlclt1c2VyXSA9IHRydWU7CgogICAgICAgICAgICBiYWxhbmNlc1t1c2VyXSA9IF9iYWxhbmNlc1tpXTsKICAgICAgICB9CgogICAgICAgIGV4cGlyZXNBdCA9IF9leHBpcmVzQXQ7CiAgICAgICAgY2hhbGxlbmdlUGVyaW9kID0gX2NoYWxsZW5nZVBlcmlvZDsKICAgIH0KCiAgICBmdW5jdGlvbiB2ZXJpZnkoCiAgICAgICAgYnl0ZXNbMl0gbWVtb3J5IF9zaWduYXR1cmVzLAogICAgICAgIGFkZHJlc3MgX2NvbnRyYWN0LAogICAgICAgIGFkZHJlc3NbMl0gbWVtb3J5IF9zaWduZXJzLAogICAgICAgIHVpbnRbMl0gbWVtb3J5IF9iYWxhbmNlcywKICAgICAgICB1aW50IF9ub25jZQogICAgKSBwdWJsaWMgcHVyZSByZXR1cm5zIChib29sKSB7CiAgICAgICAgZm9yICh1aW50IGkgPSAwOyBpIDwgX3NpZ25hdHVyZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgLyoKICAgICAgICAgICAgTk9URTogc2lnbiB3aXRoIGFkZHJlc3Mgb2YgdGhpcyBjb250cmFjdCB0byBwcm90ZWN0CiAgICAgICAgICAgICAgICAgIGFnYWlucyByZXBsYXkgYXR0YWNrIG9uIG90aGVyIGNvbnRyYWN0cwogICAgICAgICAgICAqLwogICAgICAgICAgICBib29sIHZhbGlkID0gX3NpZ25lcnNbaV0gPT0KICAgICAgICAgICAgICAgIGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKF9jb250cmFjdCwgX2JhbGFuY2VzLCBfbm9uY2UpKQogICAgICAgICAgICAgICAgICAgIC50b0V0aFNpZ25lZE1lc3NhZ2VIYXNoKCkKICAgICAgICAgICAgICAgICAgICAucmVjb3Zlcihfc2lnbmF0dXJlc1tpXSk7CgogICAgICAgICAgICBpZiAoIXZhbGlkKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHJldHVybiB0cnVlOwogICAgfQoKICAgIG1vZGlmaWVyIGNoZWNrU2lnbmF0dXJlcygKICAgICAgICBieXRlc1syXSBtZW1vcnkgX3NpZ25hdHVyZXMsCiAgICAgICAgdWludFsyXSBtZW1vcnkgX2JhbGFuY2VzLAogICAgICAgIHVpbnQgX25vbmNlCiAgICApIHsKICAgICAgICAvLyBOb3RlOiBjb3B5IHN0b3JhZ2UgYXJyYXkgdG8gbWVtb3J5CiAgICAgICAgYWRkcmVzc1syXSBtZW1vcnkgc2lnbmVyczsKICAgICAgICBmb3IgKHVpbnQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBzaWduZXJzW2ldID0gdXNlcnNbaV07CiAgICAgICAgfQoKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICB2ZXJpZnkoX3NpZ25hdHVyZXMsIGFkZHJlc3ModGhpcyksIHNpZ25lcnMsIF9iYWxhbmNlcywgX25vbmNlKSwKICAgICAgICAgICAgIkludmFsaWQgc2lnbmF0dXJlIgogICAgICAgICk7CgogICAgICAgIF87CiAgICB9CgogICAgbW9kaWZpZXIgb25seVVzZXIoKSB7CiAgICAgICAgcmVxdWlyZShpc1VzZXJbbXNnLnNlbmRlcl0sICJOb3QgdXNlciIpOwogICAgICAgIF87CiAgICB9CgogICAgZnVuY3Rpb24gY2hhbGxlbmdlRXhpdCgKICAgICAgICB1aW50WzJdIG1lbW9yeSBfYmFsYW5jZXMsCiAgICAgICAgdWludCBfbm9uY2UsCiAgICAgICAgYnl0ZXNbMl0gbWVtb3J5IF9zaWduYXR1cmVzCiAgICApCiAgICAgICAgcHVibGljCiAgICAgICAgb25seVVzZXIKICAgICAgICBjaGVja1NpZ25hdHVyZXMoX3NpZ25hdHVyZXMsIF9iYWxhbmNlcywgX25vbmNlKQogICAgICAgIGNoZWNrQmFsYW5jZXMoX2JhbGFuY2VzKQogICAgewogICAgICAgIHJlcXVpcmUoYmxvY2sudGltZXN0YW1wIDwgZXhwaXJlc0F0LCAiRXhwaXJlZCBjaGFsbGVuZ2UgcGVyaW9kIik7CiAgICAgICAgcmVxdWlyZShfbm9uY2UgPiBub25jZSwgIk5vbmNlIG11c3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IG5vbmNlIik7CgogICAgICAgIGZvciAodWludCBpID0gMDsgaSA8IF9iYWxhbmNlcy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBiYWxhbmNlc1t1c2Vyc1tpXV0gPSBfYmFsYW5jZXNbaV07CiAgICAgICAgfQoKICAgICAgICBub25jZSA9IF9ub25jZTsKICAgICAgICBleHBpcmVzQXQgPSBibG9jay50aW1lc3RhbXAgKyBjaGFsbGVuZ2VQZXJpb2Q7CgogICAgICAgIGVtaXQgQ2hhbGxlbmdlRXhpdChtc2cuc2VuZGVyLCBub25jZSk7CiAgICB9CgogICAgZnVuY3Rpb24gd2l0aGRyYXcoKSBwdWJsaWMgb25seVVzZXIgewogICAgICAgIHJlcXVpcmUoYmxvY2sudGltZXN0YW1wID49IGV4cGlyZXNBdCwgIkNoYWxsZW5nZSBwZXJpb2QgaGFzIG5vdCBleHBpcmVkIHlldCIpOwoKICAgICAgICB1aW50IGFtb3VudCA9IGJhbGFuY2VzW21zZy5zZW5kZXJdOwogICAgICAgIGJhbGFuY2VzW21zZy5zZW5kZXJdID0gMDsKCiAgICAgICAgKGJvb2wgc2VudCwgKSA9IG1zZy5zZW5kZXIuY2FsbHt2YWx1ZTogYW1vdW50fSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKCiAgICAgICAgZW1pdCBXaXRoZHJhdyhtc2cuc2VuZGVyLCBhbW91bnQpOwogICAgfQp9Cg==",
  },
]

const html = `<p>Bi-directional payment channels allow participants <code>Alice</code> and <code>Bob</code> to repeatedly transfer Ether off chain.</p>
<p>Payments can go both ways, <code>Alice</code> pays <code>Bob</code> and <code>Bob</code> pays <code>Alice</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-comment">/*
Opening a channel
1. Alice and Bob fund a multi-sig wallet
2. Precompute payment channel address
3. Alice and Bob exchanges signatures of initial balances
4. Alice and Bob creates a transaction that can deploy a payment channel from
   the multi-sig wallet

Update channel balances
1. Repeat steps 1 - 3 from opening a channel
2. From multi-sig wallet create a transaction that will
   - delete the transaction that would have deployed the old payment channel
   - and then create a transaction that can deploy a payment channel with the
     new balances

Closing a channel when Alice and Bob agree on the final balance
1. From multi-sig wallet create a transaction that will
   - send payments to Alice and Bob
   - and then delete the transaction that would have created the payment channel

Closing a channel when Alice and Bob do not agree on the final balances
1. Deploy payment channel from multi-sig
2. call challengeExit() to start the process of closing a channel
3. Alice and Bob can withdraw funds once the channel is expired
*/</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BiDirectionalPaymentChannel</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ChallengeExit</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> sender, <span class="hljs-keyword">uint</span> nonce</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> amount</span>)</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">public</span> users;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> isUser;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balances;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> challengePeriod;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> expiresAt;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> nonce;

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">checkBalances</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances</span>) </span>{
        <span class="hljs-built_in">require</span>(
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> _balances[<span class="hljs-number">0</span>] <span class="hljs-operator">+</span> _balances[<span class="hljs-number">1</span>],
            <span class="hljs-string">"balance of contract must be &gt;= to the total balance of users"</span>
        );
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> deposit from multi-sig wallet</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _users,
        <span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint</span> _expiresAt,
        <span class="hljs-keyword">uint</span> _challengePeriod
    </span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title">checkBalances</span>(<span class="hljs-params">_balances</span>) </span>{
        <span class="hljs-built_in">require</span>(_expiresAt <span class="hljs-operator">&gt;</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, <span class="hljs-string">"Expiration must be &gt; now"</span>);
        <span class="hljs-built_in">require</span>(_challengePeriod <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Challenge period must be &gt; 0"</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _users.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> user <span class="hljs-operator">=</span> _users[i];

            <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>isUser[user], <span class="hljs-string">"user must be unique"</span>);
            users[i] <span class="hljs-operator">=</span> user;
            isUser[user] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

            balances[user] <span class="hljs-operator">=</span> _balances[i];
        }

        expiresAt <span class="hljs-operator">=</span> _expiresAt;
        challengePeriod <span class="hljs-operator">=</span> _challengePeriod;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">verify</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _signatures,
        <span class="hljs-keyword">address</span> _contract,
        <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _signers,
        <span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint</span> _nonce
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _signatures.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-comment">/*
            <span class="hljs-doctag">NOTE:</span> sign with address of this contract to protect
                  agains replay attack on other contracts
            */</span>
            <span class="hljs-keyword">bool</span> valid <span class="hljs-operator">=</span> _signers[i] <span class="hljs-operator">=</span><span class="hljs-operator">=</span>
                <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_contract, _balances, _nonce))
                    .toEthSignedMessageHash()
                    .recover(_signatures[i]);

            <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>valid) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
            }
        }

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">checkSignatures</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _signatures,
        <span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint</span> _nonce
    </span>) </span>{
        <span class="hljs-comment">// Note: copy storage array to memory</span>
        <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> signers;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> users.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            signers[i] <span class="hljs-operator">=</span> users[i];
        }

        <span class="hljs-built_in">require</span>(
            verify(_signatures, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), signers, _balances, _nonce),
            <span class="hljs-string">"Invalid signature"</span>
        );

        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">onlyUser</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(isUser[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"Not user"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">challengeExit</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint</span> _nonce,
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _signatures
    </span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyUser</span>
        <span class="hljs-title">checkSignatures</span>(<span class="hljs-params">_signatures, _balances, _nonce</span>)
        <span class="hljs-title">checkBalances</span>(<span class="hljs-params">_balances</span>)
    </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&lt;</span> expiresAt, <span class="hljs-string">"Expired challenge period"</span>);
        <span class="hljs-built_in">require</span>(_nonce <span class="hljs-operator">&gt;</span> nonce, <span class="hljs-string">"Nonce must be greater than the current nonce"</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _balances.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            balances[users[i]] <span class="hljs-operator">=</span> _balances[i];
        }

        nonce <span class="hljs-operator">=</span> _nonce;
        expiresAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> challengePeriod;

        <span class="hljs-keyword">emit</span> ChallengeExit(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, nonce);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">onlyUser</span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> expiresAt, <span class="hljs-string">"Challenge period has not expired yet"</span>);

        <span class="hljs-keyword">uint</span> amount <span class="hljs-operator">=</span> balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        <span class="hljs-keyword">emit</span> Withdraw(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount);
    }
}
</code></pre>`

export default html
