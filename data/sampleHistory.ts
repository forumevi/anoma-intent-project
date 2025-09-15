import { Intent } from '../types/Intent';

export const sampleHistory: Intent[] = [
  { id: 1, type: 'Swap', amount: 1.2, token: 'ETH', tx: '0xaaa', status: 'fulfilled', date: '2025-09-15' },
  { id: 2, type: 'Stake', amount: 3, token: 'XAN', tx: '0xbbb', status: 'pending', date: '2025-09-14' },
  { id: 3, type: 'Swap', amount: 0.5, token: 'XAN', tx: '0xccc', status: 'pending', date: '2025-09-13' },
];
