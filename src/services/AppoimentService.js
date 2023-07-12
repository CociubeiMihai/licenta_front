import axios from "axios";

const API = "https://localhost:8080/appointment";

export const saveAppoiment = (
  values,
  acomodationRoom,
  personal,
  patient,
  idDisease,
  operation,
  vehicleId,
  atiRoom,
  isFmale
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
    days: values.nrDays,
    vehicleId: vehicleId,
    atiRoom: atiRoom,
    genFeminin: isFmale
  });
};

export const findYourAppointments = (id) => {
  return axios.get(API + `/userAppointments/${id}`);
};

export const uploadIcsFile = async (file, userId) => {
  const formData = new FormData();
  formData.append('icsFile', file);
  formData.append('userId', userId);

  try {
    const response = await axios.post(API + '/upload-ics', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response.data);
    // Do something with the response from the backend
  } catch (error) {
    console.error(error);
    // Handle error
  }
};

export const removeAppointment = (id) => {
  return axios.post(API + `/remove`,{id: id});
};

export const externeaza = (id) => {
  return axios.post(API + `/externare`,{id: id});
};

export const recAppointment = (id) => {
  return axios.get(API + `/cerere/${id}`);
};