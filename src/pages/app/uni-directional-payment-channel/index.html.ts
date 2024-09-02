// metadata
export const version = "0.8.26"
export const title = "Uni-Directional Payment Channel"
export const description = "An example of uni-directional payment channels in Solidity"

export const keywords = [
  "app",
  "application",
  "uni-directional",
  "payment",
  "channel",
  "signature",
  "cryptography",
]

export const codes = [
  {
    fileName: "ECDSA.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8vIE9wZW5aZXBwZWxpbiBDb250cmFjdHMgKGxhc3QgdXBkYXRlZCB2NC41LjApICh1dGlscy9jcnlwdG9ncmFwaHkvRUNEU0Euc29sKQoKbGlicmFyeSBFQ0RTQSB7CiAgICBlbnVtIFJlY292ZXJFcnJvciB7CiAgICAgICAgTm9FcnJvciwKICAgICAgICBJbnZhbGlkU2lnbmF0dXJlLAogICAgICAgIEludmFsaWRTaWduYXR1cmVMZW5ndGgsCiAgICAgICAgSW52YWxpZFNpZ25hdHVyZVMsCiAgICAgICAgSW52YWxpZFNpZ25hdHVyZVYKICAgIH0KCiAgICBmdW5jdGlvbiBfdGhyb3dFcnJvcihSZWNvdmVyRXJyb3IgZXJyb3IpIHByaXZhdGUgcHVyZSB7CiAgICAgICAgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5Ob0Vycm9yKSB7CiAgICAgICAgICAgIHJldHVybjsgLy8gbm8gZXJyb3I6IGRvIG5vdGhpbmcKICAgICAgICB9IGVsc2UgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlKSB7CiAgICAgICAgICAgIHJldmVydCgiRUNEU0E6IGludmFsaWQgc2lnbmF0dXJlIik7CiAgICAgICAgfSBlbHNlIGlmIChlcnJvciA9PSBSZWNvdmVyRXJyb3IuSW52YWxpZFNpZ25hdHVyZUxlbmd0aCkgewogICAgICAgICAgICByZXZlcnQoIkVDRFNBOiBpbnZhbGlkIHNpZ25hdHVyZSBsZW5ndGgiKTsKICAgICAgICB9IGVsc2UgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlUykgewogICAgICAgICAgICByZXZlcnQoIkVDRFNBOiBpbnZhbGlkIHNpZ25hdHVyZSAncycgdmFsdWUiKTsKICAgICAgICB9IGVsc2UgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlVikgewogICAgICAgICAgICByZXZlcnQoIkVDRFNBOiBpbnZhbGlkIHNpZ25hdHVyZSAndicgdmFsdWUiKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdHJ5UmVjb3ZlcihieXRlczMyIGhhc2gsIGJ5dGVzIG1lbW9yeSBzaWduYXR1cmUpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYWRkcmVzcywgUmVjb3ZlckVycm9yKQogICAgewogICAgICAgIC8vIENoZWNrIHRoZSBzaWduYXR1cmUgbGVuZ3RoCiAgICAgICAgLy8gLSBjYXNlIDY1OiByLHMsdiBzaWduYXR1cmUgKHN0YW5kYXJkKQogICAgICAgIC8vIC0gY2FzZSA2NDogcix2cyBzaWduYXR1cmUgKGNmIGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMjA5OCkgX0F2YWlsYWJsZSBzaW5jZSB2NC4xLl8KICAgICAgICBpZiAoc2lnbmF0dXJlLmxlbmd0aCA9PSA2NSkgewogICAgICAgICAgICBieXRlczMyIHI7CiAgICAgICAgICAgIGJ5dGVzMzIgczsKICAgICAgICAgICAgdWludDggdjsKICAgICAgICAgICAgLy8gZWNyZWNvdmVyIHRha2VzIHRoZSBzaWduYXR1cmUgcGFyYW1ldGVycywgYW5kIHRoZSBvbmx5IHdheSB0byBnZXQgdGhlbQogICAgICAgICAgICAvLyBjdXJyZW50bHkgaXMgdG8gdXNlIGFzc2VtYmx5LgogICAgICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgICAgICByIDo9IG1sb2FkKGFkZChzaWduYXR1cmUsIDB4MjApKQogICAgICAgICAgICAgICAgcyA6PSBtbG9hZChhZGQoc2lnbmF0dXJlLCAweDQwKSkKICAgICAgICAgICAgICAgIHYgOj0gYnl0ZSgwLCBtbG9hZChhZGQoc2lnbmF0dXJlLCAweDYwKSkpCiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHRyeVJlY292ZXIoaGFzaCwgdiwgciwgcyk7CiAgICAgICAgfSBlbHNlIGlmIChzaWduYXR1cmUubGVuZ3RoID09IDY0KSB7CiAgICAgICAgICAgIGJ5dGVzMzIgcjsKICAgICAgICAgICAgYnl0ZXMzMiB2czsKICAgICAgICAgICAgLy8gZWNyZWNvdmVyIHRha2VzIHRoZSBzaWduYXR1cmUgcGFyYW1ldGVycywgYW5kIHRoZSBvbmx5IHdheSB0byBnZXQgdGhlbQogICAgICAgICAgICAvLyBjdXJyZW50bHkgaXMgdG8gdXNlIGFzc2VtYmx5LgogICAgICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgICAgICByIDo9IG1sb2FkKGFkZChzaWduYXR1cmUsIDB4MjApKQogICAgICAgICAgICAgICAgdnMgOj0gbWxvYWQoYWRkKHNpZ25hdHVyZSwgMHg0MCkpCiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHRyeVJlY292ZXIoaGFzaCwgciwgdnMpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHJldHVybiAoYWRkcmVzcygwKSwgUmVjb3ZlckVycm9yLkludmFsaWRTaWduYXR1cmVMZW5ndGgpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiByZWNvdmVyKGJ5dGVzMzIgaGFzaCwgYnl0ZXMgbWVtb3J5IHNpZ25hdHVyZSkKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChhZGRyZXNzKQogICAgewogICAgICAgIChhZGRyZXNzIHJlY292ZXJlZCwgUmVjb3ZlckVycm9yIGVycm9yKSA9IHRyeVJlY292ZXIoaGFzaCwgc2lnbmF0dXJlKTsKICAgICAgICBfdGhyb3dFcnJvcihlcnJvcik7CiAgICAgICAgcmV0dXJuIHJlY292ZXJlZDsKICAgIH0KCiAgICBmdW5jdGlvbiB0cnlSZWNvdmVyKGJ5dGVzMzIgaGFzaCwgYnl0ZXMzMiByLCBieXRlczMyIHZzKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGFkZHJlc3MsIFJlY292ZXJFcnJvcikKICAgIHsKICAgICAgICBieXRlczMyIHMgPSB2cwogICAgICAgICAgICAmIGJ5dGVzMzIoCiAgICAgICAgICAgICAgICAweDdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYKICAgICAgICAgICAgKTsKICAgICAgICB1aW50OCB2ID0gdWludDgoKHVpbnQyNTYodnMpID4+IDI1NSkgKyAyNyk7CiAgICAgICAgcmV0dXJuIHRyeVJlY292ZXIoaGFzaCwgdiwgciwgcyk7CiAgICB9CgogICAgZnVuY3Rpb24gcmVjb3ZlcihieXRlczMyIGhhc2gsIGJ5dGVzMzIgciwgYnl0ZXMzMiB2cykKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChhZGRyZXNzKQogICAgewogICAgICAgIChhZGRyZXNzIHJlY292ZXJlZCwgUmVjb3ZlckVycm9yIGVycm9yKSA9IHRyeVJlY292ZXIoaGFzaCwgciwgdnMpOwogICAgICAgIF90aHJvd0Vycm9yKGVycm9yKTsKICAgICAgICByZXR1cm4gcmVjb3ZlcmVkOwogICAgfQoKICAgIGZ1bmN0aW9uIHRyeVJlY292ZXIoYnl0ZXMzMiBoYXNoLCB1aW50OCB2LCBieXRlczMyIHIsIGJ5dGVzMzIgcykKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChhZGRyZXNzLCBSZWNvdmVyRXJyb3IpCiAgICB7CiAgICAgICAgLy8gRUlQLTIgc3RpbGwgYWxsb3dzIHNpZ25hdHVyZSBtYWxsZWFiaWxpdHkgZm9yIGVjcmVjb3ZlcigpLiBSZW1vdmUgdGhpcyBwb3NzaWJpbGl0eSBhbmQgbWFrZSB0aGUgc2lnbmF0dXJlCiAgICAgICAgLy8gdW5pcXVlLiBBcHBlbmRpeCBGIGluIHRoZSBFdGhlcmV1bSBZZWxsb3cgcGFwZXIgKGh0dHBzOi8vZXRoZXJldW0uZ2l0aHViLmlvL3llbGxvd3BhcGVyL3BhcGVyLnBkZiksIGRlZmluZXMKICAgICAgICAvLyB0aGUgdmFsaWQgcmFuZ2UgZm9yIHMgaW4gKDMwMSk6IDAgPCBzIDwgc2VjcDI1NmsxbiDDtyAyICsgMSwgYW5kIGZvciB2IGluICgzMDIpOiB2IOKIiCB7MjcsIDI4fS4gTW9zdAogICAgICAgIC8vIHNpZ25hdHVyZXMgZnJvbSBjdXJyZW50IGxpYnJhcmllcyBnZW5lcmF0ZSBhIHVuaXF1ZSBzaWduYXR1cmUgd2l0aCBhbiBzLXZhbHVlIGluIHRoZSBsb3dlciBoYWxmIG9yZGVyLgogICAgICAgIC8vCiAgICAgICAgLy8gSWYgeW91ciBsaWJyYXJ5IGdlbmVyYXRlcyBtYWxsZWFibGUgc2lnbmF0dXJlcywgc3VjaCBhcyBzLXZhbHVlcyBpbiB0aGUgdXBwZXIgcmFuZ2UsIGNhbGN1bGF0ZSBhIG5ldyBzLXZhbHVlCiAgICAgICAgLy8gd2l0aCAweEZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZFQkFBRURDRTZBRjQ4QTAzQkJGRDI1RThDRDAzNjQxNDEgLSBzMSBhbmQgZmxpcCB2IGZyb20gMjcgdG8gMjggb3IKICAgICAgICAvLyB2aWNlIHZlcnNhLiBJZiB5b3VyIGxpYnJhcnkgYWxzbyBnZW5lcmF0ZXMgc2lnbmF0dXJlcyB3aXRoIDAvMSBmb3IgdiBpbnN0ZWFkIDI3LzI4LCBhZGQgMjcgdG8gdiB0byBhY2NlcHQKICAgICAgICAvLyB0aGVzZSBtYWxsZWFibGUgc2lnbmF0dXJlcyBhcyB3ZWxsLgogICAgICAgIGlmICgKICAgICAgICAgICAgdWludDI1NihzKQogICAgICAgICAgICAgICAgPiAweDdGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGNUQ1NzZFNzM1N0E0NTAxRERGRTkyRjQ2NjgxQjIwQTAKICAgICAgICApIHsKICAgICAgICAgICAgcmV0dXJuIChhZGRyZXNzKDApLCBSZWNvdmVyRXJyb3IuSW52YWxpZFNpZ25hdHVyZVMpOwogICAgICAgIH0KICAgICAgICBpZiAodiAhPSAyNyAmJiB2ICE9IDI4KSB7CiAgICAgICAgICAgIHJldHVybiAoYWRkcmVzcygwKSwgUmVjb3ZlckVycm9yLkludmFsaWRTaWduYXR1cmVWKTsKICAgICAgICB9CgogICAgICAgIC8vIElmIHRoZSBzaWduYXR1cmUgaXMgdmFsaWQgKGFuZCBub3QgbWFsbGVhYmxlKSwgcmV0dXJuIHRoZSBzaWduZXIgYWRkcmVzcwogICAgICAgIGFkZHJlc3Mgc2lnbmVyID0gZWNyZWNvdmVyKGhhc2gsIHYsIHIsIHMpOwogICAgICAgIGlmIChzaWduZXIgPT0gYWRkcmVzcygwKSkgewogICAgICAgICAgICByZXR1cm4gKGFkZHJlc3MoMCksIFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiAoc2lnbmVyLCBSZWNvdmVyRXJyb3IuTm9FcnJvcik7CiAgICB9CgogICAgZnVuY3Rpb24gcmVjb3ZlcihieXRlczMyIGhhc2gsIHVpbnQ4IHYsIGJ5dGVzMzIgciwgYnl0ZXMzMiBzKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGFkZHJlc3MpCiAgICB7CiAgICAgICAgKGFkZHJlc3MgcmVjb3ZlcmVkLCBSZWNvdmVyRXJyb3IgZXJyb3IpID0gdHJ5UmVjb3ZlcihoYXNoLCB2LCByLCBzKTsKICAgICAgICBfdGhyb3dFcnJvcihlcnJvcik7CiAgICAgICAgcmV0dXJuIHJlY292ZXJlZDsKICAgIH0KCiAgICBmdW5jdGlvbiB0b0V0aFNpZ25lZE1lc3NhZ2VIYXNoKGJ5dGVzMzIgaGFzaCkKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyKQogICAgewogICAgICAgIC8vIDMyIGlzIHRoZSBsZW5ndGggaW4gYnl0ZXMgb2YgaGFzaCwKICAgICAgICAvLyBlbmZvcmNlZCBieSB0aGUgdHlwZSBzaWduYXR1cmUgYWJvdmUKICAgICAgICByZXR1cm4ga2VjY2FrMjU2KAogICAgICAgICAgICBhYmkuZW5jb2RlUGFja2VkKCJceDE5RXRoZXJldW0gU2lnbmVkIE1lc3NhZ2U6XG4zMiIsIGhhc2gpCiAgICAgICAgKTsKICAgIH0KfQo=",
  },
  {
    fileName: "UniDirectionalPaymentChannel.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmltcG9ydCAiLi9FQ0RTQS5zb2wiOwoKY29udHJhY3QgUmVlbnRyYW5jeUd1YXJkIHsKICAgIGJvb2wgcHJpdmF0ZSBsb2NrZWQ7CgogICAgbW9kaWZpZXIgZ3VhcmQoKSB7CiAgICAgICAgcmVxdWlyZSghbG9ja2VkKTsKICAgICAgICBsb2NrZWQgPSB0cnVlOwogICAgICAgIF87CiAgICAgICAgbG9ja2VkID0gZmFsc2U7CiAgICB9Cn0KCmNvbnRyYWN0IFVuaURpcmVjdGlvbmFsUGF5bWVudENoYW5uZWwgaXMgUmVlbnRyYW5jeUd1YXJkIHsKICAgIHVzaW5nIEVDRFNBIGZvciBieXRlczMyOwoKICAgIGFkZHJlc3MgcGF5YWJsZSBwdWJsaWMgc2VuZGVyOwogICAgYWRkcmVzcyBwYXlhYmxlIHB1YmxpYyByZWNlaXZlcjsKCiAgICB1aW50MjU2IHByaXZhdGUgY29uc3RhbnQgRFVSQVRJT04gPSA3ICogMjQgKiA2MCAqIDYwOwogICAgdWludDI1NiBwdWJsaWMgZXhwaXJlc0F0OwoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3MgcGF5YWJsZSBfcmVjZWl2ZXIpIHBheWFibGUgewogICAgICAgIHJlcXVpcmUoX3JlY2VpdmVyICE9IGFkZHJlc3MoMCksICJyZWNlaXZlciA9IHplcm8gYWRkcmVzcyIpOwogICAgICAgIHNlbmRlciA9IHBheWFibGUobXNnLnNlbmRlcik7CiAgICAgICAgcmVjZWl2ZXIgPSBfcmVjZWl2ZXI7CiAgICAgICAgZXhwaXJlc0F0ID0gYmxvY2sudGltZXN0YW1wICsgRFVSQVRJT047CiAgICB9CgogICAgZnVuY3Rpb24gX2dldEhhc2godWludDI1NiBfYW1vdW50KSBwcml2YXRlIHZpZXcgcmV0dXJucyAoYnl0ZXMzMikgewogICAgICAgIC8vIE5PVEU6IHNpZ24gd2l0aCBhZGRyZXNzIG9mIHRoaXMgY29udHJhY3QgdG8gcHJvdGVjdCBhZ2FpbnMKICAgICAgICAvLyByZXBsYXkgYXR0YWNrIG9uIG90aGVyIGNvbnRyYWN0cwogICAgICAgIHJldHVybiBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChhZGRyZXNzKHRoaXMpLCBfYW1vdW50KSk7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0SGFzaCh1aW50MjU2IF9hbW91bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYnl0ZXMzMikgewogICAgICAgIHJldHVybiBfZ2V0SGFzaChfYW1vdW50KTsKICAgIH0KCiAgICBmdW5jdGlvbiBfZ2V0RXRoU2lnbmVkSGFzaCh1aW50MjU2IF9hbW91bnQpCiAgICAgICAgcHJpdmF0ZQogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChieXRlczMyKQogICAgewogICAgICAgIHJldHVybiBfZ2V0SGFzaChfYW1vdW50KS50b0V0aFNpZ25lZE1lc3NhZ2VIYXNoKCk7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0RXRoU2lnbmVkSGFzaCh1aW50MjU2IF9hbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMikKICAgIHsKICAgICAgICByZXR1cm4gX2dldEV0aFNpZ25lZEhhc2goX2Ftb3VudCk7CiAgICB9CgogICAgZnVuY3Rpb24gX3ZlcmlmeSh1aW50MjU2IF9hbW91bnQsIGJ5dGVzIG1lbW9yeSBfc2lnKQogICAgICAgIHByaXZhdGUKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYm9vbCkKICAgIHsKICAgICAgICByZXR1cm4gX2dldEV0aFNpZ25lZEhhc2goX2Ftb3VudCkucmVjb3Zlcihfc2lnKSA9PSBzZW5kZXI7CiAgICB9CgogICAgZnVuY3Rpb24gdmVyaWZ5KHVpbnQyNTYgX2Ftb3VudCwgYnl0ZXMgbWVtb3J5IF9zaWcpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYm9vbCkKICAgIHsKICAgICAgICByZXR1cm4gX3ZlcmlmeShfYW1vdW50LCBfc2lnKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjbG9zZSh1aW50MjU2IF9hbW91bnQsIGJ5dGVzIG1lbW9yeSBfc2lnKSBleHRlcm5hbCBndWFyZCB7CiAgICAgICAgcmVxdWlyZShtc2cuc2VuZGVyID09IHJlY2VpdmVyLCAiIXJlY2VpdmVyIik7CiAgICAgICAgcmVxdWlyZShfdmVyaWZ5KF9hbW91bnQsIF9zaWcpLCAiaW52YWxpZCBzaWciKTsKCiAgICAgICAgKGJvb2wgc2VudCwpID0gcmVjZWl2ZXIuY2FsbHt2YWx1ZTogX2Ftb3VudH0oIiIpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CiAgICAgICAgc2VsZmRlc3RydWN0KHNlbmRlcik7CiAgICB9CgogICAgZnVuY3Rpb24gY2FuY2VsKCkgZXh0ZXJuYWwgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBzZW5kZXIsICIhc2VuZGVyIik7CiAgICAgICAgcmVxdWlyZShibG9jay50aW1lc3RhbXAgPj0gZXhwaXJlc0F0LCAiIWV4cGlyZWQiKTsKICAgICAgICBzZWxmZGVzdHJ1Y3Qoc2VuZGVyKTsKICAgIH0KfQo=",
  },
]

