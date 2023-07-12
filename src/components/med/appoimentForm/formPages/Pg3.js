import React, { useContext, useEffect, useState } from "react";
import RoomCard from "../formComponents/RoomCard";
import FormContext from "../formComponents/FormContext";
import { findDisponibleRoom } from "../../../../services/RoomService";
import room from "../../../../images/room.jpg";
import "./pagesStyle.css";
import { saveAppoiment } from "../../../../services/AppoimentService";
import { FiArrowLeftCircle,FiArrowRightCircle } from 'react-icons/fi';
import { BiSave } from 'react-icons/bi';

function Pg3(props) {
  const formContext = useContext(FormContext);
  const [rooms, setRooms] = useState([]);
  const [selected, setSelected] = useState("")

  useEffect(() => {
    findDisponibleRoom(formContext.values).then((res) => {
      setRooms(res.data);
    });
    setSelected(formContext.operationRoom)
  }, [formContext.values]);

  const handleSubmitAppoint = (e) => {
    saveAppoiment(
      formContext.values,
      formContext.acomodationId,
      formContext.staf,
      formContext.patient,
      formContext.idDisease,
      e.id
    ).then((res) => {});
    formContext.resetValues();
    props.reset();
  };

  const handlePageChange = (action) => {
    formContext.setOperationRoom(selected)
    
    action();
  };

  const handleSave = (action) => {
    formContext.setOperationRoom(selected)
    saveAppoiment(
      formContext.values,
      formContext.acomodationId,
      formContext.staf,
      formContext.patient,
      formContext.idDisease,
      selected,
      formContext.vehicle,
      formContext.atiId,
      formContext.values.isFmale
    ).then((res) => {});
    formContext.resetValues();
    action();
  };

  const handleSelectRoom = (e) => {
    setSelected(e.id);
    if(e.id === selected)
      setSelected("")
  };


  return (
    <div className="pag-3">
      <div className="titlu">
    <h1 >
    <FiArrowLeftCircle className="arrow" onClick={() => handlePageChange(props.decrease)}/>
    Alege sala de intervenție
      <BiSave className="arrow" onClick={() => handleSave(props.reset)} />
    </h1>
    </div>
      <div className="rooms-div">
        {rooms.map((row, index) => (
          <RoomCard image={row.img} data={row} submit={handleSelectRoom}  chosen= {selected === row.id? true : false}/>
        ))}
      </div>

    </div>
  );
}

export default Pg3;
