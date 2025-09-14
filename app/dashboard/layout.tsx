"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <aside className="bg-cardBg p-4 transition-all w-64 min-h-screen">
        <button className="mb-6 text-white" onClick={() => setIsOpen(!isOpen)}>
          ⬅
        </button>
        <nav className="flex flex-col gap-4">
          <Link className="hover:text-primary transition" href="/dashboard">
            Dashboard
          </Link>
          <Link className="hover:text-primary transition" href="/dashboard/swap">
            Swap
          </Link>
          <Link className="hover:text-primary transition" href="/dashboard/stake">
            Stake
          </Link>
          {/* History linki kaldırıldı */}
          {/* <Link className="hover:text-primary transition" href="/dashboard/history">
            History
          </Link> */}
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-bgDark">{children}</main>
    </div>
  );
}
