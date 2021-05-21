const fs = require("fs");

task("faucet", "Sends ETH to an address")
	.addPositionalParam("receiver", "The address that will receive them")
	.setAction(async (receiver) => {
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

		const addressJson = fs.readFileSync(addressesFile);
		const address = JSON.parse(addressJson);

		if ((await ethers.provider.getCode(address.Greeter)) === "0x") {
			console.error("You need to deploy your contract first");
			return;
		}

		const [sender] = await ethers.getSigners();

		const tx = await sender.sendTransaction({
			to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
			value: ethers.constants.WeiPerEther,
		});

		await tx.wait();

		console.log(`Transferred 1 ETH ${receiver}`);
	})