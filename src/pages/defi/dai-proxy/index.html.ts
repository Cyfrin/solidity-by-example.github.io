// metadata
export const version = "0.8.20"
export const title = "DAI Proxy Examples"
export const description = "Borrow and repay DAI using DssProxy"

export const keywords = ["defi", "dai", "proxy"]

export const codes = [
  {
    fileName: "DaiProxy.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjIwOwoKYWRkcmVzcyBjb25zdGFudCBEQUkgPSAweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEY7CmFkZHJlc3MgY29uc3RhbnQgUFJPWFlfUkVHSVNUUlkgPSAweDQ2NzhmMGE2OTU4ZTREMkJjNEYxQkFGN0JjNTJFOEYzNTY0ZjNmRTQ7CmFkZHJlc3MgY29uc3RhbnQgUFJPWFlfQUNUSU9OUyA9IDB4ODJlY0QxMzVEY2U2NUZiYzZEYmREMGU0MjM3RTBBRjkzRkZENTAzODsKYWRkcmVzcyBjb25zdGFudCBDRFBfTUFOQUdFUiA9IDB4NWVmMzBiOTk4NjM0NTI0OWJjMzJkODkyOEI3ZWU2NERFOTQzNUUzOTsKYWRkcmVzcyBjb25zdGFudCBKVUcgPSAweDE5YzA5NzZmNTkwRDY3NzA3RTYyMzk3Qzg3ODI5ZDg5NkRjMGYxRjE7CmFkZHJlc3MgY29uc3RhbnQgSk9JTl9FVEhfQyA9IDB4RjA0YTVjQzgwQjFFOTRDNjlCNDhmNWVlNjhhMDhDRDJGMDlBN2MzRTsKYWRkcmVzcyBjb25zdGFudCBKT0lOX0RBSSA9IDB4OTc1OUE2QWM5MDk3N2I5M0I1ODU0N2I0QTcxYzc4MzE3ZjM5MUEyODsKCmJ5dGVzMzIgY29uc3RhbnQgRVRIX0MgPQogICAgMHg0NTU0NDgyZDQzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOwoKY29udHJhY3QgRGFpUHJveHkgewogICAgSUVSQzIwIHByaXZhdGUgY29uc3RhbnQgZGFpID0gSUVSQzIwKERBSSk7CiAgICBhZGRyZXNzIHB1YmxpYyBpbW11dGFibGUgcHJveHk7CiAgICB1aW50MjU2IHB1YmxpYyBpbW11dGFibGUgY2RwSWQ7CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgcHJveHkgPSBJRHNzUHJveHlSZWdpc3RyeShQUk9YWV9SRUdJU1RSWSkuYnVpbGQoKTsKICAgICAgICBieXRlczMyIHJlcyA9IElEc3NQcm94eShwcm94eSkuZXhlY3V0ZSgKICAgICAgICAgICAgUFJPWFlfQUNUSU9OUywKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoSURzc1Byb3h5QWN0aW9ucy5vcGVuLCAoQ0RQX01BTkFHRVIsIEVUSF9DLCBwcm94eSkpCiAgICAgICAgKTsKICAgICAgICBjZHBJZCA9IHVpbnQyNTYocmVzKTsKICAgIH0KCiAgICByZWNlaXZlKCkgZXh0ZXJuYWwgcGF5YWJsZSB7fQoKICAgIGZ1bmN0aW9uIGxvY2tFdGgoKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBJRHNzUHJveHkocHJveHkpLmV4ZWN1dGV7dmFsdWU6IG1zZy52YWx1ZX0oCiAgICAgICAgICAgIFBST1hZX0FDVElPTlMsCiAgICAgICAgICAgIGFiaS5lbmNvZGVDYWxsKAogICAgICAgICAgICAgICAgSURzc1Byb3h5QWN0aW9ucy5sb2NrRVRILCAoQ0RQX01BTkFHRVIsIEpPSU5fRVRIX0MsIGNkcElkKQogICAgICAgICAgICApCiAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiBib3Jyb3codWludDI1NiBkYWlBbW91bnQpIGV4dGVybmFsIHsKICAgICAgICBJRHNzUHJveHkocHJveHkpLmV4ZWN1dGUoCiAgICAgICAgICAgIFBST1hZX0FDVElPTlMsCiAgICAgICAgICAgIGFiaS5lbmNvZGVDYWxsKAogICAgICAgICAgICAgICAgSURzc1Byb3h5QWN0aW9ucy5kcmF3LAogICAgICAgICAgICAgICAgKENEUF9NQU5BR0VSLCBKVUcsIEpPSU5fREFJLCBjZHBJZCwgZGFpQW1vdW50KQogICAgICAgICAgICApCiAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiByZXBheSh1aW50MjU2IGRhaUFtb3VudCkgZXh0ZXJuYWwgewogICAgICAgIGRhaS5hcHByb3ZlKHByb3h5LCBkYWlBbW91bnQpOwogICAgICAgIElEc3NQcm94eShwcm94eSkuZXhlY3V0ZSgKICAgICAgICAgICAgUFJPWFlfQUNUSU9OUywKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoCiAgICAgICAgICAgICAgICBJRHNzUHJveHlBY3Rpb25zLndpcGUsIChDRFBfTUFOQUdFUiwgSk9JTl9EQUksIGNkcElkLCBkYWlBbW91bnQpCiAgICAgICAgICAgICkKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlcGF5QWxsKCkgZXh0ZXJuYWwgewogICAgICAgIGRhaS5hcHByb3ZlKHByb3h5LCB0eXBlKHVpbnQyNTYpLm1heCk7CiAgICAgICAgSURzc1Byb3h5KHByb3h5KS5leGVjdXRlKAogICAgICAgICAgICBQUk9YWV9BQ1RJT05TLAogICAgICAgICAgICBhYmkuZW5jb2RlQ2FsbCgKICAgICAgICAgICAgICAgIElEc3NQcm94eUFjdGlvbnMud2lwZUFsbCwgKENEUF9NQU5BR0VSLCBKT0lOX0RBSSwgY2RwSWQpCiAgICAgICAgICAgICkKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIHVubG9ja0V0aCh1aW50MjU2IGV0aEFtb3VudCkgZXh0ZXJuYWwgewogICAgICAgIElEc3NQcm94eShwcm94eSkuZXhlY3V0ZSgKICAgICAgICAgICAgUFJPWFlfQUNUSU9OUywKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoCiAgICAgICAgICAgICAgICBJRHNzUHJveHlBY3Rpb25zLmZyZWVFVEgsCiAgICAgICAgICAgICAgICAoQ0RQX01BTkFHRVIsIEpPSU5fRVRIX0MsIGNkcElkLCBldGhBbW91bnQpCiAgICAgICAgICAgICkKICAgICAgICApOwogICAgfQp9CgppbnRlcmZhY2UgSURzc1Byb3h5UmVnaXN0cnkgewogICAgZnVuY3Rpb24gYnVpbGQoKSBleHRlcm5hbCByZXR1cm5zIChhZGRyZXNzIHByb3h5KTsKfQoKaW50ZXJmYWNlIElEc3NQcm94eSB7CiAgICBmdW5jdGlvbiBleGVjdXRlKGFkZHJlc3MgdGFyZ2V0LCBieXRlcyBtZW1vcnkgZGF0YSkKICAgICAgICBleHRlcm5hbAogICAgICAgIHBheWFibGUKICAgICAgICByZXR1cm5zIChieXRlczMyIHJlcyk7Cn0KCmludGVyZmFjZSBJRHNzUHJveHlBY3Rpb25zIHsKICAgIGZ1bmN0aW9uIG9wZW4oYWRkcmVzcyBjZHBNYW5hZ2VyLCBieXRlczMyIGlsaywgYWRkcmVzcyB1c3IpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zICh1aW50MjU2IGNkcElkKTsKICAgIGZ1bmN0aW9uIGxvY2tFVEgoYWRkcmVzcyBjZHBNYW5hZ2VyLCBhZGRyZXNzIGV0aEpvaW4sIHVpbnQyNTYgY2RwSWQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBwYXlhYmxlOwogICAgZnVuY3Rpb24gZHJhdygKICAgICAgICBhZGRyZXNzIGNkcE1hbmFnZXIsCiAgICAgICAgYWRkcmVzcyBqdWcsCiAgICAgICAgYWRkcmVzcyBkYWlKb2luLAogICAgICAgIHVpbnQyNTYgY2RwSWQsCiAgICAgICAgdWludDI1NiBkYWlBbW91bnQKICAgICkgZXh0ZXJuYWw7CiAgICBmdW5jdGlvbiB3aXBlKAogICAgICAgIGFkZHJlc3MgY2RwTWFuYWdlciwKICAgICAgICBhZGRyZXNzIGRhaUpvaW4sCiAgICAgICAgdWludDI1NiBjZHBJZCwKICAgICAgICB1aW50MjU2IGRhaUFtb3VudAogICAgKSBleHRlcm5hbDsKICAgIGZ1bmN0aW9uIHdpcGVBbGwoYWRkcmVzcyBjZHBNYW5hZ2VyLCBhZGRyZXNzIGRhaUpvaW4sIHVpbnQyNTYgY2RwSWQpCiAgICAgICAgZXh0ZXJuYWw7CiAgICBmdW5jdGlvbiBmcmVlRVRIKAogICAgICAgIGFkZHJlc3MgY2RwTWFuYWdlciwKICAgICAgICBhZGRyZXNzIGV0aEpvaW4sCiAgICAgICAgdWludDI1NiBjZHBJZCwKICAgICAgICB1aW50MjU2IGNvbGxhdGVyYWxBbW91bnQKICAgICkgZXh0ZXJuYWw7Cn0KCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyBkc3QsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIHNyYywgYWRkcmVzcyBkc3QsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAoYm9vbCk7Cn0K",
  },
  {
    fileName: "DaiProxyTest.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgMC44LjIwOwoKaW1wb3J0IHtUZXN0LCBjb25zb2xlMn0gZnJvbSAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0ICIuLi8uLi8uLi9zcmMvZGVmaS9kYWktcHJveHkvRGFpUHJveHkuc29sIjsKCmFkZHJlc3MgY29uc3RhbnQgVkFUID0gMHgzNUQxYjNGM0Q3OTY2QTFERmUyMDdhYTQ1MTRDMTJhMjU5QTA0OTJCOwoKdWludDI1NiBjb25zdGFudCBXQUQgPSAxZTE4Owp1aW50MjU2IGNvbnN0YW50IFJBWSA9IDFlMjc7CnVpbnQyNTYgY29uc3RhbnQgUkFEID0gMWU0NTsKCnVpbnQyNTYgY29uc3RhbnQgRVRIX0FNT1VOVCA9IDEwMCAqIDFlMTg7CnVpbnQyNTYgY29uc3RhbnQgREFJX0FNT1VOVCA9IDEwMDAwICogMWUxODsKCi8vIGZvcmdlIHRlc3QgLS1mb3JrLXVybCAkRk9SS19VUkwgLS1tYXRjaC1wYXRoIHRlc3QvZGFpL0RhaVByb3h5LnRlc3Quc29sIC12dnYKY29udHJhY3QgRGFpUHJveHlUZXN0IGlzIFRlc3QgewogICAgSUVSQzIwIHByaXZhdGUgY29uc3RhbnQgZGFpID0gSUVSQzIwKERBSSk7CiAgICBJQ2RwTWFuYWdlciBwcml2YXRlIGNvbnN0YW50IGNkcE1hbmFnZXIgPSBJQ2RwTWFuYWdlcihDRFBfTUFOQUdFUik7CiAgICBJVmF0IHByaXZhdGUgY29uc3RhbnQgdmF0ID0gSVZhdChWQVQpOwogICAgRGFpUHJveHkgcHJpdmF0ZSBwcm94eTsKCiAgICBmdW5jdGlvbiBzZXRVcCgpIHB1YmxpYyB7CiAgICAgICAgcHJveHkgPSBuZXcgRGFpUHJveHkoKTsKCiAgICAgICAgLy8gQ2hlY2sgbWluIGJvcnJvdwogICAgICAgIElWYXQuSWxrIG1lbW9yeSBpbGsgPSB2YXQuaWxrcyhFVEhfQyk7CiAgICAgICAgYXNzZXJ0R2UoREFJX0FNT1VOVCAqIFJBWSwgaWxrLmR1c3QsICJEQUkgYm9ycm93IGFtb3VudCA8IGR1c3QiKTsKCiAgICAgICAgLy8gSW50ZXJlc3QgcmF0ZSBhY2N1bXVsYXRvcgogICAgICAgIGNvbnNvbGUyLmxvZygiaWxrLnJhdGUiLCBpbGsucmF0ZSk7CiAgICB9CgogICAgZnVuY3Rpb24gcHJpbnQoYWRkcmVzcyB1cm5BZGRyKSBwcml2YXRlIHsKICAgICAgICBJVmF0LlVybiBtZW1vcnkgdXJuID0gdmF0LnVybnMoRVRIX0MsIHVybkFkZHIpOwogICAgICAgIGNvbnNvbGUyLmxvZygiLS0tLS0tLS0tLS0tLS0tLS0tLS0iKTsKICAgICAgICBjb25zb2xlMi5sb2coInZhdWx0IGNvbGxhdGVyYWwgW3dhZF0iLCB1cm4uaW5rKTsKICAgICAgICBjb25zb2xlMi5sb2coInZhdWx0IGRlYnQgICAgICAgW3dhZF0iLCB1cm4uYXJ0KTsKICAgICAgICBjb25zb2xlMi5sb2coIkRBSSBpbiBwcm94eSAgICAgW3dhZF0iLCBkYWkuYmFsYW5jZU9mKGFkZHJlc3MocHJveHkpKSk7CiAgICAgICAgY29uc29sZTIubG9nKCJFVEggaW4gcHJveHkgICAgIFt3YWRdIiwgYWRkcmVzcyhwcm94eSkuYmFsYW5jZSk7CiAgICB9CgogICAgZnVuY3Rpb24gdGVzdF9wcm94eSgpIHB1YmxpYyB7CiAgICAgICAgdWludDI1NiBjZHBJZCA9IHByb3h5LmNkcElkKCk7CiAgICAgICAgYWRkcmVzcyB1cm5BZGRyID0gY2RwTWFuYWdlci51cm5zKGNkcElkKTsKCiAgICAgICAgY29uc29sZTIubG9nKCJCZWZvcmUgbG9jayBFVEgiKTsKICAgICAgICBwcmludCh1cm5BZGRyKTsKCiAgICAgICAgcHJveHkubG9ja0V0aHt2YWx1ZTogRVRIX0FNT1VOVH0oKTsKICAgICAgICBjb25zb2xlMi5sb2coIiIpOwogICAgICAgIGNvbnNvbGUyLmxvZygiQWZ0ZXIgbG9jayBFVEgiKTsKICAgICAgICBwcmludCh1cm5BZGRyKTsKCiAgICAgICAgcHJveHkuYm9ycm93KERBSV9BTU9VTlQpOwogICAgICAgIGNvbnNvbGUyLmxvZygiIik7CiAgICAgICAgY29uc29sZTIubG9nKCJBZnRlciBib3Jyb3cgREFJIik7CiAgICAgICAgcHJpbnQodXJuQWRkcik7CgogICAgICAgIHByb3h5LnJlcGF5KERBSV9BTU9VTlQgLyAyKTsKICAgICAgICBjb25zb2xlMi5sb2coIiIpOwogICAgICAgIGNvbnNvbGUyLmxvZygiQWZ0ZXIgcGFydGlhbCByZXBheSBEQUkiKTsKICAgICAgICBwcmludCh1cm5BZGRyKTsKCiAgICAgICAgcHJveHkucmVwYXlBbGwoKTsKICAgICAgICBjb25zb2xlMi5sb2coIiIpOwogICAgICAgIGNvbnNvbGUyLmxvZygiQWZ0ZXIgcmVwYXkgYWxsIERBSSIpOwogICAgICAgIHByaW50KHVybkFkZHIpOwoKICAgICAgICBwcm94eS51bmxvY2tFdGgoRVRIX0FNT1VOVCk7CiAgICAgICAgY29uc29sZTIubG9nKCIiKTsKICAgICAgICBjb25zb2xlMi5sb2coIkFmdGVyIHVubG9jayBFVEgiKTsKICAgICAgICBwcmludCh1cm5BZGRyKTsKICAgIH0KfQoKaW50ZXJmYWNlIElWYXQgewogICAgLy8gQ29sbGF0ZXJhbCB0eXBlCiAgICBzdHJ1Y3QgSWxrIHsKICAgICAgICB1aW50MjU2IEFydDsgLy8gVG90YWwgbm9ybWFsaXplZCBkZWJ0ICAgICAgW3dhZF0KICAgICAgICB1aW50MjU2IHJhdGU7IC8vIEFjY3VtdWxhdGVkIHJhdGVzICAgICAgICAgW3JheV0KICAgICAgICB1aW50MjU2IHNwb3Q7IC8vIFByaWNlIHdpdGggc2FmZXR5IG1hcmdpbiAgW3JheV0KICAgICAgICB1aW50MjU2IGxpbmU7IC8vIERlYnQgY2VpbGluZyAgICAgICAgICAgICAgW3JhZF0KICAgICAgICB1aW50MjU2IGR1c3Q7IC8vIFVybiBkZWJ0IGZsb29yICAgICAgICAgICAgW3JhZF0KICAgIH0KCiAgICAvLyBWYXVsdAogICAgc3RydWN0IFVybiB7CiAgICAgICAgdWludDI1NiBpbms7IC8vIExvY2tlZCBjb2xsYXRlcmFsICBbd2FkXQogICAgICAgIHVpbnQyNTYgYXJ0OyAvLyBOb3JtYWxpc2VkIGRlYnQgICAgW3dhZF0KICAgIH0KCiAgICBmdW5jdGlvbiBpbGtzKGJ5dGVzMzIgaWxrKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKElsayBtZW1vcnkpOwogICAgZnVuY3Rpb24gdXJucyhieXRlczMyIGlsaywgYWRkcmVzcyB1c2VyKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKFVybiBtZW1vcnkpOwp9CgppbnRlcmZhY2UgSUNkcE1hbmFnZXIgewogICAgZnVuY3Rpb24gdXJucyh1aW50MjU2IGNkcElkKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3MgdXJuKTsKfQo=",
  },
]

const html = `<h3>Example</h3>
<p>Example of locking ETH collateral, borrowing DAI, repaying DAI and unlocking ETH using <code>DssProxy</code>.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.20;</span>

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
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> 0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">Test</span>, <span class="hljs-title">console2</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">"../../../src/defi/dai-proxy/DaiProxy.sol"</span>;

<span class="hljs-keyword">address</span> <span class="hljs-keyword">constant</span> VAT <span class="hljs-operator">=</span> <span class="hljs-number">0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B</span>;

<span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> WAD <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
<span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> RAY <span class="hljs-operator">=</span> <span class="hljs-number">1e27</span>;
<span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> RAD <span class="hljs-operator">=</span> <span class="hljs-number">1e45</span>;

<span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> ETH_AMOUNT <span class="hljs-operator">=</span> <span class="hljs-number">100</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;
<span class="hljs-keyword">uint256</span> <span class="hljs-keyword">constant</span> DAI_AMOUNT <span class="hljs-operator">=</span> <span class="hljs-number">10000</span> <span class="hljs-operator">*</span> <span class="hljs-number">1e18</span>;

<span class="hljs-comment">// forge test --fork-url $FORK_URL --match-path test/dai/DaiProxy.test.sol -vvv</span>
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
