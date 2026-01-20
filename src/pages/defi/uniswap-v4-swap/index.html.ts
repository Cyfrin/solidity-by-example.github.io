// metadata
export const version = "0.8.26"
export const title = "Uniswap V4 Swap"
export const description = "Example of swapping tokens on Uniswap V4"
export const cyfrinLink = ""

export const keywords = [
    "defi",
    "uniswap",
    "v4",
    "swap",
    "amm",
    "poolmanager",
]

export const codes = [
    {
        fileName: "UniswapV4Swap.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8vIFVuaXN3YXAgVjQgUG9vbE1hbmFnZXIgb24gRXRoZXJldW0gbWFpbm5ldAphZGRyZXNzIGNvbnN0YW50IFBPT0xfTUFOQUdFUiA9IDB4MDAwMDAwMDAwMDA0NDQ0YzVkYzc1Y0IzNTgzODBEMmUzZEUwOEE5MDsKYWRkcmVzcyBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwphZGRyZXNzIGNvbnN0YW50IFVTREMgPSAweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg7CgovLy8gQG5vdGljZSBFeGFtcGxlIG9mIHN3YXBwaW5nIG9uIFVuaXN3YXAgVjQgdXNpbmcgdGhlIFBvb2xNYW5hZ2VyIGRpcmVjdGx5Ci8vLyBAZGV2IFY0IHVzZXMgYSBzaW5nbGV0b24gUG9vbE1hbmFnZXIgd2l0aCB1bmxvY2svdW5sb2NrQ2FsbGJhY2sgcGF0dGVybgpjb250cmFjdCBVbmlzd2FwVjRTd2FwIGlzIElVbmxvY2tDYWxsYmFjayB7CiAgICBJUG9vbE1hbmFnZXIgcHVibGljIGltbXV0YWJsZSBwb29sTWFuYWdlcjsKCiAgICBlcnJvciBOb3RQb29sTWFuYWdlcigpOwogICAgZXJyb3IgU3dhcEZhaWxlZCgpOwoKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICAgIHBvb2xNYW5hZ2VyID0gSVBvb2xNYW5hZ2VyKFBPT0xfTUFOQUdFUik7CiAgICB9CgogICAgLy8vIEBub3RpY2UgU3dhcCBleGFjdCBpbnB1dCBhbW91bnQgZm9yIG91dHB1dCB0b2tlbnMKICAgIC8vLyBAcGFyYW0ga2V5IFRoZSBwb29sIGtleSBpZGVudGlmeWluZyB0aGUgcG9vbAogICAgLy8vIEBwYXJhbSBhbW91bnRJbiBBbW91bnQgb2YgaW5wdXQgdG9rZW5zIHRvIHN3YXAKICAgIC8vLyBAcGFyYW0gbWluQW1vdW50T3V0IE1pbmltdW0gYWNjZXB0YWJsZSBvdXRwdXQgYW1vdW50CiAgICBmdW5jdGlvbiBzd2FwRXhhY3RJbnB1dCgKICAgICAgICBQb29sS2V5IGNhbGxkYXRhIGtleSwKICAgICAgICB1aW50MTI4IGFtb3VudEluLAogICAgICAgIHVpbnQxMjggbWluQW1vdW50T3V0CiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KSB7CiAgICAgICAgLy8gRW5jb2RlIHN3YXAgcGFyYW1ldGVycyB0byBwYXNzIHRocm91Z2ggdW5sb2NrIGNhbGxiYWNrCiAgICAgICAgYnl0ZXMgbWVtb3J5IGRhdGEgPSBhYmkuZW5jb2RlKAogICAgICAgICAgICBTd2FwUGFyYW1zKHsKICAgICAgICAgICAgICAgIGtleToga2V5LAogICAgICAgICAgICAgICAgYW1vdW50SW46IGFtb3VudEluLAogICAgICAgICAgICAgICAgbWluQW1vdW50T3V0OiBtaW5BbW91bnRPdXQsCiAgICAgICAgICAgICAgICB6ZXJvRm9yT25lOiB0cnVlLAogICAgICAgICAgICAgICAgc2VuZGVyOiBtc2cuc2VuZGVyCiAgICAgICAgICAgIH0pCiAgICAgICAgKTsKCiAgICAgICAgLy8gSW5pdGlhdGUgdGhlIHN3YXAgLSBQb29sTWFuYWdlciB3aWxsIGNhbGwgdW5sb2NrQ2FsbGJhY2sKICAgICAgICBieXRlcyBtZW1vcnkgcmVzdWx0ID0gcG9vbE1hbmFnZXIudW5sb2NrKGRhdGEpOwogICAgICAgIGFtb3VudE91dCA9IGFiaS5kZWNvZGUocmVzdWx0LCAodWludDI1NikpOwogICAgfQoKICAgIC8vLyBAbm90aWNlIENhbGxiYWNrIGZyb20gUG9vbE1hbmFnZXIgYWZ0ZXIgdW5sb2NrCiAgICAvLy8gQGRldiBUaGlzIGlzIHdoZXJlIHRoZSBhY3R1YWwgc3dhcCBsb2dpYyBleGVjdXRlcwogICAgZnVuY3Rpb24gdW5sb2NrQ2FsbGJhY2soYnl0ZXMgY2FsbGRhdGEgZGF0YSkKICAgICAgICBleHRlcm5hbAogICAgICAgIG92ZXJyaWRlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KQogICAgewogICAgICAgIGlmIChtc2cuc2VuZGVyICE9IGFkZHJlc3MocG9vbE1hbmFnZXIpKSByZXZlcnQgTm90UG9vbE1hbmFnZXIoKTsKCiAgICAgICAgU3dhcFBhcmFtcyBtZW1vcnkgcGFyYW1zID0gYWJpLmRlY29kZShkYXRhLCAoU3dhcFBhcmFtcykpOwoKICAgICAgICAvLyBFeGVjdXRlIHRoZSBzd2FwCiAgICAgICAgLy8gemVyb0Zvck9uZTogdHJ1ZSA9IHRva2VuMCAtPiB0b2tlbjEsIGZhbHNlID0gdG9rZW4xIC0+IHRva2VuMAogICAgICAgIC8vIGFtb3VudFNwZWNpZmllZDogbmVnYXRpdmUgPSBleGFjdCBpbnB1dCwgcG9zaXRpdmUgPSBleGFjdCBvdXRwdXQKICAgICAgICBCYWxhbmNlRGVsdGEgZGVsdGEgPSBwb29sTWFuYWdlci5zd2FwKAogICAgICAgICAgICBwYXJhbXMua2V5LAogICAgICAgICAgICBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyh7CiAgICAgICAgICAgICAgICB6ZXJvRm9yT25lOiBwYXJhbXMuemVyb0Zvck9uZSwKICAgICAgICAgICAgICAgIGFtb3VudFNwZWNpZmllZDogLWludDI1Nih1aW50MjU2KHBhcmFtcy5hbW91bnRJbikpLAogICAgICAgICAgICAgICAgc3FydFByaWNlTGltaXRYOTY6IHBhcmFtcy56ZXJvRm9yT25lCiAgICAgICAgICAgICAgICAgICAgPyBNSU5fU1FSVF9QUklDRSArIDEKICAgICAgICAgICAgICAgICAgICA6IE1BWF9TUVJUX1BSSUNFIC0gMQogICAgICAgICAgICB9KSwKICAgICAgICAgICAgYnl0ZXMoIiIpCiAgICAgICAgKTsKCiAgICAgICAgLy8gQ2FsY3VsYXRlIGFtb3VudHMgZnJvbSBkZWx0YQogICAgICAgIC8vIGRlbHRhLmFtb3VudDAoKSBpcyBuZWdhdGl2ZSAod2Ugb3dlIHRoZSBwb29sKQogICAgICAgIC8vIGRlbHRhLmFtb3VudDEoKSBpcyBwb3NpdGl2ZSAocG9vbCBvd2VzIHVzKQogICAgICAgIHVpbnQyNTYgYW1vdW50T3V0ID0gcGFyYW1zLnplcm9Gb3JPbmUKICAgICAgICAgICAgPyB1aW50MjU2KGludDI1NihkZWx0YS5hbW91bnQxKCkpKQogICAgICAgICAgICA6IHVpbnQyNTYoaW50MjU2KGRlbHRhLmFtb3VudDAoKSkpOwoKICAgICAgICBpZiAoYW1vdW50T3V0IDwgcGFyYW1zLm1pbkFtb3VudE91dCkgcmV2ZXJ0IFN3YXBGYWlsZWQoKTsKCiAgICAgICAgLy8gU2V0dGxlIHRoZSBpbnB1dCB0b2tlbiAocGF5IHdoYXQgd2Ugb3dlKQogICAgICAgIEN1cnJlbmN5IGlucHV0Q3VycmVuY3kgPSBwYXJhbXMuemVyb0Zvck9uZQogICAgICAgICAgICA/IHBhcmFtcy5rZXkuY3VycmVuY3kwCiAgICAgICAgICAgIDogcGFyYW1zLmtleS5jdXJyZW5jeTE7CgogICAgICAgIElFUkMyMChDdXJyZW5jeS51bndyYXAoaW5wdXRDdXJyZW5jeSkpLnRyYW5zZmVyRnJvbSgKICAgICAgICAgICAgcGFyYW1zLnNlbmRlciwKICAgICAgICAgICAgYWRkcmVzcyhwb29sTWFuYWdlciksCiAgICAgICAgICAgIHBhcmFtcy5hbW91bnRJbgogICAgICAgICk7CiAgICAgICAgcG9vbE1hbmFnZXIuc2V0dGxlKGlucHV0Q3VycmVuY3kpOwoKICAgICAgICAvLyBUYWtlIHRoZSBvdXRwdXQgdG9rZW4gKHJlY2VpdmUgd2hhdCB3ZSdyZSBvd2VkKQogICAgICAgIEN1cnJlbmN5IG91dHB1dEN1cnJlbmN5ID0gcGFyYW1zLnplcm9Gb3JPbmUKICAgICAgICAgICAgPyBwYXJhbXMua2V5LmN1cnJlbmN5MQogICAgICAgICAgICA6IHBhcmFtcy5rZXkuY3VycmVuY3kwOwoKICAgICAgICBwb29sTWFuYWdlci50YWtlKG91dHB1dEN1cnJlbmN5LCBwYXJhbXMuc2VuZGVyLCBhbW91bnRPdXQpOwoKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShhbW91bnRPdXQpOwogICAgfQoKICAgIHN0cnVjdCBTd2FwUGFyYW1zIHsKICAgICAgICBQb29sS2V5IGtleTsKICAgICAgICB1aW50MTI4IGFtb3VudEluOwogICAgICAgIHVpbnQxMjggbWluQW1vdW50T3V0OwogICAgICAgIGJvb2wgemVyb0Zvck9uZTsKICAgICAgICBhZGRyZXNzIHNlbmRlcjsKICAgIH0KfQoKLy8gU3FydCBwcmljZSBsaW1pdHMgZm9yIHN3YXBzCnVpbnQxNjAgY29uc3RhbnQgTUlOX1NRUlRfUFJJQ0UgPSA0Mjk1MTI4NzM5Owp1aW50MTYwIGNvbnN0YW50IE1BWF9TUVJUX1BSSUNFID0KICAgIDE0NjE0NDY3MDM0ODUyMTAxMDMyODcyNzMwNTIyMDM5ODg4MjIzNzg3MjM5NzAzNDI7CgovLyBDdXJyZW5jeSBpcyBhbiBhZGRyZXNzIHdyYXBwZXIgKGFkZHJlc3MoMCkgPSBuYXRpdmUgRVRIKQp0eXBlIEN1cnJlbmN5IGlzIGFkZHJlc3M7CgpsaWJyYXJ5IEN1cnJlbmN5TGlicmFyeSB7CiAgICBmdW5jdGlvbiB1bndyYXAoQ3VycmVuY3kgY3VycmVuY3kpIGludGVybmFsIHB1cmUgcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJldHVybiBDdXJyZW5jeS51bndyYXAoY3VycmVuY3kpOwogICAgfQp9Cgp1c2luZyBDdXJyZW5jeUxpYnJhcnkgZm9yIEN1cnJlbmN5OwoKc3RydWN0IFBvb2xLZXkgewogICAgQ3VycmVuY3kgY3VycmVuY3kwOwogICAgQ3VycmVuY3kgY3VycmVuY3kxOwogICAgdWludDI0IGZlZTsKICAgIGludDI0IHRpY2tTcGFjaW5nOwogICAgYWRkcmVzcyBob29rczsKfQoKLy8vIEBub3RpY2UgQmFsYW5jZSBkZWx0YSByZXR1cm5lZCBmcm9tIHN3YXAgb3BlcmF0aW9ucwovLy8gQGRldiBOZWdhdGl2ZSA9IHlvdSBvd2UgdGhlIHBvb2wsIFBvc2l0aXZlID0gcG9vbCBvd2VzIHlvdQp0eXBlIEJhbGFuY2VEZWx0YSBpcyBpbnQyNTY7CgpsaWJyYXJ5IEJhbGFuY2VEZWx0YUxpYnJhcnkgewogICAgZnVuY3Rpb24gYW1vdW50MChCYWxhbmNlRGVsdGEgZGVsdGEpIGludGVybmFsIHB1cmUgcmV0dXJucyAoaW50MTI4KSB7CiAgICAgICAgcmV0dXJuIGludDEyOChpbnQyNTYoQmFsYW5jZURlbHRhLnVud3JhcChkZWx0YSkgPj4gMTI4KSk7CiAgICB9CgogICAgZnVuY3Rpb24gYW1vdW50MShCYWxhbmNlRGVsdGEgZGVsdGEpIGludGVybmFsIHB1cmUgcmV0dXJucyAoaW50MTI4KSB7CiAgICAgICAgcmV0dXJuIGludDEyOChpbnQyNTYoQmFsYW5jZURlbHRhLnVud3JhcChkZWx0YSkpKTsKICAgIH0KfQoKdXNpbmcgQmFsYW5jZURlbHRhTGlicmFyeSBmb3IgQmFsYW5jZURlbHRhOwoKaW50ZXJmYWNlIElQb29sTWFuYWdlciB7CiAgICBzdHJ1Y3QgU3dhcFBhcmFtcyB7CiAgICAgICAgYm9vbCB6ZXJvRm9yT25lOwogICAgICAgIGludDI1NiBhbW91bnRTcGVjaWZpZWQ7CiAgICAgICAgdWludDE2MCBzcXJ0UHJpY2VMaW1pdFg5NjsKICAgIH0KCiAgICBmdW5jdGlvbiB1bmxvY2soYnl0ZXMgY2FsbGRhdGEgZGF0YSkgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KTsKICAgIGZ1bmN0aW9uIHN3YXAoUG9vbEtleSBtZW1vcnkga2V5LCBTd2FwUGFyYW1zIG1lbW9yeSBwYXJhbXMsIGJ5dGVzIGNhbGxkYXRhIGhvb2tEYXRhKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoQmFsYW5jZURlbHRhKTsKICAgIGZ1bmN0aW9uIHNldHRsZShDdXJyZW5jeSBjdXJyZW5jeSkgZXh0ZXJuYWwgcGF5YWJsZSByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIHRha2UoQ3VycmVuY3kgY3VycmVuY3ksIGFkZHJlc3MgdG8sIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbDsKfQoKaW50ZXJmYWNlIElVbmxvY2tDYWxsYmFjayB7CiAgICBmdW5jdGlvbiB1bmxvY2tDYWxsYmFjayhieXRlcyBjYWxsZGF0YSBkYXRhKSBleHRlcm5hbCByZXR1cm5zIChieXRlcyBtZW1vcnkpOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIHNlbmRlciwgYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwp9Cg==",
    },
]

