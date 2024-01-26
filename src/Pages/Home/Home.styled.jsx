import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0;
  gap: 15px;

  h2 {
    color: ${theme.colors.secondDark};
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: calc(24 / 14);
    letter-spacing: 0.2px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
