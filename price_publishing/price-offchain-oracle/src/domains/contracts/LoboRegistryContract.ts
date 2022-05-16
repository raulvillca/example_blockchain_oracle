import { BigNumber } from 'ethers'

import logHelpers from 'helpers/log'

import Proposal from 'domains/Proposal'
import { getLoboRegistryContract } from 'helpers/contractHelpers'

import Contract from './Contract'

import {ALPHA_REGISTRY_ADDRESS} from 'config/constants'

interface runStopLossParams {
  addr: string,
  path: string[],
  amountIn: BigNumber,
  amountOut: BigNumber,
  deadline: BigNumber
}

export class PriceOracleContract extends Contract {
  contract: any;

  constructor() {
    super(ALPHA_REGISTRY_ADDRESS);

    this.contract = getLoboRegistryContract(ALPHA_REGISTRY_ADDRESS, this.signer)
  }

  getLiveProposalsByTraderAddress(address: string): Promise<Proposal[]> {
    return this.contract
      .getLiveProposalsByTraderAddress(address)
      .then((response) => response.map((row) => new Proposal(row)))
  }

  getLiveProposals(): Promise<Proposal[]> {
    return this.contract
      .getLiveProposals()
      .then((response) => response.map((row) => new Proposal(row)))
  }

  async updateRequest(proposalId: number, stopLossConfig: runStopLossParams[]) {
    const tx = await this.contract.runStopLoss(proposalId, stopLossConfig, {gasLimit: 3000000})
      .catch(error => logHelpers.log("updateRequest ERROR: ", error));

    logHelpers.log("updateRequest tx: ", tx);

    await tx.wait();
  }
}
