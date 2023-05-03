import React, { useContext, useEffect, useState } from "react";
import { Inputs, groups } from "../../../../config/AppoimentFields";
import FormInput from "../../../defaultPages/componentsForPages/FormInput";
import "./pagesStyle.css";
import FormContext from "../formComponents/FormContext";
import RadioGroup from "../formComponents/RadioGroup";

function Pg1(props) {
  const formContext = useContext(FormContext);
  const [values, setValues] = useState({
    description: "",
    endHour: "",
    selectDate: "",
    startHour: "",
    fever: "",
    recAppoint: "",
    presumtive: "",
    covid: "",
    diagnostic: "",
  });

  useEffect(() => {
    setValues({ ...formContext.values });
  }, [formContext.values]);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    formContext.setValues({ ...values });
    props.increase();
    e.preventDefault();
  };

  function handleOptionChange(groupName, value) {
    setValues((values) => ({
      ...values,
      [groupName]: value,
    }));
  }
  return (
    <div className="principal-div-pag1">
      <h1>Insert details</h1>
      <div className="appoiment-form">
        <form onSubmit={handleSubmit}>
          {Inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {values["presumtive"] ? 
          <FormInput
              key={"diagnostic"}
              name = "diagnostic"
              type = "text"
              placeholder = {"Presumptive diagnostic"}
              label = "Presumptive diagnostic"
              value={values["diagnostic"]}
              onChange={onChange}
            />
            : null
          }
          {groups.map((group) => (
            <RadioGroup
              key={group.name}
              label={group.label}
              name={group.name}
              options={group.options}
              selectedOption={values[group.name]}
              onChange={(value) => handleOptionChange(group.name, value)}
            />
          ))}
          <button>Next</button>
        </form>
      </div>
    </div>
  );
}

export default Pg1;
