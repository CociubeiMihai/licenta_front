import axios from "axios";

const API = "https://localhost:8080/disease";

export const allTypes = () => {
  return axios.get(API + "/all/types");
};

export const allDiseases = () => {
  return axios.get(API + "/all/diseases");
};

export const allDiseasesID = () => {
  return axios.get(API + "/all/diseases/id");
};

export const saveType = (name) => {
  return axios.post(API + "/type", { str: name });
};

export const saveDisease = (id, name) => {
  return axios.post(API + "/subtype", { id: id, str: name });
};

export const saveIncompatibility = (id, uuidList) => {
  return axios.post(API + "/incompatibility", { id: id, diseaseTypes: uuidList });
};

export const getIncompatibility = (id) => {
  return axios.post(API + "/incompatible/types", { id: id});
};
