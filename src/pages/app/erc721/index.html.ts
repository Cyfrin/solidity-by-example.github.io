// metadata
export const version = "0.8.26"
export const title = "ERC721"
export const description = "Example of ERC721 non-fungible token in Solidity"
export const cyfrinLink = "https://www.cyfrin.io/glossary/erc-721-solidity-code-example"

export const keywords = ["app", "application", "erc721", "ierc721", "nft"]

export const codes = [
  {
    fileName: "ERC721.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCmludGVyZmFjZSBJRVJDMTY1IHsKICAgIGZ1bmN0aW9uIHN1cHBvcnRzSW50ZXJmYWNlKGJ5dGVzNCBpbnRlcmZhY2VJRCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zIChib29sKTsKfQoKaW50ZXJmYWNlIElFUkM3MjEgaXMgSUVSQzE2NSB7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBvd25lcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2IGJhbGFuY2UpOwogICAgZnVuY3Rpb24gb3duZXJPZih1aW50MjU2IHRva2VuSWQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcyBvd25lcik7CiAgICBmdW5jdGlvbiBzYWZlVHJhbnNmZXJGcm9tKGFkZHJlc3MgZnJvbSwgYWRkcmVzcyB0bywgdWludDI1NiB0b2tlbklkKQogICAgICAgIGV4dGVybmFsOwogICAgZnVuY3Rpb24gc2FmZVRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgYWRkcmVzcyB0bywKICAgICAgICB1aW50MjU2IHRva2VuSWQsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbDsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbShhZGRyZXNzIGZyb20sIGFkZHJlc3MgdG8sIHVpbnQyNTYgdG9rZW5JZCkgZXh0ZXJuYWw7CiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3MgdG8sIHVpbnQyNTYgdG9rZW5JZCkgZXh0ZXJuYWw7CiAgICBmdW5jdGlvbiBnZXRBcHByb3ZlZCh1aW50MjU2IHRva2VuSWQpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYWRkcmVzcyBvcGVyYXRvcik7CiAgICBmdW5jdGlvbiBzZXRBcHByb3ZhbEZvckFsbChhZGRyZXNzIG9wZXJhdG9yLCBib29sIF9hcHByb3ZlZCkgZXh0ZXJuYWw7CiAgICBmdW5jdGlvbiBpc0FwcHJvdmVkRm9yQWxsKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgb3BlcmF0b3IpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYm9vbCk7Cn0KCmludGVyZmFjZSBJRVJDNzIxUmVjZWl2ZXIgewogICAgZnVuY3Rpb24gb25FUkM3MjFSZWNlaXZlZCgKICAgICAgICBhZGRyZXNzIG9wZXJhdG9yLAogICAgICAgIGFkZHJlc3MgZnJvbSwKICAgICAgICB1aW50MjU2IHRva2VuSWQsCiAgICAgICAgYnl0ZXMgY2FsbGRhdGEgZGF0YQogICAgKSBleHRlcm5hbCByZXR1cm5zIChieXRlczQpOwp9Cgpjb250cmFjdCBFUkM3MjEgaXMgSUVSQzcyMSB7CiAgICBldmVudCBUcmFuc2ZlcigKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgZnJvbSwgYWRkcmVzcyBpbmRleGVkIHRvLCB1aW50MjU2IGluZGV4ZWQgaWQKICAgICk7CiAgICBldmVudCBBcHByb3ZhbCgKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgb3duZXIsIGFkZHJlc3MgaW5kZXhlZCBzcGVuZGVyLCB1aW50MjU2IGluZGV4ZWQgaWQKICAgICk7CiAgICBldmVudCBBcHByb3ZhbEZvckFsbCgKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgb3duZXIsIGFkZHJlc3MgaW5kZXhlZCBvcGVyYXRvciwgYm9vbCBhcHByb3ZlZAogICAgKTsKCiAgICAvLyBNYXBwaW5nIGZyb20gdG9rZW4gSUQgdG8gb3duZXIgYWRkcmVzcwogICAgbWFwcGluZyh1aW50MjU2ID0+IGFkZHJlc3MpIGludGVybmFsIF9vd25lck9mOwoKICAgIC8vIE1hcHBpbmcgb3duZXIgYWRkcmVzcyB0byB0b2tlbiBjb3VudAogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIGludGVybmFsIF9iYWxhbmNlT2Y7CgogICAgLy8gTWFwcGluZyBmcm9tIHRva2VuIElEIHRvIGFwcHJvdmVkIGFkZHJlc3MKICAgIG1hcHBpbmcodWludDI1NiA9PiBhZGRyZXNzKSBpbnRlcm5hbCBfYXBwcm92YWxzOwoKICAgIC8vIE1hcHBpbmcgZnJvbSBvd25lciB0byBvcGVyYXRvciBhcHByb3ZhbHMKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiBtYXBwaW5nKGFkZHJlc3MgPT4gYm9vbCkpIHB1YmxpYyBpc0FwcHJvdmVkRm9yQWxsOwoKICAgIGZ1bmN0aW9uIHN1cHBvcnRzSW50ZXJmYWNlKGJ5dGVzNCBpbnRlcmZhY2VJZCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChib29sKQogICAgewogICAgICAgIHJldHVybiBpbnRlcmZhY2VJZCA9PSB0eXBlKElFUkM3MjEpLmludGVyZmFjZUlkCiAgICAgICAgICAgIHx8IGludGVyZmFjZUlkID09IHR5cGUoSUVSQzE2NSkuaW50ZXJmYWNlSWQ7CiAgICB9CgogICAgZnVuY3Rpb24gb3duZXJPZih1aW50MjU2IGlkKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3Mgb3duZXIpIHsKICAgICAgICBvd25lciA9IF9vd25lck9mW2lkXTsKICAgICAgICByZXF1aXJlKG93bmVyICE9IGFkZHJlc3MoMCksICJ0b2tlbiBkb2Vzbid0IGV4aXN0Iik7CiAgICB9CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3Mgb3duZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludDI1NikgewogICAgICAgIHJlcXVpcmUob3duZXIgIT0gYWRkcmVzcygwKSwgIm93bmVyID0gemVybyBhZGRyZXNzIik7CiAgICAgICAgcmV0dXJuIF9iYWxhbmNlT2Zbb3duZXJdOwogICAgfQoKICAgIGZ1bmN0aW9uIHNldEFwcHJvdmFsRm9yQWxsKGFkZHJlc3Mgb3BlcmF0b3IsIGJvb2wgYXBwcm92ZWQpIGV4dGVybmFsIHsKICAgICAgICBpc0FwcHJvdmVkRm9yQWxsW21zZy5zZW5kZXJdW29wZXJhdG9yXSA9IGFwcHJvdmVkOwogICAgICAgIGVtaXQgQXBwcm92YWxGb3JBbGwobXNnLnNlbmRlciwgb3BlcmF0b3IsIGFwcHJvdmVkKTsKICAgIH0KCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludDI1NiBpZCkgZXh0ZXJuYWwgewogICAgICAgIGFkZHJlc3Mgb3duZXIgPSBfb3duZXJPZltpZF07CiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgbXNnLnNlbmRlciA9PSBvd25lciB8fCBpc0FwcHJvdmVkRm9yQWxsW293bmVyXVttc2cuc2VuZGVyXSwKICAgICAgICAgICAgIm5vdCBhdXRob3JpemVkIgogICAgICAgICk7CgogICAgICAgIF9hcHByb3ZhbHNbaWRdID0gc3BlbmRlcjsKCiAgICAgICAgZW1pdCBBcHByb3ZhbChvd25lciwgc3BlbmRlciwgaWQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldEFwcHJvdmVkKHVpbnQyNTYgaWQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJlcXVpcmUoX293bmVyT2ZbaWRdICE9IGFkZHJlc3MoMCksICJ0b2tlbiBkb2Vzbid0IGV4aXN0Iik7CiAgICAgICAgcmV0dXJuIF9hcHByb3ZhbHNbaWRdOwogICAgfQoKICAgIGZ1bmN0aW9uIF9pc0FwcHJvdmVkT3JPd25lcihhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgaWQpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoYm9vbCkKICAgIHsKICAgICAgICByZXR1cm4gKAogICAgICAgICAgICBzcGVuZGVyID09IG93bmVyIHx8IGlzQXBwcm92ZWRGb3JBbGxbb3duZXJdW3NwZW5kZXJdCiAgICAgICAgICAgICAgICB8fCBzcGVuZGVyID09IF9hcHByb3ZhbHNbaWRdCiAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBmcm9tLCBhZGRyZXNzIHRvLCB1aW50MjU2IGlkKSBwdWJsaWMgewogICAgICAgIHJlcXVpcmUoZnJvbSA9PSBfb3duZXJPZltpZF0sICJmcm9tICE9IG93bmVyIik7CiAgICAgICAgcmVxdWlyZSh0byAhPSBhZGRyZXNzKDApLCAidHJhbnNmZXIgdG8gemVybyBhZGRyZXNzIik7CgogICAgICAgIHJlcXVpcmUoX2lzQXBwcm92ZWRPck93bmVyKGZyb20sIG1zZy5zZW5kZXIsIGlkKSwgIm5vdCBhdXRob3JpemVkIik7CgogICAgICAgIF9iYWxhbmNlT2ZbZnJvbV0tLTsKICAgICAgICBfYmFsYW5jZU9mW3RvXSsrOwogICAgICAgIF9vd25lck9mW2lkXSA9IHRvOwoKICAgICAgICBkZWxldGUgX2FwcHJvdmFsc1tpZF07CgogICAgICAgIGVtaXQgVHJhbnNmZXIoZnJvbSwgdG8sIGlkKTsKICAgIH0KCiAgICBmdW5jdGlvbiBzYWZlVHJhbnNmZXJGcm9tKGFkZHJlc3MgZnJvbSwgYWRkcmVzcyB0bywgdWludDI1NiBpZCkgZXh0ZXJuYWwgewogICAgICAgIHRyYW5zZmVyRnJvbShmcm9tLCB0bywgaWQpOwoKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICB0by5jb2RlLmxlbmd0aCA9PSAwCiAgICAgICAgICAgICAgICB8fCBJRVJDNzIxUmVjZWl2ZXIodG8pLm9uRVJDNzIxUmVjZWl2ZWQobXNnLnNlbmRlciwgZnJvbSwgaWQsICIiKQogICAgICAgICAgICAgICAgICAgID09IElFUkM3MjFSZWNlaXZlci5vbkVSQzcyMVJlY2VpdmVkLnNlbGVjdG9yLAogICAgICAgICAgICAidW5zYWZlIHJlY2lwaWVudCIKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBmcm9tLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludDI1NiBpZCwKICAgICAgICBieXRlcyBjYWxsZGF0YSBkYXRhCiAgICApIGV4dGVybmFsIHsKICAgICAgICB0cmFuc2ZlckZyb20oZnJvbSwgdG8sIGlkKTsKCiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgdG8uY29kZS5sZW5ndGggPT0gMAogICAgICAgICAgICAgICAgfHwgSUVSQzcyMVJlY2VpdmVyKHRvKS5vbkVSQzcyMVJlY2VpdmVkKG1zZy5zZW5kZXIsIGZyb20sIGlkLCBkYXRhKQogICAgICAgICAgICAgICAgICAgID09IElFUkM3MjFSZWNlaXZlci5vbkVSQzcyMVJlY2VpdmVkLnNlbGVjdG9yLAogICAgICAgICAgICAidW5zYWZlIHJlY2lwaWVudCIKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIF9taW50KGFkZHJlc3MgdG8sIHVpbnQyNTYgaWQpIGludGVybmFsIHsKICAgICAgICByZXF1aXJlKHRvICE9IGFkZHJlc3MoMCksICJtaW50IHRvIHplcm8gYWRkcmVzcyIpOwogICAgICAgIHJlcXVpcmUoX293bmVyT2ZbaWRdID09IGFkZHJlc3MoMCksICJhbHJlYWR5IG1pbnRlZCIpOwoKICAgICAgICBfYmFsYW5jZU9mW3RvXSsrOwogICAgICAgIF9vd25lck9mW2lkXSA9IHRvOwoKICAgICAgICBlbWl0IFRyYW5zZmVyKGFkZHJlc3MoMCksIHRvLCBpZCk7CiAgICB9CgogICAgZnVuY3Rpb24gX2J1cm4odWludDI1NiBpZCkgaW50ZXJuYWwgewogICAgICAgIGFkZHJlc3Mgb3duZXIgPSBfb3duZXJPZltpZF07CiAgICAgICAgcmVxdWlyZShvd25lciAhPSBhZGRyZXNzKDApLCAibm90IG1pbnRlZCIpOwoKICAgICAgICBfYmFsYW5jZU9mW293bmVyXSAtPSAxOwoKICAgICAgICBkZWxldGUgX293bmVyT2ZbaWRdOwogICAgICAgIGRlbGV0ZSBfYXBwcm92YWxzW2lkXTsKCiAgICAgICAgZW1pdCBUcmFuc2Zlcihvd25lciwgYWRkcmVzcygwKSwgaWQpOwogICAgfQp9Cgpjb250cmFjdCBNeU5GVCBpcyBFUkM3MjEgewogICAgZnVuY3Rpb24gbWludChhZGRyZXNzIHRvLCB1aW50MjU2IGlkKSBleHRlcm5hbCB7CiAgICAgICAgX21pbnQodG8sIGlkKTsKICAgIH0KCiAgICBmdW5jdGlvbiBidXJuKHVpbnQyNTYgaWQpIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKG1zZy5zZW5kZXIgPT0gX293bmVyT2ZbaWRdLCAibm90IG93bmVyIik7CiAgICAgICAgX2J1cm4oaWQpOwogICAgfQp9Cg==",
  },
]

