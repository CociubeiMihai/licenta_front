import React, { useContext, useEffect, useState } from 'react'
import RoomCard from '../formComponents/RoomCard'
import FormContext from "../formComponents/FormContext";
import { findDisponibleRoom, findDisponibleRoomsByDisease } from '../../../../services/RoomService';
import room from "../../../../images/room.jpg";
import "./pagesStyle.css";
import { saveAppoiment } from '../../../../services/AppoimentService';

function Pg4(props) {
    const formContext =  useContext(FormContext)
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
      console.log(formContext.values.selectDate)
      console.log(formContext.values.nrDays)
      console.log(formContext.idDisease)
      findDisponibleRoomsByDisease(
        formContext.values.selectDate,
        formContext.values.nrDays,
        formContext.idDisease
      ).then((r) => {
        setRooms(r.data)
        console.log(r.data)
      })
      },[formContext.idDisease]);

      useEffect(() => {

      })

      const handleSubmitAppoint = (e) => {
        console.log(e)
        formContext.setAcomodationId(e.id)
        props.increase();
        e.preventDefault();
      };

  return (
    <div className='pag-3'>
      <h1>Chose the accommodation room</h1>
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

export default Pg4