// metadata
export const version = "0.8.26"
export const title = "Chronicle Price Oracle"
export const description = "Chronicle Price Oracle"
export const cyfrinLink = ""

export const keywords = ["defi", "chronicle", "price", "oracle", "oracles"]

export const codes = [
  {
    fileName: "chroniclePriceOracle.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xNjsKCi8qKgogKiBAdGl0bGUgT3JhY2xlUmVhZGVyCiAqIEBub3RpY2UgQSBzaW1wbGUgY29udHJhY3QgdG8gcmVhZCBmcm9tIENocm9uaWNsZSBvcmFjbGVzCiAqIEBkZXYgVG8gc2VlIHRoZSBmdWxsIHJlcG9zaXRvcnksIHZpc2l0IGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJvbmljbGVwcm90b2NvbC9PcmFjbGVSZWFkZXItRXhhbXBsZS4KICogQGRldiBBZGRyZXNzZXMgaW4gdGhpcyBjb250cmFjdCBhcmUgaGFyZGNvZGVkIGZvciB0aGUgU2Vwb2xpYSB0ZXN0bmV0LgogKiBGb3Igb3RoZXIgc3VwcG9ydGVkIG5ldHdvcmtzLCBjaGVjayB0aGUgaHR0cHM6Ly9jaHJvbmljbGVsYWJzLm9yZy9kYXNoYm9hcmQvb3JhY2xlcy4KICovCmNvbnRyYWN0IE9yYWNsZVJlYWRlciB7CiAgICAvKioKICAgICogQG5vdGljZSBUaGUgQ2hyb25pY2xlIG9yYWNsZSB0byByZWFkIGZyb20uCiAgICAqIENocm9uaWNsZV9FVEhfVVNEXzM6MHhkZDZENzYyNjJGZDdCZERlNDI4ZGNmQ2Q5NDM4NkViQWUwMTUxNjAzCiAgICAqIE5ldHdvcms6IFNlcG9saWEKICAgICovCgogICAgSUNocm9uaWNsZSBwdWJsaWMgY2hyb25pY2xlID0gSUNocm9uaWNsZShhZGRyZXNzKDB4ZGQ2RDc2MjYyRmQ3QmREZTQyOGRjZkNkOTQzODZFYkFlMDE1MTYwMykpOwoKICAgIC8qKiAKICAgICogQG5vdGljZSBUaGUgU2VsZktpc3NlciBncmFudGluZyBhY2Nlc3MgdG8gQ2hyb25pY2xlIG9yYWNsZXMuCiAgICAqIFNlbGZLaXNzZXJfMToweDBEY2MxOTY1NzAwNzcxMzQ4M0E1Y0E3NmU2QTdiYmU1ZjU2RUEzN2QKICAgICogTmV0d29yazogU2Vwb2xpYQogICAgKiBGb3IgYSBmdWxsIGxpc3Qgb2YgU2VsZktpc3NlciBhZGRyZXNzZXMgb24gZGlmZmVyZW50IFRlc3RuZXQgbmV0d29ya3MKICAgICogcGxlYXNlIGNoZWNrIGhlcmUgaHR0cHM6Ly9kb2NzLmNocm9uaWNsZWxhYnMub3JnL0RldmVsb3BlcnMvdHV0b3JpYWxzL1JlbWl4CiAgICAqLwogICAgSVNlbGZLaXNzZXIgcHVibGljIHNlbGZLaXNzZXIgPSBJU2VsZktpc3NlcihhZGRyZXNzKDB4MERjYzE5NjU3MDA3NzEzNDgzQTVjQTc2ZTZBN2JiZTVmNTZFQTM3ZCkpOwoKICAgIGNvbnN0cnVjdG9yKCkgewogICAgICAgIC8vIE5vdGUgdG8gYWRkIGFkZHJlc3ModGhpcykgdG8gY2hyb25pY2xlIG9yYWNsZSdzIHdoaXRlbGlzdC4KICAgICAgICAvLyBUaGlzIGFsbG93cyB0aGUgY29udHJhY3QgdG8gcmVhZCBmcm9tIHRoZSBjaHJvbmljbGUgb3JhY2xlLgogICAgICAgIHNlbGZLaXNzZXIuc2VsZktpc3MoYWRkcmVzcyhjaHJvbmljbGUpKTsKICAgIH0KCiAgICAvKiogCiAgICAqIEBub3RpY2UgRnVuY3Rpb24gdG8gcmVhZCB0aGUgbGF0ZXN0IGRhdGEgZnJvbSB0aGUgQ2hyb25pY2xlIG9yYWNsZS4KICAgICogQHJldHVybiB2YWwgVGhlIGN1cnJlbnQgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIG9yYWNsZS4KICAgICogQHJldHVybiBhZ2UgVGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCB1cGRhdGUgZnJvbSB0aGUgb3JhY2xlLgogICAgKi8KICAgIGZ1bmN0aW9uIHJlYWQoKSBleHRlcm5hbCB2aWV3IHJldHVybnMgKHVpbnQyNTYgdmFsLCB1aW50MjU2IGFnZSkgewogICAgICAgICh2YWwsIGFnZSkgPSBjaHJvbmljbGUucmVhZFdpdGhBZ2UoKTsKICAgIH0KfQoKLy8gQ29waWVkIGZyb20gW2Nocm9uaWNsZS1zdGRdKGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJvbmljbGVwcm90b2NvbC9jaHJvbmljbGUtc3RkL2Jsb2IvbWFpbi9zcmMvSUNocm9uaWNsZS5zb2wpLgppbnRlcmZhY2UgSUNocm9uaWNsZSB7CiAgICAvKiogCiAgICAqIEBub3RpY2UgUmV0dXJucyB0aGUgb3JhY2xlJ3MgY3VycmVudCB2YWx1ZS4KICAgICogQGRldiBSZXZlcnRzIGlmIG5vIHZhbHVlIHNldC4KICAgICogQHJldHVybiB2YWx1ZSBUaGUgb3JhY2xlJ3MgY3VycmVudCB2YWx1ZS4KICAgICovCiAgICBmdW5jdGlvbiByZWFkKCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2IHZhbHVlKTsKCiAgICAvKiogCiAgICAqIEBub3RpY2UgUmV0dXJucyB0aGUgb3JhY2xlJ3MgY3VycmVudCB2YWx1ZSBhbmQgaXRzIGFnZS4KICAgICogQGRldiBSZXZlcnRzIGlmIG5vIHZhbHVlIHNldC4KICAgICogQHJldHVybiB2YWx1ZSBUaGUgb3JhY2xlJ3MgY3VycmVudCB2YWx1ZSB1c2luZyAxOCBkZWNpbWFscyBwbGFjZXMuCiAgICAqIEByZXR1cm4gYWdlIFRoZSB2YWx1ZSdzIGFnZSBhcyBhIFVuaXggVGltZXN0YW1wIC4KICAgICogKi8KICAgIGZ1bmN0aW9uIHJlYWRXaXRoQWdlKCkgZXh0ZXJuYWwgdmlldyByZXR1cm5zICh1aW50MjU2IHZhbHVlLCB1aW50MjU2IGFnZSk7Cn0KCi8vIENvcGllZCBmcm9tIFtzZWxmLWtpc3Nlcl0oaHR0cHM6Ly9naXRodWIuY29tL2Nocm9uaWNsZXByb3RvY29sL3NlbGYta2lzc2VyL2Jsb2IvbWFpbi9zcmMvSVNlbGZLaXNzZXIuc29sKS4KaW50ZXJmYWNlIElTZWxmS2lzc2VyIHsKICAgIC8vLyBAbm90aWNlIEtpc3NlcyBjYWxsZXIgb24gYWRkcmVzcy4KICAgIGZ1bmN0aW9uIHNlbGZLaXNzKGFkZHJlc3Mgb3JhY2xlKSBleHRlcm5hbDsKfQ==",
  },
]

