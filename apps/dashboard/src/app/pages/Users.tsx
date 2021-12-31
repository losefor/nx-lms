import { ButtonGroup, IconButton, SimpleGrid } from '@chakra-ui/react';
import { AiFillEdit } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs';
import { Table } from 'antd';

import { StudentCard } from '../components/cards/StudentCard';

export default function Users() {
  return (
    <div>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing="5">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </SimpleGrid>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

const columns = [
  {
    title: 'الاسم الثلاثي',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'العمر',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => <ActionButtons />,
  },
];

const ActionButtons = () => {
  return (
    <ButtonGroup variant="solid" size="sm" spacing={2}>
      <IconButton
        aria-label="arrow up right"
        colorScheme="blue"
        icon={<BsBoxArrowUpRight />}
      />
      <IconButton
        aria-label="fill edit"
        colorScheme="green"
        icon={<AiFillEdit />}
      />
      <IconButton
        aria-label="trash"
        colorScheme="red"
        variant="outline"
        icon={<BsFillTrashFill />}
      />
    </ButtonGroup>
  );
};

const data = [
  {
    id: '324234-23423432-536-234236',
    name: 'محمد باقر',
    age: 20,
  },
];
