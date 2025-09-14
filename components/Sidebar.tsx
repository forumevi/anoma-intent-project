'use client';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-60 p-4 bg-gray-800 text-white h-screen">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <Link href="/dashboard">Swap</Link>
        <Link href="/dashboard/stake">Stake</Link>
        <Link href="/dashboard/history">History</Link>
      </nav>
    </aside>
  );
}
