// metadata
export const version = "0.8.24"
export const title = "DAI Proxy Examples"
export const description = "Borrow and repay DAI using DssProxy"

export const keywords = ["defi", "dai", "proxy"]

export const codes = [
  {
    fileName: "DaiProxy.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCmFkZHJlc3MgY29uc3RhbnQgREFJID0gMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGOwphZGRyZXNzIGNvbnN0YW50IFBST1hZX1JFR0lTVFJZID0gMHg0Njc4ZjBhNjk1OGU0RDJCYzRGMUJBRjdCYzUyRThGMzU2NGYzZkU0OwphZGRyZXNzIGNvbnN0YW50IFBST1hZX0FDVElPTlMgPSAweDgyZWNEMTM1RGNlNjVGYmM2RGJkRDBlNDIzN0UwQUY5M0ZGRDUwMzg7CmFkZHJlc3MgY29uc3RhbnQgQ0RQX01BTkFHRVIgPSAweDVlZjMwYjk5ODYzNDUyNDliYzMyZDg5MjhCN2VlNjRERTk0MzVFMzk7CmFkZHJlc3MgY29uc3RhbnQgSlVHID0gMHgxOWMwOTc2ZjU5MEQ2NzcwN0U2MjM5N0M4NzgyOWQ4OTZEYzBmMUYxOwphZGRyZXNzIGNvbnN0YW50IEpPSU5fRVRIX0MgPSAweEYwNGE1Y0M4MEIxRTk0QzY5QjQ4ZjVlZTY4YTA4Q0QyRjA5QTdjM0U7CmFkZHJlc3MgY29uc3RhbnQgSk9JTl9EQUkgPSAweDk3NTlBNkFjOTA5NzdiOTNCNTg1NDdiNEE3MWM3ODMxN2YzOTFBMjg7CgpieXRlczMyIGNvbnN0YW50IEVUSF9DID0KICAgIDB4NDU1NDQ4MmQ0MzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDsKCmNvbnRyYWN0IERhaVByb3h5IHsKICAgIElFUkMyMCBwcml2YXRlIGNvbnN0YW50IGRhaSA9IElFUkMyMChEQUkpOwogICAgYWRkcmVzcyBwdWJsaWMgaW1tdXRhYmxlIHByb3h5OwogICAgdWludDI1NiBwdWJsaWMgaW1tdXRhYmxlIGNkcElkOwoKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICAgIHByb3h5ID0gSURzc1Byb3h5UmVnaXN0cnkoUFJPWFlfUkVHSVNUUlkpLmJ1aWxkKCk7CiAgICAgICAgYnl0ZXMzMiByZXMgPSBJRHNzUHJveHkocHJveHkpLmV4ZWN1dGUoCiAgICAgICAgICAgIFBST1hZX0FDVElPTlMsCiAgICAgICAgICAgIGFiaS5lbmNvZGVDYWxsKElEc3NQcm94eUFjdGlvbnMub3BlbiwgKENEUF9NQU5BR0VSLCBFVEhfQywgcHJveHkpKQogICAgICAgICk7CiAgICAgICAgY2RwSWQgPSB1aW50MjU2KHJlcyk7CiAgICB9CgogICAgcmVjZWl2ZSgpIGV4dGVybmFsIHBheWFibGUge30KCiAgICBmdW5jdGlvbiBsb2NrRXRoKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgSURzc1Byb3h5KHByb3h5KS5leGVjdXRle3ZhbHVlOiBtc2cudmFsdWV9KAogICAgICAgICAgICBQUk9YWV9BQ1RJT05TLAogICAgICAgICAgICBhYmkuZW5jb2RlQ2FsbCgKICAgICAgICAgICAgICAgIElEc3NQcm94eUFjdGlvbnMubG9ja0VUSCwgKENEUF9NQU5BR0VSLCBKT0lOX0VUSF9DLCBjZHBJZCkKICAgICAgICAgICAgKQogICAgICAgICk7CiAgICB9CgogICAgZnVuY3Rpb24gYm9ycm93KHVpbnQyNTYgZGFpQW1vdW50KSBleHRlcm5hbCB7CiAgICAgICAgSURzc1Byb3h5KHByb3h5KS5leGVjdXRlKAogICAgICAgICAgICBQUk9YWV9BQ1RJT05TLAogICAgICAgICAgICBhYmkuZW5jb2RlQ2FsbCgKICAgICAgICAgICAgICAgIElEc3NQcm94eUFjdGlvbnMuZHJhdywKICAgICAgICAgICAgICAgIChDRFBfTUFOQUdFUiwgSlVHLCBKT0lOX0RBSSwgY2RwSWQsIGRhaUFtb3VudCkKICAgICAgICAgICAgKQogICAgICAgICk7CiAgICB9CgogICAgZnVuY3Rpb24gcmVwYXkodWludDI1NiBkYWlBbW91bnQpIGV4dGVybmFsIHsKICAgICAgICBkYWkuYXBwcm92ZShwcm94eSwgZGFpQW1vdW50KTsKICAgICAgICBJRHNzUHJveHkocHJveHkpLmV4ZWN1dGUoCiAgICAgICAgICAgIFBST1hZX0FDVElPTlMsCiAgICAgICAgICAgIGFiaS5lbmNvZGVDYWxsKAogICAgICAgICAgICAgICAgSURzc1Byb3h5QWN0aW9ucy53aXBlLCAoQ0RQX01BTkFHRVIsIEpPSU5fREFJLCBjZHBJZCwgZGFpQW1vdW50KQogICAgICAgICAgICApCiAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiByZXBheUFsbCgpIGV4dGVybmFsIHsKICAgICAgICBkYWkuYXBwcm92ZShwcm94eSwgdHlwZSh1aW50MjU2KS5tYXgpOwogICAgICAgIElEc3NQcm94eShwcm94eSkuZXhlY3V0ZSgKICAgICAgICAgICAgUFJPWFlfQUNUSU9OUywKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoCiAgICAgICAgICAgICAgICBJRHNzUHJveHlBY3Rpb25zLndpcGVBbGwsIChDRFBfTUFOQUdFUiwgSk9JTl9EQUksIGNkcElkKQogICAgICAgICAgICApCiAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiB1bmxvY2tFdGgodWludDI1NiBldGhBbW91bnQpIGV4dGVybmFsIHsKICAgICAgICBJRHNzUHJveHkocHJveHkpLmV4ZWN1dGUoCiAgICAgICAgICAgIFBST1hZX0FDVElPTlMsCiAgICAgICAgICAgIGFiaS5lbmNvZGVDYWxsKAogICAgICAgICAgICAgICAgSURzc1Byb3h5QWN0aW9ucy5mcmVlRVRILAogICAgICAgICAgICAgICAgKENEUF9NQU5BR0VSLCBKT0lOX0VUSF9DLCBjZHBJZCwgZXRoQW1vdW50KQogICAgICAgICAgICApCiAgICAgICAgKTsKICAgIH0KfQoKaW50ZXJmYWNlIElEc3NQcm94eVJlZ2lzdHJ5IHsKICAgIGZ1bmN0aW9uIGJ1aWxkKCkgZXh0ZXJuYWwgcmV0dXJucyAoYWRkcmVzcyBwcm94eSk7Cn0KCmludGVyZmFjZSBJRHNzUHJveHkgewogICAgZnVuY3Rpb24gZXhlY3V0ZShhZGRyZXNzIHRhcmdldCwgYnl0ZXMgbWVtb3J5IGRhdGEpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBwYXlhYmxlCiAgICAgICAgcmV0dXJucyAoYnl0ZXMzMiByZXMpOwp9CgppbnRlcmZhY2UgSURzc1Byb3h5QWN0aW9ucyB7CiAgICBmdW5jdGlvbiBvcGVuKGFkZHJlc3MgY2RwTWFuYWdlciwgYnl0ZXMzMiBpbGssIGFkZHJlc3MgdXNyKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAodWludDI1NiBjZHBJZCk7CiAgICBmdW5jdGlvbiBsb2NrRVRIKGFkZHJlc3MgY2RwTWFuYWdlciwgYWRkcmVzcyBldGhKb2luLCB1aW50MjU2IGNkcElkKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcGF5YWJsZTsKICAgIGZ1bmN0aW9uIGRyYXcoCiAgICAgICAgYWRkcmVzcyBjZHBNYW5hZ2VyLAogICAgICAgIGFkZHJlc3MganVnLAogICAgICAgIGFkZHJlc3MgZGFpSm9pbiwKICAgICAgICB1aW50MjU2IGNkcElkLAogICAgICAgIHVpbnQyNTYgZGFpQW1vdW50CiAgICApIGV4dGVybmFsOwogICAgZnVuY3Rpb24gd2lwZSgKICAgICAgICBhZGRyZXNzIGNkcE1hbmFnZXIsCiAgICAgICAgYWRkcmVzcyBkYWlKb2luLAogICAgICAgIHVpbnQyNTYgY2RwSWQsCiAgICAgICAgdWludDI1NiBkYWlBbW91bnQKICAgICkgZXh0ZXJuYWw7CiAgICBmdW5jdGlvbiB3aXBlQWxsKGFkZHJlc3MgY2RwTWFuYWdlciwgYWRkcmVzcyBkYWlKb2luLCB1aW50MjU2IGNkcElkKQogICAgICAgIGV4dGVybmFsOwogICAgZnVuY3Rpb24gZnJlZUVUSCgKICAgICAgICBhZGRyZXNzIGNkcE1hbmFnZXIsCiAgICAgICAgYWRkcmVzcyBldGhKb2luLAogICAgICAgIHVpbnQyNTYgY2RwSWQsCiAgICAgICAgdWludDI1NiBjb2xsYXRlcmFsQW1vdW50CiAgICApIGV4dGVybmFsOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBhbGxvd2FuY2UoYWRkcmVzcyBvd25lciwgYWRkcmVzcyBzcGVuZGVyKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgZHN0LCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzcmMsIGFkZHJlc3MgZHN0LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwp9Cg==",
  },
  {
    fileName: "DaiProxyTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjI0OwoKaW1wb3J0IHtUZXN0LCBjb25zb2xlMn0gZnJvbSAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICIuLi8uLi8uLi9zcmMvZGVmaS9kYWktcHJveHkvRGFpUHJveHkuc29sIjsKCmFkZHJlc3MgY29uc3RhbnQgVkFUID0gMHgzNUQxYjNGM0Q3OTY2QTFERmUyMDdhYTQ1MTRDMTJhMjU5QTA0OTJCOwoKdWludDI1NiBjb25zdGFudCBXQUQgPSAxZTE4Owp1aW50MjU2IGNvbnN0YW50IFJBWSA9IDFlMjc7CnVpbnQyNTYgY29uc3RhbnQgUkFEID0gMWU0NTsKCnVpbnQyNTYgY29uc3RhbnQgRVRIX0FNT1VOVCA9IDEwMCAqIDFlMTg7CnVpbnQyNTYgY29uc3RhbnQgREFJX0FNT1VOVCA9IDEwMDAwICogMWUxODsKCmNvbnRyYWN0IERhaVByb3h5VGVzdCBpcyBUZXN0IHsKICAgIElFUkMyMCBwcml2YXRlIGNvbnN0YW50IGRhaSA9IElFUkMyMChEQUkpOwogICAgSUNkcE1hbmFnZXIgcHJpdmF0ZSBjb25zdGFudCBjZHBNYW5hZ2VyID0gSUNkcE1hbmFnZXIoQ0RQX01BTkFHRVIpOwogICAgSVZhdCBwcml2YXRlIGNvbnN0YW50IHZhdCA9IElWYXQoVkFUKTsKICAgIERhaVByb3h5IHByaXZhdGUgcHJveHk7CgogICAgZnVuY3Rpb24gc2V0VXAoKSBwdWJsaWMgewogICAgICAgIHByb3h5ID0gbmV3IERhaVByb3h5KCk7CgogICAgICAgIC8vIENoZWNrIG1pbiBib3Jyb3cKICAgICAgICBJVmF0LklsayBtZW1vcnkgaWxrID0gdmF0Lmlsa3MoRVRIX0MpOwogICAgICAgIGFzc2VydEdlKERBSV9BTU9VTlQgKiBSQVksIGlsay5kdXN0LCAiREFJIGJvcnJvdyBhbW91bnQgPCBkdXN0Iik7CgogICAgICAgIC8vIEludGVyZXN0IHJhdGUgYWNjdW11bGF0b3IKICAgICAgICBjb25zb2xlMi5sb2coImlsay5yYXRlIiwgaWxrLnJhdGUpOwogICAgfQoKICAgIGZ1bmN0aW9uIHByaW50KGFkZHJlc3MgdXJuQWRkcikgcHJpdmF0ZSB7CiAgICAgICAgSVZhdC5Vcm4gbWVtb3J5IHVybiA9IHZhdC51cm5zKEVUSF9DLCB1cm5BZGRyKTsKICAgICAgICBjb25zb2xlMi5sb2coIi0tLS0tLS0tLS0tLS0tLS0tLS0tIik7CiAgICAgICAgY29uc29sZTIubG9nKCJ2YXVsdCBjb2xsYXRlcmFsIFt3YWRdIiwgdXJuLmluayk7CiAgICAgICAgY29uc29sZTIubG9nKCJ2YXVsdCBkZWJ0ICAgICAgIFt3YWRdIiwgdXJuLmFydCk7CiAgICAgICAgY29uc29sZTIubG9nKCJEQUkgaW4gcHJveHkgICAgIFt3YWRdIiwgZGFpLmJhbGFuY2VPZihhZGRyZXNzKHByb3h5KSkpOwogICAgICAgIGNvbnNvbGUyLmxvZygiRVRIIGluIHByb3h5ICAgICBbd2FkXSIsIGFkZHJlc3MocHJveHkpLmJhbGFuY2UpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RfcHJveHkoKSBwdWJsaWMgewogICAgICAgIHVpbnQyNTYgY2RwSWQgPSBwcm94eS5jZHBJZCgpOwogICAgICAgIGFkZHJlc3MgdXJuQWRkciA9IGNkcE1hbmFnZXIudXJucyhjZHBJZCk7CgogICAgICAgIGNvbnNvbGUyLmxvZygiQmVmb3JlIGxvY2sgRVRIIik7CiAgICAgICAgcHJpbnQodXJuQWRkcik7CgogICAgICAgIHByb3h5LmxvY2tFdGh7dmFsdWU6IEVUSF9BTU9VTlR9KCk7CiAgICAgICAgY29uc29sZTIubG9nKCIiKTsKICAgICAgICBjb25zb2xlMi5sb2coIkFmdGVyIGxvY2sgRVRIIik7CiAgICAgICAgcHJpbnQodXJuQWRkcik7CgogICAgICAgIHByb3h5LmJvcnJvdyhEQUlfQU1PVU5UKTsKICAgICAgICBjb25zb2xlMi5sb2coIiIpOwogICAgICAgIGNvbnNvbGUyLmxvZygiQWZ0ZXIgYm9ycm93IERBSSIpOwogICAgICAgIHByaW50KHVybkFkZHIpOwoKICAgICAgICBwcm94eS5yZXBheShEQUlfQU1PVU5UIC8gMik7CiAgICAgICAgY29uc29sZTIubG9nKCIiKTsKICAgICAgICBjb25zb2xlMi5sb2coIkFmdGVyIHBhcnRpYWwgcmVwYXkgREFJIik7CiAgICAgICAgcHJpbnQodXJuQWRkcik7CgogICAgICAgIHByb3h5LnJlcGF5QWxsKCk7CiAgICAgICAgY29uc29sZTIubG9nKCIiKTsKICAgICAgICBjb25zb2xlMi5sb2coIkFmdGVyIHJlcGF5IGFsbCBEQUkiKTsKICAgICAgICBwcmludCh1cm5BZGRyKTsKCiAgICAgICAgcHJveHkudW5sb2NrRXRoKEVUSF9BTU9VTlQpOwogICAgICAgIGNvbnNvbGUyLmxvZygiIik7CiAgICAgICAgY29uc29sZTIubG9nKCJBZnRlciB1bmxvY2sgRVRIIik7CiAgICAgICAgcHJpbnQodXJuQWRkcik7CiAgICB9Cn0KCmludGVyZmFjZSBJVmF0IHsKICAgIC8vIENvbGxhdGVyYWwgdHlwZQogICAgc3RydWN0IElsayB7CiAgICAgICAgdWludDI1NiBBcnQ7IC8vIFRvdGFsIG5vcm1hbGl6ZWQgZGVidCAgICAgIFt3YWRdCiAgICAgICAgdWludDI1NiByYXRlOyAvLyBBY2N1bXVsYXRlZCByYXRlcyAgICAgICAgIFtyYXldCiAgICAgICAgdWludDI1NiBzcG90OyAvLyBQcmljZSB3aXRoIHNhZmV0eSBtYXJnaW4gIFtyYXldCiAgICAgICAgdWludDI1NiBsaW5lOyAvLyBEZWJ0IGNlaWxpbmcgICAgICAgICAgICAgIFtyYWRdCiAgICAgICAgdWludDI1NiBkdXN0OyAvLyBVcm4gZGVidCBmbG9vciAgICAgICAgICAgIFtyYWRdCiAgICB9CgogICAgLy8gVmF1bHQKICAgIHN0cnVjdCBVcm4gewogICAgICAgIHVpbnQyNTYgaW5rOyAvLyBMb2NrZWQgY29sbGF0ZXJhbCAgW3dhZF0KICAgICAgICB1aW50MjU2IGFydDsgLy8gTm9ybWFsaXNlZCBkZWJ0ICAgIFt3YWRdCiAgICB9CgogICAgZnVuY3Rpb24gaWxrcyhieXRlczMyIGlsaykgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChJbGsgbWVtb3J5KTsKICAgIGZ1bmN0aW9uIHVybnMoYnl0ZXMzMiBpbGssIGFkZHJlc3MgdXNlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChVcm4gbWVtb3J5KTsKfQoKaW50ZXJmYWNlIElDZHBNYW5hZ2VyIHsKICAgIGZ1bmN0aW9uIHVybnModWludDI1NiBjZHBJZCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzIHVybik7Cn0K",
  },
]

