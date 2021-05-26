import { task } from "hardhat/config";

const fs = require("fs");

declare var ethers: any;
declare var network: any;

task("faucet", "Sends ETH to an address")
  .addPositionalParam("receiver", "The address that will receive them")
  .setAction(async ({ receiver }) => {
    if (network.name === "hardhat") {
      console.warn(
        "You are running the faucet task with Hardhat network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
      );
    }

    const addressesFile =
      __dirname + "/../frontend/src/contracts/contract-address.json";

    if (!fs.existsSync(addressesFile)) {
      console.error("You need to deploy your contract first");
      return;
    }

    const [sender] = await ethers.getSigners();
    
    const tx = await sender.sendTransaction({
      to: receiver,
      value: ethers.constants.WeiPerEther,
    });
  
    const receipt = await tx.wait();
    if(receipt === 0) {
      console.log("Transaction failed")
    } else {
      console.log(`Transferred 1 ETH to ${receiver}`);
    }

    
  })