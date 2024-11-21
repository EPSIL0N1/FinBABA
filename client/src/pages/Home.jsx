import HeroSection from '../layout/Home_sections/HeroSection'
import Navbar from '../layout/navbar'
import AboutUsSection from '../layout/Home_sections/AboutUsSection'
import React, { useState } from 'react'
import Preloader from './Preloader'
import FeaturesSection from '../layout/Home_sections/FeaturesSection'
import FooterSection from '../layout/Home_sections/FooterSection'
const Home = () => {

  // const [loading, setLoading] = useState(false);

  return (
    <>  
        <Preloader/>
        <Navbar/>
        <HeroSection/>
        <AboutUsSection/>
        <FeaturesSection/>
        <FooterSection/>
    </>
  )
}

export default Home
