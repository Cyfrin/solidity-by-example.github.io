// metadata
export const version = "0.8.13"
export const title = "Constant Product AMM"
export const description = "Constant product AMM"
export const codes = [
  {
    fileName: "CPAMM.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCmNvbnRyYWN0IENQQU1NIHsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHRva2VuMDsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHRva2VuMTsKCiAgICB1aW50IHB1YmxpYyByZXNlcnZlMDsKICAgIHVpbnQgcHVibGljIHJlc2VydmUxOwoKICAgIHVpbnQgcHVibGljIHRvdGFsU3VwcGx5OwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQpIHB1YmxpYyBiYWxhbmNlT2Y7CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfdG9rZW4wLCBhZGRyZXNzIF90b2tlbjEpIHsKICAgICAgICB0b2tlbjAgPSBJRVJDMjAoX3Rva2VuMCk7CiAgICAgICAgdG9rZW4xID0gSUVSQzIwKF90b2tlbjEpOwogICAgfQoKICAgIGZ1bmN0aW9uIF9taW50KGFkZHJlc3MgX3RvLCB1aW50IF9hbW91bnQpIHByaXZhdGUgewogICAgICAgIGJhbGFuY2VPZltfdG9dICs9IF9hbW91bnQ7CiAgICAgICAgdG90YWxTdXBwbHkgKz0gX2Ftb3VudDsKICAgIH0KCiAgICBmdW5jdGlvbiBfYnVybihhZGRyZXNzIF9mcm9tLCB1aW50IF9hbW91bnQpIHByaXZhdGUgewogICAgICAgIGJhbGFuY2VPZltfZnJvbV0gLT0gX2Ftb3VudDsKICAgICAgICB0b3RhbFN1cHBseSAtPSBfYW1vdW50OwogICAgfQoKICAgIGZ1bmN0aW9uIF91cGRhdGUodWludCBfcmVzZXJ2ZTAsIHVpbnQgX3Jlc2VydmUxKSBwcml2YXRlIHsKICAgICAgICByZXNlcnZlMCA9IF9yZXNlcnZlMDsKICAgICAgICByZXNlcnZlMSA9IF9yZXNlcnZlMTsKICAgIH0KCiAgICBmdW5jdGlvbiBzd2FwKGFkZHJlc3MgX3Rva2VuSW4sIHVpbnQgX2Ftb3VudEluKSBleHRlcm5hbCByZXR1cm5zICh1aW50IGFtb3VudE91dCkgewogICAgICAgIHJlcXVpcmUoCiAgICAgICAgICAgIF90b2tlbkluID09IGFkZHJlc3ModG9rZW4wKSB8fCBfdG9rZW5JbiA9PSBhZGRyZXNzKHRva2VuMSksCiAgICAgICAgICAgICJpbnZhbGlkIHRva2VuIgogICAgICAgICk7CiAgICAgICAgcmVxdWlyZShfYW1vdW50SW4gPiAwLCAiYW1vdW50IGluID0gMCIpOwoKICAgICAgICBib29sIGlzVG9rZW4wID0gX3Rva2VuSW4gPT0gYWRkcmVzcyh0b2tlbjApOwogICAgICAgIChJRVJDMjAgdG9rZW5JbiwgSUVSQzIwIHRva2VuT3V0LCB1aW50IHJlc2VydmVJbiwgdWludCByZXNlcnZlT3V0KSA9IGlzVG9rZW4wCiAgICAgICAgICAgID8gKHRva2VuMCwgdG9rZW4xLCByZXNlcnZlMCwgcmVzZXJ2ZTEpCiAgICAgICAgICAgIDogKHRva2VuMSwgdG9rZW4wLCByZXNlcnZlMSwgcmVzZXJ2ZTApOwoKICAgICAgICB0b2tlbkluLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBfYW1vdW50SW4pOwoKICAgICAgICAvKgogICAgICAgIEhvdyBtdWNoIGR5IGZvciBkeD8KCiAgICAgICAgeHkgPSBrCiAgICAgICAgKHggKyBkeCkoeSAtIGR5KSA9IGsKICAgICAgICB5IC0gZHkgPSBrIC8gKHggKyBkeCkKICAgICAgICB5IC0gayAvICh4ICsgZHgpID0gZHkKICAgICAgICB5IC0geHkgLyAoeCArIGR4KSA9IGR5CiAgICAgICAgKHl4ICsgeWR4IC0geHkpIC8gKHggKyBkeCkgPSBkeQogICAgICAgIHlkeCAvICh4ICsgZHgpID0gZHkKICAgICAgICAqLwogICAgICAgIC8vIDAuMyUgZmVlCiAgICAgICAgdWludCBhbW91bnRJbldpdGhGZWUgPSAoX2Ftb3VudEluICogOTk3KSAvIDEwMDA7CiAgICAgICAgYW1vdW50T3V0ID0gKHJlc2VydmVPdXQgKiBhbW91bnRJbldpdGhGZWUpIC8gKHJlc2VydmVJbiArIGFtb3VudEluV2l0aEZlZSk7CgogICAgICAgIHRva2VuT3V0LnRyYW5zZmVyKG1zZy5zZW5kZXIsIGFtb3VudE91dCk7CgogICAgICAgIF91cGRhdGUodG9rZW4wLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKSwgdG9rZW4xLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKSk7CiAgICB9CgogICAgZnVuY3Rpb24gYWRkTGlxdWlkaXR5KHVpbnQgX2Ftb3VudDAsIHVpbnQgX2Ftb3VudDEpIGV4dGVybmFsIHJldHVybnMgKHVpbnQgc2hhcmVzKSB7CiAgICAgICAgdG9rZW4wLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBfYW1vdW50MCk7CiAgICAgICAgdG9rZW4xLnRyYW5zZmVyRnJvbShtc2cuc2VuZGVyLCBhZGRyZXNzKHRoaXMpLCBfYW1vdW50MSk7CgogICAgICAgIC8qCiAgICAgICAgSG93IG11Y2ggZHgsIGR5IHRvIGFkZD8KCiAgICAgICAgeHkgPSBrCiAgICAgICAgKHggKyBkeCkoeSArIGR5KSA9IGsnCgogICAgICAgIE5vIHByaWNlIGNoYW5nZSwgYmVmb3JlIGFuZCBhZnRlciBhZGRpbmcgbGlxdWlkaXR5CiAgICAgICAgeCAvIHkgPSAoeCArIGR4KSAvICh5ICsgZHkpCgogICAgICAgIHgoeSArIGR5KSA9IHkoeCArIGR4KQogICAgICAgIHggKiBkeSA9IHkgKiBkeAoKICAgICAgICB4IC8geSA9IGR4IC8gZHkKICAgICAgICBkeSA9IHkgLyB4ICogZHgKICAgICAgICAqLwogICAgICAgIGlmIChyZXNlcnZlMCA+IDAgfHwgcmVzZXJ2ZTEgPiAwKSB7CiAgICAgICAgICAgIHJlcXVpcmUocmVzZXJ2ZTAgKiBfYW1vdW50MSA9PSByZXNlcnZlMSAqIF9hbW91bnQwLCAieCAvIHkgIT0gZHggLyBkeSIpOwogICAgICAgIH0KCiAgICAgICAgLyoKICAgICAgICBIb3cgbXVjaCBzaGFyZXMgdG8gbWludD8KCiAgICAgICAgZih4LCB5KSA9IHZhbHVlIG9mIGxpcXVpZGl0eQogICAgICAgIFdlIHdpbGwgZGVmaW5lIGYoeCwgeSkgPSBzcXJ0KHh5KQoKICAgICAgICBMMCA9IGYoeCwgeSkKICAgICAgICBMMSA9IGYoeCArIGR4LCB5ICsgZHkpCiAgICAgICAgVCA9IHRvdGFsIHNoYXJlcwogICAgICAgIHMgPSBzaGFyZXMgdG8gbWludAoKICAgICAgICBUb3RhbCBzaGFyZXMgc2hvdWxkIGluY3JlYXNlIHByb3BvcnRpb25hbCB0byBpbmNyZWFzZSBpbiBsaXF1aWRpdHkKICAgICAgICBMMSAvIEwwID0gKFQgKyBzKSAvIFQKCiAgICAgICAgTDEgKiBUID0gTDAgKiAoVCArIHMpCgogICAgICAgIChMMSAtIEwwKSAqIFQgLyBMMCA9IHMgCiAgICAgICAgKi8KCiAgICAgICAgLyoKICAgICAgICBDbGFpbQogICAgICAgIChMMSAtIEwwKSAvIEwwID0gZHggLyB4ID0gZHkgLyB5CgogICAgICAgIFByb29mCiAgICAgICAgLS0tIEVxdWF0aW9uIDEgLS0tCiAgICAgICAgKEwxIC0gTDApIC8gTDAgPSAoc3FydCgoeCArIGR4KSh5ICsgZHkpKSAtIHNxcnQoeHkpKSAvIHNxcnQoeHkpCiAgICAgICAgCiAgICAgICAgZHggLyBkeSA9IHggLyB5IHNvIHJlcGxhY2UgZHkgPSBkeCAqIHkgLyB4CgogICAgICAgIC0tLSBFcXVhdGlvbiAyIC0tLQogICAgICAgIEVxdWF0aW9uIDEgPSAoc3FydCh4eSArIDJ5ZHggKyBkeF4yICogeSAvIHgpIC0gc3FydCh4eSkpIC8gc3FydCh4eSkKCiAgICAgICAgTXVsdGlwbHkgYnkgc3FydCh4KSAvIHNxcnQoeCkKICAgICAgICBFcXVhdGlvbiAyID0gKHNxcnQoeF4yeSArIDJ4eWR4ICsgZHheMiAqIHkpIC0gc3FydCh4XjJ5KSkgLyBzcXJ0KHheMnkpCiAgICAgICAgICAgICAgICAgICA9IChzcXJ0KHkpKHNxcnQoeF4yICsgMnhkeCArIGR4XjIpIC0gc3FydCh4XjIpKSAvIChzcXJ0KHkpc3FydCh4XjIpKQogICAgICAgIAogICAgICAgIHNxcnQoeSkgb24gdG9wIGFuZCBib3R0b20gY2FuY2VscyBvdXQKCiAgICAgICAgLS0tIEVxdWF0aW9uIDMgLS0tCiAgICAgICAgRXF1YXRpb24gMiA9IChzcXJ0KHheMiArIDJ4ZHggKyBkeF4yKSAtIHNxcnQoeF4yKSkgLyAoc3FydCh4XjIpCiAgICAgICAgPSAoc3FydCgoeCArIGR4KV4yKSAtIHNxcnQoeF4yKSkgLyBzcXJ0KHheMikgIAogICAgICAgID0gKCh4ICsgZHgpIC0geCkgLyB4CiAgICAgICAgPSBkeCAvIHgKCiAgICAgICAgU2luY2UgZHggLyBkeSA9IHggLyB5LAogICAgICAgIGR4IC8geCA9IGR5IC8geQoKICAgICAgICBGaW5hbGx5CiAgICAgICAgKEwxIC0gTDApIC8gTDAgPSBkeCAvIHggPSBkeSAvIHkKICAgICAgICAqLwogICAgICAgIGlmICh0b3RhbFN1cHBseSA9PSAwKSB7CiAgICAgICAgICAgIHNoYXJlcyA9IF9zcXJ0KF9hbW91bnQwICogX2Ftb3VudDEpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIHNoYXJlcyA9IF9taW4oCiAgICAgICAgICAgICAgICAoX2Ftb3VudDAgKiB0b3RhbFN1cHBseSkgLyByZXNlcnZlMCwKICAgICAgICAgICAgICAgIChfYW1vdW50MSAqIHRvdGFsU3VwcGx5KSAvIHJlc2VydmUxCiAgICAgICAgICAgICk7CiAgICAgICAgfQogICAgICAgIHJlcXVpcmUoc2hhcmVzID4gMCwgInNoYXJlcyA9IDAiKTsKICAgICAgICBfbWludChtc2cuc2VuZGVyLCBzaGFyZXMpOwoKICAgICAgICBfdXBkYXRlKHRva2VuMC5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSksIHRva2VuMS5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSkpOwogICAgfQoKICAgIGZ1bmN0aW9uIHJlbW92ZUxpcXVpZGl0eSgKICAgICAgICB1aW50IF9zaGFyZXMKICAgICkgZXh0ZXJuYWwgcmV0dXJucyAodWludCBhbW91bnQwLCB1aW50IGFtb3VudDEpIHsKICAgICAgICAvKgogICAgICAgIENsYWltCiAgICAgICAgZHgsIGR5ID0gYW1vdW50IG9mIGxpcXVpZGl0eSB0byByZW1vdmUKICAgICAgICBkeCA9IHMgLyBUICogeAogICAgICAgIGR5ID0gcyAvIFQgKiB5CgogICAgICAgIFByb29mCiAgICAgICAgTGV0J3MgZmluZCBkeCwgZHkgc3VjaCB0aGF0CiAgICAgICAgdiAvIEwgPSBzIC8gVAogICAgICAgIAogICAgICAgIHdoZXJlCiAgICAgICAgdiA9IGYoZHgsIGR5KSA9IHNxcnQoZHhkeSkKICAgICAgICBMID0gdG90YWwgbGlxdWlkaXR5ID0gc3FydCh4eSkKICAgICAgICBzID0gc2hhcmVzCiAgICAgICAgVCA9IHRvdGFsIHN1cHBseQoKICAgICAgICAtLS0gRXF1YXRpb24gMSAtLS0KICAgICAgICB2ID0gcyAvIFQgKiBMCiAgICAgICAgc3FydChkeGR5KSA9IHMgLyBUICogc3FydCh4eSkKCiAgICAgICAgQW1vdW50IG9mIGxpcXVpZGl0eSB0byByZW1vdmUgbXVzdCBub3QgY2hhbmdlIHByaWNlIHNvIAogICAgICAgIGR4IC8gZHkgPSB4IC8geQoKICAgICAgICByZXBsYWNlIGR5ID0gZHggKiB5IC8geAogICAgICAgIHNxcnQoZHhkeSkgPSBzcXJ0KGR4ICogZHggKiB5IC8geCkgPSBkeCAqIHNxcnQoeSAvIHgpCgogICAgICAgIERpdmlkZSBib3RoIHNpZGVzIG9mIEVxdWF0aW9uIDEgd2l0aCBzcXJ0KHkgLyB4KQogICAgICAgIGR4ID0gcyAvIFQgKiBzcXJ0KHh5KSAvIHNxcnQoeSAvIHgpCiAgICAgICAgICAgPSBzIC8gVCAqIHNxcnQoeF4yKSA9IHMgLyBUICogeAoKICAgICAgICBMaWtld2lzZQogICAgICAgIGR5ID0gcyAvIFQgKiB5CiAgICAgICAgKi8KCiAgICAgICAgLy8gYmFsMCA+PSByZXNlcnZlMAogICAgICAgIC8vIGJhbDEgPj0gcmVzZXJ2ZTEKICAgICAgICB1aW50IGJhbDAgPSB0b2tlbjAuYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpOwogICAgICAgIHVpbnQgYmFsMSA9IHRva2VuMS5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSk7CgogICAgICAgIGFtb3VudDAgPSAoX3NoYXJlcyAqIGJhbDApIC8gdG90YWxTdXBwbHk7CiAgICAgICAgYW1vdW50MSA9IChfc2hhcmVzICogYmFsMSkgLyB0b3RhbFN1cHBseTsKICAgICAgICByZXF1aXJlKGFtb3VudDAgPiAwICYmIGFtb3VudDEgPiAwLCAiYW1vdW50MCBvciBhbW91bnQxID0gMCIpOwoKICAgICAgICBfYnVybihtc2cuc2VuZGVyLCBfc2hhcmVzKTsKICAgICAgICBfdXBkYXRlKGJhbDAgLSBhbW91bnQwLCBiYWwxIC0gYW1vdW50MSk7CgogICAgICAgIHRva2VuMC50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnQwKTsKICAgICAgICB0b2tlbjEudHJhbnNmZXIobXNnLnNlbmRlciwgYW1vdW50MSk7CiAgICB9CgogICAgZnVuY3Rpb24gX3NxcnQodWludCB5KSBwcml2YXRlIHB1cmUgcmV0dXJucyAodWludCB6KSB7CiAgICAgICAgaWYgKHkgPiAzKSB7CiAgICAgICAgICAgIHogPSB5OwogICAgICAgICAgICB1aW50IHggPSB5IC8gMiArIDE7CiAgICAgICAgICAgIHdoaWxlICh4IDwgeikgewogICAgICAgICAgICAgICAgeiA9IHg7CiAgICAgICAgICAgICAgICB4ID0gKHkgLyB4ICsgeCkgLyAyOwogICAgICAgICAgICB9CiAgICAgICAgfSBlbHNlIGlmICh5ICE9IDApIHsKICAgICAgICAgICAgeiA9IDE7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIF9taW4odWludCB4LCB1aW50IHkpIHByaXZhdGUgcHVyZSByZXR1cm5zICh1aW50KSB7CiAgICAgICAgcmV0dXJuIHggPD0geSA/IHggOiB5OwogICAgfQp9CgppbnRlcmZhY2UgSUVSQzIwIHsKICAgIGZ1bmN0aW9uIHRvdGFsU3VwcGx5KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBiYWxhbmNlT2YoYWRkcmVzcyBhY2NvdW50KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CgogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50KTsKCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3Mgc3BlbmRlciwgdWludCBhbW91bnQpIGV4dGVybmFsIHJldHVybnMgKGJvb2wpOwoKICAgIGZ1bmN0aW9uIHRyYW5zZmVyRnJvbSgKICAgICAgICBhZGRyZXNzIHNlbmRlciwKICAgICAgICBhZGRyZXNzIHJlY2lwaWVudCwKICAgICAgICB1aW50IGFtb3VudAogICAgKSBleHRlcm5hbCByZXR1cm5zIChib29sKTsKCiAgICBldmVudCBUcmFuc2ZlcihhZGRyZXNzIGluZGV4ZWQgZnJvbSwgYWRkcmVzcyBpbmRleGVkIHRvLCB1aW50IGFtb3VudCk7CiAgICBldmVudCBBcHByb3ZhbChhZGRyZXNzIGluZGV4ZWQgb3duZXIsIGFkZHJlc3MgaW5kZXhlZCBzcGVuZGVyLCB1aW50IGFtb3VudCk7Cn0K",
  },
]

