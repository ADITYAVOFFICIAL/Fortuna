const { ethers, deployments } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const RedEnvelope = await ethers.getContractFactory("RedEnvelope");
  const redEnvelope = await RedEnvelope.deploy();

  console.log("RedEnvelope deployed to:", redEnvelope.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
