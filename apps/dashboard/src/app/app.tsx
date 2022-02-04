import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, dashRoutes } from '../router';
import { useEffect } from 'react';
import { DashbaordSidebar } from './components/layouts/Sidebar';
import { useRecoilState } from 'recoil';
import { permissions, rolesState } from './atoms/atoms';
import * as usersApi from './api/users';
import * as rolesApi from './api/roles';
import { useToast } from '@chakra-ui/react';

function App() {
  const toast = useToast();
  const [perms, setPerms] = useRecoilState(permissions);
  const [rolesData, setRolesData] = useRecoilState(rolesState);

  useEffect(() => {
    // Make the chakra always light
    localStorage.setItem('chakra-ui-color-mode', 'light');

    // Load user permission
    loadPermissions();

    // Load roles
    getAllRoles();
  }, []);

  const loadPermissions = async () => {
    const response = await usersApi.findMyPermissioins();
    console.log(response.data);
    setPerms(response.data as any);
  };

  const getAllRoles = async () => {
    const response = await rolesApi.findMany({ skip: 0, take: 1000 });
    const items = response.data as any;

    // Show error message when the request fail
    if (!response.ok) {
      return toast({
        status: 'error',
        title: 'Error happened',
        description: items.message,
      });
    }

    return setRolesData(items);
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/admin/dashboard'} />} />
      <Route element={<DashbaordSidebar />}>
        {dashRoutes.map((route, index) => {
          const path = route.layout + route.path;
          return (
            <Route path={path} element={<route.component />} key={index} />
          );
        })}
      </Route>
      {authRoutes.map((route, index) => {
        const path = route.layout + route.path;
        const Component = route.component;
        return <Route path={path} element={<Component />} key={index} />;
      })}
    </Routes>
  );
}

export default App;
