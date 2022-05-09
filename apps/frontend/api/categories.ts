import { api } from './client';

export const findMany = async () => {
  return api.get('/categories', );
};

export const create = async (body: any) => {
  return api.post('/categories', body);
};
