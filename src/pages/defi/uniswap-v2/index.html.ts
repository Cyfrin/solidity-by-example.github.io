// metadata
export const version = "0.8.20"
export const title = "Uniswap V2 Swap"
export const description = "Uniswap V2 swap"

export const keywords = ["defi", "uniswap", "v2", "swap", "amm"]

export const codes = [
  {
    fileName: "UniswapV2SwapExamples.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IFVuaXN3YXBWMlN3YXBFeGFtcGxlcyB7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgVU5JU1dBUF9WMl9ST1VURVIgPQogICAgICAgIDB4N2EyNTBkNTYzMEI0Y0Y1Mzk3MzlkRjJDNWRBY2I0YzY1OUYyNDg4RDsKCiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgV0VUSCA9IDB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMjsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBEQUkgPSAweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEY7CiAgICBhZGRyZXNzIGNvbnN0YW50IFVTREMgPSAweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg7CgogICAgSVVuaXN3YXBWMlJvdXRlciBwcml2YXRlIHJvdXRlciA9IElVbmlzd2FwVjJSb3V0ZXIoVU5JU1dBUF9WMl9ST1VURVIpOwogICAgSUVSQzIwIHByaXZhdGUgd2V0aCA9IElFUkMyMChXRVRIKTsKICAgIElFUkMyMCBwcml2YXRlIGRhaSA9IElFUkMyMChEQUkpOwoKICAgIC8vIFN3YXAgV0VUSCB0byBEQUkKICAgIGZ1bmN0aW9uIHN3YXBTaW5nbGVIb3BFeGFjdEFtb3VudEluKHVpbnQyNTYgYW1vdW50SW4sIHVpbnQyNTYgYW1vdW50T3V0TWluKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAodWludDI1NiBhbW91bnRPdXQpCiAgICB7CiAgICAgICAgd2V0aC50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50SW4pOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluKTsKCiAgICAgICAgYWRkcmVzc1tdIG1lbW9yeSBwYXRoOwogICAgICAgIHBhdGggPSBuZXcgYWRkcmVzc1tdKDIpOwogICAgICAgIHBhdGhbMF0gPSBXRVRIOwogICAgICAgIHBhdGhbMV0gPSBEQUk7CgogICAgICAgIHVpbnQyNTZbXSBtZW1vcnkgYW1vdW50cyA9IHJvdXRlci5zd2FwRXhhY3RUb2tlbnNGb3JUb2tlbnMoCiAgICAgICAgICAgIGFtb3VudEluLCBhbW91bnRPdXRNaW4sIHBhdGgsIG1zZy5zZW5kZXIsIGJsb2NrLnRpbWVzdGFtcAogICAgICAgICk7CgogICAgICAgIC8vIGFtb3VudHNbMF0gPSBXRVRIIGFtb3VudCwgYW1vdW50c1sxXSA9IERBSSBhbW91bnQKICAgICAgICByZXR1cm4gYW1vdW50c1sxXTsKICAgIH0KCiAgICAvLyBTd2FwIERBSSAtPiBXRVRIIC0+IFVTREMKICAgIGZ1bmN0aW9uIHN3YXBNdWx0aUhvcEV4YWN0QW1vdW50SW4odWludDI1NiBhbW91bnRJbiwgdWludDI1NiBhbW91bnRPdXRNaW4pCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zICh1aW50MjU2IGFtb3VudE91dCkKICAgIHsKICAgICAgICBkYWkudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudEluKTsKICAgICAgICBkYWkuYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluKTsKCiAgICAgICAgYWRkcmVzc1tdIG1lbW9yeSBwYXRoOwogICAgICAgIHBhdGggPSBuZXcgYWRkcmVzc1tdKDMpOwogICAgICAgIHBhdGhbMF0gPSBEQUk7CiAgICAgICAgcGF0aFsxXSA9IFdFVEg7CiAgICAgICAgcGF0aFsyXSA9IFVTREM7CgogICAgICAgIHVpbnQyNTZbXSBtZW1vcnkgYW1vdW50cyA9IHJvdXRlci5zd2FwRXhhY3RUb2tlbnNGb3JUb2tlbnMoCiAgICAgICAgICAgIGFtb3VudEluLCBhbW91bnRPdXRNaW4sIHBhdGgsIG1zZy5zZW5kZXIsIGJsb2NrLnRpbWVzdGFtcAogICAgICAgICk7CgogICAgICAgIC8vIGFtb3VudHNbMF0gPSBEQUkgYW1vdW50CiAgICAgICAgLy8gYW1vdW50c1sxXSA9IFdFVEggYW1vdW50CiAgICAgICAgLy8gYW1vdW50c1syXSA9IFVTREMgYW1vdW50CiAgICAgICAgcmV0dXJuIGFtb3VudHNbMl07CiAgICB9CgogICAgLy8gU3dhcCBXRVRIIHRvIERBSQogICAgZnVuY3Rpb24gc3dhcFNpbmdsZUhvcEV4YWN0QW1vdW50T3V0KAogICAgICAgIHVpbnQyNTYgYW1vdW50T3V0RGVzaXJlZCwKICAgICAgICB1aW50MjU2IGFtb3VudEluTWF4CiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KSB7CiAgICAgICAgd2V0aC50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50SW5NYXgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluTWF4KTsKCiAgICAgICAgYWRkcmVzc1tdIG1lbW9yeSBwYXRoOwogICAgICAgIHBhdGggPSBuZXcgYWRkcmVzc1tdKDIpOwogICAgICAgIHBhdGhbMF0gPSBXRVRIOwogICAgICAgIHBhdGhbMV0gPSBEQUk7CgogICAgICAgIHVpbnQyNTZbXSBtZW1vcnkgYW1vdW50cyA9IHJvdXRlci5zd2FwVG9rZW5zRm9yRXhhY3RUb2tlbnMoCiAgICAgICAgICAgIGFtb3VudE91dERlc2lyZWQsIGFtb3VudEluTWF4LCBwYXRoLCBtc2cuc2VuZGVyLCBibG9jay50aW1lc3RhbXAKICAgICAgICApOwoKICAgICAgICAvLyBSZWZ1bmQgV0VUSCB0byBtc2cuc2VuZGVyCiAgICAgICAgaWYgKGFtb3VudHNbMF0gPCBhbW91bnRJbk1heCkgewogICAgICAgICAgICB3ZXRoLnRyYW5zZmVyKG1zZy5zZW5kZXIsIGFtb3VudEluTWF4IC0gYW1vdW50c1swXSk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gYW1vdW50c1sxXTsKICAgIH0KCiAgICAvLyBTd2FwIERBSSAtPiBXRVRIIC0+IFVTREMKICAgIGZ1bmN0aW9uIHN3YXBNdWx0aUhvcEV4YWN0QW1vdW50T3V0KAogICAgICAgIHVpbnQyNTYgYW1vdW50T3V0RGVzaXJlZCwKICAgICAgICB1aW50MjU2IGFtb3VudEluTWF4CiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KSB7CiAgICAgICAgZGFpLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBhbW91bnRJbk1heCk7CiAgICAgICAgZGFpLmFwcHJvdmUoYWRkcmVzcyhyb3V0ZXIpLCBhbW91bnRJbk1heCk7CgogICAgICAgIGFkZHJlc3NbXSBtZW1vcnkgcGF0aDsKICAgICAgICBwYXRoID0gbmV3IGFkZHJlc3NbXSgzKTsKICAgICAgICBwYXRoWzBdID0gREFJOwogICAgICAgIHBhdGhbMV0gPSBXRVRIOwogICAgICAgIHBhdGhbMl0gPSBVU0RDOwoKICAgICAgICB1aW50MjU2W10gbWVtb3J5IGFtb3VudHMgPSByb3V0ZXIuc3dhcFRva2Vuc0ZvckV4YWN0VG9rZW5zKAogICAgICAgICAgICBhbW91bnRPdXREZXNpcmVkLCBhbW91bnRJbk1heCwgcGF0aCwgbXNnLnNlbmRlciwgYmxvY2sudGltZXN0YW1wCiAgICAgICAgKTsKCiAgICAgICAgLy8gUmVmdW5kIERBSSB0byBtc2cuc2VuZGVyCiAgICAgICAgaWYgKGFtb3VudHNbMF0gPCBhbW91bnRJbk1heCkgewogICAgICAgICAgICBkYWkudHJhbnNmZXIobXNnLnNlbmRlciwgYW1vdW50SW5NYXggLSBhbW91bnRzWzBdKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBhbW91bnRzWzJdOwogICAgfQp9CgppbnRlcmZhY2UgSVVuaXN3YXBWMlJvdXRlciB7CiAgICBmdW5jdGlvbiBzd2FwRXhhY3RUb2tlbnNGb3JUb2tlbnMoCiAgICAgICAgdWludDI1NiBhbW91bnRJbiwKICAgICAgICB1aW50MjU2IGFtb3VudE91dE1pbiwKICAgICAgICBhZGRyZXNzW10gY2FsbGRhdGEgcGF0aCwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQyNTYgZGVhZGxpbmUKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludDI1NltdIG1lbW9yeSBhbW91bnRzKTsKCiAgICBmdW5jdGlvbiBzd2FwVG9rZW5zRm9yRXhhY3RUb2tlbnMoCiAgICAgICAgdWludDI1NiBhbW91bnRPdXQsCiAgICAgICAgdWludDI1NiBhbW91bnRJbk1heCwKICAgICAgICBhZGRyZXNzW10gY2FsbGRhdGEgcGF0aCwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQyNTYgZGVhZGxpbmUKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludDI1NltdIG1lbW9yeSBhbW91bnRzKTsKfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiBhbGxvd2FuY2UoYWRkcmVzcyBvd25lciwgYWRkcmVzcyBzcGVuZGVyKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIHNlbmRlciwgYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7Cn0KCmludGVyZmFjZSBJV0VUSCBpcyBJRVJDMjAgewogICAgZnVuY3Rpb24gZGVwb3NpdCgpIGV4dGVybmFsIHBheWFibGU7CiAgICBmdW5jdGlvbiB3aXRoZHJhdyh1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWw7Cn0K",
  },
  {
    fileName: "UniswapV2SwapExamplesTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7VGVzdCwgY29uc29sZTJ9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7CmltcG9ydCB7VW5pc3dhcFYyU3dhcEV4YW1wbGVzfSBmcm9tICIuLi8uLi8uLi9zcmMvZGVmaS91bmlzd2FwLXYyL1VuaXN3YXBWMlN3YXBFeGFtcGxlcy5zb2wiOwoKYWRkcmVzcyBjb25zdGFudCBXRVRIID0gMHhDMDJhYUEzOWIyMjNGRThEMEEwZTVDNEYyN2VBRDkwODNDNzU2Q2MyOwphZGRyZXNzIGNvbnN0YW50IERBSSA9IDB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRjsKYWRkcmVzcyBjb25zdGFudCBVU0RDID0gMHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4OwoKY29udHJhY3QgVW5pc3dhcFYyU3dhcEV4YW1wbGVzVGVzdCBpcyBUZXN0IHsKICAgIElXRVRIIHByaXZhdGUgd2V0aCA9IElXRVRIKFdFVEgpOwogICAgSUVSQzIwIHByaXZhdGUgZGFpID0gSUVSQzIwKERBSSk7CiAgICBJRVJDMjAgcHJpdmF0ZSB1c2RjID0gSUVSQzIwKFVTREMpOwoKICAgIFVuaXN3YXBWMlN3YXBFeGFtcGxlcyBwcml2YXRlIHVuaSA9IG5ldyBVbmlzd2FwVjJTd2FwRXhhbXBsZXMoKTsKCiAgICBmdW5jdGlvbiBzZXRVcCgpIHB1YmxpYyB7fQoKICAgIC8vIFN3YXAgV0VUSCAtPiBEQUkKICAgIGZ1bmN0aW9uIHRlc3RTd2FwU2luZ2xlSG9wRXhhY3RBbW91bnRJbigpIHB1YmxpYyB7CiAgICAgICAgdWludDI1NiB3ZXRoQW1vdW50ID0gMWUxODsKICAgICAgICB3ZXRoLmRlcG9zaXR7dmFsdWU6IHdldGhBbW91bnR9KCk7CiAgICAgICAgd2V0aC5hcHByb3ZlKGFkZHJlc3ModW5pKSwgd2V0aEFtb3VudCk7CgogICAgICAgIHVpbnQyNTYgZGFpQW1vdW50TWluID0gMTsKICAgICAgICB1aW50MjU2IGRhaUFtb3VudE91dCA9CiAgICAgICAgICAgIHVuaS5zd2FwU2luZ2xlSG9wRXhhY3RBbW91bnRJbih3ZXRoQW1vdW50LCBkYWlBbW91bnRNaW4pOwoKICAgICAgICBjb25zb2xlMi5sb2coIkRBSSIsIGRhaUFtb3VudE91dCk7CiAgICAgICAgYXNzZXJ0R2UoZGFpQW1vdW50T3V0LCBkYWlBbW91bnRNaW4sICJhbW91bnQgb3V0IDwgbWluIik7CiAgICB9CgogICAgLy8gU3dhcCBEQUkgLT4gV0VUSCAtPiBVU0RDCiAgICBmdW5jdGlvbiB0ZXN0U3dhcE11bHRpSG9wRXhhY3RBbW91bnRJbigpIHB1YmxpYyB7CiAgICAgICAgLy8gU3dhcCBXRVRIIC0+IERBSQogICAgICAgIHVpbnQyNTYgd2V0aEFtb3VudCA9IDFlMTg7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiB3ZXRoQW1vdW50fSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHVuaSksIHdldGhBbW91bnQpOwoKICAgICAgICB1aW50MjU2IGRhaUFtb3VudE1pbiA9IDE7CiAgICAgICAgdW5pLnN3YXBTaW5nbGVIb3BFeGFjdEFtb3VudEluKHdldGhBbW91bnQsIGRhaUFtb3VudE1pbik7CgogICAgICAgIC8vIFN3YXAgREFJIC0+IFdFVEggLT4gVVNEQwogICAgICAgIHVpbnQyNTYgZGFpQW1vdW50SW4gPSAxZTE4OwogICAgICAgIGRhaS5hcHByb3ZlKGFkZHJlc3ModW5pKSwgZGFpQW1vdW50SW4pOwoKICAgICAgICB1aW50MjU2IHVzZGNBbW91bnRPdXRNaW4gPSAxOwogICAgICAgIHVpbnQyNTYgdXNkY0Ftb3VudE91dCA9CiAgICAgICAgICAgIHVuaS5zd2FwTXVsdGlIb3BFeGFjdEFtb3VudEluKGRhaUFtb3VudEluLCB1c2RjQW1vdW50T3V0TWluKTsKCiAgICAgICAgY29uc29sZTIubG9nKCJVU0RDIiwgdXNkY0Ftb3VudE91dCk7CiAgICAgICAgYXNzZXJ0R2UodXNkY0Ftb3VudE91dCwgdXNkY0Ftb3VudE91dE1pbiwgImFtb3VudCBvdXQgPCBtaW4iKTsKICAgIH0KCiAgICAvLyBTd2FwIFdFVEggLT4gREFJCiAgICBmdW5jdGlvbiB0ZXN0U3dhcFNpbmdsZUhvcEV4YWN0QW1vdW50T3V0KCkgcHVibGljIHsKICAgICAgICB1aW50MjU2IHdldGhBbW91bnQgPSAxZTE4OwogICAgICAgIHdldGguZGVwb3NpdHt2YWx1ZTogd2V0aEFtb3VudH0oKTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyh1bmkpLCB3ZXRoQW1vdW50KTsKCiAgICAgICAgdWludDI1NiBkYWlBbW91bnREZXNpcmVkID0gMWUxODsKICAgICAgICB1aW50MjU2IGRhaUFtb3VudE91dCA9CiAgICAgICAgICAgIHVuaS5zd2FwU2luZ2xlSG9wRXhhY3RBbW91bnRPdXQoZGFpQW1vdW50RGVzaXJlZCwgd2V0aEFtb3VudCk7CgogICAgICAgIGNvbnNvbGUyLmxvZygiREFJIiwgZGFpQW1vdW50T3V0KTsKICAgICAgICBhc3NlcnRFcSgKICAgICAgICAgICAgZGFpQW1vdW50T3V0LCBkYWlBbW91bnREZXNpcmVkLCAiYW1vdW50IG91dCAhPSBhbW91bnQgb3V0IGRlc2lyZWQiCiAgICAgICAgKTsKICAgIH0KCiAgICAvLyBTd2FwIERBSSAtPiBXRVRIIC0+IFVTREMKICAgIGZ1bmN0aW9uIHRlc3RTd2FwTXVsdGlIb3BFeGFjdEFtb3VudE91dCgpIHB1YmxpYyB7CiAgICAgICAgLy8gU3dhcCBXRVRIIC0+IERBSQogICAgICAgIHVpbnQyNTYgd2V0aEFtb3VudCA9IDFlMTg7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiB3ZXRoQW1vdW50fSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHVuaSksIHdldGhBbW91bnQpOwoKICAgICAgICAvLyBCdXkgMTAwIERBSQogICAgICAgIHVpbnQyNTYgZGFpQW1vdW50T3V0ID0gMTAwICogMWUxODsKICAgICAgICB1bmkuc3dhcFNpbmdsZUhvcEV4YWN0QW1vdW50T3V0KGRhaUFtb3VudE91dCwgd2V0aEFtb3VudCk7CgogICAgICAgIC8vIFN3YXAgREFJIC0+IFdFVEggLT4gVVNEQwogICAgICAgIGRhaS5hcHByb3ZlKGFkZHJlc3ModW5pKSwgZGFpQW1vdW50T3V0KTsKCiAgICAgICAgdWludDI1NiBhbW91bnRPdXREZXNpcmVkID0gMWU2OwogICAgICAgIHVpbnQyNTYgYW1vdW50T3V0ID0KICAgICAgICAgICAgdW5pLnN3YXBNdWx0aUhvcEV4YWN0QW1vdW50T3V0KGFtb3VudE91dERlc2lyZWQsIGRhaUFtb3VudE91dCk7CgogICAgICAgIGNvbnNvbGUyLmxvZygiVVNEQyIsIGFtb3VudE91dCk7CiAgICAgICAgYXNzZXJ0RXEoCiAgICAgICAgICAgIGFtb3VudE91dCwgYW1vdW50T3V0RGVzaXJlZCwgImFtb3VudCBvdXQgIT0gYW1vdW50IG91dCBkZXNpcmVkIgogICAgICAgICk7CiAgICB9Cn0K",
  },
]

