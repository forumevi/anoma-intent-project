"use client";
import { useState } from "react";
import ChainSelector from "./ChainSelector";

const chains = ["Ethereum", "Polygon", "BNB Smart Chain"];
const tokens = {
  Ethereum: ["ETH", "USDC", "DAI"],
  Polygon: ["MATIC", "USDC", "USDT"],
  "BNB Smart Chain": ["BNB", "BUSD"]
};

export default function IntentForm() {
  const [chain, setChain] = useState(chains[0]);
  const [token, setToken] = useState(tokens[chains[0]][0]);
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Intent created: ${amount} ${token} on ${chain}`);
    // burada fetch ile /api/intents POST yapılabilir
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-cardBg rounded-lg space-y-4">
      <ChainSelector chain={chain} setChain={setChain} chains={chains} setToken={setToken} tokens={tokens} />
      <div>
        <label className="block text-white mb-1">Token</label>
        <select className="w-full p-2 rounded" value={token} onChange={(e) => setToken(e.target.value)}>
          {tokens[chain].map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-white mb-1">Amount</label>
        <input type="number" className="w-full p-2 rounded" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
      </div>
      <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Create Intent</button>
    </form>
  );
}
