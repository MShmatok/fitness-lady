import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'Pages/Home/Home';

// const Home = lazy(() => import('../Pages/Home/Home'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));

const Goal = lazy(() => import('../Pages/Goal/Goal'));
const Measure = lazy(() => import('../Pages/Measure/Measure'));
const Behaviors = lazy(() => import('../Pages/Behaviors/Behaviors'));
const Exercise = lazy(() => import('../Pages/Exercise/Exercise'));

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
            path: '/goal',
            element: <Goal />,
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
    <>
      <RouterProvider router={createRouter()} />
    </>
  );
};
