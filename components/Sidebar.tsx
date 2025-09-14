"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`bg-cardBg p-4 transition-all ${collapsed ? 'w-20' : 'w-64'} min-h-screen`}>
      <button onClick={() => setCollapsed(!collapsed)} className="mb-6 text-white">
        {collapsed ? '➡' : '⬅'}
      </button>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:text-primary transition">Dashboard</Link>
        <Link href="/dashboard/swap" className="hover:text-primary transition">Swap</Link>
        <Link href="/dashboard/stake" className="hover:text-primary transition">Stake</Link>
        <Link href="/dashboard/history" className="hover:text-primary transition">History</Link>
      </nav>
    </aside>
  );
}
