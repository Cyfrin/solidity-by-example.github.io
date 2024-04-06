// metadata
export const version = "0.8.24"
export const title = "EVM Storage"
export const description = "Example of EVM storage in Solidity"

export const keywords = [
  "data",
  "evm",
  "storage",
  "state",
  "variable",
  "yul",
  "assembly",
]

export const codes = [
  {
    fileName: "EVMStorage.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCi8vIFl1bCAtIGxhbmd1YWdlIHVzZWQgZm9yIFNvbGlkaXR5IGlubGluZSBhc3NlbWJseQpjb250cmFjdCBZdWxJbnRybyB7CiAgICAvLyBZdWwgYXNzaWdubWVudAogICAgZnVuY3Rpb24gdGVzdF95dWxfdmFyKCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHVpbnQyNTYgcyA9IDA7CgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gRGVjbGFyZSB2YXJpYWJsZQogICAgICAgICAgICBsZXQgeCA6PSAxCiAgICAgICAgICAgIC8vIFJlYXNzaWduCiAgICAgICAgICAgIHggOj0gMgogICAgICAgICAgICAvLyBBc3NpZ24gdG8gU29saWRpdHkgdmFyaWFibGUKICAgICAgICAgICAgcyA6PSAyCiAgICAgICAgfQoKICAgICAgICByZXR1cm4gczsKICAgIH0KCiAgICAvLyBZdWwgdHlwZXMgKGV2ZXJ5dGhpbmcgaXMgYnl0ZXMzMikKICAgIGZ1bmN0aW9uIHRlc3RfeXVsX3R5cGVzKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYm9vbCB4LCB1aW50MjU2IHksIGJ5dGVzMzIgeikKICAgIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIHggOj0gMQogICAgICAgICAgICB5IDo9IDB4YWFhCiAgICAgICAgICAgIHogOj0gIkhlbGxvIFl1bCIKICAgICAgICB9CgogICAgICAgIHJldHVybiAoeCwgeSwgeik7CiAgICB9Cn0KCmNvbnRyYWN0IEVWTVN0b3JhZ2VTaW5nbGVTbG90IHsKICAgIC8vIEVWTSBzdG9yYWdlCiAgICAvLyAyKioyNTYgc2xvdHMsIGVhY2ggc2xvdCBjYW4gc3RvcmUgdXAgdG8gMzIgYnl0ZXMKICAgIC8vIFNsb3RzIGFyZSBhc3NpZ25lZCBpbiB0aGUgb3JkZXIgdGhlIHN0YXRlIHZhcmlhYmxlcyBhcmUgZGVjbGFyZWQKICAgIC8vIERhdGEgPCAzMiBieXRlcyBhcmUgcGFja2VkIGludG8gYSBzbG90IChyaWdodCB0byBsZWZ0KQogICAgLy8gc3N0b3JlKGssIHYpID0gc3RvcmUgdiB0byBzbG90IGsKICAgIC8vIHNsb2FkKGspID0gbG9hZCAzMiBieXRlcyBmcm9tIHNsb3QgawoKICAgIC8vIFNpbmdsZSB2YXJpYWJsZSBzdG9yZWQgaW4gb25lIHNsb3QKICAgIC8vIHNsb3QgMAogICAgdWludDI1NiBwdWJsaWMgc194OwogICAgLy8gc2xvdCAxCiAgICB1aW50MjU2IHB1YmxpYyBzX3k7CiAgICAvLyBzbG90IDIKICAgIGJ5dGVzMzIgcHVibGljIHNfejsKCiAgICBmdW5jdGlvbiB0ZXN0X3NzdG9yZSgpIHB1YmxpYyB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBzc3RvcmUoMCwgMTExKQogICAgICAgICAgICBzc3RvcmUoMSwgMjIyKQogICAgICAgICAgICBzc3RvcmUoMiwgMHhhYmFiYWIpCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfc3N0b3JlX2FnYWluKCkgcHVibGljIHsKICAgICAgICAvLyBBY2Nlc3Mgc2xvdCB1c2luZyAuc2xvdAogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgc3N0b3JlKHNfeC5zbG90LCAxMjMpCiAgICAgICAgICAgIHNzdG9yZShzX3kuc2xvdCwgNDU2KQogICAgICAgICAgICBzc3RvcmUoc196LnNsb3QsIDB4Y2RjZGNkKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3Nsb2FkKCkKICAgICAgICBwdWJsaWMKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1NiB4LCB1aW50MjU2IHksIGJ5dGVzMzIgeikKICAgIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIHggOj0gc2xvYWQoMCkKICAgICAgICAgICAgeSA6PSBzbG9hZCgxKQogICAgICAgICAgICB6IDo9IHNsb2FkKDIpCiAgICAgICAgfQoKICAgICAgICByZXR1cm4gKHgsIHksIHopOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfc2xvYWRfYWdhaW4oKQogICAgICAgIHB1YmxpYwogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2IHgsIHVpbnQyNTYgeSwgYnl0ZXMzMiB6KQogICAgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgeCA6PSBzbG9hZChzX3guc2xvdCkKICAgICAgICAgICAgeSA6PSBzbG9hZChzX3kuc2xvdCkKICAgICAgICAgICAgeiA6PSBzbG9hZChzX3ouc2xvdCkKICAgICAgICB9CgogICAgICAgIHJldHVybiAoeCwgeSwgeik7CiAgICB9Cn0KCmNvbnRyYWN0IEVWTVN0b3JhdGVQYWNrZWRTbG90Qnl0ZXMgewogICAgLy8gc2xvdCAwIChwYWNrZWQgcmlnaHQgdG8gbGVmdCkKICAgIGJ5dGVzNCBwdWJsaWMgYjQgPSAweGFiYWJhYmFiOwogICAgYnl0ZXMyIHB1YmxpYyBiMiA9IDB4Y2RjZDsKCiAgICBmdW5jdGlvbiBnZXQoKSBwdWJsaWMgdmlldyByZXR1cm5zIChieXRlczMyIGIzMikgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgYjMyIDo9IHNsb2FkKDApCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBCaXRNYXNraW5nIHsKICAgIGZ1bmN0aW9uIHRlc3RfbWFzaygpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzMzIgbWFzaykgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gfCAgICAgICAyNTYgYml0cyAgICAgICAgfAogICAgICAgICAgICAvLyAwMDAgLi4uIDAwMCB8IDExMSAuLi4gMTExCiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHwgMTYgYml0cwogICAgICAgICAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGZmZmYKICAgICAgICAgICAgbWFzayA6PSBzdWIoc2hsKDE2LCAxKSwgMSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9zaGlmdF9tYXNrKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMzMiBtYXNrKSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyB8ICAgICAgICAgICAgICAgMjU2IGJpdHMgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAvLyAwMDAgLi4uIDAwMCB8IDExMSAuLi4gMTExIHwgMDAwIC4uLiAwMDAgfAogICAgICAgICAgICAvLyAgICAgICAgICAgICB8IDE2IGJpdHMgICAgIHwgMzIgYml0cwogICAgICAgICAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBmZmZmMDAwMDAwMDAKICAgICAgICAgICAgbWFzayA6PSBzaGwoMzIsIHN1YihzaGwoMTYsIDEpLCAxKSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9ub3RfbWFzaygpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzMzIgbWFzaykgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gfCAgICAgICAgICAgICAgIDI1NiBiaXRzICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgLy8gMTExIC4uLiAxMTEgfCAwMDAgLi4uIDAwMCB8IDExMSAuLi4gMTExIHwKICAgICAgICAgICAgLy8gICAgICAgICAgICAgfCAxNiBiaXRzICAgICB8IDMyIGJpdHMKICAgICAgICAgICAgLy8gMHhmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMDAwMGZmZmZmZmZmCiAgICAgICAgICAgIG1hc2sgOj0gbm90KHNobCgzMiwgc3ViKHNobCgxNiwgMSksIDEpKSkKICAgICAgICB9CiAgICB9Cn0KCmNvbnRyYWN0IEVWTVN0b3JhZ2VQYWNrZWRTbG90IHsKICAgIC8vIERhdGEgPCAzMiBieXRlcyBhcmUgcGFja2VkIGludG8gYSBzbG90CiAgICAvLyBCaXQgbWFza2luZyAoaG93IHRvIGNyZWF0ZSAxMTEuLi4xMTEpCiAgICAvLyBzbG90LCBvZmZzZXQKCiAgICAvLyBzbG90IDAKICAgIHVpbnQxMjggcHVibGljIHNfYTsKICAgIHVpbnQ2NCBwdWJsaWMgc19iOwogICAgdWludDMyIHB1YmxpYyBzX2M7CiAgICB1aW50MzIgcHVibGljIHNfZDsKICAgIC8vIHNsb3QgMQogICAgLy8gMjAgYnl0ZXMgPSAxNjAgYml0cwogICAgYWRkcmVzcyBwdWJsaWMgc19hZGRyOwogICAgLy8gOTYgYml0cwogICAgdWludDY0IHB1YmxpYyBzX3g7CiAgICB1aW50MzIgcHVibGljIHNfeTsKCiAgICBmdW5jdGlvbiB0ZXN0X3NzdG9yZSgpIHB1YmxpYyB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBMb2FkIDMyIGJ5dGVzIGZyb20gc2xvdDAKICAgICAgICAgICAgbGV0IHYgOj0gc2xvYWQoMCkKCiAgICAgICAgICAgIC8vIHNfZCB8IHNfYyB8IHNfYiB8IHNfYQogICAgICAgICAgICAvLyAzMiAgfCAzMiAgfCA2NCAgfCAxMjggYml0cwoKICAgICAgICAgICAgLy8gU2V0IHNfYSA9IDExCiAgICAgICAgICAgIC8vIG1hc2sgPSBhbGwgMXMgYXQgYW5kIHRvIHRoZSBsZWZ0IG9mIDEyOCBiaXQgY291bnRpbmcgZnJvbSByaWdodAogICAgICAgICAgICAvLyAgICAgICAgMTExIC4uLiAxMTEgfCAwMDAgLi4uIDAwMAogICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgfCAgICAxMjggYml0cwogICAgICAgICAgICBsZXQgbWFza19hIDo9IG5vdChzdWIoc2hsKDEyOCwgMSksIDEpKQogICAgICAgICAgICAvLyBTZXQgbGVmdCBtb3N0IDEyOCBiaXRzIHRvIDAKICAgICAgICAgICAgdiA6PSBhbmQodiwgbWFza19hKQogICAgICAgICAgICAvLyBTZXQgc19hID0gMQogICAgICAgICAgICB2IDo9IG9yKHYsIDExKQoKICAgICAgICAgICAgLy8gU2V0IHNfYiA9IDIyCiAgICAgICAgICAgIC8vIG1hc2sgPSAxMTEuLi4xMTEgfCAwMDAgLi4uIDAwMCB8IDExMSAuLi4gMTExCiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgfCAgICAgNjQgYml0cyB8ICAgIDEyOCBiaXRzCiAgICAgICAgICAgIGxldCBtYXNrX2IgOj0gbm90KHNobCgxMjgsIHN1YihzaGwoNjQsIDEpLCAxKSkpCiAgICAgICAgICAgIC8vIENsZWFyIHByZXZpb3VzIHZhbHVlIG9mIHNfYiBieSBzZXR0aW5nIGJpdHMgKDEyOCB0byAxOTEgYml0cykgdG8gMAogICAgICAgICAgICB2IDo9IGFuZCh2LCBtYXNrX2IpCiAgICAgICAgICAgIHYgOj0gb3Iodiwgc2hsKDEyOCwgMjIpKQoKICAgICAgICAgICAgLy8gU2V0IHNfYyA9IDMzCiAgICAgICAgICAgIC8vIG1hc2sgPSAxMTEuLi4xMTEgfCAwMDAuLi4wMDAgfCAxMTEgLi4uIDExMSB8IDExMSAuLi4gMTExCiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgfCAgIDMyIGJpdHMgfCAgICAgNjQgYml0cyB8ICAgIDEyOCBiaXRzCiAgICAgICAgICAgIGxldCBtYXNrX2MgOj0gbm90KHNobCgxOTIsIHN1YihzaGwoMzIsIDEpLCAxKSkpCiAgICAgICAgICAgIC8vIENsZWFyIHByZXZpb3VzIHZhbHVlIG9mIHNfYyBieSBzZXR0aW5nIGJpdHMgKDE5MiB0byAyMjMgYml0cykgdG8gMAogICAgICAgICAgICB2IDo9IGFuZCh2LCBtYXNrX2MpCiAgICAgICAgICAgIHYgOj0gb3Iodiwgc2hsKDE5MiwgMzMpKQoKICAgICAgICAgICAgLy8gU2V0IHNfZCA9IDQ0CiAgICAgICAgICAgIC8vIG1hc2sgPSAwMDAuLi4wMDAgfCAxMTEuLi4xMTEgfCAxMTEgLi4uIDExMSB8IDExMSAuLi4gMTExCiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgfCAgIDMyIGJpdHMgfCAgICAgNjQgYml0cyB8ICAgIDEyOCBiaXRzCiAgICAgICAgICAgIGxldCBtYXNrX2QgOj0gbm90KHNobCgyMjQsIHN1YihzaGwoMzIsIDEpLCAxKSkpCiAgICAgICAgICAgIC8vIENsZWFyIHByZXZpb3VzIHZhbHVlIG9mIHNfZCBieSBzZXR0aW5nIGJpdHMgKDIyNCB0byAyNTUgYml0cykgdG8gMAogICAgICAgICAgICB2IDo9IGFuZCh2LCBtYXNrX2QpCiAgICAgICAgICAgIHYgOj0gb3Iodiwgc2hsKDIyNCwgNDQpKQoKICAgICAgICAgICAgLy8gU3RvcmUgbmV3IHZhbHVlIHRvIHNsb3QwCiAgICAgICAgICAgIHNzdG9yZSgwLCB2KQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3Nsb3RfMF9vZmZzZXQoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICgKICAgICAgICAgICAgdWludDI1NiBhX29mZnNldCwKICAgICAgICAgICAgdWludDI1NiBiX29mZnNldCwKICAgICAgICAgICAgdWludDI1NiBjX29mZnNldCwKICAgICAgICAgICAgdWludDI1NiBkX29mZnNldAogICAgICAgICkKICAgIHsKICAgICAgICAvLyBhX29mZnNldCA9ICAwID0gIDAgKiA4ID0gICAwIGJpdHMKICAgICAgICAvLyBiX29mZnNldCA9IDE2ID0gMTYgKiA4ID0gMTI4IGJpdHMKICAgICAgICAvLyBjX29mZnNldCA9IDI0ID0gMjQgKiA4ID0gMTkyIGJpdHMKICAgICAgICAvLyBkX29mZnNldCA9IDI4ID0gMjggKiA4ID0gMjI0IGJpdHMKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGFfb2Zmc2V0IDo9IHNfYS5vZmZzZXQKICAgICAgICAgICAgYl9vZmZzZXQgOj0gc19iLm9mZnNldAogICAgICAgICAgICBjX29mZnNldCA6PSBzX2Mub2Zmc2V0CiAgICAgICAgICAgIGRfb2Zmc2V0IDo9IHNfZC5vZmZzZXQKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9zbG90XzFfb2Zmc2V0KCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NiBhZGRyX29mZnNldCwgdWludDI1NiB4X29mZnNldCwgdWludDI1NiB5X29mZnNldCkKICAgIHsKICAgICAgICAvLyBhZGRyX29mZnNldCA9IDAKICAgICAgICAvLyB4X29mZnNldCA9IDIwCiAgICAgICAgLy8geV9vZmZzZXQgPSAyOAogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgYWRkcl9vZmZzZXQgOj0gc19hZGRyLm9mZnNldAogICAgICAgICAgICB4X29mZnNldCA6PSBzX3gub2Zmc2V0CiAgICAgICAgICAgIHlfb2Zmc2V0IDo9IHNfeS5vZmZzZXQKICAgICAgICB9CiAgICB9CgogICAgLy8gc2xvdCBhbmQgb2Zmc2V0CiAgICBmdW5jdGlvbiB0ZXN0X3NzdG9yZV91c2luZ19vZmZzZXQoKSBwdWJsaWMgewogICAgICAgIC8vIGFfb2Zmc2V0ID0gIDAgPSAgMCAqIDggPSAgIDAgYml0cwogICAgICAgIC8vIGJfb2Zmc2V0ID0gMTYgPSAxNiAqIDggPSAxMjggYml0cwogICAgICAgIC8vIGNfb2Zmc2V0ID0gMjQgPSAyNCAqIDggPSAxOTIgYml0cwogICAgICAgIC8vIGRfb2Zmc2V0ID0gMjggPSAyOCAqIDggPSAyMjQgYml0cwogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gTG9hZCAzMiBieXRlcyBmcm9tIHNsb3QwCiAgICAgICAgICAgIGxldCB2IDo9IHNsb2FkKHNfYS5zbG90KQoKICAgICAgICAgICAgLy8gc19kIHwgc19jIHwgc19iIHwgc19hCiAgICAgICAgICAgIC8vIDMyICB8IDMyICB8IDY0ICB8IDEyOCBiaXRzCgogICAgICAgICAgICAvLyBTZXQgc19hID0gMTExCiAgICAgICAgICAgIC8vIG1hc2sgPSBhbGwgMXMgYXQgYW5kIHRvIHRoZSBsZWZ0IG9mIDEyOCBiaXQgY291bnRpbmcgZnJvbSByaWdodAogICAgICAgICAgICAvLyAgICAgICAgMTExIC4uLiAxMTEgfCAwMDAgLi4uIDAwMAogICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgfCAgICAxMjggYml0cwogICAgICAgICAgICBsZXQgbWFza19hIDo9IG5vdChzdWIoc2hsKDEyOCwgMSksIDEpKQogICAgICAgICAgICAvLyBTZXQgbGVmdCBtb3N0IDEyOCBiaXRzIHRvIDAKICAgICAgICAgICAgdiA6PSBhbmQodiwgbWFza19hKQogICAgICAgICAgICAvLyBTZXQgc19hID0gMQogICAgICAgICAgICB2IDo9IG9yKHYsIDExMSkKCiAgICAgICAgICAgIC8vIFNldCBzX2IgPSAyMjIKICAgICAgICAgICAgLy8gbWFzayA9IDExMS4uLjExMSB8IDAwMCAuLi4gMDAwIHwgMTExIC4uLiAxMTEKICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICB8ICAgICA2NCBiaXRzIHwgICAgMTI4IGJpdHMKICAgICAgICAgICAgbGV0IG1hc2tfYiA6PSBub3Qoc2hsKG11bChzX2Iub2Zmc2V0LCA4KSwgc3ViKHNobCg2NCwgMSksIDEpKSkKICAgICAgICAgICAgLy8gQ2xlYXIgcHJldmlvdXMgdmFsdWUgb2Ygc19iIGJ5IHNldHRpbmcgYml0cyAoMTI4IHRvIDE5MSBiaXRzKSB0byAwCiAgICAgICAgICAgIHYgOj0gYW5kKHYsIG1hc2tfYikKICAgICAgICAgICAgdiA6PSBvcih2LCBzaGwobXVsKHNfYi5vZmZzZXQsIDgpLCAyMjIpKQoKICAgICAgICAgICAgLy8gU2V0IHNfYyA9IDMzMwogICAgICAgICAgICAvLyBtYXNrID0gMTExLi4uMTExIHwgMDAwLi4uMDAwIHwgMTExIC4uLiAxMTEgfCAxMTEgLi4uIDExMQogICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgIHwgICAzMiBiaXRzIHwgICAgIDY0IGJpdHMgfCAgICAxMjggYml0cwogICAgICAgICAgICBsZXQgbWFza19jIDo9IG5vdChzaGwobXVsKHNfYy5vZmZzZXQsIDgpLCBzdWIoc2hsKDMyLCAxKSwgMSkpKQogICAgICAgICAgICAvLyBDbGVhciBwcmV2aW91cyB2YWx1ZSBvZiBzX2MgYnkgc2V0dGluZyBiaXRzICgxOTIgdG8gMjIzIGJpdHMpIHRvIDAKICAgICAgICAgICAgdiA6PSBhbmQodiwgbWFza19jKQogICAgICAgICAgICB2IDo9IG9yKHYsIHNobChtdWwoc19jLm9mZnNldCwgOCksIDMzMykpCgogICAgICAgICAgICAvLyBTZXQgc19kID0gNDQ0CiAgICAgICAgICAgIC8vIG1hc2sgPSAwMDAuLi4wMDAgfCAxMTEuLi4xMTEgfCAxMTEgLi4uIDExMSB8IDExMSAuLi4gMTExCiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgfCAgIDMyIGJpdHMgfCAgICAgNjQgYml0cyB8ICAgIDEyOCBiaXRzCiAgICAgICAgICAgIGxldCBtYXNrX2QgOj0gbm90KHNobChtdWwoc19kLm9mZnNldCwgOCksIHN1YihzaGwoMzIsIDEpLCAxKSkpCiAgICAgICAgICAgIC8vIENsZWFyIHByZXZpb3VzIHZhbHVlIG9mIHNfZCBieSBzZXR0aW5nIGJpdHMgKDIyNCB0byAyNTUgYml0cykgdG8gMAogICAgICAgICAgICB2IDo9IGFuZCh2LCBtYXNrX2QpCiAgICAgICAgICAgIHYgOj0gb3Iodiwgc2hsKG11bChzX2Qub2Zmc2V0LCA4KSwgNDQ0KSkKCiAgICAgICAgICAgIC8vIFN0b3JlIG5ldyB2YWx1ZSB0byBzbG90MAogICAgICAgICAgICBzc3RvcmUoc19hLnNsb3QsIHYpCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBFVk1TdG9yYWdlU3RydWN0IHsKICAgIHN0cnVjdCBTaW5nbGVTbG90IHsKICAgICAgICB1aW50MTI4IHg7CiAgICAgICAgdWludDY0IHk7CiAgICAgICAgdWludDY0IHo7CiAgICB9CgogICAgc3RydWN0IE11bHRpcGxlU2xvdHMgewogICAgICAgIHVpbnQyNTYgYTsKICAgICAgICB1aW50MjU2IGI7CiAgICAgICAgdWludDI1NiBjOwogICAgfQoKICAgIC8vIHNsb3QgMAogICAgU2luZ2xlU2xvdCBwdWJsaWMgc2luZ2xlID0gU2luZ2xlU2xvdCh7eDogMSwgeTogMiwgejogM30pOwogICAgLy8gc2xvdCAxLCAyLCAzCiAgICBNdWx0aXBsZVNsb3RzIHB1YmxpYyBtdWx0aSA9IE11bHRpcGxlU2xvdHMoe2E6IDExLCBiOiAyMiwgYzogMzN9KTsKCiAgICBmdW5jdGlvbiB0ZXN0X2dldF9zaW5nbGVfc2xvdF9zdHJ1Y3QoKQogICAgICAgIHB1YmxpYwogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MTI4IHgsIHVpbnQ2NCB5LCB1aW50NjQgeikKICAgIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxldCBzIDo9IHNsb2FkKDApCiAgICAgICAgICAgIC8vIGxlZnQgMTI4IGJpdHMgd2lsbCBiZSBjdXQgb2ZmIHdoZW4gY2FzdGVkIHRvIHVpbnQxMjgKICAgICAgICAgICAgeCA6PSBzCgogICAgICAgICAgICAvLyAwMDAgLi4uIDAwMCB8IDExMSAuLi4gMTExCiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHwgNjQgYml0cwogICAgICAgICAgICBsZXQgbWFza182NCA6PSBzdWIoc2hsKDY0LCAxKSwgMSkKCiAgICAgICAgICAgIHkgOj0gYW5kKG1hc2tfNjQsIHNocigxMjgsIHMpKQogICAgICAgICAgICB6IDo9IGFuZChtYXNrXzY0LCBzaHIoMTkyLCBzKSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9nZXRfbXVsdGlwbGVfc2xvdHNfc3RydWN0KCkKICAgICAgICBwdWJsaWMKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1NiBhLCB1aW50MjU2IGIsIHVpbnQyNTYgYykKICAgIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGEgOj0gc2xvYWQoMSkKICAgICAgICAgICAgYiA6PSBzbG9hZCgyKQogICAgICAgICAgICBjIDo9IHNsb2FkKDMpCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBFVk1TdG9yYWdlQ29uc3RhbnRzIHsKICAgIC8vIHNsb3QgMAogICAgdWludDI1NiBwdWJsaWMgczAgPSAxOwogICAgLy8gQ29uc3RhbnRzIGFuZCBpbW11dGFibGVzIGRvbid0IHVzZSBzdG9yYWdlCiAgICB1aW50MjU2IHB1YmxpYyBjb25zdGFudCBYID0gMTIzOwogICAgYWRkcmVzcyBwdWJsaWMgaW1tdXRhYmxlIG93bmVyOwogICAgLy8gc2xvdCAxCiAgICB1aW50MjU2IHB1YmxpYyBzMSA9IDI7CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfZ2V0X3Nsb3RzKCkgcHVibGljIHZpZXcgcmV0dXJucyAodWludDI1NiB2MCwgdWludDI1NiB2MSkgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgdjAgOj0gc2xvYWQoMCkKICAgICAgICAgICAgdjEgOj0gc2xvYWQoMSkKICAgICAgICB9CiAgICB9Cn0KCmNvbnRyYWN0IEVWTVN0b3JhZ2VGaXhlZEFycmF5IHsKICAgIC8vIEZpeGVkIGFycmF5IHdpdGggZWxlbWVudHMgPD0gMzIgYnl0ZXMsIHNsb3Qgb2YgZWxlbWVudCA9IHNsb3Qgd2hlcmUgYXJyYXkgaXMgZGVjbGFyZWQgKyBpbmRleCBvZiBhcnJheSBlbGVtZW50CiAgICAvLyBzbG90cyAwLCAxLCAyCiAgICB1aW50MjU2WzNdIHByaXZhdGUgYXJyXzAgPSBbMSwgMiwgM107CiAgICAvLyBzbG90cyAzLCA0LCA1CiAgICB1aW50MjU2WzNdIHByaXZhdGUgYXJyXzEgPSBbNCwgNSwgNl07CiAgICAvLyBzbG90ICsgaW5kZXggb2YgcGFja2VkIGRhdGEKICAgIC8vIHNsb3RzIDYsIDYsIDcsIDcsIDgKICAgIHVpbnQxMjhbNV0gcHJpdmF0ZSBhcnJfMiA9IFs3LCA4LCA5LCAxMCwgMTFdOwoKICAgIGZ1bmN0aW9uIHRlc3RfYXJyXzAodWludDI1NiBpKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2IHYpIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIGFycl8wIHN0YXJ0cyBmcm9tIHNsb3QgMAogICAgICAgICAgICB2IDo9IHNsb2FkKGFkZCgwLCBpKSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9hcnJfMSh1aW50MjU2IGkpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQyNTYgdikgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gYXJyXzEgc3RhcnRzIGZyb20gc2xvdCAzCiAgICAgICAgICAgIHYgOj0gc2xvYWQoYWRkKDMsIGkpKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X2Fycl8yKHVpbnQyNTYgaSkgcHVibGljIHZpZXcgcmV0dXJucyAodWludDEyOCB2KSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBhcnJfMiBzdGFydHMgZnJvbSBzbG90IDYKICAgICAgICAgICAgbGV0IGIzMiA6PSBzbG9hZChhZGQoNiwgZGl2KGksIDIpKSkKICAgICAgICAgICAgLy8gc2xvdCA2ID0gMXN0IGVsZW1lbnQgfCAwdGggZWxlbWVudAogICAgICAgICAgICAvLyBzbG90IDcgPSAzcmQgZWxlbWVudCB8IDJuZCBlbGVtZW50CiAgICAgICAgICAgIC8vIHNsb3QgOCA9IDAwMCAuLi4gMDAwIHwgNHRoIGVsZW1lbnQKCiAgICAgICAgICAgIC8vIGkgaXMgZXZlbiA9PiBnZXQgcmlnaHQgMTI4IGJpdHMgPT4gY2FzdCBieXRlczMyIHRvIHVpbnQxMjggKGN1dCBvZmYgbGVmdCAxMjggYml0cykKICAgICAgICAgICAgLy8gaSBpcyBvZGQgID0+IGdldCBsZWZ0IDEyOCBiaXRzICA9PiBzaGlmdCByaWdodCAxMjggYml0cwoKICAgICAgICAgICAgc3dpdGNoIG1vZChpLCAyKQogICAgICAgICAgICBjYXNlIDEgeyB2IDo9IHNocigxMjgsIGIzMikgfQogICAgICAgICAgICBkZWZhdWx0IHsgdiA6PSBiMzIgfQogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgRVZNU3RvcmFnZUR5bmFtaWNBcnJheSB7CiAgICAvLyBzbG90IG9mIGVsZW1lbnQgPSBrZWNjYWsyNTYoc2xvdCB3aGVyZSB0aGlzIGFycmF5IGlzIGRlY2xhcmVkKSArIGluZGV4IG9mIGVsZW1lbnQKICAgIC8vIGtlY2NhazI1NigwKSArIGluZGV4CiAgICB1aW50MjU2W10gcHJpdmF0ZSBhcnIgPSBbMTEsIDIyLCAzM107CgogICAgZnVuY3Rpb24gdGVzdF9hcnIodWludDI1NiBpKSBwdWJsaWMgdmlldyByZXR1cm5zICh1aW50MjU2IHYsIHVpbnQyNTYgbGVuKSB7CiAgICAgICAgdWludDI1NiBzbG90ID0gMDsKICAgICAgICBieXRlczMyIHN0YXJ0ID0ga2VjY2FrMjU2KGFiaS5lbmNvZGUoc2xvdCkpOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxlbiA6PSBzbG9hZChzbG90KQogICAgICAgICAgICB2IDo9IHNsb2FkKGFkZChzdGFydCwgaSkpCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBFVk1TdG9yYWdlTWFwcGluZyB7CiAgICAvLyBzbG90IG9mIHZhbHVlID0ga2VjY2FjazI1NihrZXksIHNsb3Qgd2hlcmUgbWFwcGluZyBpcyBkZWNsYXJlZCkKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2KSBwdWJsaWMgbWFwOwoKICAgIGFkZHJlc3MgcHVibGljIGNvbnN0YW50IEFERFJfMSA9IGFkZHJlc3MoMSk7CiAgICBhZGRyZXNzIHB1YmxpYyBjb25zdGFudCBBRERSXzIgPSBhZGRyZXNzKDIpOwogICAgYWRkcmVzcyBwdWJsaWMgY29uc3RhbnQgQUREUl8zID0gYWRkcmVzcygzKTsKCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgICBtYXBbQUREUl8xXSA9IDExOwogICAgICAgIG1hcFtBRERSXzJdID0gMjI7CiAgICAgICAgbWFwW0FERFJfM10gPSAzMzsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X21hcHBpbmcoYWRkcmVzcyBrZXkpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQyNTYgdikgewogICAgICAgIHVpbnQyNTYgc2xvdCA9IDA7CiAgICAgICAgYnl0ZXMzMiBzbG90X3YgPSBrZWNjYWsyNTYoYWJpLmVuY29kZShrZXksIHNsb3QpKTsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICB2IDo9IHNsb2FkKHNsb3RfdikKICAgICAgICB9CiAgICB9Cn0KCmNvbnRyYWN0IEVWTVN0b3JhZ2VOZXN0ZWRNYXBwaW5nIHsKICAgIC8vIGtleTAgPT4ga2V5MSA9PiB2YWwKICAgIC8vIHNsb3Qgb2YgdmFsdWUgPSBrZWNjYWsyNTYoa2V5MSwga2VjY2FjazI1NihrZXkwLCBzbG90IHdoZXJlIG5lc3RlZCBtYXBwaW5nIGlzIGRlY2xhcmVkKSkKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBtYXBwaW5nKGFkZHJlc3MgPT4gdWludDI1NikpIHB1YmxpYyBtYXA7CgogICAgYWRkcmVzcyBwdWJsaWMgY29uc3RhbnQgQUREUl8xID0gYWRkcmVzcygxKTsKICAgIGFkZHJlc3MgcHVibGljIGNvbnN0YW50IEFERFJfMiA9IGFkZHJlc3MoMik7CiAgICBhZGRyZXNzIHB1YmxpYyBjb25zdGFudCBBRERSXzMgPSBhZGRyZXNzKDMpOwoKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICAgIG1hcFtBRERSXzFdW0FERFJfMl0gPSAxMTsKICAgICAgICBtYXBbQUREUl8yXVtBRERSXzNdID0gMjI7CiAgICAgICAgbWFwW0FERFJfM11bQUREUl8xXSA9IDMzOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfbmVzdGVkX21hcHBpbmcoYWRkcmVzcyBrZXlfMCwgYWRkcmVzcyBrZXlfMSkKICAgICAgICBwdWJsaWMKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1NiB2KQogICAgewogICAgICAgIHVpbnQyNTYgc2xvdCA9IDA7CiAgICAgICAgYnl0ZXMzMiBzMCA9IGtlY2NhazI1NihhYmkuZW5jb2RlKGtleV8wLCBzbG90KSk7CiAgICAgICAgYnl0ZXMzMiBzMSA9IGtlY2NhazI1NihhYmkuZW5jb2RlKGtleV8xLCBzMCkpOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIHYgOj0gc2xvYWQoczEpCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBFVk1TdG9yYWdlTWFwcGluZ0FycmF5IHsKICAgIC8vIHNsb3Qgb2YgdmFsdWUgaW4gYSBtYXBwaW5nID0ga2VjY2FrMjU2KGtleSwgc2xvdCkKICAgIC8vIHNsb3Qgb2YgYXJyYXkgZWxlbWVudCA9IGtlY2NhazI1NihzbG90KSArIGluZGV4CiAgICAvLyBtYXBwaW5nIC0+IGFycmF5IC0+IGtlY2NhazI1NihrZWNjYWsyNTYoa2V5LCBzbG90IG9mIG1hcCBkZWNsYXJhdGlvbikpICsgaW5kZXgKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50MjU2W10pIHB1YmxpYyBtYXA7CgogICAgYWRkcmVzcyBwdWJsaWMgY29uc3RhbnQgQUREUl8xID0gYWRkcmVzcygxKTsKICAgIGFkZHJlc3MgcHVibGljIGNvbnN0YW50IEFERFJfMiA9IGFkZHJlc3MoMik7CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgbWFwW0FERFJfMV0ucHVzaCgxMSk7CiAgICAgICAgbWFwW0FERFJfMV0ucHVzaCgyMik7CiAgICAgICAgbWFwW0FERFJfMV0ucHVzaCgzMyk7CiAgICAgICAgbWFwW0FERFJfMl0ucHVzaCg0NCk7CiAgICAgICAgbWFwW0FERFJfMl0ucHVzaCg1NSk7CiAgICAgICAgbWFwW0FERFJfMl0ucHVzaCg2Nik7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9tYXBfYXJyKGFkZHJlc3MgYWRkciwgdWludDI1NiBpKQogICAgICAgIHB1YmxpYwogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2IHYsIHVpbnQyNTYgbGVuKQogICAgewogICAgICAgIHVpbnQyNTYgbWFwX3Nsb3QgPSAwOwogICAgICAgIGJ5dGVzMzIgbWFwX2hhc2ggPSBrZWNjYWsyNTYoYWJpLmVuY29kZShhZGRyLCBtYXBfc2xvdCkpOwogICAgICAgIGJ5dGVzMzIgYXJyX2hhc2ggPSBrZWNjYWsyNTYoYWJpLmVuY29kZShtYXBfaGFzaCkpOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxlbiA6PSBzbG9hZChtYXBfaGFzaCkKICAgICAgICAgICAgdiA6PSBzbG9hZChhZGQoYXJyX2hhc2gsIGkpKQogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgRVZNU3RvcmFnZUR5bmFtaWNBcnJheVN0cnVjdCB7CiAgICBzdHJ1Y3QgUG9pbnQgewogICAgICAgIHVpbnQyNTYgeDsKICAgICAgICB1aW50MTI4IHk7CiAgICAgICAgdWludDEyOCB6OwogICAgfQoKICAgIC8vIHNsb3Qgb2YgZWxlbWVudCA9IGtlY2NhazI1NihzbG90IHdoZXJlIHRoaXMgYXJyYXkgaXMgZGVjbGFyZWQpICsgaW5kZXggb2YgZWxlbWVudAogICAgLy8ga2VjY2FrMjU2KDApICsgaW5kZXggKiBzaXplIG9mIHN0cnVjdAogICAgUG9pbnRbXSBwcml2YXRlIGFycjsKCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgICBhcnIucHVzaChQb2ludCgxMSwgMjIsIDMzKSk7CiAgICAgICAgYXJyLnB1c2goUG9pbnQoNDQsIDU1LCA2NikpOwogICAgICAgIGFyci5wdXNoKFBvaW50KDc3LCA4OCwgOTkpKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3N0cnVjdF9hcnIodWludDI1NiBpKQogICAgICAgIHB1YmxpYwogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2IHgsIHVpbnQxMjggeSwgdWludDEyOCB6LCB1aW50MjU2IGxlbikKICAgIHsKICAgICAgICB1aW50MjU2IHNsb3QgPSAwOwogICAgICAgIGJ5dGVzMzIgc3RhcnQgPSBrZWNjYWsyNTYoYWJpLmVuY29kZShzbG90KSk7CgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbGVuIDo9IHNsb2FkKHNsb3QpCiAgICAgICAgICAgIC8vIHMwID0ga2VjY2FrMjU2KDApCiAgICAgICAgICAgIC8vIGluZGV4IHwgc2xvdCAgICAgICAgfCB2YWx1ZXMKICAgICAgICAgICAgLy8gICAgIDAgfCBzbG90IHMwICsgMCB8IGFyclswXS54CiAgICAgICAgICAgIC8vICAgICAwIHwgc2xvdCBzMCArIDEgfCBhcnJbMF0ueiB8IGFyclswXS55CiAgICAgICAgICAgIC8vICAgICAxIHwgc2xvdCBzMCArIDIgfCBhcnJbMV0ueAogICAgICAgICAgICAvLyAgICAgMSB8IHNsb3QgczAgKyAzIHwgYXJyWzFdLnogfCBhcnJbMV0ueQogICAgICAgICAgICAvLyAgICAgMiB8IHNsb3QgczAgKyA0IHwgYXJyWzJdLngKICAgICAgICAgICAgLy8gICAgIDIgfCBzbG90IHMwICsgNSB8IGFyclsyXS56IHwgYXJyWzJdLnkKICAgICAgICAgICAgeCA6PSBzbG9hZChhZGQoc3RhcnQsIG11bChpLCAyKSkpCiAgICAgICAgICAgIGxldCB6eSA6PSBzbG9hZChhZGQoc3RhcnQsIGFkZChtdWwoaSwgMiksIDEpKSkKICAgICAgICAgICAgLy8gdWludDEyOCBjdXRzIG9mZiBsZWZ0IG1vc3QgMTI4IGJpdHMgZnJvbSAzMiBieXRlcwogICAgICAgICAgICB5IDo9IHp5CiAgICAgICAgICAgIHogOj0gc2hyKDEyOCwgenkpCiAgICAgICAgfQogICAgfQp9Cg==",
  },
]

