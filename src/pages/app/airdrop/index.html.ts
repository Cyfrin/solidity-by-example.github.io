// metadata
export const version = "0.8.26"
export const title = "Merkle Airdrop"
export const description = "Airdrop contract using Merkle tree"

export const keywords = ["app", "application", "merkle", "airdrop"]

export const codes = [
  {
    fileName: "Airdrop.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmltcG9ydCB7TWVya2xlUHJvb2Z9IGZyb20gIi4vTWVya2xlUHJvb2Yuc29sIjsKCmludGVyZmFjZSBJVG9rZW4gewogICAgZnVuY3Rpb24gbWludChhZGRyZXNzIHRvLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWw7Cn0KCmNvbnRyYWN0IEFpcmRyb3AgewogICAgZXZlbnQgQ2xhaW0oYWRkcmVzcyB0bywgdWludDI1NiBhbW91bnQpOwoKICAgIElUb2tlbiBwdWJsaWMgaW1tdXRhYmxlIHRva2VuOwogICAgYnl0ZXMzMiBwdWJsaWMgaW1tdXRhYmxlIHJvb3Q7CiAgICBtYXBwaW5nKGJ5dGVzMzIgPT4gYm9vbCkgcHVibGljIGNsYWltZWQ7CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfdG9rZW4sIGJ5dGVzMzIgX3Jvb3QpIHsKICAgICAgICB0b2tlbiA9IElUb2tlbihfdG9rZW4pOwogICAgICAgIHJvb3QgPSBfcm9vdDsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRMZWFmSGFzaChhZGRyZXNzIHRvLCB1aW50MjU2IGFtb3VudCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMikKICAgIHsKICAgICAgICByZXR1cm4ga2VjY2FrMjU2KGFiaS5lbmNvZGUodG8sIGFtb3VudCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGNsYWltKGJ5dGVzMzJbXSBtZW1vcnkgcHJvb2YsIGFkZHJlc3MgdG8sIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICB7CiAgICAgICAgLy8gTk9URTogKHRvLCBhbW91bnQpIGNhbm5vdCBoYXZlIGR1cGxpY2F0ZXMKICAgICAgICBieXRlczMyIGxlYWYgPSBnZXRMZWFmSGFzaCh0bywgYW1vdW50KTsKCiAgICAgICAgcmVxdWlyZSghY2xhaW1lZFtsZWFmXSwgImFpcmRyb3AgYWxyZWFkeSBjbGFpbWVkIik7CiAgICAgICAgcmVxdWlyZShNZXJrbGVQcm9vZi52ZXJpZnkocHJvb2YsIHJvb3QsIGxlYWYpLCAiaW52YWxpZCBtZXJrbGUgcHJvb2YiKTsKICAgICAgICBjbGFpbWVkW2xlYWZdID0gdHJ1ZTsKCiAgICAgICAgdG9rZW4ubWludCh0bywgYW1vdW50KTsKCiAgICAgICAgZW1pdCBDbGFpbSh0bywgYW1vdW50KTsKICAgIH0KfQo=",
  },
  {
    fileName: "AirdropTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmltcG9ydCB7VGVzdCwgY29uc29sZTJ9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7CmltcG9ydCB7TWVya2xlSGVscGVyfSBmcm9tICIuL01lcmtsZUhlbHBlci5zb2wiOwppbXBvcnQge0FpcmRyb3B9IGZyb20gIi4uLy4uLy4uL3NyYy9hcHAvYWlyZHJvcC9BaXJkcm9wLnNvbCI7CmltcG9ydCB7VG9rZW59IGZyb20gIi4uLy4uLy4uL3NyYy9hcHAvYWlyZHJvcC9Ub2tlbi5zb2wiOwoKY29udHJhY3QgQWlyZHJvcFRlc3QgaXMgVGVzdCB7CiAgICBUb2tlbiBwcml2YXRlIHRva2VuOwogICAgQWlyZHJvcCBwcml2YXRlIGFpcmRyb3A7CgogICAgc3RydWN0IFJld2FyZCB7CiAgICAgICAgYWRkcmVzcyB0bzsKICAgICAgICB1aW50MjU2IGFtb3VudDsKICAgIH0KCiAgICBSZXdhcmRbXSBwcml2YXRlIHJld2FyZHM7CiAgICBieXRlczMyW10gcHJpdmF0ZSBoYXNoZXM7CiAgICBtYXBwaW5nKGJ5dGVzMzIgPT4gUmV3YXJkKSBwcml2YXRlIGhhc2hUb1Jld2FyZDsKCiAgICB1aW50MjU2IGNvbnN0YW50IE4gPSAxMDA7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIHRva2VuID0gbmV3IFRva2VuKCJ0ZXN0IiwgIlRFU1QiLCAxOCk7CgogICAgICAgIC8vIEluaXRpYWxpemUgdXNlcnMgYW5kIGFpcmRyb3AgYW1vdW50cwogICAgICAgIGZvciAodWludDI1NiBpID0gMDsgaSA8IE47IGkrKykgewogICAgICAgICAgICByZXdhcmRzLnB1c2goCiAgICAgICAgICAgICAgICBSZXdhcmQoe3RvOiBhZGRyZXNzKHVpbnQxNjAoaSkpLCBhbW91bnQ6IChpICsgMSkgKiAxMDB9KQogICAgICAgICAgICApOwogICAgICAgICAgICBoYXNoZXMucHVzaChrZWNjYWsyNTYoYWJpLmVuY29kZShyZXdhcmRzW2ldLnRvLCByZXdhcmRzW2ldLmFtb3VudCkpKTsKICAgICAgICAgICAgaGFzaFRvUmV3YXJkW2hhc2hlc1tpXV0gPSByZXdhcmRzW2ldOwogICAgICAgIH0KCiAgICAgICAgaGFzaGVzID0gTWVya2xlSGVscGVyLnNvcnQoaGFzaGVzKTsKCiAgICAgICAgYnl0ZXMzMiByb290ID0gTWVya2xlSGVscGVyLmNhbGNSb290KGhhc2hlcyk7CgogICAgICAgIGFpcmRyb3AgPSBuZXcgQWlyZHJvcChhZGRyZXNzKHRva2VuKSwgcm9vdCk7CgogICAgICAgIHRva2VuLnNldEF1dGhvcml6ZWQoYWRkcmVzcyhhaXJkcm9wKSwgdHJ1ZSk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF92YWxpZF9wcm9vZigpIHB1YmxpYyB7CiAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgTjsgaSsrKSB7CiAgICAgICAgICAgIGJ5dGVzMzIgaCA9IGhhc2hlc1tpXTsKICAgICAgICAgICAgUmV3YXJkIG1lbW9yeSByZXdhcmQgPSBoYXNoVG9SZXdhcmRbaF07CiAgICAgICAgICAgIGJ5dGVzMzJbXSBtZW1vcnkgcHJvb2YgPSBNZXJrbGVIZWxwZXIuZ2V0UHJvb2YoaGFzaGVzLCBpKTsKCiAgICAgICAgICAgIGFpcmRyb3AuY2xhaW0ocHJvb2YsIHJld2FyZC50bywgcmV3YXJkLmFtb3VudCk7CiAgICAgICAgICAgIGFzc2VydEVxKHRva2VuLmJhbGFuY2VPZihyZXdhcmQudG8pLCByZXdhcmQuYW1vdW50KTsKICAgICAgICB9CiAgICB9Cn0K",
  },
  {
    fileName: "Hashes.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVAovLyBPcGVuWmVwcGVsaW4gQ29udHJhY3RzCgpwcmFnbWEgc29saWRpdHkgXjAuOC4wOwoKbGlicmFyeSBIYXNoZXMgewogICAgZnVuY3Rpb24gY29tbXV0YXRpdmVLZWNjYWsyNTYoYnl0ZXMzMiBhLCBieXRlczMyIGIpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMikKICAgIHsKICAgICAgICByZXR1cm4gYSA8IGIgPyBfZWZmaWNpZW50S2VjY2FrMjU2KGEsIGIpIDogX2VmZmljaWVudEtlY2NhazI1NihiLCBhKTsKICAgIH0KCiAgICBmdW5jdGlvbiBfZWZmaWNpZW50S2VjY2FrMjU2KGJ5dGVzMzIgYSwgYnl0ZXMzMiBiKQogICAgICAgIHByaXZhdGUKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMiB2YWx1ZSkKICAgIHsKICAgICAgICAvLy8gQHNvbGlkaXR5IG1lbW9yeS1zYWZlLWFzc2VtYmx5CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBtc3RvcmUoMHgwMCwgYSkKICAgICAgICAgICAgbXN0b3JlKDB4MjAsIGIpCiAgICAgICAgICAgIHZhbHVlIDo9IGtlY2NhazI1NigweDAwLCAweDQwKQogICAgICAgIH0KICAgIH0KfQo=",
  },
  {
    fileName: "MerkleHelper.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmxpYnJhcnkgTWVya2xlSGVscGVyIHsKICAgIC8vIEJ1YmJsZSBzb3J0CiAgICBmdW5jdGlvbiBzb3J0KGJ5dGVzMzJbXSBtZW1vcnkgYXJyKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJ5dGVzMzJbXSBtZW1vcnkpCiAgICB7CiAgICAgICAgdWludDI1NiBuID0gYXJyLmxlbmd0aDsKICAgICAgICBmb3IgKHVpbnQyNTYgaSA9IDA7IGkgPCBuOyBpKyspIHsKICAgICAgICAgICAgZm9yICh1aW50MjU2IGogPSAwOyBqIDwgbiAtIDEgLSBpOyBqKyspIHsKICAgICAgICAgICAgICAgIGlmIChhcnJbal0gPiBhcnJbaiArIDFdKSB7CiAgICAgICAgICAgICAgICAgICAgKGFycltqXSwgYXJyW2ogKyAxXSkgPSAoYXJyW2ogKyAxXSwgYXJyW2pdKTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIGFycjsKICAgIH0KCiAgICBmdW5jdGlvbiB5dWxLZWNjYWsyNTYoYnl0ZXMzMiBhLCBieXRlczMyIGIpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMiB2KQogICAgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbXN0b3JlKDB4MDAsIGEpCiAgICAgICAgICAgIG1zdG9yZSgweDIwLCBiKQogICAgICAgICAgICB2IDo9IGtlY2NhazI1NigweDAwLCAweDQwKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBjYWxjUm9vdChieXRlczMyW10gbWVtb3J5IGhhc2hlcykKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyKQogICAgewogICAgICAgIHVpbnQyNTYgbiA9IGhhc2hlcy5sZW5ndGg7CgogICAgICAgIHdoaWxlIChuID4gMSkgewogICAgICAgICAgICBmb3IgKHVpbnQyNTYgaSA9IDA7IGkgPCBuOyBpICs9IDIpIHsKICAgICAgICAgICAgICAgIGJ5dGVzMzIgbGVmdCA9IGhhc2hlc1tpXTsKICAgICAgICAgICAgICAgIGJ5dGVzMzIgcmlnaHQgPSBoYXNoZXNbaSArIDEgPCBuID8gaSArIDEgOiBpXTsKICAgICAgICAgICAgICAgIChsZWZ0LCByaWdodCkgPSBsZWZ0IDw9IHJpZ2h0ID8gKGxlZnQsIHJpZ2h0KSA6IChyaWdodCwgbGVmdCk7CiAgICAgICAgICAgICAgICBoYXNoZXNbaSA+PiAxXSA9IHl1bEtlY2NhazI1NihsZWZ0LCByaWdodCk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgbiA9IChuICsgKG4gJiAxKSkgPj4gMTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBoYXNoZXNbMF07CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0UHJvb2YoYnl0ZXMzMltdIG1lbW9yeSBoYXNoZXMsIHVpbnQyNTYgaW5kZXgpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMltdIG1lbW9yeSkKICAgIHsKICAgICAgICBieXRlczMyW10gbWVtb3J5IHByb29mID0gbmV3IGJ5dGVzMzJbXSgwKTsKICAgICAgICB1aW50MjU2IGxlbiA9IDA7CgogICAgICAgIHVpbnQyNTYgbiA9IGhhc2hlcy5sZW5ndGg7CiAgICAgICAgdWludDI1NiBrID0gaW5kZXg7CgogICAgICAgIHdoaWxlIChuID4gMSkgewogICAgICAgICAgICAvLyBHZXQgcHJvb2YgZm9yIHRoaXMgbGV2ZWwKICAgICAgICAgICAgdWludDI1NiBqID0gayAmIDEgPT0gMSA/IGsgLSAxIDogKGsgKyAxIDwgbiA/IGsgKyAxIDogayk7CiAgICAgICAgICAgIGJ5dGVzMzIgaCA9IGhhc2hlc1tqXTsKCiAgICAgICAgICAgIC8vIHByb29mLnB1c2goaCkKICAgICAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAgICAgbGVuIDo9IGFkZChsZW4sIDEpCiAgICAgICAgICAgICAgICBsZXQgcG9zIDo9IGFkZChwcm9vZiwgc2hsKDUsIGxlbikpCiAgICAgICAgICAgICAgICBtc3RvcmUocG9zLCBoKQogICAgICAgICAgICAgICAgbXN0b3JlKHByb29mLCBsZW4pCiAgICAgICAgICAgICAgICBtc3RvcmUoMHg0MCwgYWRkKHBvcywgMHgyMCkpCiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIGsgPj49IDE7CgogICAgICAgICAgICAvLyBDYWxjdWxhdGUgbmV4dCBsZXZlbCBvZiBoYXNoZXMKICAgICAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgbjsgaSArPSAyKSB7CiAgICAgICAgICAgICAgICBieXRlczMyIGxlZnQgPSBoYXNoZXNbaV07CiAgICAgICAgICAgICAgICBieXRlczMyIHJpZ2h0ID0gaGFzaGVzW2kgKyAxIDwgbiA/IGkgKyAxIDogaV07CiAgICAgICAgICAgICAgICAobGVmdCwgcmlnaHQpID0gbGVmdCA8PSByaWdodCA/IChsZWZ0LCByaWdodCkgOiAocmlnaHQsIGxlZnQpOwogICAgICAgICAgICAgICAgaGFzaGVzW2kgPj4gMV0gPSB5dWxLZWNjYWsyNTYobGVmdCwgcmlnaHQpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIG4gPSAobiArIChuICYgMSkpID4+IDE7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gcHJvb2Y7CiAgICB9CgogICAgZnVuY3Rpb24gdmVyaWZ5KGJ5dGVzMzJbXSBtZW1vcnkgcHJvb2YsIGJ5dGVzMzIgcm9vdCwgYnl0ZXMzMiBsZWFmKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJvb2wpCiAgICB7CiAgICAgICAgYnl0ZXMzMiBoID0gbGVhZjsKCiAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgcHJvb2YubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgKGJ5dGVzMzIgbGVmdCwgYnl0ZXMzMiByaWdodCkgPQogICAgICAgICAgICAgICAgaCA8PSBwcm9vZltpXSA/IChoLCBwcm9vZltpXSkgOiAocHJvb2ZbaV0sIGgpOwogICAgICAgICAgICBoID0geXVsS2VjY2FrMjU2KGxlZnQsIHJpZ2h0KTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBoID09IHJvb3Q7CiAgICB9Cn0K",
  },
  {
    fileName: "MerkleProof.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVAovLyBPcGVuWmVwcGVsaW4gQ29udHJhY3RzCgpwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7SGFzaGVzfSBmcm9tICIuL0hhc2hlcy5zb2wiOwoKbGlicmFyeSBNZXJrbGVQcm9vZiB7CiAgICBmdW5jdGlvbiB2ZXJpZnkoYnl0ZXMzMltdIG1lbW9yeSBwcm9vZiwgYnl0ZXMzMiByb290LCBieXRlczMyIGxlYWYpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYm9vbCkKICAgIHsKICAgICAgICByZXR1cm4gcHJvY2Vzc1Byb29mKHByb29mLCBsZWFmKSA9PSByb290OwogICAgfQoKICAgIGZ1bmN0aW9uIHByb2Nlc3NQcm9vZihieXRlczMyW10gbWVtb3J5IHByb29mLCBieXRlczMyIGxlYWYpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMikKICAgIHsKICAgICAgICBieXRlczMyIGNvbXB1dGVkSGFzaCA9IGxlYWY7CiAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgcHJvb2YubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgY29tcHV0ZWRIYXNoID0gSGFzaGVzLmNvbW11dGF0aXZlS2VjY2FrMjU2KGNvbXB1dGVkSGFzaCwgcHJvb2ZbaV0pOwogICAgICAgIH0KICAgICAgICByZXR1cm4gY29tcHV0ZWRIYXNoOwogICAgfQp9Cg==",
  },
  {
    fileName: "Token.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8vIEVSQzIwICsgbWludCArIGF1dGhvcml6YXRpb24KY29udHJhY3QgVG9rZW4gewogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludDI1NiB2YWx1ZSk7CiAgICBldmVudCBBcHByb3ZhbCgKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgb3duZXIsIGFkZHJlc3MgaW5kZXhlZCBzcGVuZGVyLCB1aW50MjU2IHZhbHVlCiAgICApOwoKICAgIHVpbnQyNTYgcHVibGljIHRvdGFsU3VwcGx5OwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyBiYWxhbmNlT2Y7CiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpKSBwdWJsaWMgYWxsb3dhbmNlOwogICAgc3RyaW5nIHB1YmxpYyBuYW1lOwogICAgc3RyaW5nIHB1YmxpYyBzeW1ib2w7CiAgICB1aW50OCBwdWJsaWMgZGVjaW1hbHM7CiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gYm9vbCkgcHVibGljIGF1dGhvcml6ZWQ7CgogICAgY29uc3RydWN0b3Ioc3RyaW5nIG1lbW9yeSBfbmFtZSwgc3RyaW5nIG1lbW9yeSBfc3ltYm9sLCB1aW50OCBfZGVjaW1hbHMpIHsKICAgICAgICBuYW1lID0gX25hbWU7CiAgICAgICAgc3ltYm9sID0gX3N5bWJvbDsKICAgICAgICBkZWNpbWFscyA9IF9kZWNpbWFsczsKICAgICAgICBhdXRob3JpemVkW21zZy5zZW5kZXJdID0gdHJ1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiBzZXRBdXRob3JpemVkKGFkZHJlc3MgYWRkciwgYm9vbCBhdXRoKSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShhdXRob3JpemVkW21zZy5zZW5kZXJdLCAibm90IGF1dGhvcml6ZWQiKTsKICAgICAgICBhdXRob3JpemVkW2FkZHJdID0gYXV0aDsKICAgIH0KCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIGJhbGFuY2VPZlttc2cuc2VuZGVyXSAtPSBhbW91bnQ7CiAgICAgICAgYmFsYW5jZU9mW3JlY2lwaWVudF0gKz0gYW1vdW50OwogICAgICAgIGVtaXQgVHJhbnNmZXIobXNnLnNlbmRlciwgcmVjaXBpZW50LCBhbW91bnQpOwogICAgICAgIHJldHVybiB0cnVlOwogICAgfQoKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCkgewogICAgICAgIGFsbG93YW5jZVttc2cuc2VuZGVyXVtzcGVuZGVyXSA9IGFtb3VudDsKICAgICAgICBlbWl0IEFwcHJvdmFsKG1zZy5zZW5kZXIsIHNwZW5kZXIsIGFtb3VudCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKGFkZHJlc3Mgc2VuZGVyLCBhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIGFsbG93YW5jZVtzZW5kZXJdW21zZy5zZW5kZXJdIC09IGFtb3VudDsKICAgICAgICBiYWxhbmNlT2Zbc2VuZGVyXSAtPSBhbW91bnQ7CiAgICAgICAgYmFsYW5jZU9mW3JlY2lwaWVudF0gKz0gYW1vdW50OwogICAgICAgIGVtaXQgVHJhbnNmZXIoc2VuZGVyLCByZWNpcGllbnQsIGFtb3VudCk7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gX21pbnQoYWRkcmVzcyB0bywgdWludDI1NiBhbW91bnQpIGludGVybmFsIHsKICAgICAgICBiYWxhbmNlT2ZbdG9dICs9IGFtb3VudDsKICAgICAgICB0b3RhbFN1cHBseSArPSBhbW91bnQ7CiAgICAgICAgZW1pdCBUcmFuc2ZlcihhZGRyZXNzKDApLCB0bywgYW1vdW50KTsKICAgIH0KCiAgICBmdW5jdGlvbiBtaW50KGFkZHJlc3MgdG8sIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShhdXRob3JpemVkW21zZy5zZW5kZXJdLCAibm90IGF1dGhvcml6ZWQiKTsKICAgICAgICBfbWludCh0bywgYW1vdW50KTsKICAgIH0KfQo=",
  },
]

