import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-family: 'Open Sans', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p, li {
    letter-spacing: 0.5px;
    font-weight: 400;
  }
  h1 {
    font-weight: 900;
  }
  h2 {
    font-weight: 700;
  }
  h3 {
    font-weight: 500;
  }
  h4, h5, h6 {
    font-weight: normal;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  a {
    color: var(--black);
  }
  .center {
    text-align: center;
  }
`;

export default Typography;