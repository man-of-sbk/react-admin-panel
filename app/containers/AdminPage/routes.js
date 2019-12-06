import Dashboard from 'containers/AdminPage/containers/Dashboard';
import Email from 'containers/AdminPage/containers/Email';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export const routes = [
  {
    exact: true,
    path: '/admin',
    component: Dashboard,
    routes: [
      {
        exact: true,
        path: '/email',
        component: Email,
      },
    ],
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
