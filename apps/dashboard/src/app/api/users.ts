import { api } from './client';

export const findMyPermissioins = async () => {
  return api.get('/users/permissions');
};

export const findMany = async (query: any) => {
  return api.get('/users', query);
};
