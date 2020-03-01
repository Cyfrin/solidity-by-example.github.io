import React from "react"
import SEO from "../../components/SEO"
import styles from "./index.module.css"

function Home() {
  return (
    <div className={styles.component}>
      <SEO
        title="Solidity by Example"
        description="Learn smart contract programming using Solidity"
      />
      <h1 className={styles.header}>
        <a href="/">Solidity by Example</a>
      </h1>
      <div className={styles.main}>
        <p>
          an introduction to{" "}
          <a href="https://solidity.readthedocs.io">Solidity</a> with simple
          examples
        </p>

        <ul className={styles.list}>
          <li>
            <a href="/hello-world">Hello World</a>
          </li>
          <li>
            <a href="/state-variables">State Variables</a>
          </li>
          <li>
            <a href="/ether-units">Ether and Wei</a>
          </li>
          <li>
            <a href="/gas">Gas and Gas Price</a>
          </li>
          <li>
            <a href="/function">Function</a>
          </li>
          <li>
            <a href="/view-and-pure-functions">View and Pure Functions</a>
          </li>
          <li>
            <a href="/function-modifier">Function Modifier</a>
          </li>
          <li>
            <a href="/constructor">Constructor</a>
          </li>
          <li>
            <a href="/inheritance">Inheritance</a>
          </li>
          <li>
            <a href="/super">Calling Parent Contracts</a>
          </li>
          <li>
            <a href="/shadowing-inherited-state-variables">
              Shadowing Inherited State Variables
            </a>
          </li>
          <li>
            <a href="/visibility">Visibility</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/error">Error</a>
          </li>
          <li>
            <a href="/loop">Loop</a>
          </li>
          <li>
            <a href="/array">Array</a>
          </li>
          <li>
            <a href="/mapping">Mapping</a>
          </li>
          <li>
            <a href="/enum">Enum</a>
          </li>
          <li>
            <a href="/structs">Structs</a>
          </li>
          <li>
            <a href="/payable">Payable</a>
          </li>
          <li>
            <a href="/sending-ether">Sending Ether</a>
          </li>
          <li>
            <a href="/fallback">Fallback</a>
          </li>
          <li>
            <a href="/call">Call</a>
          </li>
          <li>
            <a href="/delegatecall">Delegatecall</a>
          </li>
          <li>
            <a href="/calling-contract">Calling Other Contract</a>
          </li>
          <li>
            <a href="/new-contract">Contract that Create other Contracts</a>
          </li>
          <li>
            <a href="/Library">Library</a>
          </li>
          <li>
            <a href="/hashing">Hashing with Keccak256</a>
          </li>
          <li>
            <a href="/signature">Verifying Signature</a>
          </li>
          <li>
            <a href="/self-destruct">Self Destruct</a>
          </li>
          <li>
            <a href="/import">Import</a>
          </li>
          <li>
            <a href="/safe-math">Safe Math</a>
          </li>
        </ul>

        <h3>Applications</h3>
        <ul>
          <li>
            <a href="/multi-sig-wallet">Multi-Sig Wallet</a>
          </li>
          <li>
            <a href="/dividend">Dividend</a>
          </li>
          <li>
            <a href="/payment-channel">Payment Channel</a>
          </li>
          <li>
            <a href="/merkle-tree">Merkle Tree</a>
          </li>
        </ul>

        <h3>Hacks</h3>
        <ul>
          <li>
            <a href="/re-entrancy">Re-Entrancy</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
