import React from 'react';
import {
  Flex,
  useColorModeValue,
  ButtonGroup,
  IconButton,
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Box,
  Text,
  Icon,
  Checkbox,
} from '@chakra-ui/react';
import { Pagination } from '../pagination';
import { FiInbox } from 'react-icons/fi';
import _ from 'lodash';

interface Column {
  title: string;
  key: string;
  dataIndex?: string | string[];
  render?: (text: string, record: any) => React.ReactNode;
}

interface RowSelection {
  selectedRowKeys?: string[];
  onChange: (selectedRowKeys: string[]) => any;
}

interface Props {
  title?: React.ReactNode;
  columns?: Column[];
  dataSource?: any[];
  pagination?: any;
  rowSelection?: RowSelection;
}

export function Table(props: Props) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const [checkedItems, setCheckedItems] = React.useState<string[]>([]);

  const dataSource = props.dataSource || [];

  const allChecked = dataSource.length === checkedItems.length;
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const onBulkChangeHandler = (e: any, key: string) => {
    const isChecked = e.target.checked;

    // Add new key to the checked items
    if (isChecked) {
      return setCheckedItems((val) => {
        const newCheckedItems = [...val, key];
        props.rowSelection?.onChange(newCheckedItems);
        return newCheckedItems;
      });
    }

    // Remove a kay from the checked items
    const newCheckedItems = checkedItems.filter((item) => item !== key);
    props.rowSelection?.onChange(newCheckedItems);
    setCheckedItems(newCheckedItems);
  };

  return (
    <Flex direction={'column'} overflow={'hidden'}>
      {/* Start:: Title section */}
      {props.title !== undefined && (
        <Box borderTopRadius={'lg'} p={4} bgColor={bgColor}>
          {props.title}
        </Box>
      )}
      {/* End:: Title section */}

      {/* Start:: Table */}
      <ChakraTable
        borderBottomRadius={'lg'}
        borderTopRadius={!props.title ? 'lg' : 'unset'}
        w="full"
        bg={bgColor}
        display={{
          base: 'block',
          md: 'table',
        }}
        sx={{
          '@media print': {
            display: 'table',
          },
        }}
      >
        {/* Start:: Head of the table  */}
        <Thead
          display={{
            base: 'none',
            md: 'table-header-group',
          }}
          sx={{
            '@media print': {
              display: 'table-header-group',
            },
          }}
          bgColor={useColorModeValue('blackAlpha.50', 'blackAlpha.200')}
        >
          <Tr>
            {/* Start:: Check all checkbox */}
            {props.rowSelection && props.dataSource?.length ? (
              <Th px={5} pl={0}>
                <Checkbox
                  colorScheme={'teal'}
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={(e) =>
                    setCheckedItems(
                      e.target.checked ? _.map(dataSource, 'id') : []
                    )
                  }
                />
              </Th>
            ) : null}
            {/* End:: Check all checkbox */}

            {props?.columns?.map((col) => (
              <Th key={col.key}>
                {/* FIXME: fix this line thing */}
                <Box
                  as={'article'}
                  p={2}
                  _notFirst={{
                    borderRightColor: 'gray.200',
                    borderRightWidth: 1,
                  }}
                >
                  <Text>{col.title}</Text>
                </Box>
              </Th>
            ))}
          </Tr>
        </Thead>
        {/* End:: Head of the table  */}

        <Tbody
          display={{
            base: 'block',
            lg: 'table-row-group',
          }}
          sx={{
            '@media print': {
              display: 'table-row-group',
            },
          }}
        >
          {dataSource.length === 0 && (
            <Tr>
              <Td colSpan={3}>
                <Flex
                  direction={'column'}
                  py={100}
                  align={'center'}
                  justify={'center'}
                >
                  <Icon
                    color={useColorModeValue('gray.400', 'gray.600')}
                    as={FiInbox}
                    fontSize="6xl"
                  />

                  <Text
                    color={useColorModeValue('gray.400', 'gray.600')}
                    pt={2}
                  >
                    No data
                  </Text>
                </Flex>
              </Td>
            </Tr>
          )}

          {dataSource.map((dataItem, tid) => {
            return (
              <Tr
                bgColor={
                  checkedItems.includes(dataItem['id'])
                    ? useColorModeValue('gray.100', 'gray.900')
                    : 'unset'
                }
                transition={'.3s all'}
                key={tid}
                display={{
                  base: 'grid',
                  md: 'table-row',
                }}
                sx={{
                  '@media print': {
                    display: 'table-row',
                  },
                  gridTemplateColumns: 'minmax(0px, 35%) minmax(0px, 65%)',
                  gridGap: '10px',
                }}
              >
                {/* Start:: Check item checkbox */}
                {props.rowSelection && (
                  <>
                    <Td
                      display={['block', 'none']}
                      sx={{
                        '@media print': {
                          display: 'none',
                        },
                        textTransform: 'uppercase',
                        color: 'gray.400',
                        fontSize: 'xs',
                        fontWeight: 'bold',
                        letterSpacing: 'wider',
                        fontFamily: 'heading',
                      }}
                      px={5}
                      pl={0}
                      width={'100px'}
                    >
                      تحديد
                    </Td>
                    <Td px={5} pl={0} width={'50px'}>
                      <Checkbox
                        colorScheme={'teal'}
                        isChecked={checkedItems.includes(dataItem['id'])}
                        onChange={(e) => onBulkChangeHandler(e, dataItem['id'])}
                      />
                    </Td>
                  </>
                )}
                {/* End:: Check item checkbox */}

                {props.columns?.map((col) => {
                  return (
                    <React.Fragment key={`${tid}-${col.key}`}>
                      {/* Start:: Mobile table head */}

                      <Td
                        display={{
                          base: 'table-cell',
                          md: 'none',
                        }}
                        sx={{
                          '@media print': {
                            display: 'none',
                          },
                          textTransform: 'uppercase',
                          color: 'gray.400',
                          fontSize: 'xs',
                          fontWeight: 'bold',
                          letterSpacing: 'wider',
                          fontFamily: 'heading',
                        }}
                      >
                        {col.title}
                      </Td>
                      {/* End:: Mobile table head */}

                      {/* Start:: Table body */}
                      <Td
                        color={useColorModeValue('gray.700', 'gray.400')}
                        fontSize="md"
                        fontWeight="medium"
                      >
                        {/* Start:: Normal col */}
                        {!dataItem[col.dataIndex as string] && !col.render
                          ? '--------'
                          : dataItem[col.dataIndex as string]}
                        {/* End:: Normal col */}

                        {/* Start:: Action col */}
                        {col.render && col.render(col.title, dataItem)}
                        {/* End:: Action col */}
                      </Td>
                      {/* End:: Table body */}
                    </React.Fragment>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>
      {/* End:: Table */}

      {/* Start:: Pagination */}

      <Box p={4}>
        <Pagination {...props.pagination} />
      </Box>
      {/* End:: Pagination */}
    </Flex>
  );
}
