// metadata
export const version = "0.8.17"
export const title = "Uniswap V3 Liquidity Examples"
export const description = "Uniswap V3 liquidity examples"
export const codes = [
    {
        fileName: "UniswapV3Liquidity.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmFkZHJlc3MgY29uc3RhbnQgREFJID0gMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGOwphZGRyZXNzIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CgppbnRlcmZhY2UgSUVSQzcyMVJlY2VpdmVyIHsKICAgIGZ1bmN0aW9uIG9uRVJDNzIxUmVjZWl2ZWQoCiAgICAgICAgYWRkcmVzcyBvcGVyYXRvciwKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgdWludCB0b2tlbklkLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXM0KTsKfQoKY29udHJhY3QgVW5pc3dhcFYzTGlxdWlkaXR5IGlzIElFUkM3MjFSZWNlaXZlciB7CiAgICBJRVJDMjAgcHJpdmF0ZSBjb25zdGFudCBkYWkgPSBJRVJDMjAoREFJKTsKICAgIElXRVRIIHByaXZhdGUgY29uc3RhbnQgd2V0aCA9IElXRVRIKFdFVEgpOwoKICAgIGludDI0IHByaXZhdGUgY29uc3RhbnQgTUlOX1RJQ0sgPSAtODg3MjcyOwogICAgaW50MjQgcHJpdmF0ZSBjb25zdGFudCBNQVhfVElDSyA9IC1NSU5fVElDSzsKICAgIGludDI0IHByaXZhdGUgY29uc3RhbnQgVElDS19TUEFDSU5HID0gNjA7CgogICAgSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyIHB1YmxpYyBub25mdW5naWJsZVBvc2l0aW9uTWFuYWdlciA9CiAgICAgICAgSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyKDB4QzM2NDQyYjRhNDUyMkU4NzEzOTlDRDcxN2FCREQ4NDdBYjExRkU4OCk7CgogICAgZnVuY3Rpb24gb25FUkM3MjFSZWNlaXZlZCgKICAgICAgICBhZGRyZXNzIG9wZXJhdG9yLAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICB1aW50IHRva2VuSWQsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXM0KSB7CiAgICAgICAgcmV0dXJuIElFUkM3MjFSZWNlaXZlci5vbkVSQzcyMVJlY2VpdmVkLnNlbGVjdG9yOwogICAgfQoKICAgIGZ1bmN0aW9uIG1pbnROZXdQb3NpdGlvbigKICAgICAgICB1aW50IGFtb3VudDBUb0FkZCwKICAgICAgICB1aW50IGFtb3VudDFUb0FkZAogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50IHRva2VuSWQsIHVpbnQxMjggbGlxdWlkaXR5LCB1aW50IGFtb3VudDAsIHVpbnQgYW1vdW50MSkgewogICAgICAgIGRhaS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50MFRvQWRkKTsKICAgICAgICB3ZXRoLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBhbW91bnQxVG9BZGQpOwoKICAgICAgICBkYWkuYXBwcm92ZShhZGRyZXNzKG5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyKSwgYW1vdW50MFRvQWRkKTsKICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyhub25mdW5naWJsZVBvc2l0aW9uTWFuYWdlciksIGFtb3VudDFUb0FkZCk7CgogICAgICAgIElOb25mdW5naWJsZVBvc2l0aW9uTWFuYWdlci5NaW50UGFyYW1zCiAgICAgICAgICAgIG1lbW9yeSBwYXJhbXMgPSBJTm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIuTWludFBhcmFtcyh7CiAgICAgICAgICAgICAgICB0b2tlbjA6IERBSSwKICAgICAgICAgICAgICAgIHRva2VuMTogV0VUSCwKICAgICAgICAgICAgICAgIGZlZTogMzAwMCwKICAgICAgICAgICAgICAgIHRpY2tMb3dlcjogKE1JTl9USUNLIC8gVElDS19TUEFDSU5HKSAqIFRJQ0tfU1BBQ0lORywKICAgICAgICAgICAgICAgIHRpY2tVcHBlcjogKE1BWF9USUNLIC8gVElDS19TUEFDSU5HKSAqIFRJQ0tfU1BBQ0lORywKICAgICAgICAgICAgICAgIGFtb3VudDBEZXNpcmVkOiBhbW91bnQwVG9BZGQsCiAgICAgICAgICAgICAgICBhbW91bnQxRGVzaXJlZDogYW1vdW50MVRvQWRkLAogICAgICAgICAgICAgICAgYW1vdW50ME1pbjogMCwKICAgICAgICAgICAgICAgIGFtb3VudDFNaW46IDAsCiAgICAgICAgICAgICAgICByZWNpcGllbnQ6IGFkZHJlc3ModGhpcyksCiAgICAgICAgICAgICAgICBkZWFkbGluZTogYmxvY2sudGltZXN0YW1wCiAgICAgICAgICAgIH0pOwoKICAgICAgICAodG9rZW5JZCwgbGlxdWlkaXR5LCBhbW91bnQwLCBhbW91bnQxKSA9IG5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLm1pbnQoCiAgICAgICAgICAgIHBhcmFtcwogICAgICAgICk7CgogICAgICAgIGlmIChhbW91bnQwIDwgYW1vdW50MFRvQWRkKSB7CiAgICAgICAgICAgIGRhaS5hcHByb3ZlKGFkZHJlc3Mobm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIpLCAwKTsKICAgICAgICAgICAgdWludCByZWZ1bmQwID0gYW1vdW50MFRvQWRkIC0gYW1vdW50MDsKICAgICAgICAgICAgZGFpLnRyYW5zZmVyKG1zZy5zZW5kZXIsIHJlZnVuZDApOwogICAgICAgIH0KICAgICAgICBpZiAoYW1vdW50MSA8IGFtb3VudDFUb0FkZCkgewogICAgICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyhub25mdW5naWJsZVBvc2l0aW9uTWFuYWdlciksIDApOwogICAgICAgICAgICB1aW50IHJlZnVuZDEgPSBhbW91bnQxVG9BZGQgLSBhbW91bnQxOwogICAgICAgICAgICB3ZXRoLnRyYW5zZmVyKG1zZy5zZW5kZXIsIHJlZnVuZDEpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBjb2xsZWN0QWxsRmVlcygKICAgICAgICB1aW50IHRva2VuSWQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludCBhbW91bnQwLCB1aW50IGFtb3VudDEpIHsKICAgICAgICBJTm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIuQ29sbGVjdFBhcmFtcwogICAgICAgICAgICBtZW1vcnkgcGFyYW1zID0gSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLkNvbGxlY3RQYXJhbXMoewogICAgICAgICAgICAgICAgdG9rZW5JZDogdG9rZW5JZCwKICAgICAgICAgICAgICAgIHJlY2lwaWVudDogYWRkcmVzcyh0aGlzKSwKICAgICAgICAgICAgICAgIGFtb3VudDBNYXg6IHR5cGUodWludDEyOCkubWF4LAogICAgICAgICAgICAgICAgYW1vdW50MU1heDogdHlwZSh1aW50MTI4KS5tYXgKICAgICAgICAgICAgfSk7CgogICAgICAgIChhbW91bnQwLCBhbW91bnQxKSA9IG5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLmNvbGxlY3QocGFyYW1zKTsKICAgIH0KCiAgICBmdW5jdGlvbiBpbmNyZWFzZUxpcXVpZGl0eUN1cnJlbnRSYW5nZSgKICAgICAgICB1aW50IHRva2VuSWQsCiAgICAgICAgdWludCBhbW91bnQwVG9BZGQsCiAgICAgICAgdWludCBhbW91bnQxVG9BZGQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludDEyOCBsaXF1aWRpdHksIHVpbnQgYW1vdW50MCwgdWludCBhbW91bnQxKSB7CiAgICAgICAgZGFpLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBhbW91bnQwVG9BZGQpOwogICAgICAgIHdldGgudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudDFUb0FkZCk7CgogICAgICAgIGRhaS5hcHByb3ZlKGFkZHJlc3Mobm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIpLCBhbW91bnQwVG9BZGQpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKG5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyKSwgYW1vdW50MVRvQWRkKTsKCiAgICAgICAgSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLkluY3JlYXNlTGlxdWlkaXR5UGFyYW1zCiAgICAgICAgICAgIG1lbW9yeSBwYXJhbXMgPSBJTm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIuSW5jcmVhc2VMaXF1aWRpdHlQYXJhbXMoewogICAgICAgICAgICAgICAgdG9rZW5JZDogdG9rZW5JZCwKICAgICAgICAgICAgICAgIGFtb3VudDBEZXNpcmVkOiBhbW91bnQwVG9BZGQsCiAgICAgICAgICAgICAgICBhbW91bnQxRGVzaXJlZDogYW1vdW50MVRvQWRkLAogICAgICAgICAgICAgICAgYW1vdW50ME1pbjogMCwKICAgICAgICAgICAgICAgIGFtb3VudDFNaW46IDAsCiAgICAgICAgICAgICAgICBkZWFkbGluZTogYmxvY2sudGltZXN0YW1wCiAgICAgICAgICAgIH0pOwoKICAgICAgICAobGlxdWlkaXR5LCBhbW91bnQwLCBhbW91bnQxKSA9IG5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLmluY3JlYXNlTGlxdWlkaXR5KAogICAgICAgICAgICBwYXJhbXMKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlY3JlYXNlTGlxdWlkaXR5Q3VycmVudFJhbmdlKAogICAgICAgIHVpbnQgdG9rZW5JZCwKICAgICAgICB1aW50MTI4IGxpcXVpZGl0eQogICAgKSBleHRlcm5hbCByZXR1cm5zICh1aW50IGFtb3VudDAsIHVpbnQgYW1vdW50MSkgewogICAgICAgIElOb25mdW5naWJsZVBvc2l0aW9uTWFuYWdlci5EZWNyZWFzZUxpcXVpZGl0eVBhcmFtcwogICAgICAgICAgICBtZW1vcnkgcGFyYW1zID0gSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLkRlY3JlYXNlTGlxdWlkaXR5UGFyYW1zKHsKICAgICAgICAgICAgICAgIHRva2VuSWQ6IHRva2VuSWQsCiAgICAgICAgICAgICAgICBsaXF1aWRpdHk6IGxpcXVpZGl0eSwKICAgICAgICAgICAgICAgIGFtb3VudDBNaW46IDAsCiAgICAgICAgICAgICAgICBhbW91bnQxTWluOiAwLAogICAgICAgICAgICAgICAgZGVhZGxpbmU6IGJsb2NrLnRpbWVzdGFtcAogICAgICAgICAgICB9KTsKCiAgICAgICAgKGFtb3VudDAsIGFtb3VudDEpID0gbm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIuZGVjcmVhc2VMaXF1aWRpdHkocGFyYW1zKTsKICAgIH0KfQoKaW50ZXJmYWNlIElOb25mdW5naWJsZVBvc2l0aW9uTWFuYWdlciB7CiAgICBzdHJ1Y3QgTWludFBhcmFtcyB7CiAgICAgICAgYWRkcmVzcyB0b2tlbjA7CiAgICAgICAgYWRkcmVzcyB0b2tlbjE7CiAgICAgICAgdWludDI0IGZlZTsKICAgICAgICBpbnQyNCB0aWNrTG93ZXI7CiAgICAgICAgaW50MjQgdGlja1VwcGVyOwogICAgICAgIHVpbnQgYW1vdW50MERlc2lyZWQ7CiAgICAgICAgdWludCBhbW91bnQxRGVzaXJlZDsKICAgICAgICB1aW50IGFtb3VudDBNaW47CiAgICAgICAgdWludCBhbW91bnQxTWluOwogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50OwogICAgICAgIHVpbnQgZGVhZGxpbmU7CiAgICB9CgogICAgZnVuY3Rpb24gbWludCgKICAgICAgICBNaW50UGFyYW1zIGNhbGxkYXRhIHBhcmFtcwogICAgKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKHVpbnQgdG9rZW5JZCwgdWludDEyOCBsaXF1aWRpdHksIHVpbnQgYW1vdW50MCwgdWludCBhbW91bnQxKTsKCiAgICBzdHJ1Y3QgSW5jcmVhc2VMaXF1aWRpdHlQYXJhbXMgewogICAgICAgIHVpbnQgdG9rZW5JZDsKICAgICAgICB1aW50IGFtb3VudDBEZXNpcmVkOwogICAgICAgIHVpbnQgYW1vdW50MURlc2lyZWQ7CiAgICAgICAgdWludCBhbW91bnQwTWluOwogICAgICAgIHVpbnQgYW1vdW50MU1pbjsKICAgICAgICB1aW50IGRlYWRsaW5lOwogICAgfQoKICAgIGZ1bmN0aW9uIGluY3JlYXNlTGlxdWlkaXR5KAogICAgICAgIEluY3JlYXNlTGlxdWlkaXR5UGFyYW1zIGNhbGxkYXRhIHBhcmFtcwogICAgKSBleHRlcm5hbCBwYXlhYmxlIHJldHVybnMgKHVpbnQxMjggbGlxdWlkaXR5LCB1aW50IGFtb3VudDAsIHVpbnQgYW1vdW50MSk7CgogICAgc3RydWN0IERlY3JlYXNlTGlxdWlkaXR5UGFyYW1zIHsKICAgICAgICB1aW50IHRva2VuSWQ7CiAgICAgICAgdWludDEyOCBsaXF1aWRpdHk7CiAgICAgICAgdWludCBhbW91bnQwTWluOwogICAgICAgIHVpbnQgYW1vdW50MU1pbjsKICAgICAgICB1aW50IGRlYWRsaW5lOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlY3JlYXNlTGlxdWlkaXR5KAogICAgICAgIERlY3JlYXNlTGlxdWlkaXR5UGFyYW1zIGNhbGxkYXRhIHBhcmFtcwogICAgKSBleHRlcm5hbCBwYXlhYmxlIHJldHVybnMgKHVpbnQgYW1vdW50MCwgdWludCBhbW91bnQxKTsKCiAgICBzdHJ1Y3QgQ29sbGVjdFBhcmFtcyB7CiAgICAgICAgdWludCB0b2tlbklkOwogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50OwogICAgICAgIHVpbnQxMjggYW1vdW50ME1heDsKICAgICAgICB1aW50MTI4IGFtb3VudDFNYXg7CiAgICB9CgogICAgZnVuY3Rpb24gY29sbGVjdCgKICAgICAgICBDb2xsZWN0UGFyYW1zIGNhbGxkYXRhIHBhcmFtcwogICAgKSBleHRlcm5hbCBwYXlhYmxlIHJldHVybnMgKHVpbnQgYW1vdW50MCwgdWludCBhbW91bnQxKTsKfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgdWludCBhbW91bnQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludCB2YWx1ZSk7CiAgICBldmVudCBBcHByb3ZhbChhZGRyZXNzIGluZGV4ZWQgb3duZXIsIGFkZHJlc3MgaW5kZXhlZCBzcGVuZGVyLCB1aW50IHZhbHVlKTsKfQoKaW50ZXJmYWNlIElXRVRIIGlzIElFUkMyMCB7CiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgZXh0ZXJuYWwgcGF5YWJsZTsKCiAgICBmdW5jdGlvbiB3aXRoZHJhdyh1aW50IGFtb3VudCkgZXh0ZXJuYWw7Cn0K",
    },
    {
        fileName: "UniswapV3LiquidityTest.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICJmb3JnZS1zdGQvY29uc29sZS5zb2wiOwoKaW1wb3J0ICIuLi9zcmMvVW5pc3dhcFYzTGlxdWlkaXR5LnNvbCI7Cgpjb250cmFjdCBVbmlzd2FwVjNMaXF1aWRpdHlUZXN0IGlzIFRlc3QgewogICAgSVdFVEggcHJpdmF0ZSBjb25zdGFudCB3ZXRoID0gSVdFVEgoV0VUSCk7CiAgICBJRVJDMjAgcHJpdmF0ZSBjb25zdGFudCBkYWkgPSBJRVJDMjAoREFJKTsKCiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgREFJX1dIQUxFID0gMHhlODFENmYwMzAyODEwN0EyMERCYzgzMTc2REE4MmFFODA5OUU5QzQyOwoKICAgIFVuaXN3YXBWM0xpcXVpZGl0eSBwcml2YXRlIHVuaSA9IG5ldyBVbmlzd2FwVjNMaXF1aWRpdHkoKTsKCiAgICBmdW5jdGlvbiBzZXRVcCgpIHB1YmxpYyB7CiAgICAgICAgdm0ucHJhbmsoREFJX1dIQUxFKTsKICAgICAgICBkYWkudHJhbnNmZXIoYWRkcmVzcyh0aGlzKSwgMjAgKiAxZTE4KTsKCiAgICAgICAgd2V0aC5kZXBvc2l0e3ZhbHVlOiAyICogMWUxOH0oKTsKCiAgICAgICAgZGFpLmFwcHJvdmUoYWRkcmVzcyh1bmkpLCAyMCAqIDFlMTgpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKHVuaSksIDIgKiAxZTE4KTsKICAgIH0KCiAgICBmdW5jdGlvbiB0ZXN0TGlxdWlkaXR5KCkgcHVibGljIHsKICAgICAgICAvLyBUcmFjayB0b3RhbCBsaXF1aWRpdHkKICAgICAgICB1aW50MTI4IGxpcXVpZGl0eTsKCiAgICAgICAgLy8gTWludCBuZXcgcG9zaXRpb24KICAgICAgICB1aW50IGRhaUFtb3VudCA9IDEwICogMWUxODsKICAgICAgICB1aW50IHdldGhBbW91bnQgPSAxZTE4OwoKICAgICAgICAodWludCB0b2tlbklkLCB1aW50MTI4IGxpcXVpZGl0eURlbHRhLCB1aW50IGFtb3VudDAsIHVpbnQgYW1vdW50MSkgPSB1bmkKICAgICAgICAgICAgLm1pbnROZXdQb3NpdGlvbihkYWlBbW91bnQsIHdldGhBbW91bnQpOwogICAgICAgIGxpcXVpZGl0eSArPSBsaXF1aWRpdHlEZWx0YTsKCiAgICAgICAgY29uc29sZS5sb2coIi0tLSBNaW50IG5ldyBwb3NpdGlvbiAtLS0iKTsKICAgICAgICBjb25zb2xlLmxvZygidG9rZW4gaWQiLCB0b2tlbklkKTsKICAgICAgICBjb25zb2xlLmxvZygibGlxdWlkaXR5IiwgbGlxdWlkaXR5KTsKICAgICAgICBjb25zb2xlLmxvZygiYW1vdW50IDAiLCBhbW91bnQwKTsKICAgICAgICBjb25zb2xlLmxvZygiYW1vdW50IDEiLCBhbW91bnQxKTsKCiAgICAgICAgLy8gQ29sbGVjdCBmZWVzCiAgICAgICAgKHVpbnQgZmVlMCwgdWludCBmZWUxKSA9IHVuaS5jb2xsZWN0QWxsRmVlcyh0b2tlbklkKTsKCiAgICAgICAgY29uc29sZS5sb2coIi0tLSBDb2xsZWN0IGZlZXMgLS0tIik7CiAgICAgICAgY29uc29sZS5sb2coImZlZSAwIiwgZmVlMCk7CiAgICAgICAgY29uc29sZS5sb2coImZlZSAxIiwgZmVlMSk7CgogICAgICAgIC8vIEluY3JlYXNlIGxpcXVpZGl0eQogICAgICAgIHVpbnQgZGFpQW1vdW50VG9BZGQgPSA1ICogMWUxODsKICAgICAgICB1aW50IHdldGhBbW91bnRUb0FkZCA9IDAuNSAqIDFlMTg7CgogICAgICAgIChsaXF1aWRpdHlEZWx0YSwgYW1vdW50MCwgYW1vdW50MSkgPSB1bmkuaW5jcmVhc2VMaXF1aWRpdHlDdXJyZW50UmFuZ2UoCiAgICAgICAgICAgIHRva2VuSWQsCiAgICAgICAgICAgIGRhaUFtb3VudFRvQWRkLAogICAgICAgICAgICB3ZXRoQW1vdW50VG9BZGQKICAgICAgICApOwogICAgICAgIGxpcXVpZGl0eSArPSBsaXF1aWRpdHlEZWx0YTsKCiAgICAgICAgY29uc29sZS5sb2coIi0tLSBJbmNyZWFzZSBsaXF1aWRpdHkgLS0tIik7CiAgICAgICAgY29uc29sZS5sb2coImxpcXVpZGl0eSIsIGxpcXVpZGl0eSk7CiAgICAgICAgY29uc29sZS5sb2coImFtb3VudCAwIiwgYW1vdW50MCk7CiAgICAgICAgY29uc29sZS5sb2coImFtb3VudCAxIiwgYW1vdW50MSk7CgogICAgICAgIC8vIERlY3JlYXNlIGxpcXVpZGl0eQogICAgICAgIChhbW91bnQwLCBhbW91bnQxKSA9IHVuaS5kZWNyZWFzZUxpcXVpZGl0eUN1cnJlbnRSYW5nZSh0b2tlbklkLCBsaXF1aWRpdHkpOwogICAgICAgIGNvbnNvbGUubG9nKCItLS0gRGVjcmVhc2UgbGlxdWlkaXR5IC0tLSIpOwogICAgICAgIGNvbnNvbGUubG9nKCJhbW91bnQgMCIsIGFtb3VudDApOwogICAgICAgIGNvbnNvbGUubG9nKCJhbW91bnQgMSIsIGFtb3VudDEpOwogICAgfQp9Cg==",
    },
]

