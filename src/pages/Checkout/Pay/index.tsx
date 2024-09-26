import BasePages from '@/components/shared/base-pages.js';
export default function CheckOutPay() {
  return (
    <>
      <BasePages
        className="relative mx-auto max-h-screen w-[80%] flex-1 overflow-y-auto p-4"
        pageHead="Trang chủ | G-Local"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Sản phẩm', link: '/shop' },
          { title: 'Thanh toán', link: '/checkout-pay' }
        ]}
      ></BasePages>
    </>
  );
}
