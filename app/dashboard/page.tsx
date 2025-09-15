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
    <div>
      <IntentForm />
      {intents.map((intent) => (
        <IntentCard key={intent.id} intent={intent} />
      ))}
    </div>
  );
}
