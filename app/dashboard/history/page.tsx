// app/dashboard/history/page.tsx
import HistoryTable from '../../components/HistoryTable';

const sampleHistory = [
  { id: 1, type: 'Swap', amount: 1.2, token: 'ETH', tx: '0xaaa', status: 'fulfilled', date: '2025-09-15' },
  { id: 2, type: 'Stake', amount: 3, token: 'XAN', tx: '0xbbb', status: 'pending', date: '2025-09-14' },
  { id: 3, type: 'Swap', amount: 0.5, token: 'XAN', tx: '0xccc', status: 'pending', date: '2025-09-13' },
];

export default function HistoryPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">History</h2>
      <HistoryTable intents={sampleHistory} />
    </div>
  );
}
