import React from "react";
import HistoryTable from "../../components/HistoryTable";
import { sampleHistory } from "../../data/sampleHistory";

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">History</h2>
      <HistoryTable intents={sampleHistory} />
    </div>
  );
}
