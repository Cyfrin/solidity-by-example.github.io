// metadata
export const version = "0.8.26"
export const title = "User Defined Value Types"
export const description = "User defined value types"

export const keywords = ["data", "user", "defined", "value", "types", "udvt"]

export const codes = [
  {
    fileName: "UserDefinedValueTypes.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8vIENvZGUgY29waWVkIGZyb20gb3B0aW1pc20KLy8gaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtLW9wdGltaXNtL29wdGltaXNtL2Jsb2IvZGV2ZWxvcC9wYWNrYWdlcy9jb250cmFjdHMtYmVkcm9jay9zcmMvZGlzcHV0ZS9saWIvTGliVURULnNvbAoKdHlwZSBEdXJhdGlvbiBpcyB1aW50NjQ7Cgp0eXBlIFRpbWVzdGFtcCBpcyB1aW50NjQ7Cgp0eXBlIENsb2NrIGlzIHVpbnQxMjg7CgpsaWJyYXJ5IExpYkNsb2NrIHsKICAgIGZ1bmN0aW9uIHdyYXAoRHVyYXRpb24gX2R1cmF0aW9uLCBUaW1lc3RhbXAgX3RpbWVzdGFtcCkKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChDbG9jayBjbG9ja18pCiAgICB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICAvLyBkYXRhIHwgRHVyYXRpb24gfCBUaW1lc3RhbXAKICAgICAgICAgICAgLy8gYml0ICB8IDAgLi4uIDYzIHwgNjQgLi4uIDEyNwogICAgICAgICAgICBjbG9ja18gOj0gb3Ioc2hsKDB4NDAsIF9kdXJhdGlvbiksIF90aW1lc3RhbXApCiAgICAgICAgfQogICAgfQoKICAgIGZ1bmN0aW9uIGR1cmF0aW9uKENsb2NrIF9jbG9jaykKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChEdXJhdGlvbiBkdXJhdGlvbl8pCiAgICB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBkdXJhdGlvbl8gOj0gc2hyKDB4NDAsIF9jbG9jaykKICAgICAgICB9CiAgICB9CgogICAgZnVuY3Rpb24gdGltZXN0YW1wKENsb2NrIF9jbG9jaykKICAgICAgICBpbnRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICByZXR1cm5zIChUaW1lc3RhbXAgdGltZXN0YW1wXykKICAgIHsKICAgICAgICBhc3NlbWJseSB7CiAgICAgICAgICAgIHRpbWVzdGFtcF8gOj0gc2hyKDB4QzAsIHNobCgweEMwLCBfY2xvY2spKQogICAgICAgIH0KICAgIH0KfQoKLy8gQ2xvY2sgbGlicmFyeSB3aXRob3V0IHVzZXIgZGVmaW5lZCB2YWx1ZSB0eXBlCmxpYnJhcnkgTGliQ2xvY2tCYXNpYyB7CiAgICBmdW5jdGlvbiB3cmFwKHVpbnQ2NCBfZHVyYXRpb24sIHVpbnQ2NCBfdGltZXN0YW1wKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIHJldHVybnMgKHVpbnQxMjggY2xvY2spCiAgICB7CiAgICAgICAgYXNzZW1ibHkgewogICAgICAgICAgICBjbG9jayA6PSBvcihzaGwoMHg0MCwgX2R1cmF0aW9uKSwgX3RpbWVzdGFtcCkKICAgICAgICB9CiAgICB9Cn0KCmNvbnRyYWN0IEV4YW1wbGVzIHsKICAgIGZ1bmN0aW9uIGV4YW1wbGVfbm9fdXZkdCgpIGV4dGVybmFsIHsKICAgICAgICAvLyBXaXRob3V0IFVEVlQKICAgICAgICB1aW50MTI4IGNsb2NrOwogICAgICAgIHVpbnQ2NCBkID0gMTsKICAgICAgICB1aW50NjQgdCA9IHVpbnQ2NChibG9jay50aW1lc3RhbXApOwogICAgICAgIGNsb2NrID0gTGliQ2xvY2tCYXNpYy53cmFwKGQsIHQpOwogICAgICAgIC8vIE9vcHMhIHdyb25nIG9yZGVyIG9mIGlucHV0cyBidXQgc3RpbGwgY29tcGlsZXMKICAgICAgICBjbG9jayA9IExpYkNsb2NrQmFzaWMud3JhcCh0LCBkKTsKICAgIH0KCiAgICBmdW5jdGlvbiBleGFtcGxlX3V2ZHQoKSBleHRlcm5hbCB7CiAgICAgICAgLy8gVHVybiB2YWx1ZSB0eXBlIGludG8gdXNlciBkZWZpbmVkIHZhbHVlIHR5cGUKICAgICAgICBEdXJhdGlvbiBkID0gRHVyYXRpb24ud3JhcCgxKTsKICAgICAgICBUaW1lc3RhbXAgdCA9IFRpbWVzdGFtcC53cmFwKHVpbnQ2NChibG9jay50aW1lc3RhbXApKTsKICAgICAgICAvLyBUdXJuIHVzZXIgZGVmaW5lZCB2YWx1ZSB0eXBlIGJhY2sgaW50byBwcmltaXRpdmUgdmFsdWUgdHlwZQogICAgICAgIHVpbnQ2NCBkX3U2NCA9IER1cmF0aW9uLnVud3JhcChkKTsKICAgICAgICB1aW50NjQgdF91NTQgPSBUaW1lc3RhbXAudW53cmFwKHQpOwoKICAgICAgICAvLyBMaWJDbG9jayBleGFtcGxlCiAgICAgICAgQ2xvY2sgY2xvY2sgPSBDbG9jay53cmFwKDApOwogICAgICAgIGNsb2NrID0gTGliQ2xvY2sud3JhcChkLCB0KTsKICAgICAgICAvLyBPb3BzISB3cm9uZyBvcmRlciBvZiBpbnB1dHMKICAgICAgICAvLyBUaGlzIHdpbGwgbm90IGNvbXBpbGUKICAgICAgICAvLyBjbG9jayA9IExpYkNsb2NrLndyYXAodCwgZCk7CiAgICB9Cn0K",
  },
]

