// metadata
export const version = "0.8.20"
export const title = "Upgradeable Proxy"
export const description = "Example of upgradeable proxy"

export const keywords = ["app", "application", "delegatecall", "upgradeable", "proxy"]

export const codes = [
  {
    fileName: "UpgradeableProxy.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCi8vIFRyYW5zcGFyZW50IHVwZ3JhZGVhYmxlIHByb3h5IHBhdHRlcm4KCmNvbnRyYWN0IENvdW50ZXJWMSB7CiAgICB1aW50IHB1YmxpYyBjb3VudDsKCiAgICBmdW5jdGlvbiBpbmMoKSBleHRlcm5hbCB7CiAgICAgICAgY291bnQgKz0gMTsKICAgIH0KfQoKY29udHJhY3QgQ291bnRlclYyIHsKICAgIHVpbnQgcHVibGljIGNvdW50OwoKICAgIGZ1bmN0aW9uIGluYygpIGV4dGVybmFsIHsKICAgICAgICBjb3VudCArPSAxOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlYygpIGV4dGVybmFsIHsKICAgICAgICBjb3VudCAtPSAxOwogICAgfQp9Cgpjb250cmFjdCBCdWdneVByb3h5IHsKICAgIGFkZHJlc3MgcHVibGljIGltcGxlbWVudGF0aW9uOwogICAgYWRkcmVzcyBwdWJsaWMgYWRtaW47CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgYWRtaW4gPSBtc2cuc2VuZGVyOwogICAgfQoKICAgIGZ1bmN0aW9uIF9kZWxlZ2F0ZSgpIHByaXZhdGUgewogICAgICAgIChib29sIG9rLCApID0gaW1wbGVtZW50YXRpb24uZGVsZWdhdGVjYWxsKG1zZy5kYXRhKTsKICAgICAgICByZXF1aXJlKG9rLCAiZGVsZWdhdGVjYWxsIGZhaWxlZCIpOwogICAgfQoKICAgIGZhbGxiYWNrKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgX2RlbGVnYXRlKCk7CiAgICB9CgogICAgcmVjZWl2ZSgpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIF9kZWxlZ2F0ZSgpOwogICAgfQoKICAgIGZ1bmN0aW9uIHVwZ3JhZGVUbyhhZGRyZXNzIF9pbXBsZW1lbnRhdGlvbikgZXh0ZXJuYWwgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBhZG1pbiwgIm5vdCBhdXRob3JpemVkIik7CiAgICAgICAgaW1wbGVtZW50YXRpb24gPSBfaW1wbGVtZW50YXRpb247CiAgICB9Cn0KCmNvbnRyYWN0IERldiB7CiAgICBmdW5jdGlvbiBzZWxlY3RvcnMoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGJ5dGVzNCwgYnl0ZXM0LCBieXRlczQpIHsKICAgICAgICByZXR1cm4gKAogICAgICAgICAgICBQcm94eS5hZG1pbi5zZWxlY3RvciwKICAgICAgICAgICAgUHJveHkuaW1wbGVtZW50YXRpb24uc2VsZWN0b3IsCiAgICAgICAgICAgIFByb3h5LnVwZ3JhZGVUby5zZWxlY3RvcgogICAgICAgICk7CiAgICB9Cn0KCmNvbnRyYWN0IFByb3h5IHsKICAgIC8vIEFsbCBmdW5jdGlvbnMgLyB2YXJpYWJsZXMgc2hvdWxkIGJlIHByaXZhdGUsIGZvcndhcmQgYWxsIGNhbGxzIHRvIGZhbGxiYWNrCgogICAgLy8gLTEgZm9yIHVua25vd24gcHJlaW1hZ2UKICAgIC8vIDB4MzYwODk0YTEzYmExYTMyMTA2NjdjODI4NDkyZGI5OGRjYTNlMjA3NmNjMzczNWE5MjBhM2NhNTA1ZDM4MmJiYwogICAgYnl0ZXMzMiBwcml2YXRlIGNvbnN0YW50IElNUExFTUVOVEFUSU9OX1NMT1QgPQogICAgICAgIGJ5dGVzMzIodWludChrZWNjYWsyNTYoImVpcDE5NjcucHJveHkuaW1wbGVtZW50YXRpb24iKSkgLSAxKTsKICAgIC8vIDB4YjUzMTI3Njg0YTU2OGIzMTczYWUxM2I5ZjhhNjAxNmUyNDNlNjNiNmU4ZWUxMTc4ZDZhNzE3ODUwYjVkNjEwMwogICAgYnl0ZXMzMiBwcml2YXRlIGNvbnN0YW50IEFETUlOX1NMT1QgPQogICAgICAgIGJ5dGVzMzIodWludChrZWNjYWsyNTYoImVpcDE5NjcucHJveHkuYWRtaW4iKSkgLSAxKTsKCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgICBfc2V0QWRtaW4obXNnLnNlbmRlcik7CiAgICB9CgogICAgbW9kaWZpZXIgaWZBZG1pbigpIHsKICAgICAgICBpZiAobXNnLnNlbmRlciA9PSBfZ2V0QWRtaW4oKSkgewogICAgICAgICAgICBfOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIF9mYWxsYmFjaygpOwogICAgICAgIH0KICAgIH0KCiAgICBmdW5jdGlvbiBfZ2V0QWRtaW4oKSBwcml2YXRlIHZpZXcgcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJldHVybiBTdG9yYWdlU2xvdC5nZXRBZGRyZXNzU2xvdChBRE1JTl9TTE9UKS52YWx1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiBfc2V0QWRtaW4oYWRkcmVzcyBfYWRtaW4pIHByaXZhdGUgewogICAgICAgIHJlcXVpcmUoX2FkbWluICE9IGFkZHJlc3MoMCksICJhZG1pbiA9IHplcm8gYWRkcmVzcyIpOwogICAgICAgIFN0b3JhZ2VTbG90LmdldEFkZHJlc3NTbG90KEFETUlOX1NMT1QpLnZhbHVlID0gX2FkbWluOwogICAgfQoKICAgIGZ1bmN0aW9uIF9nZXRJbXBsZW1lbnRhdGlvbigpIHByaXZhdGUgdmlldyByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgcmV0dXJuIFN0b3JhZ2VTbG90LmdldEFkZHJlc3NTbG90KElNUExFTUVOVEFUSU9OX1NMT1QpLnZhbHVlOwogICAgfQoKICAgIGZ1bmN0aW9uIF9zZXRJbXBsZW1lbnRhdGlvbihhZGRyZXNzIF9pbXBsZW1lbnRhdGlvbikgcHJpdmF0ZSB7CiAgICAgICAgcmVxdWlyZShfaW1wbGVtZW50YXRpb24uY29kZS5sZW5ndGggPiAwLCAiaW1wbGVtZW50YXRpb24gaXMgbm90IGNvbnRyYWN0Iik7CiAgICAgICAgU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3QoSU1QTEVNRU5UQVRJT05fU0xPVCkudmFsdWUgPSBfaW1wbGVtZW50YXRpb247CiAgICB9CgogICAgLy8gQWRtaW4gaW50ZXJmYWNlIC8vCiAgICBmdW5jdGlvbiBjaGFuZ2VBZG1pbihhZGRyZXNzIF9hZG1pbikgZXh0ZXJuYWwgaWZBZG1pbiB7CiAgICAgICAgX3NldEFkbWluKF9hZG1pbik7CiAgICB9CgogICAgLy8gMHgzNjU5Y2ZlNgogICAgZnVuY3Rpb24gdXBncmFkZVRvKGFkZHJlc3MgX2ltcGxlbWVudGF0aW9uKSBleHRlcm5hbCBpZkFkbWluIHsKICAgICAgICBfc2V0SW1wbGVtZW50YXRpb24oX2ltcGxlbWVudGF0aW9uKTsKICAgIH0KCiAgICAvLyAweGY4NTFhNDQwCiAgICBmdW5jdGlvbiBhZG1pbigpIGV4dGVybmFsIGlmQWRtaW4gcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJldHVybiBfZ2V0QWRtaW4oKTsKICAgIH0KCiAgICAvLyAweDVjNjBkYTFiCiAgICBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbigpIGV4dGVybmFsIGlmQWRtaW4gcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJldHVybiBfZ2V0SW1wbGVtZW50YXRpb24oKTsKICAgIH0KCiAgICAvLyBVc2VyIGludGVyZmFjZSAvLwogICAgZnVuY3Rpb24gX2RlbGVnYXRlKGFkZHJlc3MgX2ltcGxlbWVudGF0aW9uKSBpbnRlcm5hbCB2aXJ0dWFsIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIENvcHkgbXNnLmRhdGEuIFdlIHRha2UgZnVsbCBjb250cm9sIG9mIG1lbW9yeSBpbiB0aGlzIGlubGluZSBhc3NlbWJseQogICAgICAgICAgICAvLyBibG9jayBiZWNhdXNlIGl0IHdpbGwgbm90IHJldHVybiB0byBTb2xpZGl0eSBjb2RlLiBXZSBvdmVyd3JpdGUgdGhlCiAgICAgICAgICAgIC8vIFNvbGlkaXR5IHNjcmF0Y2ggcGFkIGF0IG1lbW9yeSBwb3NpdGlvbiAwLgoKICAgICAgICAgICAgLy8gY2FsbGRhdGFjb3B5KHQsIGYsIHMpIC0gY29weSBzIGJ5dGVzIGZyb20gY2FsbGRhdGEgYXQgcG9zaXRpb24gZiB0byBtZW0gYXQgcG9zaXRpb24gdAogICAgICAgICAgICAvLyBjYWxsZGF0YXNpemUoKSAtIHNpemUgb2YgY2FsbCBkYXRhIGluIGJ5dGVzCiAgICAgICAgICAgIGNhbGxkYXRhY29weSgwLCAwLCBjYWxsZGF0YXNpemUoKSkKCiAgICAgICAgICAgIC8vIENhbGwgdGhlIGltcGxlbWVudGF0aW9uLgogICAgICAgICAgICAvLyBvdXQgYW5kIG91dHNpemUgYXJlIDAgYmVjYXVzZSB3ZSBkb24ndCBrbm93IHRoZSBzaXplIHlldC4KCiAgICAgICAgICAgIC8vIGRlbGVnYXRlY2FsbChnLCBhLCBpbiwgaW5zaXplLCBvdXQsIG91dHNpemUpIC0KICAgICAgICAgICAgLy8gLSBjYWxsIGNvbnRyYWN0IGF0IGFkZHJlc3MgYQogICAgICAgICAgICAvLyAtIHdpdGggaW5wdXQgbWVtW2lu4oCmKGluK2luc2l6ZSkpCiAgICAgICAgICAgIC8vIC0gcHJvdmlkaW5nIGcgZ2FzCiAgICAgICAgICAgIC8vIC0gYW5kIG91dHB1dCBhcmVhIG1lbVtvdXTigKYob3V0K291dHNpemUpKQogICAgICAgICAgICAvLyAtIHJldHVybmluZyAwIG9uIGVycm9yIChlZy4gb3V0IG9mIGdhcykgYW5kIDEgb24gc3VjY2VzcwogICAgICAgICAgICBsZXQgcmVzdWx0IDo9IGRlbGVnYXRlY2FsbChnYXMoKSwgX2ltcGxlbWVudGF0aW9uLCAwLCBjYWxsZGF0YXNpemUoKSwgMCwgMCkKCiAgICAgICAgICAgIC8vIENvcHkgdGhlIHJldHVybmVkIGRhdGEuCiAgICAgICAgICAgIC8vIHJldHVybmRhdGFjb3B5KHQsIGYsIHMpIC0gY29weSBzIGJ5dGVzIGZyb20gcmV0dXJuZGF0YSBhdCBwb3NpdGlvbiBmIHRvIG1lbSBhdCBwb3NpdGlvbiB0CiAgICAgICAgICAgIC8vIHJldHVybmRhdGFzaXplKCkgLSBzaXplIG9mIHRoZSBsYXN0IHJldHVybmRhdGEKICAgICAgICAgICAgcmV0dXJuZGF0YWNvcHkoMCwgMCwgcmV0dXJuZGF0YXNpemUoKSkKCiAgICAgICAgICAgIHN3aXRjaCByZXN1bHQKICAgICAgICAgICAgLy8gZGVsZWdhdGVjYWxsIHJldHVybnMgMCBvbiBlcnJvci4KICAgICAgICAgICAgY2FzZSAwIHsKICAgICAgICAgICAgICAgIC8vIHJldmVydChwLCBzKSAtIGVuZCBleGVjdXRpb24sIHJldmVydCBzdGF0ZSBjaGFuZ2VzLCByZXR1cm4gZGF0YSBtZW1bcOKApihwK3MpKQogICAgICAgICAgICAgICAgcmV2ZXJ0KDAsIHJldHVybmRhdGFzaXplKCkpCiAgICAgICAgICAgIH0KICAgICAgICAgICAgZGVmYXVsdCB7CiAgICAgICAgICAgICAgICAvLyByZXR1cm4ocCwgcykgLSBlbmQgZXhlY3V0aW9uLCByZXR1cm4gZGF0YSBtZW1bcOKApihwK3MpKQogICAgICAgICAgICAgICAgcmV0dXJuKDAsIHJldHVybmRhdGFzaXplKCkpCiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gX2ZhbGxiYWNrKCkgcHJpdmF0ZSB7CiAgICAgICAgX2RlbGVnYXRlKF9nZXRJbXBsZW1lbnRhdGlvbigpKTsKICAgIH0KCiAgICBmYWxsYmFjaygpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIF9mYWxsYmFjaygpOwogICAgfQoKICAgIHJlY2VpdmUoKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBfZmFsbGJhY2soKTsKICAgIH0KfQoKY29udHJhY3QgUHJveHlBZG1pbiB7CiAgICBhZGRyZXNzIHB1YmxpYyBvd25lcjsKCiAgICBjb25zdHJ1Y3RvcigpIHsKICAgICAgICBvd25lciA9IG1zZy5zZW5kZXI7CiAgICB9CgogICAgbW9kaWZpZXIgb25seU93bmVyKCkgewogICAgICAgIHJlcXVpcmUobXNnLnNlbmRlciA9PSBvd25lciwgIm5vdCBvd25lciIpOwogICAgICAgIF87CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0UHJveHlBZG1pbihhZGRyZXNzIHByb3h5KSBleHRlcm5hbCB2aWV3IHJldHVybnMgKGFkZHJlc3MpIHsKICAgICAgICAoYm9vbCBvaywgYnl0ZXMgbWVtb3J5IHJlcykgPSBwcm94eS5zdGF0aWNjYWxsKGFiaS5lbmNvZGVDYWxsKFByb3h5LmFkbWluLCAoKSkpOwogICAgICAgIHJlcXVpcmUob2ssICJjYWxsIGZhaWxlZCIpOwogICAgICAgIHJldHVybiBhYmkuZGVjb2RlKHJlcywgKGFkZHJlc3MpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRQcm94eUltcGxlbWVudGF0aW9uKGFkZHJlc3MgcHJveHkpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIChib29sIG9rLCBieXRlcyBtZW1vcnkgcmVzKSA9IHByb3h5LnN0YXRpY2NhbGwoCiAgICAgICAgICAgIGFiaS5lbmNvZGVDYWxsKFByb3h5LmltcGxlbWVudGF0aW9uLCAoKSkKICAgICAgICApOwogICAgICAgIHJlcXVpcmUob2ssICJjYWxsIGZhaWxlZCIpOwogICAgICAgIHJldHVybiBhYmkuZGVjb2RlKHJlcywgKGFkZHJlc3MpKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjaGFuZ2VQcm94eUFkbWluKGFkZHJlc3MgcGF5YWJsZSBwcm94eSwgYWRkcmVzcyBhZG1pbikgZXh0ZXJuYWwgb25seU93bmVyIHsKICAgICAgICBQcm94eShwcm94eSkuY2hhbmdlQWRtaW4oYWRtaW4pOwogICAgfQoKICAgIGZ1bmN0aW9uIHVwZ3JhZGUoYWRkcmVzcyBwYXlhYmxlIHByb3h5LCBhZGRyZXNzIGltcGxlbWVudGF0aW9uKSBleHRlcm5hbCBvbmx5T3duZXIgewogICAgICAgIFByb3h5KHByb3h5KS51cGdyYWRlVG8oaW1wbGVtZW50YXRpb24pOwogICAgfQp9CgpsaWJyYXJ5IFN0b3JhZ2VTbG90IHsKICAgIHN0cnVjdCBBZGRyZXNzU2xvdCB7CiAgICAgICAgYWRkcmVzcyB2YWx1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRBZGRyZXNzU2xvdCgKICAgICAgICBieXRlczMyIHNsb3QKICAgICkgaW50ZXJuYWwgcHVyZSByZXR1cm5zIChBZGRyZXNzU2xvdCBzdG9yYWdlIHIpIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIHIuc2xvdCA6PSBzbG90CiAgICAgICAgfQogICAgfQp9Cgpjb250cmFjdCBUZXN0U2xvdCB7CiAgICBieXRlczMyIHB1YmxpYyBjb25zdGFudCBzbG90ID0ga2VjY2FrMjU2KCJURVNUX1NMT1QiKTsKCiAgICBmdW5jdGlvbiBnZXRTbG90KCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgcmV0dXJuIFN0b3JhZ2VTbG90LmdldEFkZHJlc3NTbG90KHNsb3QpLnZhbHVlOwogICAgfQoKICAgIGZ1bmN0aW9uIHdyaXRlU2xvdChhZGRyZXNzIF9hZGRyKSBleHRlcm5hbCB7CiAgICAgICAgU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3Qoc2xvdCkudmFsdWUgPSBfYWRkcjsKICAgIH0KfQo=",
  },
]

