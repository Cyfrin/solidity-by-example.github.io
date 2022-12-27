// metadata
export const version = "0.8.13"
export const title = "Upgradeable Proxy"
export const description = "Example of upgradeable proxy"
export const codes = [
  {
    fileName: "UpgradeableProxy.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xMzsKCi8vIFRyYW5zcGFyZW50IHVwZ3JhZGVhYmxlIHByb3h5IHBhdHRlcm4KCmNvbnRyYWN0IENvdW50ZXJWMSB7CiAgICB1aW50IHB1YmxpYyBjb3VudDsKCiAgICBmdW5jdGlvbiBpbmMoKSBleHRlcm5hbCB7CiAgICAgICAgY291bnQgKz0gMTsKICAgIH0KfQoKY29udHJhY3QgQ291bnRlclYyIHsKICAgIHVpbnQgcHVibGljIGNvdW50OwoKICAgIGZ1bmN0aW9uIGluYygpIGV4dGVybmFsIHsKICAgICAgICBjb3VudCArPSAxOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlYygpIGV4dGVybmFsIHsKICAgICAgICBjb3VudCAtPSAxOwogICAgfQp9Cgpjb250cmFjdCBCdWdneVByb3h5IHsKICAgIGFkZHJlc3MgcHVibGljIGltcGxlbWVudGF0aW9uOwogICAgYWRkcmVzcyBwdWJsaWMgYWRtaW47CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgYWRtaW4gPSBtc2cuc2VuZGVyOwogICAgfQoKICAgIGZ1bmN0aW9uIF9kZWxlZ2F0ZSgpIHByaXZhdGUgewogICAgICAgIChib29sIG9rLCBieXRlcyBtZW1vcnkgcmVzKSA9IGltcGxlbWVudGF0aW9uLmRlbGVnYXRlY2FsbChtc2cuZGF0YSk7CiAgICAgICAgcmVxdWlyZShvaywgImRlbGVnYXRlY2FsbCBmYWlsZWQiKTsKICAgIH0KCiAgICBmYWxsYmFjaygpIGV4dGVybmFsIHBheWFibGUgewogICAgICAgIF9kZWxlZ2F0ZSgpOwogICAgfQoKICAgIHJlY2VpdmUoKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBfZGVsZWdhdGUoKTsKICAgIH0KCiAgICBmdW5jdGlvbiB1cGdyYWRlVG8oYWRkcmVzcyBfaW1wbGVtZW50YXRpb24pIGV4dGVybmFsIHsKICAgICAgICByZXF1aXJlKG1zZy5zZW5kZXIgPT0gYWRtaW4sICJub3QgYXV0aG9yaXplZCIpOwogICAgICAgIGltcGxlbWVudGF0aW9uID0gX2ltcGxlbWVudGF0aW9uOwogICAgfQp9Cgpjb250cmFjdCBEZXYgewogICAgZnVuY3Rpb24gc2VsZWN0b3JzKCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChieXRlczQsIGJ5dGVzNCwgYnl0ZXM0KSB7CiAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgUHJveHkuYWRtaW4uc2VsZWN0b3IsCiAgICAgICAgICAgIFByb3h5LmltcGxlbWVudGF0aW9uLnNlbGVjdG9yLAogICAgICAgICAgICBQcm94eS51cGdyYWRlVG8uc2VsZWN0b3IKICAgICAgICApOwogICAgfQp9Cgpjb250cmFjdCBQcm94eSB7CiAgICAvLyBBbGwgZnVuY3Rpb25zIC8gdmFyaWFibGVzIHNob3VsZCBiZSBwcml2YXRlLCBmb3J3YXJkIGFsbCBjYWxscyB0byBmYWxsYmFjawoKICAgIC8vIC0xIGZvciB1bmtub3duIHByZWltYWdlCiAgICAvLyAweDM2MDg5NGExM2JhMWEzMjEwNjY3YzgyODQ5MmRiOThkY2EzZTIwNzZjYzM3MzVhOTIwYTNjYTUwNWQzODJiYmMKICAgIGJ5dGVzMzIgcHJpdmF0ZSBjb25zdGFudCBJTVBMRU1FTlRBVElPTl9TTE9UID0KICAgICAgICBieXRlczMyKHVpbnQoa2VjY2FrMjU2KCJlaXAxOTY3LnByb3h5LmltcGxlbWVudGF0aW9uIikpIC0gMSk7CiAgICAvLyAweGI1MzEyNzY4NGE1NjhiMzE3M2FlMTNiOWY4YTYwMTZlMjQzZTYzYjZlOGVlMTE3OGQ2YTcxNzg1MGI1ZDYxMDMKICAgIGJ5dGVzMzIgcHJpdmF0ZSBjb25zdGFudCBBRE1JTl9TTE9UID0KICAgICAgICBieXRlczMyKHVpbnQoa2VjY2FrMjU2KCJlaXAxOTY3LnByb3h5LmFkbWluIikpIC0gMSk7CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgX3NldEFkbWluKG1zZy5zZW5kZXIpOwogICAgfQoKICAgIG1vZGlmaWVyIGlmQWRtaW4oKSB7CiAgICAgICAgaWYgKG1zZy5zZW5kZXIgPT0gX2dldEFkbWluKCkpIHsKICAgICAgICAgICAgXzsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBfZmFsbGJhY2soKTsKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gX2dldEFkbWluKCkgcHJpdmF0ZSB2aWV3IHJldHVybnMgKGFkZHJlc3MpIHsKICAgICAgICByZXR1cm4gU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3QoQURNSU5fU0xPVCkudmFsdWU7CiAgICB9CgogICAgZnVuY3Rpb24gX3NldEFkbWluKGFkZHJlc3MgX2FkbWluKSBwcml2YXRlIHsKICAgICAgICByZXF1aXJlKF9hZG1pbiAhPSBhZGRyZXNzKDApLCAiYWRtaW4gPSB6ZXJvIGFkZHJlc3MiKTsKICAgICAgICBTdG9yYWdlU2xvdC5nZXRBZGRyZXNzU2xvdChBRE1JTl9TTE9UKS52YWx1ZSA9IF9hZG1pbjsKICAgIH0KCiAgICBmdW5jdGlvbiBfZ2V0SW1wbGVtZW50YXRpb24oKSBwcml2YXRlIHZpZXcgcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJldHVybiBTdG9yYWdlU2xvdC5nZXRBZGRyZXNzU2xvdChJTVBMRU1FTlRBVElPTl9TTE9UKS52YWx1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiBfc2V0SW1wbGVtZW50YXRpb24oYWRkcmVzcyBfaW1wbGVtZW50YXRpb24pIHByaXZhdGUgewogICAgICAgIHJlcXVpcmUoX2ltcGxlbWVudGF0aW9uLmNvZGUubGVuZ3RoID4gMCwgImltcGxlbWVudGF0aW9uIGlzIG5vdCBjb250cmFjdCIpOwogICAgICAgIFN0b3JhZ2VTbG90LmdldEFkZHJlc3NTbG90KElNUExFTUVOVEFUSU9OX1NMT1QpLnZhbHVlID0gX2ltcGxlbWVudGF0aW9uOwogICAgfQoKICAgIC8vIEFkbWluIGludGVyZmFjZSAvLwogICAgZnVuY3Rpb24gY2hhbmdlQWRtaW4oYWRkcmVzcyBfYWRtaW4pIGV4dGVybmFsIGlmQWRtaW4gewogICAgICAgIF9zZXRBZG1pbihfYWRtaW4pOwogICAgfQoKICAgIC8vIDB4MzY1OWNmZTYKICAgIGZ1bmN0aW9uIHVwZ3JhZGVUbyhhZGRyZXNzIF9pbXBsZW1lbnRhdGlvbikgZXh0ZXJuYWwgaWZBZG1pbiB7CiAgICAgICAgX3NldEltcGxlbWVudGF0aW9uKF9pbXBsZW1lbnRhdGlvbik7CiAgICB9CgogICAgLy8gMHhmODUxYTQ0MAogICAgZnVuY3Rpb24gYWRtaW4oKSBleHRlcm5hbCBpZkFkbWluIHJldHVybnMgKGFkZHJlc3MpIHsKICAgICAgICByZXR1cm4gX2dldEFkbWluKCk7CiAgICB9CgogICAgLy8gMHg1YzYwZGExYgogICAgZnVuY3Rpb24gaW1wbGVtZW50YXRpb24oKSBleHRlcm5hbCBpZkFkbWluIHJldHVybnMgKGFkZHJlc3MpIHsKICAgICAgICByZXR1cm4gX2dldEltcGxlbWVudGF0aW9uKCk7CiAgICB9CgogICAgLy8gVXNlciBpbnRlcmZhY2UgLy8KICAgIGZ1bmN0aW9uIF9kZWxlZ2F0ZShhZGRyZXNzIF9pbXBsZW1lbnRhdGlvbikgaW50ZXJuYWwgdmlydHVhbCB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBDb3B5IG1zZy5kYXRhLiBXZSB0YWtlIGZ1bGwgY29udHJvbCBvZiBtZW1vcnkgaW4gdGhpcyBpbmxpbmUgYXNzZW1ibHkKICAgICAgICAgICAgLy8gYmxvY2sgYmVjYXVzZSBpdCB3aWxsIG5vdCByZXR1cm4gdG8gU29saWRpdHkgY29kZS4gV2Ugb3ZlcndyaXRlIHRoZQogICAgICAgICAgICAvLyBTb2xpZGl0eSBzY3JhdGNoIHBhZCBhdCBtZW1vcnkgcG9zaXRpb24gMC4KCiAgICAgICAgICAgIC8vIGNhbGxkYXRhY29weSh0LCBmLCBzKSAtIGNvcHkgcyBieXRlcyBmcm9tIGNhbGxkYXRhIGF0IHBvc2l0aW9uIGYgdG8gbWVtIGF0IHBvc2l0aW9uIHQKICAgICAgICAgICAgLy8gY2FsbGRhdGFzaXplKCkgLSBzaXplIG9mIGNhbGwgZGF0YSBpbiBieXRlcwogICAgICAgICAgICBjYWxsZGF0YWNvcHkoMCwgMCwgY2FsbGRhdGFzaXplKCkpCgogICAgICAgICAgICAvLyBDYWxsIHRoZSBpbXBsZW1lbnRhdGlvbi4KICAgICAgICAgICAgLy8gb3V0IGFuZCBvdXRzaXplIGFyZSAwIGJlY2F1c2Ugd2UgZG9uJ3Qga25vdyB0aGUgc2l6ZSB5ZXQuCgogICAgICAgICAgICAvLyBkZWxlZ2F0ZWNhbGwoZywgYSwgaW4sIGluc2l6ZSwgb3V0LCBvdXRzaXplKSAtCiAgICAgICAgICAgIC8vIC0gY2FsbCBjb250cmFjdCBhdCBhZGRyZXNzIGEKICAgICAgICAgICAgLy8gLSB3aXRoIGlucHV0IG1lbVtpbuKApihpbitpbnNpemUpKQogICAgICAgICAgICAvLyAtIHByb3ZpZGluZyBnIGdhcwogICAgICAgICAgICAvLyAtIGFuZCBvdXRwdXQgYXJlYSBtZW1bb3V04oCmKG91dCtvdXRzaXplKSkKICAgICAgICAgICAgLy8gLSByZXR1cm5pbmcgMCBvbiBlcnJvciAoZWcuIG91dCBvZiBnYXMpIGFuZCAxIG9uIHN1Y2Nlc3MKICAgICAgICAgICAgbGV0IHJlc3VsdCA6PSBkZWxlZ2F0ZWNhbGwoZ2FzKCksIF9pbXBsZW1lbnRhdGlvbiwgMCwgY2FsbGRhdGFzaXplKCksIDAsIDApCgogICAgICAgICAgICAvLyBDb3B5IHRoZSByZXR1cm5lZCBkYXRhLgogICAgICAgICAgICAvLyByZXR1cm5kYXRhY29weSh0LCBmLCBzKSAtIGNvcHkgcyBieXRlcyBmcm9tIHJldHVybmRhdGEgYXQgcG9zaXRpb24gZiB0byBtZW0gYXQgcG9zaXRpb24gdAogICAgICAgICAgICAvLyByZXR1cm5kYXRhc2l6ZSgpIC0gc2l6ZSBvZiB0aGUgbGFzdCByZXR1cm5kYXRhCiAgICAgICAgICAgIHJldHVybmRhdGFjb3B5KDAsIDAsIHJldHVybmRhdGFzaXplKCkpCgogICAgICAgICAgICBzd2l0Y2ggcmVzdWx0CiAgICAgICAgICAgIC8vIGRlbGVnYXRlY2FsbCByZXR1cm5zIDAgb24gZXJyb3IuCiAgICAgICAgICAgIGNhc2UgMCB7CiAgICAgICAgICAgICAgICAvLyByZXZlcnQocCwgcykgLSBlbmQgZXhlY3V0aW9uLCByZXZlcnQgc3RhdGUgY2hhbmdlcywgcmV0dXJuIGRhdGEgbWVtW3DigKYocCtzKSkKICAgICAgICAgICAgICAgIHJldmVydCgwLCByZXR1cm5kYXRhc2l6ZSgpKQogICAgICAgICAgICB9CiAgICAgICAgICAgIGRlZmF1bHQgewogICAgICAgICAgICAgICAgLy8gcmV0dXJuKHAsIHMpIC0gZW5kIGV4ZWN1dGlvbiwgcmV0dXJuIGRhdGEgbWVtW3DigKYocCtzKSkKICAgICAgICAgICAgICAgIHJldHVybigwLCByZXR1cm5kYXRhc2l6ZSgpKQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIF9mYWxsYmFjaygpIHByaXZhdGUgewogICAgICAgIF9kZWxlZ2F0ZShfZ2V0SW1wbGVtZW50YXRpb24oKSk7CiAgICB9CgogICAgZmFsbGJhY2soKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBfZmFsbGJhY2soKTsKICAgIH0KCiAgICByZWNlaXZlKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgX2ZhbGxiYWNrKCk7CiAgICB9Cn0KCmNvbnRyYWN0IFByb3h5QWRtaW4gewogICAgYWRkcmVzcyBwdWJsaWMgb3duZXI7CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgfQoKICAgIG1vZGlmaWVyIG9ubHlPd25lcigpIHsKICAgICAgICByZXF1aXJlKG1zZy5zZW5kZXIgPT0gb3duZXIsICJub3Qgb3duZXIiKTsKICAgICAgICBfOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFByb3h5QWRtaW4oYWRkcmVzcyBwcm94eSkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgKGJvb2wgb2ssIGJ5dGVzIG1lbW9yeSByZXMpID0gcHJveHkuc3RhdGljY2FsbCgKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwoUHJveHkuaW1wbGVtZW50YXRpb24sICgpKQogICAgICAgICk7CiAgICAgICAgcmVxdWlyZShvaywgImNhbGwgZmFpbGVkIik7CiAgICAgICAgcmV0dXJuIGFiaS5kZWNvZGUocmVzLCAoYWRkcmVzcykpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFByb3h5SW1wbGVtZW50YXRpb24oYWRkcmVzcyBwcm94eSkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgKGJvb2wgb2ssIGJ5dGVzIG1lbW9yeSByZXMpID0gcHJveHkuc3RhdGljY2FsbChhYmkuZW5jb2RlQ2FsbChQcm94eS5hZG1pbiwgKCkpKTsKICAgICAgICByZXF1aXJlKG9rLCAiY2FsbCBmYWlsZWQiKTsKICAgICAgICByZXR1cm4gYWJpLmRlY29kZShyZXMsIChhZGRyZXNzKSk7CiAgICB9CgogICAgZnVuY3Rpb24gY2hhbmdlUHJveHlBZG1pbihhZGRyZXNzIHBheWFibGUgcHJveHksIGFkZHJlc3MgYWRtaW4pIGV4dGVybmFsIG9ubHlPd25lciB7CiAgICAgICAgUHJveHkocHJveHkpLmNoYW5nZUFkbWluKGFkbWluKTsKICAgIH0KCiAgICBmdW5jdGlvbiB1cGdyYWRlKGFkZHJlc3MgcGF5YWJsZSBwcm94eSwgYWRkcmVzcyBpbXBsZW1lbnRhdGlvbikgZXh0ZXJuYWwgb25seU93bmVyIHsKICAgICAgICBQcm94eShwcm94eSkudXBncmFkZVRvKGltcGxlbWVudGF0aW9uKTsKICAgIH0KfQoKbGlicmFyeSBTdG9yYWdlU2xvdCB7CiAgICBzdHJ1Y3QgQWRkcmVzc1Nsb3QgewogICAgICAgIGFkZHJlc3MgdmFsdWU7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0QWRkcmVzc1Nsb3QoCiAgICAgICAgYnl0ZXMzMiBzbG90CiAgICApIGludGVybmFsIHB1cmUgcmV0dXJucyAoQWRkcmVzc1Nsb3Qgc3RvcmFnZSByKSB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICByLnNsb3QgOj0gc2xvdAogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgVGVzdFNsb3QgewogICAgYnl0ZXMzMiBwdWJsaWMgY29uc3RhbnQgc2xvdCA9IGtlY2NhazI1NigiVEVTVF9TTE9UIik7CgogICAgZnVuY3Rpb24gZ2V0U2xvdCgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJldHVybiBTdG9yYWdlU2xvdC5nZXRBZGRyZXNzU2xvdChzbG90KS52YWx1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiB3cml0ZVNsb3QoYWRkcmVzcyBfYWRkcikgZXh0ZXJuYWwgewogICAgICAgIFN0b3JhZ2VTbG90LmdldEFkZHJlc3NTbG90KHNsb3QpLnZhbHVlID0gX2FkZHI7CiAgICB9Cn0K",
  },
]

const html = `<p>Example of upgradeable proxy contract. Never use this in production.</p>
<p>This example shows</p>
<ul>
<li>how to use <code>delegatecall</code> and return data when <code>fallback</code> is called.</li>
<li>how to store address of <code>admin</code> and <code>implementation</code> in a specific slot.</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.13;</span>

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
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> implementation.<span class="hljs-built_in">delegatecall</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">data</span>);
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
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> proxy.<span class="hljs-built_in">staticcall</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Proxy.implementation, ())
        );
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(res, (<span class="hljs-keyword">address</span>));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getProxyImplementation</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> proxy</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>) </span>{
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span> proxy.<span class="hljs-built_in">staticcall</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Proxy.admin, ()));
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
</code></pre>
`

export default html
