import React from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [error, setError] = useState({})
    const [submitted, setSubmitted] = useState(false)

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
            <h1>SEND US A MESSAGE</h1>
            <p>Fill out this form to get in touch with us</p>
        </div>
        <div className="body">
            <div className="form-group">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Name" /> 
              <span>{errors.name && errors.name}</span>
            </div>

            <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" />
                <span>{errors.email && errors.email}</span>
            </div>

            <div className="form-group">
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Message"></textarea>
                <span>{errors.message && errors.message}</span>
            </div>

            <button type="submit">SUBMIT</button>
        </div>
    </form>
  )
}

export default ContactForm