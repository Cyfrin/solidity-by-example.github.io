// metadata
export const version = "0.8.26"
export const title = "Stable Swap AMM"
export const description = "Curve's stable swap AMM"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/stable-swap-amm-solidity-code-example"

export const keywords = ["defi", "curve", "stable", "swap", "amm"]

export const codes = [
  {
    fileName: "StableSwap.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qCkludmFyaWFudCAtIHByaWNlIG9mIHRyYWRlIGFuZCBhbW91bnQgb2YgbGlxdWlkaXR5IGFyZSBkZXRlcm1pbmVkIGJ5IHRoaXMgZXF1YXRpb24KCkFuXm4gc3VtKHhfaSkgKyBEID0gQURuXm4gKyBEXihuICsgMSkgLyAobl5uIHByb2QoeF9pKSkKClRvcGljcwowLiBOZXd0b24ncyBtZXRob2QgeF8obiArIDEpID0geF9uIC0gZih4X24pIC8gZicoeF9uKQoxLiBJbnZhcmlhbnQKMi4gU3dhcAogICAtIENhbGN1bGF0ZSBZCiAgIC0gQ2FsY3VsYXRlIEQKMy4gR2V0IHZpcnR1YWwgcHJpY2UKNC4gQWRkIGxpcXVpZGl0eQogICAtIEltYmFsYW5jZSBmZWUKNS4gUmVtb3ZlIGxpcXVpZGl0eQo2LiBSZW1vdmUgbGlxdWlkaXR5IG9uZSB0b2tlbgogICAtIENhbGN1bGF0ZSB3aXRoZHJhdyBvbmUgdG9rZW4KICAgLSBnZXRZRApUT0RPOiB0ZXN0PwoqLwoKbGlicmFyeSBNYXRoIHsKICAgIGZ1bmN0aW9uIGFicyh1aW50MjU2IHgsIHVpbnQyNTYgeSkgaW50ZXJuYWwgcHVyZSByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgcmV0dXJuIHggPj0geSA/IHggLSB5IDogeSAtIHg7CiAgICB9Cn0KCmNvbnRyYWN0IFN0YWJsZVN3YXAgewogICAgLy8gTnVtYmVyIG9mIHRva2VucwogICAgdWludDI1NiBwcml2YXRlIGNvbnN0YW50IE4gPSAzOwogICAgLy8gQW1wbGlmaWNhdGlvbiBjb2VmZmljaWVudCBtdWx0aXBsaWVkIGJ5IE5eKE4gLSAxKQogICAgLy8gSGlnaGVyIHZhbHVlIG1ha2VzIHRoZSBjdXJ2ZSBtb3JlIGZsYXQKICAgIC8vIExvd2VyIHZhbHVlIG1ha2VzIHRoZSBjdXJ2ZSBtb3JlIGxpa2UgY29uc3RhbnQgcHJvZHVjdCBBTU0KICAgIHVpbnQyNTYgcHJpdmF0ZSBjb25zdGFudCBBID0gMTAwMCAqIChOICoqIChOIC0gMSkpOwogICAgLy8gMC4wMyUKICAgIHVpbnQyNTYgcHJpdmF0ZSBjb25zdGFudCBTV0FQX0ZFRSA9IDMwMDsKICAgIC8vIExpcXVpZGl0eSBmZWUgaXMgZGVyaXZlZCBmcm9tIDIgY29uc3RyYWludHMKICAgIC8vIDEuIEZlZSBpcyAwIGZvciBhZGRpbmcgLyByZW1vdmluZyBsaXF1aWRpdHkgdGhhdCByZXN1bHRzIGluIGEgYmFsYW5jZWQgcG9vbAogICAgLy8gMi4gU3dhcHBpbmcgaW4gYSBiYWxhbmNlZCBwb29sIGlzIGxpa2UgYWRkaW5nIGFuZCB0aGVuIHJlbW92aW5nIGxpcXVpZGl0eQogICAgLy8gICAgZnJvbSBhIGJhbGFuY2VkIHBvb2wKICAgIC8vIHN3YXAgZmVlID0gYWRkIGxpcXVpZGl0eSBmZWUgKyByZW1vdmUgbGlxdWlkaXR5IGZlZQogICAgdWludDI1NiBwcml2YXRlIGNvbnN0YW50IExJUVVJRElUWV9GRUUgPSAoU1dBUF9GRUUgKiBOKSAvICg0ICogKE4gLSAxKSk7CiAgICB1aW50MjU2IHByaXZhdGUgY29uc3RhbnQgRkVFX0RFTk9NSU5BVE9SID0gMWU2OwoKICAgIGFkZHJlc3NbTl0gcHVibGljIHRva2VuczsKICAgIC8vIE5vcm1hbGl6ZSBlYWNoIHRva2VuIHRvIDE4IGRlY2ltYWxzCiAgICAvLyBFeGFtcGxlIC0gREFJICgxOCBkZWNpbWFscyksIFVTREMgKDYgZGVjaW1hbHMpLCBVU0RUICg2IGRlY2ltYWxzKQogICAgdWludDI1NltOXSBwcml2YXRlIG11bHRpcGxpZXJzID0gWzEsIDFlMTIsIDFlMTJdOwogICAgdWludDI1NltOXSBwdWJsaWMgYmFsYW5jZXM7CgogICAgLy8gMSBzaGFyZSA9IDFlMTgsIDE4IGRlY2ltYWxzCiAgICB1aW50MjU2IHByaXZhdGUgY29uc3RhbnQgREVDSU1BTFMgPSAxODsKICAgIHVpbnQyNTYgcHVibGljIHRvdGFsU3VwcGx5OwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyBiYWxhbmNlT2Y7CgogICAgY29uc3RydWN0b3IoYWRkcmVzc1tOXSBtZW1vcnkgX3Rva2VucykgewogICAgICAgIHRva2VucyA9IF90b2tlbnM7CiAgICB9CgogICAgZnVuY3Rpb24gX21pbnQoYWRkcmVzcyBfdG8sIHVpbnQyNTYgX2Ftb3VudCkgcHJpdmF0ZSB7CiAgICAgICAgYmFsYW5jZU9mW190b10gKz0gX2Ftb3VudDsKICAgICAgICB0b3RhbFN1cHBseSArPSBfYW1vdW50OwogICAgfQoKICAgIGZ1bmN0aW9uIF9idXJuKGFkZHJlc3MgX2Zyb20sIHVpbnQyNTYgX2Ftb3VudCkgcHJpdmF0ZSB7CiAgICAgICAgYmFsYW5jZU9mW19mcm9tXSAtPSBfYW1vdW50OwogICAgICAgIHRvdGFsU3VwcGx5IC09IF9hbW91bnQ7CiAgICB9CgogICAgLy8gUmV0dXJuIHByZWNpc2lvbi1hZGp1c3RlZCBiYWxhbmNlcywgYWRqdXN0ZWQgdG8gMTggZGVjaW1hbHMKICAgIGZ1bmN0aW9uIF94cCgpIHByaXZhdGUgdmlldyByZXR1cm5zICh1aW50MjU2W05dIG1lbW9yeSB4cCkgewogICAgICAgIGZvciAodWludDI1NiBpOyBpIDwgTjsgKytpKSB7CiAgICAgICAgICAgIHhwW2ldID0gYmFsYW5jZXNbaV0gKiBtdWx0aXBsaWVyc1tpXTsKICAgICAgICB9CiAgICB9CgogICAgLyoqCiAgICAgKiBAbm90aWNlIENhbGN1bGF0ZSBELCBzdW0gb2YgYmFsYW5jZXMgaW4gYSBwZXJmZWN0bHkgYmFsYW5jZWQgcG9vbAogICAgICogSWYgYmFsYW5jZXMgb2YgeF8wLCB4XzEsIC4uLiB4XyhuLTEpIHRoZW4gc3VtKHhfaSkgPSBECiAgICAgKiBAcGFyYW0geHAgUHJlY2lzaW9uLWFkanVzdGVkIGJhbGFuY2VzCiAgICAgKiBAcmV0dXJuIEQKICAgICAqLwogICAgZnVuY3Rpb24gX2dldEQodWludDI1NltOXSBtZW1vcnkgeHApIHByaXZhdGUgcHVyZSByZXR1cm5zICh1aW50MjU2KSB7CiAgICAgICAgLyoKICAgICAgICBOZXd0b24ncyBtZXRob2QgdG8gY29tcHV0ZSBECiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KICAgICAgICBmKEQpID0gQURuXm4gKyBEXihuICsgMSkgLyAobl5uIHByb2QoeF9pKSkgLSBBbl5uIHN1bSh4X2kpIC0gRCAKICAgICAgICBmJyhEKSA9IEFuXm4gKyAobiArIDEpIERebiAvIChuXm4gcHJvZCh4X2kpKSAtIDEKCiAgICAgICAgICAgICAgICAgICAgIChhcyArIG5wKURfbgogICAgICAgIERfKG4rMSkgPSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQogICAgICAgICAgICAgICAgICAoYSAtIDEpRF9uICsgKG4gKyAxKXAKCiAgICAgICAgYSA9IEFuXm4KICAgICAgICBzID0gc3VtKHhfaSkKICAgICAgICBwID0gKERfbileKG4gKyAxKSAvIChuXm4gcHJvZCh4X2kpKQogICAgICAgICovCiAgICAgICAgdWludDI1NiBhID0gQSAqIE47IC8vIEFuXm4KCiAgICAgICAgdWludDI1NiBzOyAvLyB4XzAgKyB4XzEgKyAuLi4gKyB4XyhuLTEpCiAgICAgICAgZm9yICh1aW50MjU2IGk7IGkgPCBOOyArK2kpIHsKICAgICAgICAgICAgcyArPSB4cFtpXTsKICAgICAgICB9CgogICAgICAgIC8vIE5ld3RvbidzIG1ldGhvZAogICAgICAgIC8vIEluaXRpYWwgZ3Vlc3MsIGQgPD0gcwogICAgICAgIHVpbnQyNTYgZCA9IHM7CiAgICAgICAgdWludDI1NiBkX3ByZXY7CiAgICAgICAgZm9yICh1aW50MjU2IGk7IGkgPCAyNTU7ICsraSkgewogICAgICAgICAgICAvLyBwID0gRF4obiArIDEpIC8gKG5ebiAqIHhfMCAqIC4uLiAqIHhfKG4tMSkpCiAgICAgICAgICAgIHVpbnQyNTYgcCA9IGQ7CiAgICAgICAgICAgIGZvciAodWludDI1NiBqOyBqIDwgTjsgKytqKSB7CiAgICAgICAgICAgICAgICBwID0gKHAgKiBkKSAvIChOICogeHBbal0pOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGRfcHJldiA9IGQ7CiAgICAgICAgICAgIGQgPSAoKGEgKiBzICsgTiAqIHApICogZCkgLyAoKGEgLSAxKSAqIGQgKyAoTiArIDEpICogcCk7CgogICAgICAgICAgICBpZiAoTWF0aC5hYnMoZCwgZF9wcmV2KSA8PSAxKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gZDsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICByZXZlcnQoIkQgZGlkbid0IGNvbnZlcmdlIik7CiAgICB9CgogICAgLyoqCiAgICAgKiBAbm90aWNlIENhbGN1bGF0ZSB0aGUgbmV3IGJhbGFuY2Ugb2YgdG9rZW4gaiBnaXZlbiB0aGUgbmV3IGJhbGFuY2Ugb2YgdG9rZW4gaQogICAgICogQHBhcmFtIGkgSW5kZXggb2YgdG9rZW4gaW4KICAgICAqIEBwYXJhbSBqIEluZGV4IG9mIHRva2VuIG91dAogICAgICogQHBhcmFtIHggTmV3IGJhbGFuY2Ugb2YgdG9rZW4gaQogICAgICogQHBhcmFtIHhwIEN1cnJlbnQgcHJlY2lzaW9uLWFkanVzdGVkIGJhbGFuY2VzCiAgICAgKi8KICAgIGZ1bmN0aW9uIF9nZXRZKHVpbnQyNTYgaSwgdWludDI1NiBqLCB1aW50MjU2IHgsIHVpbnQyNTZbTl0gbWVtb3J5IHhwKQogICAgICAgIHByaXZhdGUKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAodWludDI1NikKICAgIHsKICAgICAgICAvKgogICAgICAgIE5ld3RvbidzIG1ldGhvZCB0byBjb21wdXRlIHkKICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQogICAgICAgIHkgPSB4X2oKCiAgICAgICAgZih5KSA9IHleMiArIHkoYiAtIEQpIC0gYwoKICAgICAgICAgICAgICAgICAgICB5X25eMiArIGMKICAgICAgICB5XyhuKzEpID0gLS0tLS0tLS0tLS0tLS0KICAgICAgICAgICAgICAgICAgIDJ5X24gKyBiIC0gRAoKICAgICAgICB3aGVyZQogICAgICAgIHMgPSBzdW0oeF9rKSwgayAhPSBqCiAgICAgICAgcCA9IHByb2QoeF9rKSwgayAhPSBqCiAgICAgICAgYiA9IHMgKyBEIC8gKEFuXm4pCiAgICAgICAgYyA9IEReKG4gKyAxKSAvIChuXm4gKiBwICogQW5ebikKICAgICAgICAqLwogICAgICAgIHVpbnQyNTYgYSA9IEEgKiBOOwogICAgICAgIHVpbnQyNTYgZCA9IF9nZXREKHhwKTsKICAgICAgICB1aW50MjU2IHM7CiAgICAgICAgdWludDI1NiBjID0gZDsKCiAgICAgICAgdWludDI1NiBfeDsKICAgICAgICBmb3IgKHVpbnQyNTYgazsgayA8IE47ICsraykgewogICAgICAgICAgICBpZiAoayA9PSBpKSB7CiAgICAgICAgICAgICAgICBfeCA9IHg7CiAgICAgICAgICAgIH0gZWxzZSBpZiAoayA9PSBqKSB7CiAgICAgICAgICAgICAgICBjb250aW51ZTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIF94ID0geHBba107CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIHMgKz0gX3g7CiAgICAgICAgICAgIGMgPSAoYyAqIGQpIC8gKE4gKiBfeCk7CiAgICAgICAgfQogICAgICAgIGMgPSAoYyAqIGQpIC8gKE4gKiBhKTsKICAgICAgICB1aW50MjU2IGIgPSBzICsgZCAvIGE7CgogICAgICAgIC8vIE5ld3RvbidzIG1ldGhvZAogICAgICAgIHVpbnQyNTYgeV9wcmV2OwogICAgICAgIC8vIEluaXRpYWwgZ3Vlc3MsIHkgPD0gZAogICAgICAgIHVpbnQyNTYgeSA9IGQ7CiAgICAgICAgZm9yICh1aW50MjU2IF9pOyBfaSA8IDI1NTsgKytfaSkgewogICAgICAgICAgICB5X3ByZXYgPSB5OwogICAgICAgICAgICB5ID0gKHkgKiB5ICsgYykgLyAoMiAqIHkgKyBiIC0gZCk7CiAgICAgICAgICAgIGlmIChNYXRoLmFicyh5LCB5X3ByZXYpIDw9IDEpIHsKICAgICAgICAgICAgICAgIHJldHVybiB5OwogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIHJldmVydCgieSBkaWRuJ3QgY29udmVyZ2UiKTsKICAgIH0KCiAgICAvKioKICAgICAqIEBub3RpY2UgQ2FsY3VsYXRlIHRoZSBuZXcgYmFsYW5jZSBvZiB0b2tlbiBpIGdpdmVuIHByZWNpc2lvbi1hZGp1c3RlZAogICAgICogYmFsYW5jZXMgeHAgYW5kIGxpcXVpZGl0eSBkCiAgICAgKiBAZGV2IEVxdWF0aW9uIGlzIGNhbGN1bGF0ZSB5IGlzIHNhbWUgYXMgX2dldFkKICAgICAqIEBwYXJhbSBpIEluZGV4IG9mIHRva2VuIHRvIGNhbGN1bGF0ZSB0aGUgbmV3IGJhbGFuY2UKICAgICAqIEBwYXJhbSB4cCBQcmVjaXNpb24tYWRqdXN0ZWQgYmFsYW5jZXMKICAgICAqIEBwYXJhbSBkIExpcXVpZGl0eSBkCiAgICAgKiBAcmV0dXJuIE5ldyBiYWxhbmNlIG9mIHRva2VuIGkKICAgICAqLwogICAgZnVuY3Rpb24gX2dldFlEKHVpbnQyNTYgaSwgdWludDI1NltOXSBtZW1vcnkgeHAsIHVpbnQyNTYgZCkKICAgICAgICBwcml2YXRlCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQyNTYpCiAgICB7CiAgICAgICAgdWludDI1NiBhID0gQSAqIE47CiAgICAgICAgdWludDI1NiBzOwogICAgICAgIHVpbnQyNTYgYyA9IGQ7CgogICAgICAgIHVpbnQyNTYgX3g7CiAgICAgICAgZm9yICh1aW50MjU2IGs7IGsgPCBOOyArK2spIHsKICAgICAgICAgICAgaWYgKGsgIT0gaSkgewogICAgICAgICAgICAgICAgX3ggPSB4cFtrXTsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgICAgICB9CgogICAgICAgICAgICBzICs9IF94OwogICAgICAgICAgICBjID0gKGMgKiBkKSAvIChOICogX3gpOwogICAgICAgIH0KICAgICAgICBjID0gKGMgKiBkKSAvIChOICogYSk7CiAgICAgICAgdWludDI1NiBiID0gcyArIGQgLyBhOwoKICAgICAgICAvLyBOZXd0b24ncyBtZXRob2QKICAgICAgICB1aW50MjU2IHlfcHJldjsKICAgICAgICAvLyBJbml0aWFsIGd1ZXNzLCB5IDw9IGQKICAgICAgICB1aW50MjU2IHkgPSBkOwogICAgICAgIGZvciAodWludDI1NiBfaTsgX2kgPCAyNTU7ICsrX2kpIHsKICAgICAgICAgICAgeV9wcmV2ID0geTsKICAgICAgICAgICAgeSA9ICh5ICogeSArIGMpIC8gKDIgKiB5ICsgYiAtIGQpOwogICAgICAgICAgICBpZiAoTWF0aC5hYnMoeSwgeV9wcmV2KSA8PSAxKSB7CiAgICAgICAgICAgICAgICByZXR1cm4geTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICByZXZlcnQoInkgZGlkbid0IGNvbnZlcmdlIik7CiAgICB9CgogICAgLy8gRXN0aW1hdGUgdmFsdWUgb2YgMSBzaGFyZQogICAgLy8gSG93IG1hbnkgdG9rZW5zIGlzIG9uZSBzaGFyZSB3b3J0aD8KICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxQcmljZSgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHVpbnQyNTYgZCA9IF9nZXREKF94cCgpKTsKICAgICAgICB1aW50MjU2IF90b3RhbFN1cHBseSA9IHRvdGFsU3VwcGx5OwogICAgICAgIGlmIChfdG90YWxTdXBwbHkgPiAwKSB7CiAgICAgICAgICAgIHJldHVybiAoZCAqIDEwICoqIERFQ0lNQUxTKSAvIF90b3RhbFN1cHBseTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuIDA7CiAgICB9CgogICAgLyoqCiAgICAgKiBAbm90aWNlIFN3YXAgZHggYW1vdW50IG9mIHRva2VuIGkgZm9yIHRva2VuIGoKICAgICAqIEBwYXJhbSBpIEluZGV4IG9mIHRva2VuIGluCiAgICAgKiBAcGFyYW0gaiBJbmRleCBvZiB0b2tlbiBvdXQKICAgICAqIEBwYXJhbSBkeCBUb2tlbiBpbiBhbW91bnQKICAgICAqIEBwYXJhbSBtaW5EeSBNaW5pbXVtIHRva2VuIG91dAogICAgICovCiAgICBmdW5jdGlvbiBzd2FwKHVpbnQyNTYgaSwgdWludDI1NiBqLCB1aW50MjU2IGR4LCB1aW50MjU2IG1pbkR5KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAodWludDI1NiBkeSkKICAgIHsKICAgICAgICByZXF1aXJlKGkgIT0gaiwgImkgPSBqIik7CgogICAgICAgIElFUkMyMCh0b2tlbnNbaV0pLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBkeCk7CgogICAgICAgIC8vIENhbGN1bGF0ZSBkeQogICAgICAgIHVpbnQyNTZbTl0gbWVtb3J5IHhwID0gX3hwKCk7CiAgICAgICAgdWludDI1NiB4ID0geHBbaV0gKyBkeCAqIG11bHRpcGxpZXJzW2ldOwoKICAgICAgICB1aW50MjU2IHkwID0geHBbal07CiAgICAgICAgdWludDI1NiB5MSA9IF9nZXRZKGksIGosIHgsIHhwKTsKICAgICAgICAvLyB5MCBtdXN0IGJlID49IHkxLCBzaW5jZSB4IGhhcyBpbmNyZWFzZWQKICAgICAgICAvLyAtMSB0byByb3VuZCBkb3duCiAgICAgICAgZHkgPSAoeTAgLSB5MSAtIDEpIC8gbXVsdGlwbGllcnNbal07CgogICAgICAgIC8vIFN1YnRyYWN0IGZlZSBmcm9tIGR5CiAgICAgICAgdWludDI1NiBmZWUgPSAoZHkgKiBTV0FQX0ZFRSkgLyBGRUVfREVOT01JTkFUT1I7CiAgICAgICAgZHkgLT0gZmVlOwogICAgICAgIHJlcXVpcmUoZHkgPj0gbWluRHksICJkeSA8IG1pbiIpOwoKICAgICAgICBiYWxhbmNlc1tpXSArPSBkeDsKICAgICAgICBiYWxhbmNlc1tqXSAtPSBkeTsKCiAgICAgICAgSUVSQzIwKHRva2Vuc1tqXSkudHJhbnNmZXIobXNnLnNlbmRlciwgZHkpOwogICAgfQoKICAgIGZ1bmN0aW9uIGFkZExpcXVpZGl0eSh1aW50MjU2W05dIGNhbGxkYXRhIGFtb3VudHMsIHVpbnQyNTYgbWluU2hhcmVzKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAodWludDI1NiBzaGFyZXMpCiAgICB7CiAgICAgICAgLy8gY2FsY3VsYXRlIGN1cnJlbnQgbGlxdWlkaXR5IGQwCiAgICAgICAgdWludDI1NiBfdG90YWxTdXBwbHkgPSB0b3RhbFN1cHBseTsKICAgICAgICB1aW50MjU2IGQwOwogICAgICAgIHVpbnQyNTZbTl0gbWVtb3J5IG9sZF94cyA9IF94cCgpOwogICAgICAgIGlmIChfdG90YWxTdXBwbHkgPiAwKSB7CiAgICAgICAgICAgIGQwID0gX2dldEQob2xkX3hzKTsKICAgICAgICB9CgogICAgICAgIC8vIFRyYW5zZmVyIHRva2VucyBpbgogICAgICAgIHVpbnQyNTZbTl0gbWVtb3J5IG5ld194czsKICAgICAgICBmb3IgKHVpbnQyNTYgaTsgaSA8IE47ICsraSkgewogICAgICAgICAgICB1aW50MjU2IGFtb3VudCA9IGFtb3VudHNbaV07CiAgICAgICAgICAgIGlmIChhbW91bnQgPiAwKSB7CiAgICAgICAgICAgICAgICBJRVJDMjAodG9rZW5zW2ldKS50cmFuc2ZlckZyb20oCiAgICAgICAgICAgICAgICAgICAgbXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50CiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgbmV3X3hzW2ldID0gb2xkX3hzW2ldICsgYW1vdW50ICogbXVsdGlwbGllcnNbaV07CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBuZXdfeHNbaV0gPSBvbGRfeHNbaV07CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgbGlxdWlkaXR5IGQxCiAgICAgICAgdWludDI1NiBkMSA9IF9nZXREKG5ld194cyk7CiAgICAgICAgcmVxdWlyZShkMSA+IGQwLCAibGlxdWlkaXR5IGRpZG4ndCBpbmNyZWFzZSIpOwoKICAgICAgICAvLyBSZWNhbGN1bGF0ZSBEIGFjY291bnRpbmcgZm9yIGZlZSBvbiBpbWJhbGFuY2UKICAgICAgICB1aW50MjU2IGQyOwogICAgICAgIGlmIChfdG90YWxTdXBwbHkgPiAwKSB7CiAgICAgICAgICAgIGZvciAodWludDI1NiBpOyBpIDwgTjsgKytpKSB7CiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aHkgb2xkX3hzW2ldICogZDEgLyBkMD8gd2h5IG5vdCBkMSAvIE4/CiAgICAgICAgICAgICAgICB1aW50MjU2IGlkZWFsQmFsYW5jZSA9IChvbGRfeHNbaV0gKiBkMSkgLyBkMDsKICAgICAgICAgICAgICAgIHVpbnQyNTYgZGlmZiA9IE1hdGguYWJzKG5ld194c1tpXSwgaWRlYWxCYWxhbmNlKTsKICAgICAgICAgICAgICAgIG5ld194c1tpXSAtPSAoTElRVUlESVRZX0ZFRSAqIGRpZmYpIC8gRkVFX0RFTk9NSU5BVE9SOwogICAgICAgICAgICB9CgogICAgICAgICAgICBkMiA9IF9nZXREKG5ld194cyk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgZDIgPSBkMTsKICAgICAgICB9CgogICAgICAgIC8vIFVwZGF0ZSBiYWxhbmNlcwogICAgICAgIGZvciAodWludDI1NiBpOyBpIDwgTjsgKytpKSB7CiAgICAgICAgICAgIGJhbGFuY2VzW2ldICs9IGFtb3VudHNbaV07CiAgICAgICAgfQoKICAgICAgICAvLyBTaGFyZXMgdG8gbWludCA9IChkMiAtIGQwKSAvIGQwICogdG90YWwgc3VwcGx5CiAgICAgICAgLy8gZDEgPj0gZDIgPj0gZDAKICAgICAgICBpZiAoX3RvdGFsU3VwcGx5ID4gMCkgewogICAgICAgICAgICBzaGFyZXMgPSAoKGQyIC0gZDApICogX3RvdGFsU3VwcGx5KSAvIGQwOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHNoYXJlcyA9IGQyOwogICAgICAgIH0KICAgICAgICByZXF1aXJlKHNoYXJlcyA+PSBtaW5TaGFyZXMsICJzaGFyZXMgPCBtaW4iKTsKICAgICAgICBfbWludChtc2cuc2VuZGVyLCBzaGFyZXMpOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlbW92ZUxpcXVpZGl0eSh1aW50MjU2IHNoYXJlcywgdWludDI1NltOXSBjYWxsZGF0YSBtaW5BbW91bnRzT3V0KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAodWludDI1NltOXSBtZW1vcnkgYW1vdW50c091dCkKICAgIHsKICAgICAgICB1aW50MjU2IF90b3RhbFN1cHBseSA9IHRvdGFsU3VwcGx5OwoKICAgICAgICBmb3IgKHVpbnQyNTYgaTsgaSA8IE47ICsraSkgewogICAgICAgICAgICB1aW50MjU2IGFtb3VudE91dCA9IChiYWxhbmNlc1tpXSAqIHNoYXJlcykgLyBfdG90YWxTdXBwbHk7CiAgICAgICAgICAgIHJlcXVpcmUoYW1vdW50T3V0ID49IG1pbkFtb3VudHNPdXRbaV0sICJvdXQgPCBtaW4iKTsKCiAgICAgICAgICAgIGJhbGFuY2VzW2ldIC09IGFtb3VudE91dDsKICAgICAgICAgICAgYW1vdW50c091dFtpXSA9IGFtb3VudE91dDsKCiAgICAgICAgICAgIElFUkMyMCh0b2tlbnNbaV0pLnRyYW5zZmVyKG1zZy5zZW5kZXIsIGFtb3VudE91dCk7CiAgICAgICAgfQoKICAgICAgICBfYnVybihtc2cuc2VuZGVyLCBzaGFyZXMpOwogICAgfQoKICAgIC8qKgogICAgICogQG5vdGljZSBDYWxjdWxhdGUgYW1vdW50IG9mIHRva2VuIGkgdG8gcmVjZWl2ZSBmb3Igc2hhcmVzCiAgICAgKiBAcGFyYW0gc2hhcmVzIFNoYXJlcyB0byBidXJuCiAgICAgKiBAcGFyYW0gaSBJbmRleCBvZiB0b2tlbiB0byB3aXRoZHJhdwogICAgICogQHJldHVybiBkeSBBbW91bnQgb2YgdG9rZW4gaSB0byByZWNlaXZlCiAgICAgKiAgICAgICAgIGZlZSBGZWUgZm9yIHdpdGhkcmF3LiBGZWUgYWxyZWFkeSBpbmNsdWRlZCBpbiBkeQogICAgICovCiAgICBmdW5jdGlvbiBfY2FsY1dpdGhkcmF3T25lVG9rZW4odWludDI1NiBzaGFyZXMsIHVpbnQyNTYgaSkKICAgICAgICBwcml2YXRlCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTYgZHksIHVpbnQyNTYgZmVlKQogICAgewogICAgICAgIHVpbnQyNTYgX3RvdGFsU3VwcGx5ID0gdG90YWxTdXBwbHk7CiAgICAgICAgdWludDI1NltOXSBtZW1vcnkgeHAgPSBfeHAoKTsKCiAgICAgICAgLy8gQ2FsY3VsYXRlIGQwIGFuZCBkMQogICAgICAgIHVpbnQyNTYgZDAgPSBfZ2V0RCh4cCk7CiAgICAgICAgdWludDI1NiBkMSA9IGQwIC0gKGQwICogc2hhcmVzKSAvIF90b3RhbFN1cHBseTsKCiAgICAgICAgLy8gQ2FsY3VsYXRlIHJlZHVjdGlvbiBpbiB5IGlmIEQgPSBkMQogICAgICAgIHVpbnQyNTYgeTAgPSBfZ2V0WUQoaSwgeHAsIGQxKTsKICAgICAgICAvLyBkMSA8PSBkMCBzbyB5IG11c3QgYmUgPD0geHBbaV0KICAgICAgICB1aW50MjU2IGR5MCA9ICh4cFtpXSAtIHkwKSAvIG11bHRpcGxpZXJzW2ldOwoKICAgICAgICAvLyBDYWxjdWxhdGUgaW1iYWxhbmNlIGZlZSwgdXBkYXRlIHhwIHdpdGggZmVlcwogICAgICAgIHVpbnQyNTYgZHg7CiAgICAgICAgZm9yICh1aW50MjU2IGo7IGogPCBOOyArK2opIHsKICAgICAgICAgICAgaWYgKGogPT0gaSkgewogICAgICAgICAgICAgICAgZHggPSAoeHBbal0gKiBkMSkgLyBkMCAtIHkwOwogICAgICAgICAgICB9IGVsc2UgewogICAgICAgICAgICAgICAgLy8gZDEgLyBkMCA8PSAxCiAgICAgICAgICAgICAgICBkeCA9IHhwW2pdIC0gKHhwW2pdICogZDEpIC8gZDA7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgeHBbal0gLT0gKExJUVVJRElUWV9GRUUgKiBkeCkgLyBGRUVfREVOT01JTkFUT1I7CiAgICAgICAgfQoKICAgICAgICAvLyBSZWNhbGN1bGF0ZSB5IHdpdGggeHAgaW5jbHVkaW5nIGltYmFsYW5jZSBmZWVzCiAgICAgICAgdWludDI1NiB5MSA9IF9nZXRZRChpLCB4cCwgZDEpOwogICAgICAgIC8vIC0gMSB0byByb3VuZCBkb3duCiAgICAgICAgZHkgPSAoeHBbaV0gLSB5MSAtIDEpIC8gbXVsdGlwbGllcnNbaV07CiAgICAgICAgZmVlID0gZHkwIC0gZHk7CiAgICB9CgogICAgZnVuY3Rpb24gY2FsY1dpdGhkcmF3T25lVG9rZW4odWludDI1NiBzaGFyZXMsIHVpbnQyNTYgaSkKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2IGR5LCB1aW50MjU2IGZlZSkKICAgIHsKICAgICAgICByZXR1cm4gX2NhbGNXaXRoZHJhd09uZVRva2VuKHNoYXJlcywgaSk7CiAgICB9CgogICAgLyoqCiAgICAgKiBAbm90aWNlIFdpdGhkcmF3IGxpcXVpZGl0eSBpbiB0b2tlbiBpCiAgICAgKiBAcGFyYW0gc2hhcmVzIFNoYXJlcyB0byBidXJuCiAgICAgKiBAcGFyYW0gaSBUb2tlbiB0byB3aXRoZHJhdwogICAgICogQHBhcmFtIG1pbkFtb3VudE91dCBNaW5pbXVtIGFtb3VudCBvZiB0b2tlbiBpIHRoYXQgbXVzdCBiZSB3aXRoZHJhd24KICAgICAqLwogICAgZnVuY3Rpb24gcmVtb3ZlTGlxdWlkaXR5T25lVG9rZW4oCiAgICAgICAgdWludDI1NiBzaGFyZXMsCiAgICAgICAgdWludDI1NiBpLAogICAgICAgIHVpbnQyNTYgbWluQW1vdW50T3V0CiAgICApIGV4dGVybmFsIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KSB7CiAgICAgICAgKGFtb3VudE91dCwpID0gX2NhbGNXaXRoZHJhd09uZVRva2VuKHNoYXJlcywgaSk7CiAgICAgICAgcmVxdWlyZShhbW91bnRPdXQgPj0gbWluQW1vdW50T3V0LCAib3V0IDwgbWluIik7CgogICAgICAgIGJhbGFuY2VzW2ldIC09IGFtb3VudE91dDsKICAgICAgICBfYnVybihtc2cuc2VuZGVyLCBzaGFyZXMpOwoKICAgICAgICBJRVJDMjAodG9rZW5zW2ldKS50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnRPdXQpOwogICAgfQp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGJhbGFuY2VPZihhZGRyZXNzIGFjY291bnQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiB0cmFuc2ZlcihhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKICAgIGZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludDI1NiBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKGFkZHJlc3Mgc2VuZGVyLCBhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBhbW91bnQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICByZXR1cm5zIChib29sKTsKfQo=",
  },
]

