import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LogoContainer = styled.h1`
  display: inline-flex;
  padding: 3rem 0;
  margin: 0;

  font-family: 'CircularStd';
  font-weight: 600;
  font-size: 5em;
`;

const Keyword = styled.span`
  color: ${palette.blue500};
`;

interface LogoProps {
  keyword?: string;
}

const Logo: React.FC<LogoProps> = ({ keyword }) => {
  return (
    <LogoContainer>
      <Keyword>{keyword || 'woollim'}</Keyword>
      .in
    </LogoContainer>
  );
}

export default Logo;