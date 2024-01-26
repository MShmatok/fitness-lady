import React from 'react';
import { HeaderST, RouterLink } from './Header.styled';
import Icon from 'components/icon/Icon';

const Header = () => {
  return (
    <>
      <div className="container">
        <HeaderST>
          <nav>
            <RouterLink to={'/'}>
              <Icon name="backArrow" height="30px" width="30px" />
              <Icon name="back" className={'icon'} height="34px" width="34px" />
              <h3>Food Mentor</h3>
            </RouterLink>
          </nav>
        </HeaderST>{' '}
      </div>
    </>
  );
};

export default Header;
