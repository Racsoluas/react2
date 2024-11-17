import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import AppFeatures from './components/AppFeatures'
import Hdiw from './components/Hdiw'
import Example from './components/Example'
import Testamonials from './components/Testamonials'
import FAQ from './components/FAQ'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

/*  test ändrar igen 2024-11-17  */

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Brands />
        <AppFeatures />
        <Hdiw />
        <Example /> 
        <Testamonials />
        <FAQ />
        <Subscribe /> 
      </main>
      <Footer />
    </div>
  )
}

export default App