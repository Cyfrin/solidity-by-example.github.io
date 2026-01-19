// metadata
export const version = "0.8.26"
export const title = "Uniswap V4 Flash Loan"
export const description = "Example of flash loans on Uniswap V4"
export const cyfrinLink = ""

export const keywords = [
    "defi",
    "uniswap",
    "v4",
    "flash",
    "loan",
    "amm",
    "poolmanager",
]

export const codes = [
    {
        fileName: "UniswapV4Flash.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8vIFVuaXN3YXAgVjQgUG9vbE1hbmFnZXIgb24gRXRoZXJldW0gbWFpbm5ldAphZGRyZXNzIGNvbnN0YW50IFBPT0xfTUFOQUdFUiA9IDB4MDAwMDAwMDAwMDA0NDQ0YzVkYzc1Y0IzNTgzODBEMmUzZEUwOEE5MDsKCi8vLyBAbm90aWNlIEV4YW1wbGUgb2YgZmxhc2ggbG9hbnMgb24gVW5pc3dhcCBWNAovLy8gQGRldiBWNCBmbGFzaCBsb2FucyBhcmUgRlJFRSBkdWUgdG8gZmxhc2ggYWNjb3VudGluZyAtIG5vIGZlZXMhCi8vLyBCb3Jyb3cgdG9rZW5zIGR1cmluZyB1bmxvY2sgY2FsbGJhY2ssIHJlcGF5IGJlZm9yZSBjYWxsYmFjayBlbmRzCmNvbnRyYWN0IFVuaXN3YXBWNEZsYXNoIGlzIElVbmxvY2tDYWxsYmFjayB7CiAgICBJUG9vbE1hbmFnZXIgcHVibGljIGltbXV0YWJsZSBwb29sTWFuYWdlcjsKCiAgICBlcnJvciBOb3RQb29sTWFuYWdlcigpOwogICAgZXJyb3IgRmxhc2hMb2FuRmFpbGVkKCk7CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgcG9vbE1hbmFnZXIgPSBJUG9vbE1hbmFnZXIoUE9PTF9NQU5BR0VSKTsKICAgIH0KCiAgICAvLy8gQG5vdGljZSBFeGVjdXRlIGEgZmxhc2ggbG9hbgogICAgLy8vIEBwYXJhbSBjdXJyZW5jeSBUaGUgdG9rZW4gdG8gYm9ycm93ICh1c2UgYWRkcmVzcygwKSBmb3IgbmF0aXZlIEVUSCkKICAgIC8vLyBAcGFyYW0gYW1vdW50IEFtb3VudCB0byBib3Jyb3cKICAgIC8vLyBAcGFyYW0gZGF0YSBBcmJpdHJhcnkgZGF0YSB0byBwYXNzIHRvIHlvdXIgZmxhc2ggbG9hbiBsb2dpYwogICAgZnVuY3Rpb24gZmxhc2goQ3VycmVuY3kgY3VycmVuY3ksIHVpbnQyNTYgYW1vdW50LCBieXRlcyBjYWxsZGF0YSBkYXRhKQogICAgICAgIGV4dGVybmFsCiAgICB7CiAgICAgICAgYnl0ZXMgbWVtb3J5IGNhbGxiYWNrRGF0YSA9IGFiaS5lbmNvZGUoCiAgICAgICAgICAgIEZsYXNoUGFyYW1zKHsKICAgICAgICAgICAgICAgIGN1cnJlbmN5OiBjdXJyZW5jeSwKICAgICAgICAgICAgICAgIGFtb3VudDogYW1vdW50LAogICAgICAgICAgICAgICAgc2VuZGVyOiBtc2cuc2VuZGVyLAogICAgICAgICAgICAgICAgZGF0YTogZGF0YQogICAgICAgICAgICB9KQogICAgICAgICk7CgogICAgICAgIHBvb2xNYW5hZ2VyLnVubG9jayhjYWxsYmFja0RhdGEpOwogICAgfQoKICAgIC8vLyBAbm90aWNlIENhbGxiYWNrIGZyb20gUG9vbE1hbmFnZXIgLSBleGVjdXRlIGZsYXNoIGxvYW4gbG9naWMgaGVyZQogICAgZnVuY3Rpb24gdW5sb2NrQ2FsbGJhY2soYnl0ZXMgY2FsbGRhdGEgY2FsbGJhY2tEYXRhKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb3ZlcnJpZGUKICAgICAgICByZXR1cm5zIChieXRlcyBtZW1vcnkpCiAgICB7CiAgICAgICAgaWYgKG1zZy5zZW5kZXIgIT0gYWRkcmVzcyhwb29sTWFuYWdlcikpIHJldmVydCBOb3RQb29sTWFuYWdlcigpOwoKICAgICAgICBGbGFzaFBhcmFtcyBtZW1vcnkgcGFyYW1zID0gYWJpLmRlY29kZShjYWxsYmFja0RhdGEsIChGbGFzaFBhcmFtcykpOwoKICAgICAgICAvLyBUYWtlIHRva2VucyBmcm9tIHRoZSBwb29sIChjcmVhdGVzIGEgZGVidCkKICAgICAgICBwb29sTWFuYWdlci50YWtlKHBhcmFtcy5jdXJyZW5jeSwgYWRkcmVzcyh0aGlzKSwgcGFyYW1zLmFtb3VudCk7CgogICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgICAgICAgLy8gWW91ciBmbGFzaCBsb2FuIGxvZ2ljIGdvZXMgaGVyZSEKICAgICAgICAvLyBZb3Ugbm93IGhhdmUgdGhlIGJvcnJvd2VkIHRva2VucyB0byB1c2UKICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKICAgICAgICAvLyBFeGFtcGxlOiBjYWxsIGN1c3RvbSBsb2dpYwogICAgICAgIF9leGVjdXRlRmxhc2hMb2FuTG9naWMocGFyYW1zLmN1cnJlbmN5LCBwYXJhbXMuYW1vdW50LCBwYXJhbXMuZGF0YSk7CgogICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgICAgICAgLy8gUmVwYXkgdGhlIGZsYXNoIGxvYW4KICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKICAgICAgICAvLyBGb3IgRVJDMjA6IHRyYW5zZmVyIHRva2VucyB0byBQb29sTWFuYWdlciwgdGhlbiBzZXR0bGUKICAgICAgICBpZiAoIWlzTmF0aXZlKHBhcmFtcy5jdXJyZW5jeSkpIHsKICAgICAgICAgICAgSUVSQzIwKEN1cnJlbmN5LnVud3JhcChwYXJhbXMuY3VycmVuY3kpKS50cmFuc2ZlcigKICAgICAgICAgICAgICAgIGFkZHJlc3MocG9vbE1hbmFnZXIpLAogICAgICAgICAgICAgICAgcGFyYW1zLmFtb3VudAogICAgICAgICAgICApOwogICAgICAgICAgICBwb29sTWFuYWdlci5zZXR0bGUocGFyYW1zLmN1cnJlbmN5KTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAvLyBGb3IgbmF0aXZlIEVUSDogc2V0dGxlIHdpdGggdmFsdWUKICAgICAgICAgICAgcG9vbE1hbmFnZXIuc2V0dGxle3ZhbHVlOiBwYXJhbXMuYW1vdW50fShwYXJhbXMuY3VycmVuY3kpOwogICAgICAgIH0KCiAgICAgICAgLy8gTm8gZmVlcyEgRGVsdGEgaXMgbm93IHplcm8sIHVubG9jayB3aWxsIHN1Y2NlZWQKICAgICAgICByZXR1cm4gYnl0ZXMoIiIpOwogICAgfQoKICAgIC8vLyBAbm90aWNlIE92ZXJyaWRlIHRoaXMgdG8gaW1wbGVtZW50IHlvdXIgZmxhc2ggbG9hbiBsb2dpYwogICAgZnVuY3Rpb24gX2V4ZWN1dGVGbGFzaExvYW5Mb2dpYygKICAgICAgICBDdXJyZW5jeSBjdXJyZW5jeSwKICAgICAgICB1aW50MjU2IGFtb3VudCwKICAgICAgICBieXRlcyBtZW1vcnkgZGF0YQogICAgKSBpbnRlcm5hbCB2aXJ0dWFsIHsKICAgICAgICAvLyBFeGFtcGxlOiBhcmJpdHJhZ2UsIGxpcXVpZGF0aW9uLCBjb2xsYXRlcmFsIHN3YXAsIGV0Yy4KICAgICAgICAvLyBUaGUgYm9ycm93ZWQgdG9rZW5zIGFyZSBpbiB0aGlzIGNvbnRyYWN0CiAgICB9CgogICAgZnVuY3Rpb24gaXNOYXRpdmUoQ3VycmVuY3kgY3VycmVuY3kpIGludGVybmFsIHB1cmUgcmV0dXJucyAoYm9vbCkgewogICAgICAgIHJldHVybiBDdXJyZW5jeS51bndyYXAoY3VycmVuY3kpID09IGFkZHJlc3MoMCk7CiAgICB9CgogICAgLy8gQWxsb3cgcmVjZWl2aW5nIEVUSAogICAgcmVjZWl2ZSgpIGV4dGVybmFsIHBheWFibGUge30KCiAgICBzdHJ1Y3QgRmxhc2hQYXJhbXMgewogICAgICAgIEN1cnJlbmN5IGN1cnJlbmN5OwogICAgICAgIHVpbnQyNTYgYW1vdW50OwogICAgICAgIGFkZHJlc3Mgc2VuZGVyOwogICAgICAgIGJ5dGVzIGRhdGE7CiAgICB9Cn0KCi8vIEN1cnJlbmN5IGlzIGFuIGFkZHJlc3Mgd3JhcHBlciAoYWRkcmVzcygwKSA9IG5hdGl2ZSBFVEgpCnR5cGUgQ3VycmVuY3kgaXMgYWRkcmVzczsKCmxpYnJhcnkgQ3VycmVuY3lMaWJyYXJ5IHsKICAgIGZ1bmN0aW9uIHVud3JhcChDdXJyZW5jeSBjdXJyZW5jeSkgaW50ZXJuYWwgcHVyZSByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgcmV0dXJuIEN1cnJlbmN5LnVud3JhcChjdXJyZW5jeSk7CiAgICB9Cn0KCnVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CgppbnRlcmZhY2UgSVBvb2xNYW5hZ2VyIHsKICAgIGZ1bmN0aW9uIHVubG9jayhieXRlcyBjYWxsZGF0YSBkYXRhKSBleHRlcm5hbCByZXR1cm5zIChieXRlcyBtZW1vcnkpOwogICAgZnVuY3Rpb24gc2V0dGxlKEN1cnJlbmN5IGN1cnJlbmN5KSBleHRlcm5hbCBwYXlhYmxlIHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gdGFrZShDdXJyZW5jeSBjdXJyZW5jeSwgYWRkcmVzcyB0bywgdWludDI1NiBhbW91bnQpIGV4dGVybmFsOwp9CgppbnRlcmZhY2UgSVVubG9ja0NhbGxiYWNrIHsKICAgIGZ1bmN0aW9uIHVubG9ja0NhbGxiYWNrKGJ5dGVzIGNhbGxkYXRhIGRhdGEpIGV4dGVybmFsIHJldHVybnMgKGJ5dGVzIG1lbW9yeSk7Cn0KCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwp9Cg==",
    },
]

