// metadata
export const version = "0.8.24"
export const title = "EVM Memory Layout in Solidity"
export const description = "Example of EVM memory in Solidity"

export const keywords = ["data", "evm", "memory", "yul", "assembly"]

export const codes = [
  {
    fileName: "YulMem.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKLy8gTWVtb3J5IGxheW91dAovLyBhcnJheSBvZiBsZW5ndGggMioqMjU2ICgzMiBieXRlcyksIGVhY2ggZWxlbWVudCBzdG9yZXMgMSBieXRlICgweDAwIHRvIDB4ZmYpCi8vIGluZGV4ICAgICAwICAgIDEgICAgMiAgIC4uLiAgIDB4ZmZmLi4uZmZmID0gMioqMjU2IC0gMQovLyBtZW1vcnkgfCAwMCB8IDAwIHwgMDAgfCAuLi4gfCAwMCB8CgovLyBSZXNlcnZlZCBzbG90cwovLyAweDAwIC0gMHgzZiAoNjQgYnl0ZXMpOiBzY3JhdGNoIHNwYWNlIGZvciBoYXNoaW5nIG1ldGhvZHMKLy8gMHg0MCAtIDB4NWYgKDMyIGJ5dGVzKTogZnJlZSBtZW1vcnkgcG9pbnRlciAtIHBvaW50ZXIgdG8gbmV4dCBhdmFpbGFibGUgbG9jYXRpb24gaW4gbWVtb3J5IHRvIHN0b3JlIGRhdGEKLy8gMHg2MCAtIDB4N2YgKDMyIGJ5dGVzKTogemVybyBzbG90IC0gdXNlZCBhcyBpbml0aWFsIHZhbHVlIGZvciBkeW5hbWljIG1lbW9yeSBhcnJheXMgYW5kIHNob3VsZCBuZXZlciBiZSB3cml0dGVuIHRvCgovLyBGcmVlIG1lbW9yeSBwb2ludGVyICgweDQwKQovLyAweDgwID0gRnJlZSBtZW1vcnkgcG9pbnRlciBpbml0aWFsbHkgcG9pbnRzIGhlcmUKY29udHJhY3QgTWVtQmFzaWMgewogICAgLy8gbXN0b3JlKHAsIHYpID0gc3RvcmUgMzIgYnl0ZXMgdG8gbWVtb3J5IHN0YXJ0aW5nIGF0IG1lbW9yeSBsb2NhdGlvbiBwCiAgICAvLyBtbG9hZChwKSA9IGxvYWQgMzIgYnl0ZXMgZnJvbSBtZW1vcnkgc3RhcnRpbmcgYXQgbWVtb3J5IGxvY2F0aW9uIHAKICAgIGZ1bmN0aW9uIHRlc3RfMSgpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzMzIgYjMyKSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBGcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIC8vIHAgPSAweDgwCiAgICAgICAgICAgIGxldCBwIDo9IG1sb2FkKDB4NDApCiAgICAgICAgICAgIG1zdG9yZShwLCAweGFiYWJhYikKICAgICAgICAgICAgYjMyIDo9IG1sb2FkKHApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfMigpIHB1YmxpYyBwdXJlIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIG1zdG9yZSgwLCAweDExKQogICAgICAgICAgICAvLyBpbmRleDogMzIgYnl0ZXMgb2YgZGF0YSBzdG9yZWQgaW4gbWVtb3J5IGZyb20gaW5kZXgKICAgICAgICAgICAgLy8gIDB4MDA6IDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMQogICAgICAgICAgICBtc3RvcmUoMSwgMHgyMikKICAgICAgICAgICAgLy8gICAgICAgICAgIDAgMQogICAgICAgICAgICAvLyAgMHgwMDogMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICAgICAgICAgIC8vICAweDIwOiAweDIyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgbXN0b3JlKDIsIDB4MzMpCiAgICAgICAgICAgIC8vICAgICAgICAgICAwIDEgMgogICAgICAgICAgICAvLyAgMHgwMDogMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICAgICAgICAgIC8vICAweDIwOiAweDAwMzMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgbXN0b3JlKDMsIDB4NDQpCiAgICAgICAgICAgIC8vICAgICAgICAgICAwIDEgMiAzCiAgICAgICAgICAgIC8vICAweDAwOiAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgLy8gIDB4MjA6IDB4MDAwMDQ0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgTWVtU3RydWN0IHsKICAgIC8vIE1lbW9yeSBkYXRhIGlzIG5vdCBwYWNrZWQgLSBhbGwgZGF0YSBzdG9yZWQgaW4gY2h1bmtzIG9mIDMyIGJ5dGVzCiAgICBzdHJ1Y3QgUG9pbnQgewogICAgICAgIHVpbnQyNTYgeDsKICAgICAgICB1aW50MzIgeTsKICAgICAgICB1aW50MzIgejsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3JlYWQoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IHgsIHVpbnQyNTYgeSwgdWludDI1NiB6KQogICAgewogICAgICAgIC8vIFBvaW50IGlzIGxvYWRlZCB0byBtZW1vcnkgc3RhcnRpbmcgYXQgMHg4MAogICAgICAgIC8vIDB4ODAgPSBpbml0aWFsIGZyZWUgbWVtb3J5CiAgICAgICAgUG9pbnQgbWVtb3J5IHAgPSBQb2ludCgxLCAyLCAzKTsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBsb2FkIDMyIGJ5dGVzIHN0YXJ0aW5nIGZyb20gMHg4MAogICAgICAgICAgICB4IDo9IG1sb2FkKDB4ODApCiAgICAgICAgICAgIC8vIGxvYWQgMzIgYnl0ZXMgc3RhcnRpbmcgZnJvbSAweGEwICgweDgwICsgMzIgPSAweGEwKQogICAgICAgICAgICB5IDo9IG1sb2FkKDB4YTApCiAgICAgICAgICAgIC8vIGxvYWQgMzIgYnl0ZXMgc3RhcnRpbmcgZnJvbSAweGMwICgweGEwICsgMzIgPSAweGMwKQogICAgICAgICAgICB6IDo9IG1sb2FkKDB4YzApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfd3JpdGUoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyIGZyZWVfbWVtX3B0ciwgdWludDI1NiB4LCB1aW50MjU2IHksIHVpbnQyNTYgeikKICAgIHsKICAgICAgICAvLyBBbGxvY2F0ZXMgbWVtb3J5IDB4ODAgdG8gMHhkZiB0byBQb2ludAogICAgICAgIC8vIEZyZWUgbWVtb3J5IHBvaW50ZXIgPSAweGRmICsgMSA9IDB4ZTAKICAgICAgICBQb2ludCBtZW1vcnkgcDsKCiAgICAgICAgLy8gV3JpdGUKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIHN0b3JlIHRvIDB4ODAKICAgICAgICAgICAgbXN0b3JlKHAsIDExKQogICAgICAgICAgICAvLyBzdG9yZSB0byAweGEwCiAgICAgICAgICAgIG1zdG9yZShhZGQocCwgMHgyMCksIDIyKQogICAgICAgICAgICAvLyBzdG9yZSB0byAweGMwCiAgICAgICAgICAgIG1zdG9yZShhZGQocCwgMHg0MCksIDMzKQogICAgICAgICAgICAvLyAweGUwCiAgICAgICAgICAgIGZyZWVfbWVtX3B0ciA6PSBtbG9hZCgweDQwKQogICAgICAgIH0KCiAgICAgICAgeCA9IHAueDsKICAgICAgICB5ID0gcC55OwogICAgICAgIHogPSBwLno7CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUZpeGVkQXJyYXkgewogICAgZnVuY3Rpb24gdGVzdF9yZWFkKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NiBhMCwgdWludDI1NiBhMSwgdWludDI1NiBhMikKICAgIHsKICAgICAgICAvLyBhcnIgaXMgbG9hZGVkIHRvIG1lbW9yeSBzdGFydGluZyBhdCAweDgwCiAgICAgICAgLy8gRWFjaCBhcnJheSBlbGVtZW50IGlzIHN0b3JlZCBhcyAzMiBieXRlcwogICAgICAgIHVpbnQzMlszXSBtZW1vcnkgYXJyID0gW3VpbnQzMigxKSwgdWludDMyKDIpLCB1aW50MzIoMyldOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGEwIDo9IG1sb2FkKDB4ODApCiAgICAgICAgICAgIGExIDo9IG1sb2FkKDB4YTApCiAgICAgICAgICAgIGEyIDo9IG1sb2FkKDB4YzApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfd3JpdGUoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGEwLCB1aW50MjU2IGExLCB1aW50MjU2IGEyKQogICAgewogICAgICAgIHVpbnQzMlszXSBtZW1vcnkgYXJyOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIDB4ODAKICAgICAgICAgICAgbXN0b3JlKGFyciwgMTEpCiAgICAgICAgICAgIC8vIDB4YTAKICAgICAgICAgICAgbXN0b3JlKGFkZChhcnIsIDB4MjApLCAyMikKICAgICAgICAgICAgLy8gMHhjMAogICAgICAgICAgICBtc3RvcmUoYWRkKGFyciwgMHg0MCksIDMzKQogICAgICAgIH0KCiAgICAgICAgYTAgPSBhcnJbMF07CiAgICAgICAgYTEgPSBhcnJbMV07CiAgICAgICAgYTIgPSBhcnJbMl07CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUR5bmFtaWNBcnJheSB7CiAgICBmdW5jdGlvbiB0ZXN0X3JlYWQoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGxlbiwgdWludDI1NiBhMCwgdWludDI1NiBhMSwgdWludDI1NiBhMikKICAgIHsKICAgICAgICB1aW50MjU2W10gbWVtb3J5IGFyciA9IG5ldyB1aW50MjU2W10oNSk7CiAgICAgICAgYXJyWzBdID0gdWludDI1NigxMSk7CiAgICAgICAgYXJyWzFdID0gdWludDI1NigyMik7CiAgICAgICAgYXJyWzJdID0gdWludDI1NigzMyk7CiAgICAgICAgYXJyWzNdID0gdWludDI1Nig0NCk7CiAgICAgICAgYXJyWzRdID0gdWludDI1Nig1NSk7CgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gMHg4MAogICAgICAgICAgICBsZW4gOj0gbWxvYWQoYXJyKQogICAgICAgICAgICAvLyAweGEwCiAgICAgICAgICAgIGEwIDo9IG1sb2FkKGFkZChhcnIsIDB4MjApKQogICAgICAgICAgICAvLyAweGMwCiAgICAgICAgICAgIGExIDo9IG1sb2FkKGFkZChhcnIsIDB4NDApKQogICAgICAgICAgICAvLyAweGUwCiAgICAgICAgICAgIGEyIDo9IG1sb2FkKGFkZChhcnIsIDB4NjApKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3dyaXRlKCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NltdIG1lbW9yeSkgewogICAgICAgIHVpbnQyNTZbXSBtZW1vcnkgYXJyOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIFN0b3JlIGxlbmd0aCBvZiBhcnIKICAgICAgICAgICAgbXN0b3JlKGFyciwgMykKICAgICAgICAgICAgLy8gU3RvcmUgMSwgMiwgMwogICAgICAgICAgICBtc3RvcmUoYWRkKGFyciwgMHgyMCksIDExKQogICAgICAgICAgICBtc3RvcmUoYWRkKGFyciwgMHg0MCksIDIyKQogICAgICAgICAgICBtc3RvcmUoYWRkKGFyciwgMHg2MCksIDMzKQogICAgICAgICAgICAvLyBVcGRhdGUgZnJlZSBtZW1vcnkgcG9pbnRlcgogICAgICAgICAgICBtc3RvcmUoMHg0MCwgYWRkKGFyciwgMHg4MCkpCiAgICAgICAgfQoKICAgICAgICAvLyBEYXRhIHdpbGwgYmUgQUJJIGVuY29kZWQgd2hlbiBhcnIgaXMgcmV0dXJuZWQgdG8gY2FsbGVyCiAgICAgICAgcmV0dXJuIGFycjsKICAgIH0KfQoKY29udHJhY3QgTWVtSW50ZXJuYWxGdW5jUmV0dXJuIHsKICAgIGZ1bmN0aW9uIGludGVybmFsX2Z1bmNfcmV0dXJuX3ZhbCgpIHByaXZhdGUgcHVyZSByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIHVpbnQyNTYoMHhhYmFiYWIpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfdmFsKCkgcHVibGljIHB1cmUgewogICAgICAgIC8vIDB4YWJhYmFiIHdpbGwgYmUgc3RvcmVkIGluIHRvcCBvZiB0aGUgc3RhY2sKICAgICAgICBpbnRlcm5hbF9mdW5jX3JldHVybl92YWwoKTsKICAgIH0KCiAgICBmdW5jdGlvbiBpbnRlcm5hbF9mdW5jX3JldHVybl9tZW0oKQogICAgICAgIHByaXZhdGUKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMltdIG1lbW9yeSkKICAgIHsKICAgICAgICBieXRlczMyW10gbWVtb3J5IGFyciA9IG5ldyBieXRlczMyW10oMyk7CiAgICAgICAgYXJyWzBdID0gYnl0ZXMzMih1aW50MjU2KDB4YWFhKSk7CiAgICAgICAgYXJyWzFdID0gYnl0ZXMzMih1aW50MjU2KDB4YmJiKSk7CiAgICAgICAgYXJyWzJdID0gYnl0ZXMzMih1aW50MjU2KDB4Y2NjKSk7CiAgICAgICAgcmV0dXJuIGFycjsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X21lbSgpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgbGVuLCBieXRlczMyIGEwLCBieXRlczMyIGExLCBieXRlczMyIGEyKQogICAgewogICAgICAgIC8vIFN0b3JlcyAweDgwIHRvIHRvcCBvZiB0aGUgc3RhY2sKICAgICAgICAvLyAweDgwID0gbWVtb3J5IHBvaW50ZXIgdG8gYmVnaW5uaW5nIG9mIGFycgogICAgICAgIGludGVybmFsX2Z1bmNfcmV0dXJuX21lbSgpOwogICAgICAgIC8vIFJlYWQgZGF0YSBmcm9tIGFyciwgaW5pdGlhbGl6ZWQgaW4gaW50ZXJuYWxfZnVuY19yZXR1cm5fbWVtLCB1c2luZyBhc3NlbWJseQogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbGVuIDo9IG1sb2FkKDB4ODApCiAgICAgICAgICAgIGEwIDo9IG1sb2FkKDB4YTApCiAgICAgICAgICAgIGExIDo9IG1sb2FkKDB4YzApCiAgICAgICAgICAgIGEyIDo9IG1sb2FkKDB4ZTApCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBBQklFbmNvZGUgewogICAgLy8ganMgY29kZSB0byBzcGxpdCBzdHJpbmcgaW50byBjaHVua3Mgb2YgbGVuZ3RoIDY0CiAgICAvLyBzdHIubWF0Y2goLy57MSw2NH0vZykKCiAgICAvLyBWYWx1ZSB0eXBlcyA8IDMyIGJ5dGVzIC0+IHplcm8gcGFkZGVkIG9uIHRoZSBsZWZ0IHNpZGUKICAgIC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYgogICAgZnVuY3Rpb24gZW5jb2RlX2FkZHIoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICBhZGRyZXNzIGFkZHIgPSAweEFCYUJhQmFCQUJhYkFCYWJBYkFiQUJBYkFCYWJhYmFiYUJhQkFCYUI7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoYWRkcik7CiAgICB9CgogICAgLy8gRml4ZWQgc2l6ZWQgYnl0ZXMgLT4gemVybyBwYWRkZWQgb24gdGhlIHJpZ2ggc2lkZQogICAgLy8gMHhhYWJiY2NkZDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICBmdW5jdGlvbiBlbmNvZGVfYnl0ZXM0KCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgYnl0ZXM0IGI0ID0gMHhhYWJiY2NkZDsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShiNCk7CiAgICB9CgogICAgLy8gRHluYW1pYyBzaXplIHR5cGVzCiAgICAvLyBvZmZzZXQgfCBsZW5ndGggfCBkYXRhCiAgICAvLyBvZmZzZXQgPSAzMiBieXRlcyBpbmRleCB3aGVyZSBkYXRhIHN0YXJ0cwogICAgLy8gbGVuZ3RoID0gMzIgYnl0ZXMgZGF0YSBsZW5ndGgKCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMwogICAgLy8gICBhYmFiYWIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICBmdW5jdGlvbiBlbm9kZV9ieXRlcygpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIGJ5dGVzIG1lbW9yeSBiID0gbmV3IGJ5dGVzKDMpOwogICAgICAgIGJbMF0gPSAweGFiOwogICAgICAgIGJbMV0gPSAweGFiOwogICAgICAgIGJbMl0gPSAweGFiOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGIpOwogICAgfQoKICAgIC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMAogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMgogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICBmdW5jdGlvbiBlbm9kZV91aW50OF9hcnIoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICB1aW50OFtdIG1lbW9yeSBhID0gbmV3IHVpbnQ4W10oMyk7CiAgICAgICAgYVswXSA9IDE7CiAgICAgICAgYVsxXSA9IDI7CiAgICAgICAgYVsyXSA9IDM7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoYSk7CiAgICB9CgogICAgLy8gRml4ZWQgc2l6ZSBhcnJheXMKICAgIC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMQogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIGZ1bmN0aW9uIGVub2RlX3VpbnQyNTZfZml4ZWRfc2l6ZV9hcnIoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlcyBtZW1vcnkpCiAgICB7CiAgICAgICAgdWludDhbM10gbWVtb3J5IGE7CiAgICAgICAgYVswXSA9IDE7CiAgICAgICAgYVsxXSA9IDI7CiAgICAgICAgYVsyXSA9IDM7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoYSk7CiAgICB9CgogICAgLy8gU3RydWN0CiAgICBzdHJ1Y3QgUG9pbnQgewogICAgICAgIHVpbnQyNTYgeDsKICAgICAgICB1aW50MTI4IHk7CiAgICAgICAgdWludDEyOCB6OwogICAgfQoKICAgIC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMQogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIGZ1bmN0aW9uIGVuY29kZV9zdHJ1Y3QoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICBQb2ludCBtZW1vcnkgcCA9IFBvaW50KDEsIDIsIDMpOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKHApOwogICAgfQoKICAgIC8vIER5bmFtaWMgc2l6ZWQgYXJyYXkgb2Ygc3RydWN0cwogICAgLy8gb2Zmc2V0IHwgbGVuZ3RoIHwgc3RydWN0IGRhdGEKICAgIC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMAogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMgogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNQogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2CiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDcKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOAogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA5CiAgICBmdW5jdGlvbiBlbmNvZGVfc3RydWN0X2FycmF5KCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgUG9pbnRbXSBtZW1vcnkgYXJyID0gbmV3IFBvaW50W10oMyk7CiAgICAgICAgYXJyWzBdID0gUG9pbnQoMSwgMiwgMyk7CiAgICAgICAgYXJyWzFdID0gUG9pbnQoNCwgNSwgNik7CiAgICAgICAgYXJyWzJdID0gUG9pbnQoNywgOCwgOSk7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoYXJyKTsKICAgIH0KfQoKY29udHJhY3QgTWVtUmV0dXJuIHsKICAgIGZ1bmN0aW9uIHRlc3RfcmV0dXJuX3ZhbHMoKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2LCB1aW50MjU2KSB7CiAgICAgICAgLy8gcmV0dXJuKHN0YXJ0LCBsZW4pIC0gSGFsdCBleGVjdXRpb24gYW5kIHJldHVybiBkYXRhIHN0b3JlZCBpbiBtZW1vcnkgZnJvbSBzdGFydCB0byBzdGFydCArIGxlbgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbXN0b3JlKDB4ODAsIDExKQogICAgICAgICAgICBtc3RvcmUoMHhhMCwgMjIpCiAgICAgICAgICAgIHJldHVybigweDgwLCAweDQwKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3JldHVybl9keW5fYXJyKCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NltdIG1lbW9yeSkgewogICAgICAgIC8vIEFCSSBlbmNvZGUgdWludDI1NltdIGFycmF5IHdpdGggMyBlbGVtZW50cyAxMSwgMjIgYW5kIDMzCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBvZmZzZXQKICAgICAgICAgICAgbXN0b3JlKDB4ODAsIDB4MjApCiAgICAgICAgICAgIC8vIGxlbmd0aAogICAgICAgICAgICBtc3RvcmUoYWRkKDB4ODAsIDB4MjApLCAzKQogICAgICAgICAgICAvLyBhcnJheSBlbGVtZW50cwogICAgICAgICAgICBtc3RvcmUoYWRkKDB4ODAsIDB4NDApLCAxMSkKICAgICAgICAgICAgbXN0b3JlKGFkZCgweDgwLCAweDYwKSwgMjIpCiAgICAgICAgICAgIG1zdG9yZShhZGQoMHg4MCwgMHg4MCksIDMzKQogICAgICAgICAgICAvLyBObyBuZWVkIHRvIHVwZGF0ZSBmcmVlIG1lbW9yeSBwb2ludGVyIC0gZnVuY3Rpb24gZXhlY3V0aW9uIGVuZHMgaGVyZQogICAgICAgICAgICByZXR1cm4oMHg4MCwgbXVsKDUsIDB4MjApKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3JldHVybigpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQyNTYsIHVpbnQyNTYpIHsKICAgICAgICAvLyBSZXR1cm5zICgxMSwgMjIpCiAgICAgICAgdGVzdF9yZXR1cm5fdmFscygpOwogICAgICAgIC8vIFRoaXMgY29kZSB3aWxsIG5ldmVyIGV4ZWN1dGUKICAgICAgICByZXR1cm4gKDMzMywgNDQ0KTsKICAgIH0KfQoKY29udHJhY3QgTWVtUmV2ZXJ0IHsKICAgIGZ1bmN0aW9uIHRlc3RfcmV2ZXJ0KCkgcHVibGljIHB1cmUgewogICAgICAgIC8vIHJldmVydChzdGFydCwgbGVuKSAtIFJldmVydCBleGVjdXRpbiBhbmQgcmV0dXJuIGRhdGEgc3RvcmUgaW4gbWVtb3J5IGZyb20gc3RhcnQgdG8gc3RhcnQgKyBsZW4KICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIG1zdG9yZSgweDgwLCAiRVJST1IgSEVSRSIpCiAgICAgICAgICAgIHJldmVydCgweDgwLCAweDIwKQogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgTWVtS2VjY2FrIHsKICAgIGZ1bmN0aW9uIHRlc3Rfa2VjY2FrKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMzMikgewogICAgICAgIC8vIGtlY2NhazI1NihzdGFydCwgbGVuKSAtIEtlY2NhazI1NiBmcm9tIGRhdGEgaW4gbWVtb3J5IGZyb20gc3RhcnQgdG8gc3RhcnQgKyBsZW4KICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIG1zdG9yZSgweDgwLCAxKQogICAgICAgICAgICBtc3RvcmUoMHhhMCwgMikKCiAgICAgICAgICAgIGxldCBoIDo9IGtlY2NhazI1NigweDgwLCAweDQwKQogICAgICAgICAgICBtc3RvcmUoMHhjMCwgaCkKCiAgICAgICAgICAgIHJldHVybigweGMwLCAweDIwKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBrZWNjYWsoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlczMyKSB7CiAgICAgICAgcmV0dXJuIGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKHVpbnQyNTYoMSksIHVpbnQyNTYoMikpKTsKICAgIH0KfQoKY29udHJhY3QgVGFyZ2V0IHsKICAgIGZ1bmN0aW9uIHJldHVybl91aW50MjU2KHVpbnQyNTYgeCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiB4OwogICAgfQoKICAgIGZ1bmN0aW9uIHJldHVybl9ieXRlcyh1aW50MjU2IG4pIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIGJ5dGVzIG1lbW9yeSBvdXQgPSBuZXcgYnl0ZXMobik7CiAgICAgICAgZm9yICh1aW50MjU2IGk7IGkgPCBuOyBpKyspIHsKICAgICAgICAgICAgb3V0W2ldID0gMHhhYjsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG91dDsKICAgIH0KCiAgICBmdW5jdGlvbiByZXR1cm5fdWludDI1Nl9hcnIodWludDI1NiBuKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2W10gbWVtb3J5KQogICAgewogICAgICAgIHVpbnQyNTZbXSBtZW1vcnkgb3V0ID0gbmV3IHVpbnQyNTZbXShuKTsKICAgICAgICBmb3IgKHVpbnQyNTYgaSA9IDA7IGkgPCBuOyBpKyspIHsKICAgICAgICAgICAgb3V0W2ldID0gaSArIDE7CiAgICAgICAgfQogICAgICAgIHJldHVybiBvdXQ7CiAgICB9Cn0KCi8vIGNhbGxkYXRhY29weShwLCBzdGFydCwgc2l6ZSkgLSBDb3B5IHN0YXJ0IHRvIHN0YXJ0ICsgc2l6ZSBjYWxsZGF0YSB0byBtZW1vcnkgc3RhcnRpbmcgYXQgcG9pbnRlciBwCi8vIHJldHVybmRhdGFzaXplIC0gR2V0IHNpemUgb2YgcmV0dXJuZWQgZGF0YSBmcm9tIGNhbGwsIHN0YXRpY2NhbGwgb3IgZGVsZWdhdGVjYWxsCi8vIHJldHVybmRhdGFjb3B5KHAsIHN0YXJ0LCBzaXplKSAtIENvcHkgc3RhcnQgdG8gc3RhcnQgKyBzaXplIHJldHVybiBkYXRhIHRvIG1lbW9yeSBzdGFydGluZyBhdCBwb2ludGVyIHAKLy8gY2FsbChnLCBhLCB2LCBpbiwgaW5fc2l6ZSwgb3V0LCBvdXRfc2l6ZSkKLy8gLSBjYWxsIGNvbnRyYWN0IGF0IGEsIHVzZSBtYXggZyBnYXMsIHNlbmQgdiB3ZWkKLy8gLSB3aXRoIGlucHV0IGZyb20gbWVtb3J5IGluIHRvIGluICsgaW5fc2l6ZQovLyAtIHVzZSBtZW1vcnkgb3V0IHRvIG91dCArIG91dF9zaXplIGZvciBvdXRwdXQKLy8gc3RhdGljY2FsbChnLCBhLCBpbiwgaW5fc2l6ZSwgb3V0LCBvdXRfc2l6ZSkgLSByZWFkIG9ubHkgdmVyc2lvbiBvZiBjYWxsCmNvbnRyYWN0IFl1bFN0YXRpY0NhbGwgewogICAgZnVuY3Rpb24gdGVzdF9zdGF0aWNjYWxsKGFkZHJlc3MgYSwgYnl0ZXMgY2FsbGRhdGEgZGF0YSkgcHVibGljIHZpZXcgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbGV0IHAgOj0gbWxvYWQoMHg0MCkKICAgICAgICAgICAgLy8gQ29weSBjYWxsZGF0YSB0byBtZW1vcnkKICAgICAgICAgICAgY2FsbGRhdGFjb3B5KHAsIGRhdGEub2Zmc2V0LCBkYXRhLmxlbmd0aCkKICAgICAgICAgICAgLy8gTm8gbmVlZCB0byB1cGRhdGUgZnJlZSBtZW1vcnkgcG9pbnRlcj8KICAgICAgICAgICAgLy8gbXN0b3JlKDB4NDAsIGFkZChwLCBkYXRhLmxlbmd0aCkpCgogICAgICAgICAgICBsZXQgb2sgOj0gc3RhdGljY2FsbChnYXMoKSwgYSwgcCwgZGF0YS5sZW5ndGgsIDAsIDApCgogICAgICAgICAgICBpZiBpc3plcm8ob2spIHsgcmV2ZXJ0KDAsIDApIH0KCiAgICAgICAgICAgIC8vIHAgOj0gbWxvYWQoMHg0MCkKICAgICAgICAgICAgbGV0IHJldHVybl9kYXRhX3NpemUgOj0gcmV0dXJuZGF0YXNpemUoKQogICAgICAgICAgICAvLyBDb3B5IHJldHVybmVkIGRhdGEgdG8gbWVtb3J5CiAgICAgICAgICAgIC8vIElzIGl0IHNhZmUgdG8gb3ZlcndyaXRlIG1lbW9yeSB0aGF0IHdhcyB1c2VkIGZvciBpbnB1dHM/CiAgICAgICAgICAgIHJldHVybmRhdGFjb3B5KHAsIDAsIHJldHVybl9kYXRhX3NpemUpCiAgICAgICAgICAgIHJldHVybihwLCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X2FiaV9kZWNvZGVfdWludDI1NihhZGRyZXNzIGEsIGJ5dGVzIGNhbGxkYXRhIGRhdGEpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTYpCiAgICB7CiAgICAgICAgdGVzdF9zdGF0aWNjYWxsKGEsIGRhdGEpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfYWJpX2RlY29kZV9ieXRlcyhhZGRyZXNzIGEsIGJ5dGVzIGNhbGxkYXRhIGRhdGEpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkKICAgIHsKICAgICAgICB0ZXN0X3N0YXRpY2NhbGwoYSwgZGF0YSk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9hYmlfZGVjb2RlX3VpbnQyNTZfYXJyKGFkZHJlc3MgYSwgYnl0ZXMgY2FsbGRhdGEgZGF0YSkKICAgICAgICBwdWJsaWMKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1NltdIG1lbW9yeSkKICAgIHsKICAgICAgICB0ZXN0X3N0YXRpY2NhbGwoYSwgZGF0YSk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9zdGF0aWNjYWxsX3JldHVybl9hYmlfZW5jb2RlZF9ieXRlcygKICAgICAgICBhZGRyZXNzIGFkZHIsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBwdWJsaWMgdmlldyByZXR1cm5zIChieXRlcyBtZW1vcnkgb3V0LCB1aW50MjU2IHJldHVybl9kYXRhX3NpemUpIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxldCBwIDo9IG1sb2FkKDB4NDApCiAgICAgICAgICAgIC8vIENvcHkgY2FsbGRhdGEgdG8gbWVtb3J5CiAgICAgICAgICAgIGNhbGxkYXRhY29weShwLCBkYXRhLm9mZnNldCwgZGF0YS5sZW5ndGgpCiAgICAgICAgICAgIC8vIFVwZGF0ZSBmcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIG1zdG9yZSgweDQwLCBhZGQocCwgZGF0YS5sZW5ndGgpKQoKICAgICAgICAgICAgbGV0IG9rIDo9IHN0YXRpY2NhbGwoZ2FzKCksIGFkZHIsIHAsIGRhdGEubGVuZ3RoLCAwLCAwKQoKICAgICAgICAgICAgaWYgaXN6ZXJvKG9rKSB7IHJldmVydCgwLCAwKSB9CgogICAgICAgICAgICAvLyByZXR1cm5fZGF0YV9zaXplID0gMzIgIGZvciBjYWxsaW5nIFRhcmdldC5mIC0+IHVpbnQyNTYKICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICA9IDk2ICBmb3IgY2FsbGluZyBUYXJnZXQuZyAtPiBieXRlc1tdICgzMiBvZmZzZXQsIDMyIGxlbmd0aCwgMyBieXRlcyBwYWRkZWQgdG8gMzIpCiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgPSAxNjAgZm9yIGNhbGxpbmcgVGFyZ2V0LmggLT4gdWludDI1NltdICgzMiBvZmZzZXQsIDMyIGxlbmd0aCwgMzIgeCAzIGVsZW1lbnRzKQogICAgICAgICAgICByZXR1cm5fZGF0YV9zaXplIDo9IHJldHVybmRhdGFzaXplKCkKICAgICAgICAgICAgLy8gU3RvcmUgbGVuZ3RoIG9mIHJldHVybiBkYXRhIHRvIG91dAogICAgICAgICAgICAvLyBwb2ludGVyIHRvIG91dCA9IDB4NjAgKHplcm8gc2xvdCkKICAgICAgICAgICAgLy8gVE9ETzogc2FmZSB0byB3cml0ZSB0byB6ZXJvIHNsb3Q/CiAgICAgICAgICAgIG1zdG9yZShvdXQsIHJldHVybl9kYXRhX3NpemUpCiAgICAgICAgICAgIC8vIENvcHkgcmV0dXJuIGRhdGEgdG8gb3V0CiAgICAgICAgICAgIHJldHVybmRhdGFjb3B5KGFkZChvdXQsIDB4MjApLCAwLCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgICAgICAvLyBVcGRhdGUgZnJlZSBtZW1vcnkgcG9pbnRlcgogICAgICAgICAgICBtc3RvcmUoMHg0MCwgYWRkKG91dCwgYWRkKDB4MjAsIHJldHVybl9kYXRhX3NpemUpKSkKICAgICAgICB9CiAgICB9Cn0KCmNvbnRyYWN0IENvdW50ZXIgewogICAgdWludDI1NiBwdWJsaWMgY291bnQ7CgogICAgZnVuY3Rpb24gaW5jKCkgcHVibGljIHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICBjb3VudCArPSAxOwogICAgICAgIHJldHVybiBjb3VudDsKICAgIH0KfQoKY29udHJhY3QgWXVsQ2FsbCB7CiAgICBmdW5jdGlvbiB0ZXN0X2NhbGwoYWRkcmVzcyBhLCBieXRlcyBtZW1vcnkgZGF0YSkKICAgICAgICBwdWJsaWMKICAgICAgICBwYXlhYmxlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMgbWVtb3J5IG91dCkKICAgIHsKICAgICAgICBieXRlczMyIGRhdGFfcHRyOwogICAgICAgIGJ5dGVzMzIgb3V0X3B0cjsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIDB4ODAKICAgICAgICAgICAgZGF0YV9wdHIgOj0gZGF0YQogICAgICAgICAgICAvLyAweDYwCiAgICAgICAgICAgIG91dF9wdHIgOj0gb3V0CgogICAgICAgICAgICBsZXQgZGF0YV9zaXplIDo9IG1sb2FkKGRhdGEpCiAgICAgICAgICAgIGxldCBkYXRhX3N0YXJ0IDo9IGFkZChkYXRhLCAweDIwKQogICAgICAgICAgICBsZXQgb2sgOj0gY2FsbChnYXMoKSwgYSwgY2FsbHZhbHVlKCksIGRhdGFfc3RhcnQsIGRhdGFfc2l6ZSwgMCwgMCkKCiAgICAgICAgICAgIGlmIGlzemVybyhvaykgeyByZXZlcnQoMCwgMCkgfQoKICAgICAgICAgICAgbGV0IHJldHVybl9kYXRhX3NpemUgOj0gcmV0dXJuZGF0YXNpemUoKQogICAgICAgICAgICAvLyBTdG9yZSBsZW5ndGggb2YgcmV0dXJuIGRhdGEgdG8gb3V0CiAgICAgICAgICAgIG1zdG9yZShvdXQsIHJldHVybl9kYXRhX3NpemUpCiAgICAgICAgICAgIC8vIENvcHkgcmV0dXJuIGRhdGEgdG8gb3V0CiAgICAgICAgICAgIHJldHVybmRhdGFjb3B5KGFkZChvdXQsIDB4MjApLCAwLCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgICAgICAvLyBVcGRhdGUgZnJlZSBtZW1vcnkgcG9pbnRlcgogICAgICAgICAgICBtc3RvcmUoMHg0MCwgYWRkKG91dCwgYWRkKDB4MjAsIHJldHVybl9kYXRhX3NpemUpKSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9pbmMoYWRkcmVzcyBjb3VudGVyKSBwdWJsaWMgcmV0dXJucyAodWludDI1NiBjb3VudCkgewogICAgICAgIGJ5dGVzIG1lbW9yeSByZXMgPSB0ZXN0X2NhbGwoY291bnRlciwgYWJpLmVuY29kZUNhbGwoQ291bnRlci5pbmMsICgpKSk7CiAgICAgICAgY291bnQgPSBhYmkuZGVjb2RlKHJlcywgKHVpbnQyNTYpKTsKICAgIH0KfQoKLy8gTWVtb3J5IGV4cGFuc2lvbiBnYXMgY29zdAovLyBHYXMgY29zdCBpcyBxdWFkcmF0aWMgdG8gbWVtb3J5IGFsbG9jYXRpb24uCmNvbnRyYWN0IE1lbUV4cCB7CiAgICBmdW5jdGlvbiBhbGxvY19tZW0odWludDI1NiBuKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICB1aW50MjU2IGdhc19zdGFydCA9IGdhc2xlZnQoKTsKICAgICAgICB1aW50MjU2W10gbWVtb3J5IGFyciA9IG5ldyB1aW50MjU2W10obik7CiAgICAgICAgdWludDI1NiBnYXNfZW5kID0gZ2FzbGVmdCgpOwogICAgICAgIHJldHVybiBnYXNfc3RhcnQgLSBnYXNfZW5kOwogICAgfQp9CgovLyBhcnIgc2l6ZSB8IGdhcwovLyAgICAgICAgMCB8ICAgIDEyMAovLyAgICAgICAgMSB8ICAgIDE3OAovLyAgICAgICAxMCB8ICAgIDIzMgovLyAgICAgICAyMCB8ICAgIDI5MwovLyAgICAgICAzMCB8ICAgIDM1NAovLyAgICAgICA0MCB8ICAgIDQxNQovLyAgICAgICA1MCB8ICAgIDQ3NwovLyAgICAgICA2MCB8ICAgIDU0MAovLyAgICAgICA3MCB8ICAgIDYwMgovLyAgICAgICA4MCB8ICAgIDY2NgovLyAgICAgICA5MCB8ICAgIDcyOQovLyAgICAgIDEwMCB8ICAgIDc5MwovLyAgICAgIDExMCB8ICAgIDg1NwovLyAgICAgIDEyMCB8ICAgIDkyMgovLyAgICAgIDEzMCB8ICAgIDk4NwovLyAgICAgIDE0MCB8ICAgMTA1MwovLyAgICAgIDE1MCB8ICAgMTExOAovLyAgICAgIDE2MCB8ICAgMTE4NQovLyAgICAgIDE3MCB8ICAgMTI1MQovLyAgICAgIDE4MCB8ICAgMTMxOAovLyAgICAgIDE5MCB8ICAgMTM4NgovLyAgICAgIDIwMCB8ICAgMTQ1NAoKLy8gICAgIDEwMDAgfCAgIDgxNDQKLy8gICAgIDIwMDAgfCAgMjAwMjMKLy8gICAgIDMwMDAgfCAgMzU4MDgKLy8gICAgIDQwMDAgfCAgNTU1MDAKLy8gICAgIDUwMDAgfCAgNzkwOTcKLy8gICAgIDYwMDAgfCAxMDY2MDEKLy8gICAgIDcwMDAgfCAxMzgwMTEKLy8gICAgIDgwMDAgfCAxNzMzMjgKLy8gICAgIDkwMDAgfCAyMTI1NTAKLy8gICAgMTAwMDAgfCAyNTU2NzkKLy8gICAgMTEwMDAgfCAzMDI3MTUKLy8gICAgMTIwMDAgfCAzNTM2NTYKLy8gICAgMTMwMDAgfCA0MDg1MDQKLy8gICAgMTQwMDAgfCA0NjcyNTcKLy8gICAgMTUwMDAgfCA1Mjk5MTgKLy8gICAgMTYwMDAgfCA1OTY0ODQKLy8gICAgMTcwMDAgfCA2NjY5NTcKLy8gICAgMTgwMDAgfCA3NDEzMzYKLy8gICAgMTkwMDAgfCA4MTk2MjEKLy8gICAgMjAwMDAgfCA5MDE4MTIK",
  },
]

