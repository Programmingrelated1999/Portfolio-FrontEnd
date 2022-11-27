import React from 'react'

import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <p>Interested in working with me? You can send me an email by filling out the form below. If you prefer to reach out by other methods, 
        I am available on <a href = "https://github.com/Programmingrelated1999" target = "blank">GitHub</a> and <a href = "https://www.linkedin.com/in/kaung-htet-myat-400015173/" target = "blank">Linkedin</a>.
      </p>
      <h2 id='form-header'>Please Fill The Form</h2>
      <form className = "contact-form">
        <div className = "form-item">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
        </div>
        <div className = "form-item">
            <label for="name">Email:</label>
            <input type="email" id="email" name="email" />
        </div>
        <div className = "form-item">
            <label for="name">Subject:</label>
            <input type="text" id="subject" name="subject" />
        </div>
        <div className = "form-item">
            <label for="name">Message:</label>
            <textarea id="subject" name="subject" rows="6" cols="50"/>
        </div>
      </form>
    </div>
  )
}

export default Contact
