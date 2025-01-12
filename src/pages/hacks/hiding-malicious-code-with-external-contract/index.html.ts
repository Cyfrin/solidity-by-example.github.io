// metadata
export const version = "0.8.26"
export const title = "Hiding Malicious Code with External Contract"
export const description =
  "An example of exploit where malicious code is hidden in an external contract in Solidity"
export const cyfrinLink =
  "https://www.cyfrin.io/glossary/hiding-malicious-code-with-external-contract-hack-solidity-code-example"

export const keywords = [
  "hack",
  "security",
  "hide",
  "hiding",
  "malicious",
  "code",
  "external",
  "contract",
]

export const codes = [
  {
    fileName: "ExternalContract.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qCkxldCdzIHNheSBBbGljZSBjYW4gc2VlIHRoZSBjb2RlIG9mIEZvbyBhbmQgQmFyIGJ1dCBub3QgTWFsLgpJdCBpcyBvYnZpb3VzIHRvIEFsaWNlIHRoYXQgRm9vLmNhbGxCYXIoKSBleGVjdXRlcyB0aGUgY29kZSBpbnNpZGUgQmFyLmxvZygpLgpIb3dldmVyIEV2ZSBkZXBsb3lzIEZvbyB3aXRoIHRoZSBhZGRyZXNzIG9mIE1hbCwgc28gdGhhdCBjYWxsaW5nIEZvby5jYWxsQmFyKCkKd2lsbCBhY3R1YWxseSBleGVjdXRlIHRoZSBjb2RlIGF0IE1hbC4KKi8KCi8qCjEuIEV2ZSBkZXBsb3lzIE1hbAoyLiBFdmUgZGVwbG95cyBGb28gd2l0aCB0aGUgYWRkcmVzcyBvZiBNYWwKMy4gQWxpY2UgY2FsbHMgRm9vLmNhbGxCYXIoKSBhZnRlciByZWFkaW5nIHRoZSBjb2RlIGFuZCBqdWRnaW5nIHRoYXQgaXQgaXMKICAgc2FmZSB0byBjYWxsLgo0LiBBbHRob3VnaCBBbGljZSBleHBlY3RlZCBCYXIubG9nKCkgdG8gYmUgZXhlY3V0ZSwgTWFsLmxvZygpIHdhcyBleGVjdXRlZC4KKi8KCmNvbnRyYWN0IEZvbyB7CiAgICBCYXIgYmFyOwoKICAgIGNvbnN0cnVjdG9yKGFkZHJlc3MgX2JhcikgewogICAgICAgIGJhciA9IEJhcihfYmFyKTsKICAgIH0KCiAgICBmdW5jdGlvbiBjYWxsQmFyKCkgcHVibGljIHsKICAgICAgICBiYXIubG9nKCk7CiAgICB9Cn0KCmNvbnRyYWN0IEJhciB7CiAgICBldmVudCBMb2coc3RyaW5nIG1lc3NhZ2UpOwoKICAgIGZ1bmN0aW9uIGxvZygpIHB1YmxpYyB7CiAgICAgICAgZW1pdCBMb2coIkJhciB3YXMgY2FsbGVkIik7CiAgICB9Cn0KCi8vIFRoaXMgY29kZSBpcyBoaWRkZW4gaW4gYSBzZXBhcmF0ZSBmaWxlCmNvbnRyYWN0IE1hbCB7CiAgICBldmVudCBMb2coc3RyaW5nIG1lc3NhZ2UpOwoKICAgIC8vIGZ1bmN0aW9uICgpIGV4dGVybmFsIHsKICAgIC8vICAgICBlbWl0IExvZygiTWFsIHdhcyBjYWxsZWQiKTsKICAgIC8vIH0KCiAgICAvLyBBY3R1YWxseSB3ZSBjYW4gZXhlY3V0ZSB0aGUgc2FtZSBleHBsb2l0IGV2ZW4gaWYgdGhpcyBmdW5jdGlvbiBkb2VzCiAgICAvLyBub3QgZXhpc3QgYnkgdXNpbmcgdGhlIGZhbGxiYWNrCiAgICBmdW5jdGlvbiBsb2coKSBwdWJsaWMgewogICAgICAgIGVtaXQgTG9nKCJNYWwgd2FzIGNhbGxlZCIpOwogICAgfQp9Cg==",
  },
]

const html = `<h3>Vulnerability</h3>
<p>In Solidity any address can be casted into specific contract,
even if the contract at the address is not the one being casted.</p>
<p>This can be exploited to hide malicious code. Let&#39;s see how.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/*
Let&#x27;s say Alice can see the code of Foo and Bar but not Mal.
It is obvious to Alice that Foo.callBar() executes the code inside Bar.log().
However Eve deploys Foo with the address of Mal, so that calling Foo.callBar()
will actually execute the code at Mal.
*/</span>

<span class="hljs-comment">/*
1. Eve deploys Mal
2. Eve deploys Foo with the address of Mal
3. Alice calls Foo.callBar() after reading the code and judging that it is
   safe to call.
4. Although Alice expected Bar.log() to be execute, Mal.log() was executed.
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Foo</span> </span>{
    Bar bar;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> _bar</span>) </span>{
        bar <span class="hljs-operator">=</span> Bar(_bar);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callBar</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        bar.log();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Bar</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"Bar was called"</span>);
    }
}

<span class="hljs-comment">// This code is hidden in a separate file</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Mal</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-comment">// function () external {</span>
    <span class="hljs-comment">//     emit Log("Mal was called");</span>
    <span class="hljs-comment">// }</span>

    <span class="hljs-comment">// Actually we can execute the same exploit even if this function does</span>
    <span class="hljs-comment">// not exist by using the fallback</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">log</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"Mal was called"</span>);
    }
}
</code></pre><h3>Preventative Techniques</h3>
<ul>
<li>Initialize a new contract inside the constructor</li>
<li>Make the address of external contract <code>public</code> so that the code of the
external contract can be reviewed</li>
</ul>
<pre><code class="language-solidity">Bar <span class="hljs-keyword">public</span> bar;

<span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
    bar <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Bar();
}
</code></pre>`

export default html
