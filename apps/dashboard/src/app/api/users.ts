import { api } from './client';

export const findMyPermissioins = async () => {
  return api.get('/users/permissions');
};

export const findMany = async (query: Record<string, string | number>) => {
  return api.get('/users', query);
};

export const create = async (data: unknown) => {
  return api.post('/users', data);
};

export const update = async (id: string, data: unknown) => {
  return api.patch(`/users/${id}`, data);
};

export const remove = async (id: string) => {
  return api.delete(`/users/${id}`);
};
