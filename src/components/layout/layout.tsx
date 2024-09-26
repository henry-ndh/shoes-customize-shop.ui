import { useState } from 'react';
import Sidebar from '../shared/sidebar';
import MobileSidebar from '../shared/mobile-sidebar';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-secondary ">
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar />

      <main className="overflow-y-auto">{children}</main>
    </div>
  );
}
