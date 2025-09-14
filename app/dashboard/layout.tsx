import Sidebar from '../../components/Sidebar';
import '../globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-900 text-white min-h-screen">
        {children}
      </main>
    </div>
  );
}
