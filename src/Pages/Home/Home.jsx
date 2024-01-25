import React from 'react';
import { CardList, HomeSection } from './Home.styled';
import {
  HeroContainer,
  MainDescription,
  MainTitle,
} from 'CommonStyle/Hero.styled';
import Card from './Item/Card';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from 'js/useContext';

const library = [
  { goal: '1', title: 'Lose Weight', icon: 'lady_1' },
  { goal: '2', title: 'Gain Muscle', icon: 'lady_2' },
  { goal: '3', title: 'Develop healthy habits', icon: 'lady_3' },
  { goal: '4', title: 'Develop healthy habits', icon: 'lady_4' },
];

const Home = () => {
  const { updateData } = useMyContext();

  // clearData();

  const navigate = useNavigate();
  const handlerClick = goal => {
    updateData({ goal });
    navigate('/measure', { replace: true });
  };
  return (
    <div className="container">
      <HomeSection>
        <HeroContainer>
          <MainTitle>The Goal</MainTitle>
          <MainDescription>
            Focus on the health benefits you need. <br />
            Balanced nutrition will let you achieve them
          </MainDescription>
        </HeroContainer>

        <h2>What are your goals?</h2>
        <CardList>
          {library.map(item => {
            return (
              <Card
                key={item.goal}
                title={item.title}
                icon={item.icon}
                onClick={() => {
                  handlerClick(item.title);
                }}
              />
            );
          })}
        </CardList>
      </HomeSection>
    </div>
  );
};

export default Home;
