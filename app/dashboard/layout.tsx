"use client";

import Sidebar from "../../components/Sidebar";
import '../globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-bgDark">
        {children}
      </main>
    </div>
  );
}
