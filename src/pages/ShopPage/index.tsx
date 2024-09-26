import { useState } from 'react';
import BasePages from '@/components/shared/base-pages.js';
import { FilterProduct } from './FilterProduct/FilterProduct';
import PaginationSection from '@/components/shared/pagination-section';
import { Link } from 'react-router-dom';
import { ProductMore } from '../ProductDetail/component/ProductMore';
import Footer from '@/components/shared/footer';

const FilterPrice = [
  {
    id: 'price1',
    title: 'Dưới 500.000đ',
    value: '500000'
  },
  {
    id: 'price2',
    title: '500.000đ - 1.000.000đ',
    value: '1000000'
  },
  {
    id: 'price3',
    title: '1.000.000đ - 2.000.000đ',
    value: '2000000'
  },
  {
    id: 'price4',
    title: '2.000.000đ - 3.000.000đ',
    value: '3000000'
  },
  {
    id: 'price5',
    title: 'Trên 3.000.000đ',
    value: '310000'
  }
];

const FilterProductType = [
  {
    id: 'type1',
    title: 'Sneaker',
    value: 'sneaker'
  },
  {
    id: 'type2',
    title: 'Giày lười',
    value: 'giay-loi'
  },
  {
    id: 'type3',
    title: 'Giày tây',
    value: 'giay-tay'
  },
  {
    id: 'type4',
    title: 'Giày thể thao',
    value: 'giay-the-thao'
  },
  {
    id: 'type5',
    title: 'Giày công sở',
    value: 'giay-cong-so'
  },
  {
    id: 'type6',
    title: 'Giày bóng đá',
    value: 'giay-bong-da'
  },
  {
    id: 'type7',
    title: 'Giày chạy bộ',
    value: 'giay-chay-bo'
  },
  {
    id: 'type8',
    title: 'Giày sandal',
    value: 'giay-sandal'
  }
];

const ListProduct = [
  {
    id: 1,
    name: 'Sneaker Air Jordan 1',
    price: '2,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 2,
    name: 'Giày lười nam',
    price: '500,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 3,
    name: 'Giày tây nam',
    price: '1,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 4,
    name: 'Giày tây nam',
    price: '1,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 5,
    name: 'Sneaker Nike Air Force 1',
    price: '1,500,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 6,
    name: 'Giày thể thao Adidas',
    price: '3,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 1,
    name: 'Sneaker Air Jordan 1',
    price: '2,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 2,
    name: 'Giày lười nam',
    price: '500,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 3,
    name: 'Giày tây nam',
    price: '1,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 4,
    name: 'Giày tây nam',
    price: '1,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 5,
    name: 'Sneaker Nike Air Force 1',
    price: '1,500,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 6,
    name: 'Giày thể thao Adidas',
    price: '3,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 1,
    name: 'Sneaker Air Jordan 1',
    price: '2,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 2,
    name: 'Giày lười nam',
    price: '500,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 3,
    name: 'Giày tây nam',
    price: '1,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  },
  {
    id: 4,
    name: 'Giày tây nam',
    price: '1,000,000',
    image:
      'https://shopgiayreplica.com/wp-content/uploads/2020/06/Giay-Saint-Laurent-Court-Classic-like-auth-6.jpg'
  }
];

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = 100;
  const postsPerPage = 10;
  console.log('currentPage', currentPage);

  return (
    <>
      <BasePages
        className="relative mx-auto  h-[100%] max-h-screen w-[85%] flex-1 p-4"
        pageHead="Cửa háng sản phẩm | G-Local"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Sản phẩm', link: '/shop' }
        ]}
      >
        <div className="mx-auto mt-2 grid w-full  grid-cols-[30%,70%]">
          {/* filter product */}
          <div className="">
            <h1 className="text-[20px] font-bold">G-Local Shoes</h1>
            <div className="ml-3 mt-7">
              <FilterProduct
                items={FilterPrice}
                nameType="GIÁ TIỀN"
                onFilterChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
            <div className="ml-3 mt-10">
              <FilterProduct
                items={FilterProductType}
                nameType="DÒNG SẢN PHẨM"
                onFilterChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
          </div>

          {/* show product */}
          <div className="flex  flex-col justify-between">
            <div className="grid grid-cols-4 gap-6">
              {ListProduct.map((product) => (
                <div key={product.id} className="flex  flex-col">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex flex-col items-center"
                  >
                    <img
                      loading="lazy"
                      src={product.image}
                      alt={product.name}
                      className="h-40 w-full rounded-[5px] object-cover duration-500 hover:scale-105"
                    />
                  </Link>
                  <p className="mt-3 text-[12px] text-muted-foreground">
                    BEST QUALITY
                  </p>
                  <div className="">{product.name}</div>
                  <div className="text-start">{product.price} đ</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <PaginationSection
            totalPosts={totalPosts}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />{' '}
        </div>
        <div className="mx-auto mt-10 ">
          {/* pagination */}
          <ProductMore />
          <Footer />
        </div>
      </BasePages>
    </>
  );
}
