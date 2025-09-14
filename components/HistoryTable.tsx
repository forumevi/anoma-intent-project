'use client';

import { Intent } from '@/types/Intent';

type Props = {
  intents: Intent[];
};

export default function HistoryTable({ intents }: Props) {
  return (
    <div className="space-y-4">
      {intents.map((intent) => (
        <div key={intent.id} className="p-4 rounded-xl shadow-md bg-gray-800 text-white">
          <h3 className="font-bold text-lg mb-2">{intent.type} Intent</h3>
          <p>Amount: {intent.amount} {intent.token}</p>
          <p>Tx: {intent.tx}</p>
          <p>Status: {intent.status}</p>
          <p>Date: {intent.date}</p>
        </div>
      ))}
    </div>
  );
}
