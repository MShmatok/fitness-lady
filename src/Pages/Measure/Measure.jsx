import {
  HeroContainer,
  MainDescription,
  MainTitle,
} from 'commonStyle/Hero.styled';
import React, { useState } from 'react';
import { MeasureSection, SwitchButtonContainer } from './Measure.styled';
import FormMeasure from 'components/formMeasure/FormMeasure';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from 'js/useContext';

const Measure = () => {
  const { data, updateData } = useMyContext();

  const [isImperial, setImperial] = useState(() => {
    return data.units === 'Imperial' || !data.units;
  });
  const navigate = useNavigate();

  const togglerHandler = e => {
    if (e.currentTarget.className === 'active') {
      return;
    }
    setImperial(!isImperial);
  };
  const handlerClick = (height, currentWeight) => {
    updateData({
      height,
      currentWeight,
      units: isImperial ? 'Imperial' : 'Metric',
    });
    navigate('/behaviors', { replace: false });
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

        <FormMeasure
          units={isImperial}
          handlerClick={handlerClick}
          dataInitial={data}
        />
      </MeasureSection>
    </div>
  );
};

export default Measure;
