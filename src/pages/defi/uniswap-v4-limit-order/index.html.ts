// metadata
export const version = "0.8.26"
export const title = "Uniswap V4 Limit Order"
export const description = "Example of a limit order hook for Uniswap V4"
export const cyfrinLink = ""

export const keywords = ["defi", "uniswap", "v4", "limit", "order", "hook", "amm"]

export const codes = [
  {
    fileName: "UniswapV4LimitOrder.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8vLyBAbm90aWNlIFNpbXBsaWZpZWQgVW5pc3dhcCBWNCBMaW1pdCBPcmRlciBIb29rCi8vLyBAZGV2IEhvb2tzIGFsbG93IGN1c3RvbSBsb2dpYyB0byBleGVjdXRlIGR1cmluZyBzd2FwIGxpZmVjeWNsZQovLy8gVGhpcyBleGFtcGxlIGRlbW9uc3RyYXRlcyBhIGJhc2ljIGxpbWl0IG9yZGVyIG1lY2hhbmlzbSB1c2luZyBhZnRlclN3YXAKY29udHJhY3QgTGltaXRPcmRlckhvb2sgaXMgSUhvb2tzIHsKICAgIElQb29sTWFuYWdlciBwdWJsaWMgaW1tdXRhYmxlIHBvb2xNYW5hZ2VyOwoKICAgIC8vIE1hcHBpbmc6IHBvb2xJZCA9PiB0aWNrID0+IHplcm9Gb3JPbmUgPT4gdG90YWwgbGlxdWlkaXR5CiAgICBtYXBwaW5nKGJ5dGVzMzIgPT4gbWFwcGluZyhpbnQyNCA9PiBtYXBwaW5nKGJvb2wgPT4gdWludDI1NikpKSBwdWJsaWMgdGlja0xpcXVpZGl0eTsKCiAgICAvLyBNYXBwaW5nOiBwb29sSWQgPT4gdGljayA9PiB6ZXJvRm9yT25lID0+IHVzZXIgPT4gbGlxdWlkaXR5CiAgICBtYXBwaW5nKGJ5dGVzMzIgPT4gbWFwcGluZyhpbnQyNCA9PiBtYXBwaW5nKGJvb2wgPT4gbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpKSkpCiAgICAgICAgcHVibGljIHVzZXJQb3NpdGlvbnM7CgogICAgZXJyb3IgTm90UG9vbE1hbmFnZXIoKTsKICAgIGVycm9yIEludmFsaWRUaWNrKCk7CgogICAgY29uc3RydWN0b3IoSVBvb2xNYW5hZ2VyIF9wb29sTWFuYWdlcikgewogICAgICAgIHBvb2xNYW5hZ2VyID0gX3Bvb2xNYW5hZ2VyOwogICAgfQoKICAgIC8vLyBAbm90aWNlIFBsYWNlIGEgbGltaXQgb3JkZXIgYXQgYSBzcGVjaWZpYyB0aWNrCiAgICAvLy8gQHBhcmFtIGtleSBUaGUgcG9vbCB0byBwbGFjZSB0aGUgb3JkZXIgaW4KICAgIC8vLyBAcGFyYW0gdGljayBUaGUgdGljayAocHJpY2UgcG9pbnQpIGZvciB0aGUgbGltaXQgb3JkZXIKICAgIC8vLyBAcGFyYW0gemVyb0Zvck9uZSB0cnVlID0gc2VsbCB0b2tlbjAgZm9yIHRva2VuMSwgZmFsc2UgPSBzZWxsIHRva2VuMSBmb3IgdG9rZW4wCiAgICAvLy8gQHBhcmFtIGFtb3VudCBBbW91bnQgb2YgdG9rZW5zIHRvIHNlbGwKICAgIGZ1bmN0aW9uIHBsYWNlTGltaXRPcmRlcigKICAgICAgICBQb29sS2V5IGNhbGxkYXRhIGtleSwKICAgICAgICBpbnQyNCB0aWNrLAogICAgICAgIGJvb2wgemVyb0Zvck9uZSwKICAgICAgICB1aW50MjU2IGFtb3VudAogICAgKSBleHRlcm5hbCB7CiAgICAgICAgLy8gVmFsaWRhdGUgdGljayBpcyBvbiB0aGUgY29ycmVjdCBzaWRlIG9mIGN1cnJlbnQgcHJpY2UKICAgICAgICAoLCBpbnQyNCBjdXJyZW50VGljaywsKSA9IHBvb2xNYW5hZ2VyLmdldFNsb3QwKHRvSWQoa2V5KSk7CgogICAgICAgIC8vIEZvciBzZWxsaW5nIHRva2VuMDogdGljayBtdXN0IGJlIGFib3ZlIGN1cnJlbnQgKHByaWNlIGdvZXMgdXApCiAgICAgICAgLy8gRm9yIHNlbGxpbmcgdG9rZW4xOiB0aWNrIG11c3QgYmUgYmVsb3cgY3VycmVudCAocHJpY2UgZ29lcyBkb3duKQogICAgICAgIGlmICh6ZXJvRm9yT25lICYmIHRpY2sgPD0gY3VycmVudFRpY2spIHJldmVydCBJbnZhbGlkVGljaygpOwogICAgICAgIGlmICghemVyb0Zvck9uZSAmJiB0aWNrID49IGN1cnJlbnRUaWNrKSByZXZlcnQgSW52YWxpZFRpY2soKTsKCiAgICAgICAgYnl0ZXMzMiBwb29sSWQgPSB0b0lkKGtleSk7CgogICAgICAgIC8vIFRyYW5zZmVyIHRva2VucyBmcm9tIHVzZXIKICAgICAgICBDdXJyZW5jeSBjdXJyZW5jeSA9IHplcm9Gb3JPbmUgPyBrZXkuY3VycmVuY3kwIDoga2V5LmN1cnJlbmN5MTsKICAgICAgICBJRVJDMjAoQ3VycmVuY3kudW53cmFwKGN1cnJlbmN5KSkudHJhbnNmZXJGcm9tKAogICAgICAgICAgICBtc2cuc2VuZGVyLAogICAgICAgICAgICBhZGRyZXNzKHRoaXMpLAogICAgICAgICAgICBhbW91bnQKICAgICAgICApOwoKICAgICAgICAvLyBSZWNvcmQgdGhlIHBvc2l0aW9uCiAgICAgICAgdGlja0xpcXVpZGl0eVtwb29sSWRdW3RpY2tdW3plcm9Gb3JPbmVdICs9IGFtb3VudDsKICAgICAgICB1c2VyUG9zaXRpb25zW3Bvb2xJZF1bdGlja11bemVyb0Zvck9uZV1bbXNnLnNlbmRlcl0gKz0gYW1vdW50OwogICAgfQoKICAgIC8vLyBAbm90aWNlIENhbGxlZCBieSBQb29sTWFuYWdlciBhZnRlciBldmVyeSBzd2FwCiAgICAvLy8gQGRldiBDaGVjayBpZiBwcmljZSBjcm9zc2VkIGFueSBsaW1pdCBvcmRlciB0aWNrcyBhbmQgZXhlY3V0ZSB0aGVtCiAgICBmdW5jdGlvbiBhZnRlclN3YXAoCiAgICAgICAgYWRkcmVzcywKICAgICAgICBQb29sS2V5IGNhbGxkYXRhIGtleSwKICAgICAgICBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSBwYXJhbXMsCiAgICAgICAgQmFsYW5jZURlbHRhLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhCiAgICApIGV4dGVybmFsIG92ZXJyaWRlIHJldHVybnMgKGJ5dGVzNCwgaW50MTI4KSB7CiAgICAgICAgaWYgKG1zZy5zZW5kZXIgIT0gYWRkcmVzcyhwb29sTWFuYWdlcikpIHJldmVydCBOb3RQb29sTWFuYWdlcigpOwoKICAgICAgICAoLCBpbnQyNCBjdXJyZW50VGljaywsKSA9IHBvb2xNYW5hZ2VyLmdldFNsb3QwKHRvSWQoa2V5KSk7CiAgICAgICAgYnl0ZXMzMiBwb29sSWQgPSB0b0lkKGtleSk7CgogICAgICAgIC8vIENoZWNrIGlmIGFueSBsaW1pdCBvcmRlcnMgYXQgdGhpcyB0aWNrIHNob3VsZCBiZSBmaWxsZWQKICAgICAgICAvLyB6ZXJvRm9yT25lIHN3YXBzIG1vdmUgcHJpY2UgZG93biwgc28gY2hlY2sgc2VsbC10b2tlbjEgb3JkZXJzCiAgICAgICAgLy8gIXplcm9Gb3JPbmUgc3dhcHMgbW92ZSBwcmljZSB1cCwgc28gY2hlY2sgc2VsbC10b2tlbjAgb3JkZXJzCiAgICAgICAgYm9vbCBjaGVja1plcm9Gb3JPbmUgPSAhcGFyYW1zLnplcm9Gb3JPbmU7CgogICAgICAgIHVpbnQyNTYgbGlxdWlkaXR5ID0gdGlja0xpcXVpZGl0eVtwb29sSWRdW2N1cnJlbnRUaWNrXVtjaGVja1plcm9Gb3JPbmVdOwoKICAgICAgICBpZiAobGlxdWlkaXR5ID4gMCkgewogICAgICAgICAgICAvLyBFeGVjdXRlIGxpbWl0IG9yZGVycyBhdCB0aGlzIHRpY2sKICAgICAgICAgICAgX2V4ZWN1dGVMaW1pdE9yZGVycyhrZXksIGN1cnJlbnRUaWNrLCBjaGVja1plcm9Gb3JPbmUsIGxpcXVpZGl0eSk7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gKElIb29rcy5hZnRlclN3YXAuc2VsZWN0b3IsIDApOwogICAgfQoKICAgIC8vLyBAbm90aWNlIEV4ZWN1dGUgbGltaXQgb3JkZXJzIGF0IGEgc3BlY2lmaWMgdGljawogICAgZnVuY3Rpb24gX2V4ZWN1dGVMaW1pdE9yZGVycygKICAgICAgICBQb29sS2V5IGNhbGxkYXRhIGtleSwKICAgICAgICBpbnQyNCB0aWNrLAogICAgICAgIGJvb2wgemVyb0Zvck9uZSwKICAgICAgICB1aW50MjU2IGFtb3VudAogICAgKSBpbnRlcm5hbCB7CiAgICAgICAgLy8gSW4gYSBmdWxsIGltcGxlbWVudGF0aW9uLCB0aGlzIHdvdWxkOgogICAgICAgIC8vIDEuIFN3YXAgdGhlIHRva2VucyB1c2luZyBwb29sTWFuYWdlci5zd2FwKCkKICAgICAgICAvLyAyLiBEaXN0cmlidXRlIG91dHB1dCB0b2tlbnMgdG8gbGltaXQgb3JkZXIgcGxhY2VycwogICAgICAgIC8vIDMuIENsZWFyIHRoZSBmaWxsZWQgcG9zaXRpb25zCgogICAgICAgIGJ5dGVzMzIgcG9vbElkID0gdG9JZChrZXkpOwoKICAgICAgICAvLyBDbGVhciB0aGUgdGljayBsaXF1aWRpdHkgKG9yZGVycyBhcmUgZmlsbGVkKQogICAgICAgIHRpY2tMaXF1aWRpdHlbcG9vbElkXVt0aWNrXVt6ZXJvRm9yT25lXSA9IDA7CgogICAgICAgIC8vIEVtaXQgZXZlbnQgZm9yIG9mZi1jaGFpbiB0cmFja2luZwogICAgICAgIGVtaXQgTGltaXRPcmRlckZpbGxlZChwb29sSWQsIHRpY2ssIHplcm9Gb3JPbmUsIGFtb3VudCk7CiAgICB9CgogICAgLy8vIEBub3RpY2UgVXNlcnMgY2FuIGNhbmNlbCB1bmZpbGxlZCBsaW1pdCBvcmRlcnMKICAgIGZ1bmN0aW9uIGNhbmNlbExpbWl0T3JkZXIoCiAgICAgICAgUG9vbEtleSBjYWxsZGF0YSBrZXksCiAgICAgICAgaW50MjQgdGljaywKICAgICAgICBib29sIHplcm9Gb3JPbmUKICAgICkgZXh0ZXJuYWwgewogICAgICAgIGJ5dGVzMzIgcG9vbElkID0gdG9JZChrZXkpOwogICAgICAgIHVpbnQyNTYgYW1vdW50ID0gdXNlclBvc2l0aW9uc1twb29sSWRdW3RpY2tdW3plcm9Gb3JPbmVdW21zZy5zZW5kZXJdOwoKICAgICAgICByZXF1aXJlKGFtb3VudCA+IDAsICJObyBwb3NpdGlvbiIpOwoKICAgICAgICAvLyBDbGVhciBwb3NpdGlvbgogICAgICAgIHVzZXJQb3NpdGlvbnNbcG9vbElkXVt0aWNrXVt6ZXJvRm9yT25lXVttc2cuc2VuZGVyXSA9IDA7CiAgICAgICAgdGlja0xpcXVpZGl0eVtwb29sSWRdW3RpY2tdW3plcm9Gb3JPbmVdIC09IGFtb3VudDsKCiAgICAgICAgLy8gUmV0dXJuIHRva2VucwogICAgICAgIEN1cnJlbmN5IGN1cnJlbmN5ID0gemVyb0Zvck9uZSA/IGtleS5jdXJyZW5jeTAgOiBrZXkuY3VycmVuY3kxOwogICAgICAgIElFUkMyMChDdXJyZW5jeS51bndyYXAoY3VycmVuY3kpKS50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnQpOwogICAgfQoKICAgIC8vLyBAbm90aWNlIFJldHVybiBob29rIHBlcm1pc3Npb25zIC0gd2Ugb25seSBuZWVkIGFmdGVyU3dhcAogICAgZnVuY3Rpb24gZ2V0SG9va1Blcm1pc3Npb25zKCkgcHVibGljIHB1cmUgcmV0dXJucyAoSG9va3MuUGVybWlzc2lvbnMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIEhvb2tzLlBlcm1pc3Npb25zKHsKICAgICAgICAgICAgYmVmb3JlSW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVySW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZUFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyQWRkTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJSZW1vdmVMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVTd2FwOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJTd2FwOiB0cnVlLCAvLyBXZSBuZWVkIHRoaXMhCiAgICAgICAgICAgIGJlZm9yZURvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcFJldHVybkRlbHRhOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJTd2FwUmV0dXJuRGVsdGE6IGZhbHNlLAogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eVJldHVybkRlbHRhOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJSZW1vdmVMaXF1aWRpdHlSZXR1cm5EZWx0YTogZmFsc2UKICAgICAgICB9KTsKICAgIH0KCiAgICAvLyBIZWxwZXIgdG8gY29tcHV0ZSBwb29sIElECiAgICBmdW5jdGlvbiB0b0lkKFBvb2xLZXkgbWVtb3J5IGtleSkgaW50ZXJuYWwgcHVyZSByZXR1cm5zIChieXRlczMyKSB7CiAgICAgICAgcmV0dXJuIGtlY2NhazI1NihhYmkuZW5jb2RlKGtleSkpOwogICAgfQoKICAgIC8vIFJlcXVpcmVkIGhvb2sgaW50ZXJmYWNlIGZ1bmN0aW9ucyAobm8tb3AgZm9yIHVudXNlZCBob29rcykKICAgIGZ1bmN0aW9uIGJlZm9yZUluaXRpYWxpemUoYWRkcmVzcywgUG9vbEtleSBjYWxsZGF0YSwgdWludDE2MCkKICAgICAgICBleHRlcm5hbCBwdXJlIG92ZXJyaWRlIHJldHVybnMgKGJ5dGVzNCkgewogICAgICAgIHJldHVybiBJSG9va3MuYmVmb3JlSW5pdGlhbGl6ZS5zZWxlY3RvcjsKICAgIH0KICAgIGZ1bmN0aW9uIGFmdGVySW5pdGlhbGl6ZShhZGRyZXNzLCBQb29sS2V5IGNhbGxkYXRhLCB1aW50MTYwLCBpbnQyNCkKICAgICAgICBleHRlcm5hbCBwdXJlIG92ZXJyaWRlIHJldHVybnMgKGJ5dGVzNCkgewogICAgICAgIHJldHVybiBJSG9va3MuYWZ0ZXJJbml0aWFsaXplLnNlbGVjdG9yOwogICAgfQogICAgZnVuY3Rpb24gYmVmb3JlQWRkTGlxdWlkaXR5KGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEsIElQb29sTWFuYWdlci5Nb2RpZnlMaXF1aWRpdHlQYXJhbXMgY2FsbGRhdGEsIGJ5dGVzIGNhbGxkYXRhKQogICAgICAgIGV4dGVybmFsIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoYnl0ZXM0KSB7CiAgICAgICAgcmV0dXJuIElIb29rcy5iZWZvcmVBZGRMaXF1aWRpdHkuc2VsZWN0b3I7CiAgICB9CiAgICBmdW5jdGlvbiBhZnRlckFkZExpcXVpZGl0eShhZGRyZXNzLCBQb29sS2V5IGNhbGxkYXRhLCBJUG9vbE1hbmFnZXIuTW9kaWZ5TGlxdWlkaXR5UGFyYW1zIGNhbGxkYXRhLCBCYWxhbmNlRGVsdGEsIEJhbGFuY2VEZWx0YSwgYnl0ZXMgY2FsbGRhdGEpCiAgICAgICAgZXh0ZXJuYWwgcHVyZSBvdmVycmlkZSByZXR1cm5zIChieXRlczQsIEJhbGFuY2VEZWx0YSkgewogICAgICAgIHJldHVybiAoSUhvb2tzLmFmdGVyQWRkTGlxdWlkaXR5LnNlbGVjdG9yLCBCYWxhbmNlRGVsdGEud3JhcCgwKSk7CiAgICB9CiAgICBmdW5jdGlvbiBiZWZvcmVSZW1vdmVMaXF1aWRpdHkoYWRkcmVzcywgUG9vbEtleSBjYWxsZGF0YSwgSVBvb2xNYW5hZ2VyLk1vZGlmeUxpcXVpZGl0eVBhcmFtcyBjYWxsZGF0YSwgYnl0ZXMgY2FsbGRhdGEpCiAgICAgICAgZXh0ZXJuYWwgcHVyZSBvdmVycmlkZSByZXR1cm5zIChieXRlczQpIHsKICAgICAgICByZXR1cm4gSUhvb2tzLmJlZm9yZVJlbW92ZUxpcXVpZGl0eS5zZWxlY3RvcjsKICAgIH0KICAgIGZ1bmN0aW9uIGFmdGVyUmVtb3ZlTGlxdWlkaXR5KGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEsIElQb29sTWFuYWdlci5Nb2RpZnlMaXF1aWRpdHlQYXJhbXMgY2FsbGRhdGEsIEJhbGFuY2VEZWx0YSwgQmFsYW5jZURlbHRhLCBieXRlcyBjYWxsZGF0YSkKICAgICAgICBleHRlcm5hbCBwdXJlIG92ZXJyaWRlIHJldHVybnMgKGJ5dGVzNCwgQmFsYW5jZURlbHRhKSB7CiAgICAgICAgcmV0dXJuIChJSG9va3MuYWZ0ZXJSZW1vdmVMaXF1aWRpdHkuc2VsZWN0b3IsIEJhbGFuY2VEZWx0YS53cmFwKDApKTsKICAgIH0KICAgIGZ1bmN0aW9uIGJlZm9yZVN3YXAoYWRkcmVzcywgUG9vbEtleSBjYWxsZGF0YSwgSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgY2FsbGRhdGEsIGJ5dGVzIGNhbGxkYXRhKQogICAgICAgIGV4dGVybmFsIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoYnl0ZXM0LCBCZWZvcmVTd2FwRGVsdGEsIHVpbnQyNCkgewogICAgICAgIHJldHVybiAoSUhvb2tzLmJlZm9yZVN3YXAuc2VsZWN0b3IsIEJlZm9yZVN3YXBEZWx0YS53cmFwKDApLCAwKTsKICAgIH0KICAgIGZ1bmN0aW9uIGJlZm9yZURvbmF0ZShhZGRyZXNzLCBQb29sS2V5IGNhbGxkYXRhLCB1aW50MjU2LCB1aW50MjU2LCBieXRlcyBjYWxsZGF0YSkKICAgICAgICBleHRlcm5hbCBwdXJlIG92ZXJyaWRlIHJldHVybnMgKGJ5dGVzNCkgewogICAgICAgIHJldHVybiBJSG9va3MuYmVmb3JlRG9uYXRlLnNlbGVjdG9yOwogICAgfQogICAgZnVuY3Rpb24gYWZ0ZXJEb25hdGUoYWRkcmVzcywgUG9vbEtleSBjYWxsZGF0YSwgdWludDI1NiwgdWludDI1NiwgYnl0ZXMgY2FsbGRhdGEpCiAgICAgICAgZXh0ZXJuYWwgcHVyZSBvdmVycmlkZSByZXR1cm5zIChieXRlczQpIHsKICAgICAgICByZXR1cm4gSUhvb2tzLmFmdGVyRG9uYXRlLnNlbGVjdG9yOwogICAgfQoKICAgIGV2ZW50IExpbWl0T3JkZXJGaWxsZWQoCiAgICAgICAgYnl0ZXMzMiBpbmRleGVkIHBvb2xJZCwKICAgICAgICBpbnQyNCB0aWNrLAogICAgICAgIGJvb2wgemVyb0Zvck9uZSwKICAgICAgICB1aW50MjU2IGFtb3VudAogICAgKTsKfQoKLy8gPT09PT09PT09PT09IFR5cGVzICYgSW50ZXJmYWNlcyA9PT09PT09PT09PT0KCnR5cGUgQ3VycmVuY3kgaXMgYWRkcmVzczsKCmxpYnJhcnkgQ3VycmVuY3lMaWJyYXJ5IHsKICAgIGZ1bmN0aW9uIHVud3JhcChDdXJyZW5jeSBjdXJyZW5jeSkgaW50ZXJuYWwgcHVyZSByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgcmV0dXJuIEN1cnJlbmN5LnVud3JhcChjdXJyZW5jeSk7CiAgICB9Cn0KCnVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CgpzdHJ1Y3QgUG9vbEtleSB7CiAgICBDdXJyZW5jeSBjdXJyZW5jeTA7CiAgICBDdXJyZW5jeSBjdXJyZW5jeTE7CiAgICB1aW50MjQgZmVlOwogICAgaW50MjQgdGlja1NwYWNpbmc7CiAgICBhZGRyZXNzIGhvb2tzOwp9Cgp0eXBlIEJhbGFuY2VEZWx0YSBpcyBpbnQyNTY7CnR5cGUgQmVmb3JlU3dhcERlbHRhIGlzIGludDI1NjsKCmxpYnJhcnkgSG9va3MgewogICAgc3RydWN0IFBlcm1pc3Npb25zIHsKICAgICAgICBib29sIGJlZm9yZUluaXRpYWxpemU7CiAgICAgICAgYm9vbCBhZnRlckluaXRpYWxpemU7CiAgICAgICAgYm9vbCBiZWZvcmVBZGRMaXF1aWRpdHk7CiAgICAgICAgYm9vbCBhZnRlckFkZExpcXVpZGl0eTsKICAgICAgICBib29sIGJlZm9yZVJlbW92ZUxpcXVpZGl0eTsKICAgICAgICBib29sIGFmdGVyUmVtb3ZlTGlxdWlkaXR5OwogICAgICAgIGJvb2wgYmVmb3JlU3dhcDsKICAgICAgICBib29sIGFmdGVyU3dhcDsKICAgICAgICBib29sIGJlZm9yZURvbmF0ZTsKICAgICAgICBib29sIGFmdGVyRG9uYXRlOwogICAgICAgIGJvb2wgYmVmb3JlU3dhcFJldHVybkRlbHRhOwogICAgICAgIGJvb2wgYWZ0ZXJTd2FwUmV0dXJuRGVsdGE7CiAgICAgICAgYm9vbCBhZnRlckFkZExpcXVpZGl0eVJldHVybkRlbHRhOwogICAgICAgIGJvb2wgYWZ0ZXJSZW1vdmVMaXF1aWRpdHlSZXR1cm5EZWx0YTsKICAgIH0KfQoKaW50ZXJmYWNlIElQb29sTWFuYWdlciB7CiAgICBzdHJ1Y3QgU3dhcFBhcmFtcyB7CiAgICAgICAgYm9vbCB6ZXJvRm9yT25lOwogICAgICAgIGludDI1NiBhbW91bnRTcGVjaWZpZWQ7CiAgICAgICAgdWludDE2MCBzcXJ0UHJpY2VMaW1pdFg5NjsKICAgIH0KCiAgICBzdHJ1Y3QgTW9kaWZ5TGlxdWlkaXR5UGFyYW1zIHsKICAgICAgICBpbnQyNCB0aWNrTG93ZXI7CiAgICAgICAgaW50MjQgdGlja1VwcGVyOwogICAgICAgIGludDI1NiBsaXF1aWRpdHlEZWx0YTsKICAgICAgICBieXRlczMyIHNhbHQ7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0U2xvdDAoYnl0ZXMzMiBwb29sSWQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDE2MCBzcXJ0UHJpY2VYOTYsIGludDI0IHRpY2ssIHVpbnQyNCBwcm90b2NvbEZlZSwgdWludDI0IGxwRmVlKTsKCiAgICBmdW5jdGlvbiBzd2FwKFBvb2xLZXkgbWVtb3J5IGtleSwgU3dhcFBhcmFtcyBtZW1vcnkgcGFyYW1zLCBieXRlcyBjYWxsZGF0YSBob29rRGF0YSkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKEJhbGFuY2VEZWx0YSk7Cn0KCmludGVyZmFjZSBJSG9va3MgewogICAgZnVuY3Rpb24gYmVmb3JlSW5pdGlhbGl6ZShhZGRyZXNzIHNlbmRlciwgUG9vbEtleSBjYWxsZGF0YSBrZXksIHVpbnQxNjAgc3FydFByaWNlWDk2KQogICAgICAgIGV4dGVybmFsIHJldHVybnMgKGJ5dGVzNCk7CiAgICBmdW5jdGlvbiBhZnRlckluaXRpYWxpemUoYWRkcmVzcyBzZW5kZXIsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCB1aW50MTYwIHNxcnRQcmljZVg5NiwgaW50MjQgdGljaykKICAgICAgICBleHRlcm5hbCByZXR1cm5zIChieXRlczQpOwogICAgZnVuY3Rpb24gYmVmb3JlQWRkTGlxdWlkaXR5KGFkZHJlc3Mgc2VuZGVyLCBQb29sS2V5IGNhbGxkYXRhIGtleSwgSVBvb2xNYW5hZ2VyLk1vZGlmeUxpcXVpZGl0eVBhcmFtcyBjYWxsZGF0YSBwYXJhbXMsIGJ5dGVzIGNhbGxkYXRhIGhvb2tEYXRhKQogICAgICAgIGV4dGVybmFsIHJldHVybnMgKGJ5dGVzNCk7CiAgICBmdW5jdGlvbiBhZnRlckFkZExpcXVpZGl0eShhZGRyZXNzIHNlbmRlciwgUG9vbEtleSBjYWxsZGF0YSBrZXksIElQb29sTWFuYWdlci5Nb2RpZnlMaXF1aWRpdHlQYXJhbXMgY2FsbGRhdGEgcGFyYW1zLCBCYWxhbmNlRGVsdGEgZGVsdGEsIEJhbGFuY2VEZWx0YSBmZWVzQWNjcnVlZCwgYnl0ZXMgY2FsbGRhdGEgaG9va0RhdGEpCiAgICAgICAgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXM0LCBCYWxhbmNlRGVsdGEpOwogICAgZnVuY3Rpb24gYmVmb3JlUmVtb3ZlTGlxdWlkaXR5KGFkZHJlc3Mgc2VuZGVyLCBQb29sS2V5IGNhbGxkYXRhIGtleSwgSVBvb2xNYW5hZ2VyLk1vZGlmeUxpcXVpZGl0eVBhcmFtcyBjYWxsZGF0YSBwYXJhbXMsIGJ5dGVzIGNhbGxkYXRhIGhvb2tEYXRhKQogICAgICAgIGV4dGVybmFsIHJldHVybnMgKGJ5dGVzNCk7CiAgICBmdW5jdGlvbiBhZnRlclJlbW92ZUxpcXVpZGl0eShhZGRyZXNzIHNlbmRlciwgUG9vbEtleSBjYWxsZGF0YSBrZXksIElQb29sTWFuYWdlci5Nb2RpZnlMaXF1aWRpdHlQYXJhbXMgY2FsbGRhdGEgcGFyYW1zLCBCYWxhbmNlRGVsdGEgZGVsdGEsIEJhbGFuY2VEZWx0YSBmZWVzQWNjcnVlZCwgYnl0ZXMgY2FsbGRhdGEgaG9va0RhdGEpCiAgICAgICAgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXM0LCBCYWxhbmNlRGVsdGEpOwogICAgZnVuY3Rpb24gYmVmb3JlU3dhcChhZGRyZXNzIHNlbmRlciwgUG9vbEtleSBjYWxsZGF0YSBrZXksIElQb29sTWFuYWdlci5Td2FwUGFyYW1zIGNhbGxkYXRhIHBhcmFtcywgYnl0ZXMgY2FsbGRhdGEgaG9va0RhdGEpCiAgICAgICAgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXM0LCBCZWZvcmVTd2FwRGVsdGEsIHVpbnQyNCk7CiAgICBmdW5jdGlvbiBhZnRlclN3YXAoYWRkcmVzcyBzZW5kZXIsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSBwYXJhbXMsIEJhbGFuY2VEZWx0YSBkZWx0YSwgYnl0ZXMgY2FsbGRhdGEgaG9va0RhdGEpCiAgICAgICAgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXM0LCBpbnQxMjgpOwogICAgZnVuY3Rpb24gYmVmb3JlRG9uYXRlKGFkZHJlc3Mgc2VuZGVyLCBQb29sS2V5IGNhbGxkYXRhIGtleSwgdWludDI1NiBhbW91bnQwLCB1aW50MjU2IGFtb3VudDEsIGJ5dGVzIGNhbGxkYXRhIGhvb2tEYXRhKQogICAgICAgIGV4dGVybmFsIHJldHVybnMgKGJ5dGVzNCk7CiAgICBmdW5jdGlvbiBhZnRlckRvbmF0ZShhZGRyZXNzIHNlbmRlciwgUG9vbEtleSBjYWxsZGF0YSBrZXksIHVpbnQyNTYgYW1vdW50MCwgdWludDI1NiBhbW91bnQxLCBieXRlcyBjYWxsZGF0YSBob29rRGF0YSkKICAgICAgICBleHRlcm5hbCByZXR1cm5zIChieXRlczQpOwp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIHNlbmRlciwgYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gdHJhbnNmZXIoYWRkcmVzcyByZWNpcGllbnQsIHVpbnQyNTYgYW1vdW50KQogICAgICAgIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwp9Cg==",
  },
]

