'use client';
import { useEffect, useState } from 'react';

export default function HistoryTable() {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('intents') || '[]');
    setRows(local);
  }, []);

  if (!rows.length) return <div className="p-4 bg-white/5 rounded-xl border border-white/6">No history yet</div>;

  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/6">
      {rows.map((r, idx) => (
        <div key={idx} className="mb-2 p-2 bg-white/10 rounded">
          <div>{r.type?.toUpperCase()} {r.amount} {r.token ?? r.to}</div>
          <div className="text-xs text-gray-300">{new Date(r.timestamp).toLocaleString()} {r.tx && `• ${r.tx}`}</div>
        </div>
      ))}
    </div>
  );
}
