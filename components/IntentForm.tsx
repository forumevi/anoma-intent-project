"use client";
import React, { useState } from "react";
import IntentCard from "./IntentCard";

type Chain = "Ethereum" | "Polygon" | "Binance Smart Chain" | "Avalanche";
type Token = "ETH" | "XAN" | "USDT" | "DAI" | "BNB" | "MATIC";

interface Intent {
  id: number;
  type: "Swap" | "Stake";
  chain: Chain;
  amount: number;
  token: Token;
  status: "pending" | "fulfilled";
}

export default function IntentForm() {
  const [type, setType] = useState<"Swap" | "Stake">("Swap");
  const [chain, setChain] = useState<Chain>("Ethereum");
  const [token, setToken] = useState<Token>("ETH");
  const [amount, setAmount] = useState<number>(0);
  const [intents, setIntents] = useState<Intent[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newIntent: Intent = {
      id: intents.length + 1,
      type,
      chain,
      token,
      amount,
      status: "pending",
    };
    setIntents([newIntent, ...intents]);
    setAmount(0);
  };

  const chains: Chain[] = ["Ethereum", "Polygon", "Binance Smart Chain", "Avalanche"];
  const tokens: Token[] = ["ETH", "XAN", "USDT", "DAI", "BNB", "MATIC"];

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-cardBg p-6 rounded-lg shadow-md space-y-4">
        <div className="flex gap-4">
          <select value={type} onChange={(e) => setType(e.target.value as any)} className="p-2 rounded bg-bgDark text-white">
            <option value="Swap">Swap</option>
            <option value="Stake">Stake</option>
          </select>
          <select value={chain} onChange={(e) => setChain(e.target.value as any)} className="p-2 rounded bg-bgDark text-white">
            {chains.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select value={token} onChange={(e) => setToken(e.target.value as any)} className="p-2 rounded bg-bgDark text-white">
            {tokens.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Amount"
            className="p-2 rounded bg-bgDark text-white flex-1"
            min={0}
          />
          <button type="submit" className="bg-primary px-4 py-2 rounded text-white">Submit</button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {intents.map((intent) => (
          <IntentCard key={intent.id} intent={intent} />
        ))}
      </div>
    </div>
  );
}
