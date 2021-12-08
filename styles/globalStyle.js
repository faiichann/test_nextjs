import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    //COLORS
    --White: #FFFFFF;
    --Black: #1C1C28;
    --Silver-200: #F2F2F5;
    --Silver-100: #FAFAFC;
    --Salmon-700: #ff7b73;
    --Salmon-400: salmon;
    --Salmon-200: #ffecec;

    //COLORS_GRAY
    --Gray-700: #1C1C28;
    --Gray-600: #28293D;
    --Gray-500: #3E4357;
    --Gray-400: #6E7282;
    --Gray-300: #80879B;
    --Gray-200: #9EA0AC;
    --Gray-100: #BEC3CE;
    //FONTS_SIZE
    --font-56: 56px;
    --font-32: 32px;
    --font-28: 28px;
    --font-22: 22px;
    --font-20: 20px;
    --font-18: 18px;
    --font-16: 16px;
    --font-14: 14px;
    //BREAKPOINT
    --mobile-small: (max-width: 300px);
    --mobile-medium: (max-width: 400px);
    --mobile-large: (max-width: 500px) ;

    //SHADOW
    --Shadow-light-bottom:  0 3px 6px #e0e0e0;
    --Shadow-medium-top: 0px -8px 16px #00000014;
  }
  body {
  margin: 0;
  padding: 0;
  font-family: 'Kanit', sans-serif;
  font-weight: 400;
  display: flex;
  position: absolute;
  }
`;

export default GlobalStyle;