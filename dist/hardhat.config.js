"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-waffle");
require("hardhat-typechain");
// hardhat-typechainをつけてコンパイルをするとtypechainディレクトリが作成される
require("./tasks/faucet");
require("./tasks/accounts");
var config = {
    solidity: {
        compilers: [{ version: "0.7.3", settings: {} }]
    }
};
module.exports = config;
