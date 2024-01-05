// metadata
export const version = "0.8.20"
export const title = "Front Running"
export const description =
  "An example of a Solidity contract vulnerable to front running"

export const keywords = ["hack", "security", "front", "running"]

export const codes = [
  {
    fileName: "FrontRunning.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCi8qCkFsaWNlIGNyZWF0ZXMgYSBndWVzc2luZyBnYW1lLgpZb3Ugd2luIDEwIGV0aGVyIGlmIHlvdSBjYW4gZmluZCB0aGUgY29ycmVjdCBzdHJpbmcgdGhhdCBoYXNoZXMgdG8gdGhlIHRhcmdldApoYXNoLiBMZXQncyBzZWUgaG93IHRoaXMgY29udHJhY3QgaXMgdnVsbmVyYWJsZSB0byBmcm9udCBydW5uaW5nLgoqLwoKLyoKMS4gQWxpY2UgZGVwbG95cyBGaW5kVGhpc0hhc2ggd2l0aCAxMCBFdGhlci4KMi4gQm9iIGZpbmRzIHRoZSBjb3JyZWN0IHN0cmluZyB0aGF0IHdpbGwgaGFzaCB0byB0aGUgdGFyZ2V0IGhhc2guICgiRXRoZXJldW0iKQozLiBCb2IgY2FsbHMgc29sdmUoIkV0aGVyZXVtIikgd2l0aCBnYXMgcHJpY2Ugc2V0IHRvIDE1IGd3ZWkuCjQuIEV2ZSBpcyB3YXRjaGluZyB0aGUgdHJhbnNhY3Rpb24gcG9vbCBmb3IgdGhlIGFuc3dlciB0byBiZSBzdWJtaXR0ZWQuCjUuIEV2ZSBzZWVzIEJvYidzIGFuc3dlciBhbmQgY2FsbHMgc29sdmUoIkV0aGVyZXVtIikgd2l0aCBhIGhpZ2hlciBnYXMgcHJpY2UKICAgdGhhbiBCb2IgKDEwMCBnd2VpKS4KNi4gRXZlJ3MgdHJhbnNhY3Rpb24gd2FzIG1pbmVkIGJlZm9yZSBCb2IncyB0cmFuc2FjdGlvbi4KICAgRXZlIHdvbiB0aGUgcmV3YXJkIG9mIDEwIGV0aGVyLgoKV2hhdCBoYXBwZW5lZD8KVHJhbnNhY3Rpb25zIHRha2Ugc29tZSB0aW1lIGJlZm9yZSB0aGV5IGFyZSBtaW5lZC4KVHJhbnNhY3Rpb25zIG5vdCB5ZXQgbWluZWQgYXJlIHB1dCBpbiB0aGUgdHJhbnNhY3Rpb24gcG9vbC4KVHJhbnNhY3Rpb25zIHdpdGggaGlnaGVyIGdhcyBwcmljZSBhcmUgdHlwaWNhbGx5IG1pbmVkIGZpcnN0LgpBbiBhdHRhY2tlciBjYW4gZ2V0IHRoZSBhbnN3ZXIgZnJvbSB0aGUgdHJhbnNhY3Rpb24gcG9vbCwgc2VuZCBhIHRyYW5zYWN0aW9uCndpdGggYSBoaWdoZXIgZ2FzIHByaWNlIHNvIHRoYXQgdGhlaXIgdHJhbnNhY3Rpb24gd2lsbCBiZSBpbmNsdWRlZCBpbiBhIGJsb2NrCmJlZm9yZSB0aGUgb3JpZ2luYWwuCiovCgpjb250cmFjdCBGaW5kVGhpc0hhc2ggewogICAgYnl0ZXMzMiBwdWJsaWMgY29uc3RhbnQgaGFzaCA9CiAgICAgICAgMHg1NjRjY2FmNzU5NGQ2NmIxZWFhZWEyNGZlMDFmMDU4NWJmNTJlZTcwODUyYWY0ZWFjMGNjNGIwNDcxMWNkMGUyOwoKICAgIGNvbnN0cnVjdG9yKCkgcGF5YWJsZSB7fQoKICAgIGZ1bmN0aW9uIHNvbHZlKHN0cmluZyBtZW1vcnkgc29sdXRpb24pIHB1YmxpYyB7CiAgICAgICAgcmVxdWlyZShoYXNoID09IGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKHNvbHV0aW9uKSksICJJbmNvcnJlY3QgYW5zd2VyIik7CgogICAgICAgIChib29sIHNlbnQsICkgPSBtc2cuc2VuZGVyLmNhbGx7dmFsdWU6IDEwIGV0aGVyfSgiIik7CiAgICAgICAgcmVxdWlyZShzZW50LCAiRmFpbGVkIHRvIHNlbmQgRXRoZXIiKTsKICAgIH0KfQo=",
  },
  {
    fileName: "PreventFrontRunning.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCAiZ2l0aHViLmNvbS9PcGVuWmVwcGVsaW4vb3BlbnplcHBlbGluLWNvbnRyYWN0cy9ibG9iL3JlbGVhc2UtdjQuNS9jb250cmFjdHMvdXRpbHMvU3RyaW5ncy5zb2wiOwoKLyoKICAgTm93IExldCdzIHNlZSBob3cgdG8gZ3VhcmQgZnJvbSBmcm9udCBydW5uaW5nIHVzaW5nIGNvbW1pdCByZXZlYWwgc2NoZW1lLgoqLwoKLyoKMS4gQWxpY2UgZGVwbG95cyBTZWN1cmVkRmluZFRoaXNIYXNoIHdpdGggMTAgRXRoZXIuCjIuIEJvYiBmaW5kcyB0aGUgY29ycmVjdCBzdHJpbmcgdGhhdCB3aWxsIGhhc2ggdG8gdGhlIHRhcmdldCBoYXNoLiAoIkV0aGVyZXVtIikuCjMuIEJvYiB0aGVuIGZpbmRzIHRoZSBrZWNjYWsyNTYoQWRkcmVzcyBpbiBsb3dlcmNhc2UgKyBTb2x1dGlvbiArIFNlY3JldCkuIAogICBBZGRyZXNzIGlzIGhpcyB3YWxsZXQgYWRkcmVzcyBpbiBsb3dlcmNhc2UsIHNvbHV0aW9uIGlzICJFdGhlcmV1bSIsIFNlY3JldCBpcyBsaWtlIGFuIHBhc3N3b3JkICgibXlzZWNyZXQiKSAKICAgdGhhdCBvbmx5IEJvYiBrbm93cyB3aGljIEJvYiB1c2VzIHRvIGNvbW1pdCBhbmQgcmV2ZWFsIHRoZSBzb2x1dGlvbi4KICAga2VjY2FrMjU2NigiMHhmMzlGZDZlNTFhYWQ4OEY2RjRjZTZhQjg4MjcyNzljZmZGYjkyMjY2RXRoZXJldW1teXNlY3JldCIpID0gJzB4Zjk1YjFkZDYxZWRjM2JkOTYyY2RlYTM5ODdjNmY1NWJjYjcxNGEwMmEyYzNlYjczYmQ5NjBkNmI0Mzg3ZmMzNicKMy4gQm9iIHRoZW4gY2FsbHMgY29tbWl0U29sdXRpb24oIjB4Zjk1YjFkZDYxZWRjM2JkOTYyY2RlYTM5ODdjNmY1NWJjYjcxNGEwMmEyYzNlYjczYmQ5NjBkNmI0Mzg3ZmMzNiIpLCAKICAgd2hlcmUgaGUgY29tbWl0cyB0aGUgY2FsY3VsYXRlZCBzb2x1dGlvbiBoYXNoIHdpdGggZ2FzIHByaWNlIHNldCB0byAxNSBnd2VpLgo0LiBFdmUgaXMgd2F0Y2hpbmcgdGhlIHRyYW5zYWN0aW9uIHBvb2wgZm9yIHRoZSBhbnN3ZXIgdG8gYmUgc3VibWl0dGVkLgo1LiBFdmUgc2VlcyBCb2IncyBhbnN3ZXIgYW5kIGhlIGFsc28gY2FsbHMgY29tbWl0U29sdXRpb24oIjB4Zjk1YjFkZDYxZWRjM2JkOTYyY2RlYTM5ODdjNmY1NWJjYjcxNGEwMmEyYzNlYjczYmQ5NjBkNmI0Mzg3ZmMzNiIpCiAgIHdpdGggYSBoaWdoZXIgZ2FzIHByaWNlIHRoYW4gQm9iICgxMDAgZ3dlaSkuCjYuIEV2ZSdzIHRyYW5zYWN0aW9uIHdhcyBtaW5lZCBiZWZvcmUgQm9iJ3MgdHJhbnNhY3Rpb24sIGJ1dCBFdmUgaGFzIG5vdCBnb3QgdGhlIHJld2FyZCB5ZXQuCiAgIEhlIG5lZWRzIHRvIGNhbGwgcmV2ZWFsU29sdXRpb24oKSB3aXRoIGV4YWN0IHNlY3JldCBhbmQgc29sdXRpb24sIHNvIGxldHMgc2F5IGhlIGlzIHdhdGNoaW5nIHRoZSB0cmFuc2FjdGlvbiBwb29sCiAgIHRvIGZyb250IHJ1biBCb2IgYXMgaGUgZGlkIHByZXZpb3VzbHkKNy4gVGhlbiBCb2IgY2FsbHMgdGhlIHJldmVhbFNvbHV0aW9uKCJFdGhlcmV1bSIsICJteXNlY3JldCIpIHdpdGggZ2FzIHByaWNlIHNldCB0byAxNSBnd2VpOwo4LiBMZXQncyBjb25zaWRlciB0aGF0IEV2ZSdzIHdobydzIHdhdGNoaW5nIHRoZSB0cmFuc2FjdGlvbiBwb29sLCBmaW5kJ3MgQm9iJ3MgcmV2ZWFsIHNvbHV0aW9uIHRyYW5zYWN0aW9uIGFuZCBoZSBhbHNvIGNhbGxzIAogICByZXZlYWxTb2x1dGlvbigiRXRoZXJldW0iLCAibXlzZWNyZXQiKSB3aXRoIGhpZ2hlciBnYXMgcHJpY2UgdGhhbiBCb2IgKDEwMCBnd2VpKQo5LiBMZXQncyBjb25zaWRlciB0aGF0IHRoaXMgdGltZSBhbHNvIEV2ZSdzIHJldmVhbCB0cmFuc2FjdGlvbiB3YXMgbWluZWQgYmVmb3JlIEJvYidzIHRyYW5zYWN0aW9uLCBidXQgRXZlIHdpbGwgYmUKICAgcmV2ZXJ0ZWQgd2l0aCAiSGFzaCBkb2Vzbid0IG1hdGNoIiBlcnJvci4gU2luY2UgdGhlIHJldmVhbFNvbHV0aW9uKCkgZnVuY3Rpb24gY2hlY2tzIHRoZSBoYXNoIHVzaW5nIAogICBrZWNjYWsyNTYobXNnLnNlbmRlciArIHNvbHV0aW9uICsgc2VjcmV0KS4gU28gdGhpcyB0aW1lIGV2ZSBmYWlscyB0byB3aW4gdGhlIHJld2FyZC4KMTAuQnV0IEJvYidzIHJldmVhbFNvbHV0aW9uKCJFdGhlcmV1bSIsICJteXNlY3JldCIpIHBhc3NlcyB0aGUgaGFzaCBjaGVjayBhbmQgZ2V0cyB0aGUgcmV3YXJkIG9mIDEwIGV0aGVyLgoqLwoKY29udHJhY3QgU2VjdXJlZEZpbmRUaGlzSGFzaCB7CiAgICAvLyBTdHJ1Y3QgaXMgdXNlZCB0byBzdG9yZSB0aGUgY29tbWl0IGRldGFpbHMKICAgIHN0cnVjdCBDb21taXQgewogICAgICAgIGJ5dGVzMzIgc29sdXRpb25IYXNoOwogICAgICAgIHVpbnQgY29tbWl0VGltZTsKICAgICAgICBib29sIHJldmVhbGVkOwogICAgfQoKICAgIC8vIFRoZSBoYXNoIHRoYXQgaXMgbmVlZGVkIHRvIGJlIHNvbHZlZAogICAgYnl0ZXMzMiBwdWJsaWMgaGFzaCA9CiAgICAgICAgMHg1NjRjY2FmNzU5NGQ2NmIxZWFhZWEyNGZlMDFmMDU4NWJmNTJlZTcwODUyYWY0ZWFjMGNjNGIwNDcxMWNkMGUyOwoKICAgIC8vIEFkZHJlc3Mgb2YgdGhlIHdpbm5lcgogICAgYWRkcmVzcyBwdWJsaWMgd2lubmVyOwoKICAgIC8vIFByaWNlIHRvIGJlIHJld2FyZGVkCiAgICB1aW50IHB1YmxpYyByZXdhcmQ7CgogICAgLy8gU3RhdHVzIG9mIGdhbWUKICAgIGJvb2wgcHVibGljIGVuZGVkOwoKICAgIC8vIE1hcHBpbmcgdG8gc3RvcmUgdGhlIGNvbW1pdCBkZXRhaWxzIHdpdGggYWRkcmVzcwogICAgbWFwcGluZyhhZGRyZXNzID0+IENvbW1pdCkgY29tbWl0czsKCiAgICAvLyBNb2RpZmllciB0byBjaGVjayBpZiB0aGUgZ2FtZSBpcyBhY3RpdmUKICAgIG1vZGlmaWVyIGdhbWVBY3RpdmUoKSB7CiAgICAgICAgcmVxdWlyZSghZW5kZWQsICJBbHJlYWR5IGVuZGVkIik7CiAgICAgICAgXzsKICAgIH0KCiAgICBjb25zdHJ1Y3RvcigpIHBheWFibGUgewogICAgICAgIHJld2FyZCA9IG1zZy52YWx1ZTsKICAgIH0KCiAgICAvKiAKICAgICAgIENvbW1pdCBmdW5jdGlvbiB0byBzdG9yZSB0aGUgaGFzaCBjYWxjdWxhdGVkIHVzaW5nIGtlY2NhazI1NihhZGRyZXNzIGluIGxvd2VyY2FzZSArIHNvbHV0aW9uICsgc2VjcmV0KS4gCiAgICAgICBVc2VycyBjYW4gb25seSBjb21taXQgb25jZSBhbmQgaWYgdGhlIGdhbWUgaXMgYWN0aXZlLgogICAgKi8KICAgIGZ1bmN0aW9uIGNvbW1pdFNvbHV0aW9uKGJ5dGVzMzIgX3NvbHV0aW9uSGFzaCkgcHVibGljIGdhbWVBY3RpdmUgewogICAgICAgIENvbW1pdCBzdG9yYWdlIGNvbW1pdCA9IGNvbW1pdHNbbXNnLnNlbmRlcl07CiAgICAgICAgcmVxdWlyZShjb21taXQuY29tbWl0VGltZSA9PSAwLCAiQWxyZWFkeSBjb21taXR0ZWQiKTsKICAgICAgICBjb21taXQuc29sdXRpb25IYXNoID0gX3NvbHV0aW9uSGFzaDsKICAgICAgICBjb21taXQuY29tbWl0VGltZSA9IGJsb2NrLnRpbWVzdGFtcDsKICAgICAgICBjb21taXQucmV2ZWFsZWQgPSBmYWxzZTsKICAgIH0KCiAgICAvKiAKICAgICAgICBGdW5jdGlvbiB0byBnZXQgdGhlIGNvbW1pdCBkZXRhaWxzLiBJdCByZXR1cm5zIGEgdHVwbGUgb2YgKHNvbHV0aW9uSGFzaCwgY29tbWl0VGltZSwgcmV2ZWFsU3RhdHVzKTsgIAogICAgICAgIFVzZXJzIGNhbiBnZXQgc29sdXRpb24gb25seSBpZiB0aGUgZ2FtZSBpcyBhY3RpdmUgYW5kIHRoZXkgaGF2ZSBjb21taXR0ZWQgYSBzb2x1dGlvbkhhc2gKICAgICovCiAgICBmdW5jdGlvbiBnZXRNeVNvbHV0aW9uKCkgcHVibGljIHZpZXcgZ2FtZUFjdGl2ZSByZXR1cm5zIChieXRlczMyLCB1aW50LCBib29sKSB7CiAgICAgICAgQ29tbWl0IHN0b3JhZ2UgY29tbWl0ID0gY29tbWl0c1ttc2cuc2VuZGVyXTsKICAgICAgICByZXF1aXJlKGNvbW1pdC5jb21taXRUaW1lICE9IDAsICJOb3QgY29tbWl0dGVkIHlldCIpOwogICAgICAgIHJldHVybiAoY29tbWl0LnNvbHV0aW9uSGFzaCwgY29tbWl0LmNvbW1pdFRpbWUsIGNvbW1pdC5yZXZlYWxlZCk7CiAgICB9CgogICAgLyogCiAgICAgICAgRnVuY3Rpb24gdG8gcmV2ZWFsIHRoZSBjb21taXQgYW5kIGdldCB0aGUgcmV3YXJkLiAKICAgICAgICBVc2VycyBjYW4gZ2V0IHJldmVhbCBzb2x1dGlvbiBvbmx5IGlmIHRoZSBnYW1lIGlzIGFjdGl2ZSBhbmQgdGhleSBoYXZlIGNvbW1pdHRlZCBhIHNvbHV0aW9uSGFzaCBiZWZvcmUgdGhpcyBibG9jayBhbmQgbm90IHJldmVhbGVkIHlldC4KICAgICAgICBJdCBnZW5lcmF0ZXMgYW4ga2VjY2FrMjU2KG1zZy5zZW5kZXIgKyBzb2x1dGlvbiArIHNlY3JldCkgYW5kIGNoZWNrcyBpdCB3aXRoIHRoZSBwcmV2aW91c2x5IGNvbW1pdGVkIGhhc2guICAKICAgICAgICBBc3N1bWluZyB0aGF0IGEgY29tbWl0IHdhcyBhbHJlYWR5IGluY2x1ZGVkIG9uIGNoYWluLCBmcm9udCBydW5uZXJzIHdpbGwgbm90IGJlIGFibGUgdG8gcGFzcyB0aGlzIGNoZWNrIHNpbmNlIHRoZSBtc2cuc2VuZGVyIGlzIGRpZmZlcmVudC4KICAgICAgICBUaGVuIHRoZSBhY3R1YWwgc29sdXRpb24gaXMgY2hlY2tlZCB1c2luZyBrZWNjYWsyNTYoc29sdXRpb24pLCBpZiB0aGUgc29sdXRpb24gbWF0Y2hlcywgdGhlIHdpbm5lciBpcyBkZWNsYXJlZCwgCiAgICAgICAgdGhlIGdhbWUgaXMgZW5kZWQgYW5kIHRoZSByZXdhcmQgYW1vdW50IGlzIHNlbnQgdG8gdGhlIHdpbm5lci4KICAgICovCiAgICBmdW5jdGlvbiByZXZlYWxTb2x1dGlvbigKICAgICAgICBzdHJpbmcgbWVtb3J5IF9zb2x1dGlvbiwKICAgICAgICBzdHJpbmcgbWVtb3J5IF9zZWNyZXQKICAgICkgcHVibGljIGdhbWVBY3RpdmUgewogICAgICAgIENvbW1pdCBzdG9yYWdlIGNvbW1pdCA9IGNvbW1pdHNbbXNnLnNlbmRlcl07CiAgICAgICAgcmVxdWlyZShjb21taXQuY29tbWl0VGltZSAhPSAwLCAiTm90IGNvbW1pdHRlZCB5ZXQiKTsKICAgICAgICByZXF1aXJlKGNvbW1pdC5jb21taXRUaW1lIDwgYmxvY2sudGltZXN0YW1wLCAiQ2Fubm90IHJldmVhbCBpbiB0aGUgc2FtZSBibG9jayIpOwogICAgICAgIHJlcXVpcmUoIWNvbW1pdC5yZXZlYWxlZCwgIkFscmVhZHkgY29tbWl0ZWQgYW5kIHJldmVhbGVkIik7CgogICAgICAgIGJ5dGVzMzIgc29sdXRpb25IYXNoID0ga2VjY2FrMjU2KAogICAgICAgICAgICBhYmkuZW5jb2RlUGFja2VkKFN0cmluZ3MudG9IZXhTdHJpbmcobXNnLnNlbmRlciksIF9zb2x1dGlvbiwgX3NlY3JldCkKICAgICAgICApOwogICAgICAgIHJlcXVpcmUoc29sdXRpb25IYXNoID09IGNvbW1pdC5zb2x1dGlvbkhhc2gsICJIYXNoIGRvZXNuJ3QgbWF0Y2giKTsKCiAgICAgICAgcmVxdWlyZShrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChfc29sdXRpb24pKSA9PSBoYXNoLCAiSW5jb3JyZWN0IGFuc3dlciIpOwoKICAgICAgICB3aW5uZXIgPSBtc2cuc2VuZGVyOwogICAgICAgIGVuZGVkID0gdHJ1ZTsKCiAgICAgICAgKGJvb2wgc2VudCwgKSA9IHBheWFibGUobXNnLnNlbmRlcikuY2FsbHt2YWx1ZTogcmV3YXJkfSgiIik7CiAgICAgICAgaWYgKCFzZW50KSB7CiAgICAgICAgICAgIHdpbm5lciA9IGFkZHJlc3MoMCk7CiAgICAgICAgICAgIGVuZGVkID0gZmFsc2U7CiAgICAgICAgICAgIHJldmVydCgiRmFpbGVkIHRvIHNlbmQgZXRoZXIuIik7CiAgICAgICAgfQogICAgfQp9Cg==",
  },
]

