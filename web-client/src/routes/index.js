import { asyncComponentLoader } from 'utils'

const routes = [
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Welcome')),
    path: '/'
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/SignUp')),
    path: '/signup'
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/SignIn')),
    path: '/signin'
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Page3')),
    path: '/page-3'
  },
  {
    exact: true,
    component: asyncComponentLoader(_ => import('pages/Page4')),
    path: '/page-4'
  },
  {
    component: asyncComponentLoader(_ => import('components/NotFound'))
  }
]

export default routes
