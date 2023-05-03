import React, { useEffect, useState, useContext } from "react";
import { findDisponibleUsersByRole } from "../../../../services/UsersService";
import ChoesePersonsModal from "../formComponents/ChoesePersonsModal";
import "./pagesStyle.css";
import FormContext from "../formComponents/FormContext";
import RemoveAddPers from "../../../defaultPages/componentsForPages/RemoveAddPers";

function Pg2(props) {
  const [patientModal, setPatientModal] = useState(false);
  const [staffModal, setStaffModal] = useState(false);
  const [unselectedUsers, setUnselectedUsers] = useState([]);
  const [unselectedStaff, setUnselectedStaff] = useState([]);
  const [patient, setPatient] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState([]);
  const formContext = useContext(FormContext);
  const [searchRole, setSerarchRole] = useState("");

  useEffect(() => {
    if (formContext.isPatient) setPatient({ ...formContext.patient });
    if(formContext.isStaff) setSelectedStaff(formContext.staf)
  }, [formContext.patient]);

  const handleChoesePatient = () => {
    findDisponibleUsersByRole(formContext.values, "PATIENT").then((res) => {
      setUnselectedUsers(res.data);
      setPatientModal(true);
    });
  };

  const handleChoeseTeam = () => {
    setStaffModal(true);
  };

  const handleClose = () => setPatientModal(false);
  const handleCloseStaffModal = () => setStaffModal(false);

  const handleAddUser = (e) => {
    setPatient(e);
    handleClose();
  };

  const handleAddStaff = (e) => {
    e.map((row) => {
      if(!selectedStaff.includes(row))
        selectedStaff.push(row);
    });
    handleCloseStaffModal();
  };

  const handleRemoveUser = (e) => {
    setPatient([]);
  };

  const handlePageChange = (action) => {
    formContext.setPatient({ ...patient });
    if (patient.length !== 0) formContext.setIsPatient(true);
    else formContext.setIsPatient(false);
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
      <h1>Choese your patient and form your team</h1>
      <div className="team-form">
        <label>
          {patient.length === 0 ? "Choese your patient" : "Your patient is"}
        </label>
        {patient.length === 0 ? (
          <i class="fa-solid fa-plus" onClick={handleChoesePatient}></i>
        ) : (
          <div>
            <RemoveAddPers
              style={{ width: "200px", height: "60px" }}
              key="1"
              data={patient}
              plus={false}
              onClick={handleRemoveUser}
            />
          </div>
        )}
        <span></span>
        <label>Form your team</label>
        <span></span>
        <div className="team-component">
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
        <div className="buttons-div">
          <button onClick={() => handlePageChange(props.increase)}>Next</button>
          <button onClick={() => handlePageChange(props.decrease)}>Back</button>
        </div>
      </div>
      <ChoesePersonsModal
        open={patientModal}
        close={handleClose}
        displayData={unselectedUsers}
        handleAdd={handleAddUser}
        role={false}
      />
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
