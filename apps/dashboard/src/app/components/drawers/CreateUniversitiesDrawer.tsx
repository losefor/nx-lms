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
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import {
  Form,
  FormButton,
  FormInput,
  FormPhoneNumberInput,
  FormUpload,
} from '@nx-lms/formik-chakra-react';
import * as yup from 'yup';

export function CreateUniversitiesDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const initialValues = {
    arName: '',
    enName: '',
    username: '',
    phoneNumber: '',
    image: '',
  };

  const validationSchema = yup.object({
    arName: yup.string().required(),
    enName: yup.string().required(),
    username: yup.string().required(),
    phoneNumber: yup.string().required(),
    image: yup.string().required(),
    email: yup.string().email().required(),
  });

  return (
    <>
      <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
        اضافه مستخدم جديد
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
          <DrawerHeader borderBottomWidth="1px">انشاء جامعه جديدة</DrawerHeader>

          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(e) => console.log(e)}
          >
            <DrawerBody>
              <Stack spacing="4" align="center">
                <FormUpload name="image" />
                <FormPhoneNumberInput name="phoneNumber" label="رقم الهاتف" />
                <FormInput name="arName" label="اسم الجامعة العربي" />
                <FormInput name="enName" label="اسم الجامعة الانكليزي" />
                <FormInput name="username" label="رمز الجامعة التعريفي" />
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="ghost" me={3} onClick={onClose}>
                الغاء
              </Button>
              <FormButton leftIcon={<FaPlus />}>انشاء</FormButton>
            </DrawerFooter>
          </Form>
        </DrawerContent>
      </Drawer>
    </>
  );
}
