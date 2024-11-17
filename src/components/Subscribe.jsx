import React, { useState } from 'react'

function Subscribe() {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return regex.test(email) && email.length <= 100
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      try {
        const cleanEmail = email.trim()
        
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
          },
          body: JSON.stringify({ email: cleanEmail }),
        })

        if (response.ok) {
          setIsValid(true)
          setIsSubmitted(true)
          console.log('Prenumeration lyckades! E-post skickad till API:', cleanEmail)
        } else {
          throw new Error('Något gick fel vid prenumerationen')
        }
      } catch (error) {
        console.error('Fel:', error)
        setIsValid(false)
      }
    } else {
      setIsValid(false)
    }
  }

  return (
    <div className="subscribe">
      <div className="wrapper-sub">
        <div className="bell bell-sub" id="bell-1">
          <img src="/Images/bell-icon.svg" alt="Gul klocka" />
        </div>
        <div className="sub-text sub-text-1" id="text-1">
          <h1>Subscribe to our newsletter</h1>
        </div>
        {!isSubmitted && (
          <div>
            <h1 className="sub-text-2">Subscribe to our newaletter to stay informed about latest updates</h1>
          </div>
        )}
        <div className="input-container">
          {!isSubmitted ? (
            <>
              <div className="input-group" id="in-mail">
                <img className="envelope" src="/Images/bx-envelope.svg" alt="Kuvert" />
                <input 
                  className={`form-input email ${!isValid ? 'invalid' : ''}`}
                  type="email" 
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn-sub" onClick={handleSubmit}>Subscribe</button>
              </div>
              {!isValid && <p className="error-message">Vänligen ange en giltig e-postadress</p>}
            </>
          ) : (
            <p className="success-message">Tack för din prenumeration! Vi hör av oss snart.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Subscribe