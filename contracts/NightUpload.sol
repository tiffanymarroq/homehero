pragma solidity ^0.5.0;

contract NightUpload {
  uint public loadData;

  constructor(uint initVal) public {
    loadData = initVal;
  }

  function set(uint x) public {
    loadData = x;
  }

  function get() view public returns (uint retVal) {
    return loadData;
  }
}