const html = `<p>Examples of</p>
<ul>
<li>Reading and writing to memory with <code>assembly</code></li>
<li>Memory layout in Solidity of different data types</li>
<li>Memory management for external calls</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

<span class="hljs-comment">// Memory layout</span>
<span class="hljs-comment">// array of length 2**256 (32 bytes), each element stores 1 byte (0x00 to 0xff)</span>
<span class="hljs-comment">// index     0    1    2   ...   0xfff...fff = 2**256 - 1</span>
<span class="hljs-comment">// memory | 00 | 00 | 00 | ... | 00 |</span>

<span class="hljs-comment">// Reserved slots</span>
<span class="hljs-comment">// 0x00 - 0x3f (64 bytes): scratch space for hashing methods</span>
<span class="hljs-comment">// 0x40 - 0x5f (32 bytes): free memory pointer - pointer to next available location in memory to store data</span>
<span class="hljs-comment">// 0x60 - 0x7f (32 bytes): zero slot - used as initial value for dynamic memory arrays and should never be written to</span>

<span class="hljs-comment">// Free memory pointer (0x40)</span>
<span class="hljs-comment">// 0x80 = Free memory pointer initially points here</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemBasic</span> </span>{
    <span class="hljs-comment">// mstore(p, v) = store 32 bytes to memory starting at memory location p</span>
    <span class="hljs-comment">// mload(p) = load 32 bytes from memory starting at memory location p</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_1</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> b32</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Free memory pointer</span>
            <span class="hljs-comment">// p = 0x80</span>
            <span class="hljs-keyword">let</span> p <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
            <span class="hljs-built_in">mstore</span>(p, <span class="hljs-number">0xababab</span>)
            b32 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(p)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_2</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0x11</span>)
            <span class="hljs-comment">// index: 32 bytes of data stored in memory from index</span>
            <span class="hljs-comment">//  0x00: 0x0000000000000000000000000000000000000000000000000000000000000011</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">1</span>, <span class="hljs-number">0x22</span>)
            <span class="hljs-comment">//           0 1</span>
            <span class="hljs-comment">//  0x00: 0x0000000000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-comment">//  0x20: 0x2200000000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">2</span>, <span class="hljs-number">0x33</span>)
            <span class="hljs-comment">//           0 1 2</span>
            <span class="hljs-comment">//  0x00: 0x0000000000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-comment">//  0x20: 0x0033000000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">3</span>, <span class="hljs-number">0x44</span>)
            <span class="hljs-comment">//           0 1 2 3</span>
            <span class="hljs-comment">//  0x00: 0x0000000000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-comment">//  0x20: 0x0000440000000000000000000000000000000000000000000000000000000000</span>
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemStruct</span> </span>{
    <span class="hljs-comment">// Memory data is not packed - all data stored in chunks of 32 bytes</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Point</span> {
        <span class="hljs-keyword">uint256</span> x;
        <span class="hljs-keyword">uint32</span> y;
        <span class="hljs-keyword">uint32</span> z;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_read</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y, <span class="hljs-keyword">uint256</span> z</span>)
    </span>{
        <span class="hljs-comment">// Point is loaded to memory starting at 0x80</span>
        <span class="hljs-comment">// 0x80 = initial free memory</span>
        Point <span class="hljs-keyword">memory</span> p <span class="hljs-operator">=</span> Point(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>);

        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// load 32 bytes starting from 0x80</span>
            x <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x80</span>)
            <span class="hljs-comment">// load 32 bytes starting from 0xa0 (0x80 + 32 = 0xa0)</span>
            y <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xa0</span>)
            <span class="hljs-comment">// load 32 bytes starting from 0xc0 (0xa0 + 32 = 0xc0)</span>
            z <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xc0</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_write</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> free_mem_ptr, <span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y, <span class="hljs-keyword">uint256</span> z</span>)
    </span>{
        <span class="hljs-comment">// Allocates memory 0x80 to 0xdf to Point</span>
        <span class="hljs-comment">// Free memory pointer = 0xdf + 1 = 0xe0</span>
        Point <span class="hljs-keyword">memory</span> p;

        <span class="hljs-comment">// Write</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// store to 0x80</span>
            <span class="hljs-built_in">mstore</span>(p, <span class="hljs-number">11</span>)
            <span class="hljs-comment">// store to 0xa0</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(p, <span class="hljs-number">0x20</span>), <span class="hljs-number">22</span>)
            <span class="hljs-comment">// store to 0xc0</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(p, <span class="hljs-number">0x40</span>), <span class="hljs-number">33</span>)
            <span class="hljs-comment">// 0xe0</span>
            free_mem_ptr <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
        }

        x <span class="hljs-operator">=</span> p.x;
        y <span class="hljs-operator">=</span> p.y;
        z <span class="hljs-operator">=</span> p.z;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemFixedArray</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_read</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> a0, <span class="hljs-keyword">uint256</span> a1, <span class="hljs-keyword">uint256</span> a2</span>)
    </span>{
        <span class="hljs-comment">// arr is loaded to memory starting at 0x80</span>
        <span class="hljs-comment">// Each array element is stored as 32 bytes</span>
        <span class="hljs-keyword">uint32</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> [<span class="hljs-keyword">uint32</span>(<span class="hljs-number">1</span>), <span class="hljs-keyword">uint32</span>(<span class="hljs-number">2</span>), <span class="hljs-keyword">uint32</span>(<span class="hljs-number">3</span>)];

        <span class="hljs-keyword">assembly</span> {
            a0 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x80</span>)
            a1 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xa0</span>)
            a2 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xc0</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_write</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> a0, <span class="hljs-keyword">uint256</span> a1, <span class="hljs-keyword">uint256</span> a2</span>)
    </span>{
        <span class="hljs-keyword">uint32</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">memory</span> arr;

        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// 0x80</span>
            <span class="hljs-built_in">mstore</span>(arr, <span class="hljs-number">11</span>)
            <span class="hljs-comment">// 0xa0</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x20</span>), <span class="hljs-number">22</span>)
            <span class="hljs-comment">// 0xc0</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x40</span>), <span class="hljs-number">33</span>)
        }

        a0 <span class="hljs-operator">=</span> arr[<span class="hljs-number">0</span>];
        a1 <span class="hljs-operator">=</span> arr[<span class="hljs-number">1</span>];
        a2 <span class="hljs-operator">=</span> arr[<span class="hljs-number">2</span>];
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemDynamicArray</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_read</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> len, <span class="hljs-keyword">uint256</span> a0, <span class="hljs-keyword">uint256</span> a1, <span class="hljs-keyword">uint256</span> a2</span>)
    </span>{
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](<span class="hljs-number">5</span>);
        arr[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">11</span>);
        arr[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">22</span>);
        arr[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">33</span>);
        arr[<span class="hljs-number">3</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">44</span>);
        arr[<span class="hljs-number">4</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">55</span>);

        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// 0x80</span>
            len <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(arr)
            <span class="hljs-comment">// 0xa0</span>
            a0 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x20</span>))
            <span class="hljs-comment">// 0xc0</span>
            a1 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x40</span>))
            <span class="hljs-comment">// 0xe0</span>
            a2 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x60</span>))
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_write</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> arr;

        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Store length of arr</span>
            <span class="hljs-built_in">mstore</span>(arr, <span class="hljs-number">3</span>)
            <span class="hljs-comment">// Store 1, 2, 3</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x20</span>), <span class="hljs-number">11</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x40</span>), <span class="hljs-number">22</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x60</span>), <span class="hljs-number">33</span>)
            <span class="hljs-comment">// Update free memory pointer</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x40</span>, <span class="hljs-built_in">add</span>(arr, <span class="hljs-number">0x80</span>))
        }

        <span class="hljs-comment">// Data will be ABI encoded when arr is returned to caller</span>
        <span class="hljs-keyword">return</span> arr;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemInternalFuncReturn</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">internal_func_return_val</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">0xababab</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_val</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-comment">// 0xababab will be stored in top of the stack</span>
        internal_func_return_val();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">internal_func_return_mem</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">bytes32</span>[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes32</span>[](<span class="hljs-number">3</span>);
        arr[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">0xaaa</span>));
        arr[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">0xbbb</span>));
        arr[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">0xccc</span>));
        <span class="hljs-keyword">return</span> arr;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_mem</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> len, <span class="hljs-keyword">bytes32</span> a0, <span class="hljs-keyword">bytes32</span> a1, <span class="hljs-keyword">bytes32</span> a2</span>)
    </span>{
        <span class="hljs-comment">// Stores 0x80 to top of the stack</span>
        <span class="hljs-comment">// 0x80 = memory pointer to beginning of arr</span>
        internal_func_return_mem();
        <span class="hljs-comment">// Read data from arr, initialized in internal_func_return_mem, using assembly</span>
        <span class="hljs-keyword">assembly</span> {
            len <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x80</span>)
            a0 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xa0</span>)
            a1 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xc0</span>)
            a2 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0xe0</span>)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ABIEncode</span> </span>{
    <span class="hljs-comment">// js code to split string into chunks of length 64</span>
    <span class="hljs-comment">// str.match(/.{1,64}/g)</span>

    <span class="hljs-comment">// Value types &lt; 32 bytes -&gt; zero padded on the left side</span>
    <span class="hljs-comment">// 0x000000000000000000000000abababababababababababababababababababab</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_addr</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">address</span> addr <span class="hljs-operator">=</span> <span class="hljs-number">0xABaBaBaBABabABabAbAbABAbABabababaBaBABaB</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(addr);
    }

    <span class="hljs-comment">// Fixed sized bytes -&gt; zero padded on the righ side</span>
    <span class="hljs-comment">// 0xaabbccdd00000000000000000000000000000000000000000000000000000000</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_bytes4</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">bytes4</span> b4 <span class="hljs-operator">=</span> <span class="hljs-number">0xaabbccdd</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(b4);
    }

    <span class="hljs-comment">// Dynamic size types</span>
    <span class="hljs-comment">// offset | length | data</span>
    <span class="hljs-comment">// offset = 32 bytes index where data starts</span>
    <span class="hljs-comment">// length = 32 bytes data length</span>

    <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000020</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-comment">//   ababab0000000000000000000000000000000000000000000000000000000000</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">enode_bytes</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> b <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>(<span class="hljs-number">3</span>);
        b[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0xab</span>;
        b[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0xab</span>;
        b[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0xab</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(b);
    }

    <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000020</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000001</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000002</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">enode_uint8_arr</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">uint8</span>[] <span class="hljs-keyword">memory</span> a <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint8</span>[](<span class="hljs-number">3</span>);
        a[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        a[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
        a[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-number">3</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(a);
    }

    <span class="hljs-comment">// Fixed size arrays</span>
    <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000001</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000002</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">enode_uint256_fixed_size_arr</span>(<span class="hljs-params"></span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">uint8</span>[<span class="hljs-number">3</span>] <span class="hljs-keyword">memory</span> a;
        a[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        a[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-number">2</span>;
        a[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-number">3</span>;
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(a);
    }

    <span class="hljs-comment">// Struct</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Point</span> {
        <span class="hljs-keyword">uint256</span> x;
        <span class="hljs-keyword">uint128</span> y;
        <span class="hljs-keyword">uint128</span> z;
    }

    <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000001</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000002</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_struct</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        Point <span class="hljs-keyword">memory</span> p <span class="hljs-operator">=</span> Point(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(p);
    }

    <span class="hljs-comment">// Dynamic sized array of structs</span>
    <span class="hljs-comment">// offset | length | struct data</span>
    <span class="hljs-comment">// 0x0000000000000000000000000000000000000000000000000000000000000020</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000001</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000002</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000003</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000004</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000005</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000006</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000007</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000008</span>
    <span class="hljs-comment">//   0000000000000000000000000000000000000000000000000000000000000009</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_struct_array</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        Point[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Point[](<span class="hljs-number">3</span>);
        arr[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> Point(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>);
        arr[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> Point(<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>);
        arr[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> Point(<span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(arr);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemReturn</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_return_vals</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-comment">// return(start, len) - Halt execution and return data stored in memory from start to start + len</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">11</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0xa0</span>, <span class="hljs-number">22</span>)
            <span class="hljs-keyword">return</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x40</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_return_dyn_arr</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-comment">// ABI encode uint256[] array with 3 elements 11, 22 and 33</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// offset</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x20</span>)
            <span class="hljs-comment">// length</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x20</span>), <span class="hljs-number">3</span>)
            <span class="hljs-comment">// array elements</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x40</span>), <span class="hljs-number">11</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x60</span>), <span class="hljs-number">22</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x80</span>), <span class="hljs-number">33</span>)
            <span class="hljs-comment">// No need to update free memory pointer - function execution ends here</span>
            <span class="hljs-keyword">return</span>(<span class="hljs-number">0x80</span>, <span class="hljs-built_in">mul</span>(<span class="hljs-number">5</span>, <span class="hljs-number">0x20</span>))
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_return</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-comment">// Returns (11, 22)</span>
        test_return_vals();
        <span class="hljs-comment">// This code will never execute</span>
        <span class="hljs-keyword">return</span> (<span class="hljs-number">333</span>, <span class="hljs-number">444</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemRevert</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_revert</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-comment">// revert(start, len) - Revert executin and return data store in memory from start to start + len</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x80</span>, <span class="hljs-string">"ERROR HERE"</span>)
            <span class="hljs-keyword">revert</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x20</span>)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemKeccak</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_keccak</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-comment">// keccak256(start, len) - Keccak256 from data in memory from start to start + len</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">1</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0xa0</span>, <span class="hljs-number">2</span>)

            <span class="hljs-keyword">let</span> h <span class="hljs-operator">:=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x40</span>)
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0xc0</span>, h)

            <span class="hljs-keyword">return</span>(<span class="hljs-number">0xc0</span>, <span class="hljs-number">0x20</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">keccak</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">1</span>), <span class="hljs-keyword">uint256</span>(<span class="hljs-number">2</span>)));
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Target</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">return_uint256</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> x;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">return_bytes</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> n</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> out <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">bytes</span>(n);
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> n; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            out[i] <span class="hljs-operator">=</span> <span class="hljs-number">0xab</span>;
        }
        <span class="hljs-keyword">return</span> out;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">return_uint256_arr</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> n</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>)
    </span>{
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> out <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](n);
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> n; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            out[i] <span class="hljs-operator">=</span> i <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
        }
        <span class="hljs-keyword">return</span> out;
    }
}

<span class="hljs-comment">// calldatacopy(p, start, size) - Copy start to start + size calldata to memory starting at pointer p</span>
<span class="hljs-comment">// returndatasize - Get size of returned data from call, staticcall or delegatecall</span>
<span class="hljs-comment">// returndatacopy(p, start, size) - Copy start to start + size return data to memory starting at pointer p</span>
<span class="hljs-comment">// call(g, a, v, in, in_size, out, out_size)</span>
<span class="hljs-comment">// - call contract at a, use max g gas, send v wei</span>
<span class="hljs-comment">// - with input from memory in to in + in_size</span>
<span class="hljs-comment">// - use memory out to out + out_size for output</span>
<span class="hljs-comment">// staticcall(g, a, in, in_size, out, out_size) - read only version of call</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">YulStaticCall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_staticcall</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> a, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> p <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
            <span class="hljs-comment">// Copy calldata to memory</span>
            <span class="hljs-built_in">calldatacopy</span>(p, data.<span class="hljs-built_in">offset</span>, data.<span class="hljs-built_in">length</span>)
            <span class="hljs-comment">// No need to update free memory pointer?</span>
            <span class="hljs-comment">// mstore(0x40, add(p, data.length))</span>

            <span class="hljs-keyword">let</span> ok <span class="hljs-operator">:=</span> <span class="hljs-built_in">staticcall</span>(<span class="hljs-built_in">gas</span>(), a, p, data.<span class="hljs-built_in">length</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>)

            <span class="hljs-keyword">if</span> <span class="hljs-built_in">iszero</span>(ok) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }

            <span class="hljs-comment">// p := mload(0x40)</span>
            <span class="hljs-keyword">let</span> return_data_size <span class="hljs-operator">:=</span> <span class="hljs-built_in">returndatasize</span>()
            <span class="hljs-comment">// Copy returned data to memory</span>
            <span class="hljs-comment">// Is it safe to overwrite memory that was used for inputs?</span>
            <span class="hljs-built_in">returndatacopy</span>(p, <span class="hljs-number">0</span>, return_data_size)
            <span class="hljs-keyword">return</span>(p, return_data_size)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_abi_decode_uint256</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> a, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        test_staticcall(a, data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_abi_decode_bytes</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> a, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>)
    </span>{
        test_staticcall(a, data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_abi_decode_uint256_arr</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> a, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>)
    </span>{
        test_staticcall(a, data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_staticcall_return_abi_encoded_bytes</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> addr,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> out, <span class="hljs-keyword">uint256</span> return_data_size</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> p <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
            <span class="hljs-comment">// Copy calldata to memory</span>
            <span class="hljs-built_in">calldatacopy</span>(p, data.<span class="hljs-built_in">offset</span>, data.<span class="hljs-built_in">length</span>)
            <span class="hljs-comment">// Update free memory pointer</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x40</span>, <span class="hljs-built_in">add</span>(p, data.<span class="hljs-built_in">length</span>))

            <span class="hljs-keyword">let</span> ok <span class="hljs-operator">:=</span> <span class="hljs-built_in">staticcall</span>(<span class="hljs-built_in">gas</span>(), addr, p, data.<span class="hljs-built_in">length</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>)

            <span class="hljs-keyword">if</span> <span class="hljs-built_in">iszero</span>(ok) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }

            <span class="hljs-comment">// return_data_size = 32  for calling Target.f -&gt; uint256</span>
            <span class="hljs-comment">//                  = 96  for calling Target.g -&gt; bytes[] (32 offset, 32 length, 3 bytes padded to 32)</span>
            <span class="hljs-comment">//                  = 160 for calling Target.h -&gt; uint256[] (32 offset, 32 length, 32 x 3 elements)</span>
            return_data_size <span class="hljs-operator">:=</span> <span class="hljs-built_in">returndatasize</span>()
            <span class="hljs-comment">// Store length of return data to out</span>
            <span class="hljs-comment">// pointer to out = 0x60 (zero slot)</span>
            <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> safe to write to zero slot?</span>
            <span class="hljs-built_in">mstore</span>(out, return_data_size)
            <span class="hljs-comment">// Copy return data to out</span>
            <span class="hljs-built_in">returndatacopy</span>(<span class="hljs-built_in">add</span>(out, <span class="hljs-number">0x20</span>), <span class="hljs-number">0</span>, return_data_size)
            <span class="hljs-comment">// Update free memory pointer</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x40</span>, <span class="hljs-built_in">add</span>(out, <span class="hljs-built_in">add</span>(<span class="hljs-number">0x20</span>, return_data_size)))
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Counter</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">return</span> count;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">YulCall</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_call</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> a, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> out</span>)
    </span>{
        <span class="hljs-keyword">bytes32</span> data_ptr;
        <span class="hljs-keyword">bytes32</span> out_ptr;
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// 0x80</span>
            data_ptr <span class="hljs-operator">:=</span> data
            <span class="hljs-comment">// 0x60</span>
            out_ptr <span class="hljs-operator">:=</span> out

            <span class="hljs-keyword">let</span> data_size <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(data)
            <span class="hljs-keyword">let</span> data_start <span class="hljs-operator">:=</span> <span class="hljs-built_in">add</span>(data, <span class="hljs-number">0x20</span>)
            <span class="hljs-keyword">let</span> ok <span class="hljs-operator">:=</span> <span class="hljs-built_in">call</span>(<span class="hljs-built_in">gas</span>(), a, <span class="hljs-built_in">callvalue</span>(), data_start, data_size, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>)

            <span class="hljs-keyword">if</span> <span class="hljs-built_in">iszero</span>(ok) { <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>) }

            <span class="hljs-keyword">let</span> return_data_size <span class="hljs-operator">:=</span> <span class="hljs-built_in">returndatasize</span>()
            <span class="hljs-comment">// Store length of return data to out</span>
            <span class="hljs-built_in">mstore</span>(out, return_data_size)
            <span class="hljs-comment">// Copy return data to out</span>
            <span class="hljs-built_in">returndatacopy</span>(<span class="hljs-built_in">add</span>(out, <span class="hljs-number">0x20</span>), <span class="hljs-number">0</span>, return_data_size)
            <span class="hljs-comment">// Update free memory pointer</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x40</span>, <span class="hljs-built_in">add</span>(out, <span class="hljs-built_in">add</span>(<span class="hljs-number">0x20</span>, return_data_size)))
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_inc</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> counter</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> count</span>) </span>{
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res <span class="hljs-operator">=</span> test_call(counter, <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Counter.inc, ()));
        count <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(res, (<span class="hljs-keyword">uint256</span>));
    }
}

<span class="hljs-comment">// Memory expansion gas cost</span>
<span class="hljs-comment">// Gas cost is quadratic to memory allocation.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemExp</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">alloc_mem</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> n</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">uint256</span> gas_start <span class="hljs-operator">=</span> <span class="hljs-built_in">gasleft</span>();
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](n);
        <span class="hljs-keyword">uint256</span> gas_end <span class="hljs-operator">=</span> <span class="hljs-built_in">gasleft</span>();
        <span class="hljs-keyword">return</span> gas_start <span class="hljs-operator">-</span> gas_end;
    }
}

<span class="hljs-comment">// arr size | gas</span>
<span class="hljs-comment">//        0 |    120</span>
<span class="hljs-comment">//        1 |    178</span>
<span class="hljs-comment">//       10 |    232</span>
<span class="hljs-comment">//       20 |    293</span>
<span class="hljs-comment">//       30 |    354</span>
<span class="hljs-comment">//       40 |    415</span>
<span class="hljs-comment">//       50 |    477</span>
<span class="hljs-comment">//       60 |    540</span>
<span class="hljs-comment">//       70 |    602</span>
<span class="hljs-comment">//       80 |    666</span>
<span class="hljs-comment">//       90 |    729</span>
<span class="hljs-comment">//      100 |    793</span>
<span class="hljs-comment">//      110 |    857</span>
<span class="hljs-comment">//      120 |    922</span>
<span class="hljs-comment">//      130 |    987</span>
<span class="hljs-comment">//      140 |   1053</span>
<span class="hljs-comment">//      150 |   1118</span>
<span class="hljs-comment">//      160 |   1185</span>
<span class="hljs-comment">//      170 |   1251</span>
<span class="hljs-comment">//      180 |   1318</span>
<span class="hljs-comment">//      190 |   1386</span>
<span class="hljs-comment">//      200 |   1454</span>

<span class="hljs-comment">//     1000 |   8144</span>
<span class="hljs-comment">//     2000 |  20023</span>
<span class="hljs-comment">//     3000 |  35808</span>
<span class="hljs-comment">//     4000 |  55500</span>
<span class="hljs-comment">//     5000 |  79097</span>
<span class="hljs-comment">//     6000 | 106601</span>
<span class="hljs-comment">//     7000 | 138011</span>
<span class="hljs-comment">//     8000 | 173328</span>
<span class="hljs-comment">//     9000 | 212550</span>
<span class="hljs-comment">//    10000 | 255679</span>
<span class="hljs-comment">//    11000 | 302715</span>
<span class="hljs-comment">//    12000 | 353656</span>
<span class="hljs-comment">//    13000 | 408504</span>
<span class="hljs-comment">//    14000 | 467257</span>
<span class="hljs-comment">//    15000 | 529918</span>
<span class="hljs-comment">//    16000 | 596484</span>
<span class="hljs-comment">//    17000 | 666957</span>
<span class="hljs-comment">//    18000 | 741336</span>
<span class="hljs-comment">//    19000 | 819621</span>
<span class="hljs-comment">//    20000 | 901812</span>
</code></pre><h3>References</h3>
<p><a href="https://docs.soliditylang.org/en/latest/internals/layout_in_memory.html">Solidity document</a></p>
<p><a href="https://www.evm.codes/">EVM Codes</a></p>
`

export default html
