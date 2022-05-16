// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract PriceOracle {
    mapping(string => string) responses;

    address internal owner;
    uint timestamp = 0;
    string internal url;

    event SetURLToQuery(
        string urlToQuery
    );

    //triggered when there's a consensus on the final result
    event UpdatedResponse (
        uint id,
        string urlToQuery,
        string response
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "it is not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        timestamp = block.timestamp;
    }

    function setUrl(string memory _urlToQuery) public onlyOwner {
        url = _urlToQuery;

        emit SetURLToQuery(_urlToQuery);
    }

    function sendRequest (
        string memory _attributeToFetch
    ) public view returns(string memory) {

        return responses[_attributeToFetch];
    }

    //called by the oracle to record its answer
    function createResponse (
        uint _id,
        string memory _urlToQuery,
        string memory _response
    ) public onlyOwner {

        responses["urlToQuery"] = _urlToQuery;
        responses["response"] = _response;

        emit UpdatedResponse (
            _id,
            _urlToQuery,
            _response
        );
    }
}