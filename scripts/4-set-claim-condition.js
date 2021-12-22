import sdk from './1-initialize-sdk.js'

const bundleDrop = sdk.getBundleDropModule('0x1d1C51d64Bb8111b61C60Be8CC195445a46C41Ca')

;(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory()
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    })

    await bundleDrop.setClaimCondition(0, claimConditionFactory)
    console.log('✅ Sucessfully set claim condition!')
  } catch (error) {
    console.error('Failed to set claim condition', error)
  }
})()
