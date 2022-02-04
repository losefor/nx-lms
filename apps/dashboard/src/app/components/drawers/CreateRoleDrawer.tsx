import React from 'react';
import {
  Button,
  useDisclosure,
  Drawer,
  DrawerHeader,
  Stack,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  useToast,
  Heading,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import {
  Form,
  FormButton,
  FormInput,
  FormRolesTree,
} from '@nx-lms/formik-chakra-react';
import * as yup from 'yup';
import * as rolesApi from '../../api/roles';
import { permissions } from '../../atoms/atoms';
import { useRecoilState } from 'recoil';

export function CreateRoleDrawer() {
  const [perms] = useRecoilState(permissions);

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const permsKeys = [
    'role',
    'university',
    'department',
    'student',
    'attachment',
    'book',
    'category',
    'history',
    'favorite',
  ];

  const initialValues = {
    arName: '',
    enName: '',
    permissions: {},
  };

  const validationSchema = yup.object({
    arName: yup.string().required(),
    enName: yup.string().required(),
    permissions: yup.object(),
  });

  const onCreateHandler = async (val: any) => {
    // Reshape the data
    const reshapedData = { ...val, ...val.permissions };
    delete reshapedData.permissions;

    // Update the data
    const response = await rolesApi.create(reshapedData);

    if (!response.ok && response.status === 403) {
      // Show error message
      return toast({
        status: 'error',
        title: 'لم تتم الاضافة',
        description:
          'ليس لديك الصلاحيات اللازم لانشاء صلاحيه جديدة يرجى التواصل مع الاداره من اجل الحصول عل الصلاحيات اللازمة',
      });
    }

    // Show success message
    toast({
      status: 'success',
      title: 'Success',
      description: 'This role has been successfully created',
    });

    // close the drawer
    onClose();

    // update local data
    return setTimeout(() => {
      window.location.reload();
    }, 700);
  };

  if (!perms['role'].includes('c')) {
    return <Heading>Roles</Heading>;
  }

  return (
    <>
      <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
        اضافه صلاحية جديدة
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField as any}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton left="2" right="auto" />
          <DrawerHeader borderBottomWidth="1px">
            انشاء صلاحية جديدة
          </DrawerHeader>

          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onCreateHandler}
          >
            <DrawerBody>
              <Stack spacing="4">
                <FormInput name="arName" label="الاسم العربي" />
                <FormInput name="enName" label="الاسم الانكليزي" />
                <FormRolesTree
                  perms={permsKeys}
                  colorScheme={'teal'}
                  name="permissions"
                />
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" me={3} onClick={onClose}>
                Cancel
              </Button>
              <FormButton>Submit</FormButton>
            </DrawerFooter>
          </Form>
        </DrawerContent>
      </Drawer>
    </>
  );
}
