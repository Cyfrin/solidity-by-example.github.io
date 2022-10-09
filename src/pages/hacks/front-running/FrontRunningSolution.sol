// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/Strings.sol";


/*
   Now Let's see how to guard from front running using commit reveal scheme.
*/

/*
1. Alice deploys SecuredFindThisHash with 10 Ether.
2. Bob finds the correct string that will hash to the target hash. ("Ethereum").
3. Bob then finds the keccak256(Address in lowercase + Solution + Secret). 
   Address is his wallet address in lowercase, solution is "Ethereum", Secret is like an password ("mysecret") 
   that only Bob knows whic Bob uses to commit and reveal the solution.
   keccak2566("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266Ethereummysecret") = '0xf95b1dd61edc3bd962cdea3987c6f55bcb714a02a2c3eb73bd960d6b4387fc36'
3. Bob then calls commitSolution("0xf95b1dd61edc3bd962cdea3987c6f55bcb714a02a2c3eb73bd960d6b4387fc36"), 
   where he commits the calculated solution hash with gas price set to 15 gwei.
4. Eve is watching the transaction pool for the answer to be submitted.
5. Eve sees Bob's answer and he also calls commitSolution("0xf95b1dd61edc3bd962cdea3987c6f55bcb714a02a2c3eb73bd960d6b4387fc36")
   with a higher gas price than Bob (100 gwei).
6. Eve's transaction was mined before Bob's transaction, but Eve has not got the reward yet.
   He needs to call revealSolution() with exact secret and solution, so lets say he is watching the transaction pool
   to front run Bob as he did previously
7. Then Bob calls the revealSolution("Ethereum", "mysecret") with gas price set to 15 gwei;
8. Let's consider that Eve's who's watching the transaction pool, find's Bob's reveal solution transaction and he also calls 
   revealSolution("Ethereum", "mysecret") with higher gas price than Bob (100 gwei)
9. Let's consider that this time also Eve's reveal transaction was mined before Bob's transaction, but Eve will be
   reverted with "Hash doesn't match" error. Since the revealSolution() function checks the hash using 
   keccak256(msg.sender + solution + secret). So this time eve fails to win the reward.
10.But Bob's revealSolution("Ethereum", "mysecret") passes the hash check and gets the reward of 10 ether.
*/


contract SecuredFindThisHash {

    // Struct is used to store the commit details
    struct Commit {
        bytes32 solutionHash;
        uint commitTime;
        bool revealed;
    }

    // The hash that is needed to be solved
    bytes32 public hash = 0x564ccaf7594d66b1eaaea24fe01f0585bf52ee70852af4eac0cc4b04711cd0e2;
    
    // Address of the winner
    address public winner;

    // Price to be rewarded
    uint public reward;

    // Status of game
    bool public ended;

    // Mapping to store the commit details with address
    mapping(address => Commit) commits;

    // Modifier to check if the game is active
    modifier gameActive {
        require(!ended, "Already ended");
        _;
    }

    constructor() payable {
        reward = msg.value;
    }

    /* 
       Commit function to store the hash calculated using keccak256(address in lowercase + solution + secret). 
       Users can only commit once and if the game is active.
    */
    function commitSolution(bytes32 _solutionHash) public gameActive {
        Commit storage commit = commits[msg.sender];
        require(commit.commitTime == 0, "Already committed");
        commit.solutionHash = _solutionHash;
        commit.commitTime = block.timestamp;
        commit.revealed = false;
    }

    /* 
        Function to get the commit details. It returns a tuple of (solutionHash, commitTime, revealStatus);  
        Users can get solution only if the game is active and they have committed a solutionHash
    */
    function getMySolution() public view gameActive returns(bytes32, uint, bool) {
        Commit storage commit = commits[msg.sender];
        require(commit.commitTime != 0, "Not committed yet");
        return (commit.solutionHash, commit.commitTime, commit.revealed);        
    }

    /* 
        Function to reveal the commit and get the reward. 
        Users can get reveal solution only if the game is active and they have committed a solutionHash and not revealed yet.
        It generates an keccak256(msg.sender + solution + secret) and checks it with the previously commited hash.  
        Front runners will not be able to pass this check since the msg.sender is different.
        Then the actual solution is checked using keccak256(solution), if the solution matches, the winner is declared, 
        the game is ended and the reward amount is sent to the winner.
    */
    function revealSolution (string memory _solution, string memory _secret) public gameActive {
        Commit storage commit = commits[msg.sender];
        require(commit.commitTime != 0, "Not committed yet");
        require(!commit.revealed, "Already commited and revealed");

        bytes32 solutionHash = keccak256(abi.encodePacked(Strings.toHexString(msg.sender), _solution, _secret));
        require(solutionHash == commit.solutionHash, "Hash doesn't match");

        require(keccak256(abi.encodePacked(_solution)) != hash, "Incorrect answer");

        winner = msg.sender;
        ended = true;

        (bool sent,) = payable(msg.sender).call{value: reward}("");
        if(!sent){
            winner = address(0);
            ended = false;
            revert("Failed to send ether.");
        }
    }
}
