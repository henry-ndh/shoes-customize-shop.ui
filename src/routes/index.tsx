import NotFound from '@/pages/not-found';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

const DashboardLayout = lazy(() => import('@/components/layout/layout'));
const SignInPage = lazy(() => import('@/pages/auth/signin'));
const HomePage = lazy(() => import('@/pages/Home/index'));
const ShopPage = lazy(() => import('@/pages/ShopPage/index'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail/index'));
const CheckOutPay = lazy(() => import('@/pages/Checkout/Pay/index'));
const CartPage = lazy(() => import('@/pages/CartPage/index'));
// ----------------------------------------------------------------------

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <HomePage />,
          index: true
        },
        {
          path: '/shop',
          element: <ShopPage />
        },
        {
          path: '/product/:id',
          element: <ProductDetail />
        },
        {
          path: '/checkout-pay/:orderId',
          element: <CheckOutPay />
        },
        {
          path: '/cart',
          element: <CartPage />
        }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '/login',
      element: <SignInPage />,
      index: true
    },
    {
      path: '/404',
      element: <NotFound />
    },

    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
