import { ethers } from 'ethers'

import defaultMainNetTokenList from 'config/constants/tokens/files/default-mainnet.tokenlist'
import defaultTestNetTokenList from 'config/constants/tokens/files/default-testnet.tokenlist'

import { ChainId } from 'domains/ChainId'
import Token from 'domains/Token'
import TokenBalance from 'domains/TokenBalance'

export const getDefaultTokens = (): Token[] => {
  const chainId = Number(process.env.REACT_APP_CHAIN_ID) || ChainId.TESTNET

  if (chainId === ChainId.MAINNET)
    return defaultMainNetTokenList.tokens.map(
      (t) =>
        new Token({
          chainId,
          address: t.address,
          decimals: Number(t.decimals),
          symbol: t.symbol,
          name: t.name,
          logoURI: t.logoURI,
        }),
    )

  return defaultTestNetTokenList.tokens.map(
    (t) =>
      new Token({
        chainId,
        address: t.address,
        decimals: Number(t.decimals),
        symbol: t.symbol,
        name: t.name,
        logoURI: t.logoURI,
      }),
  )
}

export const getLocalDataTokenBySymbol = (symbol: string): Token => {
  const tokens: Token[] = getDefaultTokens()

  const find = tokens.find((e) => e.symbol.toLowerCase() === symbol.toLowerCase())

  if (find) return find

  return tokens.find((e) => e.symbol.toLowerCase() === 'BNB'.toLowerCase())
}

export const getLocalDataTokenByAddress = (address: string): Token => {
  const tokens: Token[] = getDefaultTokens()

  const find = tokens.find((e) => e.address.toLowerCase() === address.toLowerCase())

  if (find) return find

  return tokens.find((e) => e.symbol.toLowerCase() === 'BNB'.toLowerCase())
}

export const getMapBalanceToken = (address: string, owner: string): TokenBalance => {
  const tokens: Token[] = getDefaultTokens()
  const token: Token = tokens.find((e) => e.address.toLowerCase() === address.toLowerCase())

  return new TokenBalance({
    token,
    balance: ethers.BigNumber.from('0'),
    owner,
  })
}

export const getTokenAddressBasesToCheckTrades = (): Token[] => {
  return ['wbnb', 'cake', 'busd', 'usdt', 'eth', 'usdc']
    .map((symbol) => getLocalDataTokenBySymbol(symbol))
    .filter((f) => !!f)
}
