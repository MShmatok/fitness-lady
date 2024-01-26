import React from 'react';
import { useMyContext } from 'js/useContext';
import { HeroContainer, MainTitle } from 'commonStyle/Hero.styled';
import { ExerciseSection } from '../exercise/Exercise.styled';

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
