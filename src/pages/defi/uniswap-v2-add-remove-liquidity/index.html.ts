// metadata
export const version = "0.8.20"
export const title = "Uniswap V2 Add Remove Liquidity"
export const description = "Uniswap V2 add remove liquidity"

export const keywords = ["defi", "uniswap", "v2", "add", "remove", "liquidity", "amm"]

export const codes = [
  {
    fileName: "UniswapV2Liquidity.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IFVuaXN3YXBWMkFkZExpcXVpZGl0eSB7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgRkFDVE9SWSA9CiAgICAgICAgMHg1QzY5YkVlNzAxZWY4MTRhMkI2YTNFREQ0QjE2NTJDQjljYzVhQTZmOwogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IFJPVVRFUiA9IDB4N2EyNTBkNTYzMEI0Y0Y1Mzk3MzlkRjJDNWRBY2I0YzY1OUYyNDg4RDsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IFVTRFQgPSAweGRBQzE3Rjk1OEQyZWU1MjNhMjIwNjIwNjk5NDU5N0MxM0Q4MzFlYzc7CgogICAgZnVuY3Rpb24gYWRkTGlxdWlkaXR5KAogICAgICAgIGFkZHJlc3MgX3Rva2VuQSwKICAgICAgICBhZGRyZXNzIF90b2tlbkIsCiAgICAgICAgdWludDI1NiBfYW1vdW50QSwKICAgICAgICB1aW50MjU2IF9hbW91bnRCCiAgICApIGV4dGVybmFsIHsKICAgICAgICBzYWZlVHJhbnNmZXJGcm9tKElFUkMyMChfdG9rZW5BKSwgbXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgX2Ftb3VudEEpOwogICAgICAgIHNhZmVUcmFuc2ZlckZyb20oSUVSQzIwKF90b2tlbkIpLCBtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBfYW1vdW50Qik7CgogICAgICAgIHNhZmVBcHByb3ZlKElFUkMyMChfdG9rZW5BKSwgUk9VVEVSLCBfYW1vdW50QSk7CiAgICAgICAgc2FmZUFwcHJvdmUoSUVSQzIwKF90b2tlbkIpLCBST1VURVIsIF9hbW91bnRCKTsKCiAgICAgICAgKHVpbnQyNTYgYW1vdW50QSwgdWludDI1NiBhbW91bnRCLCB1aW50MjU2IGxpcXVpZGl0eSkgPSBJVW5pc3dhcFYyUm91dGVyKAogICAgICAgICAgICBST1VURVIKICAgICAgICApLmFkZExpcXVpZGl0eSgKICAgICAgICAgICAgX3Rva2VuQSwKICAgICAgICAgICAgX3Rva2VuQiwKICAgICAgICAgICAgX2Ftb3VudEEsCiAgICAgICAgICAgIF9hbW91bnRCLAogICAgICAgICAgICAxLAogICAgICAgICAgICAxLAogICAgICAgICAgICBhZGRyZXNzKHRoaXMpLAogICAgICAgICAgICBibG9jay50aW1lc3RhbXAKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlbW92ZUxpcXVpZGl0eShhZGRyZXNzIF90b2tlbkEsIGFkZHJlc3MgX3Rva2VuQikgZXh0ZXJuYWwgewogICAgICAgIGFkZHJlc3MgcGFpciA9IElVbmlzd2FwVjJGYWN0b3J5KEZBQ1RPUlkpLmdldFBhaXIoX3Rva2VuQSwgX3Rva2VuQik7CgogICAgICAgIHVpbnQyNTYgbGlxdWlkaXR5ID0gSUVSQzIwKHBhaXIpLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICBzYWZlQXBwcm92ZShJRVJDMjAocGFpciksIFJPVVRFUiwgbGlxdWlkaXR5KTsKCiAgICAgICAgKHVpbnQyNTYgYW1vdW50QSwgdWludDI1NiBhbW91bnRCKSA9IElVbmlzd2FwVjJSb3V0ZXIoUk9VVEVSKQogICAgICAgICAgICAucmVtb3ZlTGlxdWlkaXR5KAogICAgICAgICAgICBfdG9rZW5BLCBfdG9rZW5CLCBsaXF1aWRpdHksIDEsIDEsIGFkZHJlc3ModGhpcyksIGJsb2NrLnRpbWVzdGFtcAogICAgICAgICk7CiAgICB9CgogICAgLyoqCiAgICAgKiBAZGV2IFRoZSB0cmFuc2ZlckZyb20gZnVuY3Rpb24gbWF5IG9yIG1heSBub3QgcmV0dXJuIGEgYm9vbC4KICAgICAqIFRoZSBFUkMtMjAgc3BlYyByZXR1cm5zIGEgYm9vbCwgYnV0IHNvbWUgdG9rZW5zIGRvbid0IGZvbGxvdyB0aGUgc3BlYy4KICAgICAqIE5lZWQgdG8gY2hlY2sgaWYgZGF0YSBpcyBlbXB0eSBvciB0cnVlLgogICAgICovCiAgICBmdW5jdGlvbiBzYWZlVHJhbnNmZXJGcm9tKAogICAgICAgIElFUkMyMCB0b2tlbiwKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudCwKICAgICAgICB1aW50MjU2IGFtb3VudAogICAgKSBpbnRlcm5hbCB7CiAgICAgICAgKGJvb2wgc3VjY2VzcywgYnl0ZXMgbWVtb3J5IHJldHVybkRhdGEpID0gYWRkcmVzcyh0b2tlbikuY2FsbCgKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoSUVSQzIwLnRyYW5zZmVyRnJvbSwgKHNlbmRlciwgcmVjaXBpZW50LCBhbW91bnQpKQogICAgICAgICk7CiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgc3VjY2VzcwogICAgICAgICAgICAgICAgJiYgKHJldHVybkRhdGEubGVuZ3RoID09IDAgfHwgYWJpLmRlY29kZShyZXR1cm5EYXRhLCAoYm9vbCkpKSwKICAgICAgICAgICAgIlRyYW5zZmVyIGZyb20gZmFpbCIKICAgICAgICApOwogICAgfQoKICAgIC8qKgogICAgICogQGRldiBUaGUgYXBwcm92ZSBmdW5jdGlvbiBtYXkgb3IgbWF5IG5vdCByZXR1cm4gYSBib29sLgogICAgICogVGhlIEVSQy0yMCBzcGVjIHJldHVybnMgYSBib29sLCBidXQgc29tZSB0b2tlbnMgZG9uJ3QgZm9sbG93IHRoZSBzcGVjLgogICAgICogTmVlZCB0byBjaGVjayBpZiBkYXRhIGlzIGVtcHR5IG9yIHRydWUuCiAgICAgKi8KICAgIGZ1bmN0aW9uIHNhZmVBcHByb3ZlKElFUkMyMCB0b2tlbiwgYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkKICAgICAgICBpbnRlcm5hbAogICAgewogICAgICAgIChib29sIHN1Y2Nlc3MsIGJ5dGVzIG1lbW9yeSByZXR1cm5EYXRhKSA9IGFkZHJlc3ModG9rZW4pLmNhbGwoCiAgICAgICAgICAgIGFiaS5lbmNvZGVDYWxsKElFUkMyMC5hcHByb3ZlLCAoc3BlbmRlciwgYW1vdW50KSkKICAgICAgICApOwogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIHN1Y2Nlc3MKICAgICAgICAgICAgICAgICYmIChyZXR1cm5EYXRhLmxlbmd0aCA9PSAwIHx8IGFiaS5kZWNvZGUocmV0dXJuRGF0YSwgKGJvb2wpKSksCiAgICAgICAgICAgICJBcHByb3ZlIGZhaWwiCiAgICAgICAgKTsKICAgIH0KfQoKaW50ZXJmYWNlIElVbmlzd2FwVjJSb3V0ZXIgewogICAgZnVuY3Rpb24gYWRkTGlxdWlkaXR5KAogICAgICAgIGFkZHJlc3MgdG9rZW5BLAogICAgICAgIGFkZHJlc3MgdG9rZW5CLAogICAgICAgIHVpbnQyNTYgYW1vdW50QURlc2lyZWQsCiAgICAgICAgdWludDI1NiBhbW91bnRCRGVzaXJlZCwKICAgICAgICB1aW50MjU2IGFtb3VudEFNaW4sCiAgICAgICAgdWludDI1NiBhbW91bnRCTWluLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludDI1NiBkZWFkbGluZQogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50MjU2IGFtb3VudEEsIHVpbnQyNTYgYW1vdW50QiwgdWludDI1NiBsaXF1aWRpdHkpOwoKICAgIGZ1bmN0aW9uIHJlbW92ZUxpcXVpZGl0eSgKICAgICAgICBhZGRyZXNzIHRva2VuQSwKICAgICAgICBhZGRyZXNzIHRva2VuQiwKICAgICAgICB1aW50MjU2IGxpcXVpZGl0eSwKICAgICAgICB1aW50MjU2IGFtb3VudEFNaW4sCiAgICAgICAgdWludDI1NiBhbW91bnRCTWluLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludDI1NiBkZWFkbGluZQogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50MjU2IGFtb3VudEEsIHVpbnQyNTYgYW1vdW50Qik7Cn0KCmludGVyZmFjZSBJVW5pc3dhcFYyRmFjdG9yeSB7CiAgICBmdW5jdGlvbiBnZXRQYWlyKGFkZHJlc3MgdG9rZW4wLCBhZGRyZXNzIHRva2VuMSkKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChhZGRyZXNzKTsKfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiBhbGxvd2FuY2UoYWRkcmVzcyBvd25lciwgYWRkcmVzcyBzcGVuZGVyKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIHNlbmRlciwgYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7Cn0K",
  },
  {
    fileName: "UniswapV2LiquidityTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICJmb3JnZS1zdGQvY29uc29sZS5zb2wiOwoKaW1wb3J0ICIuLi9zcmMvVW5pc3dhcFYyTGlxdWlkaXR5LnNvbCI7CgpJRVJDMjAgY29uc3RhbnQgV0VUSCA9IElFUkMyMCgweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzIpOwpJRVJDMjAgY29uc3RhbnQgVVNEVCA9IElFUkMyMCgweGRBQzE3Rjk1OEQyZWU1MjNhMjIwNjIwNjk5NDU5N0MxM0Q4MzFlYzcpOwpJRVJDMjAgY29uc3RhbnQgUEFJUiA9IElFUkMyMCgweDBkNGExMWQ1RUVhYUMyOEVDM0Y2MWQxMDBkYUY0ZDQwNDcxZjE4NTIpOwoKY29udHJhY3QgVW5pc3dhcFYyQWRkTGlxdWlkaXR5VGVzdCBpcyBUZXN0IHsKICAgIFVuaXN3YXBWMkFkZExpcXVpZGl0eSBwcml2YXRlIHVuaSA9IG5ldyBVbmlzd2FwVjJBZGRMaXF1aWRpdHkoKTsKCiAgICAvLyAgQWRkIFdFVEgvVVNEVCBMaXF1aWRpdHkgdG8gVW5pc3dhcAogICAgZnVuY3Rpb24gdGVzdEFkZExpcXVpZGl0eSgpIHB1YmxpYyB7CiAgICAgICAgLy8gRGVhbCB0ZXN0IFVTRFQgYW5kIFdFVEggdG8gdGhpcyBjb250cmFjdAogICAgICAgIGRlYWwoYWRkcmVzcyhVU0RUKSwgYWRkcmVzcyh0aGlzKSwgMWU2ICogMWU2KTsKICAgICAgICBhc3NlcnRFcSgKICAgICAgICAgICAgVVNEVC5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSksIDFlNiAqIDFlNiwgIlVTRFQgYmFsYW5jZSBpbmNvcnJlY3QiCiAgICAgICAgKTsKICAgICAgICBkZWFsKGFkZHJlc3MoV0VUSCksIGFkZHJlc3ModGhpcyksIDFlNiAqIDFlMTgpOwogICAgICAgIGFzc2VydEVxKAogICAgICAgICAgICBXRVRILmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKSwgMWU2ICogMWUxOCwgIldFVEggYmFsYW5jZSBpbmNvcnJlY3QiCiAgICAgICAgKTsKCiAgICAgICAgLy8gQXBwcm92ZSB1bmkgZm9yIHRyYW5zZmVycmluZwogICAgICAgIHNhZmVBcHByb3ZlKFdFVEgsIGFkZHJlc3ModW5pKSwgMWU2NCk7CiAgICAgICAgc2FmZUFwcHJvdmUoVVNEVCwgYWRkcmVzcyh1bmkpLCAxZTY0KTsKCiAgICAgICAgdW5pLmFkZExpcXVpZGl0eShhZGRyZXNzKFdFVEgpLCBhZGRyZXNzKFVTRFQpLCAxICogMWUxOCwgMzAwMC4wNSAqIDFlNik7CgogICAgICAgIGFzc2VydEd0KFBBSVIuYmFsYW5jZU9mKGFkZHJlc3ModW5pKSksIDAsICJwYWlyIGJhbGFuY2UgMCIpOwogICAgfQoKICAgIC8vIFJlbW92ZSBXRVRIL1VTRFQgTGlxdWlkaXR5IGZyb20gVW5pc3dhcAogICAgZnVuY3Rpb24gdGVzdFJlbW92ZUxpcXVpZGl0eSgpIHB1YmxpYyB7CiAgICAgICAgLy8gRGVhbCBMUCB0b2tlbnMgdG8gdW5pCiAgICAgICAgZGVhbChhZGRyZXNzKFBBSVIpLCBhZGRyZXNzKHVuaSksIDFlMTApOwogICAgICAgIGFzc2VydEVxKFBBSVIuYmFsYW5jZU9mKGFkZHJlc3ModW5pKSksIDFlMTAsICJMUCB0b2tlbnMgYmFsYW5jZSA9IDAiKTsKICAgICAgICBhc3NlcnRFcShVU0RULmJhbGFuY2VPZihhZGRyZXNzKHVuaSkpLCAwLCAiVVNEVCBiYWxhbmNlIG5vbi16ZXJvIik7CiAgICAgICAgYXNzZXJ0RXEoV0VUSC5iYWxhbmNlT2YoYWRkcmVzcyh1bmkpKSwgMCwgIldFVEggYmFsYW5jZSBub24temVybyIpOwoKICAgICAgICB1bmkucmVtb3ZlTGlxdWlkaXR5KGFkZHJlc3MoV0VUSCksIGFkZHJlc3MoVVNEVCkpOwoKICAgICAgICBhc3NlcnRFcShQQUlSLmJhbGFuY2VPZihhZGRyZXNzKHVuaSkpLCAwLCAiTFAgdG9rZW5zIGJhbGFuY2UgIT0gMCIpOwogICAgICAgIGFzc2VydEd0KFVTRFQuYmFsYW5jZU9mKGFkZHJlc3ModW5pKSksIDAsICJVU0RUIGJhbGFuY2UgPSAwIik7CiAgICAgICAgYXNzZXJ0R3QoV0VUSC5iYWxhbmNlT2YoYWRkcmVzcyh1bmkpKSwgMCwgIldFVEggYmFsYW5jZSA9IDAiKTsKICAgIH0KCiAgICAvKioKICAgICAqIEBkZXYgVGhlIHRyYW5zZmVyRnJvbSBmdW5jdGlvbiBtYXkgb3IgbWF5IG5vdCByZXR1cm4gYSBib29sLgogICAgICogVGhlIEVSQy0yMCBzcGVjIHJldHVybnMgYSBib29sLCBidXQgc29tZSB0b2tlbnMgZG9uJ3QgZm9sbG93IHRoZSBzcGVjLgogICAgICogTmVlZCB0byBjaGVjayBpZiBkYXRhIGlzIGVtcHR5IG9yIHRydWUuCiAgICAgKi8KICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oCiAgICAgICAgSUVSQzIwIHRva2VuLAogICAgICAgIGFkZHJlc3Mgc2VuZGVyLAogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50LAogICAgICAgIHVpbnQyNTYgYW1vdW50CiAgICApIGludGVybmFsIHsKICAgICAgICAoYm9vbCBzdWNjZXNzLCBieXRlcyBtZW1vcnkgcmV0dXJuRGF0YSkgPSBhZGRyZXNzKHRva2VuKS5jYWxsKAogICAgICAgICAgICBhYmkuZW5jb2RlQ2FsbChJRVJDMjAudHJhbnNmZXJGcm9tLCAoc2VuZGVyLCByZWNpcGllbnQsIGFtb3VudCkpCiAgICAgICAgKTsKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICBzdWNjZXNzCiAgICAgICAgICAgICAgICAmJiAocmV0dXJuRGF0YS5sZW5ndGggPT0gMCB8fCBhYmkuZGVjb2RlKHJldHVybkRhdGEsIChib29sKSkpLAogICAgICAgICAgICAiVHJhbnNmZXIgZnJvbSBmYWlsIgogICAgICAgICk7CiAgICB9CgogICAgLyoqCiAgICAgKiBAZGV2IFRoZSBhcHByb3ZlIGZ1bmN0aW9uIG1heSBvciBtYXkgbm90IHJldHVybiBhIGJvb2wuCiAgICAgKiBUaGUgRVJDLTIwIHNwZWMgcmV0dXJucyBhIGJvb2wsIGJ1dCBzb21lIHRva2VucyBkb24ndCBmb2xsb3cgdGhlIHNwZWMuCiAgICAgKiBOZWVkIHRvIGNoZWNrIGlmIGRhdGEgaXMgZW1wdHkgb3IgdHJ1ZS4KICAgICAqLwogICAgZnVuY3Rpb24gc2FmZUFwcHJvdmUoSUVSQzIwIHRva2VuLCBhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGludGVybmFsCiAgICB7CiAgICAgICAgKGJvb2wgc3VjY2VzcywgYnl0ZXMgbWVtb3J5IHJldHVybkRhdGEpID0gYWRkcmVzcyh0b2tlbikuY2FsbCgKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoSUVSQzIwLmFwcHJvdmUsIChzcGVuZGVyLCBhbW91bnQpKQogICAgICAgICk7CiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgc3VjY2VzcwogICAgICAgICAgICAgICAgJiYgKHJldHVybkRhdGEubGVuZ3RoID09IDAgfHwgYWJpLmRlY29kZShyZXR1cm5EYXRhLCAoYm9vbCkpKSwKICAgICAgICAgICAgIkFwcHJvdmUgZmFpbCIKICAgICAgICApOwogICAgfQp9Cg==",
  },
]

