pragma solidity ^0.8.0;

interface IOffChainOracle {
    function createResponse(
        uint _id,
        string memory _valueRetrieved
    ) external;
}
