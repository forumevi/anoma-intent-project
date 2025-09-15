"use client";
import React from "react";

interface Intent {
  id: number;
  type: "Swap" | "Stake";
  chain: string;
  token: string;
  amount: number;
  status: "pending" | "fulfilled";
}

interface Props {
  intent: Intent;
}

export default function IntentCard({ intent }: Props) {
  return (
    <div className="bg-cardBg p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{intent.type}</h3>
      <p><strong>Chain:</strong> {intent.chain}</p>
      <p><strong>Token:</strong> {intent.token}</p>
      <p><strong>Amount:</strong> {intent.amount}</p>
      <p><strong>Status:</strong> <span className={intent.status === "pending" ? "text-yellow-400" : "text-green-400"}>{intent.status}</span></p>
    </div>
  );
}
