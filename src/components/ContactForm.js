import React, { useState } from 'react';
import styled from 'styled-components';
import useForm from '../utils/useForm';

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
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    console.log('FORM SUBMITTED');
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // gather all the data
    const body = {
      name: values.name,
      email: values.email,
      message: values.message,
    };
    // 4. Send this data the a serevrless function when they check out
    const res = await fetch(`/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(body).toString(),
      }
    );
      console.log(res);
      console.log(res.body);
      console.log(await res.text());
    // const text = JSON.parse(await res.text());

    // // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false); // turn off loading
      setError(text.message);
    } else {
      // it worked!
      setLoading(false);
      setMessage('Your message has been sent. We will get back to you shortly.');
      navigate("/thank-you/")
    }
  }
  
  if(loading) {
    return <p>Loading...</p>
  }
  if(message){
    return <p>{message}</p>
  }
  if(error){
    return <>
    <p>{error}</p>
    <p>Please try calling us at: +1(647)770-2967</p>
    </>
  }

  return <ContactFormStyles 
  name="contact" 
  method="POST" 
  netlify-honeypot="bot-field" 
  data-netlify="true"
  onSubmit={handleSubmit}
  action="#" //Add a thank you page of some sort.
  >
    <p className="hidden">
    <input type="hidden" name="form-name" value="contact" />
    <label htmlFor="bot-field">
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>
  <fieldset>
    <p>
      <label htmlFor="name">
        Name: <input type="text" name="name" id="name" value={values.name} onChange={updateValue} />
      </label>
    </p>
    <p>
      <label htmlFor="email">
        Email: <input type="email" name="email" id="email" value={values.email} onChange={updateValue} />
      </label>
    </p>
  </fieldset>
  <p>
    <label htmlFor="message">
      Message: <textarea type="textarea" name="message" id="message" value={values.message} onChange={updateValue}></textarea>
    </label>
  </p>
  <p>
    <button type="submit" id="submit">Send</button>
  </p>
</ContactFormStyles>
}