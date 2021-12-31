import { Home, Roles, Universities } from './app/pages';
import {
  FaBook,
  FaBuilding,
  FaChalkboardTeacher,
  FaUserAlt,
} from 'react-icons/fa';
import { MdLock, MdSpaceDashboard } from 'react-icons/md';
import Login from './app/pages/Login';
import { Books } from './app/pages/Books';

export const dashRoutes = [
  {
    path: '/dashboard',
    enName: 'Home',
    arName: 'الصفحة الرايسية',
    icon: MdSpaceDashboard,
    component: Home,
    layout: '/admin',
  },
  {
    path: '/universities',
    enName: 'Universities',
    arName: 'الجامعات',
    icon: FaBuilding,
    component: Universities,
    layout: '/admin',
  },
  {
    path: '/teachers',
    enName: 'Teachers',
    arName: 'المدرسين',
    icon: FaChalkboardTeacher,
    component: Roles,
    layout: '/admin',
  },
  {
    path: '/students',
    enName: 'Students',
    arName: 'الطلاب',
    icon: FaUserAlt,
    component: Roles,
    layout: '/admin',
  },
  {
    path: '/books',
    enName: 'Books',
    arName: 'الكتب',
    icon: FaBook,
    component: Books,
    layout: '/admin',
  },
  {
    path: '/roles',
    enName: 'Roles',
    arName: 'الاذونات',
    icon: MdLock,
    component: Roles,
    layout: '/admin',
  },
];

export const authRoutes = [
  {
    path: '/login',
    enName: 'Login',
    arName: 'تسجيل الدخول',
    icon: MdSpaceDashboard,
    component: Login,
    layout: '/auth',
  },
];