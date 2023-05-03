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
        heading = "Covid-19 testing"
        text = 'If you have symptoms, test immediately. If you were exposed to COVID-19 and do not have symptoms, wait at least 5 full days after your exposure before testing. If you test too early, you may be more likely to get an inaccurate result. If you are in certain high-risk settings, you may need to test as part of a screening testing program. Consider testing before contact with someone at high risk for severe COVID-19, especially if you are in an area with a medium or high COVID-19 Community Level.'
        img1 = {tube}
        img2 = {img1}
       />

       <HomeData 
        className = "first-des-reverse"
        heading = "You come first"
        text = 'At Our Clinic, the approach to treatment is centered around the individual, placing emphasis on personal care before anything else. It is a truly human experience. Count on our experts to deliver an accurate diagnosis and the right plan for you the first time.'
        img1 = {img2}
        img2 = {img3}
       />

       <HomeData
        className = "first-des"
        heading = "More experience"
        text = "The million patients we treat each year prepares us to treat the one who matters most — you. All of our patient care, education and research are driven to make discoveries that can help heal you."
        img1 = {surgery}
        img2 = {img4}
       />
    </div>
  )
}   

export default Specialities