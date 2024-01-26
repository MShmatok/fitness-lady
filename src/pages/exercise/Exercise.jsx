import React from 'react';
import { useMyContext } from 'js/useContext';
import { useNavigate } from 'react-router';
import Icon from 'components/icon/Icon';
import { ExerciseSection, WrapperMain } from './Exercise.styled';
import {
  HeroContainer,
  MainDescription,
  MainTitle,
} from 'commonStyle/Hero.styled';

const library = [
  { exercise: '1', title: 'Hardly at all' },
  { exercise: '2', title: 'Fitness 1-2 times a week' },
  { exercise: '3', title: 'Fitness 3-5 times a week' },
  { exercise: '4', title: 'Fitness 5-7 times a week' },
];

const Exercise = () => {
  const { updateData } = useMyContext();
  const navigate = useNavigate();

  const handlerClick = exercise => {
    updateData({ exercise });
    navigate('/result', { replace: true });
  };

  return (
    <div className="container">
      <ExerciseSection>
        <HeroContainer>
          <MainTitle>Physical exercise</MainTitle>
          <MainDescription>
            Physical exercise means a lot for a woman who wants to lose kilos
            and works at the office
          </MainDescription>
        </HeroContainer>
        <h2>How active are you during the day?</h2>
        <WrapperMain>
          <div>
            <Icon name="activeGirl" width="173px" height="363px" />
          </div>
          <ul>
            {library.map(item => {
              return (
                <li key={item.exercise}>
                  <button
                    onClick={() => {
                      handlerClick(item.title);
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </WrapperMain>
      </ExerciseSection>
    </div>
  );
};

export default Exercise;
