// metadata
export const version = "0.8.17"
export const title = "Gasless Token Transfer"
export const description = "Gasless ERC20 token transfer with Meta transaction"

export const keywords = [
    "app",
    "application",
    "gasless",
    "token",
    "transfer",
    "ERC20",
    "permit",
]

export const codes = [
    {
        fileName: "ERC20Permit.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFHUEwtMy4wLW9ubHkKcHJhZ21hIHNvbGlkaXR5ID49MC44LjA7CgovLy8gQG5vdGljZSBNb2Rlcm4gYW5kIGdhcyBlZmZpY2llbnQgRVJDMjAgKyBFSVAtMjYxMiBpbXBsZW1lbnRhdGlvbi4KLy8vIEBhdXRob3IgU29sbWF0ZSAoaHR0cHM6Ly9naXRodWIuY29tL3RyYW5zbWlzc2lvbnMxMS9zb2xtYXRlL2Jsb2IvbWFpbi9zcmMvdG9rZW5zL0VSQzIwLnNvbCkKLy8vIEBhdXRob3IgTW9kaWZpZWQgZnJvbSBVbmlzd2FwIChodHRwczovL2dpdGh1Yi5jb20vVW5pc3dhcC91bmlzd2FwLXYyLWNvcmUvYmxvYi9tYXN0ZXIvY29udHJhY3RzL1VuaXN3YXBWMkVSQzIwLnNvbCkKLy8vIEBkZXYgRG8gbm90IG1hbnVhbGx5IHNldCBiYWxhbmNlcyB3aXRob3V0IHVwZGF0aW5nIHRvdGFsU3VwcGx5LCBhcyB0aGUgc3VtIG9mIGFsbCB1c2VyIGJhbGFuY2VzIG11c3Qgbm90IGV4Y2VlZCBpdC4KYWJzdHJhY3QgY29udHJhY3QgRVJDMjAgewogICAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFVkVOVFMKICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKi8KCiAgICBldmVudCBUcmFuc2ZlcihhZGRyZXNzIGluZGV4ZWQgZnJvbSwgYWRkcmVzcyBpbmRleGVkIHRvLCB1aW50MjU2IGFtb3VudCk7CgogICAgZXZlbnQgQXBwcm92YWwoYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgc3BlbmRlciwgdWludDI1NiBhbW91bnQpOwoKICAgIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8KICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1FVEFEQVRBIFNUT1JBR0UKICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKi8KCiAgICBzdHJpbmcgcHVibGljIG5hbWU7CgogICAgc3RyaW5nIHB1YmxpYyBzeW1ib2w7CgogICAgdWludDggcHVibGljIGltbXV0YWJsZSBkZWNpbWFsczsKCiAgICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVSQzIwIFNUT1JBR0UKICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKi8KCiAgICB1aW50MjU2IHB1YmxpYyB0b3RhbFN1cHBseTsKCiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gdWludDI1NikgcHVibGljIGJhbGFuY2VPZjsKCiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpKSBwdWJsaWMgYWxsb3dhbmNlOwoKICAgIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8KICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVJUC0yNjEyIFNUT1JBR0UKICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKi8KCiAgICB1aW50MjU2IGludGVybmFsIGltbXV0YWJsZSBJTklUSUFMX0NIQUlOX0lEOwoKICAgIGJ5dGVzMzIgaW50ZXJuYWwgaW1tdXRhYmxlIElOSVRJQUxfRE9NQUlOX1NFUEFSQVRPUjsKCiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gdWludDI1NikgcHVibGljIG5vbmNlczsKCiAgICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDT05TVFJVQ1RPUgogICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qLwoKICAgIGNvbnN0cnVjdG9yKHN0cmluZyBtZW1vcnkgX25hbWUsIHN0cmluZyBtZW1vcnkgX3N5bWJvbCwgdWludDggX2RlY2ltYWxzKSB7CiAgICAgICAgbmFtZSA9IF9uYW1lOwogICAgICAgIHN5bWJvbCA9IF9zeW1ib2w7CiAgICAgICAgZGVjaW1hbHMgPSBfZGVjaW1hbHM7CgogICAgICAgIElOSVRJQUxfQ0hBSU5fSUQgPSBibG9jay5jaGFpbmlkOwogICAgICAgIElOSVRJQUxfRE9NQUlOX1NFUEFSQVRPUiA9IGNvbXB1dGVEb21haW5TZXBhcmF0b3IoKTsKICAgIH0KCiAgICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFUkMyMCBMT0dJQwogICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qLwoKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgcHVibGljIHZpcnR1YWwgcmV0dXJucyAoYm9vbCkgewogICAgICAgIGFsbG93YW5jZVttc2cuc2VuZGVyXVtzcGVuZGVyXSA9IGFtb3VudDsKCiAgICAgICAgZW1pdCBBcHByb3ZhbChtc2cuc2VuZGVyLCBzcGVuZGVyLCBhbW91bnQpOwoKICAgICAgICByZXR1cm4gdHJ1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHRvLCB1aW50MjU2IGFtb3VudCkgcHVibGljIHZpcnR1YWwgcmV0dXJucyAoYm9vbCkgewogICAgICAgIGJhbGFuY2VPZlttc2cuc2VuZGVyXSAtPSBhbW91bnQ7CgogICAgICAgIC8vIENhbm5vdCBvdmVyZmxvdyBiZWNhdXNlIHRoZSBzdW0gb2YgYWxsIHVzZXIKICAgICAgICAvLyBiYWxhbmNlcyBjYW4ndCBleGNlZWQgdGhlIG1heCB1aW50MjU2IHZhbHVlLgogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIGJhbGFuY2VPZlt0b10gKz0gYW1vdW50OwogICAgICAgIH0KCiAgICAgICAgZW1pdCBUcmFuc2Zlcihtc2cuc2VuZGVyLCB0bywgYW1vdW50KTsKCiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CgogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQyNTYgYW1vdW50CiAgICApIHB1YmxpYyB2aXJ0dWFsIHJldHVybnMgKGJvb2wpIHsKICAgICAgICB1aW50MjU2IGFsbG93ZWQgPSBhbGxvd2FuY2VbZnJvbV1bbXNnLnNlbmRlcl07IC8vIFNhdmVzIGdhcyBmb3IgbGltaXRlZCBhcHByb3ZhbHMuCgogICAgICAgIGlmIChhbGxvd2VkICE9IHR5cGUodWludDI1NikubWF4KQogICAgICAgICAgICBhbGxvd2FuY2VbZnJvbV1bbXNnLnNlbmRlcl0gPSBhbGxvd2VkIC0gYW1vdW50OwoKICAgICAgICBiYWxhbmNlT2ZbZnJvbV0gLT0gYW1vdW50OwoKICAgICAgICAvLyBDYW5ub3Qgb3ZlcmZsb3cgYmVjYXVzZSB0aGUgc3VtIG9mIGFsbCB1c2VyCiAgICAgICAgLy8gYmFsYW5jZXMgY2FuJ3QgZXhjZWVkIHRoZSBtYXggdWludDI1NiB2YWx1ZS4KICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICBiYWxhbmNlT2ZbdG9dICs9IGFtb3VudDsKICAgICAgICB9CgogICAgICAgIGVtaXQgVHJhbnNmZXIoZnJvbSwgdG8sIGFtb3VudCk7CgogICAgICAgIHJldHVybiB0cnVlOwogICAgfQoKICAgIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFSVAtMjYxMiBMT0dJQwogICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qLwoKICAgIGZ1bmN0aW9uIHBlcm1pdCgKICAgICAgICBhZGRyZXNzIG93bmVyLAogICAgICAgIGFkZHJlc3Mgc3BlbmRlciwKICAgICAgICB1aW50MjU2IHZhbHVlLAogICAgICAgIHVpbnQyNTYgZGVhZGxpbmUsCiAgICAgICAgdWludDggdiwKICAgICAgICBieXRlczMyIHIsCiAgICAgICAgYnl0ZXMzMiBzCiAgICApIHB1YmxpYyB2aXJ0dWFsIHsKICAgICAgICByZXF1aXJlKGRlYWRsaW5lID49IGJsb2NrLnRpbWVzdGFtcCwgIlBFUk1JVF9ERUFETElORV9FWFBJUkVEIik7CgogICAgICAgIC8vIFVuY2hlY2tlZCBiZWNhdXNlIHRoZSBvbmx5IG1hdGggZG9uZSBpcyBpbmNyZW1lbnRpbmcKICAgICAgICAvLyB0aGUgb3duZXIncyBub25jZSB3aGljaCBjYW5ub3QgcmVhbGlzdGljYWxseSBvdmVyZmxvdy4KICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICBhZGRyZXNzIHJlY292ZXJlZEFkZHJlc3MgPSBlY3JlY292ZXIoCiAgICAgICAgICAgICAgICBrZWNjYWsyNTYoCiAgICAgICAgICAgICAgICAgICAgYWJpLmVuY29kZVBhY2tlZCgKICAgICAgICAgICAgICAgICAgICAgICAgIlx4MTlceDAxIiwKICAgICAgICAgICAgICAgICAgICAgICAgRE9NQUlOX1NFUEFSQVRPUigpLAogICAgICAgICAgICAgICAgICAgICAgICBrZWNjYWsyNTYoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYmkuZW5jb2RlKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtlY2NhazI1NigKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIlBlcm1pdChhZGRyZXNzIG93bmVyLGFkZHJlc3Mgc3BlbmRlcix1aW50MjU2IHZhbHVlLHVpbnQyNTYgbm9uY2UsdWludDI1NiBkZWFkbGluZSkiCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lciwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVuZGVyLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmNlc1tvd25lcl0rKywKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWFkbGluZQogICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgKSwKICAgICAgICAgICAgICAgIHYsCiAgICAgICAgICAgICAgICByLAogICAgICAgICAgICAgICAgcwogICAgICAgICAgICApOwoKICAgICAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgICAgIHJlY292ZXJlZEFkZHJlc3MgIT0gYWRkcmVzcygwKSAmJiByZWNvdmVyZWRBZGRyZXNzID09IG93bmVyLAogICAgICAgICAgICAgICAgIklOVkFMSURfU0lHTkVSIgogICAgICAgICAgICApOwoKICAgICAgICAgICAgYWxsb3dhbmNlW3JlY292ZXJlZEFkZHJlc3NdW3NwZW5kZXJdID0gdmFsdWU7CiAgICAgICAgfQoKICAgICAgICBlbWl0IEFwcHJvdmFsKG93bmVyLCBzcGVuZGVyLCB2YWx1ZSk7CiAgICB9CgogICAgZnVuY3Rpb24gRE9NQUlOX1NFUEFSQVRPUigpIHB1YmxpYyB2aWV3IHZpcnR1YWwgcmV0dXJucyAoYnl0ZXMzMikgewogICAgICAgIHJldHVybgogICAgICAgICAgICBibG9jay5jaGFpbmlkID09IElOSVRJQUxfQ0hBSU5fSUQKICAgICAgICAgICAgICAgID8gSU5JVElBTF9ET01BSU5fU0VQQVJBVE9SCiAgICAgICAgICAgICAgICA6IGNvbXB1dGVEb21haW5TZXBhcmF0b3IoKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjb21wdXRlRG9tYWluU2VwYXJhdG9yKCkgaW50ZXJuYWwgdmlldyB2aXJ0dWFsIHJldHVybnMgKGJ5dGVzMzIpIHsKICAgICAgICByZXR1cm4KICAgICAgICAgICAga2VjY2FrMjU2KAogICAgICAgICAgICAgICAgYWJpLmVuY29kZSgKICAgICAgICAgICAgICAgICAgICBrZWNjYWsyNTYoCiAgICAgICAgICAgICAgICAgICAgICAgICJFSVA3MTJEb21haW4oc3RyaW5nIG5hbWUsc3RyaW5nIHZlcnNpb24sdWludDI1NiBjaGFpbklkLGFkZHJlc3MgdmVyaWZ5aW5nQ29udHJhY3QpIgogICAgICAgICAgICAgICAgICAgICksCiAgICAgICAgICAgICAgICAgICAga2VjY2FrMjU2KGJ5dGVzKG5hbWUpKSwKICAgICAgICAgICAgICAgICAgICBrZWNjYWsyNTYoIjEiKSwKICAgICAgICAgICAgICAgICAgICBibG9jay5jaGFpbmlkLAogICAgICAgICAgICAgICAgICAgIGFkZHJlc3ModGhpcykKICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgKTsKICAgIH0KCiAgICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vCiAgICAgICAgICAgICAgICAgICAgICAgIElOVEVSTkFMIE1JTlQvQlVSTiBMT0dJQwogICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qLwoKICAgIGZ1bmN0aW9uIF9taW50KGFkZHJlc3MgdG8sIHVpbnQyNTYgYW1vdW50KSBpbnRlcm5hbCB2aXJ0dWFsIHsKICAgICAgICB0b3RhbFN1cHBseSArPSBhbW91bnQ7CgogICAgICAgIC8vIENhbm5vdCBvdmVyZmxvdyBiZWNhdXNlIHRoZSBzdW0gb2YgYWxsIHVzZXIKICAgICAgICAvLyBiYWxhbmNlcyBjYW4ndCBleGNlZWQgdGhlIG1heCB1aW50MjU2IHZhbHVlLgogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIGJhbGFuY2VPZlt0b10gKz0gYW1vdW50OwogICAgICAgIH0KCiAgICAgICAgZW1pdCBUcmFuc2ZlcihhZGRyZXNzKDApLCB0bywgYW1vdW50KTsKICAgIH0KCiAgICBmdW5jdGlvbiBfYnVybihhZGRyZXNzIGZyb20sIHVpbnQyNTYgYW1vdW50KSBpbnRlcm5hbCB2aXJ0dWFsIHsKICAgICAgICBiYWxhbmNlT2ZbZnJvbV0gLT0gYW1vdW50OwoKICAgICAgICAvLyBDYW5ub3QgdW5kZXJmbG93IGJlY2F1c2UgYSB1c2VyJ3MgYmFsYW5jZQogICAgICAgIC8vIHdpbGwgbmV2ZXIgYmUgbGFyZ2VyIHRoYW4gdGhlIHRvdGFsIHN1cHBseS4KICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICB0b3RhbFN1cHBseSAtPSBhbW91bnQ7CiAgICAgICAgfQoKICAgICAgICBlbWl0IFRyYW5zZmVyKGZyb20sIGFkZHJlc3MoMCksIGFtb3VudCk7CiAgICB9Cn0KCmNvbnRyYWN0IEVSQzIwUGVybWl0IGlzIEVSQzIwIHsKICAgIGNvbnN0cnVjdG9yKAogICAgICAgIHN0cmluZyBtZW1vcnkgX25hbWUsCiAgICAgICAgc3RyaW5nIG1lbW9yeSBfc3ltYm9sLAogICAgICAgIHVpbnQ4IF9kZWNpbWFscwogICAgKSBFUkMyMChfbmFtZSwgX3N5bWJvbCwgX2RlY2ltYWxzKSB7fQoKICAgIGZ1bmN0aW9uIG1pbnQoYWRkcmVzcyB0bywgdWludDI1NiBhbW91bnQpIHB1YmxpYyB7CiAgICAgICAgX21pbnQodG8sIGFtb3VudCk7CiAgICB9Cn0K",
    },
    {
        fileName: "GaslessTokenTransfer.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xODsKCmludGVyZmFjZSBJRVJDMjBQZXJtaXQgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwoKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CgogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiBhbGxvd2FuY2UoYWRkcmVzcyBvd25lciwgYWRkcmVzcyBzcGVuZGVyKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwoKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKAogICAgICAgIGFkZHJlc3Mgc2VuZGVyLAogICAgICAgIGFkZHJlc3MgcmVjaXBpZW50LAogICAgICAgIHVpbnQyNTYgYW1vdW50CiAgICApIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIHBlcm1pdCgKICAgICAgICBhZGRyZXNzIG93bmVyLAogICAgICAgIGFkZHJlc3Mgc3BlbmRlciwKICAgICAgICB1aW50MjU2IHZhbHVlLAogICAgICAgIHVpbnQyNTYgZGVhZGxpbmUsCiAgICAgICAgdWludDggdiwKICAgICAgICBieXRlczMyIHIsCiAgICAgICAgYnl0ZXMzMiBzCiAgICApIGV4dGVybmFsOwoKICAgIGV2ZW50IFRyYW5zZmVyKGFkZHJlc3MgaW5kZXhlZCBmcm9tLCBhZGRyZXNzIGluZGV4ZWQgdG8sIHVpbnQyNTYgdmFsdWUpOwogICAgZXZlbnQgQXBwcm92YWwoYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgc3BlbmRlciwgdWludDI1NiB2YWx1ZSk7Cn0KCmNvbnRyYWN0IEdhc2xlc3NUb2tlblRyYW5zZmVyIHsKICAgIGZ1bmN0aW9uIHNlbmQoCiAgICAgICAgYWRkcmVzcyB0b2tlbiwKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICBhZGRyZXNzIHJlY2VpdmVyLAogICAgICAgIHVpbnQyNTYgYW1vdW50LAogICAgICAgIHVpbnQyNTYgZmVlLAogICAgICAgIHVpbnQyNTYgZGVhZGxpbmUsCiAgICAgICAgLy8gUGVybWl0IHNpZ25hdHVyZQogICAgICAgIHVpbnQ4IHYsCiAgICAgICAgYnl0ZXMzMiByLAogICAgICAgIGJ5dGVzMzIgcwogICAgKSBleHRlcm5hbCB7CiAgICAgICAgLy8gUGVybWl0CiAgICAgICAgSUVSQzIwUGVybWl0KHRva2VuKS5wZXJtaXQoCiAgICAgICAgICAgIHNlbmRlciwKICAgICAgICAgICAgYWRkcmVzcyh0aGlzKSwKICAgICAgICAgICAgYW1vdW50ICsgZmVlLAogICAgICAgICAgICBkZWFkbGluZSwKICAgICAgICAgICAgdiwKICAgICAgICAgICAgciwKICAgICAgICAgICAgcwogICAgICAgICk7CiAgICAgICAgLy8gU2VuZCBhbW91bnQgdG8gcmVjZWl2ZXIKICAgICAgICBJRVJDMjBQZXJtaXQodG9rZW4pLnRyYW5zZmVyRnJvbShzZW5kZXIsIHJlY2VpdmVyLCBhbW91bnQpOwogICAgICAgIC8vIFRha2UgZmVlIC0gc2VuZCBmZWUgdG8gbXNnLnNlbmRlcgogICAgICAgIElFUkMyMFBlcm1pdCh0b2tlbikudHJhbnNmZXJGcm9tKHNlbmRlciwgbXNnLnNlbmRlciwgZmVlKTsKICAgIH0KfQo=",
    },
]

