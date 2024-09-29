import ScrollToTop from '@/hooks/scroll-to-top';
import NotFound from '@/pages/not-found';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

const SystemLayout = lazy(() => import('@/components/layout/layout'));
const SignInPage = lazy(() => import('@/pages/auth/signin'));
const HomePage = lazy(() => import('@/pages/Home/index'));
const ShopPage = lazy(() => import('@/pages/ShopPage/index'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail/index'));
const CheckOutPay = lazy(() => import('@/pages/Checkout/Pay/index'));
const CartPage = lazy(() => import('@/pages/CartPage/index'));
const CustomizePage = lazy(() => import('@/pages/Customize/index'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage/index'));

// ----------------------------------------------------------------------

export default function AppRouter() {
  const systemRoute = [
    {
      path: '/',
      element: (
        <SystemLayout>
          <Suspense>
            <ScrollToTop />
            <Outlet />
          </Suspense>
        </SystemLayout>
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
        },
        {
          path: '/profile',
          element: <ProfilePage />
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
      path: '/customize/1',
      element: <CustomizePage />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...systemRoute, ...publicRoutes]);

  return routes;
}
