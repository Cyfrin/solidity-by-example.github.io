// metadata
export const version = "0.8.24"
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
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCAiLi9FQ0RTQS5zb2wiOwoKLyoKT3BlbmluZyBhIGNoYW5uZWwKMS4gQWxpY2UgYW5kIEJvYiBmdW5kIGEgbXVsdGktc2lnIHdhbGxldAoyLiBQcmVjb21wdXRlIHBheW1lbnQgY2hhbm5lbCBhZGRyZXNzCjMuIEFsaWNlIGFuZCBCb2IgZXhjaGFuZ2VzIHNpZ25hdHVyZXMgb2YgaW5pdGlhbCBiYWxhbmNlcwo0LiBBbGljZSBhbmQgQm9iIGNyZWF0ZXMgYSB0cmFuc2FjdGlvbiB0aGF0IGNhbiBkZXBsb3kgYSBwYXltZW50IGNoYW5uZWwgZnJvbQogICB0aGUgbXVsdGktc2lnIHdhbGxldAoKVXBkYXRlIGNoYW5uZWwgYmFsYW5jZXMKMS4gUmVwZWF0IHN0ZXBzIDEgLSAzIGZyb20gb3BlbmluZyBhIGNoYW5uZWwKMi4gRnJvbSBtdWx0aS1zaWcgd2FsbGV0IGNyZWF0ZSBhIHRyYW5zYWN0aW9uIHRoYXQgd2lsbAogICAtIGRlbGV0ZSB0aGUgdHJhbnNhY3Rpb24gdGhhdCB3b3VsZCBoYXZlIGRlcGxveWVkIHRoZSBvbGQgcGF5bWVudCBjaGFubmVsCiAgIC0gYW5kIHRoZW4gY3JlYXRlIGEgdHJhbnNhY3Rpb24gdGhhdCBjYW4gZGVwbG95IGEgcGF5bWVudCBjaGFubmVsIHdpdGggdGhlCiAgICAgbmV3IGJhbGFuY2VzCgpDbG9zaW5nIGEgY2hhbm5lbCB3aGVuIEFsaWNlIGFuZCBCb2IgYWdyZWUgb24gdGhlIGZpbmFsIGJhbGFuY2UKMS4gRnJvbSBtdWx0aS1zaWcgd2FsbGV0IGNyZWF0ZSBhIHRyYW5zYWN0aW9uIHRoYXQgd2lsbAogICAtIHNlbmQgcGF5bWVudHMgdG8gQWxpY2UgYW5kIEJvYgogICAtIGFuZCB0aGVuIGRlbGV0ZSB0aGUgdHJhbnNhY3Rpb24gdGhhdCB3b3VsZCBoYXZlIGNyZWF0ZWQgdGhlIHBheW1lbnQgY2hhbm5lbAoKQ2xvc2luZyBhIGNoYW5uZWwgd2hlbiBBbGljZSBhbmQgQm9iIGRvIG5vdCBhZ3JlZSBvbiB0aGUgZmluYWwgYmFsYW5jZXMKMS4gRGVwbG95IHBheW1lbnQgY2hhbm5lbCBmcm9tIG11bHRpLXNpZwoyLiBjYWxsIGNoYWxsZW5nZUV4aXQoKSB0byBzdGFydCB0aGUgcHJvY2VzcyBvZiBjbG9zaW5nIGEgY2hhbm5lbAozLiBBbGljZSBhbmQgQm9iIGNhbiB3aXRoZHJhdyBmdW5kcyBvbmNlIHRoZSBjaGFubmVsIGlzIGV4cGlyZWQKKi8KCmNvbnRyYWN0IEJpRGlyZWN0aW9uYWxQYXltZW50Q2hhbm5lbCB7CiAgICB1c2luZyBFQ0RTQSBmb3IgYnl0ZXMzMjsKCiAgICBldmVudCBDaGFsbGVuZ2VFeGl0KGFkZHJlc3MgaW5kZXhlZCBzZW5kZXIsIHVpbnQyNTYgbm9uY2UpOwogICAgZXZlbnQgV2l0aGRyYXcoYWRkcmVzcyBpbmRleGVkIHRvLCB1aW50MjU2IGFtb3VudCk7CgogICAgYWRkcmVzcyBwYXlhYmxlWzJdIHB1YmxpYyB1c2VyczsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBib29sKSBwdWJsaWMgaXNVc2VyOwoKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2KSBwdWJsaWMgYmFsYW5jZXM7CgogICAgdWludDI1NiBwdWJsaWMgY2hhbGxlbmdlUGVyaW9kOwogICAgdWludDI1NiBwdWJsaWMgZXhwaXJlc0F0OwogICAgdWludDI1NiBwdWJsaWMgbm9uY2U7CgogICAgbW9kaWZpZXIgY2hlY2tCYWxhbmNlcyh1aW50MjU2WzJdIG1lbW9yeSBfYmFsYW5jZXMpIHsKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICBhZGRyZXNzKHRoaXMpLmJhbGFuY2UgPj0gX2JhbGFuY2VzWzBdICsgX2JhbGFuY2VzWzFdLAogICAgICAgICAgICAiYmFsYW5jZSBvZiBjb250cmFjdCBtdXN0IGJlID49IHRvIHRoZSB0b3RhbCBiYWxhbmNlIG9mIHVzZXJzIgogICAgICAgICk7CiAgICAgICAgXzsKICAgIH0KCiAgICAvLyBOT1RFOiBkZXBvc2l0IGZyb20gbXVsdGktc2lnIHdhbGxldAogICAgY29uc3RydWN0b3IoCiAgICAgICAgYWRkcmVzcyBwYXlhYmxlWzJdIG1lbW9yeSBfdXNlcnMsCiAgICAgICAgdWludDI1NlsyXSBtZW1vcnkgX2JhbGFuY2VzLAogICAgICAgIHVpbnQyNTYgX2V4cGlyZXNBdCwKICAgICAgICB1aW50MjU2IF9jaGFsbGVuZ2VQZXJpb2QKICAgICkgcGF5YWJsZSBjaGVja0JhbGFuY2VzKF9iYWxhbmNlcykgewogICAgICAgIHJlcXVpcmUoX2V4cGlyZXNBdCA+IGJsb2NrLnRpbWVzdGFtcCwgIkV4cGlyYXRpb24gbXVzdCBiZSA+IG5vdyIpOwogICAgICAgIHJlcXVpcmUoX2NoYWxsZW5nZVBlcmlvZCA+IDAsICJDaGFsbGVuZ2UgcGVyaW9kIG11c3QgYmUgPiAwIik7CgogICAgICAgIGZvciAodWludDI1NiBpID0gMDsgaSA8IF91c2Vycy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBhZGRyZXNzIHBheWFibGUgdXNlciA9IF91c2Vyc1tpXTsKCiAgICAgICAgICAgIHJlcXVpcmUoIWlzVXNlclt1c2VyXSwgInVzZXIgbXVzdCBiZSB1bmlxdWUiKTsKICAgICAgICAgICAgdXNlcnNbaV0gPSB1c2VyOwogICAgICAgICAgICBpc1VzZXJbdXNlcl0gPSB0cnVlOwoKICAgICAgICAgICAgYmFsYW5jZXNbdXNlcl0gPSBfYmFsYW5jZXNbaV07CiAgICAgICAgfQoKICAgICAgICBleHBpcmVzQXQgPSBfZXhwaXJlc0F0OwogICAgICAgIGNoYWxsZW5nZVBlcmlvZCA9IF9jaGFsbGVuZ2VQZXJpb2Q7CiAgICB9CgogICAgZnVuY3Rpb24gdmVyaWZ5KAogICAgICAgIGJ5dGVzWzJdIG1lbW9yeSBfc2lnbmF0dXJlcywKICAgICAgICBhZGRyZXNzIF9jb250cmFjdCwKICAgICAgICBhZGRyZXNzWzJdIG1lbW9yeSBfc2lnbmVycywKICAgICAgICB1aW50MjU2WzJdIG1lbW9yeSBfYmFsYW5jZXMsCiAgICAgICAgdWludDI1NiBfbm9uY2UKICAgICkgcHVibGljIHB1cmUgcmV0dXJucyAoYm9vbCkgewogICAgICAgIGZvciAodWludDI1NiBpID0gMDsgaSA8IF9zaWduYXR1cmVzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIC8qCiAgICAgICAgICAgIE5PVEU6IHNpZ24gd2l0aCBhZGRyZXNzIG9mIHRoaXMgY29udHJhY3QgdG8gcHJvdGVjdAogICAgICAgICAgICAgICAgICBhZ2FpbnMgcmVwbGF5IGF0dGFjayBvbiBvdGhlciBjb250cmFjdHMKICAgICAgICAgICAgKi8KICAgICAgICAgICAgYm9vbCB2YWxpZCA9IF9zaWduZXJzW2ldCiAgICAgICAgICAgICAgICA9PSBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChfY29udHJhY3QsIF9iYWxhbmNlcywgX25vbmNlKSkKICAgICAgICAgICAgICAgICAgICAudG9FdGhTaWduZWRNZXNzYWdlSGFzaCgpLnJlY292ZXIoX3NpZ25hdHVyZXNbaV0pOwoKICAgICAgICAgICAgaWYgKCF2YWxpZCkgewogICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBtb2RpZmllciBjaGVja1NpZ25hdHVyZXMoCiAgICAgICAgYnl0ZXNbMl0gbWVtb3J5IF9zaWduYXR1cmVzLAogICAgICAgIHVpbnQyNTZbMl0gbWVtb3J5IF9iYWxhbmNlcywKICAgICAgICB1aW50MjU2IF9ub25jZQogICAgKSB7CiAgICAgICAgLy8gTm90ZTogY29weSBzdG9yYWdlIGFycmF5IHRvIG1lbW9yeQogICAgICAgIGFkZHJlc3NbMl0gbWVtb3J5IHNpZ25lcnM7CiAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgc2lnbmVyc1tpXSA9IHVzZXJzW2ldOwogICAgICAgIH0KCiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgdmVyaWZ5KF9zaWduYXR1cmVzLCBhZGRyZXNzKHRoaXMpLCBzaWduZXJzLCBfYmFsYW5jZXMsIF9ub25jZSksCiAgICAgICAgICAgICJJbnZhbGlkIHNpZ25hdHVyZSIKICAgICAgICApOwoKICAgICAgICBfOwogICAgfQoKICAgIG1vZGlmaWVyIG9ubHlVc2VyKCkgewogICAgICAgIHJlcXVpcmUoaXNVc2VyW21zZy5zZW5kZXJdLCAiTm90IHVzZXIiKTsKICAgICAgICBfOwogICAgfQoKICAgIGZ1bmN0aW9uIGNoYWxsZW5nZUV4aXQoCiAgICAgICAgdWludDI1NlsyXSBtZW1vcnkgX2JhbGFuY2VzLAogICAgICAgIHVpbnQyNTYgX25vbmNlLAogICAgICAgIGJ5dGVzWzJdIG1lbW9yeSBfc2lnbmF0dXJlcwogICAgKQogICAgICAgIHB1YmxpYwogICAgICAgIG9ubHlVc2VyCiAgICAgICAgY2hlY2tTaWduYXR1cmVzKF9zaWduYXR1cmVzLCBfYmFsYW5jZXMsIF9ub25jZSkKICAgICAgICBjaGVja0JhbGFuY2VzKF9iYWxhbmNlcykKICAgIHsKICAgICAgICByZXF1aXJlKGJsb2NrLnRpbWVzdGFtcCA8IGV4cGlyZXNBdCwgIkV4cGlyZWQgY2hhbGxlbmdlIHBlcmlvZCIpOwogICAgICAgIHJlcXVpcmUoX25vbmNlID4gbm9uY2UsICJOb25jZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB0aGUgY3VycmVudCBub25jZSIpOwoKICAgICAgICBmb3IgKHVpbnQyNTYgaSA9IDA7IGkgPCBfYmFsYW5jZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgYmFsYW5jZXNbdXNlcnNbaV1dID0gX2JhbGFuY2VzW2ldOwogICAgICAgIH0KCiAgICAgICAgbm9uY2UgPSBfbm9uY2U7CiAgICAgICAgZXhwaXJlc0F0ID0gYmxvY2sudGltZXN0YW1wICsgY2hhbGxlbmdlUGVyaW9kOwoKICAgICAgICBlbWl0IENoYWxsZW5nZUV4aXQobXNnLnNlbmRlciwgbm9uY2UpOwogICAgfQoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KCkgcHVibGljIG9ubHlVc2VyIHsKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICBibG9jay50aW1lc3RhbXAgPj0gZXhwaXJlc0F0LCAiQ2hhbGxlbmdlIHBlcmlvZCBoYXMgbm90IGV4cGlyZWQgeWV0IgogICAgICAgICk7CgogICAgICAgIHVpbnQyNTYgYW1vdW50ID0gYmFsYW5jZXNbbXNnLnNlbmRlcl07CiAgICAgICAgYmFsYW5jZXNbbXNnLnNlbmRlcl0gPSAwOwoKICAgICAgICAoYm9vbCBzZW50LCkgPSBtc2cuc2VuZGVyLmNhbGx7dmFsdWU6IGFtb3VudH0oIiIpOwogICAgICAgIHJlcXVpcmUoc2VudCwgIkZhaWxlZCB0byBzZW5kIEV0aGVyIik7CgogICAgICAgIGVtaXQgV2l0aGRyYXcobXNnLnNlbmRlciwgYW1vdW50KTsKICAgIH0KfQo=",
    },
    {
        fileName: "ECDSA.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCi8vIE9wZW5aZXBwZWxpbiBDb250cmFjdHMgKGxhc3QgdXBkYXRlZCB2NC41LjApICh1dGlscy9jcnlwdG9ncmFwaHkvRUNEU0Euc29sKQoKbGlicmFyeSBFQ0RTQSB7CiAgICBlbnVtIFJlY292ZXJFcnJvciB7CiAgICAgICAgTm9FcnJvciwKICAgICAgICBJbnZhbGlkU2lnbmF0dXJlLAogICAgICAgIEludmFsaWRTaWduYXR1cmVMZW5ndGgsCiAgICAgICAgSW52YWxpZFNpZ25hdHVyZVMsCiAgICAgICAgSW52YWxpZFNpZ25hdHVyZVYKICAgIH0KCiAgICBmdW5jdGlvbiBfdGhyb3dFcnJvcihSZWNvdmVyRXJyb3IgZXJyb3IpIHByaXZhdGUgcHVyZSB7CiAgICAgICAgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5Ob0Vycm9yKSB7CiAgICAgICAgICAgIHJldHVybjsgLy8gbm8gZXJyb3I6IGRvIG5vdGhpbmcKICAgICAgICB9IGVsc2UgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlKSB7CiAgICAgICAgICAgIHJldmVydCgiRUNEU0E6IGludmFsaWQgc2lnbmF0dXJlIik7CiAgICAgICAgfSBlbHNlIGlmIChlcnJvciA9PSBSZWNvdmVyRXJyb3IuSW52YWxpZFNpZ25hdHVyZUxlbmd0aCkgewogICAgICAgICAgICByZXZlcnQoIkVDRFNBOiBpbnZhbGlkIHNpZ25hdHVyZSBsZW5ndGgiKTsKICAgICAgICB9IGVsc2UgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlUykgewogICAgICAgICAgICByZXZlcnQoIkVDRFNBOiBpbnZhbGlkIHNpZ25hdHVyZSAncycgdmFsdWUiKTsKICAgICAgICB9IGVsc2UgaWYgKGVycm9yID09IFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlVikgewogICAgICAgICAgICByZXZlcnQoIkVDRFNBOiBpbnZhbGlkIHNpZ25hdHVyZSAndicgdmFsdWUiKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdHJ5UmVjb3ZlcihieXRlczMyIGhhc2gsIGJ5dGVzIG1lbW9yeSBzaWduYXR1cmUpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYWRkcmVzcywgUmVjb3ZlckVycm9yKQogICAgewogICAgICAgIC8vIENoZWNrIHRoZSBzaWduYXR1cmUgbGVuZ3RoCiAgICAgICAgLy8gLSBjYXNlIDY1OiByLHMsdiBzaWduYXR1cmUgKHN0YW5kYXJkKQogICAgICAgIC8vIC0gY2FzZSA2NDogcix2cyBzaWduYXR1cmUgKGNmIGh0dHBzOi8vZWlwcy5ldGhlcmV1bS5vcmcvRUlQUy9laXAtMjA5OCkgX0F2YWlsYWJsZSBzaW5jZSB2NC4xLl8KICAgICAgICBpZiAoc2lnbmF0dXJlLmxlbmd0aCA9PSA2NSkgewogICAgICAgICAgICBieXRlczMyIHI7CiAgICAgICAgICAgIGJ5dGVzMzIgczsKICAgICAgICAgICAgdWludDggdjsKICAgICAgICAgICAgLy8gZWNyZWNvdmVyIHRha2VzIHRoZSBzaWduYXR1cmUgcGFyYW1ldGVycywgYW5kIHRoZSBvbmx5IHdheSB0byBnZXQgdGhlbQogICAgICAgICAgICAvLyBjdXJyZW50bHkgaXMgdG8gdXNlIGFzc2VtYmx5LgogICAgICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgICAgICByIDo9IG1sb2FkKGFkZChzaWduYXR1cmUsIDB4MjApKQogICAgICAgICAgICAgICAgcyA6PSBtbG9hZChhZGQoc2lnbmF0dXJlLCAweDQwKSkKICAgICAgICAgICAgICAgIHYgOj0gYnl0ZSgwLCBtbG9hZChhZGQoc2lnbmF0dXJlLCAweDYwKSkpCiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHRyeVJlY292ZXIoaGFzaCwgdiwgciwgcyk7CiAgICAgICAgfSBlbHNlIGlmIChzaWduYXR1cmUubGVuZ3RoID09IDY0KSB7CiAgICAgICAgICAgIGJ5dGVzMzIgcjsKICAgICAgICAgICAgYnl0ZXMzMiB2czsKICAgICAgICAgICAgLy8gZWNyZWNvdmVyIHRha2VzIHRoZSBzaWduYXR1cmUgcGFyYW1ldGVycywgYW5kIHRoZSBvbmx5IHdheSB0byBnZXQgdGhlbQogICAgICAgICAgICAvLyBjdXJyZW50bHkgaXMgdG8gdXNlIGFzc2VtYmx5LgogICAgICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgICAgICByIDo9IG1sb2FkKGFkZChzaWduYXR1cmUsIDB4MjApKQogICAgICAgICAgICAgICAgdnMgOj0gbWxvYWQoYWRkKHNpZ25hdHVyZSwgMHg0MCkpCiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHRyeVJlY292ZXIoaGFzaCwgciwgdnMpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHJldHVybiAoYWRkcmVzcygwKSwgUmVjb3ZlckVycm9yLkludmFsaWRTaWduYXR1cmVMZW5ndGgpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiByZWNvdmVyKGJ5dGVzMzIgaGFzaCwgYnl0ZXMgbWVtb3J5IHNpZ25hdHVyZSkKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChhZGRyZXNzKQogICAgewogICAgICAgIChhZGRyZXNzIHJlY292ZXJlZCwgUmVjb3ZlckVycm9yIGVycm9yKSA9IHRyeVJlY292ZXIoaGFzaCwgc2lnbmF0dXJlKTsKICAgICAgICBfdGhyb3dFcnJvcihlcnJvcik7CiAgICAgICAgcmV0dXJuIHJlY292ZXJlZDsKICAgIH0KCiAgICBmdW5jdGlvbiB0cnlSZWNvdmVyKGJ5dGVzMzIgaGFzaCwgYnl0ZXMzMiByLCBieXRlczMyIHZzKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGFkZHJlc3MsIFJlY292ZXJFcnJvcikKICAgIHsKICAgICAgICBieXRlczMyIHMgPSB2cwogICAgICAgICAgICAmIGJ5dGVzMzIoCiAgICAgICAgICAgICAgICAweDdmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYKICAgICAgICAgICAgKTsKICAgICAgICB1aW50OCB2ID0gdWludDgoKHVpbnQyNTYodnMpID4+IDI1NSkgKyAyNyk7CiAgICAgICAgcmV0dXJuIHRyeVJlY292ZXIoaGFzaCwgdiwgciwgcyk7CiAgICB9CgogICAgZnVuY3Rpb24gcmVjb3ZlcihieXRlczMyIGhhc2gsIGJ5dGVzMzIgciwgYnl0ZXMzMiB2cykKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChhZGRyZXNzKQogICAgewogICAgICAgIChhZGRyZXNzIHJlY292ZXJlZCwgUmVjb3ZlckVycm9yIGVycm9yKSA9IHRyeVJlY292ZXIoaGFzaCwgciwgdnMpOwogICAgICAgIF90aHJvd0Vycm9yKGVycm9yKTsKICAgICAgICByZXR1cm4gcmVjb3ZlcmVkOwogICAgfQoKICAgIGZ1bmN0aW9uIHRyeVJlY292ZXIoYnl0ZXMzMiBoYXNoLCB1aW50OCB2LCBieXRlczMyIHIsIGJ5dGVzMzIgcykKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChhZGRyZXNzLCBSZWNvdmVyRXJyb3IpCiAgICB7CiAgICAgICAgLy8gRUlQLTIgc3RpbGwgYWxsb3dzIHNpZ25hdHVyZSBtYWxsZWFiaWxpdHkgZm9yIGVjcmVjb3ZlcigpLiBSZW1vdmUgdGhpcyBwb3NzaWJpbGl0eSBhbmQgbWFrZSB0aGUgc2lnbmF0dXJlCiAgICAgICAgLy8gdW5pcXVlLiBBcHBlbmRpeCBGIGluIHRoZSBFdGhlcmV1bSBZZWxsb3cgcGFwZXIgKGh0dHBzOi8vZXRoZXJldW0uZ2l0aHViLmlvL3llbGxvd3BhcGVyL3BhcGVyLnBkZiksIGRlZmluZXMKICAgICAgICAvLyB0aGUgdmFsaWQgcmFuZ2UgZm9yIHMgaW4gKDMwMSk6IDAgPCBzIDwgc2VjcDI1NmsxbiDDtyAyICsgMSwgYW5kIGZvciB2IGluICgzMDIpOiB2IOKIiCB7MjcsIDI4fS4gTW9zdAogICAgICAgIC8vIHNpZ25hdHVyZXMgZnJvbSBjdXJyZW50IGxpYnJhcmllcyBnZW5lcmF0ZSBhIHVuaXF1ZSBzaWduYXR1cmUgd2l0aCBhbiBzLXZhbHVlIGluIHRoZSBsb3dlciBoYWxmIG9yZGVyLgogICAgICAgIC8vCiAgICAgICAgLy8gSWYgeW91ciBsaWJyYXJ5IGdlbmVyYXRlcyBtYWxsZWFibGUgc2lnbmF0dXJlcywgc3VjaCBhcyBzLXZhbHVlcyBpbiB0aGUgdXBwZXIgcmFuZ2UsIGNhbGN1bGF0ZSBhIG5ldyBzLXZhbHVlCiAgICAgICAgLy8gd2l0aCAweEZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZFQkFBRURDRTZBRjQ4QTAzQkJGRDI1RThDRDAzNjQxNDEgLSBzMSBhbmQgZmxpcCB2IGZyb20gMjcgdG8gMjggb3IKICAgICAgICAvLyB2aWNlIHZlcnNhLiBJZiB5b3VyIGxpYnJhcnkgYWxzbyBnZW5lcmF0ZXMgc2lnbmF0dXJlcyB3aXRoIDAvMSBmb3IgdiBpbnN0ZWFkIDI3LzI4LCBhZGQgMjcgdG8gdiB0byBhY2NlcHQKICAgICAgICAvLyB0aGVzZSBtYWxsZWFibGUgc2lnbmF0dXJlcyBhcyB3ZWxsLgogICAgICAgIGlmICgKICAgICAgICAgICAgdWludDI1NihzKQogICAgICAgICAgICAgICAgPiAweDdGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGNUQ1NzZFNzM1N0E0NTAxRERGRTkyRjQ2NjgxQjIwQTAKICAgICAgICApIHsKICAgICAgICAgICAgcmV0dXJuIChhZGRyZXNzKDApLCBSZWNvdmVyRXJyb3IuSW52YWxpZFNpZ25hdHVyZVMpOwogICAgICAgIH0KICAgICAgICBpZiAodiAhPSAyNyAmJiB2ICE9IDI4KSB7CiAgICAgICAgICAgIHJldHVybiAoYWRkcmVzcygwKSwgUmVjb3ZlckVycm9yLkludmFsaWRTaWduYXR1cmVWKTsKICAgICAgICB9CgogICAgICAgIC8vIElmIHRoZSBzaWduYXR1cmUgaXMgdmFsaWQgKGFuZCBub3QgbWFsbGVhYmxlKSwgcmV0dXJuIHRoZSBzaWduZXIgYWRkcmVzcwogICAgICAgIGFkZHJlc3Mgc2lnbmVyID0gZWNyZWNvdmVyKGhhc2gsIHYsIHIsIHMpOwogICAgICAgIGlmIChzaWduZXIgPT0gYWRkcmVzcygwKSkgewogICAgICAgICAgICByZXR1cm4gKGFkZHJlc3MoMCksIFJlY292ZXJFcnJvci5JbnZhbGlkU2lnbmF0dXJlKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiAoc2lnbmVyLCBSZWNvdmVyRXJyb3IuTm9FcnJvcik7CiAgICB9CgogICAgZnVuY3Rpb24gcmVjb3ZlcihieXRlczMyIGhhc2gsIHVpbnQ4IHYsIGJ5dGVzMzIgciwgYnl0ZXMzMiBzKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGFkZHJlc3MpCiAgICB7CiAgICAgICAgKGFkZHJlc3MgcmVjb3ZlcmVkLCBSZWNvdmVyRXJyb3IgZXJyb3IpID0gdHJ5UmVjb3ZlcihoYXNoLCB2LCByLCBzKTsKICAgICAgICBfdGhyb3dFcnJvcihlcnJvcik7CiAgICAgICAgcmV0dXJuIHJlY292ZXJlZDsKICAgIH0KCiAgICBmdW5jdGlvbiB0b0V0aFNpZ25lZE1lc3NhZ2VIYXNoKGJ5dGVzMzIgaGFzaCkKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyKQogICAgewogICAgICAgIC8vIDMyIGlzIHRoZSBsZW5ndGggaW4gYnl0ZXMgb2YgaGFzaCwKICAgICAgICAvLyBlbmZvcmNlZCBieSB0aGUgdHlwZSBzaWduYXR1cmUgYWJvdmUKICAgICAgICByZXR1cm4ga2VjY2FrMjU2KAogICAgICAgICAgICBhYmkuZW5jb2RlUGFja2VkKCJceDE5RXRoZXJldW0gU2lnbmVkIE1lc3NhZ2U6XG4zMiIsIGhhc2gpCiAgICAgICAgKTsKICAgIH0KfQo=",
    },
]

