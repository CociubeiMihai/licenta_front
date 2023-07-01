import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { findByCovid, removeVehicle, saveVehicle } from "../../services/VehicleService";
import RoomCard from "../med/appoimentForm/formComponents/RoomCard";
import ambulance from "../../images/ambulance.jpg";
import EditVehicleModal from "./modal/EditVehicleModal";
import VehicleCard from "./VehicleCard";

function ManageVehicles() {
  const [types, setTypes] = React.useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState([]);

  useEffect(() => {
    findByCovid(types).then((r) => {
      setVehicles(r.data);
    });
  }, []);
  const handleChange = (event, type) => {
    setTypes(type);
    findByCovid(type).then((r) => {
      setVehicles(r.data);
    });
  };

  const handleModify = (e) => {
    setOpen(true);
    setSelectedVehicle(e)
  };

  const handleClickPlus = () => {
    setOpen(true)
    setSelectedVehicle({...selectedVehicle, id:"", covid:false, nume:"", img:""})
  };
  const handleClose = () => setOpen(false);

  const handleSaveVehicle = (e) =>{
    console.log(selectedVehicle)
    saveVehicle(selectedVehicle.id,selectedVehicle.nume, selectedVehicle.covid,selectedVehicle.img).then(()=>{
      findByCovid(types).then((r) => {
        setVehicles(r.data);
      });
      setOpen(false)
    })
  }
  const handleRemove = (e) =>{
    removeVehicle(selectedVehicle.id).then(()=>{
      findByCovid(types).then((r) => {
        setVehicles(r.data);
      });
      setOpen(false)
    })
  }
  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="selectGroup">
          <label>Alege tipul de vehicul:</label>
          <ToggleButtonGroup
            color="primary"
            value={types}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value={true}>Contagios</ToggleButton>
            <ToggleButton value={false}>Ne contagios</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="rooms-div">
          {vehicles.map((row, index) => (
            <VehicleCard image={row.img} data={row} submit={handleModify} modify={true}/>
          ))}
          <i className="fa-regular fa-plus" onClick={handleClickPlus}></i>
        </div>
      </div>
      <EditVehicleModal 
        open={open}
        close={handleClose}
        vehicle={selectedVehicle}
        setData={setSelectedVehicle}
        onSave = {handleSaveVehicle}
        onRemove = {handleRemove}
      />
    </div>
  );
}

export default ManageVehicles;
