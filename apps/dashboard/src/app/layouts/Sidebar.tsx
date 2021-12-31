import React from 'react';
import {
  Avatar,
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
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
import { dashRoutes } from '../../router';
import { NavItemWithPadding } from '../components/sidebar/navItems/NavItemWithPadding';
import { NavItemDefault } from '../components/sidebar/navItems/NavItemDefault';

interface Props {
  children?: React.ReactNode;
}

export function Sidebar({ children }: Props) {
  const navigate = useNavigate();
  const sidebar = useDisclosure();

  // Select the theme [ 0 , 1 ]
  const navItems = [NavItemDefault, NavItemWithPadding];
  const NavItem = navItems[0];

  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      right="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderLeftWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue('brand.500', 'white')}
          fontWeight="semibold"
          textAlign="center"
        >
          اداره المكتبات
        </Text>
        (LMS)
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {dashRoutes.map((route, index) => {
          const path = route.layout + route.path;

          return (
            <NavItem to={path} icon={route.icon} key={index}>
              {route.arName}
            </NavItem>
          );
        })}
        {/* <NavItem to="/universities" icon={FaBuilding}>
          الجامعات
        </NavItem>
        <NavItem to="/permissions" icon={HiCollection}>
          صلاحيات
        </NavItem>
        <NavItem to="/statistics" icon={FaClipboardCheck}>
          احصائيات
        </NavItem>
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Integrations
          <Icon
            as={MdKeyboardArrowLeft}
            ml="auto"
            transform={integrations.isOpen && ("rotate(-90deg)" as any)}
          />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl="12" py="2">
            Shopify
          </NavItem>
          <NavItem pl="12" py="2">
            Slack
          </NavItem>
          <NavItem pl="12" py="2">
            Zapier
          </NavItem>
        </Collapse>
        <NavItem icon={AiFillGift}>Changelog</NavItem>
        <NavItem icon={BsGearFill}>Settings</NavItem> */}
      </Flex>
    </Box>
  );
  return (
    <Box
      as="section"
      bg={useColorModeValue('gray.50', 'gray.700')}
      minH="100vh"
    >
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>

      {/* start::Navbar */}
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
            {/* <Icon color="gray.500" as={FaBell} cursor="pointer" /> */}
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
