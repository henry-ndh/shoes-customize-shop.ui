import Sidebar from '../shared/sidebar';
import MobileSidebar from '../shared/mobile-sidebar';
import helper from '@/helpers/index';
import { login } from '@/redux/auth.slice';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { useDispatch } from 'react-redux';
import { updateCart, updateTotalItems } from '@/redux/cart.slice';
import { useGetItemInCart } from '@/queries/cart.query';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { data: cartData } = useGetItemInCart();
  var token = helper.cookie_get('AT');
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (token) {
      dispatch(login());
    }
  }, []);

  useEffect(() => {
    if (token && cartData) {
      dispatch(updateCart(cartData));
      dispatch(updateTotalItems(cartData.listObjects.length));
    }
  }, [cartData]);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-secondary ">
      <MobileSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <Sidebar />
      <main className="overflow-y-auto">{children}</main>
      <Toaster />
    </div>
  );
}
