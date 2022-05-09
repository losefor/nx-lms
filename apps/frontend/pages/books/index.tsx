import {
  Flex,
  Box,
  Icon,
  HStack,
  Collapse,
  useDisclosure,
  Text,
  Divider,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { colorParser } from '@nx-lms/chakra-hoc';
import { BookCard } from '../../components/BookCard';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import * as categoryApi from '../../api/categories';

interface Category {
  id: string;
  name: string;
  children?: Category[];
}

const CategoryItem = ({
  isSubcategory,
  label,
  subcategories,
  bgColor,
  ...rest
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const PADDING_START = rest.ps + 5;

  return (
    <Flex direction={'column'}>
      {/* Start:: Category */}
      <HStack
        justify={'space-between'}
        _hover={{ bgColor: 'gray.50' }}
        bgColor={bgColor}
        {...rest}
      >
        <Box padding={'2'} cursor={'pointer'}>
          <Text color={'gray.600'} fontWeight={isOpen && 'bold'}>
            {label}
          </Text>
        </Box>
        {subcategories && (
          <IconButton
            aria-label="open-drop-down"
            color={'gray.300'}
            _hover={{ color: 'gray.400' }}
            variant={'ghost'}
            onClick={() => onToggle()}
            icon={<FaChevronLeft />}
            transform={isOpen ? 'rotate(-90deg)' : ''}
            _active={{ bgColor: 'transparent' }}
          />
        )}
      </HStack>

      <Divider />

      {/* Start:: Subcategory */}
      <Collapse in={isOpen}>
        {subcategories &&
          subcategories.map((category, index) => (
            <CategoryItem
              ps={PADDING_START}
              isSubcategory
              key={index}
              label={category.arName}
              subcategories={category.children}
              bgColor={'gray.50'}
              _hover={{ bgColor: 'gray.100' }}
            />
          ))}
      </Collapse>
    </Flex>
  );
};

export default function BooksHomePage() {
  const SIDE_BAR_WIDTH = 60;
  const router = useRouter();

  const { data, isLoading, error } = useQuery<any>('categoryData', async () => {
    return await categoryApi.findMany();
  });

  console.log({ data });

  return (
    <div>
      <Flex
        direction={'column'}
        borderLeftWidth={'thin'}
        borderColor={'gray.100'}
        width={SIDE_BAR_WIDTH}
        height={'calc(100vh - 60px)'}
        position={'absolute'}
        bgColor={'white'}
      >
        {!isLoading &&
          data.data.map((category, index) => (
            <CategoryItem
              ps={0}
              isSubcategory={false}
              bgColor={'white'}
              key={index}
              label={category.arName}
              subcategories={category.children}
            />
          ))}
      </Flex>

      {/* Start:: holder */}
      <Flex direction={'column'} ms={SIDE_BAR_WIDTH}>
        {books.map((book) => (
          <BookCard
            onClick={() => router.push(`/books/${book.id}`)}
            title={book.arName}
            description={book.description}
            key={book.id}
            type={book.type}
            offerType={book.offerType}
          />
        ))}
      </Flex>
    </div>
  );
}

const books = [
  {
    id: '1',
    enName: 'Design patterns with node js',
    arName: 'دراسه الانماط مع ال node js',
    type: 'PAPER',
    offerType: 'RENT',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus magni consequatur adipisci culpa similique, voluptate, quasi dolorem suscipit, quam optio sit ipsum? Perspiciatis libero voluptatibus iure ullam consequuntur dolorem dolores',
  },
  {
    id: '1',
    enName: 'Design patterns with node js',
    arName: 'دراسه الانماط مع ال node js',
    type: 'PAPER',
    offerType: 'RENT',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus magni consequatur adipisci culpa similique, voluptate, quasi dolorem suscipit, quam optio sit ipsum? Perspiciatis libero voluptatibus iure ullam consequuntur dolorem dolores',
  },
  {
    id: '1',
    enName: 'Node js streams',
    arName: 'Node js streams',
    type: 'PAPER',
    offerType: 'RENT',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus magni consequatur adipisci culpa similique, voluptate, quasi dolorem suscipit, quam optio sit ipsum? Perspiciatis libero voluptatibus iure ullam consequuntur dolorem dolores',
  },
  {
    id: '1',
    enName: 'Js basics',
    arName: 'Js basics',
    type: 'PDF',
    offerType: 'RENT',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus magni consequatur adipisci culpa similique, voluptate, quasi dolorem suscipit, quam optio sit ipsum? Perspiciatis libero voluptatibus iure ullam consequuntur dolorem dolores',
  },
  {
    id: '1',
    enName: 'Typescript the advanced concepts',
    arName: 'Typescript the advanced concepts',
    type: 'PAPER',
    offerType: 'SALE',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus magni consequatur adipisci culpa similique, voluptate, quasi dolorem suscipit, quam optio sit ipsum? Perspiciatis libero voluptatibus iure ullam consequuntur dolorem dolores',
  },
  {
    id: '1',
    enName: 'SQL for zero to hero',
    arName: 'SQL for zero to hero',
    type: 'PDF',
    offerType: 'RENT',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus magni consequatur adipisci culpa similique, voluptate, quasi dolorem suscipit, quam optio sit ipsum? Perspiciatis libero voluptatibus iure ullam consequuntur dolorem dolores',
  },
  {
    id: '1',
    enName: 'Design patterns with node js',
    arName: 'دراسه الانماط مع ال node js',
    type: 'PAPER',
    offerType: 'RENT',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus magni consequatur adipisci culpa similique, voluptate, quasi dolorem suscipit, quam optio sit ipsum? Perspiciatis libero voluptatibus iure ullam consequuntur dolorem dolores',
  },
];

const categories: Category[] = [
  {
    id: '1',
    name: 'علوم الحاسوب',
    children: [
      {
        id: '1',
        name: 'برامجيات',
        children: [
          { id: '1', name: 'المرحلة الاولى' },
          { id: '1', name: 'المرحلة الثانيه' },
          { id: '1', name: 'المرحلة الثالثه' },
          { id: '1', name: 'المرحلة الرابعة' },
        ],
      },
      { id: '1', name: 'شبكات' },
      { id: '1', name: 'نظم' },
      { id: '1', name: 'امنيه' },
      { id: '1', name: 'ذكاء' },
    ],
  },
  {
    id: '1',
    name: 'الهندسه الميكانيكيه',
  },
];
