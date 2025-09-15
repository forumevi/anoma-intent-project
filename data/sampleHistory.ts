export interface Intent {
  id: number;
  type: 'Swap' | 'Stake';
  chain: string;
  amount: number;
  token: string;
  tx: string;
  status: 'pending' | 'fulfilled';
  date: string;
}

export const sampleHistory: Intent[] = [
  { id: 1, type: 'Swap', chain: 'Ethereum', amount: 1.2, token: 'ETH', tx: '0xaaa', status: 'fulfilled', date: '2025-09-15' },
  { id: 2, type: 'Stake', chain: 'Polygon', amount: 50, token: 'MATIC', tx: '0xbbb', status: 'pending', date: '2025-09-14' },
  { id: 3, type: 'Swap', chain: 'BNB', amount: 10, token: 'BNB', tx: '0xccc', status: 'pending', date: '2025-09-13' },
];
