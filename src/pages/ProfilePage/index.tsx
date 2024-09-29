import BasePages from '@/components/shared/base-pages.js';

export default function ProfilePage() {
  return (
    <>
      <BasePages
        className="relative mx-auto max-h-screen w-[80%] flex-1 overflow-y-auto p-4"
        pageHead="Giỏ hàng | G-Local"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Profile', link: '/profile' }
        ]}
      >
        <div></div>
      </BasePages>
    </>
  );
}
