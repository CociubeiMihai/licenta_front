import "./EditUsersModalStyle.css"
import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { MenuItem, Select } from "@mui/material";
import { Roles } from "../../config/AppRoles";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function EditUsersModal(props) {

  return (
    <Modal
    open={props.open}
    onClose={() => props.close()}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      { props.open ?
        <Box sx={style}>
            <div className="comp">

              <label>Email</label>
              <input
                value={props.userData.email}
                
              />

              <label>Rol</label>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.userData.role.name}
              label="Age"
              onChange={(e) => props.setData({...props.userData, 
                                              role:{ ...props.userData.role, 
                                              "name": e.target.value }})}
              >
                {Roles.map((item,index) => {
                  return( <MenuItem key={index} value={item.capsName}>{item.name}</MenuItem>)
                  })}
              </Select>   
            </div>
            <div className="buttons-cls">
                  <button className="remove" onClick={()=> props.onRemove()} >Șterge</button>
                  <button className="saveCls" onClick={()=> props.onSave()}>Salvează</button>
                  <button className="cancel" onClick={() => props.close()}>Renunță</button>
              </div> 
        </Box>
      :<div></div>}
     </Modal>
  )
}

export default EditUsersModal