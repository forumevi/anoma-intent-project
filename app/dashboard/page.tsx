"use client";
import { useEffect, useState } from "react";
import IntentForm from "../../components/IntentForm";
import IntentCard from "../../components/IntentCard";

export default function DashboardPage() {
  const [intents, setIntents] = useState([]);

  useEffect(() => {
    async function loadIntents() {
      const res = await fetch("/api/intents");
      const data = await res.json();
      setIntents(data);
    }
    loadIntents();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-white">Dashboard</h2>
      <IntentForm />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {intents.map((intent) => (
          <IntentCard key={intent.id} intent={intent} />
        ))}
      </div>
    </div>
  );
}
