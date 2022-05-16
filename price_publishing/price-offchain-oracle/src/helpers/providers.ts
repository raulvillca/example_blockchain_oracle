import { ethers } from 'ethers'

import sample from 'lodash/sample'

if (
  process.env.NODE_ENV !== 'production' &&
  (!process.env.NODE_1 || !process.env.NODE_2 || !process.env.NODE_3)
) {
  throw Error('One base RPC URL is undefined')
}

// Array of available nodes to connect to
export const nodes = [process.env.NODE_1, process.env.NODE_2, process.env.NODE_3]

const getNodeUrl = () => {
  // Use custom node if available (both for development and production)
  // However on the testnet it wouldn't work, so if on testnet - comment out the NODE_PRODUCTION from env file
  if (process.env.NODE_PRODUCTION) {
    return process.env.NODE_PRODUCTION
  }
  return sample(nodes)
}

const RPC_URL = getNodeUrl()

export const simpleRpcProvider = new ethers.providers.StaticJsonRpcProvider(RPC_URL)

export default null
