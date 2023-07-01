import React, { useEffect, useState } from 'react'
import heroImg from '../../../images/homeImg.jpg'
import Specialities from '../specialities/Specialities'
import Navbar from '../../navbar/Navbar'
import Hero from '../componentsForPages/Hero'
import Footer from '../componentsForPages/footer/Footer'

function Home() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [defaultUser, setDefaultUser] = useState(false)
  const [neLog, setNeLog] = useState(false)
  useEffect(() => {
    if(user === "" )
      setNeLog(true)
    else if(user.role.name === 'PATIENT'){
      setDefaultUser(true)
    }
  }, []); // Empty dependency array to run the effect only once
  return (
    <div>
        <Navbar/>
        {neLog &&
        <Hero 
        cName = "hero"
        imagHero = {heroImg}
        title = "Your Life. Our speciality"
        text = "Alege cea mai bună echipă"
        buttonText = "Contactează-ne"
        url = "/contact"
        btnClass = "show"
        />
        }
        {defaultUser &&
        <Hero 
        cName = "hero"
        imagHero = {heroImg}
        title = "Your Life. Our speciality"
        text = "Alege cea mai bună echipă"
        buttonText = "Prima programare"
        url = "/patient/appointment"
        btnClass = "show"
        />}
        { (!defaultUser && !neLog) && 
        <Hero 
        cName = "hero"
        imagHero = {heroImg}
        title = "Your Life. Our speciality"
        text = "Alege cea mai bună echipă"
        buttonText = "Prima programare"
        url = "/"
        btnClass = "hide"
        /> }
        <Specialities/>
        <Footer />
    </div>
  )
}

export default Home