import BasePages from '@/components/shared/base-pages.js';
import Footer from '@/components/shared/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
const ListMenu = [
  {
    id: 1,
    title: 'Thông tin cá nhân'
  },
  {
    id: 2,
    title: 'Địa chỉ'
  },
  {
    id: 3,
    title: 'Đơn hàng'
  },
  {
    id: 4,
    title: 'Đăng xuất'
  }
];

export default function ProfilePage() {
  const [selectedMenu, setSelectedMenu] = useState(1);

  const _renderMenu = () => {
    switch (selectedMenu) {
      case 1:
        return <h1>Thông tin cá nhân</h1>;
      case 2:
        return <h1>Địa chỉ</h1>;
      case 3:
        return <h1>Đơn hàng</h1>;
      case 4:
        return <h1>Đăng xuất</h1>;
      default:
        return <h1>Thông tin cá nhân</h1>;
    }
  };

  return (
    <>
      <BasePages
        className="relative mx-auto max-h-screen w-[80%] flex-1  p-4"
        pageHead="Giỏ hàng | G-Local"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Profile', link: '/profile' }
        ]}
      >
        <div className="mt-2 grid h-full grid-cols-[30%,65%] gap-10">
          <div className="space-y-4 rounded-xl bg-background  p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h1 className="text-[20px] font-bold">Châu Nguyễn</h1>
            </div>
            {ListMenu.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedMenu(item.id)}
                className={`cursor-pointer rounded-md p-3 ${
                  selectedMenu === item.id ? 'bg-yellow' : 'bg-background'
                }`}
              >
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-background  p-4">{_renderMenu()}</div>
        </div>
        <Footer />
      </BasePages>
    </>
  );
}
