require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    sharduem: {
      url: "https://hackathon.shardeum.org/",
      chainId: 8082,
      accounts: ["c179a4d356e5de24b8dad3d4cb418e48b5eaaef689447dc6937c58f51bddef31"],
    },
  },
  solidity: "0.8.20",
};
