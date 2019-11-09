const html = `<p>You can import local and external files in Solidity.</p>
<h3 id="local">Local</h3>
<p>Here is our folder structure.</p>
<pre><code>├── Import.sol
└── Foo.sol</code></pre><p>Foo.sol</p>
<pre><code class="language-solidity">pragma solidity ^0.5.11;

contract Foo {
    string public name = "Foo";
}
</code></pre>
<p>Import.sol</p>
<pre><code class="language-solidity">pragma solidity ^0.5.11;

// import Foo.sol from current directory
import "./Foo.sol";

contract Import {
    // Initialize Foo.sol
    Foo public foo = new Foo();

    // Test Foo.sol by getting it&#39;s name.
    function getFooName() public view returns (string memory) {
        return foo.name();
    }
}
</code></pre>
<h3 id="external">External</h3>
<p>You can also import from <a href="https://github.com">GitHub</a>, but you need to drop <code>blob/&lt;branch name&gt;</code> from the URL.</p>
<pre><code class="language-solidity">// https://github.com/owner/repo/blob/master/path/to/Contract.sol

import "github.com/owner/repo/path/to/Contract.sol"</code></pre>
`

export default html
