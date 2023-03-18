import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    box-sizing: border-box;

  }
  
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  hr{
  
    background-color: white;
  }
.content{
  /* position: relative;
  top:50;
  left:50;
transform: translate(0%, 30%) */
}
.btn{
  margin-right: .31rem;
  
}
@keyframes text {
    50% {
        opacity: 0.1;
    }
}

@keyframes dash {
    to {
        stroke-dashoffset: 234;
    }
}



`;


export default GlobalStyles;