const html = `<p>Uniswap V4 introduces a singleton <code>PoolManager</code> that holds all pools in a single contract.</p>
<p>Key differences from V3:</p>
<ul>
<li><strong>Singleton architecture</strong> - All pools live in one contract</li>
<li><strong>Flash accounting</strong> - Token transfers only happen at the end, reducing gas</li>
<li><strong>unlock/unlockCallback pattern</strong> - Interact via callbacks</li>
</ul>
<p>To swap:</p>
<ol>
<li>Call <code>poolManager.unlock()</code> with encoded parameters</li>
<li>PoolManager calls your <code>unlockCallback()</code></li>
<li>Inside callback: execute swap, settle inputs, take outputs</li>
<li>Deltas must net to zero before unlock completes</li>
</ol>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">// Uniswap V4 PoolManager on Ethereum mainnet</span>
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> POOL_MANAGER <span class="hljs-operator">=</span> <span class="hljs-number">0x000000000004444c5dc75cB358380D2e3dE08A90</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

<span class="hljs-comment">/// @notice Example of swapping on Uniswap V4 using the PoolManager directly</span>
<span class="hljs-comment">/// @dev V4 uses a singleton PoolManager with unlock/unlockCallback pattern</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV4Swap</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IUnlockCallback</span> </span>{
    IPoolManager <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> poolManager;

    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">NotPoolManager</span>(<span class="hljs-params"></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">SwapFailed</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        poolManager <span class="hljs-operator">=</span> IPoolManager(POOL_MANAGER);
    }

    <span class="hljs-comment">/// @notice Swap exact input amount for output tokens</span>
    <span class="hljs-comment">/// @param key The pool key identifying the pool</span>
    <span class="hljs-comment">/// @param amountIn Amount of input tokens to swap</span>
    <span class="hljs-comment">/// @param minAmountOut Minimum acceptable output amount</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactInput</span>(<span class="hljs-params">
        PoolKey <span class="hljs-keyword">calldata</span> key,
        <span class="hljs-keyword">uint128</span> amountIn,
        <span class="hljs-keyword">uint128</span> minAmountOut
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>) </span>{
        <span class="hljs-comment">// Encode swap parameters to pass through unlock callback</span>
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
            SwapParams({
                key: key,
                amountIn: amountIn,
                minAmountOut: minAmountOut,
                zeroForOne: <span class="hljs-literal">true</span>,
                sender: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>
            })
        );

        <span class="hljs-comment">// Initiate the swap - PoolManager will call unlockCallback</span>
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> result <span class="hljs-operator">=</span> poolManager.unlock(data);
        amountOut <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(result, (<span class="hljs-keyword">uint256</span>));
    }

    <span class="hljs-comment">/// @notice Callback from PoolManager after unlock</span>
    <span class="hljs-comment">/// @dev This is where the actual swap logic executes</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unlockCallback</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(poolManager)) <span class="hljs-keyword">revert</span> NotPoolManager();

        SwapParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(data, (SwapParams));

        <span class="hljs-comment">// Execute the swap</span>
        <span class="hljs-comment">// zeroForOne: true = token0 -&gt; token1, false = token1 -&gt; token0</span>
        <span class="hljs-comment">// amountSpecified: negative = exact input, positive = exact output</span>
        BalanceDelta delta <span class="hljs-operator">=</span> poolManager.swap(
            params.key,
            IPoolManager.SwapParams({
                zeroForOne: params.zeroForOne,
                amountSpecified: <span class="hljs-operator">-</span><span class="hljs-keyword">int256</span>(<span class="hljs-keyword">uint256</span>(params.amountIn)),
                sqrtPriceLimitX96: params.zeroForOne
                    ? MIN_SQRT_PRICE <span class="hljs-operator">+</span> <span class="hljs-number">1</span>
                    : MAX_SQRT_PRICE <span class="hljs-operator">-</span> <span class="hljs-number">1</span>
            }),
            <span class="hljs-keyword">bytes</span>(<span class="hljs-string">""</span>)
        );

        <span class="hljs-comment">// Calculate amounts from delta</span>
        <span class="hljs-comment">// delta.amount0() is negative (we owe the pool)</span>
        <span class="hljs-comment">// delta.amount1() is positive (pool owes us)</span>
        <span class="hljs-keyword">uint256</span> amountOut <span class="hljs-operator">=</span> params.zeroForOne
            ? <span class="hljs-keyword">uint256</span>(<span class="hljs-keyword">int256</span>(delta.amount1()))
            : <span class="hljs-keyword">uint256</span>(<span class="hljs-keyword">int256</span>(delta.amount0()));

        <span class="hljs-keyword">if</span> (amountOut <span class="hljs-operator">&lt;</span> params.minAmountOut) <span class="hljs-keyword">revert</span> SwapFailed();

        <span class="hljs-comment">// Settle the input token (pay what we owe)</span>
        Currency inputCurrency <span class="hljs-operator">=</span> params.zeroForOne
            ? params.key.currency0
            : params.key.currency1;

        IERC20(Currency.<span class="hljs-built_in">unwrap</span>(inputCurrency)).transferFrom(
            params.sender,
            <span class="hljs-keyword">address</span>(poolManager),
            params.amountIn
        );
        poolManager.settle(inputCurrency);

        <span class="hljs-comment">// Take the output token (receive what we&#x27;re owed)</span>
        Currency outputCurrency <span class="hljs-operator">=</span> params.zeroForOne
            ? params.key.currency1
            : params.key.currency0;

        poolManager.take(outputCurrency, params.sender, amountOut);

        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(amountOut);
    }

    <span class="hljs-keyword">struct</span> <span class="hljs-title">SwapParams</span> {
        PoolKey key;
        <span class="hljs-keyword">uint128</span> amountIn;
        <span class="hljs-keyword">uint128</span> minAmountOut;
        <span class="hljs-keyword">bool</span> zeroForOne;
        <span class="hljs-keyword">address</span> sender;
    }
}

<span class="hljs-comment">// Sqrt price limits for swaps</span>
<span class="hljs-keyword">uint160</span> <span class="hljs-keyword">constant</span> MIN_SQRT_PRICE <span class="hljs-operator">=</span> <span class="hljs-number">4295128739</span>;
<span class="hljs-keyword">uint160</span> <span class="hljs-keyword">constant</span> MAX_SQRT_PRICE <span class="hljs-operator">=</span>
    <span class="hljs-number">1461446703485210103287273052203988822378723970342</span>;

<span class="hljs-comment">// Currency is an address wrapper (address(0) = native ETH)</span>
<span class="hljs-keyword">type</span> Currency <span class="hljs-keyword">is</span> <span class="hljs-keyword">address</span>;

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">CurrencyLibrary</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unwrap</span>(<span class="hljs-params">Currency currency</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> Currency.<span class="hljs-built_in">unwrap</span>(currency);
    }
}

<span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

<span class="hljs-keyword">struct</span> <span class="hljs-title">PoolKey</span> {
    Currency currency0;
    Currency currency1;
    <span class="hljs-keyword">uint24</span> fee;
    <span class="hljs-keyword">int24</span> tickSpacing;
    <span class="hljs-keyword">address</span> hooks;
}

<span class="hljs-comment">/// @notice Balance delta returned from swap operations</span>
<span class="hljs-comment">/// @dev Negative = you owe the pool, Positive = pool owes you</span>
<span class="hljs-keyword">type</span> BalanceDelta <span class="hljs-keyword">is</span> <span class="hljs-keyword">int256</span>;

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">BalanceDeltaLibrary</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">amount0</span>(<span class="hljs-params">BalanceDelta delta</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">int128</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">int128</span>(<span class="hljs-keyword">int256</span>(BalanceDelta.<span class="hljs-built_in">unwrap</span>(delta) <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span> <span class="hljs-number">128</span>));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">amount1</span>(<span class="hljs-params">BalanceDelta delta</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">int128</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">int128</span>(<span class="hljs-keyword">int256</span>(BalanceDelta.<span class="hljs-built_in">unwrap</span>(delta)));
    }
}

<span class="hljs-keyword">using</span> <span class="hljs-title">BalanceDeltaLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">BalanceDelta</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IPoolManager</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">SwapParams</span> {
        <span class="hljs-keyword">bool</span> zeroForOne;
        <span class="hljs-keyword">int256</span> amountSpecified;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unlock</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params">PoolKey <span class="hljs-keyword">memory</span> key, SwapParams <span class="hljs-keyword">memory</span> params, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">BalanceDelta</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">settle</span>(<span class="hljs-params">Currency currency</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">take</span>(<span class="hljs-params">Currency currency, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUnlockCallback</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unlockCallback</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}
</code></pre>`

export default html
