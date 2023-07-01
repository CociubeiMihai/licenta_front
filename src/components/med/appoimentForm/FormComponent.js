import React, { useContext, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Pg1 from "./formPages/Pg1.form";
import Pg2 from "./formPages/Pg2.form";
import "./FormConponentStyle.css";
import background from "../../../images/foormPG1.jpg";
import FormContext, { FormProvider } from "./formComponents/FormContext";
import Pg3 from "./formPages/Pg3";
import Pg4 from "./formPages/Pg4";
import Atipg from "./formPages/Atipg";
import TransportPage from "./formPages/TransportPage";

function FormComponent() {
  const [page, setPage] = useState(1);
  const formContext = useContext(FormContext);
  const [isAcomodation, setIsAcomodation] = useState(false);
  const [transport, setTransport] = useState(false);
  const [ati, setAti] = useState(false);
  const [atiDoneFlag, setAtiDoneFlag] = useState(false);
  const [transportDoneFlag, setTransportDoneFlag] = useState(false);
  const [cazareDoneFlag, setCazareDoneFlag] = useState(false);

  const increase = () => {
    setPage(page + 1);
  };

  const increaseHospitalization = (e, trans, ati) => {
    setPage(page + 1);
    setIsAcomodation(e);
    setTransport(trans);
    setAti(ati);
  };

  const decrease = () => {
    setPage(page - 1);
  };

  const handleReset = () => {
    setPage(1);
    setIsAcomodation(false);
    setAtiDoneFlag(false);
    setTransportDoneFlag(false);
    setCazareDoneFlag(false);
  };

  const handleDecreaseTr = () => {
    setTransportDoneFlag(false);
    if (atiDoneFlag) setAtiDoneFlag(false);
    else decrease();
  };

  const handleDecreaseCazare = () => {
    setCazareDoneFlag(false);
    if (transportDoneFlag) {
      setTransportDoneFlag(false);
    } else {
      if (atiDoneFlag) {
        setAtiDoneFlag(false);
      } else {
        decrease();
      }
    }
  };

  const decreaseAppointmentRoom = () => {
    if (cazareDoneFlag) {
      setCazareDoneFlag(false);
    } else if (transportDoneFlag) {
      setTransportDoneFlag(false);
    } else if (atiDoneFlag) {
      setAtiDoneFlag(false);
    } else decrease();
  };

  return (
    <div className={page === 1 ? "form-main" : "form-main-default"}>
      <Navbar />
      <div style={{backgroundImage: `url(${background})`,width: '100%', height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}} >

      <div className="form-pages">
        
          {page === 1 ? (
            <Pg1 increase={increaseHospitalization} />
          ) : page === 2 ? (
            <Pg2 increase={increase} decrease={decrease} />
          ) : page === 3 && ati && !atiDoneFlag ? (
            <Atipg
              increase={() => setAtiDoneFlag(true)}
              decrease={() => {
                setAtiDoneFlag(false);
                decrease();
              }}
            />
          ) : (atiDoneFlag && transport && !transportDoneFlag) ||
            (!ati && page === 3 && transport && !transportDoneFlag) ? (
            <TransportPage
              increase={() => setTransportDoneFlag(true)}
              decrease={handleDecreaseTr}
            />
          ) : (transportDoneFlag && isAcomodation && !cazareDoneFlag) ||
            (!cazareDoneFlag && !transport && atiDoneFlag && isAcomodation) ||
            (!ati &&
              !transport &&
              !cazareDoneFlag &&
              isAcomodation &&
              page === 3) ? (
            <Pg4
              increase={() => setCazareDoneFlag(true)}
              decrease={handleDecreaseCazare}
            /> //alege sala de cazare
          ) : (
            <Pg3
              increase={increase}
              decrease={decreaseAppointmentRoom}
              acomodation={isAcomodation}
              reset={handleReset}
            /> //ultima
          )}
      </div>
      </div>
    </div>
  );
}

export default FormComponent;
