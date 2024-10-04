import Sidebar from '../shared/sidebar';
import MobileSidebar from '../shared/mobile-sidebar';
import helper from '@/helpers/index';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/auth.slice';
import { useLayoutEffect, useState } from 'react';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    var token = helper.cookie_get('AT');
    if (token) {
      dispatch(login());
    }
  }, []);
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
