import { getPancakeSwapRouterContract, getPancakeFactoryContract } from 'helpers/contractHelpers'

import { PANCAKE_ROUTER_ADDRESS } from 'config/constants'

export const getRouterInfo = async () => {
  const routerContract = getPancakeSwapRouterContract(PANCAKE_ROUTER_ADDRESS, null)

  const factoryAddress = await routerContract.factory()

  const pancakeFactoryContract = getPancakeFactoryContract(factoryAddress, null)

  const initCode = await pancakeFactoryContract.INIT_CODE_PAIR_HASH()

  return {
    PANCAKE_ROUTER_ADDRESS,
    factoryAddress,
    initCode,
  }
}

export const getTokenPrice = async () => {}
