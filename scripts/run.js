async function main() {

    const [deployer, randoPerson] = await ethers.getSigners();

    const UniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
    const UniswapV2FactoryContract = await UniswapV2Factory.deploy(deployer.address);
    const factory = await UniswapV2FactoryContract.deployed();
    console.log("Factory contract deployed to:", factory.address);

    const Token1Factory = await hre.ethers.getContractFactory("Token1")
    const Token1Contract = await Token1Factory.deploy()
    await Token1Contract.deployed()
    let token1Address = Token1Contract.address
    console.log("Token1 address: ", token1Address)

    const Token2Factory = await hre.ethers.getContractFactory("Token2")
    const Token2Contract = await Token2Factory.deploy()
    await Token2Contract.deployed()
    let token2Address = Token2Contract.address
    console.log("Token2 address: ", token2Address)

    let WETHFactory = await hre.ethers.getContractFactory("WETH")
    let WETHFactoryContract = await WETHFactory.deploy()
    await WETHFactoryContract.deployed()
    let WETHAddress = WETHFactoryContract.address
    console.log("WETH Address: ", WETHAddress)


    let UniswapV2Router02Factory = await hre.ethers.getContractFactory("UniswapV2Router02");
    let UniswapV2Router02Contract = await UniswapV2Router02Factory.deploy(factory.address, WETHAddress)
    const router = await UniswapV2Router02Contract.deployed()
    console.log("Router Address: ", router.address)

    await Token1Contract.approve(router.address, 1000000)
    await Token2Contract.approve(router.address, 2000000)
    console.log("all approved")
    
    await router.addLiquidity(
        token1Address, token2Address,
        1000000, 2000000,
        950000, 1800000,
        deployer.address, Math.floor(Date.now() / 1000) + 60*10
    )
    console.log("end")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
  });
