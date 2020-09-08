import React from 'react';
import ScrollTop from './ScrollTop';
import hovering from '../svg/hovering.svg';
import lit from '../svg/onclick.svg';

const ScrollTopButton = ({ distance = 700 } = {}) => {
  return (
    <ScrollTop
      text=""
      distance={distance}
      breakpoint={50000}
      speed={1000}
      bottomOffset={200}
      litSrc={lit}
      hoveringSrc={hovering}
      style={{ border: `none`, padding: 0, backgroundColor: 'transparent' }}
    />
  );
};

export default ScrollTopButton;
