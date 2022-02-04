import { api } from './client';

export const findMyPermissioins = async () => {
  return api.get('/users/permissions');
};

export const findMany = async (query: any) => {
  return api.get('/users', query);
};

export const create = async (data: unknown) => {
  return api.post('/users', data);
};
