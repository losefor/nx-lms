// import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar } from '@nx-lms/chakra-hoc';
import { authRoutes, dashRoutes } from '../router';
import { useEffect } from 'react';
import { DashbaordSidebar } from './components/layouts/Sidebar';

function App() {
  useEffect(() => {
    localStorage.setItem('chakra-ui-color-mode', 'light');
  }, []);

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
