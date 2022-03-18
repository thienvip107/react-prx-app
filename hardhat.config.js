require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/blockchain/artifacts",
    sources: "./src/blockchain/contracts",
    cache: "./src/blockchain/cache",
    tests: "./src/blockchain/test",
  },
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/a5cfe1e2c0e6402aa6ed406a9b6fbdf9",
      accounts: [
        "dc5aa7d33d18b3f6b57eeb7291d06686c1f1a9802ca613c511604a1dde3d541a",
      ],
      //accounts: {
      //mnemonic: MNEMONIC,
      gas: 210000000,
      gasPrice: 80000000000,
      saveDeployments: true,
    },
  },
};
