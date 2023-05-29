// metadata
export const version = "0.8.17"
export const title = "Uniswap V2 Add Remove Liquidity"
export const description = "Uniswap V2 add remove liquidity"

export const keywords = [
    "defi",
    "uniswap",
    "v2",
    "add",
    "remove",
    "liquidity",
    "amm",
]

export const codes = [
    {
        fileName: "UniswapV2Liquidity.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmNvbnRyYWN0IFVuaXN3YXBWMkFkZExpcXVpZGl0eSB7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgRkFDVE9SWSA9IDB4NUM2OWJFZTcwMWVmODE0YTJCNmEzRURENEIxNjUyQ0I5Y2M1YUE2ZjsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBST1VURVIgPSAweDdhMjUwZDU2MzBCNGNGNTM5NzM5ZEYyQzVkQWNiNGM2NTlGMjQ4OEQ7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgV0VUSCA9IDB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMjsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBVU0RUID0gMHhkQUMxN0Y5NThEMmVlNTIzYTIyMDYyMDY5OTQ1OTdDMTNEODMxZWM3OwoKICAgIGZ1bmN0aW9uIGFkZExpcXVpZGl0eSgKICAgICAgICBhZGRyZXNzIF90b2tlbkEsCiAgICAgICAgYWRkcmVzcyBfdG9rZW5CLAogICAgICAgIHVpbnQgX2Ftb3VudEEsCiAgICAgICAgdWludCBfYW1vdW50QgogICAgKSBleHRlcm5hbCB7CiAgICAgICAgc2FmZVRyYW5zZmVyRnJvbShJRVJDMjAoX3Rva2VuQSksIG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIF9hbW91bnRBKTsKICAgICAgICBzYWZlVHJhbnNmZXJGcm9tKElFUkMyMChfdG9rZW5CKSwgbXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgX2Ftb3VudEIpOwoKICAgICAgICBzYWZlQXBwcm92ZShJRVJDMjAoX3Rva2VuQSksIFJPVVRFUiwgX2Ftb3VudEEpOwogICAgICAgIHNhZmVBcHByb3ZlKElFUkMyMChfdG9rZW5CKSwgUk9VVEVSLCBfYW1vdW50Qik7CgogICAgICAgICh1aW50IGFtb3VudEEsIHVpbnQgYW1vdW50QiwgdWludCBsaXF1aWRpdHkpID0gSVVuaXN3YXBWMlJvdXRlcihST1VURVIpCiAgICAgICAgICAgIC5hZGRMaXF1aWRpdHkoCiAgICAgICAgICAgICAgICBfdG9rZW5BLAogICAgICAgICAgICAgICAgX3Rva2VuQiwKICAgICAgICAgICAgICAgIF9hbW91bnRBLAogICAgICAgICAgICAgICAgX2Ftb3VudEIsCiAgICAgICAgICAgICAgICAxLAogICAgICAgICAgICAgICAgMSwKICAgICAgICAgICAgICAgIGFkZHJlc3ModGhpcyksCiAgICAgICAgICAgICAgICBibG9jay50aW1lc3RhbXAKICAgICAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiByZW1vdmVMaXF1aWRpdHkoYWRkcmVzcyBfdG9rZW5BLCBhZGRyZXNzIF90b2tlbkIpIGV4dGVybmFsIHsKICAgICAgICBhZGRyZXNzIHBhaXIgPSBJVW5pc3dhcFYyRmFjdG9yeShGQUNUT1JZKS5nZXRQYWlyKF90b2tlbkEsIF90b2tlbkIpOwoKICAgICAgICB1aW50IGxpcXVpZGl0eSA9IElFUkMyMChwYWlyKS5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSk7CiAgICAgICAgc2FmZUFwcHJvdmUoSUVSQzIwKHBhaXIpLCBST1VURVIsIGxpcXVpZGl0eSk7CgogICAgICAgICh1aW50IGFtb3VudEEsIHVpbnQgYW1vdW50QikgPSBJVW5pc3dhcFYyUm91dGVyKFJPVVRFUikucmVtb3ZlTGlxdWlkaXR5KAogICAgICAgICAgICBfdG9rZW5BLAogICAgICAgICAgICBfdG9rZW5CLAogICAgICAgICAgICBsaXF1aWRpdHksCiAgICAgICAgICAgIDEsCiAgICAgICAgICAgIDEsCiAgICAgICAgICAgIGFkZHJlc3ModGhpcyksCiAgICAgICAgICAgIGJsb2NrLnRpbWVzdGFtcAogICAgICAgICk7CiAgICB9CgogICAgLyoqCiAgICAgKiBAZGV2IFJlcXVpcmVkIGZvciB0b2tlbnMgdGhhdCBkbyBub3QgZm9sbG93IHRoZSBFUkMyMCBzdGFuZGFyZC4KICAgICAqIEZvciBleGFtcGxlLCBVU0RUIHRyYW5zZmVyRnJvbSBkb2Vzbid0IHJldHVybiBhIGJvb2wuCiAgICAgKiBUaGlzIGZ1bmN0aW9uIGVuc3VyZXMgdGhhdCB3ZSBhcmUgbmV2ZXIgYmxvY2tlZCBieSBhIHRva2VuJ3MgdHJhbnNmZXJGcm9tIGltcGxlbWVudGF0aW9uLgogICAgICogV2l0aG91dCBpdCwgdGhlIHRyYW5zZmVyRnJvbSBjYWxsIHdvdWxkIGZhaWwuCiAgICAgKi8KICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oCiAgICAgICAgSUVSQzIwIHRva2VuLAogICAgICAgIGFkZHJlc3Mgc2VuZGVyLAogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50LAogICAgICAgIHVpbnQgYW1vdW50CiAgICApIGludGVybmFsIHsKICAgICAgICAoYm9vbCBzdWNjZXNzVHJhbnNmZXJGcm9tLCApID0gYWRkcmVzcyh0b2tlbikuY2FsbCgKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoSUVSQzIwLnRyYW5zZmVyRnJvbSwgKHNlbmRlciwgcmVjaXBpZW50LCBhbW91bnQpKQogICAgICAgICk7CiAgICAgICAgcmVxdWlyZShzdWNjZXNzVHJhbnNmZXJGcm9tLCAidHJhbnNmZXJGcm9tIGZhaWxlZCIpOwogICAgfQoKICAgIC8qKgogICAgICogQGRldiBSZXF1aXJlZCBmb3IgdG9rZW5zIHRoYXQgZG8gbm90IGZvbGxvdyB0aGUgRVJDMjAgc3RhbmRhcmQuCiAgICAgKiBGb3IgZXhhbXBsZSwgVVNEVCBhcHByb3ZlIGRvZXNuJ3QgcmV0dXJuIGEgYm9vbC4KICAgICAqIFRoaXMgZnVuY3Rpb24gZW5zdXJlcyB0aGF0IHdlIGFyZSBuZXZlciBibG9ja2VkIGJ5IGEgdG9rZW4ncyBhcHByb3ZlIGltcGxlbWVudGF0aW9uLgogICAgICogV2l0aG91dCBpdCwgdGhlIGFwcHJvdmUgY2FsbCB3b3VsZCBmYWlsLgogICAgICovCiAgICBmdW5jdGlvbiBzYWZlQXBwcm92ZShJRVJDMjAgdG9rZW4sIGFkZHJlc3Mgc3BlbmRlciwgdWludCBhbW91bnQpIGludGVybmFsIHsKICAgICAgICAoYm9vbCBzdWNjZXNzQXBwcm92ZSwgKSA9IGFkZHJlc3ModG9rZW4pLmNhbGwoCiAgICAgICAgICAgIGFiaS5lbmNvZGVDYWxsKElFUkMyMC5hcHByb3ZlLCAoc3BlbmRlciwgYW1vdW50KSkKICAgICAgICApOwogICAgICAgIHJlcXVpcmUoc3VjY2Vzc0FwcHJvdmUsICJhcHByb3ZlIGZhaWxlZCIpOwogICAgfQp9CgppbnRlcmZhY2UgSVVuaXN3YXBWMlJvdXRlciB7CiAgICBmdW5jdGlvbiBhZGRMaXF1aWRpdHkoCiAgICAgICAgYWRkcmVzcyB0b2tlbkEsCiAgICAgICAgYWRkcmVzcyB0b2tlbkIsCiAgICAgICAgdWludCBhbW91bnRBRGVzaXJlZCwKICAgICAgICB1aW50IGFtb3VudEJEZXNpcmVkLAogICAgICAgIHVpbnQgYW1vdW50QU1pbiwKICAgICAgICB1aW50IGFtb3VudEJNaW4sCiAgICAgICAgYWRkcmVzcyB0bywKICAgICAgICB1aW50IGRlYWRsaW5lCiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQgYW1vdW50QSwgdWludCBhbW91bnRCLCB1aW50IGxpcXVpZGl0eSk7CgogICAgZnVuY3Rpb24gcmVtb3ZlTGlxdWlkaXR5KAogICAgICAgIGFkZHJlc3MgdG9rZW5BLAogICAgICAgIGFkZHJlc3MgdG9rZW5CLAogICAgICAgIHVpbnQgbGlxdWlkaXR5LAogICAgICAgIHVpbnQgYW1vdW50QU1pbiwKICAgICAgICB1aW50IGFtb3VudEJNaW4sCiAgICAgICAgYWRkcmVzcyB0bywKICAgICAgICB1aW50IGRlYWRsaW5lCiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQgYW1vdW50QSwgdWludCBhbW91bnRCKTsKfQoKaW50ZXJmYWNlIElVbmlzd2FwVjJGYWN0b3J5IHsKICAgIGZ1bmN0aW9uIGdldFBhaXIoYWRkcmVzcyB0b2tlbjAsIGFkZHJlc3MgdG9rZW4xKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3MpOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudCwKICAgICAgICB1aW50IGFtb3VudAogICAgKSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKfQo=",
    },
    {
        fileName: "UniswapV2LiquidityTest.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICJmb3JnZS1zdGQvY29uc29sZS5zb2wiOwoKaW1wb3J0ICIuLi9zcmMvVW5pc3dhcFYyTGlxdWlkaXR5LnNvbCI7CgpJRVJDMjAgY29uc3RhbnQgV0VUSCA9IElFUkMyMCgweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzIpOwpJRVJDMjAgY29uc3RhbnQgVVNEVCA9IElFUkMyMCgweGRBQzE3Rjk1OEQyZWU1MjNhMjIwNjIwNjk5NDU5N0MxM0Q4MzFlYzcpOwpJRVJDMjAgY29uc3RhbnQgUEFJUiA9IElFUkMyMCgweDBkNGExMWQ1RUVhYUMyOEVDM0Y2MWQxMDBkYUY0ZDQwNDcxZjE4NTIpOwoKY29udHJhY3QgVW5pc3dhcFYyQWRkTGlxdWlkaXR5VGVzdCBpcyBUZXN0IHsKICAgIFVuaXN3YXBWMkFkZExpcXVpZGl0eSBwcml2YXRlIHVuaSA9IG5ldyBVbmlzd2FwVjJBZGRMaXF1aWRpdHkoKTsKCiAgICAvLyAgQWRkIFdFVEgvVVNEVCBMaXF1aWRpdHkgdG8gVW5pc3dhcAogICAgZnVuY3Rpb24gdGVzdEFkZExpcXVpZGl0eSgpIHB1YmxpYyB7CiAgICAgICAgLy8gRGVhbCB0ZXN0IFVTRFQgYW5kIFdFVEggdG8gdGhpcyBjb250cmFjdAogICAgICAgIGRlYWwoYWRkcmVzcyhVU0RUKSwgYWRkcmVzcyh0aGlzKSwgMWU2ICogMWU2KTsKICAgICAgICBhc3NlcnRFcShVU0RULmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKSwgMWU2ICogMWU2LCAiVVNEVCBiYWxhbmNlIGluY29ycmVjdCIpOwogICAgICAgIGRlYWwoYWRkcmVzcyhXRVRIKSwgYWRkcmVzcyh0aGlzKSwgMWU2ICogMWUxOCk7CiAgICAgICAgYXNzZXJ0RXEoV0VUSC5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSksIDFlNiAqIDFlMTgsICJXRVRIIGJhbGFuY2UgaW5jb3JyZWN0Iik7CgogICAgICAgIC8vIEFwcHJvdmUgdW5pIGZvciB0cmFuc2ZlcnJpbmcKICAgICAgICBzYWZlQXBwcm92ZShXRVRILCBhZGRyZXNzKHVuaSksIDFlNjQpOwogICAgICAgIHNhZmVBcHByb3ZlKFVTRFQsIGFkZHJlc3ModW5pKSwgMWU2NCk7CgogICAgICAgIHVuaS5hZGRMaXF1aWRpdHkoYWRkcmVzcyhXRVRIKSwgYWRkcmVzcyhVU0RUKSwgMSAqIDFlMTgsIDMwMDAuMDUgKiAxZTYpOwoKICAgICAgICBhc3NlcnRHdChQQUlSLmJhbGFuY2VPZihhZGRyZXNzKHVuaSkpLCAwLCAicGFpciBiYWxhbmNlIDAiKTsKICAgIH0KCiAgICAvLyBSZW1vdmUgV0VUSC9VU0RUIExpcXVpZGl0eSBmcm9tIFVuaXN3YXAKICAgIGZ1bmN0aW9uIHRlc3RSZW1vdmVMaXF1aWRpdHkoKSBwdWJsaWMgewogICAgICAgIC8vIERlYWwgTFAgdG9rZW5zIHRvIHVuaQogICAgICAgIGRlYWwoYWRkcmVzcyhQQUlSKSwgYWRkcmVzcyh1bmkpLCAxZTEwKTsKICAgICAgICBhc3NlcnRFcShQQUlSLmJhbGFuY2VPZihhZGRyZXNzKHVuaSkpLCAxZTEwLCAiTFAgdG9rZW5zIGJhbGFuY2UgPSAwIik7CiAgICAgICAgYXNzZXJ0RXEoVVNEVC5iYWxhbmNlT2YoYWRkcmVzcyh1bmkpKSwgMCwgIlVTRFQgYmFsYW5jZSBub24temVybyIpOwogICAgICAgIGFzc2VydEVxKFdFVEguYmFsYW5jZU9mKGFkZHJlc3ModW5pKSksIDAsICJXRVRIIGJhbGFuY2Ugbm9uLXplcm8iKTsKCiAgICAgICAgdW5pLnJlbW92ZUxpcXVpZGl0eShhZGRyZXNzKFdFVEgpLCBhZGRyZXNzKFVTRFQpKTsKCiAgICAgICAgYXNzZXJ0RXEoUEFJUi5iYWxhbmNlT2YoYWRkcmVzcyh1bmkpKSwgMCwgIkxQIHRva2VucyBiYWxhbmNlICE9IDAiKTsKICAgICAgICBhc3NlcnRHdChVU0RULmJhbGFuY2VPZihhZGRyZXNzKHVuaSkpLCAwLCAiVVNEVCBiYWxhbmNlID0gMCIpOwogICAgICAgIGFzc2VydEd0KFdFVEguYmFsYW5jZU9mKGFkZHJlc3ModW5pKSksIDAsICJXRVRIIGJhbGFuY2UgPSAwIik7CiAgICB9CgoKICAgIC8qKgogICAgICogQGRldiBSZXF1aXJlZCBmb3IgdG9rZW5zIHRoYXQgZG8gbm90IGZvbGxvdyB0aGUgRVJDMjAgc3RhbmRhcmQuCiAgICAgKiBGb3IgZXhhbXBsZSwgVVNEVCB0cmFuc2ZlckZyb20gZG9lc24ndCByZXR1cm4gYSBib29sLgogICAgICogVGhpcyBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgd2UgYXJlIG5ldmVyIGJsb2NrZWQgYnkgYSB0b2tlbidzIHRyYW5zZmVyRnJvbSBpbXBsZW1lbnRhdGlvbi4KICAgICAqIFdpdGhvdXQgaXQsIHRoZSB0cmFuc2ZlckZyb20gY2FsbCB3b3VsZCBmYWlsLgogICAgICovCiAgICBmdW5jdGlvbiBzYWZlVHJhbnNmZXJGcm9tKAogICAgICAgIElFUkMyMCB0b2tlbiwKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudCwKICAgICAgICB1aW50IGFtb3VudAogICAgKSBpbnRlcm5hbCB7CiAgICAgICAgKGJvb2wgc3VjY2Vzc1RyYW5zZmVyRnJvbSwgKSA9IGFkZHJlc3ModG9rZW4pLmNhbGwoCiAgICAgICAgICAgIGFiaS5lbmNvZGVDYWxsKElFUkMyMC50cmFuc2ZlckZyb20sIChzZW5kZXIsIHJlY2lwaWVudCwgYW1vdW50KSkKICAgICAgICApOwogICAgICAgIHJlcXVpcmUoc3VjY2Vzc1RyYW5zZmVyRnJvbSwgInRyYW5zZmVyRnJvbSBmYWlsZWQiKTsKICAgIH0KCiAgICAvKioKICAgICAqIEBkZXYgUmVxdWlyZWQgZm9yIHRva2VucyB0aGF0IGRvIG5vdCBmb2xsb3cgdGhlIEVSQzIwIHN0YW5kYXJkLgogICAgICogRm9yIGV4YW1wbGUsIFVTRFQgYXBwcm92ZSBkb2Vzbid0IHJldHVybiBhIGJvb2wuCiAgICAgKiBUaGlzIGZ1bmN0aW9uIGVuc3VyZXMgdGhhdCB3ZSBhcmUgbmV2ZXIgYmxvY2tlZCBieSBhIHRva2VuJ3MgYXBwcm92ZSBpbXBsZW1lbnRhdGlvbi4KICAgICAqIFdpdGhvdXQgaXQsIHRoZSBhcHByb3ZlIGNhbGwgd291bGQgZmFpbC4KICAgICAqLwogICAgZnVuY3Rpb24gc2FmZUFwcHJvdmUoSUVSQzIwIHRva2VuLCBhZGRyZXNzIHNwZW5kZXIsIHVpbnQgYW1vdW50KSBpbnRlcm5hbCB7CiAgICAgICAgKGJvb2wgc3VjY2Vzc0FwcHJvdmUsICkgPSBhZGRyZXNzKHRva2VuKS5jYWxsKAogICAgICAgICAgICBhYmkuZW5jb2RlQ2FsbChJRVJDMjAuYXBwcm92ZSwgKHNwZW5kZXIsIGFtb3VudCkpCiAgICAgICAgKTsKICAgICAgICByZXF1aXJlKHN1Y2Nlc3NBcHByb3ZlLCAiYXBwcm92ZSBmYWlsZWQiKTsKICAgIH0KfQo=",
    },
]

