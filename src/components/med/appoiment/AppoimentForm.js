import "./AppoimentFormStyle.css"
import { useState } from "react";
import * as React from 'react';
import FormInput from "../../defaultPages/componentsForPages/FormInput";
import {Inputs} from "../../../config/AppoimentFields.js"
import RemoveAddPers from "../../defaultPages/componentsForPages/RemoveAddPers";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Roles } from "../../../config/AppRoles";
import { findDisponibleUsersByRole } from "../../../services/UsersService";
import { saveAppoiment } from "../../../services/AppoimentService";

function AppoimentForm() {

  const [searchRole, setSerarchRole] = useState('');
  const [unselectedUsers, setUnselectedUsers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])
  const [values, setValues] = useState({
    description: "",
    endHour: "",
    selectDate: "",
    startHour: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    saveAppoiment(values.description,values.selectDate,values.startHour,values.endHour,"none",selectedUsers,selectedUsers.at(0)).then((res) =>{
      setValues({ description: "",
      endHour: "",
      selectDate: "",
      startHour: "",})
    })
    setSelectedUsers([])
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if(e.target.name !== "description")
      setSelectedUsers([])
      if(values.selectDate !== "" && values.endHour !== "" && values.startHour !== "" && searchRole !== "" )
      findDisponibleUsersByRole(values,searchRole).then((res) => {
        setUnselectedUsers(res.data);
    })
  };

  const handleAdd = (e, plus) => {
    if(plus){
      if(!selectedUsers.includes(e))
        setSelectedUsers([...selectedUsers, e ])
    }else{
      setSelectedUsers(selectedUsers.filter(row => row !== e))
    }
  }

  const rolChange = (e) =>{
    setSerarchRole(e)
    console.log(e)
    if(values.selectDate !== "" && values.endHour !== "" && values.startHour !== "" )
      console.log(e)
      findDisponibleUsersByRole(values,e).then((res) => {
        setUnselectedUsers(res.data);
    })
  }

  var selected = selectedUsers.map((row, index) => {
    return (
    <RemoveAddPers 
      key = {index}
      data = {row}
      onClick = {handleAdd}
      plus = {false}
    />
    )
  });

  return (
    <div className="appoiment">
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
        <button >Submit</button>
      </form>
      </div>
        <div className="allready-added">
        {selectedUsers.length > -1 ? selected : ""}
        </div>
          <div className="list">
            <div className="select-role">
            <FormControl fullWidth>
            <InputLabel id="label">Role</InputLabel>
            <Select
              labelId="label"
              id="demo-simple-select"
              value={searchRole}
              label="Role"
              style = {{
                width: 180,
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "left"
              }}
              onChange={(e) => rolChange(e.target.value)}
              >
                {Roles.map((item,index) => {
                  return( <MenuItem key={index} value={item.capsName}>{item.name}</MenuItem>)
                })}
              </Select> 
              </FormControl>
            </div>
            <div className="add-med">
              {unselectedUsers.map((row, index) => (
                <RemoveAddPers 
                  key = {index}
                  data = {row}
                  plus = {true}
                  onClick = {handleAdd}
                />
              ))}
            </div>
          </div>
    </div>
  )
}

export default AppoimentForm