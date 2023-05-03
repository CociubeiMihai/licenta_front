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
  });
  const [patient, setPatient] = useState([]);
  const [isPatient, setIsPatient] = useState(false);
  const [staf, setStaf] = useState([]);
  const [isStaff, setIsStaff] = useState(false);

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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
