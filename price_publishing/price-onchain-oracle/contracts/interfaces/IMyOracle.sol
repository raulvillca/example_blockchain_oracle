pragma solidity ^0.8.0;

interface IMyOracle {
    function sendRequest(
        string memory _urlToQuery,
        string memory _attributeToFetch
    ) external;
}
