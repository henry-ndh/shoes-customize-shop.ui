import BaseRequest from '@/config/axios.config';
import { PagingModel } from '@/constants/data';
import { useMutation, useQuery } from '@tanstack/react-query';

const SUB_URL = `api/CheckOut`;

export type CreateCartModel = {
  note: string;
  shipAddress: string;
  paymentMethod: number;
  shoesId: number;
  quantity: number;
  shoesImageId: number;
  size: string;
};

export type AddCartModel = {
  shoesId: number;
  quantity: number;
  shoesImageId: number;
  orderId: number;
  size: string;
};

export const useCreateCart = () => {
  return useMutation({
    mutationKey: ['create-cart'],
    mutationFn: async (model: CreateCartModel) => {
      return BaseRequest.Post(`/${SUB_URL}/check-out`, model);
    }
  });
};

export const useGetItemInCart = () => {
  return useQuery({
    queryKey: ['get_item_in_cart'],
    queryFn: async () => {
      return BaseRequest.Post(`/${SUB_URL}/get-all-orders`, PagingModel);
    }
  });
};

export const useAddItemToCart = () => {
  return useMutation({
    mutationKey: ['add_item_to_cart'],
    mutationFn: async (model: AddCartModel) => {
      return BaseRequest.Post(`/${SUB_URL}/add-item-to-order`, model);
    }
  });
};
