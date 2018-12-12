var ConvertLib = artifacts.require("./ConvertLib.sol");
var Funding = artifacts.require("./Funding.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, Funding);
  deployer.deploy(Funding);
};
