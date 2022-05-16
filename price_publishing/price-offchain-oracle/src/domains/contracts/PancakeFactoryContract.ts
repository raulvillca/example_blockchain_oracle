import { getPancakeFactoryContract } from 'helpers/contractHelpers'

import Token from 'domains/Token'

import { PANCAKE_FACTORY_ADDRESS } from 'config/constants'

import Contract from './Contract'
import {getTokenAddressBasesToCheckTrades} from "helpers/tokenMapper";

export class PancakeFactoryContract extends Contract {
  contract: any

  constructor() {
    super(PANCAKE_FACTORY_ADDRESS);
    this.contract = getPancakeFactoryContract(PANCAKE_FACTORY_ADDRESS, this.signer)
  }

  allCommonPairs = async (tokenA: Token, tokenB: Token): Promise<[Token, Token][]> => {
    const common = getTokenAddressBasesToCheckTrades() ?? []

    const hasDuplicateTokensInPath = (tokens: Token[]): boolean => {
      const address: string[] = []
      let hasDuplicate = false
      tokens.forEach((token) => {
        if (address.includes(token.address)) {
          hasDuplicate = true
        } else {
          address.push(token.address)
        }
      })

      return hasDuplicate
    }

    return tokenA?.address && tokenB?.address
      ? [
          // the direct pair
          [tokenA, tokenB],
          // token A against all common bases and the last option tokenB
          ...common.map((base) => [tokenA, base, tokenB]),
        ]
          .filter((tokens): tokens is [Token, Token] => Boolean(tokens[0] && tokens[1]))
          // .filter(([t0, t1]) => t0.address !== t1.address)
          .filter((tokens) => !hasDuplicateTokensInPath(tokens))
      : []
  }
}
