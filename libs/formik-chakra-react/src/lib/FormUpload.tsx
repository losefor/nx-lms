import { Box, Icon } from '@chakra-ui/react';
import { Upload } from 'antd';
import { FaUpload } from 'react-icons/fa';
import { useFormikContext } from 'formik';

interface FormUploadProps {
  name: string;
}

export function FormUpload({ name }: FormUploadProps) {
  const { errors, touched } = useFormikContext();
  const error = (touched as any)[name] && (errors as any)[name];

  return (
    <Upload style={{ width: 128, height: 128 }}>
      <Box
        p="8"
        bg={error ? 'red.50' : 'gray.100'}
        borderRadius="lg"
        border="dashed"
        borderColor={error ? 'red.400' : 'gray.300'}
        borderWidth="thin"
        transition=".3s"
        _hover={{
          borderColor: 'gray.300',
        }}
      >
        <Icon as={FaUpload} color={error ? 'red.400' : 'gray.600'} />
      </Box>
    </Upload>
  );
}
