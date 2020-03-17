import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const ButtonContainer = styled.div<{ color: ColorType; size: ButtonSize; }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;

  ${props =>
    props.color === 'blue' &&
    css`
      background: ${palette.blue500};
      color: white;
    `}
  
  ${props =>
    props.size === 'small' &&
    css`
      height: 3rem;
      padding: 0 1.5rem;
      font-size: 1.5em;
    `}
  
  ${props =>
    props.size === 'medium' &&
    css`
      height: 3.75rem;
      padding: 0 1.75rem;
      font-size: 1.875em;
    `}
  
  ${props =>
    props.size === 'large' &&
    css`
      height: 4.6875rem;
      padding: 0 3rem;
      font-size: 2.344em;
    `}
`;

type ColorType = 'blue';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  color?: ColorType;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'blue',
  size = 'medium',
  ...rest
}) => {
  const htmlProps = rest as any;
  return (
    <ButtonContainer
      color={color}
      size={size}
      {...htmlProps}
      onClick={e => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}>
      {children}
    </ButtonContainer>
  );
}

export default Button;