/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    localhost: {
      chainId: 31337,
    },
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};