const html = `<h3 id="add--remove-liquidity">Add / Remove Liquidity</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2AddLiquidity</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FACTORY <span class="hljs-operator">=</span> <span class="hljs-number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> ROUTER <span class="hljs-operator">=</span> <span class="hljs-number">0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> USDT <span class="hljs-operator">=</span> <span class="hljs-number">0xdAC17F958D2ee523a2206206994597C13D831ec7</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _tokenA,
        <span class="hljs-keyword">address</span> _tokenB,
        <span class="hljs-keyword">uint</span> _amountA,
        <span class="hljs-keyword">uint</span> _amountB
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        safeTransferFrom(IERC20(_tokenA), <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountA);
        safeTransferFrom(IERC20(_tokenB), <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountB);

        safeApprove(IERC20(_tokenA), ROUTER, _amountA);
        safeApprove(IERC20(_tokenB), ROUTER, _amountB);

        (<span class="hljs-keyword">uint</span> amountA, <span class="hljs-keyword">uint</span> amountB, <span class="hljs-keyword">uint</span> liquidity) <span class="hljs-operator">=</span> IUniswapV2Router(ROUTER)
            .addLiquidity(
                _tokenA,
                _tokenB,
                _amountA,
                _amountB,
                <span class="hljs-number">1</span>,
                <span class="hljs-number">1</span>,
                <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
                <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
            );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _tokenA, <span class="hljs-keyword">address</span> _tokenB</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> pair <span class="hljs-operator">=</span> IUniswapV2Factory(FACTORY).getPair(_tokenA, _tokenB);

        <span class="hljs-keyword">uint</span> liquidity <span class="hljs-operator">=</span> IERC20(pair).balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        safeApprove(IERC20(pair), ROUTER, liquidity);

        (<span class="hljs-keyword">uint</span> amountA, <span class="hljs-keyword">uint</span> amountB) <span class="hljs-operator">=</span> IUniswapV2Router(ROUTER).removeLiquidity(
            _tokenA,
            _tokenB,
            liquidity,
            <span class="hljs-number">1</span>,
            <span class="hljs-number">1</span>,
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );
    }

    <span class="hljs-comment">/**
     * @dev Required for tokens that do not follow the ERC20 standard.
     * For example, USDT transferFrom doesn&#x27;t return a bool.
     * This function ensures that we are never blocked by a token&#x27;s transferFrom implementation.
     * Without it, the transferFrom call would fail.
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        IERC20 token,
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        (<span class="hljs-keyword">bool</span> successTransferFrom, ) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.transferFrom, (sender, recipient, amount))
        );
        <span class="hljs-built_in">require</span>(successTransferFrom, <span class="hljs-string">"transferFrom failed"</span>);
    }

    <span class="hljs-comment">/**
     * @dev Required for tokens that do not follow the ERC20 standard.
     * For example, USDT approve doesn&#x27;t return a bool.
     * This function ensures that we are never blocked by a token&#x27;s approve implementation.
     * Without it, the approve call would fail.
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeApprove</span>(<span class="hljs-params">IERC20 token, <span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        (<span class="hljs-keyword">bool</span> successApprove, ) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.approve, (spender, amount))
        );
        <span class="hljs-built_in">require</span>(successApprove, <span class="hljs-string">"approve failed"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Router</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenA,
        <span class="hljs-keyword">address</span> tokenB,
        <span class="hljs-keyword">uint</span> amountADesired,
        <span class="hljs-keyword">uint</span> amountBDesired,
        <span class="hljs-keyword">uint</span> amountAMin,
        <span class="hljs-keyword">uint</span> amountBMin,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountA, <span class="hljs-keyword">uint</span> amountB, <span class="hljs-keyword">uint</span> liquidity</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenA,
        <span class="hljs-keyword">address</span> tokenB,
        <span class="hljs-keyword">uint</span> liquidity,
        <span class="hljs-keyword">uint</span> amountAMin,
        <span class="hljs-keyword">uint</span> amountBMin,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountA, <span class="hljs-keyword">uint</span> amountB</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPair</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token0, <span class="hljs-keyword">address</span> token1</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}
</code></pre>
<h3 id="test-with-foundry">Test with Foundry</h3>
<p><code>forge test --fork-url &lt;ethereum-mainnet-rpc&gt;</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/console.sol"</span>;

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV2Liquidity.sol"</span>;

IERC20 <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> IERC20(<span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>);
IERC20 <span class="hljs-keyword">constant</span> USDT <span class="hljs-operator">=</span> IERC20(<span class="hljs-number">0xdAC17F958D2ee523a2206206994597C13D831ec7</span>);
IERC20 <span class="hljs-keyword">constant</span> PAIR <span class="hljs-operator">=</span> IERC20(<span class="hljs-number">0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852</span>);

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2AddLiquidityTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    UniswapV2AddLiquidity <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV2AddLiquidity();

    <span class="hljs-comment">//  Add WETH/USDT Liquidity to Uniswap</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testAddLiquidity</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Deal test USDT and WETH to this contract</span>
        deal(<span class="hljs-keyword">address</span>(USDT), <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e6</span>);
        assertEq(USDT.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e6</span>, <span class="hljs-string">"USDT balance incorrect"</span>);
        deal(<span class="hljs-keyword">address</span>(WETH), <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        assertEq(WETH.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>, <span class="hljs-string">"WETH balance incorrect"</span>);

        <span class="hljs-comment">// Approve uni for transferring</span>
        safeApprove(WETH, <span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e64</span>);
        safeApprove(USDT, <span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e64</span>);

        uni.addLiquidity(<span class="hljs-keyword">address</span>(WETH), <span class="hljs-keyword">address</span>(USDT), <span class="hljs-number">1</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>, <span class="hljs-number">3000.05</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e6</span>);

        assertGt(PAIR.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"pair balance 0"</span>);
    }

    <span class="hljs-comment">// Remove WETH/USDT Liquidity from Uniswap</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRemoveLiquidity</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Deal LP tokens to uni</span>
        deal(<span class="hljs-keyword">address</span>(PAIR), <span class="hljs-keyword">address</span>(uni), <span class="hljs-number">1e10</span>);
        assertEq(PAIR.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">1e10</span>, <span class="hljs-string">"LP tokens balance = 0"</span>);
        assertEq(USDT.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"USDT balance non-zero"</span>);
        assertEq(WETH.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"WETH balance non-zero"</span>);

        uni.removeLiquidity(<span class="hljs-keyword">address</span>(WETH), <span class="hljs-keyword">address</span>(USDT));

        assertEq(PAIR.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"LP tokens balance != 0"</span>);
        assertGt(USDT.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"USDT balance = 0"</span>);
        assertGt(WETH.balanceOf(<span class="hljs-keyword">address</span>(uni)), <span class="hljs-number">0</span>, <span class="hljs-string">"WETH balance = 0"</span>);
    }


    <span class="hljs-comment">/**
     * @dev Required for tokens that do not follow the ERC20 standard.
     * For example, USDT transferFrom doesn&#x27;t return a bool.
     * This function ensures that we are never blocked by a token&#x27;s transferFrom implementation.
     * Without it, the transferFrom call would fail.
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        IERC20 token,
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        (<span class="hljs-keyword">bool</span> successTransferFrom, ) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.transferFrom, (sender, recipient, amount))
        );
        <span class="hljs-built_in">require</span>(successTransferFrom, <span class="hljs-string">"transferFrom failed"</span>);
    }

    <span class="hljs-comment">/**
     * @dev Required for tokens that do not follow the ERC20 standard.
     * For example, USDT approve doesn&#x27;t return a bool.
     * This function ensures that we are never blocked by a token&#x27;s approve implementation.
     * Without it, the approve call would fail.
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeApprove</span>(<span class="hljs-params">IERC20 token, <span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        (<span class="hljs-keyword">bool</span> successApprove, ) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.approve, (spender, amount))
        );
        <span class="hljs-built_in">require</span>(successApprove, <span class="hljs-string">"approve failed"</span>);
    }
}
</code></pre>
`

export default html
