"use client";

import React from "react";
import ChainSelector from "../../components/ChainSelector";
import HistoryTable from "../../components/HistoryTable";
import { sampleHistory } from "../../data/sampleHistory";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      {/* Multichain Dropdown */}
      <ChainSelector />

      {/* History Table */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Intent History</h3>
        <HistoryTable intents={sampleHistory} />
      </div>
    </div>
  );
}
