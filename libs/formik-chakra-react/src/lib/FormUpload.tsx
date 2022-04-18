import { Flex, Icon, Text } from '@chakra-ui/react';
import { Upload } from 'antd';
import { FaUpload } from 'react-icons/fa';
import { useFormikContext } from 'formik';

interface FormUploadProps {
  name: string;
  label: string;
}

export function FormUpload({ name, label }: FormUploadProps) {
  const { errors, touched } = useFormikContext();
  const error = (touched as any)[name] && (errors as any)[name];

  return (
    <Upload>
      <Flex
        boxSize={100}
        bg={error ? 'red.50' : 'gray.100'}
        borderRadius="lg"
        border="dashed"
        borderColor={error ? 'red.400' : 'gray.300'}
        _hover={{
          borderColor: 'gray.300',
        }}
        borderWidth="thin"
        transition=".3s"
        justify={'center'}
        align={'center'}
        direction={'column'}
      >
        <Icon
          fontSize={'lg'}
          as={FaUpload}
          color={error ? 'red.400' : 'gray.600'}
        />
        <Text fontSize={'xs'} color={error ? 'red.400' : 'gray.600'}>
          {label}
        </Text>
      </Flex>
    </Upload>
  );
}
