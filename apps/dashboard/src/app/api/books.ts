import { api } from './client';

export const findMany = async (query: any) => {
  return api.get('/books', { ...query, myBooks: true });
};

export const create = async (body: any) => {
  return api.post('/books', body);
};
