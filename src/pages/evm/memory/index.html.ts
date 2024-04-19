// metadata
export const version = "0.8.24"
export const title = "EVM Memory Layout in Solidity"
export const description = "Example of EVM memory in Solidity"

export const keywords = ["data", "evm", "memory", "yul", "assembly"]

export const codes = [
  {
    fileName: "YulMem.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKLy8gTWVtb3J5IGxheW91dAovLyBhcnJheSBvZiBsZW5ndGggMioqMjU2ICgzMiBieXRlcyksIGVhY2ggZWxlbWVudCBzdG9yZXMgMSBieXRlICgweDAwIHRvIDB4ZmYpCi8vIG1lbW9yeSB8IDAwIHwgMDAgfCAwMCB8IC4uLiB8IDAwIHwKLy8gaW5kZXggICAgMDAgICAwMSAgIDAyICAgLi4uICAgMHhmZmYuLi5mZmYgKDMyIGJ5dGVzKQoKLy8gUmVzZXJ2ZWQgc2xvdHMKLy8gMHgwMCAtIDB4M2YgKDY0IGJ5dGVzKTogc2NyYXRjaCBzcGFjZSBmb3IgaGFzaGluZyBtZXRob2RzCi8vIDB4NDAgLSAweDVmICgzMiBieXRlcyk6IHBvaW50ZXIgdG8gbmV4dCBhdmFpbGFibGUgbG9jYXRpb24gaW4gbWVtb3J5IHRvIHN0b3JlIGRhdGEgKGZyZWUgbWVtb3J5IHBvaW50ZXIpCi8vIDB4NjAgLSAweDdmICgzMiBieXRlcyk6IHplcm8gc2xvdCAtIHVzZWQgYXMgaW5pdGlhbCB2YWx1ZSBmb3IgZHluYW1pYyBtZW1vcnkgYXJyYXlzIGFuZCBzaG91bGQgbmV2ZXIgYmUgd3JpdHRlbiB0bwoKLy8gRnJlZSBtZW1vcnkgcG9pbnRlciAoMHg0MCkKLy8gMHg4MCA9IEZyZWUgbWVtb3J5IHBvaW50ZXIgaW5pdGlhbGx5IHBvaW50cyBoZXJlCmNvbnRyYWN0IE1lbUJhc2ljIHsKICAgIC8vIG1zdG9yZShwLCB2KSA9IHN0b3JlIDMyIGJ5dGVzIHRvIG1lbW9yeSBzdGFydGluZyBhdCBtZW1vcnkgbG9jYXRpb24gcAogICAgLy8gbWxvYWQocCkgPSBsb2FkIDMyIGJ5dGVzIGZyb20gbWVtb3J5IHN0YXJ0aW5nIGF0IG1lbW9yeSBsb2NhdGlvbiBwCiAgICBmdW5jdGlvbiB0ZXN0KCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMzMiBiMzIpIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIEZyZWUgbWVtb3J5IHBvaW50ZXIKICAgICAgICAgICAgLy8gcCA9IDB4ODAKICAgICAgICAgICAgbGV0IHAgOj0gbWxvYWQoMHg0MCkKICAgICAgICAgICAgbXN0b3JlKHAsIDB4YWJhYmFiKQogICAgICAgICAgICBiMzIgOj0gbWxvYWQocCkKICAgICAgICB9CiAgICB9Cn0KCmNvbnRyYWN0IE1lbVN0cnVjdCB7CiAgICAvLyBNZW1vcnkgZGF0YSBpcyBub3QgcGFja2VkIC0gYWxsIGRhdGEgc3RvcmVkIGluIGNodW5rcyBvZiAzMiBieXRlcwogICAgc3RydWN0IFBvaW50IHsKICAgICAgICB1aW50MjU2IHg7CiAgICAgICAgdWludDMyIHk7CiAgICAgICAgdWludDMyIHo7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9yZWFkKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NiB4LCB1aW50MjU2IHksIHVpbnQyNTYgeikKICAgIHsKICAgICAgICAvLyBQb2ludCBpcyBsb2FkZWQgdG8gbWVtb3J5IHN0YXJ0aW5nIGF0IDB4ODAKICAgICAgICAvLyAweDgwID0gaW5pdGlhbCBmcmVlIG1lbW9yeQogICAgICAgIFBvaW50IG1lbW9yeSBwID0gUG9pbnQoMSwgMiwgMyk7CgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gbG9hZCAzMiBieXRlcyBzdGFydGluZyBmcm9tIDB4ODAKICAgICAgICAgICAgeCA6PSBtbG9hZCgweDgwKQogICAgICAgICAgICAvLyBsb2FkIDMyIGJ5dGVzIHN0YXJ0aW5nIGZyb20gMHhhMCAoMHg4MCArIDMyID0gMHhhMCkKICAgICAgICAgICAgeSA6PSBtbG9hZCgweGEwKQogICAgICAgICAgICAvLyBsb2FkIDMyIGJ5dGVzIHN0YXJ0aW5nIGZyb20gMHhjMCAoMHhhMCArIDMyID0gMHhjMCkKICAgICAgICAgICAgeiA6PSBtbG9hZCgweGMwKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3dyaXRlKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMiBmcmVlX21lbV9wdHIsIHVpbnQyNTYgeCwgdWludDI1NiB5LCB1aW50MjU2IHopCiAgICB7CiAgICAgICAgLy8gQWxsb2NhdGVzIG1lbW9yeSAweDgwIHRvIDB4ZGYgdG8gUG9pbnQKICAgICAgICAvLyBGcmVlIG1lbW9yeSBwb2ludGVyID0gMHhkZiArIDEgPSAweGUwCiAgICAgICAgUG9pbnQgbWVtb3J5IHA7CgogICAgICAgIC8vIFdyaXRlCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBzdG9yZSB0byAweDgwCiAgICAgICAgICAgIG1zdG9yZShwLCAxMSkKICAgICAgICAgICAgLy8gc3RvcmUgdG8gMHhhMAogICAgICAgICAgICBtc3RvcmUoYWRkKHAsIDB4MjApLCAyMikKICAgICAgICAgICAgLy8gc3RvcmUgdG8gMHhjMAogICAgICAgICAgICBtc3RvcmUoYWRkKHAsIDB4NDApLCAzMykKICAgICAgICAgICAgLy8gMHhlMAogICAgICAgICAgICBmcmVlX21lbV9wdHIgOj0gbWxvYWQoMHg0MCkKICAgICAgICB9CgogICAgICAgIHggPSBwLng7CiAgICAgICAgeSA9IHAueTsKICAgICAgICB6ID0gcC56OwogICAgfQp9Cgpjb250cmFjdCBNZW1GaXhlZEFycmF5IHsKICAgIGZ1bmN0aW9uIHRlc3RfcmVhZCgpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYTAsIHVpbnQyNTYgYTEsIHVpbnQyNTYgYTIpCiAgICB7CiAgICAgICAgLy8gYXJyIGlzIGxvYWRlZCB0byBtZW1vcnkgc3RhcnRpbmcgYXQgMHg4MAogICAgICAgIC8vIEVhY2ggYXJyYXkgZWxlbWVudCBpcyBzdG9yZWQgYXMgMzIgYnl0ZXMKICAgICAgICB1aW50MzJbM10gbWVtb3J5IGFyciA9IFt1aW50MzIoMSksIHVpbnQzMigyKSwgdWludDMyKDMpXTsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBhMCA6PSBtbG9hZCgweDgwKQogICAgICAgICAgICBhMSA6PSBtbG9hZCgweGEwKQogICAgICAgICAgICBhMiA6PSBtbG9hZCgweGMwKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3dyaXRlKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NiBhMCwgdWludDI1NiBhMSwgdWludDI1NiBhMikKICAgIHsKICAgICAgICB1aW50MzJbM10gbWVtb3J5IGFycjsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyAweDgwCiAgICAgICAgICAgIG1zdG9yZShhcnIsIDExKQogICAgICAgICAgICAvLyAweGEwCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDIwKSwgMjIpCiAgICAgICAgICAgIC8vIDB4YzAKICAgICAgICAgICAgbXN0b3JlKGFkZChhcnIsIDB4NDApLCAzMykKICAgICAgICB9CgogICAgICAgIGEwID0gYXJyWzBdOwogICAgICAgIGExID0gYXJyWzFdOwogICAgICAgIGEyID0gYXJyWzJdOwogICAgfQp9Cgpjb250cmFjdCBNZW1EeW5hbWljQXJyYXkgewogICAgZnVuY3Rpb24gdGVzdF9yZWFkKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NiBsZW4sIHVpbnQyNTYgYTAsIHVpbnQyNTYgYTEsIHVpbnQyNTYgYTIpCiAgICB7CiAgICAgICAgdWludDI1NltdIG1lbW9yeSBhcnIgPSBuZXcgdWludDI1NltdKDUpOwogICAgICAgIGFyclswXSA9IHVpbnQyNTYoMTEpOwogICAgICAgIGFyclsxXSA9IHVpbnQyNTYoMjIpOwogICAgICAgIGFyclsyXSA9IHVpbnQyNTYoMzMpOwogICAgICAgIGFyclszXSA9IHVpbnQyNTYoNDQpOwogICAgICAgIGFycls0XSA9IHVpbnQyNTYoNTUpOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIDB4ODAKICAgICAgICAgICAgbGVuIDo9IG1sb2FkKGFycikKICAgICAgICAgICAgLy8gMHhhMAogICAgICAgICAgICBhMCA6PSBtbG9hZChhZGQoYXJyLCAweDIwKSkKICAgICAgICAgICAgLy8gMHhjMAogICAgICAgICAgICBhMSA6PSBtbG9hZChhZGQoYXJyLCAweDQwKSkKICAgICAgICAgICAgLy8gMHhlMAogICAgICAgICAgICBhMiA6PSBtbG9hZChhZGQoYXJyLCAweDYwKSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF93cml0ZSgpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQyNTZbXSBtZW1vcnkpIHsKICAgICAgICB1aW50MjU2W10gbWVtb3J5IGFycjsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBTdG9yZSBsZW5ndGggb2YgYXJyCiAgICAgICAgICAgIG1zdG9yZShhcnIsIDMpCiAgICAgICAgICAgIC8vIFN0b3JlIDEsIDIsIDMKICAgICAgICAgICAgbXN0b3JlKGFkZChhcnIsIDB4MjApLCAxMSkKICAgICAgICAgICAgbXN0b3JlKGFkZChhcnIsIDB4NDApLCAyMikKICAgICAgICAgICAgbXN0b3JlKGFkZChhcnIsIDB4NjApLCAzMykKICAgICAgICAgICAgLy8gVXBkYXRlIGZyZWUgbWVtb3J5IHBvaW50ZXIKICAgICAgICAgICAgbXN0b3JlKDB4NDAsIGFkZChhcnIsIDB4ODApKQogICAgICAgIH0KCiAgICAgICAgLy8gRGF0YSB3aWxsIGJlIEFCSSBlbmNvZGVkIHdoZW4gYXJyIGlzIHJldHVybmVkIHRvIGNhbGxlcgogICAgICAgIHJldHVybiBhcnI7CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUludGVybmFsRnVuY1JldHVybiB7CiAgICBmdW5jdGlvbiBpbnRlcm5hbF9mdW5jX3JldHVybl92YWwoKSBwcml2YXRlIHB1cmUgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJldHVybiB1aW50MjU2KDB4YWJhYmFiKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3ZhbCgpIHB1YmxpYyBwdXJlIHsKICAgICAgICAvLyAweGFiYWJhYiB3aWxsIGJlIHN0b3JlZCBpbiB0b3Agb2YgdGhlIHN0YWNrCiAgICAgICAgaW50ZXJuYWxfZnVuY19yZXR1cm5fdmFsKCk7CiAgICB9CgogICAgZnVuY3Rpb24gaW50ZXJuYWxfZnVuY19yZXR1cm5fbWVtKCkKICAgICAgICBwcml2YXRlCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJ5dGVzMzJbXSBtZW1vcnkpCiAgICB7CiAgICAgICAgYnl0ZXMzMltdIG1lbW9yeSBhcnIgPSBuZXcgYnl0ZXMzMltdKDMpOwogICAgICAgIGFyclswXSA9IGJ5dGVzMzIodWludDI1NigweGFhYSkpOwogICAgICAgIGFyclsxXSA9IGJ5dGVzMzIodWludDI1NigweGJiYikpOwogICAgICAgIGFyclsyXSA9IGJ5dGVzMzIodWludDI1NigweGNjYykpOwogICAgICAgIHJldHVybiBhcnI7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9tZW0oKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGxlbiwgYnl0ZXMzMiBhMCwgYnl0ZXMzMiBhMSwgYnl0ZXMzMiBhMikKICAgIHsKICAgICAgICAvLyBTdG9yZXMgMHg4MCB0byB0b3Agb2YgdGhlIHN0YWNrCiAgICAgICAgLy8gMHg4MCA9IG1lbW9yeSBwb2ludGVyIHRvIGJlZ2lubmluZyBvZiBhcnIKICAgICAgICBpbnRlcm5hbF9mdW5jX3JldHVybl9tZW0oKTsKICAgICAgICAvLyBSZWFkIGRhdGEgZnJvbSBhcnIsIGluaXRpYWxpemVkIGluIGludGVybmFsX2Z1bmNfcmV0dXJuX21lbSwgdXNpbmcgYXNzZW1ibHkKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxlbiA6PSBtbG9hZCgweDgwKQogICAgICAgICAgICBhMCA6PSBtbG9hZCgweGEwKQogICAgICAgICAgICBhMSA6PSBtbG9hZCgweGMwKQogICAgICAgICAgICBhMiA6PSBtbG9hZCgweGUwKQogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgQUJJRW5jb2RlIHsKICAgIC8vIGpzIGNvZGUgdG8gc3BsaXQgc3RyaW5nIGludG8gY2h1bmtzIG9mIGxlbmd0aCA2NAogICAgLy8gc3RyLm1hdGNoKC8uezEsNjR9L2cpCgogICAgLy8gVmFsdWUgdHlwZXMgPCAzMiBieXRlcyAtPiB6ZXJvIHBhZGRlZCBvbiB0aGUgbGVmdCBzaWRlCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWIKICAgIGZ1bmN0aW9uIGVuY29kZV9hZGRyKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgYWRkcmVzcyBhZGRyID0gMHhBQmFCYUJhQkFCYWJBQmFiQWJBYkFCQWJBQmFiYWJhYmFCYUJBQmFCOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGFkZHIpOwogICAgfQoKICAgIC8vIEZpeGVkIHNpemVkIGJ5dGVzIC0+IHplcm8gcGFkZGVkIG9uIHRoZSByaWdoIHNpZGUKICAgIC8vIDB4YWFiYmNjZGQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgZnVuY3Rpb24gZW5jb2RlX2J5dGVzNCgpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIGJ5dGVzNCBiNCA9IDB4YWFiYmNjZGQ7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoYjQpOwogICAgfQoKICAgIC8vIER5bmFtaWMgc2l6ZSB0eXBlcwogICAgLy8gb2Zmc2V0IHwgbGVuZ3RoIHwgZGF0YQogICAgLy8gb2Zmc2V0ID0gMzIgYnl0ZXMgaW5kZXggd2hlcmUgZGF0YSBzdGFydHMKICAgIC8vIGxlbmd0aCA9IDMyIGJ5dGVzIGRhdGEgbGVuZ3RoCgogICAgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIC8vICAgYWJhYmFiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgZnVuY3Rpb24gZW5vZGVfYnl0ZXMoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICBieXRlcyBtZW1vcnkgYiA9IG5ldyBieXRlcygzKTsKICAgICAgICBiWzBdID0gMHhhYjsKICAgICAgICBiWzFdID0gMHhhYjsKICAgICAgICBiWzJdID0gMHhhYjsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShiKTsKICAgIH0KCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMwogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMwogICAgZnVuY3Rpb24gZW5vZGVfdWludDhfYXJyKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgdWludDhbXSBtZW1vcnkgYSA9IG5ldyB1aW50OFtdKDMpOwogICAgICAgIGFbMF0gPSAxOwogICAgICAgIGFbMV0gPSAyOwogICAgICAgIGFbMl0gPSAzOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGEpOwogICAgfQoKICAgIC8vIEZpeGVkIHNpemUgYXJyYXlzCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMgogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICBmdW5jdGlvbiBlbm9kZV91aW50MjU2X2ZpeGVkX3NpemVfYXJyKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KQogICAgewogICAgICAgIHVpbnQ4WzNdIG1lbW9yeSBhOwogICAgICAgIGFbMF0gPSAxOwogICAgICAgIGFbMV0gPSAyOwogICAgICAgIGFbMl0gPSAzOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGEpOwogICAgfQoKICAgIC8vIFN0cnVjdAogICAgc3RydWN0IFBvaW50IHsKICAgICAgICB1aW50MjU2IHg7CiAgICAgICAgdWludDEyOCB5OwogICAgICAgIHVpbnQxMjggejsKICAgIH0KCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMgogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICBmdW5jdGlvbiBlbmNvZGVfc3RydWN0KCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgUG9pbnQgbWVtb3J5IHAgPSBQb2ludCgxLCAyLCAzKTsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShwKTsKICAgIH0KCiAgICAvLyBEeW5hbWljIHNpemVkIGFycmF5IG9mIHN0cnVjdHMKICAgIC8vIG9mZnNldCB8IGxlbmd0aCB8IHN0cnVjdCBkYXRhCiAgICAvLyAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMwogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMwogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0CiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDUKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNgogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA3CiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOQogICAgZnVuY3Rpb24gZW5jb2RlX3N0cnVjdF9hcnJheSgpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIFBvaW50W10gbWVtb3J5IGFyciA9IG5ldyBQb2ludFtdKDMpOwogICAgICAgIGFyclswXSA9IFBvaW50KDEsIDIsIDMpOwogICAgICAgIGFyclsxXSA9IFBvaW50KDQsIDUsIDYpOwogICAgICAgIGFyclsyXSA9IFBvaW50KDcsIDgsIDkpOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGFycik7CiAgICB9Cn0KCmNvbnRyYWN0IE1lbVJldHVybiB7CiAgICBmdW5jdGlvbiB0ZXN0X3JldHVybl92YWxzKCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NiwgdWludDI1NikgewogICAgICAgIC8vIHJldHVybihzdGFydCwgbGVuKSAtIEhhbHQgZXhlY3V0aW9uIGFuZCByZXR1cm4gZGF0YSBzdG9yZWQgaW4gbWVtb3J5IGZyb20gc3RhcnQgdG8gc3RhcnQgKyBsZW4KICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIG1zdG9yZSgweDgwLCAxMSkKICAgICAgICAgICAgbXN0b3JlKDB4YTAsIDIyKQogICAgICAgICAgICByZXR1cm4oMHg4MCwgMHg0MCkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9yZXR1cm5fZHluX2FycigpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQyNTZbXSBtZW1vcnkpIHsKICAgICAgICAvLyBBQkkgZW5jb2RlIHVpbnQyNTZbXSBhcnJheSB3aXRoIDMgZWxlbWVudHMgMTEsIDIyIGFuZCAzMwogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gb2Zmc2V0CiAgICAgICAgICAgIG1zdG9yZSgweDgwLCAweDIwKQogICAgICAgICAgICAvLyBsZW5ndGgKICAgICAgICAgICAgbXN0b3JlKGFkZCgweDgwLCAweDIwKSwgMykKICAgICAgICAgICAgLy8gYXJyYXkgZWxlbWVudHMKICAgICAgICAgICAgbXN0b3JlKGFkZCgweDgwLCAweDQwKSwgMTEpCiAgICAgICAgICAgIG1zdG9yZShhZGQoMHg4MCwgMHg2MCksIDIyKQogICAgICAgICAgICBtc3RvcmUoYWRkKDB4ODAsIDB4ODApLCAzMykKICAgICAgICAgICAgLy8gTm8gbmVlZCB0byB1cGRhdGUgZnJlZSBtZW1vcnkgcG9pbnRlciAtIGZ1bmN0aW9uIGV4ZWN1dGlvbiBlbmRzIGhlcmUKICAgICAgICAgICAgcmV0dXJuKDB4ODAsIG11bCg1LCAweDIwKSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9yZXR1cm4oKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2LCB1aW50MjU2KSB7CiAgICAgICAgLy8gUmV0dXJucyAoMTEsIDIyKQogICAgICAgIHRlc3RfcmV0dXJuX3ZhbHMoKTsKICAgICAgICAvLyBUaGlzIGNvZGUgd2lsbCBuZXZlciBleGVjdXRlCiAgICAgICAgcmV0dXJuICgzMzMsIDQ0NCk7CiAgICB9Cn0KCmNvbnRyYWN0IE1lbVJldmVydCB7CiAgICBmdW5jdGlvbiB0ZXN0X3JldmVydCgpIHB1YmxpYyBwdXJlIHsKICAgICAgICAvLyByZXZlcnQoc3RhcnQsIGxlbikgLSBSZXZlcnQgZXhlY3V0aW4gYW5kIHJldHVybiBkYXRhIHN0b3JlIGluIG1lbW9yeSBmcm9tIHN0YXJ0IHRvIHN0YXJ0ICsgbGVuCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBtc3RvcmUoMHg4MCwgIkVSUk9SIEhFUkUiKQogICAgICAgICAgICByZXZlcnQoMHg4MCwgMHgyMCkKICAgICAgICB9CiAgICB9Cn0KCmNvbnRyYWN0IE1lbUtlY2NhayB7CiAgICBmdW5jdGlvbiB0ZXN0X2tlY2NhaygpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzMzIpIHsKICAgICAgICAvLyBrZWNjYWsyNTYoc3RhcnQsIGxlbikgLSBLZWNjYWsyNTYgZnJvbSBkYXRhIGluIG1lbW9yeSBmcm9tIHN0YXJ0IHRvIHN0YXJ0ICsgbGVuCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBtc3RvcmUoMHg4MCwgMSkKICAgICAgICAgICAgbXN0b3JlKDB4YTAsIDIpCgogICAgICAgICAgICBsZXQgaCA6PSBrZWNjYWsyNTYoMHg4MCwgMHg0MCkKICAgICAgICAgICAgbXN0b3JlKDB4YzAsIGgpCgogICAgICAgICAgICByZXR1cm4oMHhjMCwgMHgyMCkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24ga2VjY2FrKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMzMikgewogICAgICAgIHJldHVybiBrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZCh1aW50MjU2KDEpLCB1aW50MjU2KDIpKSk7CiAgICB9Cn0KCmNvbnRyYWN0IFRhcmdldCB7CiAgICBmdW5jdGlvbiByZXR1cm5fdWludDI1Nih1aW50MjU2IHgpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICByZXR1cm4geDsKICAgIH0KCiAgICBmdW5jdGlvbiByZXR1cm5fYnl0ZXModWludDI1NiBuKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICBieXRlcyBtZW1vcnkgb3V0ID0gbmV3IGJ5dGVzKG4pOwogICAgICAgIGZvciAodWludDI1NiBpOyBpIDwgbjsgaSsrKSB7CiAgICAgICAgICAgIG91dFtpXSA9IDB4YWI7CiAgICAgICAgfQogICAgICAgIHJldHVybiBvdXQ7CiAgICB9CgogICAgZnVuY3Rpb24gcmV0dXJuX3VpbnQyNTZfYXJyKHVpbnQyNTYgbikKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NltdIG1lbW9yeSkKICAgIHsKICAgICAgICB1aW50MjU2W10gbWVtb3J5IG91dCA9IG5ldyB1aW50MjU2W10obik7CiAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgbjsgaSsrKSB7CiAgICAgICAgICAgIG91dFtpXSA9IGkgKyAxOwogICAgICAgIH0KICAgICAgICByZXR1cm4gb3V0OwogICAgfQp9CgovLyBjYWxsZGF0YWNvcHkocCwgc3RhcnQsIHNpemUpIC0gQ29weSBzdGFydCB0byBzdGFydCArIHNpemUgY2FsbGRhdGEgdG8gbWVtb3J5IHN0YXJ0aW5nIGF0IHBvaW50ZXIgcAovLyByZXR1cm5kYXRhc2l6ZSAtIEdldCBzaXplIG9mIHJldHVybmVkIGRhdGEgZnJvbSBjYWxsLCBzdGF0aWNjYWxsIG9yIGRlbGVnYXRlY2FsbAovLyByZXR1cm5kYXRhY29weShwLCBzdGFydCwgc2l6ZSkgLSBDb3B5IHN0YXJ0IHRvIHN0YXJ0ICsgc2l6ZSByZXR1cm4gZGF0YSB0byBtZW1vcnkgc3RhcnRpbmcgYXQgcG9pbnRlciBwCi8vIGNhbGwoZywgYSwgdiwgaW4sIGluX3NpemUsIG91dCwgb3V0X3NpemUpCi8vIC0gY2FsbCBjb250cmFjdCBhdCBhLCB1c2UgbWF4IGcgZ2FzLCBzZW5kIHYgd2VpCi8vIC0gd2l0aCBpbnB1dCBmcm9tIG1lbW9yeSBpbiB0byBpbiArIGluX3NpemUKLy8gLSB1c2UgbWVtb3J5IG91dCB0byBvdXQgKyBvdXRfc2l6ZSBmb3Igb3V0cHV0Ci8vIHN0YXRpY2NhbGwoZywgYSwgaW4sIGluX3NpemUsIG91dCwgb3V0X3NpemUpIC0gcmVhZCBvbmx5IHZlcnNpb24gb2YgY2FsbApjb250cmFjdCBZdWxTdGF0aWNDYWxsIHsKICAgIGZ1bmN0aW9uIHRlc3Rfc3RhdGljY2FsbChhZGRyZXNzIGEsIGJ5dGVzIGNhbGxkYXRhIGRhdGEpIHB1YmxpYyB2aWV3IHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIGxldCBwIDo9IG1sb2FkKDB4NDApCiAgICAgICAgICAgIC8vIENvcHkgY2FsbGRhdGEgdG8gbWVtb3J5CiAgICAgICAgICAgIGNhbGxkYXRhY29weShwLCBkYXRhLm9mZnNldCwgZGF0YS5sZW5ndGgpCiAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gdXBkYXRlIGZyZWUgbWVtb3J5IHBvaW50ZXI/CiAgICAgICAgICAgIC8vIG1zdG9yZSgweDQwLCBhZGQocCwgZGF0YS5sZW5ndGgpKQoKICAgICAgICAgICAgbGV0IG9rIDo9IHN0YXRpY2NhbGwoZ2FzKCksIGEsIHAsIGRhdGEubGVuZ3RoLCAwLCAwKQoKICAgICAgICAgICAgaWYgaXN6ZXJvKG9rKSB7IHJldmVydCgwLCAwKSB9CgogICAgICAgICAgICAvLyBwIDo9IG1sb2FkKDB4NDApCiAgICAgICAgICAgIGxldCByZXR1cm5fZGF0YV9zaXplIDo9IHJldHVybmRhdGFzaXplKCkKICAgICAgICAgICAgLy8gQ29weSByZXR1cm5lZCBkYXRhIHRvIG1lbW9yeQogICAgICAgICAgICAvLyBJcyBpdCBzYWZlIHRvIG92ZXJ3cml0ZSBtZW1vcnkgdGhhdCB3YXMgdXNlZCBmb3IgaW5wdXRzPwogICAgICAgICAgICByZXR1cm5kYXRhY29weShwLCAwLCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgICAgICByZXR1cm4ocCwgcmV0dXJuX2RhdGFfc2l6ZSkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9hYmlfZGVjb2RlX3VpbnQyNTYoYWRkcmVzcyBhLCBieXRlcyBjYWxsZGF0YSBkYXRhKQogICAgICAgIHB1YmxpYwogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KQogICAgewogICAgICAgIHRlc3Rfc3RhdGljY2FsbChhLCBkYXRhKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X2FiaV9kZWNvZGVfYnl0ZXMoYWRkcmVzcyBhLCBieXRlcyBjYWxsZGF0YSBkYXRhKQogICAgICAgIHB1YmxpYwogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChieXRlcyBtZW1vcnkpCiAgICB7CiAgICAgICAgdGVzdF9zdGF0aWNjYWxsKGEsIGRhdGEpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfYWJpX2RlY29kZV91aW50MjU2X2FycihhZGRyZXNzIGEsIGJ5dGVzIGNhbGxkYXRhIGRhdGEpCiAgICAgICAgcHVibGljCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTZbXSBtZW1vcnkpCiAgICB7CiAgICAgICAgdGVzdF9zdGF0aWNjYWxsKGEsIGRhdGEpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfc3RhdGljY2FsbF9yZXR1cm5fYWJpX2VuY29kZWRfYnl0ZXMoCiAgICAgICAgYWRkcmVzcyBhZGRyLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgcHVibGljIHZpZXcgcmV0dXJucyAoYnl0ZXMgbWVtb3J5IG91dCwgdWludDI1NiByZXR1cm5fZGF0YV9zaXplKSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBsZXQgcCA6PSBtbG9hZCgweDQwKQogICAgICAgICAgICAvLyBDb3B5IGNhbGxkYXRhIHRvIG1lbW9yeQogICAgICAgICAgICBjYWxsZGF0YWNvcHkocCwgZGF0YS5vZmZzZXQsIGRhdGEubGVuZ3RoKQogICAgICAgICAgICAvLyBVcGRhdGUgZnJlZSBtZW1vcnkgcG9pbnRlcgogICAgICAgICAgICBtc3RvcmUoMHg0MCwgYWRkKHAsIGRhdGEubGVuZ3RoKSkKCiAgICAgICAgICAgIGxldCBvayA6PSBzdGF0aWNjYWxsKGdhcygpLCBhZGRyLCBwLCBkYXRhLmxlbmd0aCwgMCwgMCkKCiAgICAgICAgICAgIGlmIGlzemVybyhvaykgeyByZXZlcnQoMCwgMCkgfQoKICAgICAgICAgICAgLy8gcmV0dXJuX2RhdGFfc2l6ZSA9IDMyICBmb3IgY2FsbGluZyBUYXJnZXQuZiAtPiB1aW50MjU2CiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgPSA5NiAgZm9yIGNhbGxpbmcgVGFyZ2V0LmcgLT4gYnl0ZXNbXSAoMzIgb2Zmc2V0LCAzMiBsZW5ndGgsIDMgYnl0ZXMgcGFkZGVkIHRvIDMyKQogICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgID0gMTYwIGZvciBjYWxsaW5nIFRhcmdldC5oIC0+IHVpbnQyNTZbXSAoMzIgb2Zmc2V0LCAzMiBsZW5ndGgsIDMyIHggMyBlbGVtZW50cykKICAgICAgICAgICAgcmV0dXJuX2RhdGFfc2l6ZSA6PSByZXR1cm5kYXRhc2l6ZSgpCiAgICAgICAgICAgIC8vIFN0b3JlIGxlbmd0aCBvZiByZXR1cm4gZGF0YSB0byBvdXQKICAgICAgICAgICAgLy8gcG9pbnRlciB0byBvdXQgPSAweDYwICh6ZXJvIHNsb3QpCiAgICAgICAgICAgIC8vIFRPRE86IHNhZmUgdG8gd3JpdGUgdG8gemVybyBzbG90PwogICAgICAgICAgICBtc3RvcmUob3V0LCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgICAgICAvLyBDb3B5IHJldHVybiBkYXRhIHRvIG91dAogICAgICAgICAgICByZXR1cm5kYXRhY29weShhZGQob3V0LCAweDIwKSwgMCwgcmV0dXJuX2RhdGFfc2l6ZSkKICAgICAgICAgICAgLy8gVXBkYXRlIGZyZWUgbWVtb3J5IHBvaW50ZXIKICAgICAgICAgICAgbXN0b3JlKDB4NDAsIGFkZChvdXQsIGFkZCgweDIwLCByZXR1cm5fZGF0YV9zaXplKSkpCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBDb3VudGVyIHsKICAgIHVpbnQyNTYgcHVibGljIGNvdW50OwoKICAgIGZ1bmN0aW9uIGluYygpIHB1YmxpYyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgY291bnQgKz0gMTsKICAgICAgICByZXR1cm4gY291bnQ7CiAgICB9Cn0KCmNvbnRyYWN0IFl1bENhbGwgewogICAgZnVuY3Rpb24gdGVzdF9jYWxsKGFkZHJlc3MgYSwgYnl0ZXMgbWVtb3J5IGRhdGEpCiAgICAgICAgcHVibGljCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKGJ5dGVzIG1lbW9yeSBvdXQpCiAgICB7CiAgICAgICAgYnl0ZXMzMiBkYXRhX3B0cjsKICAgICAgICBieXRlczMyIG91dF9wdHI7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyAweDgwCiAgICAgICAgICAgIGRhdGFfcHRyIDo9IGRhdGEKICAgICAgICAgICAgLy8gMHg2MAogICAgICAgICAgICBvdXRfcHRyIDo9IG91dAoKICAgICAgICAgICAgbGV0IGRhdGFfc2l6ZSA6PSBtbG9hZChkYXRhKQogICAgICAgICAgICBsZXQgZGF0YV9zdGFydCA6PSBhZGQoZGF0YSwgMHgyMCkKICAgICAgICAgICAgbGV0IG9rIDo9IGNhbGwoZ2FzKCksIGEsIGNhbGx2YWx1ZSgpLCBkYXRhX3N0YXJ0LCBkYXRhX3NpemUsIDAsIDApCgogICAgICAgICAgICBpZiBpc3plcm8ob2spIHsgcmV2ZXJ0KDAsIDApIH0KCiAgICAgICAgICAgIGxldCByZXR1cm5fZGF0YV9zaXplIDo9IHJldHVybmRhdGFzaXplKCkKICAgICAgICAgICAgLy8gU3RvcmUgbGVuZ3RoIG9mIHJldHVybiBkYXRhIHRvIG91dAogICAgICAgICAgICBtc3RvcmUob3V0LCByZXR1cm5fZGF0YV9zaXplKQogICAgICAgICAgICAvLyBDb3B5IHJldHVybiBkYXRhIHRvIG91dAogICAgICAgICAgICByZXR1cm5kYXRhY29weShhZGQob3V0LCAweDIwKSwgMCwgcmV0dXJuX2RhdGFfc2l6ZSkKICAgICAgICAgICAgLy8gVXBkYXRlIGZyZWUgbWVtb3J5IHBvaW50ZXIKICAgICAgICAgICAgbXN0b3JlKDB4NDAsIGFkZChvdXQsIGFkZCgweDIwLCByZXR1cm5fZGF0YV9zaXplKSkpCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfaW5jKGFkZHJlc3MgY291bnRlcikgcHVibGljIHJldHVybnMgKHVpbnQyNTYgY291bnQpIHsKICAgICAgICBieXRlcyBtZW1vcnkgcmVzID0gdGVzdF9jYWxsKGNvdW50ZXIsIGFiaS5lbmNvZGVDYWxsKENvdW50ZXIuaW5jLCAoKSkpOwogICAgICAgIGNvdW50ID0gYWJpLmRlY29kZShyZXMsICh1aW50MjU2KSk7CiAgICB9Cn0KCi8vIE1lbW9yeSBleHBhbnNpb24gZ2FzIGNvc3QKLy8gR2FzIGNvc3QgaXMgcXVhZHJhdGljIHRvIG1lbW9yeSBhbGxvY2F0aW9uLgpjb250cmFjdCBNZW1FeHAgewogICAgZnVuY3Rpb24gYWxsb2NfbWVtKHVpbnQyNTYgbikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgdWludDI1NiBnYXNfc3RhcnQgPSBnYXNsZWZ0KCk7CiAgICAgICAgdWludDI1NltdIG1lbW9yeSBhcnIgPSBuZXcgdWludDI1NltdKG4pOwogICAgICAgIHVpbnQyNTYgZ2FzX2VuZCA9IGdhc2xlZnQoKTsKICAgICAgICByZXR1cm4gZ2FzX3N0YXJ0IC0gZ2FzX2VuZDsKICAgIH0KfQoKLy8gYXJyIHNpemUgfCBnYXMKLy8gICAgICAgIDAgfCAgICAxMjAKLy8gICAgICAgIDEgfCAgICAxNzgKLy8gICAgICAgMTAgfCAgICAyMzIKLy8gICAgICAgMjAgfCAgICAyOTMKLy8gICAgICAgMzAgfCAgICAzNTQKLy8gICAgICAgNDAgfCAgICA0MTUKLy8gICAgICAgNTAgfCAgICA0NzcKLy8gICAgICAgNjAgfCAgICA1NDAKLy8gICAgICAgNzAgfCAgICA2MDIKLy8gICAgICAgODAgfCAgICA2NjYKLy8gICAgICAgOTAgfCAgICA3MjkKLy8gICAgICAxMDAgfCAgICA3OTMKLy8gICAgICAxMTAgfCAgICA4NTcKLy8gICAgICAxMjAgfCAgICA5MjIKLy8gICAgICAxMzAgfCAgICA5ODcKLy8gICAgICAxNDAgfCAgIDEwNTMKLy8gICAgICAxNTAgfCAgIDExMTgKLy8gICAgICAxNjAgfCAgIDExODUKLy8gICAgICAxNzAgfCAgIDEyNTEKLy8gICAgICAxODAgfCAgIDEzMTgKLy8gICAgICAxOTAgfCAgIDEzODYKLy8gICAgICAyMDAgfCAgIDE0NTQKCi8vICAgICAxMDAwIHwgICA4MTQ0Ci8vICAgICAyMDAwIHwgIDIwMDIzCi8vICAgICAzMDAwIHwgIDM1ODA4Ci8vICAgICA0MDAwIHwgIDU1NTAwCi8vICAgICA1MDAwIHwgIDc5MDk3Ci8vICAgICA2MDAwIHwgMTA2NjAxCi8vICAgICA3MDAwIHwgMTM4MDExCi8vICAgICA4MDAwIHwgMTczMzI4Ci8vICAgICA5MDAwIHwgMjEyNTUwCi8vICAgIDEwMDAwIHwgMjU1Njc5Ci8vICAgIDExMDAwIHwgMzAyNzE1Ci8vICAgIDEyMDAwIHwgMzUzNjU2Ci8vICAgIDEzMDAwIHwgNDA4NTA0Ci8vICAgIDE0MDAwIHwgNDY3MjU3Ci8vICAgIDE1MDAwIHwgNTI5OTE4Ci8vICAgIDE2MDAwIHwgNTk2NDg0Ci8vICAgIDE3MDAwIHwgNjY2OTU3Ci8vICAgIDE4MDAwIHwgNzQxMzM2Ci8vICAgIDE5MDAwIHwgODE5NjIxCi8vICAgIDIwMDAwIHwgOTAxODEyCg==",
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
<span class="hljs-comment">// memory | 00 | 00 | 00 | ... | 00 |</span>
<span class="hljs-comment">// index    00   01   02   ...   0xfff...fff (32 bytes)</span>

<span class="hljs-comment">// Reserved slots</span>
<span class="hljs-comment">// 0x00 - 0x3f (64 bytes): scratch space for hashing methods</span>
<span class="hljs-comment">// 0x40 - 0x5f (32 bytes): pointer to next available location in memory to store data (free memory pointer)</span>
<span class="hljs-comment">// 0x60 - 0x7f (32 bytes): zero slot - used as initial value for dynamic memory arrays and should never be written to</span>

<span class="hljs-comment">// Free memory pointer (0x40)</span>
<span class="hljs-comment">// 0x80 = Free memory pointer initially points here</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MemBasic</span> </span>{
    <span class="hljs-comment">// mstore(p, v) = store 32 bytes to memory starting at memory location p</span>
    <span class="hljs-comment">// mload(p) = load 32 bytes from memory starting at memory location p</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> b32</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Free memory pointer</span>
            <span class="hljs-comment">// p = 0x80</span>
            <span class="hljs-keyword">let</span> p <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(<span class="hljs-number">0x40</span>)
            <span class="hljs-built_in">mstore</span>(p, <span class="hljs-number">0xababab</span>)
            b32 <span class="hljs-operator">:=</span> <span class="hljs-built_in">mload</span>(p)
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
