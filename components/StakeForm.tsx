"use client";

import { useState } from "react";

export default function StakeForm() {
  const [stake, setStake] = useState(0);
  const [staked, setStaked] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleStake = () => {
    setLoading(true);
    setTimeout(() => {
      setStaked(stake);
      setStake(0);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-cardBg p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto animate-fade-in">
      <h2 className="text-xl font-bold mb-4">Stake Tokens</h2>
      <input
        type="number"
        value={stake}
        onChange={(e) => setStake(Number(e.target.value))}
        placeholder="Amount to stake"
        className="w-full p-3 rounded-lg mb-4 bg-bgDark border border-gray-700 text-white focus:ring-2 focus:ring-secondary transition"
      />
      <button
        onClick={handleStake}
        className="w-full bg-secondary hover:bg-green-600 transition rounded-lg py-3 font-bold"
      >
        {loading ? "Staking..." : "Stake"}
      </button>
      {staked > 0 && !loading && (
        <div className="mt-4 p-3 bg-gray-700 rounded-lg animate-fade-in">
          Successfully staked: <span className="font-bold">{staked} Tokens</span>
        </div>
      )}
    </div>
  );
}
