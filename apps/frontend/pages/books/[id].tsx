import {
  Container,
  Heading,
  Image,
  Flex,
  Text,
  Divider,
  Button,
  Box,
  AspectRatio,
  IconButton,
} from '@chakra-ui/react';
import { DateRangePicker } from '../../components/DateRangePicker';
import { useEffect, useRef, useState } from 'react';
import { PDFViewer } from '../../components/PDFViewer';
import { FiX } from 'react-icons/fi';
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export default function BookId() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isReadingMode, setIsReadingMode] = useState(false);
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  const pdf =
    'https://firebasestorage.googleapis.com/v0/b/tareky-blog.appspot.com/o/Library%20Managment%20System-3.pdf?alt=media&token=33727db8-803e-4801-b089-8be6485621a2#view=FitH';

  const pdfFixCors =
    'https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/tareky-blog.appspot.com/o/Library%20Managment%20System-3.pdf?alt=media&token=33727db8-803e-4801-b089-8be6485621a2';

  return (
    <Container maxW={'5xl'} mt={'10'}>
      <Flex direction={'column'}>
        <Flex direction={'column'} align={'center'}>
          <Heading size={'md'} textAlign={'center'} color={'gray.700'}>
            Design and implementation of the digital library management system
          </Heading>
          <Text color={'gray.700'} textAlign={'center'}>
            this is the description of the book will be too too long and should
            be beautiful{' '}
          </Text>
          <Divider py={2} width={'90%'} />
        </Flex>

        <Container
          height={{ base: '60vh', md: isReadingMode ? '100vh' : '80vh' }}
          position={isReadingMode ? 'fixed' : 'unset'}
          top={0}
          left={0}
          bottom={0}
          right={0}
          py={2}
          maxW={'4xl'}
          transition={'.3s'}
          // onMouseEnter={() => setIsReadingMode(true)}
          zIndex={999}
        >
          <iframe width={'100%'} height={'100%'} src={pdf} />
          {/* <PDFViewer src={pdfFixCors} /> */}
        </Container>
      </Flex>
    </Container>
  );
}
