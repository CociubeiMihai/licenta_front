import axios from "axios";

const API = "https://localhost:8080/disease";

export const allTypes = () => {
  return axios.get(API + "/all/types");
};

export const saveType = (name) => {
  return axios.post(API + "/type", { str: name });
};

export const saveDisease = (id, name) => {
  return axios.post(API + "/subtype", { id: id, str: name });
};

export const saveIncompatibility = (id, uuidList) => {
  return axios.post(API + "/subtype", { id: id, uuidList: uuidList });
};
