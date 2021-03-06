const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');

dotenv.config();
const mnemonic = process.env.MNEMONIC;

module.exports = {
  compilers: {
    solc: {
      version: "0.8.0",
    }
  },
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host:"127.0.0.1",
      port: "8545",
      network_id: "*"
    },
    kovan: {
      provider: () => new HDWalletProvider(mnemonic, process.env.INFURA_URL),
      network_id: "42",
      gas: 5500000
    },
  }
};
