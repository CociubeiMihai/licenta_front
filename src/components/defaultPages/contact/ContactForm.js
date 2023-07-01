import { contactUs } from "../../../services/UsersService";
import "./ContactFormStyles.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [nume, setNume] = useState("");
  const [email, setEmail] = useState("");
  const [subiect, setSubiect] = useState("");
  const [mesaj, seMesaj] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email);
    if(nume === "" || email ==="" || subiect === "" || email === ""){
      toast.error("Completați toate câmpurile")
    }else if(!isValidEmail){
      toast.warn("Email introdus greșit")
    }
      else{
    contactUs(nume,email,subiect,mesaj).then((res) =>{
      toast.success(res.data)
      setNume("")
      setEmail("")
      setSubiect("")
      seMesaj("")
    })}
  };
  return (
    <div className="form-container">
      <h1 style={{ color: "black" }}>Contactați-ne!</h1>
      <form
        style={{
          backgroundColor: "white",
          padding: "30px 60px 0px 60px",
          borderRadius: "10px",
          display: "flex",
          gap: "4px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Nume"
          value={nume}
          onChange={(e) => setNume(e.target.value)}
          style={{ width: "70%" }}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "70%" }}
          required
        />
        <input
          placeholder="Subiect"
          value={subiect}
          onChange={(e) => setSubiect(e.target.value)}
          style={{ width: "70%" }}
        />
        <textarea
          placeholder="Mesaj"
          value={mesaj}
          onChange={(e) => seMesaj(e.target.value)}
          rows="4"
          style={{ width: "70%", maxWidth: "70%", minWidth: "70%" }}
        ></textarea>
        <button
          style={{
            display: "block",
            textAlign: "center",
            margin: " auto",
            borderRadius: "4px",
            widows: "80%",
            backgroundColor: "#01959a",
            textDecoration: "none",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: "700",
            letterSpacing: "2px",
            marginLeft: "40px",
            marginRight: "40px",
            border: "none",
            width: "300px",
            height: "48px",
          }}
          onClick={handleClick}
        >
          Trimite
        </button>
      </form>
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
        theme="light"
      />
    </div>
  );
}

export default ContactForm;