const html = `<p>Examples of</p>
<ul>
<li>Reading and writing to storage with <code>assembly</code></li>
<li>Storage layout of different data types</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-comment">// Yul - language used for Solidity inline assembly</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">YulIntro</span> </span>{
    <span class="hljs-comment">// Yul assignment</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_yul_var</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">uint256</span> s <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Declare variable</span>
            <span class="hljs-keyword">let</span> x <span class="hljs-operator">:=</span> <span class="hljs-number">1</span>
            <span class="hljs-comment">// Reassign</span>
            x <span class="hljs-operator">:=</span> <span class="hljs-number">2</span>
            <span class="hljs-comment">// Assign to Solidity variable</span>
            s <span class="hljs-operator">:=</span> <span class="hljs-number">2</span>
        }

        <span class="hljs-keyword">return</span> s;
    }

    <span class="hljs-comment">// Yul types (everything is bytes32)</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_yul_types</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span> x, <span class="hljs-keyword">uint256</span> y, <span class="hljs-keyword">bytes32</span> z</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            x <span class="hljs-operator">:=</span> <span class="hljs-number">1</span>
            y <span class="hljs-operator">:=</span> <span class="hljs-number">0xaaa</span>
            z <span class="hljs-operator">:=</span> <span class="hljs-string">"Hello Yul"</span>
        }

        <span class="hljs-keyword">return</span> (x, y, z);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStorageSingleSlot</span> </span>{
    <span class="hljs-comment">// EVM storage</span>
    <span class="hljs-comment">// 2**256 slots, each slot can store up to 32 bytes</span>
    <span class="hljs-comment">// Slots are assigned in the order the state variables are declared</span>
    <span class="hljs-comment">// Data &lt; 32 bytes are packed into a slot (right to left)</span>
    <span class="hljs-comment">// sstore(k, v) = store v to slot k</span>
    <span class="hljs-comment">// sload(k) = load 32 bytes from slot k</span>

    <span class="hljs-comment">// Single variable stored in one slot</span>
    <span class="hljs-comment">// slot 0</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> s_x;
    <span class="hljs-comment">// slot 1</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> s_y;
    <span class="hljs-comment">// slot 2</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> s_z;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_sstore</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">sstore</span>(<span class="hljs-number">0</span>, <span class="hljs-number">111</span>)
            <span class="hljs-built_in">sstore</span>(<span class="hljs-number">1</span>, <span class="hljs-number">222</span>)
            <span class="hljs-built_in">sstore</span>(<span class="hljs-number">2</span>, <span class="hljs-number">0xababab</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_sstore_again</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Access slot using .slot</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">sstore</span>(s_x.<span class="hljs-built_in">slot</span>, <span class="hljs-number">123</span>)
            <span class="hljs-built_in">sstore</span>(s_y.<span class="hljs-built_in">slot</span>, <span class="hljs-number">456</span>)
            <span class="hljs-built_in">sstore</span>(s_z.<span class="hljs-built_in">slot</span>, <span class="hljs-number">0xcdcdcd</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_sload</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y, <span class="hljs-keyword">bytes32</span> z</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">0</span>)
            y <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">1</span>)
            z <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">2</span>)
        }

        <span class="hljs-keyword">return</span> (x, y, z);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_sload_again</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y, <span class="hljs-keyword">bytes32</span> z</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(s_x.<span class="hljs-built_in">slot</span>)
            y <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(s_y.<span class="hljs-built_in">slot</span>)
            z <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(s_z.<span class="hljs-built_in">slot</span>)
        }

        <span class="hljs-keyword">return</span> (x, y, z);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStoratePackedSlotBytes</span> </span>{
    <span class="hljs-comment">// slot 0 (packed right to left)</span>
    <span class="hljs-keyword">bytes4</span> <span class="hljs-keyword">public</span> b4 <span class="hljs-operator">=</span> <span class="hljs-number">0xabababab</span>;
    <span class="hljs-keyword">bytes2</span> <span class="hljs-keyword">public</span> b2 <span class="hljs-operator">=</span> <span class="hljs-number">0xcdcd</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> b32</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            b32 <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">0</span>)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BitMasking</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_mask</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> mask</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// |       256 bits        |</span>
            <span class="hljs-comment">// 000 ... 000 | 111 ... 111</span>
            <span class="hljs-comment">//             | 16 bits</span>
            <span class="hljs-comment">// 0x000000000000000000000000000000000000000000000000000000000000ffff</span>
            mask <span class="hljs-operator">:=</span> <span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">16</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_shift_mask</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> mask</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// |               256 bits                |</span>
            <span class="hljs-comment">// 000 ... 000 | 111 ... 111 | 000 ... 000 |</span>
            <span class="hljs-comment">//             | 16 bits     | 32 bits</span>
            <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000ffff00000000</span>
            mask <span class="hljs-operator">:=</span> <span class="hljs-built_in">shl</span>(<span class="hljs-number">32</span>, <span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">16</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>))
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_not_mask</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> mask</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// |               256 bits                |</span>
            <span class="hljs-comment">// 111 ... 111 | 000 ... 000 | 111 ... 111 |</span>
            <span class="hljs-comment">//             | 16 bits     | 32 bits</span>
            <span class="hljs-comment">// 0xffffffffffffffffffffffffffffffffffffffffffffffffffff0000ffffffff</span>
            mask <span class="hljs-operator">:=</span> <span class="hljs-built_in">not</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">32</span>, <span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">16</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>)))
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStoragePackedSlot</span> </span>{
    <span class="hljs-comment">// Data &lt; 32 bytes are packed into a slot</span>
    <span class="hljs-comment">// Bit masking (how to create 111...111)</span>
    <span class="hljs-comment">// slot, offset</span>

    <span class="hljs-comment">// slot 0</span>
    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> s_a;
    <span class="hljs-keyword">uint64</span> <span class="hljs-keyword">public</span> s_b;
    <span class="hljs-keyword">uint32</span> <span class="hljs-keyword">public</span> s_c;
    <span class="hljs-keyword">uint32</span> <span class="hljs-keyword">public</span> s_d;
    <span class="hljs-comment">// slot 1</span>
    <span class="hljs-comment">// 20 bytes = 160 bits</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> s_addr;
    <span class="hljs-comment">// 96 bits</span>
    <span class="hljs-keyword">uint64</span> <span class="hljs-keyword">public</span> s_x;
    <span class="hljs-keyword">uint32</span> <span class="hljs-keyword">public</span> s_y;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_sstore</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Load 32 bytes from slot0</span>
            <span class="hljs-keyword">let</span> v <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">0</span>)

            <span class="hljs-comment">// s_d | s_c | s_b | s_a</span>
            <span class="hljs-comment">// 32  | 32  | 64  | 128 bits</span>

            <span class="hljs-comment">// Set s_a = 11</span>
            <span class="hljs-comment">// mask = all 1s at and to the left of 128 bit counting from right</span>
            <span class="hljs-comment">//        111 ... 111 | 000 ... 000</span>
            <span class="hljs-comment">//                    |    128 bits</span>
            <span class="hljs-keyword">let</span> mask_a <span class="hljs-operator">:=</span> <span class="hljs-built_in">not</span>(<span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">128</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>))
            <span class="hljs-comment">// Set left most 128 bits to 0</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">and</span>(v, mask_a)
            <span class="hljs-comment">// Set s_a = 1</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(v, <span class="hljs-number">11</span>)

            <span class="hljs-comment">// Set s_b = 22</span>
            <span class="hljs-comment">// mask = 111...111 | 000 ... 000 | 111 ... 111</span>
            <span class="hljs-comment">//                  |     64 bits |    128 bits</span>
            <span class="hljs-keyword">let</span> mask_b <span class="hljs-operator">:=</span> <span class="hljs-built_in">not</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">128</span>, <span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">64</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>)))
            <span class="hljs-comment">// Clear previous value of s_b by setting bits (128 to 191 bits) to 0</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">and</span>(v, mask_b)
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(v, <span class="hljs-built_in">shl</span>(<span class="hljs-number">128</span>, <span class="hljs-number">22</span>))

            <span class="hljs-comment">// Set s_c = 33</span>
            <span class="hljs-comment">// mask = 111...111 | 000...000 | 111 ... 111 | 111 ... 111</span>
            <span class="hljs-comment">//                  |   32 bits |     64 bits |    128 bits</span>
            <span class="hljs-keyword">let</span> mask_c <span class="hljs-operator">:=</span> <span class="hljs-built_in">not</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">192</span>, <span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">32</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>)))
            <span class="hljs-comment">// Clear previous value of s_c by setting bits (192 to 223 bits) to 0</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">and</span>(v, mask_c)
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(v, <span class="hljs-built_in">shl</span>(<span class="hljs-number">192</span>, <span class="hljs-number">33</span>))

            <span class="hljs-comment">// Set s_d = 44</span>
            <span class="hljs-comment">// mask = 000...000 | 111...111 | 111 ... 111 | 111 ... 111</span>
            <span class="hljs-comment">//                  |   32 bits |     64 bits |    128 bits</span>
            <span class="hljs-keyword">let</span> mask_d <span class="hljs-operator">:=</span> <span class="hljs-built_in">not</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">224</span>, <span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">32</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>)))
            <span class="hljs-comment">// Clear previous value of s_d by setting bits (224 to 255 bits) to 0</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">and</span>(v, mask_d)
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(v, <span class="hljs-built_in">shl</span>(<span class="hljs-number">224</span>, <span class="hljs-number">44</span>))

            <span class="hljs-comment">// Store new value to slot0</span>
            <span class="hljs-built_in">sstore</span>(<span class="hljs-number">0</span>, v)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_slot_0_offset</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint256</span> a_offset,
            <span class="hljs-keyword">uint256</span> b_offset,
            <span class="hljs-keyword">uint256</span> c_offset,
            <span class="hljs-keyword">uint256</span> d_offset
        </span>)
    </span>{
        <span class="hljs-comment">// a_offset =  0 =  0 * 8 =   0 bits</span>
        <span class="hljs-comment">// b_offset = 16 = 16 * 8 = 128 bits</span>
        <span class="hljs-comment">// c_offset = 24 = 24 * 8 = 192 bits</span>
        <span class="hljs-comment">// d_offset = 28 = 28 * 8 = 224 bits</span>
        <span class="hljs-keyword">assembly</span> {
            a_<span class="hljs-built_in">offset</span> <span class="hljs-operator">:=</span> s_a.<span class="hljs-built_in">offset</span>
            b_<span class="hljs-built_in">offset</span> <span class="hljs-operator">:=</span> s_b.<span class="hljs-built_in">offset</span>
            c_<span class="hljs-built_in">offset</span> <span class="hljs-operator">:=</span> s_c.<span class="hljs-built_in">offset</span>
            d_<span class="hljs-built_in">offset</span> <span class="hljs-operator">:=</span> s_d.<span class="hljs-built_in">offset</span>
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_slot_1_offset</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> addr_offset, <span class="hljs-keyword">uint256</span> x_offset, <span class="hljs-keyword">uint256</span> y_offset</span>)
    </span>{
        <span class="hljs-comment">// addr_offset = 0</span>
        <span class="hljs-comment">// x_offset = 20</span>
        <span class="hljs-comment">// y_offset = 28</span>
        <span class="hljs-keyword">assembly</span> {
            addr_<span class="hljs-built_in">offset</span> <span class="hljs-operator">:=</span> s_addr.<span class="hljs-built_in">offset</span>
            x_<span class="hljs-built_in">offset</span> <span class="hljs-operator">:=</span> s_x.<span class="hljs-built_in">offset</span>
            y_<span class="hljs-built_in">offset</span> <span class="hljs-operator">:=</span> s_y.<span class="hljs-built_in">offset</span>
        }
    }

    <span class="hljs-comment">// slot and offset</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_sstore_using_offset</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// a_offset =  0 =  0 * 8 =   0 bits</span>
        <span class="hljs-comment">// b_offset = 16 = 16 * 8 = 128 bits</span>
        <span class="hljs-comment">// c_offset = 24 = 24 * 8 = 192 bits</span>
        <span class="hljs-comment">// d_offset = 28 = 28 * 8 = 224 bits</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Load 32 bytes from slot0</span>
            <span class="hljs-keyword">let</span> v <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(s_a.<span class="hljs-built_in">slot</span>)

            <span class="hljs-comment">// s_d | s_c | s_b | s_a</span>
            <span class="hljs-comment">// 32  | 32  | 64  | 128 bits</span>

            <span class="hljs-comment">// Set s_a = 111</span>
            <span class="hljs-comment">// mask = all 1s at and to the left of 128 bit counting from right</span>
            <span class="hljs-comment">//        111 ... 111 | 000 ... 000</span>
            <span class="hljs-comment">//                    |    128 bits</span>
            <span class="hljs-keyword">let</span> mask_a <span class="hljs-operator">:=</span> <span class="hljs-built_in">not</span>(<span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">128</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>))
            <span class="hljs-comment">// Set left most 128 bits to 0</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">and</span>(v, mask_a)
            <span class="hljs-comment">// Set s_a = 1</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(v, <span class="hljs-number">111</span>)

            <span class="hljs-comment">// Set s_b = 222</span>
            <span class="hljs-comment">// mask = 111...111 | 000 ... 000 | 111 ... 111</span>
            <span class="hljs-comment">//                  |     64 bits |    128 bits</span>
            <span class="hljs-keyword">let</span> mask_b <span class="hljs-operator">:=</span> <span class="hljs-built_in">not</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-built_in">mul</span>(s_b.<span class="hljs-built_in">offset</span>, <span class="hljs-number">8</span>), <span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">64</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>)))
            <span class="hljs-comment">// Clear previous value of s_b by setting bits (128 to 191 bits) to 0</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">and</span>(v, mask_b)
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(v, <span class="hljs-built_in">shl</span>(<span class="hljs-built_in">mul</span>(s_b.<span class="hljs-built_in">offset</span>, <span class="hljs-number">8</span>), <span class="hljs-number">222</span>))

            <span class="hljs-comment">// Set s_c = 333</span>
            <span class="hljs-comment">// mask = 111...111 | 000...000 | 111 ... 111 | 111 ... 111</span>
            <span class="hljs-comment">//                  |   32 bits |     64 bits |    128 bits</span>
            <span class="hljs-keyword">let</span> mask_c <span class="hljs-operator">:=</span> <span class="hljs-built_in">not</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-built_in">mul</span>(s_c.<span class="hljs-built_in">offset</span>, <span class="hljs-number">8</span>), <span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">32</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>)))
            <span class="hljs-comment">// Clear previous value of s_c by setting bits (192 to 223 bits) to 0</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">and</span>(v, mask_c)
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(v, <span class="hljs-built_in">shl</span>(<span class="hljs-built_in">mul</span>(s_c.<span class="hljs-built_in">offset</span>, <span class="hljs-number">8</span>), <span class="hljs-number">333</span>))

            <span class="hljs-comment">// Set s_d = 444</span>
            <span class="hljs-comment">// mask = 000...000 | 111...111 | 111 ... 111 | 111 ... 111</span>
            <span class="hljs-comment">//                  |   32 bits |     64 bits |    128 bits</span>
            <span class="hljs-keyword">let</span> mask_d <span class="hljs-operator">:=</span> <span class="hljs-built_in">not</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-built_in">mul</span>(s_d.<span class="hljs-built_in">offset</span>, <span class="hljs-number">8</span>), <span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">32</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>)))
            <span class="hljs-comment">// Clear previous value of s_d by setting bits (224 to 255 bits) to 0</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">and</span>(v, mask_d)
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(v, <span class="hljs-built_in">shl</span>(<span class="hljs-built_in">mul</span>(s_d.<span class="hljs-built_in">offset</span>, <span class="hljs-number">8</span>), <span class="hljs-number">444</span>))

            <span class="hljs-comment">// Store new value to slot0</span>
            <span class="hljs-built_in">sstore</span>(s_a.<span class="hljs-built_in">slot</span>, v)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStorageStruct</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">SingleSlot</span> {
        <span class="hljs-keyword">uint128</span> x;
        <span class="hljs-keyword">uint64</span> y;
        <span class="hljs-keyword">uint64</span> z;
    }

    <span class="hljs-keyword">struct</span> <span class="hljs-title">MultipleSlots</span> {
        <span class="hljs-keyword">uint256</span> a;
        <span class="hljs-keyword">uint256</span> b;
        <span class="hljs-keyword">uint256</span> c;
    }

    <span class="hljs-comment">// slot 0</span>
    SingleSlot <span class="hljs-keyword">public</span> single <span class="hljs-operator">=</span> SingleSlot({x: <span class="hljs-number">1</span>, y: <span class="hljs-number">2</span>, z: <span class="hljs-number">3</span>});
    <span class="hljs-comment">// slot 1, 2, 3</span>
    MultipleSlots <span class="hljs-keyword">public</span> multi <span class="hljs-operator">=</span> MultipleSlots({a: <span class="hljs-number">11</span>, b: <span class="hljs-number">22</span>, c: <span class="hljs-number">33</span>});

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_get_single_slot_struct</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint128</span> x, <span class="hljs-keyword">uint64</span> y, <span class="hljs-keyword">uint64</span> z</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> s <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">0</span>)
            <span class="hljs-comment">// left 128 bits will be cut off when casted to uint128</span>
            x <span class="hljs-operator">:=</span> s

            <span class="hljs-comment">// 000 ... 000 | 111 ... 111</span>
            <span class="hljs-comment">//             | 64 bits</span>
            <span class="hljs-keyword">let</span> mask_64 <span class="hljs-operator">:=</span> <span class="hljs-built_in">sub</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">64</span>, <span class="hljs-number">1</span>), <span class="hljs-number">1</span>)

            y <span class="hljs-operator">:=</span> <span class="hljs-built_in">and</span>(mask_64, <span class="hljs-built_in">shr</span>(<span class="hljs-number">128</span>, s))
            z <span class="hljs-operator">:=</span> <span class="hljs-built_in">and</span>(mask_64, <span class="hljs-built_in">shr</span>(<span class="hljs-number">192</span>, s))
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_get_multiple_slots_struct</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> a, <span class="hljs-keyword">uint256</span> b, <span class="hljs-keyword">uint256</span> c</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            a <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">1</span>)
            b <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">2</span>)
            c <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">3</span>)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStorageConstants</span> </span>{
    <span class="hljs-comment">// slot 0</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> s0 <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    <span class="hljs-comment">// Constants and immutables don&#x27;t use storage</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> X <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> owner;
    <span class="hljs-comment">// slot 1</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> s1 <span class="hljs-operator">=</span> <span class="hljs-number">2</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_get_slots</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> v0, <span class="hljs-keyword">uint256</span> v1</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            v0 <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">0</span>)
            v1 <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-number">1</span>)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStorageFixedArray</span> </span>{
    <span class="hljs-comment">// Fixed array with elements &lt;= 32 bytes, slot of element = slot where array is declared + index of array element</span>
    <span class="hljs-comment">// slots 0, 1, 2</span>
    <span class="hljs-keyword">uint256</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">private</span> arr_0 <span class="hljs-operator">=</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
    <span class="hljs-comment">// slots 3, 4, 5</span>
    <span class="hljs-keyword">uint256</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">private</span> arr_1 <span class="hljs-operator">=</span> [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>];
    <span class="hljs-comment">// slot + index of packed data</span>
    <span class="hljs-comment">// slots 6, 6, 7, 7, 8</span>
    <span class="hljs-keyword">uint128</span>[<span class="hljs-number">5</span>] <span class="hljs-keyword">private</span> arr_2 <span class="hljs-operator">=</span> [<span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>];

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_arr_0</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> v</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// arr_0 starts from slot 0</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">0</span>, i))
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_arr_1</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> v</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// arr_1 starts from slot 3</span>
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">3</span>, i))
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_arr_2</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint128</span> v</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// arr_2 starts from slot 6</span>
            <span class="hljs-keyword">let</span> b32 <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">6</span>, <span class="hljs-built_in">div</span>(i, <span class="hljs-number">2</span>)))
            <span class="hljs-comment">// slot 6 = 1st element | 0th element</span>
            <span class="hljs-comment">// slot 7 = 3rd element | 2nd element</span>
            <span class="hljs-comment">// slot 8 = 000 ... 000 | 4th element</span>

            <span class="hljs-comment">// i is even =&gt; get right 128 bits =&gt; cast bytes32 to uint128 (cut off left 128 bits)</span>
            <span class="hljs-comment">// i is odd  =&gt; get left 128 bits  =&gt; shift right 128 bits</span>

            <span class="hljs-keyword">switch</span> <span class="hljs-built_in">mod</span>(i, <span class="hljs-number">2</span>)
            <span class="hljs-keyword">case</span> <span class="hljs-number">1</span> { v <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(<span class="hljs-number">128</span>, b32) }
            <span class="hljs-keyword">default</span> { v <span class="hljs-operator">:=</span> b32 }
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStorageDynamicArray</span> </span>{
    <span class="hljs-comment">// slot of element = keccak256(slot where this array is declared) + index of element</span>
    <span class="hljs-comment">// keccak256(0) + index</span>
    <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">private</span> arr <span class="hljs-operator">=</span> [<span class="hljs-number">11</span>, <span class="hljs-number">22</span>, <span class="hljs-number">33</span>];

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_arr</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> i</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> v, <span class="hljs-keyword">uint256</span> len</span>) </span>{
        <span class="hljs-keyword">uint256</span> slot <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">bytes32</span> start <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(slot));

        <span class="hljs-keyword">assembly</span> {
            len <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(slot)
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-built_in">add</span>(start, i))
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStorageMapping</span> </span>{
    <span class="hljs-comment">// slot of value = keccack256(key, slot where mapping is declared)</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> map;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> ADDR_1 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> ADDR_2 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">2</span>);
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> ADDR_3 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">3</span>);

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        map[ADDR_1] <span class="hljs-operator">=</span> <span class="hljs-number">11</span>;
        map[ADDR_2] <span class="hljs-operator">=</span> <span class="hljs-number">22</span>;
        map[ADDR_3] <span class="hljs-operator">=</span> <span class="hljs-number">33</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_mapping</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> key</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> v</span>) </span>{
        <span class="hljs-keyword">uint256</span> slot <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">bytes32</span> slot_v <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(key, slot));

        <span class="hljs-keyword">assembly</span> {
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(slot_v)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStorageNestedMapping</span> </span>{
    <span class="hljs-comment">// key0 =&gt; key1 =&gt; val</span>
    <span class="hljs-comment">// slot of value = keccak256(key1, keccack256(key0, slot where nested mapping is declared))</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>)) <span class="hljs-keyword">public</span> map;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> ADDR_1 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> ADDR_2 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">2</span>);
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> ADDR_3 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">3</span>);

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        map[ADDR_1][ADDR_2] <span class="hljs-operator">=</span> <span class="hljs-number">11</span>;
        map[ADDR_2][ADDR_3] <span class="hljs-operator">=</span> <span class="hljs-number">22</span>;
        map[ADDR_3][ADDR_1] <span class="hljs-operator">=</span> <span class="hljs-number">33</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_nested_mapping</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> key_0, <span class="hljs-keyword">address</span> key_1</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> v</span>)
    </span>{
        <span class="hljs-keyword">uint256</span> slot <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">bytes32</span> s0 <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(key_0, slot));
        <span class="hljs-keyword">bytes32</span> s1 <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(key_1, s0));

        <span class="hljs-keyword">assembly</span> {
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(s1)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStorageMappingArray</span> </span>{
    <span class="hljs-comment">// slot of value in a mapping = keccak256(key, slot)</span>
    <span class="hljs-comment">// slot of array element = keccak256(slot) + index</span>
    <span class="hljs-comment">// mapping -&gt; array -&gt; keccak256(keccak256(key, slot of map declaration)) + index</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>[]) <span class="hljs-keyword">public</span> map;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> ADDR_1 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> ADDR_2 <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">2</span>);

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        map[ADDR_1].<span class="hljs-built_in">push</span>(<span class="hljs-number">11</span>);
        map[ADDR_1].<span class="hljs-built_in">push</span>(<span class="hljs-number">22</span>);
        map[ADDR_1].<span class="hljs-built_in">push</span>(<span class="hljs-number">33</span>);
        map[ADDR_2].<span class="hljs-built_in">push</span>(<span class="hljs-number">44</span>);
        map[ADDR_2].<span class="hljs-built_in">push</span>(<span class="hljs-number">55</span>);
        map[ADDR_2].<span class="hljs-built_in">push</span>(<span class="hljs-number">66</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_map_arr</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> addr, <span class="hljs-keyword">uint256</span> i</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> v, <span class="hljs-keyword">uint256</span> len</span>)
    </span>{
        <span class="hljs-keyword">uint256</span> map_slot <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">bytes32</span> map_hash <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(addr, map_slot));
        <span class="hljs-keyword">bytes32</span> arr_hash <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(map_hash));

        <span class="hljs-keyword">assembly</span> {
            len <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(map_hash)
            v <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-built_in">add</span>(arr_hash, i))
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EVMStorageDynamicArrayStruct</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Point</span> {
        <span class="hljs-keyword">uint256</span> x;
        <span class="hljs-keyword">uint128</span> y;
        <span class="hljs-keyword">uint128</span> z;
    }

    <span class="hljs-comment">// slot of element = keccak256(slot where this array is declared) + index of element</span>
    <span class="hljs-comment">// keccak256(0) + index * size of struct</span>
    Point[] <span class="hljs-keyword">private</span> arr;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        arr.<span class="hljs-built_in">push</span>(Point(<span class="hljs-number">11</span>, <span class="hljs-number">22</span>, <span class="hljs-number">33</span>));
        arr.<span class="hljs-built_in">push</span>(Point(<span class="hljs-number">44</span>, <span class="hljs-number">55</span>, <span class="hljs-number">66</span>));
        arr.<span class="hljs-built_in">push</span>(Point(<span class="hljs-number">77</span>, <span class="hljs-number">88</span>, <span class="hljs-number">99</span>));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_struct_arr</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> i</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint128</span> y, <span class="hljs-keyword">uint128</span> z, <span class="hljs-keyword">uint256</span> len</span>)
    </span>{
        <span class="hljs-keyword">uint256</span> slot <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">bytes32</span> start <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(slot));

        <span class="hljs-keyword">assembly</span> {
            len <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(slot)
            <span class="hljs-comment">// s0 = keccak256(0)</span>
            <span class="hljs-comment">// index | slot        | values</span>
            <span class="hljs-comment">//     0 | slot s0 + 0 | arr[0].x</span>
            <span class="hljs-comment">//     0 | slot s0 + 1 | arr[0].z | arr[0].y</span>
            <span class="hljs-comment">//     1 | slot s0 + 2 | arr[1].x</span>
            <span class="hljs-comment">//     1 | slot s0 + 3 | arr[1].z | arr[1].y</span>
            <span class="hljs-comment">//     2 | slot s0 + 4 | arr[2].x</span>
            <span class="hljs-comment">//     2 | slot s0 + 5 | arr[2].z | arr[2].y</span>
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-built_in">add</span>(start, <span class="hljs-built_in">mul</span>(i, <span class="hljs-number">2</span>)))
            <span class="hljs-keyword">let</span> zy <span class="hljs-operator">:=</span> <span class="hljs-built_in">sload</span>(<span class="hljs-built_in">add</span>(start, <span class="hljs-built_in">add</span>(<span class="hljs-built_in">mul</span>(i, <span class="hljs-number">2</span>), <span class="hljs-number">1</span>)))
            <span class="hljs-comment">// uint128 cuts off left most 128 bits from 32 bytes</span>
            y <span class="hljs-operator">:=</span> zy
            z <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(<span class="hljs-number">128</span>, zy)
        }
    }
}
</code></pre>`

export default html
