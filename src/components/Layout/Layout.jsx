import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutStyled } from './Layout.styled';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </LayoutStyled>
  );
};

export default Layout;
