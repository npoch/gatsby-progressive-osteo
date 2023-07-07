import React from 'react';
import styled from 'styled-components';

const ContactFormStyles = styled.form`
  border: 1px solid grey;
  border-radius: 12px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  & > p {
    grid-column: 1 / 4;
    width: 100%;
  }
  .hidden {
    display: none;
  }
  fieldset {
    border: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column: 1 / 4;
    padding: 0;
  }
  input,
  textarea {
    display: grid;
    padding: 5px;
    line-height: 1.6;
    width: 90%;
    margin: 10px 0;
  }
  textarea {
    width: 94.7%;
    min-height:300px;
  }
  label {
    font-weight: 700;
  }
  button {
    width: 200px;
    margin: 0 20px;
  }
`;

export default function ContactForm() {
  return <ContactFormStyles name="contact" method="POST" netlify-honeypot="bot-field" netlify>
    <p class="hidden">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>
  <fieldset>
    <p>
      <label>
        Name: <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Email: <input type="email" name="email" />
      </label>
    </p>
  </fieldset>
  <p>
    <label>
      Message: <textarea name="message"></textarea>
    </label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</ContactFormStyles>
}