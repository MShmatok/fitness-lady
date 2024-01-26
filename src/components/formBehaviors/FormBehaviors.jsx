import React, { useState } from 'react';
import Input from './Input';
import { FormST } from './FormBehaviors.styled';
import { Button } from 'commonStyle/Button.styled';

const FormBehaviors = ({ data, handlerSubmit }) => {
  const [selectedInputs, setSelectedInputs] = useState([]);

  const handleInputChange = event => {
    const selectedValue = event.target.value;
    if (selectedValue === data[data.length - 1].title) {
      setSelectedInputs([selectedValue]);
    } else {
      if (selectedInputs.includes(data[data.length - 1].title)) {
        setSelectedInputs([selectedValue]);
      } else {
        setSelectedInputs(prevSelected => {
          if (prevSelected.includes(selectedValue)) {
            return prevSelected.filter(input => input !== selectedValue);
          } else {
            return [...prevSelected, selectedValue];
          }
        });
      }
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    handlerSubmit(selectedInputs);
  };

  const checkIncludes = title => selectedInputs.includes(title);

  return (
    <FormST onSubmit={onSubmit}>
      {data.map(item => {
        return (
          <Input
            key={item.Behavior}
            title={item.title}
            icon={item.icon}
            checkIncludes={checkIncludes}
            handleInputChange={handleInputChange}
          />
        );
      })}

      <Button type="submit" disabled={!selectedInputs.length}>
        Continue
      </Button>
    </FormST>
  );
};

export default FormBehaviors;
