import { atom } from 'recoil';

interface Response {
  count: number;
  data?: any;
}

export const rolesState = atom<Response>({
  key: 'rolesState',
  default: {
    count: 0,
    data: [],
  },
});

export const usersState = atom<Response>({
  key: 'usersState',
  default: {
    count: 0,
    data: [],
  },
});

export const booksState = atom<Response>({
  key: 'booksState',
  default: {
    count: 0,
    data: [],
  },
});

export const permissions = atom<any>({
  key: 'permissions',
  default: {
    id: false,
  },
});
