import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, dashRoutes } from '../router';
import { useEffect } from 'react';
import { DashbaordSidebar } from './components/layouts/Sidebar';
import * as rolesApi from './api/roles';
import { useRecoilState } from 'recoil';
import { permissoins } from './atoms/atoms';

function App() {
  const [perms, setPerms] = useRecoilState(permissoins);

  useEffect(() => {
    // Make the chakra always light
    localStorage.setItem('chakra-ui-color-mode', 'light');

    // Load user roles
    loadMyRoles();
  }, []);

  const loadMyRoles = async () => {
    const response = await rolesApi.findMyRoles();

    setPerms(response.data as any);
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
