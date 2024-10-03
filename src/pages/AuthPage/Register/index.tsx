import { useRouter } from '@/routes/hooks/use-router';
import BasePages from '@/components/shared/base-pages.js';
import Footer from '@/components/shared/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function RegisterPage() {
  const router = useRouter();
  return (
    <>
      <BasePages
        className="relative mx-auto max-h-screen w-[80%] flex-1 p-4"
        pageHead="Giỏ hàng | G-Local"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Đăng ký', link: '/login' }
        ]}
      >
        <div className="">
          <div className="mx-auto w-[35%] rounded-xl bg-background p-4 shadow-lg">
            <h1>Đăng nhập</h1>
            <div className="mt-2 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Họ" />
                <Input placeholder="Tên" />
              </div>
              <Input placeholder="Email" />
              <Input placeholder="Mật khẩu" />
              <Input placeholder="Xác nhận mật khẩu" />
              <p className="p-4 text-center text-[11px] text-muted-foreground">
                Bằng việc tiếp tục, bạn đồng ý với{' '}
                <a className="text-orange">Chính sách bảo</a> và{' '}
                <a className="text-orange">Điều khoản dịch vụ</a> của G-Local
              </p>
              <div className="flex flex-col items-center gap-4">
                <Button className="w-full bg-yellow text-black">Đăng ký</Button>
                <p className="text-[12px] text-muted-foreground">
                  Bạn đã có tài khoản?{' '}
                  <a
                    onClick={() => router.push('/login')}
                    className="cursor-pointer text-orange"
                  >
                    Đăng nhập ngay
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
