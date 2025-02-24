// metadata
export const version = "0.8.26"
export const title = "EVM Memory Layout in Solidity"
export const description = "Example of EVM memory in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/evm-memory-layout-solidity-code-example"

export const keywords = ["data", "evm", "memory", "yul", "assembly"]

export const codes = [
  {
    fileName: "YulMem.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI2OwoKLy8gTWVtb3J5IGxheW91dAovLyBhcnJheSBvZiBsZW5ndGggMioqMjU2ICgzMiBieXRlcyksIGVhY2ggZWxlbWVudCBzdG9yZXMgMSBieXRlICgweDAwIHRvIDB4ZmYpCi8vIGluZGV4ICAgICAwICAgIDEgICAgMiAgIC4uLiAgIDB4ZmZmLi4uZmZmID0gMioqMjU2IC0gMQovLyBtZW1vcnkgfCAwMCB8IDAwIHwgMDAgfCAuLi4gfCAwMCB8CgovLyBSZXNlcnZlZCBzbG90cwovLyAweDAwIC0gMHgzZiAoNjQgYnl0ZXMpOiBzY3JhdGNoIHNwYWNlIGZvciBoYXNoaW5nIG1ldGhvZHMKLy8gMHg0MCAtIDB4NWYgKDMyIGJ5dGVzKTogZnJlZSBtZW1vcnkgcG9pbnRlciAtIHBvaW50ZXIgdG8gbmV4dCBhdmFpbGFibGUgbG9jYXRpb24gaW4gbWVtb3J5IHRvIHN0b3JlIGRhdGEKLy8gMHg2MCAtIDB4N2YgKDMyIGJ5dGVzKTogemVybyBzbG90IC0gdXNlZCBhcyBpbml0aWFsIHZhbHVlIGZvciBkeW5hbWljIG1lbW9yeSBhcnJheXMgYW5kIHNob3VsZCBuZXZlciBiZSB3cml0dGVuIHRvCgovLyBGcmVlIG1lbW9yeSBwb2ludGVyICgweDQwKQovLyAweDgwID0gRnJlZSBtZW1vcnkgcG9pbnRlciBpbml0aWFsbHkgcG9pbnRzIGhlcmUKY29udHJhY3QgTWVtQmFzaWMgewogICAgLy8gbXN0b3JlKHAsIHYpID0gc3RvcmUgMzIgYnl0ZXMgdG8gbWVtb3J5IHN0YXJ0aW5nIGF0IG1lbW9yeSBsb2NhdGlvbiBwCiAgICAvLyBtbG9hZChwKSA9IGxvYWQgMzIgYnl0ZXMgZnJvbSBtZW1vcnkgc3RhcnRpbmcgYXQgbWVtb3J5IGxvY2F0aW9uIHAKICAgIGZ1bmN0aW9uIHRlc3RfMSgpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzMzIgYjMyKSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBGcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIC8vIHAgPSAweDgwCiAgICAgICAgICAgIGxldCBwIDo9IG1sb2FkKDB4NDApCiAgICAgICAgICAgIG1zdG9yZShwLCAweGFiYWJhYikKICAgICAgICAgICAgYjMyIDo9IG1sb2FkKHApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfMigpIHB1YmxpYyBwdXJlIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIG1zdG9yZSgwLCAweDExKQogICAgICAgICAgICAvLyBpbmRleDogMzIgYnl0ZXMgb2YgZGF0YSBzdG9yZWQgaW4gbWVtb3J5IGZyb20gaW5kZXgKICAgICAgICAgICAgLy8gIDB4MDA6IDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMQogICAgICAgICAgICBtc3RvcmUoMSwgMHgyMikKICAgICAgICAgICAgLy8gICAgICAgICAgIDAgMQogICAgICAgICAgICAvLyAgMHgwMDogMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICAgICAgICAgIC8vICAweDIwOiAweDIyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgbXN0b3JlKDIsIDB4MzMpCiAgICAgICAgICAgIC8vICAgICAgICAgICAwIDEgMgogICAgICAgICAgICAvLyAgMHgwMDogMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICAgICAgICAgIC8vICAweDIwOiAweDAwMzMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgbXN0b3JlKDMsIDB4NDQpCiAgICAgICAgICAgIC8vICAgICAgICAgICAwIDEgMiAzCiAgICAgICAgICAgIC8vICAweDAwOiAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgLy8gIDB4MjA6IDB4MDAwMDQ0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgTWVtU3RydWN0IHsKICAgIC8vIE1lbW9yeSBkYXRhIGlzIG5vdCBwYWNrZWQgLSBhbGwgZGF0YSBzdG9yZWQgaW4gY2h1bmtzIG9mIDMyIGJ5dGVzCiAgICBzdHJ1Y3QgUG9pbnQgewogICAgICAgIHVpbnQyNTYgeDsKICAgICAgICB1aW50MzIgeTsKICAgICAgICB1aW50MzIgejsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3JlYWQoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IHgsIHVpbnQyNTYgeSwgdWludDI1NiB6KQogICAgewogICAgICAgIC8vIFBvaW50IGlzIGxvYWRlZCB0byBtZW1vcnkgc3RhcnRpbmcgYXQgMHg4MAogICAgICAgIC8vIDB4ODAgPSBpbml0aWFsIGZyZWUgbWVtb3J5CiAgICAgICAgUG9pbnQgbWVtb3J5IHAgPSBQb2ludCgxLCAyLCAzKTsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBsb2FkIDMyIGJ5dGVzIHN0YXJ0aW5nIGZyb20gMHg4MAogICAgICAgICAgICB4IDo9IG1sb2FkKDB4ODApCiAgICAgICAgICAgIC8vIGxvYWQgMzIgYnl0ZXMgc3RhcnRpbmcgZnJvbSAweGEwICgweDgwICsgMzIgPSAweGEwKQogICAgICAgICAgICB5IDo9IG1sb2FkKDB4YTApCiAgICAgICAgICAgIC8vIGxvYWQgMzIgYnl0ZXMgc3RhcnRpbmcgZnJvbSAweGMwICgweGEwICsgMzIgPSAweGMwKQogICAgICAgICAgICB6IDo9IG1sb2FkKDB4YzApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfd3JpdGUoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyIGZyZWVfbWVtX3B0ciwgdWludDI1NiB4LCB1aW50MjU2IHksIHVpbnQyNTYgeikKICAgIHsKICAgICAgICAvLyBBbGxvY2F0ZXMgbWVtb3J5IDB4ODAgdG8gMHhkZiB0byBQb2ludAogICAgICAgIC8vIEZyZWUgbWVtb3J5IHBvaW50ZXIgPSAweGRmICsgMSA9IDB4ZTAKICAgICAgICBQb2ludCBtZW1vcnkgcDsKCiAgICAgICAgLy8gV3JpdGUKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIHN0b3JlIHRvIDB4ODAKICAgICAgICAgICAgbXN0b3JlKHAsIDExKQogICAgICAgICAgICAvLyBzdG9yZSB0byAweGEwCiAgICAgICAgICAgIG1zdG9yZShhZGQocCwgMHgyMCksIDIyKQogICAgICAgICAgICAvLyBzdG9yZSB0byAweGMwCiAgICAgICAgICAgIG1zdG9yZShhZGQocCwgMHg0MCksIDMzKQogICAgICAgICAgICAvLyAweGUwCiAgICAgICAgICAgIGZyZWVfbWVtX3B0ciA6PSBtbG9hZCgweDQwKQogICAgICAgIH0KCiAgICAgICAgeCA9IHAueDsKICAgICAgICB5ID0gcC55OwogICAgICAgIHogPSBwLno7CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUZpeGVkQXJyYXkgewogICAgZnVuY3Rpb24gdGVzdF9yZWFkKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NiBhMCwgdWludDI1NiBhMSwgdWludDI1NiBhMikKICAgIHsKICAgICAgICAvLyBhcnIgaXMgbG9hZGVkIHRvIG1lbW9yeSBzdGFydGluZyBhdCAweDgwCiAgICAgICAgLy8gRWFjaCBhcnJheSBlbGVtZW50IGlzIHN0b3JlZCBhcyAzMiBieXRlcwogICAgICAgIHVpbnQzMlszXSBtZW1vcnkgYXJyID0gW3VpbnQzMigxKSwgdWludDMyKDIpLCB1aW50MzIoMyldOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGEwIDo9IG1sb2FkKDB4ODApCiAgICAgICAgICAgIGExIDo9IG1sb2FkKDB4YTApCiAgICAgICAgICAgIGEyIDo9IG1sb2FkKDB4YzApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfd3JpdGUoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGEwLCB1aW50MjU2IGExLCB1aW50MjU2IGEyKQogICAgewogICAgICAgIHVpbnQzMlszXSBtZW1vcnkgYXJyOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIDB4ODAKICAgICAgICAgICAgbXN0b3JlKGFyciwgMTEpCiAgICAgICAgICAgIC8vIDB4YTAKICAgICAgICAgICAgbXN0b3JlKGFkZChhcnIsIDB4MjApLCAyMikKICAgICAgICAgICAgLy8gMHhjMAogICAgICAgICAgICBtc3RvcmUoYWRkKGFyciwgMHg0MCksIDMzKQogICAgICAgIH0KCiAgICAgICAgYTAgPSBhcnJbMF07CiAgICAgICAgYTEgPSBhcnJbMV07CiAgICAgICAgYTIgPSBhcnJbMl07CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUR5bmFtaWNBcnJheSB7CiAgICBmdW5jdGlvbiB0ZXN0X3JlYWQoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyIHAsIHVpbnQyNTYgbGVuLCB1aW50MjU2IGEwLCB1aW50MjU2IGExLCB1aW50MjU2IGEyKQogICAgewogICAgICAgIHVpbnQyNTZbXSBtZW1vcnkgYXJyID0gbmV3IHVpbnQyNTZbXSg1KTsKICAgICAgICBhcnJbMF0gPSB1aW50MjU2KDExKTsKICAgICAgICBhcnJbMV0gPSB1aW50MjU2KDIyKTsKICAgICAgICBhcnJbMl0gPSB1aW50MjU2KDMzKTsKICAgICAgICBhcnJbM10gPSB1aW50MjU2KDQ0KTsKICAgICAgICBhcnJbNF0gPSB1aW50MjU2KDU1KTsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBwIDo9IGFycgogICAgICAgICAgICAvLyAweDgwCiAgICAgICAgICAgIGxlbiA6PSBtbG9hZChhcnIpCiAgICAgICAgICAgIC8vIDB4YTAKICAgICAgICAgICAgYTAgOj0gbWxvYWQoYWRkKGFyciwgMHgyMCkpCiAgICAgICAgICAgIC8vIDB4YzAKICAgICAgICAgICAgYTEgOj0gbWxvYWQoYWRkKGFyciwgMHg0MCkpCiAgICAgICAgICAgIC8vIDB4ZTAKICAgICAgICAgICAgYTIgOj0gbWxvYWQoYWRkKGFyciwgMHg2MCkpCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfd3JpdGUoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlczMyIHAsIHVpbnQyNTZbXSBtZW1vcnkpIHsKICAgICAgICB1aW50MjU2W10gbWVtb3J5IGFyciA9IG5ldyB1aW50MjU2W10oMCk7CgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgcCA6PSBhcnIKICAgICAgICAgICAgLy8gU3RvcmUgbGVuZ3RoIG9mIGFycgogICAgICAgICAgICBtc3RvcmUoYXJyLCAzKQogICAgICAgICAgICAvLyBTdG9yZSAxLCAyLCAzCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDIwKSwgMTEpCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDQwKSwgMjIpCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDYwKSwgMzMpCiAgICAgICAgICAgIC8vIFVwZGF0ZSBmcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIG1zdG9yZSgweDQwLCBhZGQoYXJyLCAweDgwKSkKICAgICAgICB9CgogICAgICAgIC8vIERhdGEgd2lsbCBiZSBBQkkgZW5jb2RlZCB3aGVuIGFyciBpcyByZXR1cm5lZCB0byBjYWxsZXIKICAgICAgICByZXR1cm4gKHAsIGFycik7CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUludGVybmFsRnVuY1JldHVybiB7CiAgICBmdW5jdGlvbiBpbnRlcm5hbF9mdW5jX3JldHVybl92YWwoKSBwcml2YXRlIHB1cmUgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiB1aW50MjU2KDB4YWJhYmFiKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3ZhbCgpIHB1YmxpYyBwdXJlIHsKICAgICAgICAvLyAweGFiYWJhYiB3aWxsIGJlIHN0b3JlZCBpbiB0b3Agb2YgdGhlIHN0YWNrCiAgICAgICAgaW50ZXJuYWxfZnVuY19yZXR1cm5fdmFsKCk7CiAgICB9CgogICAgZnVuY3Rpb24gaW50ZXJuYWxfZnVuY19yZXR1cm5fbWVtKCkKICAgICAgICBwcml2YXRlCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJ5dGVzMzJbXSBtZW1vcnkpCiAgICB7CiAgICAgICAgYnl0ZXMzMltdIG1lbW9yeSBhcnIgPSBuZXcgYnl0ZXMzMltdKDMpOwogICAgICAgIGFyclswXSA9IGJ5dGVzMzIodWludDI1NigweGFhYSkpOwogICAgICAgIGFyclsxXSA9IGJ5dGVzMzIodWludDI1NigweGJiYikpOwogICAgICAgIGFyclsyXSA9IGJ5dGVzMzIodWludDI1NigweGNjYykpOwogICAgICAgIHJldHVybiBhcnI7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9tZW0oKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGxlbiwgYnl0ZXMzMiBhMCwgYnl0ZXMzMiBhMSwgYnl0ZXMzMiBhMikKICAgIHsKICAgICAgICAvLyBTdG9yZXMgMHg4MCB0byB0b3Agb2YgdGhlIHN0YWNrCiAgICAgICAgLy8gMHg4MCA9IG1lbW9yeSBwb2ludGVyIHRvIGJlZ2lubmluZyBvZiBhcnIKICAgICAgICBpbnRlcm5hbF9mdW5jX3JldHVybl9tZW0oKTsKICAgICAgICAvLyBSZWFkIGRhdGEgZnJvbSBhcnIsIGluaXRpYWxpemVkIGluIGludGVybmFsX2Z1bmNfcmV0dXJuX21lbSwgdXNpbmcgYXNzZW1ibHkKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxlbiA6PSBtbG9hZCgweDgwKQogICAgICAgICAgICBhMCA6PSBtbG9hZCgweGEwKQogICAgICAgICAgICBhMSA6PSBtbG9hZCgweGMwKQogICAgICAgICAgICBhMiA6PSBtbG9hZCgweGUwKQogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgQUJJRW5jb2RlIHsKICAgIC8vIGpzIGNvZGUgdG8gc3BsaXQgc3RyaW5nIGludG8gY2h1bmtzIG9mIGxlbmd0aCA2NAogICAgLy8gc3RyLm1hdGNoKC8uezEsNjR9L2cpCgogICAgLy8gVmFsdWUgdHlwZXMgPCAzMiBieXRlcyAtPiB6ZXJvIHBhZGRlZCBvbiB0aGUgbGVmdCBzaWRlCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWIKICAgIGZ1bmN0aW9uIGVuY29kZV9hZGRyKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgYWRkcmVzcyBhZGRyID0gMHhBQmFCYUJhQkFCYWJBQmFiQWJBYkFCQWJBQmFiYWJhYmFCYUJBQmFCOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGFkZHIpOwogICAgfQoKICAgIC8vIEZpeGVkIHNpemVkIGJ5dGVzIC0+IHplcm8gcGFkZGVkIG9uIHRoZSByaWdodCBzaWRlCiAgICAvLyAweGFhYmJjY2RkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgIGZ1bmN0aW9uIGVuY29kZV9ieXRlczQoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICBieXRlczQgYjQgPSAweGFhYmJjY2RkOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGI0KTsKICAgIH0KCiAgICAvLyBEeW5hbWljIHNpemUgdHlwZXMKICAgIC8vIG9mZnNldCB8IGxlbmd0aCB8IGRhdGEKICAgIC8vIG9mZnNldCA9IDMyIGJ5dGVzIGluZGV4IHdoZXJlIGRhdGEgc3RhcnRzCiAgICAvLyBsZW5ndGggPSAzMiBieXRlcyBkYXRhIGxlbmd0aAoKICAgIC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMAogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICAvLyAgIGFiYWJhYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgIGZ1bmN0aW9uIGVuY29kZV9ieXRlcygpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIGJ5dGVzIG1lbW9yeSBiID0gbmV3IGJ5dGVzKDMpOwogICAgICAgIGJbMF0gPSAweGFiOwogICAgICAgIGJbMV0gPSAweGFiOwogICAgICAgIGJbMl0gPSAweGFiOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGIpOwogICAgfQoKICAgIC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMAogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMgogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICBmdW5jdGlvbiBlbmNvZGVfdWludDhfYXJyKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgdWludDhbXSBtZW1vcnkgYSA9IG5ldyB1aW50OFtdKDMpOwogICAgICAgIGFbMF0gPSAxOwogICAgICAgIGFbMV0gPSAyOwogICAgICAgIGFbMl0gPSAzOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGEpOwogICAgfQoKICAgIC8vIEZpeGVkIHNpemUgYXJyYXlzCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMgogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICBmdW5jdGlvbiBlbmNvZGVfdWludDI1Nl9maXhlZF9zaXplX2FycigpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkKICAgIHsKICAgICAgICB1aW50OFszXSBtZW1vcnkgYTsKICAgICAgICBhWzBdID0gMTsKICAgICAgICBhWzFdID0gMjsKICAgICAgICBhWzJdID0gMzsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShhKTsKICAgIH0KCiAgICAvLyBTdHJ1Y3QKICAgIHN0cnVjdCBQb2ludCB7CiAgICAgICAgdWludDI1NiB4OwogICAgICAgIHVpbnQxMjggeTsKICAgICAgICB1aW50MTI4IHo7CiAgICB9CgogICAgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMwogICAgZnVuY3Rpb24gZW5jb2RlX3N0cnVjdCgpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIFBvaW50IG1lbW9yeSBwID0gUG9pbnQoMSwgMiwgMyk7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUocCk7CiAgICB9CgogICAgLy8gRHluYW1pYyBzaXplZCBhcnJheSBvZiBzdHJ1Y3RzCiAgICAvLyBvZmZzZXQgfCBsZW5ndGggfCBzdHJ1Y3QgZGF0YQogICAgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMQogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNAogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1CiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNwogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4CiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDkKICAgIGZ1bmN0aW9uIGVuY29kZV9zdHJ1Y3RfYXJyYXkoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICBQb2ludFtdIG1lbW9yeSBhcnIgPSBuZXcgUG9pbnRbXSgzKTsKICAgICAgICBhcnJbMF0gPSBQb2ludCgxLCAyLCAzKTsKICAgICAgICBhcnJbMV0gPSBQb2ludCg0LCA1LCA2KTsKICAgICAgICBhcnJbMl0gPSBQb2ludCg3LCA4LCA5KTsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShhcnIpOwogICAgfQp9Cgpjb250cmFjdCBNZW1SZXR1cm4gewogICAgZnVuY3Rpb24gdGVzdF9yZXR1cm5fdmFscygpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQyNTYsIHVpbnQyNTYpIHsKICAgICAgICAvLyByZXR1cm4oc3RhcnQsIGxlbikgLSBIYWx0IGV4ZWN1dGlvbiBhbmQgcmV0dXJuIGRhdGEgc3RvcmVkIGluIG1lbW9yeSBmcm9tIHN0YXJ0IHRvIHN0YXJ0ICsgbGVuCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBtc3RvcmUoMHg4MCwgMTEpCiAgICAgICAgICAgIG1zdG9yZSgweGEwLCAyMikKICAgICAgICAgICAgcmV0dXJuKDB4ODAsIDB4NDApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfcmV0dXJuX2R5bl9hcnIoKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2W10gbWVtb3J5KSB7CiAgICAgICAgLy8gQUJJIGVuY29kZSB1aW50MjU2W10gYXJyYXkgd2l0aCAzIGVsZW1lbnRzIDExLCAyMiBhbmQgMzMKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIG9mZnNldAogICAgICAgICAgICBtc3RvcmUoMHg4MCwgMHgyMCkKICAgICAgICAgICAgLy8gbGVuZ3RoCiAgICAgICAgICAgIG1zdG9yZShhZGQoMHg4MCwgMHgyMCksIDMpCiAgICAgICAgICAgIC8vIGFycmF5IGVsZW1lbnRzCiAgICAgICAgICAgIG1zdG9yZShhZGQoMHg4MCwgMHg0MCksIDExKQogICAgICAgICAgICBtc3RvcmUoYWRkKDB4ODAsIDB4NjApLCAyMikKICAgICAgICAgICAgbXN0b3JlKGFkZCgweDgwLCAweDgwKSwgMzMpCiAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gdXBkYXRlIGZyZWUgbWVtb3J5IHBvaW50ZXIgLSBmdW5jdGlvbiBleGVjdXRpb24gZW5kcyBoZXJlCiAgICAgICAgICAgIHJldHVybigweDgwLCBtdWwoNSwgMHgyMCkpCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfcmV0dXJuKCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NiwgdWludDI1NikgewogICAgICAgIC8vIFJldHVybnMgKDExLCAyMikKICAgICAgICB0ZXN0X3JldHVybl92YWxzKCk7CiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgbmV2ZXIgZXhlY3V0ZQogICAgICAgIHJldHVybiAoMzMzLCA0NDQpOwogICAgfQp9Cgpjb250cmFjdCBNZW1SZXZlcnQgewogICAgZnVuY3Rpb24gdGVzdF9yZXZlcnQoKSBwdWJsaWMgcHVyZSB7CiAgICAgICAgLy8gcmV2ZXJ0KHN0YXJ0LCBsZW4pIC0gUmV2ZXJ0IGV4ZWN1dGlvbiBhbmQgcmV0dXJuIGRhdGEgc3RvcmUgaW4gbWVtb3J5IGZyb20gc3RhcnQgdG8gc3RhcnQgKyBsZW4KICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIG1zdG9yZSgweDgwLCAiRVJST1IgSEVSRSIpCiAgICAgICAgICAgIHJldmVydCgweDgwLCAweDIwKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3JldmVydF93aXRoX2Vycm9yX21zZygpIHB1YmxpYyBwdXJlIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxldCBwIDo9IG1sb2FkKDB4NDApCiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHNlbGVjdG9yIG9mIEVycm9yKHN0cmluZykKICAgICAgICAgICAgLy8gMHgwOGMzNzlhMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICAgICAgICAgIC8vIDB4MDhjMzc5YTAgaXMgMzIgYml0cywgc2hpZnQgbGVmdCBieSAyMjQgdG8gbWFrZSBpdCAyNTYgYml0cwogICAgICAgICAgICAvLyAyNTUgLSAzMSA9IDIyNAogICAgICAgICAgICBtc3RvcmUocCwgc2hsKDIyNCwgMHgwOGMzNzlhMCkpCiAgICAgICAgICAgIC8vIFN0cmluZyBvZmZzZXQKICAgICAgICAgICAgbXN0b3JlKGFkZChwLCAweDA0KSwgMHgyMCkKICAgICAgICAgICAgLy8gU3RyaW5nIGxlbmd0aAogICAgICAgICAgICBtc3RvcmUoYWRkKHAsIDB4MjQpLCA1KQogICAgICAgICAgICAvLyBNZXNzYWdlIChtdXN0IGJlIGxlc3MgdGhhbiAzMiBieXRlcykKICAgICAgICAgICAgbXN0b3JlKGFkZChwLCAweDQ0KSwgIkVSUk9SIikKICAgICAgICAgICAgLy8gZnVuY3Rpb24gc2VsZWN0b3IgKyBvZmZzZXQgKyBzdHJpbmcgbGVuZ3RoICsgc3RyaW5nIG1lc3NhZ2UKICAgICAgICAgICAgLy8gPSAweDA0ICsgMHgyMCArIDB4MjAgKyAweDIwCiAgICAgICAgICAgIC8vID0gMHg2NAogICAgICAgICAgICByZXZlcnQocCwgMHg2NCkKICAgICAgICB9CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUtlY2NhayB7CiAgICBmdW5jdGlvbiB0ZXN0X2tlY2NhaygpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzMzIpIHsKICAgICAgICAvLyBrZWNjYWsyNTYoc3RhcnQsIGxlbikgLSBLZWNjYWsyNTYgZnJvbSBkYXRhIGluIG1lbW9yeSBmcm9tIHN0YXJ0IHRvIHN0YXJ0ICsgbGVuCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBtc3RvcmUoMHg4MCwgMSkKICAgICAgICAgICAgbXN0b3JlKDB4YTAsIDIpCgogICAgICAgICAgICBsZXQgaCA6PSBrZWNjYWsyNTYoMHg4MCwgMHg0MCkKICAgICAgICAgICAgbXN0b3JlKDB4YzAsIGgpCgogICAgICAgICAgICByZXR1cm4oMHhjMCwgMHgyMCkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24ga2VjY2FrKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMzMikgewogICAgICAgIHJldHVybiBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZCh1aW50MjU2KDEpLCB1aW50MjU2KDIpKSk7CiAgICB9Cn0KCmNvbnRyYWN0IFRhcmdldCB7CiAgICBmdW5jdGlvbiByZXR1cm5fdWludDI1Nih1aW50MjU2IHgpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICByZXR1cm4geDsKICAgIH0KCiAgICBmdW5jdGlvbiByZXR1cm5fYnl0ZXModWludDI1NiBuKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICBieXRlcyBtZW1vcnkgb3V0ID0gbmV3IGJ5dGVzKG4pOwogICAgICAgIGZvciAodWludDI1NiBpOyBpIDwgbjsgaSsrKSB7CiAgICAgICAgICAgIG91dFtpXSA9IDB4YWI7CiAgICAgICAgfQogICAgICAgIHJldHVybiBvdXQ7CiAgICB9CgogICAgZnVuY3Rpb24gcmV0dXJuX3VpbnQyNTZfYXJyKHVpbnQyNTYgbikKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NltdIG1lbW9yeSkKICAgIHsKICAgICAgICB1aW50MjU2W10gbWVtb3J5IG91dCA9IG5ldyB1aW50MjU2W10obik7CiAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgbjsgaSsrKSB7CiAgICAgICAgICAgIG91dFtpXSA9IGkgKyAxOwogICAgICAgIH0KICAgICAgICByZXR1cm4gb3V0OwogICAgfQp9CgovLyBjYWxsZGF0YWNvcHkocCwgc3RhcnQsIHNpemUpIC0gQ29weSBzdGFydCB0byBzdGFydCArIHNpemUgY2FsbGRhdGEgdG8gbWVtb3J5IHN0YXJ0aW5nIGF0IHBvaW50ZXIgcAovLyByZXR1cm5kYXRhc2l6ZSAtIEdldCBzaXplIG9mIHJldHVybmVkIGRhdGEgZnJvbSBjYWxsLCBzdGF0aWNjYWxsIG9yIGRlbGVnYXRlY2FsbAovLyByZXR1cm5kYXRhY29weShwLCBzdGFydCwgc2l6ZSkgLSBDb3B5IHN0YXJ0IHRvIHN0YXJ0ICsgc2l6ZSByZXR1cm4gZGF0YSB0byBtZW1vcnkgc3RhcnRpbmcgYXQgcG9pbnRlciBwCi8vIGNhbGwoZywgYSwgdiwgaW4sIGluX3NpemUsIG91dCwgb3V0X3NpemUpCi8vIC0gY2FsbCBjb250cmFjdCBhdCBhLCB1c2UgbWF4IGcgZ2FzLCBzZW5kIHYgd2VpCi8vIC0gd2l0aCBpbnB1dCBmcm9tIG1lbW9yeSBpbiB0byBpbiArIGluX3NpemUKLy8gLSB1c2UgbWVtb3J5IG91dCB0byBvdXQgKyBvdXRfc2l6ZSBmb3Igb3V0cHV0Ci8vIHN0YXRpY2NhbGwoZywgYSwgaW4sIGluX3NpemUsIG91dCwgb3V0X3NpemUpIC0gcmVhZCBvbmx5IHZlcnNpb24gb2YgY2FsbApjb250cmFjdCBZdWxTdGF0aWNDYWxsIHsKICAgIGZ1bmN0aW9uIHRlc3Rfc3RhdGljY2FsbChhZGRyZXNzIGEsIGJ5dGVzIGNhbGxkYXRhIGRhdGEpIHB1YmxpYyB2aWV3IHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxldCBwIDo9IG1sb2FkKDB4NDApCiAgICAgICAgICAgIC8vIENvcHkgY2FsbGRhdGEgdG8gbWVtb3J5CiAgICAgICAgICAgIGNhbGxkYXRhY29weShwLCBkYXRhLm9mZnNldCwgZGF0YS5sZW5ndGgpCgogICAgICAgICAgICBsZXQgb2sgOj0gc3RhdGljY2FsbChnYXMoKSwgYSwgcCwgZGF0YS5sZW5ndGgsIDAsIDApCgogICAgICAgICAgICBpZiBpc3plcm8ob2spIHsgcmV2ZXJ0KDAsIDApIH0KCiAgICAgICAgICAgIC8vIHAgOj0gbWxvYWQoMHg0MCkKICAgICAgICAgICAgbGV0IHJldHVybl9kYXRhX3NpemUgOj0gcmV0dXJuZGF0YXNpemUoKQogICAgICAgICAgICAvLyBDb3B5IHJldHVybmVkIGRhdGEgdG8gbWVtb3J5CiAgICAgICAgICAgIC8vIElzIGl0IHNhZmUgdG8gb3ZlcndyaXRlIG1lbW9yeSB0aGF0IHdhcyB1c2VkIGZvciBpbnB1dHM/CiAgICAgICAgICAgIHJldHVybmRhdGFjb3B5KHAsIDAsIHJldHVybl9kYXRhX3NpemUpCiAgICAgICAgICAgIHJldHVybihwLCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X2FiaV9kZWNvZGVfdWludDI1NihhZGRyZXNzIGEsIGJ5dGVzIGNhbGxkYXRhIGRhdGEpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTYpCiAgICB7CiAgICAgICAgdGVzdF9zdGF0aWNjYWxsKGEsIGRhdGEpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfYWJpX2RlY29kZV9ieXRlcyhhZGRyZXNzIGEsIGJ5dGVzIGNhbGxkYXRhIGRhdGEpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkKICAgIHsKICAgICAgICB0ZXN0X3N0YXRpY2NhbGwoYSwgZGF0YSk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9hYmlfZGVjb2RlX3VpbnQyNTZfYXJyKGFkZHJlc3MgYSwgYnl0ZXMgY2FsbGRhdGEgZGF0YSkKICAgICAgICBwdWJsaWMKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1NltdIG1lbW9yeSkKICAgIHsKICAgICAgICB0ZXN0X3N0YXRpY2NhbGwoYSwgZGF0YSk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9zdGF0aWNjYWxsX3JldHVybl9hYmlfZW5jb2RlZF9ieXRlcygKICAgICAgICBhZGRyZXNzIGFkZHIsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBwdWJsaWMgdmlldyByZXR1cm5zIChieXRlcyBtZW1vcnkgb3V0LCB1aW50MjU2IHJldHVybl9kYXRhX3NpemUpIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxldCBwIDo9IG1sb2FkKDB4NDApCiAgICAgICAgICAgIC8vIENvcHkgY2FsbGRhdGEgdG8gbWVtb3J5CiAgICAgICAgICAgIGNhbGxkYXRhY29weShwLCBkYXRhLm9mZnNldCwgZGF0YS5sZW5ndGgpCiAgICAgICAgICAgIC8vIFVwZGF0ZSBmcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIG1zdG9yZSgweDQwLCBhZGQocCwgZGF0YS5sZW5ndGgpKQoKICAgICAgICAgICAgbGV0IG9rIDo9IHN0YXRpY2NhbGwoZ2FzKCksIGFkZHIsIHAsIGRhdGEubGVuZ3RoLCAwLCAwKQoKICAgICAgICAgICAgaWYgaXN6ZXJvKG9rKSB7IHJldmVydCgwLCAwKSB9CgogICAgICAgICAgICAvLyByZXR1cm5fZGF0YV9zaXplID0gMzIgIGZvciBjYWxsaW5nIFRhcmdldC5yZXR1cm5fdWludDI1NiAtPiB1aW50MjU2CiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgPSA5NiAgZm9yIGNhbGxpbmcgVGFyZ2V0LnJldHVybl9ieXRlcyAtPiBieXRlc1tdICgzMiBvZmZzZXQsIDMyIGxlbmd0aCwgMyBieXRlcyBwYWRkZWQgdG8gMzIpCiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgPSAxNjAgZm9yIGNhbGxpbmcgVGFyZ2V0LnJldHVybl91aW50MjU2X2FyciAtPiB1aW50MjU2W10gKDMyIG9mZnNldCwgMzIgbGVuZ3RoLCAzMiB4IDMgZWxlbWVudHMpCiAgICAgICAgICAgIHJldHVybl9kYXRhX3NpemUgOj0gcmV0dXJuZGF0YXNpemUoKQogICAgICAgICAgICAvLyBTdG9yZSBsZW5ndGggb2YgcmV0dXJuIGRhdGEgdG8gb3V0CiAgICAgICAgICAgIC8vIHBvaW50ZXIgdG8gb3V0ID0gMHg2MCAoemVybyBzbG90KQogICAgICAgICAgICBtc3RvcmUob3V0LCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgICAgICAvLyBDb3B5IHJldHVybiBkYXRhIHRvIG91dAogICAgICAgICAgICByZXR1cm5kYXRhY29weShhZGQob3V0LCAweDIwKSwgMCwgcmV0dXJuX2RhdGFfc2l6ZSkKICAgICAgICAgICAgLy8gVXBkYXRlIGZyZWUgbWVtb3J5IHBvaW50ZXIKICAgICAgICAgICAgbXN0b3JlKDB4NDAsIGFkZChvdXQsIGFkZCgweDIwLCByZXR1cm5fZGF0YV9zaXplKSkpCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBDb3VudGVyIHsKICAgIHVpbnQyNTYgcHVibGljIGNvdW50OwoKICAgIGZ1bmN0aW9uIGluYygpIHB1YmxpYyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgY291bnQgKz0gMTsKICAgICAgICByZXR1cm4gY291bnQ7CiAgICB9Cn0KCmNvbnRyYWN0IFl1bENhbGwgewogICAgZnVuY3Rpb24gdGVzdF9jYWxsKGFkZHJlc3MgYSwgYnl0ZXMgbWVtb3J5IGRhdGEpCiAgICAgICAgcHVibGljCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKGJ5dGVzIG1lbW9yeSBvdXQpCiAgICB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyAweDgwCiAgICAgICAgICAgIGxldCBkYXRhX3B0ciA6PSBkYXRhCiAgICAgICAgICAgIC8vIDB4NjAKICAgICAgICAgICAgbGV0IG91dF9wdHIgOj0gb3V0CgogICAgICAgICAgICBsZXQgZGF0YV9zaXplIDo9IG1sb2FkKGRhdGEpCiAgICAgICAgICAgIGxldCBkYXRhX3N0YXJ0IDo9IGFkZChkYXRhLCAweDIwKQogICAgICAgICAgICBsZXQgb2sgOj0gY2FsbChnYXMoKSwgYSwgY2FsbHZhbHVlKCksIGRhdGFfc3RhcnQsIGRhdGFfc2l6ZSwgMCwgMCkKCiAgICAgICAgICAgIGlmIGlzemVybyhvaykgeyByZXZlcnQoMCwgMCkgfQoKICAgICAgICAgICAgbGV0IHJldHVybl9kYXRhX3NpemUgOj0gcmV0dXJuZGF0YXNpemUoKQogICAgICAgICAgICAvLyBTdG9yZSBsZW5ndGggb2YgcmV0dXJuIGRhdGEgdG8gb3V0CiAgICAgICAgICAgIG1zdG9yZShvdXQsIHJldHVybl9kYXRhX3NpemUpCiAgICAgICAgICAgIC8vIENvcHkgcmV0dXJuIGRhdGEgdG8gb3V0CiAgICAgICAgICAgIHJldHVybmRhdGFjb3B5KGFkZChvdXQsIDB4MjApLCAwLCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgICAgICAvLyBVcGRhdGUgZnJlZSBtZW1vcnkgcG9pbnRlcgogICAgICAgICAgICBtc3RvcmUoMHg0MCwgYWRkKG91dCwgYWRkKDB4MjAsIHJldHVybl9kYXRhX3NpemUpKSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9pbmMoYWRkcmVzcyBjb3VudGVyKSBwdWJsaWMgcmV0dXJucyAodWludDI1NiBjb3VudCkgewogICAgICAgIGJ5dGVzIG1lbW9yeSByZXMgPSB0ZXN0X2NhbGwoY291bnRlciwgYWJpLmVuY29kZUNhbGwoQ291bnRlci5pbmMsICgpKSk7CiAgICAgICAgY291bnQgPSBhYmkuZGVjb2RlKHJlcywgKHVpbnQyNTYpKTsKICAgIH0KfQoKLy8gTWVtb3J5IGV4cGFuc2lvbiBnYXMgY29zdAovLyBHYXMgY29zdCBpcyBxdWFkcmF0aWMgdG8gbWVtb3J5IGFsbG9jYXRpb24uCmNvbnRyYWN0IE1lbUV4cCB7CiAgICBmdW5jdGlvbiBhbGxvY19tZW0odWludDI1NiBuKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICB1aW50MjU2IGdhc19zdGFydCA9IGdhc2xlZnQoKTsKICAgICAgICB1aW50MjU2W10gbWVtb3J5IGFyciA9IG5ldyB1aW50MjU2W10obik7CiAgICAgICAgdWludDI1NiBnYXNfZW5kID0gZ2FzbGVmdCgpOwogICAgICAgIHJldHVybiBnYXNfc3RhcnQgLSBnYXNfZW5kOwogICAgfQp9CgovLyBhcnIgc2l6ZSB8IGdhcwovLyAgICAgICAgMCB8ICAgIDEyMAovLyAgICAgICAgMSB8ICAgIDE3OAovLyAgICAgICAxMCB8ICAgIDIzMgovLyAgICAgICAyMCB8ICAgIDI5MwovLyAgICAgICAzMCB8ICAgIDM1NAovLyAgICAgICA0MCB8ICAgIDQxNQovLyAgICAgICA1MCB8ICAgIDQ3NwovLyAgICAgICA2MCB8ICAgIDU0MAovLyAgICAgICA3MCB8ICAgIDYwMgovLyAgICAgICA4MCB8ICAgIDY2NgovLyAgICAgICA5MCB8ICAgIDcyOQovLyAgICAgIDEwMCB8ICAgIDc5MwovLyAgICAgIDExMCB8ICAgIDg1NwovLyAgICAgIDEyMCB8ICAgIDkyMgovLyAgICAgIDEzMCB8ICAgIDk4NwovLyAgICAgIDE0MCB8ICAgMTA1MwovLyAgICAgIDE1MCB8ICAgMTExOAovLyAgICAgIDE2MCB8ICAgMTE4NQovLyAgICAgIDE3MCB8ICAgMTI1MQovLyAgICAgIDE4MCB8ICAgMTMxOAovLyAgICAgIDE5MCB8ICAgMTM4NgovLyAgICAgIDIwMCB8ICAgMTQ1NAoKLy8gICAgIDEwMDAgfCAgIDgxNDQKLy8gICAgIDIwMDAgfCAgMjAwMjMKLy8gICAgIDMwMDAgfCAgMzU4MDgKLy8gICAgIDQwMDAgfCAgNTU1MDAKLy8gICAgIDUwMDAgfCAgNzkwOTcKLy8gICAgIDYwMDAgfCAxMDY2MDEKLy8gICAgIDcwMDAgfCAxMzgwMTEKLy8gICAgIDgwMDAgfCAxNzMzMjgKLy8gICAgIDkwMDAgfCAyMTI1NTAKLy8gICAgMTAwMDAgfCAyNTU2NzkKLy8gICAgMTEwMDAgfCAzMDI3MTUKLy8gICAgMTIwMDAgfCAzNTM2NTYKLy8gICAgMTMwMDAgfCA0MDg1MDQKLy8gICAgMTQwMDAgfCA0NjcyNTcKLy8gICAgMTUwMDAgfCA1Mjk5MTgKLy8gICAgMTYwMDAgfCA1OTY0ODQKLy8gICAgMTcwMDAgfCA2NjY5NTcKLy8gICAgMTgwMDAgfCA3NDEzMzYKLy8gICAgMTkwMDAgfCA4MTk2MjEKLy8gICAgMjAwMDAgfCA5MDE4MTIK",
  },
]

