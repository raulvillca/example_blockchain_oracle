const HDWalletProvider = require("@truffle/hdwallet-provider");

require('dotenv').config();

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(
          process.env.MNEMONIC,
          process.env.NETWORK_URL
      ),
      host: '127.0.0.1',
      network_id: process.env.NETWORK_ID
    },
    testnet: {
      provider: () => new HDWalletProvider(
          process.env.MNEMONIC,
          process.env.TEST_NETWORK_URL
      ),
      network_id: process.env.TEST_NETWORK_ID,
      skipDryRun: true,
      timeoutBlocks: 200,
      gas: 5500000,
      confirmations: 1,
      networkCheckTimeout: 1000000,
      deploymentPollingInterval: 10000
    },
    bsc: {
      provider: () => new HDWalletProvider(
          process.env.MNEMONIC,
          "https://bsc-dataseed1.binance.org"
      ),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
    // parallel: true
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.4",
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "istanbul"
      }
    }
  },
  db: {
    enabled: false
  },
  plugins: [
    'truffle-plugin-verify',
  ],
  api_keys: {
    "bscscan": "PXTT1CEJQ161EDGSTZBZQ78W4KI85IPA7E",
  },
  migrations_directory: "migrations",
};
