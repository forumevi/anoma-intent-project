"use client";

import { useState } from "react";

export default function StakeForm() {
  const [stake, setStake] = useState(0);
  const [staked, setStaked] = useState(0);

  const handleStake = () => {
    setStaked(stake);
    setStake(0);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Stake Tokens</h2>
      <input
        type="number"
        value={stake}
        onChange={(e) => setStake(Number(e.target.value))}
        placeholder="Amount to stake"
        className="w-full p-3 rounded-lg mb-4 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
      />
      <button
        onClick={handleStake}
        className="w-full bg-green-500 hover:bg-green-600 transition rounded-lg py-3 font-bold"
      >
        Stake
      </button>
      {staked > 0 && (
        <div className="mt-4 p-3 bg-gray-700 rounded-lg animate-fade-in">
          Successfully staked: <span className="font-bold">{staked} Tokens</span>
        </div>
      )}
    </div>
  );
}
