// metadata
export const version = "0.8.20"
export const title = "ERC1155"
export const description = "Example of ERC1155 multi token in Solidity"

export const keywords = ["app", "application", "erc1155", "nft", "ierc1155"]

export const codes = [
  {
    fileName: "ERC1155.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmludGVyZmFjZSBJRVJDMTE1NSB7CiAgICBmdW5jdGlvbiBzYWZlVHJhbnNmZXJGcm9tKAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQyNTYgaWQsCiAgICAgICAgdWludDI1NiB2YWx1ZSwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsOwoKICAgIGZ1bmN0aW9uIHNhZmVCYXRjaFRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgYWRkcmVzcyB0bywKICAgICAgICB1aW50MjU2W10gY2FsbGRhdGEgaWRzLAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSB2YWx1ZXMsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbDsKCiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBvd25lciwgdWludDI1NiBpZCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKCiAgICBmdW5jdGlvbiBiYWxhbmNlT2ZCYXRjaCgKICAgICAgICBhZGRyZXNzW10gY2FsbGRhdGEgb3duZXJzLAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSBpZHMKICAgICkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2W10gbWVtb3J5KTsKCiAgICBmdW5jdGlvbiBzZXRBcHByb3ZhbEZvckFsbChhZGRyZXNzIG9wZXJhdG9yLCBib29sIGFwcHJvdmVkKSBleHRlcm5hbDsKCiAgICBmdW5jdGlvbiBpc0FwcHJvdmVkRm9yQWxsKAogICAgICAgIGFkZHJlc3Mgb3duZXIsCiAgICAgICAgYWRkcmVzcyBvcGVyYXRvcgogICAgKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGJvb2wpOwp9CgppbnRlcmZhY2UgSUVSQzExNTVUb2tlblJlY2VpdmVyIHsKICAgIGZ1bmN0aW9uIG9uRVJDMTE1NVJlY2VpdmVkKAogICAgICAgIGFkZHJlc3Mgb3BlcmF0b3IsCiAgICAgICAgYWRkcmVzcyBmcm9tLAogICAgICAgIHVpbnQyNTYgaWQsCiAgICAgICAgdWludDI1NiB2YWx1ZSwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsIHJldHVybnMgKGJ5dGVzNCk7CgogICAgZnVuY3Rpb24gb25FUkMxMTU1QmF0Y2hSZWNlaXZlZCgKICAgICAgICBhZGRyZXNzIG9wZXJhdG9yLAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICB1aW50MjU2W10gY2FsbGRhdGEgaWRzLAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSB2YWx1ZXMsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbCByZXR1cm5zIChieXRlczQpOwp9Cgpjb250cmFjdCBFUkMxMTU1IGlzIElFUkMxMTU1IHsKICAgIGV2ZW50IFRyYW5zZmVyU2luZ2xlKAogICAgICAgIGFkZHJlc3MgaW5kZXhlZCBvcGVyYXRvciwKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgZnJvbSwKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgdG8sCiAgICAgICAgdWludDI1NiBpZCwKICAgICAgICB1aW50MjU2IHZhbHVlCiAgICApOwogICAgZXZlbnQgVHJhbnNmZXJCYXRjaCgKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgb3BlcmF0b3IsCiAgICAgICAgYWRkcmVzcyBpbmRleGVkIGZyb20sCiAgICAgICAgYWRkcmVzcyBpbmRleGVkIHRvLAogICAgICAgIHVpbnQyNTZbXSBpZHMsCiAgICAgICAgdWludDI1NltdIHZhbHVlcwogICAgKTsKICAgIGV2ZW50IEFwcHJvdmFsRm9yQWxsKAogICAgICAgIGFkZHJlc3MgaW5kZXhlZCBvd25lciwKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgb3BlcmF0b3IsCiAgICAgICAgYm9vbCBhcHByb3ZlZAogICAgKTsKICAgIGV2ZW50IFVSSShzdHJpbmcgdmFsdWUsIHVpbnQyNTYgaW5kZXhlZCBpZCk7CgogICAgLy8gb3duZXIgPT4gaWQgPT4gYmFsYW5jZQogICAgbWFwcGluZyhhZGRyZXNzID0+IG1hcHBpbmcodWludDI1NiA9PiB1aW50MjU2KSkgcHVibGljIGJhbGFuY2VPZjsKICAgIC8vIG93bmVyID0+IG9wZXJhdG9yID0+IGFwcHJvdmVkCiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gbWFwcGluZyhhZGRyZXNzID0+IGJvb2wpKSBwdWJsaWMgaXNBcHByb3ZlZEZvckFsbDsKCiAgICBmdW5jdGlvbiBiYWxhbmNlT2ZCYXRjaCgKICAgICAgICBhZGRyZXNzW10gY2FsbGRhdGEgb3duZXJzLAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSBpZHMKICAgICkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2W10gbWVtb3J5IGJhbGFuY2VzKSB7CiAgICAgICAgcmVxdWlyZShvd25lcnMubGVuZ3RoID09IGlkcy5sZW5ndGgsICJvd25lcnMgbGVuZ3RoICE9IGlkcyBsZW5ndGgiKTsKCiAgICAgICAgYmFsYW5jZXMgPSBuZXcgdWludFtdKG93bmVycy5sZW5ndGgpOwoKICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICBmb3IgKHVpbnQyNTYgaSA9IDA7IGkgPCBvd25lcnMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgICAgIGJhbGFuY2VzW2ldID0gYmFsYW5jZU9mW293bmVyc1tpXV1baWRzW2ldXTsKICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBzZXRBcHByb3ZhbEZvckFsbChhZGRyZXNzIG9wZXJhdG9yLCBib29sIGFwcHJvdmVkKSBleHRlcm5hbCB7CiAgICAgICAgaXNBcHByb3ZlZEZvckFsbFttc2cuc2VuZGVyXVtvcGVyYXRvcl0gPSBhcHByb3ZlZDsKICAgICAgICBlbWl0IEFwcHJvdmFsRm9yQWxsKG1zZy5zZW5kZXIsIG9wZXJhdG9yLCBhcHByb3ZlZCk7CiAgICB9CgogICAgZnVuY3Rpb24gc2FmZVRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgYWRkcmVzcyB0bywKICAgICAgICB1aW50MjU2IGlkLAogICAgICAgIHVpbnQyNTYgdmFsdWUsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgbXNnLnNlbmRlciA9PSBmcm9tIHx8IGlzQXBwcm92ZWRGb3JBbGxbZnJvbV1bbXNnLnNlbmRlcl0sCiAgICAgICAgICAgICJub3QgYXBwcm92ZWQiCiAgICAgICAgKTsKICAgICAgICByZXF1aXJlKHRvICE9IGFkZHJlc3MoMCksICJ0byA9IDAgYWRkcmVzcyIpOwoKICAgICAgICBiYWxhbmNlT2ZbZnJvbV1baWRdIC09IHZhbHVlOwogICAgICAgIGJhbGFuY2VPZlt0b11baWRdICs9IHZhbHVlOwoKICAgICAgICBlbWl0IFRyYW5zZmVyU2luZ2xlKG1zZy5zZW5kZXIsIGZyb20sIHRvLCBpZCwgdmFsdWUpOwoKICAgICAgICBpZiAodG8uY29kZS5sZW5ndGggPiAwKSB7CiAgICAgICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgICAgICBJRVJDMTE1NVRva2VuUmVjZWl2ZXIodG8pLm9uRVJDMTE1NVJlY2VpdmVkKAogICAgICAgICAgICAgICAgICAgIG1zZy5zZW5kZXIsCiAgICAgICAgICAgICAgICAgICAgZnJvbSwKICAgICAgICAgICAgICAgICAgICBpZCwKICAgICAgICAgICAgICAgICAgICB2YWx1ZSwKICAgICAgICAgICAgICAgICAgICBkYXRhCiAgICAgICAgICAgICAgICApID09IElFUkMxMTU1VG9rZW5SZWNlaXZlci5vbkVSQzExNTVSZWNlaXZlZC5zZWxlY3RvciwKICAgICAgICAgICAgICAgICJ1bnNhZmUgdHJhbnNmZXIiCiAgICAgICAgICAgICk7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIHNhZmVCYXRjaFRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgYWRkcmVzcyB0bywKICAgICAgICB1aW50MjU2W10gY2FsbGRhdGEgaWRzLAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSB2YWx1ZXMsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgbXNnLnNlbmRlciA9PSBmcm9tIHx8IGlzQXBwcm92ZWRGb3JBbGxbZnJvbV1bbXNnLnNlbmRlcl0sCiAgICAgICAgICAgICJub3QgYXBwcm92ZWQiCiAgICAgICAgKTsKICAgICAgICByZXF1aXJlKHRvICE9IGFkZHJlc3MoMCksICJ0byA9IDAgYWRkcmVzcyIpOwogICAgICAgIHJlcXVpcmUoaWRzLmxlbmd0aCA9PSB2YWx1ZXMubGVuZ3RoLCAiaWRzIGxlbmd0aCAhPSB2YWx1ZXMgbGVuZ3RoIik7CgogICAgICAgIGZvciAodWludDI1NiBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBiYWxhbmNlT2ZbZnJvbV1baWRzW2ldXSAtPSB2YWx1ZXNbaV07CiAgICAgICAgICAgIGJhbGFuY2VPZlt0b11baWRzW2ldXSArPSB2YWx1ZXNbaV07CiAgICAgICAgfQoKICAgICAgICBlbWl0IFRyYW5zZmVyQmF0Y2gobXNnLnNlbmRlciwgZnJvbSwgdG8sIGlkcywgdmFsdWVzKTsKCiAgICAgICAgaWYgKHRvLmNvZGUubGVuZ3RoID4gMCkgewogICAgICAgICAgICByZXF1aXJlKAogICAgICAgICAgICAgICAgSUVSQzExNTVUb2tlblJlY2VpdmVyKHRvKS5vbkVSQzExNTVCYXRjaFJlY2VpdmVkKAogICAgICAgICAgICAgICAgICAgIG1zZy5zZW5kZXIsCiAgICAgICAgICAgICAgICAgICAgZnJvbSwKICAgICAgICAgICAgICAgICAgICBpZHMsCiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLAogICAgICAgICAgICAgICAgICAgIGRhdGEKICAgICAgICAgICAgICAgICkgPT0gSUVSQzExNTVUb2tlblJlY2VpdmVyLm9uRVJDMTE1NUJhdGNoUmVjZWl2ZWQuc2VsZWN0b3IsCiAgICAgICAgICAgICAgICAidW5zYWZlIHRyYW5zZmVyIgogICAgICAgICAgICApOwogICAgICAgIH0KICAgIH0KCiAgICAvLyBFUkMxNjUKICAgIGZ1bmN0aW9uIHN1cHBvcnRzSW50ZXJmYWNlKGJ5dGVzNCBpbnRlcmZhY2VJZCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChib29sKSB7CiAgICAgICAgcmV0dXJuCiAgICAgICAgICAgIGludGVyZmFjZUlkID09IDB4MDFmZmM5YTcgfHwgLy8gRVJDMTY1IEludGVyZmFjZSBJRCBmb3IgRVJDMTY1CiAgICAgICAgICAgIGludGVyZmFjZUlkID09IDB4ZDliNjdhMjYgfHwgLy8gRVJDMTY1IEludGVyZmFjZSBJRCBmb3IgRVJDMTE1NQogICAgICAgICAgICBpbnRlcmZhY2VJZCA9PSAweDBlODkzNDFjOyAvLyBFUkMxNjUgSW50ZXJmYWNlIElEIGZvciBFUkMxMTU1TWV0YWRhdGFVUkkKICAgIH0KCiAgICAvLyBFUkMxMTU1IE1ldGFkYXRhIFVSSQogICAgZnVuY3Rpb24gdXJpKHVpbnQyNTYgaWQpIHB1YmxpYyB2aWV3IHZpcnR1YWwgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkge30KCiAgICAvLyBJbnRlcm5hbCBmdW5jdGlvbnMKICAgIGZ1bmN0aW9uIF9taW50KGFkZHJlc3MgdG8sIHVpbnQyNTYgaWQsIHVpbnQyNTYgdmFsdWUsIGJ5dGVzIG1lbW9yeSBkYXRhKSBpbnRlcm5hbCB7CiAgICAgICAgcmVxdWlyZSh0byAhPSBhZGRyZXNzKDApLCAidG8gPSAwIGFkZHJlc3MiKTsKCiAgICAgICAgYmFsYW5jZU9mW3RvXVtpZF0gKz0gdmFsdWU7CgogICAgICAgIGVtaXQgVHJhbnNmZXJTaW5nbGUobXNnLnNlbmRlciwgYWRkcmVzcygwKSwgdG8sIGlkLCB2YWx1ZSk7CgogICAgICAgIGlmICh0by5jb2RlLmxlbmd0aCA+IDApIHsKICAgICAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgICAgIElFUkMxMTU1VG9rZW5SZWNlaXZlcih0bykub25FUkMxMTU1UmVjZWl2ZWQoCiAgICAgICAgICAgICAgICAgICAgbXNnLnNlbmRlciwKICAgICAgICAgICAgICAgICAgICBhZGRyZXNzKDApLAogICAgICAgICAgICAgICAgICAgIGlkLAogICAgICAgICAgICAgICAgICAgIHZhbHVlLAogICAgICAgICAgICAgICAgICAgIGRhdGEKICAgICAgICAgICAgICAgICkgPT0gSUVSQzExNTVUb2tlblJlY2VpdmVyLm9uRVJDMTE1NVJlY2VpdmVkLnNlbGVjdG9yLAogICAgICAgICAgICAgICAgInVuc2FmZSB0cmFuc2ZlciIKICAgICAgICAgICAgKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gX2JhdGNoTWludCgKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSBpZHMsCiAgICAgICAgdWludDI1NltdIGNhbGxkYXRhIHZhbHVlcywKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGludGVybmFsIHsKICAgICAgICByZXF1aXJlKHRvICE9IGFkZHJlc3MoMCksICJ0byA9IDAgYWRkcmVzcyIpOwogICAgICAgIHJlcXVpcmUoaWRzLmxlbmd0aCA9PSB2YWx1ZXMubGVuZ3RoLCAiaWRzIGxlbmd0aCAhPSB2YWx1ZXMgbGVuZ3RoIik7CgogICAgICAgIGZvciAodWludDI1NiBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykgewogICAgICAgICAgICBiYWxhbmNlT2ZbdG9dW2lkc1tpXV0gKz0gdmFsdWVzW2ldOwogICAgICAgIH0KCiAgICAgICAgZW1pdCBUcmFuc2ZlckJhdGNoKG1zZy5zZW5kZXIsIGFkZHJlc3MoMCksIHRvLCBpZHMsIHZhbHVlcyk7CgogICAgICAgIGlmICh0by5jb2RlLmxlbmd0aCA+IDApIHsKICAgICAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgICAgIElFUkMxMTU1VG9rZW5SZWNlaXZlcih0bykub25FUkMxMTU1QmF0Y2hSZWNlaXZlZCgKICAgICAgICAgICAgICAgICAgICBtc2cuc2VuZGVyLAogICAgICAgICAgICAgICAgICAgIGFkZHJlc3MoMCksCiAgICAgICAgICAgICAgICAgICAgaWRzLAogICAgICAgICAgICAgICAgICAgIHZhbHVlcywKICAgICAgICAgICAgICAgICAgICBkYXRhCiAgICAgICAgICAgICAgICApID09IElFUkMxMTU1VG9rZW5SZWNlaXZlci5vbkVSQzExNTVCYXRjaFJlY2VpdmVkLnNlbGVjdG9yLAogICAgICAgICAgICAgICAgInVuc2FmZSB0cmFuc2ZlciIKICAgICAgICAgICAgKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gX2J1cm4oYWRkcmVzcyBmcm9tLCB1aW50MjU2IGlkLCB1aW50MjU2IHZhbHVlKSBpbnRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShmcm9tICE9IGFkZHJlc3MoMCksICJmcm9tID0gMCBhZGRyZXNzIik7CiAgICAgICAgYmFsYW5jZU9mW2Zyb21dW2lkXSAtPSB2YWx1ZTsKICAgICAgICBlbWl0IFRyYW5zZmVyU2luZ2xlKG1zZy5zZW5kZXIsIGZyb20sIGFkZHJlc3MoMCksIGlkLCB2YWx1ZSk7CiAgICB9CgogICAgZnVuY3Rpb24gX2JhdGNoQnVybigKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgdWludDI1NltdIGNhbGxkYXRhIGlkcywKICAgICAgICB1aW50MjU2W10gY2FsbGRhdGEgdmFsdWVzCiAgICApIGludGVybmFsIHsKICAgICAgICByZXF1aXJlKGZyb20gIT0gYWRkcmVzcygwKSwgImZyb20gPSAwIGFkZHJlc3MiKTsKICAgICAgICByZXF1aXJlKGlkcy5sZW5ndGggPT0gdmFsdWVzLmxlbmd0aCwgImlkcyBsZW5ndGggIT0gdmFsdWVzIGxlbmd0aCIpOwoKICAgICAgICBmb3IgKHVpbnQyNTYgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgYmFsYW5jZU9mW2Zyb21dW2lkc1tpXV0gLT0gdmFsdWVzW2ldOwogICAgICAgIH0KCiAgICAgICAgZW1pdCBUcmFuc2ZlckJhdGNoKG1zZy5zZW5kZXIsIGZyb20sIGFkZHJlc3MoMCksIGlkcywgdmFsdWVzKTsKICAgIH0KfQoKY29udHJhY3QgTXlNdWx0aVRva2VuIGlzIEVSQzExNTUgewogICAgZnVuY3Rpb24gbWludCh1aW50MjU2IGlkLCB1aW50MjU2IHZhbHVlLCBieXRlcyBtZW1vcnkgZGF0YSkgZXh0ZXJuYWwgewogICAgICAgIF9taW50KG1zZy5zZW5kZXIsIGlkLCB2YWx1ZSwgZGF0YSk7CiAgICB9CgogICAgZnVuY3Rpb24gYmF0Y2hNaW50KAogICAgICAgIHVpbnQyNTZbXSBjYWxsZGF0YSBpZHMsCiAgICAgICAgdWludDI1NltdIGNhbGxkYXRhIHZhbHVlcywKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsIHsKICAgICAgICBfYmF0Y2hNaW50KG1zZy5zZW5kZXIsIGlkcywgdmFsdWVzLCBkYXRhKTsKICAgIH0KCiAgICBmdW5jdGlvbiBidXJuKHVpbnQyNTYgaWQsIHVpbnQyNTYgdmFsdWUpIGV4dGVybmFsIHsKICAgICAgICBfYnVybihtc2cuc2VuZGVyLCBpZCwgdmFsdWUpOwogICAgfQoKICAgIGZ1bmN0aW9uIGJhdGNoQnVybih1aW50MjU2W10gY2FsbGRhdGEgaWRzLCB1aW50MjU2W10gY2FsbGRhdGEgdmFsdWVzKSBleHRlcm5hbCB7CiAgICAgICAgX2JhdGNoQnVybihtc2cuc2VuZGVyLCBpZHMsIHZhbHVlcyk7CiAgICB9Cn0K",
  },
]

