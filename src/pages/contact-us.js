import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const ContactUsStyles = styled.div`

`;

export default function ContactUsPage(){
  return <ContactUsStyles>
  <h1>Contact Us</h1>
  <p>If you have further questions or requests, please reach out.</p>
  <ContactForm />
  </ContactUsStyles>
}