const html = `<p>Example of airdrop contract using Merkle tree.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">MerkleProof</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"./MerkleProof.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IToken</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Airdrop</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Claim</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>)</span>;

    IToken <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token;
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> root;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bytes32</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> claimed;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token, <span class="hljs-keyword">bytes32</span> _root</span>) </span>{
        token <span class="hljs-operator">=</span> IToken(_token);
        root <span class="hljs-operator">=</span> _root;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getLeafHash</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(to, amount));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">claim</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> proof, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
    </span>{
        <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> (to, amount) cannot have duplicates</span>
        <span class="hljs-keyword">bytes32</span> leaf <span class="hljs-operator">=</span> getLeafHash(to, amount);

        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>claimed[leaf], <span class="hljs-string">"airdrop already claimed"</span>);
        <span class="hljs-built_in">require</span>(MerkleProof.verify(proof, root, leaf), <span class="hljs-string">"invalid merkle proof"</span>);
        claimed[leaf] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        token.mint(to, amount);

        <span class="hljs-keyword">emit</span> Claim(to, amount);
    }
}
</code></pre><h3>Token</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">// ERC20 + mint + authorization</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Token</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> value</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint256</span> value
    </span>)</span>;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>)) <span class="hljs-keyword">public</span> allowance;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> symbol;
    <span class="hljs-keyword">uint8</span> <span class="hljs-keyword">public</span> decimals;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>) <span class="hljs-keyword">public</span> authorized;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _symbol, <span class="hljs-keyword">uint8</span> _decimals</span>) </span>{
        name <span class="hljs-operator">=</span> _name;
        symbol <span class="hljs-operator">=</span> _symbol;
        decimals <span class="hljs-operator">=</span> _decimals;
        authorized[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setAuthorized</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> addr, <span class="hljs-keyword">bool</span> auth</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(authorized[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"not authorized"</span>);
        authorized[addr] <span class="hljs-operator">=</span> auth;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        balanceOf[recipient] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, recipient, amount);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        allowance[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>][spender] <span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Approval(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, spender, amount);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        allowance[sender][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        balanceOf[sender] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        balanceOf[recipient] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Transfer(sender, recipient, amount);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        balanceOf[to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(authorized[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>], <span class="hljs-string">"not authorized"</span>);
        _mint(to, amount);
    }
}
</code></pre><h3>Libraries copied from OpenZeppelin</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-comment">// OpenZeppelin Contracts</span>

<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hashes</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"./Hashes.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">MerkleProof</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">verify</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> proof, <span class="hljs-keyword">bytes32</span> root, <span class="hljs-keyword">bytes32</span> leaf</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> processProof(proof, leaf) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> root;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">processProof</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> proof, <span class="hljs-keyword">bytes32</span> leaf</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> computedHash <span class="hljs-operator">=</span> leaf;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> proof.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            computedHash <span class="hljs-operator">=</span> Hashes.commutativeKeccak256(computedHash, proof[i]);
        }
        <span class="hljs-keyword">return</span> computedHash;
    }
}
</code></pre><pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-comment">// OpenZeppelin Contracts</span>

<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.0;</span>

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">Hashes</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">commutativeKeccak256</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> a, <span class="hljs-keyword">bytes32</span> b</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> a <span class="hljs-operator">&lt;</span> b ? _efficientKeccak256(a, b) : _efficientKeccak256(b, a);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_efficientKeccak256</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> a, <span class="hljs-keyword">bytes32</span> b</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> value</span>)
    </span>{
        <span class="hljs-comment">/// @solidity memory-safe-assembly</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x00</span>, a)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x20</span>, b)
            value <span class="hljs-operator">:=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-number">0x00</span>, <span class="hljs-number">0x40</span>)
        }
    }
}
</code></pre><h3>Test</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">MerkleHelper</span> </span>{
    <span class="hljs-comment">// Bubble sort</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sort</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> arr</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">uint256</span> n <span class="hljs-operator">=</span> arr.<span class="hljs-built_in">length</span>;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> n; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> j <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; j <span class="hljs-operator">&lt;</span> n <span class="hljs-operator">-</span> <span class="hljs-number">1</span> <span class="hljs-operator">-</span> i; j<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
                <span class="hljs-keyword">if</span> (arr[j] <span class="hljs-operator">&gt;</span> arr[j <span class="hljs-operator">+</span> <span class="hljs-number">1</span>]) {
                    (arr[j], arr[j <span class="hljs-operator">+</span> <span class="hljs-number">1</span>]) <span class="hljs-operator">=</span> (arr[j <span class="hljs-operator">+</span> <span class="hljs-number">1</span>], arr[j]);
                }
            }
        }

        <span class="hljs-keyword">return</span> arr;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">yulKeccak256</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> a, <span class="hljs-keyword">bytes32</span> b</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> v</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x00</span>, a)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x20</span>, b)
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-number">0x00</span>, <span class="hljs-number">0x40</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">calcRoot</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> hashes</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>)
    </span>{
        <span class="hljs-keyword">uint256</span> n <span class="hljs-operator">=</span> hashes.<span class="hljs-built_in">length</span>;

        <span class="hljs-keyword">while</span> (n <span class="hljs-operator">&gt;</span> <span class="hljs-number">1</span>) {
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> n; i <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">2</span>) {
                <span class="hljs-keyword">bytes32</span> left <span class="hljs-operator">=</span> hashes[i];
                <span class="hljs-keyword">bytes32</span> right <span class="hljs-operator">=</span> hashes[i <span class="hljs-operator">+</span> <span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span> n ? i <span class="hljs-operator">+</span> <span class="hljs-number">1</span> : i];
                (left, right) <span class="hljs-operator">=</span> left <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> right ? (left, right) : (right, left);
                hashes[i <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span> <span class="hljs-number">1</span>] <span class="hljs-operator">=</span> yulKeccak256(left, right);
            }
            n <span class="hljs-operator">=</span> (n <span class="hljs-operator">+</span> (n <span class="hljs-operator">&amp;</span> <span class="hljs-number">1</span>)) <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span> <span class="hljs-number">1</span>;
        }

        <span class="hljs-keyword">return</span> hashes[<span class="hljs-number">0</span>];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getProof</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> hashes, <span class="hljs-keyword">uint256</span> index</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> proof <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes32</span>[](<span class="hljs-number">0</span>);
        <span class="hljs-keyword">uint256</span> len <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

        <span class="hljs-keyword">uint256</span> n <span class="hljs-operator">=</span> hashes.<span class="hljs-built_in">length</span>;
        <span class="hljs-keyword">uint256</span> k <span class="hljs-operator">=</span> index;

        <span class="hljs-keyword">while</span> (n <span class="hljs-operator">&gt;</span> <span class="hljs-number">1</span>) {
            <span class="hljs-comment">// Get proof for this level</span>
            <span class="hljs-keyword">uint256</span> j <span class="hljs-operator">=</span> k <span class="hljs-operator">&amp;</span> <span class="hljs-number">1</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span> ? k <span class="hljs-operator">-</span> <span class="hljs-number">1</span> : (k <span class="hljs-operator">+</span> <span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span> n ? k <span class="hljs-operator">+</span> <span class="hljs-number">1</span> : k);
            <span class="hljs-keyword">bytes32</span> h <span class="hljs-operator">=</span> hashes[j];

            <span class="hljs-comment">// proof.push(h)</span>
            <span class="hljs-keyword">assembly</span> {
                len <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(len, <span class="hljs-number">1</span>)
                <span class="hljs-keyword">let</span> pos <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(proof, <span class="hljs-built_in">shl</span>(<span class="hljs-number">5</span>, len))
                <span class="hljs-built_in">mstore</span>(pos, h)
                <span class="hljs-built_in">mstore</span>(proof, len)
                <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x40</span>, <span class="hljs-built_in">add</span>(pos, <span class="hljs-number">0x20</span>))
            }

            k <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;

            <span class="hljs-comment">// Calculate next level of hashes</span>
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> n; i <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">2</span>) {
                <span class="hljs-keyword">bytes32</span> left <span class="hljs-operator">=</span> hashes[i];
                <span class="hljs-keyword">bytes32</span> right <span class="hljs-operator">=</span> hashes[i <span class="hljs-operator">+</span> <span class="hljs-number">1</span> <span class="hljs-operator">&lt;</span> n ? i <span class="hljs-operator">+</span> <span class="hljs-number">1</span> : i];
                (left, right) <span class="hljs-operator">=</span> left <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> right ? (left, right) : (right, left);
                hashes[i <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span> <span class="hljs-number">1</span>] <span class="hljs-operator">=</span> yulKeccak256(left, right);
            }
            n <span class="hljs-operator">=</span> (n <span class="hljs-operator">+</span> (n <span class="hljs-operator">&amp;</span> <span class="hljs-number">1</span>)) <span class="hljs-operator">&gt;</span><span class="hljs-operator">&gt;</span> <span class="hljs-number">1</span>;
        }

        <span class="hljs-keyword">return</span> proof;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">verify</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> proof, <span class="hljs-keyword">bytes32</span> root, <span class="hljs-keyword">bytes32</span> leaf</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> h <span class="hljs-operator">=</span> leaf;

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> proof.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            (<span class="hljs-keyword">bytes32</span> left, <span class="hljs-keyword">bytes32</span> right) <span class="hljs-operator">=</span>
                h <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> proof[i] ? (h, proof[i]) : (proof[i], h);
            h <span class="hljs-operator">=</span> yulKeccak256(left, right);
        }

        <span class="hljs-keyword">return</span> h <span class="hljs-operator">=</span><span class="hljs-operator">=</span> root;
    }
}
</code></pre><pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">MerkleHelper</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"./MerkleHelper.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Airdrop</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"../../../src/app/airdrop/Airdrop.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Token</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"../../../src/app/airdrop/Token.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">AirdropTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    Token <span class="hljs-keyword">private</span> token;
    Airdrop <span class="hljs-keyword">private</span> airdrop;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">Reward</span> {
        <span class="hljs-keyword">address</span> to;
        <span class="hljs-keyword">uint256</span> amount;
    }

    Reward[] <span class="hljs-keyword">private</span> rewards;
    <span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">private</span> hashes;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bytes32</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> Reward) <span class="hljs-keyword">private</span> hashToReward;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> N <span class="hljs-operator">=</span> <span class="hljs-number">100</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        token <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Token(<span class="hljs-string">"test"</span>, <span class="hljs-string">"TEST"</span>, <span class="hljs-number">18</span>);

        <span class="hljs-comment">// Initialize users and airdrop amounts</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> N; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            rewards.<span class="hljs-built_in">push</span>(
                Reward({to: <span class="hljs-keyword">address</span>(<span class="hljs-keyword">uint160</span>(i)), amount: (i <span class="hljs-operator">+</span> <span class="hljs-number">1</span>) <span class="hljs-operator">*</span> <span class="hljs-number">100</span>})
            );
            hashes.<span class="hljs-built_in">push</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(rewards[i].to, rewards[i].amount)));
            hashToReward[hashes[i]] <span class="hljs-operator">=</span> rewards[i];
        }

        hashes <span class="hljs-operator">=</span> MerkleHelper.sort(hashes);

        <span class="hljs-keyword">bytes32</span> root <span class="hljs-operator">=</span> MerkleHelper.calcRoot(hashes);

        airdrop <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Airdrop(<span class="hljs-keyword">address</span>(token), root);

        token.setAuthorized(<span class="hljs-keyword">address</span>(airdrop), <span class="hljs-literal">true</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_valid_proof</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> N; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">bytes32</span> h <span class="hljs-operator">=</span> hashes[i];
            Reward <span class="hljs-keyword">memory</span> reward <span class="hljs-operator">=</span> hashToReward[h];
            <span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> proof <span class="hljs-operator">=</span> MerkleHelper.getProof(hashes, i);

            airdrop.claim(proof, reward.to, reward.amount);
            assertEq(token.balanceOf(reward.to), reward.amount);
        }
    }
}
</code></pre>`

export default html
