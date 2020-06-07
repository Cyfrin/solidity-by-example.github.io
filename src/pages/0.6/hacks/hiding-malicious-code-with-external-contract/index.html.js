// metadata
export const version = "0.6.0"
export const title = "Hiding Malicious Code with External Contract"
export const description = "An example of exploit where malicious code is hidden in an external contract in Solidity"

const html = `<h3 id="vulnerability">Vulnerability</h3>
<p>In Solidity any address can be casted into specific contract,
even if the contract at the address is not the one being casted.</p>
<p>This can be exploited to hide malicious code. Let&#39;s see how.</p>
<pre><code class="language-solidity">pragma solidity ^0.6.0;

/*
Let&#39;s say Alice can see the code of Foo and Bar but not Mal.
It is obvious to Alice that Foo.callBar() executes the code inside Bar.log().
However Eve deploys Foo with the address of Mal, so that calling Foo.callBar()
will actually execute the code at Mal.
*/

/*
1. Eve deploys Mal
2. Eve deploys Foo with the address of Mal
3. Alice calls Foo.callBar() after reading the code and judging that it is
   safe to call.
4. Although Alice expected Bar.log() to be execute, Mal.log() was executed.
*/

contract Foo {
    Bar bar;

    constructor(address _bar) public {
        bar = Bar(_bar);
    }

    function callBar() public {
        bar.log();
    }
}

contract Bar {
    event Log(string message);

    function log() public {
        emit Log("Bar was called");
    }
}

// This code is hidden in a separate file
contract Mal {
    event Log(string message);

    // function () external {
    //     emit Log("Mal was called");
    // }

    // Actually we can execute the same exploit even if this function does
    // not exit by using the fallback
    function log() public {
        emit Log("Mal was called");
    }
}</code></pre>
<h3 id="preventative-techniques">Preventative Techniques</h3>
<ul>
<li>Initialize a new contract inside the constructor</li>
<li>Make the address of external contract <code>public</code> so that the code of the
external contract can be reviewed</li>
</ul>
<pre><code class="language-solidity">Bar public bar;

constructor() public {
    bar = new Bar();
}</code></pre>
`

export default html
