import { FC, ReactNode } from 'react';

export type CardProps = {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: Record<string, any>;
  children: ReactNode;
};

const Card: FC<CardProps> = ({ className = '', children, style = {} }) => (
  <div
    className={`p-12 border border-solid ${className}`}
    style={{
      border: '2px solid #034732',
      boxShadow: '0 10px 28px rgba(0,0,0,.08)',
      ...style,
    }}
  >
    {children}
  </div>
);

export default Card;
