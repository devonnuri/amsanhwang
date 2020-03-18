import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const LinkButtonContainer = styled.div<{ color: ColorType; }>`
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
      color: ${palette.blue500};
    `}
`;

type ColorType = 'blue';

interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  color?: ColorType;
}

const TextButton: React.FC<ButtonProps> = ({
  children,
  color = 'blue',
  ...rest
}) => {
  const htmlProps = rest as any;
  return (
    <LinkButtonContainer
      color={color}
      {...htmlProps}
      onClick={e => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        (e.target as HTMLButtonElement).blur();
      }}>
      {children}
    </LinkButtonContainer>
  );
}

export default TextButton;