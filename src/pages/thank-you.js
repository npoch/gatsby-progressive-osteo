import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ThankYouStyles = styled.div`

`;

export default function ThankYouPage(){
  return <>
  <ThankYouStyles>
  <h1>Thank you!</h1>
  <p>Your form has been submitted.<br />
  <Link to="/">Click here</Link> to go back to the homepage.
  </p>
  </ThankYouStyles>
  </>
}