const html = `<p>Uniswap V4 hooks allow custom logic to execute during the swap lifecycle. This example demonstrates a limit order hook using <code>afterSwap</code>.</p>
<p>How limit orders work with hooks:</p>
<ol>
<li>Users call <code>placeLimitOrder()</code> specifying a tick (price) and direction</li>
<li>Tokens are held by the hook contract</li>
<li>When swaps move the price past the target tick, <code>afterSwap</code> is triggered</li>
<li>The hook detects filled orders and executes them</li>
<li>Users receive their swapped tokens</li>
</ol>
<p>Key hook concepts:</p>
<ul>
<li><strong>Permissions</strong> - <code>getHookPermissions()</code> declares which hooks you implement</li>
<li><strong>Hook address</strong> - Must have specific bits set based on permissions (use CREATE2)</li>
<li><strong>Callbacks</strong> - PoolManager calls your hook at each lifecycle point</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/// @notice Simplified Uniswap V4 Limit Order Hook</span>
<span class="hljs-comment">/// @dev Hooks allow custom logic to execute during swap lifecycle</span>
<span class="hljs-comment">/// This example demonstrates a basic limit order mechanism using afterSwap</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">LimitOrderHook</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IHooks</span> </span>{
    IPoolManager <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> poolManager;

    <span class="hljs-comment">// Mapping: poolId =&gt; tick =&gt; zeroForOne =&gt; total liquidity</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bytes32</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">int24</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bool</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>))) <span class="hljs-keyword">public</span> tickLiquidity;

    <span class="hljs-comment">// Mapping: poolId =&gt; tick =&gt; zeroForOne =&gt; user =&gt; liquidity</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bytes32</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">int24</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">bool</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>))))
        <span class="hljs-keyword">public</span> userPositions;

    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">NotPoolManager</span>(<span class="hljs-params"></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">error</span> <span class="hljs-title">InvalidTick</span>(<span class="hljs-params"></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) </span>{
        poolManager <span class="hljs-operator">=</span> _poolManager;
    }

    <span class="hljs-comment">/// @notice Place a limit order at a specific tick</span>
    <span class="hljs-comment">/// @param key The pool to place the order in</span>
    <span class="hljs-comment">/// @param tick The tick (price point) for the limit order</span>
    <span class="hljs-comment">/// @param zeroForOne true = sell token0 for token1, false = sell token1 for token0</span>
    <span class="hljs-comment">/// @param amount Amount of tokens to sell</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">placeLimitOrder</span>(<span class="hljs-params">
        PoolKey <span class="hljs-keyword">calldata</span> key,
        <span class="hljs-keyword">int24</span> tick,
        <span class="hljs-keyword">bool</span> zeroForOne,
        <span class="hljs-keyword">uint256</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// Validate tick is on the correct side of current price</span>
        (, <span class="hljs-keyword">int24</span> currentTick,,) <span class="hljs-operator">=</span> poolManager.getSlot0(toId(key));

        <span class="hljs-comment">// For selling token0: tick must be above current (price goes up)</span>
        <span class="hljs-comment">// For selling token1: tick must be below current (price goes down)</span>
        <span class="hljs-keyword">if</span> (zeroForOne <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> tick <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> currentTick) <span class="hljs-keyword">revert</span> InvalidTick();
        <span class="hljs-keyword">if</span> (<span class="hljs-operator">!</span>zeroForOne <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> tick <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> currentTick) <span class="hljs-keyword">revert</span> InvalidTick();

        <span class="hljs-keyword">bytes32</span> poolId <span class="hljs-operator">=</span> toId(key);

        <span class="hljs-comment">// Transfer tokens from user</span>
        Currency currency <span class="hljs-operator">=</span> zeroForOne ? key.currency0 : key.currency1;
        IERC20(Currency.<span class="hljs-built_in">unwrap</span>(currency)).transferFrom(
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
            <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>),
            amount
        );

        <span class="hljs-comment">// Record the position</span>
        tickLiquidity[poolId][tick][zeroForOne] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
        userPositions[poolId][tick][zeroForOne][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amount;
    }

    <span class="hljs-comment">/// @notice Called by PoolManager after every swap</span>
    <span class="hljs-comment">/// @dev Check if price crossed any limit order ticks and execute them</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterSwap</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span>,
        PoolKey <span class="hljs-keyword">calldata</span> key,
        IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params,
        BalanceDelta,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span>
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, <span class="hljs-keyword">int128</span></span>) </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(poolManager)) <span class="hljs-keyword">revert</span> NotPoolManager();

        (, <span class="hljs-keyword">int24</span> currentTick,,) <span class="hljs-operator">=</span> poolManager.getSlot0(toId(key));
        <span class="hljs-keyword">bytes32</span> poolId <span class="hljs-operator">=</span> toId(key);

        <span class="hljs-comment">// Check if any limit orders at this tick should be filled</span>
        <span class="hljs-comment">// zeroForOne swaps move price down, so check sell-token1 orders</span>
        <span class="hljs-comment">// !zeroForOne swaps move price up, so check sell-token0 orders</span>
        <span class="hljs-keyword">bool</span> checkZeroForOne <span class="hljs-operator">=</span> <span class="hljs-operator">!</span>params.zeroForOne;

        <span class="hljs-keyword">uint256</span> liquidity <span class="hljs-operator">=</span> tickLiquidity[poolId][currentTick][checkZeroForOne];

        <span class="hljs-keyword">if</span> (liquidity <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-comment">// Execute limit orders at this tick</span>
            _executeLimitOrders(key, currentTick, checkZeroForOne, liquidity);
        }

        <span class="hljs-keyword">return</span> (IHooks.afterSwap.<span class="hljs-built_in">selector</span>, <span class="hljs-number">0</span>);
    }

    <span class="hljs-comment">/// @notice Execute limit orders at a specific tick</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_executeLimitOrders</span>(<span class="hljs-params">
        PoolKey <span class="hljs-keyword">calldata</span> key,
        <span class="hljs-keyword">int24</span> tick,
        <span class="hljs-keyword">bool</span> zeroForOne,
        <span class="hljs-keyword">uint256</span> amount
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-comment">// In a full implementation, this would:</span>
        <span class="hljs-comment">// 1. Swap the tokens using poolManager.swap()</span>
        <span class="hljs-comment">// 2. Distribute output tokens to limit order placers</span>
        <span class="hljs-comment">// 3. Clear the filled positions</span>

        <span class="hljs-keyword">bytes32</span> poolId <span class="hljs-operator">=</span> toId(key);

        <span class="hljs-comment">// Clear the tick liquidity (orders are filled)</span>
        tickLiquidity[poolId][tick][zeroForOne] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

        <span class="hljs-comment">// Emit event for off-chain tracking</span>
        <span class="hljs-keyword">emit</span> LimitOrderFilled(poolId, tick, zeroForOne, amount);
    }

    <span class="hljs-comment">/// @notice Users can cancel unfilled limit orders</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cancelLimitOrder</span>(<span class="hljs-params">
        PoolKey <span class="hljs-keyword">calldata</span> key,
        <span class="hljs-keyword">int24</span> tick,
        <span class="hljs-keyword">bool</span> zeroForOne
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bytes32</span> poolId <span class="hljs-operator">=</span> toId(key);
        <span class="hljs-keyword">uint256</span> amount <span class="hljs-operator">=</span> userPositions[poolId][tick][zeroForOne][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>];

        <span class="hljs-built_in">require</span>(amount <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"No position"</span>);

        <span class="hljs-comment">// Clear position</span>
        userPositions[poolId][tick][zeroForOne][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>] <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;
        tickLiquidity[poolId][tick][zeroForOne] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amount;

        <span class="hljs-comment">// Return tokens</span>
        Currency currency <span class="hljs-operator">=</span> zeroForOne ? key.currency0 : key.currency1;
        IERC20(Currency.<span class="hljs-built_in">unwrap</span>(currency)).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount);
    }

    <span class="hljs-comment">/// @notice Return hook permissions - we only need afterSwap</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">false</span>,
            afterSwap: <span class="hljs-literal">true</span>, <span class="hljs-comment">// We need this!</span>
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            beforeSwapReturnDelta: <span class="hljs-literal">false</span>,
            afterSwapReturnDelta: <span class="hljs-literal">false</span>,
            afterAddLiquidityReturnDelta: <span class="hljs-literal">false</span>,
            afterRemoveLiquidityReturnDelta: <span class="hljs-literal">false</span>
        });
    }

    <span class="hljs-comment">// Helper to compute pool ID</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">toId</span>(<span class="hljs-params">PoolKey <span class="hljs-keyword">memory</span> key</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes32</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(key));
    }

    <span class="hljs-comment">// Required hook interface functions (no-op for unused hooks)</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeInitialize</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">uint160</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> IHooks.beforeInitialize.<span class="hljs-built_in">selector</span>;
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterInitialize</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">uint160</span>, <span class="hljs-keyword">int24</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> IHooks.afterInitialize.<span class="hljs-built_in">selector</span>;
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeAddLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, IPoolManager.ModifyLiquidityParams <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> IHooks.beforeAddLiquidity.<span class="hljs-built_in">selector</span>;
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterAddLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, IPoolManager.ModifyLiquidityParams <span class="hljs-keyword">calldata</span>, BalanceDelta, BalanceDelta, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, BalanceDelta</span>) </span>{
        <span class="hljs-keyword">return</span> (IHooks.afterAddLiquidity.<span class="hljs-built_in">selector</span>, BalanceDelta.<span class="hljs-built_in">wrap</span>(<span class="hljs-number">0</span>));
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeRemoveLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, IPoolManager.ModifyLiquidityParams <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> IHooks.beforeRemoveLiquidity.<span class="hljs-built_in">selector</span>;
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterRemoveLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, IPoolManager.ModifyLiquidityParams <span class="hljs-keyword">calldata</span>, BalanceDelta, BalanceDelta, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, BalanceDelta</span>) </span>{
        <span class="hljs-keyword">return</span> (IHooks.afterRemoveLiquidity.<span class="hljs-built_in">selector</span>, BalanceDelta.<span class="hljs-built_in">wrap</span>(<span class="hljs-number">0</span>));
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, BeforeSwapDelta, <span class="hljs-keyword">uint24</span></span>) </span>{
        <span class="hljs-keyword">return</span> (IHooks.beforeSwap.<span class="hljs-built_in">selector</span>, BeforeSwapDelta.<span class="hljs-built_in">wrap</span>(<span class="hljs-number">0</span>), <span class="hljs-number">0</span>);
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeDonate</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> IHooks.beforeDonate.<span class="hljs-built_in">selector</span>;
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterDonate</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">uint256</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> IHooks.afterDonate.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">LimitOrderFilled</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">indexed</span> poolId,
        <span class="hljs-keyword">int24</span> tick,
        <span class="hljs-keyword">bool</span> zeroForOne,
        <span class="hljs-keyword">uint256</span> amount
    </span>)</span>;
}

<span class="hljs-comment">// ============ Types &amp; Interfaces ============</span>

<span class="hljs-keyword">type</span> Currency <span class="hljs-keyword">is</span> <span class="hljs-keyword">address</span>;

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">CurrencyLibrary</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">unwrap</span>(<span class="hljs-params">Currency currency</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> Currency.<span class="hljs-built_in">unwrap</span>(currency);
    }
}

<span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

<span class="hljs-keyword">struct</span> <span class="hljs-title">PoolKey</span> {
    Currency currency0;
    Currency currency1;
    <span class="hljs-keyword">uint24</span> fee;
    <span class="hljs-keyword">int24</span> tickSpacing;
    <span class="hljs-keyword">address</span> hooks;
}

<span class="hljs-keyword">type</span> BalanceDelta <span class="hljs-keyword">is</span> <span class="hljs-keyword">int256</span>;
<span class="hljs-keyword">type</span> BeforeSwapDelta <span class="hljs-keyword">is</span> <span class="hljs-keyword">int256</span>;

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">Hooks</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Permissions</span> {
        <span class="hljs-keyword">bool</span> beforeInitialize;
        <span class="hljs-keyword">bool</span> afterInitialize;
        <span class="hljs-keyword">bool</span> beforeAddLiquidity;
        <span class="hljs-keyword">bool</span> afterAddLiquidity;
        <span class="hljs-keyword">bool</span> beforeRemoveLiquidity;
        <span class="hljs-keyword">bool</span> afterRemoveLiquidity;
        <span class="hljs-keyword">bool</span> beforeSwap;
        <span class="hljs-keyword">bool</span> afterSwap;
        <span class="hljs-keyword">bool</span> beforeDonate;
        <span class="hljs-keyword">bool</span> afterDonate;
        <span class="hljs-keyword">bool</span> beforeSwapReturnDelta;
        <span class="hljs-keyword">bool</span> afterSwapReturnDelta;
        <span class="hljs-keyword">bool</span> afterAddLiquidityReturnDelta;
        <span class="hljs-keyword">bool</span> afterRemoveLiquidityReturnDelta;
    }
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IPoolManager</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">SwapParams</span> {
        <span class="hljs-keyword">bool</span> zeroForOne;
        <span class="hljs-keyword">int256</span> amountSpecified;
        <span class="hljs-keyword">uint160</span> sqrtPriceLimitX96;
    }

    <span class="hljs-keyword">struct</span> <span class="hljs-title">ModifyLiquidityParams</span> {
        <span class="hljs-keyword">int24</span> tickLower;
        <span class="hljs-keyword">int24</span> tickUpper;
        <span class="hljs-keyword">int256</span> liquidityDelta;
        <span class="hljs-keyword">bytes32</span> salt;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getSlot0</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> poolId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint160</span> sqrtPriceX96, <span class="hljs-keyword">int24</span> tick, <span class="hljs-keyword">uint24</span> protocolFee, <span class="hljs-keyword">uint24</span> lpFee</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params">PoolKey <span class="hljs-keyword">memory</span> key, SwapParams <span class="hljs-keyword">memory</span> params, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">BalanceDelta</span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IHooks</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeInitialize</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, PoolKey <span class="hljs-keyword">calldata</span> key, <span class="hljs-keyword">uint160</span> sqrtPriceX96</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterInitialize</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, PoolKey <span class="hljs-keyword">calldata</span> key, <span class="hljs-keyword">uint160</span> sqrtPriceX96, <span class="hljs-keyword">int24</span> tick</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeAddLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.ModifyLiquidityParams <span class="hljs-keyword">calldata</span> params, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterAddLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.ModifyLiquidityParams <span class="hljs-keyword">calldata</span> params, BalanceDelta delta, BalanceDelta feesAccrued, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, BalanceDelta</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeRemoveLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.ModifyLiquidityParams <span class="hljs-keyword">calldata</span> params, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterRemoveLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.ModifyLiquidityParams <span class="hljs-keyword">calldata</span> params, BalanceDelta delta, BalanceDelta feesAccrued, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, BalanceDelta</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, BeforeSwapDelta, <span class="hljs-keyword">uint24</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params, BalanceDelta delta, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, <span class="hljs-keyword">int128</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeDonate</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, PoolKey <span class="hljs-keyword">calldata</span> key, <span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterDonate</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, PoolKey <span class="hljs-keyword">calldata</span> key, <span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC20</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> sender, <span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> recipient, <span class="hljs-keyword">uint256</span> amount</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}
</code></pre>`

export default html
