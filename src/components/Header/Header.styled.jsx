import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import bg_2x from '../../img/svg/donut.svg';

export const HeaderST = styled.header`
  padding: 5px;
`;

export const RouterLink = styled(NavLink)``;

export const IconLink = styled.div`
  width: 20px;
  height: 20px;
  display: block;
  background-image: url(${bg_2x});
`;
