import React from 'react'

function ContactList() {
  return (
    <div className='contact-section'>
        <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="icon-email">
          <img src="./Images/Email-icon.svg" alt="Email icon" />
        </div>
        <div className="contact-text">
          <h3>Email us</h3>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
        </div>
        <a href="#">Leave a message →</a>
      </div>
      <div className="contact-container">
        <div className="icon-careers">
            <img src="/Images/social-icon.svg" alt="Careers icon" />
        </div>
        <div className="contact-text">
          <h3>Careers</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus, ut in et fugit ducimus!</p>
        </div>
        <a href="#">Send an application →</a>
      </div>
    </div>
  )
}

export default ContactList