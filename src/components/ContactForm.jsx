import React, { useState } from 'react'

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
        } else {
            setError(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `The ${field} field is required`
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setError(newErrors)
            return
        }

        const res = await fetch('', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if(res.ok) {
            setSubmitted(true)
            setFormData({ name: '', email: '', message: '' })   
        }
    }

    if(submitted) {
        return <div className='informationbox'>
            <h2>Thank you for contacting us</h2>
            <p>Vi återkommer till dig så snart vi kan.</p>
            <button className="btn-green" onClick={handleOk}>OK</button>
        </div>
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

            <button type="submit">Make an appointment</button>
        </div>
    </form>
  )
}

export default ContactForm