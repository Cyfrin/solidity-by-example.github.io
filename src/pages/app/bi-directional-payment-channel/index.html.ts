// metadata
export const version = "0.8.13"
export const title = "Bi-Directional Payment Channel"
export const description = "An example of bi-directional payment channels in Solidity"
export const codes = [
  {
    fileName: "BiDirectionalPaymentChannel.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKcHJhZ21hIGV4cGVyaW1lbnRhbCBBQklFbmNvZGVyVjI7CgovKgpPcGVuaW5nIGEgY2hhbm5lbAoxLiBBbGljZSBhbmQgQm9iIGZ1bmQgYSBtdWx0aS1zaWcgd2FsbGV0CjIuIFByZWNvbXB1dGUgcGF5bWVudCBjaGFubmVsIGFkZHJlc3MKMy4gQWxpY2UgYW5kIEJvYiBleGNoYW5nZXMgc2lnbmF0dXJlcyBvZiBpbml0aWFsIGJhbGFuY2VzCjQuIEFsaWNlIGFuZCBCb2IgY3JlYXRlcyBhIHRyYW5zYWN0aW9uIHRoYXQgY2FuIGRlcGxveSBhIHBheW1lbnQgY2hhbm5lbCBmcm9tCiAgIHRoZSBtdWx0aS1zaWcgd2FsbGV0CgpVcGRhdGUgY2hhbm5lbCBiYWxhbmNlcwoxLiBSZXBlYXQgc3RlcHMgMSAtIDMgZnJvbSBvcGVuaW5nIGEgY2hhbm5lbAoyLiBGcm9tIG11bHRpLXNpZyB3YWxsZXQgY3JlYXRlIGEgdHJhbnNhY3Rpb24gdGhhdCB3aWxsCiAgIC0gZGVsZXRlIHRoZSB0cmFuc2FjdGlvbiB0aGF0IHdvdWxkIGhhdmUgZGVwbG95ZWQgdGhlIG9sZCBwYXltZW50IGNoYW5uZWwKICAgLSBhbmQgdGhlbiBjcmVhdGUgYSB0cmFuc2FjdGlvbiB0aGF0IGNhbiBkZXBsb3kgYSBwYXltZW50IGNoYW5uZWwgd2l0aCB0aGUKICAgICBuZXcgYmFsYW5jZXMKCkNsb3NpbmcgYSBjaGFubmVsIHdoZW4gQWxpY2UgYW5kIEJvYiBhZ3JlZSBvbiB0aGUgZmluYWwgYmFsYW5jZQoxLiBGcm9tIG11bHRpLXNpZyB3YWxsZXQgY3JlYXRlIGEgdHJhbnNhY3Rpb24gdGhhdCB3aWxsCiAgIC0gc2VuZCBwYXltZW50cyB0byBBbGljZSBhbmQgQm9iCiAgIC0gYW5kIHRoZW4gZGVsZXRlIHRoZSB0cmFuc2FjdGlvbiB0aGF0IHdvdWxkIGhhdmUgY3JlYXRlZCB0aGUgcGF5bWVudCBjaGFubmVsCgpDbG9zaW5nIGEgY2hhbm5lbCB3aGVuIEFsaWNlIGFuZCBCb2IgZG8gbm90IGFncmVlIG9uIHRoZSBmaW5hbCBiYWxhbmNlcwoxLiBEZXBsb3kgcGF5bWVudCBjaGFubmVsIGZyb20gbXVsdGktc2lnCjIuIGNhbGwgY2hhbGxlbmdlRXhpdCgpIHRvIHN0YXJ0IHRoZSBwcm9jZXNzIG9mIGNsb3NpbmcgYSBjaGFubmVsCjMuIEFsaWNlIGFuZCBCb2IgY2FuIHdpdGhkcmF3IGZ1bmRzIG9uY2UgdGhlIGNoYW5uZWwgaXMgZXhwaXJlZAoqLwoKaW1wb3J0ICJnaXRodWIuY29tL09wZW5aZXBwZWxpbi9vcGVuemVwcGVsaW4tY29udHJhY3RzL2Jsb2IvcmVsZWFzZS12NC41L2NvbnRyYWN0cy91dGlscy9tYXRoL1NhZmVNYXRoLnNvbCI7CmltcG9ydCAiZ2l0aHViLmNvbS9PcGVuWmVwcGVsaW4vb3BlbnplcHBlbGluLWNvbnRyYWN0cy9ibG9iL3JlbGVhc2UtdjQuNS9jb250cmFjdHMvdXRpbHMvY3J5cHRvZ3JhcGh5L0VDRFNBLnNvbCI7Cgpjb250cmFjdCBCaURpcmVjdGlvbmFsUGF5bWVudENoYW5uZWwgewogICAgdXNpbmcgU2FmZU1hdGggZm9yIHVpbnQ7CiAgICB1c2luZyBFQ0RTQSBmb3IgYnl0ZXMzMjsKCiAgICBldmVudCBDaGFsbGVuZ2VFeGl0KGFkZHJlc3MgaW5kZXhlZCBzZW5kZXIsIHVpbnQgbm9uY2UpOwogICAgZXZlbnQgV2l0aGRyYXcoYWRkcmVzcyBpbmRleGVkIHRvLCB1aW50IGFtb3VudCk7CgogICAgYWRkcmVzcyBwYXlhYmxlWzJdIHB1YmxpYyB1c2VyczsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBib29sKSBwdWJsaWMgaXNVc2VyOwoKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50KSBwdWJsaWMgYmFsYW5jZXM7CgogICAgdWludCBwdWJsaWMgY2hhbGxlbmdlUGVyaW9kOwogICAgdWludCBwdWJsaWMgZXhwaXJlc0F0OwogICAgdWludCBwdWJsaWMgbm9uY2U7CgogICAgbW9kaWZpZXIgY2hlY2tCYWxhbmNlcyh1aW50WzJdIG1lbW9yeSBfYmFsYW5jZXMpIHsKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICBhZGRyZXNzKHRoaXMpLmJhbGFuY2UgPj0gX2JhbGFuY2VzWzBdLmFkZChfYmFsYW5jZXNbMV0pLAogICAgICAgICAgICAiYmFsYW5jZSBvZiBjb250cmFjdCBtdXN0IGJlID49IHRvIHRoZSB0b3RhbCBiYWxhbmNlIG9mIHVzZXJzIgogICAgICAgICk7CiAgICAgICAgXzsKICAgIH0KCiAgICAvLyBOT1RFOiBkZXBvc2l0IGZyb20gbXVsdGktc2lnIHdhbGxldAogICAgY29uc3RydWN0b3IoCiAgICAgICAgYWRkcmVzcyBwYXlhYmxlWzJdIG1lbW9yeSBfdXNlcnMsCiAgICAgICAgdWludFsyXSBtZW1vcnkgX2JhbGFuY2VzLAogICAgICAgIHVpbnQgX2V4cGlyZXNBdCwKICAgICAgICB1aW50IF9jaGFsbGVuZ2VQZXJpb2QKICAgICkgcGF5YWJsZSBjaGVja0JhbGFuY2VzKF9iYWxhbmNlcykgewogICAgICAgIHJlcXVpcmUoX2V4cGlyZXNBdCA+IGJsb2NrLnRpbWVzdGFtcCwgIkV4cGlyYXRpb24gbXVzdCBiZSA+IG5vdyIpOwogICAgICAgIHJlcXVpcmUoX2NoYWxsZW5nZVBlcmlvZCA+IDAsICJDaGFsbGVuZ2UgcGVyaW9kIG11c3QgYmUgPiAwIik7CgogICAgICAgIGZvciAodWludCBpID0gMDsgaSA8IF91c2Vycy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBhZGRyZXNzIHBheWFibGUgdXNlciA9IF91c2Vyc1tpXTsKCiAgICAgICAgICAgIHJlcXVpcmUoIWlzVXNlclt1c2VyXSwgInVzZXIgbXVzdCBiZSB1bmlxdWUiKTsKICAgICAgICAgICAgdXNlcnNbaV0gPSB1c2VyOwogICAgICAgICAgICBpc1VzZXJbdXNlcl0gPSB0cnVlOwoKICAgICAgICAgICAgYmFsYW5jZXNbdXNlcl0gPSBfYmFsYW5jZXNbaV07CiAgICAgICAgfQoKICAgICAgICBleHBpcmVzQXQgPSBfZXhwaXJlc0F0OwogICAgICAgIGNoYWxsZW5nZVBlcmlvZCA9IF9jaGFsbGVuZ2VQZXJpb2Q7CiAgICB9CgogICAgZnVuY3Rpb24gdmVyaWZ5KAogICAgICAgIGJ5dGVzWzJdIG1lbW9yeSBfc2lnbmF0dXJlcywKICAgICAgICBhZGRyZXNzIF9jb250cmFjdCwKICAgICAgICBhZGRyZXNzWzJdIG1lbW9yeSBfc2lnbmVycywKICAgICAgICB1aW50WzJdIG1lbW9yeSBfYmFsYW5jZXMsCiAgICAgICAgdWludCBfbm9uY2UKICAgICkgcHVibGljIHB1cmUgcmV0dXJucyAoYm9vbCkgewogICAgICAgIGZvciAodWludCBpID0gMDsgaSA8IF9zaWduYXR1cmVzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIC8qCiAgICAgICAgICAgIE5PVEU6IHNpZ24gd2l0aCBhZGRyZXNzIG9mIHRoaXMgY29udHJhY3QgdG8gcHJvdGVjdAogICAgICAgICAgICAgICAgICBhZ2FpbnMgcmVwbGF5IGF0dGFjayBvbiBvdGhlciBjb250cmFjdHMKICAgICAgICAgICAgKi8KICAgICAgICAgICAgYm9vbCB2YWxpZCA9IF9zaWduZXJzW2ldID09CiAgICAgICAgICAgICAgICBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChfY29udHJhY3QsIF9iYWxhbmNlcywgX25vbmNlKSkKICAgICAgICAgICAgICAgICAgICAudG9FdGhTaWduZWRNZXNzYWdlSGFzaCgpCiAgICAgICAgICAgICAgICAgICAgLnJlY292ZXIoX3NpZ25hdHVyZXNbaV0pOwoKICAgICAgICAgICAgaWYgKCF2YWxpZCkgewogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBtb2RpZmllciBjaGVja1NpZ25hdHVyZXMoCiAgICAgICAgYnl0ZXNbMl0gbWVtb3J5IF9zaWduYXR1cmVzLAogICAgICAgIHVpbnRbMl0gbWVtb3J5IF9iYWxhbmNlcywKICAgICAgICB1aW50IF9ub25jZQogICAgKSB7CiAgICAgICAgLy8gTm90ZTogY29weSBzdG9yYWdlIGFycmF5IHRvIG1lbW9yeQogICAgICAgIGFkZHJlc3NbMl0gbWVtb3J5IHNpZ25lcnM7CiAgICAgICAgZm9yICh1aW50IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgc2lnbmVyc1tpXSA9IHVzZXJzW2ldOwogICAgICAgIH0KCiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgdmVyaWZ5KF9zaWduYXR1cmVzLCBhZGRyZXNzKHRoaXMpLCBzaWduZXJzLCBfYmFsYW5jZXMsIF9ub25jZSksCiAgICAgICAgICAgICJJbnZhbGlkIHNpZ25hdHVyZSIKICAgICAgICApOwoKICAgICAgICBfOwogICAgfQoKICAgIG1vZGlmaWVyIG9ubHlVc2VyKCkgewogICAgICAgIHJlcXVpcmUoaXNVc2VyW21zZy5zZW5kZXJdLCAiTm90IHVzZXIiKTsKICAgICAgICBfOwogICAgfQoKICAgIGZ1bmN0aW9uIGNoYWxsZW5nZUV4aXQoCiAgICAgICAgdWludFsyXSBtZW1vcnkgX2JhbGFuY2VzLAogICAgICAgIHVpbnQgX25vbmNlLAogICAgICAgIGJ5dGVzWzJdIG1lbW9yeSBfc2lnbmF0dXJlcwogICAgKQogICAgICAgIHB1YmxpYwogICAgICAgIG9ubHlVc2VyCiAgICAgICAgY2hlY2tTaWduYXR1cmVzKF9zaWduYXR1cmVzLCBfYmFsYW5jZXMsIF9ub25jZSkKICAgICAgICBjaGVja0JhbGFuY2VzKF9iYWxhbmNlcykKICAgIHsKICAgICAgICByZXF1aXJlKGJsb2NrLnRpbWVzdGFtcCA8IGV4cGlyZXNBdCwgIkV4cGlyZWQgY2hhbGxlbmdlIHBlcmlvZCIpOwogICAgICAgIHJlcXVpcmUoX25vbmNlID4gbm9uY2UsICJOb25jZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCBub25jZSIpOwoKICAgICAgICBmb3IgKHVpbnQgaSA9IDA7IGkgPCBfYmFsYW5jZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgYmFsYW5jZXNbdXNlcnNbaV1dID0gX2JhbGFuY2VzW2ldOwogICAgICAgIH0KCiAgICAgICAgbm9uY2UgPSBfbm9uY2U7CiAgICAgICAgZXhwaXJlc0F0ID0gYmxvY2sudGltZXN0YW1wLmFkZChjaGFsbGVuZ2VQZXJpb2QpOwoKICAgICAgICBlbWl0IENoYWxsZW5nZUV4aXQobXNnLnNlbmRlciwgbm9uY2UpOwogICAgfQoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KCkgcHVibGljIG9ubHlVc2VyIHsKICAgICAgICByZXF1aXJlKGJsb2NrLnRpbWVzdGFtcCA+PSBleHBpcmVzQXQsICJDaGFsbGVuZ2UgcGVyaW9kIGhhcyBub3QgZXhwaXJlZCB5ZXQiKTsKCiAgICAgICAgdWludCBhbW91bnQgPSBiYWxhbmNlc1ttc2cuc2VuZGVyXTsKICAgICAgICBiYWxhbmNlc1ttc2cuc2VuZGVyXSA9IDA7CgogICAgICAgIChib29sIHNlbnQsICkgPSBtc2cuc2VuZGVyLmNhbGx7dmFsdWU6IGFtb3VudH0oIiIpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CgogICAgICAgIGVtaXQgV2l0aGRyYXcobXNnLnNlbmRlciwgYW1vdW50KTsKICAgIH0KfQo=",
  },
]

const html = `<p>Bi-directional payment channels allow participants <code>Alice</code> and <code>Bob</code> to repeatedly transfer Ether off chain.</p>
<p>Payments can go both ways, <code>Alice</code> pays <code>Bob</code> and <code>Bob</code> pays <code>Alice</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">experimental</span> <span class="hljs-built_in">ABIEncoderV2</span>;</span>

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

<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/math/SafeMath.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BiDirectionalPaymentChannel</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">SafeMath</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">uint</span></span>;
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
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> _balances[<span class="hljs-number">0</span>].add(_balances[<span class="hljs-number">1</span>]),
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
        expiresAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>.add(challengePeriod);

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
</code></pre>
`

export default html
