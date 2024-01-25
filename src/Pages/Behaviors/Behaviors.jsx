import {
  HeroContainer,
  MainDescription,
  MainTitle,
} from 'CommonStyle/Hero.styled';
import FormaBehaviors from 'components/forms/FormaBehaviors/FormaBehaviors';
import { useMyContext } from 'js/useContext';
import React from 'react';
import { BehaviorsSection } from './Behaviors.styled';
import { useNavigate } from 'react-router';
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
    navigate('/exercise', { replace: false });
  };
  return (
    <div className="container">
      <BehaviorsSection>
        <HeroContainer>
          <MainTitle>Destructive behaviors</MainTitle>
          <MainDescription>We all have them! Which are yours?</MainDescription>
        </HeroContainer>
        <FormaBehaviors data={library} handlerSubmit={handlerSubmit} />
      </BehaviorsSection>
    </div>
  );
};

export default Behaviors;
