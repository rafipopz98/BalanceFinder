require("dotenv").config();

const EthMainnet = "https://mainnet.infura.io/v3/758874998f5bd0c393da094e1967a72b"
const PolygonMainnet = "https://polygon-mainnet.infura.io/v3/758874998f5bd0c393da094e1967a72b"
const BscMainnet = "https://bsc-dataseed.binance.org"
const ArbitrumMainnet = "https://arb1.arbitrum.io/rpc"
const Avalanche = "https://api.avax.network/ext/bc/C/rpc"
const Fantom = "https://rpcapi.fantom.network"
const Harmony = "https://api.harmony.one"
const Heco = "https://http-mainnet.hecochain.com"
const Klay = "https://node-api.klaytn.com"
const Matic = "https://rpc-mainnet.maticvigil.com"
const Moonbeam = "https://rpc.testnet.moonbeam.network"
const Optimism = "https://mainnet.optimism.io"
const Palm = "https://palm-mainnet.infura.io/v3/758874998f5bd0c393da094e1967a72b"
const Ronin = "https://api.roninchain.com"
const xDai = "https://rpc.xdaichain.com"

// constants from the env
const PORT = process.env.PORT || 8080;
const RPC_URL = process.env.RPC_URL;

if (!RPC_URL) {
  throw new Error("RPC_URL is not defined in .env");
}


module.exports =  { EthMainnet, PolygonMainnet, BscMainnet, ArbitrumMainnet, Avalanche, Fantom, Harmony, Heco, Klay, Matic, Moonbeam, Optimism, Palm, Ronin, xDai, PORT, RPC_URL };
