import React from 'react';
import { useNavigate } from 'react-router';
import { useMyContext } from 'js/useContext';
import {
  HeroContainer,
  MainDescription,
  MainTitle,
} from '1commonStyle/Hero.styled';
import FormBehaviors from 'components/1formBehaviors/FormBehaviors';
import { BehaviorsSectionST } from './Behaviors.styled';

const library = [
  { Behavior: '1', title: "I don't rest enough", icon: 'moon' },
  { Behavior: '2', title: 'I have a sweet tooth', icon: 'donut' },
  { Behavior: '3', title: 'I have too much soda', icon: 'soda' },
  { Behavior: '4', title: 'I eat many salty foods', icon: 'salt' },
  { Behavior: '5', title: 'I enjoy midnight snacks', icon: 'pizza' },
  { Behavior: '6', title: 'None of the above', icon: 'cross' },
];

const Behaviors = () => {
  const { updateData } = useMyContext();
  const navigate = useNavigate();

  const handlerSubmit = array => {
    updateData({
      behaviors: array,
    });
    navigate('/exercise', { replace: true });
  };

  return (
    <div className="container">
      <BehaviorsSectionST>
        <HeroContainer>
          <MainTitle>Destructive behaviors</MainTitle>
          <MainDescription>We all have them! Which are yours?</MainDescription>
        </HeroContainer>
        <FormBehaviors data={library} handlerSubmit={handlerSubmit} />
      </BehaviorsSectionST>
    </div>
  );
};

export default Behaviors;
