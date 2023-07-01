import axios from "axios";
export const API = "https://localhost:8080";

export const allUsers = () => {
  return axios.get("https://localhost:8080/admin/users/all");
};

export const removeUser = (id) => {
  return axios.post(`https://localhost:8080/admin/users/remove/${id}`);
};

export const updateUser = (user) => {
  return axios.post(API + "/admin/users/modify", {
    id: user.id,
    name: user.name,
    password: user.password,
    title: user.title,
    description: user.description,
    online: user.online,
    email: user.email,
    role: {
      name: user.role.name,
    },
  });
};

export const usersByRole = (role) => {
  return axios.get(API + `/admin/users/getAllRols/${role}`);
};

export const findDisponibleUsersByRole = (appoiment, role) => {
  return axios.post(API + "/admin/users/findDisponible", {
    role: role,
    data: appoiment.selectDate,
    t1: appoiment.startHour,
    t2: appoiment.endHour,
  });
};

export const contactUs = (name, email, subject, mesaj) => {
  return axios.post(API + "/person/contact", {
    name: name,
    email: email,
    subject: subject,
    mesaj: mesaj,
  });
}
