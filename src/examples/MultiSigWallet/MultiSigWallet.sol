pragma solidity ^0.5.1;

contract MultiSigWallet {
  event Deposit(address indexed sender, uint value);
  event TxCreated(
    uint indexed txId,
    address indexed owner,
    address indexed to,
    uint value
  );
  event TxSigned(uint indexed txId, address indexed signer);
  event TxUnsigned(uint indexed txId, address indexed signer);
  event TxExecuted(uint indexed txId, address indexed caller);

  mapping(address => bool) public isOwner;
  address[] public owners;
  uint public numSigsRequired;

  struct Tx {
    address payable to;
    uint value;
    bytes data;
  }

  uint public txCount;
  // mapping from txId to Tx
  mapping(uint => Tx) public transactions;

  // mapping from txId -> owner address -> bool
  // set to true after a owner has signed a transaction
  mapping(uint => mapping(address => bool)) public signed;
  // mapping from txId to signature count
  mapping(uint => uint) public sigCount;
  // mapping from txId to boolean value set to true after a transaction has
  // been executed
  mapping(uint => bool) public executed;

  constructor(address[] memory _owners, uint _numSigsRequired) public {
    require(_numSigsRequired > 0, "number of signatures required must be > 0");
    require(
      _owners.length >= _numSigsRequired,
      "owners must be > number of required signatures"
    );

    for (uint i = 0; i < _owners.length; i++) {
      require(!isOwner[_owners[i]], "Duplicate owner");
      require(_owners[i] != address(0), "Invalid owner");

      isOwner[_owners[i]] = true;
    }

    owners = _owners;
    numSigsRequired = _numSigsRequired;
  }

  modifier onlyOwner() {
    require(isOwner[msg.sender], "Not owner");
    _;
  }

  modifier onlyExisting(uint txId) {
    require(txExists(txId), "Tx does not exist");
    _;
  }

  modifier notExecuted(uint txId) {
    require(!executed[txId], "Tx already executed");
    _;
  }

  modifier notSigned(uint txId) {
    require(!signed[txId][msg.sender], "Tx already signed");
    _;
  }

  function () external payable {
    if (msg.value > 0) {
      emit Deposit(msg.sender, msg.value);
    }
  }

  function createTx(address payable to, uint value, bytes memory data) public onlyOwner {
    require(to != address(0), "Invalid address");

    require(txCount + 1 > txCount, "txCount uint overflow");
    txCount += 1;

    transactions[txCount] = Tx({
      to: to,
      value: value,
      data: data
    });

    emit TxCreated(txCount, msg.sender, to, value);
  }

  function txExists(uint txId) public view returns (bool) {
    return transactions[txId].to != address(0);
  }

  function getTx(uint txId)
    public
    view
    onlyExisting(txId)
    returns (address to, uint value, bytes memory data)
  {
    // 'tx' is global variable so we name ours 'txn'
    Tx storage txn = transactions[txId];

    return (txn.to, txn.value, txn.data);
  }

  function getSigCount(uint txId)
    public
    view
    onlyExisting(txId)
    returns (uint)
  {
    uint count;

    for (uint i = 0; i < owners.length; i++) {
      if (signed[txId][owners[i]]) {
        count += 1;
      }
    }

    return count;
  }

  function signTx(uint txId)
    public
    onlyOwner
    onlyExisting(txId)
    notExecuted(txId)
    notSigned(txId)
  {
    signed[txId][msg.sender] = true;
    sigCount[txId] += 1;

    emit TxSigned(txId, msg.sender);
  }

  function unsignTx(uint txId)
    public
    onlyOwner
    onlyExisting(txId)
    notExecuted(txId)
  {
    require(signed[txId][msg.sender], "Tx not signed");

    signed[txId][msg.sender] = false;
    sigCount[txId] -= 1;

    emit TxUnsigned(txId, msg.sender);
  }

  function canExecuteTx(uint txId) public view returns (bool) {
    return sigCount[txId] >= numSigsRequired;
  }

  function executeTx(uint txId)
    public
    onlyExisting(txId)
    notExecuted(txId)
  {
    require(canExecuteTx(txId), "Cannot execute tx yet");

    Tx storage txn = transactions[txId];
    executed[txId] = true;

    (bool success,) = txn.to.call.value(txn.value)(txn.data);
    require(success, "Failed to execute transaction");

    emit TxExecuted(txId, msg.sender);
  }
}