const html = `<p>Uniswap V4 flash loans are <strong>free</strong> - no fees! This is possible due to flash accounting.</p>
<p>How it works:</p>
<ol>
<li>Call <code>poolManager.unlock()</code> to start</li>
<li>In callback, call <code>poolManager.take()</code> to borrow tokens (creates a debt)</li>
<li>Use the tokens for arbitrage, liquidations, collateral swaps, etc.</li>
<li>Repay by transferring tokens back and calling <code>poolManager.settle()</code></li>
<li>As long as deltas net to zero, the transaction succeeds</li>
</ol>
<p>Unlike V3 which charged a fee on flash loans, V4&#39;s singleton architecture and flash accounting make borrowing essentially free - you only pay gas.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">// Uniswap V4 PoolManager on Ethereum mainnet</span>
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> POOL_MANAGER <span class="hljs-operator">=</span> <span class="hljs-number">0x000000000004444c5dc75cB358380D2e3dE08A90</span>;

<span class="hljs-comment">/// @notice Example of flash loans on Uniswap V4</span>
<span class="hljs-comment">/// @dev V4 flash loans are FREE due to flash accounting - no fees!</span>
<span class="hljs-comment">/// Borrow tokens during unlock callback, repay before callback ends</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV4Flash</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IUnlockCallback</span> </span>{
    IPoolManager <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> poolManager;

    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">NotPoolManager</span>(<span class="hljs-params"></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">FlashLoanFailed</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        poolManager <span class="hljs-operator">=</span> IPoolManager(POOL_MANAGER);
    }

    <span class="hljs-comment">/// @notice Execute a flash loan</span>
    <span class="hljs-comment">/// @param currency The token to borrow (use address(0) for native ETH)</span>
    <span class="hljs-comment">/// @param amount Amount to borrow</span>
    <span class="hljs-comment">/// @param data Arbitrary data to pass to your flash loan logic</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flash</span>(<span class="hljs-params">Currency currency, <span class="hljs-keyword">uint256</span> amount, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
    </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> callbackData <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
            FlashParams({
                currency: currency,
                amount: amount,
                sender: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
                data: data
            })
        );

        poolManager.unlock(callbackData);
    }

    <span class="hljs-comment">/// @notice Callback from PoolManager - execute flash loan logic here</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unlockCallback</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> callbackData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(poolManager)) <span class="hljs-keyword">revert</span> NotPoolManager();

        FlashParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(callbackData, (FlashParams));

        <span class="hljs-comment">// Take tokens from the pool (creates a debt)</span>
        poolManager.take(params.currency, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), params.amount);

        <span class="hljs-comment">// ============================================</span>
        <span class="hljs-comment">// Your flash loan logic goes here!</span>
        <span class="hljs-comment">// You now have the borrowed tokens to use</span>
        <span class="hljs-comment">// ============================================</span>

        <span class="hljs-comment">// Example: call custom logic</span>
        _executeFlashLoanLogic(params.currency, params.amount, params.data);

        <span class="hljs-comment">// ============================================</span>
        <span class="hljs-comment">// Repay the flash loan</span>
        <span class="hljs-comment">// ============================================</span>

        <span class="hljs-comment">// For ERC20: transfer tokens to PoolManager, then settle</span>
        <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>isNative(params.currency)) {
            IERC20(Currency.<span class="hljs-built_in">unwrap</span>(params.currency)).<span class="hljs-built_in">transfer</span>(
                <span class="hljs-keyword">address</span>(poolManager),
                params.amount
            );
            poolManager.settle(params.currency);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-comment">// For native ETH: settle with value</span>
            poolManager.settle{<span class="hljs-built_in">value</span>: params.amount}(params.currency);
        }

        <span class="hljs-comment">// No fees! Delta is now zero, unlock will succeed</span>
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">bytes</span>(<span class="hljs-string">""</span>);
    }

    <span class="hljs-comment">/// @notice Override this to implement your flash loan logic</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_executeFlashLoanLogic</span>(<span class="hljs-params">
        Currency currency,
        <span class="hljs-keyword">uint256</span> amount,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        <span class="hljs-comment">// Example: arbitrage, liquidation, collateral swap, etc.</span>
        <span class="hljs-comment">// The borrowed tokens are in this contract</span>
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isNative</span>(<span class="hljs-params">Currency currency</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span> Currency.<span class="hljs-built_in">unwrap</span>(currency) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>);
    }

    <span class="hljs-comment">// Allow receiving ETH</span>
    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-keyword">struct</span> <span class="hljs-title">FlashParams</span> {
        Currency currency;
        <span class="hljs-keyword">uint256</span> amount;
        <span class="hljs-keyword">address</span> sender;
        <span class="hljs-keyword">bytes</span> data;
    }
}

<span class="hljs-comment">// Currency is an address wrapper (address(0) = native ETH)</span>
<span class="hljs-keyword">type</span> Currency <span class="hljs-keyword">is</span> <span class="hljs-keyword">address</span>;

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">CurrencyLibrary</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unwrap</span>(<span class="hljs-params">Currency currency</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> Currency.<span class="hljs-built_in">unwrap</span>(currency);
    }
}

<span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IPoolManager</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unlock</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">settle</span>(<span class="hljs-params">Currency currency</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">take</span>(<span class="hljs-params">Currency currency, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUnlockCallback</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unlockCallback</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
}
</code></pre>`

export default html
