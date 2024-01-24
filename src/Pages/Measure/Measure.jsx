import {
  HeroContainer,
  MainDescription,
  MainTitle,
} from 'CommonStyle/Hero.styled';
import React from 'react';
import { MeasureSection } from './Measure.styled';

const Measure = () => {
  return (
    <MeasureSection>
      <HeroContainer>
        <MainTitle>Measure Yourself</MainTitle>
        <MainDescription>What are your height and body weight?</MainDescription>
      </HeroContainer>
    </MeasureSection>
  );
};

export default Measure;
