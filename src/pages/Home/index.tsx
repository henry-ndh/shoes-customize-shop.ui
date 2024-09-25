import BasePages from '@/components/shared/base-pages.js';
import Promo from './components/Promo';
export default function HomePage() {
  return (
    <>
      <Promo />
      <BasePages
        className="relative max-h-screen flex-1 overflow-y-auto p-4"
        pageHead="Trang chủ | G-Local"
      ></BasePages>
    </>
  );
}
