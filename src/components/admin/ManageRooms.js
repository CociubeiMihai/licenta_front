import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./ManageRoomsStyle.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { allRoomsByType, remove, update } from "../../services/RoomService";
import RoomCard from "../med/appoimentForm/formComponents/RoomCard";
import room from "../../images/room.jpg";
import EditRoomModal from "./modal/EditRoomModal";

function ManageRooms() {
  const [types, setTypes] = React.useState("CAZARE");
  const [rooms, setRooms] = useState([]);
  const [open, setOpen] = React.useState(false);
  const[selectedRoom, setSelectedRoom]= useState([]);

  useEffect(() => {
    allRoomsByType(types).then((r) => {
      setRooms(r.data);
    });
  }, []);

  const handleChange = (event, types) => {
    setTypes(types);
    allRoomsByType(types).then((r) => {
      setRooms(r.data);
    });
  };

  const handleModify = (e) => {
    setOpen(true);
    setSelectedRoom(e)
  };

  const handleSaveRoom = (e) =>{
    if(selectedRoom.slots < 1)
    alert("Trebuie sa avem minim un pat")
    else{
    update(selectedRoom.id,selectedRoom.name,selectedRoom.type,selectedRoom.slots,selectedRoom.img).then(()=>{
      allRoomsByType(types).then((r) => {
        setRooms(r.data);
      });
      setOpen(false);
    })}
  }

  const handleRemove = (e) =>{
    remove(selectedRoom.id).then(() => {
      allRoomsByType(types).then((r) => {
        setRooms(r.data);
      });
      setOpen(false);
    })
  }

  const handleClickPlus = () =>{
    setOpen(true);
    setSelectedRoom({...selectedRoom, id:"", name:"",slots:"", type:types, img:""})
  }

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="selectGroup">
          <label>Alege tipul de cameră:</label>
          <ToggleButtonGroup
            color="primary"
            value={types}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="CAZARE">Salon</ToggleButton>
            <ToggleButton value="CAZARE_COPII">Salon copii</ToggleButton>
            <ToggleButton value="OPERATIE">Consult/Operatie</ToggleButton>
            <ToggleButton value="ATI">ATI</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="rooms-div">
          {rooms.map((row, index) => (
            <RoomCard image={row.img} data={row} submit={handleModify} modify={true}/>
          ))}
           <i className= "fa-regular fa-plus"  onClick = {handleClickPlus}></i>
        </div>
      </div>
      <EditRoomModal
        open={open}
        close={handleClose}
        room={selectedRoom}
        setData={setSelectedRoom}
        onSave = {handleSaveRoom}
        onRemove = {handleRemove}
      />
    </div>
  );
}

export default ManageRooms;
