import axios from "axios";

const API = "https://localhost:8080/room";

export const findDisponibleRoom = (appoiment) => {
  return axios.post(API + "/operation", {
    data: appoiment.selectDate,
    t1: appoiment.startHour,
    t2: appoiment.endHour,
  });
};

export const findDisponibleRoomAti = (appoiment) => {
  return axios.post(API + "/ati", {
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

export const findDisponibleRoomsByDiseaseAndGen = (begin, days, idDisease,isFmale) => {
  return axios.post("https://localhost:8080/room/cazare/minori", {
    begin: begin,
    days: days,
    idDisease: idDisease,
    mom: isFmale
  });
};

export const allRooms = () => {
  return axios.get(API + "/all");
};

export const allRoomsByType = (type) => {
  return axios.get(API + `/type/${type}`);
}

export const saveRoom = (slots, name, roomType) => {
  return axios.post(API + "/save", {
    slots: slots,
    name: name,
    roomType: roomType,
  });
};

export const update = (id, name, type, slots,img) => {
  return axios.post(API + "/update", {
    id: id,
    name: name,
    type: type,
    slots: slots,
    img : img,
  });
};

export const remove = (id) => {
  return axios.post(API + "/remove", {
    id: id,
  });
};
