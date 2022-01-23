// https://eth-ropsten.alchemyapi.io/v2/4lZm-gHFD0VfagSYrMYJi6OK2q9KjhDk

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/4lZm-gHFD0VfagSYrMYJi6OK2q9KjhDk",
      accounts: [
        "283c0422d031abf3431f6a0374d54a287bc9fb61a88cac9c77581f82292b3982",
      ],
    },
  },
};
