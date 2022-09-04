// metadata
export const version = "0.8.13"
export const title = "Uniswap V2 Swap"
export const description = "Uniswap V2 swap"
export const codes = [
  {
    fileName: "UniswapV2SwapExamples.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IFVuaXN3YXBWMlN3YXBFeGFtcGxlcyB7CiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgVU5JU1dBUF9WMl9ST1VURVIgPQogICAgICAgIDB4N2EyNTBkNTYzMEI0Y0Y1Mzk3MzlkRjJDNWRBY2I0YzY1OUYyNDg4RDsKCiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgV0VUSCA9IDB4QzAyYWFBMzliMjIzRkU4RDBBMGU1QzRGMjdlQUQ5MDgzQzc1NkNjMjsKICAgIGFkZHJlc3MgcHJpdmF0ZSBjb25zdGFudCBEQUkgPSAweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEY7CiAgICBhZGRyZXNzIGNvbnN0YW50IFVTREMgPSAweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg7CgogICAgSVVuaXN3YXBWMlJvdXRlciBwcml2YXRlIHJvdXRlciA9IElVbmlzd2FwVjJSb3V0ZXIoVU5JU1dBUF9WMl9ST1VURVIpOwogICAgSUVSQzIwIHByaXZhdGUgd2V0aCA9IElFUkMyMChXRVRIKTsKICAgIElFUkMyMCBwcml2YXRlIGRhaSA9IElFUkMyMChEQUkpOwoKICAgIC8vIFN3YXAgV0VUSCB0byBEQUkKICAgIGZ1bmN0aW9uIHN3YXBTaW5nbGVIb3BFeGFjdEFtb3VudEluKHVpbnQgYW1vdW50SW4sIHVpbnQgYW1vdW50T3V0TWluKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAodWludCBhbW91dG5PdXQpCiAgICB7CiAgICAgICAgd2V0aC50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50SW4pOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluKTsKCiAgICAgICAgYWRkcmVzc1tdIG1lbW9yeSBwYXRoOwogICAgICAgIHBhdGggPSBuZXcgYWRkcmVzc1tdKDIpOwogICAgICAgIHBhdGhbMF0gPSBXRVRIOwogICAgICAgIHBhdGhbMV0gPSBEQUk7CgogICAgICAgIHVpbnRbXSBtZW1vcnkgYW1vdW50cyA9IHJvdXRlci5zd2FwRXhhY3RUb2tlbnNGb3JUb2tlbnMoCiAgICAgICAgICAgIGFtb3VudEluLAogICAgICAgICAgICBhbW91bnRPdXRNaW4sCiAgICAgICAgICAgIHBhdGgsCiAgICAgICAgICAgIG1zZy5zZW5kZXIsCiAgICAgICAgICAgIGJsb2NrLnRpbWVzdGFtcAogICAgICAgICk7CgogICAgICAgIC8vIGFtb3VudHNbMF0gPSBXRVRIIGFtb3VudCwgYW1vdW50c1sxXSA9IERBSSBhbW91bnQKICAgICAgICByZXR1cm4gYW1vdW50c1sxXTsKICAgIH0KCiAgICAvLyBTd2FwIERBSSAtPiBXRVRIIC0+IFVTREMKICAgIGZ1bmN0aW9uIHN3YXBNdWx0aUhvcEV4YWN0QW1vdW50SW4odWludCBhbW91bnRJbiwgdWludCBhbW91bnRPdXRNaW4pCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zICh1aW50IGFtb3V0bk91dCkKICAgIHsKICAgICAgICBkYWkudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudEluKTsKICAgICAgICBkYWkuYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluKTsKCiAgICAgICAgYWRkcmVzc1tdIG1lbW9yeSBwYXRoOwogICAgICAgIHBhdGggPSBuZXcgYWRkcmVzc1tdKDMpOwogICAgICAgIHBhdGhbMF0gPSBEQUk7CiAgICAgICAgcGF0aFsxXSA9IFdFVEg7CiAgICAgICAgcGF0aFsyXSA9IFVTREM7CgogICAgICAgIHVpbnRbXSBtZW1vcnkgYW1vdW50cyA9IHJvdXRlci5zd2FwRXhhY3RUb2tlbnNGb3JUb2tlbnMoCiAgICAgICAgICAgIGFtb3VudEluLAogICAgICAgICAgICBhbW91bnRPdXRNaW4sCiAgICAgICAgICAgIHBhdGgsCiAgICAgICAgICAgIG1zZy5zZW5kZXIsCiAgICAgICAgICAgIGJsb2NrLnRpbWVzdGFtcAogICAgICAgICk7CgogICAgICAgIC8vIGFtb3VudHNbMF0gPSBEQUkgYW1vdW50CiAgICAgICAgLy8gYW1vdW50c1sxXSA9IFdFVEggYW1vdW50CiAgICAgICAgLy8gYW1vdW50c1syXSA9IFVTREMgYW1vdW50CiAgICAgICAgcmV0dXJuIGFtb3VudHNbMl07CiAgICB9CgogICAgLy8gU3dhcCBXRVRIIHRvIERBSQogICAgZnVuY3Rpb24gc3dhcFNpbmdsZUhvcEV4YWN0QW1vdW50T3V0KHVpbnQgYW1vdW50T3V0RGVzaXJlZCwgdWludCBhbW91bnRJbk1heCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKHVpbnQgYW1vdW50T3V0KQogICAgewogICAgICAgIHdldGgudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudEluTWF4KTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyhyb3V0ZXIpLCBhbW91bnRJbk1heCk7CgogICAgICAgIGFkZHJlc3NbXSBtZW1vcnkgcGF0aDsKICAgICAgICBwYXRoID0gbmV3IGFkZHJlc3NbXSgyKTsKICAgICAgICBwYXRoWzBdID0gV0VUSDsKICAgICAgICBwYXRoWzFdID0gREFJOwoKICAgICAgICB1aW50W10gbWVtb3J5IGFtb3VudHMgPSByb3V0ZXIuc3dhcFRva2Vuc0ZvckV4YWN0VG9rZW5zKAogICAgICAgICAgICBhbW91bnRPdXREZXNpcmVkLAogICAgICAgICAgICBhbW91bnRJbk1heCwKICAgICAgICAgICAgcGF0aCwKICAgICAgICAgICAgbXNnLnNlbmRlciwKICAgICAgICAgICAgYmxvY2sudGltZXN0YW1wCiAgICAgICAgKTsKCiAgICAgICAgLy8gUmVmdW5kIFdFVEggdG8gbXNnLnNlbmRlcgogICAgICAgIGlmIChhbW91bnRzWzBdIDwgYW1vdW50SW5NYXgpIHsKICAgICAgICAgICAgd2V0aC50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnRJbk1heCAtIGFtb3VudHNbMF0pOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIGFtb3VudHNbMV07CiAgICB9CgogICAgLy8gU3dhcCBEQUkgLT4gV0VUSCAtPiBVU0RDCiAgICBmdW5jdGlvbiBzd2FwTXVsdGlIb3BFeGFjdEFtb3VudE91dCh1aW50IGFtb3VudE91dERlc2lyZWQsIHVpbnQgYW1vdW50SW5NYXgpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zICh1aW50IGFtb3VudE91dCkKICAgIHsKICAgICAgICBkYWkudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudEluTWF4KTsKICAgICAgICBkYWkuYXBwcm92ZShhZGRyZXNzKHJvdXRlciksIGFtb3VudEluTWF4KTsKCiAgICAgICAgYWRkcmVzc1tdIG1lbW9yeSBwYXRoOwogICAgICAgIHBhdGggPSBuZXcgYWRkcmVzc1tdKDMpOwogICAgICAgIHBhdGhbMF0gPSBEQUk7CiAgICAgICAgcGF0aFsxXSA9IFdFVEg7CiAgICAgICAgcGF0aFsyXSA9IFVTREM7CgogICAgICAgIHVpbnRbXSBtZW1vcnkgYW1vdW50cyA9IHJvdXRlci5zd2FwVG9rZW5zRm9yRXhhY3RUb2tlbnMoCiAgICAgICAgICAgIGFtb3VudE91dERlc2lyZWQsCiAgICAgICAgICAgIGFtb3VudEluTWF4LAogICAgICAgICAgICBwYXRoLAogICAgICAgICAgICBtc2cuc2VuZGVyLAogICAgICAgICAgICBibG9jay50aW1lc3RhbXAKICAgICAgICApOwoKICAgICAgICAvLyBSZWZ1bmQgREFJIHRvIG1zZy5zZW5kZXIKICAgICAgICBpZiAoYW1vdW50c1swXSA8IGFtb3VudEluTWF4KSB7CiAgICAgICAgICAgIGRhaS50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnRJbk1heCAtIGFtb3VudHNbMF0pOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIGFtb3VudHNbMl07CiAgICB9Cn0KCmludGVyZmFjZSBJVW5pc3dhcFYyUm91dGVyIHsKICAgIGZ1bmN0aW9uIHN3YXBFeGFjdFRva2Vuc0ZvclRva2VucygKICAgICAgICB1aW50IGFtb3VudEluLAogICAgICAgIHVpbnQgYW1vdW50T3V0TWluLAogICAgICAgIGFkZHJlc3NbXSBjYWxsZGF0YSBwYXRoLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCBkZWFkbGluZQogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50W10gbWVtb3J5IGFtb3VudHMpOwoKICAgIGZ1bmN0aW9uIHN3YXBUb2tlbnNGb3JFeGFjdFRva2VucygKICAgICAgICB1aW50IGFtb3VudE91dCwKICAgICAgICB1aW50IGFtb3VudEluTWF4LAogICAgICAgIGFkZHJlc3NbXSBjYWxsZGF0YSBwYXRoLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCBkZWFkbGluZQogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50W10gbWVtb3J5IGFtb3VudHMpOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudCwKICAgICAgICB1aW50IGFtb3VudAogICAgKSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBldmVudCBUcmFuc2ZlcihhZGRyZXNzIGluZGV4ZWQgZnJvbSwgYWRkcmVzcyBpbmRleGVkIHRvLCB1aW50IHZhbHVlKTsKICAgIGV2ZW50IEFwcHJvdmFsKGFkZHJlc3MgaW5kZXhlZCBvd25lciwgYWRkcmVzcyBpbmRleGVkIHNwZW5kZXIsIHVpbnQgdmFsdWUpOwp9CgppbnRlcmZhY2UgSVdFVEggaXMgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIGRlcG9zaXQoKSBleHRlcm5hbCBwYXlhYmxlOwoKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQgYW1vdW50KSBleHRlcm5hbDsKfQo=",
  },
  {
    fileName: "UniswapV2SwapExamplesTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICJmb3JnZS1zdGQvY29uc29sZS5zb2wiOwoKaW1wb3J0ICIuLi9zcmMvVW5pc3dhcFYyU3dhcEV4YW1wbGVzLnNvbCI7CgphZGRyZXNzIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CmFkZHJlc3MgY29uc3RhbnQgREFJID0gMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGOwphZGRyZXNzIGNvbnN0YW50IFVTREMgPSAweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDg7Cgpjb250cmFjdCBVbmlzd2FwVjJTd2FwRXhhbXBsZXNUZXN0IGlzIFRlc3QgewogICAgSVdFVEggcHJpdmF0ZSB3ZXRoID0gSVdFVEgoV0VUSCk7CiAgICBJRVJDMjAgcHJpdmF0ZSBkYWkgPSBJRVJDMjAoREFJKTsKICAgIElFUkMyMCBwcml2YXRlIHVzZGMgPSBJRVJDMjAoVVNEQyk7CgogICAgVW5pc3dhcFYyU3dhcEV4YW1wbGVzIHByaXZhdGUgdW5pID0gbmV3IFVuaXN3YXBWMlN3YXBFeGFtcGxlcygpOwoKICAgIGZ1bmN0aW9uIHNldFVwKCkgcHVibGljIHt9CgogICAgLy8gU3dhcCBXRVRIIC0+IERBSQogICAgZnVuY3Rpb24gdGVzdFN3YXBTaW5nbGVIb3BFeGFjdEFtb3VudEluKCkgcHVibGljIHsKICAgICAgICB1aW50IHdldGhBbW91bnQgPSAxZTE4OwogICAgICAgIHdldGguZGVwb3NpdHt2YWx1ZTogd2V0aEFtb3VudH0oKTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyh1bmkpLCB3ZXRoQW1vdW50KTsKCiAgICAgICAgdWludCBkYWlBbW91bnRNaW4gPSAxOwogICAgICAgIHVpbnQgZGFpQW1vdW50T3V0ID0gdW5pLnN3YXBTaW5nbGVIb3BFeGFjdEFtb3VudEluKHdldGhBbW91bnQsIGRhaUFtb3VudE1pbik7CgogICAgICAgIGNvbnNvbGUubG9nKCJEQUkiLCBkYWlBbW91bnRPdXQpOwogICAgICAgIGFzc2VydEdlKGRhaUFtb3VudE91dCwgZGFpQW1vdW50TWluLCAiYW1vdW50IG91dCA8IG1pbiIpOwogICAgfQoKICAgIC8vIFN3YXAgREFJIC0+IFdFVEggLT4gVVNEQwogICAgZnVuY3Rpb24gdGVzdFN3YXBNdWx0aUhvcEV4YWN0QW1vdW50SW4oKSBwdWJsaWMgewogICAgICAgIC8vIFN3YXAgV0VUSCAtPiBEQUkKICAgICAgICB1aW50IHdldGhBbW91bnQgPSAxZTE4OwogICAgICAgIHdldGguZGVwb3NpdHt2YWx1ZTogd2V0aEFtb3VudH0oKTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyh1bmkpLCB3ZXRoQW1vdW50KTsKCiAgICAgICAgdWludCBkYWlBbW91bnRNaW4gPSAxOwogICAgICAgIHVuaS5zd2FwU2luZ2xlSG9wRXhhY3RBbW91bnRJbih3ZXRoQW1vdW50LCBkYWlBbW91bnRNaW4pOwoKICAgICAgICAvLyBTd2FwIERBSSAtPiBXRVRIIC0+IFVTREMKICAgICAgICB1aW50IGRhaUFtb3VudEluID0gMWUxODsKICAgICAgICBkYWkuYXBwcm92ZShhZGRyZXNzKHVuaSksIGRhaUFtb3VudEluKTsKCiAgICAgICAgdWludCB1c2RjQW1vdW50T3V0TWluID0gMTsKICAgICAgICB1aW50IHVzZGNBbW91bnRPdXQgPSB1bmkuc3dhcE11bHRpSG9wRXhhY3RBbW91bnRJbigKICAgICAgICAgICAgZGFpQW1vdW50SW4sCiAgICAgICAgICAgIHVzZGNBbW91bnRPdXRNaW4KICAgICAgICApOwoKICAgICAgICBjb25zb2xlLmxvZygiVVNEQyIsIHVzZGNBbW91bnRPdXQpOwogICAgICAgIGFzc2VydEdlKHVzZGNBbW91bnRPdXQsIHVzZGNBbW91bnRPdXRNaW4sICJhbW91bnQgb3V0IDwgbWluIik7CiAgICB9CgogICAgLy8gU3dhcCBXRVRIIC0+IERBSQogICAgZnVuY3Rpb24gdGVzdFN3YXBTaW5nbGVIb3BFeGFjdEFtb3VudE91dCgpIHB1YmxpYyB7CiAgICAgICAgdWludCB3ZXRoQW1vdW50ID0gMWUxODsKICAgICAgICB3ZXRoLmRlcG9zaXR7dmFsdWU6IHdldGhBbW91bnR9KCk7CiAgICAgICAgd2V0aC5hcHByb3ZlKGFkZHJlc3ModW5pKSwgd2V0aEFtb3VudCk7CgogICAgICAgIHVpbnQgZGFpQW1vdW50RGVzaXJlZCA9IDFlMTg7CiAgICAgICAgdWludCBkYWlBbW91bnRPdXQgPSB1bmkuc3dhcFNpbmdsZUhvcEV4YWN0QW1vdW50T3V0KAogICAgICAgICAgICBkYWlBbW91bnREZXNpcmVkLAogICAgICAgICAgICB3ZXRoQW1vdW50CiAgICAgICAgKTsKCiAgICAgICAgY29uc29sZS5sb2coIkRBSSIsIGRhaUFtb3VudE91dCk7CiAgICAgICAgYXNzZXJ0RXEoZGFpQW1vdW50T3V0LCBkYWlBbW91bnREZXNpcmVkLCAiYW1vdW50IG91dCAhPSBhbW91bnQgb3V0IGRlc2lyZWQiKTsKICAgIH0KCiAgICAvLyBTd2FwIERBSSAtPiBXRVRIIC0+IFVTREMKICAgIGZ1bmN0aW9uIHRlc3RTd2FwTXVsdGlIb3BFeGFjdEFtb3VudE91dCgpIHB1YmxpYyB7CiAgICAgICAgLy8gU3dhcCBXRVRIIC0+IERBSQogICAgICAgIHVpbnQgd2V0aEFtb3VudCA9IDFlMTg7CiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiB3ZXRoQW1vdW50fSgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHVuaSksIHdldGhBbW91bnQpOwoKICAgICAgICAvLyBCdXkgMTAwIERBSQogICAgICAgIHVpbnQgZGFpQW1vdW50T3V0ID0gMTAwICogMWUxODsKICAgICAgICB1bmkuc3dhcFNpbmdsZUhvcEV4YWN0QW1vdW50T3V0KGRhaUFtb3VudE91dCwgd2V0aEFtb3VudCk7CgogICAgICAgIC8vIFN3YXAgREFJIC0+IFdFVEggLT4gVVNEQwogICAgICAgIGRhaS5hcHByb3ZlKGFkZHJlc3ModW5pKSwgZGFpQW1vdW50T3V0KTsKCiAgICAgICAgdWludCBhbW91bnRPdXREZXNpcmVkID0gMWU2OwogICAgICAgIHVpbnQgYW1vdW50T3V0ID0gdW5pLnN3YXBNdWx0aUhvcEV4YWN0QW1vdW50T3V0KGFtb3VudE91dERlc2lyZWQsIGRhaUFtb3VudE91dCk7CgogICAgICAgIGNvbnNvbGUubG9nKCJVU0RDIiwgYW1vdW50T3V0KTsKICAgICAgICBhc3NlcnRFcShhbW91bnRPdXQsIGFtb3VudE91dERlc2lyZWQsICJhbW91bnQgb3V0ICE9IGFtb3VudCBvdXQgZGVzaXJlZCIpOwogICAgfQp9Cg==",
  },
]

