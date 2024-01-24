import styled from 'styled-components';
import theme from 'CommonStyle/themeJSX';

export const CardContainer = styled.li`
  width: 172px;
  height: 172px;

  border-radius: 20.848px;
  border: 1.042px solid #e1e1e1;
  background: linear-gradient(214deg, #f1f1f1 12.33%, #fff 69.93%);

  overflow: hidden;
  padding-left: 10px;

  cursor: pointer;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    scale 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    scale: 1.01;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: linear-gradient(214deg, #f1f1f1 12.33%, #fff 69.93%);
  }
  h3 {
    color: ${theme.colors.secondDark};
    font-size: 16.679px;
    font-weight: 500;
    line-height: calc(22.933 / 16.679);
    letter-spacing: 0.208px;
    text-align: left;
    width: 74px;
  }
`;