const html = `<h3>Vulnerability</h3>
<p>Transactions take some time before they are mined. An attacker can watch the transaction pool
and send a transaction, have it included in a block before the original transaction.
This mechanism can be abused to re-order transactions to the attacker&#39;s advantage.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-comment">/*
Alice creates a guessing game.
You win 10 ether if you can find the correct string that hashes to the target
hash. Let&#x27;s see how this contract is vulnerable to front running.
*/</span>

<span class="hljs-comment">/*
1. Alice deploys FindThisHash with 10 Ether.
2. Bob finds the correct string that will hash to the target hash. ("Ethereum")
3. Bob calls solve("Ethereum") with gas price set to 15 gwei.
4. Eve is watching the transaction pool for the answer to be submitted.
5. Eve sees Bob&#x27;s answer and calls solve("Ethereum") with a higher gas price
   than Bob (100 gwei).
6. Eve&#x27;s transaction was mined before Bob&#x27;s transaction.
   Eve won the reward of 10 ether.

What happened?
Transactions take some time before they are mined.
Transactions not yet mined are put in the transaction pool.
Transactions with higher gas price are typically mined first.
An attacker can get the answer from the transaction pool, send a transaction
with a higher gas price so that their transaction will be included in a block
before the original.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FindThisHash</span> </span>{
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> hash <span class="hljs-operator">=</span>
        <span class="hljs-number">0x564ccaf7594d66b1eaaea24fe01f0585bf52ee70852af4eac0cc4b04711cd0e2</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">solve</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> solution</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(hash <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(solution)), <span class="hljs-string">"Incorrect answer"</span>);

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>.<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: <span class="hljs-number">10</span> <span class="hljs-literal">ether</span>}(<span class="hljs-string">""</span>);
        <span class="hljs-built_in">require</span>(sent, <span class="hljs-string">"Failed to send Ether"</span>);
    }
}
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>use commit-reveal scheme (<a href="https://medium.com/swlh/exploring-commit-reveal-schemes-on-ethereum-c4ff5a777db8">https://medium.com/swlh/exploring-commit-reveal-schemes-on-ethereum-c4ff5a777db8</a>)</li>
<li>use submarine send (<a href="https://libsubmarine.org/">https://libsubmarine.org/</a>)</li>
</ul>
<h3>Commit-Reveal Schemes</h3>
<p>A commitment scheme is a cryptographic algorithm used to allow someone to commit to a value while keeping it hidden from others with the ability to reveal it later. The values in a commitment scheme are binding, meaning that no one can change them once committed. The scheme has two phases: a commit phase in which a value is chosen and specified, and a reveal phase in which the value is revealed and checked.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/Strings.sol"</span>;

<span class="hljs-comment">/*
   Now Let&#x27;s see how to guard from front running using commit reveal scheme.
*/</span>

<span class="hljs-comment">/*
1. Alice deploys SecuredFindThisHash with 10 Ether.
2. Bob finds the correct string that will hash to the target hash. ("Ethereum").
3. Bob then finds the keccak256(Address in lowercase + Solution + Secret). 
   Address is his wallet address in lowercase, solution is "Ethereum", Secret is like an password ("mysecret") 
   that only Bob knows whic Bob uses to commit and reveal the solution.
   keccak2566("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266Ethereummysecret") = &#x27;0xf95b1dd61edc3bd962cdea3987c6f55bcb714a02a2c3eb73bd960d6b4387fc36&#x27;
3. Bob then calls commitSolution("0xf95b1dd61edc3bd962cdea3987c6f55bcb714a02a2c3eb73bd960d6b4387fc36"), 
   where he commits the calculated solution hash with gas price set to 15 gwei.
4. Eve is watching the transaction pool for the answer to be submitted.
5. Eve sees Bob&#x27;s answer and he also calls commitSolution("0xf95b1dd61edc3bd962cdea3987c6f55bcb714a02a2c3eb73bd960d6b4387fc36")
   with a higher gas price than Bob (100 gwei).
6. Eve&#x27;s transaction was mined before Bob&#x27;s transaction, but Eve has not got the reward yet.
   He needs to call revealSolution() with exact secret and solution, so lets say he is watching the transaction pool
   to front run Bob as he did previously
7. Then Bob calls the revealSolution("Ethereum", "mysecret") with gas price set to 15 gwei;
8. Let&#x27;s consider that Eve&#x27;s who&#x27;s watching the transaction pool, find&#x27;s Bob&#x27;s reveal solution transaction and he also calls 
   revealSolution("Ethereum", "mysecret") with higher gas price than Bob (100 gwei)
9. Let&#x27;s consider that this time also Eve&#x27;s reveal transaction was mined before Bob&#x27;s transaction, but Eve will be
   reverted with "Hash doesn&#x27;t match" error. Since the revealSolution() function checks the hash using 
   keccak256(msg.sender + solution + secret). So this time eve fails to win the reward.
10.But Bob&#x27;s revealSolution("Ethereum", "mysecret") passes the hash check and gets the reward of 10 ether.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SecuredFindThisHash</span> </span>{
    <span class="hljs-comment">// Struct is used to store the commit details</span>
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Commit</span> {
        <span class="hljs-keyword">bytes32</span> solutionHash;
        <span class="hljs-keyword">uint</span> commitTime;
        <span class="hljs-keyword">bool</span> revealed;
    }

    <span class="hljs-comment">// The hash that is needed to be solved</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> hash <span class="hljs-operator">=</span>
        <span class="hljs-number">0x564ccaf7594d66b1eaaea24fe01f0585bf52ee70852af4eac0cc4b04711cd0e2</span>;

    <span class="hljs-comment">// Address of the winner</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> winner;

    <span class="hljs-comment">// Price to be rewarded</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> reward;

    <span class="hljs-comment">// Status of game</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> ended;

    <span class="hljs-comment">// Mapping to store the commit details with address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> Commit) commits;

    <span class="hljs-comment">// Modifier to check if the game is active</span>
    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">gameActive</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>ended, <span class="hljs-string">"Already ended"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        reward <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-comment">/* 
       Commit function to store the hash calculated using keccak256(address in lowercase + solution + secret). 
       Users can only commit once and if the game is active.
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">commitSolution</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> _solutionHash</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">gameActive</span> </span>{
        Commit <span class="hljs-keyword">storage</span> commit <span class="hljs-operator">=</span> commits[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-built_in">require</span>(commit.commitTime <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Already committed"</span>);
        commit.solutionHash <span class="hljs-operator">=</span> _solutionHash;
        commit.commitTime <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;
        commit.revealed <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-comment">/* 
        Function to get the commit details. It returns a tuple of (solutionHash, commitTime, revealStatus);  
        Users can get solution only if the game is active and they have committed a solutionHash
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMySolution</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title">gameActive</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span>, <span class="hljs-keyword">uint</span>, <span class="hljs-keyword">bool</span></span>) </span>{
        Commit <span class="hljs-keyword">storage</span> commit <span class="hljs-operator">=</span> commits[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-built_in">require</span>(commit.commitTime <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Not committed yet"</span>);
        <span class="hljs-keyword">return</span> (commit.solutionHash, commit.commitTime, commit.revealed);
    }

    <span class="hljs-comment">/* 
        Function to reveal the commit and get the reward. 
        Users can get reveal solution only if the game is active and they have committed a solutionHash before this block and not revealed yet.
        It generates an keccak256(msg.sender + solution + secret) and checks it with the previously commited hash.  
        Assuming that a commit was already included on chain, front runners will not be able to pass this check since the msg.sender is different.
        Then the actual solution is checked using keccak256(solution), if the solution matches, the winner is declared, 
        the game is ended and the reward amount is sent to the winner.
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">revealSolution</span>(<span class="hljs-params">
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _solution,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _secret
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">gameActive</span> </span>{
        Commit <span class="hljs-keyword">storage</span> commit <span class="hljs-operator">=</span> commits[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-built_in">require</span>(commit.commitTime <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Not committed yet"</span>);
        <span class="hljs-built_in">require</span>(commit.commitTime <span class="hljs-operator">&lt;</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>, <span class="hljs-string">"Cannot reveal in the same block"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>commit.revealed, <span class="hljs-string">"Already commited and revealed"</span>);

        <span class="hljs-keyword">bytes32</span> solutionHash <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(Strings.toHexString(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>), _solution, _secret)
        );
        <span class="hljs-built_in">require</span>(solutionHash <span class="hljs-operator">=</span><span class="hljs-operator">=</span> commit.solutionHash, <span class="hljs-string">"Hash doesn&#x27;t match"</span>);

        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_solution)) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> hash, <span class="hljs-string">"Incorrect answer"</span>);

        winner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        ended <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        (<span class="hljs-keyword">bool</span> sent, ) <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>).<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: reward}(<span class="hljs-string">""</span>);
        <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>sent) {
            winner <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>);
            ended <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"Failed to send ether."</span>);
        }
    }
}
</code></pre>`

export default html
