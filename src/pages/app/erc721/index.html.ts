// metadata
export const version = "0.8.17"
export const title = "ERC721"
export const description = "Example of ERC721 non fungible token in Solidity"
export const codes = [
  {
    fileName: "ERC721.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNzsKCmludGVyZmFjZSBJRVJDMTY1IHsKICAgIGZ1bmN0aW9uIHN1cHBvcnRzSW50ZXJmYWNlKGJ5dGVzNCBpbnRlcmZhY2VJRCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChib29sKTsKfQoKaW50ZXJmYWNlIElFUkM3MjEgaXMgSUVSQzE2NSB7CiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBvd25lcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50IGJhbGFuY2UpOwoKICAgIGZ1bmN0aW9uIG93bmVyT2YodWludCB0b2tlbklkKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3Mgb3duZXIpOwoKICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oYWRkcmVzcyBmcm9tLCBhZGRyZXNzIHRvLCB1aW50IHRva2VuSWQpIGV4dGVybmFsOwoKICAgIGZ1bmN0aW9uIHNhZmVUcmFuc2ZlckZyb20oCiAgICAgICAgYWRkcmVzcyBmcm9tLAogICAgICAgIGFkZHJlc3MgdG8sCiAgICAgICAgdWludCB0b2tlbklkLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWw7CgogICAgZnVuY3Rpb24gdHJhbnNmZXJGcm9tKGFkZHJlc3MgZnJvbSwgYWRkcmVzcyB0bywgdWludCB0b2tlbklkKSBleHRlcm5hbDsKCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3MgdG8sIHVpbnQgdG9rZW5JZCkgZXh0ZXJuYWw7CgogICAgZnVuY3Rpb24gZ2V0QXBwcm92ZWQodWludCB0b2tlbklkKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3Mgb3BlcmF0b3IpOwoKICAgIGZ1bmN0aW9uIHNldEFwcHJvdmFsRm9yQWxsKGFkZHJlc3Mgb3BlcmF0b3IsIGJvb2wgX2FwcHJvdmVkKSBleHRlcm5hbDsKCiAgICBmdW5jdGlvbiBpc0FwcHJvdmVkRm9yQWxsKAogICAgICAgIGFkZHJlc3Mgb3duZXIsCiAgICAgICAgYWRkcmVzcyBvcGVyYXRvcgogICAgKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGJvb2wpOwp9CgppbnRlcmZhY2UgSUVSQzcyMVJlY2VpdmVyIHsKICAgIGZ1bmN0aW9uIG9uRVJDNzIxUmVjZWl2ZWQoCiAgICAgICAgYWRkcmVzcyBvcGVyYXRvciwKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgdWludCB0b2tlbklkLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAoYnl0ZXM0KTsKfQoKY29udHJhY3QgRVJDNzIxIGlzIElFUkM3MjEgewogICAgZXZlbnQgVHJhbnNmZXIoYWRkcmVzcyBpbmRleGVkIGZyb20sIGFkZHJlc3MgaW5kZXhlZCB0bywgdWludCBpbmRleGVkIGlkKTsKICAgIGV2ZW50IEFwcHJvdmFsKGFkZHJlc3MgaW5kZXhlZCBvd25lciwgYWRkcmVzcyBpbmRleGVkIHNwZW5kZXIsIHVpbnQgaW5kZXhlZCBpZCk7CiAgICBldmVudCBBcHByb3ZhbEZvckFsbCgKICAgICAgICBhZGRyZXNzIGluZGV4ZWQgb3duZXIsCiAgICAgICAgYWRkcmVzcyBpbmRleGVkIG9wZXJhdG9yLAogICAgICAgIGJvb2wgYXBwcm92ZWQKICAgICk7CgogICAgLy8gTWFwcGluZyBmcm9tIHRva2VuIElEIHRvIG93bmVyIGFkZHJlc3MKICAgIG1hcHBpbmcodWludCA9PiBhZGRyZXNzKSBpbnRlcm5hbCBfb3duZXJPZjsKCiAgICAvLyBNYXBwaW5nIG93bmVyIGFkZHJlc3MgdG8gdG9rZW4gY291bnQKICAgIG1hcHBpbmcoYWRkcmVzcyA9PiB1aW50KSBpbnRlcm5hbCBfYmFsYW5jZU9mOwoKICAgIC8vIE1hcHBpbmcgZnJvbSB0b2tlbiBJRCB0byBhcHByb3ZlZCBhZGRyZXNzCiAgICBtYXBwaW5nKHVpbnQgPT4gYWRkcmVzcykgaW50ZXJuYWwgX2FwcHJvdmFsczsKCiAgICAvLyBNYXBwaW5nIGZyb20gb3duZXIgdG8gb3BlcmF0b3IgYXBwcm92YWxzCiAgICBtYXBwaW5nKGFkZHJlc3MgPT4gbWFwcGluZyhhZGRyZXNzID0+IGJvb2wpKSBwdWJsaWMgaXNBcHByb3ZlZEZvckFsbDsKCiAgICBmdW5jdGlvbiBzdXBwb3J0c0ludGVyZmFjZShieXRlczQgaW50ZXJmYWNlSWQpIGV4dGVybmFsIHB1cmUgcmV0dXJucyAoYm9vbCkgewogICAgICAgIHJldHVybgogICAgICAgICAgICBpbnRlcmZhY2VJZCA9PSB0eXBlKElFUkM3MjEpLmludGVyZmFjZUlkIHx8CiAgICAgICAgICAgIGludGVyZmFjZUlkID09IHR5cGUoSUVSQzE2NSkuaW50ZXJmYWNlSWQ7CiAgICB9CgogICAgZnVuY3Rpb24gb3duZXJPZih1aW50IGlkKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3Mgb3duZXIpIHsKICAgICAgICBvd25lciA9IF9vd25lck9mW2lkXTsKICAgICAgICByZXF1aXJlKG93bmVyICE9IGFkZHJlc3MoMCksICJ0b2tlbiBkb2Vzbid0IGV4aXN0Iik7CiAgICB9CgogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3Mgb3duZXIpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAodWludCkgewogICAgICAgIHJlcXVpcmUob3duZXIgIT0gYWRkcmVzcygwKSwgIm93bmVyID0gemVybyBhZGRyZXNzIik7CiAgICAgICAgcmV0dXJuIF9iYWxhbmNlT2Zbb3duZXJdOwogICAgfQoKICAgIGZ1bmN0aW9uIHNldEFwcHJvdmFsRm9yQWxsKGFkZHJlc3Mgb3BlcmF0b3IsIGJvb2wgYXBwcm92ZWQpIGV4dGVybmFsIHsKICAgICAgICBpc0FwcHJvdmVkRm9yQWxsW21zZy5zZW5kZXJdW29wZXJhdG9yXSA9IGFwcHJvdmVkOwogICAgICAgIGVtaXQgQXBwcm92YWxGb3JBbGwobXNnLnNlbmRlciwgb3BlcmF0b3IsIGFwcHJvdmVkKTsKICAgIH0KCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludCBpZCkgZXh0ZXJuYWwgewogICAgICAgIGFkZHJlc3Mgb3duZXIgPSBfb3duZXJPZltpZF07CiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgbXNnLnNlbmRlciA9PSBvd25lciB8fCBpc0FwcHJvdmVkRm9yQWxsW293bmVyXVttc2cuc2VuZGVyXSwKICAgICAgICAgICAgIm5vdCBhdXRob3JpemVkIgogICAgICAgICk7CgogICAgICAgIF9hcHByb3ZhbHNbaWRdID0gc3BlbmRlcjsKCiAgICAgICAgZW1pdCBBcHByb3ZhbChvd25lciwgc3BlbmRlciwgaWQpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldEFwcHJvdmVkKHVpbnQgaWQpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJlcXVpcmUoX293bmVyT2ZbaWRdICE9IGFkZHJlc3MoMCksICJ0b2tlbiBkb2Vzbid0IGV4aXN0Iik7CiAgICAgICAgcmV0dXJuIF9hcHByb3ZhbHNbaWRdOwogICAgfQoKICAgIGZ1bmN0aW9uIF9pc0FwcHJvdmVkT3JPd25lcigKICAgICAgICBhZGRyZXNzIG93bmVyLAogICAgICAgIGFkZHJlc3Mgc3BlbmRlciwKICAgICAgICB1aW50IGlkCiAgICApIGludGVybmFsIHZpZXcgcmV0dXJucyAoYm9vbCkgewogICAgICAgIHJldHVybiAoc3BlbmRlciA9PSBvd25lciB8fAogICAgICAgICAgICBpc0FwcHJvdmVkRm9yQWxsW293bmVyXVtzcGVuZGVyXSB8fAogICAgICAgICAgICBzcGVuZGVyID09IF9hcHByb3ZhbHNbaWRdKTsKICAgIH0KCiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBmcm9tLCBhZGRyZXNzIHRvLCB1aW50IGlkKSBwdWJsaWMgewogICAgICAgIHJlcXVpcmUoZnJvbSA9PSBfb3duZXJPZltpZF0sICJmcm9tICE9IG93bmVyIik7CiAgICAgICAgcmVxdWlyZSh0byAhPSBhZGRyZXNzKDApLCAidHJhbnNmZXIgdG8gemVybyBhZGRyZXNzIik7CgogICAgICAgIHJlcXVpcmUoX2lzQXBwcm92ZWRPck93bmVyKGZyb20sIG1zZy5zZW5kZXIsIGlkKSwgIm5vdCBhdXRob3JpemVkIik7CgogICAgICAgIF9iYWxhbmNlT2ZbZnJvbV0tLTsKICAgICAgICBfYmFsYW5jZU9mW3RvXSsrOwogICAgICAgIF9vd25lck9mW2lkXSA9IHRvOwoKICAgICAgICBkZWxldGUgX2FwcHJvdmFsc1tpZF07CgogICAgICAgIGVtaXQgVHJhbnNmZXIoZnJvbSwgdG8sIGlkKTsKICAgIH0KCiAgICBmdW5jdGlvbiBzYWZlVHJhbnNmZXJGcm9tKGFkZHJlc3MgZnJvbSwgYWRkcmVzcyB0bywgdWludCBpZCkgZXh0ZXJuYWwgewogICAgICAgIHRyYW5zZmVyRnJvbShmcm9tLCB0bywgaWQpOwoKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICB0by5jb2RlLmxlbmd0aCA9PSAwIHx8CiAgICAgICAgICAgICAgICBJRVJDNzIxUmVjZWl2ZXIodG8pLm9uRVJDNzIxUmVjZWl2ZWQobXNnLnNlbmRlciwgZnJvbSwgaWQsICIiKSA9PQogICAgICAgICAgICAgICAgSUVSQzcyMVJlY2VpdmVyLm9uRVJDNzIxUmVjZWl2ZWQuc2VsZWN0b3IsCiAgICAgICAgICAgICJ1bnNhZmUgcmVjaXBpZW50IgogICAgICAgICk7CiAgICB9CgogICAgZnVuY3Rpb24gc2FmZVRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIGZyb20sCiAgICAgICAgYWRkcmVzcyB0bywKICAgICAgICB1aW50IGlkLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhIGRhdGEKICAgICkgZXh0ZXJuYWwgewogICAgICAgIHRyYW5zZmVyRnJvbShmcm9tLCB0bywgaWQpOwoKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICB0by5jb2RlLmxlbmd0aCA9PSAwIHx8CiAgICAgICAgICAgICAgICBJRVJDNzIxUmVjZWl2ZXIodG8pLm9uRVJDNzIxUmVjZWl2ZWQobXNnLnNlbmRlciwgZnJvbSwgaWQsIGRhdGEpID09CiAgICAgICAgICAgICAgICBJRVJDNzIxUmVjZWl2ZXIub25FUkM3MjFSZWNlaXZlZC5zZWxlY3RvciwKICAgICAgICAgICAgInVuc2FmZSByZWNpcGllbnQiCiAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiBfbWludChhZGRyZXNzIHRvLCB1aW50IGlkKSBpbnRlcm5hbCB7CiAgICAgICAgcmVxdWlyZSh0byAhPSBhZGRyZXNzKDApLCAibWludCB0byB6ZXJvIGFkZHJlc3MiKTsKICAgICAgICByZXF1aXJlKF9vd25lck9mW2lkXSA9PSBhZGRyZXNzKDApLCAiYWxyZWFkeSBtaW50ZWQiKTsKCiAgICAgICAgX2JhbGFuY2VPZlt0b10rKzsKICAgICAgICBfb3duZXJPZltpZF0gPSB0bzsKCiAgICAgICAgZW1pdCBUcmFuc2ZlcihhZGRyZXNzKDApLCB0bywgaWQpOwogICAgfQoKICAgIGZ1bmN0aW9uIF9idXJuKHVpbnQgaWQpIGludGVybmFsIHsKICAgICAgICBhZGRyZXNzIG93bmVyID0gX293bmVyT2ZbaWRdOwogICAgICAgIHJlcXVpcmUob3duZXIgIT0gYWRkcmVzcygwKSwgIm5vdCBtaW50ZWQiKTsKCiAgICAgICAgX2JhbGFuY2VPZltvd25lcl0gLT0gMTsKCiAgICAgICAgZGVsZXRlIF9vd25lck9mW2lkXTsKICAgICAgICBkZWxldGUgX2FwcHJvdmFsc1tpZF07CgogICAgICAgIGVtaXQgVHJhbnNmZXIob3duZXIsIGFkZHJlc3MoMCksIGlkKTsKICAgIH0KfQoKY29udHJhY3QgTXlORlQgaXMgRVJDNzIxIHsKICAgIGZ1bmN0aW9uIG1pbnQoYWRkcmVzcyB0bywgdWludCBpZCkgZXh0ZXJuYWwgewogICAgICAgIF9taW50KHRvLCBpZCk7CiAgICB9CgogICAgZnVuY3Rpb24gYnVybih1aW50IGlkKSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShtc2cuc2VuZGVyID09IF9vd25lck9mW2lkXSwgIm5vdCBvd25lciIpOwogICAgICAgIF9idXJuKGlkKTsKICAgIH0KfQo=",
  },
]

