module.exports = {
  networks: {
    development: {
      host: "54.89.87.72",
      port: 22005, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    }
  }
};
