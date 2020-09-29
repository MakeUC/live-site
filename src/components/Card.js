import React from 'react';

const Card = ({ className, children, style = {} }) => (
  <div
    className={`pa4-ns pa5-m pa5-l pa3 rounded-lg border border-solid ${className}`}
    style={{
      borderColor: '#8174ff',
      boxShadow: '0 10px 28px rgba(0,0,0,.08)',
      ...style
    }}
  >
    {children}
  </div>
);

export default Card;
