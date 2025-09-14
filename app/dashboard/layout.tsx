"use client";
import React from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-cardBg p-4 transition-all w-64 min-h-screen">
        <button className="mb-6 text-white">⬅</button>
        <nav className="flex flex-col gap-4">
          <Link className="hover:text-primary transition" href="/dashboard">Dashboard</Link>
          <Link className="hover:text-primary transition" href="/dashboard/swap">Swap</Link>
          <Link className="hover:text-primary transition" href="/dashboard/stake">Stake</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-bgDark">{children}</main>
    </div>
  );
}
