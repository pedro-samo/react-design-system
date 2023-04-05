import React from 'react';
import { Spacing } from '@ds.e/foundation';

interface MarginProps {
  space?: keyof typeof Spacing,
  children: any,
  left?: boolean,
  right?: boolean,
  top?: boolean,
  bottom?: boolean,
}

const Margin: React.FC<MarginProps> = ({ space = 'xs', children, left, right, top, bottom }) => {
  let className = ``;

  if(!left && !right && !top && !bottom){
    className = `${className} dse-margin-${space}`;
  }
  if(left) {
    className = `${className} dse-margin-left-${space}`;
  }
  if(right) {
    className = `${className} dse-margin-right-${space}`;
  }
  if(top) {
    className = `${className} dse-margin-top-${space}`;
  }
  if(bottom) {
    className = `${className} dse-margin-bottom-${space}`;
  }

  return <div className={className}>
    {children}
  </div>;
};

export default Margin;
