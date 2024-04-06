// metadata
export const version = "0.8.24"
export const title = "Uniswap V3 Swap Examples"
export const description = "Uniswap V3 swap examples"

export const keywords = ["defi", "uniswap", "v3", "swap", "amm"]

export const codes = [
  {
    fileName: "UniswapV3MultiHopSwap.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmFkZHJlc3MgY29uc3RhbnQgU1dBUF9ST1VURVJfMDIgPSAweDY4YjM0NjU4MzNmYjcyQTcwZWNERjQ4NUUwZTRDN2JEODY2NUZjNDU7CmFkZHJlc3MgY29uc3RhbnQgV0VUSCA9IDB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMjsKYWRkcmVzcyBjb25zdGFudCBVU0RDID0gMHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4OwphZGRyZXNzIGNvbnN0YW50IERBSSA9IDB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRjsKCmNvbnRyYWN0IFVuaXN3YXBWM011bHRpSG9wU3dhcCB7CiAgICBJU3dhcFJvdXRlcjAyIHByaXZhdGUgY29uc3RhbnQgcm91dGVyID0gSVN3YXBSb3V0ZXIwMihTV0FQX1JPVVRFUl8wMik7CiAgICBJRVJDMjAgcHJpdmF0ZSBjb25zdGFudCB3ZXRoID0gSUVSQzIwKFdFVEgpOwogICAgSUVSQzIwIHByaXZhdGUgY29uc3RhbnQgZGFpID0gSUVSQzIwKERBSSk7CgogICAgZnVuY3Rpb24gc3dhcEV4YWN0SW5wdXRNdWx0aUhvcCh1aW50MjU2IGFtb3VudEluLCB1aW50MjU2IGFtb3VudE91dE1pbikKICAgICAgICBleHRlcm5hbAogICAgewogICAgICAgIHdldGgudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudEluKTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyhyb3V0ZXIpLCBhbW91bnRJbik7CgogICAgICAgIGJ5dGVzIG1lbW9yeSBwYXRoID0KICAgICAgICAgICAgYWJpLmVuY29kZVBhY2tlZChXRVRILCB1aW50MjQoMzAwMCksIFVTREMsIHVpbnQyNCgxMDApLCBEQUkpOwoKICAgICAgICBJU3dhcFJvdXRlcjAyLkV4YWN0SW5wdXRQYXJhbXMgbWVtb3J5IHBhcmFtcyA9IElTd2FwUm91dGVyMDIKICAgICAgICAgICAgLkV4YWN0SW5wdXRQYXJhbXMoewogICAgICAgICAgICBwYXRoOiBwYXRoLAogICAgICAgICAgICByZWNpcGllbnQ6IG1zZy5zZW5kZXIsCiAgICAgICAgICAgIGFtb3VudEluOiBhbW91bnRJbiwKICAgICAgICAgICAgYW1vdW50T3V0TWluaW11bTogYW1vdW50T3V0TWluCiAgICAgICAgfSk7CgogICAgICAgIHJvdXRlci5leGFjdElucHV0KHBhcmFtcyk7CiAgICB9CgogICAgZnVuY3Rpb24gc3dhcEV4YWN0T3V0cHV0TXVsdGlIb3AodWludDI1NiBhbW91bnRPdXQsIHVpbnQyNTYgYW1vdW50SW5NYXgpCiAgICAgICAgZXh0ZXJuYWwKICAgIHsKICAgICAgICB3ZXRoLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBhbW91bnRJbk1heCk7CiAgICAgICAgd2V0aC5hcHByb3ZlKGFkZHJlc3Mocm91dGVyKSwgYW1vdW50SW5NYXgpOwoKICAgICAgICBieXRlcyBtZW1vcnkgcGF0aCA9CiAgICAgICAgICAgIGFiaS5lbmNvZGVQYWNrZWQoREFJLCB1aW50MjQoMTAwKSwgVVNEQywgdWludDI0KDMwMDApLCBXRVRIKTsKCiAgICAgICAgSVN3YXBSb3V0ZXIwMi5FeGFjdE91dHB1dFBhcmFtcyBtZW1vcnkgcGFyYW1zID0gSVN3YXBSb3V0ZXIwMgogICAgICAgICAgICAuRXhhY3RPdXRwdXRQYXJhbXMoewogICAgICAgICAgICBwYXRoOiBwYXRoLAogICAgICAgICAgICByZWNpcGllbnQ6IG1zZy5zZW5kZXIsCiAgICAgICAgICAgIGFtb3VudE91dDogYW1vdW50T3V0LAogICAgICAgICAgICBhbW91bnRJbk1heGltdW06IGFtb3VudEluTWF4CiAgICAgICAgfSk7CgogICAgICAgIHVpbnQyNTYgYW1vdW50SW4gPSByb3V0ZXIuZXhhY3RPdXRwdXQocGFyYW1zKTsKCiAgICAgICAgaWYgKGFtb3VudEluIDwgYW1vdW50SW5NYXgpIHsKICAgICAgICAgICAgd2V0aC5hcHByb3ZlKGFkZHJlc3Mocm91dGVyKSwgMCk7CiAgICAgICAgICAgIHdldGgudHJhbnNmZXIobXNnLnNlbmRlciwgYW1vdW50SW5NYXggLSBhbW91bnRJbik7CiAgICAgICAgfQogICAgfQp9CgppbnRlcmZhY2UgSVN3YXBSb3V0ZXIwMiB7CiAgICBzdHJ1Y3QgRXhhY3RJbnB1dFBhcmFtcyB7CiAgICAgICAgYnl0ZXMgcGF0aDsKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudDsKICAgICAgICB1aW50MjU2IGFtb3VudEluOwogICAgICAgIHVpbnQyNTYgYW1vdW50T3V0TWluaW11bTsKICAgIH0KCiAgICBmdW5jdGlvbiBleGFjdElucHV0KEV4YWN0SW5wdXRQYXJhbXMgY2FsbGRhdGEgcGFyYW1zKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KTsKCiAgICBzdHJ1Y3QgRXhhY3RPdXRwdXRQYXJhbXMgewogICAgICAgIGJ5dGVzIHBhdGg7CiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQ7CiAgICAgICAgdWludDI1NiBhbW91bnRPdXQ7CiAgICAgICAgdWludDI1NiBhbW91bnRJbk1heGltdW07CiAgICB9CgogICAgZnVuY3Rpb24gZXhhY3RPdXRwdXQoRXhhY3RPdXRwdXRQYXJhbXMgY2FsbGRhdGEgcGFyYW1zKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYW1vdW50SW4pOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKGFkZHJlc3Mgc2VuZGVyLCBhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKfQoKaW50ZXJmYWNlIElXRVRIIGlzIElFUkMyMCB7CiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgZXh0ZXJuYWwgcGF5YWJsZTsKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbDsKfQo=",
  },
  {
    fileName: "UniswapV3MultiHopSwapTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCB7VGVzdCwgY29uc29sZTJ9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7CmltcG9ydCAiLi4vLi4vLi4vc3JjL2RlZmkvdW5pc3dhcC12My1zd2FwL1VuaXN3YXBWM011bHRpSG9wU3dhcC5zb2wiOwoKY29udHJhY3QgVW5pc3dhcFYzTXVsdGlIb3BTd2FwVGVzdCBpcyBUZXN0IHsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBTV0FQX1JPVVRFUl8wMiA9CiAgICAgICAgMHg2OGIzNDY1ODMzZmI3MkE3MGVjREY0ODVFMGU0QzdiRDg2NjVGYzQ1OwogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgREFJID0gMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGOwogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IFVTREMgPSAweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg7CgogICAgSVdFVEggcHJpdmF0ZSBjb25zdGFudCB3ZXRoID0gSVdFVEgoV0VUSCk7CiAgICBJRVJDMjAgcHJpdmF0ZSBjb25zdGFudCBkYWkgPSBJRVJDMjAoREFJKTsKICAgIElFUkMyMCBwcml2YXRlIGNvbnN0YW50IHVzZGMgPSBJRVJDMjAoVVNEQyk7CgogICAgVW5pc3dhcFYzTXVsdGlIb3BTd2FwIHByaXZhdGUgc3dhcDsKCiAgICB1aW50MjU2IHByaXZhdGUgY29uc3RhbnQgQU1PVU5UX0lOID0gMTAgKiAxZTE4OwogICAgdWludDI1NiBwcml2YXRlIGNvbnN0YW50IEFNT1VOVF9PVVQgPSAyMCAqIDFlMTg7CiAgICB1aW50MjU2IHByaXZhdGUgY29uc3RhbnQgTUFYX0FNT1VOVF9JTiA9IDFlMTg7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIHN3YXAgPSBuZXcgVW5pc3dhcFYzTXVsdGlIb3BTd2FwKCk7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiBBTU9VTlRfSU4gKyBNQVhfQU1PVU5UX0lOfSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHN3YXApLCB0eXBlKHVpbnQyNTYpLm1heCk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9zd2FwRXhhY3RJbnB1dE11bHRpSG9wKCkgcHVibGljIHsKICAgICAgICBzd2FwLnN3YXBFeGFjdElucHV0TXVsdGlIb3AoQU1PVU5UX0lOLCAxKTsKICAgICAgICB1aW50MjU2IGQxID0gZGFpLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICBhc3NlcnRHdChkMSwgMCwgIkRBSSBiYWxhbmNlID0gMCIpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3Rfc3dhcEV4YWN0T3V0cHV0TXVsdGlIb3AoKSBwdWJsaWMgewogICAgICAgIHVpbnQyNTYgdzAgPSB3ZXRoLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICB1aW50MjU2IGQwID0gZGFpLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICBzd2FwLnN3YXBFeGFjdE91dHB1dE11bHRpSG9wKEFNT1VOVF9PVVQsIE1BWF9BTU9VTlRfSU4pOwogICAgICAgIHVpbnQyNTYgdzEgPSB3ZXRoLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICB1aW50MjU2IGQxID0gZGFpLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKCiAgICAgICAgYXNzZXJ0THQodzEsIHcwLCAiV0VUSCBiYWxhbmNlIGRpZG4ndCBkZWNyZWFzZSIpOwogICAgICAgIGFzc2VydEd0KGQxLCBkMCwgIkRBSSBiYWxhbmNlIGRpZG4ndCBpbmNyZWFzZSIpOwogICAgICAgIGFzc2VydEVxKHdldGguYmFsYW5jZU9mKGFkZHJlc3Moc3dhcCkpLCAwLCAiV0VUSCBiYWxhbmNlIG9mIHN3YXAgIT0gMCIpOwogICAgICAgIGFzc2VydEVxKGRhaS5iYWxhbmNlT2YoYWRkcmVzcyhzd2FwKSksIDAsICJEQUkgYmFsYW5jZSBvZiBzd2FwICE9IDAiKTsKICAgIH0KfQo=",
  },
  {
    fileName: "UniswapV3SingleHopSwap.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmFkZHJlc3MgY29uc3RhbnQgU1dBUF9ST1VURVJfMDIgPSAweDY4YjM0NjU4MzNmYjcyQTcwZWNERjQ4NUUwZTRDN2JEODY2NUZjNDU7CmFkZHJlc3MgY29uc3RhbnQgV0VUSCA9IDB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMjsKYWRkcmVzcyBjb25zdGFudCBEQUkgPSAweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEY7Cgpjb250cmFjdCBVbmlzd2FwVjNTaW5nbGVIb3BTd2FwIHsKICAgIElTd2FwUm91dGVyMDIgcHJpdmF0ZSBjb25zdGFudCByb3V0ZXIgPSBJU3dhcFJvdXRlcjAyKFNXQVBfUk9VVEVSXzAyKTsKICAgIElFUkMyMCBwcml2YXRlIGNvbnN0YW50IHdldGggPSBJRVJDMjAoV0VUSCk7CiAgICBJRVJDMjAgcHJpdmF0ZSBjb25zdGFudCBkYWkgPSBJRVJDMjAoREFJKTsKCiAgICBmdW5jdGlvbiBzd2FwRXhhY3RJbnB1dFNpbmdsZUhvcCh1aW50MjU2IGFtb3VudEluLCB1aW50MjU2IGFtb3VudE91dE1pbikKICAgICAgICBleHRlcm5hbAogICAgewogICAgICAgIHdldGgudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudEluKTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyhyb3V0ZXIpLCBhbW91bnRJbik7CgogICAgICAgIElTd2FwUm91dGVyMDIuRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyBtZW1vcnkgcGFyYW1zID0gSVN3YXBSb3V0ZXIwMgogICAgICAgICAgICAuRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyh7CiAgICAgICAgICAgIHRva2VuSW46IFdFVEgsCiAgICAgICAgICAgIHRva2VuT3V0OiBEQUksCiAgICAgICAgICAgIGZlZTogMzAwMCwKICAgICAgICAgICAgcmVjaXBpZW50OiBtc2cuc2VuZGVyLAogICAgICAgICAgICBhbW91bnRJbjogYW1vdW50SW4sCiAgICAgICAgICAgIGFtb3VudE91dE1pbmltdW06IGFtb3VudE91dE1pbiwKICAgICAgICAgICAgc3FydFByaWNlTGltaXRYOTY6IDAKICAgICAgICB9KTsKCiAgICAgICAgcm91dGVyLmV4YWN0SW5wdXRTaW5nbGUocGFyYW1zKTsKICAgIH0KCiAgICBmdW5jdGlvbiBzd2FwRXhhY3RPdXRwdXRTaW5nbGVIb3AodWludDI1NiBhbW91bnRPdXQsIHVpbnQyNTYgYW1vdW50SW5NYXgpCiAgICAgICAgZXh0ZXJuYWwKICAgIHsKICAgICAgICB3ZXRoLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBhbW91bnRJbk1heCk7CiAgICAgICAgd2V0aC5hcHByb3ZlKGFkZHJlc3Mocm91dGVyKSwgYW1vdW50SW5NYXgpOwoKICAgICAgICBJU3dhcFJvdXRlcjAyLkV4YWN0T3V0cHV0U2luZ2xlUGFyYW1zIG1lbW9yeSBwYXJhbXMgPSBJU3dhcFJvdXRlcjAyCiAgICAgICAgICAgIC5FeGFjdE91dHB1dFNpbmdsZVBhcmFtcyh7CiAgICAgICAgICAgIHRva2VuSW46IFdFVEgsCiAgICAgICAgICAgIHRva2VuT3V0OiBEQUksCiAgICAgICAgICAgIGZlZTogMzAwMCwKICAgICAgICAgICAgcmVjaXBpZW50OiBtc2cuc2VuZGVyLAogICAgICAgICAgICBhbW91bnRPdXQ6IGFtb3VudE91dCwKICAgICAgICAgICAgYW1vdW50SW5NYXhpbXVtOiBhbW91bnRJbk1heCwKICAgICAgICAgICAgc3FydFByaWNlTGltaXRYOTY6IDAKICAgICAgICB9KTsKCiAgICAgICAgdWludDI1NiBhbW91bnRJbiA9IHJvdXRlci5leGFjdE91dHB1dFNpbmdsZShwYXJhbXMpOwoKICAgICAgICBpZiAoYW1vdW50SW4gPCBhbW91bnRJbk1heCkgewogICAgICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyhyb3V0ZXIpLCAwKTsKICAgICAgICAgICAgd2V0aC50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnRJbk1heCAtIGFtb3VudEluKTsKICAgICAgICB9CiAgICB9Cn0KCmludGVyZmFjZSBJU3dhcFJvdXRlcjAyIHsKICAgIHN0cnVjdCBFeGFjdElucHV0U2luZ2xlUGFyYW1zIHsKICAgICAgICBhZGRyZXNzIHRva2VuSW47CiAgICAgICAgYWRkcmVzcyB0b2tlbk91dDsKICAgICAgICB1aW50MjQgZmVlOwogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50OwogICAgICAgIHVpbnQyNTYgYW1vdW50SW47CiAgICAgICAgdWludDI1NiBhbW91bnRPdXRNaW5pbXVtOwogICAgICAgIHVpbnQxNjAgc3FydFByaWNlTGltaXRYOTY7CiAgICB9CgogICAgZnVuY3Rpb24gZXhhY3RJbnB1dFNpbmdsZShFeGFjdElucHV0U2luZ2xlUGFyYW1zIGNhbGxkYXRhIHBhcmFtcykKICAgICAgICBleHRlcm5hbAogICAgICAgIHBheWFibGUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGFtb3VudE91dCk7CgogICAgc3RydWN0IEV4YWN0T3V0cHV0U2luZ2xlUGFyYW1zIHsKICAgICAgICBhZGRyZXNzIHRva2VuSW47CiAgICAgICAgYWRkcmVzcyB0b2tlbk91dDsKICAgICAgICB1aW50MjQgZmVlOwogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50OwogICAgICAgIHVpbnQyNTYgYW1vdW50T3V0OwogICAgICAgIHVpbnQyNTYgYW1vdW50SW5NYXhpbXVtOwogICAgICAgIHVpbnQxNjAgc3FydFByaWNlTGltaXRYOTY7CiAgICB9CgogICAgZnVuY3Rpb24gZXhhY3RPdXRwdXRTaW5nbGUoRXhhY3RPdXRwdXRTaW5nbGVQYXJhbXMgY2FsbGRhdGEgcGFyYW1zKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYW1vdW50SW4pOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKGFkZHJlc3Mgc2VuZGVyLCBhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKfQoKaW50ZXJmYWNlIElXRVRIIGlzIElFUkMyMCB7CiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgZXh0ZXJuYWwgcGF5YWJsZTsKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbDsKfQo=",
  },
  {
    fileName: "UniswapV3SingleHopSwapTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCB7VGVzdCwgY29uc29sZTJ9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7CmltcG9ydCAiLi4vLi4vLi4vc3JjL2RlZmkvdW5pc3dhcC12My1zd2FwL1VuaXN3YXBWM1NpbmdsZUhvcFN3YXAuc29sIjsKCmNvbnRyYWN0IFVuaXN3YXBWM1NpbmdsZUhvcFN3YXBUZXN0IGlzIFRlc3QgewogICAgYWRkcmVzcyBwcml2YXRlIGNvbnN0YW50IFNXQVBfUk9VVEVSXzAyID0KICAgICAgICAweDY4YjM0NjU4MzNmYjcyQTcwZWNERjQ4NUUwZTRDN2JEODY2NUZjNDU7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgV0VUSCA9IDB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMjsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBEQUkgPSAweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEY7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgREFJX1dFVEhfUE9PTF8zMDAwID0KICAgICAgICAweEMyZTlGMjVCZTYyNTdjMjEwZDdBZGYwRDRDZDZFM0U4ODFiYTI1Zjg7CgogICAgSVdFVEggcHJpdmF0ZSBjb25zdGFudCB3ZXRoID0gSVdFVEgoV0VUSCk7CiAgICBJRVJDMjAgcHJpdmF0ZSBjb25zdGFudCBkYWkgPSBJRVJDMjAoREFJKTsKCiAgICBVbmlzd2FwVjNTaW5nbGVIb3BTd2FwIHByaXZhdGUgc3dhcDsKCiAgICB1aW50MjU2IHByaXZhdGUgY29uc3RhbnQgQU1PVU5UX0lOID0gMWUxODsKICAgIHVpbnQyNTYgcHJpdmF0ZSBjb25zdGFudCBBTU9VTlRfT1VUID0gNTAgKiAxZTE4OwogICAgdWludDI1NiBwcml2YXRlIGNvbnN0YW50IE1BWF9BTU9VTlRfSU4gPSAxZTE4OwoKICAgIGZ1bmN0aW9uIHNldFVwKCkgcHVibGljIHsKICAgICAgICBzd2FwID0gbmV3IFVuaXN3YXBWM1NpbmdsZUhvcFN3YXAoKTsKICAgICAgICB3ZXRoLmRlcG9zaXR7dmFsdWU6IEFNT1VOVF9JTiArIE1BWF9BTU9VTlRfSU59KCk7CiAgICAgICAgd2V0aC5hcHByb3ZlKGFkZHJlc3Moc3dhcCksIHR5cGUodWludDI1NikubWF4KTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3N3YXBFeGFjdElucHV0U2luZ2xlSG9wKCkgcHVibGljIHsKICAgICAgICBzd2FwLnN3YXBFeGFjdElucHV0U2luZ2xlSG9wKEFNT1VOVF9JTiwgMSk7CiAgICAgICAgdWludDI1NiBkMSA9IGRhaS5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSk7CiAgICAgICAgYXNzZXJ0R3QoZDEsIDAsICJEQUkgYmFsYW5jZSA9IDAiKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0X3N3YXBFeGFjdE91dHB1dFNpbmdsZUhvcCgpIHB1YmxpYyB7CiAgICAgICAgdWludDI1NiB3MCA9IHdldGguYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwogICAgICAgIHVpbnQyNTYgZDAgPSBkYWkuYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwogICAgICAgIHN3YXAuc3dhcEV4YWN0T3V0cHV0U2luZ2xlSG9wKEFNT1VOVF9PVVQsIE1BWF9BTU9VTlRfSU4pOwogICAgICAgIHVpbnQyNTYgdzEgPSB3ZXRoLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKICAgICAgICB1aW50MjU2IGQxID0gZGFpLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKCiAgICAgICAgYXNzZXJ0THQodzEsIHcwLCAiV0VUSCBiYWxhbmNlIGRpZG4ndCBkZWNyZWFzZSIpOwogICAgICAgIGFzc2VydEd0KGQxLCBkMCwgIkRBSSBiYWxhbmNlIGRpZG4ndCBpbmNyZWFzZSIpOwogICAgICAgIGFzc2VydEVxKHdldGguYmFsYW5jZU9mKGFkZHJlc3Moc3dhcCkpLCAwLCAiV0VUSCBiYWxhbmNlIG9mIHN3YXAgIT0gMCIpOwogICAgICAgIGFzc2VydEVxKGRhaS5iYWxhbmNlT2YoYWRkcmVzcyhzd2FwKSksIDAsICJEQUkgYmFsYW5jZSBvZiBzd2FwICE9IDAiKTsKICAgIH0KfQo=",
  },
  {
    fileName: "UniswapV3SwapExamples.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmNvbnRyYWN0IFVuaXN3YXBWM1N3YXBFeGFtcGxlcyB7CiAgICBJU3dhcFJvdXRlciBjb25zdGFudCByb3V0ZXIgPSBJU3dhcFJvdXRlcigweEU1OTI0MjdBMEFFY2U5MkRlM0VkZWUxRjE4RTAxNTdDMDU4NjE1NjQpOwoKICAgIGZ1bmN0aW9uIHN3YXBFeGFjdElucHV0U2luZ2xlSG9wKGFkZHJlc3MgdG9rZW5JbiwgYWRkcmVzcyB0b2tlbk91dCwgdWludDI0IHBvb2xGZWUsIHVpbnQyNTYgYW1vdW50SW4pCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zICh1aW50MjU2IGFtb3VudE91dCkKICAgIHsKICAgICAgICBJRVJDMjAodG9rZW5JbikudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudEluKTsKICAgICAgICBJRVJDMjAodG9rZW5JbikuYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluKTsKCiAgICAgICAgSVN3YXBSb3V0ZXIuRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyBtZW1vcnkgcGFyYW1zID0gSVN3YXBSb3V0ZXIuRXhhY3RJbnB1dFNpbmdsZVBhcmFtcyh7CiAgICAgICAgICAgIHRva2VuSW46IHRva2VuSW4sCiAgICAgICAgICAgIHRva2VuT3V0OiB0b2tlbk91dCwKICAgICAgICAgICAgZmVlOiBwb29sRmVlLAogICAgICAgICAgICByZWNpcGllbnQ6IG1zZy5zZW5kZXIsCiAgICAgICAgICAgIGRlYWRsaW5lOiBibG9jay50aW1lc3RhbXAsCiAgICAgICAgICAgIGFtb3VudEluOiBhbW91bnRJbiwKICAgICAgICAgICAgYW1vdW50T3V0TWluaW11bTogMCwKICAgICAgICAgICAgc3FydFByaWNlTGltaXRYOTY6IDAKICAgICAgICB9KTsKCiAgICAgICAgYW1vdW50T3V0ID0gcm91dGVyLmV4YWN0SW5wdXRTaW5nbGUocGFyYW1zKTsKICAgIH0KCiAgICBmdW5jdGlvbiBzd2FwRXhhY3RJbnB1dE11bHRpSG9wKGJ5dGVzIGNhbGxkYXRhIHBhdGgsIGFkZHJlc3MgdG9rZW5JbiwgdWludDI1NiBhbW91bnRJbikKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KQogICAgewogICAgICAgIElFUkMyMCh0b2tlbkluKS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50SW4pOwogICAgICAgIElFUkMyMCh0b2tlbkluKS5hcHByb3ZlKGFkZHJlc3Mocm91dGVyKSwgYW1vdW50SW4pOwoKICAgICAgICBJU3dhcFJvdXRlci5FeGFjdElucHV0UGFyYW1zIG1lbW9yeSBwYXJhbXMgPSBJU3dhcFJvdXRlci5FeGFjdElucHV0UGFyYW1zKHsKICAgICAgICAgICAgcGF0aDogcGF0aCwKICAgICAgICAgICAgcmVjaXBpZW50OiBtc2cuc2VuZGVyLAogICAgICAgICAgICBkZWFkbGluZTogYmxvY2sudGltZXN0YW1wLAogICAgICAgICAgICBhbW91bnRJbjogYW1vdW50SW4sCiAgICAgICAgICAgIGFtb3VudE91dE1pbmltdW06IDAKICAgICAgICB9KTsKICAgICAgICBhbW91bnRPdXQgPSByb3V0ZXIuZXhhY3RJbnB1dChwYXJhbXMpOwogICAgfQp9CgppbnRlcmZhY2UgSVN3YXBSb3V0ZXIgewogICAgc3RydWN0IEV4YWN0SW5wdXRTaW5nbGVQYXJhbXMgewogICAgICAgIGFkZHJlc3MgdG9rZW5JbjsKICAgICAgICBhZGRyZXNzIHRva2VuT3V0OwogICAgICAgIHVpbnQyNCBmZWU7CiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQ7CiAgICAgICAgdWludDI1NiBkZWFkbGluZTsKICAgICAgICB1aW50MjU2IGFtb3VudEluOwogICAgICAgIHVpbnQyNTYgYW1vdW50T3V0TWluaW11bTsKICAgICAgICB1aW50MTYwIHNxcnRQcmljZUxpbWl0WDk2OwogICAgfQoKICAgIC8vLyBAbm90aWNlIFN3YXBzIGFtb3VudEluIG9mIG9uZSB0b2tlbiBmb3IgYXMgbXVjaCBhcyBwb3NzaWJsZSBvZiBhbm90aGVyIHRva2VuCiAgICAvLy8gQHBhcmFtIHBhcmFtcyBUaGUgcGFyYW1ldGVycyBuZWNlc3NhcnkgZm9yIHRoZSBzd2FwLCBlbmNvZGVkIGFzIEV4YWN0SW5wdXRTaW5nbGVQYXJhbXMgaW4gY2FsbGRhdGEKICAgIC8vLyBAcmV0dXJuIGFtb3VudE91dCBUaGUgYW1vdW50IG9mIHRoZSByZWNlaXZlZCB0b2tlbgogICAgZnVuY3Rpb24gZXhhY3RJbnB1dFNpbmdsZShFeGFjdElucHV0U2luZ2xlUGFyYW1zIGNhbGxkYXRhIHBhcmFtcykgZXh0ZXJuYWwgcGF5YWJsZSByZXR1cm5zICh1aW50MjU2IGFtb3VudE91dCk7CgogICAgc3RydWN0IEV4YWN0SW5wdXRQYXJhbXMgewogICAgICAgIGJ5dGVzIHBhdGg7CiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQ7CiAgICAgICAgdWludDI1NiBkZWFkbGluZTsKICAgICAgICB1aW50MjU2IGFtb3VudEluOwogICAgICAgIHVpbnQyNTYgYW1vdW50T3V0TWluaW11bTsKICAgIH0KCiAgICAvLy8gQG5vdGljZSBTd2FwcyBhbW91bnRJbiBvZiBvbmUgdG9rZW4gZm9yIGFzIG11Y2ggYXMgcG9zc2libGUgb2YgYW5vdGhlciBhbG9uZyB0aGUgc3BlY2lmaWVkIHBhdGgKICAgIC8vLyBAcGFyYW0gcGFyYW1zIFRoZSBwYXJhbWV0ZXJzIG5lY2Vzc2FyeSBmb3IgdGhlIG11bHRpLWhvcCBzd2FwLCBlbmNvZGVkIGFzIEV4YWN0SW5wdXRQYXJhbXMgaW4gY2FsbGRhdGEKICAgIC8vLyBAcmV0dXJuIGFtb3VudE91dCBUaGUgYW1vdW50IG9mIHRoZSByZWNlaXZlZCB0b2tlbgogICAgZnVuY3Rpb24gZXhhY3RJbnB1dChFeGFjdElucHV0UGFyYW1zIGNhbGxkYXRhIHBhcmFtcykgZXh0ZXJuYWwgcGF5YWJsZSByZXR1cm5zICh1aW50MjU2IGFtb3VudE91dCk7Cn0KCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiBhbGxvd2FuY2UoYWRkcmVzcyBvd25lciwgYWRkcmVzcyBzcGVuZGVyKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIHNlbmRlciwgYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKfQoKaW50ZXJmYWNlIElXRVRIIGlzIElFUkMyMCB7CiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgZXh0ZXJuYWwgcGF5YWJsZTsKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbDsKfQo=",
  },
  {
    fileName: "UniswapV3SwapExamplesTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmltcG9ydCB7VGVzdCwgY29uc29sZTJ9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7CmltcG9ydCAiLi4vLi4vLi4vc3JjL2RlZmkvdW5pc3dhcC12My1zd2FwL1VuaXN3YXBWM1N3YXBFeGFtcGxlcy5zb2wiOwoKYWRkcmVzcyBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwphZGRyZXNzIGNvbnN0YW50IERBSSA9IDB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRjsKYWRkcmVzcyBjb25zdGFudCBVU0RDID0gMHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4OwoKY29udHJhY3QgVW5pVjNTd2FwVGVzdCBpcyBUZXN0IHsKICAgIElXRVRIIHByaXZhdGUgd2V0aCA9IElXRVRIKFdFVEgpOwogICAgSUVSQzIwIHByaXZhdGUgZGFpID0gSUVSQzIwKERBSSk7CiAgICBJRVJDMjAgcHJpdmF0ZSB1c2RjID0gSUVSQzIwKFVTREMpOwoKICAgIFVuaXN3YXBWM1N3YXBFeGFtcGxlcyBwcml2YXRlIHVuaSA9IG5ldyBVbmlzd2FwVjNTd2FwRXhhbXBsZXMoKTsKCiAgICBmdW5jdGlvbiBzZXRVcCgpIHB1YmxpYyB7fQoKICAgIGZ1bmN0aW9uIHRlc3RTaW5nbGVIb3AoKSBwdWJsaWMgewogICAgICAgIHdldGguZGVwb3NpdHt2YWx1ZTogMWUxOH0oKTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyh1bmkpLCAxZTE4KTsKCiAgICAgICAgdWludDI1NiBhbW91bnRPdXQgPSB1bmkuc3dhcEV4YWN0SW5wdXRTaW5nbGVIb3AoV0VUSCwgREFJLCAzMDAwLCAxZTE4KTsKCiAgICAgICAgY29uc29sZTIubG9nKCJEQUkiLCBhbW91bnRPdXQpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RNdWx0aUhvcCgpIHB1YmxpYyB7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiAxZTE4fSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHVuaSksIDFlMTgpOwoKICAgICAgICBieXRlcyBtZW1vcnkgcGF0aCA9IGFiaS5lbmNvZGVQYWNrZWQoV0VUSCwgdWludDI0KDMwMDApLCBVU0RDLCB1aW50MjQoMTAwKSwgREFJKTsKCiAgICAgICAgdWludDI1NiBhbW91bnRPdXQgPSB1bmkuc3dhcEV4YWN0SW5wdXRNdWx0aUhvcChwYXRoLCBXRVRILCAxZTE4KTsKCiAgICAgICAgY29uc29sZTIubG9nKCJEQUkiLCBhbW91bnRPdXQpOwogICAgfQp9Cg==",
  },
]

