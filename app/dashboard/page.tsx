"use client";

import IntentCard from "../../components/IntentCard";

type Intent = {
  type: string;
  amount: number;
  token: string;
  tx: string;
  status?: "pending" | "fulfilled"; // sadece bu iki değer geçerli
};

// sampleIntents array'ini buna göre güncelledik
const sampleIntents: Intent[] = [
  { type: "Swap", amount: 1.2, token: "ETH", tx: "0xaaa", status: "fulfilled" },
  { type: "Stake", amount: 3, token: "XAN", tx: "0xbbb", status: "pending" },
  { type: "Swap", amount: 0.5, token: "XAN", tx: "0xccc", status: "pending" }
];

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Intents Dashboard</h2>
      <div className="space-y-4">
        {sampleIntents.map((intent, i) => (
          <IntentCard key={i} intent={intent} />
        ))}
      </div>
    </div>
  );
}
