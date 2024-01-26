import React from 'react';
import { InputST, WrapperST } from './FormBehaviors.styled';
import Icon from 'components/icon/Icon';
import PropTypes from 'prop-types'; // ES6

const Input = ({ title, icon, handleInputChange, checkIncludes }) => {
  return (
    <InputST>
      <input
        type="checkbox"
        name="inputGroup"
        className="visually-hidden"
        value={title}
        checked={checkIncludes(title) || false}
        onChange={handleInputChange}
      />
      <WrapperST>
        <div>
          <Icon name={icon} width="30px" height="30px" />
        </div>
        <h3>{title}</h3>
      </WrapperST>
    </InputST>
  );
};

export default Input;

Input.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  checkIncludes: PropTypes.func.isRequired,
};
