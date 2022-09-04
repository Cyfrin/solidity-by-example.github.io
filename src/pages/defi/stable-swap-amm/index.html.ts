// metadata
export const version = "0.8.13"
export const title = "Stable Swap AMM"
export const description = "Curve's stable swap AMM"
export const codes = [
  {
    fileName: "StableSwap.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuODsKCi8qCkludmFyaWFudCAtIHByaWNlIG9mIHRyYWRlIGFuZCBhbW91bnQgb2YgbGlxdWlkaXR5IGFyZSBkZXRlcm1pbmVkIGJ5IHRoaXMgZXF1YXRpb24KCkFuXm4gc3VtKHhfaSkgKyBEID0gQURuXm4gKyBEXihuICsgMSkgLyAobl5uIHByb2QoeF9pKSkKClRvcGljcwowLiBOZXd0b24ncyBtZXRob2QgeF8obiArIDEpID0geF9uIC0gZih4X24pIC8gZicoeF9uKQoxLiBJbnZhcmlhbnQKMi4gU3dhcAogICAtIENhbGN1bGF0ZSBZCiAgIC0gQ2FsY3VsYXRlIEQKMy4gR2V0IHZpcnR1YWwgcHJpY2UKNC4gQWRkIGxpcXVpZGl0eQogICAtIEltYmFsYW5jZSBmZWUKNS4gUmVtb3ZlIGxpcXVpZGl0eQo2LiBSZW1vdmUgbGlxdWlkaXR5IG9uZSB0b2tlbgogICAtIENhbGN1bGF0ZSB3aXRoZHJhdyBvbmUgdG9rZW4KICAgLSBnZXRZRApUT0RPOiB0ZXN0PwoqLwoKbGlicmFyeSBNYXRoIHsKICAgIGZ1bmN0aW9uIGFicyh1aW50IHgsIHVpbnQgeSkgaW50ZXJuYWwgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIHggPj0geSA/IHggLSB5IDogeSAtIHg7CiAgICB9Cn0KCmNvbnRyYWN0IFN0YWJsZVN3YXAgewogICAgLy8gTnVtYmVyIG9mIHRva2VucwogICAgdWludCBwcml2YXRlIGNvbnN0YW50IE4gPSAzOwogICAgLy8gQW1wbGlmaWNhdGlvbiBjb2VmZmljaWVudCBtdWx0aXBsaWVkIGJ5IE5eKE4gLSAxKQogICAgLy8gSGlnaGVyIHZhbHVlIG1ha2VzIHRoZSBjdXJ2ZSBtb3JlIGZsYXQKICAgIC8vIExvd2VyIHZhbHVlIG1ha2VzIHRoZSBjdXJ2ZSBtb3JlIGxpa2UgY29uc3RhbnQgcHJvZHVjdCBBTU0KICAgIHVpbnQgcHJpdmF0ZSBjb25zdGFudCBBID0gMTAwMCAqIChOKiooTiAtIDEpKTsKICAgIC8vIDAuMDMlCiAgICB1aW50IHByaXZhdGUgY29uc3RhbnQgU1dBUF9GRUUgPSAzMDA7CiAgICAvLyBMaXF1aWRpdHkgZmVlIGlzIGRlcml2ZWQgZnJvbSAyIGNvbnN0cmFpbnRzCiAgICAvLyAxLiBGZWUgaXMgMCBmb3IgYWRkaW5nIC8gcmVtb3ZpbmcgbGlxdWlkaXR5IHRoYXQgcmVzdWx0cyBpbiBhIGJhbGFuY2VkIHBvb2wKICAgIC8vIDIuIFN3YXBwaW5nIGluIGEgYmFsYW5jZWQgcG9vbCBpcyBsaWtlIGFkZGluZyBhbmQgdGhlbiByZW1vdmluZyBsaXF1aWRpdHkKICAgIC8vICAgIGZyb20gYSBiYWxhbmNlZCBwb29sCiAgICAvLyBzd2FwIGZlZSA9IGFkZCBsaXF1aWRpdHkgZmVlICsgcmVtb3ZlIGxpcXVpZGl0eSBmZWUKICAgIHVpbnQgcHJpdmF0ZSBjb25zdGFudCBMSVFVSURJVFlfRkVFID0gKFNXQVBfRkVFICogTikgLyAoNCAqIChOIC0gMSkpOwogICAgdWludCBwcml2YXRlIGNvbnN0YW50IEZFRV9ERU5PTUlOQVRPUiA9IDFlNjsKCiAgICBhZGRyZXNzW05dIHB1YmxpYyB0b2tlbnM7CiAgICAvLyBOb3JtYWxpemUgZWFjaCB0b2tlbiB0byAxOCBkZWNpbWFscwogICAgLy8gRXhhbXBsZSAtIERBSSAoMTggZGVjaW1hbHMpLCBVU0RDICg2IGRlY2ltYWxzKSwgVVNEVCAoNiBkZWNpbWFscykKICAgIHVpbnRbTl0gcHJpdmF0ZSBtdWx0aXBsaWVycyA9IFsxLCAxZTEyLCAxZTEyXTsKICAgIHVpbnRbTl0gcHVibGljIGJhbGFuY2VzOwoKICAgIC8vIDEgc2hhcmUgPSAxZTE4LCAxOCBkZWNpbWFscwogICAgdWludCBwcml2YXRlIGNvbnN0YW50IERFQ0lNQUxTID0gMTg7CiAgICB1aW50IHB1YmxpYyB0b3RhbFN1cHBseTsKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50KSBwdWJsaWMgYmFsYW5jZU9mOwoKICAgIGZ1bmN0aW9uIF9taW50KGFkZHJlc3MgX3RvLCB1aW50IF9hbW91bnQpIHByaXZhdGUgewogICAgICAgIGJhbGFuY2VPZltfdG9dICs9IF9hbW91bnQ7CiAgICAgICAgdG90YWxTdXBwbHkgKz0gX2Ftb3VudDsKICAgIH0KCiAgICBmdW5jdGlvbiBfYnVybihhZGRyZXNzIF9mcm9tLCB1aW50IF9hbW91bnQpIHByaXZhdGUgewogICAgICAgIGJhbGFuY2VPZltfZnJvbV0gLT0gX2Ftb3VudDsKICAgICAgICB0b3RhbFN1cHBseSAtPSBfYW1vdW50OwogICAgfQoKICAgIC8vIFJldHVybiBwcmVjaXNpb24tYWRqdXN0ZWQgYmFsYW5jZXMsIGFkanVzdGVkIHRvIDE4IGRlY2ltYWxzCiAgICBmdW5jdGlvbiBfeHAoKSBwcml2YXRlIHZpZXcgcmV0dXJucyAodWludFtOXSBtZW1vcnkgeHApIHsKICAgICAgICBmb3IgKHVpbnQgaTsgaSA8IE47ICsraSkgewogICAgICAgICAgICB4cFtpXSA9IGJhbGFuY2VzW2ldICogbXVsdGlwbGllcnNbaV07CiAgICAgICAgfQogICAgfQoKICAgIC8qKgogICAgICogQG5vdGljZSBDYWxjdWxhdGUgRCwgc3VtIG9mIGJhbGFuY2VzIGluIGEgcGVyZmVjdGx5IGJhbGFuY2VkIHBvb2wKICAgICAqIElmIGJhbGFuY2VzIG9mIHhfMCwgeF8xLCAuLi4geF8obi0xKSB0aGVuIHN1bSh4X2kpID0gRAogICAgICogQHBhcmFtIHhwIFByZWNpc2lvbi1hZGp1c3RlZCBiYWxhbmNlcwogICAgICogQHJldHVybiBECiAgICAgKi8KICAgIGZ1bmN0aW9uIF9nZXREKHVpbnRbTl0gbWVtb3J5IHhwKSBwcml2YXRlIHB1cmUgcmV0dXJucyAodWludCkgewogICAgICAgIC8qCiAgICAgICAgTmV3dG9uJ3MgbWV0aG9kIHRvIGNvbXB1dGUgRAogICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAgICAgZihEKSA9IEFEbl5uICsgRF4obiArIDEpIC8gKG5ebiBwcm9kKHhfaSkpIC0gQW5ebiBzdW0oeF9pKSAtIEQgCiAgICAgICAgZicoRCkgPSBBbl5uICsgKG4gKyAxKSBEXm4gLyAobl5uIHByb2QoeF9pKSkgLSAxCgogICAgICAgICAgICAgICAgICAgICAoYXMgKyBucClEX24KICAgICAgICBEXyhuKzEpID0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KICAgICAgICAgICAgICAgICAgKGEgLSAxKURfbiArIChuICsgMSlwCgogICAgICAgIGEgPSBBbl5uCiAgICAgICAgcyA9IHN1bSh4X2kpCiAgICAgICAgcCA9IChEX24pXihuICsgMSkgLyAobl5uIHByb2QoeF9pKSkKICAgICAgICAqLwogICAgICAgIHVpbnQgYSA9IEEgKiBOOyAvLyBBbl5uCgogICAgICAgIHVpbnQgczsgLy8geF8wICsgeF8xICsgLi4uICsgeF8obi0xKQogICAgICAgIGZvciAodWludCBpOyBpIDwgTjsgKytpKSB7CiAgICAgICAgICAgIHMgKz0geHBbaV07CiAgICAgICAgfQoKICAgICAgICAvLyBOZXd0b24ncyBtZXRob2QKICAgICAgICAvLyBJbml0aWFsIGd1ZXNzLCBkIDw9IHMKICAgICAgICB1aW50IGQgPSBzOwogICAgICAgIHVpbnQgZF9wcmV2OwogICAgICAgIGZvciAodWludCBpOyBpIDwgMjU1OyArK2kpIHsKICAgICAgICAgICAgLy8gcCA9IEReKG4gKyAxKSAvIChuXm4gKiB4XzAgKiAuLi4gKiB4XyhuLTEpKQogICAgICAgICAgICB1aW50IHAgPSBkOwogICAgICAgICAgICBmb3IgKHVpbnQgajsgaiA8IE47ICsraikgewogICAgICAgICAgICAgICAgcCA9IChwICogZCkgLyAoTiAqIHhwW2pdKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBkX3ByZXYgPSBkOwogICAgICAgICAgICBkID0gKChhICogcyArIE4gKiBwKSAqIGQpIC8gKChhIC0gMSkgKiBkICsgKE4gKyAxKSAqIHApOwoKICAgICAgICAgICAgaWYgKE1hdGguYWJzKGQsIGRfcHJldikgPD0gMSkgewogICAgICAgICAgICAgICAgcmV0dXJuIGQ7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgcmV2ZXJ0KCJEIGRpZG4ndCBjb252ZXJnZSIpOwogICAgfQoKICAgIC8qKgogICAgICogQG5vdGljZSBDYWxjdWxhdGUgdGhlIG5ldyBiYWxhbmNlIG9mIHRva2VuIGogZ2l2ZW4gdGhlIG5ldyBiYWxhbmNlIG9mIHRva2VuIGkKICAgICAqIEBwYXJhbSBpIEluZGV4IG9mIHRva2VuIGluCiAgICAgKiBAcGFyYW0gaiBJbmRleCBvZiB0b2tlbiBvdXQKICAgICAqIEBwYXJhbSB4IE5ldyBiYWxhbmNlIG9mIHRva2VuIGkKICAgICAqIEBwYXJhbSB4cCBDdXJyZW50IHByZWNpc2lvbi1hZGp1c3RlZCBiYWxhbmNlcwogICAgICovCiAgICBmdW5jdGlvbiBfZ2V0WSgKICAgICAgICB1aW50IGksCiAgICAgICAgdWludCBqLAogICAgICAgIHVpbnQgeCwKICAgICAgICB1aW50W05dIG1lbW9yeSB4cAogICAgKSBwcml2YXRlIHB1cmUgcmV0dXJucyAodWludCkgewogICAgICAgIC8qCiAgICAgICAgTmV3dG9uJ3MgbWV0aG9kIHRvIGNvbXB1dGUgeQogICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCiAgICAgICAgeSA9IHhfagoKICAgICAgICBmKHkpID0geV4yICsgeShiIC0gRCkgLSBjCgogICAgICAgICAgICAgICAgICAgIHlfbl4yICsgYwogICAgICAgIHlfKG4rMSkgPSAtLS0tLS0tLS0tLS0tLQogICAgICAgICAgICAgICAgICAgMnlfbiArIGIgLSBECgogICAgICAgIHdoZXJlCiAgICAgICAgcyA9IHN1bSh4X2spLCBrICE9IGoKICAgICAgICBwID0gcHJvZCh4X2spLCBrICE9IGoKICAgICAgICBiID0gcyArIEQgLyAoQW5ebikKICAgICAgICBjID0gRF4obiArIDEpIC8gKG5ebiAqIHAgKiBBbl5uKQogICAgICAgICovCiAgICAgICAgdWludCBhID0gQSAqIE47CiAgICAgICAgdWludCBkID0gX2dldEQoeHApOwogICAgICAgIHVpbnQgczsKICAgICAgICB1aW50IGMgPSBkOwoKICAgICAgICB1aW50IF94OwogICAgICAgIGZvciAodWludCBrOyBrIDwgTjsgKytrKSB7CiAgICAgICAgICAgIGlmIChrID09IGkpIHsKICAgICAgICAgICAgICAgIF94ID0geDsKICAgICAgICAgICAgfSBlbHNlIGlmIChrID09IGopIHsKICAgICAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgX3ggPSB4cFtrXTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgcyArPSBfeDsKICAgICAgICAgICAgYyA9IChjICogZCkgLyAoTiAqIF94KTsKICAgICAgICB9CiAgICAgICAgYyA9IChjICogZCkgLyAoTiAqIGEpOwogICAgICAgIHVpbnQgYiA9IHMgKyBkIC8gYTsKCiAgICAgICAgLy8gTmV3dG9uJ3MgbWV0aG9kCiAgICAgICAgdWludCB5X3ByZXY7CiAgICAgICAgLy8gSW5pdGlhbCBndWVzcywgeSA8PSBkCiAgICAgICAgdWludCB5ID0gZDsKICAgICAgICBmb3IgKHVpbnQgX2k7IF9pIDwgMjU1OyArK19pKSB7CiAgICAgICAgICAgIHlfcHJldiA9IHk7CiAgICAgICAgICAgIHkgPSAoeSAqIHkgKyBjKSAvICgyICogeSArIGIgLSBkKTsKICAgICAgICAgICAgaWYgKE1hdGguYWJzKHksIHlfcHJldikgPD0gMSkgewogICAgICAgICAgICAgICAgcmV0dXJuIHk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgcmV2ZXJ0KCJ5IGRpZG4ndCBjb252ZXJnZSIpOwogICAgfQoKICAgIC8qKgogICAgICogQG5vdGljZSBDYWxjdWxhdGUgdGhlIG5ldyBiYWxhbmNlIG9mIHRva2VuIGkgZ2l2ZW4gcHJlY2lzaW9uLWFkanVzdGVkCiAgICAgKiBiYWxhbmNlcyB4cCBhbmQgbGlxdWlkaXR5IGQKICAgICAqIEBkZXYgRXF1YXRpb24gaXMgY2FsY3VsYXRlIHkgaXMgc2FtZSBhcyBfZ2V0WQogICAgICogQHBhcmFtIGkgSW5kZXggb2YgdG9rZW4gdG8gY2FsY3VsYXRlIHRoZSBuZXcgYmFsYW5jZQogICAgICogQHBhcmFtIHhwIFByZWNpc2lvbi1hZGp1c3RlZCBiYWxhbmNlcwogICAgICogQHBhcmFtIGQgTGlxdWlkaXR5IGQKICAgICAqIEByZXR1cm4gTmV3IGJhbGFuY2Ugb2YgdG9rZW4gaQogICAgICovCiAgICBmdW5jdGlvbiBfZ2V0WUQoCiAgICAgICAgdWludCBpLAogICAgICAgIHVpbnRbTl0gbWVtb3J5IHhwLAogICAgICAgIHVpbnQgZAogICAgKSBwcml2YXRlIHB1cmUgcmV0dXJucyAodWludCkgewogICAgICAgIHVpbnQgYSA9IEEgKiBOOwogICAgICAgIHVpbnQgczsKICAgICAgICB1aW50IGMgPSBkOwoKICAgICAgICB1aW50IF94OwogICAgICAgIGZvciAodWludCBrOyBrIDwgTjsgKytrKSB7CiAgICAgICAgICAgIGlmIChrICE9IGkpIHsKICAgICAgICAgICAgICAgIF94ID0geHBba107CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgcyArPSBfeDsKICAgICAgICAgICAgYyA9IChjICogZCkgLyAoTiAqIF94KTsKICAgICAgICB9CiAgICAgICAgYyA9IChjICogZCkgLyAoTiAqIGEpOwogICAgICAgIHVpbnQgYiA9IHMgKyBkIC8gYTsKCiAgICAgICAgLy8gTmV3dG9uJ3MgbWV0aG9kCiAgICAgICAgdWludCB5X3ByZXY7CiAgICAgICAgLy8gSW5pdGlhbCBndWVzcywgeSA8PSBkCiAgICAgICAgdWludCB5ID0gZDsKICAgICAgICBmb3IgKHVpbnQgX2k7IF9pIDwgMjU1OyArK19pKSB7CiAgICAgICAgICAgIHlfcHJldiA9IHk7CiAgICAgICAgICAgIHkgPSAoeSAqIHkgKyBjKSAvICgyICogeSArIGIgLSBkKTsKICAgICAgICAgICAgaWYgKE1hdGguYWJzKHksIHlfcHJldikgPD0gMSkgewogICAgICAgICAgICAgICAgcmV0dXJuIHk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgcmV2ZXJ0KCJ5IGRpZG4ndCBjb252ZXJnZSIpOwogICAgfQoKICAgIC8vIEVzdGltYXRlIHZhbHVlIG9mIDEgc2hhcmUKICAgIC8vIEhvdyBtYW55IHRva2VucyBpcyBvbmUgc2hhcmUgd29ydGg/CiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsUHJpY2UoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpIHsKICAgICAgICB1aW50IGQgPSBfZ2V0RChfeHAoKSk7CiAgICAgICAgdWludCBfdG90YWxTdXBwbHkgPSB0b3RhbFN1cHBseTsKICAgICAgICBpZiAoX3RvdGFsU3VwcGx5ID4gMCkgewogICAgICAgICAgICByZXR1cm4gKGQgKiAxMCoqREVDSU1BTFMpIC8gX3RvdGFsU3VwcGx5OwogICAgICAgIH0KICAgICAgICByZXR1cm4gMDsKICAgIH0KCiAgICAvKioKICAgICAqIEBub3RpY2UgU3dhcCBkeCBhbW91bnQgb2YgdG9rZW4gaSBmb3IgdG9rZW4gagogICAgICogQHBhcmFtIGkgSW5kZXggb2YgdG9rZW4gaW4KICAgICAqIEBwYXJhbSBqIEluZGV4IG9mIHRva2VuIG91dAogICAgICogQHBhcmFtIGR4IFRva2VuIGluIGFtb3VudAogICAgICogQHBhcmFtIG1pbkR5IE1pbmltdW0gdG9rZW4gb3V0CiAgICAgKi8KICAgIGZ1bmN0aW9uIHN3YXAoCiAgICAgICAgdWludCBpLAogICAgICAgIHVpbnQgaiwKICAgICAgICB1aW50IGR4LAogICAgICAgIHVpbnQgbWluRHkKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludCBkeSkgewogICAgICAgIHJlcXVpcmUoaSAhPSBqLCAiaSA9IGoiKTsKCiAgICAgICAgSUVSQzIwKHRva2Vuc1tpXSkudHJhbnNmZXJGcm9tKG1zZy5zZW5kZXIsIGFkZHJlc3ModGhpcyksIGR4KTsKCiAgICAgICAgLy8gQ2FsY3VsYXRlIGR5CiAgICAgICAgdWludFtOXSBtZW1vcnkgeHAgPSBfeHAoKTsKICAgICAgICB1aW50IHggPSB4cFtpXSArIGR4ICogbXVsdGlwbGllcnNbaV07CgogICAgICAgIHVpbnQgeTAgPSB4cFtqXTsKICAgICAgICB1aW50IHkxID0gX2dldFkoaSwgaiwgeCwgeHApOwogICAgICAgIC8vIHkwIG11c3QgYmUgPj0geTEsIHNpbmNlIHggaGFzIGluY3JlYXNlZAogICAgICAgIC8vIC0xIHRvIHJvdW5kIGRvd24KICAgICAgICBkeSA9ICh5MCAtIHkxIC0gMSkgLyBtdWx0aXBsaWVyc1tqXTsKCiAgICAgICAgLy8gU3VidHJhY3QgZmVlIGZyb20gZHkKICAgICAgICB1aW50IGZlZSA9IChkeSAqIFNXQVBfRkVFKSAvIEZFRV9ERU5PTUlOQVRPUjsKICAgICAgICBkeSAtPSBmZWU7CiAgICAgICAgcmVxdWlyZShkeSA+PSBtaW5EeSwgImR5IDwgbWluIik7CgogICAgICAgIGJhbGFuY2VzW2ldICs9IGR4OwogICAgICAgIGJhbGFuY2VzW2pdIC09IGR5OwoKICAgICAgICBJRVJDMjAodG9rZW5zW2pdKS50cmFuc2Zlcihtc2cuc2VuZGVyLCBkeSk7CiAgICB9CgogICAgZnVuY3Rpb24gYWRkTGlxdWlkaXR5KHVpbnRbTl0gY2FsbGRhdGEgYW1vdW50cywgdWludCBtaW5TaGFyZXMpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zICh1aW50IHNoYXJlcykKICAgIHsKICAgICAgICAvLyBjYWxjdWxhdGUgY3VycmVudCBsaXF1aWRpdHkgZDAKICAgICAgICB1aW50IF90b3RhbFN1cHBseSA9IHRvdGFsU3VwcGx5OwogICAgICAgIHVpbnQgZDA7CiAgICAgICAgdWludFtOXSBtZW1vcnkgb2xkX3hzID0gX3hwKCk7CiAgICAgICAgaWYgKF90b3RhbFN1cHBseSA+IDApIHsKICAgICAgICAgICAgZDAgPSBfZ2V0RChvbGRfeHMpOwogICAgICAgIH0KCiAgICAgICAgLy8gVHJhbnNmZXIgdG9rZW5zIGluCiAgICAgICAgdWludFtOXSBtZW1vcnkgbmV3X3hzOwogICAgICAgIGZvciAodWludCBpOyBpIDwgTjsgKytpKSB7CiAgICAgICAgICAgIHVpbnQgYW1vdW50ID0gYW1vdW50c1tpXTsKICAgICAgICAgICAgaWYgKGFtb3VudCA+IDApIHsKICAgICAgICAgICAgICAgIElFUkMyMCh0b2tlbnNbaV0pLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBhbW91bnQpOwogICAgICAgICAgICAgICAgbmV3X3hzW2ldID0gb2xkX3hzW2ldICsgYW1vdW50ICogbXVsdGlwbGllcnNbaV07CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBuZXdfeHNbaV0gPSBvbGRfeHNbaV07CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgbGlxdWlkaXR5IGQxCiAgICAgICAgdWludCBkMSA9IF9nZXREKG5ld194cyk7CiAgICAgICAgcmVxdWlyZShkMSA+IGQwLCAibGlxdWlkaXR5IGRpZG4ndCBpbmNyZWFzZSIpOwoKICAgICAgICAvLyBSZWNjYWxjdWF0ZSBEIGFjY291bnRpbmcgZm9yIGZlZSBvbiBpbWJhbGFuY2UKICAgICAgICB1aW50IGQyOwogICAgICAgIGlmIChfdG90YWxTdXBwbHkgPiAwKSB7CiAgICAgICAgICAgIGZvciAodWludCBpOyBpIDwgTjsgKytpKSB7CiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aHkgb2xkX3hzW2ldICogZDEgLyBkMD8gd2h5IG5vdCBkMSAvIE4/CiAgICAgICAgICAgICAgICB1aW50IGlkZWFsQmFsYW5jZSA9IChvbGRfeHNbaV0gKiBkMSkgLyBkMDsKICAgICAgICAgICAgICAgIHVpbnQgZGlmZiA9IE1hdGguYWJzKG5ld194c1tpXSwgaWRlYWxCYWxhbmNlKTsKICAgICAgICAgICAgICAgIG5ld194c1tpXSAtPSAoTElRVUlESVRZX0ZFRSAqIGRpZmYpIC8gRkVFX0RFTk9NSU5BVE9SOwogICAgICAgICAgICB9CgogICAgICAgICAgICBkMiA9IF9nZXREKG5ld194cyk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgZDIgPSBkMTsKICAgICAgICB9CgogICAgICAgIC8vIFVwZGF0ZSBiYWxhbmNlcwogICAgICAgIGZvciAodWludCBpOyBpIDwgTjsgKytpKSB7CiAgICAgICAgICAgIGJhbGFuY2VzW2ldICs9IGFtb3VudHNbaV07CiAgICAgICAgfQoKICAgICAgICAvLyBTaGFyZXMgdG8gbWludCA9IChkMiAtIGQwKSAvIGQwICogdG90YWwgc3VwcGx5CiAgICAgICAgLy8gZDEgPj0gZDIgPj0gZDAKICAgICAgICBpZiAoX3RvdGFsU3VwcGx5ID4gMCkgewogICAgICAgICAgICBzaGFyZXMgPSAoKGQyIC0gZDApICogX3RvdGFsU3VwcGx5KSAvIGQwOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHNoYXJlcyA9IGQyOwogICAgICAgIH0KICAgICAgICByZXF1aXJlKHNoYXJlcyA+PSBtaW5TaGFyZXMsICJzaGFyZXMgPCBtaW4iKTsKICAgICAgICBfbWludChtc2cuc2VuZGVyLCBzaGFyZXMpOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlbW92ZUxpcXVpZGl0eSh1aW50IHNoYXJlcywgdWludFtOXSBjYWxsZGF0YSBtaW5BbW91bnRzT3V0KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAodWludFtOXSBtZW1vcnkgYW1vdW50c091dCkKICAgIHsKICAgICAgICB1aW50IF90b3RhbFN1cHBseSA9IHRvdGFsU3VwcGx5OwoKICAgICAgICBmb3IgKHVpbnQgaTsgaSA8IE47ICsraSkgewogICAgICAgICAgICB1aW50IGFtb3VudE91dCA9IChiYWxhbmNlc1tpXSAqIHNoYXJlcykgLyBfdG90YWxTdXBwbHk7CiAgICAgICAgICAgIHJlcXVpcmUoYW1vdW50T3V0ID49IG1pbkFtb3VudHNPdXRbaV0sICJvdXQgPCBtaW4iKTsKCiAgICAgICAgICAgIGJhbGFuY2VzW2ldIC09IGFtb3VudE91dDsKICAgICAgICAgICAgYW1vdW50c091dFtpXSA9IGFtb3VudE91dDsKCiAgICAgICAgICAgIElFUkMyMCh0b2tlbnNbaV0pLnRyYW5zZmVyKG1zZy5zZW5kZXIsIGFtb3VudE91dCk7CiAgICAgICAgfQoKICAgICAgICBfYnVybihtc2cuc2VuZGVyLCBzaGFyZXMpOwogICAgfQoKICAgIC8qKgogICAgICogQG5vdGljZSBDYWxjdWxhdGUgYW1vdW50IG9mIHRva2VuIGkgdG8gcmVjZWl2ZSBmb3Igc2hhcmVzCiAgICAgKiBAcGFyYW0gc2hhcmVzIFNoYXJlcyB0byBidXJuCiAgICAgKiBAcGFyYW0gaSBJbmRleCBvZiB0b2tlbiB0byB3aXRoZHJhdwogICAgICogQHJldHVybiBkeSBBbW91bnQgb2YgdG9rZW4gaSB0byByZWNlaXZlCiAgICAgKiAgICAgICAgIGZlZSBGZWUgZm9yIHdpdGhkcmF3LiBGZWUgYWxyZWFkeSBpbmNsdWRlZCBpbiBkeQogICAgICovCiAgICBmdW5jdGlvbiBfY2FsY1dpdGhkcmF3T25lVG9rZW4odWludCBzaGFyZXMsIHVpbnQgaSkKICAgICAgICBwcml2YXRlCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQgZHksIHVpbnQgZmVlKQogICAgewogICAgICAgIHVpbnQgX3RvdGFsU3VwcGx5ID0gdG90YWxTdXBwbHk7CiAgICAgICAgdWludFtOXSBtZW1vcnkgeHAgPSBfeHAoKTsKCiAgICAgICAgLy8gQ2FsY3VsYXRlIGQwIGFuZCBkMQogICAgICAgIHVpbnQgZDAgPSBfZ2V0RCh4cCk7CiAgICAgICAgdWludCBkMSA9IGQwIC0gKGQwICogc2hhcmVzKSAvIF90b3RhbFN1cHBseTsKCiAgICAgICAgLy8gQ2FsY3VsYXRlIHJlZHVjdGlvbiBpbiB5IGlmIEQgPSBkMQogICAgICAgIHVpbnQgeTAgPSBfZ2V0WUQoaSwgeHAsIGQxKTsKICAgICAgICAvLyBkMSA8PSBkMCBzbyB5IG11c3QgYmUgPD0geHBbaV0KICAgICAgICB1aW50IGR5MCA9ICh4cFtpXSAtIHkwKSAvIG11bHRpcGxpZXJzW2ldOwoKICAgICAgICAvLyBDYWxjdWxhdGUgaW1iYWxhbmNlIGZlZSwgdXBkYXRlIHhwIHdpdGggZmVlcwogICAgICAgIHVpbnQgZHg7CiAgICAgICAgZm9yICh1aW50IGo7IGogPCBOOyArK2opIHsKICAgICAgICAgICAgaWYgKGogPT0gaSkgewogICAgICAgICAgICAgICAgZHggPSAoeHBbal0gKiBkMSkgLyBkMCAtIHkwOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgLy8gZDEgLyBkMCA8PSAxCiAgICAgICAgICAgICAgICBkeCA9IHhwW2pdIC0gKHhwW2pdICogZDEpIC8gZDA7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgeHBbal0gLT0gKExJUVVJRElUWV9GRUUgKiBkeCkgLyBGRUVfREVOT01JTkFUT1I7CiAgICAgICAgfQoKICAgICAgICAvLyBSZWNhbGN1bGF0ZSB5IHdpdGggeHAgaW5jbHVkaW5nIGltYmFsYW5jZSBmZWVzCiAgICAgICAgdWludCB5MSA9IF9nZXRZRChpLCB4cCwgZDEpOwogICAgICAgIC8vIC0gMSB0byByb3VuZCBkb3duCiAgICAgICAgZHkgPSAoeHBbaV0gLSB5MSAtIDEpIC8gbXVsdGlwbGllcnNbaV07CiAgICAgICAgZmVlID0gZHkwIC0gZHk7CiAgICB9CgogICAgZnVuY3Rpb24gY2FsY1dpdGhkcmF3T25lVG9rZW4odWludCBzaGFyZXMsIHVpbnQgaSkKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50IGR5LCB1aW50IGZlZSkKICAgIHsKICAgICAgICByZXR1cm4gX2NhbGNXaXRoZHJhd09uZVRva2VuKHNoYXJlcywgaSk7CiAgICB9CgogICAgLyoqCiAgICAgKiBAbm90aWNlIFdpdGhkcmF3IGxpcXVpZGl0eSBpbiB0b2tlbiBpCiAgICAgKiBAcGFyYW0gc2hhcmVzIFNoYXJlcyB0byBidXJuCiAgICAgKiBAcGFyYW0gaSBUb2tlbiB0byB3aXRoZHJhdwogICAgICogQHBhcmFtIG1pbkFtb3VudE91dCBNaW5pbXVtIGFtb3VudCBvZiB0b2tlbiBpIHRoYXQgbXVzdCBiZSB3aXRoZHJhd24KICAgICAqLwogICAgZnVuY3Rpb24gcmVtb3ZlTGlxdWlkaXR5T25lVG9rZW4oCiAgICAgICAgdWludCBzaGFyZXMsCiAgICAgICAgdWludCBpLAogICAgICAgIHVpbnQgbWluQW1vdW50T3V0CiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQgYW1vdW50T3V0KSB7CiAgICAgICAgKGFtb3VudE91dCwgKSA9IF9jYWxjV2l0aGRyYXdPbmVUb2tlbihzaGFyZXMsIGkpOwogICAgICAgIHJlcXVpcmUoYW1vdW50T3V0ID49IG1pbkFtb3VudE91dCwgIm91dCA8IG1pbiIpOwoKICAgICAgICBiYWxhbmNlc1tpXSAtPSBhbW91bnRPdXQ7CiAgICAgICAgX2J1cm4obXNnLnNlbmRlciwgc2hhcmVzKTsKCiAgICAgICAgSUVSQzIwKHRva2Vuc1tpXSkudHJhbnNmZXIobXNnLnNlbmRlciwgYW1vdW50T3V0KTsKICAgIH0KfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgdWludCBhbW91bnQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludCBhbW91bnQpOwogICAgZXZlbnQgQXBwcm92YWwoYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgc3BlbmRlciwgdWludCBhbW91bnQpOwp9Cg==",
  },
]

