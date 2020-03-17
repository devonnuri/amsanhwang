import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LogoContainer = styled.h1`
  display: inline-flex;
  padding: 2rem 0;
  margin: 0;

  font-family: 'CircularStd';
  font-weight: 600;
  font-size: 6em;
`;

const Keyword = styled.span`
  color: ${palette.blue500};
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <Keyword>woollim</Keyword>
      .in
    </LogoContainer>
  );
}

export default Logo;