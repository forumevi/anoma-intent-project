import React from 'react';

export default function ExplorerPage({ params }: { params: { tx: string } }) {
  const { tx } = params;
  // fake details
  const status = Math.random() > 0.1 ? 'Success' : 'Pending';
  const block = 17000000 + Math.floor(Math.random() * 2000);
  const age = `${Math.floor(Math.random() * 60)}s ago`;
  const from = '0x' + Math.random().toString(16).slice(2, 10);
  const to = '0x' + Math.random().toString(16).slice(2, 10);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Explorer — {tx}</h2>

      <div className="p-6 bg-white/4 rounded-xl border border-white/6">
        <div><strong>Status:</strong> <span className="ml-2">{status}</span></div>
        <div className="mt-2"><strong>Block:</strong> <span className="ml-2">{block}</span></div>
        <div className="mt-2"><strong>Age:</strong> <span className="ml-2">{age}</span></div>
        <div className="mt-2"><strong>From:</strong> <code className="ml-2">{from}</code></div>
        <div className="mt-2"><strong>To:</strong> <code className="ml-2">{to}</code></div>
        <div className="mt-4 text-sm text-gray-300">This is a fake/exploratory view for demo purposes.</div>
      </div>

      <div>
        <a href="/dashboard" className="text-indigo-400 underline">Back to app</a>
      </div>
    </div>
  );
}
