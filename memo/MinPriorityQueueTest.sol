pragma solidity ^0.5.1;

import "./MinPriorityQueue.sol";

contract MinPriorityQueueTest {
  using MinPriorityQueue for uint[];

  uint[] public heap;

  function insert(uint256 k) public {
    heap.insert(k);
  }

  function delMin() public {
    heap.delMin();
  }

  function length() public view returns (uint256) {
    return heap.length;
  }

  function getMin() public view returns (uint256) {
    require(heap.length > 0);
    return heap.getMin();
  }

  function test() public returns (uint) {
    insert(3);
    insert(1);
    insert(5);
    insert(4);
    insert(2);

    return getMin();
  }
}
