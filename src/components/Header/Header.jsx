import React from 'react';
import { HeaderST, RouterLink } from './Header.styled';

import Icon from 'components/Icon';

const Header = () => {
  return (
    <>
      <HeaderST>
        <div className="container">
          <nav>
            <RouterLink to={'/'}>
              <Icon name="pharmacy" size="125px" />
              <p>Food Mentor</p>
            </RouterLink>
          </nav>
        </div>
      </HeaderST>
    </>
  );
};

export default Header;
