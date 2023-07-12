import React, { useContext, useEffect, useState } from "react";
import RoomCard from "../formComponents/RoomCard";
import FormContext from "../formComponents/FormContext";
import {
  findDisponibleRoomsByDisease,
  findDisponibleRoomsByDiseaseAndGen,
} from "../../../../services/RoomService";
import room from "../../../../images/room.jpg";
import "./pagesStyle.css";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

function Pg4(props) {
  const formContext = useContext(FormContext);
  const [rooms, setRooms] = useState([]);
  const [selected, setSelected] = useState("");
  console.log(formContext.values.isFmale);
  useEffect(() => {
    setSelected(formContext.acomodationId);
    console.log(formContext.values.minor)
    if (formContext.values.minor) {
      findDisponibleRoomsByDiseaseAndGen(
        formContext.values.selectDate,
        formContext.values.nrDays,
        formContext.idDisease,
        formContext.values.isFmale
      ).then((r) => {
        setRooms(r.data);
      });
    } else {
      findDisponibleRoomsByDisease(
        formContext.values.selectDate,
        formContext.values.nrDays,
        formContext.idDisease
      ).then((r) => {
        setRooms(r.data);
      });
    }
    setSelected(formContext.acomodationId);
  }, [
    formContext.idDisease,
    formContext.values.nrDays,
    formContext.values.selectDate,
  ]);

  const handleSelectRoom = (e) => {
    setSelected(e.id);
    if (e.id === selected) setSelected("");
  };

  const handlePageChange = (action) => {
    formContext.setAcomodationId(selected);
    action();
  };

  return (
    <div className="pag-3">
      <div className="titlu">
        <h1>
          <FiArrowLeftCircle
            className="arrow"
            onClick={() => handlePageChange(props.decrease)}
          />
          Alegeti camera de cazare
          <FiArrowRightCircle
            className="arrow"
            onClick={() => handlePageChange(props.increase)}
          />
        </h1>
      </div>
      <div className="rooms-div">
        {rooms.map((row, index) => (
          <RoomCard
            image={row.img}
            data={row}
            submit={handleSelectRoom}
            chosen={selected === row.id ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

export default Pg4;
