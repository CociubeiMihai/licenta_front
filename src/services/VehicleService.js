import axios from "axios";
import { API } from "./UsersService";

export const findByCovid = (covid) => {
  return axios.get(API + `/vehicle/${covid}`);
};

export const removeVehicle = (id) => {
  return axios.post(API + `/vehicle/remove`, {
    id: id,
  });
};

export const saveVehicle = (id,nume,isCovid,file) => {
    return axios.post(API + `/vehicle/save`, {
      id: id,
      nume: nume,
      covid: isCovid,
      file:file
    });
  };

  export const disponibleVehicles = (appoiment) => {
    return axios.post(API + `/vehicle/disponible`, {
      data: appoiment.selectDate,
      t1: appoiment.startHour,
      t2: appoiment.endHour,
      covid: appoiment.covid
    });
  };
