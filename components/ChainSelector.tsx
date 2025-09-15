"use client";
import React, { useState } from "react";

const CHAINS = [
  { id: "ethereum", name: "Ethereum", rpc: "https://eth.llamarpc.com" },
  { id: "polygon", name: "Polygon", rpc: "https://polygon.llamarpc.com" },
  { id: "arbitrum", name: "Arbitrum", rpc: "https://arbitrum.llamarpc.com" },
  { id: "optimism", name: "Optimism", rpc: "https://optimism.llamarpc.com" },
];

export default function ChainSelector() {
  const [selected, setSelected] = useState(CHAINS[0].id);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2">Select Chain:</label>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="p-2 rounded bg-cardBg border border-gray-600 text-white"
      >
        {CHAINS.map((chain) => (
          <option key={chain.id} value={chain.id}>
            {chain.name}
          </option>
        ))}
      </select>
    </div>
  );
}