const html = `<h3>Uniswap V3 Single Hop Swap</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> SWAP_ROUTER_02 <span class="hljs-operator">=</span> <span class="hljs-number">0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3SingleHopSwap</span> </span>{
    ISwapRouter02 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> router <span class="hljs-operator">=</span> ISwapRouter02(SWAP_ROUTER_02);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IERC20(WETH);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactInputSingleHop</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountIn, <span class="hljs-keyword">uint256</span> amountOutMin</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
    </span>{
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        weth.approve(<span class="hljs-keyword">address</span>(router), amountIn);

        ISwapRouter02.ExactInputSingleParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter02
            .ExactInputSingleParams({
            tokenIn: WETH,
            tokenOut: DAI,
            fee: <span class="hljs-number">3000</span>,
            recipient: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            amountIn: amountIn,
            amountOutMinimum: amountOutMin,
            sqrtPriceLimitX96: <span class="hljs-number">0</span>
        });

        router.exactInputSingle(params);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactOutputSingleHop</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut, <span class="hljs-keyword">uint256</span> amountInMax</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
    </span>{
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountInMax);
        weth.approve(<span class="hljs-keyword">address</span>(router), amountInMax);

        ISwapRouter02.ExactOutputSingleParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter02
            .ExactOutputSingleParams({
            tokenIn: WETH,
            tokenOut: DAI,
            fee: <span class="hljs-number">3000</span>,
            recipient: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            amountOut: amountOut,
            amountInMaximum: amountInMax,
            sqrtPriceLimitX96: <span class="hljs-number">0</span>
        });

        <span class="hljs-keyword">uint256</span> amountIn <span class="hljs-operator">=</span> router.exactOutputSingle(params);

        <span class="hljs-keyword">if</span> (amountIn <span class="hljs-operator">&lt;</span> amountInMax) {
            weth.approve(<span class="hljs-keyword">address</span>(router), <span class="hljs-number">0</span>);
            weth.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountInMax <span class="hljs-operator">-</span> amountIn);
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">ISwapRouter02</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">ExactInputSingleParams</span> {
        <span class="hljs-keyword">address</span> tokenIn;
        <span class="hljs-keyword">address</span> tokenOut;
        <span class="hljs-keyword">uint24</span> fee;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint256</span> amountIn;
        <span class="hljs-keyword">uint256</span> amountOutMinimum;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInputSingle</span>(<span class="hljs-params">ExactInputSingleParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">ExactOutputSingleParams</span> {
        <span class="hljs-keyword">address</span> tokenIn;
        <span class="hljs-keyword">address</span> tokenOut;
        <span class="hljs-keyword">uint24</span> fee;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint256</span> amountOut;
        <span class="hljs-keyword">uint256</span> amountInMaximum;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactOutputSingle</span>(<span class="hljs-params">ExactOutputSingleParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountIn</span>)</span>;
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

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IWETH</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}
</code></pre><h3>Uniswap V3 Multi Hop Swap</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> SWAP_ROUTER_02 <span class="hljs-operator">=</span> <span class="hljs-number">0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3MultiHopSwap</span> </span>{
    ISwapRouter02 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> router <span class="hljs-operator">=</span> ISwapRouter02(SWAP_ROUTER_02);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IERC20(WETH);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactInputMultiHop</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountIn, <span class="hljs-keyword">uint256</span> amountOutMin</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
    </span>{
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        weth.approve(<span class="hljs-keyword">address</span>(router), amountIn);

        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> path <span class="hljs-operator">=</span>
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(WETH, <span class="hljs-keyword">uint24</span>(<span class="hljs-number">3000</span>), USDC, <span class="hljs-keyword">uint24</span>(<span class="hljs-number">100</span>), DAI);

        ISwapRouter02.ExactInputParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter02
            .ExactInputParams({
            path: path,
            recipient: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            amountIn: amountIn,
            amountOutMinimum: amountOutMin
        });

        router.exactInput(params);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactOutputMultiHop</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut, <span class="hljs-keyword">uint256</span> amountInMax</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
    </span>{
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountInMax);
        weth.approve(<span class="hljs-keyword">address</span>(router), amountInMax);

        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> path <span class="hljs-operator">=</span>
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(DAI, <span class="hljs-keyword">uint24</span>(<span class="hljs-number">100</span>), USDC, <span class="hljs-keyword">uint24</span>(<span class="hljs-number">3000</span>), WETH);

        ISwapRouter02.ExactOutputParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ISwapRouter02
            .ExactOutputParams({
            path: path,
            recipient: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            amountOut: amountOut,
            amountInMaximum: amountInMax
        });

        <span class="hljs-keyword">uint256</span> amountIn <span class="hljs-operator">=</span> router.exactOutput(params);

        <span class="hljs-keyword">if</span> (amountIn <span class="hljs-operator">&lt;</span> amountInMax) {
            weth.approve(<span class="hljs-keyword">address</span>(router), <span class="hljs-number">0</span>);
            weth.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountInMax <span class="hljs-operator">-</span> amountIn);
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">ISwapRouter02</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">ExactInputParams</span> {
        <span class="hljs-keyword">bytes</span> path;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint256</span> amountIn;
        <span class="hljs-keyword">uint256</span> amountOutMinimum;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactInput</span>(<span class="hljs-params">ExactInputParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">ExactOutputParams</span> {
        <span class="hljs-keyword">bytes</span> path;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint256</span> amountOut;
        <span class="hljs-keyword">uint256</span> amountInMaximum;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">exactOutput</span>(<span class="hljs-params">ExactOutputParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountIn</span>)</span>;
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

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IWETH</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}
</code></pre><h3>Test with Foundry</h3>
<p>Single hop test</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"../../../src/defi/uniswap-v3-swap/UniswapV3SingleHopSwap.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3SingleHopSwapTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> SWAP_ROUTER_02 <span class="hljs-operator">=</span>
        <span class="hljs-number">0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI_WETH_POOL_3000 <span class="hljs-operator">=</span>
        <span class="hljs-number">0xC2e9F25Be6257c210d7Adf0D4Cd6E3E881ba25f8</span>;

    IWETH <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);

    UniswapV3SingleHopSwap <span class="hljs-keyword">private</span> swap;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> AMOUNT_IN <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> AMOUNT_OUT <span class="hljs-operator">=</span> <span class="hljs-number">50</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> MAX_AMOUNT_IN <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        swap <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3SingleHopSwap();
        weth.deposit{<span class="hljs-built_in">value</span>: AMOUNT_IN <span class="hljs-operator">+</span> MAX_AMOUNT_IN}();
        weth.approve(<span class="hljs-keyword">address</span>(swap), <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_swapExactInputSingleHop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        swap.swapExactInputSingleHop(AMOUNT_IN, <span class="hljs-number">1</span>);
        <span class="hljs-keyword">uint256</span> d1 <span class="hljs-operator">=</span> dai.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        assertGt(d1, <span class="hljs-number">0</span>, <span class="hljs-string">"DAI balance = 0"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_swapExactOutputSingleHop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> w0 <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">uint256</span> d0 <span class="hljs-operator">=</span> dai.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        swap.swapExactOutputSingleHop(AMOUNT_OUT, MAX_AMOUNT_IN);
        <span class="hljs-keyword">uint256</span> w1 <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">uint256</span> d1 <span class="hljs-operator">=</span> dai.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));

        assertLt(w1, w0, <span class="hljs-string">"WETH balance didn&#x27;t decrease"</span>);
        assertGt(d1, d0, <span class="hljs-string">"DAI balance didn&#x27;t increase"</span>);
        assertEq(weth.balanceOf(<span class="hljs-keyword">address</span>(swap)), <span class="hljs-number">0</span>, <span class="hljs-string">"WETH balance of swap != 0"</span>);
        assertEq(dai.balanceOf(<span class="hljs-keyword">address</span>(swap)), <span class="hljs-number">0</span>, <span class="hljs-string">"DAI balance of swap != 0"</span>);
    }
}
</code></pre><p>Multi hop test</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"../../../src/defi/uniswap-v3-swap/UniswapV3MultiHopSwap.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3MultiHopSwapTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> SWAP_ROUTER_02 <span class="hljs-operator">=</span>
        <span class="hljs-number">0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

    IWETH <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> usdc <span class="hljs-operator">=</span> IERC20(USDC);

    UniswapV3MultiHopSwap <span class="hljs-keyword">private</span> swap;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> AMOUNT_IN <span class="hljs-operator">=</span> <span class="hljs-number">10</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> AMOUNT_OUT <span class="hljs-operator">=</span> <span class="hljs-number">20</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> MAX_AMOUNT_IN <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        swap <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3MultiHopSwap();
        weth.deposit{<span class="hljs-built_in">value</span>: AMOUNT_IN <span class="hljs-operator">+</span> MAX_AMOUNT_IN}();
        weth.approve(<span class="hljs-keyword">address</span>(swap), <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_swapExactInputMultiHop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        swap.swapExactInputMultiHop(AMOUNT_IN, <span class="hljs-number">1</span>);
        <span class="hljs-keyword">uint256</span> d1 <span class="hljs-operator">=</span> dai.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        assertGt(d1, <span class="hljs-number">0</span>, <span class="hljs-string">"DAI balance = 0"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_swapExactOutputMultiHop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> w0 <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">uint256</span> d0 <span class="hljs-operator">=</span> dai.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        swap.swapExactOutputMultiHop(AMOUNT_OUT, MAX_AMOUNT_IN);
        <span class="hljs-keyword">uint256</span> w1 <span class="hljs-operator">=</span> weth.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">uint256</span> d1 <span class="hljs-operator">=</span> dai.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));

        assertLt(w1, w0, <span class="hljs-string">"WETH balance didn&#x27;t decrease"</span>);
        assertGt(d1, d0, <span class="hljs-string">"DAI balance didn&#x27;t increase"</span>);
        assertEq(weth.balanceOf(<span class="hljs-keyword">address</span>(swap)), <span class="hljs-number">0</span>, <span class="hljs-string">"WETH balance of swap != 0"</span>);
        assertEq(dai.balanceOf(<span class="hljs-keyword">address</span>(swap)), <span class="hljs-number">0</span>, <span class="hljs-string">"DAI balance of swap != 0"</span>);
    }
}
</code></pre>`

export default html
