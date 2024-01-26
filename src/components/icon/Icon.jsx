import React from 'react';

import { ReactComponent as Back } from '../../images/svg/general/back.svg';
import { ReactComponent as BackArrow } from '../../images/svg/general/backArrow.svg';

import { ReactComponent as Lady1 } from '../../images/svg/home/lady_1.svg';
import { ReactComponent as Lady2 } from '../../images/svg/home/lady_2.svg';
import { ReactComponent as Lady3 } from '../../images/svg/home/lady_3.svg';
import { ReactComponent as Lady4 } from '../../images/svg/home/lady_4.svg';

import { ReactComponent as Moon } from '../../images/svg/behaviors/moon.svg';
import { ReactComponent as Donut } from '../../images/svg/behaviors/donut.svg';
import { ReactComponent as Soda } from '../../images/svg/behaviors/soda.svg';
import { ReactComponent as Salt } from '../../images/svg/behaviors/salt.svg';
import { ReactComponent as Pizza } from '../../images/svg/behaviors/pizza.svg';
import { ReactComponent as Cross } from '../../images/svg/behaviors/cross.svg';

import { ReactComponent as ActiveGirl } from '../../images/svg/exercise/activeGirl.svg';

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

    case 'activeGirl':
      return <ActiveGirl className={className} width={width} height={height} />;

    default:
      break;
  }
};

export default Icon;
