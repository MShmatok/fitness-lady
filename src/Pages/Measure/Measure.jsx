import {
  HeroContainer,
  MainDescription,
  MainTitle,
} from 'CommonStyle/Hero.styled';
import React, { useState } from 'react';
import { MeasureSection, SwitchButtonContainer } from './Measure.styled';
import FormaMeasure from 'components/FormaMeasure/FormaMeasure';

const Measure = () => {
  const [isImperial, setImperial] = useState(true);
  const togglerHandler = e => {
    if (e.currentTarget.className === 'active') {
      return;
    }
    setImperial(!isImperial);
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
          <button
            onClick={togglerHandler}
            className={isImperial ? 'active' : ''}
          >
            Imperial
          </button>
          <button
            onClick={togglerHandler}
            className={isImperial ? '' : 'active'}
          >
            Metric
          </button>
        </SwitchButtonContainer>

        <FormaMeasure units={isImperial} />
      </MeasureSection>
    </div>
  );
};

export default Measure;
