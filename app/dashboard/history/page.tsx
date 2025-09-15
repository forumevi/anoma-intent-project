"use client";

import HistoryTable from "../../../components/HistoryTable";

type Intent = {
  type: string;
  amount: number;
  token: string;
  tx: string;
  status?: "pending" | "fulfilled";
};

const sampleHistory: Intent[] = [
  { type: "Swap", amount: 1.5, token: "ETH", tx: "0xaaa", status: "fulfilled" },
  { type: "Stake", amount: 3, token: "XAN", tx: "0xbbb", status: "pending" }
];

export default function HistoryPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">History</h2>
      <HistoryTable intents={sampleHistory} />
    </div>
  );
}