const html = `<p>Examples of</p>
<ul>
<li>Reading and writing to memory with <code>assembly</code></li>
<li>Memory layout in Solidity of different data types</li>
<li>Memory management for external calls</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.26;</span>

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
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> p, <span class="hljs-keyword">uint256</span> len, <span class="hljs-keyword">uint256</span> a0, <span class="hljs-keyword">uint256</span> a1, <span class="hljs-keyword">uint256</span> a2</span>)
    </span>{
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](<span class="hljs-number">5</span>);
        arr[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">11</span>);
        arr[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">22</span>);
        arr[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">33</span>);
        arr[<span class="hljs-number">3</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">44</span>);
        arr[<span class="hljs-number">4</span>] <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(<span class="hljs-number">55</span>);

        <span class="hljs-keyword">assembly</span> {
            p <span class="hljs-operator">:=</span> arr
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_write</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> p, <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> arr <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](<span class="hljs-number">0</span>);

        <span class="hljs-keyword">assembly</span> {
            p <span class="hljs-operator">:=</span> arr
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
        <span class="hljs-keyword">return</span> (p, arr);
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

    <span class="hljs-comment">// Fixed sized bytes -&gt; zero padded on the right side</span>
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_bytes</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_uint8_arr</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">encode_uint256_fixed_size_arr</span>(<span class="hljs-params"></span>)
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
        <span class="hljs-comment">// revert(start, len) - Revert execution and return data store in memory from start to start + len</span>
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-built_in">mstore</span>(<span class="hljs-number">0x80</span>, <span class="hljs-string">"ERROR HERE"</span>)
            <span class="hljs-keyword">revert</span>(<span class="hljs-number">0x80</span>, <span class="hljs-number">0x20</span>)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_revert_with_error_msg</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-keyword">let</span> p <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
            <span class="hljs-comment">// function selector of Error(string)</span>
            <span class="hljs-comment">// 0x08c379a000000000000000000000000000000000000000000000000000000000</span>
            <span class="hljs-comment">// 0x08c379a0 is 32 bits, shift left by 224 to make it 256 bits</span>
            <span class="hljs-comment">// 255 - 31 = 224</span>
            <span class="hljs-built_in">mstore</span>(p, <span class="hljs-built_in">shl</span>(<span class="hljs-number">224</span>, <span class="hljs-number">0x08c379a0</span>))
            <span class="hljs-comment">// String offset</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(p, <span class="hljs-number">0x04</span>), <span class="hljs-number">0x20</span>)
            <span class="hljs-comment">// String length</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(p, <span class="hljs-number">0x24</span>), <span class="hljs-number">5</span>)
            <span class="hljs-comment">// Message (must be less than 32 bytes)</span>
            <span class="hljs-built_in">mstore</span>(<span class="hljs-built_in">add</span>(p, <span class="hljs-number">0x44</span>), <span class="hljs-string">"ERROR"</span>)
            <span class="hljs-comment">// function selector + offset + string length + string message</span>
            <span class="hljs-comment">// = 0x04 + 0x20 + 0x20 + 0x20</span>
            <span class="hljs-comment">// = 0x64</span>
            <span class="hljs-keyword">revert</span>(p, <span class="hljs-number">0x64</span>)
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

            <span class="hljs-comment">// return_data_size = 32  for calling Target.return_uint256 -&gt; uint256</span>
            <span class="hljs-comment">//                  = 96  for calling Target.return_bytes -&gt; bytes[] (32 offset, 32 length, 3 bytes padded to 32)</span>
            <span class="hljs-comment">//                  = 160 for calling Target.return_uint256_arr -&gt; uint256[] (32 offset, 32 length, 32 x 3 elements)</span>
            return_data_size <span class="hljs-operator">:=</span> <span class="hljs-built_in">returndatasize</span>()
            <span class="hljs-comment">// Store length of return data to out</span>
            <span class="hljs-comment">// pointer to out = 0x60 (zero slot)</span>
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
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// 0x80</span>
            <span class="hljs-keyword">let</span> data_ptr <span class="hljs-operator">:=</span> data
            <span class="hljs-comment">// 0x60</span>
            <span class="hljs-keyword">let</span> out_ptr <span class="hljs-operator">:=</span> out

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
<p><a href="https://docs.soliditylang.org/en/latest/internals/layout_in_memory.html">Solidity documentation</a></p>
<p><a href="https://www.evm.codes/">EVM Codes</a></p>
`

export default html
