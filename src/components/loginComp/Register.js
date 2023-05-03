import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../images/treasment-analist.jpg";
import { authorize, register } from "../../services/LoginService";
import { UserComponents } from "../../config/RegisterComponents";
import LoginRegisterComponent from "./LoginRegisterComponent";

function Register() {
  const [nume, setNume] = useState("");
  const [passwordNoMatch, setPasswordNoMatch] = useState(false);
  const [parola, setParola] = useState("");
  const [parola2, setParola2] = useState("");
  let navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    cnp: "",
    phoneNumber: "",
  });


  const handleSubmit = (e) => {
    register(values)
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if(e.target.name === "password"){
    if(e.target.value != "" && values.confirmPassword != ""){
      if(e.target.value === values.confirmPassword){
        setPasswordNoMatch(false)
        console.log("egale")
      }
      else{setPasswordNoMatch(true)
        console.log("ne egale")}
    }
  }
  if(e.target.name === "confirmPassword"){
    if(values.password != "" && e.target.value != ""){
      if(values.password === e.target.value){
        setPasswordNoMatch(false)
        console.log("egale")
      }
      else{setPasswordNoMatch(true)
        console.log("ne egale")}
    }
  }

  };

  return (
    <div className="register">

      <a href="/" className="home">
        <i className="fa-solid fa-house-user"></i>
      </a>
      <div className="center-register">
        <h1>Register</h1>
        <div>
        <form onSubmit={handleSubmit}>
          {UserComponents.map((input) => (
            <LoginRegisterComponent
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              error = {passwordNoMatch}
            />
          ))}
          <button>Register</button>
          <div className="signup_link">
            Already a member?
            <a href="/signup">Login</a>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
