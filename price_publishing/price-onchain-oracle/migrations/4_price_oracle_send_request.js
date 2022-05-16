const migrationDBHelper = require("../repositories/migrationDB");

const PriceOracleContract = artifacts.require("./PriceOracle");

module.exports = async function (deployer, network, accounts) {
    const priceOracleAddress = await migrationDBHelper.getByKeyName("priceOracle");

    const instance = await PriceOracleContract.at(priceOracleAddress);

    console.log("START - priceOracle");
    const result = await instance.sendRequest("urlToQuery", { from: accounts[0]});
    console.log("ENDED - priceOracle", result);
}