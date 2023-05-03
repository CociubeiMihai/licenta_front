import React from 'react'
import Navbar from '../../navbar/Navbar'
import Hero from '../componentsForPages/Hero'
import aboutimg from '../../../images/about.jpg'
import Footer from '../componentsForPages/footer/Footer'
import AboutUs from './AboutUs'

function About() {
  return (
    <div>
        <Navbar/>
        <Hero 
        cName = "hero-mid"
        imagHero = {aboutimg}
        title = "About"
        btnClass = "hide"
        />
        <AboutUs 
          title = "Our History"
          data = "Since 1964, The University of Toledo Medical Center has been serving the health needs of the Toledo community. Established as a teaching hospital to train the future physicians and medical professionals of the greater Toledo region, UTMC remains dedicated to providing advanced care and healing in a patient-centered environment.  With access to the latest clinical trials and medical research we are committed to teaching the next generation of health-care professionals."
        />
        <AboutUs
          title = "Our Mission"
          data = "Our mission is to use the knowledge and training to diagnose, treat, and support patients through their healthcare journey. This may involve working closely with other healthcare providers, conducting research, and staying up-to-date on the latest advances in medicine."
        />
        <Footer />
    </div>
  )
}

export default About