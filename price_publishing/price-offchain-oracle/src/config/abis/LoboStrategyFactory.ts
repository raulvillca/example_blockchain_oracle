export default [
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "deploy",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "proposalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "investorDeposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "traderDeposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "riskyAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "stopLossAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "traderProfitPercentage",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdAt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startedAt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiresOn",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "initialToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "traderAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "investorAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "strategyAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "strategyFactoryAddress",
            "type": "address"
          },
          {
            "internalType": "uint8",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct ProposalStruct",
        "name": "",
        "type": "tuple"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
          },
          {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          }
        ],
        "internalType": "struct StopLossTokenStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "name": "runStopLoss",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "proposalId",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "investorDeposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "traderDeposit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "riskyAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "stopLossAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "traderProfitPercentage",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdAt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startedAt",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiresOn",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "initialToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "traderAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "investorAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "strategyAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "strategyFactoryAddress",
            "type": "address"
          },
          {
            "internalType": "uint8",
            "name": "status",
            "type": "uint8"
          }
        ],
        "internalType": "struct ProposalStruct",
        "name": "",
        "type": "tuple"
      }
    ],
    "name": "updateProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "calculateStopLoss",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "addAuthorizedToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "removeOfAuthorizedToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAuthorizedTokens",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isAuthorizedToken",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
