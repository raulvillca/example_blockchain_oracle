import { ethers, BigNumber } from 'ethers'

import { getERC20Contract } from 'helpers/contractHelpers'
import Token from './Token'

type TokenBalanceDataType = {
  token: Token

  owner: string
  balance: BigNumber
}

export interface TokenBalanceInterface {
  owner: string
  balance: BigNumber
}

export default class TokenBalance extends Token implements TokenBalanceInterface {
  readonly owner: string

  balance: BigNumber

  constructor(data: TokenBalanceDataType) {
    super(data.token)
    this.owner = data.owner
    this.balance = data.balance
  }

  balanceToEther(): string {
    return ethers.utils.formatUnits(this.balance.toString(), 'ether')
  }

  async getBalance(): Promise<BigNumber> {
    const contract = getERC20Contract(this.address, null)
    const balance = await contract.balanceOf(this.owner)
    this.setBalance(balance)
    return balance
  }

  setBalance(value: BigNumber) {
    this.balance = value
  }
}
