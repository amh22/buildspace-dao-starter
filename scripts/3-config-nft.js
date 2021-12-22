import sdk from './1-initialize-sdk.js'
import { readFileSync } from 'fs'

const bundleDrop = sdk.getBundleDropModule('0x1d1C51d64Bb8111b61C60Be8CC195445a46C41Ca')

;(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'The Tasty Corner',
        description: 'This NFT will give you access to the KungPao DAO!',
        image: readFileSync('scripts/assets/tasty_corner.png'),
      },
    ])
    console.log('✅ Successfully created a new NFT in the drop!')
  } catch (error) {
    console.error('failed to create the new NFT', error)
  }
})()
