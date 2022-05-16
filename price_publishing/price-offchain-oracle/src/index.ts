import "module-alias/register";

import dotenv from "dotenv";

dotenv.config();

import {stopLossJob} from "./jobs/updatePrice"

const runJobs = async () => {
  if(process.argv[2] === "stopLoss")
    await stopLossJob()
}

runJobs();
