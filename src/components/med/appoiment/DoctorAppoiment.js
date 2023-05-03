import "./DoctorAppoimentStyle.css"
import React from 'react'
import AppoimentForm from "./AppoimentForm"
import Navbar from "../../navbar/Navbar"

function DoctorAppoiment() {

  return (
    <div>
        <Navbar />
        <div className="appoiment-component">
            <AppoimentForm 
            />
        </div>
    </div>
  )
}

export default DoctorAppoiment