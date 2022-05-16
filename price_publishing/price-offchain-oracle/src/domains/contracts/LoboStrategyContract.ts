import { BigNumber } from 'ethers'

import * as tokenMapperHelpers from 'helpers/tokenMapper'
import * as contactHelpers from 'helpers/contractHelpers'

import TokenBalance from 'domains/TokenBalance'

import Contract from './Contract'

interface swapParams {
  amountIn: BigNumber
  amountOutMin: BigNumber
  path: string[]
  deadline: string
}

export class LoboStrategyContract extends Contract {
  contract: any

  address: string

  constructor(address: string) {
    super(address);
    this.contract = contactHelpers.getLoboStrategyContract(address, this.signer)
  }

  async getTokens(): Promise<TokenBalance[]> {
    const tokenAddresses = await this.contract.getTokens()
    return tokenAddresses.map((tokenAddress) => tokenMapperHelpers.getMapBalanceToken(tokenAddress, this.address))
  }

  async getTokensWithBalance(): Promise<TokenBalance[]> {
    const tokenAddresses = await this.contract.getTokens()
    const balances: TokenBalance[] = await Promise.all(
      tokenAddresses.map(async (tokenAddress) => {
        const token = tokenMapperHelpers.getMapBalanceToken(tokenAddress, this.address)
        await token.getBalance()
        return token
      }),
    )

    return balances.filter((b) => b.balance.gt(0))
  }

  async swap(data: swapParams): Promise<void> {
    const tx = await this.contract.swap(data.amountIn, data.amountOutMin, data.path, data.deadline)
    await tx.wait()
  }
}
