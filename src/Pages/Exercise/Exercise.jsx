import { useMyContext } from 'js/useContext';
import React from 'react';

const Exercise = () => {
  const { data } = useMyContext();
  // const navigate = useNavigate();

  console.log(data);

  return <div>Exercise</div>;
};

export default Exercise;
