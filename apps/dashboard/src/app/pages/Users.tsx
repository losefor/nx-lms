import { ButtonGroup, IconButton, useToast } from '@chakra-ui/react';
import { Table } from 'antd';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { CreateUniversitiesDrawer } from '../components/drawers/CreateUsersDrawer';
import { UpdateUniversitiesDrawer } from '../components/drawers/UpdateUniversitiesDrawer';
import { RemoveModal } from '@nx-lms/chakra-hoc';
import { useEffect, useState } from 'react';
import * as usersApi from '../api/users';

export function Users() {
  const toast = useToast();

  // const [rolesData, setRolesData] = useRecoilState(rolesState);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState({ skip: 0, take: 10 });

  useEffect(() => {
    getAllRoles();
  }, []);

  const getAllRoles = async () => {
    const response = await usersApi.findMany(query);
    const items = response.data as any;

    // Show error message when the request fail
    if (!response.ok) {
      return toast({
        status: 'error',
        title: 'Error happened',
        description: items.message,
      });
    }

    console.log(items);

    return setUsers(items.data);
    // return [];
  };

  const columns = [
    // {
    //   title: 'Arabic name',
    //   key: 'arCommName',
    //   dataIndex: 'arCommName',
    // },
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

  return (
    <div>
      <Table
        title={() => <CreateUniversitiesDrawer />}
        columns={columns}
        dataSource={users}
        rowKey="id"
      />
    </div>
  );
}

const ActionButtons = ({ record }: any) => {
  console.log(record.enName);
  return (
    <ButtonGroup variant="solid" size="sm" spacing={2}>
      <IconButton
        aria-label="arrow up right"
        colorScheme="blue"
        icon={<BsBoxArrowUpRight />}
      />

      <UpdateUniversitiesDrawer record={record} />

      <RemoveModal
        onClick={() => console.log('delete university')}
        header="حذف الجامعة"
        body="هل انت متاكد انك تريد حذف الجامعة...؟"
        deleteInfo="قم بكتابه اسم الجامعة من اجل تاكيد عمليه الحذف"
        checkText={record.enName}
      />
    </ButtonGroup>
  );
};
