import { lazy } from 'react'

const ThreeScene = lazy(() => import('../components/three/ThreeScene'));
const DashBoard = lazy(() => import('../pages/DashBoard'));
const Template = lazy(() => import('../pages/Template'));

const coreRoutes = [
  {
    path: '/',
    title: 'ThreeScene',
    component: ThreeScene,
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: DashBoard,
  },
  {
    path: '/template',
    title: 'Template',
    component: Template,
  },

]

const routes = [...coreRoutes];

export default routes