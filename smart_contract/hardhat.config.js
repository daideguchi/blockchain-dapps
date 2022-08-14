//https://eth-goerli.g.alchemy.com/v2/jtuzrYsUbV6-9ZnEa9q-zuEdVuN9TlXG

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks: {
    goerli: {
      //alchemyと繋げる
      url: "https://eth-goerli.g.alchemy.com/v2/jtuzrYsUbV6-9ZnEa9q-zuEdVuN9TlXG",
      accounts: [
        //metamaskの秘密鍵
        "3aa1bb3642694bb0cb203c7c931ef6abae583b3d7bb055b28ac2a947ddc07b56",
      ],
    },
  },
};
