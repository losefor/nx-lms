import React, { useState } from 'react';
import {
  chakra,
  Text,
  useColorModeValue,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
  HStack,
  Box,
  Flex,
} from '@chakra-ui/react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FiChevronDown, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

interface Props {
  total: number;
  pageSize?: number;
  onChange: (page: number, pageSize: number) => void;
  pageSizeOptions?: number[];
}

export const Pagination = (props: Props) => {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);

  const PagButton = (props: any) => {
    const activeStyle = {
      colorScheme: 'teal',
    };

    return (
      <Button
        onClick={props.onClick}
        colorScheme={'gray'}
        mx={1}
        px={4}
        py={2}
        disabled={props.disabled}
        // bg={useColorModeValue('white', 'gray.800')}
        // color={useColorModeValue('gray.700', 'gray.200')}
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        {...(props.active && activeStyle)}
      >
        {props.children}
      </Button>
    );
  };
  const MButton = (props: any) => {
    const DoubleArrow = props.left ? FiArrowLeft : FiArrowRight;
    const [hovered, setHovered] = React.useState(false);
    return (
      <chakra.a
        w={4}
        py={2}
        color={useColorModeValue('gray.700', 'gray.200')}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        cursor="pointer"
        textAlign="center"
        onClick={props.onClick}
      >
        {hovered ? (
          <Icon
            as={DoubleArrow}
            boxSize={3}
            cursor="pointer"
            color={useColorModeValue('gray.400', 'gray.200')}
          />
        ) : (
          <Icon
            as={HiDotsHorizontal}
            color={useColorModeValue('gray.400', 'gray.200')}
            boxSize={4}
            opacity={0.5}
          />
        )}
      </chakra.a>
    );
  };

  const onChangeHandler = (newPage: number, newPageSize: number) => {
    if (isNaN(newPage)) {
      newPage = 1;
    }
    setPage(newPage);
    setPageSize(newPageSize);
    props.onChange(newPage, newPageSize);
  };

  // Commons
  const lastPage = Math.ceil(props.total / pageSize);

  if (!props.total) {
    return null;
  }

  const backStepsHandler = () => {
    setPage((val) => {
      return page > 5 ? val - 5 : 1;
    });
  };

  const forwardStepsHandler = () => {
    setPage((val) => {
      return lastPage - page > 5 ? val + 5 : lastPage;
    });
  };

  const paginationStateHandler = () => {
    if (page < 5) {
      return (
        <>
          <PagButton
            onClick={() => onChangeHandler(1, pageSize)}
            active={page === 1}
          >
            1
          </PagButton>
          <PagButton
            active={page === 2}
            onClick={() => onChangeHandler(2, pageSize)}
          >
            2
          </PagButton>
          <PagButton
            active={page === 3}
            onClick={() => onChangeHandler(3, pageSize)}
          >
            3
          </PagButton>
          <PagButton
            active={page === 4}
            onClick={() => onChangeHandler(4, pageSize)}
          >
            4
          </PagButton>
          <PagButton
            onClick={() => onChangeHandler(5, pageSize)}
            active={page === 5}
          >
            5
          </PagButton>
          <MButton onClick={() => forwardStepsHandler()} right />
          {/* Start:: Last page */}
          <PagButton
            onClick={() => onChangeHandler(lastPage, pageSize)}
            active={page === lastPage}
          >
            {lastPage}
          </PagButton>
          {/* End:: Last page */}
        </>
      );
    } else if (lastPage - page < 4) {
      return (
        <>
          <MButton onClick={() => backStepsHandler()} left />

          <PagButton
            onClick={() => onChangeHandler(lastPage - 4, pageSize)}
            active={page === lastPage - 4}
          >
            {lastPage - 4}
          </PagButton>
          <PagButton
            active={page === lastPage - 3}
            onClick={() => onChangeHandler(lastPage - 3, pageSize)}
          >
            {lastPage - 3}
          </PagButton>
          <PagButton
            active={page === lastPage - 2}
            onClick={() => onChangeHandler(lastPage - 2, pageSize)}
          >
            {lastPage - 2}
          </PagButton>
          <PagButton
            active={page === lastPage - 1}
            onClick={() => onChangeHandler(lastPage - 1, pageSize)}
          >
            {lastPage - 1}
          </PagButton>
          {/* Start:: Last page */}
          <PagButton
            onClick={() => onChangeHandler(lastPage, pageSize)}
            active={page === lastPage}
          >
            {lastPage}
          </PagButton>
          {/* End:: Last page */}
        </>
      );
    } else {
      return (
        <>
          <PagButton onClick={() => onChangeHandler(1, pageSize)}>1</PagButton>
          <MButton onClick={() => backStepsHandler()} left />

          <PagButton onClick={() => onChangeHandler(page - 2, pageSize)}>
            {page - 2}
          </PagButton>
          <PagButton onClick={() => onChangeHandler(page - 1, pageSize)}>
            {page - 1}
          </PagButton>
          <PagButton
            onClick={() => onChangeHandler(5, pageSize)}
            active={page === page}
          >
            {page}
          </PagButton>
          <PagButton onClick={() => onChangeHandler(page + 1, pageSize)}>
            {page + 1}
          </PagButton>
          <PagButton onClick={() => onChangeHandler(page + 2, pageSize)}>
            {page + 2}
          </PagButton>
          <MButton onClick={() => forwardStepsHandler()} right />
          {/* Start:: Last page */}
          <PagButton
            onClick={() => onChangeHandler(lastPage, pageSize)}
            active={page === lastPage}
          >
            {lastPage}
          </PagButton>
          {/* End:: Last page */}
        </>
      );
    }
  };

  return (
    <Flex dir="ltr" w="full" alignItems="center" justifyContent="center">
      <HStack>
        {/* Start:: Prev button */}
        <PagButton
          disabled={page === 1}
          onClick={() => onChangeHandler(page > 1 ? page - 1 : 1, pageSize)}
        >
          <Icon
            as={IoIosArrowBack}
            color={useColorModeValue('gray.700', 'gray.200')}
            boxSize={4}
          />
        </PagButton>
        {/* End:: Prev button */}
        {paginationStateHandler()}

        {/* Start:: Next button */}
        <PagButton
          disabled={page === lastPage}
          onClick={() =>
            onChangeHandler(page < lastPage ? page + 1 : lastPage, pageSize)
          }
        >
          <Icon
            as={IoIosArrowForward}
            color={useColorModeValue('gray.700', 'gray.200')}
            boxSize={4}
          />
        </PagButton>
        {/* End:: Next button */}

        {/* Start:: PageSizer */}
        {props.pageSizeOptions && (
          <Menu>
            <MenuButton ml={1} as={Button} rightIcon={<FiChevronDown />}>
              {pageSize} / page
            </MenuButton>
            <MenuList>
              {props.pageSizeOptions?.map((pageSize) => (
                <MenuItem onClick={() => onChangeHandler(page, pageSize)}>
                  {pageSize} / page
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        )}
        {/* End:: PageSizer */}

        <HStack>
          <Text wordBreak="unset">Go to:</Text>
          <Input
            onChange={(e) =>
              onChangeHandler(parseInt(e.target.value), pageSize)
            }
            type={'number'}
            px={'2'}
            w="50px"
          />
        </HStack>
      </HStack>
    </Flex>
  );
};
