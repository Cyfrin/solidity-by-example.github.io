// metadata
export const version = "0.8.17"
export const title = "Stable Swap AMM"
export const description = "Curve's stable swap AMM"

export const keywords = ["defi", "curve", "stable", "swap", "amm"]

export const codes = [
  {
    fileName: "StableSwap.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuODsKCi8qCkludmFyaWFudCAtIHByaWNlIG9mIHRyYWRlIGFuZCBhbW91bnQgb2YgbGlxdWlkaXR5IGFyZSBkZXRlcm1pbmVkIGJ5IHRoaXMgZXF1YXRpb24KCkFuXm4gc3VtKHhfaSkgKyBEID0gQURuXm4gKyBEXihuICsgMSkgLyAobl5uIHByb2QoeF9pKSkKClRvcGljcwowLiBOZXd0b24ncyBtZXRob2QgeF8obiArIDEpID0geF9uIC0gZih4X24pIC8gZicoeF9uKQoxLiBJbnZhcmlhbnQKMi4gU3dhcAogICAtIENhbGN1bGF0ZSBZCiAgIC0gQ2FsY3VsYXRlIEQKMy4gR2V0IHZpcnR1YWwgcHJpY2UKNC4gQWRkIGxpcXVpZGl0eQogICAtIEltYmFsYW5jZSBmZWUKNS4gUmVtb3ZlIGxpcXVpZGl0eQo2LiBSZW1vdmUgbGlxdWlkaXR5IG9uZSB0b2tlbgogICAtIENhbGN1bGF0ZSB3aXRoZHJhdyBvbmUgdG9rZW4KICAgLSBnZXRZRApUT0RPOiB0ZXN0PwoqLwoKbGlicmFyeSBNYXRoIHsKICAgIGZ1bmN0aW9uIGFicyh1aW50IHgsIHVpbnQgeSkgaW50ZXJuYWwgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIHggPj0geSA/IHggLSB5IDogeSAtIHg7CiAgICB9Cn0KCmNvbnRyYWN0IFN0YWJsZVN3YXAgewogICAgLy8gTnVtYmVyIG9mIHRva2VucwogICAgdWludCBwcml2YXRlIGNvbnN0YW50IE4gPSAzOwogICAgLy8gQW1wbGlmaWNhdGlvbiBjb2VmZmljaWVudCBtdWx0aXBsaWVkIGJ5IE5eKE4gLSAxKQogICAgLy8gSGlnaGVyIHZhbHVlIG1ha2VzIHRoZSBjdXJ2ZSBtb3JlIGZsYXQKICAgIC8vIExvd2VyIHZhbHVlIG1ha2VzIHRoZSBjdXJ2ZSBtb3JlIGxpa2UgY29uc3RhbnQgcHJvZHVjdCBBTU0KICAgIHVpbnQgcHJpdmF0ZSBjb25zdGFudCBBID0gMTAwMCAqIChOICoqIChOIC0gMSkpOwogICAgLy8gMC4wMyUKICAgIHVpbnQgcHJpdmF0ZSBjb25zdGFudCBTV0FQX0ZFRSA9IDMwMDsKICAgIC8vIExpcXVpZGl0eSBmZWUgaXMgZGVyaXZlZCBmcm9tIDIgY29uc3RyYWludHMKICAgIC8vIDEuIEZlZSBpcyAwIGZvciBhZGRpbmcgLyByZW1vdmluZyBsaXF1aWRpdHkgdGhhdCByZXN1bHRzIGluIGEgYmFsYW5jZWQgcG9vbAogICAgLy8gMi4gU3dhcHBpbmcgaW4gYSBiYWxhbmNlZCBwb29sIGlzIGxpa2UgYWRkaW5nIGFuZCB0aGVuIHJlbW92aW5nIGxpcXVpZGl0eQogICAgLy8gICAgZnJvbSBhIGJhbGFuY2VkIHBvb2wKICAgIC8vIHN3YXAgZmVlID0gYWRkIGxpcXVpZGl0eSBmZWUgKyByZW1vdmUgbGlxdWlkaXR5IGZlZQogICAgdWludCBwcml2YXRlIGNvbnN0YW50IExJUVVJRElUWV9GRUUgPSAoU1dBUF9GRUUgKiBOKSAvICg0ICogKE4gLSAxKSk7CiAgICB1aW50IHByaXZhdGUgY29uc3RhbnQgRkVFX0RFTk9NSU5BVE9SID0gMWU2OwoKICAgIGFkZHJlc3NbTl0gcHVibGljIHRva2VuczsKICAgIC8vIE5vcm1hbGl6ZSBlYWNoIHRva2VuIHRvIDE4IGRlY2ltYWxzCiAgICAvLyBFeGFtcGxlIC0gREFJICgxOCBkZWNpbWFscyksIFVTREMgKDYgZGVjaW1hbHMpLCBVU0RUICg2IGRlY2ltYWxzKQogICAgdWludFtOXSBwcml2YXRlIG11bHRpcGxpZXJzID0gWzEsIDFlMTIsIDFlMTJdOwogICAgdWludFtOXSBwdWJsaWMgYmFsYW5jZXM7CgogICAgLy8gMSBzaGFyZSA9IDFlMTgsIDE4IGRlY2ltYWxzCiAgICB1aW50IHByaXZhdGUgY29uc3RhbnQgREVDSU1BTFMgPSAxODsKICAgIHVpbnQgcHVibGljIHRvdGFsU3VwcGx5OwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBiYWxhbmNlT2Y7CgogICAgY29uc3RydWN0b3IoYWRkcmVzc1tOXSBtZW1vcnkgX3Rva2VucykgewogICAgICAgIHRva2VucyA9IF90b2tlbnM7CiAgICB9CgogICAgZnVuY3Rpb24gX21pbnQoYWRkcmVzcyBfdG8sIHVpbnQgX2Ftb3VudCkgcHJpdmF0ZSB7CiAgICAgICAgYmFsYW5jZU9mW190b10gKz0gX2Ftb3VudDsKICAgICAgICB0b3RhbFN1cHBseSArPSBfYW1vdW50OwogICAgfQoKICAgIGZ1bmN0aW9uIF9idXJuKGFkZHJlc3MgX2Zyb20sIHVpbnQgX2Ftb3VudCkgcHJpdmF0ZSB7CiAgICAgICAgYmFsYW5jZU9mW19mcm9tXSAtPSBfYW1vdW50OwogICAgICAgIHRvdGFsU3VwcGx5IC09IF9hbW91bnQ7CiAgICB9CgogICAgLy8gUmV0dXJuIHByZWNpc2lvbi1hZGp1c3RlZCBiYWxhbmNlcywgYWRqdXN0ZWQgdG8gMTggZGVjaW1hbHMKICAgIGZ1bmN0aW9uIF94cCgpIHByaXZhdGUgdmlldyByZXR1cm5zICh1aW50W05dIG1lbW9yeSB4cCkgewogICAgICAgIGZvciAodWludCBpOyBpIDwgTjsgKytpKSB7CiAgICAgICAgICAgIHhwW2ldID0gYmFsYW5jZXNbaV0gKiBtdWx0aXBsaWVyc1tpXTsKICAgICAgICB9CiAgICB9CgogICAgLyoqCiAgICAgKiBAbm90aWNlIENhbGN1bGF0ZSBELCBzdW0gb2YgYmFsYW5jZXMgaW4gYSBwZXJmZWN0bHkgYmFsYW5jZWQgcG9vbAogICAgICogSWYgYmFsYW5jZXMgb2YgeF8wLCB4XzEsIC4uLiB4XyhuLTEpIHRoZW4gc3VtKHhfaSkgPSBECiAgICAgKiBAcGFyYW0geHAgUHJlY2lzaW9uLWFkanVzdGVkIGJhbGFuY2VzCiAgICAgKiBAcmV0dXJuIEQKICAgICAqLwogICAgZnVuY3Rpb24gX2dldEQodWludFtOXSBtZW1vcnkgeHApIHByaXZhdGUgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgLyoKICAgICAgICBOZXd0b24ncyBtZXRob2QgdG8gY29tcHV0ZSBECiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KICAgICAgICBmKEQpID0gQURuXm4gKyBEXihuICsgMSkgLyAobl5uIHByb2QoeF9pKSkgLSBBbl5uIHN1bSh4X2kpIC0gRCAKICAgICAgICBmJyhEKSA9IEFuXm4gKyAobiArIDEpIERebiAvIChuXm4gcHJvZCh4X2kpKSAtIDEKCiAgICAgICAgICAgICAgICAgICAgIChhcyArIG5wKURfbgogICAgICAgIERfKG4rMSkgPSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQogICAgICAgICAgICAgICAgICAoYSAtIDEpRF9uICsgKG4gKyAxKXAKCiAgICAgICAgYSA9IEFuXm4KICAgICAgICBzID0gc3VtKHhfaSkKICAgICAgICBwID0gKERfbileKG4gKyAxKSAvIChuXm4gcHJvZCh4X2kpKQogICAgICAgICovCiAgICAgICAgdWludCBhID0gQSAqIE47IC8vIEFuXm4KCiAgICAgICAgdWludCBzOyAvLyB4XzAgKyB4XzEgKyAuLi4gKyB4XyhuLTEpCiAgICAgICAgZm9yICh1aW50IGk7IGkgPCBOOyArK2kpIHsKICAgICAgICAgICAgcyArPSB4cFtpXTsKICAgICAgICB9CgogICAgICAgIC8vIE5ld3RvbidzIG1ldGhvZAogICAgICAgIC8vIEluaXRpYWwgZ3Vlc3MsIGQgPD0gcwogICAgICAgIHVpbnQgZCA9IHM7CiAgICAgICAgdWludCBkX3ByZXY7CiAgICAgICAgZm9yICh1aW50IGk7IGkgPCAyNTU7ICsraSkgewogICAgICAgICAgICAvLyBwID0gRF4obiArIDEpIC8gKG5ebiAqIHhfMCAqIC4uLiAqIHhfKG4tMSkpCiAgICAgICAgICAgIHVpbnQgcCA9IGQ7CiAgICAgICAgICAgIGZvciAodWludCBqOyBqIDwgTjsgKytqKSB7CiAgICAgICAgICAgICAgICBwID0gKHAgKiBkKSAvIChOICogeHBbal0pOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGRfcHJldiA9IGQ7CiAgICAgICAgICAgIGQgPSAoKGEgKiBzICsgTiAqIHApICogZCkgLyAoKGEgLSAxKSAqIGQgKyAoTiArIDEpICogcCk7CgogICAgICAgICAgICBpZiAoTWF0aC5hYnMoZCwgZF9wcmV2KSA8PSAxKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gZDsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICByZXZlcnQoIkQgZGlkbid0IGNvbnZlcmdlIik7CiAgICB9CgogICAgLyoqCiAgICAgKiBAbm90aWNlIENhbGN1bGF0ZSB0aGUgbmV3IGJhbGFuY2Ugb2YgdG9rZW4gaiBnaXZlbiB0aGUgbmV3IGJhbGFuY2Ugb2YgdG9rZW4gaQogICAgICogQHBhcmFtIGkgSW5kZXggb2YgdG9rZW4gaW4KICAgICAqIEBwYXJhbSBqIEluZGV4IG9mIHRva2VuIG91dAogICAgICogQHBhcmFtIHggTmV3IGJhbGFuY2Ugb2YgdG9rZW4gaQogICAgICogQHBhcmFtIHhwIEN1cnJlbnQgcHJlY2lzaW9uLWFkanVzdGVkIGJhbGFuY2VzCiAgICAgKi8KICAgIGZ1bmN0aW9uIF9nZXRZKAogICAgICAgIHVpbnQgaSwKICAgICAgICB1aW50IGosCiAgICAgICAgdWludCB4LAogICAgICAgIHVpbnRbTl0gbWVtb3J5IHhwCiAgICApIHByaXZhdGUgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgLyoKICAgICAgICBOZXd0b24ncyBtZXRob2QgdG8gY29tcHV0ZSB5CiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KICAgICAgICB5ID0geF9qCgogICAgICAgIGYoeSkgPSB5XjIgKyB5KGIgLSBEKSAtIGMKCiAgICAgICAgICAgICAgICAgICAgeV9uXjIgKyBjCiAgICAgICAgeV8obisxKSA9IC0tLS0tLS0tLS0tLS0tCiAgICAgICAgICAgICAgICAgICAyeV9uICsgYiAtIEQKCiAgICAgICAgd2hlcmUKICAgICAgICBzID0gc3VtKHhfayksIGsgIT0gagogICAgICAgIHAgPSBwcm9kKHhfayksIGsgIT0gagogICAgICAgIGIgPSBzICsgRCAvIChBbl5uKQogICAgICAgIGMgPSBEXihuICsgMSkgLyAobl5uICogcCAqIEFuXm4pCiAgICAgICAgKi8KICAgICAgICB1aW50IGEgPSBBICogTjsKICAgICAgICB1aW50IGQgPSBfZ2V0RCh4cCk7CiAgICAgICAgdWludCBzOwogICAgICAgIHVpbnQgYyA9IGQ7CgogICAgICAgIHVpbnQgX3g7CiAgICAgICAgZm9yICh1aW50IGs7IGsgPCBOOyArK2spIHsKICAgICAgICAgICAgaWYgKGsgPT0gaSkgewogICAgICAgICAgICAgICAgX3ggPSB4OwogICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT0gaikgewogICAgICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBfeCA9IHhwW2tdOwogICAgICAgICAgICB9CgogICAgICAgICAgICBzICs9IF94OwogICAgICAgICAgICBjID0gKGMgKiBkKSAvIChOICogX3gpOwogICAgICAgIH0KICAgICAgICBjID0gKGMgKiBkKSAvIChOICogYSk7CiAgICAgICAgdWludCBiID0gcyArIGQgLyBhOwoKICAgICAgICAvLyBOZXd0b24ncyBtZXRob2QKICAgICAgICB1aW50IHlfcHJldjsKICAgICAgICAvLyBJbml0aWFsIGd1ZXNzLCB5IDw9IGQKICAgICAgICB1aW50IHkgPSBkOwogICAgICAgIGZvciAodWludCBfaTsgX2kgPCAyNTU7ICsrX2kpIHsKICAgICAgICAgICAgeV9wcmV2ID0geTsKICAgICAgICAgICAgeSA9ICh5ICogeSArIGMpIC8gKDIgKiB5ICsgYiAtIGQpOwogICAgICAgICAgICBpZiAoTWF0aC5hYnMoeSwgeV9wcmV2KSA8PSAxKSB7CiAgICAgICAgICAgICAgICByZXR1cm4geTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICByZXZlcnQoInkgZGlkbid0IGNvbnZlcmdlIik7CiAgICB9CgogICAgLyoqCiAgICAgKiBAbm90aWNlIENhbGN1bGF0ZSB0aGUgbmV3IGJhbGFuY2Ugb2YgdG9rZW4gaSBnaXZlbiBwcmVjaXNpb24tYWRqdXN0ZWQKICAgICAqIGJhbGFuY2VzIHhwIGFuZCBsaXF1aWRpdHkgZAogICAgICogQGRldiBFcXVhdGlvbiBpcyBjYWxjdWxhdGUgeSBpcyBzYW1lIGFzIF9nZXRZCiAgICAgKiBAcGFyYW0gaSBJbmRleCBvZiB0b2tlbiB0byBjYWxjdWxhdGUgdGhlIG5ldyBiYWxhbmNlCiAgICAgKiBAcGFyYW0geHAgUHJlY2lzaW9uLWFkanVzdGVkIGJhbGFuY2VzCiAgICAgKiBAcGFyYW0gZCBMaXF1aWRpdHkgZAogICAgICogQHJldHVybiBOZXcgYmFsYW5jZSBvZiB0b2tlbiBpCiAgICAgKi8KICAgIGZ1bmN0aW9uIF9nZXRZRCh1aW50IGksIHVpbnRbTl0gbWVtb3J5IHhwLCB1aW50IGQpIHByaXZhdGUgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgdWludCBhID0gQSAqIE47CiAgICAgICAgdWludCBzOwogICAgICAgIHVpbnQgYyA9IGQ7CgogICAgICAgIHVpbnQgX3g7CiAgICAgICAgZm9yICh1aW50IGs7IGsgPCBOOyArK2spIHsKICAgICAgICAgICAgaWYgKGsgIT0gaSkgewogICAgICAgICAgICAgICAgX3ggPSB4cFtrXTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgICAgICB9CgogICAgICAgICAgICBzICs9IF94OwogICAgICAgICAgICBjID0gKGMgKiBkKSAvIChOICogX3gpOwogICAgICAgIH0KICAgICAgICBjID0gKGMgKiBkKSAvIChOICogYSk7CiAgICAgICAgdWludCBiID0gcyArIGQgLyBhOwoKICAgICAgICAvLyBOZXd0b24ncyBtZXRob2QKICAgICAgICB1aW50IHlfcHJldjsKICAgICAgICAvLyBJbml0aWFsIGd1ZXNzLCB5IDw9IGQKICAgICAgICB1aW50IHkgPSBkOwogICAgICAgIGZvciAodWludCBfaTsgX2kgPCAyNTU7ICsrX2kpIHsKICAgICAgICAgICAgeV9wcmV2ID0geTsKICAgICAgICAgICAgeSA9ICh5ICogeSArIGMpIC8gKDIgKiB5ICsgYiAtIGQpOwogICAgICAgICAgICBpZiAoTWF0aC5hYnMoeSwgeV9wcmV2KSA8PSAxKSB7CiAgICAgICAgICAgICAgICByZXR1cm4geTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICByZXZlcnQoInkgZGlkbid0IGNvbnZlcmdlIik7CiAgICB9CgogICAgLy8gRXN0aW1hdGUgdmFsdWUgb2YgMSBzaGFyZQogICAgLy8gSG93IG1hbnkgdG9rZW5zIGlzIG9uZSBzaGFyZSB3b3J0aD8KICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxQcmljZSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIHVpbnQgZCA9IF9nZXREKF94cCgpKTsKICAgICAgICB1aW50IF90b3RhbFN1cHBseSA9IHRvdGFsU3VwcGx5OwogICAgICAgIGlmIChfdG90YWxTdXBwbHkgPiAwKSB7CiAgICAgICAgICAgIHJldHVybiAoZCAqIDEwICoqIERFQ0lNQUxTKSAvIF90b3RhbFN1cHBseTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIDA7CiAgICB9CgogICAgLyoqCiAgICAgKiBAbm90aWNlIFN3YXAgZHggYW1vdW50IG9mIHRva2VuIGkgZm9yIHRva2VuIGoKICAgICAqIEBwYXJhbSBpIEluZGV4IG9mIHRva2VuIGluCiAgICAgKiBAcGFyYW0gaiBJbmRleCBvZiB0b2tlbiBvdXQKICAgICAqIEBwYXJhbSBkeCBUb2tlbiBpbiBhbW91bnQKICAgICAqIEBwYXJhbSBtaW5EeSBNaW5pbXVtIHRva2VuIG91dAogICAgICovCiAgICBmdW5jdGlvbiBzd2FwKHVpbnQgaSwgdWludCBqLCB1aW50IGR4LCB1aW50IG1pbkR5KSBleHRlcm5hbCByZXR1cm5zICh1aW50IGR5KSB7CiAgICAgICAgcmVxdWlyZShpICE9IGosICJpID0gaiIpOwoKICAgICAgICBJRVJDMjAodG9rZW5zW2ldKS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgZHgpOwoKICAgICAgICAvLyBDYWxjdWxhdGUgZHkKICAgICAgICB1aW50W05dIG1lbW9yeSB4cCA9IF94cCgpOwogICAgICAgIHVpbnQgeCA9IHhwW2ldICsgZHggKiBtdWx0aXBsaWVyc1tpXTsKCiAgICAgICAgdWludCB5MCA9IHhwW2pdOwogICAgICAgIHVpbnQgeTEgPSBfZ2V0WShpLCBqLCB4LCB4cCk7CiAgICAgICAgLy8geTAgbXVzdCBiZSA+PSB5MSwgc2luY2UgeCBoYXMgaW5jcmVhc2VkCiAgICAgICAgLy8gLTEgdG8gcm91bmQgZG93bgogICAgICAgIGR5ID0gKHkwIC0geTEgLSAxKSAvIG11bHRpcGxpZXJzW2pdOwoKICAgICAgICAvLyBTdWJ0cmFjdCBmZWUgZnJvbSBkeQogICAgICAgIHVpbnQgZmVlID0gKGR5ICogU1dBUF9GRUUpIC8gRkVFX0RFTk9NSU5BVE9SOwogICAgICAgIGR5IC09IGZlZTsKICAgICAgICByZXF1aXJlKGR5ID49IG1pbkR5LCAiZHkgPCBtaW4iKTsKCiAgICAgICAgYmFsYW5jZXNbaV0gKz0gZHg7CiAgICAgICAgYmFsYW5jZXNbal0gLT0gZHk7CgogICAgICAgIElFUkMyMCh0b2tlbnNbal0pLnRyYW5zZmVyKG1zZy5zZW5kZXIsIGR5KTsKICAgIH0KCiAgICBmdW5jdGlvbiBhZGRMaXF1aWRpdHkoCiAgICAgICAgdWludFtOXSBjYWxsZGF0YSBhbW91bnRzLAogICAgICAgIHVpbnQgbWluU2hhcmVzCiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQgc2hhcmVzKSB7CiAgICAgICAgLy8gY2FsY3VsYXRlIGN1cnJlbnQgbGlxdWlkaXR5IGQwCiAgICAgICAgdWludCBfdG90YWxTdXBwbHkgPSB0b3RhbFN1cHBseTsKICAgICAgICB1aW50IGQwOwogICAgICAgIHVpbnRbTl0gbWVtb3J5IG9sZF94cyA9IF94cCgpOwogICAgICAgIGlmIChfdG90YWxTdXBwbHkgPiAwKSB7CiAgICAgICAgICAgIGQwID0gX2dldEQob2xkX3hzKTsKICAgICAgICB9CgogICAgICAgIC8vIFRyYW5zZmVyIHRva2VucyBpbgogICAgICAgIHVpbnRbTl0gbWVtb3J5IG5ld194czsKICAgICAgICBmb3IgKHVpbnQgaTsgaSA8IE47ICsraSkgewogICAgICAgICAgICB1aW50IGFtb3VudCA9IGFtb3VudHNbaV07CiAgICAgICAgICAgIGlmIChhbW91bnQgPiAwKSB7CiAgICAgICAgICAgICAgICBJRVJDMjAodG9rZW5zW2ldKS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50KTsKICAgICAgICAgICAgICAgIG5ld194c1tpXSA9IG9sZF94c1tpXSArIGFtb3VudCAqIG11bHRpcGxpZXJzW2ldOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgbmV3X3hzW2ldID0gb2xkX3hzW2ldOwogICAgICAgICAgICB9CiAgICAgICAgfQoKICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IGxpcXVpZGl0eSBkMQogICAgICAgIHVpbnQgZDEgPSBfZ2V0RChuZXdfeHMpOwogICAgICAgIHJlcXVpcmUoZDEgPiBkMCwgImxpcXVpZGl0eSBkaWRuJ3QgaW5jcmVhc2UiKTsKCiAgICAgICAgLy8gUmVjY2FsY3VhdGUgRCBhY2NvdW50aW5nIGZvciBmZWUgb24gaW1iYWxhbmNlCiAgICAgICAgdWludCBkMjsKICAgICAgICBpZiAoX3RvdGFsU3VwcGx5ID4gMCkgewogICAgICAgICAgICBmb3IgKHVpbnQgaTsgaSA8IE47ICsraSkgewogICAgICAgICAgICAgICAgLy8gVE9ETzogd2h5IG9sZF94c1tpXSAqIGQxIC8gZDA/IHdoeSBub3QgZDEgLyBOPwogICAgICAgICAgICAgICAgdWludCBpZGVhbEJhbGFuY2UgPSAob2xkX3hzW2ldICogZDEpIC8gZDA7CiAgICAgICAgICAgICAgICB1aW50IGRpZmYgPSBNYXRoLmFicyhuZXdfeHNbaV0sIGlkZWFsQmFsYW5jZSk7CiAgICAgICAgICAgICAgICBuZXdfeHNbaV0gLT0gKExJUVVJRElUWV9GRUUgKiBkaWZmKSAvIEZFRV9ERU5PTUlOQVRPUjsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgZDIgPSBfZ2V0RChuZXdfeHMpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGQyID0gZDE7CiAgICAgICAgfQoKICAgICAgICAvLyBVcGRhdGUgYmFsYW5jZXMKICAgICAgICBmb3IgKHVpbnQgaTsgaSA8IE47ICsraSkgewogICAgICAgICAgICBiYWxhbmNlc1tpXSArPSBhbW91bnRzW2ldOwogICAgICAgIH0KCiAgICAgICAgLy8gU2hhcmVzIHRvIG1pbnQgPSAoZDIgLSBkMCkgLyBkMCAqIHRvdGFsIHN1cHBseQogICAgICAgIC8vIGQxID49IGQyID49IGQwCiAgICAgICAgaWYgKF90b3RhbFN1cHBseSA+IDApIHsKICAgICAgICAgICAgc2hhcmVzID0gKChkMiAtIGQwKSAqIF90b3RhbFN1cHBseSkgLyBkMDsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBzaGFyZXMgPSBkMjsKICAgICAgICB9CiAgICAgICAgcmVxdWlyZShzaGFyZXMgPj0gbWluU2hhcmVzLCAic2hhcmVzIDwgbWluIik7CiAgICAgICAgX21pbnQobXNnLnNlbmRlciwgc2hhcmVzKTsKICAgIH0KCiAgICBmdW5jdGlvbiByZW1vdmVMaXF1aWRpdHkoCiAgICAgICAgdWludCBzaGFyZXMsCiAgICAgICAgdWludFtOXSBjYWxsZGF0YSBtaW5BbW91bnRzT3V0CiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnRbTl0gbWVtb3J5IGFtb3VudHNPdXQpIHsKICAgICAgICB1aW50IF90b3RhbFN1cHBseSA9IHRvdGFsU3VwcGx5OwoKICAgICAgICBmb3IgKHVpbnQgaTsgaSA8IE47ICsraSkgewogICAgICAgICAgICB1aW50IGFtb3VudE91dCA9IChiYWxhbmNlc1tpXSAqIHNoYXJlcykgLyBfdG90YWxTdXBwbHk7CiAgICAgICAgICAgIHJlcXVpcmUoYW1vdW50T3V0ID49IG1pbkFtb3VudHNPdXRbaV0sICJvdXQgPCBtaW4iKTsKCiAgICAgICAgICAgIGJhbGFuY2VzW2ldIC09IGFtb3VudE91dDsKICAgICAgICAgICAgYW1vdW50c091dFtpXSA9IGFtb3VudE91dDsKCiAgICAgICAgICAgIElFUkMyMCh0b2tlbnNbaV0pLnRyYW5zZmVyKG1zZy5zZW5kZXIsIGFtb3VudE91dCk7CiAgICAgICAgfQoKICAgICAgICBfYnVybihtc2cuc2VuZGVyLCBzaGFyZXMpOwogICAgfQoKICAgIC8qKgogICAgICogQG5vdGljZSBDYWxjdWxhdGUgYW1vdW50IG9mIHRva2VuIGkgdG8gcmVjZWl2ZSBmb3Igc2hhcmVzCiAgICAgKiBAcGFyYW0gc2hhcmVzIFNoYXJlcyB0byBidXJuCiAgICAgKiBAcGFyYW0gaSBJbmRleCBvZiB0b2tlbiB0byB3aXRoZHJhdwogICAgICogQHJldHVybiBkeSBBbW91bnQgb2YgdG9rZW4gaSB0byByZWNlaXZlCiAgICAgKiAgICAgICAgIGZlZSBGZWUgZm9yIHdpdGhkcmF3LiBGZWUgYWxyZWFkeSBpbmNsdWRlZCBpbiBkeQogICAgICovCiAgICBmdW5jdGlvbiBfY2FsY1dpdGhkcmF3T25lVG9rZW4oCiAgICAgICAgdWludCBzaGFyZXMsCiAgICAgICAgdWludCBpCiAgICApIHByaXZhdGUgdmlldyByZXR1cm5zICh1aW50IGR5LCB1aW50IGZlZSkgewogICAgICAgIHVpbnQgX3RvdGFsU3VwcGx5ID0gdG90YWxTdXBwbHk7CiAgICAgICAgdWludFtOXSBtZW1vcnkgeHAgPSBfeHAoKTsKCiAgICAgICAgLy8gQ2FsY3VsYXRlIGQwIGFuZCBkMQogICAgICAgIHVpbnQgZDAgPSBfZ2V0RCh4cCk7CiAgICAgICAgdWludCBkMSA9IGQwIC0gKGQwICogc2hhcmVzKSAvIF90b3RhbFN1cHBseTsKCiAgICAgICAgLy8gQ2FsY3VsYXRlIHJlZHVjdGlvbiBpbiB5IGlmIEQgPSBkMQogICAgICAgIHVpbnQgeTAgPSBfZ2V0WUQoaSwgeHAsIGQxKTsKICAgICAgICAvLyBkMSA8PSBkMCBzbyB5IG11c3QgYmUgPD0geHBbaV0KICAgICAgICB1aW50IGR5MCA9ICh4cFtpXSAtIHkwKSAvIG11bHRpcGxpZXJzW2ldOwoKICAgICAgICAvLyBDYWxjdWxhdGUgaW1iYWxhbmNlIGZlZSwgdXBkYXRlIHhwIHdpdGggZmVlcwogICAgICAgIHVpbnQgZHg7CiAgICAgICAgZm9yICh1aW50IGo7IGogPCBOOyArK2opIHsKICAgICAgICAgICAgaWYgKGogPT0gaSkgewogICAgICAgICAgICAgICAgZHggPSAoeHBbal0gKiBkMSkgLyBkMCAtIHkwOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgLy8gZDEgLyBkMCA8PSAxCiAgICAgICAgICAgICAgICBkeCA9IHhwW2pdIC0gKHhwW2pdICogZDEpIC8gZDA7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgeHBbal0gLT0gKExJUVVJRElUWV9GRUUgKiBkeCkgLyBGRUVfREVOT01JTkFUT1I7CiAgICAgICAgfQoKICAgICAgICAvLyBSZWNhbGN1bGF0ZSB5IHdpdGggeHAgaW5jbHVkaW5nIGltYmFsYW5jZSBmZWVzCiAgICAgICAgdWludCB5MSA9IF9nZXRZRChpLCB4cCwgZDEpOwogICAgICAgIC8vIC0gMSB0byByb3VuZCBkb3duCiAgICAgICAgZHkgPSAoeHBbaV0gLSB5MSAtIDEpIC8gbXVsdGlwbGllcnNbaV07CiAgICAgICAgZmVlID0gZHkwIC0gZHk7CiAgICB9CgogICAgZnVuY3Rpb24gY2FsY1dpdGhkcmF3T25lVG9rZW4oCiAgICAgICAgdWludCBzaGFyZXMsCiAgICAgICAgdWludCBpCiAgICApIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCBkeSwgdWludCBmZWUpIHsKICAgICAgICByZXR1cm4gX2NhbGNXaXRoZHJhd09uZVRva2VuKHNoYXJlcywgaSk7CiAgICB9CgogICAgLyoqCiAgICAgKiBAbm90aWNlIFdpdGhkcmF3IGxpcXVpZGl0eSBpbiB0b2tlbiBpCiAgICAgKiBAcGFyYW0gc2hhcmVzIFNoYXJlcyB0byBidXJuCiAgICAgKiBAcGFyYW0gaSBUb2tlbiB0byB3aXRoZHJhdwogICAgICogQHBhcmFtIG1pbkFtb3VudE91dCBNaW5pbXVtIGFtb3VudCBvZiB0b2tlbiBpIHRoYXQgbXVzdCBiZSB3aXRoZHJhd24KICAgICAqLwogICAgZnVuY3Rpb24gcmVtb3ZlTGlxdWlkaXR5T25lVG9rZW4oCiAgICAgICAgdWludCBzaGFyZXMsCiAgICAgICAgdWludCBpLAogICAgICAgIHVpbnQgbWluQW1vdW50T3V0CiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQgYW1vdW50T3V0KSB7CiAgICAgICAgKGFtb3VudE91dCwgKSA9IF9jYWxjV2l0aGRyYXdPbmVUb2tlbihzaGFyZXMsIGkpOwogICAgICAgIHJlcXVpcmUoYW1vdW50T3V0ID49IG1pbkFtb3VudE91dCwgIm91dCA8IG1pbiIpOwoKICAgICAgICBiYWxhbmNlc1tpXSAtPSBhbW91bnRPdXQ7CiAgICAgICAgX2J1cm4obXNnLnNlbmRlciwgc2hhcmVzKTsKCiAgICAgICAgSUVSQzIwKHRva2Vuc1tpXSkudHJhbnNmZXIobXNnLnNlbmRlciwgYW1vdW50T3V0KTsKICAgIH0KfQoKaW50ZXJmYWNlIElFUkMyMCB7CiAgICBmdW5jdGlvbiB0b3RhbFN1cHBseSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCk7CgogICAgZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBzZW5kZXIsCiAgICAgICAgYWRkcmVzcyByZWNpcGllbnQsCiAgICAgICAgdWludCBhbW91bnQKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludCBhbW91bnQpOwogICAgZXZlbnQgQXBwcm92YWwoYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgc3BlbmRlciwgdWludCBhbW91bnQpOwp9Cg==",
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
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> A <span class="hljs-operator">=</span> <span class="hljs-number">1000</span> <span class="hljs-operator">*</span> (N <span class="hljs-operator">*</span><span class="hljs-operator">*</span> (N <span class="hljs-operator">-</span> <span class="hljs-number">1</span>));
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

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[N] <span class="hljs-keyword">memory</span> _tokens</span>) </span>{
        tokens <span class="hljs-operator">=</span> _tokens;
    }

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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getYD</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> i, <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> xp, <span class="hljs-keyword">uint</span> d</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
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
            <span class="hljs-keyword">return</span> (d <span class="hljs-operator">*</span> <span class="hljs-number">10</span> <span class="hljs-operator">*</span><span class="hljs-operator">*</span> DECIMALS) <span class="hljs-operator">/</span> _totalSupply;
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> i, <span class="hljs-keyword">uint</span> j, <span class="hljs-keyword">uint</span> dx, <span class="hljs-keyword">uint</span> minDy</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> dy</span>) </span>{
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">calldata</span> amounts,
        <span class="hljs-keyword">uint</span> minShares
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> shares</span>) </span>{
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> shares,
        <span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">calldata</span> minAmountsOut
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span>[N] <span class="hljs-keyword">memory</span> amountsOut</span>) </span>{
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_calcWithdrawOneToken</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> shares,
        <span class="hljs-keyword">uint</span> i
    </span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> dy, <span class="hljs-keyword">uint</span> fee</span>) </span>{
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">calcWithdrawOneToken</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> shares,
        <span class="hljs-keyword">uint</span> i
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> dy, <span class="hljs-keyword">uint</span> fee</span>) </span>{
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
