"use client";

interface ChainSelectorProps {
  chain: string;
  setChain: (value: string) => void;
  chains: string[];
  setToken: (value: string) => void;
  tokens: Record<string, string[]>;
}

export default function ChainSelector({ chain, setChain, chains, setToken, tokens }: ChainSelectorProps) {
  return (
    <div>
      <label className="block text-white mb-1">Chain</label>
      <select
        className="w-full p-2 rounded"
        value={chain}
        onChange={(e) => {
          setChain(e.target.value);
          setToken(tokens[e.target.value][0]);
        }}
      >
        {chains.map((c) => <option key={c}>{c}</option>)}
      </select>
    </div>
  );
}
