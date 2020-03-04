pragma solidity ^0.5.16;

contract Keccak256 {
  struct Todo {
    string text;
    uint createdAt;
  }

  // Example to create an ID using keccak256
  function getTodoId() public pure returns (uint) {
    Todo memory todo = Todo({
      text: "Creawte Todo ID",
      createdAt:123456
    });

    return uint(keccak256(abi.encodePacked(todo.text, todo.createdAt)));
  }

  // Example of commit-reveal scheme
  // Try:
  // 1. create a commitment hash by calling getCommitmentHash(your address, "Trump")
  // 2. commit(hash returned from previous step)
  // 3. revel(your address, "Trump", your commitment hash) should return true
  // You have successfully voted without revealing your choice.
  struct Vote {
    address voter;
    string candidate;
  }

  mapping(bytes32 => bool) public voted;

  function getCommitmentHash(address voter, string memory candidate)
    public
    view
    returns (bytes32)
  {
    Vote memory vote = Vote({
      voter: voter,
      candidate: candidate
    });

    return keccak256(abi.encodePacked(vote.voter, vote.candidate));
  }

  function commit(bytes32 commitmentHash) public {
    voted[commitmentHash] = true;
  }

  function reveal(
    address voter, string memory candidate, bytes32 commitmentHash
  )
    public
    view
    returns (bool)
  {
    bytes32 hash = getCommitmentHash(voter, candidate);

    require(voted[hash], "Voter has not voted");
    require(hash == commitmentHash, "Invalid commitment hash");

    return true;
  }
}

/*
TODO

If you use keccak256(abi.encodePacked(a, b)) and both a and b are dynamic types, it is easy to craft collisions in the hash value by moving parts of a into b and vice-versa. More specifically, abi.encodePacked("a", "bc") == abi.encodePacked("ab", "c"). If you use abi.encodePacked for signatures, authentication or data integrity, make sure to always use the same types and check that at most one of them is dynamic. Unless there is a compelling reason, abi.encode shou
*/
