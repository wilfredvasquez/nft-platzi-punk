require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const ETHEREUM_NODE_URL = process.env.ETHEREUM_NODE_URL;
const ETHEREUM_PRIVATE_KEY = process.env.ETHEREUM_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    ethereum:{
      url: ETHEREUM_NODE_URL,
      accounts: [
        ETHEREUM_PRIVATE_KEY
      ]
    },
  
  }
};
