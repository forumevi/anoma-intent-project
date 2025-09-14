'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/swap', label: 'Swap' },
    { href: '/dashboard/stake', label: 'Stake' },
    { href: '/dashboard/history', label: 'History' },
  ];

  return (
    <aside className="bg-gray-800 w-64 p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Anoma Demo</h1>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-md ${
              pathname === link.href ? 'bg-green-600 font-semibold' : 'hover:bg-gray-700'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
