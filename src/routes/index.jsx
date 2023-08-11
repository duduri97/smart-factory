import { lazy } from 'react'

const DashBoard = lazy(() => import('../pages/DashBoard'))
const Template = lazy(() => import('../pages/Template'))

const coreRoutes = [
  {
    path: '/',
    title: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: DashBoard
  },
  {
    path: '/template',
    title: 'Template',
    component: Template
  }
]

const routes = [...coreRoutes]

export default routes