const html = `<p>Example of ERC721</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.17;</span>

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC165</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">supportsInterface</span>(<span class="hljs-params"><span class="hljs-keyword">bytes4</span> interfaceID</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
}

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IERC721</span> <span class="hljs-keyword">is</span> <span class="hljs-title">IERC165</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balanceOf</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> balance</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ownerOf</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> owner</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>,
        <span class="hljs-keyword">address</span> to,
        <span class="hljs-keyword">uint</span> tokenId,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> data
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getApproved</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> tokenId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span> operator</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setApprovalForAll</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> operator, <span class="hljs-keyword">bool</span> _approved</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isApprovedForAll</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> owner,
        <span class="hljs-keyword">address</span> operator
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bool</span></span>)</span>;
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

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">transferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-keyword">from</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _ownerOf[id], <span class="hljs-string">"from != owner"</span>);
        <span class="hljs-built_in">require</span>(to <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"transfer to zero address"</span>);

        <span class="hljs-built_in">require</span>(_isApprovedOrOwner(<span class="hljs-keyword">from</span>, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, id), <span class="hljs-string">"not authorized"</span>);

        _balanceOf[<span class="hljs-keyword">from</span>]<span class="hljs-operator">-</span><span class="hljs-operator">-</span>;
        _balanceOf[to]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        _ownerOf[id] <span class="hljs-operator">=</span> to;

        <span class="hljs-keyword">delete</span> _approvals[id];

        <span class="hljs-keyword">emit</span> Transfer(<span class="hljs-keyword">from</span>, to, id);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">safeTransferFrom</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">from</span>, <span class="hljs-keyword">address</span> to, <span class="hljs-keyword">uint</span> id</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
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
