import BaseRequest from '@/config/axios.config';
import { useMutation, useQuery } from '@tanstack/react-query';

const SUB_URL = `api/Location`;

export type TypeProvince = {
  id: string;
  name: string;
  vnpostProvinceId: string;
};

export type TypeDistrict = {
  id: string;
  name: string;
  vnpostDistrictId: string;
  provinceId: string;
};

export type TypeWard = {
  id: string;
  name: string;
  vnpostWardId: string;
  districtId: string;
};

export const useGetProvince = () => {
  return useQuery({
    queryKey: ['get_province'],
    queryFn: async () => {
      return BaseRequest.Get(`/${SUB_URL}/get-list-province`);
    }
  });
};

export const useGetDistrict = (provinceId: string) => {
  return useMutation({
    mutationKey: ['get_district'],
    mutationFn: async () => {
      return BaseRequest.Get(
        `/${SUB_URL}/get-list-district-by-province-id?id=${provinceId}`
      );
    }
  });
};

export const useGetWard = (districtId: string) => {
  return useMutation({
    mutationKey: ['get_ward'],
    mutationFn: async () => {
      return BaseRequest.Get(
        `/${SUB_URL}/get-list-ward-by-district-id?id=${districtId}`
      );
    }
  });
};
