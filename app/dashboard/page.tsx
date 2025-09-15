'use client';
import { useState } from 'react';
import IntentForm from '../../components/IntentForm';
import HistoryTable from '../../components/HistoryTable';
import { sampleHistory, Intent } from '../../data/sampleHistory';

export default function DashboardPage() {
  const [history, setHistory] = useState<Intent[]>(sampleHistory);

  const handleNewIntent = (intent: Intent) => {
    setHistory([intent, ...history]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Anoma Intent Dashboard</h1>
      <IntentForm onNewIntent={handleNewIntent} />
      <HistoryTable intents={history} />
    </div>
  );
}
