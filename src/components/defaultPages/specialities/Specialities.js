import React from 'react'
import "./SpecialitiesSytyles.css"
import HomeData from '../home/HomeData'
import tube from '../../../images/tube.jpg'
import img1 from '../../../images/img1.jpg'
import img2 from '../../../images/puls.jpg'
import img3 from '../../../images/treasment-analist.jpg'
import surgery from '../../../images/surgery.jpg'
import img4 from '../../../images/holding-hands.jpg'

function Specialities() {
  return (
    <div className='specialities'>
        <h1>Starting plan</h1>

       <HomeData 
        className = "first-des"
        heading = "Testare Covid-19"
        text = 'Dacă aveți simptome, faceți imediat un test. Dacă ați fost expus la COVID-19 și nu aveți simptome, așteptați cel puțin 5 zile întregi de la expunere înainte de a face testul. Dacă faceți testul prea devreme, este posibil să aveți mai multe șanse să obțineți un rezultat inexact. Dacă vă aflați în anumite medii cu risc ridicat, este posibil să trebuiască să vă testați ca parte a unui program de testare de screening. Luați în considerare testarea înainte de a intra în contact cu o persoană cu risc ridicat de COVID-19 sever, în special dacă vă aflați într-o zonă cu un nivel comunitar mediu sau ridicat de COVID-19.'
        img1 = {tube}
        img2 = {img1}
       />

       <HomeData 
        className = "first-des-reverse"
        heading = "Tu ești pe primul loc"
        text = 'La Clinica noastră, abordarea tratamentului este centrată pe individ, punând accentul pe îngrijirea personală înainte de orice altceva. Este o experiență cu adevărat umană. Contați pe experții noștri pentru a vă oferi un diagnostic precis și un plan potrivit pentru dumneavoastră de prima dată.'
        img1 = {img2}
        img2 = {img3}
       />

       <HomeData
        className = "first-des"
        heading = "Mai multă experiență"
        text = "Milioanele de pacienți pe care îi tratăm în fiecare an ne pregătesc pentru a-i trata pe cei care contează cel mai mult - pe dumneavoastră. Toate activitățile noastre de îngrijire a pacienților, educație și cercetare sunt orientate spre descoperiri care vă pot ajuta să vă vindecați."
        img1 = {surgery}
        img2 = {img4}
       />
    </div>
  )
}   

export default Specialities