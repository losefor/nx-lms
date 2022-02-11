import { ButtonGroup } from '@chakra-ui/react';
import { Table } from 'antd';
import { RemoveModal } from '@nx-lms/chakra-hoc';
import { useRecoilState } from 'recoil';
import { booksState } from '../atoms/atoms';
import { CreateBookDrawer } from '../components/drawers/CreateBookDrawer';
import { useEffect, useState } from 'react';
import * as booksApi from '../api/books';

export function Books() {
  const [booksData, setBooksData] = useRecoilState(booksState);
  const [query, setQuery] = useState({ skip: 0, take: 10 });

  useEffect(() => {
    findManyBooks();
  }, [query]);

  const findManyBooks = async () => {
    const response = await booksApi.findMany(query);
    const data: any = response.data;
    if (!response.ok) {
      // TODO: show alert
    }
    setBooksData(data);
  };

  const paginationHandler = (page: number, pageSize: number) => {
    console.log(page, pageSize);
    setQuery({ skip: (page - 1) * pageSize, take: pageSize as number });
  };

  return (
    <Table
      title={() => <CreateBookDrawer />}
      columns={columns}
      dataSource={booksData.data}
      pagination={{
        total: booksData.count,
        pageSize: query.take,
        onChange: paginationHandler as any,
      }}
    />
  );
}

const ActionButtons = ({ record }: any) => {
  const [booksData, setBooksData] = useRecoilState(booksState);

  const onDeleteHandler = () => {
    console.log('delete');
    const newBooks = booksData.data.filter(
      (role: any) => role.id !== record.id
    );

    setBooksData({ data: newBooks, count: (booksData.count -= 1) });
  };

  return (
    <ButtonGroup variant="solid" size="sm" spacing={2}>
      {/* <UpdateUniversitiesDrawer record={record} /> */}

      <RemoveModal
        header="حذف الكتاب"
        body="هل انت متاكد انك تريد حذف الكتاب...؟"
        deleteInfo="قم بكتابه اسم الكتاب من اجل تاكيد عمليه الحذف"
        checkText={record.enName}
        onClick={onDeleteHandler}
      />
    </ButtonGroup>
  );
};

const columns = [
  {
    title: 'Arabic name',
    key: 'arName',
    dataIndex: 'arName',
  },
  {
    title: 'English name',
    key: 'enName',
    dataIndex: 'enName',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (text: any, record: any) => <ActionButtons record={record} />,
  },
];
