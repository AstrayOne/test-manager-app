import Home from 'pages/Home';
import Test from 'pages/Test';

export default [
  {
    path: '/',
    exact: true,
    cache: false,
    component: Home,
    title: 'Home',
    sitemap: true,
  },
  {
    path: '/tests/:id',
    cache: false,
    component: Test,
    title: 'Test',
    sitemap: true,
  },
];
