import { ButtonGroup, IconButton, Tooltip, useToast } from '@chakra-ui/react';
import { Table } from 'antd';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { CreateUniversitiesDrawer } from '../components/drawers/CreateUsersDrawer';
import { UpdateUniversitiesDrawer } from '../components/drawers/UpdateUniversitiesDrawer';
import { RemoveModal } from '@nx-lms/chakra-hoc';
import { useEffect, useState } from 'react';
import * as usersApi from '../api/users';
import { useRecoilState } from 'recoil';
import { usersState } from '../atoms/atoms';
import { UpdateUserDrawer } from '../components/drawers/UpdateUsersDrawer';

export function Users() {
  const toast = useToast();

  // const [rolesData, setRolesData] = useRecoilState(rolesState);
  const [users, setUsers] = useRecoilState(usersState);
  const [query, setQuery] = useState({ skip: 0, take: 10 });

  useEffect(() => {
    finMayUsers();
  }, []);

  const finMayUsers = async () => {
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

    return setUsers(items);
    // return [];
  };

  return (
    <div>
      <Table
        title={() => <CreateUniversitiesDrawer />}
        columns={columns}
        dataSource={users.data}
        rowKey="id"
      />
    </div>
  );
}

const ActionButtons = ({ record }: any) => {
  console.log(record.enName);
  const toast = useToast();
  const [users, setUsers] = useRecoilState(usersState);

  const onDeleteHandler = async () => {
    // optimistic delete
    const prevUsersData = users;
    const newRoles = users.data.filter((role: any) => role.id !== record.id);

    const newRolesData = { data: newRoles, count: 0 };
    setUsers(newRolesData);

    const response = await usersApi.remove(record.id);
    if (!response.ok) {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Some error happened please try again',
      });

      return setUsers(prevUsersData);
    }

    toast({
      status: 'success',
      title: 'Success',
      description: 'The role has been deleted successfully',
    });
  };

  return (
    <ButtonGroup variant="solid" size="sm" spacing={2}>
      <Tooltip label="مشاهده في صفحة اخرى">
        <IconButton
          aria-label="arrow up right"
          colorScheme="blue"
          icon={<BsBoxArrowUpRight />}
        />
      </Tooltip>

      <UpdateUserDrawer record={record} />

      <RemoveModal
        onClick={onDeleteHandler}
        header="حذف الجامعة"
        body="هل انت متاكد انك تريد حذف الجامعة...؟"
        deleteInfo="قم بكتابه اسم الجامعة من اجل تاكيد عمليه الحذف"
        checkText={record.enName}
      />
    </ButtonGroup>
  );
};

const columns = [
  {
    title: 'اسم المستخدم',
    key: 'arName',
    dataIndex: 'arName',
  },
  {
    title: 'نوع المستخدم',
    key: 'role.arName',
    dataIndex: ['role', 'arName'],
  },
  {
    title: 'الاجراءات',
    key: 'actions',
    render: (text: any, record: any) => <ActionButtons record={record} />,
  },
];
