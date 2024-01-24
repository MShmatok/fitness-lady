import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderST = styled.header`
  display: flex;
  justify-content: center;
  padding: 8px 0;
`;

export const RouterLink = styled(NavLink)`
  display: flex;
  align-items: center;

  .icon {
    padding: 5px;
    margin-right: 10px;
    border-radius: 6.543px;
    background: linear-gradient(0deg, #f4f4f4 0%, #f4f4f4 100%);
  }
  h3 {
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.45px;
  }
`;
