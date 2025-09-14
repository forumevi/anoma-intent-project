"use client";

import { useState } from "react";

const tokens = ["ETH", "XAN"];

export default function SwapForm() {
  const [amount, setAmount] = useState(0);
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);
  const [output, setOutput] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSwap = () => {
    setLoading(true);
    setTimeout(() => {
      setOutput(amount * 0.95); // Simule edilmiş swap
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Swap Tokens</h2>

      <div className="flex gap-2 mb-4">
        <select
          value={fromToken}
          onChange={(e) => setFromToken(e.target.value)}
          className="flex-1 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
        >
          {tokens.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <select
          value={toToken}
          onChange={(e) => setToToken(e.target.value)}
          className="flex-1 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
        >
          {tokens.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        className="w-full p-3 rounded-lg mb-4 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        onClick={handleSwap}
        className="w-full bg-blue-500 hover:bg-blue-600 transition rounded-lg py-3 font-bold"
      >
        {loading ? "Swapping..." : "Swap"}
      </button>

      {output > 0 && !loading && (
        <div className="mt-4 p-3 bg-gray-700 rounded-lg animate-fade-in">
          You will receive: <span className="font-bold">{output.toFixed(2)} {toToken}</span>
        </div>
      )}
    </div>
  );
}
