import { task } from "hardhat/config";
declare var ethers: any;
declare var network: any;

task("accounts", "Prints the list of accounts", async () => {
	
	if (network.name === "hardhat") {
		console.warn(
			"You are running the faucet task with Hardhat network, which" +
			"gets automatically created and destroyed every time. Use the Hardhat" +
			" option '--network localhost'"
		);
	}
	
	const accounts = await ethers.getSigners();

	for (let i = 0; i < accounts.length; i++) {
		console.log("Account #%d: %s (%s ETH)", i, accounts[i].address, ethers.utils.formatEther(await accounts[i].getBalance()));
	}
});