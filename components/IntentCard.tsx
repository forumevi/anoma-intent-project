"use client";

type Intent = {
  type: string;
  amount: number;
  token: string;
  tx: string;
  status?: "pending" | "fulfilled";
};

export default function IntentCard({ intent }: { intent: Intent }) {
  const statusColor = intent.status === "fulfilled" ? "bg-green-600" : "bg-yellow-600";

  return (
    <div className={`p-4 rounded-xl shadow-md ${statusColor} text-white animate-slide-in`}>
      <h3 className="font-bold text-lg mb-2">{intent.type} Intent</h3>
      <p>Amount: <span className="font-semibold">{intent.amount} {intent.token}</span></p>
      <p>Tx: {intent.tx}</p>
      <p>Status: <span className="font-bold">{intent.status || "pending"}</span></p>
    </div>
  );
}
