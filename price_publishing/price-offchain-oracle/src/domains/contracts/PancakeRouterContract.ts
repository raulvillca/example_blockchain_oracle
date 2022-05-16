import { BigNumber } from 'ethers'

import { getPancakeSwapRouterContract } from 'helpers/contractHelpers'
import { PANCAKE_ROUTER_ADDRESS } from 'config/constants'

import Contract from './Contract'

export class PancakeRouterContract extends Contract {
  contract: any

  address: string

  constructor() {
    super(PANCAKE_ROUTER_ADDRESS);
    this.contract = getPancakeSwapRouterContract(PANCAKE_ROUTER_ADDRESS, this.signer)
  }

  async getAmountsOut(amountIn: BigNumber, path: string[]): Promise<BigNumber[]> {
    return this.contract.getAmountsOut(amountIn, path)
  }
}
