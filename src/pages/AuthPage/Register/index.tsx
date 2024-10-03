import BasePages from '@/components/shared/base-pages.js';

export default function RegisterPage() {
  return (
    <>
      <BasePages
        className="relative mx-auto max-h-screen w-[80%] flex-1 overflow-y-auto p-4"
        pageHead="Giỏ hàng | G-Local"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Đăng ký', link: '/register' }
        ]}
      >
        <div>Đăng ký</div>
      </BasePages>
    </>
  );
}
