import sdk from './1-initialize-sdk.js'

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule('0x25003438d9adc2fF1B930a4c3332E6768F4218c4')

;(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: 'Kung Pao DAO Governance Token',
      // What's your token's symbol? Ex. "ETH"
      symbol: 'TASTY',
    })
    console.log('✅ Successfully deployed token module, address:', tokenModule.address)
  } catch (error) {
    console.error('failed to deploy token module', error)
  }
})()
