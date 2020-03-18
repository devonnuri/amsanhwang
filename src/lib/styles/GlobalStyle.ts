import { createGlobalStyle } from 'styled-components';
import palette from './palette';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background: ${palette.blue25};
  font-family: 'Noto Sans KR', sans-serif;  
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
  font-weight: 800;
  font-style: normal;
  src: url(../fonts/CircularStd-Black.woff2);
}

@font-face {
  font-family: 'CircularStd';
  font-weight: 800;
  font-style: italic;
  src: url(../fonts/CircularStd-BlackItalic.woff2);
}

@font-face {
  font-family: 'CircularStd';
  font-weight: 600;
  font-style: normal;
  src: url(../fonts/CircularStd-Bold.woff2);
}

@font-face {
  font-family: 'CircularStd';
  font-weight: 600;
  font-style: italic;
  src: url(../fonts/CircularStd-BoldItalic.woff2);
}

@font-face {
  font-family: 'CircularStd';
  font-weight: 500;
  font-style: normal;
  src: url(../fonts/CircularStd-Medium.woff2);
}

@font-face {
  font-family: 'CircularStd';
  font-weight: 500;
  font-style: italic;
  src: url(../fonts/CircularStd-MediumItalic.woff2);
}

@font-face {
  font-family: 'CircularStd';
  font-weight: 400;
  font-style: normal;
  src: url(../fonts/CircularStd-Book.woff2);
}

@font-face {
  font-family: 'CircularStd';
  font-weight: 400;
  font-style: italic;
  src: url(../fonts/CircularStd-BookItalic.woff2);
}
`;

export default GlobalStyle;