import styled from 'styled-components';
import theme from 'commonStyle/variables';

export const FormST = styled.form`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  button {
    margin-top: 136px;
  }
`;
export const InputST = styled.label`
  input:checked + div {
    border: 2px solid ${theme.colors.green};
    scale: 1.03;
  }
`;

export const WrapperST = styled.div`
  display: flex;
  gap: 10px;
  width: 172px;
  height: 60px;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  border: 1px solid ${theme.colors.secondGrey};
  background: ${theme.colors.primaryLight};
  padding: 0 30px 0 15px;

  cursor: pointer;
  h3 {
    font-size: 12px;
    line-height: calc(18 / 12);
    letter-spacing: 0.3px;
    font-weight: 400;
  }
`;