const html = `<p>Example of upgradeable proxy contract. Never use this in production.</p>
<p>This example shows</p>
<ul>
<li>how to use <code>delegatecall</code> and return data when <code>fallback</code> is called.</li>
<li>how to store address of <code>admin</code> and <code>implementation</code> in a specific slot.</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-comment">// Transparent upgradeable proxy pattern</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CounterV1</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CounterV2</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dec</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">-</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">BuggyProxy</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> implementation;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> admin;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        admin <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_delegate</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        (<span class="hljs-keyword">bool</span> ok, ) <span class="hljs-operator">=</span> implementation.<span class="hljs-built_in">delegatecall</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">data</span>);
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"delegatecall failed"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _delegate();
    }

    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _delegate();
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">upgradeTo</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _implementation</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> admin, <span class="hljs-string">"not authorized"</span>);
        implementation <span class="hljs-operator">=</span> _implementation;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Dev</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">selectors</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, <span class="hljs-keyword">bytes4</span>, <span class="hljs-keyword">bytes4</span></span>) </span>{
        <span class="hljs-keyword">return</span> (
            Proxy.admin.<span class="hljs-built_in">selector</span>,
            Proxy.implementation.<span class="hljs-built_in">selector</span>,
            Proxy.upgradeTo.<span class="hljs-built_in">selector</span>
        );
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Proxy</span> </span>{
    <span class="hljs-comment">// All functions / variables should be private, forward all calls to fallback</span>

    <span class="hljs-comment">// -1 for unknown preimage</span>
    <span class="hljs-comment">// 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> IMPLEMENTATION_SLOT <span class="hljs-operator">=</span>
        <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"eip1967.proxy.implementation"</span>)) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>);
    <span class="hljs-comment">// 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> ADMIN_SLOT <span class="hljs-operator">=</span>
        <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"eip1967.proxy.admin"</span>)) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>);

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        _setAdmin(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">ifAdmin</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">if</span> (<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> _getAdmin()) {
            <span class="hljs-keyword">_</span>;
        } <span class="hljs-keyword">else</span> {
            _fallback();
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getAdmin</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> StorageSlot.getAddressSlot(ADMIN_SLOT).<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_setAdmin</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _admin</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        <span class="hljs-built_in">require</span>(_admin <span class="hljs-operator">!</span><span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>), <span class="hljs-string">"admin = zero address"</span>);
        StorageSlot.getAddressSlot(ADMIN_SLOT).<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span> _admin;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_getImplementation</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_setImplementation</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _implementation</span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        <span class="hljs-built_in">require</span>(_implementation.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"implementation is not contract"</span>);
        StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT).<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span> _implementation;
    }

    <span class="hljs-comment">// Admin interface //</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeAdmin</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _admin</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">ifAdmin</span> </span>{
        _setAdmin(_admin);
    }

    <span class="hljs-comment">// 0x3659cfe6</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">upgradeTo</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _implementation</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">ifAdmin</span> </span>{
        _setImplementation(_implementation);
    }

    <span class="hljs-comment">// 0xf851a440</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">admin</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">ifAdmin</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> _getAdmin();
    }

    <span class="hljs-comment">// 0x5c60da1b</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">implementation</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">ifAdmin</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> _getImplementation();
    }

    <span class="hljs-comment">// User interface //</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_delegate</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _implementation</span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// Copy msg.data. We take full control of memory in this inline assembly</span>
            <span class="hljs-comment">// block because it will not return to Solidity code. We overwrite the</span>
            <span class="hljs-comment">// Solidity scratch pad at memory position 0.</span>

            <span class="hljs-comment">// calldatacopy(t, f, s) - copy s bytes from calldata at position f to mem at position t</span>
            <span class="hljs-comment">// calldatasize() - size of call data in bytes</span>
            <span class="hljs-built_in">calldatacopy</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-built_in">calldatasize</span>())

            <span class="hljs-comment">// Call the implementation.</span>
            <span class="hljs-comment">// out and outsize are 0 because we don&#x27;t know the size yet.</span>

            <span class="hljs-comment">// delegatecall(g, a, in, insize, out, outsize) -</span>
            <span class="hljs-comment">// - call contract at address a</span>
            <span class="hljs-comment">// - with input mem[in…(in+insize))</span>
            <span class="hljs-comment">// - providing g gas</span>
            <span class="hljs-comment">// - and output area mem[out…(out+outsize))</span>
            <span class="hljs-comment">// - returning 0 on error (eg. out of gas) and 1 on success</span>
            <span class="hljs-keyword">let</span> result <span class="hljs-operator">:=</span> <span class="hljs-built_in">delegatecall</span>(<span class="hljs-built_in">gas</span>(), _implementation, <span class="hljs-number">0</span>, <span class="hljs-built_in">calldatasize</span>(), <span class="hljs-number">0</span>, <span class="hljs-number">0</span>)

            <span class="hljs-comment">// Copy the returned data.</span>
            <span class="hljs-comment">// returndatacopy(t, f, s) - copy s bytes from returndata at position f to mem at position t</span>
            <span class="hljs-comment">// returndatasize() - size of the last returndata</span>
            <span class="hljs-built_in">returndatacopy</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-built_in">returndatasize</span>())

            <span class="hljs-keyword">switch</span> result
            <span class="hljs-comment">// delegatecall returns 0 on error.</span>
            <span class="hljs-keyword">case</span> <span class="hljs-number">0</span> {
                <span class="hljs-comment">// revert(p, s) - end execution, revert state changes, return data mem[p…(p+s))</span>
                <span class="hljs-keyword">revert</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">returndatasize</span>())
            }
            <span class="hljs-keyword">default</span> {
                <span class="hljs-comment">// return(p, s) - end execution, return data mem[p…(p+s))</span>
                <span class="hljs-keyword">return</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">returndatasize</span>())
            }
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">private</span></span> </span>{
        _delegate(_getImplementation());
    }

    <span class="hljs-function"><span class="hljs-keyword">fallback</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _fallback();
    }

    <span class="hljs-function"><span class="hljs-keyword">receive</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        _fallback();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ProxyAdmin</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">modifier</span> <span class="hljs-title">onlyOwner</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"not owner"</span>);
        <span class="hljs-keyword">_</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getProxyAdmin</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> proxy</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> proxy.<span class="hljs-built_in">staticcall</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Proxy.admin, ()));
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(res, (<span class="hljs-keyword">address</span>));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getProxyImplementation</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> proxy</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> proxy.<span class="hljs-built_in">staticcall</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Proxy.implementation, ())
        );
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(res, (<span class="hljs-keyword">address</span>));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeProxyAdmin</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> proxy, <span class="hljs-keyword">address</span> admin</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">onlyOwner</span> </span>{
        Proxy(proxy).changeAdmin(admin);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">upgrade</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> proxy, <span class="hljs-keyword">address</span> implementation</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">onlyOwner</span> </span>{
        Proxy(proxy).upgradeTo(implementation);
    }
}

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">StorageSlot</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">AddressSlot</span> {
        <span class="hljs-keyword">address</span> value;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAddressSlot</span>(<span class="hljs-params">
        <span class="hljs-keyword">bytes32</span> slot
    </span>) <span class="hljs-title"><span class="hljs-keyword">internal</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">AddressSlot <span class="hljs-keyword">storage</span> r</span>) </span>{
        <span class="hljs-keyword">assembly</span> {
            r.<span class="hljs-built_in">slot</span> <span class="hljs-operator">:=</span> slot
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">TestSlot</span> </span>{
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> slot <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"TEST_SLOT"</span>);

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getSlot</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        <span class="hljs-keyword">return</span> StorageSlot.getAddressSlot(slot).<span class="hljs-built_in">value</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">writeSlot</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _addr</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        StorageSlot.getAddressSlot(slot).<span class="hljs-built_in">value</span> <span class="hljs-operator">=</span> _addr;
    }
}
</code></pre>`

export default html
