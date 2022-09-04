// metadata
export const version = "0.8.13"
export const title = "ERC721"
export const description = "Example of ERC721 non fungible token in Solidity"
export const codes = [
  {
    fileName: "ERC721.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmludGVyZmFjZSBJRVJDMTY1IHsKICAgIGZ1bmN0aW9uIHN1cHBvcnRzSW50ZXJmYWNlKGJ5dGVzNCBpbnRlcmZhY2VJRCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChib29sKTsKfQoKaW50ZXJmYWNlIElFUkM3MjEgaXMgSUVSQzE2NSB7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBvd25lcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50IGJhbGFuY2UpOwoKICAgIGZ1bmN0aW9uIG93bmVyT2YodWludCB0b2tlbklkKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3Mgb3duZXIpOwoKICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBmcm9tLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCB0b2tlbklkCiAgICApIGV4dGVybmFsOwoKICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBmcm9tLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCB0b2tlbklkLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWw7CgogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQgdG9rZW5JZAogICAgKSBleHRlcm5hbDsKCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3MgdG8sIHVpbnQgdG9rZW5JZCkgZXh0ZXJuYWw7CgogICAgZnVuY3Rpb24gZ2V0QXBwcm92ZWQodWludCB0b2tlbklkKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3Mgb3BlcmF0b3IpOwoKICAgIGZ1bmN0aW9uIHNldEFwcHJvdmFsRm9yQWxsKGFkZHJlc3Mgb3BlcmF0b3IsIGJvb2wgX2FwcHJvdmVkKSBleHRlcm5hbDsKCiAgICBmdW5jdGlvbiBpc0FwcHJvdmVkRm9yQWxsKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgb3BlcmF0b3IpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYm9vbCk7Cn0KCmludGVyZmFjZSBJRVJDNzIxUmVjZWl2ZXIgewogICAgZnVuY3Rpb24gb25FUkM3MjFSZWNlaXZlZCgKICAgICAgICBhZGRyZXNzIG9wZXJhdG9yLAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICB1aW50IHRva2VuSWQsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbCByZXR1cm5zIChieXRlczQpOwp9Cgpjb250cmFjdCBFUkM3MjEgaXMgSUVSQzcyMSB7CiAgICBldmVudCBUcmFuc2ZlcihhZGRyZXNzIGluZGV4ZWQgZnJvbSwgYWRkcmVzcyBpbmRleGVkIHRvLCB1aW50IGluZGV4ZWQgaWQpOwogICAgZXZlbnQgQXBwcm92YWwoYWRkcmVzcyBpbmRleGVkIG93bmVyLCBhZGRyZXNzIGluZGV4ZWQgc3BlbmRlciwgdWludCBpbmRleGVkIGlkKTsKICAgIGV2ZW50IEFwcHJvdmFsRm9yQWxsKAogICAgICAgIGFkZHJlc3MgaW5kZXhlZCBvd25lciwKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgb3BlcmF0b3IsCiAgICAgICAgYm9vbCBhcHByb3ZlZAogICAgKTsKCiAgICAvLyBNYXBwaW5nIGZyb20gdG9rZW4gSUQgdG8gb3duZXIgYWRkcmVzcwogICAgbWFwcGluZyh1aW50ID0+IGFkZHJlc3MpIGludGVybmFsIF9vd25lck9mOwoKICAgIC8vIE1hcHBpbmcgb3duZXIgYWRkcmVzcyB0byB0b2tlbiBjb3VudAogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIGludGVybmFsIF9iYWxhbmNlT2Y7CgogICAgLy8gTWFwcGluZyBmcm9tIHRva2VuIElEIHRvIGFwcHJvdmVkIGFkZHJlc3MKICAgIG1hcHBpbmcodWludCA9PiBhZGRyZXNzKSBpbnRlcm5hbCBfYXBwcm92YWxzOwoKICAgIC8vIE1hcHBpbmcgZnJvbSBvd25lciB0byBvcGVyYXRvciBhcHByb3ZhbHMKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBtYXBwaW5nKGFkZHJlc3MgPT4gYm9vbCkpIHB1YmxpYyBpc0FwcHJvdmVkRm9yQWxsOwoKICAgIGZ1bmN0aW9uIHN1cHBvcnRzSW50ZXJmYWNlKGJ5dGVzNCBpbnRlcmZhY2VJZCkgZXh0ZXJuYWwgcHVyZSByZXR1cm5zIChib29sKSB7CiAgICAgICAgcmV0dXJuCiAgICAgICAgICAgIGludGVyZmFjZUlkID09IHR5cGUoSUVSQzcyMSkuaW50ZXJmYWNlSWQgfHwKICAgICAgICAgICAgaW50ZXJmYWNlSWQgPT0gdHlwZShJRVJDMTY1KS5pbnRlcmZhY2VJZDsKICAgIH0KCiAgICBmdW5jdGlvbiBvd25lck9mKHVpbnQgaWQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcyBvd25lcikgewogICAgICAgIG93bmVyID0gX293bmVyT2ZbaWRdOwogICAgICAgIHJlcXVpcmUob3duZXIgIT0gYWRkcmVzcygwKSwgInRva2VuIGRvZXNuJ3QgZXhpc3QiKTsKICAgIH0KCiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBvd25lcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmVxdWlyZShvd25lciAhPSBhZGRyZXNzKDApLCAib3duZXIgPSB6ZXJvIGFkZHJlc3MiKTsKICAgICAgICByZXR1cm4gX2JhbGFuY2VPZltvd25lcl07CiAgICB9CgogICAgZnVuY3Rpb24gc2V0QXBwcm92YWxGb3JBbGwoYWRkcmVzcyBvcGVyYXRvciwgYm9vbCBhcHByb3ZlZCkgZXh0ZXJuYWwgewogICAgICAgIGlzQXBwcm92ZWRGb3JBbGxbbXNnLnNlbmRlcl1bb3BlcmF0b3JdID0gYXBwcm92ZWQ7CiAgICAgICAgZW1pdCBBcHByb3ZhbEZvckFsbChtc2cuc2VuZGVyLCBvcGVyYXRvciwgYXBwcm92ZWQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50IGlkKSBleHRlcm5hbCB7CiAgICAgICAgYWRkcmVzcyBvd25lciA9IF9vd25lck9mW2lkXTsKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICBtc2cuc2VuZGVyID09IG93bmVyIHx8IGlzQXBwcm92ZWRGb3JBbGxbb3duZXJdW21zZy5zZW5kZXJdLAogICAgICAgICAgICAibm90IGF1dGhvcml6ZWQiCiAgICAgICAgKTsKCiAgICAgICAgX2FwcHJvdmFsc1tpZF0gPSBzcGVuZGVyOwoKICAgICAgICBlbWl0IEFwcHJvdmFsKG93bmVyLCBzcGVuZGVyLCBpZCk7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0QXBwcm92ZWQodWludCBpZCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgcmVxdWlyZShfb3duZXJPZltpZF0gIT0gYWRkcmVzcygwKSwgInRva2VuIGRvZXNuJ3QgZXhpc3QiKTsKICAgICAgICByZXR1cm4gX2FwcHJvdmFsc1tpZF07CiAgICB9CgogICAgZnVuY3Rpb24gX2lzQXBwcm92ZWRPck93bmVyKAogICAgICAgIGFkZHJlc3Mgb3duZXIsCiAgICAgICAgYWRkcmVzcyBzcGVuZGVyLAogICAgICAgIHVpbnQgaWQKICAgICkgaW50ZXJuYWwgdmlldyByZXR1cm5zIChib29sKSB7CiAgICAgICAgcmV0dXJuIChzcGVuZGVyID09IG93bmVyIHx8CiAgICAgICAgICAgIGlzQXBwcm92ZWRGb3JBbGxbb3duZXJdW3NwZW5kZXJdIHx8CiAgICAgICAgICAgIHNwZW5kZXIgPT0gX2FwcHJvdmFsc1tpZF0pOwogICAgfQoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgYWRkcmVzcyB0bywKICAgICAgICB1aW50IGlkCiAgICApIHB1YmxpYyB7CiAgICAgICAgcmVxdWlyZShmcm9tID09IF9vd25lck9mW2lkXSwgImZyb20gIT0gb3duZXIiKTsKICAgICAgICByZXF1aXJlKHRvICE9IGFkZHJlc3MoMCksICJ0cmFuc2ZlciB0byB6ZXJvIGFkZHJlc3MiKTsKCiAgICAgICAgcmVxdWlyZShfaXNBcHByb3ZlZE9yT3duZXIoZnJvbSwgbXNnLnNlbmRlciwgaWQpLCAibm90IGF1dGhvcml6ZWQiKTsKCiAgICAgICAgX2JhbGFuY2VPZltmcm9tXS0tOwogICAgICAgIF9iYWxhbmNlT2ZbdG9dKys7CiAgICAgICAgX293bmVyT2ZbaWRdID0gdG87CgogICAgICAgIGRlbGV0ZSBfYXBwcm92YWxzW2lkXTsKCiAgICAgICAgZW1pdCBUcmFuc2Zlcihmcm9tLCB0bywgaWQpOwogICAgfQoKICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBmcm9tLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCBpZAogICAgKSBleHRlcm5hbCB7CiAgICAgICAgdHJhbnNmZXJGcm9tKGZyb20sIHRvLCBpZCk7CgogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIHRvLmNvZGUubGVuZ3RoID09IDAgfHwKICAgICAgICAgICAgICAgIElFUkM3MjFSZWNlaXZlcih0bykub25FUkM3MjFSZWNlaXZlZChtc2cuc2VuZGVyLCBmcm9tLCBpZCwgIiIpID09CiAgICAgICAgICAgICAgICBJRVJDNzIxUmVjZWl2ZXIub25FUkM3MjFSZWNlaXZlZC5zZWxlY3RvciwKICAgICAgICAgICAgInVuc2FmZSByZWNpcGllbnQiCiAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiBzYWZlVHJhbnNmZXJGcm9tKAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICBhZGRyZXNzIHRvLAogICAgICAgIHVpbnQgaWQsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbCB7CiAgICAgICAgdHJhbnNmZXJGcm9tKGZyb20sIHRvLCBpZCk7CgogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIHRvLmNvZGUubGVuZ3RoID09IDAgfHwKICAgICAgICAgICAgICAgIElFUkM3MjFSZWNlaXZlcih0bykub25FUkM3MjFSZWNlaXZlZChtc2cuc2VuZGVyLCBmcm9tLCBpZCwgZGF0YSkgPT0KICAgICAgICAgICAgICAgIElFUkM3MjFSZWNlaXZlci5vbkVSQzcyMVJlY2VpdmVkLnNlbGVjdG9yLAogICAgICAgICAgICAidW5zYWZlIHJlY2lwaWVudCIKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIF9taW50KGFkZHJlc3MgdG8sIHVpbnQgaWQpIGludGVybmFsIHsKICAgICAgICByZXF1aXJlKHRvICE9IGFkZHJlc3MoMCksICJtaW50IHRvIHplcm8gYWRkcmVzcyIpOwogICAgICAgIHJlcXVpcmUoX293bmVyT2ZbaWRdID09IGFkZHJlc3MoMCksICJhbHJlYWR5IG1pbnRlZCIpOwoKICAgICAgICBfYmFsYW5jZU9mW3RvXSsrOwogICAgICAgIF9vd25lck9mW2lkXSA9IHRvOwoKICAgICAgICBlbWl0IFRyYW5zZmVyKGFkZHJlc3MoMCksIHRvLCBpZCk7CiAgICB9CgogICAgZnVuY3Rpb24gX2J1cm4odWludCBpZCkgaW50ZXJuYWwgewogICAgICAgIGFkZHJlc3Mgb3duZXIgPSBfb3duZXJPZltpZF07CiAgICAgICAgcmVxdWlyZShvd25lciAhPSBhZGRyZXNzKDApLCAibm90IG1pbnRlZCIpOwoKICAgICAgICBfYmFsYW5jZU9mW293bmVyXSAtPSAxOwoKICAgICAgICBkZWxldGUgX293bmVyT2ZbaWRdOwogICAgICAgIGRlbGV0ZSBfYXBwcm92YWxzW2lkXTsKCiAgICAgICAgZW1pdCBUcmFuc2Zlcihvd25lciwgYWRkcmVzcygwKSwgaWQpOwogICAgfQp9Cgpjb250cmFjdCBNeU5GVCBpcyBFUkM3MjEgewogICAgZnVuY3Rpb24gbWludChhZGRyZXNzIHRvLCB1aW50IGlkKSBleHRlcm5hbCB7CiAgICAgICAgX21pbnQodG8sIGlkKTsKICAgIH0KCiAgICBmdW5jdGlvbiBidXJuKHVpbnQgaWQpIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKG1zZy5zZW5kZXIgPT0gX293bmVyT2ZbaWRdLCAibm90IG93bmVyIik7CiAgICAgICAgX2J1cm4oaWQpOwogICAgfQp9Cg==",
  },
]

