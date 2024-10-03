import { useRouter } from '@/routes/hooks/use-router';
import BasePages from '@/components/shared/base-pages.js';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      <BasePages
        className="relative mx-auto max-h-screen w-[80%] flex-1 p-4"
        pageHead="Giỏ hàng | G-Local"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Đăng nhập', link: '/login' }
        ]}
      >
        <div className="">
          <div className="mx-auto w-[35%] rounded-xl bg-background p-4 shadow-lg">
            <h1>Đăng nhập</h1>
            <div className="mt-2 space-y-4">
              <Input placeholder="Email" />
              <Input placeholder="Mật khẩu" />
              <p className="text-[12px] text-orange">Quên mật khẩu?</p>
              <div className="flex flex-col items-center gap-4">
                <Button className="w-full bg-yellow text-black">
                  Đăng nhập
                </Button>
                <p className="text-[12px] text-muted-foreground">
                  Bạn chưa có tài khoản?{' '}
                  <a
                    onClick={() => router.push('/register')}
                    className="cursor-pointer text-orange"
                  >
                    Đăng ký ngay
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </BasePages>
    </>
  );
}
