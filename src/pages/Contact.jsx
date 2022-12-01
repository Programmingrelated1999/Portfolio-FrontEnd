import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';  

import "./Contact.css"

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const form = useRef();

  const changeName = (event) => {
    setName(event.target.value);
  }

  const changeEmail = (event) => {
    setEmail(event.target.value);
  }

  const changeSubject = (event) => {
    setSubject(event.target.value);
  }

  const changeMessage = (event) => {
    setMessage(event.target.value);
  }

  //Check if all required fields are filled out. 
  const checkFormValid = () => {
    if(name !== '' && email !== '' && subject !== '' && message !== ''){
      return true;
    } else{
      return false;
    }
  }

  //Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if(checkFormValid()){
      emailjs.sendForm('service_x1x6mve', 'template_kkfc9z5', form.current, 'LPakVuiwaRGe3t9DG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else{
      setError('One or more required fields missing. Please filled out all required fields marked by *');
      setTimeout(() => {
        setError('');
      }, 6000);
    }
  }  

  return (
    <div className='contact'>
      <h1>Contact</h1>
      <p>Interested in working with me? You can send me an email by filling out the form below. If you prefer to reach out by other methods, 
        I am available on <a href = "https://github.com/Programmingrelated1999" target = "blank">GitHub</a> and <a href = "https://www.linkedin.com/in/kaung-htet-myat-400015173/" target = "blank">Linkedin</a>.
      </p>
      <h2 id='form-header'>Please Fill The Form</h2>
      <h3>* Marks Required Field</h3>
      {error? <h3>{error}</h3>: null}
      <form className = "contact-form" ref = {form} onSubmit = {handleSubmit}>
        <div className = "form-item">
            <label htmlFor="name">Name <span>*</span></label>
            <input type="text" id="name" name="name" value = {name} onChange = {changeName}/>
        </div>
        <div className = "form-item">
            <label htmlFor="email">Email <span>*</span></label>
            <input type="email" id="email" name="email" value = {email} onChange = {changeEmail}/>
        </div>
        <div className = "form-item">
            <label htmlFor="subject">Subject <span>*</span></label>
            <input type="text" id="subject" name="subject" value = {subject} onChange = {changeSubject}/>
        </div>
        <div className = "form-item">
            <label htmlFor="message">Message <span>*</span></label>
            <textarea id="message" name="message" rows="6" cols="50" value = {message} onChange = {changeMessage}/>
        </div>
        <button type = "submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
