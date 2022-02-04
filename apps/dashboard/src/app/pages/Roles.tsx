import {
  Box,
  ButtonGroup,
  Divider,
  Flex,
  toast,
  useToast,
} from '@chakra-ui/react';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { CreateRoleDrawer } from '../components/drawers/CreateRoleDrawer';
import { UpdateRoleDrawer } from '../components/drawers/UpdateRoleDrawer';
import { RemoveModal } from '@nx-lms/chakra-hoc';
import { useRecoilState } from 'recoil';
import { rolesState } from '../atoms/atoms';
import * as rolesApi from '../api/roles';

export function Roles() {
  const toast = useToast();

  const [rolesData, setRolesData] = useRecoilState(rolesState);
  const [query] = useState({ skip: 0, take: 10 });

  useEffect(() => {
    getAllRoles();
  }, []);

  const getAllRoles = async () => {
    const response = await rolesApi.findMany(query);
    const items = response.data as any;

    // Show error message when the request fail
    if (!response.ok) {
      return toast({
        status: 'error',
        title: 'Error happened',
        description: items.message,
      });
    }

    return setRolesData(items);
  };

  return (
    <Table
      title={() => (
      
        <Flex justifyContent={'flex-end'}>
           <CreateRoleDrawer />
        </Flex>
      )}
      columns={columns}
      dataSource={rolesData.data}
      rowKey="id"
    />
  );
}

const ActionButtons = ({ record }: any) => {
  const toast = useToast();
  const [rolesData, setRolesData] = useRecoilState(rolesState);

  const onDeleteHandler = async () => {
    // optimistic delete
    const prevRolesData = rolesData;
    const newRoles = rolesData.data.filter(
      (role: any) => role.id !== record.id
    );

    const newRolesData = { data: newRoles, count: 0 };
    setRolesData(newRolesData);

    const response = await rolesApi.remove(record.id);
    if (!response.ok) {
      toast({
        status: 'error',
        title: 'Error',
        description: 'Some error happened please try again',
      });

      return setRolesData(prevRolesData);
    }

    toast({
      status: 'success',
      title: 'Success',
      description: 'The role has been deleted successfully',
    });
  };

  return (
    <ButtonGroup variant="solid" size="sm" spacing={2}>
      <UpdateRoleDrawer record={record} />

      <RemoveModal
        header="حذف الصلاحية"
        body="هل انت متاكد انك تريد حذف الصلاحية...؟"
        deleteInfo="قم بكتابه اسم الصلاحية من اجل تاكيد عمليه الحذف"
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