const html = `<p>Simplified version of Curve&#39;s stable swap AMM</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8;</span>

<span class="hljs-comment">/*
Invariant - price of trade and amount of liquidity are determined by this equation

An^n sum(x_i) + D = ADn^n + D^(n + 1) / (n^n prod(x_i))

Topics
0. Newton&#x27;s method x_(n + 1) = x_n - f(x_n) / f&#x27;(x_n)
1. Invariant
2. Swap
   - Calculate Y
   - Calculate D
3. Get virtual price
4. Add liquidity
   - Imbalance fee
5. Remove liquidity
6. Remove liquidity one token
   - Calculate withdraw one token
   - getYD
<span class="hljs-doctag">TODO:</span> test?
*/</span>

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">Math</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">abs</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> y ? x <span class="hljs-operator">-</span> y : y <span class="hljs-operator">-</span> x;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">StableSwap</span> </span>{
    <span class="hljs-comment">// Number of tokens</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> N <span class="hljs-operator">=</span> <span class="hljs-number">3</span>;
    <span class="hljs-comment">// Amplification coefficient multiplied by N^(N - 1)</span>
    <span class="hljs-comment">// Higher value makes the curve more flat</span>
    <span class="hljs-comment">// Lower value makes the curve more like constant product AMM</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> A <span class="hljs-operator">=</span> <span class="hljs-number">1000</span> <span class="hljs-operator">*</span> (N<span class="hljs-operator">*</span><span class="hljs-operator">*</span>(N <span class="hljs-operator">-</span> <span class="hljs-number">1</span>));
    <span class="hljs-comment">// 0.03%</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> SWAP_FEE <span class="hljs-operator">=</span> <span class="hljs-number">300</span>;
    <span class="hljs-comment">// Liquidity fee is derived from 2 constraints</span>
    <span class="hljs-comment">// 1. Fee is 0 for adding / removing liquidity that results in a balanced pool</span>
    <span class="hljs-comment">// 2. Swapping in a balanced pool is like adding and then removing liquidity</span>
    <span class="hljs-comment">//    from a balanced pool</span>
    <span class="hljs-comment">// swap fee = add liquidity fee + remove liquidity fee</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> LIQUIDITY_FEE <span class="hljs-operator">=</span> (SWAP_FEE <span class="hljs-operator">*</span> N) <span class="hljs-operator">/</span> (<span class="hljs-number">4</span> <span class="hljs-operator">*</span> (N <span class="hljs-operator">-</span> <span class="hljs-number">1</span>));
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FEE_DENOMINATOR <span class="hljs-operator">=</span> <span class="hljs-number">1e6</span>;

    <span class="hljs-keyword">address</span>[N] <span class="hljs-keyword">public</span> tokens;
    <span class="hljs-comment">// Normalize each token to 18 decimals</span>
    <span class="hljs-comment">// Example - DAI (18 decimals), USDC (6 decimals), USDT (6 decimals)</span>
    <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">private</span> multipliers <span class="hljs-operator">=</span> [<span class="hljs-number">1</span>, <span class="hljs-number">1e12</span>, <span class="hljs-number">1e12</span>];
    <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">public</span> balances;

    <span class="hljs-comment">// 1 share = 1e18, 18 decimals</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DECIMALS <span class="hljs-operator">=</span> <span class="hljs-number">18</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _from, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_from] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-comment">// Return precision-adjusted balances, adjusted to 18 decimals</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_xp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp</span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            xp[i] <span class="hljs-operator">=</span> balances[i] <span class="hljs-operator">*</span> multipliers[i];
        }
    }

    <span class="hljs-comment">/**
     * @notice Calculate D, sum of balances in a perfectly balanced pool
     * If balances of x_0, x_1, ... x_(n-1) then sum(x_i) = D
     * @param xp Precision-adjusted balances
     * @return D
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getD</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">/*
        Newton&#x27;s method to compute D
        -----------------------------
        f(D) = ADn^n + D^(n + 1) / (n^n prod(x_i)) - An^n sum(x_i) - D 
        f&#x27;(D) = An^n + (n + 1) D^n / (n^n prod(x_i)) - 1

                     (as + np)D_n
        D_(n+1) = -----------------------
                  (a - 1)D_n + (n + 1)p

        a = An^n
        s = sum(x_i)
        p = (D_n)^(n + 1) / (n^n prod(x_i))
        */</span>
        <span class="hljs-keyword">uint</span> a <span class="hljs-operator">=</span> A <span class="hljs-operator">*</span> N; <span class="hljs-comment">// An^n</span>

        <span class="hljs-keyword">uint</span> s; <span class="hljs-comment">// x_0 + x_1 + ... + x_(n-1)</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            s <span class="hljs-operator">+</span><span class="hljs-operator">=</span> xp[i];
        }

        <span class="hljs-comment">// Newton&#x27;s method</span>
        <span class="hljs-comment">// Initial guess, d &lt;= s</span>
        <span class="hljs-keyword">uint</span> d <span class="hljs-operator">=</span> s;
        <span class="hljs-keyword">uint</span> d_prev;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> <span class="hljs-number">255</span>; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            <span class="hljs-comment">// p = D^(n + 1) / (n^n * x_0 * ... * x_(n-1))</span>
            <span class="hljs-keyword">uint</span> p <span class="hljs-operator">=</span> d;
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> j; j <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>j) {
                p <span class="hljs-operator">=</span> (p <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> xp[j]);
            }
            d_prev <span class="hljs-operator">=</span> d;
            d <span class="hljs-operator">=</span> ((a <span class="hljs-operator">*</span> s <span class="hljs-operator">+</span> N <span class="hljs-operator">*</span> p) <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> ((a <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">*</span> d <span class="hljs-operator">+</span> (N <span class="hljs-operator">+</span> <span class="hljs-number">1</span>) <span class="hljs-operator">*</span> p);

            <span class="hljs-keyword">if</span> (Math.abs(d, d_prev) <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) {
                <span class="hljs-keyword">return</span> d;
            }
        }
        <span class="hljs-keyword">revert</span>(<span class="hljs-string">"D didn&#x27;t converge"</span>);
    }

    <span class="hljs-comment">/**
     * @notice Calculate the new balance of token j given the new balance of token i
     * @param i Index of token in
     * @param j Index of token out
     * @param x New balance of token i
     * @param xp Current precision-adjusted balances
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getY</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> i,
        <span class="hljs-keyword">uint</span> j,
        <span class="hljs-keyword">uint</span> x,
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-comment">/*
        Newton&#x27;s method to compute y
        -----------------------------
        y = x_j

        f(y) = y^2 + y(b - D) - c

                    y_n^2 + c
        y_(n+1) = --------------
                   2y_n + b - D

        where
        s = sum(x_k), k != j
        p = prod(x_k), k != j
        b = s + D / (An^n)
        c = D^(n + 1) / (n^n * p * An^n)
        */</span>
        <span class="hljs-keyword">uint</span> a <span class="hljs-operator">=</span> A <span class="hljs-operator">*</span> N;
        <span class="hljs-keyword">uint</span> d <span class="hljs-operator">=</span> _getD(xp);
        <span class="hljs-keyword">uint</span> s;
        <span class="hljs-keyword">uint</span> c <span class="hljs-operator">=</span> d;

        <span class="hljs-keyword">uint</span> _x;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> k; k <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>k) {
            <span class="hljs-keyword">if</span> (k <span class="hljs-operator">=</span><span class="hljs-operator">=</span> i) {
                _x <span class="hljs-operator">=</span> x;
            } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (k <span class="hljs-operator">=</span><span class="hljs-operator">=</span> j) {
                <span class="hljs-keyword">continue</span>;
            } <span class="hljs-keyword">else</span> {
                _x <span class="hljs-operator">=</span> xp[k];
            }

            s <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _x;
            c <span class="hljs-operator">=</span> (c <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> _x);
        }
        c <span class="hljs-operator">=</span> (c <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> a);
        <span class="hljs-keyword">uint</span> b <span class="hljs-operator">=</span> s <span class="hljs-operator">+</span> d <span class="hljs-operator">/</span> a;

        <span class="hljs-comment">// Newton&#x27;s method</span>
        <span class="hljs-keyword">uint</span> y_prev;
        <span class="hljs-comment">// Initial guess, y &lt;= d</span>
        <span class="hljs-keyword">uint</span> y <span class="hljs-operator">=</span> d;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> _i; _i <span class="hljs-operator">&lt;</span> <span class="hljs-number">255</span>; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>_i) {
            y_prev <span class="hljs-operator">=</span> y;
            y <span class="hljs-operator">=</span> (y <span class="hljs-operator">*</span> y <span class="hljs-operator">+</span> c) <span class="hljs-operator">/</span> (<span class="hljs-number">2</span> <span class="hljs-operator">*</span> y <span class="hljs-operator">+</span> b <span class="hljs-operator">-</span> d);
            <span class="hljs-keyword">if</span> (Math.abs(y, y_prev) <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) {
                <span class="hljs-keyword">return</span> y;
            }
        }
        <span class="hljs-keyword">revert</span>(<span class="hljs-string">"y didn&#x27;t converge"</span>);
    }

    <span class="hljs-comment">/**
     * @notice Calculate the new balance of token i given precision-adjusted
     * balances xp and liquidity d
     * @dev Equation is calculate y is same as _getY
     * @param i Index of token to calculate the new balance
     * @param xp Precision-adjusted balances
     * @param d Liquidity d
     * @return New balance of token i
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getYD</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> i,
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp,
        <span class="hljs-keyword">uint</span> d
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">uint</span> a <span class="hljs-operator">=</span> A <span class="hljs-operator">*</span> N;
        <span class="hljs-keyword">uint</span> s;
        <span class="hljs-keyword">uint</span> c <span class="hljs-operator">=</span> d;

        <span class="hljs-keyword">uint</span> _x;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> k; k <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>k) {
            <span class="hljs-keyword">if</span> (k <span class="hljs-operator">!</span><span class="hljs-operator">=</span> i) {
                _x <span class="hljs-operator">=</span> xp[k];
            } <span class="hljs-keyword">else</span> {
                <span class="hljs-keyword">continue</span>;
            }

            s <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _x;
            c <span class="hljs-operator">=</span> (c <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> _x);
        }
        c <span class="hljs-operator">=</span> (c <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> a);
        <span class="hljs-keyword">uint</span> b <span class="hljs-operator">=</span> s <span class="hljs-operator">+</span> d <span class="hljs-operator">/</span> a;

        <span class="hljs-comment">// Newton&#x27;s method</span>
        <span class="hljs-keyword">uint</span> y_prev;
        <span class="hljs-comment">// Initial guess, y &lt;= d</span>
        <span class="hljs-keyword">uint</span> y <span class="hljs-operator">=</span> d;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> _i; _i <span class="hljs-operator">&lt;</span> <span class="hljs-number">255</span>; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>_i) {
            y_prev <span class="hljs-operator">=</span> y;
            y <span class="hljs-operator">=</span> (y <span class="hljs-operator">*</span> y <span class="hljs-operator">+</span> c) <span class="hljs-operator">/</span> (<span class="hljs-number">2</span> <span class="hljs-operator">*</span> y <span class="hljs-operator">+</span> b <span class="hljs-operator">-</span> d);
            <span class="hljs-keyword">if</span> (Math.abs(y, y_prev) <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>) {
                <span class="hljs-keyword">return</span> y;
            }
        }
        <span class="hljs-keyword">revert</span>(<span class="hljs-string">"y didn&#x27;t converge"</span>);
    }

    <span class="hljs-comment">// Estimate value of 1 share</span>
    <span class="hljs-comment">// How many tokens is one share worth?</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getVirtualPrice</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">uint</span> d <span class="hljs-operator">=</span> _getD(_xp());
        <span class="hljs-keyword">uint</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;
        <span class="hljs-keyword">if</span> (_totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">return</span> (d <span class="hljs-operator">*</span> <span class="hljs-number">10</span><span class="hljs-operator">*</span><span class="hljs-operator">*</span>DECIMALS) <span class="hljs-operator">/</span> _totalSupply;
        }
        <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
    }

    <span class="hljs-comment">/**
     * @notice Swap dx amount of token i for token j
     * @param i Index of token in
     * @param j Index of token out
     * @param dx Token in amount
     * @param minDy Minimum token out
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> i,
        <span class="hljs-keyword">uint</span> j,
        <span class="hljs-keyword">uint</span> dx,
        <span class="hljs-keyword">uint</span> minDy
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> dy</span>) </span>{
        <span class="hljs-built_in">require</span>(i <span class="hljs-operator">!</span><span class="hljs-operator">=</span> j, <span class="hljs-string">"i = j"</span>);

        IERC20(tokens[i]).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), dx);

        <span class="hljs-comment">// Calculate dy</span>
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp <span class="hljs-operator">=</span> _xp();
        <span class="hljs-keyword">uint</span> x <span class="hljs-operator">=</span> xp[i] <span class="hljs-operator">+</span> dx <span class="hljs-operator">*</span> multipliers[i];

        <span class="hljs-keyword">uint</span> y0 <span class="hljs-operator">=</span> xp[j];
        <span class="hljs-keyword">uint</span> y1 <span class="hljs-operator">=</span> _getY(i, j, x, xp);
        <span class="hljs-comment">// y0 must be &gt;= y1, since x has increased</span>
        <span class="hljs-comment">// -1 to round down</span>
        dy <span class="hljs-operator">=</span> (y0 <span class="hljs-operator">-</span> y1 <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">/</span> multipliers[j];

        <span class="hljs-comment">// Subtract fee from dy</span>
        <span class="hljs-keyword">uint</span> fee <span class="hljs-operator">=</span> (dy <span class="hljs-operator">*</span> SWAP_FEE) <span class="hljs-operator">/</span> FEE_DENOMINATOR;
        dy <span class="hljs-operator">-</span><span class="hljs-operator">=</span> fee;
        <span class="hljs-built_in">require</span>(dy <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> minDy, <span class="hljs-string">"dy &lt; min"</span>);

        balances[i] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> dx;
        balances[j] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> dy;

        IERC20(tokens[j]).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, dy);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">calldata</span> amounts, <span class="hljs-keyword">uint</span> minShares</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> shares</span>)
    </span>{
        <span class="hljs-comment">// calculate current liquidity d0</span>
        <span class="hljs-keyword">uint</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;
        <span class="hljs-keyword">uint</span> d0;
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> old_xs <span class="hljs-operator">=</span> _xp();
        <span class="hljs-keyword">if</span> (_totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            d0 <span class="hljs-operator">=</span> _getD(old_xs);
        }

        <span class="hljs-comment">// Transfer tokens in</span>
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> new_xs;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            <span class="hljs-keyword">uint</span> amount <span class="hljs-operator">=</span> amounts[i];
            <span class="hljs-keyword">if</span> (amount <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
                IERC20(tokens[i]).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount);
                new_xs[i] <span class="hljs-operator">=</span> old_xs[i] <span class="hljs-operator">+</span> amount <span class="hljs-operator">*</span> multipliers[i];
            } <span class="hljs-keyword">else</span> {
                new_xs[i] <span class="hljs-operator">=</span> old_xs[i];
            }
        }

        <span class="hljs-comment">// Calculate new liquidity d1</span>
        <span class="hljs-keyword">uint</span> d1 <span class="hljs-operator">=</span> _getD(new_xs);
        <span class="hljs-built_in">require</span>(d1 <span class="hljs-operator">&gt;</span> d0, <span class="hljs-string">"liquidity didn&#x27;t increase"</span>);

        <span class="hljs-comment">// Reccalcuate D accounting for fee on imbalance</span>
        <span class="hljs-keyword">uint</span> d2;
        <span class="hljs-keyword">if</span> (_totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
                <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> why old_xs[i] * d1 / d0? why not d1 / N?</span>
                <span class="hljs-keyword">uint</span> idealBalance <span class="hljs-operator">=</span> (old_xs[i] <span class="hljs-operator">*</span> d1) <span class="hljs-operator">/</span> d0;
                <span class="hljs-keyword">uint</span> diff <span class="hljs-operator">=</span> Math.abs(new_xs[i], idealBalance);
                new_xs[i] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> (LIQUIDITY_FEE <span class="hljs-operator">*</span> diff) <span class="hljs-operator">/</span> FEE_DENOMINATOR;
            }

            d2 <span class="hljs-operator">=</span> _getD(new_xs);
        } <span class="hljs-keyword">else</span> {
            d2 <span class="hljs-operator">=</span> d1;
        }

        <span class="hljs-comment">// Update balances</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            balances[i] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> amounts[i];
        }

        <span class="hljs-comment">// Shares to mint = (d2 - d0) / d0 * total supply</span>
        <span class="hljs-comment">// d1 &gt;= d2 &gt;= d0</span>
        <span class="hljs-keyword">if</span> (_totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            shares <span class="hljs-operator">=</span> ((d2 <span class="hljs-operator">-</span> d0) <span class="hljs-operator">*</span> _totalSupply) <span class="hljs-operator">/</span> d0;
        } <span class="hljs-keyword">else</span> {
            shares <span class="hljs-operator">=</span> d2;
        }
        <span class="hljs-built_in">require</span>(shares <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> minShares, <span class="hljs-string">"shares &lt; min"</span>);
        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> shares, <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">calldata</span> minAmountsOut</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> amountsOut</span>)
    </span>{
        <span class="hljs-keyword">uint</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            <span class="hljs-keyword">uint</span> amountOut <span class="hljs-operator">=</span> (balances[i] <span class="hljs-operator">*</span> shares) <span class="hljs-operator">/</span> _totalSupply;
            <span class="hljs-built_in">require</span>(amountOut <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> minAmountsOut[i], <span class="hljs-string">"out &lt; min"</span>);

            balances[i] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amountOut;
            amountsOut[i] <span class="hljs-operator">=</span> amountOut;

            IERC20(tokens[i]).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountOut);
        }

        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);
    }

    <span class="hljs-comment">/**
     * @notice Calculate amount of token i to receive for shares
     * @param shares Shares to burn
     * @param i Index of token to withdraw
     * @return dy Amount of token i to receive
     *         fee Fee for withdraw. Fee already included in dy
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_calcWithdrawOneToken</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> shares, <span class="hljs-keyword">uint</span> i</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> dy, <span class="hljs-keyword">uint</span> fee</span>)
    </span>{
        <span class="hljs-keyword">uint</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp <span class="hljs-operator">=</span> _xp();

        <span class="hljs-comment">// Calculate d0 and d1</span>
        <span class="hljs-keyword">uint</span> d0 <span class="hljs-operator">=</span> _getD(xp);
        <span class="hljs-keyword">uint</span> d1 <span class="hljs-operator">=</span> d0 <span class="hljs-operator">-</span> (d0 <span class="hljs-operator">*</span> shares) <span class="hljs-operator">/</span> _totalSupply;

        <span class="hljs-comment">// Calculate reduction in y if D = d1</span>
        <span class="hljs-keyword">uint</span> y0 <span class="hljs-operator">=</span> _getYD(i, xp, d1);
        <span class="hljs-comment">// d1 &lt;= d0 so y must be &lt;= xp[i]</span>
        <span class="hljs-keyword">uint</span> dy0 <span class="hljs-operator">=</span> (xp[i] <span class="hljs-operator">-</span> y0) <span class="hljs-operator">/</span> multipliers[i];

        <span class="hljs-comment">// Calculate imbalance fee, update xp with fees</span>
        <span class="hljs-keyword">uint</span> dx;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> j; j <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>j) {
            <span class="hljs-keyword">if</span> (j <span class="hljs-operator">=</span><span class="hljs-operator">=</span> i) {
                dx <span class="hljs-operator">=</span> (xp[j] <span class="hljs-operator">*</span> d1) <span class="hljs-operator">/</span> d0 <span class="hljs-operator">-</span> y0;
            } <span class="hljs-keyword">else</span> {
                <span class="hljs-comment">// d1 / d0 &lt;= 1</span>
                dx <span class="hljs-operator">=</span> xp[j] <span class="hljs-operator">-</span> (xp[j] <span class="hljs-operator">*</span> d1) <span class="hljs-operator">/</span> d0;
            }
            xp[j] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> (LIQUIDITY_FEE <span class="hljs-operator">*</span> dx) <span class="hljs-operator">/</span> FEE_DENOMINATOR;
        }

        <span class="hljs-comment">// Recalculate y with xp including imbalance fees</span>
        <span class="hljs-keyword">uint</span> y1 <span class="hljs-operator">=</span> _getYD(i, xp, d1);
        <span class="hljs-comment">// - 1 to round down</span>
        dy <span class="hljs-operator">=</span> (xp[i] <span class="hljs-operator">-</span> y1 <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">/</span> multipliers[i];
        fee <span class="hljs-operator">=</span> dy0 <span class="hljs-operator">-</span> dy;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">calcWithdrawOneToken</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> shares, <span class="hljs-keyword">uint</span> i</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> dy, <span class="hljs-keyword">uint</span> fee</span>)
    </span>{
        <span class="hljs-keyword">return</span> _calcWithdrawOneToken(shares, i);
    }

    <span class="hljs-comment">/**
     * @notice Withdraw liquidity in token i
     * @param shares Shares to burn
     * @param i Token to withdraw
     * @param minAmountOut Minimum amount of token i that must be withdrawn
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidityOneToken</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> shares,
        <span class="hljs-keyword">uint</span> i,
        <span class="hljs-keyword">uint</span> minAmountOut
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>) </span>{
        (amountOut, ) <span class="hljs-operator">=</span> _calcWithdrawOneToken(shares, i);
        <span class="hljs-built_in">require</span>(amountOut <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> minAmountOut, <span class="hljs-string">"out &lt; min"</span>);

        balances[i] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amountOut;
        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);

        IERC20(tokens[i]).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountOut);
    }
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

    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> amount</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint</span> amount</span>)</span>;
}
</code></pre>
`

export default html
