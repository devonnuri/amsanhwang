import { createGlobalStyle } from 'styled-components';
import palette from './palette';
import media from './media';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

body {
  margin: 0;
  padding: 0 20vw;
  box-sizing: border-box;

  background: ${palette.blue25};
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;

  ${media.small} {
    padding: 0;
  }
}

html, body, #root {
  width: 100%;
  height: 100%;
}

* {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: initial;
  text-decoration: none;
}


@font-face {
  font-family: 'CircularStd';
  font-weight: 600;
  font-style: normal;
  src: url(../fonts/CircularStd-Bold.woff2) format('woff2')
       url(../fonts/CircularStd-Bold.woff) format('woff')
       url(../fonts/CircularStd-Bold.ttf) format('truetype');
}

`;

export default GlobalStyle;