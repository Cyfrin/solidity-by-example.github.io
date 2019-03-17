pragma solidity ^0.5.3;

// TODO verify
// TODO compare with gnosis
// TODO comment
contract MultiSigWallet {
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
    mapping(uint => Tx) public transactions;

    mapping(uint => mapping(address => bool)) public signed;
    mapping(uint => uint) public sigCount;
    mapping(uint => bool) public executed;

    constructor(address[] memory _owners, uint _numSigsRequired) public {
        for (uint i = 0; i < _owners.length; i++) {
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

    function () external payable {}

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

    // TODO is this needed?
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

        // TODO what is call data?
        (bool success,) = txn.to.call.value(txn.value)(txn.data);
        require(success, "Failed to execute transaction");

        emit TxExecuted(txId, msg.sender);
    }
}
