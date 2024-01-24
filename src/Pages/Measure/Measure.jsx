import {
  HeroContainer,
  MainDescription,
  MainTitle,
} from 'CommonStyle/Hero.styled';
import React, { useState } from 'react';
import { MeasureSection, SwitchButtonContainer } from './Measure.styled';

const Measure = () => {
  const [isActive, SetActive] = useState(true);
  const togglerHandler = () => {
    SetActive(!isActive);
  };

  return (
    <div className="container">
      <MeasureSection>
        <HeroContainer>
          <MainTitle>Measure Yourself</MainTitle>
          <MainDescription>
            What are your height and body weight?
          </MainDescription>
        </HeroContainer>
        <SwitchButtonContainer>
          <button onClick={togglerHandler} className={isActive ? 'active' : ''}>
            Imperial
          </button>
          <button onClick={togglerHandler} className={isActive ? '' : 'active'}>
            Metric
          </button>
        </SwitchButtonContainer>
      </MeasureSection>
    </div>
  );
};

export default Measure;
