import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../images/treasment-analist.jpg";
import { authorize, register } from "../../services/LoginService";
import { UserComponents } from "../../config/RegisterComponents";
import LoginRegisterComponent from "./LoginRegisterComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    cnp: "",
    phoneNumber: "",
  };
  const [nume, setNume] = useState("");
  const [passwordNoMatch, setPasswordNoMatch] = useState(false);
  const [parola, setParola] = useState("");
  const [parola2, setParola2] = useState("");
  let navigate = useNavigate();
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(values);
    setHasBeenReseted(true)
    setValues(initialValues)
    toast.success("Cont realizat cu succes",{
    });
    toast.info("Încă un pas... verifică email-ul și validează contul", { autoClose: 10000 })
  };

  const handleClose = (e) =>{
    setValues(initialValues)
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      if (e.target.value != "" && values.confirmPassword != "") {
        if (e.target.value === values.confirmPassword) {
          setPasswordNoMatch(false);
          console.log("egale");
        } else {
          setPasswordNoMatch(true);
          console.log("ne egale");
        }
      }
    }
    if (e.target.name === "confirmPassword") {
      if (values.password != "" && e.target.value != "") {
        if (values.password === e.target.value) {
          setPasswordNoMatch(false);
          console.log("egale");
        } else {
          setPasswordNoMatch(true);
          console.log("ne egale");
        }
      }
    }
  };
  const [hasBeenReseted,setHasBeenReseted] = useState(false)


  return (
    <>
      <div className="register">
        <a href="/" className="home">
          <i className="fa-solid fa-house-user"></i>
        </a>
        <div className="center-register">
          <h1>Creează cont</h1>
          <div>
            <form onSubmit={handleSubmit}>
              {UserComponents.map((input) => (
                <LoginRegisterComponent
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  error={passwordNoMatch}
                  reset = {hasBeenReseted}
                />
              ))}
              <button>Înregistrează</button>
              <div className="signup_link">
                Aideja un cont?
                <a href="/signup">Autentifică-te</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Register;
