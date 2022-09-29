import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import styled from 'styled-components';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string;
  size?: keyof typeof sizes;
  children: ReactNode;
};

const StyledButton = styled.button`
  border: 1px solid #f1f1f1;
`;

const Button: FC<ButtonProps> = ({ children, className = '', size = 'default', ref, ...props }) => {
  return (
    <StyledButton
      className={`
        ${sizes[size]}
        ${className}
        bg-primary
        hover:bg-secondary
        rounded
        text-white
    `}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
