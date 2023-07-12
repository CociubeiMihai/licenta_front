import React, { useContext, useEffect, useState } from "react";
import { Inputs, groups, minor, parinte } from "../../../../config/AppoimentFields";
import FormInput from "../../../defaultPages/componentsForPages/FormInput";
import "./pagesStyle.css";
import FormContext from "../formComponents/FormContext";
import RadioGroup from "../formComponents/RadioGroup";
import {
  allDiseases,
  allDiseasesID,
} from "../../../../services/DiseaseService";
import { MenuItem, Select } from "@mui/material";
import { findDisponibleRoomsByDisease } from "../../../../services/RoomService";
import RemoveAddPers from "../../../defaultPages/componentsForPages/RemoveAddPers";
import ChoesePersonsModal from "../formComponents/ChoesePersonsModal";
import { findDisponibleUsersByRole } from "../../../../services/UsersService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { recAppointment } from "../../../../services/AppoimentService";

function Pg1(props) {
  const formContext = useContext(FormContext);
  const [patient, setPatient] = useState([]);
  const [unselectedUsers, setUnselectedUsers] = useState([]);
  const [patientModal, setPatientModal] = useState(false);
  const [values, setValues] = useState({
    description: "",
    endHour: "",
    selectDate: "",
    startHour: "",
    fever: "",
    recAppoint: "",
    presumtive: "",
    covid: "",
    diagnostic: "",
    nrDays: "",
    availableAcomodation: "",
  });

  const [diseases, setDiseases] = useState([]);
  const [selectedID, setSelectedId] = useState("");

  useEffect(() => {
    setValues({ ...formContext.values });
    setSelectedId(formContext.idDisease);
    allDiseasesID().then((res) => {
      setDiseases(res.data);
    });
    if (formContext.isPatient) setPatient({ ...formContext.patient });
  }, [formContext.values, formContext.idDisease, formContext.isPatient]);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      availableAcomodation: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values["hospitalization"]) {
      if (values["availableAcomodation"]) {
        formContext.setValues({ ...values });
        formContext.setIdDisease(selectedID);
        formContext.setPatient({ ...patient });
        if (patient.length !== 0) formContext.setIsPatient(true);
        else formContext.setIsPatient(false);
        props.increase(true,values["transport"] === true? true : false,values["ati"] === true? true : false);
      } else {
        alert("Wee need a room disponible");
      }
    } else {
      formContext.setValues({ ...values });
      formContext.setIdDisease(selectedID);
      props.increase(false,values["transport"] === true? true : false,values["ati"] === true? true : false);
      e.preventDefault();
      formContext.setPatient({ ...patient });
    if (patient.length !== 0) formContext.setIsPatient(true);
    else formContext.setIsPatient(false);
    }
  };

  function handleOptionChange(groupName, value) {
    if (groupName === "recAppoint" && value && patient !== "")
      recAppointment(patient.id).then((rez) => {
        console.log(rez.data)
        if (rez.data.diagnostic != "") {
          setValues({
            ...values,
            ["diagnostic"]: rez.data.diagnostic,
            ["presumtive"]: true,
            [groupName]: value,
          });
          toast.info("Câmpurile au fost actualizate cu succes");
        } else {
          toast.warn("Nu ați avut diagnostic la ultimul consult");
          toast.info(
            "Dacă aveți acum un nou diagnostic vă rugăm să îl introduceți",
            { autoClose: 10000 }
          );
        }
        setSelectedId(rez.data.idDesease);
      });
    setValues((values) => ({
      ...values,
      [groupName]: value,
    }));
  }

  const handleChoesePatient = () => {
    if(values.selectDate === "")
    toast.warn("Pentru a vă asigura că pacientul este disponibil vă rugăm alegeți data programării", { autoClose: 10000 })
    findDisponibleUsersByRole(values, "PATIENT").then((res) => {
      setUnselectedUsers(res.data);
      setPatientModal(true);
    });
  };
  const handleRemoveUser = (e) => {
    setPatient([]);
  };
  const handleAddUser = (e) => {
    setPatient(e);
    setValues({ ...values, minor: e.age < 18 });
    handleClose();
  };
  const handleClose = () => setPatientModal(false);
  return (
    <div className="principal-div-pag1">
      <h1>Creează programarea</h1>
      <div className="appoiment-form">
        <form onSubmit={handleSubmit}>
          <div className="team-form">
            <label>
              {patient.length === 0 ? "Alege un pacient" : "Pacientul este"}
            </label>
            {patient.length === 0 ? (
              <i className="fa-solid fa-plus" onClick={handleChoesePatient}></i>
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
          </div>
          {Inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {values["presumtive"] ? (
            <FormInput
              key={"diagnostic"}
              name="diagnostic"
              type="text"
              placeholder={"Presumptive diagnostic"}
              label="Presumptive diagnostic"
              value={values["diagnostic"]}
              onChange={onChange}
            />
          ) : null}
          {values["hospitalization"] && (
            <FormInput
              key={"nrDays"}
              name="nrDays"
              type="number"
              placeholder={"Days of accommodation"}
              label="Days of accommodation"
              value={values["nrDays"]}
              onChange={onChange}
            />
          )}
          <div className="drop-div">
            <label>Patient Disease</label>
            <Select
              labelId="select-disease"
              id="select-disease"
              value={selectedID}
              label="Disease"
              onChange={(e) => setSelectedId(e.target.value)}
            >
              {diseases.map((line, index) => (
                <MenuItem key={index} value={line.id}>
                  {line.description}
                </MenuItem>
              ))}
            </Select>
          </div>
          {groups.map((group) => (
            <RadioGroup
              key={group.name}
              label={group.label}
              name={group.name}
              options={group.options}
              selectedOption={values[group.name]}
              onChange={(value) => handleOptionChange(group.name, value)}
            />
          ))}
             {((values["minor"] || patient.age < 18) && values["hospitalization"]) && (
            <RadioGroup
              key={parinte.name}
              label={parinte.label}
              name={parinte.name}
              options={parinte.options}
              selectedOption={values[parinte.name]}
              onChange={(value) => handleOptionChange(parinte.name, value)}
            /> )}
          <button>Next</button>
        </form>
      </div>
      <ChoesePersonsModal
        open={patientModal}
        close={handleClose}
        displayData={unselectedUsers}
        handleAdd={handleAddUser}
        role={false}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Pg1;