const html = `<p>Example of ERC721</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC165</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceID</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC165</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> balance</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ownerOf</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getApproved</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> operator</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> _approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isApprovedForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> operator</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721Receiver</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onERC721Received</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> operator,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC721</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC721</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> id</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint</span> <span class="hljs-keyword">indexed</span> id</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ApprovalForAll</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner,
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> operator,
        <span class="hljs-keyword">bool</span> approved
    </span>)</span>;

    <span class="hljs-comment">// Mapping from token ID to owner address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) <span class="hljs-keyword">internal</span> _ownerOf;

    <span class="hljs-comment">// Mapping owner address to token count</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">internal</span> _balanceOf;

    <span class="hljs-comment">// Mapping from token ID to approved address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) <span class="hljs-keyword">internal</span> _approvals;

    <span class="hljs-comment">// Mapping from owner to operator approvals</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">public</span> isApprovedForAll;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span>
            interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(IERC721).<span class="hljs-built_in">interfaceId</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
            interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(IERC165).<span class="hljs-built_in">interfaceId</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ownerOf</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) </span>{
        owner <span class="hljs-operator">=</span> _ownerOf[id];
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"token doesn&#x27;t exist"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"owner = zero address"</span>);
        <span class="hljs-keyword">return</span> _balanceOf[owner];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        isApprovedForAll[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>][operator] <span class="hljs-operator">=</span> approved;
        <span class="hljs-keyword">emit</span> ApprovalForAll(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, operator, approved);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> _ownerOf[id];
        <span class="hljs-built_in">require</span>(
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner <span class="hljs-operator">|</span><span class="hljs-operator">|</span> isApprovedForAll[owner][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>],
            <span class="hljs-string">"not authorized"</span>
        );

        _approvals[id] <span class="hljs-operator">=</span> spender;

        <span class="hljs-keyword">emit</span> Approval(owner, spender, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getApproved</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-built_in">require</span>(_ownerOf[id] <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"token doesn&#x27;t exist"</span>);
        <span class="hljs-keyword">return</span> _approvals[id];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_isApprovedOrOwner</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> spender,
        <span class="hljs-keyword">uint</span> id
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>) </span>{
        <span class="hljs-keyword">return</span> (spender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
            isApprovedForAll[owner][spender] <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
            spender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _approvals[id]);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> id
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-keyword">from</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _ownerOf[id], <span class="hljs-string">"from != owner"</span>);
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"transfer to zero address"</span>);

        <span class="hljs-built_in">require</span>(_isApprovedOrOwner(<span class="hljs-keyword">from</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, id), <span class="hljs-string">"not authorized"</span>);

        _balanceOf[<span class="hljs-keyword">from</span>]<span class="hljs-operator">-</span><span class="hljs-operator">-</span>;
        _balanceOf[to]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        _ownerOf[id] <span class="hljs-operator">=</span> to;

        <span class="hljs-keyword">delete</span> _approvals[id];

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">from</span>, to, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> id
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        transferFrom(<span class="hljs-keyword">from</span>, to, id);

        <span class="hljs-built_in">require</span>(
            to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
                IERC721Receiver(to).onERC721Received(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, id, <span class="hljs-string">""</span>) <span class="hljs-operator">=</span><span class="hljs-operator">=</span>
                IERC721Receiver.onERC721Received.<span class="hljs-built_in">selector</span>,
            <span class="hljs-string">"unsafe recipient"</span>
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> id,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        transferFrom(<span class="hljs-keyword">from</span>, to, id);

        <span class="hljs-built_in">require</span>(
            to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span>
                IERC721Receiver(to).onERC721Received(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, id, data) <span class="hljs-operator">=</span><span class="hljs-operator">=</span>
                IERC721Receiver.onERC721Received.<span class="hljs-built_in">selector</span>,
            <span class="hljs-string">"unsafe recipient"</span>
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"mint to zero address"</span>);
        <span class="hljs-built_in">require</span>(_ownerOf[id] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"already minted"</span>);

        _balanceOf[to]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        _ownerOf[id] <span class="hljs-operator">=</span> to;

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> _ownerOf[id];
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"not minted"</span>);

        _balanceOf[owner] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;

        <span class="hljs-keyword">delete</span> _ownerOf[id];
        <span class="hljs-keyword">delete</span> _approvals[id];

        <span class="hljs-keyword">emit</span> Transfer(owner, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), id);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MyNFT</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ERC721</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _mint(to, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">burn</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _ownerOf[id], <span class="hljs-string">"not owner"</span>);
        _burn(id);
    }
}
</code></pre>
`

export default html