const html = `<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">// Code copied from optimism</span>
<span class="hljs-comment">// https://github.com/ethereum-optimism/optimism/blob/develop/packages/contracts-bedrock/src/dispute/lib/LibUDT.sol</span>

<span class="hljs-keyword">type</span> Duration <span class="hljs-keyword">is</span> <span class="hljs-keyword">uint64</span>;

<span class="hljs-keyword">type</span> Timestamp <span class="hljs-keyword">is</span> <span class="hljs-keyword">uint64</span>;

<span class="hljs-keyword">type</span> Clock <span class="hljs-keyword">is</span> <span class="hljs-keyword">uint128</span>;

<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">LibClock</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">wrap</span>(<span class="hljs-params">Duration _duration, Timestamp _timestamp</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Clock clock_</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            <span class="hljs-comment">// data | Duration | Timestamp</span>
            <span class="hljs-comment">// bit  | 0 ... 63 | 64 ... 127</span>
            clock_ <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">0x40</span>, _duration), _timestamp)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">duration</span>(<span class="hljs-params">Clock _clock</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Duration duration_</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            duration_ <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(<span class="hljs-number">0x40</span>, _clock)
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">timestamp</span>(<span class="hljs-params">Clock _clock</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Timestamp timestamp_</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            timestamp_ <span class="hljs-operator">:=</span> <span class="hljs-built_in">shr</span>(<span class="hljs-number">0xC0</span>, <span class="hljs-built_in">shl</span>(<span class="hljs-number">0xC0</span>, _clock))
        }
    }
}

<span class="hljs-comment">// Clock library without user defined value type</span>
<span class="hljs-class"><span class="hljs-keyword">library</span> <span class="hljs-title">LibClockBasic</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">wrap</span>(<span class="hljs-params"><span class="hljs-keyword">uint64</span> _duration, <span class="hljs-keyword">uint64</span> _timestamp</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint128</span> clock</span>)
    </span>{
        <span class="hljs-keyword">assembly</span> {
            clock <span class="hljs-operator">:=</span> <span class="hljs-built_in">or</span>(<span class="hljs-built_in">shl</span>(<span class="hljs-number">0x40</span>, _duration), _timestamp)
        }
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Examples</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example_no_uvdt</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// Without UDVT</span>
        <span class="hljs-keyword">uint128</span> clock;
        <span class="hljs-keyword">uint64</span> d <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        <span class="hljs-keyword">uint64</span> t <span class="hljs-operator">=</span> <span class="hljs-keyword">uint64</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>);
        clock <span class="hljs-operator">=</span> LibClockBasic.<span class="hljs-built_in">wrap</span>(d, t);
        <span class="hljs-comment">// Oops! wrong order of inputs but still compiles</span>
        clock <span class="hljs-operator">=</span> LibClockBasic.<span class="hljs-built_in">wrap</span>(t, d);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">example_uvdt</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-comment">// Turn value type into user defined value type</span>
        Duration d <span class="hljs-operator">=</span> Duration.<span class="hljs-built_in">wrap</span>(<span class="hljs-number">1</span>);
        Timestamp t <span class="hljs-operator">=</span> Timestamp.<span class="hljs-built_in">wrap</span>(<span class="hljs-keyword">uint64</span>(<span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>));
        <span class="hljs-comment">// Turn user defined value type back into primitive value type</span>
        <span class="hljs-keyword">uint64</span> d_u64 <span class="hljs-operator">=</span> Duration.<span class="hljs-built_in">unwrap</span>(d);
        <span class="hljs-keyword">uint64</span> t_u54 <span class="hljs-operator">=</span> Timestamp.<span class="hljs-built_in">unwrap</span>(t);

        <span class="hljs-comment">// LibClock example</span>
        Clock clock <span class="hljs-operator">=</span> Clock.<span class="hljs-built_in">wrap</span>(<span class="hljs-number">0</span>);
        clock <span class="hljs-operator">=</span> LibClock.<span class="hljs-built_in">wrap</span>(d, t);
        <span class="hljs-comment">// Oops! wrong order of inputs</span>
        <span class="hljs-comment">// This will not compile</span>
        <span class="hljs-comment">// clock = LibClock.wrap(t, d);</span>
    }
}
</code></pre>`

export default html
