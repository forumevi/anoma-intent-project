'use client';

export default function IntentCard({ intent }: { intent: any }) {
  return (
    <div className="p-3 bg-white/5 rounded-xl border border-white/6">
      <div className="font-semibold">{intent.type?.toUpperCase()}</div>
      {intent.amount && <div>Amount: {intent.amount} {intent.token ?? intent.to}</div>}
      {intent.tx && <div>Tx: {intent.tx}</div>}
      <div className="text-xs text-gray-300">{new Date(intent.timestamp || Date.now()).toLocaleString()}</div>
    </div>
  );
}