const html = `<p>Example of ERC721</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC165</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceID</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC165</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> balance</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ownerOf</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> tokenId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getApproved</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> tokenId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> operator</span>)</span>;
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
        <span class="hljs-keyword">uint256</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ERC721</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC721</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Transfer</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> to, <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">indexed</span> id
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Approval</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> spender, <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">indexed</span> id
    </span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">ApprovalForAll</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> owner, <span class="hljs-keyword">address</span> <span class="hljs-keyword">indexed</span> operator, <span class="hljs-keyword">bool</span> approved
    </span>)</span>;

    <span class="hljs-comment">// Mapping from token ID to owner address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint256</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) <span class="hljs-keyword">internal</span> _ownerOf;

    <span class="hljs-comment">// Mapping owner address to token count</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">internal</span> _balanceOf;

    <span class="hljs-comment">// Mapping from token ID to approved address</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">uint256</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">address</span>) <span class="hljs-keyword">internal</span> _approvals;

    <span class="hljs-comment">// Mapping from owner to operator approvals</span>
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span>)) <span class="hljs-keyword">public</span> isApprovedForAll;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceId</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(IERC721).<span class="hljs-built_in">interfaceId</span>
            <span class="hljs-operator">|</span><span class="hljs-operator">|</span> interfaceId <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(IERC165).<span class="hljs-built_in">interfaceId</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ownerOf</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) </span>{
        owner <span class="hljs-operator">=</span> _ownerOf[id];
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"token doesn&#x27;t exist"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"owner = zero address"</span>);
        <span class="hljs-keyword">return</span> _balanceOf[owner];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        isApprovedForAll[<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>][operator] <span class="hljs-operator">=</span> approved;
        <span class="hljs-keyword">emit</span> ApprovalForAll(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, operator, approved);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> _ownerOf[id];
        <span class="hljs-built_in">require</span>(
            <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner <span class="hljs-operator">|</span><span class="hljs-operator">|</span> isApprovedForAll[owner][<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>],
            <span class="hljs-string">"not authorized"</span>
        );

        _approvals[id] <span class="hljs-operator">=</span> spender;

        <span class="hljs-keyword">emit</span> Approval(owner, spender, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getApproved</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-built_in">require</span>(_ownerOf[id] <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"token doesn&#x27;t exist"</span>);
        <span class="hljs-keyword">return</span> _approvals[id];
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_isApprovedOrOwner</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner, <span class="hljs-keyword">address</span> spender, <span class="hljs-keyword">uint256</span> id</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)
    </span>{
        <span class="hljs-keyword">return</span> (
            spender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner <span class="hljs-operator">|</span><span class="hljs-operator">|</span> isApprovedForAll[owner][spender]
                <span class="hljs-operator">|</span><span class="hljs-operator">|</span> spender <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _approvals[id]
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-keyword">from</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _ownerOf[id], <span class="hljs-string">"from != owner"</span>);
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"transfer to zero address"</span>);

        <span class="hljs-built_in">require</span>(_isApprovedOrOwner(<span class="hljs-keyword">from</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, id), <span class="hljs-string">"not authorized"</span>);

        _balanceOf[<span class="hljs-keyword">from</span>]<span class="hljs-operator">-</span><span class="hljs-operator">-</span>;
        _balanceOf[to]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        _ownerOf[id] <span class="hljs-operator">=</span> to;

        <span class="hljs-keyword">delete</span> _approvals[id];

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">from</span>, to, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        transferFrom(<span class="hljs-keyword">from</span>, to, id);

        <span class="hljs-built_in">require</span>(
            to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>
                <span class="hljs-operator">|</span><span class="hljs-operator">|</span> IERC721Receiver(to).onERC721Received(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, id, <span class="hljs-string">""</span>)
                    <span class="hljs-operator">=</span><span class="hljs-operator">=</span> IERC721Receiver.onERC721Received.<span class="hljs-built_in">selector</span>,
            <span class="hljs-string">"unsafe recipient"</span>
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint256</span> id,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        transferFrom(<span class="hljs-keyword">from</span>, to, id);

        <span class="hljs-built_in">require</span>(
            to.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>
                <span class="hljs-operator">|</span><span class="hljs-operator">|</span> IERC721Receiver(to).onERC721Received(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">from</span>, id, data)
                    <span class="hljs-operator">=</span><span class="hljs-operator">=</span> IERC721Receiver.onERC721Received.<span class="hljs-built_in">selector</span>,
            <span class="hljs-string">"unsafe recipient"</span>
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"mint to zero address"</span>);
        <span class="hljs-built_in">require</span>(_ownerOf[id] <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"already minted"</span>);

        _balanceOf[to]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        _ownerOf[id] <span class="hljs-operator">=</span> to;

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), to, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> </span>{
        <span class="hljs-keyword">address</span> owner <span class="hljs-operator">=</span> _ownerOf[id];
        <span class="hljs-built_in">require</span>(owner <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"not minted"</span>);

        _balanceOf[owner] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;

        <span class="hljs-keyword">delete</span> _ownerOf[id];
        <span class="hljs-keyword">delete</span> _approvals[id];

        <span class="hljs-keyword">emit</span> Transfer(owner, <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), id);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MyNFT</span> <span class="hljs-keyword">is</span> <span class="hljs-title">ERC721</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        _mint(to, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">burn</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _ownerOf[id], <span class="hljs-string">"not owner"</span>);
        _burn(id);
    }
}
</code></pre>`

export default html