const html = `<p><code>swapExactTokensForTokens</code> sells all tokens for another.</p>
<p><code>swapTokensForExactTokens</code> buys specific amount of tokens set by the caller.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2SwapExamples</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> UNISWAP_V2_ROUTER <span class="hljs-operator">=</span>
        <span class="hljs-number">0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

    IUniswapV2Router <span class="hljs-keyword">private</span> router <span class="hljs-operator">=</span> IUniswapV2Router(UNISWAP_V2_ROUTER);
    IERC20 <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> IERC20(WETH);
    IERC20 <span class="hljs-keyword">private</span> dai <span class="hljs-operator">=</span> IERC20(DAI);

    <span class="hljs-comment">// Swap WETH to DAI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapSingleHopExactAmountIn</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountIn, <span class="hljs-keyword">uint256</span> amountOutMin</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)
    </span>{
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        weth.approve(<span class="hljs-keyword">address</span>(router), amountIn);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">2</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> DAI;

        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapExactTokensForTokens(
            amountIn, amountOutMin, path, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// amounts[0] = WETH amount, amounts[1] = DAI amount</span>
        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">1</span>];
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapMultiHopExactAmountIn</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountIn, <span class="hljs-keyword">uint256</span> amountOutMin</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)
    </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        dai.approve(<span class="hljs-keyword">address</span>(router), amountIn);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">3</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> DAI;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> USDC;

        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapExactTokensForTokens(
            amountIn, amountOutMin, path, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// amounts[0] = DAI amount</span>
        <span class="hljs-comment">// amounts[1] = WETH amount</span>
        <span class="hljs-comment">// amounts[2] = USDC amount</span>
        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">2</span>];
    }

    <span class="hljs-comment">// Swap WETH to DAI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapSingleHopExactAmountOut</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> amountOutDesired,
        <span class="hljs-keyword">uint256</span> amountInMax
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>) </span>{
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountInMax);
        weth.approve(<span class="hljs-keyword">address</span>(router), amountInMax);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">2</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> DAI;

        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapTokensForExactTokens(
            amountOutDesired, amountInMax, path, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// Refund WETH to msg.sender</span>
        <span class="hljs-keyword">if</span> (amounts[<span class="hljs-number">0</span>] <span class="hljs-operator">&lt;</span> amountInMax) {
            weth.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountInMax <span class="hljs-operator">-</span> amounts[<span class="hljs-number">0</span>]);
        }

        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">1</span>];
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapMultiHopExactAmountOut</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> amountOutDesired,
        <span class="hljs-keyword">uint256</span> amountInMax
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>) </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountInMax);
        dai.approve(<span class="hljs-keyword">address</span>(router), amountInMax);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">3</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> DAI;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> USDC;

        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapTokensForExactTokens(
            amountOutDesired, amountInMax, path, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// Refund DAI to msg.sender</span>
        <span class="hljs-keyword">if</span> (amounts[<span class="hljs-number">0</span>] <span class="hljs-operator">&lt;</span> amountInMax) {
            dai.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountInMax <span class="hljs-operator">-</span> amounts[<span class="hljs-number">0</span>]);
        }

        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">2</span>];
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IUniswapV2Router</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapExactTokensForTokens</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> amountIn,
        <span class="hljs-keyword">uint256</span> amountOutMin,
        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> path,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> amounts</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapTokensForExactTokens</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> amountOut,
        <span class="hljs-keyword">uint256</span> amountInMax,
        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> path,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> amounts</span>)</span>;
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
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">UniswapV2SwapExamples</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"../../../src/defi/uniswap-v2/UniswapV2SwapExamples.sol"</span>;

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> USDC <span class="hljs-operator">=</span> <span class="hljs-number">0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV2SwapExamplesTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IWETH <span class="hljs-keyword">private</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    IERC20 <span class="hljs-keyword">private</span> usdc <span class="hljs-operator">=</span> IERC20(USDC);

    UniswapV2SwapExamples <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV2SwapExamples();

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{}

    <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapSingleHopExactAmountIn</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-keyword">uint256</span> daiAmountMin <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">uint256</span> daiAmountOut <span class="hljs-operator">=</span>
            uni.swapSingleHopExactAmountIn(wethAmount, daiAmountMin);

        console2.log(<span class="hljs-string">"DAI"</span>, daiAmountOut);
        assertGe(daiAmountOut, daiAmountMin, <span class="hljs-string">"amount out &lt; min"</span>);
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapMultiHopExactAmountIn</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
        <span class="hljs-keyword">uint256</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-keyword">uint256</span> daiAmountMin <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        uni.swapSingleHopExactAmountIn(wethAmount, daiAmountMin);

        <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
        <span class="hljs-keyword">uint256</span> daiAmountIn <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        dai.approve(<span class="hljs-keyword">address</span>(uni), daiAmountIn);

        <span class="hljs-keyword">uint256</span> usdcAmountOutMin <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">uint256</span> usdcAmountOut <span class="hljs-operator">=</span>
            uni.swapMultiHopExactAmountIn(daiAmountIn, usdcAmountOutMin);

        console2.log(<span class="hljs-string">"USDC"</span>, usdcAmountOut);
        assertGe(usdcAmountOut, usdcAmountOutMin, <span class="hljs-string">"amount out &lt; min"</span>);
    }

    <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapSingleHopExactAmountOut</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-keyword">uint256</span> daiAmountDesired <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">uint256</span> daiAmountOut <span class="hljs-operator">=</span>
            uni.swapSingleHopExactAmountOut(daiAmountDesired, wethAmount);

        console2.log(<span class="hljs-string">"DAI"</span>, daiAmountOut);
        assertEq(
            daiAmountOut, daiAmountDesired, <span class="hljs-string">"amount out != amount out desired"</span>
        );
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapMultiHopExactAmountOut</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
        <span class="hljs-keyword">uint256</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-comment">// Buy 100 DAI</span>
        <span class="hljs-keyword">uint256</span> daiAmountOut <span class="hljs-operator">=</span> <span class="hljs-number">100</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        uni.swapSingleHopExactAmountOut(daiAmountOut, wethAmount);

        <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
        dai.approve(<span class="hljs-keyword">address</span>(uni), daiAmountOut);

        <span class="hljs-keyword">uint256</span> amountOutDesired <span class="hljs-operator">=</span> <span class="hljs-number">1e6</span>;
        <span class="hljs-keyword">uint256</span> amountOut <span class="hljs-operator">=</span>
            uni.swapMultiHopExactAmountOut(amountOutDesired, daiAmountOut);

        console2.log(<span class="hljs-string">"USDC"</span>, amountOut);
        assertEq(
            amountOut, amountOutDesired, <span class="hljs-string">"amount out != amount out desired"</span>
        );
    }
}
</code></pre>`

export default html
