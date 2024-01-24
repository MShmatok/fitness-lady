import React from 'react';

import { ReactComponent as Moon } from '../img/svg/moon.svg';
import { ReactComponent as Avocado } from '../img/svg/avocado.svg';
import { ReactComponent as Pharmacy } from '../img/svg/pharmacy.svg';

const Icon = ({ name, className, size }) => {
  switch (name) {
    case 'moon':
      return <Moon className={className} width={size} height={size} />;
    case 'avocado':
      return <Avocado className={className} width={size} height={size} />;
    case 'pharmacy':
      return <Pharmacy className={className} width={size} height={size} />;
    default:
      break;
  }
};

export default Icon;
