import { HardhatRuntimeEnvironment } from "hardhat/types";
declare var ethers: any;

const hre:HardhatRuntimeEnvironment = require("hardhat");

async function main() {
  // This is just a convenience check
  if (hre.network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
      "gets automatically created and destroyed every time. Use the Hardhat" +
      " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("hello, hardhat!");

  await greeter.deployed();

  console.log("Greeter address:", greeter.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(greeter);
}

function saveFrontendFiles(greeter: any) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ Greeter: greeter.address }, undefined, 2)
  );
  
  const GreeterArtifact = hre.artifacts.readArtifactSync("Greeter");

  fs.writeFileSync(
    contractsDir + "/Greeter.json",
    JSON.stringify(GreeterArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });