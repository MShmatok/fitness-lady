import React from 'react';
import { InputBehaviorST, Wrapper } from './FormaBehaviors.styled';
import Icon from 'components/Icon';

const InputBehavior = ({ title, icon, handleInputChange, checkIncludes }) => {
  return (
    <InputBehaviorST>
      <input
        type="checkbox"
        name="inputGroup"
        className="visually-hidden"
        value={title}
        checked={checkIncludes(title) || false}
        onChange={handleInputChange}
      />
      <Wrapper>
        <div>
          <Icon name={icon} width="30px" height="30px" />
        </div>
        <h3>{title}</h3>
      </Wrapper>
    </InputBehaviorST>
  );
};

export default InputBehavior;
