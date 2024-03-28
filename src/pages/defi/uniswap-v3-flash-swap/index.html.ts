// metadata
export const version = "0.8.24"
export const title = "Uniswap V3 Flash Swap Arbitrage"
export const description = "Uniswap V3 Flash Swap Arbitrage"

export const keywords = ["defi", "uniswap", "v3", "swap", "arbitrage", "amm"]

export const codes = [
  {
    fileName: "UniswapV3FlashSwap.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmFkZHJlc3MgY29uc3RhbnQgU1dBUF9ST1VURVJfMDIgPSAweDY4YjM0NjU4MzNmYjcyQTcwZWNERjQ4NUUwZTRDN2JEODY2NUZjNDU7Cgpjb250cmFjdCBVbmlzd2FwVjNGbGFzaFN3YXAgewogICAgSVN3YXBSb3V0ZXIwMiBjb25zdGFudCByb3V0ZXIgPSBJU3dhcFJvdXRlcjAyKFNXQVBfUk9VVEVSXzAyKTsKCiAgICB1aW50MTYwIHByaXZhdGUgY29uc3RhbnQgTUlOX1NRUlRfUkFUSU8gPSA0Mjk1MTI4NzM5OwogICAgdWludDE2MCBwcml2YXRlIGNvbnN0YW50IE1BWF9TUVJUX1JBVElPID0KICAgICAgICAxNDYxNDQ2NzAzNDg1MjEwMTAzMjg3MjczMDUyMjAzOTg4ODIyMzc4NzIzOTcwMzQyOwoKICAgIC8vIERBSSAvIFdFVEggMC4zJSBzd2FwIGZlZSAoMjAwMCBEQUkgLyBXRVRIKQogICAgLy8gREFJIC8gV0VUSCAwLjA1JSBzd2FwIGZlZSAoMjEwMCBEQUkgLyBXRVRIKQogICAgLy8gMS4gRmxhc2ggc3dhcCBvbiBwb29sMCAocmVjZWl2ZSBXRVRIKQogICAgLy8gMi4gU3dhcCBvbiBwb29sMSAoV0VUSCAtPiBEQUkpCiAgICAvLyAzLiBTZW5kIERBSSB0byBwb29sMAogICAgLy8gcHJvZml0ID0gREFJIHJlY2VpdmVkIGZyb20gcG9vbDEgLSBEQUkgcmVwYWlkIHRvIHBvb2wwCgogICAgZnVuY3Rpb24gZmxhc2hTd2FwKAogICAgICAgIGFkZHJlc3MgcG9vbDAsCiAgICAgICAgdWludDI0IGZlZTEsCiAgICAgICAgYWRkcmVzcyB0b2tlbkluLAogICAgICAgIGFkZHJlc3MgdG9rZW5PdXQsCiAgICAgICAgdWludDI1NiBhbW91bnRJbgogICAgKSBleHRlcm5hbCB7CiAgICAgICAgYm9vbCB6ZXJvRm9yT25lID0gdG9rZW5JbiA8IHRva2VuT3V0OwogICAgICAgIC8vIDAgLT4gMSA9PiBzcXJ0IHByaWNlIGRlY3JlYXNlCiAgICAgICAgLy8gMSAtPiAwID0+IHNxcnQgcHJpY2UgaW5jcmVhc2UKICAgICAgICB1aW50MTYwIHNxcnRQcmljZUxpbWl0WDk2ID0KICAgICAgICAgICAgemVyb0Zvck9uZSA/IE1JTl9TUVJUX1JBVElPICsgMSA6IE1BWF9TUVJUX1JBVElPIC0gMTsKCiAgICAgICAgYnl0ZXMgbWVtb3J5IGRhdGEgPSBhYmkuZW5jb2RlKAogICAgICAgICAgICBtc2cuc2VuZGVyLCBwb29sMCwgZmVlMSwgdG9rZW5JbiwgdG9rZW5PdXQsIGFtb3VudEluLCB6ZXJvRm9yT25lCiAgICAgICAgKTsKCiAgICAgICAgSVVuaXN3YXBWM1Bvb2wocG9vbDApLnN3YXAoewogICAgICAgICAgICByZWNpcGllbnQ6IGFkZHJlc3ModGhpcyksCiAgICAgICAgICAgIHplcm9Gb3JPbmU6IHplcm9Gb3JPbmUsCiAgICAgICAgICAgIGFtb3VudFNwZWNpZmllZDogaW50MjU2KGFtb3VudEluKSwKICAgICAgICAgICAgc3FydFByaWNlTGltaXRYOTY6IHNxcnRQcmljZUxpbWl0WDk2LAogICAgICAgICAgICBkYXRhOiBkYXRhCiAgICAgICAgfSk7CiAgICB9CgogICAgZnVuY3Rpb24gX3N3YXAoCiAgICAgICAgYWRkcmVzcyB0b2tlbkluLAogICAgICAgIGFkZHJlc3MgdG9rZW5PdXQsCiAgICAgICAgdWludDI0IGZlZSwKICAgICAgICB1aW50MjU2IGFtb3VudEluLAogICAgICAgIHVpbnQyNTYgYW1vdW50T3V0TWluCiAgICApIHByaXZhdGUgcmV0dXJucyAodWludDI1NiBhbW91bnRPdXQpIHsKICAgICAgICBJRVJDMjAodG9rZW5JbikuYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluKTsKCiAgICAgICAgSVN3YXBSb3V0ZXIwMi5FeGFjdElucHV0U2luZ2xlUGFyYW1zIG1lbW9yeSBwYXJhbXMgPSBJU3dhcFJvdXRlcjAyCiAgICAgICAgICAgIC5FeGFjdElucHV0U2luZ2xlUGFyYW1zKHsKICAgICAgICAgICAgdG9rZW5JbjogdG9rZW5JbiwKICAgICAgICAgICAgdG9rZW5PdXQ6IHRva2VuT3V0LAogICAgICAgICAgICBmZWU6IGZlZSwKICAgICAgICAgICAgcmVjaXBpZW50OiBhZGRyZXNzKHRoaXMpLAogICAgICAgICAgICBhbW91bnRJbjogYW1vdW50SW4sCiAgICAgICAgICAgIGFtb3VudE91dE1pbmltdW06IGFtb3VudE91dE1pbiwKICAgICAgICAgICAgc3FydFByaWNlTGltaXRYOTY6IDAKICAgICAgICB9KTsKCiAgICAgICAgYW1vdW50T3V0ID0gcm91dGVyLmV4YWN0SW5wdXRTaW5nbGUocGFyYW1zKTsKICAgIH0KCiAgICBmdW5jdGlvbiB1bmlzd2FwVjNTd2FwQ2FsbGJhY2soCiAgICAgICAgaW50MjU2IGFtb3VudDAsCiAgICAgICAgaW50MjU2IGFtb3VudDEsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbCB7CiAgICAgICAgLy8gRGVjb2RlIGRhdGEKICAgICAgICAoCiAgICAgICAgICAgIGFkZHJlc3MgY2FsbGVyLAogICAgICAgICAgICBhZGRyZXNzIHBvb2wwLAogICAgICAgICAgICB1aW50MjQgZmVlMSwKICAgICAgICAgICAgYWRkcmVzcyB0b2tlbkluLAogICAgICAgICAgICBhZGRyZXNzIHRva2VuT3V0LAogICAgICAgICAgICB1aW50MjU2IGFtb3VudEluLAogICAgICAgICAgICBib29sIHplcm9Gb3JPbmUKICAgICAgICApID0gYWJpLmRlY29kZSgKICAgICAgICAgICAgZGF0YSwgKGFkZHJlc3MsIGFkZHJlc3MsIHVpbnQyNCwgYWRkcmVzcywgYWRkcmVzcywgdWludDI1NiwgYm9vbCkKICAgICAgICApOwoKICAgICAgICB1aW50MjU2IGFtb3VudE91dCA9IHplcm9Gb3JPbmUgPyB1aW50MjU2KC1hbW91bnQxKSA6IHVpbnQyNTYoLWFtb3VudDApOwoKICAgICAgICAvLyBwb29sMCAtPiB0b2tlbkluIC0+IHRva2VuT3V0IChhbW91bnRPdXQpCiAgICAgICAgLy8gU3dhcCBvbiBwb29sIDEgKHN3YXAgdG9rZW5PdXQgLT4gdG9rZW5JbikKICAgICAgICB1aW50MjU2IGJ1eUJhY2tBbW91bnQgPSBfc3dhcCh7CiAgICAgICAgICAgIHRva2VuSW46IHRva2VuT3V0LAogICAgICAgICAgICB0b2tlbk91dDogdG9rZW5JbiwKICAgICAgICAgICAgZmVlOiBmZWUxLAogICAgICAgICAgICBhbW91bnRJbjogYW1vdW50T3V0LAogICAgICAgICAgICBhbW91bnRPdXRNaW46IGFtb3VudEluCiAgICAgICAgfSk7CgogICAgICAgIC8vIFJlcGF5IHBvb2wgMAogICAgICAgIHVpbnQyNTYgcHJvZml0ID0gYnV5QmFja0Ftb3VudCAtIGFtb3VudEluOwogICAgICAgIHJlcXVpcmUocHJvZml0ID4gMCwgInByb2ZpdCA9IDAiKTsKCiAgICAgICAgSUVSQzIwKHRva2VuSW4pLnRyYW5zZmVyKHBvb2wwLCBhbW91bnRJbik7CiAgICAgICAgSUVSQzIwKHRva2VuSW4pLnRyYW5zZmVyKGNhbGxlciwgcHJvZml0KTsKICAgIH0KfQoKaW50ZXJmYWNlIElTd2FwUm91dGVyMDIgewogICAgc3RydWN0IEV4YWN0SW5wdXRTaW5nbGVQYXJhbXMgewogICAgICAgIGFkZHJlc3MgdG9rZW5JbjsKICAgICAgICBhZGRyZXNzIHRva2VuT3V0OwogICAgICAgIHVpbnQyNCBmZWU7CiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQ7CiAgICAgICAgdWludDI1NiBhbW91bnRJbjsKICAgICAgICB1aW50MjU2IGFtb3VudE91dE1pbmltdW07CiAgICAgICAgdWludDE2MCBzcXJ0UHJpY2VMaW1pdFg5NjsKICAgIH0KCiAgICBmdW5jdGlvbiBleGFjdElucHV0U2luZ2xlKEV4YWN0SW5wdXRTaW5nbGVQYXJhbXMgY2FsbGRhdGEgcGFyYW1zKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KTsKfQoKaW50ZXJmYWNlIElVbmlzd2FwVjNQb29sIHsKICAgIGZ1bmN0aW9uIHN3YXAoCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgYm9vbCB6ZXJvRm9yT25lLAogICAgICAgIGludDI1NiBhbW91bnRTcGVjaWZpZWQsCiAgICAgICAgdWludDE2MCBzcXJ0UHJpY2VMaW1pdFg5NiwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsIHJldHVybnMgKGludDI1NiBhbW91bnQwLCBpbnQyNTYgYW1vdW50MSk7Cn0KCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwp9CgppbnRlcmZhY2UgSVdFVEggaXMgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIGRlcG9zaXQoKSBleHRlcm5hbCBwYXlhYmxlOwogICAgZnVuY3Rpb24gd2l0aGRyYXcodWludDI1NiBhbW91bnQpIGV4dGVybmFsOwp9Cg==",
  },
  {
    fileName: "UniswapV3FlashSwapTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKaW1wb3J0IHtUZXN0LCBjb25zb2xlMn0gZnJvbSAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0IHsKICAgIFVuaXN3YXBWM0ZsYXNoU3dhcCwKICAgIElVbmlzd2FwVjNQb29sLAogICAgSVN3YXBSb3V0ZXIwMiwKICAgIElFUkMyMCwKICAgIElXRVRICn0gZnJvbSAiLi4vLi4vLi4vc3JjL2RlZmkvdW5pc3dhcC12My1mbGFzaC1zd2FwL1VuaXN3YXBWM0ZsYXNoU3dhcC5zb2wiOwoKYWRkcmVzcyBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwphZGRyZXNzIGNvbnN0YW50IERBSSA9IDB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRjsKYWRkcmVzcyBjb25zdGFudCBTV0FQX1JPVVRFUl8wMiA9IDB4NjhiMzQ2NTgzM2ZiNzJBNzBlY0RGNDg1RTBlNEM3YkQ4NjY1RmM0NTsKYWRkcmVzcyBjb25zdGFudCBEQUlfV0VUSF9QT09MXzMwMDAgPSAweEMyZTlGMjVCZTYyNTdjMjEwZDdBZGYwRDRDZDZFM0U4ODFiYTI1Zjg7CmFkZHJlc3MgY29uc3RhbnQgREFJX1dFVEhfUE9PTF81MDAgPSAweDYwNTk0YTQwNWQ1MzgxMWQzQkM0NzY2NTk2RUZEODBmZDU0NUEyNzA7CnVpbnQyNCBjb25zdGFudCBGRUVfMCA9IDMwMDA7CnVpbnQyNCBjb25zdGFudCBGRUVfMSA9IDUwMDsKCmNvbnRyYWN0IFVuaXN3YXBWM0ZsYXNoVGVzdCBpcyBUZXN0IHsKICAgIElFUkMyMCBwcml2YXRlIGNvbnN0YW50IGRhaSA9IElFUkMyMChEQUkpOwogICAgSVdFVEggcHJpdmF0ZSBjb25zdGFudCB3ZXRoID0gSVdFVEgoV0VUSCk7CiAgICBJU3dhcFJvdXRlcjAyIHByaXZhdGUgY29uc3RhbnQgcm91dGVyID0gSVN3YXBSb3V0ZXIwMihTV0FQX1JPVVRFUl8wMik7CiAgICBJVW5pc3dhcFYzUG9vbCBwcml2YXRlIGNvbnN0YW50IHBvb2wwID0gSVVuaXN3YXBWM1Bvb2woREFJX1dFVEhfUE9PTF8zMDAwKTsKICAgIElVbmlzd2FwVjNQb29sIHByaXZhdGUgY29uc3RhbnQgcG9vbDEgPSBJVW5pc3dhcFYzUG9vbChEQUlfV0VUSF9QT09MXzUwMCk7CiAgICBVbmlzd2FwVjNGbGFzaFN3YXAgcHJpdmF0ZSBmbGFzaFN3YXA7CgogICAgdWludDI1NiBwcml2YXRlIGNvbnN0YW50IERBSV9BTU9VTlRfSU4gPSAxMCAqIDFlMTg7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIGZsYXNoU3dhcCA9IG5ldyBVbmlzd2FwVjNGbGFzaFN3YXAoKTsKCiAgICAgICAgLy8gQ3JlYXRlIGFuIGFyYml0cmFnZSBvcHBvcnR1bml0eSAtIG1ha2UgV0VUSCBjaGVhcGVyIG9uIHBvb2wwCiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiA1MDAgKiAxZTE4fSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIDUwMCAqIDFlMTgpOwogICAgICAgIHJvdXRlci5leGFjdElucHV0U2luZ2xlKAogICAgICAgICAgICBJU3dhcFJvdXRlcjAyLkV4YWN0SW5wdXRTaW5nbGVQYXJhbXMoewogICAgICAgICAgICAgICAgdG9rZW5JbjogV0VUSCwKICAgICAgICAgICAgICAgIHRva2VuT3V0OiBEQUksCiAgICAgICAgICAgICAgICBmZWU6IEZFRV8wLAogICAgICAgICAgICAgICAgcmVjaXBpZW50OiBhZGRyZXNzKDApLAogICAgICAgICAgICAgICAgYW1vdW50SW46IDUwMCAqIDFlMTgsCiAgICAgICAgICAgICAgICBhbW91bnRPdXRNaW5pbXVtOiAwLAogICAgICAgICAgICAgICAgc3FydFByaWNlTGltaXRYOTY6IDAKICAgICAgICAgICAgfSkKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfZmxhc2hTd2FwKCkgcHVibGljIHsKICAgICAgICB1aW50MjU2IGJhbDAgPSBkYWkuYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwogICAgICAgIGZsYXNoU3dhcC5mbGFzaFN3YXAoewogICAgICAgICAgICBwb29sMDogYWRkcmVzcyhwb29sMCksCiAgICAgICAgICAgIGZlZTE6IEZFRV8xLAogICAgICAgICAgICB0b2tlbkluOiBEQUksCiAgICAgICAgICAgIHRva2VuT3V0OiBXRVRILAogICAgICAgICAgICBhbW91bnRJbjogREFJX0FNT1VOVF9JTgogICAgICAgIH0pOwogICAgICAgIHVpbnQyNTYgYmFsMSA9IGRhaS5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSk7CiAgICAgICAgdWludDI1NiBwcm9maXQgPSBiYWwxIC0gYmFsMDsKICAgICAgICBhc3NlcnRHdChwcm9maXQsIDAsICJwcm9maXQgPSAwIik7CiAgICAgICAgY29uc29sZTIubG9nKCJQcm9maXQgJWUiLCBwcm9maXQpOwogICAgfQp9Cg==",
  },
]

