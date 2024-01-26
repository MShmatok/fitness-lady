import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const ExerciseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0;
  gap: 15px;

  h2 {
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: calc(24 / 14);
    letter-spacing: 0.2px;
  }
`;

export const WrapperMain = styled.div`
  display: flex;
  gap: 15px;

  button {
    color: ${theme.colors.secondDark};
    font-size: 16px;
    font-weight: 500;
    line-height: calc(22 / 16);
    letter-spacing: 0.2px;

    width: 172px;
    height: 80px;
    padding-left: 15px;
    padding-right: 25px;

    text-align: start;

    border-radius: 20px;
    border: 1px solid ${theme.colors.secondGrey};
    background: ${theme.colors.primaryLight};

    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      scale 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      scale: 1.01;
    }
  }

  ul {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
`;
