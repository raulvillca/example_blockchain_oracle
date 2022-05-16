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
        "name": "",
        "type": "tuple"
      }
    ],
    "name": "ApproveProposal",
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
        "name": "",
        "type": "tuple"
      }
    ],
    "name": "NewProposal",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "setStopLossAdmin",
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
    "name": "setRouterAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "addRouter",
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
    "name": "removeRouter",
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
    "name": "setStrategyAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "addStrategyFactory",
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
    "name": "removeStrategyFactory",
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
    "name": "setBeneficiaryFees",
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
      },
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "createProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "cancelPendingProposal",
    "outputs": [],
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "approveProposal",
    "outputs": [],
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
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "addAuthorizedTokenToFactory",
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
    "name": "getRouters",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct RouterStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getStrategyFactories",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "internalType": "struct StrategyFactoryStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
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
  },
  {
    "inputs": [],
    "name": "getPendingProposals",
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
        "internalType": "struct ProposalStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLiveProposals",
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
        "internalType": "struct ProposalStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEndedProposals",
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
        "internalType": "struct ProposalStruct[]",
        "name": "",
        "type": "tuple[]"
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
    "name": "getPendingProposalsByTraderAddress",
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
        "internalType": "struct ProposalStruct[]",
        "name": "",
        "type": "tuple[]"
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
    "name": "getLiveProposalsByTraderAddress",
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
        "internalType": "struct ProposalStruct[]",
        "name": "",
        "type": "tuple[]"
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
    "name": "getLiveProposalsByInvestorAddress",
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
        "internalType": "struct ProposalStruct[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
