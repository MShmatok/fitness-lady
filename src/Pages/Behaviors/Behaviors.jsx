import { useMyContext } from 'js/useContext';
import React from 'react';

const Behaviors = () => {
  const { data, updateData } = useMyContext();
  console.log(data);
  return <div>Behaviors</div>;
};

export default Behaviors;
