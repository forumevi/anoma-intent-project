import SwapForm from "../../components/SwapForm";
import IntentCard from "../../components/IntentCard";

const sampleIntents = [
  { type: "Swap", amount: 2, token: "ETH", tx: "0x123", status: "fulfilled" },
  { type: "Stake", amount: 5, token: "XAN", tx: "0x456", status: "pending" }
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SwapForm />
        <div className="space-y-4">
          {sampleIntents.map((intent, i) => (
            <IntentCard key={i} intent={intent} />
          ))}
        </div>
      </div>
    </div>
  );
}
