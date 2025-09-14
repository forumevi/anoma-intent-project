'use client';
import { useState, useEffect } from 'react';

export default function SwapForm() {
  const [from, setFrom] = useState('ETH');
  const [to, setTo] = useState('USDC');
  const [amount, setAmount] = useState('1');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [tx, setTx] = useState<string | null>(null);

  async function fulfillIntent() {
    setLoading(true);
    setMessage(null);
    const simulatedTx = 'TX-' + Math.random().toString(36).slice(2, 10);
    setTx(simulatedTx);
    setTimeout(() => {
      setLoading(false);
      setMessage(`Swapped ${amount} ${from} → ${to} successfully!`);
      const history = JSON.parse(localStorage.getItem('intents') || '[]');
      history.unshift({ type: 'swap', from, to, amount, tx: simulatedTx, timestamp: new Date().toISOString() });
      localStorage.setItem('intents', JSON.stringify(history.slice(0, 200)));
    }, 1000);
  }

  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/6">
      <div className="flex gap-4 items-center mb-4">
        <input value={amount} onChange={(e) => setAmount(e.target.value)} className="p-2 rounded bg-white/10 w-24"/>
        <select value={from} onChange={(e) => setFrom(e.target.value)} className="p-2 rounded bg-white/10">
          <option>ETH</option>
          <option>USDC</option>
          <option>DAI</option>
        </select>
        <select value={to} onChange={(e) => setTo(e.target.value)} className="p-2 rounded bg-white/10">
          <option>USDC</option>
          <option>DAI</option>
          <option>ETH</option>
        </select>
        <button onClick={fulfillIntent} disabled={loading} className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500">
          {loading ? 'Processing...' : 'Swap'}
        </button>
      </div>
      {message && <div className="text-sm text-green-300">{message}</div>}
      {tx && <div className="text-xs text-gray-300 mt-1">Tx: {tx}</div>}
    </div>
  );
}