const html = `<p>Examples of minting new position, collect fees, increase and decrease liquidity.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721Receiver</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onERC721Received</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3Liquidity</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC721Receiver</span> </span>{
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    IWETH <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IWETH(WETH);

    <span class="hljs-keyword">int24</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> MIN_TICK <span class="hljs-operator">=</span> <span class="hljs-number">-887272</span>;
    <span class="hljs-keyword">int24</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> MAX_TICK <span class="hljs-operator">=</span> <span class="hljs-operator">-</span>MIN_TICK;
    <span class="hljs-keyword">int24</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> TICK_SPACING <span class="hljs-operator">=</span> <span class="hljs-number">60</span>;

    INonfungiblePositionManager <span class="hljs-keyword">public</span> nonfungiblePositionManager <span class="hljs-operator">=</span>
        INonfungiblePositionManager(<span class="hljs-number">0xC36442b4a4522E871399CD717aBDD847Ab11FE88</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onERC721Received</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span>
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> IERC721Receiver.onERC721Received.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mintNewPosition</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> amount0ToAdd,
        <span class="hljs-keyword">uint</span> amount1ToAdd
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId, <span class="hljs-keyword">uint128</span> liquidity, <span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>) </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount0ToAdd);
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount1ToAdd);

        dai.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount0ToAdd);
        weth.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount1ToAdd);

        INonfungiblePositionManager.MintParams
            <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> INonfungiblePositionManager.MintParams({
                token0: DAI,
                token1: WETH,
                fee: <span class="hljs-number">3000</span>,
                tickLower: (MIN_TICK <span class="hljs-operator">/</span> TICK_SPACING) <span class="hljs-operator">*</span> TICK_SPACING,
                tickUpper: (MAX_TICK <span class="hljs-operator">/</span> TICK_SPACING) <span class="hljs-operator">*</span> TICK_SPACING,
                amount0Desired: amount0ToAdd,
                amount1Desired: amount1ToAdd,
                amount0Min: <span class="hljs-number">0</span>,
                amount1Min: <span class="hljs-number">0</span>,
                recipient: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
                deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
            });

        (tokenId, liquidity, amount0, amount1) <span class="hljs-operator">=</span> nonfungiblePositionManager.mint(
            params
        );

        <span class="hljs-keyword">if</span> (amount0 <span class="hljs-operator">&lt;</span> amount0ToAdd) {
            dai.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), <span class="hljs-number">0</span>);
            <span class="hljs-keyword">uint</span> refund0 <span class="hljs-operator">=</span> amount0ToAdd <span class="hljs-operator">-</span> amount0;
            dai.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, refund0);
        }
        <span class="hljs-keyword">if</span> (amount1 <span class="hljs-operator">&lt;</span> amount1ToAdd) {
            weth.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), <span class="hljs-number">0</span>);
            <span class="hljs-keyword">uint</span> refund1 <span class="hljs-operator">=</span> amount1ToAdd <span class="hljs-operator">-</span> amount1;
            weth.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, refund1);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">collectAllFees</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>) </span>{
        INonfungiblePositionManager.CollectParams
            <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> INonfungiblePositionManager.CollectParams({
                tokenId: tokenId,
                recipient: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
                amount0Max: <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint128</span>).<span class="hljs-built_in">max</span>,
                amount1Max: <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint128</span>).<span class="hljs-built_in">max</span>
            });

        (amount0, amount1) <span class="hljs-operator">=</span> nonfungiblePositionManager.collect(params);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increaseLiquidityCurrentRange</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">uint</span> amount0ToAdd,
        <span class="hljs-keyword">uint</span> amount1ToAdd
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint128</span> liquidity, <span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>) </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount0ToAdd);
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount1ToAdd);

        dai.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount0ToAdd);
        weth.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount1ToAdd);

        INonfungiblePositionManager.IncreaseLiquidityParams
            <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> INonfungiblePositionManager.IncreaseLiquidityParams({
                tokenId: tokenId,
                amount0Desired: amount0ToAdd,
                amount1Desired: amount1ToAdd,
                amount0Min: <span class="hljs-number">0</span>,
                amount1Min: <span class="hljs-number">0</span>,
                deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
            });

        (liquidity, amount0, amount1) <span class="hljs-operator">=</span> nonfungiblePositionManager.increaseLiquidity(
            params
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">decreaseLiquidityCurrentRange</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">uint128</span> liquidity
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>) </span>{
        INonfungiblePositionManager.DecreaseLiquidityParams
            <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> INonfungiblePositionManager.DecreaseLiquidityParams({
                tokenId: tokenId,
                liquidity: liquidity,
                amount0Min: <span class="hljs-number">0</span>,
                amount1Min: <span class="hljs-number">0</span>,
                deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
            });

        (amount0, amount1) <span class="hljs-operator">=</span> nonfungiblePositionManager.decreaseLiquidity(params);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">INonfungiblePositionManager</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">MintParams</span> {
        <span class="hljs-keyword">address</span> token0;
        <span class="hljs-keyword">address</span> token1;
        <span class="hljs-keyword">uint24</span> fee;
        <span class="hljs-keyword">int24</span> tickLower;
        <span class="hljs-keyword">int24</span> tickUpper;
        <span class="hljs-keyword">uint</span> amount0Desired;
        <span class="hljs-keyword">uint</span> amount1Desired;
        <span class="hljs-keyword">uint</span> amount0Min;
        <span class="hljs-keyword">uint</span> amount1Min;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint</span> deadline;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params">
        MintParams <span class="hljs-keyword">calldata</span> params
    </span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId, <span class="hljs-keyword">uint128</span> liquidity, <span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">IncreaseLiquidityParams</span> {
        <span class="hljs-keyword">uint</span> tokenId;
        <span class="hljs-keyword">uint</span> amount0Desired;
        <span class="hljs-keyword">uint</span> amount1Desired;
        <span class="hljs-keyword">uint</span> amount0Min;
        <span class="hljs-keyword">uint</span> amount1Min;
        <span class="hljs-keyword">uint</span> deadline;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increaseLiquidity</span>(<span class="hljs-params">
        IncreaseLiquidityParams <span class="hljs-keyword">calldata</span> params
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint128</span> liquidity, <span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">DecreaseLiquidityParams</span> {
        <span class="hljs-keyword">uint</span> tokenId;
        <span class="hljs-keyword">uint128</span> liquidity;
        <span class="hljs-keyword">uint</span> amount0Min;
        <span class="hljs-keyword">uint</span> amount1Min;
        <span class="hljs-keyword">uint</span> deadline;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">decreaseLiquidity</span>(<span class="hljs-params">
        DecreaseLiquidityParams <span class="hljs-keyword">calldata</span> params
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">CollectParams</span> {
        <span class="hljs-keyword">uint</span> tokenId;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint128</span> amount0Max;
        <span class="hljs-keyword">uint128</span> amount1Max;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">collect</span>(<span class="hljs-params">
        CollectParams <span class="hljs-keyword">calldata</span> params
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>)</span>;
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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/console.sol"</span>;

<span class="hljs-keyword">import</span> <span class="hljs-string">"../src/UniswapV3Liquidity.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3LiquidityTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IWETH <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI_WHALE <span class="hljs-operator">=</span> <span class="hljs-number">0xe81D6f03028107A20DBc83176DA82aE8099E9C42</span>;

    UniswapV3Liquidity <span class="hljs-keyword">private</span> uni <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> UniswapV3Liquidity();

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        vm.prank(DAI_WHALE);
        dai.<span class="hljs-built_in">transfer</span>(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), <span class="hljs-number">20</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);

        weth.deposit{<span class="hljs-built_in">value</span>: <span class="hljs-number">2</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>}();

        dai.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">20</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
        weth.approve(<span class="hljs-keyword">address</span>(uni), <span class="hljs-number">2</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testLiquidity</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Track total liquidity</span>
        <span class="hljs-keyword">uint128</span> liquidity;

        <span class="hljs-comment">// Mint new position</span>
        <span class="hljs-keyword">uint</span> daiAmount <span class="hljs-operator">=</span> <span class="hljs-number">10</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">uint</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;

        (<span class="hljs-keyword">uint</span> tokenId, <span class="hljs-keyword">uint128</span> liquidityDelta, <span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1) <span class="hljs-operator">=</span> uni
            .mintNewPosition(daiAmount, wethAmount);
        liquidity <span class="hljs-operator">+</span><span class="hljs-operator">=</span> liquidityDelta;

        console.log(<span class="hljs-string">"--- Mint new position ---"</span>);
        console.log(<span class="hljs-string">"token id"</span>, tokenId);
        console.log(<span class="hljs-string">"liquidity"</span>, liquidity);
        console.log(<span class="hljs-string">"amount 0"</span>, amount0);
        console.log(<span class="hljs-string">"amount 1"</span>, amount1);

        <span class="hljs-comment">// Collect fees</span>
        (<span class="hljs-keyword">uint</span> fee0, <span class="hljs-keyword">uint</span> fee1) <span class="hljs-operator">=</span> uni.collectAllFees(tokenId);

        console.log(<span class="hljs-string">"--- Collect fees ---"</span>);
        console.log(<span class="hljs-string">"fee 0"</span>, fee0);
        console.log(<span class="hljs-string">"fee 1"</span>, fee1);

        <span class="hljs-comment">// Increase liquidity</span>
        <span class="hljs-keyword">uint</span> daiAmountToAdd <span class="hljs-operator">=</span> <span class="hljs-number">5</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">uint</span> wethAmountToAdd <span class="hljs-operator">=</span> <span class="hljs-number">0</span><span class="hljs-number">.5</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;

        (liquidityDelta, amount0, amount1) <span class="hljs-operator">=</span> uni.increaseLiquidityCurrentRange(
            tokenId,
            daiAmountToAdd,
            wethAmountToAdd
        );
        liquidity <span class="hljs-operator">+</span><span class="hljs-operator">=</span> liquidityDelta;

        console.log(<span class="hljs-string">"--- Increase liquidity ---"</span>);
        console.log(<span class="hljs-string">"liquidity"</span>, liquidity);
        console.log(<span class="hljs-string">"amount 0"</span>, amount0);
        console.log(<span class="hljs-string">"amount 1"</span>, amount1);

        <span class="hljs-comment">// Decrease liquidity</span>
        (amount0, amount1) <span class="hljs-operator">=</span> uni.decreaseLiquidityCurrentRange(tokenId, liquidity);
        console.log(<span class="hljs-string">"--- Decrease liquidity ---"</span>);
        console.log(<span class="hljs-string">"amount 0"</span>, amount0);
        console.log(<span class="hljs-string">"amount 1"</span>, amount1);
    }
}
</code></pre>
<pre><code class="language-shell">FORK_URL=https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi
forge test -vv --gas-report --fork-url $FORK_URL --match-path test/UniswapV3Liquidity.test.sol
</code></pre>
<h3 id="links">Links</h3>
<p><a href="https://docs.uniswap.org/protocol/guides/providing-liquidity/setting-up" target="__blank">Uniswap V3</a></p>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
