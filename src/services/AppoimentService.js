import axios from "axios";

const API = "https://localhost:8080/appointment";

export const saveAppoiment = (description, data, begin, end, room, personal,patient, presumtive, fever, recuring, covid) => {
    return axios.post(API + '/save', { description: description, 
        data: data,
        begin: begin,
        end: end,
        room: room,
        personal: personal,
        patient: patient,
        presumptiveDiagnosis : presumtive,
        isFever: fever,
        isRecurring: recuring,
        isCovidContact: covid,
     });
};
