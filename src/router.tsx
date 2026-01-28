import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login';
import AppLayout from './views/AppLayout';
import DashboardHome from './views/DashboardHome';

export const router = createBrowserRouter([
  { path: '/', element: <Login/> },
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      // { path: 'analytics', element: <Analytics /> }, etc.
    ],
  },
]);
