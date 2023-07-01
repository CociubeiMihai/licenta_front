import React, { useEffect, useState, useContext } from "react";
import { findDisponibleUsersByRole } from "../../../../services/UsersService";
import ChoesePersonsModal from "../formComponents/ChoesePersonsModal";
import "./pagesStyle.css";
import FormContext from "../formComponents/FormContext";
import RemoveAddPers from "../../../defaultPages/componentsForPages/RemoveAddPers";
import { FiArrowLeftCircle,FiArrowRightCircle } from 'react-icons/fi';

function Pg2(props) {
  const [staffModal, setStaffModal] = useState(false);
  const [unselectedStaff, setUnselectedStaff] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState([]);
  const formContext = useContext(FormContext);
  const [searchRole, setSerarchRole] = useState("");

  useEffect(() => {
    if(formContext.isStaff) setSelectedStaff(formContext.staf)
  }, [formContext.patient]);

  const handleChoeseTeam = () => {
    setStaffModal(true);
  };

  const handleCloseStaffModal = () => setStaffModal(false);

  const handleAddStaff = (e) => {
    e.map((row) => {
      if(!selectedStaff.includes(row))
        selectedStaff.push(row);
    });
    handleCloseStaffModal();
  };

  const handlePageChange = (action) => {
    if (selectedStaff.length !== 0) formContext.setIsStaff(true);
    else formContext.setIsStaff(false);
    formContext.setStaf(selectedStaff)
    action();
  };

  const handleRoleChange = (roleName) => {
    setSerarchRole(roleName);
    findDisponibleUsersByRole(formContext.values, roleName).then((res) => {
      setUnselectedStaff(res.data);
    });
  };

  const handleRemoveSelectedStaff = (e) =>{
    setSelectedStaff(selectedStaff.filter(row => row !== e))
  }

  return (
    <div className="principal-div">
      <div className="team-form">
      <h1 style={{color: '#1c1e21'}}>
    <FiArrowLeftCircle className="arrow" onClick={() => handlePageChange(props.decrease)}/>
    Formează echipa
      <FiArrowRightCircle className="arrow" onClick={() => handlePageChange(props.increase)}/>  
    </h1>
        <span></span>
        <label>Echipa aleasă</label>
        <span></span>
          {selectedStaff.length === 0 ? (
            <i class="fa-solid fa-plus" onClick={handleChoeseTeam}></i>
          ) : (
            <div className="yourTeam">
              {selectedStaff.map((row, index) => (
                <RemoveAddPers
                  key={index}
                  data={row}
                  plus={false}
                  onClick={() => handleRemoveSelectedStaff(row)}
                />
              ))}
              <i class="fa-solid fa-plus" onClick={handleChoeseTeam}></i>
            </div>
          )}
      </div>
      <ChoesePersonsModal
        open={staffModal}
        close={handleCloseStaffModal}
        displayData={unselectedStaff}
        handleAdd={handleAddStaff}
        role={true}
        searchRole={searchRole}
        rolChange={handleRoleChange}
      />
    </div>
  );
}

export default Pg2;
