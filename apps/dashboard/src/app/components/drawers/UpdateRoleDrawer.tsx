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
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import {
  Form,
  FormButton,
  FormInput,
  FormRolesTree,
} from '@nx-lms/formik-chakra-react';
import * as yup from 'yup';
import { AiFillEdit } from 'react-icons/ai';
import _ from 'lodash';
import * as rolesApi from '../../api/roles';

export function UpdateRoleDrawer(props: any) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const permsObj = _.omit(props.record, ['id', 'arName', 'enName', 'userId']);
  const permsKeys = Object.keys(permsObj);

  const initialValues = { ...props.record, permissions: permsObj };

  const validationSchema = yup.object({
    arName: yup.string().required(),
    enName: yup.string().required(),
    permissions: yup.object(),
  });

  const onUpdateHandler = async (val: any) => {
    // Reshape the data
    const reshapedData = { ...val, ...val.permissions };
    delete reshapedData.permissions;

    // Update the data
    const response = await rolesApi.update(props.record.id, reshapedData);

    if (!response.ok) {
      // Show error message
      toast({
        status: 'error',
        title: 'Error',
        description: 'Some error happened please try again',
      });
    }

    // Show success message
    toast({
      status: 'success',
      title: 'Success',
      description: 'This role has been successfully edited',
    });

    // close the drawer
    onClose();

    // update local data
    setTimeout(() => {
      window.location.reload();
    }, 700);
  };

  return (
    <>
      <IconButton
        aria-label="fill edit"
        colorScheme="green"
        icon={<AiFillEdit />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField as any}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton left="2" right="auto" />
          <DrawerHeader borderBottomWidth="1px">تعديل الصلاحية</DrawerHeader>

          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onUpdateHandler}
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
              <Button variant="ghost" me={3} onClick={onClose}>
                Cancel
              </Button>
              <FormButton size={'md'} leftIcon={<FaEdit />}>
                تعديل
              </FormButton>
            </DrawerFooter>
          </Form>
        </DrawerContent>
      </Drawer>
    </>
  );
}
