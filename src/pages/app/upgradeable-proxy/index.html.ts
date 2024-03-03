// metadata
export const version = "0.8.20"
export const title = "Upgradeable Proxy"
export const description = "Example of upgradeable proxy"

export const keywords = ["app", "application", "delegatecall", "upgradeable", "proxy"]

export const codes = [
  {
    fileName: "UpgradeableProxy.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCi8vIFRyYW5zcGFyZW50IHVwZ3JhZGVhYmxlIHByb3h5IHBhdHRlcm4KCmNvbnRyYWN0IENvdW50ZXJWMSB7CiAgICB1aW50MjU2IHB1YmxpYyBjb3VudDsKCiAgICBmdW5jdGlvbiBpbmMoKSBleHRlcm5hbCB7CiAgICAgICAgY291bnQgKz0gMTsKICAgIH0KfQoKY29udHJhY3QgQ291bnRlclYyIHsKICAgIHVpbnQyNTYgcHVibGljIGNvdW50OwoKICAgIGZ1bmN0aW9uIGluYygpIGV4dGVybmFsIHsKICAgICAgICBjb3VudCArPSAxOwogICAgfQoKICAgIGZ1bmN0aW9uIGRlYygpIGV4dGVybmFsIHsKICAgICAgICBjb3VudCAtPSAxOwogICAgfQp9Cgpjb250cmFjdCBCdWdneVByb3h5IHsKICAgIGFkZHJlc3MgcHVibGljIGltcGxlbWVudGF0aW9uOwogICAgYWRkcmVzcyBwdWJsaWMgYWRtaW47CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgYWRtaW4gPSBtc2cuc2VuZGVyOwogICAgfQoKICAgIGZ1bmN0aW9uIF9kZWxlZ2F0ZSgpIHByaXZhdGUgewogICAgICAgIChib29sIG9rLCkgPSBpbXBsZW1lbnRhdGlvbi5kZWxlZ2F0ZWNhbGwobXNnLmRhdGEpOwogICAgICAgIHJlcXVpcmUob2ssICJkZWxlZ2F0ZWNhbGwgZmFpbGVkIik7CiAgICB9CgogICAgZmFsbGJhY2soKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBfZGVsZWdhdGUoKTsKICAgIH0KCiAgICByZWNlaXZlKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgX2RlbGVnYXRlKCk7CiAgICB9CgogICAgZnVuY3Rpb24gdXBncmFkZVRvKGFkZHJlc3MgX2ltcGxlbWVudGF0aW9uKSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShtc2cuc2VuZGVyID09IGFkbWluLCAibm90IGF1dGhvcml6ZWQiKTsKICAgICAgICBpbXBsZW1lbnRhdGlvbiA9IF9pbXBsZW1lbnRhdGlvbjsKICAgIH0KfQoKY29udHJhY3QgRGV2IHsKICAgIGZ1bmN0aW9uIHNlbGVjdG9ycygpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYnl0ZXM0LCBieXRlczQsIGJ5dGVzNCkgewogICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIFByb3h5LmFkbWluLnNlbGVjdG9yLAogICAgICAgICAgICBQcm94eS5pbXBsZW1lbnRhdGlvbi5zZWxlY3RvciwKICAgICAgICAgICAgUHJveHkudXBncmFkZVRvLnNlbGVjdG9yCiAgICAgICAgKTsKICAgIH0KfQoKY29udHJhY3QgUHJveHkgewogICAgLy8gQWxsIGZ1bmN0aW9ucyAvIHZhcmlhYmxlcyBzaG91bGQgYmUgcHJpdmF0ZSwgZm9yd2FyZCBhbGwgY2FsbHMgdG8gZmFsbGJhY2sKCiAgICAvLyAtMSBmb3IgdW5rbm93biBwcmVpbWFnZQogICAgLy8gMHgzNjA4OTRhMTNiYTFhMzIxMDY2N2M4Mjg0OTJkYjk4ZGNhM2UyMDc2Y2MzNzM1YTkyMGEzY2E1MDVkMzgyYmJjCiAgICBieXRlczMyIHByaXZhdGUgY29uc3RhbnQgSU1QTEVNRU5UQVRJT05fU0xPVCA9CiAgICAgICAgYnl0ZXMzMih1aW50MjU2KGtlY2NhazI1NigiZWlwMTk2Ny5wcm94eS5pbXBsZW1lbnRhdGlvbiIpKSAtIDEpOwogICAgLy8gMHhiNTMxMjc2ODRhNTY4YjMxNzNhZTEzYjlmOGE2MDE2ZTI0M2U2M2I2ZThlZTExNzhkNmE3MTc4NTBiNWQ2MTAzCiAgICBieXRlczMyIHByaXZhdGUgY29uc3RhbnQgQURNSU5fU0xPVCA9CiAgICAgICAgYnl0ZXMzMih1aW50MjU2KGtlY2NhazI1NigiZWlwMTk2Ny5wcm94eS5hZG1pbiIpKSAtIDEpOwoKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICAgIF9zZXRBZG1pbihtc2cuc2VuZGVyKTsKICAgIH0KCiAgICBtb2RpZmllciBpZkFkbWluKCkgewogICAgICAgIGlmIChtc2cuc2VuZGVyID09IF9nZXRBZG1pbigpKSB7CiAgICAgICAgICAgIF87CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgX2ZhbGxiYWNrKCk7CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIF9nZXRBZG1pbigpIHByaXZhdGUgdmlldyByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgcmV0dXJuIFN0b3JhZ2VTbG90LmdldEFkZHJlc3NTbG90KEFETUlOX1NMT1QpLnZhbHVlOwogICAgfQoKICAgIGZ1bmN0aW9uIF9zZXRBZG1pbihhZGRyZXNzIF9hZG1pbikgcHJpdmF0ZSB7CiAgICAgICAgcmVxdWlyZShfYWRtaW4gIT0gYWRkcmVzcygwKSwgImFkbWluID0gemVybyBhZGRyZXNzIik7CiAgICAgICAgU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3QoQURNSU5fU0xPVCkudmFsdWUgPSBfYWRtaW47CiAgICB9CgogICAgZnVuY3Rpb24gX2dldEltcGxlbWVudGF0aW9uKCkgcHJpdmF0ZSB2aWV3IHJldHVybnMgKGFkZHJlc3MpIHsKICAgICAgICByZXR1cm4gU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3QoSU1QTEVNRU5UQVRJT05fU0xPVCkudmFsdWU7CiAgICB9CgogICAgZnVuY3Rpb24gX3NldEltcGxlbWVudGF0aW9uKGFkZHJlc3MgX2ltcGxlbWVudGF0aW9uKSBwcml2YXRlIHsKICAgICAgICByZXF1aXJlKAogICAgICAgICAgICBfaW1wbGVtZW50YXRpb24uY29kZS5sZW5ndGggPiAwLCAiaW1wbGVtZW50YXRpb24gaXMgbm90IGNvbnRyYWN0IgogICAgICAgICk7CiAgICAgICAgU3RvcmFnZVNsb3QuZ2V0QWRkcmVzc1Nsb3QoSU1QTEVNRU5UQVRJT05fU0xPVCkudmFsdWUgPSBfaW1wbGVtZW50YXRpb247CiAgICB9CgogICAgLy8gQWRtaW4gaW50ZXJmYWNlIC8vCiAgICBmdW5jdGlvbiBjaGFuZ2VBZG1pbihhZGRyZXNzIF9hZG1pbikgZXh0ZXJuYWwgaWZBZG1pbiB7CiAgICAgICAgX3NldEFkbWluKF9hZG1pbik7CiAgICB9CgogICAgLy8gMHgzNjU5Y2ZlNgogICAgZnVuY3Rpb24gdXBncmFkZVRvKGFkZHJlc3MgX2ltcGxlbWVudGF0aW9uKSBleHRlcm5hbCBpZkFkbWluIHsKICAgICAgICBfc2V0SW1wbGVtZW50YXRpb24oX2ltcGxlbWVudGF0aW9uKTsKICAgIH0KCiAgICAvLyAweGY4NTFhNDQwCiAgICBmdW5jdGlvbiBhZG1pbigpIGV4dGVybmFsIGlmQWRtaW4gcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJldHVybiBfZ2V0QWRtaW4oKTsKICAgIH0KCiAgICAvLyAweDVjNjBkYTFiCiAgICBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbigpIGV4dGVybmFsIGlmQWRtaW4gcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJldHVybiBfZ2V0SW1wbGVtZW50YXRpb24oKTsKICAgIH0KCiAgICAvLyBVc2VyIGludGVyZmFjZSAvLwogICAgZnVuY3Rpb24gX2RlbGVnYXRlKGFkZHJlc3MgX2ltcGxlbWVudGF0aW9uKSBpbnRlcm5hbCB2aXJ0dWFsIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIC8vIENvcHkgbXNnLmRhdGEuIFdlIHRha2UgZnVsbCBjb250cm9sIG9mIG1lbW9yeSBpbiB0aGlzIGlubGluZSBhc3NlbWJseQogICAgICAgICAgICAvLyBibG9jayBiZWNhdXNlIGl0IHdpbGwgbm90IHJldHVybiB0byBTb2xpZGl0eSBjb2RlLiBXZSBvdmVyd3JpdGUgdGhlCiAgICAgICAgICAgIC8vIFNvbGlkaXR5IHNjcmF0Y2ggcGFkIGF0IG1lbW9yeSBwb3NpdGlvbiAwLgoKICAgICAgICAgICAgLy8gY2FsbGRhdGFjb3B5KHQsIGYsIHMpIC0gY29weSBzIGJ5dGVzIGZyb20gY2FsbGRhdGEgYXQgcG9zaXRpb24gZiB0byBtZW0gYXQgcG9zaXRpb24gdAogICAgICAgICAgICAvLyBjYWxsZGF0YXNpemUoKSAtIHNpemUgb2YgY2FsbCBkYXRhIGluIGJ5dGVzCiAgICAgICAgICAgIGNhbGxkYXRhY29weSgwLCAwLCBjYWxsZGF0YXNpemUoKSkKCiAgICAgICAgICAgIC8vIENhbGwgdGhlIGltcGxlbWVudGF0aW9uLgogICAgICAgICAgICAvLyBvdXQgYW5kIG91dHNpemUgYXJlIDAgYmVjYXVzZSB3ZSBkb24ndCBrbm93IHRoZSBzaXplIHlldC4KCiAgICAgICAgICAgIC8vIGRlbGVnYXRlY2FsbChnLCBhLCBpbiwgaW5zaXplLCBvdXQsIG91dHNpemUpIC0KICAgICAgICAgICAgLy8gLSBjYWxsIGNvbnRyYWN0IGF0IGFkZHJlc3MgYQogICAgICAgICAgICAvLyAtIHdpdGggaW5wdXQgbWVtW2lu4oCmKGluK2luc2l6ZSkpCiAgICAgICAgICAgIC8vIC0gcHJvdmlkaW5nIGcgZ2FzCiAgICAgICAgICAgIC8vIC0gYW5kIG91dHB1dCBhcmVhIG1lbVtvdXTigKYob3V0K291dHNpemUpKQogICAgICAgICAgICAvLyAtIHJldHVybmluZyAwIG9uIGVycm9yIChlZy4gb3V0IG9mIGdhcykgYW5kIDEgb24gc3VjY2VzcwogICAgICAgICAgICBsZXQgcmVzdWx0IDo9CiAgICAgICAgICAgICAgICBkZWxlZ2F0ZWNhbGwoZ2FzKCksIF9pbXBsZW1lbnRhdGlvbiwgMCwgY2FsbGRhdGFzaXplKCksIDAsIDApCgogICAgICAgICAgICAvLyBDb3B5IHRoZSByZXR1cm5lZCBkYXRhLgogICAgICAgICAgICAvLyByZXR1cm5kYXRhY29weSh0LCBmLCBzKSAtIGNvcHkgcyBieXRlcyBmcm9tIHJldHVybmRhdGEgYXQgcG9zaXRpb24gZiB0byBtZW0gYXQgcG9zaXRpb24gdAogICAgICAgICAgICAvLyByZXR1cm5kYXRhc2l6ZSgpIC0gc2l6ZSBvZiB0aGUgbGFzdCByZXR1cm5kYXRhCiAgICAgICAgICAgIHJldHVybmRhdGFjb3B5KDAsIDAsIHJldHVybmRhdGFzaXplKCkpCgogICAgICAgICAgICBzd2l0Y2ggcmVzdWx0CiAgICAgICAgICAgIC8vIGRlbGVnYXRlY2FsbCByZXR1cm5zIDAgb24gZXJyb3IuCiAgICAgICAgICAgIGNhc2UgMCB7CiAgICAgICAgICAgICAgICAvLyByZXZlcnQocCwgcykgLSBlbmQgZXhlY3V0aW9uLCByZXZlcnQgc3RhdGUgY2hhbmdlcywgcmV0dXJuIGRhdGEgbWVtW3DigKYocCtzKSkKICAgICAgICAgICAgICAgIHJldmVydCgwLCByZXR1cm5kYXRhc2l6ZSgpKQogICAgICAgICAgICB9CiAgICAgICAgICAgIGRlZmF1bHQgewogICAgICAgICAgICAgICAgLy8gcmV0dXJuKHAsIHMpIC0gZW5kIGV4ZWN1dGlvbiwgcmV0dXJuIGRhdGEgbWVtW3DigKYocCtzKSkKICAgICAgICAgICAgICAgIHJldHVybigwLCByZXR1cm5kYXRhc2l6ZSgpKQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIF9mYWxsYmFjaygpIHByaXZhdGUgewogICAgICAgIF9kZWxlZ2F0ZShfZ2V0SW1wbGVtZW50YXRpb24oKSk7CiAgICB9CgogICAgZmFsbGJhY2soKSBleHRlcm5hbCBwYXlhYmxlIHsKICAgICAgICBfZmFsbGJhY2soKTsKICAgIH0KCiAgICByZWNlaXZlKCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgX2ZhbGxiYWNrKCk7CiAgICB9Cn0KCmNvbnRyYWN0IFByb3h5QWRtaW4gewogICAgYWRkcmVzcyBwdWJsaWMgb3duZXI7CgogICAgY29uc3RydWN0b3IoKSB7CiAgICAgICAgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgfQoKICAgIG1vZGlmaWVyIG9ubHlPd25lcigpIHsKICAgICAgICByZXF1aXJlKG1zZy5zZW5kZXIgPT0gb3duZXIsICJub3Qgb3duZXIiKTsKICAgICAgICBfOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldFByb3h5QWRtaW4oYWRkcmVzcyBwcm94eSkgZXh0ZXJuYWwgdmlldyByZXR1cm5zIChhZGRyZXNzKSB7CiAgICAgICAgKGJvb2wgb2ssIGJ5dGVzIG1lbW9yeSByZXMpID0KICAgICAgICAgICAgcHJveHkuc3RhdGljY2FsbChhYmkuZW5jb2RlQ2FsbChQcm94eS5hZG1pbiwgKCkpKTsKICAgICAgICByZXF1aXJlKG9rLCAiY2FsbCBmYWlsZWQiKTsKICAgICAgICByZXR1cm4gYWJpLmRlY29kZShyZXMsIChhZGRyZXNzKSk7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0UHJveHlJbXBsZW1lbnRhdGlvbihhZGRyZXNzIHByb3h5KQogICAgICAgIGV4dGVybmFsCiAgICAgICAgdmlldwogICAgICAgIHJldHVybnMgKGFkZHJlc3MpCiAgICB7CiAgICAgICAgKGJvb2wgb2ssIGJ5dGVzIG1lbW9yeSByZXMpID0KICAgICAgICAgICAgcHJveHkuc3RhdGljY2FsbChhYmkuZW5jb2RlQ2FsbChQcm94eS5pbXBsZW1lbnRhdGlvbiwgKCkpKTsKICAgICAgICByZXF1aXJlKG9rLCAiY2FsbCBmYWlsZWQiKTsKICAgICAgICByZXR1cm4gYWJpLmRlY29kZShyZXMsIChhZGRyZXNzKSk7CiAgICB9CgogICAgZnVuY3Rpb24gY2hhbmdlUHJveHlBZG1pbihhZGRyZXNzIHBheWFibGUgcHJveHksIGFkZHJlc3MgYWRtaW4pCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBvbmx5T3duZXIKICAgIHsKICAgICAgICBQcm94eShwcm94eSkuY2hhbmdlQWRtaW4oYWRtaW4pOwogICAgfQoKICAgIGZ1bmN0aW9uIHVwZ3JhZGUoYWRkcmVzcyBwYXlhYmxlIHByb3h5LCBhZGRyZXNzIGltcGxlbWVudGF0aW9uKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb25seU93bmVyCiAgICB7CiAgICAgICAgUHJveHkocHJveHkpLnVwZ3JhZGVUbyhpbXBsZW1lbnRhdGlvbik7CiAgICB9Cn0KCmxpYnJhcnkgU3RvcmFnZVNsb3QgewogICAgc3RydWN0IEFkZHJlc3NTbG90IHsKICAgICAgICBhZGRyZXNzIHZhbHVlOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldEFkZHJlc3NTbG90KGJ5dGVzMzIgc2xvdCkKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChBZGRyZXNzU2xvdCBzdG9yYWdlIHIpCiAgICB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICByLnNsb3QgOj0gc2xvdAogICAgICAgIH0KICAgIH0KfQoKY29udHJhY3QgVGVzdFNsb3QgewogICAgYnl0ZXMzMiBwdWJsaWMgY29uc3RhbnQgc2xvdCA9IGtlY2NhazI1NigiVEVTVF9TTE9UIik7CgogICAgZnVuY3Rpb24gZ2V0U2xvdCgpIGV4dGVybmFsIHZpZXcgcmV0dXJucyAoYWRkcmVzcykgewogICAgICAgIHJldHVybiBTdG9yYWdlU2xvdC5nZXRBZGRyZXNzU2xvdChzbG90KS52YWx1ZTsKICAgIH0KCiAgICBmdW5jdGlvbiB3cml0ZVNsb3QoYWRkcmVzcyBfYWRkcikgZXh0ZXJuYWwgewogICAgICAgIFN0b3JhZ2VTbG90LmdldEFkZHJlc3NTbG90KHNsb3QpLnZhbHVlID0gX2FkZHI7CiAgICB9Cn0K",
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
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> count;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">inc</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        count <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CounterV2</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> count;

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
        (<span class="hljs-keyword">bool</span> ok,) <span class="hljs-operator">=</span> implementation.<span class="hljs-built_in">delegatecall</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">data</span>);
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
        <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"eip1967.proxy.implementation"</span>)) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>);
    <span class="hljs-comment">// 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103</span>
    <span class="hljs-keyword">bytes32</span> <span class="hljs-keyword">private</span> <span class="hljs-keyword">constant</span> ADMIN_SLOT <span class="hljs-operator">=</span>
        <span class="hljs-keyword">bytes32</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-built_in">keccak256</span>(<span class="hljs-string">"eip1967.proxy.admin"</span>)) <span class="hljs-operator">-</span> <span class="hljs-number">1</span>);

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
        <span class="hljs-built_in">require</span>(
            _implementation.<span class="hljs-built_in">code</span>.<span class="hljs-built_in">length</span> <span class="hljs-operator">&gt;</span> <span class="hljs-number">0</span>, <span class="hljs-string">"implementation is not contract"</span>
        );
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
            <span class="hljs-keyword">let</span> result <span class="hljs-operator">:=</span>
                <span class="hljs-built_in">delegatecall</span>(<span class="hljs-built_in">gas</span>(), _implementation, <span class="hljs-number">0</span>, <span class="hljs-built_in">calldatasize</span>(), <span class="hljs-number">0</span>, <span class="hljs-number">0</span>)

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
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span>
            proxy.<span class="hljs-built_in">staticcall</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Proxy.admin, ()));
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(res, (<span class="hljs-keyword">address</span>));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getProxyImplementation</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> proxy</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">address</span></span>)
    </span>{
        (<span class="hljs-keyword">bool</span> ok, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> res) <span class="hljs-operator">=</span>
            proxy.<span class="hljs-built_in">staticcall</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(Proxy.implementation, ()));
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"call failed"</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(res, (<span class="hljs-keyword">address</span>));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeProxyAdmin</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> proxy, <span class="hljs-keyword">address</span> admin</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title">onlyOwner</span>
    </span>{
        Proxy(proxy).changeAdmin(admin);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">upgrade</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> <span class="hljs-keyword">payable</span> proxy, <span class="hljs-keyword">address</span> implementation</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title">onlyOwner</span>
    </span>{
        Proxy(proxy).upgradeTo(implementation);
    }
}

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">StorageSlot</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">AddressSlot</span> {
        <span class="hljs-keyword">address</span> value;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAddressSlot</span>(<span class="hljs-params"><span class="hljs-keyword">bytes32</span> slot</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">AddressSlot <span class="hljs-keyword">storage</span> r</span>)
    </span>{
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
