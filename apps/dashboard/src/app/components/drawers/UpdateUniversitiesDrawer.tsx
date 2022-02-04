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
  Tooltip,
} from '@chakra-ui/react';
import {
  Form,
  FormButton,
  FormInput,
  FormPhoneNumberInput,
  FormUpload,
} from '@nx-lms/formik-chakra-react';
import * as yup from 'yup';
import { AiFillEdit } from 'react-icons/ai';

export function UpdateUniversitiesDrawer({ record }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const validationSchema = yup.object({
    arName: yup.string().required(),
    enName: yup.string().required(),
    username: yup.string().required(),
    phoneNumber: yup.string().required(),
    image: yup.string().required(),
  });

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
          <DrawerHeader borderBottomWidth="1px">انشاء جامعه جديدة</DrawerHeader>

          <Form
            initialValues={record}
            validationSchema={validationSchema}
            onSubmit={(e: any) => console.log(e)}
          >
            <DrawerBody>
              <Stack spacing="4" align="center">
                <FormUpload name="image" label="الصوره الشخصيه" />
                <FormPhoneNumberInput name="phoneNumber" label="رقم الهاتف" />
                <FormInput name="arName" label="اسم الجامه العربي" />
                <FormInput name="enName" label="اسم الجامه الانكليزي" />
                <FormInput name="username" label="رمز الجامعه التعريفي" />
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
