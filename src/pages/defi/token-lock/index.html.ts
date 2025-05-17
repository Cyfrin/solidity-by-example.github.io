// metadata
export const version = "0.8.26"
export const title = "Token Lock"
export const description = "Token lock"
export const cyfrinLink = ""

export const keywords = [
    "defi",
    "token",
    "lock",
]

export const codes = [
    {
        fileName: "IERC20.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwp9Cg==",
    },
    {
        fileName: "TokenLock.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKaW1wb3J0IHtJRVJDMjB9IGZyb20gIi4vSUVSQzIwLnNvbCI7Cgpjb250cmFjdCBBdXRoIHsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBib29sKSBwdWJsaWMgYXV0aG9yaXplZDsKCiAgICBtb2RpZmllciBhdXRoKCkgewogICAgICAgIHJlcXVpcmUoYXV0aG9yaXplZFttc2cuc2VuZGVyXSwgIm5vdCBhdXRob3JpemVkIik7CiAgICAgICAgXzsKICAgIH0KCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgICBhdXRob3JpemVkW21zZy5zZW5kZXJdID0gdHJ1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiBhbGxvdyhhZGRyZXNzIHVzZXIpIGV4dGVybmFsIGF1dGggewogICAgICAgIGF1dGhvcml6ZWRbdXNlcl0gPSB0cnVlOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlbnkoYWRkcmVzcyB1c2VyKSBleHRlcm5hbCBhdXRoIHsKICAgICAgICBhdXRob3JpemVkW3VzZXJdID0gZmFsc2U7CiAgICB9Cn0KCmNvbnRyYWN0IFRva2VuTG9jayBpcyBBdXRoIHsKICAgIHN0cnVjdCBMb2NrIHsKICAgICAgICAvLyBMb2NrZWQgYW1vdW50CiAgICAgICAgdWludDI1NiBhbW91bnQ7CiAgICAgICAgLy8gTGFzdCBsb2NrIHRpbWVzdGFtcAogICAgICAgIHVpbnQzMiB1cGRhdGVkQXQ7CiAgICAgICAgLy8gTG9jayBleHBpcnkgdGltZXN0YW1wCiAgICAgICAgdWludDMyIGV4cGlyZXNBdDsKICAgICAgICAvLyBMb2NrIGR1cmF0aW9uCiAgICAgICAgdWludDMyIGR1cmF0aW9uOwogICAgfQoKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBMb2NrKSBwdWJsaWMgbG9ja3M7CiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gdWludDI1NikgcHVibGljIGZyZWVkOwoKICAgIGZ1bmN0aW9uIGdldChhZGRyZXNzIHRva2VuKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKExvY2sgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGxvY2tzW3Rva2VuXTsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXQoYWRkcmVzcyB0b2tlbiwgdWludDMyIGR1cmF0aW9uKSBleHRlcm5hbCBhdXRoIHsKICAgICAgICBsb2Nrc1t0b2tlbl0uZHVyYXRpb24gPSBkdXJhdGlvbjsKICAgIH0KCiAgICBmdW5jdGlvbiB1bmxvY2tlZChhZGRyZXNzIHRva2VuKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgTG9jayBtZW1vcnkgbCA9IGxvY2tzW3Rva2VuXTsKICAgICAgICAvLyBibG9jay50aW1lc3RhbXAgPj0gZXhwaXJlc0F0ID49IHVwZGF0ZWRBdAogICAgICAgIC8vIGJsb2NrLnRpbWVzdGFtcCA+PSB1cGRhdGVBdCA+PSBleHBpcmVzQXQKICAgICAgICBpZiAoYmxvY2sudGltZXN0YW1wID49IGwuZXhwaXJlc0F0KSB7CiAgICAgICAgICAgIHJldHVybiBsLmFtb3VudDsKICAgICAgICB9CiAgICAgICAgLy8gZXhwaXJlc0F0ID4gYmxvY2sudGltZXN0YW1wID49IHVwZGF0ZUF0CiAgICAgICAgcmV0dXJuIGwuYW1vdW50ICogKGJsb2NrLnRpbWVzdGFtcCAtIHVpbnQyNTYobC51cGRhdGVkQXQpKQogICAgICAgICAgICAvIHVpbnQyNTYobC5leHBpcmVzQXQgLSBsLnVwZGF0ZWRBdCk7CiAgICB9CgogICAgZnVuY3Rpb24gY2xhaW1hYmxlKGFkZHJlc3MgdG9rZW4pIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICByZXR1cm4gZnJlZWRbdG9rZW5dICsgdW5sb2NrZWQodG9rZW4pOwogICAgfQoKICAgIGZ1bmN0aW9uIGxvY2soYWRkcmVzcyB0b2tlbiwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIGF1dGggewogICAgICAgIHVpbnQyNTYgZnJlZSA9IHVubG9ja2VkKHRva2VuKTsKCiAgICAgICAgTG9jayBzdG9yYWdlIGwgPSBsb2Nrc1t0b2tlbl07CiAgICAgICAgbC5hbW91bnQgLT0gZnJlZTsKICAgICAgICBsLnVwZGF0ZWRBdCA9IHVpbnQzMihibG9jay50aW1lc3RhbXApOwogICAgICAgIGwuZXhwaXJlc0F0ID0gdWludDMyKGJsb2NrLnRpbWVzdGFtcCkgKyBsLmR1cmF0aW9uOwogICAgICAgIGZyZWVkW3Rva2VuXSArPSBmcmVlOwoKICAgICAgICBpZiAoYW1vdW50ID4gMCkgewogICAgICAgICAgICBJRVJDMjAodG9rZW4pLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBhbW91bnQpOwogICAgICAgICAgICBsLmFtb3VudCArPSBhbW91bnQ7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHVubG9jayhhZGRyZXNzIHRva2VuKSBleHRlcm5hbCBhdXRoIHJldHVybnMgKHVpbnQyNTYgYW1vdW50KSB7CiAgICAgICAgdWludDI1NiBmcmVlID0gdW5sb2NrZWQodG9rZW4pOwoKICAgICAgICBMb2NrIHN0b3JhZ2UgbCA9IGxvY2tzW3Rva2VuXTsKICAgICAgICBsLmFtb3VudCAtPSBmcmVlOwogICAgICAgIGwudXBkYXRlZEF0ID0gdWludDMyKGJsb2NrLnRpbWVzdGFtcCk7CgogICAgICAgIGFtb3VudCA9IGZyZWVkW3Rva2VuXSArIGZyZWU7CiAgICAgICAgZnJlZWRbdG9rZW5dID0gMDsKCiAgICAgICAgaWYgKGFtb3VudCA+IDApIHsKICAgICAgICAgICAgSUVSQzIwKHRva2VuKS50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnQpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBzeW5jKGFkZHJlc3MgdG9rZW4pIGV4dGVybmFsIGF1dGggewogICAgICAgIHVpbnQyNTYgcmVzZXJ2ZWQgPSBmcmVlZFt0b2tlbl0gKyBsb2Nrc1t0b2tlbl0uYW1vdW50OwogICAgICAgIHVpbnQyNTYgYmFsID0gSUVSQzIwKHRva2VuKS5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSk7CiAgICAgICAgaWYgKGJhbCA+IHJlc2VydmVkKSB7CiAgICAgICAgICAgIElFUkMyMCh0b2tlbikudHJhbnNmZXIobXNnLnNlbmRlciwgYmFsIC0gcmVzZXJ2ZWQpOwogICAgICAgIH0KICAgIH0KfQo=",
    },
]

