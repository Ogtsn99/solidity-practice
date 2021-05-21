require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("./tasks/faucet");
require("./tasks/accounts")

module.exports = {
  solidity: "0.7.3",
};
