import { BigNumber, ethers } from 'ethers'

export const ONE_ETHER = `${1e18}`
export const ONE_ETHER_IN_BIG_NUMBER = BigNumber.from(ONE_ETHER)

type ToDecimalParams = {
  amount: string
  precision?: number
}

export const toDecimals = ({ amount, precision = 5 }: ToDecimalParams) => {
  if (Number(amount) % 1 !== 0) {
    return parseFloat(amount).toPrecision(precision)
  }

  return amount
}

export const toWei = (value: string) => ethers.utils.parseEther(value)

export const toEtherString = (value) => ethers.utils.formatUnits(value, 'ether')

export const toBigNumber = (value) => BigNumber.from(`${value}`)