const html = `<p>Example of ERC1155</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOfBatch</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> owners,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span></span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isApprovedForAll</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> operator
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
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
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> operator,
        <span class="hljs-keyword">bool</span> approved
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">URI</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> value, <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">indexed</span> id</span>)</span>;

    <span class="hljs-comment">// owner =&gt; id =&gt; balance</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint256</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>)) <span class="hljs-keyword">public</span> balanceOf;
    <span class="hljs-comment">// owner =&gt; operator =&gt; approved</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">public</span> isApprovedForAll;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOfBatch</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span>[] <span class="hljs-keyword">calldata</span> owners,
        <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">memory</span> balances</span>) </span>{
        <span class="hljs-built_in">require</span>(owners.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> ids.<span class="hljs-built_in">length</span>, <span class="hljs-string">"owners length != ids length"</span>);

        balances <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> <span class="hljs-keyword">uint</span>[](owners.<span class="hljs-built_in">length</span>);

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
                    <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
                    <span class="hljs-keyword">from</span>,
                    id,
                    value,
                    data
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
                    <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
                    <span class="hljs-keyword">from</span>,
                    ids,
                    values,
                    data
                ) <span class="hljs-operator">=</span><span class="hljs-operator">=</span> IERC1155TokenReceiver.onERC1155BatchReceived.<span class="hljs-built_in">selector</span>,
                <span class="hljs-string">"unsafe transfer"</span>
            );
        }
    }

    <span class="hljs-comment">// ERC165</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span>
            interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0x01ffc9a7</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span> <span class="hljs-comment">// ERC165 Interface ID for ERC165</span>
            interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0xd9b67a26</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span> <span class="hljs-comment">// ERC165 Interface ID for ERC1155</span>
            interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0x0e89341c</span>; <span class="hljs-comment">// ERC165 Interface ID for ERC1155MetadataURI</span>
    }

    <span class="hljs-comment">// ERC1155 Metadata URI</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uri</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{}

    <span class="hljs-comment">// Internal functions</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> id, <span class="hljs-keyword">uint256</span> value, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> data</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"to = 0 address"</span>);

        balanceOf[to][id] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> value;

        <span class="hljs-keyword">emit</span> TransferSingle(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, id, value);

        <span class="hljs-keyword">if</span> (to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-built_in">require</span>(
                IERC1155TokenReceiver(to).onERC1155Received(
                    <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
                    <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>),
                    id,
                    value,
                    data
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
                    <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>,
                    <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>),
                    ids,
                    values,
                    data
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">batchBurn</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> ids, <span class="hljs-keyword">uint256</span>[] <span class="hljs-keyword">calldata</span> values</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _batchBurn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, ids, values);
    }
}
</code></pre>`

export default html
