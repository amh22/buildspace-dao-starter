# A Decentralised Autonomous Organisation 

I purpose of builiding this app was to understand DAO's better and to begin to learn how to implement one. 

In this case, rather than writing the smart contracts from scratch with Solidity, I use a tool called thirdweb. Thirdweb lets us create smart contracts using JavaScript.

The app is built with React, JavaScript, and the [thirdweb SDK.](https://thirdweb.com/)

The general idea of the app is for people to connect their wallet, mint a membership NFT, receive a token airdrop, and to be able to vote on proposals. The DAO's dashboard is built with React, and after joining, members can see what's going on in the DAO.

Scripts were written to create and deploy the contracts, and once deployed I could interact with those contracts from our frontend easily using thirdweb's client-side SDK. Once the contracts had been created, they can be viewed via the Thirdweb dashboard (see images in the case study link below). Note, you can create the contracts directly from the thirdweb dashboard, however I chose to create and deploy them using JavaScript.

The contracts created were:

▶️ deployed an ERC-1155 NFT that people can mint to join the DAO 
▶️ deployed a custom ERC-20 governance token (TASTY) 
▶️ deployed a governance contract & seeded the DAO treasury 
▶️ deployed a voting contract

Of course there is much more to running a DAO than the contracts, NFT and tokens. None-the-less it provided me with a deeper understanding of DAOs.

If you have a MetaMask wallet and some test ETH and want to test it out, please see the link below, and remember it's on the Rinkeby testnet, not the mainnet.

Note: interacting with wallets on mobiles is challenging, so best to use a laptop or desktop if you want to try it out.

The deployed app: https://kungpao-dao.netlify.app/

View the ERC-1155 on OpenSea: https://testnets.opensea.io/collection/kungpao-dao-membership

The ERC-20 token contract: https://rinkeby.etherscan.io/token/0xA0771B18898c090F8f563b4F0955A89a4e6DC541

This is based of a [buildspace tutorial.](https://buildspace.so/projects)

See case study: https://www.gramercystudios.com/work/kungpao-dao/
