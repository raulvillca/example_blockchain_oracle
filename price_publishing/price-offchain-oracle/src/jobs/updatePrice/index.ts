import { toEtherString, toWei } from "helpers/formatBalance";
import logHelpers from "helpers/log";

import {LoboRegistryContract} from "domains/contracts/LoboRegistryContract";

process.on("unhandledRejection", (reason, promise) => {
  logHelpers.log("UpdatePrixe -> Unhandled promise rejection:", { promise, reason});
});

export const stopLossJob = async () => {
  logHelpers.log("run stopLossJob", "")
  const loboRegistryContract = new LoboRegistryContract();

  const proposals = await loboRegistryContract.getLiveProposals();

  await Promise.all(
    proposals.map(async (proposal) => {
      const proposalBalanceData = await proposal.getTotalBalance();
      const totalBalance = proposalBalanceData.totalBalance;
      const paths = proposalBalanceData.paths;

      if(proposal.stopLossAmount.gte(totalBalance)) {
        const tokensToSell = paths.filter(x => x.pathInAddress[0] !== proposal.initialToken)
        .map(x => ({
          addr: x.pathInAddress[0],
          path: x.pathInAddress,
          amountIn: x.balance,
          amountOut: toWei("0"),
          deadline: toWei("9999999999")
        }));

        await loboRegistryContract.runStopLoss(proposal.proposalId, tokensToSell);

        logHelpers.log(`STOP: ${proposal.proposalId}`, toEtherString(totalBalance))
      }
    })
  )
}

setInterval(async () => {
  await stopLossJob();
}, 30000)
