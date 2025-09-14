import React from "react";
import IntentCard from "../../components/IntentCard";

const sampleIntents = [
  { type: "Swap", amount: 1.2, token: "ETH", tx: "0xaaa", status: "fulfilled" },
  { type: "Stake", amount: 3, token: "XAN", tx: "0xbbb", status: "pending" },
  { type: "Swap", amount: 0.5, token: "XAN", tx: "0xccc", status: "pending" },
];

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Intents Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleIntents.map((intent, i) => (
          <IntentCard key={i} intent={intent} />
        ))}
      </div>
    </div>
  );
}
