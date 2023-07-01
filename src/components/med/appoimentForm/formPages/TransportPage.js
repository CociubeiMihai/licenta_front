import React, { useContext, useEffect, useState } from "react";
import { FiArrowLeftCircle,FiArrowRightCircle } from 'react-icons/fi';
import { disponibleVehicles } from "../../../../services/VehicleService";
import FormContext from "../formComponents/FormContext";
import RoomCard from "../formComponents/RoomCard";
import VehicleCard from "../../../admin/VehicleCard";

function TransportPage(props) {
  const formContext = useContext(FormContext);
  const [vehicles, setVehicles] = useState([]);
  const [selected, setSelected] = useState("")

  useEffect(() => {
    disponibleVehicles(formContext.values).then((res) => {
      setVehicles(res.data);
      });
      setSelected(formContext.vehicle)
    }, [formContext.values]);

    const handleSelectVehicle = (e) => {
      setSelected(e.id);
      if(e.id === selected)
        setSelected("")
    };

    const handlePageChange = (action) => {
        formContext.setVehicle(selected)
        action();
      };
  return (
    <div className="pag-3">
      <div className="titlu">
    <h1 >
    <FiArrowLeftCircle className="arrow" onClick={() => handlePageChange(props.decrease)}/>
    Transport Page
      <FiArrowRightCircle className="arrow" onClick={() => handlePageChange(props.increase)}/>  
    </h1>
    </div>
    <div className="rooms-div">
      {vehicles.map((row, index) => (
        <VehicleCard image={row.img} data={row} submit={handleSelectVehicle} chosen= {selected === row.id? true : false} modify={false}/>
      ))}
    </div>
    </div>
  );
}

export default TransportPage;
