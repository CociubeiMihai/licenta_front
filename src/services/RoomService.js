import axios from "axios";

const API = "https://localhost:8080/room";

export const findDisponibleRoom = (appoiment) => {
  return axios.post(API + "/operation", {
    data: appoiment.selectDate,
    t1: appoiment.startHour,
    t2: appoiment.endHour,
  });
};

export const findDisponibleRoomsByDisease = (begin, days, idDisease) => {
  return axios.post("https://localhost:8080/room/disponible", {
    begin: begin,
    days: days,
    idDisease: idDisease,
  });
};
