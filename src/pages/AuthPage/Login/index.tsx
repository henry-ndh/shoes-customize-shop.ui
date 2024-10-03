import BasePages from '@/components/shared/base-pages.js';

export default function LoginPage() {
  return (
    <>
      <BasePages
        className="relative mx-auto max-h-screen w-[80%] flex-1 overflow-y-auto p-4"
        pageHead="Giỏ hàng | G-Local"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Đăng nhập', link: '/login' }
        ]}
      >
        <div>Đăng nhập</div>
      </BasePages>
    </>
  );
}
