import { useMyContext } from 'js/useContext';
import React from 'react';

const Behaviors = () => {
  const { data } = useMyContext();
  console.log(data);
  return <div>Behaviors</div>;
};

export default Behaviors;
