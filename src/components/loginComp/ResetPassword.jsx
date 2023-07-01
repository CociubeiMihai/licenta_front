import React, { useEffect } from "react";
import "./Login.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authorize, resetPassword, sendEmailReset } from "../../services/LoginService";
import background from "../../images/about.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
    const [email, setEmail] = useState("");
    const [parola, setParola] = useState("");
    const [parola1, setParola1] = useState("");
    const [token, setToken] = useState("");
    let navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const tokenuRL = params.get('token');
      console.log(tokenuRL)
      setToken(tokenuRL)
    }, [location]);

    const handleSubmit = () =>{
        if(parola !== parola1)
            toast.error("Parolele nu coincid")
        else if(parola === "" || email === "" || parola1 === "" ||token === "" )
            toast.warning("Completați toate câmpurile")
        else
            resetPassword(token,email,parola).then((res) =>{
                toast.info(res.data)
                navigate("/signup");
            })
    }
  return (
    <div className="login">
      <img alt="img" src={background} />
      <a href="/" className="home">
        <i className="fa-solid fa-house-user"></i>
      </a>
      <div className="center">
        <h1>Resetare parolă</h1>
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
            <label>Email</label>
          </div>

          <div className="txt_field">
            <input
              className="fill"
              type="password"
              name="password"
              value={parola1}
              required
              onChange={(e) => setParola1(e.target.value)}
            />
            <label>Parolă nouă</label>
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
            <label>Confirmă parola</label>
          </div>
          <input type="button" value="Reset" onClick={handleSubmit}></input>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ResetPassword;
