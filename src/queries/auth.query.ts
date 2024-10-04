import BaseRequest from '@/config/axios.config';
import { useMutation } from '@tanstack/react-query';

const SUB_URL = `api/Account`;

export const useLogin = () => {
  return useMutation({
    mutationKey: ['get_advisor'],
    mutationFn: async (model: any) => {
      return BaseRequest.Post(`/${SUB_URL}/login`, model);
    }
  });
};
