import React from 'react'
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorize } from '../../services/LoginService';
import background from "../../images/about.jpg"

function Login() {

    const [email, setEmail] = useState("");
    const [parola, setParola] = useState("");
    let navigate = useNavigate();

    const handleSubmit = (e) => {
      authorize(email,parola).then((res) => {
        console.log(res.data)
        if(res.data === "Nu s-a gasit")
          alert("Gresit");
        else{
          navigate("/");
        }

      })
    }
    return (
            <div className="login">
              <img alt="img" src={background} />
              <a href='/' className='home'>
                <i className='fa-solid fa-house-user'></i>
              </a>
              <div className="center">
                <h1>Login</h1>
                <form method="post">
                  <div className="txt_field">
                    <input
                      className="fill"
                      type="text"
                      name="Email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span></span>
                    <label>Email</label>
                  </div>
    
                  <div className="txt_field">
                    <input
                      className="fill"
                      type="password"
                      name="password"
                      value={parola}
                      required
                      onChange={(e) => setParola(e.target.value)}
                    />
                    <span></span>
                    <label>Password</label>
                  </div>
                  <div className='pass'>Forgot Password?</div>
                  <input type="button" value="Login" onClick={handleSubmit}></input>
                  <div className='signup_link'>
                    Not a member? 
                    <a href='/register'>Singup</a>
                  </div>
                </form>
              </div>
            </div>
      );
}

export default Login