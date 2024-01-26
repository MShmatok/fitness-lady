import styled from 'styled-components';
import theme from '1commonStyle/variables';

export const MeasureSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0;
  gap: 15px;
`;

export const SwitchButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 10px;
  border: 1px solid ${theme.colors.green};
  overflow: hidden;

  button {
    width: 50%;
    height: 32px;
    color: ${theme.colors.green};
    text-align: center;

    font-size: 12px;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 2.5px;
    text-transform: uppercase;

    background: #fff;
  }

  .active {
    background: rgba(95, 203, 57, 0.2);
  }
`;
