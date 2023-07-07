import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: 'Open Sans', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: var(--black);
    line-height: 1.4;
  }
  p, li {
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 1.8rem;
  }
  h1 {
    font-weight: 900;
    font-size: 3.2rem;
  }
  h2 {
    font-weight: 700;
    font-size: 2.8rem;
  }
  h3 {
    font-weight: 500;
    font-size: 2.0rem;
  }
  h4 {
    font-size: 1.8rem;
  }
  h5 {
    font-size: 1.6rem;
  }
  h6 {
    font-size: 1.2rem;
  }
  h4, h5, h6 {
    font-weight: normal;
    color: gray;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  a {
    color: var(--black);
    font-size: 1.8rem;
  }
  .center {
    text-align: center;
  }
`;

export default Typography;