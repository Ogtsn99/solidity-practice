require("@nomiclabs/hardhat-waffle");
require("./tasks/accounts");
require("./tasks/faucet");
import { HardhatUserConfig } from "hardhat/types";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{version: "0.7.3", settings: {}}],
  }
};

module.exports = config;