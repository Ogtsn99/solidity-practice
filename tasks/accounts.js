task("accounts", "Prints the list of accounts", async () => {
	const accounts = await ethers.getSigners();

	for (let i = 0; i < accounts.length; i++) {
		console.log("Account #%d: %s (%s ETH)", i, accounts[i].address, ethers.utils.formatEther(await accounts[i].getBalance()));
	}
});