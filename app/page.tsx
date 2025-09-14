import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-6xl font-extrabold">Intent Demo</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Switch up your regular Web3 practices. Just express your intent, and let the system do the magic ✨
        </p>
        <Link href="/dashboard" className="inline-block px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition shadow-lg">
          Enter App →
        </Link>
      </div>
    </main>
  );
}