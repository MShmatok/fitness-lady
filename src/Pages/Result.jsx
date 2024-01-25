import { useMyContext } from 'js/useContext';
import React from 'react';

import { HeroContainer, MainTitle } from 'CommonStyle/Hero.styled';
import { ExerciseSection } from './Exercise/Exercise.styled';

const Result = () => {
  const { data } = useMyContext();
  console.log(data);
  console.table(data);

  return (
    <div className="container">
      <ExerciseSection>
        <HeroContainer>
          <MainTitle>The results are displayed in the console</MainTitle>
        </HeroContainer>
      </ExerciseSection>
    </div>
  );
};

export default Result;
