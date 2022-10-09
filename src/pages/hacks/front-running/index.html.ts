// metadata
export const version = "0.8.13"
export const title = "Front Running"
export const description = "An example of a Solidity contract vulnerable to front running"
export const codes = [
    {
        fileName: "FrontRunning.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVA0KcHJhZ21hIHNvbGlkaXR5IF4wLjguMTM7DQoNCi8qDQpBbGljZSBjcmVhdGVzIGEgZ3Vlc3NpbmcgZ2FtZS4NCllvdSB3aW4gMTAgZXRoZXIgaWYgeW91IGNhbiBmaW5kIHRoZSBjb3JyZWN0IHN0cmluZyB0aGF0IGhhc2hlcyB0byB0aGUgdGFyZ2V0DQpoYXNoLiBMZXQncyBzZWUgaG93IHRoaXMgY29udHJhY3QgaXMgdnVsbmVyYWJsZSB0byBmcm9udCBydW5uaW5nLg0KKi8NCg0KLyoNCjEuIEFsaWNlIGRlcGxveXMgRmluZFRoaXNIYXNoIHdpdGggMTAgRXRoZXIuDQoyLiBCb2IgZmluZHMgdGhlIGNvcnJlY3Qgc3RyaW5nIHRoYXQgd2lsbCBoYXNoIHRvIHRoZSB0YXJnZXQgaGFzaC4gKCJFdGhlcmV1bSIpDQozLiBCb2IgY2FsbHMgc29sdmUoIkV0aGVyZXVtIikgd2l0aCBnYXMgcHJpY2Ugc2V0IHRvIDE1IGd3ZWkuDQo0LiBFdmUgaXMgd2F0Y2hpbmcgdGhlIHRyYW5zYWN0aW9uIHBvb2wgZm9yIHRoZSBhbnN3ZXIgdG8gYmUgc3VibWl0dGVkLg0KNS4gRXZlIHNlZXMgQm9iJ3MgYW5zd2VyIGFuZCBjYWxscyBzb2x2ZSgiRXRoZXJldW0iKSB3aXRoIGEgaGlnaGVyIGdhcyBwcmljZQ0KICAgdGhhbiBCb2IgKDEwMCBnd2VpKS4NCjYuIEV2ZSdzIHRyYW5zYWN0aW9uIHdhcyBtaW5lZCBiZWZvcmUgQm9iJ3MgdHJhbnNhY3Rpb24uDQogICBFdmUgd29uIHRoZSByZXdhcmQgb2YgMTAgZXRoZXIuDQoNCldoYXQgaGFwcGVuZWQ/DQpUcmFuc2FjdGlvbnMgdGFrZSBzb21lIHRpbWUgYmVmb3JlIHRoZXkgYXJlIG1pbmVkLg0KVHJhbnNhY3Rpb25zIG5vdCB5ZXQgbWluZWQgYXJlIHB1dCBpbiB0aGUgdHJhbnNhY3Rpb24gcG9vbC4NClRyYW5zYWN0aW9ucyB3aXRoIGhpZ2hlciBnYXMgcHJpY2UgYXJlIHR5cGljYWxseSBtaW5lZCBmaXJzdC4NCkFuIGF0dGFja2VyIGNhbiBnZXQgdGhlIGFuc3dlciBmcm9tIHRoZSB0cmFuc2FjdGlvbiBwb29sLCBzZW5kIGEgdHJhbnNhY3Rpb24NCndpdGggYSBoaWdoZXIgZ2FzIHByaWNlIHNvIHRoYXQgdGhlaXIgdHJhbnNhY3Rpb24gd2lsbCBiZSBpbmNsdWRlZCBpbiBhIGJsb2NrDQpiZWZvcmUgdGhlIG9yaWdpbmFsLg0KKi8NCg0KY29udHJhY3QgRmluZFRoaXNIYXNoIHsNCiAgICBieXRlczMyIHB1YmxpYyBjb25zdGFudCBoYXNoID0NCiAgICAgICAgMHg1NjRjY2FmNzU5NGQ2NmIxZWFhZWEyNGZlMDFmMDU4NWJmNTJlZTcwODUyYWY0ZWFjMGNjNGIwNDcxMWNkMGUyOw0KDQogICAgY29uc3RydWN0b3IoKSBwYXlhYmxlIHt9DQoNCiAgICBmdW5jdGlvbiBzb2x2ZShzdHJpbmcgbWVtb3J5IHNvbHV0aW9uKSBwdWJsaWMgew0KICAgICAgICByZXF1aXJlKGhhc2ggPT0ga2VjY2FrMjU2KGFiaS5lbmNvZGVQYWNrZWQoc29sdXRpb24pKSwgIkluY29ycmVjdCBhbnN3ZXIiKTsNCg0KICAgICAgICAoYm9vbCBzZW50LCApID0gbXNnLnNlbmRlci5jYWxse3ZhbHVlOiAxMCBldGhlcn0oIiIpOw0KICAgICAgICByZXF1aXJlKHNlbnQsICJGYWlsZWQgdG8gc2VuZCBFdGhlciIpOw0KICAgIH0NCn0NCg==",
    },
    {
        fileName: "FrontRunningSolution.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVA0KcHJhZ21hIHNvbGlkaXR5IF4wLjguMTM7DQoNCmltcG9ydCAiZ2l0aHViLmNvbS9PcGVuWmVwcGVsaW4vb3BlbnplcHBlbGluLWNvbnRyYWN0cy9ibG9iL3JlbGVhc2UtdjQuNS9jb250cmFjdHMvdXRpbHMvU3RyaW5ncy5zb2wiOw0KDQoNCi8qDQogICBOb3cgTGV0J3Mgc2VlIGhvdyB0byBndWFyZCBmcm9tIGZyb250IHJ1bm5pbmcgdXNpbmcgY29tbWl0IHJldmVhbCBzY2hlbWUuDQoqLw0KDQovKg0KMS4gQWxpY2UgZGVwbG95cyBTZWN1cmVkRmluZFRoaXNIYXNoIHdpdGggMTAgRXRoZXIuDQoyLiBCb2IgZmluZHMgdGhlIGNvcnJlY3Qgc3RyaW5nIHRoYXQgd2lsbCBoYXNoIHRvIHRoZSB0YXJnZXQgaGFzaC4gKCJFdGhlcmV1bSIpLg0KMy4gQm9iIHRoZW4gZmluZHMgdGhlIGtlY2NhazI1NihBZGRyZXNzIGluIGxvd2VyY2FzZSArIFNvbHV0aW9uICsgU2VjcmV0KS4gDQogICBBZGRyZXNzIGlzIGhpcyB3YWxsZXQgYWRkcmVzcyBpbiBsb3dlcmNhc2UsIHNvbHV0aW9uIGlzICJFdGhlcmV1bSIsIFNlY3JldCBpcyBsaWtlIGFuIHBhc3N3b3JkICgibXlzZWNyZXQiKSANCiAgIHRoYXQgb25seSBCb2Iga25vd3Mgd2hpYyBCb2IgdXNlcyB0byBjb21taXQgYW5kIHJldmVhbCB0aGUgc29sdXRpb24uDQogICBrZWNjYWsyNTY2KCIweGYzOUZkNmU1MWFhZDg4RjZGNGNlNmFCODgyNzI3OWNmZkZiOTIyNjZFdGhlcmV1bW15c2VjcmV0IikgPSAnMHhmOTViMWRkNjFlZGMzYmQ5NjJjZGVhMzk4N2M2ZjU1YmNiNzE0YTAyYTJjM2ViNzNiZDk2MGQ2YjQzODdmYzM2Jw0KMy4gQm9iIHRoZW4gY2FsbHMgY29tbWl0U29sdXRpb24oIjB4Zjk1YjFkZDYxZWRjM2JkOTYyY2RlYTM5ODdjNmY1NWJjYjcxNGEwMmEyYzNlYjczYmQ5NjBkNmI0Mzg3ZmMzNiIpLCANCiAgIHdoZXJlIGhlIGNvbW1pdHMgdGhlIGNhbGN1bGF0ZWQgc29sdXRpb24gaGFzaCB3aXRoIGdhcyBwcmljZSBzZXQgdG8gMTUgZ3dlaS4NCjQuIEV2ZSBpcyB3YXRjaGluZyB0aGUgdHJhbnNhY3Rpb24gcG9vbCBmb3IgdGhlIGFuc3dlciB0byBiZSBzdWJtaXR0ZWQuDQo1LiBFdmUgc2VlcyBCb2IncyBhbnN3ZXIgYW5kIGhlIGFsc28gY2FsbHMgY29tbWl0U29sdXRpb24oIjB4Zjk1YjFkZDYxZWRjM2JkOTYyY2RlYTM5ODdjNmY1NWJjYjcxNGEwMmEyYzNlYjczYmQ5NjBkNmI0Mzg3ZmMzNiIpDQogICB3aXRoIGEgaGlnaGVyIGdhcyBwcmljZSB0aGFuIEJvYiAoMTAwIGd3ZWkpLg0KNi4gRXZlJ3MgdHJhbnNhY3Rpb24gd2FzIG1pbmVkIGJlZm9yZSBCb2IncyB0cmFuc2FjdGlvbiwgYnV0IEV2ZSBoYXMgbm90IGdvdCB0aGUgcmV3YXJkIHlldC4NCiAgIEhlIG5lZWRzIHRvIGNhbGwgcmV2ZWFsU29sdXRpb24oKSB3aXRoIGV4YWN0IHNlY3JldCBhbmQgc29sdXRpb24sIHNvIGxldHMgc2F5IGhlIGlzIHdhdGNoaW5nIHRoZSB0cmFuc2FjdGlvbiBwb29sDQogICB0byBmcm9udCBydW4gQm9iIGFzIGhlIGRpZCBwcmV2aW91c2x5DQo3LiBUaGVuIEJvYiBjYWxscyB0aGUgcmV2ZWFsU29sdXRpb24oIkV0aGVyZXVtIiwgIm15c2VjcmV0Iikgd2l0aCBnYXMgcHJpY2Ugc2V0IHRvIDE1IGd3ZWk7DQo4LiBMZXQncyBjb25zaWRlciB0aGF0IEV2ZSdzIHdobydzIHdhdGNoaW5nIHRoZSB0cmFuc2FjdGlvbiBwb29sLCBmaW5kJ3MgQm9iJ3MgcmV2ZWFsIHNvbHV0aW9uIHRyYW5zYWN0aW9uIGFuZCBoZSBhbHNvIGNhbGxzIA0KICAgcmV2ZWFsU29sdXRpb24oIkV0aGVyZXVtIiwgIm15c2VjcmV0Iikgd2l0aCBoaWdoZXIgZ2FzIHByaWNlIHRoYW4gQm9iICgxMDAgZ3dlaSkNCjkuIExldCdzIGNvbnNpZGVyIHRoYXQgdGhpcyB0aW1lIGFsc28gRXZlJ3MgcmV2ZWFsIHRyYW5zYWN0aW9uIHdhcyBtaW5lZCBiZWZvcmUgQm9iJ3MgdHJhbnNhY3Rpb24sIGJ1dCBFdmUgd2lsbCBiZQ0KICAgcmV2ZXJ0ZWQgd2l0aCAiSGFzaCBkb2Vzbid0IG1hdGNoIiBlcnJvci4gU2luY2UgdGhlIHJldmVhbFNvbHV0aW9uKCkgZnVuY3Rpb24gY2hlY2tzIHRoZSBoYXNoIHVzaW5nIA0KICAga2VjY2FrMjU2KG1zZy5zZW5kZXIgKyBzb2x1dGlvbiArIHNlY3JldCkuIFNvIHRoaXMgdGltZSBldmUgZmFpbHMgdG8gd2luIHRoZSByZXdhcmQuDQoxMC5CdXQgQm9iJ3MgcmV2ZWFsU29sdXRpb24oIkV0aGVyZXVtIiwgIm15c2VjcmV0IikgcGFzc2VzIHRoZSBoYXNoIGNoZWNrIGFuZCBnZXRzIHRoZSByZXdhcmQgb2YgMTAgZXRoZXIuDQoqLw0KDQoNCmNvbnRyYWN0IFNlY3VyZWRGaW5kVGhpc0hhc2ggew0KDQogICAgLy8gU3RydWN0IGlzIHVzZWQgdG8gc3RvcmUgdGhlIGNvbW1pdCBkZXRhaWxzDQogICAgc3RydWN0IENvbW1pdCB7DQogICAgICAgIGJ5dGVzMzIgc29sdXRpb25IYXNoOw0KICAgICAgICB1aW50IGNvbW1pdFRpbWU7DQogICAgICAgIGJvb2wgcmV2ZWFsZWQ7DQogICAgfQ0KDQogICAgLy8gVGhlIGhhc2ggdGhhdCBpcyBuZWVkZWQgdG8gYmUgc29sdmVkDQogICAgYnl0ZXMzMiBwdWJsaWMgaGFzaCA9IDB4NTY0Y2NhZjc1OTRkNjZiMWVhYWVhMjRmZTAxZjA1ODViZjUyZWU3MDg1MmFmNGVhYzBjYzRiMDQ3MTFjZDBlMjsNCiAgICANCiAgICAvLyBBZGRyZXNzIG9mIHRoZSB3aW5uZXINCiAgICBhZGRyZXNzIHB1YmxpYyB3aW5uZXI7DQoNCiAgICAvLyBQcmljZSB0byBiZSByZXdhcmRlZA0KICAgIHVpbnQgcHVibGljIHJld2FyZDsNCg0KICAgIC8vIFN0YXR1cyBvZiBnYW1lDQogICAgYm9vbCBwdWJsaWMgZW5kZWQ7DQoNCiAgICAvLyBNYXBwaW5nIHRvIHN0b3JlIHRoZSBjb21taXQgZGV0YWlscyB3aXRoIGFkZHJlc3MNCiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gQ29tbWl0KSBjb21taXRzOw0KDQogICAgLy8gTW9kaWZpZXIgdG8gY2hlY2sgaWYgdGhlIGdhbWUgaXMgYWN0aXZlDQogICAgbW9kaWZpZXIgZ2FtZUFjdGl2ZSB7DQogICAgICAgIHJlcXVpcmUoIWVuZGVkLCAiQWxyZWFkeSBlbmRlZCIpOw0KICAgICAgICBfOw0KICAgIH0NCg0KICAgIGNvbnN0cnVjdG9yKCkgcGF5YWJsZSB7DQogICAgICAgIHJld2FyZCA9IG1zZy52YWx1ZTsNCiAgICB9DQoNCiAgICAvKiANCiAgICAgICBDb21taXQgZnVuY3Rpb24gdG8gc3RvcmUgdGhlIGhhc2ggY2FsY3VsYXRlZCB1c2luZyBrZWNjYWsyNTYoYWRkcmVzcyBpbiBsb3dlcmNhc2UgKyBzb2x1dGlvbiArIHNlY3JldCkuIA0KICAgICAgIFVzZXJzIGNhbiBvbmx5IGNvbW1pdCBvbmNlIGFuZCBpZiB0aGUgZ2FtZSBpcyBhY3RpdmUuDQogICAgKi8NCiAgICBmdW5jdGlvbiBjb21taXRTb2x1dGlvbihieXRlczMyIF9zb2x1dGlvbkhhc2gpIHB1YmxpYyBnYW1lQWN0aXZlIHsNCiAgICAgICAgQ29tbWl0IHN0b3JhZ2UgY29tbWl0ID0gY29tbWl0c1ttc2cuc2VuZGVyXTsNCiAgICAgICAgcmVxdWlyZShjb21taXQuY29tbWl0VGltZSA9PSAwLCAiQWxyZWFkeSBjb21taXR0ZWQiKTsNCiAgICAgICAgY29tbWl0LnNvbHV0aW9uSGFzaCA9IF9zb2x1dGlvbkhhc2g7DQogICAgICAgIGNvbW1pdC5jb21taXRUaW1lID0gYmxvY2sudGltZXN0YW1wOw0KICAgICAgICBjb21taXQucmV2ZWFsZWQgPSBmYWxzZTsNCiAgICB9DQoNCiAgICAvKiANCiAgICAgICAgRnVuY3Rpb24gdG8gZ2V0IHRoZSBjb21taXQgZGV0YWlscy4gSXQgcmV0dXJucyBhIHR1cGxlIG9mIChzb2x1dGlvbkhhc2gsIGNvbW1pdFRpbWUsIHJldmVhbFN0YXR1cyk7ICANCiAgICAgICAgVXNlcnMgY2FuIGdldCBzb2x1dGlvbiBvbmx5IGlmIHRoZSBnYW1lIGlzIGFjdGl2ZSBhbmQgdGhleSBoYXZlIGNvbW1pdHRlZCBhIHNvbHV0aW9uSGFzaA0KICAgICovDQogICAgZnVuY3Rpb24gZ2V0TXlTb2x1dGlvbigpIHB1YmxpYyB2aWV3IGdhbWVBY3RpdmUgcmV0dXJucyhieXRlczMyLCB1aW50LCBib29sKSB7DQogICAgICAgIENvbW1pdCBzdG9yYWdlIGNvbW1pdCA9IGNvbW1pdHNbbXNnLnNlbmRlcl07DQogICAgICAgIHJlcXVpcmUoY29tbWl0LmNvbW1pdFRpbWUgIT0gMCwgIk5vdCBjb21taXR0ZWQgeWV0Iik7DQogICAgICAgIHJldHVybiAoY29tbWl0LnNvbHV0aW9uSGFzaCwgY29tbWl0LmNvbW1pdFRpbWUsIGNvbW1pdC5yZXZlYWxlZCk7ICAgICAgICANCiAgICB9DQoNCiAgICAvKiANCiAgICAgICAgRnVuY3Rpb24gdG8gcmV2ZWFsIHRoZSBjb21taXQgYW5kIGdldCB0aGUgcmV3YXJkLiANCiAgICAgICAgVXNlcnMgY2FuIGdldCByZXZlYWwgc29sdXRpb24gb25seSBpZiB0aGUgZ2FtZSBpcyBhY3RpdmUgYW5kIHRoZXkgaGF2ZSBjb21taXR0ZWQgYSBzb2x1dGlvbkhhc2ggYW5kIG5vdCByZXZlYWxlZCB5ZXQuDQogICAgICAgIEl0IGdlbmVyYXRlcyBhbiBrZWNjYWsyNTYobXNnLnNlbmRlciArIHNvbHV0aW9uICsgc2VjcmV0KSBhbmQgY2hlY2tzIGl0IHdpdGggdGhlIHByZXZpb3VzbHkgY29tbWl0ZWQgaGFzaC4gIA0KICAgICAgICBGcm9udCBydW5uZXJzIHdpbGwgbm90IGJlIGFibGUgdG8gcGFzcyB0aGlzIGNoZWNrIHNpbmNlIHRoZSBtc2cuc2VuZGVyIGlzIGRpZmZlcmVudC4NCiAgICAgICAgVGhlbiB0aGUgYWN0dWFsIHNvbHV0aW9uIGlzIGNoZWNrZWQgdXNpbmcga2VjY2FrMjU2KHNvbHV0aW9uKSwgaWYgdGhlIHNvbHV0aW9uIG1hdGNoZXMsIHRoZSB3aW5uZXIgaXMgZGVjbGFyZWQsIA0KICAgICAgICB0aGUgZ2FtZSBpcyBlbmRlZCBhbmQgdGhlIHJld2FyZCBhbW91bnQgaXMgc2VudCB0byB0aGUgd2lubmVyLg0KICAgICovDQogICAgZnVuY3Rpb24gcmV2ZWFsU29sdXRpb24gKHN0cmluZyBtZW1vcnkgX3NvbHV0aW9uLCBzdHJpbmcgbWVtb3J5IF9zZWNyZXQpIHB1YmxpYyBnYW1lQWN0aXZlIHsNCiAgICAgICAgQ29tbWl0IHN0b3JhZ2UgY29tbWl0ID0gY29tbWl0c1ttc2cuc2VuZGVyXTsNCiAgICAgICAgcmVxdWlyZShjb21taXQuY29tbWl0VGltZSAhPSAwLCAiTm90IGNvbW1pdHRlZCB5ZXQiKTsNCiAgICAgICAgcmVxdWlyZSghY29tbWl0LnJldmVhbGVkLCAiQWxyZWFkeSBjb21taXRlZCBhbmQgcmV2ZWFsZWQiKTsNCg0KICAgICAgICBieXRlczMyIHNvbHV0aW9uSGFzaCA9IGtlY2NhazI1NihhYmkuZW5jb2RlUGFja2VkKFN0cmluZ3MudG9IZXhTdHJpbmcobXNnLnNlbmRlciksIF9zb2x1dGlvbiwgX3NlY3JldCkpOw0KICAgICAgICByZXF1aXJlKHNvbHV0aW9uSGFzaCA9PSBjb21taXQuc29sdXRpb25IYXNoLCAiSGFzaCBkb2Vzbid0IG1hdGNoIik7DQoNCiAgICAgICAgcmVxdWlyZShrZWNjYWsyNTYoYWJpLmVuY29kZVBhY2tlZChfc29sdXRpb24pKSAhPSBoYXNoLCAiSW5jb3JyZWN0IGFuc3dlciIpOw0KDQogICAgICAgIHdpbm5lciA9IG1zZy5zZW5kZXI7DQogICAgICAgIGVuZGVkID0gdHJ1ZTsNCg0KICAgICAgICAoYm9vbCBzZW50LCkgPSBwYXlhYmxlKG1zZy5zZW5kZXIpLmNhbGx7dmFsdWU6IHJld2FyZH0oIiIpOw0KICAgICAgICBpZighc2VudCl7DQogICAgICAgICAgICB3aW5uZXIgPSBhZGRyZXNzKDApOw0KICAgICAgICAgICAgZW5kZWQgPSBmYWxzZTsNCiAgICAgICAgICAgIHJldmVydCgiRmFpbGVkIHRvIHNlbmQgZXRoZXIuIik7DQogICAgICAgIH0NCiAgICB9DQp9DQo=",
    },
]

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>Transactions take some time before they are mined. An attacker can watch the transaction pool
and send a transaction, have it included in a block before the original transaction.
This mechanism can be abused to re-order transactions to the attacker&#39;s advantage.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

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
</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>use commit-reveal scheme (<a href="https://medium.com/swlh/exploring-commit-reveal-schemes-on-ethereum-c4ff5a777db8">https://medium.com/swlh/exploring-commit-reveal-schemes-on-ethereum-c4ff5a777db8</a>)</li>
<li>use submarine send (<a href="https://libsubmarine.org/">https://libsubmarine.org/</a>)</li>
</ul>
<h3 id="commit-reveal-schemes">Commit-Reveal Schemes</h3>
<p>A commitment scheme is a cryptographic algorithm used to allow someone to commit to a value while keeping it hidden from others with the ability to reveal it later. The values in a commitment scheme are binding, meaning that no one can change them once committed. The scheme has two phases: a commit phase in which a value is chosen and specified, and a reveal phase in which the value is revealed and checked.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

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
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> hash <span class="hljs-operator">=</span> <span class="hljs-number">0x564ccaf7594d66b1eaaea24fe01f0585bf52ee70852af4eac0cc4b04711cd0e2</span>;
    
    <span class="hljs-comment">// Address of the winner</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> winner;

    <span class="hljs-comment">// Price to be rewarded</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> reward;

    <span class="hljs-comment">// Status of game</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> ended;

    <span class="hljs-comment">// Mapping to store the commit details with address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> Commit) commits;

    <span class="hljs-comment">// Modifier to check if the game is active</span>
    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">gameActive</span> </span>{
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMySolution</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title">gameActive</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span>, <span class="hljs-keyword">uint</span>, <span class="hljs-keyword">bool</span></span>) </span>{
        Commit <span class="hljs-keyword">storage</span> commit <span class="hljs-operator">=</span> commits[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-built_in">require</span>(commit.commitTime <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Not committed yet"</span>);
        <span class="hljs-keyword">return</span> (commit.solutionHash, commit.commitTime, commit.revealed);        
    }

    <span class="hljs-comment">/* 
        Function to reveal the commit and get the reward. 
        Users can get reveal solution only if the game is active and they have committed a solutionHash and not revealed yet.
        It generates an keccak256(msg.sender + solution + secret) and checks it with the previously commited hash.  
        Front runners will not be able to pass this check since the msg.sender is different.
        Then the actual solution is checked using keccak256(solution), if the solution matches, the winner is declared, 
        the game is ended and the reward amount is sent to the winner.
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">revealSolution</span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _solution, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _secret</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title">gameActive</span> </span>{
        Commit <span class="hljs-keyword">storage</span> commit <span class="hljs-operator">=</span> commits[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];
        <span class="hljs-built_in">require</span>(commit.commitTime <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>, <span class="hljs-string">"Not committed yet"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>commit.revealed, <span class="hljs-string">"Already commited and revealed"</span>);

        <span class="hljs-keyword">bytes32</span> solutionHash <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(Strings.toHexString(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>), _solution, _secret));
        <span class="hljs-built_in">require</span>(solutionHash <span class="hljs-operator">=</span><span class="hljs-operator">=</span> commit.solutionHash, <span class="hljs-string">"Hash doesn&#x27;t match"</span>);

        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodePacked</span>(_solution)) <span class="hljs-operator">!</span><span class="hljs-operator">=</span> hash, <span class="hljs-string">"Incorrect answer"</span>);

        winner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        ended <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        (<span class="hljs-keyword">bool</span> sent,) <span class="hljs-operator">=</span> <span class="hljs-keyword">payable</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>).<span class="hljs-built_in">call</span>{<span class="hljs-built_in">value</span>: reward}(<span class="hljs-string">""</span>);
        <span class="hljs-keyword">if</span>(<span class="hljs-operator">!</span>sent){
            winner <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>);
            ended <span class="hljs-operator">=</span> <span class="hljs-literal">false</span>;
            <span class="hljs-keyword">revert</span>(<span class="hljs-string">"Failed to send ether."</span>);
        }
    }
}
</code></pre>
`

export default html
