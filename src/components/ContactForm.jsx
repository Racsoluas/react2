import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactForm = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [error, setError] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const messageOptions = [
        'CEO',
        'Designer',
        'Developer',
        'Other'
    ]

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})  

        if (value.trim() === '') {
            setError(prevErrors => ({...prevErrors, [name]: `The ${name} field is required`}))
        } else if (name === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if (!emailRegex.test(value)) {
                setError(prevErrors => ({...prevErrors, [name]: 'Please enter a valid email address'}))
            } else {
                setError(prevErrors => ({...prevErrors, [name]: ''}))
            }
        } else {
            setError(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        // Validera alla fält innan submit
        let newErrors = {}
        if (!formData.name.trim() || formData.name.length < 2) {
            newErrors.name = 'Namnet måste vara minst 2 tecken långt'
        }
        if (!formData.email.trim()) {
            newErrors.email = 'E-post är obligatoriskt'
        } else {
            const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Vänligen ange en giltig e-postadress'
            }
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Specialist är obligatoriskt'
        }

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors)
            return
        }
        
        try {
            const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: formData.name,
                    email: formData.email,
                    specialist: formData.message
                })
            })

            if (!response.ok) {
                throw new Error('Något gick fel vid skickandet av formuläret')
            }

            setSubmitted(true)
            setFormData({ name: '', email: '', message: '' })
            setError({})
        } catch (error) {
            console.error('Error:', error)
            setError({ submit: 'Ett fel uppstod när formuläret skulle skickas' })
        }
    }

    if(submitted) {
        return (
            <div className='informationbox'>
                <FontAwesomeIcon 
                    icon="fa-solid fa-thumbs-up" 
                    bounce 
                    style={{ color: '#4CAF50', fontSize: '4rem' }}
                />
                <h2 className="success-contact">Thank you for contacting us</h2>                
                <button className="btn-green" onClick={handleOk}>OK</button>
            </div>
        )
    }

  return (
    <form onSubmit={handleSubmit} noValidate>
        <div className="Headline">
            <h1>Get Online Consultation</h1>
            <p>Fill out this form for better online consultation</p>
        </div>
        <div className="body-form">
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Name" 
                /> 
                <span style={{ color: '#ff0000' }}>{error.name && error.name}</span>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    id="email"
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="Email" 
                />
                <span style={{ color: '#ff0000' }}>{error.email && error.email}</span>
            </div>

            <div className="form-group">
                <label htmlFor="message">Choose specialist</label>
                <select 
                    id="message"
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                >
                    <option value="" disabled hidden>Select specialist</option>
                    {messageOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <span style={{ color: '#ff0000' }}>{error.message && error.message}</span>
            </div>

            <button type="submit" className='submit'>Make an appointment</button>
        </div>
    </form>
  )
}

export default ContactForm