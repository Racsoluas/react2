import React from 'react'
import ContactList from '../components/ContactList'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'

function Contact() {
  return (
    <main>
      <section className="top-section">
        <div className="container">
          <div className="top-wrapper">
            <ContactList />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bottom-section">
        <div className="container">
          <Map />
        </div>
      </section>
    </main>
  )
}

export default Contact