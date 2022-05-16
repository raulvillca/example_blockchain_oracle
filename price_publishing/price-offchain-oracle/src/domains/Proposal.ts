import { BigNumber } from 'ethers'

import * as formatBalanceHelpers from 'helpers/formatBalance'
import { getLocalDataTokenByAddress } from 'helpers/tokenMapper'
import TokenBalance from './TokenBalance'
import Token from './Token'

import {LoboStrategyContract} from './contracts'

interface toJsonType {
  initialToken: string
  investorAddress: string
  proposalId: string
  strategyAddress: string
  strategyFactoryAddress: string
  traderAddress: string
  createdAt: string
  duration: string
  expiresOn: string
  investorDeposit: string
  riskyAmount: string
  startedAt: string
  stopLossAmount: string
  traderDeposit: string
  traderProfitPercentage: string
  totalBalance: string
  status: number
}

interface ConstructorArgsType {
  initialToken: string
  investorAddress: string
  proposalId: string
  strategyAddress: string
  strategyFactoryAddress: string
  traderAddress: string
  createdAt: BigNumber
  duration: BigNumber
  expiresOn: BigNumber
  investorDeposit: BigNumber
  riskyAmount: BigNumber
  startedAt: BigNumber
  stopLossAmount: BigNumber
  traderDeposit: BigNumber
  traderProfitPercentage: BigNumber
  status: number
}

interface GetTotalBalanceReturn {
  totalBalance: BigNumber,
  paths: {
    pathInAddress: string[],
    path: [Token, Token],
    balance: BigNumber
  }[]
}

export default class Proposal {
  initialToken: string

  investorAddress: string

  proposalId: string

  strategyAddress: string

  strategyFactoryAddress: string

  traderAddress: string

  createdAt: BigNumber

  duration: BigNumber

  expiresOn: BigNumber

  investorDeposit: BigNumber

  riskyAmount: BigNumber

  startedAt: BigNumber

  stopLossAmount: BigNumber

  traderDeposit: BigNumber

  traderProfitPercentage: BigNumber

  status: number

  totalBalance: BigNumber

  tokens: TokenBalance[]

  constructor(args: ConstructorArgsType) {
    this.initialToken = args.initialToken
    this.investorAddress = args.investorAddress
    this.proposalId = args.proposalId
    this.strategyAddress = args.strategyAddress
    this.strategyFactoryAddress = args.strategyFactoryAddress
    this.traderAddress = args.traderAddress

    this.investorDeposit = args.investorDeposit
    this.riskyAmount = args.riskyAmount
    this.stopLossAmount = args.stopLossAmount
    this.traderDeposit = args.traderDeposit
    this.traderProfitPercentage = args.traderProfitPercentage

    this.startedAt = args.startedAt
    this.createdAt = args.createdAt
    this.duration = args.duration
    this.expiresOn = args.expiresOn
    this.status = args.status

    // In initial token
    this.totalBalance = BigNumber.from('0')
  }

  toJson(): toJsonType {
    return {
      initialToken: this.initialToken,
      investorAddress: this.investorAddress,
      proposalId: this.proposalId,
      strategyAddress: this.strategyAddress,
      strategyFactoryAddress: this.strategyFactoryAddress,
      traderAddress: this.traderAddress,

      createdAt: formatBalanceHelpers.toEtherString(this.createdAt),
      duration: formatBalanceHelpers.toEtherString(this.duration),
      expiresOn: formatBalanceHelpers.toEtherString(this.expiresOn),
      investorDeposit: formatBalanceHelpers.toEtherString(this.investorDeposit),

      riskyAmount: formatBalanceHelpers.toEtherString(this.riskyAmount),
      startedAt: formatBalanceHelpers.toEtherString(this.startedAt),
      stopLossAmount: formatBalanceHelpers.toEtherString(this.stopLossAmount),
      traderDeposit: formatBalanceHelpers.toEtherString(this.traderDeposit),
      traderProfitPercentage: formatBalanceHelpers.toEtherString(this.traderProfitPercentage),
      totalBalance: formatBalanceHelpers.toEtherString(this.totalBalance),

      status: this.status,
    }
  }

  setTotalBalance(value: BigNumber) {
    this.totalBalance = value
  }

  setTokens(tokens: TokenBalance[]) {
    this.tokens = tokens
  }

  getInitialToken(): Token {
    return getLocalDataTokenByAddress(this.initialToken)
  }

  async getTokens(): Promise<TokenBalance[]> {
    const loboStrategyContract = new LoboStrategyContract(this.strategyAddress);
    const tokens = await loboStrategyContract.getTokens();

    this.setTokens(tokens);

    return tokens;
  }

  async getTotalBalance (): Promise<GetTotalBalanceReturn> {
    let tokens = this.tokens;

    if(!tokens || !tokens.length)
      tokens = await this.getTokens();

    const initialToken = this.getInitialToken();

    const paths = [];

    const prices = await Promise.all(
      tokens.map(async (token) => {
        const balance = await token.getBalance();

        if(balance.lte("0"))
          return null;

        const prices = await token.getExecutionPriceWithTheBestPaths({
          baseToken: initialToken,
          amountIn: balance
        });

        const balanceFormatted = formatBalanceHelpers.toEtherString(balance);
        const priceFormatted = formatBalanceHelpers.toEtherString(prices[0].price);

        paths.push({
          balance,
          path: prices[0].path,
          pathInAddress: prices[0].path.map((p) => p.address),
        });

        return formatBalanceHelpers.toWei(`${+balanceFormatted * +priceFormatted}`);
      })
    )
      // filter tokens with balance 0.
      .then(r => r.filter(f => !!f));

    const totalBalance = prices
      .reduce((previousValue, currentValue) => previousValue.add(currentValue))

    this.setTotalBalance(totalBalance);

    return {
      totalBalance,
      paths
    };
  }
}
