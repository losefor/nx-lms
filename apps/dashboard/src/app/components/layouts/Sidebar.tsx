import { Text } from '@chakra-ui/react';
import { Sidebar, SidebarContent, NavItemDefault } from '@nx-lms/chakra-hoc';
import { dashRoutes } from '../../../../src/router';
import React from 'react';

export function DashbaordSidebar() {
  return <Sidebar sidebarContent={<Content />} />;
}

const Content = () => {
  return (
    <SidebarContent title={<Title />}>
      {dashRoutes.map((route, index) => {
        const path = route.layout + route.path;

        return (
          <NavItemDefault to={path} icon={route.icon} key={index}>
            {route.arName}
          </NavItemDefault>
        );
      })}
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
