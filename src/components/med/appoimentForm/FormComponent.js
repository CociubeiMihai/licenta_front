import React, { useContext, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Pg1 from "./formPages/Pg1.form";
import Pg2 from "./formPages/Pg2.form";
import "./FormConponentStyle.css";
import background from "../../../images/foormPG1.jpg"
import FormContext, { FormProvider } from "./formComponents/FormContext";
import Pg3 from "./formPages/Pg3";

function FormComponent() {
  const[page,setPage] = useState(1)
  const formContext =  useContext(FormContext)

  const increase = () => {
    setPage(page + 1)
  }

  const decrease = () => {
    setPage(page - 1)
  }

  const handleReset = () => {
    setPage(1);

  }

  return (
    <div className="form-main">
      <Navbar />
    
      <div className="form-pages">
        <FormProvider>
          {page === 1 ? 
            <Pg1 
            increase = {increase}
            /> : 
          page === 2 ? 
            <Pg2 
              increase = {increase}
              decrease = {decrease}
            /> : 
            <Pg3 
            appoimentSaved = {handleReset}
            />
          }
        </FormProvider>
      </div>
    </div>
  );
}

export default FormComponent;
