const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
 
 
provider = new HDWalletProvider(
  'economy sheriff crucial such what transfer still please maple cereal zebra rural',
  'https://sepolia.infura.io/v3/821f0849031342128ca7a6b7a3455fa7'
);
 
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log("Attempting to deploy from account", accounts[0]);
 
  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ from: accounts[0], gas: "1400000" });
 
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();