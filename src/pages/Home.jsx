import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import AppFeatures from '../components/AppFeatures'
import Hdiw from '../components/Hdiw'
import Example from '../components/Example'
import Testamonials from '../components/Testamonials'
import FAQ from '../components/FAQ'
import Subscribe from '../components/Subscribe'



function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <AppFeatures />
      <Hdiw />
      <Example /> 
      <Testamonials />
      <FAQ />
      <Subscribe />
    </>
  )
}

export default Home