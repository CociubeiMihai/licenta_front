import React, { useContext, useEffect, useState } from 'react'
import RoomCard from '../formComponents/RoomCard'
import FormContext from "../formComponents/FormContext";
import { findDisponibleRoom } from '../../../../services/RoomService';
import room from "../../../../images/room.jpg";
import "./pagesStyle.css";
import { saveAppoiment } from '../../../../services/AppoimentService';

function Pg3(props) {

  const formContext =  useContext(FormContext)
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    findDisponibleRoom(formContext.values).then((res) =>{
      setRooms(res.data)
    })
  },[formContext.values]);

  const handleSubmitAppoint = (e) => {
    console.log(formContext.values.selectDate)
    saveAppoiment(formContext.values.description,
      formContext.values.selectDate,
      formContext.values.startHour,
      formContext.values.endHour,
      e.id,
      formContext.staf,
      formContext.patient,
      formContext.values.diagnostic,
      formContext.values.fever,
      formContext.values.recAppoint,
      formContext.values.covid,
      ).then((res) =>{
        
    })
    console.log(formContext.values.selectDate)
  };
  

  return (
    <div className='pag-3'>
      <div className='rooms-div'>
       {rooms.map((row, index) => (
      <RoomCard 
        image = {room}
        data = {row}
        submit = {handleSubmitAppoint}
      />))}
      </div>
    </div>
  )
}

export default Pg3