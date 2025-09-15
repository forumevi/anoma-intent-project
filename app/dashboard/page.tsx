"use client";

import HistoryTable from '../../components/HistoryTable';
import { sampleHistory } from '../../data/sampleHistory';

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <HistoryTable intents={sampleHistory} />
    </div>
  );
}
