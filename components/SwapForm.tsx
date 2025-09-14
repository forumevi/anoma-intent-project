"use client";

import { useState } from "react";

const tokens = ["ETH", "XAN"];

export default function SwapForm() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("ETH");
  const [to, setTo] = useState("XAN");
  const [output, setOutput] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSwap = () => {
    setLoading(true);
    setTimeout(() => {
      setOutput(amount * 0.95);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-cardBg p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto animate-fade-in">
      <h2 className="text-xl font-bold mb-4">Swap Tokens</h2>
      <div className="flex gap-2 mb-4">
        <select value={from} onChange={e => setFrom(e.target.value)} className="p-2 rounded-lg bg-bgDark border border-gray-700 text-white flex-1">
          {tokens.map(t => <option key={t}>{t}</option>)}
        </select>
        <select value={to} onChange={e => setTo(e.target.value)} className="p-2 rounded-lg bg-bgDark border border-gray-700 text-white flex-1">
          {tokens.map(t => <option key={t}>{t}</option>)}
        </select>
      </div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        className="w-full p-3 rounded-lg mb-4 bg-bgDark border border-gray-700 text-white focus:ring-2 focus:ring-primary transition"
      />
      <button
        onClick={handleSwap}
        className="w-full bg-primary hover:bg-indigo-600 transition rounded-lg py-3 font-bold"
      >
        {loading ? "Swapping..." : "Swap"}
      </button>
      {output > 0 && !loading && (
        <div className="mt-4 p-3 bg-gray-700 rounded-lg animate-fade-in">
          You will receive: <span className="font-bold">{output.toFixed(2)} {to}</span>
        </div>
      )}
    </div>
  );
}
