import { Text, Spinner, Box, Flex } from '@chakra-ui/react';
import { Sidebar, SidebarContent, NavItemDefault } from '@nx-lms/chakra-hoc';
import { dashRoutes } from '../../../../src/router';
import { useRecoilState } from 'recoil';
import { permissoins } from '../../atoms/atoms';

export function DashbaordSidebar() {
  return <Sidebar sidebarContent={<Content />} />;
}

const Content = () => {
  const [perms] = useRecoilState(permissoins);
  return (
    <SidebarContent title={<Title />}>
      {perms.id ? (
        dashRoutes.map((route, index) => {
          const path = route.layout + route.path;

          return (
            <NavItemDefault to={path} icon={route.icon} key={index}>
              {route.arName}
            </NavItemDefault>
          );
        })
      ) : (
        <Flex
          w={'full'}
          h={'calc(100vh - 76px)'}
          justifyContent={'center'}
          alignItems={'center'}
          direction={'column'}
        >
          <Spinner size={'xl'} color="teal" />
          <Text pt={'2'}>جار التحميل...</Text>
        </Flex>
      )}
    </SidebarContent>
  );
};

const Title = () => (
  <>
    <Text fontSize="2xl" ml="2" fontWeight="semibold" textAlign="center">
      ادارة المكتبات
    </Text>
    (LMS)
  </>
);
