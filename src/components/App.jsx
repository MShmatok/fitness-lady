import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './1layout/Layout';

import { ContextProvider } from 'js/useContext';

const Home = lazy(() => import('../pages/home/Home'));
const Measure = lazy(() => import('../pages/1measure/Measure'));
const Behaviors = lazy(() => import('../pages/1behaviors/Behaviors'));
const Exercise = lazy(() => import('../pages/1exercise/Exercise'));
const Result = lazy(() => import('../pages/1result/Result'));

const NotFoundPage = lazy(() => import('../pages/1notFoundPage/NotFoundPage'));

const createRouter = () => {
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />,
            errorElement: <NotFoundPage />,
          },
          {
            path: '/measure',
            element: <Measure />,
            errorElement: <NotFoundPage />,
          },
          {
            path: '/behaviors',
            element: <Behaviors />,
            errorElement: <NotFoundPage />,
          },
          {
            path: '/exercise',
            element: <Exercise />,
            errorElement: <NotFoundPage />,
          },
          {
            path: '/result',
            element: <Result />,
            errorElement: <NotFoundPage />,
          },
          {
            path: '*',
            element: <Home />,
            errorElement: <NotFoundPage />,
          },
        ],
      },
    ],
    { basename: '/fitness-lady' }
  );
  return router;
};

export const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={createRouter()} />
    </ContextProvider>
  );
};
