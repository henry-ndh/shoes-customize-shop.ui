import BasePages from '@/components/shared/base-pages.js';
import { FilterProduct } from './FilterProduct/FilterProduct';

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

export default function ShopPage() {
  return (
    <>
      <BasePages
        className="relative h-screen max-h-screen flex-1 overflow-y-auto p-4"
        pageHead="Cửa háng sản phẩm | G-Local"
      >
        <div className="mx-auto grid h-full w-[85%] grid-cols-[35%,65%]">
          <div className="bg-rose-100 ">
            <h1 className="font-bold">G-Local Shoes</h1>
            <div>
              <FilterProduct items={FilterPrice} nameType="GIÁ TIỀN" />
            </div>
          </div>
          <div className="bg-rose-200">1221</div>
        </div>
      </BasePages>
    </>
  );
}
