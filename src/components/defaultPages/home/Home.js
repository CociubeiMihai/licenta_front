import React from 'react'
import heroImg from '../../../images/homeImg.jpg'
import Specialities from '../specialities/Specialities'
import Navbar from '../../navbar/Navbar'
import Hero from '../componentsForPages/Hero'
import Footer from '../componentsForPages/footer/Footer'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero 
        cName = "hero"
        imagHero = {heroImg}
        title = "Your Life. Our speciality"
        text = "Chose yourself first"
        buttonText = "First appoiment"
        url = "/"
        btnClass = "show"
        />
        <Specialities/>
        <Footer />
    </div>
  )
}

export default Home