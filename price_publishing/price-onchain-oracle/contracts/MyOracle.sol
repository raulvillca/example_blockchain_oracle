// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

import "./interfaces/IMyOracle.sol";
import "./interfaces/IOffChainOracle.sol";

contract MyOracle is IMyOracle, IOffChainOracle {
    Request[] requests; //list of requests made to the contract
    uint currentId = 0; //increasing request id
    uint minQuorum = 2; //minimum number of responses to receive before declaring final result
    uint totalOracleCount = 3; // Hardcoded oracle count

    address internal owner;

    // defines a general api request
    struct Request {
        uint id;                            //request id
        string urlToQuery;                  //API url
        string attributeToFetch;            //json attribute (key) to retrieve in the response
        string agreedValue;                 //value from key
        mapping(uint => string) answers;     //answers provided by the oracles
        mapping(address => uint) quorum;    //oracles which will query the answer (1=oracle hasn't voted, 2=oracle has voted)
    }

    event SendRequest (
        uint id,
        string urlToQuery,
        string attributeToFetch
    );

    constructor() {
        owner = msg.sender;
    }

    event UpdatedRequest (
        uint id,
        string urlToQuery,
        string attributeToFetch,
        string agreedValue
    );

    modifier onlyOwner() {
        require(msg.sender == owner, 'it is not the owner');
        _;
    }

    function sendRequest (
        string memory _urlToQuery,
        string memory _attributeToFetch
    ) public {

        Request storage r = requests.push();
        r.id = currentId;
        r.urlToQuery = _urlToQuery;
        r.attributeToFetch = _attributeToFetch;

        r.quorum[address(0x2d6FB6Ad152F19F57d5409eFdacaf47bBb755edE)] = 1;
        r.quorum[address(0x2416Ef3572051879374047E2d06079b8b5B9866C)] = 1;

        // launch an event to be detected by oracle outside of blockchain
        emit SendRequest (
            currentId,
            _urlToQuery,
            _attributeToFetch
        );

        // increase request id
        currentId++;
    }

    //called by the oracle to record its answer
    function createResponse (
        uint _id,
        string memory _valueRetrieved
    ) public onlyOwner {

        Request storage currRequest = requests[_id];

        //check if oracle is in the list of trusted oracles
        //and if the oracle hasn't voted yet
        if(currRequest.quorum[address(msg.sender)] == 1){

            //marking that this address has voted
            currRequest.quorum[msg.sender] = 2;

            //iterate through "array" of answers until a position if free and save the retrieved value
            uint tmpI = 0;
            bool found = false;
            while(!found) {
                //find first empty slot
                if(bytes(currRequest.answers[tmpI]).length == 0){
                    found = true;
                    currRequest.answers[tmpI] = _valueRetrieved;
                }
                tmpI++;
            }

            uint currentQuorum = 0;

            //iterate through oracle list and check if enough oracles(minimum quorum)
            //have voted the same answer has the current one
            for(uint i = 0; i < totalOracleCount; i++){
                bytes memory a = bytes(currRequest.answers[i]);
                bytes memory b = bytes(_valueRetrieved);

                if(keccak256(a) == keccak256(b)){
                    currentQuorum++;
                    if(currentQuorum >= minQuorum){
                        currRequest.agreedValue = _valueRetrieved;
                        emit UpdatedRequest (
                            currRequest.id,
                            currRequest.urlToQuery,
                            currRequest.attributeToFetch,
                            currRequest.agreedValue
                        );
                    }
                }
            }
        }
    }
}