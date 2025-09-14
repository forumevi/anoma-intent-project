import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bgDark text-white px-6">
      <img src="/logo.png" alt="Anoma Logo" className="w-32 mb-6" />
      <h1 className="text-5xl font-extrabold mb-4 text-center">Welcome to Anoma Intents</h1>
      <p className="text-center text-lg mb-8 max-w-xl">
        Explore our intent-based Web3 dashboard. Swap, Stake, and track your intents seamlessly.
      </p>
      <Link href="/dashboard" className="px-8 py-4 rounded-lg bg-primary hover:bg-indigo-600 transition font-bold">
        Go to Dashboard
      </Link>
    </div>
  );
}
