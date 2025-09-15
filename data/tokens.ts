// data/tokens.ts
export type Token = {
  address: string
  symbol: string
  name: string
  decimals: number
  chainId: number
}

export const TOKENS: Token[] = [
  // Ethereum
  { address: "0xC02aaa...", symbol: "WETH", name: "Wrapped Ether", decimals: 18, chainId: 1 },
  { address: "0xa0b869...", symbol: "USDC", name: "USD Coin", decimals: 6, chainId: 1 },

  // Polygon
  { address: "0x7ceB23...", symbol: "WETH", name: "Wrapped Ether", decimals: 18, chainId: 137 },
  { address: "0x2791bA...", symbol: "USDC", name: "USD Coin", decimals: 6, chainId: 137 },

  // Arbitrum
  { address: "0x82af49...", symbol: "WETH", name: "Wrapped Ether", decimals: 18, chainId: 42161 },
  { address: "0xff970A...", symbol: "USDC", name: "USD Coin", decimals: 6, chainId: 42161 },
]