const html = `<h3>Example</h3>
<p>Example of locking ETH collateral, borrowing DAI, repaying DAI and unlocking ETH using <code>DssProxy</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.24;</span>

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x6B175474E89094C44Da98b954EedeAC495271d0F</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> PROXY_REGISTRY <span class="hljs-operator">=</span> <span class="hljs-number">0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> PROXY_ACTIONS <span class="hljs-operator">=</span> <span class="hljs-number">0x82ecD135Dce65Fbc6DbdD0e4237E0AF93FFD5038</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> CDP_MANAGER <span class="hljs-operator">=</span> <span class="hljs-number">0x5ef30b9986345249bc32d8928B7ee64DE9435E39</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> JUG <span class="hljs-operator">=</span> <span class="hljs-number">0x19c0976f590D67707E62397C87829d896Dc0f1F1</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> JOIN_ETH_C <span class="hljs-operator">=</span> <span class="hljs-number">0xF04a5cC80B1E94C69B48f5ee68a08CD2F09A7c3E</span>;
<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> JOIN_DAI <span class="hljs-operator">=</span> <span class="hljs-number">0x9759A6Ac90977b93B58547b4A71c78317f391A28</span>;

<span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">constant</span> ETH_C <span class="hljs-operator">=</span>
    <span class="hljs-number">0x4554482d43000000000000000000000000000000000000000000000000000000</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">DaiProxy</span> </span>{
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> proxy;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> cdpId;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        proxy <span class="hljs-operator">=</span> IDssProxyRegistry(PROXY_REGISTRY).build();
        <span class="hljs-keyword">bytes32</span> res <span class="hljs-operator">=</span> IDssProxy(proxy).execute(
            PROXY_ACTIONS,
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(IDssProxyActions.open, (CDP_MANAGER, ETH_C, proxy))
        );
        cdpId <span class="hljs-operator">=</span> <span class="hljs-keyword">uint256</span>(res);
    }

    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">lockEth</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        IDssProxy(proxy).execute{<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(
            PROXY_ACTIONS,
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(
                IDssProxyActions.lockETH, (CDP_MANAGER, JOIN_ETH_C, cdpId)
            )
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">borrow</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> daiAmount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        IDssProxy(proxy).execute(
            PROXY_ACTIONS,
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(
                IDssProxyActions.draw,
                (CDP_MANAGER, JUG, JOIN_DAI, cdpId, daiAmount)
            )
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">repay</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> daiAmount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        dai.approve(proxy, daiAmount);
        IDssProxy(proxy).execute(
            PROXY_ACTIONS,
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(
                IDssProxyActions.wipe, (CDP_MANAGER, JOIN_DAI, cdpId, daiAmount)
            )
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">repayAll</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        dai.approve(proxy, <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>);
        IDssProxy(proxy).execute(
            PROXY_ACTIONS,
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(
                IDssProxyActions.wipeAll, (CDP_MANAGER, JOIN_DAI, cdpId)
            )
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unlockEth</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> ethAmount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        IDssProxy(proxy).execute(
            PROXY_ACTIONS,
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(
                IDssProxyActions.freeETH,
                (CDP_MANAGER, JOIN_ETH_C, cdpId, ethAmount)
            )
        );
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IDssProxyRegistry</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">build</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> proxy</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IDssProxy</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">execute</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> target, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span> res</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IDssProxyActions</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">open</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> cdpManager, <span class="hljs-keyword">bytes32</span> ilk, <span class="hljs-keyword">address</span> usr</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> cdpId</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">lockETH</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> cdpManager, <span class="hljs-keyword">address</span> ethJoin, <span class="hljs-keyword">uint256</span> cdpId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">draw</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> cdpManager,
        <span class="hljs-keyword">address</span> jug,
        <span class="hljs-keyword">address</span> daiJoin,
        <span class="hljs-keyword">uint256</span> cdpId,
        <span class="hljs-keyword">uint256</span> daiAmount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">wipe</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> cdpManager,
        <span class="hljs-keyword">address</span> daiJoin,
        <span class="hljs-keyword">uint256</span> cdpId,
        <span class="hljs-keyword">uint256</span> daiAmount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">wipeAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> cdpManager, <span class="hljs-keyword">address</span> daiJoin, <span class="hljs-keyword">uint256</span> cdpId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">freeETH</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> cdpManager,
        <span class="hljs-keyword">address</span> ethJoin,
        <span class="hljs-keyword">uint256</span> cdpId,
        <span class="hljs-keyword">uint256</span> collateralAmount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> dst, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> src, <span class="hljs-keyword">address</span> dst, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}
</code></pre><h3>Test</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.24;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"../../../src/defi/dai-proxy/DaiProxy.sol"</span>;

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> VAT <span class="hljs-operator">=</span> <span class="hljs-number">0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B</span>;

<span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> WAD <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
<span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> RAY <span class="hljs-operator">=</span> <span class="hljs-number">1e27</span>;
<span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> RAD <span class="hljs-operator">=</span> <span class="hljs-number">1e45</span>;

<span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> ETH_AMOUNT <span class="hljs-operator">=</span> <span class="hljs-number">100</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
<span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> DAI_AMOUNT <span class="hljs-operator">=</span> <span class="hljs-number">10000</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">DaiProxyTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span> </span>{
    IERC20 <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> dai <span class="hljs-operator">=</span> IERC20(DAI);
    ICdpManager <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> cdpManager <span class="hljs-operator">=</span> ICdpManager(CDP_MANAGER);
    IVat <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> vat <span class="hljs-operator">=</span> IVat(VAT);
    DaiProxy <span class="hljs-keyword">private</span> proxy;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        proxy <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> DaiProxy();

        <span class="hljs-comment">// Check min borrow</span>
        IVat.Ilk <span class="hljs-keyword">memory</span> ilk <span class="hljs-operator">=</span> vat.ilks(ETH_C);
        assertGe(DAI_AMOUNT <span class="hljs-operator">*</span> RAY, ilk.dust, <span class="hljs-string">"DAI borrow amount &lt; dust"</span>);

        <span class="hljs-comment">// Interest rate accumulator</span>
        console2.log(<span class="hljs-string">"ilk.rate"</span>, ilk.rate);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">print</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> urnAddr</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        IVat.Urn <span class="hljs-keyword">memory</span> urn <span class="hljs-operator">=</span> vat.urns(ETH_C, urnAddr);
        console2.log(<span class="hljs-string">"--------------------"</span>);
        console2.log(<span class="hljs-string">"vault collateral [wad]"</span>, urn.ink);
        console2.log(<span class="hljs-string">"vault debt       [wad]"</span>, urn.art);
        console2.log(<span class="hljs-string">"DAI in proxy     [wad]"</span>, dai.balanceOf(<span class="hljs-keyword">address</span>(proxy)));
        console2.log(<span class="hljs-string">"ETH in proxy     [wad]"</span>, <span class="hljs-keyword">address</span>(proxy).<span class="hljs-built_in">balance</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test_proxy</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint256</span> cdpId <span class="hljs-operator">=</span> proxy.cdpId();
        <span class="hljs-keyword">address</span> urnAddr <span class="hljs-operator">=</span> cdpManager.urns(cdpId);

        console2.log(<span class="hljs-string">"Before lock ETH"</span>);
        print(urnAddr);

        proxy.lockEth{<span class="hljs-built_in">value</span>: ETH_AMOUNT}();
        console2.log(<span class="hljs-string">""</span>);
        console2.log(<span class="hljs-string">"After lock ETH"</span>);
        print(urnAddr);

        proxy.borrow(DAI_AMOUNT);
        console2.log(<span class="hljs-string">""</span>);
        console2.log(<span class="hljs-string">"After borrow DAI"</span>);
        print(urnAddr);

        proxy.repay(DAI_AMOUNT <span class="hljs-operator">/</span> <span class="hljs-number">2</span>);
        console2.log(<span class="hljs-string">""</span>);
        console2.log(<span class="hljs-string">"After partial repay DAI"</span>);
        print(urnAddr);

        proxy.repayAll();
        console2.log(<span class="hljs-string">""</span>);
        console2.log(<span class="hljs-string">"After repay all DAI"</span>);
        print(urnAddr);

        proxy.unlockEth(ETH_AMOUNT);
        console2.log(<span class="hljs-string">""</span>);
        console2.log(<span class="hljs-string">"After unlock ETH"</span>);
        print(urnAddr);
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IVat</span> </span>{
    <span class="hljs-comment">// Collateral type</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Ilk</span> {
        <span class="hljs-keyword">uint256</span> Art; <span class="hljs-comment">// Total normalized debt      [wad]</span>
        <span class="hljs-keyword">uint256</span> rate; <span class="hljs-comment">// Accumulated rates         [ray]</span>
        <span class="hljs-keyword">uint256</span> spot; <span class="hljs-comment">// Price with safety margin  [ray]</span>
        <span class="hljs-keyword">uint256</span> line; <span class="hljs-comment">// Debt ceiling              [rad]</span>
        <span class="hljs-keyword">uint256</span> dust; <span class="hljs-comment">// Urn debt floor            [rad]</span>
    }

    <span class="hljs-comment">// Vault</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Urn</span> {
        <span class="hljs-keyword">uint256</span> ink; <span class="hljs-comment">// Locked collateral  [wad]</span>
        <span class="hljs-keyword">uint256</span> art; <span class="hljs-comment">// Normalised debt    [wad]</span>
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ilks</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> ilk</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Ilk <span class="hljs-keyword">memory</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">urns</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> ilk, <span class="hljs-keyword">address</span> user</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Urn <span class="hljs-keyword">memory</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">ICdpManager</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">urns</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> cdpId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> urn</span>)</span>;
}
</code></pre>`

export default html
