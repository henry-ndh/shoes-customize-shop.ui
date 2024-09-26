import BasePages from '@/components/shared/base-pages.js';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { useState } from 'react';
import { AlertModal } from '@/components/shared/alert-modal';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import ComboBoxFilter from '@/components/shared/combo-box-filter';
import { Textarea } from '@/components/ui/textarea';
import { Policy } from './components/Policy';
const initialProducts = [
  {
    id: 1,
    name: 'Giày thể thao nam',
    price: 100000,
    quantity: 1,
    isCustomized: false,
    brand: 'Nike',
    size: '38',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 2,
    name: 'Jordan 1',
    price: 200000,
    quantity: 1,
    isCustomized: true,
    brand: 'Adidas',
    size: '39',
    image:
      'https://product.hstatic.net/1000011840/product/giay-trang-sneaker-cho-be-gh87-5_b94398fdb35e49f08025e39bd4c230a5_master.jpg'
  },
  {
    id: 3,
    name: 'Nike Air Force 1',
    price: 300000,
    quantity: 1,
    brand: 'Nike',
    isCustomized: false,
    size: '40',
    image: 'https://pos.nvncdn.com/205d8e-20707/ps/20231225_NGJyTgrVez.jpeg'
  },
  {
    id: 4,
    name: 'Air Jordan 1',
    price: 300000,
    quantity: 1,
    size: '41',
    brand: 'Adidas',
    isCustomized: true,
    image:
      'https://product.hstatic.net/1000230642/product/giay-the-thao-nam-biti-s-hunter-x-2k22-jet-dsmh02202-luacw-color-den_aa78bf9ad04645369f6bbdb9427a1b33.jpg'
  }
];

export default function CheckoutPay() {
  const [products, setProducts] = useState(initialProducts);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleUpdateQuantity = (id, type) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          let newQuantity = product.quantity;
          if (type === 'decrease' && newQuantity > 1) {
            newQuantity -= 1;
          }
          if (type === 'increase') {
            newQuantity += 1;
          }
          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
  };

  const handleDeleteProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productToDelete)
    );
    setIsAlertModalOpen(false);
  };

  return (
    <>
      <BasePages
        className="relative mx-auto max-h-screen w-[80%] flex-1 p-4"
        pageHead="Thanh toán | G-Local"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Giỏ hàng', link: '/cart' },
          { title: 'Thanh toán', link: '/checkout-pay/1' }
        ]}
      >
        {/* Modal Xác nhận xóa */}
        <AlertModal
          isOpen={isAlertModalOpen}
          title="Thông báo"
          onClose={() => setIsAlertModalOpen(false)}
          onConfirm={handleDeleteProduct} // Xác nhận xóa sản phẩm
          description="Bạn chắc chắc muốn xóa sản phẩm này chứ?"
        />

        <div className="mt-4 grid  grid-cols-[58%,42%] gap-4">
          <div className="">
            <div className="flex flex-col gap-4 rounded-2xl bg-white p-4">
              <h1 className="flex gap-2 font-bold">
                <Icons.money className="stroke-orange" />
                Thông tin thanh toán
              </h1>
              {products.map((product) => (
                <div className="flex w-full" key={product.id}>
                  <img
                    className="h-[100px] w-[150px] object-cover duration-300 hover:scale-105"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="ml-3 mt-3 flex w-full justify-between">
                    {/* Tên và size sản phẩm */}
                    <div>
                      <p>
                        {product.name}{' '}
                        {product.isCustomized ? `(Sản phẩm custom)` : ''}{' '}
                      </p>
                      <p className="text-muted-foreground">
                        Size: {product.size}
                      </p>
                    </div>

                    {/* Giá, tăng lượng sản phẩm và xóa */}
                    <div className="flex flex-col items-center gap-4">
                      {/* Số lượng sp */}
                      <div className="flex flex-col gap-4">
                        <p>Số lượng: {product.quantity}</p>
                      </div>
                      {/* Giá */}
                      <div>
                        <p>
                          {product.isCustomized ? (
                            <>
                              Chỉ từ:{' '}
                              <span className="text-orange">
                                {product.price * product.quantity}
                              </span>{' '}
                              đ
                            </>
                          ) : (
                            <>
                              Giá:{' '}
                              <span className="text-orange">
                                {product.price * product.quantity}
                              </span>{' '}
                              đ
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-2xl bg-white p-4">
              <h1>Phương thức thanh toán</h1>
              <div className="mt-3 ">
                <div className="flex w-fit cursor-pointer items-center gap-2 rounded-xl border border-orange bg-[#fff2ca] p-3">
                  <Icons.receipt className="stroke-orange" />
                  <div className="flex flex-col">
                    Thanh toán khi nhận hàng
                    <span className="text-[13px] text-muted-foreground">
                      (GLocal sẽ liên hệ xác nhận đơn hàng trước khi giao hàng)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4">
            <h1 className="flex items-center font-bold ">
              <Icons.mapPin className="mr-2 h-6 w-6 stroke-orange" />
              Thông tin giao hàng
            </h1>
            <p className="my-4 flex justify-between gap-2">
              <Input placeholder="Họ và tên"></Input>
              <Input placeholder="Số điện thoại"></Input>
            </p>
            <div>
              <ComboBoxFilter onFilter={(value) => console.log(value)} />
            </div>
            <div>
              <Textarea placeholder="Địa chỉ (số nhà, ấp, tên đường, tòa nhà)" />
            </div>

            <div className="mt-3">
              Tổng tiền ({products.length} sản phẩm):
              <span className="text-bold ml-2 text-orange ">
                {products.reduce(
                  (acc, cur) => acc + cur.price * cur.quantity,
                  0
                )}{' '}
                đ
              </span>
            </div>
            <Link to="/checkout-pay/1">
              <Button className="mt-4 w-full cursor-pointer bg-yellow text-black">
                Đặt hàng
              </Button>
              <Button className="mt-4 w-full cursor-pointer bg-yellow text-black">
                Gửi đơn hàng cho GLocal
              </Button>
            </Link>
            <Policy />
          </div>
        </div>
      </BasePages>
    </>
  );
}
