// metadata
export const version = "0.8.20"
export const title = "Contract that Creates other Contracts"
export const description =
  "Learn how to create new contracts from inside of a contract with Solidity"

export const keywords = [
  "new",
  "contract",
  "create",
  "contracts",
  "creates",
  "new",
  "create2",
  "salt",
]

export const codes = [
  {
    fileName: "NewContract.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmNvbnRyYWN0IENhciB7CiAgICBhZGRyZXNzIHB1YmxpYyBvd25lcjsKICAgIHN0cmluZyBwdWJsaWMgbW9kZWw7CiAgICBhZGRyZXNzIHB1YmxpYyBjYXJBZGRyOwoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3MgX293bmVyLCBzdHJpbmcgbWVtb3J5IF9tb2RlbCkgcGF5YWJsZSB7CiAgICAgICAgb3duZXIgPSBfb3duZXI7CiAgICAgICAgbW9kZWwgPSBfbW9kZWw7CiAgICAgICAgY2FyQWRkciA9IGFkZHJlc3ModGhpcyk7CiAgICB9Cn0KCmNvbnRyYWN0IENhckZhY3RvcnkgewogICAgQ2FyW10gcHVibGljIGNhcnM7CgogICAgZnVuY3Rpb24gY3JlYXRlKGFkZHJlc3MgX293bmVyLCBzdHJpbmcgbWVtb3J5IF9tb2RlbCkgcHVibGljIHsKICAgICAgICBDYXIgY2FyID0gbmV3IENhcihfb3duZXIsIF9tb2RlbCk7CiAgICAgICAgY2Fycy5wdXNoKGNhcik7CiAgICB9CgogICAgZnVuY3Rpb24gY3JlYXRlQW5kU2VuZEV0aGVyKGFkZHJlc3MgX293bmVyLCBzdHJpbmcgbWVtb3J5IF9tb2RlbCkKICAgICAgICBwdWJsaWMKICAgICAgICBwYXlhYmxlCiAgICB7CiAgICAgICAgQ2FyIGNhciA9IChuZXcgQ2FyKXt2YWx1ZTogbXNnLnZhbHVlfShfb3duZXIsIF9tb2RlbCk7CiAgICAgICAgY2Fycy5wdXNoKGNhcik7CiAgICB9CgogICAgZnVuY3Rpb24gY3JlYXRlMihhZGRyZXNzIF9vd25lciwgc3RyaW5nIG1lbW9yeSBfbW9kZWwsIGJ5dGVzMzIgX3NhbHQpCiAgICAgICAgcHVibGljCiAgICB7CiAgICAgICAgQ2FyIGNhciA9IChuZXcgQ2FyKXtzYWx0OiBfc2FsdH0oX293bmVyLCBfbW9kZWwpOwogICAgICAgIGNhcnMucHVzaChjYXIpOwogICAgfQoKICAgIGZ1bmN0aW9uIGNyZWF0ZTJBbmRTZW5kRXRoZXIoCiAgICAgICAgYWRkcmVzcyBfb3duZXIsCiAgICAgICAgc3RyaW5nIG1lbW9yeSBfbW9kZWwsCiAgICAgICAgYnl0ZXMzMiBfc2FsdAogICAgKSBwdWJsaWMgcGF5YWJsZSB7CiAgICAgICAgQ2FyIGNhciA9IChuZXcgQ2FyKXt2YWx1ZTogbXNnLnZhbHVlLCBzYWx0OiBfc2FsdH0oX293bmVyLCBfbW9kZWwpOwogICAgICAgIGNhcnMucHVzaChjYXIpOwogICAgfQoKICAgIGZ1bmN0aW9uIGdldENhcih1aW50MjU2IF9pbmRleCkKICAgICAgICBwdWJsaWMKICAgICAgICB2aWV3CiAgICAgICAgcmV0dXJucyAoCiAgICAgICAgICAgIGFkZHJlc3Mgb3duZXIsCiAgICAgICAgICAgIHN0cmluZyBtZW1vcnkgbW9kZWwsCiAgICAgICAgICAgIGFkZHJlc3MgY2FyQWRkciwKICAgICAgICAgICAgdWludDI1NiBiYWxhbmNlCiAgICAgICAgKQogICAgewogICAgICAgIENhciBjYXIgPSBjYXJzW19pbmRleF07CgogICAgICAgIHJldHVybiAoY2FyLm93bmVyKCksIGNhci5tb2RlbCgpLCBjYXIuY2FyQWRkcigpLCBhZGRyZXNzKGNhcikuYmFsYW5jZSk7CiAgICB9Cn0K",
  },
]

const html = `<p>Contracts can be created by other contracts using the <code>new</code> keyword. Since 0.8.0, <code>new</code> keyword supports <code>create2</code> feature by specifying <code>salt</code> options.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Car</span> </span>{
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;
    <span class="hljs-keyword">string</span> <span class="hljs-keyword">public</span> model;
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> carAddr;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _model</span>) <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        owner <span class="hljs-operator">=</span> _owner;
        model <span class="hljs-operator">=</span> _model;
        carAddr <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CarFactory</span> </span>{
    Car[] <span class="hljs-keyword">public</span> cars;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _model</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        Car car <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Car(_owner, _model);
        cars.<span class="hljs-built_in">push</span>(car);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createAndSendEther</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _model</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">payable</span></span>
    </span>{
        Car car <span class="hljs-operator">=</span> (<span class="hljs-keyword">new</span> Car){<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>}(_owner, _model);
        cars.<span class="hljs-built_in">push</span>(car);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create2</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _owner, <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _model, <span class="hljs-keyword">bytes32</span> _salt</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
    </span>{
        Car car <span class="hljs-operator">=</span> (<span class="hljs-keyword">new</span> Car){<span class="hljs-built_in">salt</span>: _salt}(_owner, _model);
        cars.<span class="hljs-built_in">push</span>(car);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">create2AndSendEther</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span> _owner,
        <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> _model,
        <span class="hljs-keyword">bytes32</span> _salt
    </span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        Car car <span class="hljs-operator">=</span> (<span class="hljs-keyword">new</span> Car){<span class="hljs-built_in">value</span>: <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">value</span>, <span class="hljs-built_in">salt</span>: _salt}(_owner, _model);
        cars.<span class="hljs-built_in">push</span>(car);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getCar</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> _index</span>)
        <span class="hljs-title"><span class="hljs-keyword">public</span></span>
        <span class="hljs-title"><span class="hljs-keyword">view</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">
            <span class="hljs-keyword">address</span> owner,
            <span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span> model,
            <span class="hljs-keyword">address</span> carAddr,
            <span class="hljs-keyword">uint256</span> balance
        </span>)
    </span>{
        Car car <span class="hljs-operator">=</span> cars[_index];

        <span class="hljs-keyword">return</span> (car.owner(), car.model(), car.carAddr(), <span class="hljs-keyword">address</span>(car).<span class="hljs-built_in">balance</span>);
    }
}
</code></pre>`

export default html
