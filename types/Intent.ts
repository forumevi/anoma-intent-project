export interface Intent {
  id: number;
  type: string;
  amount: number;
  token: string;
  tx: string;
  status: 'pending' | 'fulfilled';
  date: string; // YYYY-MM-DD
}
