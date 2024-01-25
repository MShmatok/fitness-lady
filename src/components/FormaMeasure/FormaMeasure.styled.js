import styled from 'styled-components';
import theme from 'CommonStyle/themeJSX';

export const FormaMeasureST = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${prop => prop.$gap || '16px'};
  width: 100%;
`;

export const FormLabel = styled.label`
  font-size: ${prop => prop.$fontSize || '16px'};
  font-weight: ${prop => prop.$fontWeight || '400'};
  line-height: calc(20 / ${prop => parseInt(prop.$fontSize, 10) || '16'});
  color: ${theme.colors.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;
export const Input = styled.input`
  color: ${theme.colors.secondDark};
  font-size: 14px;
  line-height: calc(24 / 14);
  letter-spacing: 0.25px;
  padding: 19px 13px;

  border-radius: 10px;
  border: 1px solid ${theme.colors.secondGrey};
  background: ${theme.colors.primaryLight};

  width: 100%;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.secondDark};
  }
`;

export const InputError = styled.p`
  font-size: 14px;
  line-height: calc(18 / 14);
  color: ${theme.colors.red};
`;
