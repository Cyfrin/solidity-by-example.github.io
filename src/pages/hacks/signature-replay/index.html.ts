// metadata
export const version = "0.8.24"
export const title = "Signature Replay"
export const description = "An example of a contract vulnerable to signature replay attack"

export const keywords = [
    "hack",
    "security",
    "cryptography",
    "signature",
    "replay",
]

export const codes = [
    {
        fileName: "ECDSA.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCi8vIE9wZW5aZXBwZWxpbiBDb250cmFjdHMgKGxhc3QgdXBkYXRlZCB2NC41LjApICh1dGlscy9jcnlwdG9ncmFwaHkvRUNEU0Euc29sKQoKbGlicmFyeSBFQ0RTQSB7CiAgICBlbnVtIFJlY292ZXJFcnJvciB7CiAgICAgICAgTm9FcnJvciwKICAgICAgICBJbnZhbGlkU2lnbmF0dXJlLAogICAgICAgIEludmFsaWRTaWduYXR1cmVMZW5ndGgsCiAgICAgICAgSW52YWxpZFNpZ25hdHVyZVMsCiAgICAgICAgSW52YWxpZFNpZ25hdHVyZVYKICAgIH0KCiAgICBmdW5jdGlvbiBfdGhyb3dFcnJvcihSZWNvdmVyRXJyb3IgZXJyb3IpIHByaXZhdGUgcHVyZSB7CiAgICAgICAgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5Ob0Vycm9yKSB7CiAgICAgICAgICAgIHJldHVybjsgLy8gbm8gZXJyb3I6IGRvIG5vdGhpbmcKICAgICAgICB9IGVsc2UgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlKSB7CiAgICAgICAgICAgIHJldmVydCgiRUNEU0E6IGludmFsaWQgc2lnbmF0dXJlIik7CiAgICAgICAgfSBlbHNlIGlmIChlcnJvciA9PSBSZWNvdmVyRXJyb3IuSW52YWxpZFNpZ25hdHVyZUxlbmd0aCkgewogICAgICAgICAgICByZXZlcnQoIkVDRFNBOiBpbnZhbGlkIHNpZ25hdHVyZSBsZW5ndGgiKTsKICAgICAgICB9IGVsc2UgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlUykgewogICAgICAgICAgICByZXZlcnQoIkVDRFNBOiBpbnZhbGlkIHNpZ25hdHVyZSAncycgdmFsdWUiKTsKICAgICAgICB9IGVsc2UgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlVikgewogICAgICAgICAgICByZXZlcnQoIkVDRFNBOiBpbnZhbGlkIHNpZ25hdHVyZSAndicgdmFsdWUiKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdHJ5UmVjb3ZlcihieXRlczMyIGhhc2gsIGJ5dGVzIG1lbW9yeSBzaWduYXR1cmUpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYWRkcmVzcywgUmVjb3ZlckVycm9yKQogICAgewogICAgICAgIC8vIENoZWNrIHRoZSBzaWduYXR1cmUgbGVuZ3RoCiAgICAgICAgLy8gLSBjYXNlIDY1OiByLHMsdiBzaWduYXR1cmUgKHN0YW5kYXJkKQogICAgICAgIC8vIC0gY2FzZSA2NDogcix2cyBzaWduYXR1cmUgKGNmIGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMjA5OCkgX0F2YWlsYWJsZSBzaW5jZSB2NC4xLl8KICAgICAgICBpZiAoc2lnbmF0dXJlLmxlbmd0aCA9PSA2NSkgewogICAgICAgICAgICBieXRlczMyIHI7CiAgICAgICAgICAgIGJ5dGVzMzIgczsKICAgICAgICAgICAgdWludDggdjsKICAgICAgICAgICAgLy8gZWNyZWNvdmVyIHRha2VzIHRoZSBzaWduYXR1cmUgcGFyYW1ldGVycywgYW5kIHRoZSBvbmx5IHdheSB0byBnZXQgdGhlbQogICAgICAgICAgICAvLyBjdXJyZW50bHkgaXMgdG8gdXNlIGFzc2VtYmx5LgogICAgICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgICAgICByIDo9IG1sb2FkKGFkZChzaWduYXR1cmUsIDB4MjApKQogICAgICAgICAgICAgICAgcyA6PSBtbG9hZChhZGQoc2lnbmF0dXJlLCAweDQwKSkKICAgICAgICAgICAgICAgIHYgOj0gYnl0ZSgwLCBtbG9hZChhZGQoc2lnbmF0dXJlLCAweDYwKSkpCiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHRyeVJlY292ZXIoaGFzaCwgdiwgciwgcyk7CiAgICAgICAgfSBlbHNlIGlmIChzaWduYXR1cmUubGVuZ3RoID09IDY0KSB7CiAgICAgICAgICAgIGJ5dGVzMzIgcjsKICAgICAgICAgICAgYnl0ZXMzMiB2czsKICAgICAgICAgICAgLy8gZWNyZWNvdmVyIHRha2VzIHRoZSBzaWduYXR1cmUgcGFyYW1ldGVycywgYW5kIHRoZSBvbmx5IHdheSB0byBnZXQgdGhlbQogICAgICAgICAgICAvLyBjdXJyZW50bHkgaXMgdG8gdXNlIGFzc2VtYmx5LgogICAgICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgICAgICByIDo9IG1sb2FkKGFkZChzaWduYXR1cmUsIDB4MjApKQogICAgICAgICAgICAgICAgdnMgOj0gbWxvYWQoYWRkKHNpZ25hdHVyZSwgMHg0MCkpCiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHRyeVJlY292ZXIoaGFzaCwgciwgdnMpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHJldHVybiAoYWRkcmVzcygwKSwgUmVjb3ZlckVycm9yLkludmFsaWRTaWduYXR1cmVMZW5ndGgpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiByZWNvdmVyKGJ5dGVzMzIgaGFzaCwgYnl0ZXMgbWVtb3J5IHNpZ25hdHVyZSkKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChhZGRyZXNzKQogICAgewogICAgICAgIChhZGRyZXNzIHJlY292ZXJlZCwgUmVjb3ZlckVycm9yIGVycm9yKSA9IHRyeVJlY292ZXIoaGFzaCwgc2lnbmF0dXJlKTsKICAgICAgICBfdGhyb3dFcnJvcihlcnJvcik7CiAgICAgICAgcmV0dXJuIHJlY292ZXJlZDsKICAgIH0KCiAgICBmdW5jdGlvbiB0cnlSZWNvdmVyKGJ5dGVzMzIgaGFzaCwgYnl0ZXMzMiByLCBieXRlczMyIHZzKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGFkZHJlc3MsIFJlY292ZXJFcnJvcikKICAgIHsKICAgICAgICBieXRlczMyIHMgPSB2cwogICAgICAgICAgICAmIGJ5dGVzMzIoCiAgICAgICAgICAgICAgICAweDdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYKICAgICAgICAgICAgKTsKICAgICAgICB1aW50OCB2ID0gdWludDgoKHVpbnQyNTYodnMpID4+IDI1NSkgKyAyNyk7CiAgICAgICAgcmV0dXJuIHRyeVJlY292ZXIoaGFzaCwgdiwgciwgcyk7CiAgICB9CgogICAgZnVuY3Rpb24gcmVjb3ZlcihieXRlczMyIGhhc2gsIGJ5dGVzMzIgciwgYnl0ZXMzMiB2cykKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChhZGRyZXNzKQogICAgewogICAgICAgIChhZGRyZXNzIHJlY292ZXJlZCwgUmVjb3ZlckVycm9yIGVycm9yKSA9IHRyeVJlY292ZXIoaGFzaCwgciwgdnMpOwogICAgICAgIF90aHJvd0Vycm9yKGVycm9yKTsKICAgICAgICByZXR1cm4gcmVjb3ZlcmVkOwogICAgfQoKICAgIGZ1bmN0aW9uIHRyeVJlY292ZXIoYnl0ZXMzMiBoYXNoLCB1aW50OCB2LCBieXRlczMyIHIsIGJ5dGVzMzIgcykKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChhZGRyZXNzLCBSZWNvdmVyRXJyb3IpCiAgICB7CiAgICAgICAgLy8gRUlQLTIgc3RpbGwgYWxsb3dzIHNpZ25hdHVyZSBtYWxsZWFiaWxpdHkgZm9yIGVjcmVjb3ZlcigpLiBSZW1vdmUgdGhpcyBwb3NzaWJpbGl0eSBhbmQgbWFrZSB0aGUgc2lnbmF0dXJlCiAgICAgICAgLy8gdW5pcXVlLiBBcHBlbmRpeCBGIGluIHRoZSBFdGhlcmV1bSBZZWxsb3cgcGFwZXIgKGh0dHBzOi8vZXRoZXJldW0uZ2l0aHViLmlvL3llbGxvd3BhcGVyL3BhcGVyLnBkZiksIGRlZmluZXMKICAgICAgICAvLyB0aGUgdmFsaWQgcmFuZ2UgZm9yIHMgaW4gKDMwMSk6IDAgPCBzIDwgc2VjcDI1NmsxbiDDtyAyICsgMSwgYW5kIGZvciB2IGluICgzMDIpOiB2IOKIiCB7MjcsIDI4fS4gTW9zdAogICAgICAgIC8vIHNpZ25hdHVyZXMgZnJvbSBjdXJyZW50IGxpYnJhcmllcyBnZW5lcmF0ZSBhIHVuaXF1ZSBzaWduYXR1cmUgd2l0aCBhbiBzLXZhbHVlIGluIHRoZSBsb3dlciBoYWxmIG9yZGVyLgogICAgICAgIC8vCiAgICAgICAgLy8gSWYgeW91ciBsaWJyYXJ5IGdlbmVyYXRlcyBtYWxsZWFibGUgc2lnbmF0dXJlcywgc3VjaCBhcyBzLXZhbHVlcyBpbiB0aGUgdXBwZXIgcmFuZ2UsIGNhbGN1bGF0ZSBhIG5ldyBzLXZhbHVlCiAgICAgICAgLy8gd2l0aCAweEZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZFQkFBRURDRTZBRjQ4QTAzQkJGRDI1RThDRDAzNjQxNDEgLSBzMSBhbmQgZmxpcCB2IGZyb20gMjcgdG8gMjggb3IKICAgICAgICAvLyB2aWNlIHZlcnNhLiBJZiB5b3VyIGxpYnJhcnkgYWxzbyBnZW5lcmF0ZXMgc2lnbmF0dXJlcyB3aXRoIDAvMSBmb3IgdiBpbnN0ZWFkIDI3LzI4LCBhZGQgMjcgdG8gdiB0byBhY2NlcHQKICAgICAgICAvLyB0aGVzZSBtYWxsZWFibGUgc2lnbmF0dXJlcyBhcyB3ZWxsLgogICAgICAgIGlmICgKICAgICAgICAgICAgdWludDI1NihzKQogICAgICAgICAgICAgICAgPiAweDdGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGNUQ1NzZFNzM1N0E0NTAxRERGRTkyRjQ2NjgxQjIwQTAKICAgICAgICApIHsKICAgICAgICAgICAgcmV0dXJuIChhZGRyZXNzKDApLCBSZWNvdmVyRXJyb3IuSW52YWxpZFNpZ25hdHVyZVMpOwogICAgICAgIH0KICAgICAgICBpZiAodiAhPSAyNyAmJiB2ICE9IDI4KSB7CiAgICAgICAgICAgIHJldHVybiAoYWRkcmVzcygwKSwgUmVjb3ZlckVycm9yLkludmFsaWRTaWduYXR1cmVWKTsKICAgICAgICB9CgogICAgICAgIC8vIElmIHRoZSBzaWduYXR1cmUgaXMgdmFsaWQgKGFuZCBub3QgbWFsbGVhYmxlKSwgcmV0dXJuIHRoZSBzaWduZXIgYWRkcmVzcwogICAgICAgIGFkZHJlc3Mgc2lnbmVyID0gZWNyZWNvdmVyKGhhc2gsIHYsIHIsIHMpOwogICAgICAgIGlmIChzaWduZXIgPT0gYWRkcmVzcygwKSkgewogICAgICAgICAgICByZXR1cm4gKGFkZHJlc3MoMCksIFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiAoc2lnbmVyLCBSZWNvdmVyRXJyb3IuTm9FcnJvcik7CiAgICB9CgogICAgZnVuY3Rpb24gcmVjb3ZlcihieXRlczMyIGhhc2gsIHVpbnQ4IHYsIGJ5dGVzMzIgciwgYnl0ZXMzMiBzKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGFkZHJlc3MpCiAgICB7CiAgICAgICAgKGFkZHJlc3MgcmVjb3ZlcmVkLCBSZWNvdmVyRXJyb3IgZXJyb3IpID0gdHJ5UmVjb3ZlcihoYXNoLCB2LCByLCBzKTsKICAgICAgICBfdGhyb3dFcnJvcihlcnJvcik7CiAgICAgICAgcmV0dXJuIHJlY292ZXJlZDsKICAgIH0KCiAgICBmdW5jdGlvbiB0b0V0aFNpZ25lZE1lc3NhZ2VIYXNoKGJ5dGVzMzIgaGFzaCkKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyKQogICAgewogICAgICAgIC8vIDMyIGlzIHRoZSBsZW5ndGggaW4gYnl0ZXMgb2YgaGFzaCwKICAgICAgICAvLyBlbmZvcmNlZCBieSB0aGUgdHlwZSBzaWduYXR1cmUgYWJvdmUKICAgICAgICByZXR1cm4ga2VjY2FrMjU2KAogICAgICAgICAgICBhYmkuZW5jb2RlUGFja2VkKCJceDE5RXRoZXJldW0gU2lnbmVkIE1lc3NhZ2U6XG4zMiIsIGhhc2gpCiAgICAgICAgKTsKICAgIH0KfQo=",
    },
    {
        fileName: "PreventSigReplay.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCAiLi9FQ0RTQS5zb2wiOwoKY29udHJhY3QgTXVsdGlTaWdXYWxsZXQgewogICAgdXNpbmcgRUNEU0EgZm9yIGJ5dGVzMzI7CgogICAgYWRkcmVzc1syXSBwdWJsaWMgb3duZXJzOwogICAgbWFwcGluZyhieXRlczMyID0+IGJvb2wpIHB1YmxpYyBleGVjdXRlZDsKCiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzWzJdIG1lbW9yeSBfb3duZXJzKSBwYXlhYmxlIHsKICAgICAgICBvd25lcnMgPSBfb3duZXJzOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlcG9zaXQoKSBleHRlcm5hbCBwYXlhYmxlIHt9CgogICAgZnVuY3Rpb24gdHJhbnNmZXIoCiAgICAgICAgYWRkcmVzcyBfdG8sCiAgICAgICAgdWludDI1NiBfYW1vdW50LAogICAgICAgIHVpbnQyNTYgX25vbmNlLAogICAgICAgIGJ5dGVzWzJdIG1lbW9yeSBfc2lncwogICAgKSBleHRlcm5hbCB7CiAgICAgICAgYnl0ZXMzMiB0eEhhc2ggPSBnZXRUeEhhc2goX3RvLCBfYW1vdW50LCBfbm9uY2UpOwogICAgICAgIHJlcXVpcmUoIWV4ZWN1dGVkW3R4SGFzaF0sICJ0eCBleGVjdXRlZCIpOwogICAgICAgIHJlcXVpcmUoX2NoZWNrU2lncyhfc2lncywgdHhIYXNoKSwgImludmFsaWQgc2lnIik7CgogICAgICAgIGV4ZWN1dGVkW3R4SGFzaF0gPSB0cnVlOwoKICAgICAgICAoYm9vbCBzZW50LCkgPSBfdG8uY2FsbHt2YWx1ZTogX2Ftb3VudH0oIiIpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0VHhIYXNoKGFkZHJlc3MgX3RvLCB1aW50MjU2IF9hbW91bnQsIHVpbnQyNTYgX25vbmNlKQogICAgICAgIHB1YmxpYwogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChieXRlczMyKQogICAgewogICAgICAgIHJldHVybiBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChhZGRyZXNzKHRoaXMpLCBfdG8sIF9hbW91bnQsIF9ub25jZSkpOwogICAgfQoKICAgIGZ1bmN0aW9uIF9jaGVja1NpZ3MoYnl0ZXNbMl0gbWVtb3J5IF9zaWdzLCBieXRlczMyIF90eEhhc2gpCiAgICAgICAgcHJpdmF0ZQogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIGJ5dGVzMzIgZXRoU2lnbmVkSGFzaCA9IF90eEhhc2gudG9FdGhTaWduZWRNZXNzYWdlSGFzaCgpOwoKICAgICAgICBmb3IgKHVpbnQyNTYgaSA9IDA7IGkgPCBfc2lncy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBhZGRyZXNzIHNpZ25lciA9IGV0aFNpZ25lZEhhc2gucmVjb3Zlcihfc2lnc1tpXSk7CiAgICAgICAgICAgIGJvb2wgdmFsaWQgPSBzaWduZXIgPT0gb3duZXJzW2ldOwoKICAgICAgICAgICAgaWYgKCF2YWxpZCkgewogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KfQoKLyoKLy8gb3duZXJzCjB4ZTE5YWVhOTNGNkMxZEJlZjZBMzc3Njg0OGJFMDk5QTdjMzI1M2FjOAoweGZhODU0RkU1MzM5ODQzYjNlOUJmZDg1NTRCMzhCRDA0MkE0MmUzNDAKCi8vIHRvCjB4ZTEwNDIyY2M2MTAzMEM4QjNkQkNEMzZjN2U3ZThFQzNCNTI3RTBBYwovLyBhbW91bnQKMTAwCi8vIG5vbmNlCjAKLy8gdHggaGFzaAoweDEyYTA5NTQ2MmViZmNhMjdkYzRkOTlmZWVmODg1YmZlNTgzNDRmYjZiYjQyYzNjNTJhN2MwZDY4MzZkMTE0NDgKCi8vIHNpZ25hdHVyZXMKMHgxMjBmOGVkOGYyZmE1NTQ5OGYyZWYwYTIyZjI2ZTM5YjliNTFlZDI5Y2M5M2ZlMGVmM2VkMTc1NmY1OGZhZDBjNmViNWExZDZmMzY3MWY4ZDUxNjM2MzlmZGM0MGJiODcyMGRlNmQ4ZjI1MjMwNzdhZDZkMTEzOGE2MDkyM2I4MDFjCjB4YTI0MGE0ODdkZTFlYjViYjk3MWU5MjBjYjA2NzdhNDdkZGM2NDIxZTM4ZjdiMDQ4ZjhhYTg4MjY2YjJjODg0YTEwNDU1YTUyZGM3NmEyMDNhMWE5YTk1MzQxODQ2OWY5ZWVjMmM1OWU4NzIwMWJiYzhkYjBlNGQ5Nzk2OTM1Y2IxYgoqLwo=",
    },
    {
        fileName: "SigReplay.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCAiLi9FQ0RTQS5zb2wiOwoKY29udHJhY3QgTXVsdGlTaWdXYWxsZXQgewogICAgdXNpbmcgRUNEU0EgZm9yIGJ5dGVzMzI7CgogICAgYWRkcmVzc1syXSBwdWJsaWMgb3duZXJzOwoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3NbMl0gbWVtb3J5IF9vd25lcnMpIHBheWFibGUgewogICAgICAgIG93bmVycyA9IF9vd25lcnM7CiAgICB9CgogICAgZnVuY3Rpb24gZGVwb3NpdCgpIGV4dGVybmFsIHBheWFibGUge30KCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIF90bywgdWludDI1NiBfYW1vdW50LCBieXRlc1syXSBtZW1vcnkgX3NpZ3MpCiAgICAgICAgZXh0ZXJuYWwKICAgIHsKICAgICAgICBieXRlczMyIHR4SGFzaCA9IGdldFR4SGFzaChfdG8sIF9hbW91bnQpOwogICAgICAgIHJlcXVpcmUoX2NoZWNrU2lncyhfc2lncywgdHhIYXNoKSwgImludmFsaWQgc2lnIik7CgogICAgICAgIChib29sIHNlbnQsKSA9IF90by5jYWxse3ZhbHVlOiBfYW1vdW50fSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRUeEhhc2goYWRkcmVzcyBfdG8sIHVpbnQyNTYgX2Ftb3VudCkKICAgICAgICBwdWJsaWMKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMikKICAgIHsKICAgICAgICByZXR1cm4ga2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQoX3RvLCBfYW1vdW50KSk7CiAgICB9CgogICAgZnVuY3Rpb24gX2NoZWNrU2lncyhieXRlc1syXSBtZW1vcnkgX3NpZ3MsIGJ5dGVzMzIgX3R4SGFzaCkKICAgICAgICBwcml2YXRlCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKGJvb2wpCiAgICB7CiAgICAgICAgYnl0ZXMzMiBldGhTaWduZWRIYXNoID0gX3R4SGFzaC50b0V0aFNpZ25lZE1lc3NhZ2VIYXNoKCk7CgogICAgICAgIGZvciAodWludDI1NiBpID0gMDsgaSA8IF9zaWdzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIGFkZHJlc3Mgc2lnbmVyID0gZXRoU2lnbmVkSGFzaC5yZWNvdmVyKF9zaWdzW2ldKTsKICAgICAgICAgICAgYm9vbCB2YWxpZCA9IHNpZ25lciA9PSBvd25lcnNbaV07CgogICAgICAgICAgICBpZiAoIXZhbGlkKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIHJldHVybiB0cnVlOwogICAgfQp9Cg==",
    },
]

