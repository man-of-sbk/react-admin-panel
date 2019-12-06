import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// *** admin page
import AdminPage from 'containers/AdminPage';
import Email from 'containers/AdminPage/containers/Email';

export const routes = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: false,
    path: '/admin',
    component: AdminPage,
    // routes: [
    //   {
    //     exact: true,
    //     path: '/email',
    //     component: AdminPage,
    //   },
    // ],
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
