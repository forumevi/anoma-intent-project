'use client';
import { useState } from 'react';

export default function StakeForm() {
  const [token, setToken] = useState('UPWARD');
  const [amount, setAmount] = useState('100');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function stake() {
    setLoading(true);
    setMessage(null);
    const tx = 'TX-' + Math.random().toString(36).slice(2, 10);
    const item = { type: 'stake', token, amount: Number(amount), tx, timestamp: new Date().toISOString() };
    const prev = JSON.parse(localStorage.getItem('intents') || '[]');
    prev.unshift(item);
    localStorage.setItem('intents', JSON.stringify(prev.slice(0, 200)));
    setTimeout(() => {
      setLoading(false);
      setMessage(`Staked ${amount} ${token} successfully! Tx: ${tx}`);
    }, 1000);
  }

  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/6">
      <div className="mb-2">
        <label>Token</label>
        <input value={token} onChange={(e) => setToken(e.target.value)} className="w-full p-2 rounded bg-white/10"/>
      </div>
      <div className="mb-2">
        <label>Amount</label>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-2 rounded bg-white/10"/>
      </div>
      <button onClick={stake} disabled={loading} className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500">
        {loading ? 'Processing...' : 'Stake'}
      </button>
      {message && <div className="mt-2 text-sm text-green-300">{message}</div>}
    </div>
  );
}
