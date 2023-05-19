import axios from "axios";

const API = "https://localhost:8080/appointment";

export const saveAppoiment = (
  values,
  acomodationRoom,
  personal,
  patient,
  idDisease,
  operation
) => {
  return axios.post(API + "/save", {
    description: values.description,
    data: values.selectDate,
    begin: values.startHour,
    end: values.endHour,
    room: acomodationRoom,
    personal: personal,
    patient: patient,
    presumptiveDiagnosis: values.diagnostic,
    isFever: values.fever,
    isRecurring: values.recAppoint,
    isCovidContact: values.covid,
    idDisease: idDisease,
    operation: operation,
    days :values.nrDays
  });
};
