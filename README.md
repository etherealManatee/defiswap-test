# KingSwap:crown: - DeFi exchange with rewards to liquidity provider

A decentralized finance exchange with staking of liquidity provider (LP) tokens to earn King token as reward. This project was created to test out deploying a DeFi exchange with goals as mentioned under 'Goals'. It was deployed on Rinkeby testnet, and a simple front end was created using replit.com to test out the functions of the smart contact.

https://replit.com/@hizashi-zy/uniswapv2-test

cloned from SushiSwap

https://github.com/sushiswap/sushiswap/tree/canary/contracts

Files taken from SushiSwap Github

- entire uniswapv2 folder
- MasterChef.sol
- SushiToken.sol

# Motivation

1. explore the inner workings of a DeFi exchange
2. practice deploying of multiple contracts using hardhat
3. improve my understanding of solidity

# Goals

1. Set up a defi exchange using available open-source code
2. Be able to create a trading pair
3. Be able to perform a swap
4. Be able to reward liquidity providers with a separate token

# Steps taken

1. create an empty repo on github and then cloning it onto my own local machine, install hardhat, compile and test to make sure it works
```
git clone <url>
npm init -y
npm install --save-dev hardhat
npx hardhat
npx hardhat compile
npx hardhat test
```
2. went to https://github.com/sushiswap/sushiswap/tree/canary/contracts and copy pasted the code that I needed
3. using ```npx hardhat run scripts/run.js``` to test out deploying and functions on local machine to see if things work as intended
4. using ```npx hardhat run scripts/deploy.js --network rinkeby``` to deploy on to the testnet

# Challenges and Learning :blue_heart:
###### Uniswap v3
I started out wanting to fork V3, the first problem I faced was that there was a shit load of files, I gathered from a youtube video that you need both the core and periphery contracts. Initially, I just cloned the entire repo and there was a fear because I wasn't sure what files you need and do not need. So I tried testing ou t deploying the contracts locally. I started with just trying to deploy the factory from the core contracts, but was met with many errors that I could not figure out.

I then decided to move to try to deploy uniswap-v2 instead, since there was less files it might be more straightforward.
###### Uniswap v2
This time instead of cloning the whole repo, I created a sample project using the steps under 'Steps taken' above. I figured that this allows me to stick with what I am comfortable with first. I successfully managed to deploy the Factory locally, but the Router kept giving me an error of 'Transaction ran out of gas', and was unable to deploy it locally. It took me awhile to fix this problem, and it was solved by removing code from the smart contract that was deemed 'almost never used'.

And thus, with more confident, I decided to look at SushiSwap's code to see how they reward their liquidity providers.
###### SushiSwap
It took me awhile to understand the functions of the different smart contacts in SushiSwap's github, eventually I figured that I only needed the MasterChef.sol and SushiToken.sol code. I was able to deploy both the Factory, Router, thePeople (MasterChef) and King token (Sushi token) succesfully to Rinkeby testnet. I was able to create a pair, add liquidity, swap and deposit LP tokens into thePeople. 

However, once I deposit the LP tokens I was unable to withdraw the LP and claim the reward tokens (King token). It took me awhile, but by comparing the code in the Sushiswap repo and the Uniswap V2 repo, I realised that the problem was within the UniswapV2Library.sol. Under the function pairFor it required an init code hash. After some research, I found out that this init code hash is related to the factory, to obtaint he init code hash of the factory the following code was added to the factory contract.
```solidity
bytes32 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(UniswapV2Pair).creationCode));

function pairCodeHash() external pure returns (bytes32) {
        return INIT_CODE_PAIR_HASH;
    }
```
