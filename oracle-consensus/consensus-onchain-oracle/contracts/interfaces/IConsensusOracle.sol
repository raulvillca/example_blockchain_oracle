pragma solidity ^0.8.0;

interface IConsensusOracle {
    function sendRequest(
        string memory _urlToQuery,
        string memory _attributeToFetch
    ) external;
}
