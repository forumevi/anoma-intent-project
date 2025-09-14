"use client";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      {/* Buraya Swap / Stake kartları eklenecek */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl shadow-md bg-green-600 text-white">
          <h3 className="font-bold text-lg mb-2">Swap Intent</h3>
          <p>Amount: <span className="font-semibold">1.2 ETH</span></p>
          <p>Tx: 0xaaa</p>
          <p>Status: <span className="font-bold">fulfilled</span></p>
        </div>

        <div className="p-4 rounded-xl shadow-md bg-yellow-600 text-white">
          <h3 className="font-bold text-lg mb-2">Stake Intent</h3>
          <p>Amount: <span className="font-semibold">3 XAN</span></p>
          <p>Tx: 0xbbb</p>
          <p>Status: <span className="font-bold">pending</span></p>
        </div>
      </div>
    </div>
  );
}
