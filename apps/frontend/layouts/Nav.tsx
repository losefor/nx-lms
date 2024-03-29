import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Container,
  Avatar,
  Image,
  HStack,
} from '@chakra-ui/react';
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Nav() {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  const hideRoutes = ['/', '/libraries', '/about-us', '/contact-us'];
  const isOnHideRoute = hideRoutes.includes(router.pathname);

  console.log(router.pathname);

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Container maxW={'4xl'} alignItems={'center'}>
          <Flex align="center" justify={'space-between'}>
            {/* Start:: Right side nav  */}

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>

            {isOnHideRoute ? (
              <HStack>
                <Text fontSize={'2xl'} fontWeight={'extrabold'}>
                  Maktabaty
                </Text>
                <Image aria-label="logo" src="/lib.png" boxSize={12} />
              </HStack>
            ) : (
              <Avatar onClick={() => router.push('/')} src={'/uot2.png'} />
            )}

            {/* Start:: Hamburger icon */}
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}
              justify={'end'}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <Icon as={FiX} fontSize={24} />
                  ) : (
                    <Icon as={FiMenu} w={5} h={5} />
                  )
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>

            {/* Start:: Left side nav  */}
            {/* <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              href={'#'}
              colorScheme={'teal'}
              onClick={() => router.push('/auth/login')}
            >
              تسجيل الدخول
            </Button> */}
          </Flex>
        </Container>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const router = useRouter();

  const hideRoutes = ['/', '/libraries'];
  const isOnHideRoute = hideRoutes.includes(router.pathname);

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => {
        if (navItem.hideOnHome && isOnHideRoute) {
          return;
        }
        return (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-end'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  onClick={() => router.push(navItem.href)}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {navItem.children.map((child) => {
                      if (child.hideOnHome && isOnHideRoute) {
                        return;
                      }
                      return <DesktopSubNav key={child.label} {...child} />;
                    })}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('teal.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'teal.500' }}
            fontWeight={600}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'teal.400'} w={5} h={5} as={FaChevronLeft} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={FaChevronDown}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  hideOnHome: boolean;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: 'خدماتنا',
  //   hideOnHome: false,
  //   children: [
  //     {
  //       label: 'المكتبه المركزيه',
  //       subLabel: 'ابحث عن ما تريد مع كل الكتب',
  //       href: '#',
  //       hideOnHome: true,
  //     },
  //     {
  //       label: 'المكتبات المتوفرة',
  //       subLabel: 'تصفح المكتبات المتوفر على المنصة',
  //       href: '/libraries',
  //       hideOnHome: false,
  //     },
  //     {
  //       label: 'الاطروحات',
  //       subLabel: 'تابع احدث الدراسات من مختلف الجامعات العراقية',
  //       href: '#',
  //       hideOnHome: false,
  //     },
  //   ],
  // },
  {
    label: 'من نحن؟',
    hideOnHome: false,
    href: '/about-us',
  },
];
