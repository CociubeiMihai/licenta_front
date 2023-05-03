import React from 'react'
import "./RemoveAddPers.css"
import { Roles } from "../../../config/AppRoles";

function RemoveAddPers(props) {

  const findClass = Roles.find(obj => {
    return obj.capsName === props.data.role.name
  })
  return (
    <div className='removeAddPers' style={props.style}>
        <b style={{ marginRight: "10px" }}>{props.data.firstName }</b>
        <b>{props.data.lastName === "null" ? null : props.data.lastName} </b>
        <i class={props.plus ? "fa-solid fa-plus" : "fa-solid fa-minus"} onClick = {() => props.onClick(props.data, props.plus)}></i>
       <i class = {findClass.icon}></i>
    </div>
  )
}

export default RemoveAddPers