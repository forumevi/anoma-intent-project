'use client';
import { useState } from 'react';
import { chains, tokensByChain } from '../data/chainsAndTokens';

export default function IntentForm({ onNewIntent }: { onNewIntent: any }) {
  const [chain, setChain] = useState(chains[0]);
  const [token, setToken] = useState(tokensByChain[chains[0]][0]);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'Swap' | 'Stake'>('Swap');

  const handleChainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedChain = e.target.value;
    setChain(selectedChain);
    setToken(tokensByChain[selectedChain][0]);
  };

  const handleSubmit = () => {
    onNewIntent({ type, chain, token, amount: parseFloat(amount), tx: '0x' + Math.random().toString(16).slice(2), status: 'pending', date: new Date().toISOString().split('T')[0] });
    setAmount('');
  };

  return (
    <div className="p-4 bg-cardBg rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-bold mb-2">Create Intent</h3>

      <label>Type</label>
      <select value={type} onChange={e => setType(e.target.value as any)} className="w-full mb-2 p-2 rounded bg-gray-800">
        <option value="Swap">Swap</option>
        <option value="Stake">Stake</option>
      </select>

      <label>Chain</label>
      <select value={chain} onChange={handleChainChange} className="w-full mb-2 p-2 rounded bg-gray-800">
        {chains.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <label>Token</label>
      <select value={token} onChange={e => setToken(e.target.value)} className="w-full mb-2 p-2 rounded bg-gray-800">
        {tokensByChain[chain].map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      <label>Amount</label>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)}
        className="w-full mb-2 p-2 rounded bg-gray-800"/>

      <button onClick={handleSubmit} className="mt-2 bg-primary text-white px-4 py-2 rounded">Submit Intent</button>
    </div>
  );
}
