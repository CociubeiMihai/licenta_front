import React, { useContext, useEffect, useState } from "react";
import { Inputs, groups } from "../../../../config/AppoimentFields";
import FormInput from "../../../defaultPages/componentsForPages/FormInput";
import "./pagesStyle.css";
import FormContext from "../formComponents/FormContext";
import RadioGroup from "../formComponents/RadioGroup";
import {
  allDiseases,
  allDiseasesID,
} from "../../../../services/DiseaseService";
import { MenuItem, Select } from "@mui/material";
import { findDisponibleRoomsByDisease } from "../../../../services/RoomService";

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
    nrDays: "",
    availableAcomodation: "",
  });

  const [diseases, setDiseases] = useState([]);
  const [selectedID, setSelectedId] = useState("");

  useEffect(() => {
    setValues({ ...formContext.values });
    setSelectedId(formContext.idDisease);
    allDiseasesID().then((res) => {
      setDiseases(res.data);
    });
  }, [formContext.values, formContext.idDisease]);

  const onChange = (e) => {
    if (selectedID !== "") {
      if (e.target.name === "selectDate" && values.nrDays !== ""){
        findDisponibleRoomsByDisease(
          e.target.value,
          values.nrDays,
          selectedID
        ).then((r) => {
          if (r.data.length === 0) {
            alert("Nu il putem caza");
            setValues({ ...values, "availableAcomodation": false });
          } else {
            console.log("aici")
            setValues({ ...values, [e.target.name]: e.target.value, "availableAcomodation": true });
          }
        });}
      if (e.target.name === "nrDays" && values.selectDate !== "")
        findDisponibleRoomsByDisease(
          values.selectDate,
          e.target.value,
          selectedID
        ).then((r) => {
          if (r.data.length === 0) {
            alert("Nu il putem caza");
            setValues({ ...values, "availableAcomodation": false });
          } else {
            setValues({ ...values, [e.target.name]: e.target.value, "availableAcomodation": true });
          }
        });
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values["hospitalization"]) {
      if (values["availableAcomodation"]) {
        formContext.setValues({ ...values });
        formContext.setIdDisease(selectedID);
        props.increase(true);
      } else {
        alert("Wee need a room disponible");
      }
    } else {
      formContext.setValues({ ...values });
      formContext.setIdDisease(selectedID);
      props.increase(false);
      e.preventDefault();
    }
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
          {values["presumtive"] ? (
            <FormInput
              key={"diagnostic"}
              name="diagnostic"
              type="text"
              placeholder={"Presumptive diagnostic"}
              label="Presumptive diagnostic"
              value={values["diagnostic"]}
              onChange={onChange}
            />
          ) : null}
          {values["hospitalization"] ? (
            <FormInput
              key={"nrDays"}
              name="nrDays"
              type="number"
              placeholder={"Days of accommodation"}
              label="Days of accommodation"
              value={values["nrDays"]}
              onChange={onChange}
            />
          ) : null}
          <div className="drop-div">
            <label>Patient Disease</label>
            <Select
              labelId="select-disease"
              id="select-disease"
              value={selectedID}
              label="Disease"
              onChange={(e) => setSelectedId(e.target.value)}
            >
              {diseases.map((line, index) => (
                <MenuItem key={index} value={line.id}>
                  {line.description}
                </MenuItem>
              ))}
            </Select>
          </div>
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
