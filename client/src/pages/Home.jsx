import React from 'react'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Steps/>
      <Description/>
      <Testimonials/>
    </div>
  )
}

export default Home