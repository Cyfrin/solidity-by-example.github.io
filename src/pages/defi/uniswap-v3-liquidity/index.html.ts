// metadata
export const version = "0.8.26"
export const title = "Uniswap V3 Liquidity Examples"
export const description = "Uniswap V3 liquidity examples"
export const cyfrinLink = ""

export const keywords = ["defi", "uniswap", "v3", "liquidity", "amm"]

export const codes = [
  {
    fileName: "UniswapV3Liquidity.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmFkZHJlc3MgY29uc3RhbnQgREFJID0gMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGOwphZGRyZXNzIGNvbnN0YW50IFdFVEggPSAweEMwMmFhQTM5YjIyM0ZFOEQwQTBlNUM0RjI3ZUFEOTA4M0M3NTZDYzI7CgppbnRlcmZhY2UgSUVSQzcyMVJlY2VpdmVyIHsKICAgIGZ1bmN0aW9uIG9uRVJDNzIxUmVjZWl2ZWQoCiAgICAgICAgYWRkcmVzcyBvcGVyYXRvciwKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgdWludDI1NiB0b2tlbklkLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXM0KTsKfQoKY29udHJhY3QgVW5pc3dhcFYzTGlxdWlkaXR5IGlzIElFUkM3MjFSZWNlaXZlciB7CiAgICBJRVJDMjAgcHJpdmF0ZSBjb25zdGFudCBkYWkgPSBJRVJDMjAoREFJKTsKICAgIElXRVRIIHByaXZhdGUgY29uc3RhbnQgd2V0aCA9IElXRVRIKFdFVEgpOwoKICAgIGludDI0IHByaXZhdGUgY29uc3RhbnQgTUlOX1RJQ0sgPSAtODg3MjcyOwogICAgaW50MjQgcHJpdmF0ZSBjb25zdGFudCBNQVhfVElDSyA9IC1NSU5fVElDSzsKICAgIGludDI0IHByaXZhdGUgY29uc3RhbnQgVElDS19TUEFDSU5HID0gNjA7CgogICAgSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyIHB1YmxpYyBub25mdW5naWJsZVBvc2l0aW9uTWFuYWdlciA9CiAgICAgICAgSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyKDB4QzM2NDQyYjRhNDUyMkU4NzEzOTlDRDcxN2FCREQ4NDdBYjExRkU4OCk7CgogICAgZnVuY3Rpb24gb25FUkM3MjFSZWNlaXZlZCgKICAgICAgICBhZGRyZXNzIG9wZXJhdG9yLAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICB1aW50MjU2IHRva2VuSWQsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXM0KSB7CiAgICAgICAgcmV0dXJuIElFUkM3MjFSZWNlaXZlci5vbkVSQzcyMVJlY2VpdmVkLnNlbGVjdG9yOwogICAgfQoKICAgIGZ1bmN0aW9uIG1pbnROZXdQb3NpdGlvbih1aW50MjU2IGFtb3VudDBUb0FkZCwgdWludDI1NiBhbW91bnQxVG9BZGQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zICgKICAgICAgICAgICAgdWludDI1NiB0b2tlbklkLAogICAgICAgICAgICB1aW50MTI4IGxpcXVpZGl0eSwKICAgICAgICAgICAgdWludDI1NiBhbW91bnQwLAogICAgICAgICAgICB1aW50MjU2IGFtb3VudDEKICAgICAgICApCiAgICB7CiAgICAgICAgZGFpLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBhbW91bnQwVG9BZGQpOwogICAgICAgIHdldGgudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudDFUb0FkZCk7CgogICAgICAgIGRhaS5hcHByb3ZlKGFkZHJlc3Mobm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIpLCBhbW91bnQwVG9BZGQpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKG5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyKSwgYW1vdW50MVRvQWRkKTsKCiAgICAgICAgSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLk1pbnRQYXJhbXMgbWVtb3J5IHBhcmFtcyA9CiAgICAgICAgSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLk1pbnRQYXJhbXMoewogICAgICAgICAgICB0b2tlbjA6IERBSSwKICAgICAgICAgICAgdG9rZW4xOiBXRVRILAogICAgICAgICAgICBmZWU6IDMwMDAsCiAgICAgICAgICAgIHRpY2tMb3dlcjogKE1JTl9USUNLIC8gVElDS19TUEFDSU5HKSAqIFRJQ0tfU1BBQ0lORywKICAgICAgICAgICAgdGlja1VwcGVyOiAoTUFYX1RJQ0sgLyBUSUNLX1NQQUNJTkcpICogVElDS19TUEFDSU5HLAogICAgICAgICAgICBhbW91bnQwRGVzaXJlZDogYW1vdW50MFRvQWRkLAogICAgICAgICAgICBhbW91bnQxRGVzaXJlZDogYW1vdW50MVRvQWRkLAogICAgICAgICAgICBhbW91bnQwTWluOiAwLAogICAgICAgICAgICBhbW91bnQxTWluOiAwLAogICAgICAgICAgICByZWNpcGllbnQ6IGFkZHJlc3ModGhpcyksCiAgICAgICAgICAgIGRlYWRsaW5lOiBibG9jay50aW1lc3RhbXAKICAgICAgICB9KTsKCiAgICAgICAgKHRva2VuSWQsIGxpcXVpZGl0eSwgYW1vdW50MCwgYW1vdW50MSkgPQogICAgICAgICAgICBub25mdW5naWJsZVBvc2l0aW9uTWFuYWdlci5taW50KHBhcmFtcyk7CgogICAgICAgIGlmIChhbW91bnQwIDwgYW1vdW50MFRvQWRkKSB7CiAgICAgICAgICAgIGRhaS5hcHByb3ZlKGFkZHJlc3Mobm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIpLCAwKTsKICAgICAgICAgICAgdWludDI1NiByZWZ1bmQwID0gYW1vdW50MFRvQWRkIC0gYW1vdW50MDsKICAgICAgICAgICAgZGFpLnRyYW5zZmVyKG1zZy5zZW5kZXIsIHJlZnVuZDApOwogICAgICAgIH0KICAgICAgICBpZiAoYW1vdW50MSA8IGFtb3VudDFUb0FkZCkgewogICAgICAgICAgICB3ZXRoLmFwcHJvdmUoYWRkcmVzcyhub25mdW5naWJsZVBvc2l0aW9uTWFuYWdlciksIDApOwogICAgICAgICAgICB1aW50MjU2IHJlZnVuZDEgPSBhbW91bnQxVG9BZGQgLSBhbW91bnQxOwogICAgICAgICAgICB3ZXRoLnRyYW5zZmVyKG1zZy5zZW5kZXIsIHJlZnVuZDEpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBjb2xsZWN0QWxsRmVlcyh1aW50MjU2IHRva2VuSWQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zICh1aW50MjU2IGFtb3VudDAsIHVpbnQyNTYgYW1vdW50MSkKICAgIHsKICAgICAgICBJTm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIuQ29sbGVjdFBhcmFtcyBtZW1vcnkgcGFyYW1zID0KICAgICAgICBJTm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIuQ29sbGVjdFBhcmFtcyh7CiAgICAgICAgICAgIHRva2VuSWQ6IHRva2VuSWQsCiAgICAgICAgICAgIHJlY2lwaWVudDogYWRkcmVzcyh0aGlzKSwKICAgICAgICAgICAgYW1vdW50ME1heDogdHlwZSh1aW50MTI4KS5tYXgsCiAgICAgICAgICAgIGFtb3VudDFNYXg6IHR5cGUodWludDEyOCkubWF4CiAgICAgICAgfSk7CgogICAgICAgIChhbW91bnQwLCBhbW91bnQxKSA9IG5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLmNvbGxlY3QocGFyYW1zKTsKICAgIH0KCiAgICBmdW5jdGlvbiBpbmNyZWFzZUxpcXVpZGl0eUN1cnJlbnRSYW5nZSgKICAgICAgICB1aW50MjU2IHRva2VuSWQsCiAgICAgICAgdWludDI1NiBhbW91bnQwVG9BZGQsCiAgICAgICAgdWludDI1NiBhbW91bnQxVG9BZGQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludDEyOCBsaXF1aWRpdHksIHVpbnQyNTYgYW1vdW50MCwgdWludDI1NiBhbW91bnQxKSB7CiAgICAgICAgZGFpLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBhbW91bnQwVG9BZGQpOwogICAgICAgIHdldGgudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGFtb3VudDFUb0FkZCk7CgogICAgICAgIGRhaS5hcHByb3ZlKGFkZHJlc3Mobm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIpLCBhbW91bnQwVG9BZGQpOwogICAgICAgIHdldGguYXBwcm92ZShhZGRyZXNzKG5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyKSwgYW1vdW50MVRvQWRkKTsKCiAgICAgICAgSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLkluY3JlYXNlTGlxdWlkaXR5UGFyYW1zIG1lbW9yeSBwYXJhbXMgPQogICAgICAgIElOb25mdW5naWJsZVBvc2l0aW9uTWFuYWdlci5JbmNyZWFzZUxpcXVpZGl0eVBhcmFtcyh7CiAgICAgICAgICAgIHRva2VuSWQ6IHRva2VuSWQsCiAgICAgICAgICAgIGFtb3VudDBEZXNpcmVkOiBhbW91bnQwVG9BZGQsCiAgICAgICAgICAgIGFtb3VudDFEZXNpcmVkOiBhbW91bnQxVG9BZGQsCiAgICAgICAgICAgIGFtb3VudDBNaW46IDAsCiAgICAgICAgICAgIGFtb3VudDFNaW46IDAsCiAgICAgICAgICAgIGRlYWRsaW5lOiBibG9jay50aW1lc3RhbXAKICAgICAgICB9KTsKCiAgICAgICAgKGxpcXVpZGl0eSwgYW1vdW50MCwgYW1vdW50MSkgPQogICAgICAgICAgICBub25mdW5naWJsZVBvc2l0aW9uTWFuYWdlci5pbmNyZWFzZUxpcXVpZGl0eShwYXJhbXMpOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlY3JlYXNlTGlxdWlkaXR5Q3VycmVudFJhbmdlKHVpbnQyNTYgdG9rZW5JZCwgdWludDEyOCBsaXF1aWRpdHkpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zICh1aW50MjU2IGFtb3VudDAsIHVpbnQyNTYgYW1vdW50MSkKICAgIHsKICAgICAgICBJTm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIuRGVjcmVhc2VMaXF1aWRpdHlQYXJhbXMgbWVtb3J5IHBhcmFtcyA9CiAgICAgICAgSU5vbmZ1bmdpYmxlUG9zaXRpb25NYW5hZ2VyLkRlY3JlYXNlTGlxdWlkaXR5UGFyYW1zKHsKICAgICAgICAgICAgdG9rZW5JZDogdG9rZW5JZCwKICAgICAgICAgICAgbGlxdWlkaXR5OiBsaXF1aWRpdHksCiAgICAgICAgICAgIGFtb3VudDBNaW46IDAsCiAgICAgICAgICAgIGFtb3VudDFNaW46IDAsCiAgICAgICAgICAgIGRlYWRsaW5lOiBibG9jay50aW1lc3RhbXAKICAgICAgICB9KTsKCiAgICAgICAgKGFtb3VudDAsIGFtb3VudDEpID0KICAgICAgICAgICAgbm9uZnVuZ2libGVQb3NpdGlvbk1hbmFnZXIuZGVjcmVhc2VMaXF1aWRpdHkocGFyYW1zKTsKICAgIH0KfQoKaW50ZXJmYWNlIElOb25mdW5naWJsZVBvc2l0aW9uTWFuYWdlciB7CiAgICBzdHJ1Y3QgTWludFBhcmFtcyB7CiAgICAgICAgYWRkcmVzcyB0b2tlbjA7CiAgICAgICAgYWRkcmVzcyB0b2tlbjE7CiAgICAgICAgdWludDI0IGZlZTsKICAgICAgICBpbnQyNCB0aWNrTG93ZXI7CiAgICAgICAgaW50MjQgdGlja1VwcGVyOwogICAgICAgIHVpbnQyNTYgYW1vdW50MERlc2lyZWQ7CiAgICAgICAgdWludDI1NiBhbW91bnQxRGVzaXJlZDsKICAgICAgICB1aW50MjU2IGFtb3VudDBNaW47CiAgICAgICAgdWludDI1NiBhbW91bnQxTWluOwogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50OwogICAgICAgIHVpbnQyNTYgZGVhZGxpbmU7CiAgICB9CgogICAgZnVuY3Rpb24gbWludChNaW50UGFyYW1zIGNhbGxkYXRhIHBhcmFtcykKICAgICAgICBleHRlcm5hbAogICAgICAgIHBheWFibGUKICAgICAgICByZXR1cm5zICgKICAgICAgICAgICAgdWludDI1NiB0b2tlbklkLAogICAgICAgICAgICB1aW50MTI4IGxpcXVpZGl0eSwKICAgICAgICAgICAgdWludDI1NiBhbW91bnQwLAogICAgICAgICAgICB1aW50MjU2IGFtb3VudDEKICAgICAgICApOwoKICAgIHN0cnVjdCBJbmNyZWFzZUxpcXVpZGl0eVBhcmFtcyB7CiAgICAgICAgdWludDI1NiB0b2tlbklkOwogICAgICAgIHVpbnQyNTYgYW1vdW50MERlc2lyZWQ7CiAgICAgICAgdWludDI1NiBhbW91bnQxRGVzaXJlZDsKICAgICAgICB1aW50MjU2IGFtb3VudDBNaW47CiAgICAgICAgdWludDI1NiBhbW91bnQxTWluOwogICAgICAgIHVpbnQyNTYgZGVhZGxpbmU7CiAgICB9CgogICAgZnVuY3Rpb24gaW5jcmVhc2VMaXF1aWRpdHkoSW5jcmVhc2VMaXF1aWRpdHlQYXJhbXMgY2FsbGRhdGEgcGFyYW1zKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcGF5YWJsZQogICAgICAgIHJldHVybnMgKHVpbnQxMjggbGlxdWlkaXR5LCB1aW50MjU2IGFtb3VudDAsIHVpbnQyNTYgYW1vdW50MSk7CgogICAgc3RydWN0IERlY3JlYXNlTGlxdWlkaXR5UGFyYW1zIHsKICAgICAgICB1aW50MjU2IHRva2VuSWQ7CiAgICAgICAgdWludDEyOCBsaXF1aWRpdHk7CiAgICAgICAgdWludDI1NiBhbW91bnQwTWluOwogICAgICAgIHVpbnQyNTYgYW1vdW50MU1pbjsKICAgICAgICB1aW50MjU2IGRlYWRsaW5lOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlY3JlYXNlTGlxdWlkaXR5KERlY3JlYXNlTGlxdWlkaXR5UGFyYW1zIGNhbGxkYXRhIHBhcmFtcykKICAgICAgICBleHRlcm5hbAogICAgICAgIHBheWFibGUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGFtb3VudDAsIHVpbnQyNTYgYW1vdW50MSk7CgogICAgc3RydWN0IENvbGxlY3RQYXJhbXMgewogICAgICAgIHVpbnQyNTYgdG9rZW5JZDsKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudDsKICAgICAgICB1aW50MTI4IGFtb3VudDBNYXg7CiAgICAgICAgdWludDEyOCBhbW91bnQxTWF4OwogICAgfQoKICAgIGZ1bmN0aW9uIGNvbGxlY3QoQ29sbGVjdFBhcmFtcyBjYWxsZGF0YSBwYXJhbXMpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBwYXlhYmxlCiAgICAgICAgcmV0dXJucyAodWludDI1NiBhbW91bnQwLCB1aW50MjU2IGFtb3VudDEpOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKGFkZHJlc3Mgc2VuZGVyLCBhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKfQoKaW50ZXJmYWNlIElXRVRIIGlzIElFUkMyMCB7CiAgICBmdW5jdGlvbiBkZXBvc2l0KCkgZXh0ZXJuYWwgcGF5YWJsZTsKICAgIGZ1bmN0aW9uIHdpdGhkcmF3KHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbDsKfQo=",
  },
  {
    fileName: "UniswapV3LiquidityTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmltcG9ydCB7VGVzdCwgY29uc29sZTJ9IGZyb20gImZvcmdlLXN0ZC9UZXN0LnNvbCI7CmltcG9ydCAiLi4vLi4vLi4vc3JjL2RlZmkvdW5pc3dhcC12My1saXF1aWRpdHkvVW5pc3dhcFYzTGlxdWlkaXR5LnNvbCI7Cgpjb250cmFjdCBVbmlzd2FwVjNMaXF1aWRpdHlUZXN0IGlzIFRlc3QgewogICAgSVdFVEggcHJpdmF0ZSBjb25zdGFudCB3ZXRoID0gSVdFVEgoV0VUSCk7CiAgICBJRVJDMjAgcHJpdmF0ZSBjb25zdGFudCBkYWkgPSBJRVJDMjAoREFJKTsKCiAgICBhZGRyZXNzIHByaXZhdGUgY29uc3RhbnQgREFJX1dIQUxFID0KICAgICAgICAweGU4MUQ2ZjAzMDI4MTA3QTIwREJjODMxNzZEQTgyYUU4MDk5RTlDNDI7CgogICAgVW5pc3dhcFYzTGlxdWlkaXR5IHByaXZhdGUgdW5pID0gbmV3IFVuaXN3YXBWM0xpcXVpZGl0eSgpOwoKICAgIGZ1bmN0aW9uIHNldFVwKCkgcHVibGljIHsKICAgICAgICB2bS5wcmFuayhEQUlfV0hBTEUpOwogICAgICAgIGRhaS50cmFuc2ZlcihhZGRyZXNzKHRoaXMpLCAyMCAqIDFlMTgpOwoKICAgICAgICB3ZXRoLmRlcG9zaXR7dmFsdWU6IDIgKiAxZTE4fSgpOwoKICAgICAgICBkYWkuYXBwcm92ZShhZGRyZXNzKHVuaSksIDIwICogMWUxOCk7CiAgICAgICAgd2V0aC5hcHByb3ZlKGFkZHJlc3ModW5pKSwgMiAqIDFlMTgpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RMaXF1aWRpdHkoKSBwdWJsaWMgewogICAgICAgIC8vIFRyYWNrIHRvdGFsIGxpcXVpZGl0eQogICAgICAgIHVpbnQxMjggbGlxdWlkaXR5OwoKICAgICAgICAvLyBNaW50IG5ldyBwb3NpdGlvbgogICAgICAgIHVpbnQyNTYgZGFpQW1vdW50ID0gMTAgKiAxZTE4OwogICAgICAgIHVpbnQyNTYgd2V0aEFtb3VudCA9IDFlMTg7CgogICAgICAgICgKICAgICAgICAgICAgdWludDI1NiB0b2tlbklkLAogICAgICAgICAgICB1aW50MTI4IGxpcXVpZGl0eURlbHRhLAogICAgICAgICAgICB1aW50MjU2IGFtb3VudDAsCiAgICAgICAgICAgIHVpbnQyNTYgYW1vdW50MQogICAgICAgICkgPSB1bmkubWludE5ld1Bvc2l0aW9uKGRhaUFtb3VudCwgd2V0aEFtb3VudCk7CiAgICAgICAgbGlxdWlkaXR5ICs9IGxpcXVpZGl0eURlbHRhOwoKICAgICAgICBjb25zb2xlMi5sb2coIi0tLSBNaW50IG5ldyBwb3NpdGlvbiAtLS0iKTsKICAgICAgICBjb25zb2xlMi5sb2coInRva2VuIGlkIiwgdG9rZW5JZCk7CiAgICAgICAgY29uc29sZTIubG9nKCJsaXF1aWRpdHkiLCBsaXF1aWRpdHkpOwogICAgICAgIGNvbnNvbGUyLmxvZygiYW1vdW50IDAiLCBhbW91bnQwKTsKICAgICAgICBjb25zb2xlMi5sb2coImFtb3VudCAxIiwgYW1vdW50MSk7CgogICAgICAgIC8vIENvbGxlY3QgZmVlcwogICAgICAgICh1aW50MjU2IGZlZTAsIHVpbnQyNTYgZmVlMSkgPSB1bmkuY29sbGVjdEFsbEZlZXModG9rZW5JZCk7CgogICAgICAgIGNvbnNvbGUyLmxvZygiLS0tIENvbGxlY3QgZmVlcyAtLS0iKTsKICAgICAgICBjb25zb2xlMi5sb2coImZlZSAwIiwgZmVlMCk7CiAgICAgICAgY29uc29sZTIubG9nKCJmZWUgMSIsIGZlZTEpOwoKICAgICAgICAvLyBJbmNyZWFzZSBsaXF1aWRpdHkKICAgICAgICB1aW50MjU2IGRhaUFtb3VudFRvQWRkID0gNSAqIDFlMTg7CiAgICAgICAgdWludDI1NiB3ZXRoQW1vdW50VG9BZGQgPSAwLjUgKiAxZTE4OwoKICAgICAgICAobGlxdWlkaXR5RGVsdGEsIGFtb3VudDAsIGFtb3VudDEpID0gdW5pLmluY3JlYXNlTGlxdWlkaXR5Q3VycmVudFJhbmdlKAogICAgICAgICAgICB0b2tlbklkLCBkYWlBbW91bnRUb0FkZCwgd2V0aEFtb3VudFRvQWRkCiAgICAgICAgKTsKICAgICAgICBsaXF1aWRpdHkgKz0gbGlxdWlkaXR5RGVsdGE7CgogICAgICAgIGNvbnNvbGUyLmxvZygiLS0tIEluY3JlYXNlIGxpcXVpZGl0eSAtLS0iKTsKICAgICAgICBjb25zb2xlMi5sb2coImxpcXVpZGl0eSIsIGxpcXVpZGl0eSk7CiAgICAgICAgY29uc29sZTIubG9nKCJhbW91bnQgMCIsIGFtb3VudDApOwogICAgICAgIGNvbnNvbGUyLmxvZygiYW1vdW50IDEiLCBhbW91bnQxKTsKCiAgICAgICAgLy8gRGVjcmVhc2UgbGlxdWlkaXR5CiAgICAgICAgKGFtb3VudDAsIGFtb3VudDEpID0KICAgICAgICAgICAgdW5pLmRlY3JlYXNlTGlxdWlkaXR5Q3VycmVudFJhbmdlKHRva2VuSWQsIGxpcXVpZGl0eSk7CiAgICAgICAgY29uc29sZTIubG9nKCItLS0gRGVjcmVhc2UgbGlxdWlkaXR5IC0tLSIpOwogICAgICAgIGNvbnNvbGUyLmxvZygiYW1vdW50IDAiLCBhbW91bnQwKTsKICAgICAgICBjb25zb2xlMi5sb2coImFtb3VudCAxIiwgYW1vdW50MSk7CiAgICB9Cn0K",
  },
]

