import BaseRequest from '@/config/axios.config';
import { PagingModel } from '@/constants/data';
import { useMutation, useQuery } from '@tanstack/react-query';

const SUB_URL = `api/Shoes`;

export const useGetListShoesByPaging = () => {
  return useMutation({
    mutationKey: ['get_shoes'],
    mutationFn: async (model: typeof PagingModel) => {
      return BaseRequest.Post(`/${SUB_URL}/get-all-shoes-by-paging`, model);
    }
  });
};

export const useGetDetailShoes = (id: string) => {
  return useQuery({
    queryKey: ['get_detail_shoes'],
    queryFn: async () => {
      return BaseRequest.Get(`/${SUB_URL}/get-shoes/${id}`);
    }
  });
};

export const useSearchShoes = () => {
  return useMutation({
    mutationKey: ['search_shoes'],
    mutationFn: async (model: typeof PagingModel) => {
      return await BaseRequest.Post(`/${SUB_URL}/search-shoes-by-key`, model);
    }
  });
};
