import { BigNumber, ethers } from 'ethers'

import { ONE_ETHER } from 'helpers/formatBalance'

import { PancakeFactoryContract, PancakeRouterContract } from 'domains/contracts'
import { ChainId } from './ChainId'

type TokenDataType = {
  chainId: ChainId
  address: string
  decimals: number
  symbol: string
  name: string
  logoURI: string
}

export interface TokenInterface {
  chainId: ChainId
  address: string
  decimals: number
  symbol: string
  name: string
  logoURI: string
}

export interface ExecutionPriceWithTheBestPathParams {
  baseToken: Token
  amountIn?: BigNumber
  sortType?: SortType
}

export interface ExecutionPriceWithTheBestPathReturn {
  pathInAddress: string[]
  path: [Token, Token]
  price: BigNumber
}

export enum SortEnum {
  DESC,
  ASC,
}

type SortType = keyof typeof SortEnum

export default class Token implements TokenInterface {
  readonly chainId: number

  readonly address: string

  readonly decimals: number

  readonly symbol: string

  readonly name: string

  readonly logoURI: string

  constructor(data: TokenDataType) {
    this.chainId = data.chainId
    this.address = data.address
    this.decimals = data.decimals
    this.symbol = data.symbol
    this.name = data.name
    this.logoURI = data.logoURI
  }

  async getExecutionPriceWithCustomPath(amountIn: BigNumber, baseToken: Token, path: string[]): Promise<BigNumber> {
    if (this.address === baseToken.address) return BigNumber.from(ONE_ETHER)

    const pancakeRouterContract = new PancakeRouterContract()

    const amounts = await pancakeRouterContract.getAmountsOut(amountIn, path)

    return amounts[amounts.length - 1].mul(ONE_ETHER).div(amounts[0])
  }

  async getExecutionPrice(amountIn: BigNumber, baseToken: Token, sortType: SortType = 'DESC'): Promise<BigNumber> {
    const prices = await this.getExecutionPriceWithTheBestPaths({ baseToken, sortType })
    return prices[0].price
  }

  async getExecutionPriceWithTheBestPaths({
                                            amountIn = BigNumber.from(ONE_ETHER),
                                            baseToken,
                                            sortType = 'DESC',
                                          }: ExecutionPriceWithTheBestPathParams): Promise<ExecutionPriceWithTheBestPathReturn[]> {
    if (this.address === baseToken.address)
      return [
        {
          pathInAddress: [this, baseToken].map((token) => token.address),
          path: [this, baseToken],
          price: BigNumber.from(ONE_ETHER),
        },
      ]

    const pancakeFactoryContract = new PancakeFactoryContract()
    const pancakeRouterContract = new PancakeRouterContract()

    const commonPairs = await pancakeFactoryContract.allCommonPairs(this, baseToken)

    const prices = await Promise.all(
      commonPairs.map(async (tokens) => {
        const path = tokens
        const pathInAddress = tokens.map((token) => token.address)

        // @TODO forzar que pasa si le enviamos un path que no existe.
        const amounts = await pancakeRouterContract.getAmountsOut(amountIn, pathInAddress)
        return {
          pathInAddress,
          path,
          price: amounts[amounts.length - 1].mul(ONE_ETHER).div(amounts[0]),
        }
      }),
    )

    return prices.sort((price1, price2) => {
      const price1Formatted = ethers.utils.formatUnits(price1.price, 'ether')
      const price2Formatted = ethers.utils.formatUnits(price2.price, 'ether')

      if (SortEnum[sortType] === SortEnum.ASC) return Number(price1Formatted) - Number(price2Formatted)

      return Number(price2Formatted) - Number(price1Formatted)
    })
  }

  toEqual(eToken: Token): boolean {
    return this.address === eToken.address
  }
}
