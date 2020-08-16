import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';

const LogoContainer = styled.h1`
  display: inline-flex;
  padding: 3rem 0;
  margin: 0;

  font-family: 'CircularStd';
  font-weight: 600;
  font-size: 5em;

  ${media.small} {
    font-size: 9.6vw;
  }
`;

const Highlight = styled.span`
  color: ${palette.blue500};
`;

const Logo: React.FC<{}> = () => {
  return (
    <LogoContainer>
      <Highlight>amsan</Highlight>hwang
    </LogoContainer>
  );
}

export default Logo;