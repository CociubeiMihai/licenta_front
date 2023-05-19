import React, { useContext, useEffect, useState } from "react";
import RoomCard from "../formComponents/RoomCard";
import FormContext from "../formComponents/FormContext";
import { findDisponibleRoom } from "../../../../services/RoomService";
import room from "../../../../images/room.jpg";
import "./pagesStyle.css";
import { saveAppoiment } from "../../../../services/AppoimentService";

function Pg3(props) {
  const formContext = useContext(FormContext);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    findDisponibleRoom(formContext.values).then((res) => {
      setRooms(res.data);
    });
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
  };

  return (
    <div className="pag-3">
      <h1>Chose the appointment room</h1>
      <div className="rooms-div">
        {rooms.map((row, index) => (
          <RoomCard image={room} data={row} submit={handleSubmitAppoint} />
        ))}
      </div>
    </div>
  );
}

export default Pg3;
