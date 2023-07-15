import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';

const ContactUsStyles = styled.div`

`;

export default function ContactUsPage(){

  return <>
  <Seo title={'Contact Us'} description={'Still have questions? Send us a message.'}></Seo>
  <ContactUsStyles>
  <h1>Contact Us</h1>
  <p>If you have further questions or requests, please reach out.</p>
  <ContactForm />
  </ContactUsStyles>
  </>
}