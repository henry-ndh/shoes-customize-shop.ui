import { Link } from 'react-router-dom';
import ImgProduct from '@/assets/shoes/Product.jpg';
import { useGetRandomShoes } from '@/queries/shoes.query';
import { useRouter } from '@/routes/hooks';

const listProduct = [
  {
    id: 1,
    name: 'Giày thể thao nam',
    price: 100000,
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 2,
    name: 'Jordan 1',
    price: 200000,
    image:
      'https://product.hstatic.net/1000011840/product/giay-trang-sneaker-cho-be-gh87-5_b94398fdb35e49f08025e39bd4c230a5_master.jpg'
  },
  {
    id: 3,
    name: 'Nike Air Force 1',
    price: 300000,
    image: 'https://pos.nvncdn.com/205d8e-20707/ps/20231225_NGJyTgrVez.jpeg'
  },
  {
    id: 4,
    name: 'Air Jordan 1',
    price: 300000,
    image:
      'https://product.hstatic.net/1000230642/product/giay-the-thao-nam-biti-s-hunter-x-2k22-jet-dsmh02202-luacw-color-den_aa78bf9ad04645369f6bbdb9427a1b33.jpg'
  }
];

export const ProductMore = () => {
  const { data: listShoes } = useGetRandomShoes();
  const router = useRouter();
  return (
    <div className="">
      <div>
        <h1 className="mb-2 text-[18px]">Sản phẩm nổi bật</h1>
        <div className="grid h-1/2 grid-cols-4 gap-8">
          {listShoes &&
            listShoes.length > 0 &&
            listShoes.map((product) => (
              <div className="h-1/2 w-full" key={product.id}>
                <div onClick={() => router.push(`/product/${product.id}`)}>
                  <img
                    className="h-full w-full rounded-xl object-cover duration-300 hover:scale-105"
                    src={product.shoesImagesViewModels[0].thumbnail}
                    alt={product.name}
                  />
                </div>
                <div className="mt-3">
                  <p className="text-[14px] text-muted-foreground">
                    BEST SELLER
                  </p>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
