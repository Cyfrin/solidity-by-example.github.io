// metadata
export const version = "0.8.26"
export const title = "ERC1155"
export const description = "Example of ERC1155 multi token in Solidity"
export const cyfrinLink = ""

export const keywords = ["app", "application", "erc1155", "nft", "ierc1155"]

export const codes = [
  {
    fileName: "ERC1155.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmludGVyZmFjZSBJRVJDMTE1NSB7CiAgICBmdW5jdGlvbiBzYWZlVHJhbnNmZXJGcm9tKAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQyNTYgaWQsCiAgICAgICAgdWludDI1NiB2YWx1ZSwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsOwogICAgZnVuY3Rpb24gc2FmZUJhdGNoVHJhbnNmZXJGcm9tKAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSBpZHMsCiAgICAgICAgdWludDI1NltdIGNhbGxkYXRhIHZhbHVlcywKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3Mgb3duZXIsIHVpbnQyNTYgaWQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAodWludDI1Nik7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2ZCYXRjaChhZGRyZXNzW10gY2FsbGRhdGEgb3duZXJzLCB1aW50MjU2W10gY2FsbGRhdGEgaWRzKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKHVpbnQyNTZbXSBtZW1vcnkpOwogICAgZnVuY3Rpb24gc2V0QXBwcm92YWxGb3JBbGwoYWRkcmVzcyBvcGVyYXRvciwgYm9vbCBhcHByb3ZlZCkgZXh0ZXJuYWw7CiAgICBmdW5jdGlvbiBpc0FwcHJvdmVkRm9yQWxsKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgb3BlcmF0b3IpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYm9vbCk7Cn0KCmludGVyZmFjZSBJRVJDMTE1NVRva2VuUmVjZWl2ZXIgewogICAgZnVuY3Rpb24gb25FUkMxMTU1UmVjZWl2ZWQoCiAgICAgICAgYWRkcmVzcyBvcGVyYXRvciwKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgdWludDI1NiBpZCwKICAgICAgICB1aW50MjU2IHZhbHVlLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXM0KTsKCiAgICBmdW5jdGlvbiBvbkVSQzExNTVCYXRjaFJlY2VpdmVkKAogICAgICAgIGFkZHJlc3Mgb3BlcmF0b3IsCiAgICAgICAgYWRkcmVzcyBmcm9tLAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSBpZHMsCiAgICAgICAgdWludDI1NltdIGNhbGxkYXRhIHZhbHVlcywKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsIHJldHVybnMgKGJ5dGVzNCk7Cn0KCmNvbnRyYWN0IEVSQzExNTUgaXMgSUVSQzExNTUgewogICAgZXZlbnQgVHJhbnNmZXJTaW5nbGUoCiAgICAgICAgYWRkcmVzcyBpbmRleGVkIG9wZXJhdG9yLAogICAgICAgIGFkZHJlc3MgaW5kZXhlZCBmcm9tLAogICAgICAgIGFkZHJlc3MgaW5kZXhlZCB0bywKICAgICAgICB1aW50MjU2IGlkLAogICAgICAgIHVpbnQyNTYgdmFsdWUKICAgICk7CiAgICBldmVudCBUcmFuc2ZlckJhdGNoKAogICAgICAgIGFkZHJlc3MgaW5kZXhlZCBvcGVyYXRvciwKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgZnJvbSwKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgdG8sCiAgICAgICAgdWludDI1NltdIGlkcywKICAgICAgICB1aW50MjU2W10gdmFsdWVzCiAgICApOwogICAgZXZlbnQgQXBwcm92YWxGb3JBbGwoCiAgICAgICAgYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgb3BlcmF0b3IsIGJvb2wgYXBwcm92ZWQKICAgICk7CiAgICBldmVudCBVUkkoc3RyaW5nIHZhbHVlLCB1aW50MjU2IGluZGV4ZWQgaWQpOwoKICAgIC8vIG93bmVyID0+IGlkID0+IGJhbGFuY2UKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBtYXBwaW5nKHVpbnQyNTYgPT4gdWludDI1NikpIHB1YmxpYyBiYWxhbmNlT2Y7CiAgICAvLyBvd25lciA9PiBvcGVyYXRvciA9PiBhcHByb3ZlZAogICAgbWFwcGluZyhhZGRyZXNzID0+IG1hcHBpbmcoYWRkcmVzcyA9PiBib29sKSkgcHVibGljIGlzQXBwcm92ZWRGb3JBbGw7CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mQmF0Y2goYWRkcmVzc1tdIGNhbGxkYXRhIG93bmVycywgdWludDI1NltdIGNhbGxkYXRhIGlkcykKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2W10gbWVtb3J5IGJhbGFuY2VzKQogICAgewogICAgICAgIHJlcXVpcmUob3duZXJzLmxlbmd0aCA9PSBpZHMubGVuZ3RoLCAib3duZXJzIGxlbmd0aCAhPSBpZHMgbGVuZ3RoIik7CgogICAgICAgIGJhbGFuY2VzID0gbmV3IHVpbnQyNTZbXShvd25lcnMubGVuZ3RoKTsKCiAgICAgICAgdW5jaGVja2VkIHsKICAgICAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgb3duZXJzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgICAgICBiYWxhbmNlc1tpXSA9IGJhbGFuY2VPZltvd25lcnNbaV1dW2lkc1tpXV07CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gc2V0QXBwcm92YWxGb3JBbGwoYWRkcmVzcyBvcGVyYXRvciwgYm9vbCBhcHByb3ZlZCkgZXh0ZXJuYWwgewogICAgICAgIGlzQXBwcm92ZWRGb3JBbGxbbXNnLnNlbmRlcl1bb3BlcmF0b3JdID0gYXBwcm92ZWQ7CiAgICAgICAgZW1pdCBBcHByb3ZhbEZvckFsbChtc2cuc2VuZGVyLCBvcGVyYXRvciwgYXBwcm92ZWQpOwogICAgfQoKICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBmcm9tLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludDI1NiBpZCwKICAgICAgICB1aW50MjU2IHZhbHVlLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgewogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIG1zZy5zZW5kZXIgPT0gZnJvbSB8fCBpc0FwcHJvdmVkRm9yQWxsW2Zyb21dW21zZy5zZW5kZXJdLAogICAgICAgICAgICAibm90IGFwcHJvdmVkIgogICAgICAgICk7CiAgICAgICAgcmVxdWlyZSh0byAhPSBhZGRyZXNzKDApLCAidG8gPSAwIGFkZHJlc3MiKTsKCiAgICAgICAgYmFsYW5jZU9mW2Zyb21dW2lkXSAtPSB2YWx1ZTsKICAgICAgICBiYWxhbmNlT2ZbdG9dW2lkXSArPSB2YWx1ZTsKCiAgICAgICAgZW1pdCBUcmFuc2ZlclNpbmdsZShtc2cuc2VuZGVyLCBmcm9tLCB0bywgaWQsIHZhbHVlKTsKCiAgICAgICAgaWYgKHRvLmNvZGUubGVuZ3RoID4gMCkgewogICAgICAgICAgICByZXF1aXJlKAogICAgICAgICAgICAgICAgSUVSQzExNTVUb2tlblJlY2VpdmVyKHRvKS5vbkVSQzExNTVSZWNlaXZlZCgKICAgICAgICAgICAgICAgICAgICBtc2cuc2VuZGVyLCBmcm9tLCBpZCwgdmFsdWUsIGRhdGEKICAgICAgICAgICAgICAgICkgPT0gSUVSQzExNTVUb2tlblJlY2VpdmVyLm9uRVJDMTE1NVJlY2VpdmVkLnNlbGVjdG9yLAogICAgICAgICAgICAgICAgInVuc2FmZSB0cmFuc2ZlciIKICAgICAgICAgICAgKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gc2FmZUJhdGNoVHJhbnNmZXJGcm9tKAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSBpZHMsCiAgICAgICAgdWludDI1NltdIGNhbGxkYXRhIHZhbHVlcywKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICBtc2cuc2VuZGVyID09IGZyb20gfHwgaXNBcHByb3ZlZEZvckFsbFtmcm9tXVttc2cuc2VuZGVyXSwKICAgICAgICAgICAgIm5vdCBhcHByb3ZlZCIKICAgICAgICApOwogICAgICAgIHJlcXVpcmUodG8gIT0gYWRkcmVzcygwKSwgInRvID0gMCBhZGRyZXNzIik7CiAgICAgICAgcmVxdWlyZShpZHMubGVuZ3RoID09IHZhbHVlcy5sZW5ndGgsICJpZHMgbGVuZ3RoICE9IHZhbHVlcyBsZW5ndGgiKTsKCiAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIGJhbGFuY2VPZltmcm9tXVtpZHNbaV1dIC09IHZhbHVlc1tpXTsKICAgICAgICAgICAgYmFsYW5jZU9mW3RvXVtpZHNbaV1dICs9IHZhbHVlc1tpXTsKICAgICAgICB9CgogICAgICAgIGVtaXQgVHJhbnNmZXJCYXRjaChtc2cuc2VuZGVyLCBmcm9tLCB0bywgaWRzLCB2YWx1ZXMpOwoKICAgICAgICBpZiAodG8uY29kZS5sZW5ndGggPiAwKSB7CiAgICAgICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgICAgICBJRVJDMTE1NVRva2VuUmVjZWl2ZXIodG8pLm9uRVJDMTE1NUJhdGNoUmVjZWl2ZWQoCiAgICAgICAgICAgICAgICAgICAgbXNnLnNlbmRlciwgZnJvbSwgaWRzLCB2YWx1ZXMsIGRhdGEKICAgICAgICAgICAgICAgICkgPT0gSUVSQzExNTVUb2tlblJlY2VpdmVyLm9uRVJDMTE1NUJhdGNoUmVjZWl2ZWQuc2VsZWN0b3IsCiAgICAgICAgICAgICAgICAidW5zYWZlIHRyYW5zZmVyIgogICAgICAgICAgICApOwogICAgICAgIH0KICAgIH0KCiAgICAvLyBFUkMxNjUKICAgIGZ1bmN0aW9uIHN1cHBvcnRzSW50ZXJmYWNlKGJ5dGVzNCBpbnRlcmZhY2VJZCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIHJldHVybiBpbnRlcmZhY2VJZCA9PSAweDAxZmZjOWE3IC8vIEVSQzE2NSBJbnRlcmZhY2UgSUQgZm9yIEVSQzE2NQogICAgICAgICAgICB8fCBpbnRlcmZhY2VJZCA9PSAweGQ5YjY3YTI2IC8vIEVSQzE2NSBJbnRlcmZhY2UgSUQgZm9yIEVSQzExNTUKICAgICAgICAgICAgfHwgaW50ZXJmYWNlSWQgPT0gMHgwZTg5MzQxYzsgLy8gRVJDMTY1IEludGVyZmFjZSBJRCBmb3IgRVJDMTE1NU1ldGFkYXRhVVJJCiAgICB9CgogICAgLy8gRVJDMTE1NSBNZXRhZGF0YSBVUkkKICAgIGZ1bmN0aW9uIHVyaSh1aW50MjU2IGlkKSBwdWJsaWMgdmlldyB2aXJ0dWFsIHJldHVybnMgKHN0cmluZyBtZW1vcnkpIHt9CgogICAgLy8gSW50ZXJuYWwgZnVuY3Rpb25zCiAgICBmdW5jdGlvbiBfbWludChhZGRyZXNzIHRvLCB1aW50MjU2IGlkLCB1aW50MjU2IHZhbHVlLCBieXRlcyBtZW1vcnkgZGF0YSkKICAgICAgICBpbnRlcm5hbAogICAgewogICAgICAgIHJlcXVpcmUodG8gIT0gYWRkcmVzcygwKSwgInRvID0gMCBhZGRyZXNzIik7CgogICAgICAgIGJhbGFuY2VPZlt0b11baWRdICs9IHZhbHVlOwoKICAgICAgICBlbWl0IFRyYW5zZmVyU2luZ2xlKG1zZy5zZW5kZXIsIGFkZHJlc3MoMCksIHRvLCBpZCwgdmFsdWUpOwoKICAgICAgICBpZiAodG8uY29kZS5sZW5ndGggPiAwKSB7CiAgICAgICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgICAgICBJRVJDMTE1NVRva2VuUmVjZWl2ZXIodG8pLm9uRVJDMTE1NVJlY2VpdmVkKAogICAgICAgICAgICAgICAgICAgIG1zZy5zZW5kZXIsIGFkZHJlc3MoMCksIGlkLCB2YWx1ZSwgZGF0YQogICAgICAgICAgICAgICAgKSA9PSBJRVJDMTE1NVRva2VuUmVjZWl2ZXIub25FUkMxMTU1UmVjZWl2ZWQuc2VsZWN0b3IsCiAgICAgICAgICAgICAgICAidW5zYWZlIHRyYW5zZmVyIgogICAgICAgICAgICApOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBfYmF0Y2hNaW50KAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludDI1NltdIGNhbGxkYXRhIGlkcywKICAgICAgICB1aW50MjU2W10gY2FsbGRhdGEgdmFsdWVzLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgaW50ZXJuYWwgewogICAgICAgIHJlcXVpcmUodG8gIT0gYWRkcmVzcygwKSwgInRvID0gMCBhZGRyZXNzIik7CiAgICAgICAgcmVxdWlyZShpZHMubGVuZ3RoID09IHZhbHVlcy5sZW5ndGgsICJpZHMgbGVuZ3RoICE9IHZhbHVlcyBsZW5ndGgiKTsKCiAgICAgICAgZm9yICh1aW50MjU2IGkgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIGJhbGFuY2VPZlt0b11baWRzW2ldXSArPSB2YWx1ZXNbaV07CiAgICAgICAgfQoKICAgICAgICBlbWl0IFRyYW5zZmVyQmF0Y2gobXNnLnNlbmRlciwgYWRkcmVzcygwKSwgdG8sIGlkcywgdmFsdWVzKTsKCiAgICAgICAgaWYgKHRvLmNvZGUubGVuZ3RoID4gMCkgewogICAgICAgICAgICByZXF1aXJlKAogICAgICAgICAgICAgICAgSUVSQzExNTVUb2tlblJlY2VpdmVyKHRvKS5vbkVSQzExNTVCYXRjaFJlY2VpdmVkKAogICAgICAgICAgICAgICAgICAgIG1zZy5zZW5kZXIsIGFkZHJlc3MoMCksIGlkcywgdmFsdWVzLCBkYXRhCiAgICAgICAgICAgICAgICApID09IElFUkMxMTU1VG9rZW5SZWNlaXZlci5vbkVSQzExNTVCYXRjaFJlY2VpdmVkLnNlbGVjdG9yLAogICAgICAgICAgICAgICAgInVuc2FmZSB0cmFuc2ZlciIKICAgICAgICAgICAgKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gX2J1cm4oYWRkcmVzcyBmcm9tLCB1aW50MjU2IGlkLCB1aW50MjU2IHZhbHVlKSBpbnRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShmcm9tICE9IGFkZHJlc3MoMCksICJmcm9tID0gMCBhZGRyZXNzIik7CiAgICAgICAgYmFsYW5jZU9mW2Zyb21dW2lkXSAtPSB2YWx1ZTsKICAgICAgICBlbWl0IFRyYW5zZmVyU2luZ2xlKG1zZy5zZW5kZXIsIGZyb20sIGFkZHJlc3MoMCksIGlkLCB2YWx1ZSk7CiAgICB9CgogICAgZnVuY3Rpb24gX2JhdGNoQnVybigKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgdWludDI1NltdIGNhbGxkYXRhIGlkcywKICAgICAgICB1aW50MjU2W10gY2FsbGRhdGEgdmFsdWVzCiAgICApIGludGVybmFsIHsKICAgICAgICByZXF1aXJlKGZyb20gIT0gYWRkcmVzcygwKSwgImZyb20gPSAwIGFkZHJlc3MiKTsKICAgICAgICByZXF1aXJlKGlkcy5sZW5ndGggPT0gdmFsdWVzLmxlbmd0aCwgImlkcyBsZW5ndGggIT0gdmFsdWVzIGxlbmd0aCIpOwoKICAgICAgICBmb3IgKHVpbnQyNTYgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgYmFsYW5jZU9mW2Zyb21dW2lkc1tpXV0gLT0gdmFsdWVzW2ldOwogICAgICAgIH0KCiAgICAgICAgZW1pdCBUcmFuc2ZlckJhdGNoKG1zZy5zZW5kZXIsIGZyb20sIGFkZHJlc3MoMCksIGlkcywgdmFsdWVzKTsKICAgIH0KfQoKY29udHJhY3QgTXlNdWx0aVRva2VuIGlzIEVSQzExNTUgewogICAgZnVuY3Rpb24gbWludCh1aW50MjU2IGlkLCB1aW50MjU2IHZhbHVlLCBieXRlcyBtZW1vcnkgZGF0YSkgZXh0ZXJuYWwgewogICAgICAgIF9taW50KG1zZy5zZW5kZXIsIGlkLCB2YWx1ZSwgZGF0YSk7CiAgICB9CgogICAgZnVuY3Rpb24gYmF0Y2hNaW50KAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSBpZHMsCiAgICAgICAgdWludDI1NltdIGNhbGxkYXRhIHZhbHVlcywKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsIHsKICAgICAgICBfYmF0Y2hNaW50KG1zZy5zZW5kZXIsIGlkcywgdmFsdWVzLCBkYXRhKTsKICAgIH0KCiAgICBmdW5jdGlvbiBidXJuKHVpbnQyNTYgaWQsIHVpbnQyNTYgdmFsdWUpIGV4dGVybmFsIHsKICAgICAgICBfYnVybihtc2cuc2VuZGVyLCBpZCwgdmFsdWUpOwogICAgfQoKICAgIGZ1bmN0aW9uIGJhdGNoQnVybih1aW50MjU2W10gY2FsbGRhdGEgaWRzLCB1aW50MjU2W10gY2FsbGRhdGEgdmFsdWVzKQogICAgICAgIGV4dGVybmFsCiAgICB7CiAgICAgICAgX2JhdGNoQnVybihtc2cuc2VuZGVyLCBpZHMsIHZhbHVlcyk7CiAgICB9Cn0K",
  },
]

