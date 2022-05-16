import { ethers } from 'ethers'
import { simpleRpcProvider } from './providers'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'

// ABI
import erc20Abi from "config/abis/ERC20"
import loboInterfaceAbi from 'config/abis/LoboRegistry'
import loboStrategyAbi from 'config/abis/LoboStrategy'
import loboFactoryAbi from 'config/abis/LoboStrategyFactory'
import pancakeSwapRouterAbi from 'config/abis/PancakeSwapRouter'
import pancakeFactoryAbi from 'config/abis/PancakeFactory'

export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

export const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  try {
    const signerOrProvider = signer ?? simpleRpcProvider
    return new ethers.Contract(address, abi, signerOrProvider)
  } catch (error) {
    return null
  }
}

export const getERC20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(erc20Abi, address, signer)
}

export const getLoboRegistryContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(loboInterfaceAbi, address, signer)
}

export const getLoboStrategyContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(loboStrategyAbi, address, signer)
}

export const getLoboStrategyFactoryContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  return getContract(loboFactoryAbi, address, signer)
}

export const getPancakeSwapRouterContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(pancakeSwapRouterAbi, address, signer)
}

export const getPancakeFactoryContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(pancakeFactoryAbi, address, signer)
}
