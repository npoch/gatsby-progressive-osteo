import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --teal: #02aaa8;
    --black: #2E2E2E;
    --drk-blue: #004d7b;
    --white: #fff;
    --grey: #efefef;
  }
  * {
    box-sizing: border-box;
    /* border: red solid 1px;
    & > * {
      border: green solid 1px;
      & > * {
        border: rebeccapurple solid 1px;
      }
    } */
  }
  html {
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
    overflow-x: hidden;
  }
  body {
    font-size: 2rem;
  }
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  button:not(.menu-item) {
    background: var(--grey);
    color: var(--black);
    border: 0;
    padding: 1rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--teal);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }
  .gatsby-image-wrapper img[src*=base64\\,] {
    /* image-rendering: -moz-crisp-edges; */
    image-rendering: pixelated;
  }
  hr {
    border: 0;
    height: 8px;
  }
  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;