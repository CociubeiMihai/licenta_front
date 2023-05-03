import React from 'react'
import Navbar from '../../navbar/Navbar'
import Hero from '../componentsForPages/Hero'
import contactImg from "../../../images/contact.jpg"
import Footer from '../componentsForPages/footer/Footer'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Hero 
        cName = "hero-mid"
        imagHero = {contactImg}
        title = "Contact"
        btnClass = "hide"
        />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Contact