const migrationDBHelper = require("../repositories/migrationDB");

const PriceOracleContract = artifacts.require("./PriceOracle");

module.exports = async function (deployer, network, accounts) {
    const priceOracleAddress = await migrationDBHelper.getByKeyName("priceOracle");

    const instance = await PriceOracleContract.at(priceOracleAddress);

    await instance.createResponse(1, "http://localhost:8080", "Mundos datos para mostrar", { from: accounts[0]});
}