const html = `<p>Bi-directional payment channels allow participants <code>Alice</code> and <code>Bob</code> to repeatedly transfer Ether off chain.</p>
<p>Payments can go both ways, <code>Alice</code> pays <code>Bob</code> and <code>Bob</code> pays <code>Alice</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"./ECDSA.sol"</span>;

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

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BiDirectionalPaymentChannel</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">ECDSA</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">bytes32</span></span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ChallengeExit</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> sender, <span class="hljs-keyword">uint256</span> nonce</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> amount</span>)</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">public</span> users;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> isUser;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balances;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> challengePeriod;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> expiresAt;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> nonce;

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">checkBalances</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances</span>) </span>{
        <span class="hljs-built_in">require</span>(
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>).<span class="hljs-built_in">balance</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> _balances[<span class="hljs-number">0</span>] <span class="hljs-operator">+</span> _balances[<span class="hljs-number">1</span>],
            <span class="hljs-string">"balance of contract must be &gt;= to the total balance of users"</span>
        );
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> deposit from multi-sig wallet</span>
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _users,
        <span class="hljs-keyword">uint256</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint256</span> _expiresAt,
        <span class="hljs-keyword">uint256</span> _challengePeriod
    </span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title">checkBalances</span>(<span class="hljs-params">_balances</span>) </span>{
        <span class="hljs-built_in">require</span>(_expiresAt <span class="hljs-operator">&gt;</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, <span class="hljs-string">"Expiration must be &gt; now"</span>);
        <span class="hljs-built_in">require</span>(_challengePeriod <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Challenge period must be &gt; 0"</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _users.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
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
        <span class="hljs-keyword">uint256</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint256</span> _nonce
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _signatures.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-comment">/*
            <span class="hljs-doctag">NOTE:</span> sign with address of this contract to protect
                  agains replay attack on other contracts
            */</span>
            <span class="hljs-keyword">bool</span> valid <span class="hljs-operator">=</span> _signers[i]
                <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_contract, _balances, _nonce))
                    .toEthSignedMessageHash().recover(_signatures[i]);

            <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>valid) {
                <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
            }
        }

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">checkSignatures</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _signatures,
        <span class="hljs-keyword">uint256</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint256</span> _nonce
    </span>) </span>{
        <span class="hljs-comment">// Note: copy storage array to memory</span>
        <span class="hljs-keyword">address</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> signers;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> users.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
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
        <span class="hljs-keyword">uint256</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _balances,
        <span class="hljs-keyword">uint256</span> _nonce,
        <span class="hljs-keyword">bytes</span>[<span class="hljs-number">2</span>] <span class="hljs-keyword">memory</span> _signatures
    </span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title">onlyUser</span>
        <span class="hljs-title">checkSignatures</span>(<span class="hljs-params">_signatures, _balances, _nonce</span>)
        <span class="hljs-title">checkBalances</span>(<span class="hljs-params">_balances</span>)
    </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&lt;</span> expiresAt, <span class="hljs-string">"Expired challenge period"</span>);
        <span class="hljs-built_in">require</span>(_nonce <span class="hljs-operator">&gt;</span> nonce, <span class="hljs-string">"Nonce must be greater than the current nonce"</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> _balances.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            balances[users[i]] <span class="hljs-operator">=</span> _balances[i];
        }

        nonce <span class="hljs-operator">=</span> _nonce;
        expiresAt <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">+</span> challengePeriod;

        <span class="hljs-keyword">emit</span> ChallengeExit(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, nonce);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">onlyUser</span> </span>{
        <span class="hljs-built_in">require</span>(
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> expiresAt, <span class="hljs-string">"Challenge period has not expired yet"</span>
        );

        <span class="hljs-keyword">uint256</span> amount <span class="hljs-operator">=</span> balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        balances[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: amount}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);

        <span class="hljs-keyword">emit</span> Withdraw(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount);
    }
}
</code></pre><pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

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