const html = `<p>Example of ERC1155</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC1155</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> id,
        <span class="hljs-keyword">uint256</span> value,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeBatchTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> values,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">uint256</span> id</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOfBatch</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> owners, <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isApprovedForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> operator</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC1155TokenReceiver</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onERC1155Received</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint256</span> id,
        <span class="hljs-keyword">uint256</span> value,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onERC1155BatchReceived</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> values,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC1155</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC1155</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">TransferSingle</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to,
        <span class="hljs-keyword">uint256</span> id,
        <span class="hljs-keyword">uint256</span> value
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">TransferBatch</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to,
        <span class="hljs-keyword">uint256</span>[] ids,
        <span class="hljs-keyword">uint256</span>[] values
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ApprovalForAll</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> operator, <span class="hljs-keyword">bool</span> approved
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">URI</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> value, <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">indexed</span> id</span>)</span>;

    <span class="hljs-comment">// owner =&gt; id =&gt; balance</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint256</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>)) <span class="hljs-keyword">public</span> balanceOf;
    <span class="hljs-comment">// owner =&gt; operator =&gt; approved</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">public</span> isApprovedForAll;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOfBatch</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> owners, <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> balances</span>)
    </span>{
        <span class="hljs-built_in">require</span>(owners.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> ids.<span class="hljs-built_in">length</span>, <span class="hljs-string">"owners length != ids length"</span>);

        balances <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint256</span>[](owners.<span class="hljs-built_in">length</span>);

        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> owners.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
                balances[i] <span class="hljs-operator">=</span> balanceOf[owners[i]][ids[i]];
            }
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        isApprovedForAll[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>][operator] <span class="hljs-operator">=</span> approved;
        <span class="hljs-keyword">emit</span> ApprovalForAll(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, operator, approved);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> id,
        <span class="hljs-keyword">uint256</span> value,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">from</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span> isApprovedForAll[<span class="hljs-keyword">from</span>][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>],
            <span class="hljs-string">"not approved"</span>
        );
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"to = 0 address"</span>);

        balanceOf[<span class="hljs-keyword">from</span>][id] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> value;
        balanceOf[to][id] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> value;

        <span class="hljs-keyword">emit</span> TransferSingle(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, to, id, value);

        <span class="hljs-keyword">if</span> (to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-built_in">require</span>(
                IERC1155TokenReceiver(to).onERC1155Received(
                    <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, id, value, data
                ) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> IERC1155TokenReceiver.onERC1155Received.<span class="hljs-built_in">selector</span>,
                <span class="hljs-string">"unsafe transfer"</span>
            );
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeBatchTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> values,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">from</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span> isApprovedForAll[<span class="hljs-keyword">from</span>][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>],
            <span class="hljs-string">"not approved"</span>
        );
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"to = 0 address"</span>);
        <span class="hljs-built_in">require</span>(ids.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> values.<span class="hljs-built_in">length</span>, <span class="hljs-string">"ids length != values length"</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> ids.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            balanceOf[<span class="hljs-keyword">from</span>][ids[i]] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> values[i];
            balanceOf[to][ids[i]] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> values[i];
        }

        <span class="hljs-keyword">emit</span> TransferBatch(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, to, ids, values);

        <span class="hljs-keyword">if</span> (to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-built_in">require</span>(
                IERC1155TokenReceiver(to).onERC1155BatchReceived(
                    <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, ids, values, data
                ) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> IERC1155TokenReceiver.onERC1155BatchReceived.<span class="hljs-built_in">selector</span>,
                <span class="hljs-string">"unsafe transfer"</span>
            );
        }
    }

    <span class="hljs-comment">// ERC165</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0x01ffc9a7</span> <span class="hljs-comment">// ERC165 Interface ID for ERC165</span>
            <span class="hljs-operator">|</span><span class="hljs-operator">|</span> interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0xd9b67a26</span> <span class="hljs-comment">// ERC165 Interface ID for ERC1155</span>
            <span class="hljs-operator">|</span><span class="hljs-operator">|</span> interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0x0e89341c</span>; <span class="hljs-comment">// ERC165 Interface ID for ERC1155MetadataURI</span>
    }

    <span class="hljs-comment">// ERC1155 Metadata URI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uri</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{}

    <span class="hljs-comment">// Internal functions</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> id, <span class="hljs-keyword">uint256</span> value, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
    </span>{
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"to = 0 address"</span>);

        balanceOf[to][id] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> value;

        <span class="hljs-keyword">emit</span> TransferSingle(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, id, value);

        <span class="hljs-keyword">if</span> (to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-built_in">require</span>(
                IERC1155TokenReceiver(to).onERC1155Received(
                    <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), id, value, data
                ) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> IERC1155TokenReceiver.onERC1155Received.<span class="hljs-built_in">selector</span>,
                <span class="hljs-string">"unsafe transfer"</span>
            );
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_batchMint</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> values,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"to = 0 address"</span>);
        <span class="hljs-built_in">require</span>(ids.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> values.<span class="hljs-built_in">length</span>, <span class="hljs-string">"ids length != values length"</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> ids.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            balanceOf[to][ids[i]] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> values[i];
        }

        <span class="hljs-keyword">emit</span> TransferBatch(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, ids, values);

        <span class="hljs-keyword">if</span> (to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-built_in">require</span>(
                IERC1155TokenReceiver(to).onERC1155BatchReceived(
                    <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), ids, values, data
                ) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> IERC1155TokenReceiver.onERC1155BatchReceived.<span class="hljs-built_in">selector</span>,
                <span class="hljs-string">"unsafe transfer"</span>
            );
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">uint256</span> id, <span class="hljs-keyword">uint256</span> value</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-keyword">from</span> <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"from = 0 address"</span>);
        balanceOf[<span class="hljs-keyword">from</span>][id] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> value;
        <span class="hljs-keyword">emit</span> TransferSingle(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), id, value);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_batchBurn</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> values
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-keyword">from</span> <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"from = 0 address"</span>);
        <span class="hljs-built_in">require</span>(ids.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> values.<span class="hljs-built_in">length</span>, <span class="hljs-string">"ids length != values length"</span>);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint256</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> ids.<span class="hljs-built_in">length</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            balanceOf[<span class="hljs-keyword">from</span>][ids[i]] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> values[i];
        }

        <span class="hljs-keyword">emit</span> TransferBatch(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), ids, values);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MyMultiToken</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ERC1155</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> id, <span class="hljs-keyword">uint256</span> value, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, id, value, data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">batchMint</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> values,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _batchMint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, ids, values, data);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">burn</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> id, <span class="hljs-keyword">uint256</span> value</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, id, value);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">batchBurn</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids, <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> values</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
    </span>{
        _batchBurn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, ids, values);
    }
}
</code></pre>`

export default html
