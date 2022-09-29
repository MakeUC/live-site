import { FC, ReactNode } from 'react';

export type LabelTextProps = {
  className: string;
  children: ReactNode;
};

const LabelText: FC<LabelTextProps> = ({ children, className = '' }) => (
  <p className={`uppercase tracking-wider ${className}`}>{children}</p>
);

export default LabelText;
