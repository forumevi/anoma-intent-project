import HistoryTable from '../../../components/HistoryTable';

export default function HistoryPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Intent History</h1>
      <HistoryTable />
    </div>
  );
}
