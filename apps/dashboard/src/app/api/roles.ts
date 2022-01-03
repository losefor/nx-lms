import { api } from './client';

export const findMany = async (query: any) => {
  return api.get('/roles', query);
};

export const create = async (data: any) => {
  return api.post(`/roles`, data);
};

export const update = async (id: string, data: any) => {
  return api.patch(`/roles/${id}`, data);
};

export const remove = async (id: string) => {
  return api.delete(`/roles/${id}`);
};
