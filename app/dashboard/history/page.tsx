"use client";

import HistoryTable from "@/components/HistoryTable";
import { Intent } from "@/types/Intent";

const sampleHistory: Intent[] = [
  {
    id: "1",
    type: "swap",
    amount: 1.2,
    token: "ETH",
    date: "2025-09-14",
    status: "completed",
  },
  {
    id: "2",
    type: "stake",
    amount: 3,
    token: "XAN",
    date: "2025-09-13",
    status: "pending",
  },
  {
    id: "3",
    type: "swap",
    amount: 0.5,
    token: "XAN",
    date: "2025-09-12",
    status: "pending",
  },
];

export default function HistoryPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">History</h2>
      <HistoryTable intents={sampleHistory} />
    </div>
  );
}
