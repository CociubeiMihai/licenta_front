import axios from "axios";

const API = "https://localhost:8080";

const authorize = (email, password) => {
  return axios.post(API + "/login", { email: email, password: password });
};

const register = (data) => {
  return axios.post(API + "/settings/client/register", {
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password,
    email: data.email,
    phoneNumber: data.phoneNumber,
    address: data.address,
    cnp: data.cnp
  });
};

export const sendEmailReset = (email) => {
  return axios.get(API+ `/person/reqEmail/${email}`);
}

export const resetPassword = (token,email,newPassword) => {
  return axios.post(API+ `/person/changePassword`,{token:token,email:email,newPassword:newPassword});
}

export { authorize, register };
