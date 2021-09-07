async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address)

    // const UniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
    // const UniswapV2FactoryContract = await UniswapV2Factory.deploy(deployer.address);
    // const factory = await UniswapV2FactoryContract.deployed();
    // console.log("factory contract deployed to:", factory.address);

    // let WETHFactory = await hre.ethers.getContractFactory("WETH")
    // let WETHFactoryContract = await WETHFactory.deploy()
    // await WETHFactoryContract.deployed()
    // let WETHAddress = WETHFactoryContract.address
    // console.log("WETH Address: ", WETHAddress)

    // let UniswapV2Router02Factory = await hre.ethers.getContractFactory("UniswapV2Router02");
    // let UniswapV2Router02Contract = await UniswapV2Router02Factory.deploy(factory.address, WETHFactoryContract.address)
    // await UniswapV2Router02Contract.deployed()
    // console.log("Router Address: ", UniswapV2Router02Contract.address)

    let KingTokenFactory = await hre.ethers.getContractFactory("KingToken");
    let KingTokenContract = await KingTokenFactory.deploy()
    let KingToken = await KingTokenContract.deployed()
    console.log("KingToken address: ", KingToken.address);

    let ThePeopleFactory = await hre.ethers.getContractFactory("ThePeople");
    let ThePeopleContract = await ThePeopleFactory.deploy(
        KingToken.address,
        deployer.address,
        hre.ethers.utils.parseEther("1"),
        9246100,
        9246220
    )
    let ThePeople = await ThePeopleContract.deployed()
    console.log("ThePeople address:", ThePeople.address)

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
  });
