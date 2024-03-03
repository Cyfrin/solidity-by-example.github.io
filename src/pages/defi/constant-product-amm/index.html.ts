// metadata
export const version = "0.8.20"
export const title = "Constant Product AMM"
export const description = "Constant product AMM"

export const keywords = ["defi", "constant", "product", "amm"]

export const codes = [
  {
    fileName: "CPAMM.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IENQQU1NIHsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHRva2VuMDsKICAgIElFUkMyMCBwdWJsaWMgaW1tdXRhYmxlIHRva2VuMTsKCiAgICB1aW50MjU2IHB1YmxpYyByZXNlcnZlMDsKICAgIHVpbnQyNTYgcHVibGljIHJlc2VydmUxOwoKICAgIHVpbnQyNTYgcHVibGljIHRvdGFsU3VwcGx5OwogICAgbWFwcGluZyhhZGRyZXNzID0+IHVpbnQyNTYpIHB1YmxpYyBiYWxhbmNlT2Y7CgogICAgY29uc3RydWN0b3IoYWRkcmVzcyBfdG9rZW4wLCBhZGRyZXNzIF90b2tlbjEpIHsKICAgICAgICB0b2tlbjAgPSBJRVJDMjAoX3Rva2VuMCk7CiAgICAgICAgdG9rZW4xID0gSUVSQzIwKF90b2tlbjEpOwogICAgfQoKICAgIGZ1bmN0aW9uIF9taW50KGFkZHJlc3MgX3RvLCB1aW50MjU2IF9hbW91bnQpIHByaXZhdGUgewogICAgICAgIGJhbGFuY2VPZltfdG9dICs9IF9hbW91bnQ7CiAgICAgICAgdG90YWxTdXBwbHkgKz0gX2Ftb3VudDsKICAgIH0KCiAgICBmdW5jdGlvbiBfYnVybihhZGRyZXNzIF9mcm9tLCB1aW50MjU2IF9hbW91bnQpIHByaXZhdGUgewogICAgICAgIGJhbGFuY2VPZltfZnJvbV0gLT0gX2Ftb3VudDsKICAgICAgICB0b3RhbFN1cHBseSAtPSBfYW1vdW50OwogICAgfQoKICAgIGZ1bmN0aW9uIF91cGRhdGUodWludDI1NiBfcmVzZXJ2ZTAsIHVpbnQyNTYgX3Jlc2VydmUxKSBwcml2YXRlIHsKICAgICAgICByZXNlcnZlMCA9IF9yZXNlcnZlMDsKICAgICAgICByZXNlcnZlMSA9IF9yZXNlcnZlMTsKICAgIH0KCiAgICBmdW5jdGlvbiBzd2FwKGFkZHJlc3MgX3Rva2VuSW4sIHVpbnQyNTYgX2Ftb3VudEluKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgcmV0dXJucyAodWludDI1NiBhbW91bnRPdXQpCiAgICB7CiAgICAgICAgcmVxdWlyZSgKICAgICAgICAgICAgX3Rva2VuSW4gPT0gYWRkcmVzcyh0b2tlbjApIHx8IF90b2tlbkluID09IGFkZHJlc3ModG9rZW4xKSwKICAgICAgICAgICAgImludmFsaWQgdG9rZW4iCiAgICAgICAgKTsKICAgICAgICByZXF1aXJlKF9hbW91bnRJbiA+IDAsICJhbW91bnQgaW4gPSAwIik7CgogICAgICAgIGJvb2wgaXNUb2tlbjAgPSBfdG9rZW5JbiA9PSBhZGRyZXNzKHRva2VuMCk7CiAgICAgICAgKElFUkMyMCB0b2tlbkluLCBJRVJDMjAgdG9rZW5PdXQsIHVpbnQyNTYgcmVzZXJ2ZUluLCB1aW50MjU2IHJlc2VydmVPdXQpCiAgICAgICAgPSBpc1Rva2VuMAogICAgICAgICAgICA/ICh0b2tlbjAsIHRva2VuMSwgcmVzZXJ2ZTAsIHJlc2VydmUxKQogICAgICAgICAgICA6ICh0b2tlbjEsIHRva2VuMCwgcmVzZXJ2ZTEsIHJlc2VydmUwKTsKCiAgICAgICAgdG9rZW5Jbi50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgX2Ftb3VudEluKTsKCiAgICAgICAgLyoKICAgICAgICBIb3cgbXVjaCBkeSBmb3IgZHg/CgogICAgICAgIHh5ID0gawogICAgICAgICh4ICsgZHgpKHkgLSBkeSkgPSBrCiAgICAgICAgeSAtIGR5ID0gayAvICh4ICsgZHgpCiAgICAgICAgeSAtIGsgLyAoeCArIGR4KSA9IGR5CiAgICAgICAgeSAtIHh5IC8gKHggKyBkeCkgPSBkeQogICAgICAgICh5eCArIHlkeCAtIHh5KSAvICh4ICsgZHgpID0gZHkKICAgICAgICB5ZHggLyAoeCArIGR4KSA9IGR5CiAgICAgICAgKi8KICAgICAgICAvLyAwLjMlIGZlZQogICAgICAgIHVpbnQyNTYgYW1vdW50SW5XaXRoRmVlID0gKF9hbW91bnRJbiAqIDk5NykgLyAxMDAwOwogICAgICAgIGFtb3VudE91dCA9CiAgICAgICAgICAgIChyZXNlcnZlT3V0ICogYW1vdW50SW5XaXRoRmVlKSAvIChyZXNlcnZlSW4gKyBhbW91bnRJbldpdGhGZWUpOwoKICAgICAgICB0b2tlbk91dC50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnRPdXQpOwoKICAgICAgICBfdXBkYXRlKAogICAgICAgICAgICB0b2tlbjAuYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpLCB0b2tlbjEuYmFsYW5jZU9mKGFkZHJlc3ModGhpcykpCiAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiBhZGRMaXF1aWRpdHkodWludDI1NiBfYW1vdW50MCwgdWludDI1NiBfYW1vdW50MSkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKHVpbnQyNTYgc2hhcmVzKQogICAgewogICAgICAgIHRva2VuMC50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgX2Ftb3VudDApOwogICAgICAgIHRva2VuMS50cmFuc2ZlckZyb20obXNnLnNlbmRlciwgYWRkcmVzcyh0aGlzKSwgX2Ftb3VudDEpOwoKICAgICAgICAvKgogICAgICAgIEhvdyBtdWNoIGR4LCBkeSB0byBhZGQ/CgogICAgICAgIHh5ID0gawogICAgICAgICh4ICsgZHgpKHkgKyBkeSkgPSBrJwoKICAgICAgICBObyBwcmljZSBjaGFuZ2UsIGJlZm9yZSBhbmQgYWZ0ZXIgYWRkaW5nIGxpcXVpZGl0eQogICAgICAgIHggLyB5ID0gKHggKyBkeCkgLyAoeSArIGR5KQoKICAgICAgICB4KHkgKyBkeSkgPSB5KHggKyBkeCkKICAgICAgICB4ICogZHkgPSB5ICogZHgKCiAgICAgICAgeCAvIHkgPSBkeCAvIGR5CiAgICAgICAgZHkgPSB5IC8geCAqIGR4CiAgICAgICAgKi8KICAgICAgICBpZiAocmVzZXJ2ZTAgPiAwIHx8IHJlc2VydmUxID4gMCkgewogICAgICAgICAgICByZXF1aXJlKAogICAgICAgICAgICAgICAgcmVzZXJ2ZTAgKiBfYW1vdW50MSA9PSByZXNlcnZlMSAqIF9hbW91bnQwLCAieCAvIHkgIT0gZHggLyBkeSIKICAgICAgICAgICAgKTsKICAgICAgICB9CgogICAgICAgIC8qCiAgICAgICAgSG93IG11Y2ggc2hhcmVzIHRvIG1pbnQ/CgogICAgICAgIGYoeCwgeSkgPSB2YWx1ZSBvZiBsaXF1aWRpdHkKICAgICAgICBXZSB3aWxsIGRlZmluZSBmKHgsIHkpID0gc3FydCh4eSkKCiAgICAgICAgTDAgPSBmKHgsIHkpCiAgICAgICAgTDEgPSBmKHggKyBkeCwgeSArIGR5KQogICAgICAgIFQgPSB0b3RhbCBzaGFyZXMKICAgICAgICBzID0gc2hhcmVzIHRvIG1pbnQKCiAgICAgICAgVG90YWwgc2hhcmVzIHNob3VsZCBpbmNyZWFzZSBwcm9wb3J0aW9uYWwgdG8gaW5jcmVhc2UgaW4gbGlxdWlkaXR5CiAgICAgICAgTDEgLyBMMCA9IChUICsgcykgLyBUCgogICAgICAgIEwxICogVCA9IEwwICogKFQgKyBzKQoKICAgICAgICAoTDEgLSBMMCkgKiBUIC8gTDAgPSBzIAogICAgICAgICovCgogICAgICAgIC8qCiAgICAgICAgQ2xhaW0KICAgICAgICAoTDEgLSBMMCkgLyBMMCA9IGR4IC8geCA9IGR5IC8geQoKICAgICAgICBQcm9vZgogICAgICAgIC0tLSBFcXVhdGlvbiAxIC0tLQogICAgICAgIChMMSAtIEwwKSAvIEwwID0gKHNxcnQoKHggKyBkeCkoeSArIGR5KSkgLSBzcXJ0KHh5KSkgLyBzcXJ0KHh5KQogICAgICAgIAogICAgICAgIGR4IC8gZHkgPSB4IC8geSBzbyByZXBsYWNlIGR5ID0gZHggKiB5IC8geAoKICAgICAgICAtLS0gRXF1YXRpb24gMiAtLS0KICAgICAgICBFcXVhdGlvbiAxID0gKHNxcnQoeHkgKyAyeWR4ICsgZHheMiAqIHkgLyB4KSAtIHNxcnQoeHkpKSAvIHNxcnQoeHkpCgogICAgICAgIE11bHRpcGx5IGJ5IHNxcnQoeCkgLyBzcXJ0KHgpCiAgICAgICAgRXF1YXRpb24gMiA9IChzcXJ0KHheMnkgKyAyeHlkeCArIGR4XjIgKiB5KSAtIHNxcnQoeF4yeSkpIC8gc3FydCh4XjJ5KQogICAgICAgICAgICAgICAgICAgPSAoc3FydCh5KShzcXJ0KHheMiArIDJ4ZHggKyBkeF4yKSAtIHNxcnQoeF4yKSkgLyAoc3FydCh5KXNxcnQoeF4yKSkKICAgICAgICAKICAgICAgICBzcXJ0KHkpIG9uIHRvcCBhbmQgYm90dG9tIGNhbmNlbHMgb3V0CgogICAgICAgIC0tLSBFcXVhdGlvbiAzIC0tLQogICAgICAgIEVxdWF0aW9uIDIgPSAoc3FydCh4XjIgKyAyeGR4ICsgZHheMikgLSBzcXJ0KHheMikpIC8gKHNxcnQoeF4yKQogICAgICAgID0gKHNxcnQoKHggKyBkeCleMikgLSBzcXJ0KHheMikpIC8gc3FydCh4XjIpICAKICAgICAgICA9ICgoeCArIGR4KSAtIHgpIC8geAogICAgICAgID0gZHggLyB4CgogICAgICAgIFNpbmNlIGR4IC8gZHkgPSB4IC8geSwKICAgICAgICBkeCAvIHggPSBkeSAvIHkKCiAgICAgICAgRmluYWxseQogICAgICAgIChMMSAtIEwwKSAvIEwwID0gZHggLyB4ID0gZHkgLyB5CiAgICAgICAgKi8KICAgICAgICBpZiAodG90YWxTdXBwbHkgPT0gMCkgewogICAgICAgICAgICBzaGFyZXMgPSBfc3FydChfYW1vdW50MCAqIF9hbW91bnQxKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBzaGFyZXMgPSBfbWluKAogICAgICAgICAgICAgICAgKF9hbW91bnQwICogdG90YWxTdXBwbHkpIC8gcmVzZXJ2ZTAsCiAgICAgICAgICAgICAgICAoX2Ftb3VudDEgKiB0b3RhbFN1cHBseSkgLyByZXNlcnZlMQogICAgICAgICAgICApOwogICAgICAgIH0KICAgICAgICByZXF1aXJlKHNoYXJlcyA+IDAsICJzaGFyZXMgPSAwIik7CiAgICAgICAgX21pbnQobXNnLnNlbmRlciwgc2hhcmVzKTsKCiAgICAgICAgX3VwZGF0ZSgKICAgICAgICAgICAgdG9rZW4wLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKSwgdG9rZW4xLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKQogICAgICAgICk7CiAgICB9CgogICAgZnVuY3Rpb24gcmVtb3ZlTGlxdWlkaXR5KHVpbnQyNTYgX3NoYXJlcykKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYW1vdW50MCwgdWludDI1NiBhbW91bnQxKQogICAgewogICAgICAgIC8qCiAgICAgICAgQ2xhaW0KICAgICAgICBkeCwgZHkgPSBhbW91bnQgb2YgbGlxdWlkaXR5IHRvIHJlbW92ZQogICAgICAgIGR4ID0gcyAvIFQgKiB4CiAgICAgICAgZHkgPSBzIC8gVCAqIHkKCiAgICAgICAgUHJvb2YKICAgICAgICBMZXQncyBmaW5kIGR4LCBkeSBzdWNoIHRoYXQKICAgICAgICB2IC8gTCA9IHMgLyBUCiAgICAgICAgCiAgICAgICAgd2hlcmUKICAgICAgICB2ID0gZihkeCwgZHkpID0gc3FydChkeGR5KQogICAgICAgIEwgPSB0b3RhbCBsaXF1aWRpdHkgPSBzcXJ0KHh5KQogICAgICAgIHMgPSBzaGFyZXMKICAgICAgICBUID0gdG90YWwgc3VwcGx5CgogICAgICAgIC0tLSBFcXVhdGlvbiAxIC0tLQogICAgICAgIHYgPSBzIC8gVCAqIEwKICAgICAgICBzcXJ0KGR4ZHkpID0gcyAvIFQgKiBzcXJ0KHh5KQoKICAgICAgICBBbW91bnQgb2YgbGlxdWlkaXR5IHRvIHJlbW92ZSBtdXN0IG5vdCBjaGFuZ2UgcHJpY2Ugc28gCiAgICAgICAgZHggLyBkeSA9IHggLyB5CgogICAgICAgIHJlcGxhY2UgZHkgPSBkeCAqIHkgLyB4CiAgICAgICAgc3FydChkeGR5KSA9IHNxcnQoZHggKiBkeCAqIHkgLyB4KSA9IGR4ICogc3FydCh5IC8geCkKCiAgICAgICAgRGl2aWRlIGJvdGggc2lkZXMgb2YgRXF1YXRpb24gMSB3aXRoIHNxcnQoeSAvIHgpCiAgICAgICAgZHggPSBzIC8gVCAqIHNxcnQoeHkpIC8gc3FydCh5IC8geCkKICAgICAgICAgICA9IHMgLyBUICogc3FydCh4XjIpID0gcyAvIFQgKiB4CgogICAgICAgIExpa2V3aXNlCiAgICAgICAgZHkgPSBzIC8gVCAqIHkKICAgICAgICAqLwoKICAgICAgICAvLyBiYWwwID49IHJlc2VydmUwCiAgICAgICAgLy8gYmFsMSA+PSByZXNlcnZlMQogICAgICAgIHVpbnQyNTYgYmFsMCA9IHRva2VuMC5iYWxhbmNlT2YoYWRkcmVzcyh0aGlzKSk7CiAgICAgICAgdWludDI1NiBiYWwxID0gdG9rZW4xLmJhbGFuY2VPZihhZGRyZXNzKHRoaXMpKTsKCiAgICAgICAgYW1vdW50MCA9IChfc2hhcmVzICogYmFsMCkgLyB0b3RhbFN1cHBseTsKICAgICAgICBhbW91bnQxID0gKF9zaGFyZXMgKiBiYWwxKSAvIHRvdGFsU3VwcGx5OwogICAgICAgIHJlcXVpcmUoYW1vdW50MCA+IDAgJiYgYW1vdW50MSA+IDAsICJhbW91bnQwIG9yIGFtb3VudDEgPSAwIik7CgogICAgICAgIF9idXJuKG1zZy5zZW5kZXIsIF9zaGFyZXMpOwogICAgICAgIF91cGRhdGUoYmFsMCAtIGFtb3VudDAsIGJhbDEgLSBhbW91bnQxKTsKCiAgICAgICAgdG9rZW4wLnRyYW5zZmVyKG1zZy5zZW5kZXIsIGFtb3VudDApOwogICAgICAgIHRva2VuMS50cmFuc2Zlcihtc2cuc2VuZGVyLCBhbW91bnQxKTsKICAgIH0KCiAgICBmdW5jdGlvbiBfc3FydCh1aW50MjU2IHkpIHByaXZhdGUgcHVyZSByZXR1cm5zICh1aW50MjU2IHopIHsKICAgICAgICBpZiAoeSA+IDMpIHsKICAgICAgICAgICAgeiA9IHk7CiAgICAgICAgICAgIHVpbnQyNTYgeCA9IHkgLyAyICsgMTsKICAgICAgICAgICAgd2hpbGUgKHggPCB6KSB7CiAgICAgICAgICAgICAgICB6ID0geDsKICAgICAgICAgICAgICAgIHggPSAoeSAvIHggKyB4KSAvIDI7CiAgICAgICAgICAgIH0KICAgICAgICB9IGVsc2UgaWYgKHkgIT0gMCkgewogICAgICAgICAgICB6ID0gMTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gX21pbih1aW50MjU2IHgsIHVpbnQyNTYgeSkgcHJpdmF0ZSBwdXJlIHJldHVybnMgKHVpbnQyNTYpIHsKICAgICAgICByZXR1cm4geCA8PSB5ID8geCA6IHk7CiAgICB9Cn0KCmludGVyZmFjZSBJRVJDMjAgewogICAgZnVuY3Rpb24gdG90YWxTdXBwbHkoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYpOwogICAgZnVuY3Rpb24gYmFsYW5jZU9mKGFkZHJlc3MgYWNjb3VudCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIHRyYW5zZmVyKGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwogICAgZnVuY3Rpb24gYWxsb3dhbmNlKGFkZHJlc3Mgb3duZXIsIGFkZHJlc3Mgc3BlbmRlcikKICAgICAgICBleHRlcm5hbAogICAgICAgIHZpZXcKICAgICAgICByZXR1cm5zICh1aW50MjU2KTsKICAgIGZ1bmN0aW9uIGFwcHJvdmUoYWRkcmVzcyBzcGVuZGVyLCB1aW50MjU2IGFtb3VudCkgZXh0ZXJuYWwgcmV0dXJucyAoYm9vbCk7CiAgICBmdW5jdGlvbiB0cmFuc2ZlckZyb20oYWRkcmVzcyBzZW5kZXIsIGFkZHJlc3MgcmVjaXBpZW50LCB1aW50MjU2IGFtb3VudCkKICAgICAgICBleHRlcm5hbAogICAgICAgIHJldHVybnMgKGJvb2wpOwp9Cg==",
  },
]

