export const chains = [
  'Ethereum', 'Polygon', 'BNB', 'Solana', 'Avalanche', 'Fantom'
];

export const tokensByChain: Record<string, string[]> = {
  Ethereum: ['ETH', 'USDT', 'USDC', 'DAI'],
  Polygon: ['MATIC', 'USDT', 'USDC'],
  BNB: ['BNB', 'BUSD'],
  Solana: ['SOL', 'USDC'],
  Avalanche: ['AVAX', 'USDT'],
  Fantom: ['FTM', 'USDC']
};
