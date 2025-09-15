// data/chains.ts
export type ChainConfig = {
  id: number
  name: string
  rpc: string
  explorer: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
}

export const CHAINS: ChainConfig[] = [
  {
    id: 1,
    name: "Ethereum",
    rpc: "https://mainnet.infura.io/v3/YOUR_API_KEY",
    explorer: "https://etherscan.io",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  },
  {
    id: 137,
    name: "Polygon",
    rpc: "https://polygon-rpc.com",
    explorer: "https://polygonscan.com",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  },
  {
    id: 42161,
    name: "Arbitrum",
    rpc: "https://arb1.arbitrum.io/rpc",
    explorer: "https://arbiscan.io",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  },
  {
    id: 10,
    name: "Optimism",
    rpc: "https://mainnet.optimism.io",
    explorer: "https://optimistic.etherscan.io",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  },
]