const html = `<h3>ETH / USD Price Oracle</h3>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.16;</span>

<span class="hljs-comment">/**
 * @title OracleReader
 * @notice A simple contract to read from Chronicle oracles
 * @dev To see the full repository, visit https://github.com/chronicleprotocol/OracleReader-Example.
 * @dev Addresses in this contract are hardcoded for the Sepolia testnet.
 * For other supported networks, check the https://chroniclelabs.org/dashboard/oracles.
 */</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">OracleReader</span> </span>{
    <span class="hljs-comment">/**
    * @notice The Chronicle oracle to read from.
    * Chronicle_ETH_USD_3:0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603
    * Network: Sepolia
    */</span>

    IChronicle <span class="hljs-keyword">public</span> chronicle <span class="hljs-operator">=</span> IChronicle(<span class="hljs-keyword">address</span>(<span class="hljs-number">0xdd6D76262Fd7BdDe428dcfCd94386EbAe0151603</span>));

    <span class="hljs-comment">/** 
    * @notice The SelfKisser granting access to Chronicle oracles.
    * SelfKisser_1:0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d
    * Network: Sepolia
    * For a full list of SelfKisser addresses on different Testnet networks
    * please check here https://docs.chroniclelabs.org/Developers/tutorials/Remix
    */</span>
    ISelfKisser <span class="hljs-keyword">public</span> selfKisser <span class="hljs-operator">=</span> ISelfKisser(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x0Dcc19657007713483A5cA76e6A7bbe5f56EA37d</span>));

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// Note to add address(this) to chronicle oracle&#x27;s whitelist.</span>
        <span class="hljs-comment">// This allows the contract to read from the chronicle oracle.</span>
        selfKisser.selfKiss(<span class="hljs-keyword">address</span>(chronicle));
    }

    <span class="hljs-comment">/** 
    * @notice Function to read the latest data from the Chronicle oracle.
    * @return val The current value returned by the oracle.
    * @return age The timestamp of the last update from the oracle.
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">read</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> val, <span class="hljs-keyword">uint256</span> age</span>) </span>{
        (val, age) <span class="hljs-operator">=</span> chronicle.readWithAge();
    }
}

<span class="hljs-comment">// Copied from [chronicle-std](https://github.com/chronicleprotocol/chronicle-std/blob/main/src/IChronicle.sol).</span>
<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">IChronicle</span> </span>{
    <span class="hljs-comment">/** 
    * @notice Returns the oracle&#x27;s current value.
    * @dev Reverts if no value set.
    * @return value The oracle&#x27;s current value.
    */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">read</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> value</span>)</span>;

    <span class="hljs-comment">/** 
    * @notice Returns the oracle&#x27;s current value and its age.
    * @dev Reverts if no value set.
    * @return value The oracle&#x27;s current value using 18 decimals places.
    * @return age The value&#x27;s age as a Unix Timestamp .
    * */</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">readWithAge</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> value, <span class="hljs-keyword">uint256</span> age</span>)</span>;
}

<span class="hljs-comment">// Copied from [self-kisser](https://github.com/chronicleprotocol/self-kisser/blob/main/src/ISelfKisser.sol).</span>
<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">ISelfKisser</span> </span>{
    <span class="hljs-comment">/// @notice Kisses caller on address.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">selfKiss</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> oracle</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span></span>;
}
</code></pre>`

export default html
