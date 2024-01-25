import React from 'react';

import { ReactComponent as Back } from '../img/svg/general/back.svg';
import { ReactComponent as BackArrow } from '../img/svg/general/backArrow.svg';

import { ReactComponent as Lady1 } from '../img/svg/Home/lady_1.svg';
import { ReactComponent as Lady2 } from '../img/svg/Home/lady_2.svg';
import { ReactComponent as Lady3 } from '../img/svg/Home/lady_3.svg';
import { ReactComponent as Lady4 } from '../img/svg/Home/lady_4.svg';

import { ReactComponent as Moon } from '../img/svg/Behaviors/moon.svg';
import { ReactComponent as Donut } from '../img/svg/Behaviors/donut.svg';
import { ReactComponent as Soda } from '../img/svg/Behaviors/soda.svg';
import { ReactComponent as Salt } from '../img/svg/Behaviors/salt.svg';
import { ReactComponent as Pizza } from '../img/svg/Behaviors/pizza.svg';
import { ReactComponent as Cross } from '../img/svg/Behaviors/cross.svg';

const Icon = ({ name, className, width, height }) => {
  switch (name) {
    case 'back':
      return <Back className={className} width={width} height={height} />;
    case 'backArrow':
      return <BackArrow className={className} width={width} height={height} />;
    case 'lady_1':
      return <Lady1 className={className} width={width} height={height} />;
    case 'lady_2':
      return <Lady2 className={className} width={width} height={height} />;
    case 'lady_3':
      return <Lady3 className={className} width={width} height={height} />;
    case 'lady_4':
      return <Lady4 className={className} width={width} height={height} />;

    case 'moon':
      return <Moon className={className} width={width} height={height} />;
    case 'donut':
      return <Donut className={className} width={width} height={height} />;
    case 'soda':
      return <Soda className={className} width={width} height={height} />;
    case 'salt':
      return <Salt className={className} width={width} height={height} />;
    case 'pizza':
      return <Pizza className={className} width={width} height={height} />;
    case 'cross':
      return <Cross className={className} width={width} height={height} />;

    default:
      break;
  }
};

export default Icon;
