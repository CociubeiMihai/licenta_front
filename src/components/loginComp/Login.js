import React, { useEffect } from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorize, sendEmailReset } from "../../services/LoginService";
import background from "../../images/about.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const [gresit, setGresit] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(""));
  });

  const handleSubmit = (e) => {
    authorize(email, parola).then((res) => {
      console.log(res.data);
      if (res.data === "Nu s-a gasit") {
        setGresit(true);
        toast.error("Credențiale greșite");
      } else if (!res.data.enabled) {
        toast.info("Vă rugăm să verificați adresa de email");
        setGresit(false);
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      }
    });
  };

  const handleForgot = () => {
    if (email === "") toast.info("Vă rugăm introduceți adresa de email");
    else {
      sendEmailReset(email);
      toast.success("Mail-ul a fost trimis la adresa dumneavoastră");
    }
  };
  return (
    <div className="login">
      <img alt="img" src={background} />
      <a href="/" className="home">
        <i className="fa-solid fa-house-user"></i>
      </a>
      <div className="center">
        <h1>Autentificare</h1>
        <form method="post">
          <div className="txt_field">
            <input
              className="fill"
              type="text"
              name="Email"
              value={email}
              errorr={gresit.toString()}
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
              value={parola}
              errorr={gresit.toString()}
              required
              onChange={(e) => setParola(e.target.value)}
            />
            <label>Parolă</label>
          </div>
          <div className="pass" onClick={handleForgot}>
            Ai uitat parola?
          </div>
          <input type="button" value="Autentificare" onClick={handleSubmit}></input>
          <div className="signup_link">
            Nu ai cont?
            <a href="/register">Creează cont</a>
          </div>
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

export default Login;