const html = `<p>Constant product AMM <code>XY = K</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CPAMM</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token0;
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token1;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> reserve0;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> reserve1;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token0, <span class="hljs-keyword">address</span> _token1</span>) </span>{
        token0 <span class="hljs-operator">=</span> IERC20(_token0);
        token1 <span class="hljs-operator">=</span> IERC20(_token1);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _from, <span class="hljs-keyword">uint</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_from] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_update</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _reserve0, <span class="hljs-keyword">uint</span> _reserve1</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        reserve0 <span class="hljs-operator">=</span> _reserve0;
        reserve1 <span class="hljs-operator">=</span> _reserve1;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _tokenIn, <span class="hljs-keyword">uint</span> _amountIn</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amountOut</span>) </span>{
        <span class="hljs-built_in">require</span>(
            _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token0) <span class="hljs-operator">|</span><span class="hljs-operator">|</span> _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token1),
            <span class="hljs-string">"invalid token"</span>
        );
        <span class="hljs-built_in">require</span>(_amountIn <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"amount in = 0"</span>);

        <span class="hljs-keyword">bool</span> isToken0 <span class="hljs-operator">=</span> _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token0);
        (IERC20 tokenIn, IERC20 tokenOut, <span class="hljs-keyword">uint</span> reserveIn, <span class="hljs-keyword">uint</span> reserveOut) <span class="hljs-operator">=</span> isToken0
            ? (token0, token1, reserve0, reserve1)
            : (token1, token0, reserve1, reserve0);

        tokenIn.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amountIn);

        <span class="hljs-comment">/*
        How much dy for dx?

        xy = k
        (x + dx)(y - dy) = k
        y - dy = k / (x + dx)
        y - k / (x + dx) = dy
        y - xy / (x + dx) = dy
        (yx + ydx - xy) / (x + dx) = dy
        ydx / (x + dx) = dy
        */</span>
        <span class="hljs-comment">// 0.3% fee</span>
        <span class="hljs-keyword">uint</span> amountInWithFee <span class="hljs-operator">=</span> (_amountIn <span class="hljs-operator">*</span> <span class="hljs-number">997</span>) <span class="hljs-operator">/</span> <span class="hljs-number">1000</span>;
        amountOut <span class="hljs-operator">=</span> (reserveOut <span class="hljs-operator">*</span> amountInWithFee) <span class="hljs-operator">/</span> (reserveIn <span class="hljs-operator">+</span> amountInWithFee);

        tokenOut.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountOut);

        _update(token0.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)), token1.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _amount0, <span class="hljs-keyword">uint</span> _amount1</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> shares</span>) </span>{
        token0.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount0);
        token1.transferFrom(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), _amount1);

        <span class="hljs-comment">/*
        How much dx, dy to add?

        xy = k
        (x + dx)(y + dy) = k&#x27;

        No price change, before and after adding liquidity
        x / y = (x + dx) / (y + dy)

        x(y + dy) = y(x + dx)
        x * dy = y * dx

        x / y = dx / dy
        dy = y / x * dx
        */</span>
        <span class="hljs-keyword">if</span> (reserve0 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span> <span class="hljs-operator">|</span><span class="hljs-operator">|</span> reserve1 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>) {
            <span class="hljs-built_in">require</span>(reserve0 <span class="hljs-operator">*</span> _amount1 <span class="hljs-operator">=</span><span class="hljs-operator">=</span> reserve1 <span class="hljs-operator">*</span> _amount0, <span class="hljs-string">"x / y != dx / dy"</span>);
        }

        <span class="hljs-comment">/*
        How much shares to mint?

        f(x, y) = value of liquidity
        We will define f(x, y) = sqrt(xy)

        L0 = f(x, y)
        L1 = f(x + dx, y + dy)
        T = total shares
        s = shares to mint

        Total shares should increase proportional to increase in liquidity
        L1 / L0 = (T + s) / T

        L1 * T = L0 * (T + s)

        (L1 - L0) * T / L0 = s 
        */</span>

        <span class="hljs-comment">/*
        Claim
        (L1 - L0) / L0 = dx / x = dy / y

        Proof
        --- Equation 1 ---
        (L1 - L0) / L0 = (sqrt((x + dx)(y + dy)) - sqrt(xy)) / sqrt(xy)
        
        dx / dy = x / y so replace dy = dx * y / x

        --- Equation 2 ---
        Equation 1 = (sqrt(xy + 2ydx + dx^2 * y / x) - sqrt(xy)) / sqrt(xy)

        Multiply by sqrt(x) / sqrt(x)
        Equation 2 = (sqrt(x^2y + 2xydx + dx^2 * y) - sqrt(x^2y)) / sqrt(x^2y)
                   = (sqrt(y)(sqrt(x^2 + 2xdx + dx^2) - sqrt(x^2)) / (sqrt(y)sqrt(x^2))
        
        sqrt(y) on top and bottom cancels out

        --- Equation 3 ---
        Equation 2 = (sqrt(x^2 + 2xdx + dx^2) - sqrt(x^2)) / (sqrt(x^2)
        = (sqrt((x + dx)^2) - sqrt(x^2)) / sqrt(x^2)  
        = ((x + dx) - x) / x
        = dx / x

        Since dx / dy = x / y,
        dx / x = dy / y

        Finally
        (L1 - L0) / L0 = dx / x = dy / y
        */</span>
        <span class="hljs-keyword">if</span> (totalSupply <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
            shares <span class="hljs-operator">=</span> _sqrt(_amount0 <span class="hljs-operator">*</span> _amount1);
        } <span class="hljs-keyword">else</span> {
            shares <span class="hljs-operator">=</span> _min(
                (_amount0 <span class="hljs-operator">*</span> totalSupply) <span class="hljs-operator">/</span> reserve0,
                (_amount1 <span class="hljs-operator">*</span> totalSupply) <span class="hljs-operator">/</span> reserve1
            );
        }
        <span class="hljs-built_in">require</span>(shares <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"shares = 0"</span>);
        _mint(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, shares);

        _update(token0.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)), token1.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params">
        <span class="hljs-keyword">uint</span> _shares
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> amount0, <span class="hljs-keyword">uint</span> amount1</span>) </span>{
        <span class="hljs-comment">/*
        Claim
        dx, dy = amount of liquidity to remove
        dx = s / T * x
        dy = s / T * y

        Proof
        Let&#x27;s find dx, dy such that
        v / L = s / T
        
        where
        v = f(dx, dy) = sqrt(dxdy)
        L = total liquidity = sqrt(xy)
        s = shares
        T = total supply

        --- Equation 1 ---
        v = s / T * L
        sqrt(dxdy) = s / T * sqrt(xy)

        Amount of liquidity to remove must not change price so 
        dx / dy = x / y

        replace dy = dx * y / x
        sqrt(dxdy) = sqrt(dx * dx * y / x) = dx * sqrt(y / x)

        Divide both sides of Equation 1 with sqrt(y / x)
        dx = s / T * sqrt(xy) / sqrt(y / x)
           = s / T * sqrt(x^2) = s / T * x

        Likewise
        dy = s / T * y
        */</span>

        <span class="hljs-comment">// bal0 &gt;= reserve0</span>
        <span class="hljs-comment">// bal1 &gt;= reserve1</span>
        <span class="hljs-keyword">uint</span> bal0 <span class="hljs-operator">=</span> token0.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">uint</span> bal1 <span class="hljs-operator">=</span> token1.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));

        amount0 <span class="hljs-operator">=</span> (_shares <span class="hljs-operator">*</span> bal0) <span class="hljs-operator">/</span> totalSupply;
        amount1 <span class="hljs-operator">=</span> (_shares <span class="hljs-operator">*</span> bal1) <span class="hljs-operator">/</span> totalSupply;
        <span class="hljs-built_in">require</span>(amount0 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span> <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> amount1 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"amount0 or amount1 = 0"</span>);

        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _shares);
        _update(bal0 <span class="hljs-operator">-</span> amount0, bal1 <span class="hljs-operator">-</span> amount1);

        token0.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount0);
        token1.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount1);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_sqrt</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span> z</span>) </span>{
        <span class="hljs-keyword">if</span> (y <span class="hljs-operator">&gt;</span> <span class="hljs-number">3</span>) {
            z <span class="hljs-operator">=</span> y;
            <span class="hljs-keyword">uint</span> x <span class="hljs-operator">=</span> y <span class="hljs-operator">/</span> <span class="hljs-number">2</span> <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
            <span class="hljs-keyword">while</span> (x <span class="hljs-operator">&lt;</span> z) {
                z <span class="hljs-operator">=</span> x;
                x <span class="hljs-operator">=</span> (y <span class="hljs-operator">/</span> x <span class="hljs-operator">+</span> x) <span class="hljs-operator">/</span> <span class="hljs-number">2</span>;
            }
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (y <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
            z <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_min</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> x, <span class="hljs-keyword">uint</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> y ? x : y;
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
