import React from 'react';
import { CardContainer } from './Card.styled';
import Icon from 'components/icon/Icon';

const Card = ({ icon, title, onClick }) => {
  return (
    <CardContainer>
      <button onClick={onClick}>
        <h3>{title}</h3>
        <Icon name={icon} width="85px" height="172px" />
      </button>
    </CardContainer>
  );
};

export default Card;
