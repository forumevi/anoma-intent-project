// app/layout.tsx
// app/dashboard/layout.tsx veya app/layout.tsx
import '../globals.css'; // kök dizine çıkıp globals.css'i import ediyor

import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Anoma Intent Dashboard',
  description: 'Professional intent-centric Web3 demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
