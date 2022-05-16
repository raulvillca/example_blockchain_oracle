export default [
  {
    "anonymous": false,
    "inputs": [
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
        "indexed": false,
        "internalType": "struct ProposalStruct",
        "name": "proposal",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "traderAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "investorAmount",
        "type": "uint256"
      }
    ],
    "name": "completedEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
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
        "indexed": false,
        "internalType": "struct ProposalStruct",
        "name": "proposal",
        "type": "tuple"
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
        "indexed": false,
        "internalType": "struct StopLossTokenStruct[]",
        "name": "successTokens",
        "type": "tuple[]"
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
        "indexed": false,
        "internalType": "struct StopLossTokenStruct[]",
        "name": "failTokens",
        "type": "tuple[]"
      },
      {
        "indexed": false,
        "internalType": "string[]",
        "name": "errorReasons",
        "type": "string[]"
      }
    ],
    "name": "stopLossEvent",
    "type": "event"
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
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "swap",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
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
          }
        ],
        "internalType": "struct SwapPathStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "name": "distribute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "drainToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRouter",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTokens",
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
    "inputs": [],
    "name": "getOperations",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "inputAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "outputAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "inputAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "outputAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "createdAt",
            "type": "uint256"
          }
        ],
        "internalType": "struct OperationStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getProposal",
    "outputs": [
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
    "stateMutability": "view",
    "type": "function"
  }
]
