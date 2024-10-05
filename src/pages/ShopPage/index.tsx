import { useEffect, useState } from 'react';
import BasePages from '@/components/shared/base-pages.js';
import { FilterProduct } from './FilterProduct/FilterProduct';
import PaginationSection from '@/components/shared/pagination-section';
import { Link } from 'react-router-dom';
import { ProductMore } from '../ProductDetail/component/ProductMore';
import Footer from '@/components/shared/footer';
import {
  useGetListShoesByPaging,
  useGetShoesByBrand
} from '@/queries/shoes.query';
import { PagingModel } from '@/constants/data';
import { ProductType } from '@/types';
import { useGetAllBrands } from '@/queries/brand.query';

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
    id: 'type2',
    title: 'Yordan',
    value: 'Yordan'
  },
  {
    id: 'type3',
    title: 'Nike',
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

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [listProduct, setListProduct] = useState<ProductType[]>([]);
  const { mutateAsync: getListShoes, data, error } = useGetListShoesByPaging();
  const [paging, setPaging] = useState<typeof PagingModel>({
    pageNumber: 1,
    pageSize: 5,
    keyword: '',
    orderBy: '',
    orderDirection: '',
    totalRecord: 0,
    day: 0,
    week: 0,
    month: 0,
    year: 0,
    createdBy: ''
  });
  const { data: dataBrand } = useGetAllBrands();
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const listBrands = dataBrand?.listObjects.map((item, index) => {
    return {
      id: index,
      title: item.name,
      value: item.name
    };
  });

  const { mutateAsync: getShoesByBrand } = useGetShoesByBrand();

  useEffect(() => {
    if (selectedBrand !== '') {
      handleGetShoesByBrand();
    } else {
      console.log('zo');
      handleGetListShoes(paging);
    }
  }, [selectedBrand]);
  const handleGetShoesByBrand = async () => {
    if (selectedBrand !== '') {
      let model = { ...paging, brandName: selectedBrand };
      const data = await getShoesByBrand(model);
      if (data) {
        setListProduct(data.listObjects);
        setPaging({ ...paging, totalRecord: data.paging.totalRecord });
      } else {
      }
    }
  };
  useEffect(() => {
    if (currentPage !== paging.pageNumber) {
      const newPaging = { ...paging, pageNumber: currentPage };
      setPaging(newPaging);
      handleGetListShoes(newPaging);
    }
  }, [currentPage]);

  useEffect(() => {
    handleGetListShoes(paging);
  }, []);

  const handleGetListShoes = async (paging) => {
    const data = await getListShoes(paging);
    if (data) {
      setListProduct(data.listObjects);
      setPaging({ ...paging, totalRecord: data.paging.totalRecord });
    } else {
      console.log(error);
    }
  };

  return (
    <>
      <BasePages
        className="relative mx-auto  h-auto  w-[85%] flex-1  p-4 p-4"
        pageHead="Cửa háng sản phẩm | G-Local"
        breadcrumbs={[
          { title: 'Trang chủ', link: '/' },
          { title: 'Sản phẩm', link: '/shop' }
        ]}
      >
        <div className="mt-3 rounded-2xl bg-white p-6">
          <div className="mx-auto mt-2 grid w-full grid-cols-[25%,75%] ">
            {/* filter product */}
            <div className="">
              <h1 className="text-[20px] font-bold">G-Local Shoes</h1>
              <div className="ml-3 mt-7">
                {/* <FilterProduct
                  items={FilterPrice}
                  nameType="GIÁ TIỀN"
                  onFilterChange={(value) => {
                    console.log(value);
                  }}
                /> */}
              </div>
              <div className="ml-3 mt-10">
                {dataBrand?.listObjects.length > 0 && (
                  <FilterProduct
                    items={listBrands}
                    nameType="DÒNG SẢN PHẨM"
                    onFilterChange={(value) => {
                      setSelectedBrand(value);
                    }}
                  />
                )}
              </div>
            </div>

            {/* show product */}
            <div className="flex  flex-col justify-between">
              <div className="grid grid-cols-4 gap-10">
                {listProduct && listProduct.length > 0 ? (
                  listProduct.map((product) => (
                    <div key={product.id} className="mb-4 flex flex-col">
                      <Link
                        to={`/product/${product.id}`}
                        className="flex flex-col items-center"
                      >
                        <img
                          loading="lazy"
                          src={product.shoesImagesViewModels[0].thumbnail}
                          alt={product.name}
                          className="h-[230px] w-full rounded-[5px] object-contain duration-500 hover:scale-105"
                        />
                      </Link>
                      <p className="mt-3 text-[12px] text-muted-foreground">
                        BEST QUALITY
                      </p>
                      <div className="">{product.name}</div>
                      <div className="text-start">{product.price} đ</div>
                    </div>
                  ))
                ) : (
                  <div className="flex w-full justify-center">
                    <p>Sản phẩm đang được cập nhập thêm...</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 ">
            <PaginationSection
              totalPosts={paging.totalRecord}
              postsPerPage={paging.pageSize}
              currentPage={paging.pageNumber}
              setCurrentPage={setCurrentPage}
            />{' '}
          </div>
        </div>
        <div className="mx-auto mt-6 rounded-2xl bg-white p-6 ">
          {/* pagination */}
          <ProductMore />
        </div>
        <div className="mt-4 rounded-2xl ">
          {' '}
          <Footer />
        </div>
      </BasePages>
    </>
  );
}
