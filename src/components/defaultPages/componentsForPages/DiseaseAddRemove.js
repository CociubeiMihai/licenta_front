import React from 'react'
import "./RemoveAddPers.css"
import { Roles } from "../../../config/AppRoles";

function DiseaseAddRemove(props) {
  return (
    <div className='removeAddPers' style={props.style}>
    <b style={{ marginRight: "10px" }}>{props.data.name }</b>
    <i class={props.plus ? "fa-solid fa-plus" : "fa-solid fa-minus"} onClick = {() => props.onClick(props.data, props.plus)}></i>
    <i class="fa-solid fa-heart-circle-exclamation"></i>
    </div>
  )
}

export default DiseaseAddRemove