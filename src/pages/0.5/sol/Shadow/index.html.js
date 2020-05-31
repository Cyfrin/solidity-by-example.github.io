// metadata
export const version = "0.5.16"
export const title = "Shadowing Inherited State Variables"
export const description = "An example of shadowing state variables by inheritance"

const html = `<p>Unlike functions, state variables cannot be overridden by re-declaring it
in the child contract.</p>
<p>Let&#39;s learn how to correctly override inherited state variables.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract A {
    string public name = "Contract A";

    function getName() public view returns (string memory) {
        return name;
    }
}

contract B is A {
    // This is the incorrect way to override inherited state variables.
    string public name = "Contract B";

    // B.getName returns "Contract A"

    // Functions defined in contract A that use the &#39;name&#39; state variable
    // will access A.name. Functions defined in B that uses &#39;name&#39; will
    // access B.name.
}

contract C is A {
    // This is the correct way to override inherited state variables.
    constructor() public {
        name = "Contract C";
    }

    // C.getName returns "Contract C"
}
</code></pre>
`

export default html