const html = `<p><code>swapExactTokensForTokens</code> sells all tokens for another.</p>
<p><code>swapTokensForExactTokens</code> buys specific amount of tokens set by the caller.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapSingleHopExactAmountIn</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amountIn, <span class="hljs-keyword">uint</span> amountOutMin</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amoutnOut</span>)
    </span>{
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        weth.approve(<span class="hljs-keyword">address</span>(router), amountIn);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">2</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> DAI;

        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// amounts[0] = WETH amount, amounts[1] = DAI amount</span>
        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">1</span>];
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapMultiHopExactAmountIn</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amountIn, <span class="hljs-keyword">uint</span> amountOutMin</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amoutnOut</span>)
    </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn);
        dai.approve(<span class="hljs-keyword">address</span>(router), amountIn);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">3</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> DAI;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> USDC;

        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// amounts[0] = DAI amount</span>
        <span class="hljs-comment">// amounts[1] = WETH amount</span>
        <span class="hljs-comment">// amounts[2] = USDC amount</span>
        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">2</span>];
    }

    <span class="hljs-comment">// Swap WETH to DAI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapSingleHopExactAmountOut</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOutDesired, <span class="hljs-keyword">uint</span> amountInMax</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>)
    </span>{
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountInMax);
        weth.approve(<span class="hljs-keyword">address</span>(router), amountInMax);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">2</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> DAI;

        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapTokensForExactTokens(
            amountOutDesired,
            amountInMax,
            path,
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        );

        <span class="hljs-comment">// Refund WETH to msg.sender</span>
        <span class="hljs-keyword">if</span> (amounts[<span class="hljs-number">0</span>] <span class="hljs-operator">&lt;</span> amountInMax) {
            weth.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountInMax <span class="hljs-operator">-</span> amounts[<span class="hljs-number">0</span>]);
        }

        <span class="hljs-keyword">return</span> amounts[<span class="hljs-number">1</span>];
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapMultiHopExactAmountOut</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOutDesired, <span class="hljs-keyword">uint</span> amountInMax</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>)
    </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountInMax);
        dai.approve(<span class="hljs-keyword">address</span>(router), amountInMax);

        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">memory</span> path;
        path <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">address</span>[](<span class="hljs-number">3</span>);
        path[<span class="hljs-number">0</span>] <span class="hljs-operator">=</span> DAI;
        path[<span class="hljs-number">1</span>] <span class="hljs-operator">=</span> WETH;
        path[<span class="hljs-number">2</span>] <span class="hljs-operator">=</span> USDC;

        <span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts <span class="hljs-operator">=</span> router.swapTokensForExactTokens(
            amountOutDesired,
            amountInMax,
            path,
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
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
        <span class="hljs-keyword">uint</span> amountIn,
        <span class="hljs-keyword">uint</span> amountOutMin,
        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> path,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swapTokensForExactTokens</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> amountOut,
        <span class="hljs-keyword">uint</span> amountInMax,
        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> path,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> deadline
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[] <span class="hljs-keyword">memory</span> amounts</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> value</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint</span> value</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IWETH</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deposit</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">withdraw</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}
</code></pre>
<h3 id="test-with-foundry">Test with Foundry</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/console.sol"</span>;

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV2SwapExamples.sol"</span>;

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
        <span class="hljs-keyword">uint</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-keyword">uint</span> daiAmountMin <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">uint</span> daiAmountOut <span class="hljs-operator">=</span> uni.swapSingleHopExactAmountIn(wethAmount, daiAmountMin);

        console.log(<span class="hljs-string">"DAI"</span>, daiAmountOut);
        assertGe(daiAmountOut, daiAmountMin, <span class="hljs-string">"amount out &lt; min"</span>);
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapMultiHopExactAmountIn</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
        <span class="hljs-keyword">uint</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-keyword">uint</span> daiAmountMin <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        uni.swapSingleHopExactAmountIn(wethAmount, daiAmountMin);

        <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
        <span class="hljs-keyword">uint</span> daiAmountIn <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        dai.approve(<span class="hljs-keyword">address</span>(uni), daiAmountIn);

        <span class="hljs-keyword">uint</span> usdcAmountOutMin <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">uint</span> usdcAmountOut <span class="hljs-operator">=</span> uni.swapMultiHopExactAmountIn(
            daiAmountIn,
            usdcAmountOutMin
        );

        console.log(<span class="hljs-string">"USDC"</span>, usdcAmountOut);
        assertGe(usdcAmountOut, usdcAmountOutMin, <span class="hljs-string">"amount out &lt; min"</span>);
    }

    <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapSingleHopExactAmountOut</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-keyword">uint</span> daiAmountDesired <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">uint</span> daiAmountOut <span class="hljs-operator">=</span> uni.swapSingleHopExactAmountOut(
            daiAmountDesired,
            wethAmount
        );

        console.log(<span class="hljs-string">"DAI"</span>, daiAmountOut);
        assertEq(daiAmountOut, daiAmountDesired, <span class="hljs-string">"amount out != amount out desired"</span>);
    }

    <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testSwapMultiHopExactAmountOut</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Swap WETH -&gt; DAI</span>
        <span class="hljs-keyword">uint</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        weth.deposit{<span class="hljs-built_in">value</span>: wethAmount}();
        weth.approve(<span class="hljs-keyword">address</span>(uni), wethAmount);

        <span class="hljs-comment">// Buy 100 DAI</span>
        <span class="hljs-keyword">uint</span> daiAmountOut <span class="hljs-operator">=</span> <span class="hljs-number">100</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        uni.swapSingleHopExactAmountOut(daiAmountOut, wethAmount);

        <span class="hljs-comment">// Swap DAI -&gt; WETH -&gt; USDC</span>
        dai.approve(<span class="hljs-keyword">address</span>(uni), daiAmountOut);

        <span class="hljs-keyword">uint</span> amountOutDesired <span class="hljs-operator">=</span> <span class="hljs-number">1e6</span>;
        <span class="hljs-keyword">uint</span> amountOut <span class="hljs-operator">=</span> uni.swapMultiHopExactAmountOut(amountOutDesired, daiAmountOut);

        console.log(<span class="hljs-string">"USDC"</span>, amountOut);
        assertEq(amountOut, amountOutDesired, <span class="hljs-string">"amount out != amount out desired"</span>);
    }
}
</code></pre>
`

export default html
