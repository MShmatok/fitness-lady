import React from 'react';

import { ReactComponent as Back } from '../img/svg/general/back.svg';
import { ReactComponent as BackArrow } from '../img/svg/general/backArrow.svg';

import { ReactComponent as Lady1 } from '../img/svg/Home/lady_1.svg';
import { ReactComponent as Lady2 } from '../img/svg/Home/lady_2.svg';
import { ReactComponent as Lady3 } from '../img/svg/Home/lady_3.svg';
import { ReactComponent as Lady4 } from '../img/svg/Home/lady_4.svg';

// import { ReactComponent as Moon } from '../img/svg/moon.svg';

// import { ReactComponent as Pharmacy } from '../img/svg/pharmacy.svg';

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

    default:
      break;
  }
};

export default Icon;
