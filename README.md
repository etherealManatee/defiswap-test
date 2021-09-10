# KingSwap:crown: - DeFi exchange with rewards to liquidity provider

A decentralized finance exchange with staking of liquidity provider (LP) tokens to earn King token as reward. This project was created to test out deploying a DeFi exchange with the following goals:

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
This time instead of cloning the whole repo, I created a sample project using the steps under 'Steps taken' above. I figured that this allows me to stick with what I am comfortable with first. I successfully 


