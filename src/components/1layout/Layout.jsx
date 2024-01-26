import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutST } from './Layout.styled';
import Header from 'components/1header/Header';

const Layout = () => {
  return (
    <LayoutST>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </LayoutST>
  );
};

export default Layout;
