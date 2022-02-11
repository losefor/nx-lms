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
  IconButton,
  Tooltip,
} from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import {
  Form,
  FormButton,
  FormInput,
  FormPhoneNumberInput,
  FormSelect,
  FormUpload,
} from '@nx-lms/formik-chakra-react';
import * as yup from 'yup';
import { useRecoilState } from 'recoil';
import { rolesState } from '../../atoms/atoms';
import * as usersApi from '../../api/users';
import { AiFillEdit } from 'react-icons/ai';

export function UpdateUserDrawer({ record }: any) {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [roles] = useRecoilState(rolesState);

  const validationSchema = yup.object({
    arName: yup.string().required(),
    enName: yup.string().required(),
    username: yup.string().required(),
    phoneNumber: yup.string().required(),
    image: yup.string(),
    email: yup.string().email().required(),
    roleId: yup.string().uuid().required(),
  });

  const onUpdateHandler = async (val: object) => {
    console.log(val);

    // Update the data
    const response = await usersApi.update(record.id, val);

    if (!response.ok) {
      // Show error message
      return toast({
        status: 'error',
        title: 'لم تتم الاضافة',
        description:
          'ليس لديك الصلاحيات اللازم لانشاء مستخدم جديد يرجى التواصل مع الاداره من اجل الحصول عل الصلاحيات اللازمة',
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

  return (
    <>
      <Tooltip label="تعديل">
        <IconButton
          aria-label="fill edit"
          colorScheme="green"
          icon={<AiFillEdit />}
          onClick={onOpen}
        />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField as any}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton left="2" right="auto" />
          <DrawerHeader borderBottomWidth="1px">انشاء مستخدم جديد</DrawerHeader>

          <Form
            initialValues={{
              ...record,
              roleId: record?.role?.id,
              role: undefined,
            }}
            validationSchema={validationSchema}
            onSubmit={onUpdateHandler}
          >
            <DrawerBody>
              <Stack spacing="4" align="center">
                <FormUpload name="image" label="الصوره الشخصيه" />
                <FormPhoneNumberInput
                  isRequired
                  name="phoneNumber"
                  label="رقم الهاتف"
                />
                <FormInput
                  isRequired
                  name="arName"
                  label="اسم المستخدم العربي"
                />
                <FormInput
                  isRequired
                  name="enName"
                  label="اسم المستخدم الانكليزي"
                />
                <FormInput
                  isRequired
                  name="username"
                  label="رمز المستخدم التعريفي"
                />
                <FormInput isRequired name="email" label="ايميل المستخدم" />
                <FormSelect isRequired name="roleId" label="نوع المستخدم">
                  {roles.data.map((item: any) => (
                    <option value={item.id}>{item.arName}</option>
                  ))}
                </FormSelect>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button size={'md'} variant="ghost" me={3} onClick={onClose}>
                الغاء
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
