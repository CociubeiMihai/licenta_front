import { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
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
    nrDays:""
  });
  const [patient, setPatient] = useState([]);
  const [isPatient, setIsPatient] = useState(false);
  const [staf, setStaf] = useState([]);
  const [isStaff, setIsStaff] = useState(false);
  const [idDisease,setIdDisease] = useState("")
  const [acomodationId,setAcomodationId] = useState("")

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
        setAcomodationId
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
