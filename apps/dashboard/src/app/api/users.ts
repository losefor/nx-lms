import { api } from './client';

export const findMyPermissioins = async () => {
  return api.get('/users/permissions');
};
