"use client";
import { useEffect, useState } from "react";
import HistoryTable from "../../../components/HistoryTable";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/history");
      const data = await res.json();
      setHistory(data);
    }
    load();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">History</h2>
      <HistoryTable intents={history} />
    </div>
  );
}
