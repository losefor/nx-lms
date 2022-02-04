import { atom } from 'recoil';

interface Response {
  count?: number;
  data?: any;
}

export const rolesState = atom<Response>({
  key: 'rolesState',
  default: {
    count: 0,
    data: [],
  },
});

export const usersState = atom({
  key: 'usersState',
  default: {
    count: 0,
    data: [
      {
        id: '1',
        arName: 'جامعة',
        enName: 'University',
      },
      {
        id: '2',
        arName: 'طالب',
        enName: 'Student',
      },
    ],
  },
});

export const booksState = atom({
  key: 'booksState',
  default: {
    count: 0,
    books: [
      {
        id: '1',
        arName: 'جامعة',
        enName: 'University',
      },
      {
        id: '2',
        arName: 'طالب',
        enName: 'Student',
      },
    ],
  },
});

export const permissions = atom<any>({
  key: 'permissions',
  default: {
    id: false,
  },
});