const html = `<p>Examples of minting new position, collect fees, increase and decrease liquidity.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> WETH <span class="hljs-operator">=</span> <span class="hljs-number">0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721Receiver</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onERC721Received</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint256</span> tokenId,
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
        <span class="hljs-keyword">uint256</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span>
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> IERC721Receiver.onERC721Received.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mintNewPosition</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount0ToAdd, <span class="hljs-keyword">uint256</span> amount1ToAdd</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint256</span> tokenId,
            <span class="hljs-keyword">uint128</span> liquidity,
            <span class="hljs-keyword">uint256</span> amount0,
            <span class="hljs-keyword">uint256</span> amount1
        </span>)
    </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount0ToAdd);
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount1ToAdd);

        dai.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount0ToAdd);
        weth.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount1ToAdd);

        INonfungiblePositionManager.MintParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span>
        INonfungiblePositionManager.MintParams({
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

        (tokenId, liquidity, amount0, amount1) <span class="hljs-operator">=</span>
            nonfungiblePositionManager.mint(params);

        <span class="hljs-keyword">if</span> (amount0 <span class="hljs-operator">&lt;</span> amount0ToAdd) {
            dai.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), <span class="hljs-number">0</span>);
            <span class="hljs-keyword">uint256</span> refund0 <span class="hljs-operator">=</span> amount0ToAdd <span class="hljs-operator">-</span> amount0;
            dai.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, refund0);
        }
        <span class="hljs-keyword">if</span> (amount1 <span class="hljs-operator">&lt;</span> amount1ToAdd) {
            weth.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), <span class="hljs-number">0</span>);
            <span class="hljs-keyword">uint256</span> refund1 <span class="hljs-operator">=</span> amount1ToAdd <span class="hljs-operator">-</span> amount1;
            weth.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, refund1);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">collectAllFees</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> tokenId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1</span>)
    </span>{
        INonfungiblePositionManager.CollectParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span>
        INonfungiblePositionManager.CollectParams({
            tokenId: tokenId,
            recipient: <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            amount0Max: <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint128</span>).<span class="hljs-built_in">max</span>,
            amount1Max: <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint128</span>).<span class="hljs-built_in">max</span>
        });

        (amount0, amount1) <span class="hljs-operator">=</span> nonfungiblePositionManager.collect(params);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increaseLiquidityCurrentRange</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span> tokenId,
        <span class="hljs-keyword">uint256</span> amount0ToAdd,
        <span class="hljs-keyword">uint256</span> amount1ToAdd
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint128</span> liquidity, <span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1</span>) </span>{
        dai.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount0ToAdd);
        weth.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount1ToAdd);

        dai.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount0ToAdd);
        weth.approve(<span class="hljs-keyword">address</span>(nonfungiblePositionManager), amount1ToAdd);

        INonfungiblePositionManager.IncreaseLiquidityParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span>
        INonfungiblePositionManager.IncreaseLiquidityParams({
            tokenId: tokenId,
            amount0Desired: amount0ToAdd,
            amount1Desired: amount1ToAdd,
            amount0Min: <span class="hljs-number">0</span>,
            amount1Min: <span class="hljs-number">0</span>,
            deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        });

        (liquidity, amount0, amount1) <span class="hljs-operator">=</span>
            nonfungiblePositionManager.increaseLiquidity(params);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">decreaseLiquidityCurrentRange</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> tokenId, <span class="hljs-keyword">uint128</span> liquidity</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1</span>)
    </span>{
        INonfungiblePositionManager.DecreaseLiquidityParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span>
        INonfungiblePositionManager.DecreaseLiquidityParams({
            tokenId: tokenId,
            liquidity: liquidity,
            amount0Min: <span class="hljs-number">0</span>,
            amount1Min: <span class="hljs-number">0</span>,
            deadline: <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>
        });

        (amount0, amount1) <span class="hljs-operator">=</span>
            nonfungiblePositionManager.decreaseLiquidity(params);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">INonfungiblePositionManager</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">MintParams</span> {
        <span class="hljs-keyword">address</span> token0;
        <span class="hljs-keyword">address</span> token1;
        <span class="hljs-keyword">uint24</span> fee;
        <span class="hljs-keyword">int24</span> tickLower;
        <span class="hljs-keyword">int24</span> tickUpper;
        <span class="hljs-keyword">uint256</span> amount0Desired;
        <span class="hljs-keyword">uint256</span> amount1Desired;
        <span class="hljs-keyword">uint256</span> amount0Min;
        <span class="hljs-keyword">uint256</span> amount1Min;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint256</span> deadline;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params">MintParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">uint256</span> tokenId,
            <span class="hljs-keyword">uint128</span> liquidity,
            <span class="hljs-keyword">uint256</span> amount0,
            <span class="hljs-keyword">uint256</span> amount1
        </span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">IncreaseLiquidityParams</span> {
        <span class="hljs-keyword">uint256</span> tokenId;
        <span class="hljs-keyword">uint256</span> amount0Desired;
        <span class="hljs-keyword">uint256</span> amount1Desired;
        <span class="hljs-keyword">uint256</span> amount0Min;
        <span class="hljs-keyword">uint256</span> amount1Min;
        <span class="hljs-keyword">uint256</span> deadline;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">increaseLiquidity</span>(<span class="hljs-params">IncreaseLiquidityParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint128</span> liquidity, <span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">DecreaseLiquidityParams</span> {
        <span class="hljs-keyword">uint256</span> tokenId;
        <span class="hljs-keyword">uint128</span> liquidity;
        <span class="hljs-keyword">uint256</span> amount0Min;
        <span class="hljs-keyword">uint256</span> amount1Min;
        <span class="hljs-keyword">uint256</span> deadline;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">decreaseLiquidity</span>(<span class="hljs-params">DecreaseLiquidityParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1</span>)</span>;

    <span class="hljs-keyword">struct</span> <span class="hljs-title">CollectParams</span> {
        <span class="hljs-keyword">uint256</span> tokenId;
        <span class="hljs-keyword">address</span> recipient;
        <span class="hljs-keyword">uint128</span> amount0Max;
        <span class="hljs-keyword">uint128</span> amount1Max;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">collect</span>(<span class="hljs-params">CollectParams <span class="hljs-keyword">calldata</span> params</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1</span>)</span>;
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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"../../../src/defi/uniswap-v3-liquidity/UniswapV3Liquidity.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">UniswapV3LiquidityTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IWETH <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> weth <span class="hljs-operator">=</span> IWETH(WETH);
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DAI_WHALE <span class="hljs-operator">=</span>
        <span class="hljs-number">0xe81D6f03028107A20DBc83176DA82aE8099E9C42</span>;

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
        <span class="hljs-keyword">uint256</span> daiAmount <span class="hljs-operator">=</span> <span class="hljs-number">10</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">uint256</span> wethAmount <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;

        (
            <span class="hljs-keyword">uint256</span> tokenId,
            <span class="hljs-keyword">uint128</span> liquidityDelta,
            <span class="hljs-keyword">uint256</span> amount0,
            <span class="hljs-keyword">uint256</span> amount1
        ) <span class="hljs-operator">=</span> uni.mintNewPosition(daiAmount, wethAmount);
        liquidity <span class="hljs-operator">+</span><span class="hljs-operator">=</span> liquidityDelta;

        console2.log(<span class="hljs-string">"--- Mint new position ---"</span>);
        console2.log(<span class="hljs-string">"token id"</span>, tokenId);
        console2.log(<span class="hljs-string">"liquidity"</span>, liquidity);
        console2.log(<span class="hljs-string">"amount 0"</span>, amount0);
        console2.log(<span class="hljs-string">"amount 1"</span>, amount1);

        <span class="hljs-comment">// Collect fees</span>
        (<span class="hljs-keyword">uint256</span> fee0, <span class="hljs-keyword">uint256</span> fee1) <span class="hljs-operator">=</span> uni.collectAllFees(tokenId);

        console2.log(<span class="hljs-string">"--- Collect fees ---"</span>);
        console2.log(<span class="hljs-string">"fee 0"</span>, fee0);
        console2.log(<span class="hljs-string">"fee 1"</span>, fee1);

        <span class="hljs-comment">// Increase liquidity</span>
        <span class="hljs-keyword">uint256</span> daiAmountToAdd <span class="hljs-operator">=</span> <span class="hljs-number">5</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">uint256</span> wethAmountToAdd <span class="hljs-operator">=</span> <span class="hljs-number">0</span><span class="hljs-number">.5</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;

        (liquidityDelta, amount0, amount1) <span class="hljs-operator">=</span> uni.increaseLiquidityCurrentRange(
            tokenId, daiAmountToAdd, wethAmountToAdd
        );
        liquidity <span class="hljs-operator">+</span><span class="hljs-operator">=</span> liquidityDelta;

        console2.log(<span class="hljs-string">"--- Increase liquidity ---"</span>);
        console2.log(<span class="hljs-string">"liquidity"</span>, liquidity);
        console2.log(<span class="hljs-string">"amount 0"</span>, amount0);
        console2.log(<span class="hljs-string">"amount 1"</span>, amount1);

        <span class="hljs-comment">// Decrease liquidity</span>
        (amount0, amount1) <span class="hljs-operator">=</span>
            uni.decreaseLiquidityCurrentRange(tokenId, liquidity);
        console2.log(<span class="hljs-string">"--- Decrease liquidity ---"</span>);
        console2.log(<span class="hljs-string">"amount 0"</span>, amount0);
        console2.log(<span class="hljs-string">"amount 1"</span>, amount1);
    }
}
</code></pre><h3>Links</h3>
<p><a href="https://docs.uniswap.org/protocol/guides/providing-liquidity/setting-up" target="__blank">Uniswap V3</a></p>
<p><a href="https://github.com/foundry-rs/foundry" target="__blank">Foundry</a></p>
<p><a href="https://github.com/t4sk/defi-notes" target="__blank">Uniswap V3 Foundry example</a></p>
`

export default html