const html = `<p>Gasless ERC20 token transfer with Meta transaction</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.18;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20Permit</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">totalSupply</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> account</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">allowance</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> recipient,
        <span class="hljs-keyword">uint256</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">permit</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> spender,
        <span class="hljs-keyword">uint256</span> value,
        <span class="hljs-keyword">uint256</span> deadline,
        <span class="hljs-keyword">uint8</span> v,
        <span class="hljs-keyword">bytes32</span> r,
        <span class="hljs-keyword">bytes32</span> s
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> value</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint256</span> value</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">GaslessTokenTransfer</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">send</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> token,
        <span class="hljs-keyword">address</span> sender,
        <span class="hljs-keyword">address</span> receiver,
        <span class="hljs-keyword">uint256</span> amount,
        <span class="hljs-keyword">uint256</span> fee,
        <span class="hljs-keyword">uint256</span> deadline,
        <span class="hljs-comment">// Permit signature</span>
        <span class="hljs-keyword">uint8</span> v,
        <span class="hljs-keyword">bytes32</span> r,
        <span class="hljs-keyword">bytes32</span> s
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// Permit</span>
        IERC20Permit(token).permit(
            sender,
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            amount <span class="hljs-operator">+</span> fee,
            deadline,
            v,
            r,
            s
        );
        <span class="hljs-comment">// Send amount to receiver</span>
        IERC20Permit(token).transferFrom(sender, receiver, amount);
        <span class="hljs-comment">// Take fee - send fee to msg.sender</span>
        IERC20Permit(token).transferFrom(sender, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, fee);
    }
}
</code></pre>
<p>Example <code>ERC20</code> that implements <code>permit</code> copied from solmate</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: AGPL-3.0-only</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> &gt;=0.8.0;</span>

<span class="hljs-comment">/// @notice Modern and gas efficient ERC20 + EIP-2612 implementation.</span>
<span class="hljs-comment">/// @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)</span>
<span class="hljs-comment">/// @author Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)</span>
<span class="hljs-comment">/// @dev Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it.</span>
<span class="hljs-keyword">abstract</span> <span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC20</span> </span>{
    <span class="hljs-comment">/*//////////////////////////////////////////////////////////////
                                 EVENTS
    //////////////////////////////////////////////////////////////*/</span>

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> amount</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint256</span> amount</span>)</span>;

    <span class="hljs-comment">/*//////////////////////////////////////////////////////////////
                            METADATA STORAGE
    //////////////////////////////////////////////////////////////*/</span>

    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> name;

    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> symbol;

    <span class="hljs-keyword">uint8</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> decimals;

    <span class="hljs-comment">/*//////////////////////////////////////////////////////////////
                              ERC20 STORAGE
    //////////////////////////////////////////////////////////////*/</span>

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> totalSupply;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>)) <span class="hljs-keyword">public</span> allowance;

    <span class="hljs-comment">/*//////////////////////////////////////////////////////////////
                            EIP-2612 STORAGE
    //////////////////////////////////////////////////////////////*/</span>

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">internal</span> <span class="hljs-keyword">immutable</span> INITIAL_CHAIN_ID;

    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">internal</span> <span class="hljs-keyword">immutable</span> INITIAL_DOMAIN_SEPARATOR;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> nonces;

    <span class="hljs-comment">/*//////////////////////////////////////////////////////////////
                               CONSTRUCTOR
    //////////////////////////////////////////////////////////////*/</span>

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _symbol, <span class="hljs-keyword">uint8</span> _decimals</span>) </span>{
        name <span class="hljs-operator">=</span> _name;
        symbol <span class="hljs-operator">=</span> _symbol;
        decimals <span class="hljs-operator">=</span> _decimals;

        INITIAL_CHAIN_ID <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">chainid</span>;
        INITIAL_DOMAIN_SEPARATOR <span class="hljs-operator">=</span> computeDomainSeparator();
    }

    <span class="hljs-comment">/*//////////////////////////////////////////////////////////////
                               ERC20 LOGIC
    //////////////////////////////////////////////////////////////*/</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        allowance[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>][spender] <span class="hljs-operator">=</span> amount;

        <span class="hljs-keyword">emit</span> Approval(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, spender, amount);

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        balanceOf[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;

        <span class="hljs-comment">// Cannot overflow because the sum of all user</span>
        <span class="hljs-comment">// balances can&#x27;t exceed the max uint256 value.</span>
        <span class="hljs-keyword">unchecked</span> {
            balanceOf[to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        }

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, to, amount);

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">uint256</span> allowed <span class="hljs-operator">=</span> allowance[<span class="hljs-keyword">from</span>][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>]; <span class="hljs-comment">// Saves gas for limited approvals.</span>

        <span class="hljs-keyword">if</span> (allowed <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(<span class="hljs-keyword">uint256</span>).<span class="hljs-built_in">max</span>)
            allowance[<span class="hljs-keyword">from</span>][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> allowed <span class="hljs-operator">-</span> amount;

        balanceOf[<span class="hljs-keyword">from</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;

        <span class="hljs-comment">// Cannot overflow because the sum of all user</span>
        <span class="hljs-comment">// balances can&#x27;t exceed the max uint256 value.</span>
        <span class="hljs-keyword">unchecked</span> {
            balanceOf[to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        }

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">from</span>, to, amount);

        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }

    <span class="hljs-comment">/*//////////////////////////////////////////////////////////////
                             EIP-2612 LOGIC
    //////////////////////////////////////////////////////////////*/</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">permit</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> spender,
        <span class="hljs-keyword">uint256</span> value,
        <span class="hljs-keyword">uint256</span> deadline,
        <span class="hljs-keyword">uint8</span> v,
        <span class="hljs-keyword">bytes32</span> r,
        <span class="hljs-keyword">bytes32</span> s
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        <span class="hljs-built_in">require</span>(deadline <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, <span class="hljs-string">"PERMIT_DEADLINE_EXPIRED"</span>);

        <span class="hljs-comment">// Unchecked because the only math done is incrementing</span>
        <span class="hljs-comment">// the owner&#x27;s nonce which cannot realistically overflow.</span>
        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">address</span> recoveredAddress <span class="hljs-operator">=</span> <span class="hljs-built_in">ecrecover</span>(
                <span class="hljs-built_in">keccak256</span>(
                    <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(
                        <span class="hljs-string">"\\x19\\x01"</span>,
                        DOMAIN_SEPARATOR(),
                        <span class="hljs-built_in">keccak256</span>(
                            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
                                <span class="hljs-built_in">keccak256</span>(
                                    <span class="hljs-string">"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"</span>
                                ),
                                owner,
                                spender,
                                value,
                                nonces[owner]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>,
                                deadline
                            )
                        )
                    )
                ),
                v,
                r,
                s
            );

            <span class="hljs-built_in">require</span>(
                recoveredAddress <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>) <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> recoveredAddress <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner,
                <span class="hljs-string">"INVALID_SIGNER"</span>
            );

            allowance[recoveredAddress][spender] <span class="hljs-operator">=</span> value;
        }

        <span class="hljs-keyword">emit</span> Approval(owner, spender, value);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">DOMAIN_SEPARATOR</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span>
            <span class="hljs-built_in">block</span>.<span class="hljs-built_in">chainid</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> INITIAL_CHAIN_ID
                ? INITIAL_DOMAIN_SEPARATOR
                : computeDomainSeparator();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">computeDomainSeparator</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span>
            <span class="hljs-built_in">keccak256</span>(
                <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(
                    <span class="hljs-built_in">keccak256</span>(
                        <span class="hljs-string">"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"</span>
                    ),
                    <span class="hljs-built_in">keccak256</span>(<span class="hljs-keyword">bytes</span>(name)),
                    <span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"1"</span>),
                    <span class="hljs-built_in">block</span>.<span class="hljs-built_in">chainid</span>,
                    <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)
                )
            );
    }

    <span class="hljs-comment">/*//////////////////////////////////////////////////////////////
                        INTERNAL MINT/BURN LOGIC
    //////////////////////////////////////////////////////////////*/</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;

        <span class="hljs-comment">// Cannot overflow because the sum of all user</span>
        <span class="hljs-comment">// balances can&#x27;t exceed the max uint256 value.</span>
        <span class="hljs-keyword">unchecked</span> {
            balanceOf[to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        }

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, amount);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        balanceOf[<span class="hljs-keyword">from</span>] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;

        <span class="hljs-comment">// Cannot underflow because a user&#x27;s balance</span>
        <span class="hljs-comment">// will never be larger than the total supply.</span>
        <span class="hljs-keyword">unchecked</span> {
            totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;
        }

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), amount);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC20Permit</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _name,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _symbol,
        <span class="hljs-keyword">uint8</span> _decimals
    </span>) <span class="hljs-title">ERC20</span>(<span class="hljs-params">_name, _symbol, _decimals</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> amount</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        _mint(to, amount);
    }
}
</code></pre>
`

export default html