const html = `<h3>Uniswap V3 Flash Swap Arbitrage Example</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> SWAP_ROUTER_02 <span class="hljs-operator">=</span> <span class="hljs-number">0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3FlashSwap</span> </span>{
    ISwapRouter02 <span class="hljs-keyword">constant</span> router <span class="hljs-operator">=</span> ISwapRouter02(SWAP_ROUTER_02);

    <span class="hljs-keyword">uint160</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> MIN_SQRT_RATIO <span class="hljs-operator">=</span> <span class="hljs-number">4295128739</span>;
    <span class="hljs-keyword">uint160</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> MAX_SQRT_RATIO <span class="hljs-operator">=</span>
        <span class="hljs-number">1461446703485210103287273052203988822378723970342</span>;

    <span class="hljs-comment">// DAI / WETH 0.3% swap fee (2000 DAI / WETH)</span>
    <span class="hljs-comment">// DAI / WETH 0.05% swap fee (2100 DAI / WETH)</span>
    <span class="hljs-comment">// 1. Flash swap on pool0 (receive WETH)</span>
    <span class="hljs-comment">// 2. Swap on pool1 (WETH -&gt; DAI)</span>
    <span class="hljs-comment">// 3. Send DAI to pool0</span>
    <span class="hljs-comment">// profit = DAI received from pool1 - DAI repaid to pool0</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">flashSwap</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> pool0,
        <span class="hljs-keyword">uint24</span> fee1,
        <span class="hljs-keyword">address</span> tokenIn,
        <span class="hljs-keyword">address</span> tokenOut,
        <span class="hljs-keyword">uint256</span> amountIn
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bool</span> zeroForOne <span class="hljs-operator">=</span> tokenIn <span class="hljs-operator">&lt;</span> tokenOut;
        <span class="hljs-comment">// 0 -&gt; 1 =&gt; sqrt price decrease</span>
        <span class="hljs-comment">// 1 -&gt; 0 =&gt; sqrt price increase</span>
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96 <span class="hljs-operator">=</span>
            zeroForOne ? MIN_SQRT_RATIO <span class="hljs-operator">+</span> <span class="hljs-number">1</span> : MAX_SQRT_RATIO <span class="hljs-operator">-</span> <span class="hljs-number">1</span>;

        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, pool0, fee1, tokenIn, tokenOut, amountIn, zeroForOne
        );

        IUniswapV3Pool(pool0).swap({
            recipient: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            zeroForOne: zeroForOne,
            amountSpecified: <span class="hljs-keyword">int256</span>(amountIn),
            sqrtPriceLimitX96: sqrtPriceLimitX96,
            data: data
        });
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_swap</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenIn,
        <span class="hljs-keyword">address</span> tokenOut,
        <span class="hljs-keyword">uint24</span> fee,
        <span class="hljs-keyword">uint256</span> amountIn,
        <span class="hljs-keyword">uint256</span> amountOutMin
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>) </span>{
        IERC20(tokenIn).approve(<span class="hljs-keyword">address</span>(router), amountIn);

        ISwapRouter02.ExactInputSingleParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter02
            .ExactInputSingleParams({
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            fee: fee,
            recipient: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            amountIn: amountIn,
            amountOutMinimum: amountOutMin,
            sqrtPriceLimitX96: <span class="hljs-number">0</span>
        });

        amountOut <span class="hljs-operator">=</span> router.exactInputSingle(params);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniswapV3SwapCallback</span>(<span class="hljs-params">
        <span class="hljs-keyword">int256</span> amount0,
        <span class="hljs-keyword">int256</span> amount1,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// Decode data</span>
        (
            <span class="hljs-keyword">address</span> caller,
            <span class="hljs-keyword">address</span> pool0,
            <span class="hljs-keyword">uint24</span> fee1,
            <span class="hljs-keyword">address</span> tokenIn,
            <span class="hljs-keyword">address</span> tokenOut,
            <span class="hljs-keyword">uint256</span> amountIn,
            <span class="hljs-keyword">bool</span> zeroForOne
        ) <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(
            data, (<span class="hljs-keyword">address</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint24</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">address</span>, <span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">bool</span>)
        );

        <span class="hljs-keyword">uint256</span> amountOut <span class="hljs-operator">=</span> zeroForOne ? <span class="hljs-keyword">uint256</span>(<span class="hljs-operator">-</span>amount1) : <span class="hljs-keyword">uint256</span>(<span class="hljs-operator">-</span>amount0);

        <span class="hljs-comment">// pool0 -&gt; tokenIn -&gt; tokenOut (amountOut)</span>
        <span class="hljs-comment">// Swap on pool 1 (swap tokenOut -&gt; tokenIn)</span>
        <span class="hljs-keyword">uint256</span> buyBackAmount <span class="hljs-operator">=</span> _swap({
            tokenIn: tokenOut,
            tokenOut: tokenIn,
            fee: fee1,
            amountIn: amountOut,
            amountOutMin: amountIn
        });

        <span class="hljs-comment">// Repay pool 0</span>
        <span class="hljs-keyword">uint256</span> profit <span class="hljs-operator">=</span> buyBackAmount <span class="hljs-operator">-</span> amountIn;
        <span class="hljs-built_in">require</span>(profit <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"profit = 0"</span>);

        IERC20(tokenIn).<span class="hljs-built_in">transfer</span>(pool0, amountIn);
        IERC20(tokenIn).<span class="hljs-built_in">transfer</span>(caller, profit);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">ISwapRouter02</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">ExactInputSingleParams</span> {
        <span class="hljs-keyword">address</span> tokenIn;
        <span class="hljs-keyword">address</span> tokenOut;
        <span class="hljs-keyword">uint24</span> fee;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint256</span> amountIn;
        <span class="hljs-keyword">uint256</span> amountOutMinimum;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInputSingle</span>(<span class="hljs-params">ExactInputSingleParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV3Pool</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">bool</span> zeroForOne,
        <span class="hljs-keyword">int256</span> amountSpecified,
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">int256</span> amount0, <span class="hljs-keyword">int256</span> amount1</span>)</span>;
}

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

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IWETH</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}
</code></pre><h3>Test with Foundry</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> {
    <span class="hljs-title">UniswapV3FlashSwap</span>,
    <span class="hljs-title">IUniswapV3Pool</span>,
    <span class="hljs-title">ISwapRouter02</span>,
    <span class="hljs-title">IERC20</span>,
    <span class="hljs-title">IWETH</span>
} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"../../../src/defi/uniswap-v3-flash-swap/UniswapV3FlashSwap.sol"</span>;

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> SWAP_ROUTER_02 <span class="hljs-operator">=</span> <span class="hljs-number">0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI_WETH_POOL_3000 <span class="hljs-operator">=</span> <span class="hljs-number">0xC2e9F25Be6257c210d7Adf0D4Cd6E3E881ba25f8</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI_WETH_POOL_500 <span class="hljs-operator">=</span> <span class="hljs-number">0x60594a405d53811d3BC4766596EFD80fd545A270</span>;
<span class="hljs-keyword">uint24</span> <span class="hljs-keyword">constant</span> FEE_0 <span class="hljs-operator">=</span> <span class="hljs-number">3000</span>;
<span class="hljs-keyword">uint24</span> <span class="hljs-keyword">constant</span> FEE_1 <span class="hljs-operator">=</span> <span class="hljs-number">500</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3FlashTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    IWETH <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    ISwapRouter02 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> router <span class="hljs-operator">=</span> ISwapRouter02(SWAP_ROUTER_02);
    IUniswapV3Pool <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> pool0 <span class="hljs-operator">=</span> IUniswapV3Pool(DAI_WETH_POOL_3000);
    IUniswapV3Pool <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> pool1 <span class="hljs-operator">=</span> IUniswapV3Pool(DAI_WETH_POOL_500);
    UniswapV3FlashSwap <span class="hljs-keyword">private</span> flashSwap;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI_AMOUNT_IN <span class="hljs-operator">=</span> <span class="hljs-number">10</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        flashSwap <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3FlashSwap();

        <span class="hljs-comment">// Create an arbitrage opportunity - make WETH cheaper on pool0</span>
        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">500</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>}();
        weth.approve(<span class="hljs-keyword">address</span>(router), <span class="hljs-number">500</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        router.exactInputSingle(
            ISwapRouter02.ExactInputSingleParams({
                tokenIn: WETH,
                tokenOut: DAI,
                fee: FEE_0,
                recipient: <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>),
                amountIn: <span class="hljs-number">500</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>,
                amountOutMinimum: <span class="hljs-number">0</span>,
                sqrtPriceLimitX96: <span class="hljs-number">0</span>
            })
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_flashSwap</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> bal0 <span class="hljs-operator">=</span> dai.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        flashSwap.flashSwap({
            pool0: <span class="hljs-keyword">address</span>(pool0),
            fee1: FEE_1,
            tokenIn: DAI,
            tokenOut: WETH,
            amountIn: DAI_AMOUNT_IN
        });
        <span class="hljs-keyword">uint256</span> bal1 <span class="hljs-operator">=</span> dai.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">uint256</span> profit <span class="hljs-operator">=</span> bal1 <span class="hljs-operator">-</span> bal0;
        assertGt(profit, <span class="hljs-number">0</span>, <span class="hljs-string">"profit = 0"</span>);
        console2.log(<span class="hljs-string">"Profit %e"</span>, profit);
    }
}
</code></pre><h3>Links</h3>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
