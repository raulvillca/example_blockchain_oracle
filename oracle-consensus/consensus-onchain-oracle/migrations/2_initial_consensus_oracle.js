const migrationDBHelper = require("../repositories/migrationDB");

const Contract = artifacts.require("./ConsensusOracle");

module.exports = async function (deployer) {
  await deployer.deploy(Contract);

  const instance = await Contract.deployed();

  await migrationDBHelper.saveByKeyName("consensusOracle", instance.address);
}
