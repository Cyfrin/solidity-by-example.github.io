// metadata
export const version = "0.8.24"
export const title = "EVM Memory Layout in Solidity"
export const description = "Example of EVM memory in Solidity"

export const keywords = ["data", "evm", "memory", "yul", "assembly"]

export const codes = [
  {
    fileName: "YulMem.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKLy8gTWVtb3J5IGxheW91dAovLyBhcnJheSBvZiBsZW5ndGggMioqMjU2ICgzMiBieXRlcyksIGVhY2ggZWxlbWVudCBzdG9yZXMgMSBieXRlICgweDAwIHRvIDB4ZmYpCi8vIGluZGV4ICAgICAwICAgIDEgICAgMiAgIC4uLiAgIDB4ZmZmLi4uZmZmID0gMioyNTYgLSAxCi8vIG1lbW9yeSB8IDAwIHwgMDAgfCAwMCB8IC4uLiB8IDAwIHwKCi8vIFJlc2VydmVkIHNsb3RzCi8vIDB4MDAgLSAweDNmICg2NCBieXRlcyk6IHNjcmF0Y2ggc3BhY2UgZm9yIGhhc2hpbmcgbWV0aG9kcwovLyAweDQwIC0gMHg1ZiAoMzIgYnl0ZXMpOiBmcmVlIG1lbW9yeSBwb2ludGVyIC0gcG9pbnRlciB0byBuZXh0IGF2YWlsYWJsZSBsb2NhdGlvbiBpbiBtZW1vcnkgdG8gc3RvcmUgZGF0YQovLyAweDYwIC0gMHg3ZiAoMzIgYnl0ZXMpOiB6ZXJvIHNsb3QgLSB1c2VkIGFzIGluaXRpYWwgdmFsdWUgZm9yIGR5bmFtaWMgbWVtb3J5IGFycmF5cyBhbmQgc2hvdWxkIG5ldmVyIGJlIHdyaXR0ZW4gdG8KCi8vIEZyZWUgbWVtb3J5IHBvaW50ZXIgKDB4NDApCi8vIDB4ODAgPSBGcmVlIG1lbW9yeSBwb2ludGVyIGluaXRpYWxseSBwb2ludHMgaGVyZQpjb250cmFjdCBNZW1CYXNpYyB7CiAgICAvLyBtc3RvcmUocCwgdikgPSBzdG9yZSAzMiBieXRlcyB0byBtZW1vcnkgc3RhcnRpbmcgYXQgbWVtb3J5IGxvY2F0aW9uIHAKICAgIC8vIG1sb2FkKHApID0gbG9hZCAzMiBieXRlcyBmcm9tIG1lbW9yeSBzdGFydGluZyBhdCBtZW1vcnkgbG9jYXRpb24gcAogICAgZnVuY3Rpb24gdGVzdF8xKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMzMiBiMzIpIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIEZyZWUgbWVtb3J5IHBvaW50ZXIKICAgICAgICAgICAgLy8gcCA9IDB4ODAKICAgICAgICAgICAgbGV0IHAgOj0gbWxvYWQoMHg0MCkKICAgICAgICAgICAgbXN0b3JlKHAsIDB4YWJhYmFiKQogICAgICAgICAgICBiMzIgOj0gbWxvYWQocCkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF8yKCkgcHVibGljIHB1cmUgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbXN0b3JlKDAsIDB4MTEpCiAgICAgICAgICAgIC8vIGluZGV4OiAzMiBieXRlcyBvZiBkYXRhIHN0b3JlZCBpbiBtZW1vcnkgZnJvbSBpbmRleAogICAgICAgICAgICAvLyAgMHgwMDogMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDExCiAgICAgICAgICAgIG1zdG9yZSgxLCAweDIyKQogICAgICAgICAgICAvLyAgICAgICAgICAgMCAxCiAgICAgICAgICAgIC8vICAweDAwOiAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgLy8gIDB4MjA6IDB4MjIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgICAgICAgICBtc3RvcmUoMiwgMHgzMykKICAgICAgICAgICAgLy8gICAgICAgICAgIDAgMSAyCiAgICAgICAgICAgIC8vICAweDAwOiAweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgICAgICAgICAgLy8gIDB4MjA6IDB4MDAzMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgICAgICAgICBtc3RvcmUoMywgMHg0NCkKICAgICAgICAgICAgLy8gICAgICAgICAgIDAgMSAyIDMKICAgICAgICAgICAgLy8gIDB4MDA6IDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAogICAgICAgICAgICAvLyAgMHgyMDogMHgwMDAwNDQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBNZW1TdHJ1Y3QgewogICAgLy8gTWVtb3J5IGRhdGEgaXMgbm90IHBhY2tlZCAtIGFsbCBkYXRhIHN0b3JlZCBpbiBjaHVua3Mgb2YgMzIgYnl0ZXMKICAgIHN0cnVjdCBQb2ludCB7CiAgICAgICAgdWludDI1NiB4OwogICAgICAgIHVpbnQzMiB5OwogICAgICAgIHVpbnQzMiB6OwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfcmVhZCgpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgeCwgdWludDI1NiB5LCB1aW50MjU2IHopCiAgICB7CiAgICAgICAgLy8gUG9pbnQgaXMgbG9hZGVkIHRvIG1lbW9yeSBzdGFydGluZyBhdCAweDgwCiAgICAgICAgLy8gMHg4MCA9IGluaXRpYWwgZnJlZSBtZW1vcnkKICAgICAgICBQb2ludCBtZW1vcnkgcCA9IFBvaW50KDEsIDIsIDMpOwoKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIGxvYWQgMzIgYnl0ZXMgc3RhcnRpbmcgZnJvbSAweDgwCiAgICAgICAgICAgIHggOj0gbWxvYWQoMHg4MCkKICAgICAgICAgICAgLy8gbG9hZCAzMiBieXRlcyBzdGFydGluZyBmcm9tIDB4YTAgKDB4ODAgKyAzMiA9IDB4YTApCiAgICAgICAgICAgIHkgOj0gbWxvYWQoMHhhMCkKICAgICAgICAgICAgLy8gbG9hZCAzMiBieXRlcyBzdGFydGluZyBmcm9tIDB4YzAgKDB4YTAgKyAzMiA9IDB4YzApCiAgICAgICAgICAgIHogOj0gbWxvYWQoMHhjMCkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF93cml0ZSgpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJ5dGVzMzIgZnJlZV9tZW1fcHRyLCB1aW50MjU2IHgsIHVpbnQyNTYgeSwgdWludDI1NiB6KQogICAgewogICAgICAgIC8vIEFsbG9jYXRlcyBtZW1vcnkgMHg4MCB0byAweGRmIHRvIFBvaW50CiAgICAgICAgLy8gRnJlZSBtZW1vcnkgcG9pbnRlciA9IDB4ZGYgKyAxID0gMHhlMAogICAgICAgIFBvaW50IG1lbW9yeSBwOwoKICAgICAgICAvLyBXcml0ZQogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gc3RvcmUgdG8gMHg4MAogICAgICAgICAgICBtc3RvcmUocCwgMTEpCiAgICAgICAgICAgIC8vIHN0b3JlIHRvIDB4YTAKICAgICAgICAgICAgbXN0b3JlKGFkZChwLCAweDIwKSwgMjIpCiAgICAgICAgICAgIC8vIHN0b3JlIHRvIDB4YzAKICAgICAgICAgICAgbXN0b3JlKGFkZChwLCAweDQwKSwgMzMpCiAgICAgICAgICAgIC8vIDB4ZTAKICAgICAgICAgICAgZnJlZV9tZW1fcHRyIDo9IG1sb2FkKDB4NDApCiAgICAgICAgfQoKICAgICAgICB4ID0gcC54OwogICAgICAgIHkgPSBwLnk7CiAgICAgICAgeiA9IHAuejsKICAgIH0KfQoKY29udHJhY3QgTWVtRml4ZWRBcnJheSB7CiAgICBmdW5jdGlvbiB0ZXN0X3JlYWQoKQogICAgICAgIHB1YmxpYwogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGEwLCB1aW50MjU2IGExLCB1aW50MjU2IGEyKQogICAgewogICAgICAgIC8vIGFyciBpcyBsb2FkZWQgdG8gbWVtb3J5IHN0YXJ0aW5nIGF0IDB4ODAKICAgICAgICAvLyBFYWNoIGFycmF5IGVsZW1lbnQgaXMgc3RvcmVkIGFzIDMyIGJ5dGVzCiAgICAgICAgdWludDMyWzNdIG1lbW9yeSBhcnIgPSBbdWludDMyKDEpLCB1aW50MzIoMiksIHVpbnQzMigzKV07CgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgYTAgOj0gbWxvYWQoMHg4MCkKICAgICAgICAgICAgYTEgOj0gbWxvYWQoMHhhMCkKICAgICAgICAgICAgYTIgOj0gbWxvYWQoMHhjMCkKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF93cml0ZSgpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYTAsIHVpbnQyNTYgYTEsIHVpbnQyNTYgYTIpCiAgICB7CiAgICAgICAgdWludDMyWzNdIG1lbW9yeSBhcnI7CgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gMHg4MAogICAgICAgICAgICBtc3RvcmUoYXJyLCAxMSkKICAgICAgICAgICAgLy8gMHhhMAogICAgICAgICAgICBtc3RvcmUoYWRkKGFyciwgMHgyMCksIDIyKQogICAgICAgICAgICAvLyAweGMwCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDQwKSwgMzMpCiAgICAgICAgfQoKICAgICAgICBhMCA9IGFyclswXTsKICAgICAgICBhMSA9IGFyclsxXTsKICAgICAgICBhMiA9IGFyclsyXTsKICAgIH0KfQoKY29udHJhY3QgTWVtRHluYW1pY0FycmF5IHsKICAgIGZ1bmN0aW9uIHRlc3RfcmVhZCgpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgbGVuLCB1aW50MjU2IGEwLCB1aW50MjU2IGExLCB1aW50MjU2IGEyKQogICAgewogICAgICAgIHVpbnQyNTZbXSBtZW1vcnkgYXJyID0gbmV3IHVpbnQyNTZbXSg1KTsKICAgICAgICBhcnJbMF0gPSB1aW50MjU2KDExKTsKICAgICAgICBhcnJbMV0gPSB1aW50MjU2KDIyKTsKICAgICAgICBhcnJbMl0gPSB1aW50MjU2KDMzKTsKICAgICAgICBhcnJbM10gPSB1aW50MjU2KDQ0KTsKICAgICAgICBhcnJbNF0gPSB1aW50MjU2KDU1KTsKCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyAweDgwCiAgICAgICAgICAgIGxlbiA6PSBtbG9hZChhcnIpCiAgICAgICAgICAgIC8vIDB4YTAKICAgICAgICAgICAgYTAgOj0gbWxvYWQoYWRkKGFyciwgMHgyMCkpCiAgICAgICAgICAgIC8vIDB4YzAKICAgICAgICAgICAgYTEgOj0gbWxvYWQoYWRkKGFyciwgMHg0MCkpCiAgICAgICAgICAgIC8vIDB4ZTAKICAgICAgICAgICAgYTIgOj0gbWxvYWQoYWRkKGFyciwgMHg2MCkpCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfd3JpdGUoKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2W10gbWVtb3J5KSB7CiAgICAgICAgdWludDI1NltdIG1lbW9yeSBhcnI7CgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gU3RvcmUgbGVuZ3RoIG9mIGFycgogICAgICAgICAgICBtc3RvcmUoYXJyLCAzKQogICAgICAgICAgICAvLyBTdG9yZSAxLCAyLCAzCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDIwKSwgMTEpCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDQwKSwgMjIpCiAgICAgICAgICAgIG1zdG9yZShhZGQoYXJyLCAweDYwKSwgMzMpCiAgICAgICAgICAgIC8vIFVwZGF0ZSBmcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIG1zdG9yZSgweDQwLCBhZGQoYXJyLCAweDgwKSkKICAgICAgICB9CgogICAgICAgIC8vIERhdGEgd2lsbCBiZSBBQkkgZW5jb2RlZCB3aGVuIGFyciBpcyByZXR1cm5lZCB0byBjYWxsZXIKICAgICAgICByZXR1cm4gYXJyOwogICAgfQp9Cgpjb250cmFjdCBNZW1JbnRlcm5hbEZ1bmNSZXR1cm4gewogICAgZnVuY3Rpb24gaW50ZXJuYWxfZnVuY19yZXR1cm5fdmFsKCkgcHJpdmF0ZSBwdXJlIHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICByZXR1cm4gdWludDI1NigweGFiYWJhYik7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF92YWwoKSBwdWJsaWMgcHVyZSB7CiAgICAgICAgLy8gMHhhYmFiYWIgd2lsbCBiZSBzdG9yZWQgaW4gdG9wIG9mIHRoZSBzdGFjawogICAgICAgIGludGVybmFsX2Z1bmNfcmV0dXJuX3ZhbCgpOwogICAgfQoKICAgIGZ1bmN0aW9uIGludGVybmFsX2Z1bmNfcmV0dXJuX21lbSgpCiAgICAgICAgcHJpdmF0ZQogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChieXRlczMyW10gbWVtb3J5KQogICAgewogICAgICAgIGJ5dGVzMzJbXSBtZW1vcnkgYXJyID0gbmV3IGJ5dGVzMzJbXSgzKTsKICAgICAgICBhcnJbMF0gPSBieXRlczMyKHVpbnQyNTYoMHhhYWEpKTsKICAgICAgICBhcnJbMV0gPSBieXRlczMyKHVpbnQyNTYoMHhiYmIpKTsKICAgICAgICBhcnJbMl0gPSBieXRlczMyKHVpbnQyNTYoMHhjY2MpKTsKICAgICAgICByZXR1cm4gYXJyOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfbWVtKCkKICAgICAgICBwdWJsaWMKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NiBsZW4sIGJ5dGVzMzIgYTAsIGJ5dGVzMzIgYTEsIGJ5dGVzMzIgYTIpCiAgICB7CiAgICAgICAgLy8gU3RvcmVzIDB4ODAgdG8gdG9wIG9mIHRoZSBzdGFjawogICAgICAgIC8vIDB4ODAgPSBtZW1vcnkgcG9pbnRlciB0byBiZWdpbm5pbmcgb2YgYXJyCiAgICAgICAgaW50ZXJuYWxfZnVuY19yZXR1cm5fbWVtKCk7CiAgICAgICAgLy8gUmVhZCBkYXRhIGZyb20gYXJyLCBpbml0aWFsaXplZCBpbiBpbnRlcm5hbF9mdW5jX3JldHVybl9tZW0sIHVzaW5nIGFzc2VtYmx5CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBsZW4gOj0gbWxvYWQoMHg4MCkKICAgICAgICAgICAgYTAgOj0gbWxvYWQoMHhhMCkKICAgICAgICAgICAgYTEgOj0gbWxvYWQoMHhjMCkKICAgICAgICAgICAgYTIgOj0gbWxvYWQoMHhlMCkKICAgICAgICB9CiAgICB9Cn0KCmNvbnRyYWN0IEFCSUVuY29kZSB7CiAgICAvLyBqcyBjb2RlIHRvIHNwbGl0IHN0cmluZyBpbnRvIGNodW5rcyBvZiBsZW5ndGggNjQKICAgIC8vIHN0ci5tYXRjaCgvLnsxLDY0fS9nKQoKICAgIC8vIFZhbHVlIHR5cGVzIDwgMzIgYnl0ZXMgLT4gemVybyBwYWRkZWQgb24gdGhlIGxlZnQgc2lkZQogICAgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiYWJhYmFiCiAgICBmdW5jdGlvbiBlbmNvZGVfYWRkcigpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIGFkZHJlc3MgYWRkciA9IDB4QUJhQmFCYUJBQmFiQUJhYkFiQWJBQkFiQUJhYmFiYWJhQmFCQUJhQjsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShhZGRyKTsKICAgIH0KCiAgICAvLyBGaXhlZCBzaXplZCBieXRlcyAtPiB6ZXJvIHBhZGRlZCBvbiB0aGUgcmlnaCBzaWRlCiAgICAvLyAweGFhYmJjY2RkMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgIGZ1bmN0aW9uIGVuY29kZV9ieXRlczQoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICBieXRlczQgYjQgPSAweGFhYmJjY2RkOwogICAgICAgIHJldHVybiBhYmkuZW5jb2RlKGI0KTsKICAgIH0KCiAgICAvLyBEeW5hbWljIHNpemUgdHlwZXMKICAgIC8vIG9mZnNldCB8IGxlbmd0aCB8IGRhdGEKICAgIC8vIG9mZnNldCA9IDMyIGJ5dGVzIGluZGV4IHdoZXJlIGRhdGEgc3RhcnRzCiAgICAvLyBsZW5ndGggPSAzMiBieXRlcyBkYXRhIGxlbmd0aAoKICAgIC8vIDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMAogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzCiAgICAvLyAgIGFiYWJhYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgIGZ1bmN0aW9uIGVub2RlX2J5dGVzKCkgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgYnl0ZXMgbWVtb3J5IGIgPSBuZXcgYnl0ZXMoMyk7CiAgICAgICAgYlswXSA9IDB4YWI7CiAgICAgICAgYlsxXSA9IDB4YWI7CiAgICAgICAgYlsyXSA9IDB4YWI7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoYik7CiAgICB9CgogICAgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMQogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIGZ1bmN0aW9uIGVub2RlX3VpbnQ4X2FycigpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIHVpbnQ4W10gbWVtb3J5IGEgPSBuZXcgdWludDhbXSgzKTsKICAgICAgICBhWzBdID0gMTsKICAgICAgICBhWzFdID0gMjsKICAgICAgICBhWzJdID0gMzsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShhKTsKICAgIH0KCiAgICAvLyBGaXhlZCBzaXplIGFycmF5cwogICAgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMwogICAgZnVuY3Rpb24gZW5vZGVfdWludDI1Nl9maXhlZF9zaXplX2FycigpCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkKICAgIHsKICAgICAgICB1aW50OFszXSBtZW1vcnkgYTsKICAgICAgICBhWzBdID0gMTsKICAgICAgICBhWzFdID0gMjsKICAgICAgICBhWzJdID0gMzsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShhKTsKICAgIH0KCiAgICAvLyBTdHJ1Y3QKICAgIHN0cnVjdCBQb2ludCB7CiAgICAgICAgdWludDI1NiB4OwogICAgICAgIHVpbnQxMjggeTsKICAgICAgICB1aW50MTI4IHo7CiAgICB9CgogICAgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMwogICAgZnVuY3Rpb24gZW5jb2RlX3N0cnVjdCgpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzIG1lbW9yeSkgewogICAgICAgIFBvaW50IG1lbW9yeSBwID0gUG9pbnQoMSwgMiwgMyk7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUocCk7CiAgICB9CgogICAgLy8gRHluYW1pYyBzaXplZCBhcnJheSBvZiBzdHJ1Y3RzCiAgICAvLyBvZmZzZXQgfCBsZW5ndGggfCBzdHJ1Y3QgZGF0YQogICAgLy8gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDIwCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMQogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyCiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNAogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA1CiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYKICAgIC8vICAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNwogICAgLy8gICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4CiAgICAvLyAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDkKICAgIGZ1bmN0aW9uIGVuY29kZV9zdHJ1Y3RfYXJyYXkoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICBQb2ludFtdIG1lbW9yeSBhcnIgPSBuZXcgUG9pbnRbXSgzKTsKICAgICAgICBhcnJbMF0gPSBQb2ludCgxLCAyLCAzKTsKICAgICAgICBhcnJbMV0gPSBQb2ludCg0LCA1LCA2KTsKICAgICAgICBhcnJbMl0gPSBQb2ludCg3LCA4LCA5KTsKICAgICAgICByZXR1cm4gYWJpLmVuY29kZShhcnIpOwogICAgfQp9Cgpjb250cmFjdCBNZW1SZXR1cm4gewogICAgZnVuY3Rpb24gdGVzdF9yZXR1cm5fdmFscygpIHB1YmxpYyBwdXJlIHJldHVybnMgKHVpbnQyNTYsIHVpbnQyNTYpIHsKICAgICAgICAvLyByZXR1cm4oc3RhcnQsIGxlbikgLSBIYWx0IGV4ZWN1dGlvbiBhbmQgcmV0dXJuIGRhdGEgc3RvcmVkIGluIG1lbW9yeSBmcm9tIHN0YXJ0IHRvIHN0YXJ0ICsgbGVuCiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBtc3RvcmUoMHg4MCwgMTEpCiAgICAgICAgICAgIG1zdG9yZSgweGEwLCAyMikKICAgICAgICAgICAgcmV0dXJuKDB4ODAsIDB4NDApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfcmV0dXJuX2R5bl9hcnIoKSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2W10gbWVtb3J5KSB7CiAgICAgICAgLy8gQUJJIGVuY29kZSB1aW50MjU2W10gYXJyYXkgd2l0aCAzIGVsZW1lbnRzIDExLCAyMiBhbmQgMzMKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIG9mZnNldAogICAgICAgICAgICBtc3RvcmUoMHg4MCwgMHgyMCkKICAgICAgICAgICAgLy8gbGVuZ3RoCiAgICAgICAgICAgIG1zdG9yZShhZGQoMHg4MCwgMHgyMCksIDMpCiAgICAgICAgICAgIC8vIGFycmF5IGVsZW1lbnRzCiAgICAgICAgICAgIG1zdG9yZShhZGQoMHg4MCwgMHg0MCksIDExKQogICAgICAgICAgICBtc3RvcmUoYWRkKDB4ODAsIDB4NjApLCAyMikKICAgICAgICAgICAgbXN0b3JlKGFkZCgweDgwLCAweDgwKSwgMzMpCiAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gdXBkYXRlIGZyZWUgbWVtb3J5IHBvaW50ZXIgLSBmdW5jdGlvbiBleGVjdXRpb24gZW5kcyBoZXJlCiAgICAgICAgICAgIHJldHVybigweDgwLCBtdWwoNSwgMHgyMCkpCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfcmV0dXJuKCkgcHVibGljIHB1cmUgcmV0dXJucyAodWludDI1NiwgdWludDI1NikgewogICAgICAgIC8vIFJldHVybnMgKDExLCAyMikKICAgICAgICB0ZXN0X3JldHVybl92YWxzKCk7CiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgbmV2ZXIgZXhlY3V0ZQogICAgICAgIHJldHVybiAoMzMzLCA0NDQpOwogICAgfQp9Cgpjb250cmFjdCBNZW1SZXZlcnQgewogICAgZnVuY3Rpb24gdGVzdF9yZXZlcnQoKSBwdWJsaWMgcHVyZSB7CiAgICAgICAgLy8gcmV2ZXJ0KHN0YXJ0LCBsZW4pIC0gUmV2ZXJ0IGV4ZWN1dGluIGFuZCByZXR1cm4gZGF0YSBzdG9yZSBpbiBtZW1vcnkgZnJvbSBzdGFydCB0byBzdGFydCArIGxlbgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbXN0b3JlKDB4ODAsICJFUlJPUiBIRVJFIikKICAgICAgICAgICAgcmV2ZXJ0KDB4ODAsIDB4MjApCiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBNZW1LZWNjYWsgewogICAgZnVuY3Rpb24gdGVzdF9rZWNjYWsoKSBwdWJsaWMgcHVyZSByZXR1cm5zIChieXRlczMyKSB7CiAgICAgICAgLy8ga2VjY2FrMjU2KHN0YXJ0LCBsZW4pIC0gS2VjY2FrMjU2IGZyb20gZGF0YSBpbiBtZW1vcnkgZnJvbSBzdGFydCB0byBzdGFydCArIGxlbgogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbXN0b3JlKDB4ODAsIDEpCiAgICAgICAgICAgIG1zdG9yZSgweGEwLCAyKQoKICAgICAgICAgICAgbGV0IGggOj0ga2VjY2FrMjU2KDB4ODAsIDB4NDApCiAgICAgICAgICAgIG1zdG9yZSgweGMwLCBoKQoKICAgICAgICAgICAgcmV0dXJuKDB4YzAsIDB4MjApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGtlY2NhaygpIHB1YmxpYyBwdXJlIHJldHVybnMgKGJ5dGVzMzIpIHsKICAgICAgICByZXR1cm4ga2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQodWludDI1NigxKSwgdWludDI1NigyKSkpOwogICAgfQp9Cgpjb250cmFjdCBUYXJnZXQgewogICAgZnVuY3Rpb24gcmV0dXJuX3VpbnQyNTYodWludDI1NiB4KSBwdWJsaWMgcHVyZSByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIHg7CiAgICB9CgogICAgZnVuY3Rpb24gcmV0dXJuX2J5dGVzKHVpbnQyNTYgbikgcHVibGljIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgYnl0ZXMgbWVtb3J5IG91dCA9IG5ldyBieXRlcyhuKTsKICAgICAgICBmb3IgKHVpbnQyNTYgaTsgaSA8IG47IGkrKykgewogICAgICAgICAgICBvdXRbaV0gPSAweGFiOwogICAgICAgIH0KICAgICAgICByZXR1cm4gb3V0OwogICAgfQoKICAgIGZ1bmN0aW9uIHJldHVybl91aW50MjU2X2Fycih1aW50MjU2IG4pCiAgICAgICAgcHVibGljCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTZbXSBtZW1vcnkpCiAgICB7CiAgICAgICAgdWludDI1NltdIG1lbW9yeSBvdXQgPSBuZXcgdWludDI1NltdKG4pOwogICAgICAgIGZvciAodWludDI1NiBpID0gMDsgaSA8IG47IGkrKykgewogICAgICAgICAgICBvdXRbaV0gPSBpICsgMTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIG91dDsKICAgIH0KfQoKLy8gY2FsbGRhdGFjb3B5KHAsIHN0YXJ0LCBzaXplKSAtIENvcHkgc3RhcnQgdG8gc3RhcnQgKyBzaXplIGNhbGxkYXRhIHRvIG1lbW9yeSBzdGFydGluZyBhdCBwb2ludGVyIHAKLy8gcmV0dXJuZGF0YXNpemUgLSBHZXQgc2l6ZSBvZiByZXR1cm5lZCBkYXRhIGZyb20gY2FsbCwgc3RhdGljY2FsbCBvciBkZWxlZ2F0ZWNhbGwKLy8gcmV0dXJuZGF0YWNvcHkocCwgc3RhcnQsIHNpemUpIC0gQ29weSBzdGFydCB0byBzdGFydCArIHNpemUgcmV0dXJuIGRhdGEgdG8gbWVtb3J5IHN0YXJ0aW5nIGF0IHBvaW50ZXIgcAovLyBjYWxsKGcsIGEsIHYsIGluLCBpbl9zaXplLCBvdXQsIG91dF9zaXplKQovLyAtIGNhbGwgY29udHJhY3QgYXQgYSwgdXNlIG1heCBnIGdhcywgc2VuZCB2IHdlaQovLyAtIHdpdGggaW5wdXQgZnJvbSBtZW1vcnkgaW4gdG8gaW4gKyBpbl9zaXplCi8vIC0gdXNlIG1lbW9yeSBvdXQgdG8gb3V0ICsgb3V0X3NpemUgZm9yIG91dHB1dAovLyBzdGF0aWNjYWxsKGcsIGEsIGluLCBpbl9zaXplLCBvdXQsIG91dF9zaXplKSAtIHJlYWQgb25seSB2ZXJzaW9uIG9mIGNhbGwKY29udHJhY3QgWXVsU3RhdGljQ2FsbCB7CiAgICBmdW5jdGlvbiB0ZXN0X3N0YXRpY2NhbGwoYWRkcmVzcyBhLCBieXRlcyBjYWxsZGF0YSBkYXRhKSBwdWJsaWMgdmlldyB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBsZXQgcCA6PSBtbG9hZCgweDQwKQogICAgICAgICAgICAvLyBDb3B5IGNhbGxkYXRhIHRvIG1lbW9yeQogICAgICAgICAgICBjYWxsZGF0YWNvcHkocCwgZGF0YS5vZmZzZXQsIGRhdGEubGVuZ3RoKQogICAgICAgICAgICAvLyBObyBuZWVkIHRvIHVwZGF0ZSBmcmVlIG1lbW9yeSBwb2ludGVyPwogICAgICAgICAgICAvLyBtc3RvcmUoMHg0MCwgYWRkKHAsIGRhdGEubGVuZ3RoKSkKCiAgICAgICAgICAgIGxldCBvayA6PSBzdGF0aWNjYWxsKGdhcygpLCBhLCBwLCBkYXRhLmxlbmd0aCwgMCwgMCkKCiAgICAgICAgICAgIGlmIGlzemVybyhvaykgeyByZXZlcnQoMCwgMCkgfQoKICAgICAgICAgICAgLy8gcCA6PSBtbG9hZCgweDQwKQogICAgICAgICAgICBsZXQgcmV0dXJuX2RhdGFfc2l6ZSA6PSByZXR1cm5kYXRhc2l6ZSgpCiAgICAgICAgICAgIC8vIENvcHkgcmV0dXJuZWQgZGF0YSB0byBtZW1vcnkKICAgICAgICAgICAgLy8gSXMgaXQgc2FmZSB0byBvdmVyd3JpdGUgbWVtb3J5IHRoYXQgd2FzIHVzZWQgZm9yIGlucHV0cz8KICAgICAgICAgICAgcmV0dXJuZGF0YWNvcHkocCwgMCwgcmV0dXJuX2RhdGFfc2l6ZSkKICAgICAgICAgICAgcmV0dXJuKHAsIHJldHVybl9kYXRhX3NpemUpCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfYWJpX2RlY29kZV91aW50MjU2KGFkZHJlc3MgYSwgYnl0ZXMgY2FsbGRhdGEgZGF0YSkKICAgICAgICBwdWJsaWMKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1NikKICAgIHsKICAgICAgICB0ZXN0X3N0YXRpY2NhbGwoYSwgZGF0YSk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9hYmlfZGVjb2RlX2J5dGVzKGFkZHJlc3MgYSwgYnl0ZXMgY2FsbGRhdGEgZGF0YSkKICAgICAgICBwdWJsaWMKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KQogICAgewogICAgICAgIHRlc3Rfc3RhdGljY2FsbChhLCBkYXRhKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X2FiaV9kZWNvZGVfdWludDI1Nl9hcnIoYWRkcmVzcyBhLCBieXRlcyBjYWxsZGF0YSBkYXRhKQogICAgICAgIHB1YmxpYwogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2W10gbWVtb3J5KQogICAgewogICAgICAgIHRlc3Rfc3RhdGljY2FsbChhLCBkYXRhKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3N0YXRpY2NhbGxfcmV0dXJuX2FiaV9lbmNvZGVkX2J5dGVzKAogICAgICAgIGFkZHJlc3MgYWRkciwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIHB1YmxpYyB2aWV3IHJldHVybnMgKGJ5dGVzIG1lbW9yeSBvdXQsIHVpbnQyNTYgcmV0dXJuX2RhdGFfc2l6ZSkgewogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgbGV0IHAgOj0gbWxvYWQoMHg0MCkKICAgICAgICAgICAgLy8gQ29weSBjYWxsZGF0YSB0byBtZW1vcnkKICAgICAgICAgICAgY2FsbGRhdGFjb3B5KHAsIGRhdGEub2Zmc2V0LCBkYXRhLmxlbmd0aCkKICAgICAgICAgICAgLy8gVXBkYXRlIGZyZWUgbWVtb3J5IHBvaW50ZXIKICAgICAgICAgICAgbXN0b3JlKDB4NDAsIGFkZChwLCBkYXRhLmxlbmd0aCkpCgogICAgICAgICAgICBsZXQgb2sgOj0gc3RhdGljY2FsbChnYXMoKSwgYWRkciwgcCwgZGF0YS5sZW5ndGgsIDAsIDApCgogICAgICAgICAgICBpZiBpc3plcm8ob2spIHsgcmV2ZXJ0KDAsIDApIH0KCiAgICAgICAgICAgIC8vIHJldHVybl9kYXRhX3NpemUgPSAzMiAgZm9yIGNhbGxpbmcgVGFyZ2V0LmYgLT4gdWludDI1NgogICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgID0gOTYgIGZvciBjYWxsaW5nIFRhcmdldC5nIC0+IGJ5dGVzW10gKDMyIG9mZnNldCwgMzIgbGVuZ3RoLCAzIGJ5dGVzIHBhZGRlZCB0byAzMikKICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICA9IDE2MCBmb3IgY2FsbGluZyBUYXJnZXQuaCAtPiB1aW50MjU2W10gKDMyIG9mZnNldCwgMzIgbGVuZ3RoLCAzMiB4IDMgZWxlbWVudHMpCiAgICAgICAgICAgIHJldHVybl9kYXRhX3NpemUgOj0gcmV0dXJuZGF0YXNpemUoKQogICAgICAgICAgICAvLyBTdG9yZSBsZW5ndGggb2YgcmV0dXJuIGRhdGEgdG8gb3V0CiAgICAgICAgICAgIC8vIHBvaW50ZXIgdG8gb3V0ID0gMHg2MCAoemVybyBzbG90KQogICAgICAgICAgICAvLyBUT0RPOiBzYWZlIHRvIHdyaXRlIHRvIHplcm8gc2xvdD8KICAgICAgICAgICAgbXN0b3JlKG91dCwgcmV0dXJuX2RhdGFfc2l6ZSkKICAgICAgICAgICAgLy8gQ29weSByZXR1cm4gZGF0YSB0byBvdXQKICAgICAgICAgICAgcmV0dXJuZGF0YWNvcHkoYWRkKG91dCwgMHgyMCksIDAsIHJldHVybl9kYXRhX3NpemUpCiAgICAgICAgICAgIC8vIFVwZGF0ZSBmcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIG1zdG9yZSgweDQwLCBhZGQob3V0LCBhZGQoMHgyMCwgcmV0dXJuX2RhdGFfc2l6ZSkpKQogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgQ291bnRlciB7CiAgICB1aW50MjU2IHB1YmxpYyBjb3VudDsKCiAgICBmdW5jdGlvbiBpbmMoKSBwdWJsaWMgcmV0dXJucyAodWludDI1NikgewogICAgICAgIGNvdW50ICs9IDE7CiAgICAgICAgcmV0dXJuIGNvdW50OwogICAgfQp9Cgpjb250cmFjdCBZdWxDYWxsIHsKICAgIGZ1bmN0aW9uIHRlc3RfY2FsbChhZGRyZXNzIGEsIGJ5dGVzIG1lbW9yeSBkYXRhKQogICAgICAgIHB1YmxpYwogICAgICAgIHBheWFibGUKICAgICAgICByZXR1cm5zIChieXRlcyBtZW1vcnkgb3V0KQogICAgewogICAgICAgIGJ5dGVzMzIgZGF0YV9wdHI7CiAgICAgICAgYnl0ZXMzMiBvdXRfcHRyOwogICAgICAgIGFzc2VtYmx5IHsKICAgICAgICAgICAgLy8gMHg4MAogICAgICAgICAgICBkYXRhX3B0ciA6PSBkYXRhCiAgICAgICAgICAgIC8vIDB4NjAKICAgICAgICAgICAgb3V0X3B0ciA6PSBvdXQKCiAgICAgICAgICAgIGxldCBkYXRhX3NpemUgOj0gbWxvYWQoZGF0YSkKICAgICAgICAgICAgbGV0IGRhdGFfc3RhcnQgOj0gYWRkKGRhdGEsIDB4MjApCiAgICAgICAgICAgIGxldCBvayA6PSBjYWxsKGdhcygpLCBhLCBjYWxsdmFsdWUoKSwgZGF0YV9zdGFydCwgZGF0YV9zaXplLCAwLCAwKQoKICAgICAgICAgICAgaWYgaXN6ZXJvKG9rKSB7IHJldmVydCgwLCAwKSB9CgogICAgICAgICAgICBsZXQgcmV0dXJuX2RhdGFfc2l6ZSA6PSByZXR1cm5kYXRhc2l6ZSgpCiAgICAgICAgICAgIC8vIFN0b3JlIGxlbmd0aCBvZiByZXR1cm4gZGF0YSB0byBvdXQKICAgICAgICAgICAgbXN0b3JlKG91dCwgcmV0dXJuX2RhdGFfc2l6ZSkKICAgICAgICAgICAgLy8gQ29weSByZXR1cm4gZGF0YSB0byBvdXQKICAgICAgICAgICAgcmV0dXJuZGF0YWNvcHkoYWRkKG91dCwgMHgyMCksIDAsIHJldHVybl9kYXRhX3NpemUpCiAgICAgICAgICAgIC8vIFVwZGF0ZSBmcmVlIG1lbW9yeSBwb2ludGVyCiAgICAgICAgICAgIG1zdG9yZSgweDQwLCBhZGQob3V0LCBhZGQoMHgyMCwgcmV0dXJuX2RhdGFfc2l6ZSkpKQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X2luYyhhZGRyZXNzIGNvdW50ZXIpIHB1YmxpYyByZXR1cm5zICh1aW50MjU2IGNvdW50KSB7CiAgICAgICAgYnl0ZXMgbWVtb3J5IHJlcyA9IHRlc3RfY2FsbChjb3VudGVyLCBhYmkuZW5jb2RlQ2FsbChDb3VudGVyLmluYywgKCkpKTsKICAgICAgICBjb3VudCA9IGFiaS5kZWNvZGUocmVzLCAodWludDI1NikpOwogICAgfQp9CgovLyBNZW1vcnkgZXhwYW5zaW9uIGdhcyBjb3N0Ci8vIEdhcyBjb3N0IGlzIHF1YWRyYXRpYyB0byBtZW1vcnkgYWxsb2NhdGlvbi4KY29udHJhY3QgTWVtRXhwIHsKICAgIGZ1bmN0aW9uIGFsbG9jX21lbSh1aW50MjU2IG4pIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHVpbnQyNTYgZ2FzX3N0YXJ0ID0gZ2FzbGVmdCgpOwogICAgICAgIHVpbnQyNTZbXSBtZW1vcnkgYXJyID0gbmV3IHVpbnQyNTZbXShuKTsKICAgICAgICB1aW50MjU2IGdhc19lbmQgPSBnYXNsZWZ0KCk7CiAgICAgICAgcmV0dXJuIGdhc19zdGFydCAtIGdhc19lbmQ7CiAgICB9Cn0KCi8vIGFyciBzaXplIHwgZ2FzCi8vICAgICAgICAwIHwgICAgMTIwCi8vICAgICAgICAxIHwgICAgMTc4Ci8vICAgICAgIDEwIHwgICAgMjMyCi8vICAgICAgIDIwIHwgICAgMjkzCi8vICAgICAgIDMwIHwgICAgMzU0Ci8vICAgICAgIDQwIHwgICAgNDE1Ci8vICAgICAgIDUwIHwgICAgNDc3Ci8vICAgICAgIDYwIHwgICAgNTQwCi8vICAgICAgIDcwIHwgICAgNjAyCi8vICAgICAgIDgwIHwgICAgNjY2Ci8vICAgICAgIDkwIHwgICAgNzI5Ci8vICAgICAgMTAwIHwgICAgNzkzCi8vICAgICAgMTEwIHwgICAgODU3Ci8vICAgICAgMTIwIHwgICAgOTIyCi8vICAgICAgMTMwIHwgICAgOTg3Ci8vICAgICAgMTQwIHwgICAxMDUzCi8vICAgICAgMTUwIHwgICAxMTE4Ci8vICAgICAgMTYwIHwgICAxMTg1Ci8vICAgICAgMTcwIHwgICAxMjUxCi8vICAgICAgMTgwIHwgICAxMzE4Ci8vICAgICAgMTkwIHwgICAxMzg2Ci8vICAgICAgMjAwIHwgICAxNDU0CgovLyAgICAgMTAwMCB8ICAgODE0NAovLyAgICAgMjAwMCB8ICAyMDAyMwovLyAgICAgMzAwMCB8ICAzNTgwOAovLyAgICAgNDAwMCB8ICA1NTUwMAovLyAgICAgNTAwMCB8ICA3OTA5NwovLyAgICAgNjAwMCB8IDEwNjYwMQovLyAgICAgNzAwMCB8IDEzODAxMQovLyAgICAgODAwMCB8IDE3MzMyOAovLyAgICAgOTAwMCB8IDIxMjU1MAovLyAgICAxMDAwMCB8IDI1NTY3OQovLyAgICAxMTAwMCB8IDMwMjcxNQovLyAgICAxMjAwMCB8IDM1MzY1NgovLyAgICAxMzAwMCB8IDQwODUwNAovLyAgICAxNDAwMCB8IDQ2NzI1NwovLyAgICAxNTAwMCB8IDUyOTkxOAovLyAgICAxNjAwMCB8IDU5NjQ4NAovLyAgICAxNzAwMCB8IDY2Njk1NwovLyAgICAxODAwMCB8IDc0MTMzNgovLyAgICAxOTAwMCB8IDgxOTYyMQovLyAgICAyMDAwMCB8IDkwMTgxMgo=",
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
<span class="hljs-comment">// index     0    1    2   ...   0xfff...fff = 2*256 - 1</span>
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
