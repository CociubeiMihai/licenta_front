import axios from "axios";

const API = "https://localhost:8080/appointment";

export const findDisponibleRoom = (appoiment) => {
  return axios.post(API + "/room", {
    data: appoiment.selectDate,
    t1: appoiment.startHour,
    t2: appoiment.endHour,
  });
};
