const ethers = require("ethers")
const abi = require("./main.node.abi.json")

async function readEvents() {
  const contractAddress = "0x97A7c8bDE3ABe65D919E1eD9d8918f46f311De94"
  const infuraProvider = new ethers.InfuraProvider("maticmum")
  const contract = new ethers.Contract(contractAddress, abi, infuraProvider)
  const tokenName = await contract.name()
  console.log("Token name:", tokenName)
  console.log("Reading Events")
  const filtroEvento = contract.filters.Transfer;
  eventos = await contract.queryFilter(filtroEvento, 0);
  console.log("Number of logs: ", eventos.length);
  console.log("Logs: ", eventos);
}

readEvents().then( () => process.exit(0) )