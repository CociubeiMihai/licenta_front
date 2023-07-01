import React, { useContext, useEffect, useState } from "react";
import RoomCard from "../formComponents/RoomCard";
import FormContext from "../formComponents/FormContext";
import { findDisponibleRoomAti } from "../../../../services/RoomService";
import room from "../../../../images/room.jpg";
import "./pagesStyle.css";
import { FiArrowLeftCircle,FiArrowRightCircle } from 'react-icons/fi';

function Atipg(props) {

    const formContext = useContext(FormContext);
    const [rooms, setRooms] = useState([]);
    const [selected, setSelected] = useState("")

    useEffect(() => {
        findDisponibleRoomAti(formContext.values).then((res) => {
          setRooms(res.data);
        });
        setSelected(formContext.atiId)
      }, [formContext.values]);
    
      const handleSelectRoom = (e) => {
        setSelected(e.id);
        if(e.id === selected)
          setSelected("")
      };
    

      const handlePageChange = (action) => {
        formContext.setAtiId(selected)
        action();
      };

  return (
    <div className="pag-3">
      <div className="titlu">
    <h1 >
    <FiArrowLeftCircle className="arrow" onClick={() => handlePageChange(props.decrease)}/>
      Alege camera pentru Anestezia și terapia intensivă
      <FiArrowRightCircle className="arrow" onClick={() => handlePageChange(props.increase)}/>  
    </h1>
    </div>
    <div className="rooms-div">
      {rooms.map((row, index) => (
        <RoomCard image={room} data={row} submit={handleSelectRoom} chosen= {selected === row.id? true : false} />
      ))}
    </div>

  </div>
  )
}

export default Atipg