const html = `<p>Simplified version of Curve&#39;s stable swap AMM</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">abs</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> y ? x <span class="hljs-operator">-</span> y : y <span class="hljs-operator">-</span> x;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">StableSwap</span> </span>{
    <span class="hljs-comment">// Number of tokens</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> N <span class="hljs-operator">=</span> <span class="hljs-number">3</span>;
    <span class="hljs-comment">// Amplification coefficient multiplied by N^(N - 1)</span>
    <span class="hljs-comment">// Higher value makes the curve more flat</span>
    <span class="hljs-comment">// Lower value makes the curve more like constant product AMM</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> A <span class="hljs-operator">=</span> <span class="hljs-number">1000</span> <span class="hljs-operator">*</span> (N <span class="hljs-operator">*</span><span class="hljs-operator">*</span> (N <span class="hljs-operator">-</span> <span class="hljs-number">1</span>));
    <span class="hljs-comment">// 0.03%</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> SWAP_FEE <span class="hljs-operator">=</span> <span class="hljs-number">300</span>;
    <span class="hljs-comment">// Liquidity fee is derived from 2 constraints</span>
    <span class="hljs-comment">// 1. Fee is 0 for adding / removing liquidity that results in a balanced pool</span>
    <span class="hljs-comment">// 2. Swapping in a balanced pool is like adding and then removing liquidity</span>
    <span class="hljs-comment">//    from a balanced pool</span>
    <span class="hljs-comment">// swap fee = add liquidity fee + remove liquidity fee</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> LIQUIDITY_FEE <span class="hljs-operator">=</span> (SWAP_FEE <span class="hljs-operator">*</span> N) <span class="hljs-operator">/</span> (<span class="hljs-number">4</span> <span class="hljs-operator">*</span> (N <span class="hljs-operator">-</span> <span class="hljs-number">1</span>));
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> FEE_DENOMINATOR <span class="hljs-operator">=</span> <span class="hljs-number">1e6</span>;

    <span class="hljs-keyword">address</span>[N] <span class="hljs-keyword">public</span> tokens;
    <span class="hljs-comment">// Normalize each token to 18 decimals</span>
    <span class="hljs-comment">// Example - DAI (18 decimals), USDC (6 decimals), USDT (6 decimals)</span>
    <span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">private</span> multipliers <span class="hljs-operator">=</span> [<span class="hljs-number">1</span>, <span class="hljs-number">1e12</span>, <span class="hljs-number">1e12</span>];
    <span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">public</span> balances;

    <span class="hljs-comment">// 1 share = 1e18, 18 decimals</span>
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> DECIMALS <span class="hljs-operator">=</span> <span class="hljs-number">18</span>;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[N] <span class="hljs-keyword">memory</span> _tokens</span>) </span>{
        tokens <span class="hljs-operator">=</span> _tokens;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _from, <span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_from] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-comment">// Return precision-adjusted balances, adjusted to 18 decimals</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_xp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">memory</span> xp</span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            xp[i] <span class="hljs-operator">=</span> balances[i] <span class="hljs-operator">*</span> multipliers[i];
        }
    }

    <span class="hljs-comment">/**
     * @notice Calculate D, sum of balances in a perfectly balanced pool
     * If balances of x_0, x_1, ... x_(n-1) then sum(x_i) = D
     * @param xp Precision-adjusted balances
     * @return D
     */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getD</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">memory</span> xp</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
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
        <span class="hljs-keyword">uint256</span> a <span class="hljs-operator">=</span> A <span class="hljs-operator">*</span> N; <span class="hljs-comment">// An^n</span>

        <span class="hljs-keyword">uint256</span> s; <span class="hljs-comment">// x_0 + x_1 + ... + x_(n-1)</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            s <span class="hljs-operator">+</span><span class="hljs-operator">=</span> xp[i];
        }

        <span class="hljs-comment">// Newton&#x27;s method</span>
        <span class="hljs-comment">// Initial guess, d &lt;= s</span>
        <span class="hljs-keyword">uint256</span> d <span class="hljs-operator">=</span> s;
        <span class="hljs-keyword">uint256</span> d_prev;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> <span class="hljs-number">255</span>; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            <span class="hljs-comment">// p = D^(n + 1) / (n^n * x_0 * ... * x_(n-1))</span>
            <span class="hljs-keyword">uint256</span> p <span class="hljs-operator">=</span> d;
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> j; j <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>j) {
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getY</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> i, <span class="hljs-keyword">uint256</span> j, <span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">memory</span> xp</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
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
        <span class="hljs-keyword">uint256</span> a <span class="hljs-operator">=</span> A <span class="hljs-operator">*</span> N;
        <span class="hljs-keyword">uint256</span> d <span class="hljs-operator">=</span> _getD(xp);
        <span class="hljs-keyword">uint256</span> s;
        <span class="hljs-keyword">uint256</span> c <span class="hljs-operator">=</span> d;

        <span class="hljs-keyword">uint256</span> _x;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> k; k <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>k) {
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
        <span class="hljs-keyword">uint256</span> b <span class="hljs-operator">=</span> s <span class="hljs-operator">+</span> d <span class="hljs-operator">/</span> a;

        <span class="hljs-comment">// Newton&#x27;s method</span>
        <span class="hljs-keyword">uint256</span> y_prev;
        <span class="hljs-comment">// Initial guess, y &lt;= d</span>
        <span class="hljs-keyword">uint256</span> y <span class="hljs-operator">=</span> d;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> _i; _i <span class="hljs-operator">&lt;</span> <span class="hljs-number">255</span>; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>_i) {
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getYD</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> i, <span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">memory</span> xp, <span class="hljs-keyword">uint256</span> d</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)
    </span>{
        <span class="hljs-keyword">uint256</span> a <span class="hljs-operator">=</span> A <span class="hljs-operator">*</span> N;
        <span class="hljs-keyword">uint256</span> s;
        <span class="hljs-keyword">uint256</span> c <span class="hljs-operator">=</span> d;

        <span class="hljs-keyword">uint256</span> _x;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> k; k <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>k) {
            <span class="hljs-keyword">if</span> (k <span class="hljs-operator">!</span><span class="hljs-operator">=</span> i) {
                _x <span class="hljs-operator">=</span> xp[k];
            } <span class="hljs-keyword">else</span> {
                <span class="hljs-keyword">continue</span>;
            }

            s <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _x;
            c <span class="hljs-operator">=</span> (c <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> _x);
        }
        c <span class="hljs-operator">=</span> (c <span class="hljs-operator">*</span> d) <span class="hljs-operator">/</span> (N <span class="hljs-operator">*</span> a);
        <span class="hljs-keyword">uint256</span> b <span class="hljs-operator">=</span> s <span class="hljs-operator">+</span> d <span class="hljs-operator">/</span> a;

        <span class="hljs-comment">// Newton&#x27;s method</span>
        <span class="hljs-keyword">uint256</span> y_prev;
        <span class="hljs-comment">// Initial guess, y &lt;= d</span>
        <span class="hljs-keyword">uint256</span> y <span class="hljs-operator">=</span> d;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> _i; _i <span class="hljs-operator">&lt;</span> <span class="hljs-number">255</span>; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>_i) {
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getVirtualPrice</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">uint256</span> d <span class="hljs-operator">=</span> _getD(_xp());
        <span class="hljs-keyword">uint256</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> i, <span class="hljs-keyword">uint256</span> j, <span class="hljs-keyword">uint256</span> dx, <span class="hljs-keyword">uint256</span> minDy</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> dy</span>)
    </span>{
        <span class="hljs-built_in">require</span>(i <span class="hljs-operator">!</span><span class="hljs-operator">=</span> j, <span class="hljs-string">"i = j"</span>);

        IERC20(tokens[i]).transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), dx);

        <span class="hljs-comment">// Calculate dy</span>
        <span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">memory</span> xp <span class="hljs-operator">=</span> _xp();
        <span class="hljs-keyword">uint256</span> x <span class="hljs-operator">=</span> xp[i] <span class="hljs-operator">+</span> dx <span class="hljs-operator">*</span> multipliers[i];

        <span class="hljs-keyword">uint256</span> y0 <span class="hljs-operator">=</span> xp[j];
        <span class="hljs-keyword">uint256</span> y1 <span class="hljs-operator">=</span> _getY(i, j, x, xp);
        <span class="hljs-comment">// y0 must be &gt;= y1, since x has increased</span>
        <span class="hljs-comment">// -1 to round down</span>
        dy <span class="hljs-operator">=</span> (y0 <span class="hljs-operator">-</span> y1 <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">/</span> multipliers[j];

        <span class="hljs-comment">// Subtract fee from dy</span>
        <span class="hljs-keyword">uint256</span> fee <span class="hljs-operator">=</span> (dy <span class="hljs-operator">*</span> SWAP_FEE) <span class="hljs-operator">/</span> FEE_DENOMINATOR;
        dy <span class="hljs-operator">-</span><span class="hljs-operator">=</span> fee;
        <span class="hljs-built_in">require</span>(dy <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> minDy, <span class="hljs-string">"dy &lt; min"</span>);

        balances[i] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> dx;
        balances[j] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> dy;

        IERC20(tokens[j]).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, dy);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">calldata</span> amounts, <span class="hljs-keyword">uint256</span> minShares</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> shares</span>)
    </span>{
        <span class="hljs-comment">// calculate current liquidity d0</span>
        <span class="hljs-keyword">uint256</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;
        <span class="hljs-keyword">uint256</span> d0;
        <span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">memory</span> old_xs <span class="hljs-operator">=</span> _xp();
        <span class="hljs-keyword">if</span> (_totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            d0 <span class="hljs-operator">=</span> _getD(old_xs);
        }

        <span class="hljs-comment">// Transfer tokens in</span>
        <span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">memory</span> new_xs;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            <span class="hljs-keyword">uint256</span> amount <span class="hljs-operator">=</span> amounts[i];
            <span class="hljs-keyword">if</span> (amount <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
                IERC20(tokens[i]).transferFrom(
                    <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount
                );
                new_xs[i] <span class="hljs-operator">=</span> old_xs[i] <span class="hljs-operator">+</span> amount <span class="hljs-operator">*</span> multipliers[i];
            } <span class="hljs-keyword">else</span> {
                new_xs[i] <span class="hljs-operator">=</span> old_xs[i];
            }
        }

        <span class="hljs-comment">// Calculate new liquidity d1</span>
        <span class="hljs-keyword">uint256</span> d1 <span class="hljs-operator">=</span> _getD(new_xs);
        <span class="hljs-built_in">require</span>(d1 <span class="hljs-operator">&gt;</span> d0, <span class="hljs-string">"liquidity didn&#x27;t increase"</span>);

        <span class="hljs-comment">// Recalculate D accounting for fee on imbalance</span>
        <span class="hljs-keyword">uint256</span> d2;
        <span class="hljs-keyword">if</span> (_totalSupply <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
                <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> why old_xs[i] * d1 / d0? why not d1 / N?</span>
                <span class="hljs-keyword">uint256</span> idealBalance <span class="hljs-operator">=</span> (old_xs[i] <span class="hljs-operator">*</span> d1) <span class="hljs-operator">/</span> d0;
                <span class="hljs-keyword">uint256</span> diff <span class="hljs-operator">=</span> Math.abs(new_xs[i], idealBalance);
                new_xs[i] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> (LIQUIDITY_FEE <span class="hljs-operator">*</span> diff) <span class="hljs-operator">/</span> FEE_DENOMINATOR;
            }

            d2 <span class="hljs-operator">=</span> _getD(new_xs);
        } <span class="hljs-keyword">else</span> {
            d2 <span class="hljs-operator">=</span> d1;
        }

        <span class="hljs-comment">// Update balances</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> shares, <span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">calldata</span> minAmountsOut</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">memory</span> amountsOut</span>)
    </span>{
        <span class="hljs-keyword">uint256</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i; i <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>i) {
            <span class="hljs-keyword">uint256</span> amountOut <span class="hljs-operator">=</span> (balances[i] <span class="hljs-operator">*</span> shares) <span class="hljs-operator">/</span> _totalSupply;
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
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_calcWithdrawOneToken</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> shares, <span class="hljs-keyword">uint256</span> i</span>)
        <span class="hljs-title"><span class="hljs-keyword">private</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> dy, <span class="hljs-keyword">uint256</span> fee</span>)
    </span>{
        <span class="hljs-keyword">uint256</span> _totalSupply <span class="hljs-operator">=</span> totalSupply;
        <span class="hljs-keyword">uint256</span>[N] <span class="hljs-keyword">memory</span> xp <span class="hljs-operator">=</span> _xp();

        <span class="hljs-comment">// Calculate d0 and d1</span>
        <span class="hljs-keyword">uint256</span> d0 <span class="hljs-operator">=</span> _getD(xp);
        <span class="hljs-keyword">uint256</span> d1 <span class="hljs-operator">=</span> d0 <span class="hljs-operator">-</span> (d0 <span class="hljs-operator">*</span> shares) <span class="hljs-operator">/</span> _totalSupply;

        <span class="hljs-comment">// Calculate reduction in y if D = d1</span>
        <span class="hljs-keyword">uint256</span> y0 <span class="hljs-operator">=</span> _getYD(i, xp, d1);
        <span class="hljs-comment">// d1 &lt;= d0 so y must be &lt;= xp[i]</span>
        <span class="hljs-keyword">uint256</span> dy0 <span class="hljs-operator">=</span> (xp[i] <span class="hljs-operator">-</span> y0) <span class="hljs-operator">/</span> multipliers[i];

        <span class="hljs-comment">// Calculate imbalance fee, update xp with fees</span>
        <span class="hljs-keyword">uint256</span> dx;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> j; j <span class="hljs-operator">&lt;</span> N; <span class="hljs-operator">+</span><span class="hljs-operator">+</span>j) {
            <span class="hljs-keyword">if</span> (j <span class="hljs-operator">=</span><span class="hljs-operator">=</span> i) {
                dx <span class="hljs-operator">=</span> (xp[j] <span class="hljs-operator">*</span> d1) <span class="hljs-operator">/</span> d0 <span class="hljs-operator">-</span> y0;
            } <span class="hljs-keyword">else</span> {
                <span class="hljs-comment">// d1 / d0 &lt;= 1</span>
                dx <span class="hljs-operator">=</span> xp[j] <span class="hljs-operator">-</span> (xp[j] <span class="hljs-operator">*</span> d1) <span class="hljs-operator">/</span> d0;
            }
            xp[j] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> (LIQUIDITY_FEE <span class="hljs-operator">*</span> dx) <span class="hljs-operator">/</span> FEE_DENOMINATOR;
        }

        <span class="hljs-comment">// Recalculate y with xp including imbalance fees</span>
        <span class="hljs-keyword">uint256</span> y1 <span class="hljs-operator">=</span> _getYD(i, xp, d1);
        <span class="hljs-comment">// - 1 to round down</span>
        dy <span class="hljs-operator">=</span> (xp[i] <span class="hljs-operator">-</span> y1 <span class="hljs-operator">-</span> <span class="hljs-number">1</span>) <span class="hljs-operator">/</span> multipliers[i];
        fee <span class="hljs-operator">=</span> dy0 <span class="hljs-operator">-</span> dy;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">calcWithdrawOneToken</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> shares, <span class="hljs-keyword">uint256</span> i</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> dy, <span class="hljs-keyword">uint256</span> fee</span>)
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
        <span class="hljs-keyword">uint256</span> shares,
        <span class="hljs-keyword">uint256</span> i,
        <span class="hljs-keyword">uint256</span> minAmountOut
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>) </span>{
        (amountOut,) <span class="hljs-operator">=</span> _calcWithdrawOneToken(shares, i);
        <span class="hljs-built_in">require</span>(amountOut <span class="hljs-operator">&gt;</span><span class="hljs-operator">=</span> minAmountOut, <span class="hljs-string">"out &lt; min"</span>);

        balances[i] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> amountOut;
        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);

        IERC20(tokens[i]).<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountOut);
    }
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
</code></pre>`

export default html
