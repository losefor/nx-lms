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
  FormTextArea,
  FormButtonGroup,
} from '@nx-lms/formik-chakra-react';
import * as yup from 'yup';
import { colors } from '../../config/colors';

export function CreateBookDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const initialValues = {
    arName: '',
    enName: '',
    author: '',
    description: '',
    offerType: 'SALE',
    type: 'PAPER',
  };

  const validationSchema = yup.object({
    arName: yup.string().trim().required(),
    enName: yup.string().trim().required(),
    author: yup.string().trim().required(),
    description: yup.string().trim().required(),
    offerType: yup.string().required(),
    type: yup.string().required(),
  });

  return (
    <>
      <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
        اضافه كتاب جديد
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
          <DrawerHeader borderBottomWidth="1px">اضافه كتاب جديد</DrawerHeader>

          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(e) => console.log(e)}
          >
            <DrawerBody>
              <Stack spacing="4">
                <FormInput name="arName" label="الاسم العربي" />
                <FormInput name="enName" label="الاسم الانكليزي" />
                <FormInput name="author" label="اسم الكاتب" />
                <FormTextArea name="description" label="وصف الكتاب" />
                <FormButtonGroup
                  buttons={bookOfferType}
                  name="offerType"
                  label="نوع عرض الكتاب"
                  primaryColor={colors.primary}
                  primaryDarkColor={colors.primaryDark}
                />
                <FormButtonGroup
                  buttons={bookType}
                  name="type"
                  label="نوع الكتاب"
                  primaryColor={colors.primary}
                  primaryDarkColor={colors.primaryDark}
                />
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

const bookOfferType = [
  { value: 'RENT', name: 'للاستعارة' },
  { value: 'SALE', name: 'للبيع' },
];

const bookType = [
  { value: 'PDF', name: 'الكتروني' },
  { value: 'PAPER', name: 'ورقي' },
];
