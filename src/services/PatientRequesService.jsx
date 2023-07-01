import axios from "axios";
import { API } from "./UsersService";

export const savePatientReq = (
  data,
  diagnostic,
  febra,
  reevaluare,
  contagios,
  idDisease,
  idUser,
  isFmale
) => {
  return axios.post(API + "/request", {
    data: data,
    diagnostic: diagnostic,
    febra: febra,
    reevaluare: reevaluare,
    contagios: contagios,
    idDisease: idDisease,
    idUser: idUser,
    sexFeminin: isFmale
  });
};

export const findCererile = () =>{return axios.get(API + "/request")}

export const removeCerere = (id) =>{return axios.delete(API + `/request/${id}`)}
