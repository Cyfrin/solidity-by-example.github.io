pragma solidity ^0.5.1;

import "./SafeMath.sol";

library MinPriorityQueue {
  using SafeMath for uint;

  function insert(uint[] storage self, uint i) internal {
    self.push(i);
    _percUp(self);
  }

  function delMin(uint[] storage self) internal returns (uint) {
    uint min = self[0];

    // replace last element with root
    self[0] = self[self.length - 1];
    self.pop();

    _percDown(self);

    return min;
  }

  function getMin(uint[] storage self) internal view returns (uint) {
    return self[0];
  }

  function _getMinIndex(uint[] storage self, uint i) private view returns (uint) {
    uint minIndex = i;
    uint leftIndex = i.mul(2).add(1);
    uint rightIndex = i.mul(2).add(2);

    // NOTE: choose left index if left value < min and left value == right value
    if (leftIndex < self.length && self[leftIndex] < self[minIndex]) {
      minIndex = leftIndex;
    }
    if (rightIndex < self.length && self[rightIndex] < self[minIndex]) {
      minIndex = rightIndex;
    }

    return minIndex;
  }

  function _percUp(uint[] storage self) private {
    uint i = self.length - 1;

    while (i > 0) {
      uint parentIndex = (i - 1) / 2;
      uint parent = self[parentIndex];
      uint child = self[i];

      if (child >= parent) {
        return;
      }

      self[parentIndex] = child;
      self[i] = parent;

      i = parentIndex;
    }
  }

  function _percDown(uint[] storage self) private {
    uint i = 0;

    while (i < self.length) {
      uint parent = self[i];
      uint minIndex = _getMinIndex(self, i);
      uint min = self[minIndex];

      if (parent <= min) {
        return;
      }

      self[i] = min;
      self[minIndex] = parent;

      i = minIndex;
    }
  }
}
