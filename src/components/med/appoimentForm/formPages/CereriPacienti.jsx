import React, { useContext, useEffect, useState } from "react";
import "./pagesStyle.css";
import background from "../../../../images/foormPG1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../../navbar/Navbar";
import { findCererile, removeCerere } from "../../../../services/PatientRequesService";
import "../../../admin/ManageRoomsStyle.css";
import ReqCard from "../formComponents/ReqCard";
import img from "../../../../images/form.jpeg";
import FormContext from "../formComponents/FormContext";
import { useNavigate } from "react-router-dom";

function CereriPacienti() {
  const [cereri, setCereri] = useState([]);
  const formContext = useContext(FormContext);
  const navigate = useNavigate();
  useEffect(() => {
    findCererile().then((res) => {
      setCereri(res.data);
    });
  }, []);

  const handleResolve = (e) => {
    formContext.setPatient(e.appUser);
    formContext.setIsPatient(true);
    console.log(e);
    var minor = e.appUser.age < 18;
    var prezumptiv = e.diagnostic !== "";
    formContext.setValues({
      diagnostic: e.diagnostic,
      minor: minor,
      fever: e.febra,
      covid: e.contagios,
      recAppoint: e.reevaluare,
      presumtive: prezumptiv,
      isFmale: e.sexFeminin,
    });
    if (e.disease !== null) formContext.setIdDisease(e.disease.id);
    const currentPathname = window.location.pathname;
    const newPathname = currentPathname.replace("/requests", "/form");
    removeCerere(e.id)
    navigate(newPathname);
  };

  return (
    <div className="form-main-default">
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div style={{ paddingTop: "100px" }}>
          <div className="rooms-div">
            {cereri.map((row, index) => (
              <ReqCard
                key={index}
                image={img}
                data={row}
                submit={handleResolve}
                modify={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CereriPacienti;
