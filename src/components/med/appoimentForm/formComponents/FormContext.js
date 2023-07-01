import React, { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialValues = {
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
    minor: "",
    isFmale: "",
  };

  const [values, setValues] = useState(initialValues);
  const [patient, setPatient] = useState([]);
  const [isPatient, setIsPatient] = useState(false);
  const [staf, setStaf] = useState([]);
  const [isStaff, setIsStaff] = useState(false);
  const [idDisease, setIdDisease] = useState("");
  const [acomodationId, setAcomodationId] = useState("");
  const [atiId,setAtiId] = useState("")
  const [operationRoom, setOperationRoom] = useState("")
  const [vehicle, setVehicle] = useState("")

  const resetValues = () => {
    setValues(initialValues);
    setPatient([]);
    setIsPatient(false);
    setStaf([]);
    setIsStaff(false);
    setIdDisease("");
    setAcomodationId("");
    setAtiId("")
    setOperationRoom("")
    setVehicle("")
  };

  return (
    <FormContext.Provider
      value={{
        setValues,
        values,
        patient,
        setPatient,
        isPatient,
        setIsPatient,
        staf,
        setStaf,
        isStaff,
        setIsStaff,
        idDisease,
        setIdDisease,
        acomodationId,
        setAcomodationId,
        resetValues,
        atiId,
        setAtiId,
        operationRoom,
        setOperationRoom,
        setVehicle,
        vehicle,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
