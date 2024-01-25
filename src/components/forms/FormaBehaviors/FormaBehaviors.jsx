import { ButtonBase } from 'CommonStyle/Button.styled';
import React, { useState } from 'react';
import InputBehavior from './InputBehavior';
import { FormaBehaviorsST } from './FormaBehaviors.styled';

const FormaBehaviors = ({ data, handlerSubmit }) => {
  const [selectedInputs, setSelectedInputs] = useState([]);

  const handleInputChange = event => {
    const selectedValue = event.target.value;

    // Якщо обраний четвертий інпут, зніміть вибір з інших
    if (selectedValue === data[data.length - 1].title) {
      setSelectedInputs([selectedValue]);
    } else {
      // Якщо обрано один з перших трьох, зніміть вибір з четвертого
      if (selectedInputs.includes(data[data.length - 1].title)) {
        setSelectedInputs([selectedValue]);
      } else {
        // Дозвольте вибирати один, два чи три перші інпути
        setSelectedInputs(prevSelected => {
          if (prevSelected.includes(selectedValue)) {
            // Якщо вже обрано, видаліть
            return prevSelected.filter(input => input !== selectedValue);
          } else {
            // Якщо ще не обрано, додайте
            return [...prevSelected, selectedValue];
          }
        });
      }
    }
  };
  const Submit = e => {
    e.preventDefault();
    handlerSubmit(selectedInputs);
  };

  const checkIncludes = title => selectedInputs.includes(title);
  return (
    <FormaBehaviorsST onSubmit={Submit}>
      {data.map(item => {
        return (
          <InputBehavior
            key={item.Behavior}
            title={item.title}
            icon={item.icon}
            checkIncludes={checkIncludes}
            handleInputChange={handleInputChange}
          />
        );
      })}

      <ButtonBase type="submit" disabled={!selectedInputs.length}>
        Continue
      </ButtonBase>
    </FormaBehaviorsST>
  );
};

export default FormaBehaviors;