const html = `<p>Constant product AMM <code>XY = K</code></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CPAMM</span> </span>{
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token0;
    IERC20 <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> token1;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> reserve0;
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> reserve1;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> totalSupply;
    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span>) <span class="hljs-keyword">public</span> balanceOf;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _token0, <span class="hljs-keyword">address</span> _token1</span>) </span>{
        token0 <span class="hljs-operator">=</span> IERC20(_token0);
        token1 <span class="hljs-operator">=</span> IERC20(_token1);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_mint</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _to, <span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_to] <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">+</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_burn</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _from, <span class="hljs-keyword">uint256</span> _amount</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        balanceOf[_from] <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
        totalSupply <span class="hljs-operator">-</span><span class="hljs-operator">=</span> _amount;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_update</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _reserve0, <span class="hljs-keyword">uint256</span> _reserve1</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        reserve0 <span class="hljs-operator">=</span> _reserve0;
        reserve1 <span class="hljs-operator">=</span> _reserve1;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">swap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _tokenIn, <span class="hljs-keyword">uint256</span> _amountIn</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)
    </span>{
        <span class="hljs-built_in">require</span>(
            _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token0) <span class="hljs-operator">|</span><span class="hljs-operator">|</span> _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token1),
            <span class="hljs-string">"invalid token"</span>
        );
        <span class="hljs-built_in">require</span>(_amountIn <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"amount in = 0"</span>);

        <span class="hljs-keyword">bool</span> isToken0 <span class="hljs-operator">=</span> _tokenIn <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(token0);
        (IERC20 tokenIn, IERC20 tokenOut, <span class="hljs-keyword">uint256</span> reserveIn, <span class="hljs-keyword">uint256</span> reserveOut)
        <span class="hljs-operator">=</span> isToken0
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
        <span class="hljs-keyword">uint256</span> amountInWithFee <span class="hljs-operator">=</span> (_amountIn <span class="hljs-operator">*</span> <span class="hljs-number">997</span>) <span class="hljs-operator">/</span> <span class="hljs-number">1000</span>;
        amountOut <span class="hljs-operator">=</span>
            (reserveOut <span class="hljs-operator">*</span> amountInWithFee) <span class="hljs-operator">/</span> (reserveIn <span class="hljs-operator">+</span> amountInWithFee);

        tokenOut.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amountOut);

        _update(
            token0.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)), token1.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>))
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _amount0, <span class="hljs-keyword">uint256</span> _amount1</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> shares</span>)
    </span>{
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
            <span class="hljs-built_in">require</span>(
                reserve0 <span class="hljs-operator">*</span> _amount1 <span class="hljs-operator">=</span><span class="hljs-operator">=</span> reserve1 <span class="hljs-operator">*</span> _amount0, <span class="hljs-string">"x / y != dx / dy"</span>
            );
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

        _update(
            token0.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>)), token1.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>))
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _shares</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1</span>)
    </span>{
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
        <span class="hljs-keyword">uint256</span> bal0 <span class="hljs-operator">=</span> token0.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));
        <span class="hljs-keyword">uint256</span> bal1 <span class="hljs-operator">=</span> token1.balanceOf(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>));

        amount0 <span class="hljs-operator">=</span> (_shares <span class="hljs-operator">*</span> bal0) <span class="hljs-operator">/</span> totalSupply;
        amount1 <span class="hljs-operator">=</span> (_shares <span class="hljs-operator">*</span> bal1) <span class="hljs-operator">/</span> totalSupply;
        <span class="hljs-built_in">require</span>(amount0 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span> <span class="hljs-operator">&amp;</span><span class="hljs-operator">&amp;</span> amount1 <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"amount0 or amount1 = 0"</span>);

        _burn(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, _shares);
        _update(bal0 <span class="hljs-operator">-</span> amount0, bal1 <span class="hljs-operator">-</span> amount1);

        token0.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount0);
        token1.<span class="hljs-built_in">transfer</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>, amount1);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_sqrt</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> z</span>) </span>{
        <span class="hljs-keyword">if</span> (y <span class="hljs-operator">&gt;</span> <span class="hljs-number">3</span>) {
            z <span class="hljs-operator">=</span> y;
            <span class="hljs-keyword">uint256</span> x <span class="hljs-operator">=</span> y <span class="hljs-operator">/</span> <span class="hljs-number">2</span> <span class="hljs-operator">+</span> <span class="hljs-number">1</span>;
            <span class="hljs-keyword">while</span> (x <span class="hljs-operator">&lt;</span> z) {
                z <span class="hljs-operator">=</span> x;
                x <span class="hljs-operator">=</span> (y <span class="hljs-operator">/</span> x <span class="hljs-operator">+</span> x) <span class="hljs-operator">/</span> <span class="hljs-number">2</span>;
            }
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (y <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-number">0</span>) {
            z <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_min</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> x, <span class="hljs-keyword">uint256</span> y</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span></span>) </span>{
        <span class="hljs-keyword">return</span> x <span class="hljs-operator">&lt;</span><span class="hljs-operator">=</span> y ? x : y;
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
