import React, { useContext, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Pg1 from "./formPages/Pg1.form";
import Pg2 from "./formPages/Pg2.form";
import "./FormConponentStyle.css";
import background from "../../../images/foormPG1.jpg";
import FormContext, { FormProvider } from "./formComponents/FormContext";
import Pg3 from "./formPages/Pg3";
import Pg4 from "./formPages/Pg4";

function FormComponent() {
  const [page, setPage] = useState(1);
  const formContext = useContext(FormContext);
  const [isAcomodation, setIsAcomodation] = useState(false);

  const increase = () => {
    setPage(page + 1);
  };

  const increaseHospitalization = (e) => {
    setPage(page + 1);
    setIsAcomodation(e);
  };

  const decrease = () => {
    setPage(page - 1);
  };

  const handleReset = () => {
    setPage(1);
  };

  return (
    <div className={page === 1 ? "form-main" : "form-main-default"}>
      <Navbar />
      <img src={background} />

      <div className="form-pages">
        <FormProvider>
          {page === 1 ? (
            <Pg1 increase={increaseHospitalization} />
          ) : page === 2 ? (
            <Pg2 increase={increase} decrease={decrease} />
          ) : page === 3 ? (
            isAcomodation ? (
              <Pg4 increase={increase} decrease={decrease} />
            ) : (
              <Pg3 increase={increase} decrease={decrease} acomodation = {isAcomodation}/>
            )
          ) : (
            <Pg3 increase={increase} decrease={decrease} acomodation = {isAcomodation}/>
          )}
        </FormProvider>
      </div>
    </div>
  );
}

export default FormComponent;
