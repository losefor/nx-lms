import {
  Container,
  Heading,
  Image,
  SimpleGrid,
  Flex,
  Text,
  Divider,
  Button,
  Box,
} from '@chakra-ui/react';
import { DateRangePicker } from '../../components/DateRangePicker';
import { useState } from 'react';
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export default function BookId() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Container maxW={'5xl'} mt={'10'}>
      <Flex direction={['column-reverse', 'row']}>
        <Flex direction={'column'} align={'center'}>
          <Heading color={'gray.700'}>Book cover design formula</Heading>
          <Text color={'gray.700'} textAlign={'center'}>
            this is the description of the book will be too too long and should
            be beautiful{' '}
          </Text>
          <Divider py={2} width={'90%'} />

          <Text pt={2} color={'gray.500'}>
            Choose what time suites you for renting{' '}
          </Text>
          <Box>
            <DateRangePicker />
            <Button width={'full'} colorScheme={'teal'}>
              Rent The book
            </Button>
          </Box>
        </Flex>
        <Image
          marginX={'auto'}
          py={2}
          borderRadius={5}
          alt="Book cover"
          src="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
        />
      </Flex>
    </Container>
  );
}
