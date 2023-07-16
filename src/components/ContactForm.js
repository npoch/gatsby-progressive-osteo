import { navigate } from 'gatsby';
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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    // console.log("STATE_ONCHANGE: ", this.state);
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.name || !this.state.email || !this.state.message){
      return alert("Please complete all form fields.");
    }
    const form = e.target;
    // console.log('FORM_SUBMITTED: ', this.state);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  }

  render() {
  return <ContactFormStyles 
      name="contact" 
      method="POST" 
      netlify-honeypot="bot-field" 
      data-netlify="true"
      onSubmit={this.handleSubmit}
      action="/thank-you/" //Add a thank you page of some sort.
      >
        <p className="hidden">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="bot-field">
          Don’t fill this out if you’re human: <input name="bot-field" onChange={this.handleChange} />
        </label>
      </p>
      <fieldset>
        <p>
          <label htmlFor="name">
            Name: <input 
            type="text" 
            name="name" 
            id="name" 
            // value={values.name} 
            onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email: <input 
            type="email" 
            name="email" 
            id="email" 
            // value={values.email} 
            onChange={this.handleChange}
            />
          </label>
        </p>
      </fieldset>
      <p>
        <label htmlFor="message">
          Message: <textarea 
          type="textarea" 
          name="message" 
          id="message" 
          // value={values.message} 
          onChange={this.handleChange}
          ></textarea>
        </label>
      </p>
      <p>
        <button type="submit" id="submit">Send</button>
      </p>
    </ContactFormStyles>
  }
}