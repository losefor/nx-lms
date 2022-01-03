import { atom } from 'recoil';

export const rolesState = atom({
  key: 'rolesState',
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

export const permissoins = atom<any>({
  key: 'permissions',
  default: {
    id: false,
  },
});
