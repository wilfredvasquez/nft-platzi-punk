require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const INFURA_TOKEN_RPC = process.env.INFURA_TOKEN_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten:{
      url: `https://ropsten.infura.io/v3/${INFURA_TOKEN_RPC}`,
      accounts: [
        PRIVATE_KEY
      ]
    },
    rinkeby:{
      url: `https://rinkeby.infura.io/v3/${INFURA_TOKEN_RPC}`,
      accounts: [
        PRIVATE_KEY
      ]
    }
  }
};
