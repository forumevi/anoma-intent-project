import React from "react";

type Intent = {
  type: "Swap" | "Stake";
  amount: number;
  token: string;
  tx: string;
  status: "pending" | "fulfilled";
};

type Props = {
  intent: Intent;
};

export default function IntentCard({ intent }: Props) {
  const bgColor = intent.status === "fulfilled" ? "bg-green-600" : "bg-yellow-600";

  return (
    <div className={`p-4 rounded-xl shadow-md text-white ${bgColor} transform transition duration-300 hover:scale-105`}>
      <h3 className="font-bold text-lg mb-2">{intent.type} Intent</h3>
      <p>Amount: <span className="font-semibold">{intent.amount} {intent.token}</span></p>
      <p>Tx: {intent.tx}</p>
      <p>Status: <span className="font-bold">{intent.status}</span></p>
    </div>
  );
}