const html = `<p>Payment channels allow participants to repeatedly transfer Ether off chain.</p>
<p>Here is how this contract is used:</p>
<ul>
<li><code>Alice</code> deploys the contract, funding it with some Ether.</li>
<li><code>Alice</code> authorizes a payment by signing a message (off chain) and sends the signature to <code>Bob</code>.</li>
<li><code>Bob</code> claims his payment by presenting the signed message to the smart contract.</li>
<li>If <code>Bob</code> does not claim his payment, <code>Alice</code> get her Ether back after the contract expires</li>
</ul>
<p>This is called a uni-directional payment channel since the payment can go only in a single direction from <code>Alice</code> to <code>Bob</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./ECDSA.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ReentrancyGuard</span> </span>{
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">private</span> locked;

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">guard</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>locked);
        locked <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">_</span>;
        locked <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniDirectionalPaymentChannel</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ReentrancyGuard</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> <span class="hljs-keyword">public</span> sender;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> <span class="hljs-keyword">public</span> receiver;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DURATION <span class="hljs-operator">=</span> <span class="hljs-number">7</span> <span class="hljs-operator">*</span> <span class="hljs-number">24</span> <span class="hljs-operator">*</span> <span class="hljs-number">60</span> <span class="hljs-operator">*</span> <span class="hljs-number">60</span>;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> expiresAt;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> _receiver</span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        <span class="hljs-built_in">require</span>(_receiver <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"receiver = zero address"</span>);
        sender <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
        receiver <span class="hljs-operator">=</span> _receiver;
        expiresAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> DURATION;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getHash</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> sign with address of this contract to protect agains</span>
        <span class="hljs-comment">// replay attack on other contracts</span>
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHash</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> _getHash(_amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getEthSignedHash</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> _getHash(_amount).toEthSignedMessageHash();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getEthSignedHash</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> _getEthSignedHash(_amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_verify</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _sig</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> _getEthSignedHash(_amount).recover(_sig) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> sender;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">verify</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _sig</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> _verify(_amount, _sig);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">close</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> _sig</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">guard</span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> receiver, <span class="hljs-string">"!receiver"</span>);
        <span class="hljs-built_in">require</span>(_verify(_amount, _sig), <span class="hljs-string">"invalid sig"</span>);

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> receiver.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: _amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
        <span class="hljs-built_in">selfdestruct</span>(sender);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cancel</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> sender, <span class="hljs-string">"!sender"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> expiresAt, <span class="hljs-string">"!expired"</span>);
        <span class="hljs-built_in">selfdestruct</span>(sender);
    }
}
</code></pre><pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">// OpenZeppelin Contracts (last updated v4.5.0) (utils/cryptography/ECDSA.sol)</span>

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">ECDSA</span> </span>{
    <span class="hljs-keyword">enum</span> <span class="hljs-title">RecoverError</span> {
        NoError,
        InvalidSignature,
        InvalidSignatureLength,
        InvalidSignatureS,
        InvalidSignatureV
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_throwError</span>(<span class="hljs-params">RecoverError <span class="hljs-keyword">error</span></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-function"><span class="hljs-keyword">error</span> == <span class="hljs-title">RecoverError</span>.<span class="hljs-title">NoError</span>) </span>{
            <span class="hljs-keyword">return</span>; <span class="hljs-comment">// no error: do nothing</span>
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-function"><span class="hljs-keyword">error</span> == <span class="hljs-title">RecoverError</span>.<span class="hljs-title">InvalidSignature</span>) </span>{
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"ECDSA: invalid signature"</span>);
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-function"><span class="hljs-keyword">error</span> == <span class="hljs-title">RecoverError</span>.<span class="hljs-title">InvalidSignatureLength</span>) </span>{
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"ECDSA: invalid signature length"</span>);
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-function"><span class="hljs-keyword">error</span> == <span class="hljs-title">RecoverError</span>.<span class="hljs-title">InvalidSignatureS</span>) </span>{
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"ECDSA: invalid signature &#x27;s&#x27; value"</span>);
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (<span class="hljs-function"><span class="hljs-keyword">error</span> == <span class="hljs-title">RecoverError</span>.<span class="hljs-title">InvalidSignatureV</span>) </span>{
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"ECDSA: invalid signature &#x27;v&#x27; value"</span>);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tryRecover</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> hash, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> signature</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span>, RecoverError</span>)
    </span>{
        <span class="hljs-comment">// Check the signature length</span>
        <span class="hljs-comment">// - case 65: r,s,v signature (standard)</span>
        <span class="hljs-comment">// - case 64: r,vs signature (cf https://eips.ethereum.org/EIPS/eip-2098) _Available since v4.1._</span>
        <span class="hljs-keyword">if</span> (signature.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">65</span>) {
            <span class="hljs-keyword">bytes32</span> r;
            <span class="hljs-keyword">bytes32</span> s;
            <span class="hljs-keyword">uint8</span> v;
            <span class="hljs-comment">// ecrecover takes the signature parameters, and the only way to get them</span>
            <span class="hljs-comment">// currently is to use assembly.</span>
            <span class="hljs-keyword">assembly</span> {
                r <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(signature, <span class="hljs-number">0x20</span>))
                s <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(signature, <span class="hljs-number">0x40</span>))
                v <span class="hljs-operator">:=</span> <span class="hljs-built_in">byte</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(signature, <span class="hljs-number">0x60</span>)))
            }
            <span class="hljs-keyword">return</span> tryRecover(hash, v, r, s);
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (signature.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">64</span>) {
            <span class="hljs-keyword">bytes32</span> r;
            <span class="hljs-keyword">bytes32</span> vs;
            <span class="hljs-comment">// ecrecover takes the signature parameters, and the only way to get them</span>
            <span class="hljs-comment">// currently is to use assembly.</span>
            <span class="hljs-keyword">assembly</span> {
                r <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(signature, <span class="hljs-number">0x20</span>))
                vs <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(signature, <span class="hljs-number">0x40</span>))
            }
            <span class="hljs-keyword">return</span> tryRecover(hash, r, vs);
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">return</span> (<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), RecoverError.InvalidSignatureLength);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">recover</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> hash, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> signature</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)
    </span>{
        (<span class="hljs-keyword">address</span> recovered, RecoverError <span class="hljs-function"><span class="hljs-keyword">error</span>) = <span class="hljs-title">tryRecover</span>(<span class="hljs-params">hash, signature</span>)</span>;
        _throwError(<span class="hljs-function"><span class="hljs-keyword">error</span>)</span>;
        <span class="hljs-keyword">return</span> recovered;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tryRecover</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> hash, <span class="hljs-keyword">bytes32</span> r, <span class="hljs-keyword">bytes32</span> vs</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span>, RecoverError</span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> s <span class="hljs-operator">=</span> vs
            <span class="hljs-operator">&amp;</span> <span class="hljs-keyword">bytes32</span>(
                <span class="hljs-number">0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</span>
            );
        <span class="hljs-keyword">uint8</span> v <span class="hljs-operator">=</span> <span class="hljs-keyword">uint8</span>((<span class="hljs-keyword">uint256</span>(vs) <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span> <span class="hljs-number">255</span>) <span class="hljs-operator">+</span> <span class="hljs-number">27</span>);
        <span class="hljs-keyword">return</span> tryRecover(hash, v, r, s);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">recover</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> hash, <span class="hljs-keyword">bytes32</span> r, <span class="hljs-keyword">bytes32</span> vs</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)
    </span>{
        (<span class="hljs-keyword">address</span> recovered, RecoverError <span class="hljs-function"><span class="hljs-keyword">error</span>) = <span class="hljs-title">tryRecover</span>(<span class="hljs-params">hash, r, vs</span>)</span>;
        _throwError(<span class="hljs-function"><span class="hljs-keyword">error</span>)</span>;
        <span class="hljs-keyword">return</span> recovered;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tryRecover</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> hash, <span class="hljs-keyword">uint8</span> v, <span class="hljs-keyword">bytes32</span> r, <span class="hljs-keyword">bytes32</span> s</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span>, RecoverError</span>)
    </span>{
        <span class="hljs-comment">// EIP-2 still allows signature malleability for ecrecover(). Remove this possibility and make the signature</span>
        <span class="hljs-comment">// unique. Appendix F in the Ethereum Yellow paper (https://ethereum.github.io/yellowpaper/paper.pdf), defines</span>
        <span class="hljs-comment">// the valid range for s in (301): 0 &lt; s &lt; secp256k1n ÷ 2 + 1, and for v in (302): v ∈ {27, 28}. Most</span>
        <span class="hljs-comment">// signatures from current libraries generate a unique signature with an s-value in the lower half order.</span>
        <span class="hljs-comment">//</span>
        <span class="hljs-comment">// If your library generates malleable signatures, such as s-values in the upper range, calculate a new s-value</span>
        <span class="hljs-comment">// with 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141 - s1 and flip v from 27 to 28 or</span>
        <span class="hljs-comment">// vice versa. If your library also generates signatures with 0/1 for v instead 27/28, add 27 to v to accept</span>
        <span class="hljs-comment">// these malleable signatures as well.</span>
        <span class="hljs-keyword">if</span> (
            <span class="hljs-keyword">uint256</span>(s)
                <span class="hljs-operator">&gt;</span> <span class="hljs-number">0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0</span>
        ) {
            <span class="hljs-keyword">return</span> (<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), RecoverError.InvalidSignatureS);
        }
        <span class="hljs-keyword">if</span> (v <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">27</span> <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> v <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">28</span>) {
            <span class="hljs-keyword">return</span> (<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), RecoverError.InvalidSignatureV);
        }

        <span class="hljs-comment">// If the signature is valid (and not malleable), return the signer address</span>
        <span class="hljs-keyword">address</span> signer <span class="hljs-operator">=</span> <span class="hljs-built_in">ecrecover</span>(hash, v, r, s);
        <span class="hljs-keyword">if</span> (signer <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>)) {
            <span class="hljs-keyword">return</span> (<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), RecoverError.InvalidSignature);
        }

        <span class="hljs-keyword">return</span> (signer, RecoverError.NoError);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">recover</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> hash, <span class="hljs-keyword">uint8</span> v, <span class="hljs-keyword">bytes32</span> r, <span class="hljs-keyword">bytes32</span> s</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)
    </span>{
        (<span class="hljs-keyword">address</span> recovered, RecoverError <span class="hljs-function"><span class="hljs-keyword">error</span>) = <span class="hljs-title">tryRecover</span>(<span class="hljs-params">hash, v, r, s</span>)</span>;
        _throwError(<span class="hljs-function"><span class="hljs-keyword">error</span>)</span>;
        <span class="hljs-keyword">return</span> recovered;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">toEthSignedMessageHash</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> hash</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-comment">// 32 is the length in bytes of hash,</span>
        <span class="hljs-comment">// enforced by the type signature above</span>
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-string">"\\x19Ethereum Signed Message:\\n32"</span>, hash)
        );
    }
}
</code></pre>`

export default html