const html = `<p>Example of a contract that locks tokens and releases them linearly over a specific time period.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">IERC20</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"./IERC20.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Auth</span> </span>{
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> authorized;

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">auth</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(authorized[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"not authorized"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        authorized[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allow</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> user</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">auth</span> </span>{
        authorized[user] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deny</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> user</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">auth</span> </span>{
        authorized[user] <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TokenLock</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Auth</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Lock</span> {
        <span class="hljs-comment">// Locked amount</span>
        <span class="hljs-keyword">uint256</span> amount;
        <span class="hljs-comment">// Last lock timestamp</span>
        <span class="hljs-keyword">uint32</span> updatedAt;
        <span class="hljs-comment">// Lock expiry timestamp</span>
        <span class="hljs-keyword">uint32</span> expiresAt;
        <span class="hljs-comment">// Lock duration</span>
        <span class="hljs-keyword">uint32</span> duration;
    }

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> Lock) <span class="hljs-keyword">public</span> locks;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> freed;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Lock <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> locks[token];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token, <span class="hljs-keyword">uint32</span> duration</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">auth</span> </span>{
        locks[token].duration <span class="hljs-operator">=</span> duration;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unlocked</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        Lock <span class="hljs-keyword">memory</span> l <span class="hljs-operator">=</span> locks[token];
        <span class="hljs-comment">// block.timestamp &gt;= expiresAt &gt;= updatedAt</span>
        <span class="hljs-comment">// block.timestamp &gt;= updateAt &gt;= expiresAt</span>
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> l.expiresAt) {
            <span class="hljs-keyword">return</span> l.amount;
        }
        <span class="hljs-comment">// expiresAt &gt; block.timestamp &gt;= updateAt</span>
        <span class="hljs-keyword">return</span> l.amount <span class="hljs-operator">*</span> (<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">-</span> <span class="hljs-keyword">uint256</span>(l.updatedAt))
            <span class="hljs-operator">/</span> <span class="hljs-keyword">uint256</span>(l.expiresAt <span class="hljs-operator">-</span> l.updatedAt);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claimable</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> freed[token] <span class="hljs-operator">+</span> unlocked(token);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">lock</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">auth</span> </span>{
        <span class="hljs-keyword">uint256</span> free <span class="hljs-operator">=</span> unlocked(token);

        Lock <span class="hljs-keyword">storage</span> l <span class="hljs-operator">=</span> locks[token];
        l.amount <span class="hljs-operator">-</span><span class="hljs-operator">=</span> free;
        l.updatedAt <span class="hljs-operator">=</span> <span class="hljs-keyword">uint32</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);
        l.expiresAt <span class="hljs-operator">=</span> <span class="hljs-keyword">uint32</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>) <span class="hljs-operator">+</span> l.duration;
        freed[token] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> free;

        <span class="hljs-keyword">if</span> (amount <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            IERC20(token).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount);
            l.amount <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unlock</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">auth</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount</span>) </span>{
        <span class="hljs-keyword">uint256</span> free <span class="hljs-operator">=</span> unlocked(token);

        Lock <span class="hljs-keyword">storage</span> l <span class="hljs-operator">=</span> locks[token];
        l.amount <span class="hljs-operator">-</span><span class="hljs-operator">=</span> free;
        l.updatedAt <span class="hljs-operator">=</span> <span class="hljs-keyword">uint32</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);

        amount <span class="hljs-operator">=</span> freed[token] <span class="hljs-operator">+</span> free;
        freed[token] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

        <span class="hljs-keyword">if</span> (amount <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            IERC20(token).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sync</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">auth</span> </span>{
        <span class="hljs-keyword">uint256</span> reserved <span class="hljs-operator">=</span> freed[token] <span class="hljs-operator">+</span> locks[token].amount;
        <span class="hljs-keyword">uint256</span> bal <span class="hljs-operator">=</span> IERC20(token).balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">if</span> (bal <span class="hljs-operator">&gt;</span> reserved) {
            IERC20(token).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, bal <span class="hljs-operator">-</span> reserved);
        }
    }
}
</code></pre><pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
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
</code></pre>`

export default html