const html = `<h3>Add / Remove Liquidity</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2AddLiquidity</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FACTORY <span class="hljs-operator">=</span>
        <span class="hljs-number">0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> ROUTER <span class="hljs-operator">=</span> <span class="hljs-number">0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> USDT <span class="hljs-operator">=</span> <span class="hljs-number">0xdAC17F958D2ee523a2206206994597C13D831ec7</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _tokenA,
        <span class="hljs-keyword">address</span> _tokenB,
        <span class="hljs-keyword">uint256</span> _amountA,
        <span class="hljs-keyword">uint256</span> _amountB
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        safeTransferFrom(IERC20(_tokenA), <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountA);
        safeTransferFrom(IERC20(_tokenB), <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountB);

        safeApprove(IERC20(_tokenA), ROUTER, _amountA);
        safeApprove(IERC20(_tokenB), ROUTER, _amountB);

        (<span class="hljs-keyword">uint256</span> amountA, <span class="hljs-keyword">uint256</span> amountB, <span class="hljs-keyword">uint256</span> liquidity) <span class="hljs-operator">=</span> IUniswapV2Router(
            ROUTER
        ).addLiquidity(
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

        <span class="hljs-keyword">uint256</span> liquidity <span class="hljs-operator">=</span> IERC20(pair).balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        safeApprove(IERC20(pair), ROUTER, liquidity);

        (<span class="hljs-keyword">uint256</span> amountA, <span class="hljs-keyword">uint256</span> amountB) <span class="hljs-operator">=</span> IUniswapV2Router(ROUTER)
            .removeLiquidity(
            _tokenA, _tokenB, liquidity, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );
    }

    <span class="hljs-comment">/**
     * @dev The transferFrom function may or may not return a bool.
     * The ERC-20 spec returns a bool, but some tokens don&#x27;t follow the spec.
     * Need to check if data is empty or true.
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        IERC20 token,
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint256</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> returnData) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.transferFrom, (sender, recipient, amount))
        );
        <span class="hljs-built_in">require</span>(
            success
                <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> (returnData.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(returnData, (<span class="hljs-keyword">bool</span>))),
            <span class="hljs-string">"Transfer from fail"</span>
        );
    }

    <span class="hljs-comment">/**
     * @dev The approve function may or may not return a bool.
     * The ERC-20 spec returns a bool, but some tokens don&#x27;t follow the spec.
     * Need to check if data is empty or true.
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeApprove</span>(<span class="hljs-params">IERC20 token, <span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
    </span>{
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> returnData) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.approve, (spender, amount))
        );
        <span class="hljs-built_in">require</span>(
            success
                <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> (returnData.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(returnData, (<span class="hljs-keyword">bool</span>))),
            <span class="hljs-string">"Approve fail"</span>
        );
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Router</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenA,
        <span class="hljs-keyword">address</span> tokenB,
        <span class="hljs-keyword">uint256</span> amountADesired,
        <span class="hljs-keyword">uint256</span> amountBDesired,
        <span class="hljs-keyword">uint256</span> amountAMin,
        <span class="hljs-keyword">uint256</span> amountBMin,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountA, <span class="hljs-keyword">uint256</span> amountB, <span class="hljs-keyword">uint256</span> liquidity</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> tokenA,
        <span class="hljs-keyword">address</span> tokenB,
        <span class="hljs-keyword">uint256</span> liquidity,
        <span class="hljs-keyword">uint256</span> amountAMin,
        <span class="hljs-keyword">uint256</span> amountBMin,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountA, <span class="hljs-keyword">uint256</span> amountB</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Factory</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getPair</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> token0, <span class="hljs-keyword">address</span> token1</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)</span>;
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
</code></pre><h3>Test with Foundry</h3>
<p><code>forge test --fork-url &lt;ethereum-mainnet-rpc&gt;</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

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
        assertEq(
            USDT.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e6</span>, <span class="hljs-string">"USDT balance incorrect"</span>
        );
        deal(<span class="hljs-keyword">address</span>(WETH), <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        assertEq(
            WETH.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)), <span class="hljs-number">1e6</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>, <span class="hljs-string">"WETH balance incorrect"</span>
        );

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
     * @dev The transferFrom function may or may not return a bool.
     * The ERC-20 spec returns a bool, but some tokens don&#x27;t follow the spec.
     * Need to check if data is empty or true.
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        IERC20 token,
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint256</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> returnData) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.transferFrom, (sender, recipient, amount))
        );
        <span class="hljs-built_in">require</span>(
            success
                <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> (returnData.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(returnData, (<span class="hljs-keyword">bool</span>))),
            <span class="hljs-string">"Transfer from fail"</span>
        );
    }

    <span class="hljs-comment">/**
     * @dev The approve function may or may not return a bool.
     * The ERC-20 spec returns a bool, but some tokens don&#x27;t follow the spec.
     * Need to check if data is empty or true.
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeApprove</span>(<span class="hljs-params">IERC20 token, <span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
    </span>{
        (<span class="hljs-keyword">bool</span> success, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> returnData) <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token).<span class="hljs-built_in">call</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IERC20.approve, (spender, amount))
        );
        <span class="hljs-built_in">require</span>(
            success
                <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> (returnData.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(returnData, (<span class="hljs-keyword">bool</span>))),
            <span class="hljs-string">"Approve fail"</span>
        );
    }
}
</code></pre>`

export default html
