import React from 'react';
import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { FiLogOut, FiMenu, FiSettings } from 'react-icons/fi';
import { Outlet, useNavigate } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  sidebarContent?: React.ReactNode;
}

export function Sidebar({ children, sidebarContent }: Props) {
  const navigate = useNavigate();
  const sidebar = useDisclosure();

  return (
    <Box
      as="section"
      bg={useColorModeValue('gray.50', 'gray.700')}
      minH="100vh"
    >
      {/* Start:: Web Sidebar */}
      <Box display={{ base: 'none', md: 'unset' }}>{sidebarContent}</Box>

      {/* Start:: Mobile Sidebar */}
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent>{sidebarContent}</DrawerContent>
      </Drawer>

      {/* start:: Top Navbar */}
      <Box mr={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue('white', 'gray.800')}
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit', 'gray.700')}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          <div></div>

          <Flex align="center">
            <Menu>
              <MenuButton>
                <Avatar
                  mr="4"
                  size="sm"
                  name="anubra266"
                  src="https://avatars.githubusercontent.com/u/30869823?v=4"
                  cursor="pointer"
                />
              </MenuButton>
              <MenuList>
                <MenuItem icon={<FiSettings />}>الاعدادات</MenuItem>
                <MenuDivider />
                <MenuItem
                  color="red.500"
                  icon={<FiLogOut />}
                  onClick={() => navigate('/auth/login')}
                >
                  تسجيل الخروج
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {children}
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