const html = `<p>Signing messages off-chain and having a contract that requires that signature before executing
a function is a useful technique.</p>
<p>For example this technique is used to:</p>
<ul>
<li>reduce number of transaction on chain</li>
<li>gas-less transaction, called <code>meta transaction</code></li>
</ul>
<h3>Vulnerability</h3>
<p>Same signature can be used multiple times to execute a function. This can be harmful
if the signer&#39;s intention was to approve a transaction once.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./ECDSA.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiSigWallet</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">public</span> owners;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _owners</span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owners <span class="hljs-operator">=</span> _owners;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint256</span> _amount, <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
    </span>{
        <span class="hljs-keyword">bytes32</span> txHash <span class="hljs-operator">=</span> getTxHash(_to, _amount);
        <span class="hljs-built_in">require</span>(_checkSigs(_sigs, txHash), <span class="hljs-string">"invalid sig"</span>);

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTxHash</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint256</span> _amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_to, _amount));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_checkSigs</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs, <span class="hljs-keyword">bytes32</span> _txHash</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> ethSignedHash <span class="hljs-operator">=</span> _txHash.toEthSignedMessageHash();

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _sigs.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">address</span> signer <span class="hljs-operator">=</span> ethSignedHash.recover(_sigs[i]);
            <span class="hljs-keyword">bool</span> valid <span class="hljs-operator">=</span> signer <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owners[i];

            <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>valid) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
            }
        }

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
}
</code></pre><h3>Preventative Techniques</h3>
<p>Sign messages with <code>nonce</code> and address of the contract.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./ECDSA.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MultiSigWallet</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">public</span> owners;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bytes32</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> executed;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _owners</span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owners <span class="hljs-operator">=</span> _owners;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _to,
        <span class="hljs-keyword">uint256</span> _amount,
        <span class="hljs-keyword">uint256</span> _nonce,
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bytes32</span> txHash <span class="hljs-operator">=</span> getTxHash(_to, _amount, _nonce);
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>executed[txHash], <span class="hljs-string">"tx executed"</span>);
        <span class="hljs-built_in">require</span>(_checkSigs(_sigs, txHash), <span class="hljs-string">"invalid sig"</span>);

        executed[txHash] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> _to.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTxHash</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint256</span> _amount, <span class="hljs-keyword">uint256</span> _nonce</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _to, _amount, _nonce));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_checkSigs</span>(<span class="hljs-params"><span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _sigs, <span class="hljs-keyword">bytes32</span> _txHash</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> ethSignedHash <span class="hljs-operator">=</span> _txHash.toEthSignedMessageHash();

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _sigs.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">address</span> signer <span class="hljs-operator">=</span> ethSignedHash.recover(_sigs[i]);
            <span class="hljs-keyword">bool</span> valid <span class="hljs-operator">=</span> signer <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owners[i];

            <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>valid) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
            }
        }

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
}

<span class="hljs-comment">/*
// owners
0xe19aea93F6C1dBef6A3776848bE099A7c3253ac8
0xfa854FE5339843b3e9Bfd8554B38BD042A42e340

// to
0xe10422cc61030C8B3dBCD36c7e7e8EC3B527E0Ac
// amount
100
// nonce
0
// tx hash
0x12a095462ebfca27dc4d99feef885bfe58344fb6bb42c3c52a7c0d6836d11448

// signatures
0x120f8ed8f2fa55498f2ef0a22f26e39b9b51ed29cc93fe0ef3ed1756f58fad0c6eb5a1d6f3671f8d5163639fdc40bb8720de6d8f2523077ad6d1138a60923b801c
0xa240a487de1eb5bb971e920cb0677a47ddc6421e38f7b048f8aa88266b2c884a10455a52dc76a203a1a9a953418469f9eec2c59e87201bbc8db0e4d9796935cb1b
*/</span>
</code></pre>`

export default html
