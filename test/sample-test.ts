const { expect } = require("chai");
declare var ethers: any;

describe("Greeter", function() {
    it("should return the new greeting once it's changed", async function () {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello, world!");

        await greeter.deployed();
        expect(await greeter.greet()).to.equal("Hello, world!");

        await greeter.setGreeting("Hola, mundo!");
        expect(await greeter.greet()).to.equal("Hola, mundo!");
    });
});